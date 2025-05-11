export const makeMetaDescription=(text = '', maxLen = 160)=> {
    if (text.length <= maxLen) return text;
    let truncated = text.slice(0, maxLen);
    const lastSpace = truncated.lastIndexOf(' ');
    if (lastSpace > 0) {
      truncated = truncated.slice(0, lastSpace);
    }
    return truncated;
  }

  const STOP_WORDS = new Set([
    'a','an','and','the','of','in','to','for','with','on','by','is','it','this',
    'that','from','as','are','at','be','or','was','were','which','you','your','but','being','Being'
  ]);

  function generateNgrams(tokens, maxN = 3) {
    const ngrams = [];
    for (let n = 1; n <= maxN; n++) {
      for (let i = 0; i + n <= tokens.length; i++) {
        const gram = tokens.slice(i, i + n).join(' ');
        ngrams.push(gram);
      }
    }
    return ngrams;
  }


  export const extractMultiWordsKeywords=(text, maxKeywords = 10)=> {
    if (typeof text !== 'string' || !text.trim()) return [];
  
    // 1) Normalize & split into words
    const tokens = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, ' ')
      .split(/\s+/)
      .filter(w => w.length > 2 && !STOP_WORDS.has(w));
  
    // 2) Generate 1- to 3-grams
    const allGrams = generateNgrams(tokens, 3);
  
    // 3) Filter out any n-grams that begin or end with a stop-word
    const candidateGrams = allGrams.filter(gram => {
      const parts = gram.split(' ');
      return !STOP_WORDS.has(parts[0]) && !STOP_WORDS.has(parts[parts.length - 1]);
    });
  
    // 4) Count frequencies
    const freqMap = candidateGrams.reduce((map, g) => {
      map[g] = (map[g] || 0) + 1;
      return map;
    }, {});
  
    // 5) Sort & take the top N
    return Object.entries(freqMap)
      .sort(([, aCount], [, bCount]) => bCount - aCount)
      .slice(0, maxKeywords)
      .map(([gram]) => gram);
  }
export const extractSingleKeywords=(text, maxKeywords = 10) =>{
    if (typeof text !== 'string' || !text.length) return [];
  
    // 1) Normalize & split into words
    const words = text
      .toLowerCase()
      // replace non-letters with spaces
      .replace(/[^a-z0-9]+/g, ' ')
      .split(/\s+/)
      .filter(w => w.length > 2 && !STOP_WORDS.has(w));
  
    // 2) Count frequencies
    const freqMap = words.reduce((map, w) => {
      map[w] = (map[w] || 0) + 1;
      return map;
    }, {});
  
    // 3) Sort by descending frequency and take top N
    return Object.entries(freqMap)
      .sort(([, aCount], [, bCount]) => bCount - aCount)
      .slice(0, maxKeywords)
      .map(([word]) => word);
  }

  export const formatTitle = (slug: string): string => {
      return slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    };
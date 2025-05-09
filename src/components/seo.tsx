// lib/seo.ts
import { Metadata } from 'next';

interface GenerateMetadataParams {
  title: string;
  description: string;
  slug: string;        // e.g. "blog/my-article" (no leading slash)
  image?: string;      // absolute or `/`-prefixed path
  keywords?: string[]; // optional array of page-specific keywords
  siteName?: string;   // defaults to your site’s name
  locale?: string;     // e.g. "en_US"
  author?: string;     // e.g. "Jane Doe" or "@twitterHandle"
}

export function generatePageMetadata({
  title,
  description,
  slug,
  image = '/pettro-img.png',
  keywords = [],
  siteName = 'Pettro',
  locale = 'en_US',
  author,
}: GenerateMetadataParams): Metadata {
  const canonicalUrl = `https://www.pettro.co/${slug.replace(/^\/+/, '')}`;

  return {
    title,
    description,
    keywords,
    // Tell crawlers which URL is canonical
    alternates: { canonical: canonicalUrl },

    // Standard Meta
    metadataBase: new URL('https://www.pettro.co'),
    authors: author ? [{ name: author }] : undefined,

    // Open Graph for Facebook, LinkedIn, etc.
    openGraph: {
      type: 'article',
      title,
      description,
      url: canonicalUrl,
      siteName,
      locale,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      site: '@PettroCo',
      creator: author ?? '@PettroCo',
    },
  };
}



// // lib/seo.ts
// import { Metadata } from 'next';

// interface GenerateMetadataParams {
//   title: string;
//   description: string;
//   slug: string; // e.g., "/blog/my-article"
//   image?: string;
// }

// export function generatePageMetadata({
//   title,
//   description,
//   slug,
//   image = '/pettro-img.png',
// }: GenerateMetadataParams): Metadata {
//   const fullUrl = `https://www.pettro.co/${slug}`;

//   return {
//     title: `${title}`,
//     description,
//     openGraph: {
//       title,
//       description,
//       url: fullUrl,
//       images: [
//         {
//           url: image,
//           width: 1200,
//           height: 630,
//         },
//       ],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title,
//       description,
//       images: [image],
//     },
//   };
// }

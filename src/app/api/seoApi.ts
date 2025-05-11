import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase/initFirebase';

export async function getBlogPost(collectionName: string, documentId: string) {
  try {
    const docRef = doc(db, collectionName, documentId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      };
    } else {
      console.warn('No such document found.');
      return null;
    }
  } catch (error) {
    console.error('Error fetching document:', error);
    return null;
  }
}


export async function getCategoryTitle(categoryId: string, subcategoryId: string) {
  try {
    const q = query(
      collection(db, "view-all-seo"),
      where("categoryId", "==", categoryId),
      where("subcategoryId", "==", subcategoryId),
    );

    const snapshot = await getDocs(q);
    if (snapshot.empty) {
      console.warn("No content found for given category and subcategory.");
      return [];
    }
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error fetching content:", error);
    return [];
  }
}

function transformCategoryData(data) {
  const result = [];

  data.forEach((item) => {
    item.subcategories
      ?.filter((sub) => sub.toLowerCase() !== "supplements") // Exclude "Supplements"
      .forEach((sub) => {
        result.push({
          category: item.id,
          subcategory: sub,
        });
      });
  });

  return result;
}

// will open when suplement data added

// function transformCategoryData(data) {
//   const result = [];

//   data.forEach((item) => {
//     item.subcategories?.forEach((sub) => {
//       result.push({
//         category: item.id,
//         subcategory: sub,
//       });
//     });
//   });

//   return result;
// }

export async function getAllCategorySubcategoryPairs() {
  try {
    const categoriesRef = collection(db, "categories");
    const snapshot = await getDocs(categoriesRef);

    const allowed = ["horses", "cats", "dogs", "birds"];

    const categories = snapshot.docs
      .filter((doc) => allowed.includes(doc.id)) // or doc.data().name if you store name separately
      .map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

    const transformed = transformCategoryData(categories);
    return transformed;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

// will open this and regenerate sitemap when all categories data added

// export async function getAllCategorySubcategoryPairs() {
//   try {
//     const categoriesRef = collection(db, "categories");
//     const snapshot = await getDocs(categoriesRef);

//     const categories = snapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     const transformed = transformCategoryData(categories);
//     return transformed;
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     return [];
//   }
// }

export async function getAllProductIds(): Promise<string[]> {
  const snapshot = await getDocs(collection(db, 'content'));
  return snapshot.docs.map((doc) => doc.id);
}

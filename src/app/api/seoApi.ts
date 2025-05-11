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

import { doc, getDoc } from 'firebase/firestore';
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

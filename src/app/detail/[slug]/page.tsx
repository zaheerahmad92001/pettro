import { Metadata } from 'next';
import { generatePageMetadata } from '@/components/seo';
import BlogDetail from './BlogDetailClient';
import { getAllProductIds, getBlogPost } from '@/app/api/seoApi';
import {extractMultiWordsKeywords, extractSingleKeywords, makeMetaDescription } from '@/app/functions';



export async function generateMetadata({ params }): Promise<Metadata> {
  const slug = params.slug as string;
  const documentId = slug
  const collectionName ='content'
  const response = await getBlogPost(collectionName , documentId)

  const firstTextContent = response?.content?.find((data) => data?.type === "heading");
  const categoryImage = response?.content?.find((data) => data?.type === "image");
  const paragraph = response?.content?.find((data) => data?.type === "paragraph");
  const headingText = response?.content
  ?.filter((data) => data?.type === "heading")
  ?.map((data) => data?.value)
  ?.join(', ');


  const heading = firstTextContent?.value;
  const petImage = categoryImage?.src;
  const description = paragraph?.value

  const shortText = makeMetaDescription(description);
  const MultiWordsKeywords = extractMultiWordsKeywords(description, 60);
  const MultiWordsKeywordsFromHeading = extractMultiWordsKeywords(headingText, 60);
  const SinglWordKeyword = extractSingleKeywords(description, 60);
  const allKeywords = [...MultiWordsKeywords, ...SinglWordKeyword ,...MultiWordsKeywordsFromHeading];
  const uniqueKeywords = Array.from(new Set(allKeywords));


  return generatePageMetadata({
    title: heading,
    description:shortText,
    slug: `/detail/${slug}}`,
    image: '/pettro-img.png',
    keywords:uniqueKeywords,
    author:'pettro.co'
  });
}

export async function generateStaticParams() {
  const allPairs = await getAllProductIds();
  return allPairs?.map((item) => {
    return({
    slug: encodeURIComponent(item)
  })}
);
}


export default function Page({ params }: { params: { slug: string } }) {
  return <BlogDetail slug={params.slug} />;
}


// "use client";
// import { useParams } from "next/navigation";
// import { BaseHeading } from "@/components/heading";
// import PettroCard from "@/components/pettroCard";
// import ProductCard from "@/components/productCard";
// import React, { useEffect, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchRelatedContent } from "@/redux/features/relatedArticalsAction";
// import { fetchDocumentById } from "@/redux/features/detailAction";
// import Loader from "@/components/Loader";
// import { AppDispatch, RootState } from "@/redux/store";

// export interface FetchParams {
//   categoryId: string;
//   subcategoryId: string;
// }

// export interface Category {
//   id: string;
//   name: string;
//   [key: string]: unknown;
// }

// export interface ContentBlock {
//   type: string;
//   value: string;
// }

// export interface ContentItem {
//   id: string;
//   categoryId: string;
//   subcategoryId: string;
//   content: ContentBlock[];
//   createdAt?: unknown;
//   [key: string]: unknown;
// }


// const BlogDetail = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const { relatedArticals, loading } = useSelector((state: RootState) => state.relatedArticals);
//   const { productData } = useSelector((state: RootState) => state.detail);

//   const params = useParams();
//   const id = params.slug;

//   const isDataAvailable = productData && productData?.content?.length > 0;

//   const prevIdsRef = useRef<{
//     categoryId: string | null;
//     subcategoryId: string | null;
//   }>({
//     categoryId: null,
//     subcategoryId: null,
//   });

//   useEffect(() => {
//     const fetchRelatedData = async () => {
//       if (!isDataAvailable || !productData) return;

//       const categoryId = productData?.categoryId;
//       const subcategoryId = productData?.subcategoryId;

//       const prev = prevIdsRef.current;
//       const isSame =
//         prev.categoryId === categoryId && prev.subcategoryId === subcategoryId;

//       if (isSame) return;

//       prevIdsRef.current = { categoryId, subcategoryId };
//       await dispatch(fetchRelatedContent({ categoryId, subcategoryId }));
//     };

//     fetchRelatedData();
//   }, [dispatch, productData, isDataAvailable]);

//   // fetching detail
//   useEffect(() => {
//     const fetchDetail = async () => {
//       if (typeof id === "string") {
//         dispatch(
//           fetchDocumentById({ collectionName: "content", documentId: id })
//         );
//       }
//     };
//     if (productData && Object.keys(productData).length === 0) {
//       fetchDetail();
//     }
//   }, [dispatch, id, productData]);

//   return (
//     <div className="mx-0 sm:mx-[5%] md:mx-[20%]">
//       {isDataAvailable ? (
//         <>
//           {productData?.content?.map((item, index) => (
//             <ProductCard key={index} index={index} item={item} />
//           ))}
//           <div className="mt-16 px-4 sm:px-6 lg:px-8">
//             <BaseHeading textPosition="start" textTransform="capitalize">
//               Related Articles
//             </BaseHeading>
//           </div>

//           <div className="container">
//             {loading && <Loader />}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2">
//               {relatedArticals
//                 .filter((item) => item.id !== id)
//                 .map((item, index) => (
//                   <div key={index}>
//                     <PettroCard
//                       item={item}
//                       section={productData?.subcategoryId}
//                     />
//                   </div>
//                 ))}
//             </div>
//           </div>
//         </>
//       ) : (
//         <div className="min-h-screen flex flex-col items-center justify-center text-center text-gray-600 px-4">
//           <h2 className="text-3xl font-semibold mb-4">😕 Content Not Found</h2>
//           <p className="text-lg max-w-xl">
//             We couldn’t find any blog or product that matches this page. Please
//             check the URL or go back to explore more content.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BlogDetail;

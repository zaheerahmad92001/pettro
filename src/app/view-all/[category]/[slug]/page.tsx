import { Metadata } from 'next';
import { generatePageMetadata } from '@/components/seo';
import ViewAll from '../../viewAllClient';
import { getAllCategorySubcategoryPairs, getCategoryTitle } from '@/app/api/seoApi';
import { formatTitle } from '@/app/functions';

export async function generateMetadata({ params }): Promise<Metadata> {
  
  const slug = params.slug as string;
  const category = params.category as string;

  const decodedSlug = slug ? decodeURIComponent(slug as string) : "";
  const decodedCategory = category
    ? decodeURIComponent(category as string)
    : "";

  const formatted = formatTitle(decodedSlug);
  const response = await getCategoryTitle(
     decodedCategory,
     formatted === "Food And Diet" ? "Food" : formatted,
  )
  const title = response[0]?.title;
  const description = response[0]?.description;
  const keyword = response[0]?.keyword;

  return generatePageMetadata({
    title: title,
    description:description,
    slug: `/view-all/${decodedCategory}/${formatted === "Food And Diet" ? "food-and-diet" :formatted ==='Behavior And Training'? 'behavior-and-training':formatted.toLocaleLowerCase()}`,
    image: '/pettro-img.png',
    keywords:keyword,
    author:'pettro.co'
  });
}


export async function generateStaticParams() {
  const allPairs = await getAllCategorySubcategoryPairs();
  return allPairs?.map((item) => {
    return({
    category: encodeURIComponent(item.category),
    slug: encodeURIComponent(item.subcategory)
    // slug: item?.item.subcategory==='Food'?encodeURIComponent('food-and-diet'): encodeURIComponent(item.subcategory)

  })}
);
}

export default async function Page({ params }: { params: { category:string, slug: string  } }) {
  const slug = decodeURIComponent(params.slug);
  const category = decodeURIComponent(params.category);
  const formatted = formatTitle(slug);
  const response = await getCategoryTitle(
    category,
    formatted === "Food And Diet" ? "Food" : formatted
  );

  const seoData = Array.isArray(response) && response.length > 0 ? response[0] : {};

  const plainSeoData = {
    ...seoData,
      createdAt: seoData?.createdAt?.toDate?.().toISOString?.() ?? null,
  };
  return (
    <ViewAll
      slug={params.slug}
      category={params.category}
      seoData={plainSeoData ?? {}}
    />
  )
}



// "use client";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import PettroCard from "@/components/pettroCard";
// import { useParams } from "next/navigation";
// import { fetchAllDataByCategory } from "@/redux/features/linksAction";
// import Loader from "@/components/Loader";
// import { AppDispatch, RootState } from "@/redux/store";


// const ViewAll = () => {

//   const { category, slug } = useParams();
//   const dispatch = useDispatch<AppDispatch>();
//   const {loading, categoryData } = useSelector((state:RootState) => state.links);

//   const decodedSlug = slug ? decodeURIComponent(slug as string) : "";
//   const decodedCategory = category
//     ? decodeURIComponent(category as string)
//     : "";

//   const formatTitle = (slug: string): string => {
//     return slug
//       .split("-")
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(" ");
//   };

//   const formatted = formatTitle(decodedSlug);
//   // console.log('formatted',formatted)

//   useEffect(() => {
//     const fetchCategoryData = async () => {
//       await dispatch(
//         fetchAllDataByCategory({
//           categoryId: decodedCategory,
//           subcategoryId: formatted === "Food And Diet" ? "Food" : formatted,
//         })
//       );
//     };

//     if (decodedCategory && formatted) {
//       fetchCategoryData();
//     }
//   }, [dispatch, decodedCategory, formatted]);

//   return (
//     <div className="container mx-auto px-4 py-8 ">
//        { loading && <Loader />}
//       <div className="border-b border-gray-300 mb-6">
//         <span>{formatted}</span>
//         {/* <BaseHeading marginBottom={"1"}>
//           {decodedCategory.toLowerCase()}: {decodedSlug.toLowerCase()}
//         </BaseHeading> */}
//       </div>

//       {categoryData?.length === 0 && !loading ? (
//        <div className="min-h-screen flex flex-col items-center justify-center text-center text-gray-600 px-4">
//        <h2 className="text-3xl font-semibold mb-4">😕 Content Not Found</h2>
//        <p className="text-lg max-w-xl">
//          We couldn’t find any blog or product that matches this page. Please
//          check the URL or go back to explore more content.
//        </p>
//      </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
//           {categoryData?.map((item, index) => (
//             <div key={index}>
//               <PettroCard item={item} section={decodedSlug} />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewAll;

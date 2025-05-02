// "use client";
// import React, { useEffect, useState } from "react";
// import { useDispatch, UseDispatch, useSelector } from "react-redux";
// import PettroCard from "@/components/pettroCard";
// import { useParams, useRouter } from "next/navigation";
// import { BaseHeading } from "@/components/heading";
// import { fetchAllDataByCategory } from "@/redux/features/homeStatisticsAction";

// const ViewAll = () => {
//   const { category, slug } = useParams();
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const { categoryData } = useSelector((state) => state.homeStatistics);
// console.log('categoryData',categoryData)
//   const decodedSlug = slug ? decodeURIComponent(slug as string) : "";
//   const decodedCategory = category
//     ? decodeURIComponent(category as string)
//     : "";

//   const formatTitle = (slug: string): string => {
//     return slug
//       .split("-") // Split by dash
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
//       .join(" "); // Join with space
//   };
//   const formatted = formatTitle(decodedSlug);

//   useEffect(() => {
//     router.refresh();
//     console.log("refresh");
//   }, [slug]);

//   useEffect(() => {

//     const fetchCategoryData = async () => {
//       const response = await dispatch(
//         fetchAllDataByCategory({ decodedCategory, formatted })
//       );
//     };
//     fetchCategoryData();
//   }, [dispatch]);

//   return (
//     <div className="container mx-auto px-4 py-8 ">
//       <div className="border-b border-gray-300 mb-6">
//         {/* <span>{decodedCategory}{formatted}</span> */}
//         <BaseHeading marginBottom={"1"}>
//           {decodedCategory.toLowerCase()}: {decodedSlug.toLocaleLowerCase()}
//         </BaseHeading>
//       </div>
//       {/* <h1 className="text-2xl font-bold mb-6">View All: {decodedCategory}</h1> */}

//       <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
//         {categoryData?.map((item, index) => {
//           return (
//             <div key={index}>
//               <PettroCard item={item} section={decodedSlug} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ViewAll;

"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PettroCard from "@/components/pettroCard";
import { useParams } from "next/navigation";
import { fetchAllDataByCategory } from "@/redux/features/linksAction";
import Loader from "@/components/Loader";
import { AppDispatch, RootState } from "@/redux/store";


const ViewAll = () => {

  const { category, slug } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const {loading, categoryData } = useSelector((state:RootState) => state.links);

  const decodedSlug = slug ? decodeURIComponent(slug as string) : "";
  const decodedCategory = category
    ? decodeURIComponent(category as string)
    : "";

  const formatTitle = (slug: string): string => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const formatted = formatTitle(decodedSlug);
  // console.log('formatted',formatted)

  useEffect(() => {
    const fetchCategoryData = async () => {
      await dispatch(
        fetchAllDataByCategory({
          categoryId: decodedCategory,
          subcategoryId: formatted === "Food And Diet" ? "Food" : formatted,
        })
      );
    };

    if (decodedCategory && formatted) {
      fetchCategoryData();
    }
  }, [dispatch, decodedCategory, formatted]);

  return (
    <div className="container mx-auto px-4 py-8 ">
       { loading && <Loader />}
      <div className="border-b border-gray-300 mb-6">
        <span>{formatted}</span>
        {/* <BaseHeading marginBottom={"1"}>
          {decodedCategory.toLowerCase()}: {decodedSlug.toLowerCase()}
        </BaseHeading> */}
      </div>

      {categoryData?.length === 0 && !loading ? (
       <div className="min-h-screen flex flex-col items-center justify-center text-center text-gray-600 px-4">
       <h2 className="text-3xl font-semibold mb-4">😕 Content Not Found</h2>
       <p className="text-lg max-w-xl">
         We couldn’t find any blog or product that matches this page. Please
         check the URL or go back to explore more content.
       </p>
     </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {categoryData?.map((item, index) => (
            <div key={index}>
              <PettroCard item={item} section={decodedSlug} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewAll;

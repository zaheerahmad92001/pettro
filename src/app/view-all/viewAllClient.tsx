"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PettroCard from "@/components/pettroCard";
import { useParams } from "next/navigation";
import { fetchAllDataByCategory } from "@/redux/features/linksAction";
import Loader from "@/components/Loader";
import { AppDispatch, RootState } from "@/redux/store";
import { formatTitle } from "../functions";
import { BaseHeading } from "@/components/heading";

interface Props {
  category: string;
  slug: string;
  seoData?: {
    title?: string;
    description?: string;
    keyword?: string;
  };
}

const ViewAll: React.FC<Props> = ({ category, slug, seoData }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, categoryData } = useSelector(
    (state: RootState) => state.links
  );

  const decodedSlug = slug ? decodeURIComponent(slug as string) : "";
  const decodedCategory = category
    ? decodeURIComponent(category as string)
    : "";

  const formatted = formatTitle(decodedSlug);

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
      {loading && <Loader />}
      <div className="w-[90%] text-black mb-6 mx-auto">
        <h1
          className="flex flex-wrap font-bold text-center text-black justify-center items-center font-geistMono 
               text-xl 
               md:text-2xl 
               lg:text-3xl
               mx-auto"
        >
          {seoData?.title}
        </h1>
        <span className="block w-[50%] mx-auto text-center mt-2 text-black-300 text-lg">
    {seoData?.description}
  </span>

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

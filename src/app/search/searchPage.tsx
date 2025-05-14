"use client";
import React, { useEffect } from "react";
import { BaseHeading } from "@/components/heading";
import { useSearchParams } from "next/navigation";
import PettroCard from "@/components/pettroCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchData } from "@/redux/features/linksAction";
import { AppDispatch, RootState } from "@/redux/store";
import Loader from "@/components/Loader";

const Search = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const dispatch = useDispatch<AppDispatch>();
  const { searchData ,loading } = useSelector((state: RootState) => state.links);

  const fromSlug = (slug: string) => {
    return slug.replace(/-/g, " ");
  };
  const querSlug = fromSlug(query)

  useEffect(() => {
    const loadSearchData = async () => {
      if (querSlug) {
        await dispatch(fetchSearchData(querSlug));
      }
    };
    loadSearchData();
  }, [dispatch, querSlug]);


  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {loading && <Loader />}
      <div className="border-b border-gray-300">
        <BaseHeading marginBottom="1" textTransform={"capitalize"}>
          Search Results: {querSlug}
        </BaseHeading>
      </div>
      {/* to keep the lyaout symmetry */}
      {loading && searchData.length === 0 && 
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center"></div>
      }
      {searchData.length === 0 && !loading ? (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            No Results Found For: <span className="text-red-600">{querSlug}</span>
          </h2>
          <p className="mt-2 text-gray-600">
            Try searching for something else.
          </p>
        </div>
      ) : (
        <div className="mt-6">
          <div className="container mx-auto px-4 py-4 ">
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
              {searchData?.map((item, index) => {
                return (
                  <div key={index}>
                    <PettroCard item={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;

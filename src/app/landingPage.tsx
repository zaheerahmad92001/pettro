"use client";
// import { useEffect } from "react";
import AppStatics from "@/components/appStatics";
// import {
//    fetchHomeStatistics,
//    fetchPetCareContent,
//    fetchHomeContentByCategories,
// } from "../redux/features/homeStatisticsAction";
import { BaseHeading, Heading, ViewAllHeading } from "@/components/heading";
import HeroSection from "@/components/herosection";
import OurMission from "@/components/ourMission";
import PetCareContact from "@/components/petCareContact";
import PettroCard from "@/components/pettroCard";

// import { useDispatch, useSelector } from "react-redux";
import Loader from "@/components/Loader";
// import { AppDispatch, RootState } from "@/redux/store";
// import { ContentItem } from "@/redux/features/linksAction";
// import { PetCareData, Statistics } from "../../types";
import {
  useHomeStatistics,
  usePetCareContent,
  useHomeContentByCategories,
} from "./api/useHomeApi";

const categoriesWithSubcategories = [
  { categoryId: "dogs", subcategoryId: "Breeds" },
  { categoryId: "dogs", subcategoryId: "Food" },
  { categoryId: "dogs", subcategoryId: "Health" },
  { categoryId: "cats", subcategoryId: "Breeds" },
  { categoryId: "cats", subcategoryId: "Health" },
  { categoryId: "cats", subcategoryId: "Food" },
  { categoryId: "horses", subcategoryId: "Breeds" },
  { categoryId: "horses", subcategoryId: "Health" },
  { categoryId: "horses", subcategoryId: "Food" },
];

export default function Home() {
  const { data: petCareData } = usePetCareContent();
  const { data: statistics } = useHomeStatistics();
  const { data: homeContent, isLoading: loading } = useHomeContentByCategories(
    categoriesWithSubcategories
  );

  // const DogBreedsData = homeContent
  //   ?.filter(
  //     (item) => item?.categoryId === "dogs" && item?.subcategoryId === "Breeds"
  //   )
  //   .slice(0, 4);
  // const DogFoodData = homeContent
  //   ?.filter(
  //     (item) => item?.categoryId === "dogs" && item?.subcategoryId === "Food"
  //   )
  //   .slice(0, 4);
  // const DogHealthData = homeContent
  //   ?.filter(
  //     (item) => item?.categoryId === "dogs" && item?.subcategoryId === "Health"
  //   )
  //   .slice(0, 4);
  // const catBreeds = homeContent
  //   ?.filter(
  //     (item) => item?.categoryId === "cats" && item?.subcategoryId === "Breeds"
  //   )
  //   .slice(0, 4);
  // const catHealth = homeContent
  //   ?.filter(
  //     (item) => item?.categoryId === "cats" && item?.subcategoryId === "Health"
  //   )
  //   .slice(0, 4);
  // const catFood = homeContent
  //   ?.filter(
  //     (item) => item?.categoryId === "cats" && item?.subcategoryId === "Food"
  //   )
  //   .slice(0, 4);
  // const horseBreeds = homeContent
  //   ?.filter(
  //     (item) =>
  //       item?.categoryId === "horses" && item?.subcategoryId === "Breeds"
  //   )
  //   .slice(0, 4);
  // const horseHealth = homeContent
  //   ?.filter(
  //     (item) =>
  //       item?.categoryId === "horses" && item?.subcategoryId === "Health"
  //   )
  //   .slice(0, 4);

  const horseFood = homeContent
    ?.filter(
      (item) => item?.categoryId === "horses" && item?.subcategoryId === "Food"
    )
    .slice(0, 3);
console.log('horseFood',horseFood)
  return (
    <main className="flex flex-col min-w-screen min-h-screen">
      {loading && <Loader />}
      <div className="w-full mx-2 mt-8">
        <h1
          className="flex flex-wrap font-extrabold text-center text-black justify-center items-center font-geistMono 
         text-xl 
         md:text-2xl 
         lg:text-3xl
          mx-auto"
        >
          {statistics?.homeHeading}
        </h1>

        <AppStatics statistics={statistics} />
        <HeroSection statistics={statistics} data={horseFood} />

        <div className="mt-24 px-10">
          <h1 className="text-black font-extrabold text-center font-geistMono capitalize text-xl md:text-2xl lg:text-3xl mx-auto leading-tight ">
            <span className="block animate-fade-in-up delay-[100ms]">
              Discover dog and cat breed guides,
            </span>
            <span className="block animate-fade-in-up delay-[100ms]">
             pet health tips and nutrition essential advice.
            </span>
            <span className="block animate-fade-in-up delay-[100ms]">
             All at one place.
            </span>
          </h1>
        </div>

        <div className="mt-24 px-10 flex flex-col justify-center items-center">
          <BaseHeading textPosition="start">
            Your Guide to the Dog World:
          </BaseHeading>
        </div>

        <div className="mt-2">
          <ViewAllHeading title="Dog Breeds" category="dogs" url="breeds" />
          <div className="container mx-auto px-4 py-4 ">
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
              {homeContent?.map((item, index) => {
                return (
                  <div key={index}>
                    <PettroCard item={item} section={"Dog Breeds"} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* <div className="mt-2">
          <ViewAllHeading title="Dog Health" category="dogs" url="health" />
          <div className="container mx-auto px-4 py-4 ">
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
              {DogHealthData?.map((item, index) => {
                return (
                  <div key={index}>
                    <PettroCard item={item} section={"Dog Health"} />
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}

        {/* <div className="mt-2">
          <ViewAllHeading
            title="Dog Food"
            category="dogs"
            url="food-and-diet"
          />

          <div className="container mx-auto px-4 py-4 ">
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
              {DogFoodData?.map((item, index) => {
                return (
                  <div key={index}>
                    <PettroCard item={item} section={"Dog Food"} />
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}

        {/* <div className="mt-2">
          <ViewAllHeading title="Cat Breeds" category="cats" url="breeds" />
          <div className="container mx-auto px-4 py-4 ">
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
              {catBreeds?.map((item, index) => {
                return (
                  <div key={index}>
                    <PettroCard item={item} section={"Cat Breeds"} />
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}

        {/* <div className="mt-2">
          <ViewAllHeading title="Cat Health" category="cats" url="health" />
          <div className="container mx-auto px-4 py-4 ">
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
              {catHealth?.map((item, index) => {
                return (
                  <div key={index}>
                    <PettroCard item={item} section={"Cat Health"} />
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}

        {/* <div className="mt-2">
          <ViewAllHeading
            title="Cat Food"
            category="cats"
            url="food-and-diet"
          />
          <div className="container mx-auto px-4 py-4 ">
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
              {catFood?.map((item, index) => {
                return (
                  <div key={index}>
                    <PettroCard item={item} section={"Cat Food"} />
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}

        <PetCareContact data={petCareData} />
        {/* <PetCareContact data={{ petCareConnect: petCareData }} /> */}

        {/* <div className="mt-2">
          <ViewAllHeading title="Horse Breeds" category="horses" url="breeds" />
          <div className="container mx-auto px-4 py-4 ">
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
              {horseBreeds?.map((item, index) => {
                return (
                  <div key={index}>
                    <PettroCard item={item} section={"Horse Breeds"} />
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}

        {/* <div className="mt-2">
          <ViewAllHeading title="Horse Health" category="horses" url="health" />
          <div className="container mx-auto px-4 py-4 ">
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
              {horseHealth?.map((item, index) => {
                return (
                  <div key={index}>
                    <PettroCard item={item} section={"Horse Health"} />
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}

        <OurMission data={petCareData} />
      </div>
    </main>
  );
}

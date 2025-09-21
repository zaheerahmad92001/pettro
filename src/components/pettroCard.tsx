"use client";

import Image from "next/image";
import React from "react";
import {useRouter } from "next/navigation";
import { setDetail } from "@/redux/features/detailSlice";
import { useDispatch } from "react-redux";
import { ContentItem } from "../../types";
import { AppDispatch } from "@/redux/store";

interface PattroCardProps {
  item?:ContentItem
  section?:string,
}

const PettroCard: React.FC<PattroCardProps> = (props: PattroCardProps) => {

    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();

  const { item , section } = props;
  const firstTextContent = item?.content?.find((data) => data?.type === "heading");
  const categoryImage = item?.content?.find((data) => data?.type === "image");
  const id = item?.id;

  const heading = firstTextContent?.value;
  const petImage = categoryImage?.src;
  const imgAlt = categoryImage?.alt;


  const handleClick = () => {
  console.log('here is item', item)
    if(!item) return;
    // console.log('here is item', item[0].value)
    dispatch(setDetail(item));
    router.push(`/detail/${id}`);
  };

  return (
    // <Link
    //   href={{
    //     pathname: `/detail/${id}`,
    //   }}
    // >
      <div 
      onClick={handleClick}
      className="flex flex-wrap justify-center items-center gap-1 py-1 px-1">
        <div className="flex flex-col bg-white rounded-lg border border-gray-200 transition-all duration-300 w-full sm:w-80 md:w-72 lg:w-64 xl:w-80 hover:shadow-xl hover:scale-105 focus-within:shadow-xl focus-within:scale-105">
          <div className="overflow-hidden h-auto md:h-[190px] flex-shrink-0 rounded-t-lg">
            <Image
              src={petImage ? petImage : "/dog-1.jpg"}
              alt={imgAlt ? imgAlt : 'Pettro'}
              layout="responsive"
              width={350}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col flex-wrap w-full px-4 pt-2 pb-3 md:h-[140px]">
          <span className="text-sm font-thin text-gray-800 line-clamp-4 uppercase">
              {section}
            </span>
            <h1 className="text-2xl font-2xl text-gray-800 line-clamp-3">{heading}</h1>
            {/* <span className="text-sm text-gray-600 line-clamp-4">
              {shortDesc}
            </span> */}
          </div>
        </div>
      </div>
    // </Link>
  );
};

export default PettroCard;
"use client";
import React from "react";
import Image from "next/image";
import { ContentBlock } from "@/redux/features/linksAction";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import {useRouter } from "next/navigation";
import { setDetail } from "@/redux/features/detailSlice";
import { ContentItem } from "../../types";

interface DataItem {
  content: ContentBlock[];
}

interface Statistics {
  imageBase64: string;
}

interface HeroSectionProps {
  statistics: Statistics;
  data: DataItem[];
}

const HeroSection = (props: HeroSectionProps) => {
  const { statistics, data } = props;
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

const handleClick = (item:ContentItem) => {
    if(!item) return;
    const id = item?.id;
      console.log('here is click', item)
    router.push(`/detail/${id}`);
    //  dispatch(setDetail(item));
  };
  return (
    <div 
    className="flex justify-center items-start gap-4 mx-8 mt-10 flex-col sm:flex-col lg:flex-row">
      <div className="overflow-hidden w-full sm:w-full lg:w-2/4">
        {/* Ensure imageBase64 is a valid base64 string */}
        <Image
          src={statistics?.imageBase64 ?? null}
          alt="Golden Labrador Retriever sitting in a park"
          layout="responsive"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>

      <div className="flex flex-col w-full h-auto gap-8 sm:flex-row lg:flex-col sm:w-full lg:max-w-96 sm:mt-4 lg:mt-0">
        <div className="flex flex-row justify-start items-center gap-4 sm:flex-row lg:flex-col">
          {data?.map((item, index) => {
            const firstTextContent = item?.content?.find((data) => data?.type === "heading");
            const shortDescription = item?.content?.find((data) => data?.type === "paragraph");
            const categoryImage = item?.content?.find((data) => data?.type === "image");

            const heading = firstTextContent?.value;
            const shortDesc = shortDescription?.value;
            const petImage = categoryImage?.src;

            const isHiddenOnSmallScreens = index >= 2 ? "hidden lg:flex" : "";
            return (
              <div
                onClick={()=>handleClick(item)}
                key={index}
                className={`flex flex-col ${isHiddenOnSmallScreens} items-start justify-start gap-4 sm:flex-col lg:flex-row hover:bg-custom-gray p-2 transition-all duration-300 ease-in-out`}
              >
                <div className="w-[100px] h-[100px] overflow-hidden flex-shrink-0 bg-red-200">
                  {/* Ensure petImage is a valid URL */}
                  {petImage && (
                    <Image
                      src={petImage}
                      alt="Hero-dog"
                      height={100}
                      width={100}
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-black">{heading}</p>
                  <div>
                    <p className="font-normal text-sm line-clamp-2 text-black">{shortDesc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;



// "use client";
// import React from "react";
// import Image from "next/image";


// interface ContentBlock {
//   type: "heading" | "paragraph" | "image";
//   value?: string;
//   src?: string;
// }

// interface DataItem {
//   content: ContentBlock[];
// }

// interface Statistics {
//   imageBase64: string;
// }

// interface HeroSectionProps {
//   statistics: Statistics;
//   data: DataItem[];
// }

// const HeroSection = (props: HeroSectionProps) => {
//   const { statistics, data } = props;
//   console.log('here is data', data)
//   return (
//     <div
//       className="flex justify-center items-start gap-4 mx-8 mt-10
//     flex-col
//     sm:flex-col
//     lg:flex-row
//     "
//     >
//       <div
//         className="overflow-hidden 
//   w-full
//   sm:w-full
//   lg:w-2/4"
//       >
//         <Image
//           src={statistics?.imageBase64 ?? null}
//           alt="Hero-dog"
//           layout="responsive"
//           width={100}
//           height={100}
//           className="object-contain"
//         />
//       </div>

//       <div
//         className="flex flex-col w-full h-auto gap-8
//     sm:flex-row 
//     lg:flex-col 
//     sm:w-full 
//     lg:max-w-96 
//     sm:mt-4 
//     lg:mt-0 "
//       >
//         <div
//           className="flex flex-row justify-start items-center gap-4
//     sm:flex-row 
//     lg:flex-col"
//         >
//           {data?.map((item, index) => {
//             const firstTextContent = item?.content?.find((data) => data?.type === "heading");
//             const shortDescription = item?.content?.find((data) => data?.type === "paragraph");
//             const categoryImage = item?.content?.find((data) => data?.type === "image");

//             const heading = firstTextContent?.value;
//             const shortDesc = shortDescription?.value;
//             const petImage = categoryImage?.src;
          
//             const isHiddenOnSmallScreens = index >= 2 ? "hidden lg:flex" : "";
//             return (
//               <div
//                 key={index}
//                 className={`flex flex-col ${isHiddenOnSmallScreens} items-start justify-start gap-4 
//           sm:flex-col 
//           lg:flex-row 
//           hover:bg-custom-gray p-2 transition-all duration-300 ease-in-out`}
//               >
//                 <div className="w-[100px] h-[100px] overflow-hidden flex-shrink-0 bg-red-200">
//                 {petImage &&
//                   <Image
//                     src={petImage}
//                     alt="Hero-dog"
//                     height={100}
//                     width={100}
//                     className="object-cover w-full h-full"
//                   />}
//                 </div>
//                 <div className="flex flex-col">
//                   <p className="font-bold text-black">
//                     {heading}
//                   </p>
//                   <div>
//                     <p className="font-normal text-sm line-clamp-2 text-black">
//                      {shortDesc}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

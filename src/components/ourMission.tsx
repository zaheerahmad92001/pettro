"use client";
import Image from "next/image";
import React from "react";


// interface PetCareContactProps {
//   data?: {
//     petCareConnect?: PetCareData ;
//   };
// }

interface MissionData {
  image?: string;
  heading?: string;
  paragraph?: string;
}

interface OurMissionProps {
  data?: {
    mission?: MissionData;
  };
}
const OurMission: React.FC<OurMissionProps> = ({ data }) => {

  const {mission} = data || {}
  const {image , heading ,paragraph } = mission || {}
  console.log('mission image', image)
  return (
    <div className="flex flex-col sm:flex-col  md:flex-row  justify-center items-center gap-4 bg-custom-gray py-8 my-24 w-full max-w-none">
      
      <div className="flex flex-row items-center order-2 md:order-1">
        <div className="overflow-hidden h-[235px] w-[350px] flex-shrink-0 bg-red-200">
          {image &&
          <Image
            src={image}
            alt="Pettro Card"
            width={350}
            height={235}
            className="object-cover w-full h-full"
          />
          }
        </div>
        {/* <div className="overflow-hidden h-[235px] w-[150px] flex-shrink-0">
          <Image
            src={`/cat.jpg`}
            alt="Pettro Card"
            width={150}
            height={235}
            className="object-cover w-full h-full"
          />
        </div> */}
      </div>

      <div className="flex flex-col flex-wrap justify-center md:justify-start items-center
      w-full sm:w-full md:w-1/3
      order-1 md:order-2
      pl-10 pr-10 md:pl-0 pr-0
      ">
        <span className="font-bold font-montserrat text-red-500 uppercase ">
          🐾 Our mission 🌟
        </span>
        <span className="font-base font-montserrat text-black ">
         {heading}
        </span>
        <span className="text-black text-base font-montserrat font-medium mt-6 ">
        {paragraph}
        </span>
      </div>
    </div>
  );
};
export default OurMission;

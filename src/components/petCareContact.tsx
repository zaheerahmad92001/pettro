"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from 'next/navigation';
import { PetCareData } from "../../types";


interface PetCareContactProps {
  data?: {
    petCareConnect?: PetCareData ;
  };
}

const PetCareContact: React.FC<PetCareContactProps> = ({data}) => {
  console.log('getting data', data)
  const router = useRouter();
  const {petCareConnect} = data || {}
  const {image , heading  } = petCareConnect || {}

  return (
    <div className="flex flex-col sm:flex-col  md:flex-row justify-center gap-4 bg-custom-gray py-8 my-24 max-w-full max-w-none">
      <div className="bg-red-200 overflow-hidden h-[235px] w-[330px] md:w-[350px] self-center md:self-start flex-shrink-0 order-2 md:order-1">
        {image &&
        <Image
          src={image}
          alt="Pettro Card"
          width={300}
          height={230}
          className="object-cover w-full h-full"
        />}
      </div>

      <div className="flex flex-col flex-wrap justify-center md:justify-start
       w-full sm:w-full md:w-1/3
      order-1 md:order-2
      pl-10 pr-10 md:pl-0 pr-0
      self-center
      ">
        <span className="font-bold font-montserrat text-red-500  mb-4 md:mb-0 ">
          🐾 Join Us for Pet Care Connect! 🌟
        </span>
        <span className="font-base font-montserrat text-black ">
          Calling All Pet Lovers!
        </span>
        <span className="text-black  text-base font-montserrat font-medium mb-1 ">
         {heading}
        </span>
        <p className="text-black  text-sm font-montserrat font-thin mb-1">
          Expert Talks: Learn from veterinarians and pet care specialists.
        </p>
        <p className="text-black  text-sm font-montserrat font-thin mb-1 ">
          Workshops: Hands-on sessions on grooming and pet first aid.
        </p>
        <p className="text-black  text-sm font-montserrat font-thin mb-1">
          Networking: Meet other pet owners and share experiences. Fun
          Activities: Enjoy games, contests, and giveaways!
        </p>

        <div className="flex items-center justify-start mt-2">
        <button 
          onClick={() => router.push('/contact-us')}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          <span>Pet Care Connect</span>
        </button>
      </div>
      </div>
    </div>
  );
};
export default PetCareContact;

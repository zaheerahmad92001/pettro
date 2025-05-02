"use client";
import React from "react";
import { IconType } from "react-icons";
import { FaBookReader } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { TbRibbonHealth } from "react-icons/tb";

// Define what statistics looks like
interface Statistics {
  reader: string;
  article: string;
  healthTopic: string;
}

interface AppStaticsProps {
  icon: IconType;
  heading: string;
  description: string;
  color: string;
}

interface AppStaticsComponentProps {
  statistics: Statistics;
}

const AppStatics: React.FC<AppStaticsComponentProps> = ({ statistics }) => {
  const Statics: AppStaticsProps[] = [
    {
      icon: FaBookReader,
      color: "#fecaca",
      heading: statistics.reader,
      description: "Monthly Readers",
    },
    {
      icon: TfiWrite,
      color: "#fecaca",
      heading: statistics.article,
      description: "Articles Written",
    },
    {
      icon: TbRibbonHealth,
      color: "#fecaca",
      heading: statistics.healthTopic,
      description: "Health Topics Covered",
    },
  ];

  return (
    <div
      className="flex flex-row justify-center items-center mt-12
        gap-12
        md:gap-16
        lg:gap-24
        xl:gap-32"
    >
      {Statics.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="flex flex-col flex-wrap max-w-36 items-center justify-center"
          >
            <Icon
              style={{ color: stat.color }}
              className="text-2xl md:text-4xl lg:text-6xl xl:text-8xl"
            />
            <span
              className="text-black font-montserrat font-bold mt-1
              text-base
              md:text-lg
              lg:text-xl
              xl:text-xl"
            >
              {stat.heading}
            </span>
            <span
              className="text-black font-montserrat font-normal text-sm text-center
              md:text-base
              lg:text-base
              xl:text-base"
            >
              {stat.description}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default AppStatics;


// "use client";
// import React from "react";
// import { IconType } from "react-icons";
// import { FaBookReader } from "react-icons/fa";
// import { TfiWrite } from "react-icons/tfi";
// import { TbRibbonHealth } from "react-icons/tb";


// interface AppStaticsProps {
//   icon: IconType;
//   heading: string;
//   description: string;
//   color: string;
// }

// // const Statics: AppStaticsProps[] = [
// //   {
// //     icon: FaBookReader,
// //     color: "#fecaca",
// //     heading: "1.5 Million",
// //     description: "Monthly Readers",
// //   },
// //   {
// //     icon: TfiWrite,
// //     color: "#fecaca",
// //     heading: "1000 +",
// //     description: "Articles Written",
// //   },
// //   {
// //     icon: TbRibbonHealth,
// //     color: "#fecaca",
// //     heading: "200 +",
// //     description: "Health Topics Covered",
// //   },
// // ];

// const AppStatics = (props) => {
//   const {statistics} = props

//   const Statics: AppStaticsProps[] = [
//     {
//       icon: FaBookReader,
//       color: "#fecaca",
//       heading: statistics?.reader,
//       description: "Monthly Readers",
//     },
//     {
//       icon: TfiWrite,
//       color: "#fecaca",
//       heading: statistics?.article,
//       description: "Articles Written",
//     },
//     {
//       icon: TbRibbonHealth,
//       color: "#fecaca",
//       heading: statistics?.healthTopic,
//       description: "Health Topics Covered",
//     },
//   ];

//   return (
//     <div className="flex flex-row justify-center items-center mt-12
//     gap-12
//     md:gap-16
//     lg:gap-24
//     xl:gap-32
//     ">
//       {Statics.map((stat, index) => {
//         const Icon = stat.icon;
//         return (
//           <div
//             key={index}
//             className="flex flex-col flex-wrap max-w-36 items-center justify-center"
//           >
//             <Icon style={{ color: stat.color }} className="text-2xl md: text-4xl lg:text-6xl xl:text-8xl" />
//             <span className="text-black font-montserrat font-bold mt-1
//             text-base
//             md:text-lg
//             lg:text-xl
//             xl:text-xl
//             ">
//               {stat.heading}
//             </span>
//             <span className="text-black font-montserrat font-normal text-sm text-center
//              md:text-base
//              lg:text-base
//              xl:text-base
//              ">
//               {stat.description}
//             </span>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default AppStatics;

import Image from "next/image";
import { BaseHeading, LargeHeading } from "./heading";

const ProductCard = ({ index, item }) => {
  return (
    <div className="w-full mx-auto bg-white overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Product Title */}

      {item?.type === "heading" && (
        <LargeHeading
          marginTop="6"
          marginBottom="0"
          textPosition={`${index === 0 ? "center" : "start"}`}
        >
          {item.value}
        </LargeHeading>
      )}

      {/* Subheading for the text block */}
      {item?.type === "text" && (
        <div className="mt-6">
          <BaseHeading textPosition="start" marginBottom="2" marginTop="4">
            {item?.value || "Additional Info"}
          </BaseHeading>
        </div>
      )}

      {/* Product Image */}
      {item?.type === "image" && (
        <div className="w-full flex justify-center items-center mt-4">
          <Image
            src={item?.src ?? null}
            alt="Product Image"
            width={500}
            height={500}
            className="object-contain rounded-lg w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] max-h-[500px]"
          />
        </div>
      )}

      {/* Product Video */}
      {item?.video && (
        <div className="flex justify-center">
          <video controls className="rounded-lg w-full max-w-[500px] h-auto">
            <source src={item.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {item?.type === "bulklinks" && item?.links?.length > 0 && (
        <div className="mt-6 flex justify-center gap-2 flex-wrap">
          {item?.links?.map((link: string, index: number) => (
            <a
              key={index}
              href={link?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white text-sm md:text-base font-medium py-2 w-[150px] h-[40px] flex items-center justify-center rounded-lg text-center hover:bg-blue-600 transition"
            >
              Buy at {link.label?.toUpperCase()}
            </a>
          ))}
        </div>
      )}

      {item?.type === "paragraph" && (
        <div>
          <p
            key={index}
            className="whitespace-pre-line font-geistMono text-lg md:text-lg text-black mb-2"
          >
            {item?.value}
          </p>
        </div>
      )}

      {(item?.type?.length > 0 || item?.ingredients?.length > 0) && (
        <div className="mt-4 flex flex-col md:flex-row gap-8 ">
          {item?.type === "list" && item.items.length > 0 && (
            <div>
              <ul className="list-disc pl-5 text-lg md:text-lg text-black font-geistMono space-y-1 mb-4">
                {item.items.map((list, index) => (
                  <li key={index}>{list}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Nutritional Facts Table */}
      {item?.type === "table" && item.rows.length > 0 && (
        <div>
          {/* <h3 className="text-lg font-semibold text-black">
            Nutritional Facts:
          </h3> */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 mt-2">
              <tbody>
                {item?.rows.map((col, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    {/* Key Section (Smaller on larger screens, full width on small screens) */}
                    <td className="py-2 px-4 font-geistMono text-black bg-gray-100 text-sm md:text-base w-1/3 md:w-1/4">
                      {col?.column1}
                    </td>
                    {/* Value Section (Larger on larger screens, full width on small screens) */}
                    <td className="py-2 px-4 text-black font-geistMono text-sm md:text-base w-2/3 md:w-3/4">
                      {col?.column2}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
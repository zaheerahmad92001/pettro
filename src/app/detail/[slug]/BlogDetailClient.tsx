"use client";

import React, { useEffect, useRef } from "react";
import { BaseHeading } from "@/components/heading";
import PettroCard from "@/components/pettroCard";
import ProductCard from "@/components/productCard";
import Loader from "@/components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchDocumentById } from "@/redux/features/detailAction";
import { fetchRelatedContent } from "@/redux/features/relatedArticalsAction";
import { AppDispatch, RootState } from "@/redux/store";

export interface ContentBlock {
  type: string;
  value: string;
}

export interface ContentItem {
  id: string;
  categoryId: string;
  subcategoryId: string;
  content: ContentBlock[];
  [key: string]: unknown;
}

interface BlogDetailClientProps {
  slug: string;
}

export default function BlogDetailClient({ slug }: BlogDetailClientProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { productData, loading } = useSelector((s: RootState) => s.detail);
  const { relatedArticals } = useSelector((s: RootState) => s.relatedArticals);

  const prevIdsRef = useRef<{ categoryId?: string; subcategoryId?: string }>(
    {}
  );
  const isDataAvailable =
    Array.isArray(productData?.content) && productData.content.length > 0;

  useEffect(() => {
    if (slug) {
      dispatch(
        fetchDocumentById({ collectionName: "content", documentId: slug })
      );
    }
  }, [dispatch, slug]);

  useEffect(() => {
    if (!isDataAvailable) return;

    const { categoryId, subcategoryId } = productData;
    const prev = prevIdsRef.current;

    if (
      prev.categoryId === categoryId &&
      prev.subcategoryId === subcategoryId
    ) {
      return; // no change, skip
    }

    prevIdsRef.current = { categoryId, subcategoryId };
    dispatch(fetchRelatedContent({ categoryId, subcategoryId }));
  }, [dispatch, isDataAvailable, productData]);

  return (
    <div className="mx-4 sm:mx-[5%] md:mx-[20%]">
      {loading && <Loader />}
      {isDataAvailable ? (
        <>
          {productData.content.map((block, idx) => (
            <ProductCard key={idx} index={idx} item={block} />
          ))}

          <div className="mt-16 px-4 sm:px-6 lg:px-8">
            <BaseHeading textPosition="start" textTransform="capitalize">
              Related Articles
            </BaseHeading>
          </div>

          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
              {relatedArticals
                .filter((item) => item.id !== slug)
                .map((item, idx) => (
                  <div key={idx}>
                    <PettroCard
                      item={item}
                      section={productData.subcategoryId}
                    />
                  </div>
                ))}
            </div>
          </div>
        </>
      ) : !loading ? (
        <div className="min-h-screen flex flex-col items-center justify-center text-gray-600 px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">😕 Content Not Found</h2>
          <p className="text-lg max-w-xl">
            We couldn’t find any article matching this page. Please check the
            URL or explore more content.
          </p>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center text-gray-600 px-4 text-center"></div>
      )}
    </div>
  );
}

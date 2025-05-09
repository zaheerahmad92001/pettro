// lib/seo.ts
import { Metadata } from 'next';

interface GenerateMetadataParams {
  title: string;
  description: string;
  slug: string; // e.g., "/blog/my-article"
  image?: string;
}

export function generatePageMetadata({
  title,
  description,
  slug,
  image = '/pettro-img.png',
}: GenerateMetadataParams): Metadata {
  const fullUrl = `https://www.pettro.co/${slug}`;

  return {
    title: `${title} | pettro.co`,
    description,
    openGraph: {
      title,
      description,
      url: fullUrl,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

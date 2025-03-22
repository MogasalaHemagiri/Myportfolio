import createImageUrlBuilder from '@sanity/image-url'
import { createClient } from 'next-sanity'

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your_project_id",
    apiVersion: '2021-03-25',
    useCdn: process.env.NODE_ENV === 'production',
};

// ✅ Ensure `sanityClient` is exported
export const sanityClient = createClient(config);

// ✅ Ensure `urlFor` is exported
export const urlFor = (source: any) => createImageUrlBuilder(config).image(source);

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "fallback_project_id",
    apiVersion: '2021-03-25',
    useCdn: process.env.NODE_ENV === 'production',
};
// Set up the client for fetching data in the getProps page function
console.log("Sanity Config:", config);
export const sanityClient = createClient(config);

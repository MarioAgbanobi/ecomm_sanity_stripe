"use-client";

// import sanityClient from '@sanity/client';
import { createClient } from '@sanity/client';
import imageUrlBuilder  from '@sanity/image-url';

export const client = createClient({
    projectId: 'blj4cqpt',
    dataset: 'production',
    apiVersion: '2024-09-14',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true
});


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
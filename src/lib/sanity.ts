
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'your-project-id', // you'll get this from sanity.io
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-03-09', // use current date
  token: 'your-token' // Only if you want to update content
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};

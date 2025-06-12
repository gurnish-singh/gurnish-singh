// src/lib/sanity.ts
import { createClient } from '@sanity/client';

export const sanity = createClient({
  projectId: '0z26388c',
  dataset: 'production',
  apiVersion: '2025-06-12',
  useCdn: true,
});

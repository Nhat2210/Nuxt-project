import { ConfigSchema } from 'nuxt/schema';

declare module 'nuxt/schema' {
  interface NuxtConfig {
    shadcn?: {
      prefix?: string;
      componentDir?: string;
    };
  }

  interface NuxtOptions {
    shadcn?: {
      prefix?: string;
      componentDir?: string;
    };
  }
}

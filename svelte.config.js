import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: true
    }),
    alias: {
      $lib: './src/lib'
    },
    prerender: {
      // Crawl from `/` so every route is prerendered.
      // With `trailingSlash: 'always'` (see src/routes/+layout.ts)
      // this outputs about-us/index.html etc., which fixes
      // 404-on-reload on any static host.
      entries: ['*', '/'],
      handleMissingId: 'ignore',
      handleHttpError: 'warn'
    }
  }
};

export default config;

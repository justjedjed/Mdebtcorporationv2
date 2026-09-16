export const prerender = true;
export const ssr = true;
export const csr = true;
// Always use trailing slash so adapter-static outputs
// about-us/index.html instead of about-us.html.
// Directory-style output loads on ANY static host
// (Apache, Nginx, GitHub Pages, Netlify, Cloudflare, IIS)
// without rewrite rules — fixes 404 on page reload.
export const trailingSlash = 'always';

const apiEndpoint = 'http://127.0.0.1:1337/api';

export const fetchSinglePost = async (slug) => {
  const req = await fetch(`${apiEndpoint}/blog-posts?filters[Slug][$eq]=${slug}&populate[0]=SEO&populate[1]=SEO.MetaTags`);
  const res = await req.json();
  return res.data[0];
};

export const fetchBlogPosts = async (slug) => {
  const req = await fetch(`${apiEndpoint}/blog-posts`);
  const res = await req.json();
  return res.data;
};
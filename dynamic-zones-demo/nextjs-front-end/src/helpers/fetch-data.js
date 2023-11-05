const apiEndpoint = 'http://127.0.0.1:1337/api';

export const fetchSinglePageData = async (slug) => {
  const req = await fetch(`
    ${apiEndpoint}/pages?filters[slug][$eq]=${slug}&populate[0]=Blocks&populate[1]=Blocks.Image&populate[2]=Blocks.FAQItem`
  );

  const res = await req.json();
  return res.data[0];
}

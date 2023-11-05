import { fetchSinglePost } from '../../../helpers/fetch-blog-posts';
import Markdown from 'react-markdown';

export async function generateMetadata({ params }) {
  const blogPost = await fetchSinglePost(params.slug);
  const metaTags = blogPost.attributes?.SEO?.MetaTags?.map(tag => [tag.Name, tag.Content]);

  return {
    title: blogPost.attributes?.SEO?.MetaTitle,
    description: blogPost.attributes?.SEO?.MetaDescription,
    other: metaTags ? Object.fromEntries(metaTags) : null
  };
}

const Post = async ({ params }) => {
  const blogPost = await fetchSinglePost(params.slug);
  
  return (
    <main className="container mx-auto max-w-screen-sm">
      <h1 className="text-3xl bold my-10">{blogPost.attributes.Title}</h1>
      <div className="prose dark:prose-invert">
        <Markdown>{blogPost.attributes.Content}</Markdown>
      </div>
    </main>
  );
}

export default Post;

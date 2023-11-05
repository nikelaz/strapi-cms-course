import { fetchBlogPosts } from '../helpers/fetch-blog-posts';

const Home = async () => {
  const blogPosts = await fetchBlogPosts();

  return (
    <main className="container mx-auto max-w-screen-sm">
      <h1 className="text-3xl bold my-10">Next.js Blog</h1>
      <ul>
        {blogPosts.map(post => (
          <li key={post.attributes.id}>
            <a className="text-blue-200 underline text-xl semibold mb-2 block" href={`/posts/${post.attributes.Slug}`}>{post.attributes.Title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Home;

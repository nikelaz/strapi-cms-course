import { fetchSinglePageData } from '@/helpers/fetch-data';
import BlockRenderer from '@/components/block-renderer';

const Page = async ({params}) => {
  const data = await fetchSinglePageData(params.slug);

  return (
    <div className="container mx-auto max-w-screen-sm">
      <h1 className="text-4xl my-10 semibold">{data.attributes.Title}</h1>
      {data.attributes.Blocks.map(block => <BlockRenderer block={block} key={block.id} />)}
    </div>
  )
};

export default Page;

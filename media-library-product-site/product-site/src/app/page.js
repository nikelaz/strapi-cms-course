import Card from './card';
import config from './config';

const Home = async () => {
  const { data } = await fetch(`${config.api}/api/products?fields[0]=id&fields[2]=Title&populate=FeaturedImage`).then(res => res.json());

  return (
    <>
      <h1 className="text-3xl text-slate-950 font-semibold my-10">Products</h1>
      <div className="grid grid-cols-2 gap-8">
        { data.map(product => (
          <Card
            key={product.id}
            imageUrl={`${config.api}${product.attributes.FeaturedImage.data.attributes.formats.medium.url}`}
            href={`/${product.id}`}
          >
            <h2 className="text-lg text-slate-800 font-semibold">{product.attributes.Title}</h2>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Home;

import sliderStyles from './slider.module.sass';
import config from '../config';

export async function generateStaticParams() {
  const { data } = await fetch(`${config.api}/api/products?fields[0]=id`).then(res => res.json());
 
  return data.map((product) => ({
    slug: product.attributes.id,
  }));
}

const ProductDetails = async ({ params }) => {
  const product = await fetch(`${config.api}/api/products/${params.slug}?populate=*`).then(res => res.json());
  const attr = product.data.attributes;

  return (
    <>
      <h1 className="text-3xl text-slate-950 font-semibold my-10">{attr.Title}</h1>

      { attr.CarouselMedia ? (
        <div className={`${sliderStyles.slider} mb-7`}>
          {
            attr.CarouselMedia.data.map(slide => (
              <div className={sliderStyles.slide} key={slide.id}>
                <img src={`${config.api}${slide.attributes.formats.large.url}`} />
              </div>
            ))
          }
        </div>
      ) : null}

      <h2 className="text-lg font-semibold text-slate-950 mb-3">Description</h2>
      <p className="mb-7">{attr.Description}</p>
      
      <h2 className="text-lg font-semibold text-slate-950 mb-3">Overview Video</h2>

      { attr.Video ? (
        <video controls>
          <source src={`${config.api}${attr.Video.data.attributes.url}`} type={attr.Video.data.attributes.mime} />
        </video>
      ) : null}

      { attr.SpecSheet ? (
        <a
          target="_blank"
          href={`${config.api}${attr.SpecSheet.data.attributes.url}`}
          className="bg-slate-800 text-white font-semibold py-3 px-5 rounded-md hover:bg-slate-900 transition-colors inline-block my-10"
        >
          Download Spec Sheet
        </a>
      ) : null}
    </>
  );
}

export default ProductDetails;

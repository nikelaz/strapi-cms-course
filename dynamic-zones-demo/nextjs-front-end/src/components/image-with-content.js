const imageBucketUrl = 'http://127.0.0.1:1337';

const ImageWithContent = ({ block }) => (
  <div className="grid grid-cols-2 gap-8 mb-12">
    <img src={`${imageBucketUrl}${block.Image.data.attributes.url}`} alt="" />
    <div>
      <h2 className="text-xl semibold mb-3">{block.Title}</h2>
      <p className="text-sm">{block.Description}</p>
    </div>
  </div>
  
);

export default ImageWithContent;

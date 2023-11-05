import Link from 'next/link';

const Card = ({ children, href, imageUrl }) => (
  <Link href={href} className="block shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
    <div className="aspect-video overflow-hidden relative">
      <img src={imageUrl} className="absolute inset-0 object-cover w-full h-full"/>
    </div>
    <div className="p-5">
      { children }
    </div>
  </Link>
);

export default Card;

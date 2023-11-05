import Button from "./button";

const CallToAction = ({ block }) => (
  <div className="mb-12">
    <h2 className="text-xl mb-2">{block.Headline}</h2>
    <p className="text-sm mb-5">{block.Description}</p>
    <Button href={block.URL}>{block.ButtonText}</Button>
  </div>
);

export default CallToAction;

import CallToAction from './call-to-action';
import ImageWithContent from './image-with-content';
import FAQs from './faqs';

const blockTypes = {
  ImageWithContent: 'page-components.image-with-content',
  CallToAction: 'page-components.call-to-action',
  FAQs: 'page-components.fa-qs'
}

const BlockRenderer = ({ block }) => {
  switch (block.__component) {
    case blockTypes.ImageWithContent:
      return <ImageWithContent block={block} />;
    case blockTypes.CallToAction:
      return <CallToAction block={block} />;
    case blockTypes.FAQs:
      return <FAQs block={block} />
    default:
      return null;
  }
};

export default BlockRenderer;

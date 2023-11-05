import type { Schema, Attribute } from '@strapi/strapi';

export interface PageComponentsCallToAction extends Schema.Component {
  collectionName: 'components_page_components_call_to_actions';
  info: {
    displayName: 'CallToAction';
    icon: 'cursor';
  };
  attributes: {
    Headline: Attribute.String;
    Description: Attribute.Text;
    ButtonText: Attribute.String;
    URL: Attribute.String;
    Type: Attribute.Enumeration<['Primary', 'Secondary']>;
  };
}

export interface PageComponentsFaQs extends Schema.Component {
  collectionName: 'components_page_components_fa_qs';
  info: {
    displayName: 'FAQs';
    icon: 'bulletList';
  };
  attributes: {
    Title: Attribute.String;
    FAQItem: Attribute.Component<'page-components.faq-item', true>;
  };
}

export interface PageComponentsFaqItem extends Schema.Component {
  collectionName: 'components_page_components_faq_items';
  info: {
    displayName: 'FAQItem';
    icon: 'file';
  };
  attributes: {
    Question: Attribute.String;
    Answer: Attribute.Text;
  };
}

export interface PageComponentsImageWithContent extends Schema.Component {
  collectionName: 'components_page_components_image_with_contents';
  info: {
    displayName: 'ImageWithContent';
    icon: 'picture';
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media;
    Description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page-components.call-to-action': PageComponentsCallToAction;
      'page-components.fa-qs': PageComponentsFaQs;
      'page-components.faq-item': PageComponentsFaqItem;
      'page-components.image-with-content': PageComponentsImageWithContent;
    }
  }
}

import type { Schema, Attribute } from '@strapi/strapi';

export interface PagePropertiesMetaTags extends Schema.Component {
  collectionName: 'components_page_properties_meta_tags';
  info: {
    displayName: 'MetaTags';
    icon: 'code';
  };
  attributes: {
    Name: Attribute.String;
    Content: Attribute.String;
  };
}

export interface PagePropertiesSeo extends Schema.Component {
  collectionName: 'components_page_properties_seos';
  info: {
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    MetaTitle: Attribute.String;
    MetaDescription: Attribute.Text;
    MetaTags: Attribute.Component<'page-properties.meta-tags', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page-properties.meta-tags': PagePropertiesMetaTags;
      'page-properties.seo': PagePropertiesSeo;
    }
  }
}

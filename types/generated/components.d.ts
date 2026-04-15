import type { Schema, Struct } from '@strapi/strapi';

export interface RowsHero extends Struct.ComponentSchema {
  collectionName: 'components_rows_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images' | 'files'>;
    logo: Schema.Attribute.Media<'images' | 'files'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'rows.hero': RowsHero;
    }
  }
}

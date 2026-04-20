import type { Schema, Struct } from '@strapi/strapi';

export interface HistoriqueEvenementHistorique extends Struct.ComponentSchema {
  collectionName: 'components_historique_evenement_historiques';
  info: {
    displayName: 'Ev\u00E9nement historique';
  };
  attributes: {
    date_end: Schema.Attribute.Date;
    date_start: Schema.Attribute.Date & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'historique.evenement-historique': HistoriqueEvenementHistorique;
    }
  }
}

import type { Schema, Struct } from '@strapi/strapi';

export interface CarteVigne extends Struct.ComponentSchema {
  collectionName: 'components_carte_vignes';
  info: {
    displayName: 'Vigne';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    location: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<'plugin::google-maps.location-picker'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

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

export interface VinsBouteille extends Struct.ComponentSchema {
  collectionName: 'components_vins_bouteilles';
  info: {
    displayName: 'Bouteille';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'carte.vigne': CarteVigne;
      'historique.evenement-historique': HistoriqueEvenementHistorique;
      'vins.bouteille': VinsBouteille;
    }
  }
}

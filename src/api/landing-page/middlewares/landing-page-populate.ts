/**
 * `landingPagePopulate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
        hero_banner: {
                populate: {
                        logo: {
                                fields: ["url"],
                        },
                        background_image: {
                                fields: ["url"],
                        },
                },
        },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
        // Add your own logic here.
        return async (ctx, next) => {

                // ctx.query.populate = populate;

                strapi.log.info('In landingPagePopulate middleware.');

                await next();
        };
};

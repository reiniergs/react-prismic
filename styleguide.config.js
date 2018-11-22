/* eslint-disable */
const path = require('path');
const withRainbowStyles = require('react-rainbow-styleguide');
const version = require('./package.json').version;

module.exports = withRainbowStyles({
    version,
    title: 'react-prismic-cms',
    ignore: ['**/__tests__/**', '/node_modules/**'],
    require: [
        path.resolve(__dirname, 'src/library/setup.js'),
    ],
    skipComponentsWithoutExample: true,
    pagePerSection: true,
    ribbon: { url: 'https://github.com/reiniergs/react-prismic-cms' },
    template: {
        favicon: 'https://react-prismic-cms.firebaseapp.com/favicon.ico',
        head: {
            meta: [
                {
                    name: 'robots',
                    content: 'index,follow'
                },
                {
                    name: 'description',
                    content: 'Set of declarative component to query content published in the headless CMS prismic.io'
                },
                {
                    name: 'keywords',
                    content: 'react, prismic, cms, content, components, library'
                },
                {
                    property: 'og:title',
                    content: 'React Prismic CMS'
                },
                {
                    property: 'og:description',
                    content: 'Set of declarative component to query content published in the headless CMS prismic.io'
                },
                {
                    property: 'og:image',
                    content: 'https://react-rainbow.firebaseapp.com/share-image.png'
                }
            ]
        },
    },
    sections: [
        {
            name: 'Getting started',
            sectionDepth: 1,
            content: 'docs/usage.md',
            sections: [
                {
                    name: 'Overview',
                    content: 'docs/overview.md',
                },
                {
                    name: 'Usage',
                    content: 'docs/usage.md',
                },
            ],
        },
        {
            name: 'Query Components',
            components: 'src/components/**/index.js',
            sectionDepth: 1,
            usageMode: 'expand',
        },
        {
            name: 'Docs Components',
            components: 'src/library/**/index.js',
            sectionDepth: 1,
            usageMode: 'expand',
        },
    ],
});

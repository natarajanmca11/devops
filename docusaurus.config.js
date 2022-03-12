/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DevOps',
  tagline: 'Cloud & DevOps Reference Guide',
  url: 'https://natarajanmca11.github.io',
  baseUrl: '/devops/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn', //throw, warn
  favicon: 'img/favicon.ico',
  organizationName: 'Natarajan Ganapathi', // Usually your GitHub org/user name.
  projectName: 'devops', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/natarajanmca11/devops/blob/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/natarajanmca11/devops/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'DevOps',
        logo: {
          alt: 'DevOps',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Docs',
          },
          // {
          //   type: 'doc',
          //   docId: 'tools/index',
          //   position: 'left',
          //   label: 'Tools',
          // },
          { to: 'blog', label: 'Blog', position: 'left' },
          // Please keep GitHub link to the right for consistency.
          {
            href: 'https://github.com/natarajanmca11/devops',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Cloud Basics',
                to: 'docs/cloud/azure',
              },
              {
                label: 'DevOps Tools',
                to: 'docs/tools/ansible',
              },
              {
                label: 'DevOps for Programming',
                to: 'docs/program-language/dotnet',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/natarajanmca11/devops',
              },
            ],
          },
          // {
          //   title: 'Legal',
          //   // Please do not remove the privacy and terms, it's a legal requirement.
          //   items: [
          //     {
          //       label: 'Privacy',
          //       href: 'https://opensource.facebook.com/legal/privacy/',
          //     },
          //     {
          //       label: 'Terms',
          //       href: 'https://opensource.facebook.com/legal/terms/',
          //     },
          //     {
          //       label: 'Data Policy',
          //       href: 'https://opensource.facebook.com/legal/data-policy/',
          //     },
          //     {
          //       label: 'Cookie Policy',
          //       href: 'https://opensource.facebook.com/legal/cookie-policy/',
          //     },
          //   ],
          // },
        ],
        // logo: {
        //   alt: 'Facebook Open Source Logo',
        //   src: 'img/oss_logo.png',
        //   href: 'https://opensource.facebook.com',
        // },
        // Please do not remove the credits, help to publicize Docusaurus :)
        copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;

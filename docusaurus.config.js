// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'sumlog',
  tagline: 'sumlog',
  url: 'https://sumlog.vercel.app/', // 배포된 사이트 url
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/sumlogo.svg',
  organizationName: 'sumin', // Usually your GitHub org/user name.
  projectName: 'sumlog', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/sum-in-e/sumlog',
        },
        blog: {
          blogTitle: 'sumlog: 개발 기록',
          blogDescription: `Sumin's blog!`,
          blogSidebarCount: 'ALL', // 모든 게시물 보일 수 있도록 설정 / '0'설정 시 사이드바 비활성화
          blogSidebarTitle: 'All posts', // 사이드바 최상단에 보여지는 타이틀
          showReadingTime: true,
          routeBasePath: '/',
          editUrl: 'https://github.com/sum-in-e/sumlog',
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
          postsPerPage: 10,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        gtag: {
          trackingID: 'G-LKVYG7KZVF',
          anonymizeIP: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 글로벌 메타데이터
      metadata: [{ name: 'sumlog', content: 'development, blog' }],
      // navbar 설정
      navbar: {
        title: 'Sumlog',
        logo: {
          alt: 'Sumlog Logo',
          src: 'img/sumlogo.svg',
        },
        items: [
          // doc 초기 세팅
          {
            type: 'doc',
            docId: 'intro', // docs탭 클릭 시 첫 페이지에 보여질 docId
            position: 'left',
            label: 'Docs', // navbar에 보여질 메뉴 이름
          },
          // blog 세팅
          // { to: '/blog', label: 'Blog', position: 'left' },
          // Github 링크 연결
          {
            href: 'https://github.com/sum-in-e',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // footer 설정
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '개발위키',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Rocketpunch',
                href: 'https://www.rocketpunch.com/@72981d59',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/sum-in-e',
              },
            ],
          },
          {
            title: 'Email',
            items: [
              {
                label: 'Gmail',
                href: 'mailto:suminkim.me@gmail.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/sum-in-e',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sumlog, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

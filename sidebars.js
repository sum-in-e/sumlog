/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro', // grouping 없이 문서만 배치할 경우 해당 문서의 타이틀이 사이드바 라벨로 표시된다.
    // git, github
    {
      type: 'category',
      label: 'Git/Github', //사이드바에 표시되는 라벨
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: ['git/commitConvention'], // id는 파일루트
    },
    // React
    {
      type: 'category',
      label: 'React', //사이드바에 표시되는 라벨
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: ['react/intro', 'react/rendering', 'react/memoization'], // id는 파일루트, 문서 추가할 때마다 추가 필요
    },
    // TypeScript
    {
      type: 'category',
      label: 'TypeScript', //사이드바에 표시되는 라벨
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: ['typescript/general'], // id는 파일루트, 문서 추가할 때마다 추가 필요
    },
    // 외부 링크
    {
      type: 'link', // 링크로 타입 지정
      label: 'Github', // 링크 라벨
      href: 'https://github.com/sum-in-e', // 외부 URL
    },
    // 내부 링크 -> nav에는 속하지 않는 독립적인 페이지를 pages폴더에 만들어서 해당 페이지로 이동하게 하는 식으로도 사용 가능
    {
      type: 'link', // 링크로 타입 지정
      label: 'Blog', // 링크 라벨
      href: '/', // 내부 경로
    },
  ],
};

module.exports = sidebars;

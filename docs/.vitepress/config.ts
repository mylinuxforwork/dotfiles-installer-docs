// .vitepress/config.ts
export default {
  title: 'ML4W Dotfiles Installer',
  description: 'ML4W Dotfiles Installer: Authentic. Modular. Safe.',
  base: "/dotfiles-installer/",
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ["link", { rel: "icon", href: "com.ml4w.dotfilesinstaller.svg" }],
  ],

  themeConfig: {
    siteTitle: "ML4W Dotfiles Installer",
    logo: "/com.ml4w.dotfilesinstaller.svg",
    outline: "deep",
    docsDir: "/docs",
    editLink: {
      pattern: "https://github.com/mylinuxforwork/dotfiles-installer/tree/master/docs/:path",
      text: "Edit this page on GitHub",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/getting-started/overview" },
     {
        text: "0.2.0",
        items: [
          {
            text: 'Changelog',
            link: '/changelog.md'
          },
        ],
      },
      {
        text: "More",
        items: [
          {
            text: 'ML4W OS - Dotfiles for Hyprland',
            link: 'https://ml4w.com/os/'
          },
          {
            text: 'ML4W Hyprland Starter',
            link: 'https://github.com/mylinuxforwork/hyprland-starter'
          },
          {
            text: 'Wallpapers',
            link: 'https://github.com/mylinuxforwork/wallpaper'
          },
        ],
      },
    ],

    sidebar: {
      '/': [
        {
          text: "Getting Started",
          // collapsed: false,
          items: [
            { text: "Overview", link: "/getting-started/overview" },
            { text: "Install", link: "/getting-started/install" },
          ],
        },
        {
          text: "Developer Guide",
          // collapsed: false,
          items: [
            { text: "Overview", link: "/dev/overview" },
            { text: "Example .dotinst", link: "/dev/examples" },
            { text: "Prepare Git Repository", link: "/dev/prepare-git-repository" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/mylinuxforwork" },
    ],

    footer: {
      message: `Released under the GPL License`,
      copyright: `<a href="https://ml4w.com/imprint">
        <img src="ml4w.png" alt="ML4W" />
        Copyright © 2026 Stephan Raabe / Imprint / Privacy Policy
      </a>`,
    },

    search: {
      provider: "local",
    },

    returnToTopLabel: 'Go to Top',
    sidebarMenuLabel: 'Menu',
  },
};

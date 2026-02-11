// .vitepress/config.ts
export default {
  title: 'ML4W Dotfiles Installer Wiki',
  description: 'Easy installer app for dotfiles configurations',
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
        text: "0.12.1",
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
          {
           text: 'Contributing to wiki →',
           link: '/dev/contributing'
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
            { text: "Update", link: "/getting-started/update" },
          ],
        },
        {
          text: "Install Dotfiles",
          // collapsed: false,
          items: [
            { text: "Load a .dotinst File", link: "/install/load-dotinst" },
            { text: "Backup your configuration", link: "/install/backup" },
            { text: "Define Settings", link: "/install/settings" },
            { text: "Restore your Dotfiles Settings", link: "/install/restore" },
            { text: "Protect your Customization", link: "/install/protect" },
            { text: "Run the Installation", link: "/install/installation" },
          ],
        },
        {
          text: "For Developers",
          // collapsed: false,
          items: [
            { text: "Overview", link: "/dev/overview" },
            { text: "Prepare a GitHub repository", link: "/dev/prepare-git-repository" },
            { text: "Create a project", link: "/dev/create-project" },
            { text: "Sync files", link: "/dev/sync-files" },
            { text: "Publish your Dotfiles", link: "/dev/publish-dotfiles" },
            { text: "Example .dotinst files", link: "/dev/examples" },
            { text: "Contributing to wiki", link: "/dev/contributing" },
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

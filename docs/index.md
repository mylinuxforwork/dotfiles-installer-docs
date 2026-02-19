---
layout: home
pageClass: home-page

hero:
  name: "The ML4W Dotfiles Installer"
  image:
    src: /com.ml4w.dotfilesinstaller.svg
    alt: Linux logo
    style: "width: 200px; height: auto;"  
  tagline: Install Dotfiles easily. Authentic. Modular. Safe. 
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started/overview
    - theme: alt
      text: Install
      link: /getting-started/install
    - theme: alt
      text: GitHub ↗
      link: https://github.com/mylinuxforwork/dotfiles-installer

features:
  - title: ⚙️ Distribution Intelligence
    details: Native support for pacman, dnf, and zypper. It understands your system's package manager so you don't have to.
  - title: 🧪 Automated Safety
    details: Every update triggers a full snapshot backup. With intelligent symlink replacement, you can switch between different project IDs seamlessly.
  - title: 🛠 Developer Empowerment
    details: Built-in --testmode for dry-runs, local source support for rapid prototyping, and a modular architecture that's easy to extend.
---

Experience a professional-grade Profile Manager designed for the modern Linux user. The ML4W Dotfiles Installer provides a robust command-line interface to deploy, manage, and update your Linux configurations across Arch, Fedora, and openSUSE with absolute precision and peace of mind.

> [!IMPORTANT]
> The Flatpak based Dotfiles Installer is not supported anymore. You can uninstall it with `flatpak uninstall com.ml4w.dotfilesinstaller`. The new script based installer is compatible with existing .dotinst files.

## Why Choose the ML4W Dotfiles Installer?

- Distribution Intelligence: Native support for pacman, dnf, and zypper. It understands your system's package manager so you don't have to.

- Sandbox Security: Your $HOME is a temple. Our unique "Sandbox Staging" process ensures dotfiles are validated in a local environment before a single symlink is created.

- Automated Safety: Every update triggers a full snapshot backup. With intelligent symlink replacement, you can switch between different project IDs seamlessly.

- Developer Empowerment: Built-in --testmode for dry-runs, local source support for rapid prototyping, and a modular architecture that's easy to extend.

- Complete Control: Use Blacklists to preserve your local hardware tweaks and User Overrides to inject custom post.sh logic into any profile.

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, var(--vp-c-purple-3), var(--vp-c-brand-3));
  --vp-home-hero-image-filter: blur(44px);

  --overlay-gradient: color-mix(in srgb, var(--vp-c-brand-1), transparent 40%);
}

.dark {
  --overlay-gradient: color-mix(in srgb, var(--vp-c-brand-1), transparent 75%);
}

.home-page {
  background:
    linear-gradient(200deg, transparent 25%, var(--overlay-gradient) 55%, transparent 85%),
    radial-gradient(ellipse at 80% 180%, var(--overlay-gradient), transparent 60%),
    var(--vp-c-bg);
  background-repeat: no-repeat;
  background-size: cover;

  .VPFeature a {
    font-weight: bold;
    color: var(--vp-c-brand-2);
  }

  .VPFooter {
    background-color: transparent !important;
    border: none;
  }

  .VPNavBar {
    background-color: transparent !important;
    -webkit-backdrop-filter: blur(16px);
    backdrop-filter: blur(16px);

    div.divider {
      display: none;
    }
  }
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>

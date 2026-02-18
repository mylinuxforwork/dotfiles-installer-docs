# Getting Started

The ML4W Dotfiles Installer is more than just a script; it is a professional deployment pipeline for your Linux environment.

## 🏗 The Staging Architecture
Safety is built into the core. The installer follows a strict logical flow to ensure system stability:

1. **Dependency Sync:** Automatically verifies and installs core tools like `jq` and `gum`.
2. **Sandbox Creation:** Clones the target repository into a localized staging area (`~/.mydotfiles-test/[ID]`).
3. **Logic Execution:** Runs distro-specific preflight scripts and installs required packages.
4. **Final Deployment:** Synchronizes the staged files to your `$HOME` using intelligent symlinks.



## 🛠 Preparation for Creators
If you want to host your own configurations, ensure your repository contains:
- A `.dotinst` JSON profile at the root.
- A `dotfiles/` folder (or a custom subfolder defined in your profile).
- A `setup/dependencies/` directory with package lists.

## 🧪 Safe Testing
Use the `--testmode` flag to verify your installation logic (packages and scripts) without staging any files or modifying your `$HOME` directory:
```bash
ml4w-dotfiles-installer --install ./my-profile.dotinst --testmode
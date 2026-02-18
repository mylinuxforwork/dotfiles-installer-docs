# Installation Guide

Deploy the ML4W Dotfiles Installer to your system and start managing your profiles today.

## ⚙️ Requirements
The installer is distro-agnostic and supports:
- **Arch Linux** (Pacman/AUR helpers)
- **Fedora** (DNF)
- **openSUSE** (Zypper)

## 🚀 Quick Install
To install the installer script globally:

```bash
# Clone the Repo
git clone https://github.com/mylinuxforwork/ml4w-dotfiles-installer.git

# Run Make
cd ml4w-dotfiles-installer
make install

```
> Verify PATH: Ensure ~/.local/bin is in your environment $PATH.

## 📦 Usage Examples

Install a Remote Profile
```bash
ml4w-dotfiles-installer --install https://raw.githubusercontent.com/user/repo/main/profile.dotinst
```

Install from a Local Folder (Development)
```bash
ml4w-dotfiles-installer --install ~/Projects/my-dots/dev.dotinst
```
## 🛡️ Pro Features

- User Scripts: Create ~/.config/ml4w-dotfiles-installer/[ID]/post.sh to run your personal tweaks after every update.

- Blacklisting: Create a blacklist file in your ID config folder to prevent specific files (like monitors.conf) from being overwritten.

- Test Mode: Run --testmode to dry-run the installation of packages and execution of scripts.


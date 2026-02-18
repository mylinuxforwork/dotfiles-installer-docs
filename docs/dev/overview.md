# Developer Quickstart

This guide helps you adapt your existing dotfiles repository for the ML4W Installer.

## 1. Prepare Your Repository Structure

The installer expects a specific layout to handle dependencies and staging correctly. Ensure your repo follows this pattern:

```text
your-dotfiles-repo/
├── dotfiles/               # Everything here is staged and symlinked
│   ├── .config/            # Symlinked to ~/.config/
│   └── .zshrc              # Symlinked to $HOME/
└── setup/
    ├── preflight-arch.sh   # (Optional) Runs before packages
    ├── post-arch.sh        # (Optional) Runs after packages
    └── dependencies/
        ├── packages        # List of generic packages
        └── packages-arch   # List of Arch-specific packages

```

## 2. Create a Development `.dotinst` File

Create a local `dev.dotinst` file on your machine to point to your local project folder. This allows you to test changes instantly without pushing to GitHub.

```json
{
  "name": "My Profile [Dev]",
  "id": "com.developer.mysetup",
  "version": "1.0.0-dev",
  "author": "Your Name",
  "source": "~/Projects/your-dotfiles-repo",
  "subfolder": "dotfiles"
}

```

## 3. The Development Workflow

**A. Test Setup Logic Only**
Use `--testmode` to verify that your package lists and pre/post scripts work across different distros without affecting your personal config files.

```bash
ml4w-dotfiles-installer --install ./dev.dotinst --testmode

```

**B. Full Sandbox Deployment**
Run a full installation to see how files are staged in the sandbox (`~/.mydotfiles-test/`) and how symlinks are generated.

```bash
ml4w-dotfiles-installer --install ./dev.dotinst

```

**C. Iterative Testing**

1. Modify a file in your `~/Projects/your-dotfiles-repo`.
2. Re-run the installer.
3. The installer will detect the changes, update the sandbox, and refresh the symlinks.

## 4. Advanced: Testing User Overrides

To test the "Personal Override" feature, create a local `post.sh` in the installer's config directory for your ID:

```bash
mkdir -p ~/.config/ml4w-dotfiles-installer/com.developer.mysetup
echo "echo 'Hello from my local override!'" > ~/.config/ml4w-dotfiles-installer/com.developer.mysetup/post.sh
chmod +x ~/.config/ml4w-dotfiles-installer/com.developer.mysetup/post.sh

```

Run the installer again to confirm "User Script: Detected" appears in the profile information.

---
slug: rust
title: Rust
# authors: [natarajan]
tags: [rust]
sidebar_position: 5
---

## Install Rust

```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

## Install Rust Nightly build

```shell
rustup install nightly
```

## Debug Rust source code in VS Code
1. Install VS Code Plugin `C/C++` for Windows / `CodeLLDB` for (OS X / Linux) for native code debugging.
2. Add `"debug.allowBreakpointsEverywhere": true` in `.vscode -> settings.json` file


:::tip Reference

[How to debug Rust in Development](https://www.forrestthewoods.com/blog/how-to-debug-rust-with-visual-studio-code/)

:::tip

## Other VSCode Tools for Rust
1. [Racer](https://github.com/racer-rust/racer) - code completion for Rust

## Build

Build the rust application and create the [Docker](../tools/container.md#rust-container-image) image.

## Set nightly to work with latest version

---
## Cargo Commands

### Create Workspace (Manual process)

Filename: Cargo.toml
```toml
[workspace]

members = [
    "binary-name",
    "library-name"
]
```
Please gothrough the [actix](https://github.com/actix/actix-extras/blob/master/Cargo.toml) git repo for sample project.

### Create Project

```shell
# Creating binary
cargo new <package-name>

# Creating library
cargo new <library-name> --lib
```

### Build the application
```sh
cargo build

# Build spacific package
cargo build -p <package-name>
```

### Run the application
```sh
cargo run -p <package-name>
#example
cargo run -p mission-cli
```

### Run the test
```sh
cargo test

# Test perticular package
cargo test -p <package-name>
```

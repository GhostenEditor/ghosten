<div align="center">

# Ghosten Editor

![Banner](https://user-images.githubusercontent.com/121630113/210319723-d0a2e574-4197-4379-a8c5-96e4b17c52b9.png)

[//]: # (中文 |)
[//]: # (English)

![npm](https://img.shields.io/npm/v/@ghosten/common?logo=npm)
![GitHub](https://img.shields.io/github/license/GhostenEditor/ghosten)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/GhostenEditor/ghosten/release.yml)

</div>


Ghosten Editor is a low code editor for website(client as well with [Tauri](https://tauri.app)) written by [Angular](https://angular.io). You can use it to build Website faster and easily. Explore it in the [Demo Page](https://ghosteneditor.github.io/ghosten/en-US/)

<div align="center">

### Screenshots

</div>

| Browser                            | Mobile |
|------------------------------------|:-------:|
| <img width="1710" alt="截屏2023-01-30 13 48 10" src="https://user-images.githubusercontent.com/121630113/215397317-216547c0-89b0-4301-9543-9f32272140c8.png">       | ![Simulator Screen Shot - iPhone 12 - 2023-01-30 at 13 53 03](https://user-images.githubusercontent.com/121630113/215398036-ad158248-5032-4d09-8e8f-41ae9aef55e1.png)  |

---

## Versions

| Angular                            | Ghosten |
|------------------------------------|:-------:|
| \>= **14.0.0** \< **16.0.0**       | v0.1.x  |
| \>= **12.0.0** \< **14.0.0**       |  todo   |
| \>= &nbsp; **9.0.0** \< **12.0.0** |  todo   |

Table of contents
=================

* [Features](#features)
* [Todos](#Todos)
* [Packages](#Packages)
* [Development](#Development)

## Features

- [x] Support Dark Mode
- [x] Desktop Application
- [x] Internationalization
- [x] Support Touch Devices and Mobile Devices
- [x] Support SSR

## Todos

- [ ] Bug Fix
- [ ] Docs
- [ ] Support Old Version Angular

# Browser	Support 
| BROWSER  | 	SUPPORTED VERSIONS                        |
|----------|--------------------------------------------|
| Chrome   | 	latest                                    |
| Firefox  | 	latest and extended support release (ESR) |
| Edge     | 	2 most recent major versions              |
| Safari   | 	2 most recent major versions              |
| iOS      | 	2 most recent major versions              |
| Android	 | 2 most recent major versions               |

## Packages

This is a monorepo which contains many packages:

| Project        | Package                                                                  |                              Version                              | Link                                                                                  |
|----------------|--------------------------------------------------------------------------|:-----------------------------------------------------------------:|---------------------------------------------------------------------------------------|
| **Common**     | [@ghosten/common](https://www.npmjs.com/package/@ghosten/common)         |   ![npm](https://img.shields.io/npm/v/@ghosten/common?logo=npm)   | [![README](https://img.shields.io/badge/README-green)](projects/common/README.md)     |
| **Editor**     | [@ghosten/editor](https://www.npmjs.com/package/@ghosten/editor)         |   ![npm](https://img.shields.io/npm/v/@ghosten/editor?logo=npm)   | [![README](https://img.shields.io/badge/README-green)](projects/editor/README.md)     |
| **Renderer**   | [@ghosten/renderer](https://www.npmjs.com/package/@ghosten/renderer)     |  ![npm](https://img.shields.io/npm/v/@ghosten/renderer?logo=npm)  | [![README](https://img.shields.io/badge/README-green)](projects/renderer/README.md)   |
| **Plugins**    | [@ghosten/plugins](https://www.npmjs.com/package/@ghosten/plugins)       |  ![npm](https://img.shields.io/npm/v/@ghosten/plugins?logo=npm)   | [![README](https://img.shields.io/badge/README-green)](projects/plugins/README.md)    |
| **Components** | [@ghosten/components](https://www.npmjs.com/package/@ghosten/components) | ![npm](https://img.shields.io/npm/v/@ghosten/components?logo=npm) | [![README](https://img.shields.io/badge/README-green)](projects/components/README.md) |
| **Database**   | [@ghosten/database](https://www.npmjs.com/package/@ghosten/database)     |  ![npm](https://img.shields.io/npm/v/@ghosten/database?logo=npm)  | [![README](https://img.shields.io/badge/README-green)](projects/database/README.md)   |


## Development

Clone the repository and install all the necessary dependencies

```sh
$ git clone https://github.com/GhostenEditor/ghosten.git
$ cd ghosten
$ npm install
```

Start the dev server

```sh
$ npm start
```

Once the development server is started you should be able to reach the demo page (eg. [http://localhost:4200](http://localhost:4200))

## Documentation

Check the getting started guide here: [Wiki](https://github.com/GhostenEditor/ghosten/wiki)

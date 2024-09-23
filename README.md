# p5.sound.js

p5.sound is a minimal abstraction of the [Tone.js](https://tonejs.github.io/) library. It is designed to extend the musical and sonic capabilities of p5.js with a feature set that is inspired by an accessible and poetic approach to creative coding. Functionality includes audio input, sound file playback and manipulation,  effects, synthesis and analysis.

## Examples

- Examples at [p5js.org/examples](https://p5js.org/examples/)
- Additional p5 editor examples [here](https://editor.p5js.org/thomasjohnmartinez/collections/Dp0zGclVL)
- p5.js Sound Tutorial by Dan Shiffman on [YouTube](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW)

## Documentation

Interactive documentation can be found at [p5js.org/reference/#/libraries/p5.sound](http://p5js.org/reference/#/libraries/p5.sound)

## Latest Build

- Visit http://p5js.org/download/ for the latest official release of p5 with the latest p5.sound included.
- The sound library [here](https://github.com/processing/p5.sound.js-pre-release) is updated more frequently, and we occasionally offer new [releases](https://github.com/processing/p5.sound.js-pre-release/releases) before the release cycle of p5.js.

## Contribute

If you would like to contribute to this project, visit https://github.com/processing/p5.js/tree/main/contributor_docs to get started.

If you have any questions or concerns regarding the project, you can reach out to our [Discord](https://discord.gg/HWzy4HpaEJ) and [Gitter](https://gitter.im/processing/p5.js-sound) communities. The p5.js team closely monitors all pull requests and issues on GitHub, so there's no need to also post them on Discord. Additionally, conversations about specific pull requests and issues should take place on GitHub, to ensure that people following along over can see and take part in the whole discussion.

## Dependencies

p5.sound is built using [Tone.js](https://github.com/tonejs/Tone.js), an interactive music framework developed by ([Yotam Mann](https://github.com/tambien)).

## Library Revision

This repository is an update of the [original p5.sound](https://github.com/processing/p5.js-sound) library (initially authored by [Jason Sigal](https://github.com/therewasaguy)), with the following goals:

- Code stability and readability
- Updated and fewer dependencies
- Deprecating the least used features
- Greater consistency between classes and methods

The project was started by aarón montoya-moraga([montoyamoraga](https://github.com/montoyamoraga)) during the 2023 p5.js sound fellowship (read the [announcement](https://medium.com/@ProcessingOrg/announcing-the-2023-p5-sound-fellow-aar%C3%B3n-montoya-moraga-7613450902f6) for more details) and was completed by [Tommy Martinez](https://github.com/ogbabydiesal) in September, 2024.

core contributors:
- Tommy Martinez ([ogbabydiesal](https://github.com/ogbabydiesal))
- aarón montoya-moraga ([montoyamoraga](https://github.com/montoyamoraga))

project advisors:
- Kristin Galvin ([blechdom](https://github.com/blechdom))
- Kenneth Lim ([limzykenneth](https://github.com/limzykenneth))
- Rachel Lim ([raclim](https://github.com/raclim))
- Yotam Mann ([tambien](https://github.com/tambien))
- Luisa Peirera ([luisaph](https://github.com/luisaph))
- Jason Sigal ([therewasaguy](https://github.com/therewasaguy))
- Cassie Tarakajian ([catarak](https://github.com/catarak))
- Qianqian Ye ([Qianqianye](https://github.com/Qianqianye))

## Usage

To use this library, make sure you have p5.js installed. Visit the [p5.js website](https://p5js.org/) for more information and installation instructions.

Please let us know if you find any bugs or issues by creating a new issue in this repo!

## Building the Library

installing the dependencies
```
npm install
```

building the library
```
npm run build
```

building reference pages (optional)
```
npx yuidoc .
```
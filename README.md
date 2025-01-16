# Office Depot Faststore

Hello!

Welcome to Office Depot office repository from is storefront. 

The storefront is based in VTEX Faststore, if you are not familiar with you can access some links ro read about:

https://faststore-platform.vercel.app/overview

https://developers.vtex.com/docs/guides/faststore




## Getting started


Please, make sure to have all requirements setup: https://developers.vtex.com/docs/guides/faststore/getting-started-requirements


##### You must have Faststore CLI in your machine

```
 npm install --global yarn
yarn global add @faststore/cli
```


Download the respository and runs `yarn` to install all dependencies.


### Dev


Starts the project in the development environment and uses http://localhost:3000 as server by default. This allows you to change the project and see the results locally on your machine in real-time without affecting the production environment.

Usage
```
yarn dev
```


## Developing a feature

The repository uses the [Conventional semantic versioning](https://medium.com/@jsilvax/automate-semantic-versioning-with-conventional-commits-d76a9f45f2fa) to the commit messages and branchs.

The commit contains the following structural elements, to communicate intent to the consumers of your library:

`fix`: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in semantic versioning).

`feat`: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in semantic versioning).

`BREAKING CHANGE`: a commit that has the text BREAKING CHANGE: at the beginning of its optional body or footer section introduces a breaking API change (correlating with MAJOR in semantic versioning). A breaking change can be part of commits of any type. e.g., a fix:, feat: & chore: types would all be valid, in addition to any other type.

`Others`: commit types other than fix: and feat: are allowed, for example @commitlint/config-conventional (based on the the Angular convention) recommends `chore:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, and others. We also recommend improvement for commits that improve a current implementation without adding a new feature or fixing a bug. Notice these types are not mandated by the conventional commits specification, and have no implicit effect in semantic versioning (unless they include a BREAKING CHANGE, which is NOT recommended). A scope may be provided to a commit’s type, to provide additional contextual information and is contained within parenthesis, e.g., feat(parser): add ability to parse arrays.

### How does it work

In your new branch add a commit with one of the following prefix

- `fix:`
- `feat:`
- `perf:`

| Commit message                                                                                                                                                                                   | Release type                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| `fix: stop graphite breaking when too much pressure applied`                                                                                                                             | ~~Patch~~ Fix Release                                                                                           |
| `feat: add 'graphiteWidth' option`                                                                                                                                                       | ~~Minor~~ Feature Release                                                                                       |
| `perf: remove graphiteWidth option`<br><br>`BREAKING CHANGE: The graphiteWidth option has been removed.`<br>`The default graphite width of 10mm is always used for performance reasons.` | ~~Major~~ Breaking Release <br /> |

[More information about Semantic-Release](https://medium.com/@jsilvax/automate-semantic-versioning-with-conventional-commits-d76a9f45f2fa)


## Components 

Every component is individually and oriented to its object. That being said, one component can have a group of other components, receiveing diferent props. 

Is important to structure in your folder always following a pattern:

```
└── components/
    ├── Example/
    │   ├── Example.tsx
    │   ├── Example.module.scss
    │   ├── ExampleTypes.d.ts
```

## CSS 

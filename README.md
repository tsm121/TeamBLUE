# Share with care
## Setting up the project locally
The steps should be somewhat similar for all operating systems, but the examples are from Ubuntu linux. The commands in this guide will problably be different on other systems.
### First steps
You need to install [node](https://nodejs.org/en/) and preferably [yarn](https://yarnpkg.com/lang/en/docs/install/), but you could do without it if you are not adding new packages.

Clone the repository to your local computer, and go to the folder destination.

Then you will need to install the dependencies. `yarn install` does this.

Example commands for the above steps in a terminal:
```
git clone https://github.com/tsm121/TeamBLUE.git
cd TeamBLUE
yarn install
```
The project should now be able to run.
The most important commands for running the project are `yarn dev`, which sets up a dev server running at [localhost:9000](http://localhost:9000) and `yarn serve`, which sets up an express server running at [localhost:8080](http://localhost:8080).

The express server serves the page directly from the dist (production) folder, and therefore the project needs to be built before this command can be run. `yarn build` or `yarn serve:prod` accomplishes this.

The reason to use `yarn dev` in addition to `yarn serve` is because it enbales hot reloading of the src folder. When making webpack or server changes, a full rebuild is needed.
### Linter
[ESLint][https://eslint.org/] is installed and follows the [Airbnb JavaScript style guide][https://github.com/airbnb/javascript] and more specificaly the [React/JSX Style Guide][https://github.com/airbnb/javascript/tree/master/react].
Always run `yarn eslint` and sort out the erros before committing.

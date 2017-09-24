This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## Deploy sub folder to heroku:
heroku git:remote -a engagehack
npm run build:www
Nav to root folder
git subtree push --prefix mobile/www heroku master
or id theres an issue
git push heroku `git subtree split --prefix mobile/www master`:master --force

## Issues
promise polyfill
https://github.com/ionic-team/ionic-app-scripts/issues/1001
npm install promise-polyfill --save-exact

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myBlank blank
```

Then, to run it, cd into `myBlank` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.


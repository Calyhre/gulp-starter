gulp-starter
============

[ ![Codeship Status for ArnaudRinquin/gulp-starter](https://www.codeship.io/projects/540c3e00-f957-0131-e8c4-3677fd0adc24/status)](https://www.codeship.io/projects/28857)

Starter Gulp + Browserify project with examples of how to accomplish some common tasks and workflows. Read the [blog post](http://viget.com/extend/gulp-browserify-starter-faq) for more context, and check out the [Wiki]() for some good background knowledge.

Includes the following tools, tasks, and workflows:

- Browserify (with browserify-shim)
- Watchify (caching version of browserify for super fast rebuilds)
- Compass
- CoffeeScript (with source mapping!)
- jQuery (from npm)
- Angular (from npm)
- Angular ui-router(from npm)
- Non common-js vendor code (like a jQuery plugin)
- LiveReload
- Static Server
- Image optimization
- Error Notifications in Notification Center
- Codeship

If you've never used Node or npm before, you'll need to install Node.
If you use homebrew, do:
```
brew install node
```

Otherwise, you can download and install from [here](http://nodejs.org/download/).

### Install Gulp and Bower Globally
Gulp must be installed globally in order to use the command line tools. *You may need to use `sudo`*
```
npm install -g gulp bower
```

### Install Compass (if you haven't already)
The gulp-compass module relies on Compass already being installed on your system.
```
gem update --system
gem install compass
```
### Install npm and bower dependencies
```
npm install && bower install
```
This runs through all dependencies listed in `package.json` and downloads them
to a `node_modules` folder in your project directory.

### Run gulp and be amazed.
```
gulp
```

This will create and run the task defined in `gulpfile.js`. If you're on OS X,
and have Chrome installed, a window will open displaying the demo page. If not,
you can visit http://localhost:8080 to view the test page.

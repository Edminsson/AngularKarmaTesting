# AngularKarmaTesting
Setting up tools for testing Angular or other javascript projects with Karma.
- Installing npm-packages: karma, karma-chrome-launcher, karma-jasmine, jasmine-core
- Install karma-cli (some install it globally)
- Create karma.conf.js with command "karma init". Choose jasmine and chrome.
- Configure karma.conf.js files property. Add paths to packages like angular, your application and your specs.
- Start your test with command "karma start" if karma.conf.js is in the same folder.
- To be able to run phantomjs you have to install the package with npm.

Had some problems installing and running phantomjs. When I started karma I a message telling me phantomjs could not be loaded and that it was not registered. The problem was an older phantomjs version that was installed globally. When I uninstalled it with "npm uninstall phantomjs -g" a newer version of karma-phantomjs-launcher was installed. There are some warnings that I don't understand but karma seems to be working whith phantomjs.

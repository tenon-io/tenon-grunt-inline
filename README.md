# tenon-grunt-inline

> Bundle assets for testing with tenon.io.

[![Build Status](https://travis-ci.org/tenon-io/tenon-grunt-inline.svg?branch=master)](https://travis-ci.org/tenon-io/tenon-grunt-inline)

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install tenon-grunt-inline --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('tenon-grunt-inline');
```

## The "tenon" task

### Overview
In your project's Gruntfile, add a section named `tenon` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  tenonInline: {
    options: {
      input: "path/to/some/file.html",
      dest: "path/to/some/output.html",
      basedir: "alternative/path/to/assets/"
    }
  },
});
```

### Options

#### options.input
Type: `String`
Required

A string value that points to the HTML file to be bundled.

#### options.dest
Type: `String`
Required

A string value that points to the output of the bundled file.

#### options.basedir
Type: `String`

A string value that points to an alternative path to perform asset lookups on.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  tenonInline: {
    options: {
      input: "./static/index.html"
      dest: "./bundle/index.html"
    }
  }
});
```

#### Custom Options

```js
grunt.initConfig({
  tenonInline: {
    options: {
      input: "./static/index.html"
      dest: "./bundle/index.html",
      basedir: "./src/assets/"
    }
  }
});
```

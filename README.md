# Part 2: Debugging Angular with App Engine Hosting
Debugging Angular with Visual Studio Code hosted on App Engine..

## Part 1: Debugging Angular as the Client
Part 1 covers debugging Angular as a client application. [Check out Part 1 here](https://github.com/branflake2267/debugging-angular).

[![Debugging Video Tutorial](https://img.youtube.com/vi/H-sMmxfNxBM/0.jpg)](https://www.youtube.com/watch?v=H-sMmxfNxBM)

## Part 2: Debugging Angular as the Client & Express as the server
Part 2 covers debugging Angular as the client with Express as the web server, which will be hosted on App Engine. 

* TODO Youtube video link

## Project Configuration
This is the part 2 configuraiton. 

| Setting | Value |
| --- | --- |
| Purpose | Debugging with VS Code using a simple Angular project |
| Client | Angular application |
| Server | Express web server |
| Client Framework | Angular |
| Client Language | TypeScript |
| Server Language | JavaScript |
| Architecture | npm/node |
| IDE | Visual Studio Code |
| License | GPL v3 |
| Tutorial | [Part 1 Youtube Tutorial](https://www.youtube.com/watch?v=H-sMmxfNxBM) Only Client |
| Tutorial | [Part 2 Youtube Tutorial](https://www.youtube.com/watch?v=xxxxxxxxx) Client & Server|



## Generate Application
The app generation is based on https://angular.io/guide/setup-local.

* Run `npm install -g @angular/cli` - Install the app generator CLI tool.
* Run `ng new client` - Generate an application, I named it `client`.
* Run `cd client` - Change directory to the app.
* Run `ng serve --open` - Start the compiler, web server and open Chrome. 


## Debugging

* From the project root, run `npm install` to download the libraries used in the client and server directories.

### Debugging Server
* Use the VS Code Launcher `1. Launch Server`
* http://localhost:8080 - ./ server
* http://localhost:8080/api - ./api server


### Debugging Client
* Use the VS Code Launcher `2. Launch ng serve & Chrome`
* http://localhost:4200 - ./ client


### Debugging with npm
* Run `npm start` will start the express web server


## Deploy



### Deploy Application



## Init Reference

### Cloud Tools CLI Installation

1. Sign up for [Google Cloud Compute](https://console.cloud.google.com/).
2. Create a project.
3. Create an App Engien Application https://console.cloud.google.com/appengine/start.
  - This app is Node.js & a Standard App Engine deployment.
  - Download Cloud SDK CLI tools
  - Run gcloud init

### app.yml
app.yml configures the web hosting service options. [app.yml reference](https://cloud.google.com/appengine/docs/standard/nodejs/config/appref)

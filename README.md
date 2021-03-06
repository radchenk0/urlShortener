# Url Shortener
Url Shortener is SPA for generating short urls aka slugs. Application consists of two parts - Rails API and AngularJs application. Its not separate applications beacuse I wanted to play around fresh official webpacker gem for Rails. So, it was a cool journey into the Rails API + AngularJs world.

## Working example on Heroku
[Url Shortener](https://obscure-badlands-23094.herokuapp.com/)

## Some features of my app
* Registration by email without confirmation for simplifying registration processes for now
* Token based authentication inside under the hood
* Rails app provides API for above actions and for basic CRUD operations for Url model except Update for simplicity
* AngularJs app developed in component way, with ES6 syntax, UI-Router
* Some client and server side validations, directives, services are presented here
* All HTTP requests to API wrapped in resource service
* App has own Rake task and schedule for removing original-slug pairs from DB on the 15th day after creation
* Separate action of Rails controller counts usages of each short url and saves it in db 
* Each User can monitor his own statistics of usings short urls, expired dates of urls
* Also provided user-friendly interface for sharing short urls - copying to clipboard
* Own Based62 module for encoding ids and decoding slugs 
* Lifecycle hooks around creating entities for generating slugs
* Original url validates at client and server sides by direct get request and checking HTTP response code
* Yarn for dependency management, Webpack 3 for bundling frontend modules for browser
* Bootstrap css and FontAwesome icons via cdn
* Adaptive design
* No JQuery dependencies
* etc

## Technologies and frameworks
* Ruby 2.3.4, Rails 5.1
* ES6, AngularJs 1.6
* PostgreSql
* UI-Router
* UI-Bootstrap
* Webpack 3, Yarn, Assets Pipeline
* Slim, Pug
* Bootstrap 3.7, FontAwesome

## Quick start
* Clone repo
```
git clone https://github.com/radchenk0/urlShortener.git
```
* Install front packages
``` 
yarn install
```
* Install gems
```
bundle install
```
* Create db and run migrates
```
rails db:create && rails db:migrate
```
* Start
```
rails s
```

## Usage
If you are interested you can feel free to use my url shortener application. Just sign up, sign in and use it:)

## Plans for nearest future
* Prepare some tests
* etc gloss
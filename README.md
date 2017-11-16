# Introduction

Url Shortener is web application for generating short urls aka slugs. Application consists of two parts - Rails Api and AngularJs application. Its not separate applications beacuse I wanted to play around fresh official webpacker gem for Rails. So, it was a cool journey into the Rails API + AngularJs world.
Some features of app:
* Registration by email without confirmation for simplifying registration processes for now
* Token based authentication inside under the hood
* Rails app provides API for above actions, also provides API for basic CRUD operations for Url model except Update for simplicity
* AngularJs app developed in component way, with ES6 syntax and UI-Router with Html5Mode without # and ! in url
* A lot of client side validations, directives, services are presented here
* All HTTP requests to API wrapped in resource service too
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

# Technologies and frameworks
* Ruby 2.4, Rails 5.1
* ES6, AngularJs 1.6
* PostgreSql
* UI-Router
* UI-Bootstrap
* Webpack 3, Yarn, Assets Pipeline
* Slim, Pug
* Bootstrap 3.7, FontAwesome

# Quick start
* Clone repo 
git clone https://github.com/radchenk0/urlShortener.git
* Install gems
bundle install
* Install front packages 
yarn install
* Create db and run migrates
rails db:create && rails db:migrate

If you havent got postgresql on your machine, pls follow next steps for successful start
https://coderwall.com/p/dovmsg/how-to-make-your-rails-app-start-talking-to-a-postgres-database

* Start
rails s

# Plans for nearest future
* AppConfig for proper app management via .env
* Deployment on Heroku
* Prepare some tests
* etc gloss
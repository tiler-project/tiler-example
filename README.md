# Tiler Example

## Quick Start

### Running the Example Dashboard

This codebase includes a sample dashboard created using [Tiler](https://github.com/tiler-project/tiler)

Prerequisites:

  * Install Oracle JDK 1.8+
  * Install Maven 3.2+
  * Install node.js 0.10+
  * Install Redis 2.8+

You then need to clone this repository and run:

  * $ npm install
  * $ npm install -g gulp
  * $ gulp build && mvn package vertx:runMod
  * Open http://localhost:8080/dashboards/sample in a browser

### Docker

The example dashboard is also available as a Docker container:

  * $ docker run tiler/tiler-example

When using the Docker container, it's not possible to modify the sample dashboard.

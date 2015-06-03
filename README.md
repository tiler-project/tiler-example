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
  * $ npm install -g grunt-cli
  * $ grunt build
  * $ mvn package vertx:runMod
  * Open http://localhost:8080/dashboards/sample in a browser

### Docker

The example dashboard is also available as a Docker container:

  * $ docker run tiler/tiler-example

When using the Docker container, it's not possible to modify the sample dashboard.

## API

There are two ways to get metrics into Tiler: i) using collectors like https://github.com/tiler-project/tiler-collector-sonarqube and ii) using Tiler's API. 

### Create Metrics

HTTP POST http://localhost:8080/api/metrics

Headers:
  * Content-Type: application/json

Request Body:

``` json
{
    "metrics": [{
        "name": "examples.api",
        "points": [{
            "time": 1,
            "value": 10
        },
        {
            "time": 2,
            "value": 20
        }]
    }]
}
```

View the metric by browsing to http://localhost:8080/dashboards/api


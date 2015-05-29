# Tiler Example

## Quick Start

Prerequisites:
  * Install Oracle JDK 1.8+
  * Install Maven 3.2+
  * Install node.js 0.10+
  * Install Redis 2.8+

Run:
  * $ npm install
  * $ npm install -g grunt-cli
  * $ grunt build
  * $ mvn package vertx:runMod
  * Open http://localhost:8080/dashboards/sample in a browser

## API

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


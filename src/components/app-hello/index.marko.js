// Compiled using marko@4.23.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onCreate: function() {
          this.state = {
              count: 0
            };
        },
        onMount: function() {
          console.log("Mounted in the browser!");
        },
        increment: function() {
          this.state.count++;
        }
      },
    marko_componentType = "/undefined$0/src/components/app-hello/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<p>Hello " +
    marko_escapeXml(input.name) +
    "</p><div class=count>" +
    marko_escapeXml(state.count) +
    "</div><button type=button class=example-button>Click me</button>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    deps: [
      {
          type: "css",
          code: ".count {\r\n        color:#09c;\r\n        font-size:3em;\r\n    }\r\n    \r\n    .example-button {\r\n        font-size:1em;\r\n        padding:0.5em;\r\n    }",
          virtualPath: "./index.marko.css",
          path: "./index.marko"
        }
    ],
    id: "/undefined$0/src/components/app-hello/index.marko",
    component: "./"
  };

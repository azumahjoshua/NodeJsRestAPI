# NodeJsRestAPI

# CrossFit Training Application.

Inside the Controller we'll be handling all stuff that is related to HTTP. That means we're dealing with requests and responses for our endpoints. Above that layer is also a little Router from Express that passes requests to the corresponding controller.

The whole business logic will be in the Service Layer that exports certain services (methods) which are used by the controller.

The third layer is the Data Access Layer where we'll be working with our Database. We'll be exporting some methods for certain database operations like creating a WOD that can be used by our Service Layer.

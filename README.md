# NodeJsRestAPI

# CrossFit Training Application.

Inside the Controller we'll be handling all stuff that is related to HTTP. That means we're dealing with requests and responses for our endpoints. Above that layer is also a little Router from Express that passes requests to the corresponding controller.

The whole business logic will be in the Service Layer that exports certain services (methods) which are used by the controller.

The third layer is the Data Access Layer where we'll be working with our Database. We'll be exporting some methods for certain database operations like creating a WOD that can be used by our Service Layer.

To improve the request validation you normally would use a third party package like express-validator.

Let's go into our workout service and receive the data inside our createNewWorkout method.

After that we add the missing properties to the object and pass it to a new method in our Data Access Layer to store it inside our DB.

We create a simple Util Function to overwrite our JSON file to persist the data.

Filtering, as the name already says, is useful because it allows us to get specific data out of our whole collection. For example all workouts that have the mode "For Time".

Pagination is another mechanism to split our whole collection of workouts into multiple "pages" where each page only consists of twenty workouts, for example. This technique helps us to make sure that we don't send more than twenty workouts at the same time with our response to the client.

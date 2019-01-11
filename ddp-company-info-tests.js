// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by ddp-company-info.js.
import { name as packageName } from "meteor/igoandsee:ddp-company-info";

// Write your tests here!
// Here is an example.
Tinytest.add('ddp-company-info - example', function (test) {
  test.equal(packageName, "ddp-company-info");
});

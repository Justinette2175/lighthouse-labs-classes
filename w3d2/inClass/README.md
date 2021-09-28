# W3D2 CRUD / BREAD over http

## TO DO

- [ ] What is CRUD? What is BREAD?
- [ ] Let's create a server that allows users to post thoughts
- [ ] Let's "seed" our initial data
- [ ] Let's create a route to GET all of our resources and make sure our browser can get our resources
- [ ] Let's create our ejs template to display our page (using the emmet shortcut `!`)
  - [ ] <% %>
  - [ ] <%= %>
- [ ] Make sure our page is really running now
- [ ] We have Browse, now let's do Read (of a single resource)
  - [ ] Use the express identifyer `:` to indicate a variable in our route (`:id`)
- [ ] Let's now make it so that we can link to individual ideas from the `ideas` page
- [ ] Let's make a form to modify (Edit in BREAD) an existing thought
- [ ] Let's create a new idea!
- [ ] AAAAAAnd let's add Delete functionality
- [ ] Why do all our `post` end with `res.redirect`, and why do our `/get` end with `res.render`?

## CRUD and BREAD

- There are 5 main operations that we can perform on a particular resource (or group of resources)

  - Create a new resource
  - Retrieve all of the existing resources
  - Retrieve a particular resource
  - Edit a particular resource
  - Delete a particular resource

- We use acronyms to help us remember these operations: CRUD and BREAD
  - CRUD: Create Read Update Delete
  - BREAD: Browse Read Edit Add Delete

## Forms vs Anchor Tags

- Anchor tags (<a></a>) only make GET requests (href)
  - Anchor tags are generally used to link between websites or to different pages on the same site
- Forms can make either GET or POST requests (specified in the form's method attribute)
  - Forms are used to collect and submit user information
- If data is being retrieved, use a GET request
- If data is being updated/changed/created, use a POST request (therefore, a form)
  - NOTE: This includes things like buttons to delete a resource (simply wrap the button in a form)

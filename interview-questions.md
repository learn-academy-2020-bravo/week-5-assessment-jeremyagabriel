# ASSESSMENT 5: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own there is always something more to learn.   

1. Rails follows an MVC pattern. What does that mean?

  Your answer: I forget to be honest!

  Researched answer: MVC is a pattern for the architecture of a software application. It separates an application into the following components:

  Models for handling data and business logic
  Controllers for handling the user interface and application
  Views for handling graphical user interface objects and presentation



2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer: The four basic principles for a good application are CRUD - Create, Read, Update, Delete - meaning a user should be able to create data, read what they've created, update it if needed, then delete it.

  Researched answer: Create, read, update, and delete[1] (CRUD) are the four basic functions of persistent storage. Without at least these four operations, the software cannot be considered complete.

  - create or add new entries;
  - read, retrieve, search, or view existing entries;
  - update or edit existing entries;
  - delete, deactivate, or remove existing entries.



3. What is a migration? Why would you use one?

  Your answer: A migration updates the schema of a database, so you don't have to interact with it directly. You'll have record of each migration

  Researched answer: Rails Migration allows you to use Ruby to define changes to your database schema, making it possible to use a version control system to keep things synchronized with the actual code



4. Describe a possible relationship between a model called Person and a model called Computer. Based on your description, which model would hold the foreign key?

  Your answer: A person can have many computers and a computer would belong to a person, thus a Computer model would hold the foreign key.

  Researched answer:

  A has_many association indicates a one-to-many connection with another model. You'll often find this association on the "other side" of a belongs_to association. This association indicates that each instance of the model has zero or more instances of another model.

  A belongs_to association sets up a one-to-one connection with another model, such that each instance of the declaring model "belongs to" one instance of the other model.



5. What is object-relational mapping?

  Your answer: I forget to be honest!

  Researched answer: ORM is a technique that lets you query and manipulate data from a database using an object-oriented paradigm. When talking about ORM, most people are referring to a library that implements the Object-Relational Mapping technique, hence the phrase "an ORM".

  An ORM library is a completely ordinary library written in your language of choice that encapsulates the code needed to manipulate the data, so you don't use SQL anymore; you interact directly with an object in the same language you're using.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes - A RESTful route is a route that provides mapping between HTTP verbs (get, post, put, delete, patch) to controller CRUD actions (create, read, update, delete). Instead of relying solely on the URL to indicate what site to visit, a RESTful route also depends on the HTTP verb and the URL.
- JSON - JavaScript Object Notation is an open standard file format, and data interchange format, that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and array data types.
- API - An application programming interface is a computing interface which defines interactions between multiple software intermediaries. It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc.
- Endpoints - An endpoint is one end of a communication channel. When an API interacts with another system, the touchpoints of this communication are considered endpoints. Each endpoint is the location from which APIs can access the resources they need to carry out their function.
- Strong params - They provide an interface for protecting attributes from end-user assignment. This makes Action Controller parameters forbidden to be used in Active Model mass assignment until they have been explicitly enumerated.

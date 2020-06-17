# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

rails new file_name -d postgresql -T

2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - http method to load page
library - method name
:id - symbol that the library method takes
book - name of rails file
show - name of ERB

3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

In terminal: rails generate migration add_foreign_key_column_to_models

In your code editor open up the migration file, and add the following code: add_column :models, :parent_model_id, :integer

In terminal: rails db: migrate


4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

rails generate model Person shirt:string pants:string shoes:string



5. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

A Rails model must be capitalized and singular. A table generated through this model will be the model name but lowercase and plural

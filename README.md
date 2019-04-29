# DjangoAPIandReactFrontend

This project consists of a Django TODO API App and a React.js Interface with Redux

## Pre-requirements
Make sure the computer has installed Python 3.7.2 and Node.js v11.10.0 with npm 6.8.0

  - Python3 download link: https://www.python.org/downloads/

  - NodeJs download link: https://nodejs.org/en/download/


## Install dependencies
```sh
  # Under the project directory
  pip install -r requirements.txt
  sudo npm install
```

## Run webpack and the develpment server
```sh
  # Run webpack (from root)
  sudo npm run dev
  
  # Run dev server (from root)
  # Django API on http://127.0.0.1:8000/api/task
  # frontend interface on http://127.0.0.1:8000/
  python3 manage.py runserver
```

## The frontend interface operating tips
  - fill out and submit the 'Add Todo' form for creating a new TODO
  - past due date TODOs are in red; done TODOs are in green
  - filter the TODOs with status by clicking on the corresponding link (e.g. all, to, in-progress, done)
  - access the individual todo detail by clicking on the task content (first column)
  - in the individual TODO view, clicking on the due date enable to list all TODOs having that due date
  
## Django API
  - a new TODO task can be created at http://127.0.0.1:8000/api/task, and all available TODOs are listed on the page
  - access an individual TODO at http://127.0.0.1:8000/api/task/{id}/, where {id} belongs to the target TODO (e.g. http://127.0.0.1:8000/api/task/1 allows users to view the TODO with an ID 1)
  - users can either update or delete a TODO on its detail page
  - all todo tasks are listed at http://127.0.0.1:8000/api/todo_task
  - all in-progress tasks are listed at http://127.0.0.1:8000/api/doing_task
  - all done tasks are listed at http://127.0.0.1:8000/api/done_task
  
## Django API App testing
```sh
# Run all of django_app testes (from root)
python3 manage.py test django_app.tests.TaskTest


# test listing all available TODOs (from root)
python3 manage.py test django_app.tests.TaskTest.test_get_tasks


# test obtaining a single TODO (from root)
python3 manage.py test django_app.tests.TaskTest.test_get_single_task


# test creating a new TODO (from root)
python3 manage.py test django_app.tests.TaskTest.test_create_task


# test update a TODO (from root)
python3 manage.py test django_app.tests.TaskTest.test_update_task


# test delete a TODO (from root)
python3 manage.py test django_app.tests.TaskTest.test_delete_task


# test listing TODOs with todo status (from root)
python3 manage.py test django_app.tests.TaskTest.test_todo_task


# test listing TODOs with in-progress status (from root)
python3 manage.py test django_app.tests.TaskTest.test_doing_task


# test listing TODOs with done status (from root)
python3 manage.py test django_app.tests.TaskTest.test_done_task


# test listing TODOs having the same due date (from root)
python3 manage.py test django_app.tests.TaskTest.test_sameday_task
```

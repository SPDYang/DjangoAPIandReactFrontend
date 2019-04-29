# DjangoAPIandReactFrontend

## Pre-requirements
Make sure the computer has installed Python 3.7.2 and Node.js v11.10.0 with npm 6.8.0

  - Python3 download link: https://www.python.org/downloads/

  - NodeJs download link: https://nodejs.org/en/download/


## Install dependencies
```sh
  # Under the project directory
  pip install -r requirements.txt
  npm install
```

## Run webpack and the develpment server
```sh
  # Run webpack (from root)
  npm run dev
  
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
A seperate README file is located in [django_app](https://github.com/SPDYang/DjangoAPIandReactFrontend/tree/master/django_app) folder.

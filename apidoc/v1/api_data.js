define({ "api": [
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Authenticate",
    "name": "Login",
    "group": "Auth",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"username\": \"username\",\n     \"password\": \"password\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"token\": \"your.jwt.token\"\n}",
          "type": "type"
        }
      ]
    },
    "filename": "src/routes/v1/auth.routes.ts",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/auth/me",
    "title": "Get current user info",
    "name": "Me",
    "group": "Auth",
    "version": "1.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the user</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of the user</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of the user</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the user</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "avatarUrl",
            "description": "<p>Avatar url of the user</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\" : \"Successfully registered.\"\n}",
          "type": "type"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"firstName\": \"John\",\n     \"lastName\": \"Doe\",\n     \"username\": \"johndoe\",\n     \"email\": \"johndoe@zeferinix.com\",\n     \"password\": \"p@ssw0rd\"\n}",
          "type": "type"
        }
      ]
    },
    "filename": "src/routes/v1/auth.routes.ts",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/register",
    "title": "Register",
    "name": "Register",
    "group": "Auth",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of the user</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of the user</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the user</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"firstName\": \"John\",\n     \"lastName\": \"Doe\",\n     \"username\": \"johndoe\",\n     \"email\": \"johndoe@zeferinix.com\",\n     \"password\": \"p@ssw0rd\"\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\" : \"Successfully registered.\"\n}",
          "type": "type"
        }
      ]
    },
    "filename": "src/routes/v1/auth.routes.ts",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/todos",
    "title": "Create todo",
    "name": "CreateTodo",
    "group": "Todos",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the todo</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the todo</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ownerId",
            "description": "<p>Owner id of the todo</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "isDone",
            "description": "<p>Done flag of the todo</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the todo</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/routes/v1/todo.routes.ts",
    "groupTitle": "Todos"
  },
  {
    "type": "delete",
    "url": "/todos/:id",
    "title": "Delete todo",
    "name": "DeleteTodo",
    "group": "Todos",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Path parameters": [
          {
            "group": "Path parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Todo id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/routes/v1/todo.routes.ts",
    "groupTitle": "Todos"
  },
  {
    "type": "get",
    "url": "/todos/:id",
    "title": "Get todo by id",
    "name": "GetTodoById",
    "group": "Todos",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Path parameters": [
          {
            "group": "Path parameters",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Todo id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the todo</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ownerId",
            "description": "<p>Owner id of the todo</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "isDone",
            "description": "<p>Done flag of the todo</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the todo</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/routes/v1/todo.routes.ts",
    "groupTitle": "Todos"
  },
  {
    "type": "get",
    "url": "/todos",
    "title": "Get todos",
    "name": "GetTodos",
    "group": "Todos",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>Page number</p>"
          },
          {
            "group": "Query parameters",
            "type": "Number",
            "optional": true,
            "field": "pageSize",
            "defaultValue": "8",
            "description": "<p>Page size</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "results",
            "description": "<p>List of todos</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "results.id",
            "description": "<p>Id of the todo</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "results.ownerId",
            "description": "<p>Owner id of the todo</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "results.isDone",
            "description": "<p>Done flag of the todo</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "results.description",
            "description": "<p>Description of the todo</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "results.createdAt",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "results.updatedAt",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Number of result items</p>"
          }
        ]
      }
    },
    "filename": "src/routes/v1/todo.routes.ts",
    "groupTitle": "Todos"
  },
  {
    "type": "get",
    "url": "/users/:userId/todos",
    "title": "Get todos by user",
    "name": "GetTodosByUserId",
    "group": "Todos",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>Page number</p>"
          },
          {
            "group": "Query parameters",
            "type": "Number",
            "optional": true,
            "field": "pageSize",
            "defaultValue": "8",
            "description": "<p>Page size</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "results",
            "description": "<p>List of todos</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "results.id",
            "description": "<p>Id of the todo</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "results.ownerId",
            "description": "<p>Owner id of the todo</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "results.isDone",
            "description": "<p>Done flag of the todo</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "results.description",
            "description": "<p>Description of the todo</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "results.createdAt",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "results.updatedAt",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Number of result items</p>"
          }
        ]
      }
    },
    "filename": "src/routes/v1/todo.routes.ts",
    "groupTitle": "Todos"
  },
  {
    "type": "put",
    "url": "/todos",
    "title": "Update todo",
    "name": "UpdateTodo",
    "group": "Todos",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the todo</p>"
          },
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": false,
            "field": "isDone",
            "description": "<p>Done flag of the todo</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the todo</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ownerId",
            "description": "<p>Owner id of the todo</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "isDone",
            "description": "<p>Done flag of the todo</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the todo</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/routes/v1/todo.routes.ts",
    "groupTitle": "Todos"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Get user by id",
    "name": "GetUserById",
    "group": "Users",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Path parameters": [
          {
            "group": "Path parameters",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the user</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of the user</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of the user</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the user</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "avatarUrl",
            "description": "<p>Avatar url of the user</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/routes/v1/user.routes.ts",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Get users",
    "name": "GetUsers",
    "group": "Users",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>Page number</p>"
          },
          {
            "group": "Query parameters",
            "type": "Number",
            "optional": true,
            "field": "pageSize",
            "defaultValue": "8",
            "description": "<p>Page size</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "results",
            "description": "<p>List of users</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "results.id",
            "description": "<p>Id of the user</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "results.firstName",
            "description": "<p>First name of the user</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "results.lastName",
            "description": "<p>Last name of the user</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "results.username",
            "description": "<p>Username of the user</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "results.email",
            "description": "<p>Email of the user</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "results.avatarUrl",
            "description": "<p>Avatar url of the user</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "results.createdAt",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "results.updatedAt",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Number of result items</p>"
          }
        ]
      }
    },
    "filename": "src/routes/v1/user.routes.ts",
    "groupTitle": "Users"
  }
] });

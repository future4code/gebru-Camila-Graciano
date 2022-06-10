Step-by-step
  1. npm install
  2. npm run start

Endpoints
  
  Request all users or filtered users by query params
  GET http://localhost:3003/users
  No Body
  Params = Query:
    example search : http://localhost:3003/users?search=bob
    example type: http://localhost:3003/users?type=admin


  Create new user
  *ID is created automatically
  POST http://localhost:3003/users
  Body:
    {
      "name": "fulano",
      "email": "fulano@email.com",
      "age": 33,
      "type": "normal"
    }

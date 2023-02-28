APP TITLE: Foodfile
APP DESCRIPTION:
A social media app where you can connect and share food reviews with friends.

API:
Self made api

API SNIPPET:
[const foodFileUserSchema = new Schema({
  full_name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  birthday: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  }
})
API CODE:
@baseUrl = {{host}}/api/

GET {{baseUrl}}
###
MVP:
The MVP for this project is:

 Working Get request
 Working Patch request
 Working Post request
 Working Delete request
POST-MVP:
Frontend and authentcation
GOALS:
DAY 1 RESEARCh DAY 2 creating schema to make objects for the database. DAY 3-5 working on javascript. Day 6 testing day 7 post mvps

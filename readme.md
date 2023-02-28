> [Template Used](https://github.com/metruzanca/ga-vercel-demo)
###Contents:
**App Title
Foodfile
**API SNIPET
const foodFileUserSchema = new Schema({
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
**App Description**
Foodfile is a website that allows you to share your personal food reviews with others. Connect with friends to view and share each other's dining experiences. With Foodfile, you can showcase what you have eaten and see what your friends have indulged in.
**API**
Foodfile api
**MVP**
Account Creation and review creation, Email, Password, Title , Location, Price , Rating, etc
**POST MVP**
add in option for photos to reviews, work on the front end and maybe make an api for creating accounts for the website.
**Goals**
DAY 1 RESEARCh DAY 2 creating schema to make objects for the database. DAY 3-5 working on javascript. Day 6 testing day 7 post mvpzs

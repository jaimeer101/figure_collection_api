## Setting up Project 
Open PostgreSQL command line interface and run: 
```
CREATE DATABASE <preferred database name>;
```
("Replace 'figure_collection' with your preferred database name, and make sure to use that same name in your .env file."). Tables will be auto generated.

## Description 

Figure Collection API login, signup, CRUD of Figure

## Installation
Download the source to your device

## Running the app
go to the folder then open with CMD or via Visual Studio Code and in terminal run the code below

```bash
# development
$ npm run start:dev

```

## Test
use Postman to test
Change Url base on the setting of your device

# Sign up
Method: POST
url: http://localhost:3000/auth/signup
JSON: 
{
    "name" : "Name", 
    "email":"Email",
    "password":"Password"
}
![image](https://github.com/user-attachments/assets/9cb46fcd-e53f-4307-8069-7ce06ffdbbd6)

# Login
Method: POST
url: http://localhost:3000/auth/login
JSON: 
{
    "email":"saved email address",
    "password":"saved password - be careful password saved in database was hashed and encrypted"
}
![image](https://github.com/user-attachments/assets/daab329c-d4c9-49b0-ae5f-fc0f63d8c69b)

# Create Figure
Method: POST
url: http://localhost:3000/figure
JSON: 
{
     "name":"Figure Name",
    "price":"Sample Price",
    "image_url":"manual input of url" I am having difficulties in connecting to AWS
}

![image](https://github.com/user-attachments/assets/0c4d1eb5-daad-48eb-ba2b-dbaa4f4d35bb)

# Read Figure
Method: GET
url: http://localhost:3000/figure/<id of saved figure>

![image](https://github.com/user-attachments/assets/b49004c1-8389-4dd3-9d65-28d3a32f52fe)

# Update Figure
Method: PATCH
url: http://localhost:3000/figure/<id of item that you want to update>
JSON: 
{
     "name":"Change the name",
    "price":"Change the price",
    "image_url":"Change the url" 
}

![image](https://github.com/user-attachments/assets/8d38788f-49f3-4fba-b028-b39905f1319e)

# Delete Figure
Method: DELETE
url: http://localhost:3000/figure/<id of item that you want to delete>

![image](https://github.com/user-attachments/assets/5b69580d-e5c8-435e-9922-79672de51156)








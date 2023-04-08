
# Project Description

## Pages:

This is the JWT-Token generation project. There is no backend involved in this project. THe idea is very simple to generate the jwt-token for the frontend. 

- Go to the sign-up page and create your profile.
- After the sign-up along with your sign-in data there is one jwt-token will be generated which you will store in your local storage. 
- Now you can login and it wil verify your login with the token.
- If you are authorized then you can enter.
- Now inside the web application if you want to send some request for example any contact form (which is also implemented in this project) along with your form data that token wil also be send and it will also be send with the data which will veryfy your content and if everything is alright then it will send the message that your form has been submitted otherwise it will raise an error.
- Everything is done using local storage. You can use cookie storage as well instead of local storage.

## Work Flow:
- As you will create the sign up all the details will go to the backend and it will generate one jwt token for you which will have one public key and one private key.
- The submit button won't be activated if any error is there or any field is empty.
- On the sign-in page as you sign in all your details will go to the backend and it will search for that jwt token. If it finds then backend will send the authorized public token key and authorize the user. (In my case I have generated the key locally and set it to the local storage)
- On the time of sending the form we will send the token again and match with the token which is present in the local storage and if matches then the form will get submitted otherwise it will display unauthorized user. 
- For the design I have used bootstrap and vanilla css.



### `npm install`
Which will install all the dependencies in this project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

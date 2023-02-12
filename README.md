# Project Description

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Project Description

## Pages:

I have added one page which is the home page. There I have some components which are contact form, header, footer, carousel, accordian.

## Work Flow:
- As you will create the sign up all the details will go to the backend and it will generate one jwt token for you which will have one public key and one private key.
- The submit button won't be activated if any error is there or any field is empty.
- On the sign-in page as you sign in all your details will go to the backend and it will search for that jwt token. If it finds then backend will send the authorized public token key and authorize the user. (In my case I have generated the key locally and set it to the local storage)
- On the time of sending the form we will send the token again and match with the token which is present in the local storage and if matches then the form will get submitted otherwise it will display unauthorized user. 
- For the design I have used bootstrap and vanilla css.


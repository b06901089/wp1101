##### hw5 Readme #####

1. app reference : ios default calculator

2. Possible special rules for this calculator(?)

    (a) If you press '1' '+' '2', then you press '+' '-' '*' '/' again, the result '3' will be automatically calculate. 
        (same as ios)

    (b) After a calculation (ex : after pressing equal), if you then press another number, the number will add to the last of the already existing number. 
        (ex : press '1' '+' '2' '=' '5', the result should be '35')
        (unlike ios, the result should be '5' for ios)
        (if you need a new calculation, just press 'C' instead)

    (c) For the display part, it will always display to precision 12. However, the function like dot('.') will still work as usual. No worries.

    (4) If you press '=' consecutively, it will automatically execute the last operation.
        (ex : press '1' '+' '2' '=' '=', the result should be '5')
        (ex : press '1' '+' '2' '=' '5' '=', the result should be '37')
        (same as ios)

    (5) Doesn't support 先乘除後加減.
    
    (6) Divide by 0 will prompt alert. The calculator will then simply ignore the operation.

3. 進階要求

    (a) 錯誤修正 : AC/C

    (b) Support 'MR' 'MC' 'M+' 'M-'

    (c) Support scientific notation

    (d) Support x^2, e^x, ln(x)











# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Gaia React Demo [http://142.93.115.215](http://142.93.115.215)

### How to start
> git clone https://github.com/germancin/gaia-react-demo

### Steps to run the React App
> cd gaia-react-demo/app

> npm install

> npm start

> navigate to localhost:3000

### Steps to run the REST API

> cd gaia-react-demo/api

> npm install

> npm start

> Server will start listening at PORT `:3020`

### Application Structure

* Server(API):
	* `npm start` initiate the server listening on PORT `:3020`.
	* The API has one route:
        * `api/v1/sub-categories`
	* The route servers 2 end-points:
        * `api/v1/sub-categories/:tid` Request all the videos.

* React (App):
    * `/app/src/index.js` is the entry point and manage:
        * the setup of the redux store.
        * the initialization fo redux-thunk.
        * the rendering of the App component.


    ## Testing 

    For testing `Jest` and `enzyme` where used to do a simple espectation on the components existance within the `<App />` component.

    ## Deployment

    The app was deployed into a Node server.

    To build the app the ``REACT_APP_STAGE`` is set as `dev` and `production` for the according environments.

    ``npm run build deploy:prod`` command is executed for production build and will get the production configurations placed in the [config.js](http://) file.
    At the same time this will bundle the scss files.

    ``npm run build`` command is used to build the app for development environment.



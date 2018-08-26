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
        * `api/v1/sub-categories/:tid/:sortby` Request all the videos sorted by the criteria `[alphabetic, newest, popular]`.
		* When a `HTTP` request is made, the router calls the right end-point which call the right controller. [code](http://).
        * Both end-points response with 
            * Code `200` Success.
            * Code `500` Error.

        * Once the `api/v1/sub-categories/:tid` resolve the request, uses the `spliData()` method which map the response into a consumable object to be used for the React app. [code](https://github.com/germancin/gaia-react-demo/blob/master/api/controllers/subCategoryController.js#L36)

        * Once `api/v1/sub-categories/:tid/:sortby` resolve the request, uses the `sortData()` method which sort the data base on the pparam `sortby` then map the response into a consumable object to be used for the React app. [code](https://github.com/germancin/gaia-react-demo/blob/master/api/controllers/subCategoryController.js)

		* These 2 end-points ping : [https://d6api.gaia.com/videos/term/119931](https://d6api.gaia.com/videos/term/119931)
    * The API was versioned following REST API good practices `/api/v1`.
    * The API only accepts a `GET`  method and is specified in the headers section within the `server.js` file. [code](https://github.com/germancin/gaia-react-demo/blob/master/api/server.js)
    * The routing name `(sub-categories)`  is intended to be clear and intuitive using REST naming conventions.
    * [Helmet](https://www.npmjs.com/package/helmet) module is installed to protect the API from some well-known web vulnerabilities by setting HTTP headers appropriately.

    **Helmet is actually just a collection of smaller middleware functions that set security-related HTTP headers such as:**
    ```
    * csp sets the Content-Security-Policy header to help prevent  cross-site scripting attacks and other cross-site injections.

    * hidePoweredBy removes the X-Powered-By header.

    * hpkp Adds Public Key Pinning headers to prevent man-in-the-middle attacks with forged certificates.

    * hsts sets Strict-Transport-Security header that enforces secure (HTTP over SSL/TLS) connections to the server.

    * ieNoOpen sets X-Download-Options for IE8+.

    * noSniff sets X-Content-Type-Options to prevent browsers from MIME-sniffing a response away from the declared content-type.

    * frameguard sets the X-Frame-Options header to provide clickjacking protection.

    * xssFilter sets X-XSS-Protection to enable the Cross-site scripting (XSS) filter in most recent web browsers.
    ```
    * The amount of elements shown in the UI are set up with the variable `CHUNK_SIZE` found it on the `.env` file.


* React (App):
    * `/app/src/index.js` is the entry point and manage:
        * the setup of the redux store.
        * the initialization fo redux-thunk.
        * the rendering of the App component.

    * The **\<App /\>** component:
        * Wrap Up all the components the UI needs to render.
        * Calls the `getData()` method which feeds the `store` with the needed data for the entire UI.
        * The **Redux Store** contains `five main props`:
            * **fetching**: Runs the `<Spinner />` component when data is being requested from the API. 

            * **term**: Comes from the API call - Has sub category title and description.
            * **heroImg**: Comes from the API call - Has the image consumed by the `<Hero />` component.
            * **initialTiles**: Comes from the API call - Has the initial amount of tiles ready to consume by `<Content /> ` component which then is map and passes to the `<VideoTile /> ` component. 
            * **moreTiles**: Comes from the API call - Has the rest of the Video Tiles items ready to be consumed by `<LoadMore />` component which re-use the `<VideoTiles />` component to show them on the UI when users click on the `LOAD MORE` button.
            * **select**: Just keep track of the selected element from the Sort By dropdown and is used by `<Selectmenu />` component.
        
    *  The **Sort By** DropDown: Is controlled by `<Selecmenu />` component and calls the `getSortedData(criteria)` method, passing the sort criteria as param then pings the API and returns the same object structure than `getData()` which gets consumed nicely by `<Content /> <VideTiles />` and `<LoadMore />` component making them reusables throughout the app.

    ### Used end-points
        
    Initial call Development environment:
    * [http://localhost:3020/api/v1/sub-categories/119931](http://142.93.115.215:3020/api/v1/sub-categories/119931)

    Initial call Production environment:
    * [http://142.93.115.215:3020/api/v1/sub-categories/119931](http://142.93.115.215:3020/api/v1/sub-categories/119931)

    *****************************************************************
    
    Sort By Developement environment:
    * [http://localhost:3020/api/v1/sub-categories/119931/newest](http://142.93.115.215:3020/api/v1/sub-categories/119931/newest)

    * [http://localhost:3020/api/v1/sub-categories/119931/asc](http://142.93.115.215:3020/api/v1/sub-categories/119931/asc)

    * [http://localhost:3020/api/v1/sub-categories/119931/popular](http://142.93.115.215:3020/api/v1/sub-categories/119931/popular)

    Sort By Production environment:
    * [http://142.93.115.215:3020/api/v1/sub-categories/119931/newest](http://142.93.115.215:3020/api/v1/sub-categories/119931/newest)

    * [http://142.93.115.215:3020/api/v1/sub-categories/119931/asc](http://142.93.115.215:3020/api/v1/sub-categories/119931/asc)

    * [http://142.93.115.215:3020/api/v1/sub-categories/119931/popular](http://142.93.115.215:3020/api/v1/sub-categories/119931/popular)


    ## Testing 
    ### Steps to run the test

    > cd app

    > Run `npm run test`

    For testing `Jest` and `enzyme` where used to do a simple espectation on the components existance within the `<App />` component.

    ## Deployment

    The app was deployed into a Node server.

    To build the app the ``REACT_APP_STAGE`` is set as `dev` and `production` according to the environments.

    The ``npm run build deploy:prod`` command from [package.json](https://github.com/germancin/gaia-react-demo/blob/master/app/package.json#L25) is executed for production build and it will get the production configurations from the [config.js](https://github.com/germancin/gaia-react-demo/blob/master/app/src/config.js) file. Also this will bundle the scss files. 

    All the configurations are placed in the [config.js](https://github.com/germancin/gaia-react-demo/blob/master/app/src/config.js) file.

    ``npm run build`` command is used to build the app for development environment.



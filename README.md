
# A Web App on Consumption of Public Information Measurement and Analysis

This web app made with React shows implementations of the Adobe PDF Embed API to embed PDFs and use them as to view Information for Public Usage.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```

Node JS 8.10.0 or higher.

```

Node installation instructions can be found [here](https://nodejs.org/en/download/).

## Authentication Setup

Create your Authentication ID at [here](https://www.adobe.com/go/dcsdks_credentials)

Make sure to put correct hostname details otherwise you won't be able to run the app.

For running the App locally put **localhost** in the hostname field or you want to serve the app on the web provide the hostname of your website.

You can create multiple credentials for multiple hosts.

To use your credentials kindly replace the client-id with your id for authentication.

## Installing and Running Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### Build with npm


### ```npm install```

Install the required packages for the Project.

### ```npm start```



Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.


## Below are the endpoints exposed from the application to show different use cases.

| Documents | Endpoint                               |
| -------------------------- | -------------------------------------- |
| Fear of COVID-19 Scale     | `http://localhost:3000/survey-one`     |
| House Hold Pulse Survey    | `http://localhost:3000/survey-two`     |
| Psychological Stress       | `http://localhost:3000/survey-three`   |
| Impact on Health Well-Being| `http://localhost:3000/survey-four`    |
| Impact on Cancer patients and Survivors     | `http://localhost:3000/survey-five`    |



**Demo**
## The Project
![REcord IT](http://g.recordit.co/Vd03HN5zmH.gif)

[Full Video](http://recordit.co/Vd03HN5zmH)

## Analytics

![http://g.recordit.co/RHhFbuh77q.gif](http://g.recordit.co/RHhFbuh77q.gif)

[Full Video](https://recordit.co/RHhFbuh77q)

## Built With

- [Adobe DC View SDK](https://www.adobe.io/apis/documentcloud/dcsdk/docs.html) - The SDK that helps to Embed a PDF

- [React](https://reactjs.org/) - The Front End framework to create Views.

- [React-Router-Dom](https://reacttraining.com/react-router/web/guides/quick-start) - React Dependency to use React Components as Routes

- [Bootstrap Material Design](https://fezvrasta.github.io/bootstrap-material-design/) - Used for styling the Components

- [Analytics](https://www.npmjs.com/package/analytics) - A light weight & third Party Analyitcs tool to track page, events and identity of the visitors.

## Authors

- **Aditya Narayan Mishra** - _Complete Project_ - [azax25547](https://github.com/azax25547)

## Acknowledgments

- Follow the Code Samples [here](https://github.com/adobe/dc-view-sdk-samples), to view how to embed different types of styles into a Web App.

* The codes for this Project is inspired from [here](https://github.com/adobe/dc-view-sdk-samples/tree/master/More%20Samples/React%20Samples).

- Follow the Documentation for how to get started [here](https://www.adobe.io/apis/documentcloud/dcsdk/docs.html).

- Online Demo for this API can be found [here](https://documentcloud.adobe.com/view-sdk-demo/index.html#/view/FULL_WINDOW/Bodea%20Brochure.pdf)



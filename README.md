## Introduction

The given application is developed as a task for Atlan. It enables users to run SQL queries in an online editor, and analyze the output obtained as a result of running the queries.

The detailed Problem Statement is also mentioned towards the end of this document.


## ⏱ Page Load Time

The Webapp loads in about 0.4 s to 0.6s. This is calculated by using Google Lighthouse tool in Chromium based browsers. 
*NOTE: The Lighthouse Audits scores are decreased because of preinstalled browser extensions that are non-removable in my system.*

## 🪜 Steps I took to optimize the page load time

- Used `.webp` assets instead of `.png` or `.jpeg` to minmizing loading time.
- Used SVG icons wherever possible as they are lighter than image type icons.
- Used PurgeCSS to tree-shake unused styles and optimize my final build size.
- Used Lighthouse DevTools Extension to find the performance issues and fix them using their actionable suggestion.
- Used netlify that has world-class CDN technology that reduces waiting time even further.

 ##  Predefined SQL Queries

- `select * from customers`
- `select * from categories`
- `select * from employees`
- `select * from order_details`
- `select * from shippers`
- `select * from suppliers`

##Screenshots

![Screenshot 2023-12-27 011615](https://github.com/nimish-star/atlan_assignment/assets/72727644/cb8f120e-e9fa-4500-965c-4a8b35fd8aa7)
![Screenshot 2023-12-27 011545](https://github.com/nimish-star/atlan_assignment/assets/72727644/40ba3699-ac7d-47d9-9143-64f1ac1a2e94)


  ## Problem Statement

### SQL Editor
Create a SQL editor view where your users can query easily on a table using SQL, and see the results. Think of all the features, style, design, layout that you think would be needed to make the query experience beautiful, smooth & efficient. Create your web app accordingly.

<strong>Ideal User:</strong> Our target users here are the data analysts of any organization, who will actually use the interface, query the data and pass on the results to their business team.

<strong>*Note:</strong> Do not worry about the backend of the app. Just focus on the frontend. Use stubs & mocks wherever you think the backend is necessary.

<strong>*Note2:</strong> Do not write SQL logic to show data results. Have a few predefined SQL queries and show their results directly.

<strong>Sample csv data you can use:</strong> https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv

<strong>Things to note:</strong>
1. Use a JavaScript framework for the task, preferably Vue.js/Nuxt.js but any framework would work. <strong>DO NOT code</strong> in vanilla JS.
2. You are <strong>NOT</strong> restricted to use this particular data. You can use any external data as well, if you want.
3. Calculate the page load time of your app. Write the page load time in README. Also write, how did you calculate the page load time of the app.
4. If you made any changes to optimize the page load time of your app, write all the steps you took to optimize the page load time in README.

<strong>Submission details:</strong>
1. Host the code in a version control system eg. Github, Gitlab etc, and send us the link to the repository.
2. Also, host the web app online using services like Netlify, Surge etc and send us its link. (DO NOT EXPECT the person checking the task to install your web app locally. There can be a lot of issues and back & forth, in case of any issue during local installation. It’s better you host the app and send us the link)

<strong>You will be judged on the following: </strong>
1. Code structure and readability.
2. Page layout and feature set
3. Information hierarchy of all the content and components shown on the page(s) of your app.
4. Page load time of your app.


## Running Tests

To run tests, run the following command

```bash
  npm install
```

```bash
  npm start
```


## Tech Stack

**Client:** REACT




##Live Link

https://ubiquitous-lily-a98c0a.netlify.app/


## License

[MIT](https://choosealicense.com/licenses/mit/)



## Feedback

If you have any feedback, please reach out to us at nimishlakhmani@gmail.com








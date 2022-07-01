export const allProjects = [
  {
    title: "Ratemydeliveries.com",
    localLink: "ratemydeliveries",
    gitLink: "https://github.com/christopher73/ratemydeliveries",
    externalLink: "https://ratemydeliveries.com/",
    isFeatured: true,
    pictureLink: "/assets/img/ratemydeliveries.png",
    year: "2020",
    chartPower: {
      type: "pie",
      data: {
        labels: ["js.svg", "sequelize.svg", "express.svg", "bootstrap.svg"],
        datasets: [
          {
            data: [9, 7, 6, 5, 8, 9],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(75, 192, 192)",
              "rgb(153, 102, 255)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        scales: {
          yAxes: [
            {
              display: false,
              ticks: {
                fontFamily: `"Roboto Mono", monospace`,
                fontSize: 12,
                fontColor: "#101c28",
              },
            },
          ],
          xAxes: [
            {
              display: false,
              ticks: {
                max: 10,
                beginAtZero: true,
              },
            },
          ],
        },
      },
    },
    desc: `Ratemydeliveries.com is a website that collects and publishes reviews about delivery service satisfaction.  The Application uses  React JS  and Next js for hybrid static & server rendering on the front-end. As for the backend the application utilizes Google’s Firebase for its database and user authentication.`,
    descLong: [
      ` Backend: Firebase Firestore and Firebase Auth FrontEnd: React JS`,
    ],
  },
  {
    title: "Starkclass.com",
    localLink: "starkclass",
    gitLink: "https://github.com/christopher73/starkclass-client",
    externalLink: "https://starkclass.com",
    isFeatured: true,
    backgroundLink: "/assets/img/starkclass.jpg",
    pictureLink: "/assets/img/starkClass.gif",
    year: "2019",
    chartPower: {
      type: "pie",
      data: {
        labels: [
          "react.svg",
          "redux.svg",
          "node.svg",
          "express.svg",
          "aws.svg",
          "stripe.svg",
          "mongoose.svg",
          "mongodb.svg",
        ],
        datasets: [
          {
            data: [9, 9, 7, 6, 5, 9, 6, 7],
            backgroundColor: [
              "rgb(90, 20, 42)",
              "rgb(255, 159, 64)",
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(75, 192, 192)",
              "rgb(153, 102, 255)",
              "rgb(90, 20, 42)",
              "rgb(255, 159, 64)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        scales: {
          yAxes: [
            {
              display: false,
              ticks: {
                fontFamily: `"Roboto Mono", monospace`,
                fontSize: 12,
                fontColor: "#101c28",
              },
            },
          ],
          xAxes: [
            {
              display: false,
              ticks: {
                max: 10,
                beginAtZero: true,
              },
            },
          ],
        },
      },
    },
    desc: `This full-stack application was created for a startup. Many APIs were integrated such as user auth using facebook's API and Gmail's API, also video rendering using Vimeo's API`,
    descLong: [
      `Build the full-stack web applications which process, analyze, and render data visually.`,
      `Integrated User's login using facebook's API, Gmail's API and Emails accounts with OAuth2 protocol.`,
      `Deployed site usuing AWS EC2 with Ngnix.`,
      `Integrated stripe's API for payment and Vimeo for video rendering.`,
      `Our idea was born because we met several applicants who did not have the necessary 
      knowledge to apply to certain Universities. This was a result of the low quality of teaching that exists in Peru. For this reason, we decided to launch StarkClass,
       in order to share all the experience and knowledge of highly qualified teachers.
     We also realized that only 30% of the time a student will actually spend in class,
      the other 70% went to commuting to the actual place (a common issue in Peru) `,
    ],
  },
  {
    title: "MLB ScoreBox",
    localLink: "scorebox",
    gitLink: "https://github.com/christopher73/BoxScore",
    externalLink: "https://node-redis-express.herokuapp.com",
    isFeatured: true,
    backgroundLink: "/assets/img/scoreBox.png",
    pictureLink: "/assets/img/scorebox.gif",
    year: "2019",
    chartPower: {
      type: "pie",
      data: {
        labels: [
          "react.svg",
          "redis.svg",
          "node.svg",
          "express.svg",
          "bootstrap.svg",
        ],
        datasets: [
          {
            data: [9, 9, 7, 6, 8],
            backgroundColor: [
              "rgb(90, 20, 42)",
              "rgb(255, 159, 64)",
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(75, 192, 192)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        scales: {
          yAxes: [
            {
              display: false,
              ticks: {
                fontFamily: `"Roboto Mono", monospace`,
                fontSize: 12,
                fontColor: "#101c28",
              },
            },
          ],
          xAxes: [
            {
              display: false,
              ticks: {
                max: 10,
                beginAtZero: true,
              },
            },
          ],
        },
      },
    },
    desc: `MLB ScoreBox is a full-stack application where it uses it's own server as a proxy to fetch data from an API, it then stores the data in cache using REDIS for faster client response !!!`,
    descLong: [
      `This web applications use Redis's cache system to reduce calls to third party APIs and Dababases.`,
      `The Redis's hash list was configured with a 15 secs expiration time, this makes the server fetch new data when the time expires.`,
      `On the front-End, React was set to fetch data (scores, stats, etc) every 3 seconds,  to simulate a "real-time" experience.`,
      `A regular application will hit the server every 3 seconds to have fresh data, this can lead to higher cost for a company.`,
      `An application with a CACHE system can reduce the cost for a company by reducing call from external APIs, Databases, etc.`,
    ],
  },
  {
    title: "Redux Bike Rental App",
    localLink: "bikerental",
    gitLink: "https://github.com/christopher73/bikeRental",
    externalLink: "https://tranquil-falls-97480.herokuapp.com/",
    isFeatured: true,
    backgroundLink: "/assets/img/bikerental.svg",
    pictureLink: "/assets/img/bikerental.gif",
    year: "2019",
    chartPower: {
      type: "pie",
      data: {
        labels: ["react.svg", "redux.svg", "material.svg", "bootstrap.svg"],
        datasets: [
          {
            data: [9, 9, 7, 6],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(75, 192, 192)",
              "rgb(255, 206, 86)",
              "rgb(255, 159, 64)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        scales: {
          yAxes: [
            {
              display: false,
              ticks: {
                fontFamily: `"Roboto Mono", monospace`,
                fontSize: 12,
                fontColor: "#101c28",
              },
            },
          ],
          xAxes: [
            {
              display: false,
              ticks: {
                max: 10,
                beginAtZero: true,
              },
            },
          ],
        },
      },
    },
    desc: `I believe redux is the best and hardest way to store the state of your application. This bike rental app collects data from the user to perform a checkout using a fake inventory from a Bike rental place (bike types, accessories, etc) and then checkouts the customers.`,
    descLong: [
      ` This project utilizes react-redux to store the state of the components`,
      `The data stored using redux was the inventory from a Bike rental place (bike types, accessories, etc) and the Check-Out information for the customers. `,
      `I believe the integration of redux is a good solution for this project because it will allow us to expand/scale the application. Think about this: easier component integration, maybe you want to include a feature such as a "summary page" or an "editable shopping cart"`,
    ],
  },
  {
    title: "Scrapping The NYT",
    localLink: "newsscraper",
    gitLink: "https://github.com/christopher73/news_app",
    externalLink: "https://node-web-scraper-app.herokuapp.com/",
    isFeatured: true,
    backgroundLink: "/assets/img/newsScraper.jpg",
    pictureLink: "/assets/img/newsScraper.gif",
    year: "2019",
    chartPower: {
      type: "pie",
      data: {
        labels: [
          "js.svg",
          "cheerios.svg",
          "mongoose.svg",
          "mongodb.svg",
          "bootstrap.svg",
          "Dotenv.svg",
        ],
        datasets: [
          {
            data: [9, 9, 7, 6, 5, 8, 9],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(75, 192, 192)",
              "rgb(255, 206, 86)",
              "rgb(153, 102, 255)",
              "rgb(90, 20, 42)",
              "rgb(255, 159, 64)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        scales: {
          yAxes: [
            {
              display: false,
              ticks: {
                fontFamily: `"Roboto Mono", monospace`,
                fontSize: 12,
                fontColor: "#101c28",
              },
            },
          ],
          xAxes: [
            {
              display: false,
              ticks: {
                max: 10,
                beginAtZero: true,
              },
            },
          ],
        },
      },
    },
    desc: `Can't use an API to get the data you want?... Well scraping a site could be your solution. In this project, we utilized the CheeriosJS library to help us scrape The New York Times website`,
    descLong: [
      `Ever needed to take notes while searching for the latest news articles ?,
       Well, this application can help you gather the latest news from the New York Times
        Website, NO APIs call , just pure SCRAPING =) `,
      `This appliccation allows you save any article and add notes to it. All records are saved on a Mongo database`,
    ],
  },
  {
    title: "React Native App",
    localLink: "nicapp",
    gitLink: "https://github.com/christopher73/nicMobileApp",
    externalLink: "https://c-fajardo.com/nicapp",
    isFeatured: true,
    backgroundLink: "/assets/img/scoreBox.png",
    pictureLink: "/assets/img/nicapp.gif",
    year: "2020",
    chartPower: {
      type: "pie",
      data: {
        labels: [
          "reactNative.svg",
          "node.svg",
          "express.svg",
          "mongodb.svg",
          "firebase.svg",
        ],
        datasets: [
          {
            data: [9, 6, 5, 6, 8],
            backgroundColor: [
              "rgb(90, 20, 42)",
              "rgb(255, 159, 64)",
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(75, 192, 192)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        scales: {
          yAxes: [
            {
              display: false,
              ticks: {
                fontFamily: `"Roboto Mono", monospace`,
                fontSize: 12,
                fontColor: "#101c28",
              },
            },
          ],
          xAxes: [
            {
              display: false,
              ticks: {
                max: 10,
                beginAtZero: true,
              },
            },
          ],
        },
      },
    },
    desc: `This mobile application was developed using React Native. It includes user authentification using Gmail's API via firebase. The app also connects to a NodeJS server that allow the application to send out leads via email.`,
    descLong: [
      `This mobile application was developed using React Native, which facilitated the creation of an IOS and Android application.`,
      `The application required user authentification which was provide by Gmail via Firebase.`,
      `Firebase integration also provided SMS verification of the user as well as email verification.`,
      `Another requirement was "email notifications" and integration with a database to provide full records of user usage, this was done using NodeJS, Express and MongoDB.`,
      `Future features of this app will be encrypted chat between users.`,
    ],
  },
  {
    title: "CleanMeUp",
    localLink: "cleanmeup",
    gitLink: "https://github.com/christopher73/cleanFB",
    externalLink: "https://github.com/christopher73/cleanFB",
    isFeatured: false,
    pictureLink: "/assets/img/cleanMeUp.gif",
    year: "2019",
    chartPower: {
      type: "pie",
      data: {
        labels: [
          "js.svg",
          "node.svg",
          "selenium.png",
          "Dotenv.svg",
          "mocha.png",
        ],
        datasets: [
          {
            data: [9, 9, 7, 6, 5],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 206, 86)",
              "rgb(153, 102, 255)",
              "rgb(90, 20, 42)",
              "rgb(255, 159, 64)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        scales: {
          yAxes: [
            {
              display: false,
              ticks: {
                fontFamily: `"Roboto Mono", monospace`,
                fontSize: 12,
                fontColor: "#101c28",
              },
            },
          ],
          xAxes: [
            {
              display: false,
              ticks: {
                max: 10,
                beginAtZero: true,
              },
            },
          ],
        },
      },
    },
    desc: `  `,
    descLong: [
      `Many of us probably heard about the exposure of peoples`,
      `Facebook data recently. And as a result, I came across an article`,
      `by (jaruzel.com/blog/How-I-Erased-5000-Facebook-Comments-and-Likes) `,
      `where he developed a tool to erase post from Facebook, but this tool was written `,
      `in Python so I told my self "why not using  JavaScript". Luckily  Selenium `,
      `Client & WebDriver Language Bindings does support NODE JS. There are so many`,
      `features I will like to implement in this script hopefully soon. Check out the code!`,
    ],
  },
  {
    title: "LIRI",
    localLink: "liri",
    gitLink: "https://github.com/christopher73/LIRI/",
    externalLink:
      "https://drive.google.com/file/d/1okAk9QhAaTF9zHUp3BR7UrsdrzABdk3r/view",
    isFeatured: false,
    pictureLink: "/assets/img/liri.gif",
    year: "2019",
    chartPower: {
      type: "pie",
      data: {
        labels: [
          "bash.svg",
          "node.svg",
          "js.svg",
          "Dotenv.svg",
          "spotify.png",
          "momentjs.png",
        ],
        datasets: [
          {
            data: [9, 9, 7, 6, 5, 8, 9],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(75, 192, 192)",
              "rgb(255, 206, 86)",
              "rgb(153, 102, 255)",
              "rgb(90, 20, 42)",
              "rgb(255, 159, 64)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        scales: {
          yAxes: [
            {
              display: false,
              ticks: {
                fontFamily: `"Roboto Mono", monospace`,
                fontSize: 12,
                fontColor: "#101c28",
              },
            },
          ],
          xAxes: [
            {
              display: false,
              ticks: {
                max: 10,
                beginAtZero: true,
              },
            },
          ],
        },
      },
    },
    desc: `This Instagram clone is one of my first projects using
     react + redux on the front end, I am currently working on 
     implementing a back-end to this project`,
    descLong: [
      'This NODE JS prject is a scrip that will allow you to hit multiple APIs, you can run the following commands to run the "LIRI" script: concert-this spotify-this-song movie-this do-what-it-says',
      'EXAMPLES: "liri.js concert-this daddy yankee" "liri.js spotify-this-song thotiana" "liri.js movie-this the avengers" "liri.js do-what-it-says',
      "Also I inplemented a BASH script to store all API keys locally on your machine since this project require you to store them locally on your enviroemnt for security reasons",
    ],
  },
  {
    title: "Flight Search App",
    localLink: "flight-search-app",
    gitLink: "https://github.com/christopher73/Project_1",
    externalLink: "https://christopher73.github.io/Project_1/",
    isFeatured: false,
    pictureLink: "/assets/img/flightSearchApp.gif",
    year: "2019",
    chartPower: {
      type: "pie",
      data: {
        labels: [
          "js.svg",
          "html.svg",
          "bootstrap.svg",
          "jquery.svg",
          "css3.svg",
          "git.svg",
        ],
        datasets: [
          {
            data: [9, 9, 7, 6, 5, 8, 9],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(75, 192, 192)",
              "rgb(255, 206, 86)",
              "rgb(153, 102, 255)",
              "rgb(90, 20, 42)",
              "rgb(255, 159, 64)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        scales: {
          yAxes: [
            {
              display: false,
              ticks: {
                fontFamily: `"Roboto Mono", monospace`,
                fontSize: 12,
                fontColor: "#101c28",
              },
            },
          ],
          xAxes: [
            {
              display: false,
              ticks: {
                max: 10,
                beginAtZero: true,
              },
            },
          ],
        },
      },
    },
    desc: "Scraping websites could be really fun and even better when you can save all the data obtained !!! I created an app where the client can view, save  and leave comments on the latest news from The New York Times website. No APIs needed 8)",
    descLong: [
      `Ever needed to take notes while searching for News Articles ???`,
      ` Well, this application can help you gather the latest news from the New York Times Website and allows you to add comments on each article you save (...Yes!!! that's right you can save the article to a mongodb database to access it later as well as all your saved comments).`,
    ],
  },
  {
    title: "Using Giphy's API (GifTastic)",
    localLink: "giphy",
    gitLink: "https://github.com/christopher73/Project_1",
    externalLink: "https://christopher73.github.io/GifTastic/",
    isFeatured: false,
    pictureLink: "/assets/img/usingGiphy.gif",
    year: "2019",
    chartPower: {
      type: "pie",
      data: {
        labels: [
          "js.svg",
          "html.svg",
          "bootstrap.svg",
          "jquery.svg",
          "api.png",
          "git.svg",
        ],
        datasets: [
          {
            data: [9, 9, 7, 6, 5, 9],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(75, 192, 192)",
              "rgb(255, 206, 86)",
              "rgb(153, 102, 255)",
              "rgb(90, 20, 42)",
              "rgb(255, 159, 64)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        scales: {
          yAxes: [
            {
              display: false,
              ticks: {
                fontFamily: `"Roboto Mono", monospace`,
                fontSize: 12,
                fontColor: "#101c28",
              },
            },
          ],
          xAxes: [
            {
              display: false,
              ticks: {
                max: 10,
                beginAtZero: true,
              },
            },
          ],
        },
      },
    },
    desc: "In this small but cool project, I used Giphy's API to pull many GIF images into my page and a lot of jquery to animate them and bootstrap for CSS help.",
    descLong: [
      `GifTastic project In this project I use the giphy API to pull gif images into my project and a lot of jquery to animate them and Boostrap for css help`,
    ],
  },
  {
    title: "Friend Finder",
    localLink: "friend-finder",
    gitLink: "https://github.com/christopher73/friend-finder",
    externalLink: "https://node-friend-finder-app.herokuapp.com/",
    isFeatured: true,
    backgroundLink: "/assets/img/friendFinder.jpg",
    pictureLink: "/assets/img/friendFinder.gif",
    year: "2019",
    chartPower: {
      type: "pie",
      data: {
        labels: [
          "js.svg",
          "express.svg",
          "sequelize.svg",
          "bootstrap.svg",
          "mysql.svg",
          "handlebars.svg",
          "node.svg",
        ],
        datasets: [
          {
            data: [9, 9, 7, 6, 5, 6, 9],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(75, 192, 192)",
              "rgb(255, 206, 86)",
              "rgb(153, 102, 255)",
              "rgb(90, 20, 42)",
              "rgb(54, 162, 235)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        scales: {
          yAxes: [
            {
              display: false,
              ticks: {
                fontFamily: `"Roboto Mono", monospace`,
                fontSize: 12,
                fontColor: "#101c28",
              },
            },
          ],
          xAxes: [
            {
              display: false,
              ticks: {
                max: 10,
                beginAtZero: true,
              },
            },
          ],
        },
      },
    },
    desc: `This dating app prompts the user with a questionnaire. It then uses an algorithm to pairs each user by how identical their answers were.`,
    descLong: [
      `This dating app was build using a mysql DataBase in where the app stores the answers from the given questionnaire and a small algorithms pairs each user by how identical the user's answers are.`,
      `Implemented the backend using mysql witht the ORM sequelize`,
      `Deployed this project using Heroku`,
    ],
  },
  {
    title: "The Gram",
    localLink: "the-gram",
    gitLink: "https://github.com/christopher73/The_Gram_Part_1",
    externalLink: "https://stormy-gorge-82248.herokuapp.com/",
    isFeatured: true,
    pictureLink: "/assets/img/thegram.gif",
    year: "2019",
    chartPower: {
      type: "pie",
      data: {
        labels: [
          "redux.svg",
          "react.svg",
          "psql.svg",
          "sequelize.svg",
          "express.svg",
          "node.svg",
        ],
        datasets: [
          {
            data: [9, 9, 7, 6, 8, 9],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(75, 192, 192)",
              "rgb(255, 206, 86)",
              "rgb(90, 20, 42)",
              "rgb(255, 159, 64)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        scales: {
          yAxes: [
            {
              display: false,
              ticks: {
                fontFamily: `"Roboto Mono", monospace`,
                fontSize: 12,
                fontColor: "#101c28",
              },
            },
          ],
          xAxes: [
            {
              display: false,
              ticks: {
                max: 10,
                beginAtZero: true,
              },
            },
          ],
        },
      },
    },
    desc: `This app replicates Instagram functionality  on the Web using ReactJS`,
    descLong: [
      `This is an Instagram clone SPA (single-page-application) where my main focus was to understand the react and redux `,
      `Another new technology I used on this project was the integration of Psql using sequelizer`,
    ],
  },
];

export const chris = `
█▀▀ █ █ █▀█ █ █▀▀  █▀█ █▀█ █▀ █ █ █▀▀
█   ███ █▄█ █ ▀▀█  █▄█ █ █ █  ██  ▀▀█
█▄▄ █ █ █▀▄ █ ▄▄█  █▀▄ █▄█ █▄ █ █ ▄▄█

███████▓█████▓▓╬╬╬╬╬╬╬╬▓███▓╬╬╬╬╬╬╬▓╬╬▓█ 
████▓▓▓▓╬╬▓█████╬╬╬╬╬╬███▓╬╬╬╬╬╬╬╬╬╬╬╬╬█ 
███▓▓▓▓╬╬╬╬╬╬▓██╬╬╬╬╬╬▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
████▓▓▓╬╬╬╬╬╬╬▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
███▓█▓███████▓▓███▓╬╬╬╬╬╬▓███████▓╬╬╬╬▓█ 
████████████████▓█▓╬╬╬╬╬▓▓▓▓▓▓▓▓╬╬╬╬╬╬╬█ 
███▓▓▓▓▓▓▓╬╬▓▓▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
████▓▓▓╬╬╬╬▓▓▓▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
███▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
█████▓▓▓▓▓▓▓▓█▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
█████▓▓▓▓▓▓▓██▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬██ 
█████▓▓▓▓▓████▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬██ 
████▓█▓▓▓▓██▓▓▓▓██╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬██ 
████▓▓███▓▓▓▓▓▓▓██▓╬╬╬╬╬╬╬╬╬╬╬╬█▓╬▓╬╬▓██ 
█████▓███▓▓▓▓▓▓▓▓████▓▓╬╬╬╬╬╬╬█▓╬╬╬╬╬▓██ 
█████▓▓█▓███▓▓▓████╬▓█▓▓╬╬╬▓▓█▓╬╬╬╬╬╬███ 
██████▓██▓███████▓╬╬╬▓▓╬▓▓██▓╬╬╬╬╬╬╬▓███ 
███████▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╬╬╬╬╬╬╬╬╬╬╬████ 
███████▓▓██▓▓▓▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓████ 
████████▓▓▓█████▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█████ 
█████████▓▓▓█▓▓▓▓▓███▓╬╬╬╬╬╬╬╬╬╬╬▓██████ 
██████████▓▓▓█▓▓▓╬▓██╬╬╬╬╬╬╬╬╬╬╬▓███████ 
███████████▓▓█▓▓▓▓███▓╬╬╬╬╬╬╬╬╬▓████████ 
██████████████▓▓▓███▓▓╬╬╬╬╬╬╬╬██████████ 
███████████████▓▓▓██▓▓╬╬╬╬╬╬▓███████████
`;

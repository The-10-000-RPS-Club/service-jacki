# Built by Jacki
<img align='right' src='https://media.giphy.com/media/bcKmIWkUMCjVm/giphy.gif' width='200"'>

I love coding, spreading positivity and hearing feedback! Let's connect.

<!-- LinkedIn  -->
<a href="https://www.linkedin.com/in/jacki-yanamura/" target="_blank">
  <img src="https://img.shields.io/badge/-Jacki%20Yanamura-blue?style=for-the-badge&logo=Linkedin&logoColor=white"/>
</a>
<!--   Email -->
<a href="mailto:jacki.yanamura@gmail.com">
  <img src="https://img.shields.io/badge/EMAIL-jacki.yanamura%40gmail.com-1152ba?style=for-the-badge"/>
</a>

## Back End Database Migration
This service focuses on the "Check Availability Calendar" of a producting listing page for an open source home rental site. It operates with it's own server and database that powers the module's UI.  It is one service of a larger service oriented architecture.

![](./img/availabilityCalendar.gif)

## Documentation
1. [Project ReadMe](#Back)
1. [Getting Started](#Getting)
1. [Related Projects](./documentation/related-projects.md)
1. [Design](#Whiteboarding)
1. [Technologies](#Technologies)

## Getting Started

Clone the Github repository:
* `$ git clone https://github.com/The-10-000-RPS-Club/service-jacki.git`

Navigate inside of the directory `./questions-service` and run the following commands:
1. `$ npm install`
2. `$ npm run build`
3. `$ npm start`

Open a new browser tab to see the app:
* `http://localhost:3001`

## Related Projects

![](./img/benchmarkingAndScaling.png)

  - [GoOutdoor Q&A Service Migration](https://github.com/The-10-000-RPS-Club/relatedItems-chris)
  - [Reviews Service](https://github.com/The-Emerald-Kraken/review-service)
  - [Relate Items Service](https://github.com/The-Emerald-Kraken/relatedItems-service)

## Whiteboarding UI to database
![](./img/whiteboarding_cassandra.jpg)

### Front-End Challenges
1) Protect user experience in UI while migrating backend database.
2) Reduce structural changes via server retrieval and front end data.

### Back-End Challenges
1) Choose database for service by benchmarking the CRUD speeds most utilized
2) Deploy application with load balancer (NGINX)
3) Resolve bottlenecks found with stress testing via Loader.io / K6

## Technologies
* React
* Node.js
* Express
* Cassandra
* Wepack
* Docker
* AWS EC2 (currently not live)
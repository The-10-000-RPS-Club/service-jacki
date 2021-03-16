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
1. [Project ReadMe](./README.md)
1. [Getting Started](./documentation/getting-started.md)
1. [Related Projects](./documentation/related-projects.md)
1. [Design](./documentation/system-design.md)
1. [Usage](./documentation/getting-started.md)
1. [Requirements](./documentation/requirements.md)
1. [Development](./documentation/dependencies.md)
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

![](./img/reviews2.png)

  - [GoOutdoor Q&A Service Migration](https://github.com/The-10-000-RPS-Club/relatedItems-chris)
  - [Reviews Service](https://github.com/The-Emerald-Kraken/review-service)
  - [Relate Items Service](https://github.com/The-Emerald-Kraken/relatedItems-service)

### Front-End Challenges
1) Building an interactive [calendar](./documentation/design/mockup.md) from scratch with multiple responsive changes
2) Dependent values for price estimation
3) Reducing UI lag

### Back-End Challenges
1) Selecting database and designing schema
2) Accessing data effeciently

### Led Project Management & Team
1) [Timeline](./documentation/design/timeline.md)
2) [Mockup](./documentation/design/mockup.md)

## Timeline & Deliverables Tracker
![](./img/project-deliverables.png)

## Planning via mock ups
![](./img/front.png)
![](./img/calendar.png)
![](./img/guests.png)
![](./img/estimate.png)

## Whiteboarding UI to database
![](./img/calendar_whiteboarding.jpg)

## MongoDB shape of data
Document schema sample:
```
listingSchema = {
    “listing_id”: 1,
    “price”: 100,
    “rating”: 4.5,
    “reviews_count”: 86,
     “guests_limit”: 8,
     “guests_included”: 2,
     “guest_extra_charge”: 10,
     “cleaning_fee”: 100,
     “service_fee”: 71,
     “taxes”: 51,
	“bedrooms”: 4,
	“beds”: 4,
	“bath”: 2,
	“listing_type”: Entire house,
	“host”: random name,
     “availability”: [monthSchema],
}
```

Subdocument child schema sample:
```
monthSchema = {
   name: String (i.e. October),
   days : [ 1, 1, 1, … 0 ]
}
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).
Find MongoDB installation documentation here [MongoDB](https://docs.mongodb.com/manual/installation/).

- Node >= 6.13.0
- MongoDB 4.4.0

### Installing Dependencies

From within the root directory:
```sh
npm install -g webpack
npm install
```

## Technologies
* React
* Node.js
* Express
* MongoDB
* Mongoose
* Wepack
* Docker
* AWS EC2 (currently not live)
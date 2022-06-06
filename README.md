<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/javiermendez-coder/prisma">
    <img src="https://raw.githubusercontent.com/othneildrew/Best-README-Template/master/images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Prisma</h3>

  <p align="center">
    Connection to a database through HTTP Requests
    <br />
    <a href="https://github.com/javiermendez-coder/prisma"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/javiermendez-coder/prisma/issues">Report Bug</a>
    ·
    <a href="https://github.com/javiermendez-coder/prisma/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Practice project designed by [Carlo Gilmar][carlogilmar] to query data from a database through http requests. At the same time, this project was expanded to implement CORS and be complemented with the [client-launchx][client-launchx-url] project.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [JavaScript](https://www.javascript.com/)
* [PostgreSQL](https://www.postgresql.org/)
* [Express](https://expressjs.com/)
* [Prisma](https://www.prisma.io/)
* [ESLint](https://eslint.org/)
* [CORS](https://www.npmjs.com/package/cors)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

* install [PostgreSQL][psql-url]

* start database server (`bash`)
  ```sh
  sudo service postgresql start
  ```
* create the `explorers_api` database
  ```sql
  CREATE DATABASE "explorers_api";
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/javiermendez-coder/prisma.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create the tables
  ```sh
  npm run tables
  ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

This API allows you to access to a "explorers" (basically the way the instructors refer to us) list from the `explorers_api` database. You can access it via browser or API platforms like [Postman][postman].

Furthermore, is recommended to create a `.env` file with the following data, however you are free to change it in any way you want.

* .env
  ```
  DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/explorers_api?schema=public"
  PORT="3000"
  CORS_PORT="8081"
  ```

### Run App

* Server
  ```sh
  npm run server
  ```

### HTTP Requests Examples

* Obtain the explorers list
  ```
  GET localhost:3000/v1/explorers
  ```
* Obtain an explorers
  ```
  GET localhost:3000/v1/explorers/:id
  ```
* Create an explorer
  ```
  POST localhost:3000/v1/explorers
  ```
* Update an explorer
  ```
  PUT localhost:3000/v1/explorers/:id
  ```
* Delete an explorer
  ```
  DELETE localhost:3000/v1/explorers/:id
  ```

Note: `explorers` in the url may be change for `missionCommander` or `student` to access to those tables.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Javier Méndez - javiermendez0299@gmail.com.com

Project Link: [https://github.com/javiermendez-coder/prisma](https://github.com/javiermendez-coder/prisma)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Carlo Gilmar][carlogilmar]
* [Launch X][launchx]

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/javiermendez-coder/prisma.svg?style=for-the-badge
[contributors-url]: https://github.com/javiermendez-coder/prisma/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/javiermendez-coder/prisma.svg?style=for-the-badge
[forks-url]: https://github.com/javiermendez-coder/prisma/network/members
[stars-shield]: https://img.shields.io/github/stars/javiermendez-coder/prisma.svg?style=for-the-badge
[stars-url]: https://github.com/javiermendez-coder/prisma/stargazers
[issues-shield]: https://img.shields.io/github/issues/javiermendez-coder/prisma.svg?style=for-the-badge
[issues-url]: https://github.com/javiermendez-coder/prisma/issues
[carlogilmar]: https://github.com/carlogilmar/
[launchx]: https://github.com/LaunchX-InnovaccionVirtual
[postman]: https://www.postman.com/
[psql-url]: https://www.postgresql.org/download/
[client-launchx-url]: https://github.com/JavierMendez-Coder/client-launchx

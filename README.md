### DOM-Visualizer (Work In Progress)

> A web-based viewer for the DOM (Document-Object-Model)


![GitHub last commit](https://img.shields.io/github/last-commit/AnthCol/DOM-Visualizer) <br/>
![GitHub repo size](https://img.shields.io/github/repo-size/AnthCol/DOM-Visualizer)


### Technologies

<p align="left">
    <a href="https://reactjs.org/" target="_blank" rel="noreferrer" style="text-decoration: none;">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
    </a>
    <a href="https://spring.io/" target="_blank" rel="noreferrer" style="text-decoration: none;">
        <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="40" height="40"/>
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" style="text-decoration: none;">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
    </a>
    <a href="https://www.java.com" target="_blank" rel="noreferrer" style="text-decoration: none;">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/>
    </a>
    <a href="https://www.postgresql.org" target="_blank" rel="noreferrer" style="text-decoration: none;">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/>
    </a>
    <a href="https://www.docker.com/" target="_blank" rel="noreferrer" style="text-decoration: none;">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/>
    </a>
</p>


![Static Badge](https://img.shields.io/badge/React%20Version-18.3.1-blue) <br/>
![Static Badge](https://img.shields.io/badge/Spring%20Boot%20Version-3.3.4-green) <br/>
![Static Badge](https://img.shields.io/badge/Java%20Version-17-brown) <br/>
![Static Badge](https://img.shields.io/badge/PostgreSQL%20Version-17-lightblue)

### Roadmap

- [x] Create basic design for frontend
- [x] Connect frontend, server, and database together
- [ ] Implement the parser logic
- [ ] Make database persistent across launches
- [ ] Improve frontend appearance
- [ ] Allow users to create separate accounts (maybe?)


### Prerequisites

To use this project, you must have [Docker](https://www.docker.com/) installed, and a web browser. That's it!

### Usage

```bash
# All docker commands should be done from the root directory of this project. 
# To start the program up, run the following comand:
docker compose up --build

# Once complete, access the following address:
https://localhost:5173

# To shut the program down do the following:
docker compose down
```

### Motivation

The primary motivation for this project was just for myself to become more comfortable with full-stack technologies and building those kinds of projects from the ground up. I enjoy parsing things so I decided to just make a simple HTML tag parser. Perhaps it could be a useful tool for someone new to web development, wanting to better understand what HTML / the DOM looks like under the hood. 



# EduTask

![EduTask Thumbnail (1)](https://github.com/horiaomar25/edu-task/assets/140801006/084b0650-f25e-4d77-92e9-fc2d4b06ba45)

<div align=”center”> EduTask helps teaching assistants manage their weekly and daily tasks easily.  It's easy to use and helps keep things organized, making work at school much simpler. With EduTask, teaching assistants can get more done and be more productive during the school week.  </div> 

Watch a video demo of EduTask [here](https://www.youtube.com/embed/C9_1leIDqNg?si=EoJlBqYUNtGLPMks).



## Table of Contents
- [Problem Statement](#problem)
- [Idea/Solution](#idea)
- [Tech Stack](#tech)
- [Server/Dataabse](#tech)
- [Lessons](#lessons)
- [Future Scope](#scope)
- [Installation](#installation)
- [Usage](#usage)

## Problem Statement
"Teaching Assistant may find it diffcult to keep track of tasks and would like a useful management tool to track of Daily and Weekly tasks."

## Idea
I'm a former teaching assistant, a lot of the schools that I worked with mostly use paper. In this case, it can be a risk to loose your task list. I created EduTask as a task management sytem to file tasks under Weekly and Daily tasks. For most teaching assistant, they are given daily and weekly targets to meet. 

## Solution
A task management system that caters to Weekly and Daily tasks of a teaching assistant. It will store digitally to keep a copy of task in case a paper list is lost. 

## Tech Stack
- NextJS - Web framework
- PostrgreSQL - Database
- NodeJS - Server Enviroment
- PlayWright - End to End Testing

## Structure/Component Tree

![Component Tree](https://github.com/horiaomar25/edu-task/assets/140801006/0765dbd2-f9f9-40a5-aeaf-9f5a68dc10a7)

## Server/Database
Database 
The database was built with PostgreSQL. This is the structure:

| Column Name       | Data Type   | Description                                   |
|-------------------|-------------|-----------------------------------------------|
| id                | UUID        | Primary key, automatically generated UUID     |
| task_name         | TEXT        | Name of the task                              |
| task_description  | TEXT        | Description of the task                       |
| task_date         | DATE        | Date associated with the task                 |
| task_type         | TEXT        | Type of the task (e.g., Daily, Weekly)       |
| completed         | BOOLEAN     | Indicates whether the task is completed or not|


The server was built with Node and Express. I used the MVC (Model-View-Controller) to build the server. 


## Lessons Learned
- This project allowed me to learn more about NextJS 's client side and server side components. It is a very useful framework when building full stack applications in comparison to React.
- MaterialUI components helped with speeding up the styling process. I was able to explore different components to find what I needed for my project. I realize that MaterialUI has a lot more to offer. I look forward to delving deeper into MaterialUI for future projects.
- Just a update now coming back to this project, I would say that I have may have preference for other styling frameworks. I enjoyed using MaterialUI but I feel that other styling librabries such DaisyUI would have been easier to start with. This is just a personal preference. Overall, MaterialUI provides great styles. 
  

## Future Scope
 I would also to create a Idea Board to store  useful information like art activities for future use. I'm currently working on that with edutask_app_extension.

## Installation

To run this project locally, follow these steps:

Clone the repository:

```git clone <repository_url>```

Install dependencies:

```npm install```

Start the server:

Run the following command to start the server:

```npm start```

This will launch the application using node server/app.js.







Project Management Web Application
Welcome to the Project Management Web Application! This application allows users to manage their projects and tasks efficiently.

Table of Contents
Introduction
How to Run the Application Locally
How to Build the Docker Image and Run a Container
Assumptions and Decisions

Introduction <a name="introduction"></a>
This project is a simple web application developed using HTML, CSS, and JavaScript. It provides basic functionalities for managing projects and tasks. Additionally, the application is containerized using Docker for easy deployment and scalability.

How to Run the Application Locally <a name="run-locally"></a>
To run the application locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/your_username/project-management-app.git
Navigate to the project directory:

bash
Copy code
cd project-management-app
Run the application:

Open the index.html file in your web browser, or
Set up a local server using Python:
Copy code
python3 -m http.server
View the application:
Open your web browser and visit http://localhost:8000 to view the application.

How to Build the Docker Image and Run a Container <a name="build-docker"></a>
To containerize the application using Docker, follow these steps:

Build the Docker image:

Copy code
docker build -t project-management-app .
Run a Docker container:

arduino
Copy code
docker run -d -p 8000:3000 project-management-app
View the application:
Open your web browser and visit http://localhost:8000 to view the application running inside the Docker container.

Assumptions and Decisions <a name="assumptions-decisions"></a>
During the development process, the following assumptions and decisions were made:

The application is developed using HTML, CSS, and JavaScript to keep it lightweight and easy to deploy.
Users will run the application locally or deploy it using Docker for scalability.
Docker is chosen as the containerization solution to ensure easy deployment and scalability across different environments.
Python's built-in HTTP server is suggested for running the application locally, but any web server can be used.

# Objective: For the Position of Technical Project Developer

## Overview

This project involves developing a single-page web application using Node.js and React that interfaces with the QuickBase API to manage Olympic medal data. Users will be able to enter information about medals received by various countries through a dynamic form, which updates the QuickBase database and refreshes a stacked bar chart reflecting the latest data. The application prioritizes UI/UX design to ensure a user-friendly experience, utilizing the Highcharts library for visualizing medal statistics. This project aims to demonstrate my skills.

## Solution


This project is a basic full-stack web application featuring a React frontend and a Node.js backend. The server operates on port `5001`, while the client runs on port `3000`.

UI(React.js) component communicates with project backend server(Express.js) which internally communicates to a third party application Quickbase for its data storage needs. Quickbase provides the Quick Base APIs, leveraging their REST API to manage data storage. A separate token is generated for authentication, while a dedicated table was created to insert and retrieve data related to the project.

## Prerequisites

Ensure you have the following installed:
- **Node.js** (v18)
- **npm** (v8)

## Installation

### 1. Clone the Repository

```bash
git clone <https://github.com/sakshishrivastav/sakshishrivastav-QB-TPD-Craft-Demo >
cd <sakshishrivastav-QB-TPD-Craft-Demo >
cd client
npm install
cd ../server
npm install
```

### 2. Set up Environment Variables for server
Rename .env.example to .env
PORT = 5001
QB_TOKEN = "Get it from Quickbase"
QB_REALM = "Get it from quickbase"
QB_MEDALS_TABLE_ID = "Create your own table and get the ID"
QB_QUERY_URL = "https://api.quickbase.com/v1/records/query"
QB_UPSERT_URL = "https://api.quickbase.com/v1/records"


### 3. Running the project
1- Open two terminals one for client and one for server
-Terminal 1 run `npm run start`
-Terminal 2 run ``npm run start`


 ### 4 What could be done with more time ?

I believe progress/improvement to be a never ending continuous process. With time many things could have been improved to a point where it would have been ~~perfect~~ close to perfect !!

However few of the things that currently comes to mind:

Few more validations
Add some graphs for historical Data
Add some test cases (UT + E2E)
Way better UI
Support for logging request

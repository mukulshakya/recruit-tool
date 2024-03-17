# Recruiter Tool

This repository host Recruiter Tool application, a basic tool for recruiters to manage candidate information.

## Features

- Add new candidates with their details including expected salary.
- Display a list of candidates with their details and computed score.
- Update the status of candidates.

## Technologies Used

- Node.js
- PostgresSQL
- React.js
- Tailwind CSS

## Quick demo

- [API](https://recruit-tool.onrender.com/api/candidates)
- [UI](https://recruit-tool-1.onrender.com/)
- [Video demo](https://drive.google.com/file/d/14uM-PKOGYmQtdseZyiHbHwDkSc2MB5Jy/view?usp=drive_link)


## Getting Started

To get a local copy of the frontend up and running, follow these steps:

1. Clone the repository:

   ```bash
    git clone git@github.com:mukulshakya/recruit-tool.git
   ```
2. Setup and start backend server

   ```
    npm install
    npm start
   ```
   - You can verify the server by either viewing logs on the shell, or just open [http://localhost:8000/api/candidates](http://localhost:8000/api/candidates)
   - For more you can refer to [this](/backend/postman_collection.json) document by importing it to postman.

3. Running frontend ui
    ```
    npm install
    npm start
    ```
    - Head over to the mentioned port on the terminal, generally your app will be running on [http://localhost:3000](http://localhost:3000)
    - To connect UI with the local backend server make below change [here](/frontend/src/services/api.js)
      ```js
       const api = axios.create({ baseURL: url.LIVE });
      ```
      to
      ```js
      const api = axios.create({ baseURL: url.LOCAL });
      ```

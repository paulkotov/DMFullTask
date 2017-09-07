# Decision Mapper full task test

Full task consists of 2 parts: client, server.

## Client:
It runs by "npm start" command and opens localhost:3000 in browser. Mainly this part fetches data from api-server and saves 
it in localstorage. This part built on react+redux architecture and visualizes SPA.

## Server:
It runs by "node server.js" and imitate server at localhost:6000. The aim of server is to authorize user and then save his
favorite data to database. Server built on express framework and uses pasport.js as authorizing servise and mongoDB as database.

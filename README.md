# inventory-catalogue
* This project will restore dump product details in mysql database, I have used mysql docker image which has the mysql database environment.

## Highlights
* This is a Node.Js Express project and IDE I used  Visual Studio Code
* MySQL database is used to store product data 
* Mocha is used for unit testing
* For local access of mysql database we need to install  mysql docker image. I have created docker-compose file which will install the mysql database environment and create table, stored procedures and restore all the products dump data locally
* we can get the filtered json data based on the various critera

## Setup
* We need the following component to up and run the project:
    * node 14.16.1
    * `yarn` for the package installation
    * mocha, chai for the unit testing
    * Docker Compose

* Once completed the environment setup we should run - 
    * `yarn  install` to install the packages.

# Docker setup for metadata and image location
* Once the application is built, we need to run the `docker-compose up` to setup the mysql database in a docker image/container which is a prerequisite for this application. 

* Once the `mysql` docker container is up and running. The script will create `inventory` database, `Products` table, few stored procedures and populate the `Products` table with the dump data.`

# Running the application
* `sh start.sh` will start the application in `localhost:3000`

# Preferred NODE_ENV setup
    * `export NODE_ENV=dev` 
* The bellow commands run the application with various options
    * `yarn start` - run the project in complied code
    * `yarn test` - run the test cases


# The API end-points
    * we can access the api via localhost:3000(locally running) 

# API to fetch maximum price products
# GET 
    http://localhost:3000/api/v1/product/price/max

# API to fetch minimum price products
# GET 
    http://localhost:3000/api/v1/product/price/min

# API to fetch fantastic attribute products for the value = true
# GET 
    http://localhost:3000/api/v1/product/attribute/fantastic

# API to fetch maximum rating products
# GET 
    http://localhost:3000/api/v1/product/rating/max

# API to fetch minimum rating products
# GET 
    http://localhost:3000/api/v1/product/rating/min

# Source code repository: https://github.com/abis1723/inventory-catalogue





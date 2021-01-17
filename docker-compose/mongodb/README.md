# Mongodb with docker-compose v3

## Execution
```bash
$ docker-compose up
```
> [!NOTE]
> `$ docker container ls`
> To see our running container.
> Login to your container by using container names
> `$ docker exec -it <container-name> bash`.
> Login to MongoDB with created User & Database by using
> `$ mongo -u <your-username -p <your-password> --authenticationDatabase <your-database-name>` inside container mongodb.


> [!CAUTION]
> Sometimes should be run as user root with `sudo`.


## Finally
> [!IMPORTANT]
> Now you have created your Persisten MongoDB container, your MongoDB user, superuser, and database. You can connect your software to the database by using this URL as a connection by example:
> `mongodb://YourUsername:YourPasswordHere@127.0.0.1:27017/your-database-name`

## Explanation
~~~~
version: '3' # Is a version of docker-compose file format, you can change the latest version
services: # Is a services definitions
  mongodb: # Is just a service name, you can change the name whatever you want
    image: 'mongo' # Must be mongo, because you want to create a container from mongo image
    environment: # Is a variables that will be used on the mongo container
      - MONGO_INITDB_DATABASE=flask # You fill with a database name that you want to create, make it same like init-mongo.js
      - MONGO_INITDB_ROOT_USERNAME=root # You fill with username of root that you want
      - MONGO_INITDB_ROOT_PASSWORD=root # You fill with password of root that you want
    - volumes: # To define a file/folder that you want to use for the container
      - ./init-mongo.js:/docker-entrypoint-initdb.d/init-mongo.js:ro # Means you want to copy init-mongo.js to /docker-entrypoint-initdb.d/ as a read only file. /docker-entrypoint-initdb.d is a folder that already created inside the mongo container used for initiating database, so we copy our script to that folder
      - ./mongo-volume:/data/db # Means you want to set data on container persist on your local folder named mongo-volume . /data/db/ is a folder that already reated inside the mongo container.
    ports:
      - '27017-27019:27017-27019' # Is to definer which ports you want to expose and define, in this case I use default mongoDB port 27017 until 27019
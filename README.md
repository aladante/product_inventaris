

#  crucial deployment step!!!!
order deployment
postgres
spring

react and add ip of loadbalancer in the apolloclient file this is backend api

Inventaris application

Start the application

Run `docker-compose up db` to start the postgress db in a docker container.

Then move/cd into the `backend-inventaris` folder.

I then run `./mvnw spring-boot:run`

https://phoenixnap.com/kb/install-maven-on-ubuntu
If the're are packages that needs to be installed I run mvn clean
Maven is a package manager for java

Then go to the front-end folder.
yarn is a javascript package manager.
Run `yarn start`
This is for development purposes and this should not be done in production.

I have also included a dockerfile which create a production ready container for the node application.
It's found in the `front-end` folder `Dockerfile`.

Then I still need to login to the database. 
with the password of the postgres database is `postgres`. 
If possible I would like to also set this with the values.yaml file.

psql -h 0.0.0.0  -p 5432 -U postgres -W

Then `\c vaccinatiepunt_inventaris`
To move to the correct database and then run the following lines to add the roles.
```
INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_MODERATOR');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');
```

The application has now started

In the curl folder there are is a curl command to create users.
Which you can then use to login.

# starr
![STARR](starr/Document.pdf)

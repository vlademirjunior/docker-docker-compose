/**
 * Javascript for mongodb initialization 
 * 
 * @description File for initiate authenticated database and user
 * @see http://joseantoniopio.com/programming/mongodb-4-2-x-on-docker-that-works/
 */
db.createUser({
    user: 'root',
    pwd: 'root',
    roles: [{
        role: 'readWrite',
        db: 'mongo'
    }]
});
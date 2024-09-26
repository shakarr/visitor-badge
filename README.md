# Visitor Badge

Visitor badge is a badge generator service to count visitors of your markdown file, made in node.

![visitors](https://visitorbadge.shakarzr.com/api/counter/hit/shakarzr/shakarzr?t=${Date.now()})

## Example Use

Default use:

```
![visitors](https://visitorbadge.shakarzr.com/api/counter/hit/shakarzr/shakarzr)
```

You can put it in a img tag also:

```
 <img src="https://visitorbadge.shakarzr.com/api/counter/hit/shakarzr/shakarzr" />
```

**NOTE: If you see that the image is not updated when visiting the page, it may be that you have cache problems with the browser, for this you can do the following**

```
 <img src="https://visitorbadge.shakarzr.com/api/counter/hit/shakarzr/shakarzr?t=${Date.now()}" />
```

Or

```
![visitors](https://visitorbadge.shakarzr.com/api/counter/hit/shakarzr/shakarzr?t=${Date.now()})
```

## How to deploy in local

You have to create a .env file with the following content.

```
MONGO_URI=mongodb://root:123456@localhost:7017

MONGODB_USER=root
MONGODB_PASSWORD=123456
MONGODB_DATABASE=bbdd
MONGODB_LOCAL_PORT=7017
MONGODB_DOCKER_PORT=27017
```

You can change the content of the variables to your liking, but make sure that they match the names in the docker-compose.yml file, and that the values ​​in the connection string are correct with what you have put in the mongo variables.

Once this is set up, you just need to do a ``docker-compose up -d`` and a ``npm i`` ``npm start`` to run the project.

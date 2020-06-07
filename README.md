# say-their-name-node-service
Say Their Name Node service that handles  URL shortenings and meta data handlings 
# Say Their Names ✊🏿

## Overview

Welcome to the Say Their Names project. Our aim is to build an open-source platform that raises awareness of the injustice and often forgotten names of racial inequality at the hands of law enforcement. We strive to identify and amplify verified organizations to ensure donations are reaching those who can make the most impact with it.

## Contributing

**We heartily welcome any and all contributions that match our engineering standards!**

That being said, this codebase isn't your typical open source project because it's not a library or package with a limited scope—it's our entire product.

## How to run?
- Docker 
1. git clone repo 
2. cd into the folder
3. build docker image ``` docker build -t say-their-name-node-service .```
4. run docker ``` docker run -p 3000:3001 say-their-name-node-service ```

- Local
1. git clone repo 
2. cd into the folder
3. npm install
4. nodemon index
5. use it

## How to use endpoints: 

## Say Their Name - Node service 

SYN-Node service is built to handle url shortning on sharing the app content accross all the platforms. 

## How to use?

There is difference between calling this service on mobile and on web.

### Mobile 
>**Note:** this guide is writtetn with iOS in mind

Handling it on mobile requires few steps. 

#### Creation of the short link
This part is sliced on three routes :

1. People 
	>```https://s.saytheirnames.dev/people/{name-lastname}```

2. Petition
	>```https://s.saytheirnames.dev/petition/{id}```

3. Donations
	>```https://s.saytheirnames.dev/donation/{id}```

## Route:

POST
### Headers:

```meta-client``` **required** 
> ```STN-iOS``` for iOS or ```STN-Android``` for Android

```meta-url``` **required**
> Full url before shortning

### Response: (200)
```json
{'response':'f32sf2sa'} 
```

### Errors:
```json
{'error':'Header missing, check docs for more information about this error.'} 
```
Error is thrown when one or more required headers are missing.

#### Recivening original value of shorten url
This part is sliced on three routes :

1. People 
	>```https://s.saytheirnames.dev/p={short}```

2. Petition
	>```https://s.saytheirnames.dev/petition={short}```

3. Donations
	>```https://s.saytheirnames.dev/donation={short}```

## Route:

GET
### Headers:

```meta-client``` **required** 
> ```STN-iOS``` for iOS or ```STN-Android``` for Android


### Response: (200)
```json
{'response':'name-lastname'} 
```

### Errors: (404)
```json
{'error':'Not a valid short URL'} 
```
Error thrown when server can't find shorten link in database and send back it's original value



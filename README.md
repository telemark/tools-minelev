# tools-minelev

A variety of tools for MinElev operations

# Setup

Clone the repo.
Add an `.env`file.
Configure `.env` for your environment

```
ENCRYPTOR_SECRET=your-secret #Needed for LDAP tests
LDAP_JWT_SECRET=your-secret #Needed for LDAP tests
LDAP_LOOKUP_URL=ldap-service-url #Needed for LDAP tests
BUDDY_SERVICE_URL=buddy-service-url #Needed for most tests
BUDDY_JWT_SECRET=buddy-service-secret #Needed for most tests
TJOMMI_SERVICE_URL=tjommi-service-url
TJOMMI_SERVICE_SECRET=tjommi-service-secret
USERNAME_STUDENT=student-username #Needed for student tests
USERNAME_TEACHER=teacher-username #Needed for teacher tests
CLASS_ID=class-id #Needed for class tests
SEARCH_PHRASE=query #Needed for search tests
DATA_DIRECTORY_PATH=data-directory-path #Defaults to data
MONGODB_CONNECTION=mongodb-connection-string
MONGODB_COLLECTION_TJOMMI=mongodb-collection-tjommi
MONGODB_NAME=mongodb-db-name
```

# Usage

List students in class

```
$ node tools/check-class-students.js
```

List contact teachers for student

```
$ node tools/check-elev-kontaktlaerer
```

Check connection student - teacher

```
$ node tools/check-elev.js
```

List contact classes for teacher

```
$ node tools/check-laerer-kontaktklasser.js
```

Check search for teacher

```
$ node tools/check-laerer-search.js
```

Check teachers user via AD

```
$ node tools/check-user-ad.js
```

Check teachers connection to contact class

```
$ node tools/check-system.js
```

## Reports

Save all students to data/all-students.json.

```
$ npm run report:students:getall
```

Find all student missing contact teachers. (Requires `report:students:getall` to be run first)

```
$ npm run report:students:missingcontactteacher
```

Stats from the `report:students:missingcontactteacher` report

```
$ npm run stats:students:missingcontactteacher
```

# License

[MIT](License)
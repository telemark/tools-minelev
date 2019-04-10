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
USERNAME_STUDENT=student-username #Needed for student tests
USERNAME_TEACHER=teacher-username #Needed for teacher tests
CLASS_ID=class-id #Needed for class tests
SEARCH_PHRASE=query #Needed for search tests
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

# License

[MIT](License)
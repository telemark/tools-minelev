require('dotenv').config()

module.exports = {
  ENCRYPTOR_SECRET: process.env.ENCRYPTOR_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  LDAP_JWT_SECRET: process.env.LDAP_JWT_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  LDAP_LOOKUP_URL: process.env.LDAP_LOOKUP_URL || 'https://ldap.service.no/lookup',
  BUDDY_JWT_SECRET: process.env.BUDDY_JWT_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  BUDDY_SERVICE_URL: process.env.BUDDY_SERVICE_URL || 'https://buddy.service.no',
  USERNAME_STUDENT: process.env.USERNAME_STUDENT || '01016101',
  USERNAME_TEACHER: process.env.USERNAME_TEACHER || '01016101',
  CLASS_ID: process.env.CLASS_ID || 'SKIVS:1MBA',
  SEARCH_PHRASE: process.env.SEARCH_PHRASE || 'https://buddy.service.no',
  DATA_DIRECTORY_PATH: process.env.DATA_DIRECTORY_PATH || 'data'
}

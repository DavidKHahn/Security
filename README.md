# Security

### Injections:
   - Most common attacks with highest financial loss for companies (i.e. SQL injection)
   - https://www.hacksplaining.com/exercises/sql-injection (SQL Injection exercise detailing attack)


 **3 MAIN POINTS:**

 - Sanitize Input:
        - Only allow data of expected type
        - Using whitelist or blacklist while preserving correct content types

    - Parametrize Queries:
        - Predefined functions taking in specific parameters
        
        **Example:**

            function sqlSelect(name, email, id) {
                if(name === number)
            }

    - Knex.js or other ORMS: http://knexjs.org/

**TYPES OF ATTACKS:**

 - Deletes DB:

   ``'; DROP TABLE sqlinjection; --'``
   ``INSERT INTO sqlinjection (email) VALUES (; DROP TABLE sqlinjection; --);``

 - Password Field Access:

   ``' or 1=1--'``

 - Image Script Injection:
    ``<img src='/' onerror="alert('boom');">``

### 3rd Party Libraries:
   - "In addition, a new command in npm@6, `npm audit`, will soon allow you to recursively analyze your dependency trees to identify specifically what’s insecure — so you can swap in a new version or find a safer alternate dependency." (source: https://medium.com/npm-inc/announcing-npm-6-5d0b1799a905)
   - Be careful with 3rd party libraries, do research on their Github page, npm page and well-known with constant updates.
   - 'npm install -g nsp' (nsp check # audit package.json): you can use this to check for any vulnerabilities within a log format
   - 'npm install -g snyk' (snyk test # audit node_modules directory) help with checking 3rd party libraries and assists with fixing vulnerabilites. Snyk requires an authenticated account (use cmds 'snyk test, snyk auth').

 - Authentication
 - Don't Trust Anyone
 - Data Management
 - Access Control
 - Secure Headers
 - Code Secrets
 - XSS & CSRF
 - HTTPS Everywhere
 - Logging


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

### Logging:
 - Having good logging allows detecting issues, bugs quickly which makes this crucial to keep track of information
 - 'npm install winston': logger for everything similar to console.log but with more tools (source: https://github.com/winstonjs/winston)
 - 'npm install morgan': HTTP request logger, keeps track of information being passed around with timestamps
 - Do not reveal information to client side while trying to log data (complex in terms of how much actual data to log).

### HTTPS Everywhere:
 - SSL/TLS Certificates: protects data being passed over the internet and acts as verification protocol for websites.
 - https://letsencrypt.org: assists with privacy, protection, certificate ("S" for "Secure"), easy to setup and free.  Backed by Google, Cisco, Mozilla.
 - www.cloudflare.com: provides hosting with HTTPS out of the box also help against DDOS (Distributed Denial of Service Attack).

### XSS (CROSS-SITE SCRIPTING) & CSRF(CROSS-SITE REQUEST FORGERY):
 - Sanitize Input
 - No eval() -> Do not use this.
 - No document.write() -> Set CSP to block this.
 - Content Security Policy -> Important!
 - Secure + HTTPOnly Cookies: HTTPOnly allows only HTML access instead of JS which helps prevent cookies from being attacked by client side scripting and Secure attribute ensures cookies will be sent over the HTTP connection
 - CSRF Exercise Link: https://www.hacksplaining.com/exercises/csrf
 - XSS Exercise Link: https://www.hacksplaining.com/exercises/xss-stored

 - Authentication
 - Don't Trust Anyone
 - Data Management
 - Access Control
 - Secure Headers
 - Code Secrets



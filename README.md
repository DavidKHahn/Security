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
 - XSS: Scripts sent activating when it is read by an unsuspecting user's browser or by an application that has not protected itself against cross-site scripting (i.e. comment boxes, blog posts can have '<script></script>' access if not properly secured attacking user's cookies and browser)
 - CSRF: Occurs when a user is tricked into interacting with a page or script on a third-party site that generates a malicious request to your site.
 - Sanitize Input
 - No eval() -> Do not use this.
 - No document.write() -> Set CSP to block this.
 - Content Security Policy: An added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement to distribution of malware.
 - Secure + HTTPOnly Cookies: HTTPOnly allows only HTML access instead of JS which helps prevent cookies from being attacked by client side scripting and Secure attribute ensures cookies will be sent over the HTTP connection
 - CSRF Exercise Link: https://www.hacksplaining.com/exercises/csrf
 - XSS Exercise Link: https://www.hacksplaining.com/exercises/xss-stored

 USEFUL INFO:
  - https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP (Content Security Policy)
  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies (HTTP Cookies)
  - https://medium.com/hackernoon/cross-site-scripting-for-dummies-be30f76fad09 (Cross-site scripting for dummies)

#### Code Secrets:
 - Environmental Variables (i.e. using process.env.NODE_ENV to hide API KEYS, private info)
 - Commit History: Use a '.gitignore' file and never commit secret files otherwise Github will pickup 'removed passwords' in history.

#### Secure Headers:
 - 'npm install helmet' to have secure headers (https://www.npmjs.com/package/helmet)
 - 'helmet' sets CSP for us, protects server information

USEFUL INFO:
 - https://www.tutorialspoint.com/http/http_header_fields.htm (HTTP - Header Fields)
 - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers (Headers)

#### Access Control:
 - Having restrictions on what authenticated users are allowed to do or not
 - *Principal of least privilege* (always give least amount of privilege possible)
 - CORS (Cross Origin Sharing): restricts permissions to db access and adminsters web application options for users
 - Example below of CORS set up giving permission to clients to the websites inside 'whitelist' array:

 ``const whitelist = ['https://aneagoie.github.io', 'http://example2.com']
    const corsOptions = {
        origin: function (origin, callback) {
            if (whitelist.indexOf(origin) !== -1) {
                callback(null, true)
            } else {
                callback(new Error('Not allowed by CORS'))
            }
        }
    }``

#### Data Management:
 - Make sure to always have a backup for data, limit sensitive data exposure (encrypt at rest and translation: expensive)
 - bcrypt, scrypt, Aragon2 (hashing passwords and how to store them). **Never store passwords in plaintext.**
 - pgcrypto - encrypt a few columns (how to encrypt specific database columns)
 - Note when posting password through form: *POST requests are never cached, POST request will not remain in the browser history, No restriction on data length*

USEFUL LINK:

https://rangle.io/blog/how-to-store-user-passwords-and-overcome-security-threats-in-2017/ (How to Store User Passwords and Overcome Security Threats)

 - Authentication
 - Don't Trust Anyone







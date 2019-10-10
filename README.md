# Security

**Reference Points**
 - Injections:
    - Most common attacks with highest financial loss for companies (i.e. SQL injection)
    - https://www.hacksplaining.com/exercises/sql-injection (SQL Injection exercise detailing attack)


#### 3 MAIN POINTS:

 - Sanitize Input:
        - Only allow data of expected type
        - Using whitelist or blacklist while preserving correct content types

    - Parametrize Queries:
        - Predefined functions taking in specific parameters
        **Example:**

            ``function sqlSelect(name, email, id) {
                if(name === number)
            }``

    - Knex.js or other ORMS: http://knexjs.org/
    
#### TYPES OF ATTACKS:

 **Deletes DB:**

   ``'; DROP TABLE sqlinjection; --'``
   ``INSERT INTO sqlinjection (email) VALUES (; DROP TABLE sqlinjection; --);``

 **Password Field Access:**

   ``' or 1=1--'``

 **Image Script Injection:**
    ``<img src='/' onerror="alert('boom');">``

 - Authentication
 - Don't Trust Anyone
 - Data Management
 - Access Control
 - Secure Headers
 - Code Secrets
 - XSS & CSRF
 - HTTPS Everywhere
 - Logging
 - 3rd Party Libraries

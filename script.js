const bcrypt = require('bcrypt-nodejs');

bcrypt.hash("coffee", null, null, function(err, hash) {
// $2a$10$vgv58PVjVtUvgJo1PweysOMN8NgGmx8xU/7rgM9.fIX.VnxP40Nqi -> Represents "coffee"
    console.log(hash)
    // Store hash in your password DB.
  });

bcrypt.compare("coffee", '$2a$10$vgv58PVjVtUvgJo1PweysOMN8NgGmx8xU/7rgM9.fIX.VnxP40Nqi', function(err, res) {
    console.log(res) // true -> compares hash with password
    // res == true
});

// BCRYPT EXAMPLE:

/*
const bcrypt = require('bcrypt')
const saltRounds = 10 // increase this if you want more iterations but generally 10+ is recommended
const userPassword = 'supersecretpassword'
const randomPassword = 'fakepassword'

const storeUserPassword = (password, salt) =>
  bcrypt.hash(password, salt).then(storeHashInDatabase)

const storeHashInDatabase = (hash) => {
   // Store the hash in your password DB
   return hash // For now we are returning the hash for testing at the bottom
}

// Returns true if user password is correct, returns false otherwise
const checkUserPassword = (enteredPassword, storedPasswordHash) =>
  bcrypt.compare(enteredPassword, storedPasswordHash)


// This is for demonstration purposes only.
storeUserPassword(userPassword, saltRounds)
  .then(hash =>
    // change param userPassword to randomPassword to get false
    checkUserPassword(userPassword, hash)
  )
  .then(console.log)
  .catch(console.error) */
# week-3-Homework
This is a random password generator based on code snippets, an index.html page, and a style sheet given.
It prompts the user for a number between 5 and 128 to figure out how long of a password to generate
Then it asks the user about what sets of valid characters to use in the random generation.
then it generates a password of the desired length, using a random assortment of valid characters
Then it prints that back out
Used python to generate the lists of valid characters, rather than typing them out manually.
Wrote a prototype of the password generator in python, then ported it to javascript.

This fulfills all critea of the assignment, which are as follows, 
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

Special Characters used are, [' ', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\', ']', '^', '_', '`', '{', '|', '}', '~', '"', "'"]
which are valid for passwords as stated by [https://owasp.org/www-community/password-special-characters]

Also included python script used to print characters in an already array formatted way.
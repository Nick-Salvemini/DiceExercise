Database Schema for Users:
    The users table is designed to store information about users in the system.

Column	            Type	Constraints	        Description

id	                serial	PRIMARY KEY	        Unique identifier for each user.
username	        text	NOT NULL, UNIQUE	User's username.
password	        text	NOT NULL	        User's hashed password.
email	            text	NOT NULL, UNIQUE	User's email address.
wins	            INT	    DEFAULT 0	        Number of wins for the user.
losses	            INT	    DEFAULT 0	        Number of losses for the user.
highestScore	    INT	    DEFAULT 0	        User's highest score in the system.
playerIconNumber	INT	    DEFAULT 1	        Number representing the user's chosen icon.

The title of this project is KnuckleSanwiches.

It is designed to be a dice game where the user can create an account and play against a computer.  It includes Node and Express for the backend and Javascript, HTML, CSS, and Bootstrap for the front-end.  The users will go to the site, log-in or register and be redirected to their user page.  Once there, the user will be able to look at their stats and then play a new game.  

There is still a lot of work to be done in terms of polish, and several other features I'd like to add.  It was a good lesson in being overly ambitious.  I do have some more things I'd like to add, including refactoring the front end code to include React.  
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
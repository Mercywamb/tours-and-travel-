CREATE  TABLE users(
	_id varchar(100) NOT NULL PRIMARY KEY,
	username varchar(100) NOT NULL,
	email varchar(250) NOT NULL,
    role VARCHAR(100) DEFAULT 'user',
	password varchar(250) NOT NULL,
)



SELECT * FROM users




DROP TABLE users
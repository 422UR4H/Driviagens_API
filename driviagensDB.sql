CREATE TABLE passengers (
	id SERIAL PRIMARY KEY,
	"firstName" VARCHAR(100),
	"lastName" VARCHAR(100)
);

CREATE TABLE cities (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50)
);

CREATE TABLE flights (
	id SERIAL PRIMARY KEY,
	origin INTEGER REFERENCES cities(id),
	destination INTEGER REFERENCES cities(id),
	date DATE
);

CREATE TABLE travels (
	id SERIAL PRIMARY KEY,
	passengerId INTEGER REFERENCES passengers(id),
	flightId INTEGER REFERENCES flights(id)
);

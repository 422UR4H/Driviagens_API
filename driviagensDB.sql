CREATE TABLE passengers (
	id SERIAL PRIMARY KEY,
	"firstName" VARCHAR(32),
	"lastName" VARCHAR(64)
);

CREATE TABLE cities (
	id SERIAL PRIMARY KEY,
	name VARCHAR(64)
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

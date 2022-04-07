CREATE DATABASE employer_database;

CREATE TABLE employer(
    employer_id SERIAL PRIMARY KEY,
    last_name VARCHAR(50),
    first_name VARCHAR(50),
    is_active BOOLEAN,
    date_of_birth DATE
);
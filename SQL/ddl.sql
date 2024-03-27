CREATE TABLE Members (
    username VARCHAR(50) PRIMARY KEY,
    passwrd VARCHAR(50) NOT NULL
);

CREATE TABLE Trainers (
    username VARCHAR(50) PRIMARY KEY,
    passwrd VARCHAR(50) NOT NULL
);

CREATE TABLE Admin (
    username VARCHAR(50) PRIMARY KEY,
    passwrd VARCHAR(50) NOT NULL
);

CREATE TABLE TrainerTimes (
    username VARCHAR(50),
    start_time TIMESTAMP WITH TIME ZONE, 
    end_time TIMESTAMP WITH TIME ZONE,
    FOREIGN KEY (username) REFERENCES Trainers(username)
);
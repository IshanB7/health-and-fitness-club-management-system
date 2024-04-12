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
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    start_time TIMESTAMP WITH TIME ZONE, 
    end_time TIMESTAMP WITH TIME ZONE,
    class BOOLEAN NOT NULL,
    isgroup BOOLEAN NOT NULL,
    room INTEGER,
    count INTEGER NOT NULL,
    FOREIGN KEY (username) REFERENCES Trainers(username)
);

CREATE TABLE Payments (
    id INTEGER NOT NULL,
    payfrom VARCHAR(50) NOT NULL,
    payto VARCHAR(50) NOT NULL,
    amount INTEGER NOT NULL,
    cancel BOOLEAN NOT NULL,
    FOREIGN KEY (payfrom) REFERENCES Members(username),
    FOREIGN KEY (payto) REFERENCES Trainers(username),
    FOREIGN KEY (id) REFERENCES TrainerTimes(id)
);

CREATE TABLE Registered (
    id INTEGER NOT NULL,
    username VARCHAR(50) NOT NULL,
    FOREIGN KEY (id) REFERENCES TrainerTimes(id),
    FOREIGN KEY (username) REFERENCES Members(username)
);

CREATE TABLE Equipment (
    equipment_id SERIAL PRIMARY KEY,
    equipment_name VARCHAR(100) NOT NULL,
    equipment_serialNum VARCHAR(100) NOT NULL,
    equipment_used VARCHAR(50) NOT NULL
);

CREATE TABLE FitnessGoals (
    goal_id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    goal VARCHAR(255),
    completed BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (username) REFERENCES Members(username)
);

CREATE TABLE HealthMetrics (
    metric_id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    height FLOAT,
    weight FLOAT,
    bpm FLOAT,
    blood_pressure VARCHAR(20),
    sleep_duration FLOAT,
    daily_steps FLOAT,
    calorie_intake FLOAT,
    FOREIGN KEY (username) REFERENCES Members(username)
);

CREATE TABLE ExerciseRoutines (
    day VARCHAR(50),
    exercise_1 VARCHAR(100),
    exercise_2 VARCHAR(100),
    exercise_3 VARCHAR(100),
    exercise_4 VARCHAR(100),
    exercise_5 VARCHAR(100)
);
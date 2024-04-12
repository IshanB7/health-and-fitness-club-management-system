INSERT INTO Members VALUES
('craig', 'abc'),
('daniel', '123');

INSERT INTO Trainers VALUES
('trainer', '123');

INSERT INTO Equipment (equipment_name, equipment_serialNum, equipment_used) VALUES
('Treadmill', 'TM123456', 'Old'),
('Stationary Bike', 'SB789012', 'New'),
('Elliptical Trainer', 'ET345678', 'Old'),
('Rowing Machine', 'RM901234', 'New'),
('Smith Machine', 'SM567890', 'Old'),
('Leg Press Machine', 'LP123456', 'New'),
('Dumbbells', 'DB789012', 'Old'),
('Barbell', 'BB345678', 'New'),
('Bench Press', 'BP901234', 'Old'),
('Pull-up Bar', 'PU567890', 'New'),
('Resistance Bands', 'RB123456', 'Old'),
('Jump Rope', 'JR789012', 'New'),
('Medicine Ball', 'MB345678', 'Old'),
('Kettlebell', 'KB901234', 'New'),
('Yoga Mat', 'YM567890', 'Old');

INSERT INTO ExerciseRoutines (day, exercise_1, exercise_2, exercise_3, exercise_4, exercise_5)
VALUES 
('Monday','Squats', 'Push-ups', 'Lunges', 'Plank', 'Jumping Jacks'),
('Tuesday','Bicycle Crunches', 'Russian Twists', 'Leg Raises', 'Plank with Shoulder Taps', 'Mountain Climbers'),
('Wednesday','Bicep Curls', 'Tricep Dips', 'Shoulder Press', 'Bench Press', 'Pull-ups'),
('Thursday','Deadlifts', 'Step-ups', 'Glute Bridges', 'Leg Press', 'Calf Raises'),
('Friday','High Knees', 'Burpees', 'Jump Rope', 'Sprint Intervals', 'Box Jumps'),
('Saturday','Kettlebell Swings', 'Medicine Ball Slams', 'Battle Ropes', 'Farmers Walk', 'TRX Rows'),
('Sunday','Squat Jumps', 'Push-up Burpees', 'Mountain Climbers', 'Plank Jacks', 'Jump Lunges');
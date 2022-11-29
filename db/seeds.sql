INSERT INTO department (name)
VALUES 
    ('IT'),
    ('Finance & Accounting'),
    ('Sales & Marketing'),
    ('Operations');

INSERT INTO role (title, salary, department_id)
VALUES 
    ('Front End Web Developer', 70000, 1),
    ('Senior Risk Data Analyst', 90000, 2), 
    ('Development Coordindator', 45000, 3), 
    ('Recruiter', 50000, 4);

INSERT INTO employee (first_name, last_name, role, manager_id)
VALUES 
    ('Ashlynn', 'Landry', 1, NULL),
    ('Joshua', 'Bielenberg', 2, 2),
    ('Bianca', 'Long', 3, NULL),
    ('Alyssa', 'Graham', 4, 4);
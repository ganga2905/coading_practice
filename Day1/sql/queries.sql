create database Employee_Table;

use Employee_Table;

create table staff(
ID int primary key auto_increment,
name varchar(100),
department varchar(100),
salary int

);

insert into staff(name,department,salary)
values
("Ganga","developer",30000),
("Gayathri","designing",15000),
("Harish","backend",20000);

select * from staff;



 select * from staff order by salary desc limit 1;

select * from staff where salary>50000;

select department, count(*) as total_department from staff group by department; 





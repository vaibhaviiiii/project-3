# project3

"Book Keeper" a Book inventory project : it dipicts 4 main operations : adding book , viewinf total books , viewing details for individual books and removing out of stock books.

Technologies used:

Angular 8
jdk 11
jre 1.8.0
Spring 2.5.4
Maven 4.0.0
Eclipse & VSCode IDEs

Mysql :
please change username and password values in the 'application.properties' file in the Spring Boot application.

queries:

create database book;
use book;

create table books(
id int(5) primary key,
name varchar(20) unique,
author varchar(60) not null,
price integer(5));

insert into books values(1,"Alice in the Wonderland","Lewis Carrol",200);
insert into books values(2,"David Copperfield","charles dickens",300);


To run, please make sure that appfrontend has node modules folder.
Install bootstrap , jquery , @angular/material using npm install.

1. Run mysql
2. Run Spring application
3. Run Angular app

You can check screenshots from the 'doc' file attached in the project.
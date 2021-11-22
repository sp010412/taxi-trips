-- CREATE DATABASE Taxi_Trips;
create table Region (
    id serial not null primary key,
    region_name text NOT NULL
);

create table Routes (
    id serial not null primary key,
    routes_for_taxi text NOT NULL,
    cost int
);

create table Taxis (
    id serial not null primary key,
    registration text NOT NULL,
    region_id int,
    foreign key (region_id) references Region(id)
);

create table Trips (
    id serial not null primary key,
    taxi_id int,
    route_Id int,
    foreign key (taxi_id) references Taxis(id),
    foreign key (route_Id) references Routes(id)
);
-- Regions

insert into region(id, region_name) values (1, 'Durban');
insert into region(id, region_name) values (2, 'Cape Town');
insert into region(id, region_name) values (3, 'Gauteng');

-- Routes

insert into Routes(id, routes_for_taxi, cost) values (1, 'Cape Town - Bellville', 20);
insert into Routes(id, routes_for_taxi, cost) values (2, 'Cape Town - Gugulethu', 18);
insert into Routes(id, routes_for_taxi, cost) values (3, 'Cape Town - Langa', 14);
insert into Routes(id, routes_for_taxi, cost) values (4, 'Sandton - Randburg', 25);
insert into Routes(id, routes_for_taxi, cost) values (5, 'Alexandra - Sandton', 19);
insert into Routes(id, routes_for_taxi, cost) values (6, 'Sandton - Midrand', 30);
insert into Routes(id, routes_for_taxi, cost) values (7, 'Umlazi - Durban Central', 16);
insert into Routes(id, routes_for_taxi, cost) values (8, 'Durban Central - Umhlanga Rocks', 12);
insert into Routes(id, routes_for_taxi, cost) values (9, 'Durban Central - Umbilo', 12);


-- Taxis

insert into taxis(id, registration, region_id) values (1, 'CA 858-899', 2);
insert into taxis(id, registration, region_id) values (2, 'CA 858-111', 2);
insert into taxis(id, registration, region_id) values (3, 'CA 877-885', 2);
insert into taxis(id, registration, region_id) values (4, 'GP 2234', 3);
insert into taxis(id, registration, region_id) values (5, 'GP 1079', 3);
insert into taxis(id, registration, region_id) values (6, 'GP 6666', 3);
insert into taxis(id, registration, region_id) values (7, 'ZN 777 666', 1);
insert into taxis(id, registration, region_id) values (8, 'ZN 444 332', 1);
insert into taxis(id, registration, region_id) values (9, 'ZN 707 123', 1);


-- Trips

insert into Trips(id, taxi_id, route_Id) values (1, 1, 2);
insert into Trips(id, taxi_id, route_Id) values (2, 1, 1);
insert into Trips(id, taxi_id, route_Id) values (3, 1, 3);
insert into Trips(id, taxi_id, route_Id) values (4, 2, 2);
insert into Trips(id, taxi_id, route_Id) values (5, 2, 1);
insert into Trips(id, taxi_id, route_Id) values (6, 2, 3);
insert into Trips(id, taxi_id, route_Id) values (7, 3, 2);
insert into Trips(id, taxi_id, route_Id) values (8, 3, 2);
insert into Trips(id, taxi_id, route_Id) values (9, 3, 1);
insert into Trips(id, taxi_id, route_Id) values (10, 4, 5);
insert into Trips(id, taxi_id, route_Id) values (11, 4, 6);
insert into Trips(id, taxi_id, route_Id) values (12, 4, 4);
insert into Trips(id, taxi_id, route_Id) values (13, 5, 4);
insert into Trips(id, taxi_id, route_Id) values (14, 5, 6);
insert into Trips(id, taxi_id, route_Id) values (15, 5, 6);
insert into Trips(id, taxi_id, route_Id) values (16, 6, 4);
insert into Trips(id, taxi_id, route_Id) values (17, 6, 4);
insert into Trips(id, taxi_id, route_Id) values (18, 6, 4);
insert into Trips(id, taxi_id, route_Id) values (19, 7, 8);
insert into Trips(id, taxi_id, route_Id) values (20, 7, 8);
insert into Trips(id, taxi_id, route_Id) values (21, 7, 9);
insert into Trips(id, taxi_id, route_Id) values (22, 8, 7);
insert into Trips(id, taxi_id, route_Id) values (23, 8, 8);
insert into Trips(id, taxi_id, route_Id) values (24, 8, 9);
insert into Trips(id, taxi_id, route_Id) values (25, 9, 9);
insert into Trips(id, taxi_id, route_Id) values (26, 9, 7);
insert into Trips(id, taxi_id, route_Id) values (27, 9, 8);




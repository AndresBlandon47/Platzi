select actor_id, last_name, first_name,count(first_name)
from sakila.actor group by first_name order by last_name;

select actor_id, last_name, first_name
from sakila.actor group by first_name order by last_name desc ;

select actor_id, last_name, first_name, count(first_name)
from sakila.actor group by last_name;

select actor_id, last_name, first_name
from sakila.actor where first_name = 'MINNIE';

show columns from sakila.actor;






select C.first_name, C.email, A.address
from sakila.customer as C, sakila.address as A
where C.address_id = A.address_id;

select C.first_name, C.last_name, A.address, CY.city
from sakila.customer as C, sakila.address as A, sakila.city as CY
where C.address_id = A.address_id and A.city_id = CY.city_id and CY.city <> 'Warren' 
order by CY.city desc;

select count(A.address), C.city
from sakila.address as A, sakila.city as C
where A.city_id = C.city_id
group by A.city_id desc;

/*Otra parte aca se hace tuplas y mas tuplas*/

select * from sakila.film_text
where title like '%rd';

alter table sakila.film_text add column fecha_lanza timestamp default now();
alter table sakila.film_text drop column fecha_lanza;


show columns from sakila.film_text;
select * from sakila.film_text;

update sakila.film_text set title='Holis' where film_id =2;
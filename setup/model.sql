create database orders_food;


create table categories (
  category_id int generated by default as identity primary key,
  category_name varchar(32) not null
);

create table products (
  product_id int generated by default as identity primary key,
  product_name varchar(64) not null,
  category_id int not null references categories(category_id),
  product_price decimal(15, 2) not null,
  product_image varchar(70),
  product_available boolean default true
);

create table tables(
  table_id int generated by default as identity primary key,
  table_number int not null
);

create table orders (
  order_id int generated by default as identity primary key,
  order_time timestamptz default current_timestamp,
  order_product_count smallint default 1,
  product_id int not null references products(product_id),
  table_id int not null references tables(table_id)
);



create table users(
  user_id int generated by default as identity primary key,
  role smallint default 0,
  username varchar(40) not null,
  password varchar(64) not null
);

create unique index username_idx on users (lower(username));

CREATE UNIQUE INDEX idx_employees_mobile_phone
ON tables(table_number);

create extension pgcrypto;


/* create table order_products (
	order_product_id int generated by default as identity primary key,
	order_id int not null references orders (order_id),
	product_id int not null references products(product_id),
	order_product_count smallint default 1
); */


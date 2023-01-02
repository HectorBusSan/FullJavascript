create table task(
    id int not null primary key auto_increment,
    title varchar(200) not null,
    description varchar(300),
    done boolean not null default 0,
    createdAt timestamp not null default current_timestamp
);


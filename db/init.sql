CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    auth_id TEXT,
    name VARCHAR,
    email VARCHAR
)

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    price REAL,
    description VARCHAR(500),
    picture text
)

CREATE TABLE cart (
    id SERIAL PRIMARY KEY,
    product_id integer references products(id),
    quantity integer,
    users_id integer references users(id)
)
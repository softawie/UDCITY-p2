CREATE TABLE IF NOT EXISTS order_products (name VARCHAR(100), user-id INT NOT NULL REFERENCES users(id),product-id INT NOT NULL REFERENCES products(id) ,id SERIAL PRIMARY KEY );

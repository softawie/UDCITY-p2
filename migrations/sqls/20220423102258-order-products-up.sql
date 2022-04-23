CREATE TABLE IF NOT EXISTS order_products (name VARCHAR(100), order_id INT NOT NULL REFERENCES orders(id),product_id INT NOT NULL REFERENCES products(id) ,quantity INT);

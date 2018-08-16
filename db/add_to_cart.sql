insert into cart(product_id, quantity)
values($1, $2);
select * from cart
join products on cart.product_id = products.id;
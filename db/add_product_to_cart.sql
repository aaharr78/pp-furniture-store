insert into cart(product_id, quantity, users_id)
values ($2, $1, $3);
select * from cart
join products on cart.product_id = products.id
order by product_id
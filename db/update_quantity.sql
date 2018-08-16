update cart
set quantity = $1
where product_id = $2;
select * from cart
join products on cart.product_id = products.id
order by product_id;
select * from cart
join products on cart.product_id = products.id
order by product_id
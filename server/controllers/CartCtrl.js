module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db')

        db.get_products()
            .then(results => {
                res.status(200).send(results)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send('Something done brokeded')
            })
    },
    getCart: (req, res) => {
        const db = req.app.get('db')
        
        db.get_cart()
            .then(results => {
                res.status(200).send(results)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send('Something done brokeded')
            })
    },
    addToCart: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        
        db.add_product_to_cart([1, id]).then(results => {
            res.status(200).send(results)
        })
    },
    updateQuantity: (req, res) => {
        let {id} = req.params
        let {quantity} = req.query
        const db = req.app.get('db')

        db.update_quantity([+quantity, id]).then(results => {
            res.status(200).send(results)
        })
    },
    deleteFromCart: (req, res) => {
        let {id} = req.params
        let db = req.app.get('db')
        db.delete_from_cart([id]).then(results => {
            res.status(200).send(results)
        })
    },
    checkout: (req, res) => {
        let db = req.app.get('db')
        db.checkout().then(results => {
            res.status(200).send(results)
        })
    }
}
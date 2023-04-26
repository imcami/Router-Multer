
import express from 'express'
import ProductRouter from  './Routes/products.js'
import cartRouter from './Routes/cart.js'
import { ProductManager } from './ProductManager';
import { CartManager } from './CartManager';

//Creo el server y le indico que mi url debe estar codificada
const app = express ()
const port = 8080
app.use(express.json)
app.use(express.urlencoded({extended:true}))

//Defino las rutas
app.use('./api/products', ProductRouter)
app.use('./api/carts', cartRouter)


app.listen(port, () =>{
    console.log(`Server on port ${port}`)
})


//productos

const ProductManager = new ProductRouter('./productos.txt')

app.get("/product", async (req, res) => {
    const products = await ProductManager.getProducts()
    res.send(products)
})

app.get("/product/:id", async (req, res) => {
    const product = await ProductManager.getProductById(req.params.id)
    res.send(product)
})

app.post("/product", async (req, res) => {
    const { title, description, price, thumbnail, code, stock } = req.body
    await ProductManager.addProduct({ title, description, price, thumbnail, code, stock })
    res.send("Producto creado")
})

app.put("/product/:id", async (req, res) => {
    const id = req.params.id
    const { title, description, price, thumbnail, code, stock } = req.body

    const mensaje = await ProductManager.updateProduct(id, { title, description, price, thumbnail, code, stock })

    res.send(mensaje)
})

app.delete("/product/:id", async (req, res) => {
    const id = req.params.id
    const mensaje = await ProductManager.deleteProduct(id)
    res.send(mensaje)
})

app.listen(port, () => {
    console.log(`Server on port ${port}`)
})

//CARRITO
const CartManager = new CartProduct('./carrito.txt')

app.get("/cart/:id", async(req, res)=>{
    const cart = await CartManager.addToCartById(req.params.id)
    res.send(product)
})

app.post("/product", async (req, res)=>{
    const {id} = req.body
    await CartManager.addToCartById({id})
    res.send('id del producto obtenido')
})

app.put("/cart/:id", async (req, res) => {
    const id = req.params.id
    const { title, description, price, thumbnail, code, stock } = req.body

    const mensaje = await CartManager.updateProduct(id, { title, description, price, thumbnail, code, stock })

    res.send(mensaje)
})

app.delete("/product/:id", async (req, res) => {
    const id = req.params.id
    const mensaje = await CartManager.deleteProduct(id)
    res.send(mensaje)
})
import {Router} from "express"
import { ProductManager } from "../ProductManager"

const ProductManager = new ProductManager('src/products.txt')

const routerProd = Router()

//obtener la funcion getProducts() del Product Manager
routerProd.get('/', async  (req, res)=> {
       //uso de limit
        const { limit } = req.query
        console.log(limit)
        const products = await ProductManager.getProducts()
        console.log(products)
        res.send(JSON.stringify(products))

    })


routerProd.get('/:id', async  (req, res)=> {
    const product = await ProductManager.getProductById(req.params.id)
    console.log(product)
    res.send(JSON.stringify(product))
})

routerProd.post('/', async  (req, res)=> {
    let message = await ProductManager.addProduct(req.params.id)
    res.send(message)
})

routerProd.delete('/:id', async (req, res)=>{
    let message = await ProductManager.deleteProduct(req.params.id)
    res.send(message)
})

routerProd.put('/:id', async(req, res)=>{
    let message = await ProductManager.updateProduct(req.params.id, req.body)
    res.send(message)
})
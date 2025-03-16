import { useEffect, useState } from "react"
import ProductsCard from "../components/ProductsCard"
import { getAllProducts } from "../services/apiService"


function Home(){

    // const products = [
    //     {id:1,name:'Shirt'},
    //     {id:2,name:'Long Sleeves'},
    //     {id:3,name:'Pants'},
    // ]

    const [products,setProducts] = useState([])
    const [error,setError] = useState(null)

    useEffect(()=>{
        const loadProducts = async()=>{
            try{
                const getProducts = await getAllProducts()
                setProducts(getProducts)
            }
            catch(err){
                console.log(err)
                setError('Failed to load products...')
            }
        }
        loadProducts()
    },[])



    return(

        <div>
            This the homepage
            <div className="product-grid">
             {products.map((product)=>(
                 <ProductsCard product={product} key={product.id}/>
             ))}
            </div>
        </div>



    )
}

export default Home
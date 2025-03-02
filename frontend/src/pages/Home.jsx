import ProductsCard from "../components/ProductsCard"

function Home(){

    const products = [
        {id:1,name:'Shirt'},
        {id:2,name:'Long Sleeves'},
        {id:3,name:'Pants'},
    ]


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
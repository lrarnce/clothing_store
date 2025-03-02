function ProductsCard({product}){
    return(
        <div className="products-main">
            <div className="product-image">

            </div>
            <p className="product-id">{product.id}</p> 
            <p className="product-name">{product.name}</p> 
            
        </div>
            
       
    )
}

export default ProductsCard
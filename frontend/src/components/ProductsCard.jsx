import {useNavigate} from "react-router-dom"



function ProductsCard({product}){

    const navigate = useNavigate()

    const handleClick = ()=>{
       navigate(`/products/${product.id}`)
    }

    return(
        <div className="products-main" onClick={handleClick}>
            <div className="product-image">

            </div>
            <p className="product-id">{product.id}</p> 
            <p className="product-name">{product.name}</p> 
            <p className="product-price">{product.price}</p> 
            
        </div>
            
       
    )
}

export default ProductsCard
import { 
    Price,
    ProductBuy,
    ProductDescription,
    ProductImage, 
    ProductTitle, 
    ProductType, 
    ProductsContainer, 
    ProductsListTitle 
} from "./styles"

import { products } from "../../../../products/products"
import { ProductCart } from "../ProductCart"

export function Products() {

    return (

        <ProductsContainer>
            <ProductsListTitle>Nossos cafés</ProductsListTitle>
            <ul>
                {products.map(product => {
                    return (
                        <li key={product.id}>
                            <ProductImage src={product.image}/>
                            <div>
                                {product.type.map(productType => {
                                    return (
                                        <ProductType key={productType.content}>
                                            {productType.content.toUpperCase()}
                                        </ProductType>
                                    )
                                })}
                             </div>
                            
                            <ProductTitle>{product.title}</ProductTitle>
                            
                            <ProductDescription>{product.description}</ProductDescription>
                            
                            <ProductBuy>

                                <Price>
                                    <span>R$</span>
                                    <h3>{product.price.toFixed(2).replace('.', ',')}</h3>
                                </Price>

                                <ProductCart 
                                    product={product}
                                />

                            </ProductBuy>
                        </li>
                    )
                })}
            </ul>
        </ProductsContainer>

    )
}
import React from 'react';
import './main/MainSection';
import './main/MainSection_2'
import './main/MainSection_3'
import './main/MainSection_4'
import './main/MainSection_5'
     const MainSection = ({ addToCart }) => {
         const products = [
             { id: 1, name: 'Product 1', price: 10 },
             { id: 2, name: 'Product 2', price: 20 },
             { id: 3, name: 'Product 3', price: 30 },
         ];

         return (
             <div>
                 <h2>Main Section</h2>
                 <ul>
                     {products.map((product) => (
                         <li key={product.id}>
                             {product.name} - ${product.price}
                             <button onClick={() => addToCart(product)}>Add to Cart</button>
                         </li>
                     ))}
                 </ul>
             </div>
         );
     };
export default MainSection;
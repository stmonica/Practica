// import { Form, Button } from "react-bootstrap"
// import ApiHelper from "../../helpers/api";
// import {useEffect, useState} from 'react';




// const EditProduct = ({theProduct}) =>{

//     const productId = theProduct.productId;
//     const [name, setName]= useState(theProduct.name);

//     const handleSubmit = (e) => {
//         e.preventDefault();

        
//         const updateProduct = {
//             productId: editProduct.productId,
//             name: editProduct.name,
//             description: editProduct.description,
//             price: editProduct.price, 
//             basePrice: editProduct.basePrice,
            
//         }

//         ApiHelper.CategoryProducts.update(updateProduct.productId, updateProduct)
//         };
    


        
//      return (

//         <Form onSubmit={handleSubmit}>
//             <Form.Group>
//                 <Form.Control
//                     type="text"
//                     placeholder="Name "
//                     name="name"
//                     value={editProduct.name}
//                     onChange={(e)=> setEditProduct(e.target.value)}
//                     required
//                 />
//             </Form.Group>
//             <Form.Group>
//                 <Form.Control
//                     type="description"
//                     placeholder="Description "
//                     name="description"
//                     value={editProduct.description}
//                     onChange={(e)=> setEditProduct(e.target.value)}
//                     required
//                 />
//             </Form.Group>
//             <Form.Group>
//                 <Form.Control
//                     type="price"
//                     placeholder="price "
//                     name="price"
//                     value={editProduct.price}
//                     onChange={(e)=> setEditProduct(e.target.value)}
//                     required
//                 />
//             </Form.Group>
//             <Form.Group>
//                 <Form.Control
//                     type="basePrice"
//                     placeholder="basePrice "
//                     name="basePrice"
//                     value={editProduct.pribasePricece}
//                     onChange={(e)=> setEditProduct(e.target.value)}
//                     required
//                 />
//             </Form.Group>
           
//             <Button variant="success" type="submit" block>
//                 Edit Product
//             </Button>
//         </Form>

//      )
// }

// export default EditProduct;
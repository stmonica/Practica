// import { Form, Button, Modal, Row, Col, } from "react-bootstrap"
// import ApiHelper from "../../helpers/api";
// import {useEffect, useState} from 'react';
// import React,{Component} from 'react';


// const EditCategory = ({theCategory}) =>{

//     const categoryId = theCategory.categoryId;
//     const [name, setName]= useState(theCategory.name);
//     const [description, setDescription]= useState(theCategory.description);
  
//     const handleShowEdit = (e) => {
//         e.preventDefault();

//         const updateCategory = {
           
//             categoryId: editCategory.categoryId,
//             name: editCategory.name,
//             description: editCategory.description
//         }

//         ApiHelper.ProductCategories.update(updateCategory.categoryId, updateCategory)
        
//         };
        
//         useEffect(() => {
           
//             ApiHelper.ProductCategories.getById(props.categoryId).then((mappedApiCategories) => {
//               setEditCategory(mappedApiCategories);
              
//             });

//          }, [props]);

//             return (
//                 <Form onSubmit={handleShowEdit}>
//                        <Form.Group>
//                     <Form.Control
//                         type="text"
//                         placeholder="CategoryId "
//                         name="categoryId"
//                         value={editCategory.categoryId}
//                         onChange={(e)=> setEditCategory(e.target.value)}
//                         required
//                     />
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Control
//                         type="text"
//                         placeholder="Name "
//                         name="name"
//                         value={editCategory.name}
//                         onChange={(e)=> setName(e.target.value)}
//                         required
//                     />
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Control
//                         type="description"
//                         placeholder="Description"
//                         name="description"
//                         value={editCategory.description}
//                         onChange={(e)=> setDescription(e.target.value)}
//                         required
//                     />
//                 </Form.Group>
                
//                 <Button variant="success" type="submit" block>
//                     Edit Category
//                 </Button>
//             </Form>
    
//          )
//     }
    
//     export default EditCategory;
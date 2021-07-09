import { Form, Button, Row, Col, Image } from "react-bootstrap"
import ApiHelper from "../../helpers/api";
import { useState} from 'react';
import Product from "../../models/product";
import { propTypes } from "react-bootstrap/esm/Image";



const AddProduct = (props) => {
  
 
    
    const [newProduct, setNewProduct] = useState({
        productId: props.productId,
        name: props.name, 
        description: props.description,
        price: props.price, 
        basePrice: props.basePrice,
        categoryId: props.categoryId,
        fileName: props.fileName

    });
   
    const onInputChange = (e) => {
        
        setNewProduct({...newProduct,[e.target.name]: e.target.value})
    }

   

    const handleSubmit = (e) => {
        e.preventDefault();

        const addProduct = {
            productId: newProduct.productId,
            name: newProduct.name,
            description: newProduct.description,
            price: newProduct.price, 
            basePrice: newProduct.basePrice,
            categoryId: newProduct.categoryId,
            fileName: newProduct.fileName
        }
        ApiHelper.CategoryProducts.create(addProduct).then((mappedApiProducts) => {
            console.log(mappedApiProducts);
            setNewProduct(mappedApiProducts);
        });
    };

    
    
     return (
        <Row>
        <Col sm={6}>
        <Form onSubmit={handleSubmit}>
            
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name "
                    name="name"
                    value={newProduct.name}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
          
            <Form.Group>
                <Form.Control
                    type="description"
                    placeholder="Description "
                    name="description"
                    value={newProduct.description}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="price"
                    placeholder="Price "
                    name="price"
                    value={newProduct.price}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="basePrice"
                    placeholder="BasePrice "
                    name="basePrice"
                    value={newProduct.basePrice}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="categoryId"
                    placeholder="CategoryId "
                    name="categoryId"
                    value={newProduct.categoryId}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
           
            <Button variant="success" type="submit" block onClick = {handleSubmit} >
                Add Product
                
            </Button>
        </Form>
        </Col>


</Row>
     )
}

export default AddProduct;
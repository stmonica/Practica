import { Form, Button } from "react-bootstrap"
import ApiHelper from "../../helpers/api";
import { useState} from 'react';
import Category from "../../models/category";
import { propTypes } from "react-bootstrap/esm/Image";



const AddCategory = (props) => {
  
   
    const [newCategory, setNewCategory] = useState({
        categoryId: props.categoryId,
        name: props.name, 
        description: props.description
    });
   
    const onInputChange = (e) => {
        
        setNewCategory({...newCategory,[e.target.name]: e.target.value})
    }

    

    const handleSubmit = (e) => {
        e.preventDefault();

        const addCategory = {
            categoryId: newCategory.categoryId,
            name: newCategory.name,
            description: newCategory.description
        }
        ApiHelper.ProductCategories.create(addCategory).then((mappedApiCategories) => {
            console.log(mappedApiCategories);
            setNewCategory(mappedApiCategories);
        });
    };

    
    
     return (

        <Form onSubmit={handleSubmit}>
            
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name "
                    name="name"
                    value={newCategory.name}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="description"
                    placeholder="Description "
                    name="description"
                    value={newCategory.description}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
           
            <Button variant="success" type="submit" block onClick = {handleSubmit} >
                Add Category
                
            </Button>
        </Form>

     )
}

export default AddCategory;
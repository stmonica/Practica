import React, { useState } from "react";
import { Form, Button } from "react-bootstrap"
import "../style/sidebar.css";
import Category from "../models/category";
import create from "../helpers/api";
import Sidebar from "./components/Sidebar";

const AddForm = () =>{

    const {addCategory} = create(Sidebar);

    const [newCategory, setNewCategory] = useState({
        name:"", description:""
    });

    const onInputChange = (e) => {
        setNewCategory({...newCategory,[e.target.name]: e.target.value})
    }

    const {name, description} = newCategory;

    const handleSubmit = (e) => {
        e.preventDefault();
        addCategory(name, description);
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="description"
                    placeholder="Description *"
                    name="description"
                    value={description}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            
            
            <Button variant="success" type="submit" block>
                Add New Category
            </Button>
        </Form>

     )
}

export default AddForm;
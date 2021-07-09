import { Modal, Button, Alert,  OverlayTrigger, Tooltip} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import ApiHelper from "../../helpers/api";
import Category from "../../models/category";
import AddCategory from '.././Admin/AddCategory';
import EditCategory from '.././Admin/EditCategory';
import Pagination from '../Pagination';
import EditProduct from '../Admin/EditProduct';


const CategoriesList = (props) => {   
    
        const [categories, setCategories] = useState([]);
        const [category, setCategory] = useState({
            categoryId: null,
            name: null, 
            description: null
         
            
        });
       
      
        useEffect(() => {
           ApiHelper.ProductCategories.all().then((mappedApiCategories) => {
             setCategories(mappedApiCategories);
              console.log(category);
           });
        }, [props, categories]);
     
      
    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

     const handleShowEdit = () => setShowEdit(true);
    const handleCloseEdit = () => setShowEdit(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [categoriesPerPage] = useState(20)

   
    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(()=> {
            setShowAlert(false);
        }, 2000)
    }

   

    useEffect(() => {
        handleClose();

        return () => {
            handleShowAlert();
        }
    }, [props]);


    
    

    return (
    <>
    <div className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2>Manage <b>Categories</b></h2>
            </div>
            <div className="col-sm-6">
                <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Category</span></Button>					
            </div>
        </div>
    </div>

    <Alert show={showAlert} variant="success">
        Category List Updated Succefully!
    </Alert>


    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>CategoryID</th>
                <th>Name</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>

                {
                  categories.map(category => (
                      <tr key={category.categoryId}>
                        <td>{category.categoryId}</td>
                        <td>{category.name}</td>
                        <td>{category.description}</td>
                        
                        <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edit
                        </Tooltip>
                    }>
                    <button  onClick={handleShowEdit}   className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons">&#xE254;</i></button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Delete
                        </Tooltip>
                    }>
                    <button onClick={() => ApiHelper.ProductCategories.delete(category.categoryId)}  className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons">&#xE872;</i></button>
                </OverlayTrigger>
                
                
            </td>
                    </tr>
                  ))  
                }
                

        </tbody>
    </table>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Add Category
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddCategory />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
        </Modal.Footer>

        
    </Modal>
    
    
<Modal show={showEdit} onHide={handleCloseEdit}>
<Modal.Header closeButton>
    <Modal.Title>
        Edit Category
    </Modal.Title>
</Modal.Header>
<Modal.Body>
    <EditCategory/>
</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={handleCloseEdit}>
                    Close Button
                </Button>
</Modal.Footer>       
</Modal>
 </>
        )
    
}
export default CategoriesList;
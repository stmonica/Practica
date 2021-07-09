import { Modal, Button, Alert,  OverlayTrigger, Tooltip} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import ApiHelper from "../../helpers/api";
import Product from "../../models/product";
import AddProduct from '.././Admin/AddProduct';
import Pagination from '../Pagination';
import EditProduct from '../Admin/EditProduct'

const ProductsList = (props) => {   
    
        const [products, setProducts] = useState([]);
        const [product, setProduct] = useState({
            productId: props.productId,
            name: props.name, 
            description: props.description,
            price: props.price, 
            basePrice: props.basePrice,
            categoryId: props.categoryId
        });
       const [editShow, setEditShow] = useState(false);
       const [editProductId, setEditProductId] = useState();

       

        useEffect(() => {
           ApiHelper.CategoryProducts.all().then((mappedApiProducts) => {
             setProducts(mappedApiProducts);
              console.log(product);
           });
        }, [props]);
      
       
      
        const [showAlert, setShowAlert] = useState(false);

        const [show, setShow] = useState(false);
        const [showEdit, setShowEdit] = useState(false);
    
        const handleShow = () => setShow(true);
        const handleClose = () => setShow(false);
    
         const handleShowEdit = () => setShowEdit(true);
        const handleCloseEdit = () => setShowEdit(false);
   
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(20)

   
    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(()=> {
            setShowAlert(false);
        }, 2000)
    }

    const sortedProducts = products.sort((a,b)=>(a.name < b.name ? -1 : 1));

    useEffect(() => {
        handleClose();
        handleCloseEdit();
        return () => {
            handleShowAlert();
        }
    }, [sortedProducts])

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct  = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPagesNum = Math.ceil(sortedProducts.length / productsPerPage);

   

    return (
    <>
    <div className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2>Manage <b>Products</b></h2>
            </div>
            <div className="col-sm-6">
                <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Category</span></Button>					
            </div>
        </div>
    </div>

    <Alert show={showAlert} variant="success">
    Product List Updated Succefully!
    </Alert>

    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>ProductID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>BasePrice</th>
              
                
            </tr>
        </thead>
        <tbody>

                {
                  currentProducts.map(product => (
                      <tr key={product.productId}>
                        <td>{product.productId}</td>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.basePrice}</td>
                        <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edit
                        </Tooltip>
                    }>
                    <button  onClick={handleShowEdit}  className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons">&#xE254;</i></button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Delete
                        </Tooltip>
                    }>
                    <button onClick={() => ApiHelper.CategoryProducts.delete(product.productId)}  className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons">&#xE872;</i></button>
                </OverlayTrigger>
                
                
            </td>
                    </tr>
                  ))  
                }
                

        </tbody>
    </table>

    <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentProducts ={currentProducts}
                sortedProducts = {sortedProducts} />

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Add Product
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddProduct />
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
        Edit Product
    </Modal.Title>
</Modal.Header>
<Modal.Body>
    <EditProduct props = {props} />
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

export default ProductsList;
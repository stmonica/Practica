import {useState, useEffect} from 'react';
import ApiHelper from "../../helpers/api";
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditCategory from './EditCategory'



const Categories = (props) => {

    const [category, setCategory] = useState([]);
    const [categories, setCategories] = useState([]);
    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        ApiHelper.ProductCategories.all().then((mappedApiCategories) => {
          setCategories(mappedApiCategories);
           console.log(category);
           handleClose()
        });
     }, [props]);
   
    

    return (
        <>
         <td>{props.categoryId}</td>
            <td>{props.name}</td>
            <td>{props.description}</td>
          
            <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edit
                        </Tooltip>
                    }>
                    <button onClick={handleShow}  className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons">&#xE254;</i></button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Delete
                        </Tooltip>
                    }>
                    <button onClick={() => update(props.categoryId)}  className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons">&#xE872;</i></button>
                </OverlayTrigger>
                
                
            </td>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Edit Category
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditCategory d={props} />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
        </Modal.Footer>
    </Modal>
        </>
    )
}

export default Categories;
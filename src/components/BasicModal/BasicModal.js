import React from 'react'
import {Modal, ModalBody, ModalHeader} from 'reactstrap'
import AuthForm from './../AuthForm/AuthForm';

function BasicModal({open, toggle}) {
  return (
    <div>
       <Modal isOpen={open} style={{width:'800px !important'}} toggle={toggle}>
       <ModalHeader style={{marginLeft:'auto', border:'none'}}>
         <div>
         
         {/* <img src='https://img.icons8.com/fluency/2x/delete-sign.png'
     style={{height:'30px', width:'30px', cursor:'pointer', marginRight:30, marginTop:10}}
     onClick={toggle}></img> */}
         </div>
         </ModalHeader>
                <ModalBody>
                    <AuthForm />
                </ModalBody>
                {/* <ModalFooter>
                {/* <button type="submit"  className="btn btn-primary" onClick={() }>Create Product</button> 
                   <Button color="primary" onClick={toggle}>Close</Button>
                </ModalFooter> */}
            </Modal>
    </div>
  )
}

export default BasicModal
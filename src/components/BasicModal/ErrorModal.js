import React from 'react'
import {Modal, ModalBody, ModalHeader} from 'reactstrap'
import './error.css'

function ErrorModal({error, errorMessage, reset}) {
  return (
    <div>
        <Modal isOpen={error}>
       <ModalHeader style={{marginLeft:'auto', border:'none'}}>
         <div>
        
         </div>
         </ModalHeader>
                <ModalBody>
                <div class="modal-body text-center">
				<h4> Error 400</h4>	
				<p>{errorMessage}</p>
				<button class="btn btn-success" data-dismiss="modal" onClick={reset}>Try Again</button>
			</div>
                    
                </ModalBody>
            </Modal>
    </div>
  )
}

export default ErrorModal
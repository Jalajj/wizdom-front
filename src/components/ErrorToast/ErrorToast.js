import React from 'react'

import { Modal, ModalHeader, ModalBody} from 'reactstrap';

function ErrorToast({error}) {
    console.log(error)
  return (
    <div className='container' style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <div className="p-3 rounded">
    <Modal className='bg-danger' isOpen={error !== null ? true : false} onClose={error} style={{width:'50vw'}}>
      <ModalHeader>
       Error
      </ModalHeader>
      <ModalBody>
        This is error
      </ModalBody>
    </Modal>
  </div>
    </div>
  )
}

export default ErrorToast
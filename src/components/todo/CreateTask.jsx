import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


function CreateTask({modal, toggle}) {
    
    const [taskName , setTaskName] = useState('');
    const [description , setDescription] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target

        if(name==='taskName'){
            setTaskName(value);
        }
        else{
            setDescription(value);
        }
    }
    return(
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <form>
                    <div className='form-group'>
                        <label>Task Name</label>
                        <input 
                        type="text" 
                        className='form-control' 
                        value={taskName}
                        name='taskName'
                        onChange={handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Description</label>
                        <textarea 
                        rows="5" 
                        className='form-control' 
                        value={description}
                        name='description'
                        onChange={handleChange}
                        />
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>Create</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}

export default CreateTask
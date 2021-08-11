import React, { useState,useEffect } from 'react';
import { Modal, Button,Input  } from 'antd';

const AddUser = (props) => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState('');

  var addTitle = "Add User"
  var editTitle = "Update User"

  useEffect(()=>{

    if(props.isShowModal)
    {
      setIsModalVisible(true);
      setName(props.dataToUpdate.firstName);
    }
  },[props.isShowModal]);

  const showModal = () => {
    setIsModalVisible(true);

    if(props.isShowModal){
    setName(props.dataToUpdate.firstName);
    console.log(props.dataToUpdate);
  }
  };

   const setPropName= (name) =>{
    setName(name);
  }

  const inputEvent= (e) =>{
    var {name, value} = e.target;
    setName(value);
  }

  
  const saveUser = () => {

    if(props.isShowModal)
    {
      setIsModalVisible(false);
        props.editfun(props.dataToUpdate.key,name);
    }
    else{
        props.savefun(name);
         setIsModalVisible(false);
      
    }
      setName('');
     
  }


  return (
    <>
      <Button type="primary" onClick={showModal}>
        {props.modalTitle}
      </Button>
      <Modal title={props.modalTitle} visible={isModalVisible}  footer={null} onCancel={()=>{setIsModalVisible(false)}} >
        <p><Input value={name} onChange={inputEvent} name="name" placeholder="Enter Name" /></p>
        
        <p><Button onClick={saveUser} >Submit</Button></p>
      </Modal>
    </>
  );
};


export default AddUser;
import React,{useState} from 'react';

import { Table, Tag, Space } from 'antd';
import AddUser from './AddUser';
const { Column, ColumnGroup } = Table;



const Users = () => {

const [data, setData] = useState([
  {
    key: 1,
    firstName: 'John'
   
  }
])

const [isShowModal, setIsShowModal] = useState(0);
const [updatedData, setUpdatedData] = useState({key: 0,firstName:''});

const addNewItem =(item)=> {
      setData((preData)=>{
          return [...preData,{key:preData.length,firstName:item}];
      });
}

const deleteItem =(oneItem)=> {
 
      setData((preData)=>{
          return preData.filter((item)=>{
            return item.key!==oneItem.key
          });
      });
}

const openEditModal = (item) =>{
  setUpdatedData(item);
  setIsShowModal(1);
  console.log('item',item);
}

const updateItem = (key,name) =>{
 
setData((preData)=> {

 const updatedObject = preData.map((oneData) =>
      oneData.firstName === updatedData.firstName ? {"key":updatedData.key,"firstName": name } : oneData
    );

  return updatedObject;
});
 
}
    return (
        <>
      <AddUser savefun ={addNewItem} 
      isShowModal={isShowModal}
      dataToUpdate={updatedData}
      editfun={updateItem}
       modalTitle={isShowModal?'Edit User': 'Add User'}
      />
<Table dataSource={data}>
   
    <Column title="Name" dataIndex="firstName" key="key" />
    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <Space size="middle">
          <a onClick={()=>{openEditModal(text)}} >Edit</a>
          <a onClick={()=>{deleteItem(text)}}>Delete</a>
        </Space>
      )}
    />
  </Table>
        </>
    )
}

export default Users;
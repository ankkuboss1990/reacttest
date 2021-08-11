import React,{useState} from 'react';

import { Table, Tag, Space } from 'antd';
import AddUser from './AddUser';
const { Column, ColumnGroup } = Table;



const Todo = () => {

const [data, setData] = useState([
  {
    key: 1,
    todoName: 'todo1'
   
  }
])

const [isShowModal, setIsShowModal] = useState(0);
const [updatedData, setUpdatedData] = useState({key: 0,todoName:''});

const addNewItem =(item)=> {
      setData((preData)=>{
          return [...preData,{key:preData.length,todoName:item}];
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
      oneData.todoName === updatedData.todoName ? {"key":updatedData.key,"todoName": name } : oneData
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
      modalTitle={isShowModal?'edit Todo': 'Add Todo'}
      />
<Table dataSource={data}>
   
    <Column title="Name" dataIndex="todoName" key="key" />
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

export default Todo;
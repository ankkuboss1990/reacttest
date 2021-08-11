

import { Tabs } from 'antd';
import 'antd/dist/antd.css';

import Users from './Components/Users';
import Todo from './Components/Todo';
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function App() {
  return (
  <>
  <div style={{maxWidth:"800px",margin:"auto"}}>
      <Tabs defaultActiveKey="1" onChange={callback}>
       <TabPane tab="Users" key="1">
      <Users/>
    </TabPane>
    <TabPane tab="Todos" key="2">
      <Todo/>
    </TabPane>
   
  </Tabs>
  </div>
  </>
  );
}

export default App;

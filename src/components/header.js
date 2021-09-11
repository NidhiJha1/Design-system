import React from "react";
import { Menu} from 'antd';
const HeaderLayout = () => {


   return(
      <>
     
          <div className="container-fluid">  
          <div className="header">  
          <div className="logo">
              <i className="fas fa-bolt"></i>
              <a href="https://www.google.com/"> Website Logo</a>
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['Home']}>
              <Menu.Item key='Home'>Home</Menu.Item>
              <Menu.Item key='About'>About</Menu.Item>
              <Menu.Item key='Features'>Features</Menu.Item>
              <Menu.Item key='How it works'>How it works</Menu.Item>
              <Menu.Item key='FAQ'>FAQ</Menu.Item>
              <Menu.Item key='Pricing'>Pricing</Menu.Item>
              <Menu.Item key='Contact'>Contact</Menu.Item>
          </Menu>
          </div>
          </div>
        
      </>
   );
};

export default HeaderLayout;
import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const AppWork = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
   return(
       <>
    <div id="works" className="block worksBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>How it works</h2>
            <p>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora</p>
          </div>
          <div className="contentHolder">
            <Button type="primary" onClick={showModal}>
               <i className="fas"></i>
            </Button>
            <Modal title="Basic Modal" 
            visible={isModalVisible} 
            // onOk={handleOk} 
            onCancel={handleCancel}
            footer={null}
            >
            <iframe title="video" width="420" height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
           </iframe>
          </Modal>
          </div>
         </div>
        </div>      
       </>
   );
};

export default AppWork;
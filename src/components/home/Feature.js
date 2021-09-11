import React from "react";
import { Row, Col } from 'antd';
import { Card } from 'antd';
import  images1 from '../../assets/images/modern-design.jpg';
import  images2 from '../../assets/images/clean-design.jpg';
import  images3 from '../../assets/images/great-support.jpg';
import  images4 from '../../assets/images/easy-customise.jpg';
import  images5 from '../../assets/images/unlimited-features.jpg';
import  images6 from '../../assets/images/advanced-option.jpg';

const { Meta } = Card;

const Feature = () => {
     return(
         <>
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Key Features and Benefits</h2>
          <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
        </div>

        <Row gutter={[16, 16]}>
           <Col span={8}>
           <Card
              hoverable  
              cover={<img alt="Europe Street beat" src={images1} />}
           >
            <Meta title="Europe Street beat"/>
        </Card>
      </Col>

      <Col span={8}>
           <Card
              hoverable  
              cover={<img alt="Clean and Elegant" src={images2} />}
           >
            <Meta title="Clean and Elegant"/>
        </Card>
      </Col>

      <Col span={8}>
           <Card
              hoverable  
              cover={<img alt="Great Support" src={images3} />}
           >
            <Meta title="Great Support"/>
        </Card>
      </Col>

      <Col span={8}>
           <Card
              hoverable  
              cover={<img alt="Easy to customise" src={images4} />}
           >
            <Meta title="Easy to customise"/>
        </Card>
      </Col>

      <Col span={8}>
           <Card
              hoverable  
              cover={<img alt="Unlimited Features" src={images5} />}
           >
            <Meta title="Unlimited Features"/>
        </Card>
      </Col>

      <Col span={8}>
           <Card
              hoverable  
              cover={<img alt="Advanced Options" src={images6} />}
           >
            <Meta title="Advanced Options"/>
        </Card>
      </Col>
          
        </Row>
     </div>
    </div>        
         </>
     );
};

export default Feature;
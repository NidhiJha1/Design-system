import React from "react";
import { Carousel,Button } from 'antd';


// function onChange(a, b, c) {
//   console.log(a, b, c);
// }
const items = [
  {
    key: '1',
    title: 'Web and mobile payment built for developers',
    content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    key: '2',
    title: 'Work better together. Schedule meetings',
    content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    key: '3',
    title: 'The best app to increase your productivity',
    content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
]

const AppHero = () =>{
  return(
    <>
     <div className="heroBlock">
     <Carousel autoplay>
    {
      items.map((data, index) =>{
        return(
          <div key={index} className="container-fluid">
            <div className="content"> 
                <h1>{data.title}</h1>
                <p>{data.content}</p>
                <div className="btnHolder">
            <Button type="primary" size="large">Learn more</Button>
            <Button size="large"><i className="fas fa-desktop"></i>Watch a Demo</Button>
            </div>
            </div> 
                  
          </div>
        )
      })
    }
  </Carousel>,
  </div>
    </>
  );
};

export default AppHero;
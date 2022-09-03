import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './lottie/ecommerce-softsite.json';


export default class MagazinOnline extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false};
  }
 
  render() {
    const buttonStyle = {
      display: 'block',
      margin: '5px'
    };
 
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
        viewBoxSize: '0 50 600 500',
      }
    };
 
    return <div>
      <Lottie options={defaultOptions}
              height={150}
              width={150}
              style={{
                margin: "0px !important",
                paddingBottom: "-50px",
              }}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/>
    </div>
  }
}
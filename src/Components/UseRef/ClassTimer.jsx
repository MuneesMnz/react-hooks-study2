import React, { Component } from "react";

export default class ClassTimer extends Component {
  interval;
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    },1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }
  render() {
    return <div>
      <p>  Class Timer -{this.state.timer}</p>
      <button onClick={()=>{clearInterval(this.interval)
            this.setState(()=>({timer:0}))    
    }} >click</button>

    </div>;
  }
}

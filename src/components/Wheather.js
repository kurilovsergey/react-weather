import React, { Component } from 'react';

class Wheather extends React.Component {
  
    state = {
      temperature: "",
      icon: ""
    }
  
  componentDidMount() {
    this.gettingWheather();
  }

  gettingWheather = async () => {
    const api_url = await
     fetch(`http://api.apixu.com/v1/current.json?key=9f77e832acd44f4f940211616190404&q=${this.props.selectCity}`);
     const data = await api_url.json();
     this.setState({temperature: data.current.temp_c});
     this.setState({icon: data.current.condition.icon});
     console.log(data);
  }

  render (){
   //this.gettingWheather();
    return (
    <div>
    <div>{this.state.temperature}</div>
    <div><img src={this.state.icon} alt="загрузка..."/></div>
    {this.props.selectCity}
    </div>
    )
  }
}

export default Wheather
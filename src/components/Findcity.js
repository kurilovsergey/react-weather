import React, { Component } from 'react';

class Findcity extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      users: ['Novosibirsk', 'Moscow','Sochi','Chita','Tomsk'],
      input: '',
    }
  }

  onChangeHandler(e){
    this.setState({
      input: e.target.value 
    })
  }
debugger;
  render (){
      const list = this.state.users
        .filter(d => this.state.input === '' || d.includes(this.state.input))
        .map((d, index) => <div className="citylist" onClick={this.props.onSelectCity} id={index} key={index}>{d}</div>);

    return (<div>
      <input value={this.state.input} type="text" onChange={this.onChangeHandler.bind(this)}/>
        {list}
      </div>)
  }
}

export default Findcity
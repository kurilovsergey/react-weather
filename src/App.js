import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Findcity from './components/Findcity'
import Wheather from './components/Wheather'
import iconback from './icon/back.png';

class App extends Component {
	constructor(props) {
    super(props);
    this.onSelectCity = this.onSelectCity.bind(this);
    this.state = {city: ['Novosibirsk', 'Moscow','Sochi','Chita','Tomsk'],
    weather: false,
    selectCity: '',
    selectId: ''};
  }

onBack = (event) => {
    this.setState({weather: false});
    }
 
onSelectCity = (event) => {
	var target = event.target || event.srcElement;
    var id = target.id;
    alert(id);
    this.setState({weather: true, selectCity: this.state.city[id], selectId: target.id  });
    }

  render() {
    
    const status = this.state.weather;
    let renderscreen;
    let back;
    if (!status) {renderscreen=<Findcity onSelectCity={this.onSelectCity} /> 
     } else{back=<div className="back" onClick={this.onBack}><img src={iconback} alt="Logo" /></div>;
    	renderscreen=<Wheather selectCity={this.state.selectCity} selectId={this.state.selectId} /> };

    return (
      <div className="App">
  <div className="navbar">{back} Head</div>
  <header className="App-header">  
       {renderscreen}
      
       </header>

      </div>
    );
  }
}

export default App;

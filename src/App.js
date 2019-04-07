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
    this.state = {city: ['Novosibirsk', 'Moscow','Sochi','Chita','Tomsk','Paris','Nerchinsk','London','Kazan','Barcelona','Madrid','Saint-Petersburg','Liverpol','Manchester','Rio-de-janeiro','Johannesburg','Doha','Bilbao','Sevila'],
    weather: false,
    selectCity: '',
    selectId: ''};
  }

 
onSelectCity = (event) => {
	var target = event.target || event.srcElement;
    var id = target.id;
    this.setState({weather: true, selectCity: target.innerHTML, selectId: target.id  });
    }

    onBack = (event) => {
      this.setState({weather: false});
      }

  render() {
    
    const status = this.state.weather;
    let renderscreen;
    let back;
    if (!status) { renderscreen=<Findcity onSelectCity={this.onSelectCity} city={this.state.city} /> 
     } else {back=<div className="back" onClick={this.onBack}><img src={iconback} alt="Logo" /></div>;
    	renderscreen=<Wheather selectCity={this.state.selectCity} selectId={this.state.selectId} /> };
      console.log(this.state.selectCity);
    return (
      <div className="App">
  <div className="navbar">{back}</div>
  <header className="App-header">  
       {renderscreen}
       </header>
      </div>
    );
  }
}

export default App;

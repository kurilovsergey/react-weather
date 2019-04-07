import React, { Component } from 'react';
import s from "./Wheather.module.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

class Wheather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: '',
      temperature: "",
      icon: "",
      text: "",
      tommorow_temp: "",
      tommorow_icon: "",
      tommorow_text: "",
      base: [],
      dayoftheweek: [
        {id: 1, message: "What is your club?", likes: 12} 
        ]
    }
  }
    
  
  componentDidMount() {
    this.gettingWheather();
  }

  gettingWheather = async () => {
    const api_url = await
     fetch(`http://api.apixu.com/v1/current.json?key=9f77e832acd44f4f940211616190404&q=${this.props.selectCity}`);
     const data = await api_url.json();

     console.log(data);

     const api_url_ = await
     fetch(`http://api.apixu.com/v1/forecast.json?key=9f77e832acd44f4f940211616190404&q=${this.props.selectCity}&days=7`);
     const data_ = await api_url_.json();
  
     console.log(data_);

     this.setState({temperature: data.current.temp_c,
      icon: data.current.condition.icon,
      text: data.current.condition.text,
      day: data.location.localtime,
      tommorow_temp: data_.forecast.forecastday[1].day.maxtemp_c,
      tommorow_icon: data_.forecast.forecastday[1].day.condition.icon,
      tommorow_text: data_.forecast.forecastday[1].day.condition.text,
      base: data_.forecast.forecastday
  });

      
      
}

getWeekDay = (date) => {
   var year = date[0]+date[1]+date[2]+date[3];
   var month = date[5]+date[6]-1;
   var day = date[8]+date[9];
   
   var datetoday = new Date(year, month, day);
  var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

  return days[datetoday.getDay()]
}


  render (){
   //this.gettingWheather();
   this.getWeekDay(this.state.day);

   let table = this.state.base.map((item,i) => 
   <tr>
     <td><span>{this.getWeekDay(this.state.base[i].date)}</span></td>
     <td><img src={this.state.base[i].day.condition.icon} alt="загрузка..."/></td>
     <td>{this.state.base[i].day.maxtemp_c}°</td>
     <td>{this.state.base[i].day.mintemp_c}°</td>
 </tr>
   );
    return (
    <div className={s.wheather}>
      <div className={s.city}>{this.props.selectCity}</div>
      <div className={s.text}>{this.state.text}</div>
      <div className={s.temperaturetoday}>{this.state.temperature}°</div>
      <div><img src={this.state.icon} alt="загрузка..."/></div>

      <Tabs>
        <TabList>
          <Tab>Tomorrow weather</Tab>
          <Tab>Weather for a week</Tab>
        </TabList>

      <TabPanel>
        <div className={s.tommorow}>
          <h3>Tommorow: {this.state.tommorow_temp}°</h3>
          <div className={s.text}>{this.state.tommorow_text}</div>
          <div><img src={this.state.tommorow_icon} alt="загрузка..."/></div>
        </div>
      </TabPanel>
      <TabPanel>
      <table>
    {table}
     </table>
      </TabPanel>
      </Tabs>
    </div>
    )
  }
}

export default Wheather
import React from 'react'
import Chart from '../Components/Chart'
import { connect } from 'react-redux'


class CityList extends React.Component {
  renderCity(cityData) {
    const temperatures = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={cityData.city.id}> 
        <td> {cityData.city.name} </td>
        <td> 
          <Chart color="red" data={temperatures} />
        </td>
        <td> 
          <Chart color="green" data={pressures} />
        </td>
        <td> 
          <Chart color="blue" data={humidities} />
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className = "table table-hover ">
        <thead>
          <tr>
            <th>City</th>
            <th>Pressure</th>
            <th>Humidity</th>
            <th>Pressure</th>
          </tr>
        </thead>
        <tbody>
          { this.props.cities.map(this.renderCity)} 
        </tbody>
      </table>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    cities: state.weather
  }
}

export default connect(mapStateToProps)(CityList)
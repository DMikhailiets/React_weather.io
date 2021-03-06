import React from 'react'
import { Button } from 'antd'

class WeatherInfo extends React.Component {
    render(){
        return (
            <div>
                <h2>Your location is {this.props.weather.city_name}</h2>
                <div>
                    <span>timezone {this.props.weather.timezone}</span>
                </div>
                <div>
                    <span> date, time {this.props.weather.ob_time}</span>
                </div>
                <div>
                    <span> wind speed {this.props.weather.wind_spd} m.p.s.</span>
                    <span> on {this.props.weather.wind_cdir_full}</span>
                </div>
                <div>
                    <span> direction {this.props.weather.wind_cdir_full}</span>
                </div>
                <div>
                    <span> sunset {this.props.weather.sunset}</span>
                    <span> sunrise {this.props.weather.sunrise}</span>
                </div>
                <div>
                    <span> temperature {this.props.weather.temp}</span>
                </div>
                <div>
                    <span> station {this.props.weather.station}</span>
                </div>
                <Button style={{marginTop: 25}}type='primary'onClick={this.props.setDefaultState}> Set default state</Button>
            </div>
        )
    }
}

export default WeatherInfo
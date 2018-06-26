import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../Actions'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {city: ''}

    this.onFormSubmit = this.onFormSubmit.bind(this)
  }
  
  onFormSubmit(event) {
    event.preventDefault()

    this.props.fetchWeather(this.state.city)
    this.setState({ city: '' })
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className = 'input-group'>
        <input 
        placeholder = 'Search the weather in any city'
        value = {this.state.city}
        onChange = {event => this.setState({city: event.target.value})}
        className = 'form-control'
        />
        <span className = 'input-group-btn'>
          <button type = 'submit' className = 'btn btn-primary'>
            Search
          </button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
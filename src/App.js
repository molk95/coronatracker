import React, { Component } from 'react'

import { Cards, Chart, Country} from './components/index'
 class App extends Component {
  render() {
    return (
      <div>
       <Cards />
       <Chart />
       <Country />
      </div>
    )
  }
}

export default App;
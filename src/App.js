import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import Footer from './components/Footer'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

export default class App extends Component {
  apiKey = "598cf2c7fca145fabef1e902cc736573"
  render() {
    return (
      <>
        <Navbar />
        <News pageSize={6} apiKey={this.apiKey}/>
        <Footer/>
      </>
    )
  }
}

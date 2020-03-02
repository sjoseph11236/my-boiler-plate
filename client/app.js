import React, { Component } from 'react';
// import Nav from './components/Nav';
// import Routes from './routes';

class App extends Component { 
  render() {
    return(
      <div>
        <section className="hero is-Dark is-bold">
          <div className="hero-body">
            <h1 className="title">
              My Boilerplate
            </h1>
            <p class="subtitle">
              My first website with <strong>Bulma</strong>!
            </p>  
          </div>
        </section>
        <section className="section">
          {/* <Routes /> */}
        </section> 
      </div>  
    )
  }
}

export default App;
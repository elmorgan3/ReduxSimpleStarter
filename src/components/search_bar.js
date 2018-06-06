import React, { Component } from 'react';

class SearchBar extends Component {
   constructor() {
      super();
      this.state = {
         texto: 'hola mundo'
      }
   }
   onInputChange = (event) => {
      this.setState({
         texto: event.target.value
      });
   }
   render() {
      return (
         <div>
            <input onChange={this.onInputChange} />
            <label>{this.state.texto}</label>
         </div>
      );
   }
}

export default SearchBar;
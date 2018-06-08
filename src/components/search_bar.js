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
            <input 
            value={this.state.texto}
            onChange={this.onInputChange} />
         </div>
      );
   }
}

export default SearchBar;
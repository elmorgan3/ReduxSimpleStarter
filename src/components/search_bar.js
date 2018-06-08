import React, { Component } from 'react';

class SearchBar extends Component {
   constructor(props) {
      super(props);
      this.state = {
         texto: 'hola mundo'
      }
   }
   onInputChange = (term) => {
      this.setState({
         texto: term
      });
      this.props.onSearchTermChange(term);
   }
   render() {
      return (
         <div className="search-bar">
            <input
               value={this.state.texto}
               onChange={(event) => this.onInputChange(event.target.value)} />
         </div>
      );
   }
}

export default SearchBar;
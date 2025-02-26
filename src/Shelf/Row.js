import React from 'react';
import ReactDOM from 'react-dom/client';

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: 'Ford',
      model: 'Mustang',
      year: 1964
    };
  }
  changeBrand = () => {
    this.setState({ brand: 'Ferrari' });
  };

  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <button type="button" onClick={this.changeBrand}>
          Change Brand
        </button>
      </div>
    );
  }
}

export default Row;

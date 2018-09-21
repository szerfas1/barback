import React from "react";
import { Link } from "@reach/router";
import styled from 'styled-components';

const Wrapper = styled.main`
  display: grid;
  grid-gap: 10px;
  justify-items: center; 
`;

class Bar extends React.Component {
  state = {
    barName: 'My Bar',
  };

  render() {
    return (
      <Wrapper>
        <h1>{this.state.barName}</h1>
        <button>
          <Link to="/bar/profile">View Profile</Link>
        </button>
        <button>
          <Link to="/bar/menu">Edit Menu</Link>
        </button>
        <p>stats go here...</p>
      </Wrapper>
    );
  }

};

export default Bar;
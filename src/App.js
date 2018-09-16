import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import Catlist from './CatList'
import fetchCats from './actions/catActions'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount = () => {
    this.props.fetchCats()
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              <Catlist catPics={this.props.pictures}/>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.manageCats
}

const mapDispatchToProps = (dispatch) =>  {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(App)

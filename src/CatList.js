import React, { Component } from 'react'

class CatList extends Component {
  render() {
    return (
      <div>
        {this.props.catPics.map(picture => <div key={picture.id}><img src={picture.url} alt="cat"/><br/></div>)}
      </div>
    )
  }
}

export default CatList

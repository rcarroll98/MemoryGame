import React, { Component } from 'react';
import './App.css';

class CardName extends Component {
  render() {

    const name = this.props.name

    return (
    <div className="card-text">
          <p className="card-text">{name}</p>
    </div>
    )
  }
}



class Card extends Component {
  
  render() {

    if (this.state.isFront) {
      var isFront = <IsFront />
    }

    const image = this.props.image
    const name = this.props.name
    const card = <div></div>
    return (
    <div className="card" onClick={this.handleClick}>
        <img class="card-img-top" src={image} />
        <CardName
          name={name}
         />
      </div>
      
    )
  }
}

class CardDisplay extends Component {
  constructor(props){
    super(props);
    this.state= {
      isBack: true,
      isFront:false
    }
  
  this.handleClick = this.handleClick.bind(this);
}

 handleClick() {
  if(this.state.isFront) {
    this.setState({
      isFront: false
    })
  } if(this.state.isBack) {
    this.setState({
      isFront: false,
      isBack: true
    })
  }
  else{
    this.setState({
      isFront: false,
      isBack: false,
      isInvisible: true
    })
  }
}
  render() {

  if (this.state.isFront) {
    const isFront = <Card />
  }
  if (this.state.isBack) {
    const isBack = <CardBack />
  }
  else{
    const isInvisible = <div></div>
  }
    return (
      <div className="click" onClick={this.handleClick}>
        {isFront}{isBack}{isInvisible}
      </div>
    )
  }
}

class CardRow extends Component {
  constructor(props){
    super(props);
    this.state= {
      cards: cards
    }
      cards: cards
  }

  render() {
    const cardRow = [];
     for (i = 0; i < this.state.cards.length; i++) {
      cardRow.push(
        <CardDisplay
          name={this.state.cards.name}
          img={this.state.cards.img}
        />
      )
  }
    return (
      <div className="row">{cardRow}
        </div>
    )
  }
}

class Main extends Component {
  constructor(props){
    super(props);
    this.state= {
      cards: cards
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <CardRow 
        />
      </div>
    )
  }
}

export default Main

var cards = [
  {"Rick", "../compnents/rick.png" },
  {"Pickle Rick", "../components/picklerick"},
  {"Evil Morty", "../components/evilmorty"},
  {"Morty", "../components/morty"},
  {"Summer", "../components/summer"}
]
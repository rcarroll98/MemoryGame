import React, { Component } from 'react';
import './App.css';

class Card extends Component {
    constructor(props){
        super(props);
        this.state= {
          isClicked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.isClicked){
            this.setState({
                isClicked: true
            })
        }
    }

    render() {

  
      if (this.state.isFront) {
        var isFront = <IsFront />
      }
  
      const image = this.props.cards.img

      return (
      <div className="card" onClick={this.handleClick}>
          <img class="card-img-top" src={image} alt="rickandmorty"/>
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
          
      }
      render() {
          const cardRow = [];
            for (i = 0; i < this.state.cards.length; i++) {
                cardRow.push(
                <Card 
                    img={this.state.cards.img}
                />
                )
            }
          return (
            <div className="row">
            {cardRow}
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
              <Cardid
              />
            </div>
          )
        }
      }


export default Main

var cards = [
  {id:"Rick", img:"../compnents/rick.png" },
  {id:"Pickle Rick", img:"../components/picklerick"},
  {id:"Evil Morty", img:"../components/evilmorty"},
  {id:"Morty", img:"../components/morty"},
  {id:"Summer", img:"../components/summer"}
]
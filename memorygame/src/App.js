import React, { Component } from 'react';
import './App.css';

// Card
class Card extends Component {
    constructor(props) {
        super(props)
        this.handlecardclicked =
            this.handlecardclicked.bind(this);
    }
    handlecardclicked(e) {
        this.props.oncardclicked.bind(e.target.clicked);
    }

    render() {
        const card= this.props.cards
        
        return (
            <div className={card.id} onClick={this.handlecardclicked}>
                <img class="card-img-top" src={card.image} alt={card.alt}/>
            </div>

        )
    }
}

// CardTable
class CardTable extends Component {
    render() {
        const array = [];
        let lastCard = null;
        
        this.props.card.forEach((card) => {
            if (card !== lastCard) {
                array.push(
                    <Card 
                        cards={card}
                        key={card.id}

                    />
                )
            }
            lastCard = card;
        });

        return (
            <div className="container flex">
                {array}
            </div>
            
        )
    }
}

// Container
class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardsClicked: [],
        
        };

        this.handlecardclicked =
            this.handlecardclicked.bind(this);

    }

    handlecardclicked(cardsClicked) {
        this.setState({
            cardsClicked: cardsClicked
        });
    }


    render() {
        
        var card=this.props.card
        function randomizeCards() {
            
            for (var i=0;i<card.length;i++) {
                const j = Math.floor(Math.random() * (i+1));
                [card[j], card[i]] = [card[i], card[j]]

            
            }

        }

        randomizeCards(card)

        return (
            //<link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>

            <div className="container">
                <CardTable 
                    CardsSelected={this.state.cardsClicked}
                    card={this.props.card}

                />

            </div>
        )
    }
}

// Main
class Main extends Component {
    render() {
        return (
            <Container
                card={CARDS}
            />
        )
    }
}

// Cards
var CARDS = [
    { id: 'Rick', image: './images/rick.jpg', alt: 'rick' },
    { id: 'Pickle Rick', image: './images/picklerick.jpeg', alt: 'picklerick' },
    { id: 'Evil Morty', image: './images/president.jpeg', alt: 'president' },
    //{ id: 'Morty', image: './images/morty', alt: 'morty' },
    { id: 'Summer', image: './images/summer.jpeg', alt: 'summer' },
    { id: 'Mr Meeseeks', image: '', alt: 'mrmeeseeks' },
    { id: 'Justin Roiland', image: '', alt: 'justinroiland' },
    { id: 'Sezchuan Sauce', image: '', alt: 'sezchuansauce' },
    { id: '', image: '', alt: '' },
    { id: '', image: '', alt: '' },
    { id: '', image: '', alt: '' }
]

export default Main;

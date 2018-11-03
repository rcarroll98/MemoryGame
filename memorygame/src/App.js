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
        this.props.handlecardclicked.bind(e.target.value);
    }

    render() {
        const card = this.props.cards
        

        return (
            <div className="card m-3" style={{ width: 160, height: 160 }} onClick={this.handlecardclicked} value={card.id}>
                <img className="card-img-top mx-auto" style={{ maxWidth: 140, maxHeight: 120 }} src={card.image} alt={card.alt} />
                <div className="card-body p-0 m-0 mx-auto">
                    <h5 className="card-title">{card.id}</h5>
                </div>

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
            <div className="d-flex flex-wrap col-md-8 center mx-auto">
                {array}
            </div>

        )
    }
}

// Container
class CardContainer extends Component {
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
        var card = this.props.card
        function randomizeCards() {

            for (var i = 0; i < card.length; i++) {
                const j = Math.floor(Math.random() * (i + 1));
                [card[j], card[i]] = [card[i], card[j]]

            }

        }
        randomizeCards(card)


        return (
            //<link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>

            <div className="container center">
                <CardTable
                    CardsClicked={this.state.cardsClicked}
                    card={this.props.card}

                />

            </div>
        )
    }
}

// Topbar
class Topbar extends Component {
    render() {
        const score = 0
        return (
            <div className="row bg-light" style={{ height: 100 }}>
                <div className="mx-auto col-md-12">

                    <h2 className="float-left">Rick and Morty Clicky game</h2>


                    <h2 className="float-right">Your score: {score}</h2>

                </div>

            </div>
        )
    }
}

// Main
class Main extends Component {
    render() {
        return (
            <div className="container">
                <Topbar />

                <CardContainer
                    card={CARDS}

                />
            </div>
        )
    }
}

// Cards
var CARDS = [
    { id: 'Rick', image: 'rick.jpg', alt: 'rick' },
    { id: 'Pickle Rick', image: 'picklerick.jpeg', alt: 'picklerick' },
    { id: 'President', image: 'president.jpeg', alt: 'president' },
    { id: 'Morty', image: 'morty.jpeg', alt: 'morty' },
    { id: 'Summer', image: 'summer.jpeg', alt: 'summer' },
    { id: 'Mr Meeseeks', image: 'mrmeeseeks.jpg', alt: 'mrmeeseeks' },
    { id: 'Szechuan Sauce', image: 'szechuansauce.jpg', alt: 'szechuansauce' },
    { id: 'Snowball', image: 'snowball.jpg', alt: 'snowball' },
    { id: 'Mr. Poopybutthole', image: 'mrpoopybutthole.jpeg', alt: 'mrpoopybutthole' },
    { id: 'Beth', image: 'beth.jpg', alt: 'beth' }
]

export default Main;

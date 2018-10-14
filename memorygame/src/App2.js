import React, { Component } from 'react';
import './App.css';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.isClicked) {
            this.setState({
                isClicked: true
            })
        }
    }

    render() {

        const image = this.props.cards.img
        const id = this.props.cards.id
        const clicked = this.state.clicked

        return (
            <div className={id} onClick={this.handleClick}>
                <img class="card-img-top" src={image} alt="rickandmorty" />
            </div>

        )
    }
}

class CardRow extends Component {
    constructor(props) {
        super(props);
        this.handleSelection = this.handleSelection.bind(this);
    }

    handleSelection(e) {
        this.props.onSelectionChange(e.target.value);
    }

    render() {
        const cardsClicked = this.props.cardsClicked;
        const cardRow = [];
        for (i = 0; i < this.props.cards.length; i++) {
            if (this.card.id.cardsClicked) {
                return;
            }
            cardRow.push(
                <Card
                    img={this.state.cards.img}
                    onClick={this.handleSelectionChange}
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

class CardContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: cards,
            cardClicked: false,
            cardsClicked: []
        }

        this.handleClick = this.handleClick.bind(this)

        handleClick(id) {
            this.setState(
                cardsClicked.push(
                    id
                )
            )
        }
    }
    render() {
        const clicked = this.props.clicked;

        return (
            <div className="container-fluid">
                <CardRow
                    cardsClicked={this.state.cardsClicked}
                    onSelectionChange={this.handleSelectionChange}
                />
            </div>
        )
    }
}

export default Main

var cards = [
    { id: "Rick", img: "../compnents/rick.png" },
    { id: "Pickle Rick", img: "../components/picklerick" },
    { id: "Evil Morty", img: "../components/evilmorty" },
    { id: "Morty", img: "../components/morty" },
    { id: "Summer", img: "../components/summer" }
]
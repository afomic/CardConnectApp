import React, {Component} from "react";
import {View, StyleSheet, Text} from "react-native"
import {CreditCardInput} from "react-native-credit-card-input";
import {Button} from "../../component/button";
import Toolbar from "../../component/Toolbar";

class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            isValidCard: false,
            card: null
        };
        this._onChange = this._onChange.bind(this);
        this._generateToken = this._generateToken.bind(this);
    }

    render() {
        const {loading, isValidCard} = this.state;
        return <View style={styles.container}>
            <Toolbar
                title={"Home"}
            />
            <CreditCardInput
                onChange={this._onChange}
            />
            <Button
                text={"Generate Token"}
                disabled={!isValidCard}
                loading={loading}
                onPress={this._generateToken}
                containerStyle={styles.button}
            />

        </View>
    }

    _onChange(card) {
        this.setState({
            isValidCard: card.valid,
            card
        })
    }

    async _generateToken() {
        const {card} = this.state;
    }

}

const styles = StyleSheet.create({
    container: {},
    button: {
        marginRight: 16,
        marginLeft: 16,
        marginTop: 80
    }
});
export default HomeScreen;
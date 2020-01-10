import React, {Component} from "react";
import {View, StyleSheet, Text} from "react-native"
import {CreditCardInput} from "react-native-credit-card-input";
import {Button} from "../../component/button";
import Toolbar from "../../component/Toolbar";
import RNCardConnectReactLibrary from 'react-native-card-connect-react-library';
import {showMessage} from "react-native-flash-message/src/index";

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
        this.setProgress = this.setProgress.bind(this);
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

    setProgress(loading) {
        this.setState({
            loading
        })
    }

    async _generateToken() {
        const {number,expiry,cvc} = this.state.card.values;
        try {
            this.setProgress(true);
            const cardRequest = {
                cardNumber:number.split(" ").join(""),
                cvv:cvc,
                expiryDate:expiry
            };
            RNCardConnectReactLibrary.setupConsumerApiEndpoint("https://fts.cardconnect.com:443/cardsecure/cs");
            const response = await RNCardConnectReactLibrary.getCardToken(cardRequest);
            showMessage({
                message: "Token successfully generated",
                description: "Token: "+response,
                type: "success",
            });
            this.setProgress(false);
        } catch (error) {
            this.setProgress(false);
            showMessage({
                message:"Error: "+error,
                type: "error",
            });
        }
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
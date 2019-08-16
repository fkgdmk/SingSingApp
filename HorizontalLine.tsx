import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

interface Props {
    color: string,
    margin: number
}

class HorizontalLine extends Component <Props>{
    
    render() {
        return (
            <View style={{
                borderWidth: 0.5,
                borderColor: this.props.color,
                width: 100,
                margin: this.props.margin
            }}></View>
        );
    }
}


export default HorizontalLine;
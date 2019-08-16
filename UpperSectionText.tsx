import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class UpperSectionText extends Component {
    render() {
        return (
            <Text style={{ fontSize: 20, color: '#545D7A', fontFamily: 'monospace', margin: 15, textAlign: "center"}}>{this.props.children}</Text>
        );
    }
}
export default UpperSectionText;
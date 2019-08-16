import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class LowerSectionText extends Component {
    render() {
        return (
            <Text style={{ fontSize: 20, color: '#A6699D', fontFamily: 'monospace'}}>{this.props.children}</Text>
        );
    }
}
export default LowerSectionText;
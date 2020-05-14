import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Calendar as Calendario } from 'react-native-plain-calendar'

export default class Calendar extends Component {

    onSelected ({ selected, selectedStart, selectedEnd }) {
        // Your code
    }

    render() {
        return (
            <View>
                <Calendario.Picker 
                    onSelected={this.onSelected}
                    selectedType='single' 
                />
            </View>
        )
    }
}
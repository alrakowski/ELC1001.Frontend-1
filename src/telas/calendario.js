import React, { Component } from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import { Calendar as Calendario } from 'react-native-plain-calendar'

var year = new Date().getFullYear();
var dayWeek = new Date().getDay();
var month = new Date().getMonth();
var day = new Date().getDate("dd");
var days = ['Domingo','Segunda-feira','Terça-feira',
            'Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
var months = ['Janeiro','Fevereiro','Março',
            'Abril','Maio','Junho','Julho',
            'Agosto','Setembro','Outubro','Novembro','Dezembro'];

export default class Calendar extends Component {

    onSelected ({ selected, selectedStart, selectedEnd }) {
        // Your code
    }

    
    render() {
        return (
            <>
                <View style={styles.header}>
                    <Text style={styles.headerTextAno}>{year}</Text>
                    <Text style={styles.headerTextDia}>{days[dayWeek]}, {day} de {months[month]}</Text>
                </View>
                <ScrollView style={styles.conteinerCalendar}>
                    <Calendario.Picker style={styles.calendar}
                        onSelected={this.onSelected}
                        selectedType='single' 
                        dayContainerStyle={styles.dayContainer}
                        dayTextStyle={styles.dayText}
                        daySingleSelectedStyle={styles.daySelectedView}
                    />
                </ScrollView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    headerTextAno:{
        marginTop:30,
        marginLeft:20,
        fontSize:20,
        color: "#D3D3D3", 
    },
    headerTextDia:{
        marginTop:0,
        marginLeft:20,
        fontSize:30,
        color: "#FFF", 
    },
    header:{
        height:130,
        backgroundColor:"#C58882"
    },
    calendar: {
        marginTop:20
    },
    dayContainer: {
        marginBottom:10,
    },
    dayText: {
        fontSize:16,
    },
    conteinerCalendar: {
       flex:1
    },
    daySelectedView:{
        backgroundColor:"#C58882"
    }
}) 
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
            <View style={styles.container}>
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
                        headerTitleStyle={styles.headerTitleStyle}
                        headerButtonStyle={styles.headerButtonStyle}
                        weekdayStyle={styles.weekdayStyle}
                        
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#C4D0D0"
    },
    weekdayStyle:{
        color: "#000000",
        fontWeight:'bold',
        marginBottom:10
    },
    headerButtonStyle:{
        color: "#D3D3D3",
        fontSize:30,
        marginBottom:30
    },
    headerTitleStyle:{
        fontSize:22,
        marginTop:0,
        marginBottom:20
    },
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
        backgroundColor:"#C58882",
    },
    calendar: {
        paddingTop:30,
        paddingBottom:20,
        backgroundColor:"#FFF"
    },
    dayContainer: {
        marginBottom:10,
    },
    dayText: {
        fontSize:16,
    },
    conteinerCalendar: {
    },
    daySelectedView:{
        backgroundColor:"#C58882"
    }
}) 
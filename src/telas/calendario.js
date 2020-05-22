import React, { Component } from 'react'
import { View, ScrollView, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import { Calendar as Calendario } from 'react-native-plain-calendar'

import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();

import Add from '../assets/icons/botaoadd.svg'


var days = ['Domingo','Segunda-feira','Terça-feira',
            'Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
var months = ['Janeiro','Fevereiro','Março',
            'Abril','Maio','Junho','Julho',
            'Agosto','Setembro','Outubro','Novembro','Dezembro'];

function getAno (date){
    return  new Date(date).getFullYear();
}

function getDia (date){
    return  days[new Date(date).getDay()] + ", " + 
                new Date(date).getDate("dd") + " de " + 
                months[new Date(date).getMonth()]
}

export default class Calendar extends Component {


    constructor() {
        super();
        this.state = {
          showButtonOpt: false,
          showAddLook: false,
          showMsgAddLook: false,
          dataAtual: Date(),
          turno:"manhã",
        };
        
    }

    ShowHideButtonOpt = () => {
        if (this.state.showButtonOpt == true) {
          this.setState({ showButtonOpt: false });
        } else {
          this.setState({ showButtonOpt: true });
        }
    };

    ShowHideAddLook = () => {
        if (this.state.showAddLook == true) {
          this.setState({ showAddLook: false });
        } else {
          this.setState({ showAddLook: true });
          this.setState({ showButtonOpt: false });
          this.setState({ showMsgAddLook: false });
        }
    };

    ShowHideMsgAddLook = () => {
        if (this.state.showMsgAddLook == true) {
          this.setState({ showMsgAddLook: false });
        } else {
          this.setState({ showMsgAddLook: true });
        }
    };

    Prev = () => {

    };

    Next = () => {

    };

    onSelected = ({ selected, selectedStart, selectedEnd }) => {
        this.setState({ dataAtual: selected });
    }

    

    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTextAno}>{getAno(this.state.dataAtual)}</Text>
                    <Text style={styles.headerTextDia}>{getDia(this.state.dataAtual)}</Text>
                    <Text style={styles.headerTextTurno}>{this.state.turno}</Text>
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
                <TouchableOpacity  style={styles.button} onPress={this.ShowHideButtonOpt}>
                        <Add width={90} height={90} />
                </TouchableOpacity>
                {this.state.showButtonOpt ? ( 
                    <View style={styles.buttonOpt}>
                        <TouchableOpacity onPress={this.ShowHideAddLook}>
                            <Text style={styles.textButtonOpt} >Manhã</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.ShowHideAddLook}>
                            <Text style={styles.textButtonOpt} >Tarde</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.ShowHideAddLook}>
                            <Text style={styles.textButtonOpt} >Noite</Text>
                        </TouchableOpacity>
                    </View>
                ) : null}

                {this.state.showAddLook ? ( 
                    <>
                        <ScrollView style={styles.viewAddLook}>
                            <View style={styles.viewLookMsg}>
                                <Text style={styles.textLook}>ainda não foram registrados looks nesta data!</Text>
                            </View>
                            <TouchableOpacity  style={styles.buttonAddViewLook} onPress={this.ShowHideMsgAddLook}>
                                <Add width={90} height={90} />
                            </TouchableOpacity>
                            <Text style={styles.textAddLook}>Acrescentar look</Text>
                            {this.state.showMsgAddLook ? ( 
                                <Text style={styles.msgAddLook}>Clique Botão!</Text>
                            ) : null}
                        </ScrollView>
                        <View style={styles.bottonAddLook}>
                            <TouchableOpacity  style={styles.buttonNext} onPress={this.Prev}>
                                <Icon name="chevron-right" size={50} color="#000000" />
                            </TouchableOpacity>
                            <TouchableOpacity  style={styles.buttonPrev} onPress={this.Next}>
                                <Icon name="chevron-left" size={50} color="#000000" />
                            </TouchableOpacity>
                            <TouchableOpacity  style={styles.buttonClose} onPress={this.ShowHideAddLook}>
                                <Icon name="close" size={50} color="#000000" />
                            </TouchableOpacity>
                        </View>
                    </>
                ) : null}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    msgAddLook:{
        fontSize:18,
        textAlign:"center",
        marginTop:20
    },
    textAddLook:{
        fontSize:18,
        textAlign:"center",
        marginTop:-10
    },
    buttonAddViewLook:{
        marginLeft:"38%",
        marginTop:60,
        backgroundColor:"#FFF",
        maxWidth:55,
        minWidth:55
    },
    viewLookMsg:{
        borderRadius:10,
        borderColor:"#000000",
        borderWidth:2,
        marginHorizontal:50,
        marginTop:50,
        padding:20
    },
    textLook:{
        fontSize:18,
        textAlign:"center"
    },
    buttonClose: {
        marginBottom:20,
        marginLeft:'42%',
        position:'absolute',
        bottom: 0,
        zIndex:5,
        borderRadius:50,
        borderColor:"#000000",
        borderWidth:2,
        backgroundColor:"#FFF",
        maxWidth:55,
        minWidth:55
    },
    buttonPrev: {
        marginBottom:20,
        marginLeft:'5%',
        position:'absolute',
        bottom: 0,
        zIndex:5,
        borderRadius:50,
        borderColor:"#000000",
        borderWidth:2,
        backgroundColor:"#FFF",
        maxWidth:55,
        minWidth:55
    },
    buttonNext: {
        marginBottom:20,
        right:0,
        marginRight:'5%',
        position:'absolute',
        bottom: 0,
        zIndex:5,
        borderRadius:50,
        borderColor:"#000000",
        borderWidth:2,
        backgroundColor:"#FFF",
        maxWidth:55,
        minWidth:55
    },
    bottonAddLook:{
        position:'absolute',
        bottom: 0,
        zIndex:5,
        backgroundColor:"#C4D0D0",
        paddingVertical:10,
        height:110,
        width:"100%",
        flexDirection:'row'
    },
    viewAddLook:{
        position:'absolute',
        top: 0,
        width:'100%',
        height:'100%',
        zIndex:4,
        backgroundColor:"#FFF",
        marginTop:200
    },
    textButtonOpt:{
        fontSize:20
    },
    buttonOpt:{
        position:'absolute',
        bottom: 0,
        zIndex:2,
        borderRadius:10,
        borderColor:"#000000",
        borderWidth:2,
        marginBottom:90,
        marginLeft:80,
        backgroundColor:"#FFF",
        paddingHorizontal:30,
        paddingVertical:10
    },
    button: {
        marginBottom:20,
        marginLeft:20,
        zIndex:4
    },
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
        marginBottom:22
    },
    headerTitleStyle:{
        fontSize:22,
        width:200,
        marginTop:0,
        marginBottom:20
    },
    headerTextAno:{
        marginTop:30,
        marginLeft:20,
        fontSize:18,
        color: "#D3D3D3", 
    },
    headerTextDia:{
        marginTop:0,
        marginLeft:20,
        fontSize:25,
        color: "#FFF", 
    },
    headerTextTurno:{
        marginLeft:20,
        fontSize:18,
        color: "#D3D3D3" 
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
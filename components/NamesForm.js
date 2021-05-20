import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView, ActivityIndicator } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import NumericInput from 'react-native-numeric-input'


const idsA = [
    'a_01', 'a_02', 'a_03', 'a_04', 'a_05', 'a_06', 'a_07', 'a_08', 'a_09', 'a_010', 'a_011', 'a_012'
]
const idsB = [
    'b_01', 'b_02', 'b_03', 'b_04', 'b_05', 'b_06', 'b_07', 'b_08', 'b_09', 'b_010', 'b_011', 'b_012'
]

const teamsSquads = require('../data/teamsSquads.json')

export default class NamesForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            league: ['2LK'],
            teamsNames: teamsSquads.teamsNames,
            teamAnames: teamsSquads.teamAnames,
            teamBnames:  teamsSquads.teamCnames,
            teamA: [],
            teamB: [],
            teamAName: '',
            teamBName: '',
        }
    }

    teamANameSelected = (indexOfTeam, teamName) => {
        this.setState(state => {

            if (state.teamAName !== '') {

                const teamsNames = state.teamsNames.map(name => (
                    name === teamName ? state.teamAName : name
                ))

                const teamAName = teamName
                return {
                    teamsNames,
                    teamAName
                }
            }

            else {
                const teamsNames = state.teamsNames.filter(item => teamName !== item)
                const teamAName = teamName
                return {
                    teamsNames,
                    teamAName
                }
            }


        })
    }

    teamBNameSelected = (indexOfTeam, teamName) => {
        this.setState(state => {

            if (state.teamBName !== '') {

                const teamsNames = state.teamsNames.map(name => (
                    name === teamName ? state.teamBName : name
                ))

                const teamBName = teamName
                return {
                    teamsNames,
                    teamBName
                }
            }

            else {
                const teamsNames = state.teamsNames.filter(item => teamName !== item)
                const teamBName = teamName
                return {
                    teamsNames,
                    teamBName
                }
            }


        })
    }

    nameASelected = (indexOfPlayer, playerName, idOfRow) => {
        this.setState(state => {

            let data = state.teamA.filter((item) => item.id == idOfRow).map(({ id, name, index }) => ({ id, name, index }));

            if (data.length) {
                const teamA = state.teamA.map(item => (
                    item.name === data[0].name ? { ...item, 'name': playerName } : item
                ))
                const teamAnames = [...state.teamAnames, data[0].name]
                return {
                    teamA,
                    teamAnames
                }
            }

            else {
                const teamA = [...state.teamA, {
                    'name': playerName,
                    'id': idOfRow,
                    'index': indexOfPlayer,
                    'nr': 0
                }];
                const teamAnames = state.teamAnames.filter(item => playerName !== item)
                return {
                    teamA,
                    teamAnames
                }
            }
        })
    }

    nameBSelected = (indexOfPlayer, playerName, idOfRow) => {
        this.setState(state => {

            let data = state.teamB.filter((item) => item.id == idOfRow).map(({ id, name, index }) => ({ id, name, index }));

            if (data.length) {
                const teamB = state.teamB.map(item => (
                    item.name === data[0].name ? { ...item, 'name': playerName } : item
                ))
                const teamBnames = [...state.teamBnames, data[0].name]
                return {
                    teamB,
                    teamBnames
                }
            }

            else {
                const teamB = [...state.teamB, {
                    'name': playerName,
                    'id': idOfRow,
                    'index': indexOfPlayer,
                    'nr': 0
                }];
                const teamBnames = state.teamBnames.filter(item => playerName !== item)
                return {
                    teamB,
                    teamBnames
                }
            }
        })
    }

    numberASelected = (playerNumber, idOfRow) => {
        this.setState(state => {
            const teamA = state.teamA.map(item => (
                item.id === idOfRow ? { ...item, 'nr': playerNumber } : item
            ))
            return {
                teamA
            }
        })

    }
    numberBSelected = (playerNumber, idOfRow) => {
        this.setState(state => {
            const teamB = state.teamB.map(item => (
                item.id === idOfRow ? { ...item, 'nr': playerNumber } : item
            ))
            return {
                teamB
            }
        })

    }


    acceptButtonSelected = () => {
        this.setState({loading: true});
        setTimeout(() => {
            this.setState({loading: false});
            console.log(this.state.teamAName, this.state.teamA)
            console.log(this.state.teamBName, this.state.teamB)
            this.props.navigation.navigate('SummaryScreen');
        }, 2000)
    }

    leagueSelected = () => {
        console.log('leaguage selected')
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ModalDropdown
                    options={this.state.league}
                    defaultValue='Pick league'
                    onSelect={(index, value) => this.leagueSelected(index, value)}
                    textStyle={styles.textStyleLeague}
                    style={styles.listContainerLeague}
                    dropdownStyle={styles.dropdownStyleLeague}
                    dropdownTextStyle={styles.dropdownTextStyleLeague}

                />
                <ScrollView>
                    <ModalDropdown
                        key='teamA'
                        options={this.state.teamsNames}
                        defaultValue='Pick team'
                        onSelect={(index, value) => this.teamANameSelected(index, value)}
                        textStyle={styles.textStyleTeam}
                        style={styles.listContainerTeam}
                        dropdownStyle={styles.dropdownStyleTeam}
                        dropdownTextStyle={styles.dropdownTextStyleTeam}

                    />

                    {
                        (() => idsA.map(item =>
                            <View key={item} style={styles.nameContainer}>
                                <ModalDropdown

                                    options={this.state.teamAnames}
                                    defaultValue='Pick player'
                                    textStyle={styles.textStyleName}
                                    style={styles.listContainerName}
                                    dropdownStyle={styles.dropdownStyleName}
                                    dropdownTextStyle={styles.dropdownTextStyleName}
                                    onSelect={(index, value) => this.nameASelected(index, value, item)}
                                />
                                <NumericInput
                                    type='plus-minus'
                                    minValue={0}
                                    maxValue={99}
                                    iconSize={25}
                                    iconStyle={{ color: 'white' }}
                                    rightButtonBackgroundColor='#00a60b'
                                    leftButtonBackgroundColor='#E56B70'
                                    totalWidth={130}
                                    totalHeight={40}
                                    onChange={(value) => this.numberASelected(value, item)}
                                />
                            </View>


                        ))()
                    }


                    <ModalDropdown
                        key='teamB'
                        options={this.state.teamsNames}
                        defaultValue='Pick team'
                        onSelect={(index, value) => this.teamBNameSelected(index, value)}
                        textStyle={styles.textStyleTeam}
                        style={styles.listContainerTeam}
                        dropdownStyle={styles.dropdownStyleTeam}
                        dropdownTextStyle={styles.dropdownTextStyleTeam}

                    />

                    {
                        (() => idsB.map(item =>
                            <View key={item} style={styles.nameContainer}>
                                <ModalDropdown

                                    options={this.state.teamBnames}
                                    defaultValue='Pick player'
                                    textStyle={styles.textStyleName}
                                    style={styles.listContainerName}
                                    dropdownStyle={styles.dropdownStyleName}
                                    dropdownTextStyle={styles.dropdownTextStyleName}
                                    onSelect={(index, value) => this.nameBSelected(index, value, item)}
                                />
                                <NumericInput
                                    type='plus-minus'
                                    minValue={0}
                                    maxValue={99}
                                    iconSize={25}
                                    iconStyle={{ color: 'white' }}
                                    rightButtonBackgroundColor='#00a60b'
                                    leftButtonBackgroundColor='#E56B70'
                                    totalWidth={130}
                                    totalHeight={40}
                                    onChange={(value) => this.numberBSelected(value, item)}
                                />
                            </View>
                        ))()
                    }

                </ScrollView>
                <TouchableOpacity style={styles.acceptButton} onPress={() => this.acceptButtonSelected()}>
                    <Text style={styles.acceptText}>Accept</Text>
                </TouchableOpacity>
                {this.state.loading &&
                    <View style={styles.loading}>
                        <ActivityIndicator size={200} color="#ffa200"/>
                        
                    </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#5c5b5a',
        height: '100%'
    },
    nameContainer: {
        flexDirection: 'row',
        width: '100%',
    },
    listContainerLeague: {
        backgroundColor: '#f59b42'
    },
    textStyleLeague: {
        fontSize: 30,
        color: '#ffffff'
    },
    dropdownStyleLeague: {
        backgroundColor: '#9e9b98',
    },
    dropdownTextStyleLeague: {
        fontSize: 30,
        color: '#000000'
    },

    listContainerName: {
        backgroundColor: '#c7c7c7',
        flex: 1
    },
    textStyleName: {
        fontSize: 25,
        color: '#ffffff',
        flex: 1
    },
    dropdownStyleName: {
        backgroundColor: '#c4b593',
    },
    dropdownTextStyleName: {
        fontSize: 20,
        color: '#000000'
    },

    listContainerTeam: {
        backgroundColor: '#ffb369',
        marginTop: 10
    },
    textStyleTeam: {
        fontSize: 25,
        color: '#ffffff'
    },
    dropdownStyleTeam: {
        backgroundColor: '#b3ab9a',
    },
    dropdownTextStyleTeam: {
        fontSize: 25,
        color: '#000000'
    },

    acceptButton: {
        width: '100%',
        height: 60,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    acceptText: {
        fontSize: 25,
        color: '#ffffff'
    },
    loading: {
        position: 'absolute',
        left: 50,
        right: 50,
        top: 50,
        bottom: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
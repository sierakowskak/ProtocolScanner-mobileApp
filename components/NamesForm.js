import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import NumericInput from 'react-native-numeric-input'


const idsA = [
    'a_01', 'a_02', 'a_03', 'a_04', 'a_05', 'a_06', 'a_07', 'a_08', 'a_09', 'a_010', 'a_011', 'a_012'
]
const idsB = [
    'b_01', 'b_02', 'b_03', 'b_04', 'b_05', 'b_06', 'b_07', 'b_08', 'b_09', 'b_010', 'b_011', 'b_012'
]


export default class NamesForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            league: ['2LK'],
            teamsNames: [
                'UKS Huragan Wołomin ',
                'AKS ZŁY',
                'MPKK Sokołów S.A. Sokołów Podlaski',
                'ŁKS Łódź ',
                'SMS PZKosz II Łomianki ',
                'Lider Pruszków ',
                'KU AZS UMCS Lublin '
            ],
            teamAnames: [
                'Natalia Adamus',
                'King Asiedu',
                'Aleksandra Dzięciołowska',
                'Zuzanna Gortat',
                'Marta Kawczyńska',
                'Patrycja Kawczyńska',
                'Patrycja Kisiel',
                'Oliwia Książek',
                'Kornelia Łapińska',
                'Natalia Nowak',
                'Weronika Plewa',
                'Aleksandra Podskoczyj',
                'Karolina Podskoczyj',
                'Weronika Puchacz',
                'Kinga Rutkowska',
                'Julita Sadowska',
                'Kinga Sierakowska',
                'Maja Strugarek',
                'Julia Tomczak',
                'Maja Woźniak',
                'Martyna Zdunek'],
            teamBnames: [
                'Blanka Bernat',
                'Paulina Bukowska',
                'Paulina Janczura',
                'Magdalena Jarkiewicz',
                'Agnieszka Jędrzejewska',
                'Inga Korczak',
                'Oliwia Kukulak',
                'Magdalena Kulińska',
                'Marta Lisiecka',
                'Zuzanna Niedziółka',
                'Paulina Olszak',
                'Heidi Paprocki',
                'Anna Przeździecka',
                'Toma Ralyte',
                'Olga Składanek',
                'Wiktoria Skuzińska',
                'Marta Stęplewska',
                'Patrycja Wróbel'],
            teamA: [],
            teambB: []
        }
    }

    nameSelected = (indexOfPlayer, playerName, idOfRow) => {
        console.log('name: ', indexOfPlayer, playerName, idOfRow)
        this.setState(state => {
            
            let data = state.teamA.filter((item) => item.name == playerName).map(({ id, name }) => ({ id, name }));
            console.log('data: ', data);

            if (data.length){
                console.log('zawieram juz ten item')
                
            }

            else {
                console.log('nie zawieram tego itema')
                const teamA = [...state.teamA, {
                    'name': playerName,
                    'id': idOfRow
                }];
                const teamAnames = state.teamAnames.filter((ii, jj) => playerName !== jj)
                return {
                    teamA,
                    teamAnames
                }
            }
        })
    }

    numberSelected = (value, item) => {
        console.log('number: ', value, item)
    }


    acceptButtonSelected = () => {
        console.log('accept Button Selected')
    }


    render() {
        return (
            <View style={styles.container}>
                <ModalDropdown
                    options={this.state.league}
                    defaultValue='Pick league'
                    onSelect={(index, value) => this.nameSelected(index, value)}
                    textStyle={styles.textStyleLeague}
                    style={styles.listContainerLeague}
                    dropdownStyle={styles.dropdownStyleLeague}
                    dropdownTextStyle={styles.dropdownTextStyleLeague}

                />
                <ScrollView>
                    <ModalDropdown
                        options={this.state.teamsNames}
                        defaultValue='Pick team'
                        onSelect={(index, value) => this.nameSelected(index, value)}
                        textStyle={styles.textStyleTeam}
                        style={styles.listContainerTeam}
                        dropdownStyle={styles.dropdownStyleTeam}
                        dropdownTextStyle={styles.dropdownTextStyleTeam}

                    />

                    {
                        (() => idsA.map(item =>
                            <View style={styles.nameContainer}>
                                <ModalDropdown
                                    key={item}
                                    options={this.state.teamAnames}
                                    defaultValue='Pick player'
                                    textStyle={styles.textStyleName}
                                    style={styles.listContainerName}
                                    dropdownStyle={styles.dropdownStyleName}
                                    dropdownTextStyle={styles.dropdownTextStyleName}
                                    onSelect={(index, value) => this.nameSelected(index, value, item)}
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
                                    onChange={(value) => this.numberSelected(value, item)}
                                />
                            </View>


                        ))()
                    }


                    <ModalDropdown
                        options={this.state.teamsNames}
                        defaultValue='Pick team'
                        onSelect={(index, value) => this.nameSelected(index, value)}
                        textStyle={styles.textStyleTeam}
                        style={styles.listContainerTeam}
                        dropdownStyle={styles.dropdownStyleTeam}
                        dropdownTextStyle={styles.dropdownTextStyleTeam}

                    />

                    {
                        (() => idsB.map(item =>
                            <View style={styles.nameContainer}>
                                <ModalDropdown
                                    key={item}
                                    options={this.state.teamBnames}
                                    defaultValue='Pick player'
                                    textStyle={styles.textStyleName}
                                    style={styles.listContainerName}
                                    dropdownStyle={styles.dropdownStyleName}
                                    dropdownTextStyle={styles.dropdownTextStyleName}
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
                                />
                            </View>
                        ))()
                    }

                </ScrollView>
                <TouchableOpacity style={styles.acceptButton} onPress={() => this.acceptButtonSelected()}>
                    <Text style={styles.acceptText}>Accept</Text>
                </TouchableOpacity>
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
        backgroundColor: '#9e9b98'
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
        backgroundColor: '#c4b593',
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
        backgroundColor: '#b3ab9a',
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
    }

});
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import MultipleTags from 'react-native-multiple-tags';


const ids = [
    'id_01', 'id_02', 'id_03', 'id_04', 'id_05', 'id_06', 'id_07', 'id_08', 'id_09', 'id_010', 'id_011', 'id_012'
]


export default class NamesForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            league: ['2LK'],
            teamsNames: ['UKS Huragan Wołomin ',
                'AKS ZŁY',
                'MPKK Sokołów S.A. Sokołów Podlaski',
                'ŁKS Łódź ',
                'SMS PZKosz II Łomianki ',
                'Lider Pruszków ',
                'KU AZS UMCS Lublin '
            ],
            teamAnames: ['Natalia Adamus',
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
            teamBnames: ['Blanka Bernat',
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
            'Patrycja Wróbel', ],
            selectedNames: [],
            content: [],
            contentx: [],
        }
    }

    nameSelected = (index, value) => {
        console.log('name: ', index, value)
    }

    multipleTags = (content) => {
        console.log('name: ', content)
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
                        (() => ids.map(item => <ModalDropdown
                            key={item}
                            options={this.state.teamAnames}
                            defaultValue='Pick player'
                            textStyle={styles.textStyleName}
                            style={styles.listContainerName}
                            dropdownStyle={styles.dropdownStyleName}
                            dropdownTextStyle={styles.dropdownTextStyleName}
                        />))()
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
                        (() => ids.map(item => <ModalDropdown
                            key={item}
                            options={this.state.teamBnames}
                            defaultValue='Pick player'
                            textStyle={styles.textStyleName}
                            style={styles.listContainerName}
                            dropdownStyle={styles.dropdownStyleName}
                            dropdownTextStyle={styles.dropdownTextStyleName}
                        />))()
                    }

                </ScrollView>
                <TouchableOpacity style={styles.acceptButton}>
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
    },
    textStyleName: {
        fontSize: 20,
        color: '#ffffff'
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
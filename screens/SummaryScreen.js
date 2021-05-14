import React, { PureComponent, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cell } from 'react-native-table-component';

export default class SummaryScreen extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            tableHead: ["Player Name", "NO", "Points", "3 throws", "free throws"],
            playersA: [
                {
                    "name": "Adamus Natalia",
                    "number": 1,
                    "points": 0,
                    "three_throw": 0,
                    "free_made": 0,
                    "free_miss": 0
                },
                {
                    "name": "Kawczyńska Patrycja",
                    "number": 4,
                    "points": 6,
                    "three_throw": 0,
                    "free_made": 0,
                    "free_miss": 0
                },
                {
                    "name": "Gortat Zauzanna",
                    "number": 5,
                    "points": 8,
                    "three_throw": 0,
                    "free_made": 0,
                    "free_miss": 0
                },
                {
                    "name": "Podskoczyj Karolina",
                    "number": 8,
                    "points": 2,
                    "three_throw": 0,
                    "free_made": 0,
                    "free_miss": 0
                },
                {
                    "name": "Puchacz Wersonika",
                    "number": 11,
                    "points": 5,
                    "three_throw": 1,
                    "free_made": 0,
                    "free_miss": 0
                },
                {
                    "name": "Dzięciołowska Aleksandra",
                    "number": 12,
                    "points": 1,
                    "three_throw": 0,
                    "free_made": 1,
                    "free_miss": 2
                },
                {
                    "name": "Sierakowska Kinga",
                    "number": 13,
                    "points": 8,
                    "three_throw": 0,
                    "free_made": 2,
                    "free_miss": 2
                },
                {
                    "name": "Plewa Weronika",
                    "number": 17,
                    "points": 5,
                    "three_throw": 0,
                    "free_made": 1,
                    "free_miss": 1
                },
                {
                    "name": "Książek Oliwia",
                    "number": 18,
                    "points": 4,
                    "three_throw": 0,
                    "free_made": 0,
                    "free_miss": 0
                },
                {
                    "name": "Asiedu Kinga",
                    "number": 20,
                    "points": 0,
                    "three_throw": 0,
                    "free_made": 0,
                    "free_miss": 0
                },
                {
                    "name": "Kawczyńska Marta",
                    "number": 32,
                    "points": 0,
                    "three_throw": 0,
                    "free_made": 0,
                    "free_miss": 0
                },
                {
                    "name": "Martyna Zdunek",
                    "number": 77,
                    "points": 16,
                    "three_throw": 3,
                    "free_made": 4,
                    "free_miss": 6
                }
            ],
            playersB: [
                {
                    "name": "Welenc Aleksandra",
                    "number": 4,
                    "points": 12,
                    "three_throw": 3,
                    "free_made": 3,
                    "free_miss": 1
                },
                {
                    "name": "Jurczak Marta",
                    "number": 5,
                    "points": 2,
                    "three_throw": 0,
                    "free_made": 2,
                    "free_miss": 0
                },
                {
                    "name": "Zdrodowska Izabela",
                    "number": 6,
                    "points": 22,
                    "three_throw": 1,
                    "free_made": 5,
                    "free_miss": 1
                },
                {
                    "name": "Zieleniewska Karolina",
                    "number": 9,
                    "points": 6,
                    "three_throw": 1,
                    "free_made": 3,
                    "free_miss": 2
                },
                {
                    "name": "Karpiszuk Weronika",
                    "number": 10,
                    "points": 2,
                    "three_throw": 0,
                    "free_made": 0,
                    "free_miss": 0
                },
                {
                    "name": "Mazurek Dominika",
                    "number": 11,
                    "points": 0,
                    "three_throw": 0,
                    "free_made": 0,
                    "free_miss": 2
                },
                {
                    "name": "Wożniak Wiktoria",
                    "number": 12,
                    "points": 0,
                    "three_throw": 0,
                    "free_made": 0,
                    "free_miss": 0
                },
                {
                    "name": "Dzikowska Mariola",
                    "number": 13,
                    "points": 0,
                    "three_throw": 0,
                    "free_made": 0,
                    "free_miss": 0
                },
                {
                    "name": "Stefańska Martyna",
                    "number": 14,
                    "points": 12,
                    "three_throw": 0,
                    "free_made": 0,
                    "free_miss": 0
                },
                {
                    "name": "Dec Aleksandra",
                    "number": 15,
                    "points": 13,
                    "three_throw": 0,
                    "free_made": 5,
                    "free_miss": 1
                },
                {
                    "name": "Wróblewska Natalia",
                    "number": 16,
                    "points": 0,
                    "three_throw": 0,
                    "free_made": 0,
                    "free_miss": 0
                }
            ]
        }
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.tableContainer}>
                    <Table borderStyle={{ borderWidth: 1 }}>
                        <Cell data={"LKS KK LODZ"} style={styles.head} textStyle={styles.text} />
                        <Row data={this.state.tableHead} flexArr={[2, 1, 1, 1, 1, 1]} style={styles.headers} textStyle={styles.text} />
                        {
                            this.state.playersA.map((player, index) => (

                                <Row
                                    key={index}
                                    data={[
                                        player.name,
                                        player.number,
                                        player.points,
                                        player.three_throw,
                                        player.free_made + "/" + [player.free_made, player.free_miss].reduce((total, currentValue) => total = total += currentValue, 0) 
                                    ]}
                                    flexArr={[2, 1, 1, 1, 1, 1]}
                                    style={[styles.row, index % 2 && { backgroundColor: '#b5b5b5' }]}
                                    textStyle={styles.text}
                                />
                            ))
                        }
                    </Table>
                </View>
                <View style={styles.tableContainer}>
                    <Table borderStyle={{ borderWidth: 1 }}>
                        <Cell data={"MPKK SOKOLOW"} style={styles.head} textStyle={styles.text} />
                        <Row data={this.state.tableHead} flexArr={[2, 1, 1, 1, 1, 1]} style={styles.headers} textStyle={styles.text} />
                        {
                            this.state.playersB.map((player, index) => (
                                <Row
                                    key={index}
                                    data={[
                                        player.name,
                                        player.number,
                                        player.points,
                                        player.three_throw,
                                        player.free_made + "/" + [player.free_made, player.free_miss].reduce((total, currentValue) => total = total += currentValue, 0) 
                                    ]}
                                    flexArr={[2, 1, 1, 1, 1, 1]}
                                    style={[styles.row, index % 2 && { backgroundColor: '#b5b5b5' }]}
                                    textStyle={styles.text}
                                />
                            ))
                        }
                    </Table>
                </View>

                <TouchableOpacity style={styles.acceptButton}>
                    <Text style={styles.acceptText}>Accept</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 10,
        backgroundColor: '#9e9b98',
    },
    tableContainer: {
        marginTop: 12
    },
    head: {
        height: 40,
        backgroundColor: '#f59b42'
    },
    headers: {
        height: 40,
        backgroundColor: '#ffb369'
    },
    title: {
        flex: 1,
        backgroundColor: '#f6f8fa'
    },
    row: {
        height: 35,
        backgroundColor: '#c7c7c7'
    },
    text: { textAlign: 'center' },
    acceptButton: {
        width: '100%',
        height: 60,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 30,
        borderRadius: 5
    },
    acceptText: {
        fontSize: 25,
        color: '#ffffff'
    }
});
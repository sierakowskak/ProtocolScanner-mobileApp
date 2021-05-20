import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Cell, Row, Table } from 'react-native-table-component';

const teamsData = require('../data/summary.json')


export default class SummaryScreen extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            tableHead: ["Player Name", "NO", "Points", "3 throws", "free throws"],
            playersA: teamsData.teamA[1].players,
            playersB: teamsData.teamB[1].players
        }
    }

    goToHomeScreen= () => {
        this.props.navigation.navigate('HomeScreen');

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

                <TouchableOpacity style={styles.acceptButton} onPress={() => this.goToHomeScreen()} >
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
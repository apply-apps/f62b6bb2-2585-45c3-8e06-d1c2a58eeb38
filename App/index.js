// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, Text, Button, FlatList, View } from 'react-native';

const fairyTales = [
    { id: '1', title: 'Cinderella' },
    { id: '2', title: 'Snow White' },
    { id: '3', title: 'Little Red Riding Hood' },
];

const fairyTaleContent = {
    '1': 'Once upon a time, there was a girl named Cinderella...',
    '2': 'Snow White was the fairest of them all...',
    '3': 'Little Red Riding Hood went to visit her grandmother...',
};

function FairyTaleScreen({ route }) {
    const { taleId } = route.params;
    const content = fairyTaleContent[taleId];

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.content}>{content}</Text>
        </SafeAreaView>
    );
}

function HomeScreen({ navigation }) {
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Button
                title="Read"
                onPress={() => navigation.navigate('FairyTale', { taleId: item.id })}
            />
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Fairy Tales</Text>
            <FlatList
                data={fairyTales}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
}

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="FairyTale" component={FairyTaleScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        padding: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    itemContainer: {
        padding: 20,
        marginVertical: 8,
        backgroundColor: '#f9c2ff',
        borderRadius: 5,
    },
    title: {
        fontSize: 18,
    },
    content: {
        fontSize: 18,
        lineHeight: 30,
    },
});
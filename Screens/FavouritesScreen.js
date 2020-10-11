import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FavouritesScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>Favourites Meals Screen!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex: 1
    }
})

export default FavouritesScreen;
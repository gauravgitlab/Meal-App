import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const MealDetailsScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>Meal Details Screen</Text>
            <Button title='Go Back to Top' onPress={() => {
                props.navigation.popToTop();
            }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default MealDetailsScreen;
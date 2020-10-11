import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const CategoriesScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>Categories Screen!</Text>
            <Button title='Meals' onPress={()=>{
                // we can also use push() as well instead of navigate()
                // use push() benefit is you can add same screen more times.
                // if we use replace(), no screen left to go back
                props.navigation.navigate('CategoryMeals');
            }} />
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

export default CategoriesScreen;
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const CategoryMealsScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>Category Meals Screen!</Text>
            <Button title='Meal Details' onPress ={() => {
                props.navigation.navigate('MealDetails');
            }} />
            <Button title='Go Back' onPress={()=>{
                // we can also use goBack() instead of pop() 
                // but goBack() is used for other navigation used as well
                props.navigation.pop(); 
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

export default CategoryMealsScreen;
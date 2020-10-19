import React from 'react';
import {View, Text, Button, StyleSheet, Platform} from 'react-native';
import { HeaderTitle } from 'react-navigation-stack';
import {CATEGORIES} from '../data/dummy-data';

const CategoryMealsScreen = props => {

    const catId = props.navigation.getParam('categoryId')
    const selectedId = CATEGORIES.find(cat => cat.id === catId);
    return(
        <View style={styles.screen}>
            <Text>Category Meals Screen!</Text>
            <Text>{selectedId.title}</Text>
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

CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedId = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle : selectedId.title
    };
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default CategoryMealsScreen;
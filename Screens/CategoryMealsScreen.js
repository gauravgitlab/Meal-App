import React from 'react';
import {View, Text, Button, StyleSheet, Platform, FlatList} from 'react-native';
import { HeaderTitle } from 'react-navigation-stack';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {

    const catId = props.navigation.getParam('categoryId');
    const dispayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
    
    const renderMealItem = mealItem => {
        return (<MealItem 
            title={mealItem.item.title}
            onSelectMeal={() => props.navigation.navigate({ routeName: 'MealDetails', params:{mealId : mealItem.item.id}})}
            imageUrl={mealItem.item.imageUrl}
            duration={mealItem.item.duration}
            complexity={mealItem.item.complexity.toUpperCase()}
            affordability={mealItem.item.affordability.toUpperCase()}
        />);
    }

    return(
        <View style={styles.screen}>
            <FlatList data={dispayedMeals} renderItem={renderMealItem} style={{width:'98%'}}/>
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
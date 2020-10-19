import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import  {Platform } from 'react-native'

import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoryMealsScreen from '../Screens/CategoryMealsScreen';
import MealDetailsScreen from '../Screens/MealDetailsScreen';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator(
    {
        Categories: CategoriesScreen,
        CategoryMeals: { screen: CategoryMealsScreen},
        MealDetails: MealDetailsScreen
    },
    {
        defaultNavigationOptions: 
        {
            headerStyle : { backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '' },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
        }
    }
    
);

export default createAppContainer(MealsNavigator);
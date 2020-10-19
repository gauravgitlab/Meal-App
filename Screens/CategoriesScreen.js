import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridItem from '../components/CategoryGridItem';

const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return (<CategoryGridItem title={itemData.item.title} color={itemData.item.color} 
            onSelect={() => props.navigation.navigate({ routeName: 'CategoryMeals', params:{categoryId : itemData.item.id}})} />
        );
    };

    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}/>
    );
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meals Categories'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default CategoriesScreen;

{/* <View style={styles.screen}>
    <Text>Categories Screen!</Text>
    <Button title='Meals' onPress={() => {
        // we can also use push() as well instead of navigate()
        // use push() benefit is you can add same screen more times.
        // if we use replace(), no screen left to go back
        props.navigation.navigate('CategoryMeals');
    }} />
</View> */}
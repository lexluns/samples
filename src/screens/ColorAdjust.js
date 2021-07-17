import React, {useReducer} from 'react';
import { Text, StyleSheet, Button, View, FlatList } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
    switch (action.colorToChange){
        case 'red':
          return {...state, red: state.red + action.amount};  
        case 'green':
            return {...state, green: state.green + action.amount};
        case 'blue':
            return {...state, blue: state.blue+ action.amount};
        case 'default':    


    }
};

const ColorAdjustScreen = () => {
 
const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
const {red, green, blue } = state;




return (
    <View>

        <ColorCounter onIncrease = {() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT})} onDecrease = {() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT})} color = "Red"/>
        <ColorCounter onIncrease = {() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT})} onDecrease = {() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT})}  color = "Blue"/>
        <ColorCounter onIncrease = {() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT})} onDecrease = {() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT})}  color = "Green"/>

        <View style = {{height:100, width:100, backgroundColor: `rgb(${red}, ${green}, ${blue} )` }}></View>

    </View>

);

};





const style = StyleSheet.create ({


});



export default ColorAdjustScreen;
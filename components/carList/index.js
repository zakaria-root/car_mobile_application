import React from 'react';
import {View,FlatList, Dimensions} from 'react-native';
import cars from './cars';
import CarItem from '../carItem';
import styles from './styles';

const carList = (props) => {
    return(
        <View style={styles.container}>
            
        <FlatList 
            data={cars}
            renderItem={({item}) => <CarItem car={item} /> }
            snapToAlignment={'start'}
            decelerationRate={'normal'}
            snapToInterval={Dimensions.get("window").height}
            />
        </View>
    );
};
export default carList;
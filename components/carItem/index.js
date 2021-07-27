import React from 'react';
import {Text, View,ImageBackground} from 'react-native';
import styles from './styles';

const carItem = (props) => {
    return(
        
        <View style={styles.carContainer}>
      <ImageBackground 
        source={require('../../assets/images/v4.jpg')} 
        style={styles.image}/>

        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>starting at 49.03$</Text>
        </View>
        
      </View>
    );
};

export default carItem;
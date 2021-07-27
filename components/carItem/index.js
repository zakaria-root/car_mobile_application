import React from 'react';
import {Text, View,ImageBackground} from 'react-native';
import styles from './styles';
import StyleButton from '../styleButton'

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

      <StyleButton 
      type="primery"
      content="custem order"
      onpress={() => {
        alert('custom orderr was pressed')
      }}
      />

      <StyleButton type="secandary"
      content="existing inventery"
      onpress={() => {
        alert('existing inventery was pressed')
      }}
      />

        
      </View>
    );
};

export default carItem;
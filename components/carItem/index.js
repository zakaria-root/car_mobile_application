import React from 'react';
import {Text, View,ImageBackground} from 'react-native';
import styles from './styles';
import StyleButton from '../styleButton'

const carItem = (props) => {

  const {name, tagline, taglineCTA, image} =  props.car;

    return(
      
        <View style={styles.carContainer}>
          
      <ImageBackground 
        source={image} 
        style={styles.image}
        />

        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{tagline}</Text>
          <Text style={styles.taglineCTA}>{taglineCTA}</Text>
        </View>

      <View style={styles.buttonContainer}>
      <StyleButton 
      type="primery"
      content="custem order"
      onpress={() => {
        console.warn('custom orderr was pressed')
      }}
      />

      <StyleButton type="secandary"
      content="existing inventery"
      onpress={() => {
        console.warn('existing inventery was pressed')
      }}
      />
      </View>

      </View>
    );
};

export default carItem;
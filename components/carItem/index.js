import React from 'react';
import {Text, View,ImageBackground} from 'react-native';
import styles from './styles';
import StyleButton from '../styleButton'
import Header from '../header';
const carItem = (props) => {

  const {name, tagline, taglineCTA, image} =  props.car;

    return(
      
        <View style={styles.carContainer}>
          <Header/>
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

      </View>
    );
};

export default carItem;
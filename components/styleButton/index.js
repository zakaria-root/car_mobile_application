import React from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from './styles';
const styleButton = (props) => {

    
    const {type, content, onpress} = props;

    const backgroundColor = type === 'primery' ? '#a00132db' : '#c1c1c1d4';
    const color = type === 'primery' ? '#dcdbdbf2' : '#4c4b4bf2';
return(
    <View Style={styles.container} >
        <Pressable
            style={[styles.button, {backgroundColor}]}
            onPress={() => onpress()}
            >
                
                <Text style={[styles.text, {color}]}>
                {content}
                </Text>
        </Pressable>
    </View>
);
};
export default styleButton;
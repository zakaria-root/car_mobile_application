import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        width: "100%",
        top: 20,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    logo:{
        
        width: 70,
        height: 20,
        resizeMode: 'contain'
    },
    menu:{
        width: 20,
        height: 20,
        resizeMode: 'contain'
    }
});
export default styles;
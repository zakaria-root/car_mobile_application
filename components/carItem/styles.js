import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height:  Dimensions.get("window").height,
        
      },
      titles: {
        marginTop: "25%",
        
      },
      title: {
        fontSize: 40,
        fontWeight: '500',
        textAlign: 'center',
        textTransform: "uppercase"
      },
      image:{
        width : '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
      },
      buttonContainer:{
        position:'absolute',
        bottom : 45,
        width:"100%"

      }
      ,
      subtitle: {
        fontSize: 10,
        textAlign: 'center',
      },
      taglineCTA:{
        textDecorationLine: 'underline',
        textAlign:"center"
      }
});

export default styles;
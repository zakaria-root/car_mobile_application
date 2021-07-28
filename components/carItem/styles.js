import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height:  Dimensions.get("window").height,
      },
      titles: {
        marginTop: "25%",
        textAlign: 'center',
      },
      title: {
        fontSize: 32,
        fontWeight: '550'
      },
      image:{
        width : '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
      },
      buttonContainer:{
        position:'absolute',
        bottom : 25,
        width:"100%"

      }
      ,
      subtitle: {
        fontSize: 10,
      },
      taglineCTA:{
        textDecorationLine: 'underline',
      }
});

export default styles;
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
  },

  header:{
    backgroundColor:'#8257E5',
    height:375,
    justifyContent:'center',
  },

  landingContent:{
    justifyContent:'center',
    alignItems:'flex-start',
    marginHorizontal:34,
    marginBottom:64,
    flex:1,
  },

  banner:{
    width:'100%',
    resizeMode:'contain'
  },

  title:{
    fontFamily:'Poppins_400Regular',
    color:'#6A6180',
    fontSize:20,
    lineHeight:30,
    marginTop:80
  },

  titleBold:{
    fontFamily:'Poppins_600SemiBold',
  },

  buttonsContainer:{
    flexDirection:'row',
    marginTop: 20,
    justifyContent:'space-between',
    width:311,
    height: 158,

  },

  button:{
    width:147,
    borderRadius:8,
    padding:24,
    justifyContent:'space-between',
  },

  buttonPrimary:{
    backgroundColor:'#9871f5',
    
  },

  buttonSecondary:{
    backgroundColor:'#04d361',
  },

  buttonText:{
    fontFamily:'Archivo_700Bold',
    color:'#fff',
    fontSize:20,
  },

  totalConnections:{
    fontFamily:'Poppins_400Regular',
    color:'#9C98A6',
    fontSize:12,
    lineHeight:20,
    maxWidth:140,
    marginTop:30,
  }
})

export default styles
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f0f0f7',    
  },
  header:{
    backgroundColor:"#8257E5",
    height:350,
    justifyContent:'center',
    alignItems:'center'
  },
  headerIcon:{
    width:120,
    height:120,
    marginTop: 84,
  },
  headerBackground:{
    position:'absolute',
    bottom: 36,
  },
  introductionTextContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-start',
    marginHorizontal:40,
  },
  introductionNumber:{
    fontSize:40,
    fontFamily:'Archivo_400Regular',
    color: '#6A6180',
    opacity:0.16,
    marginVertical:24,
  },
  introductionText:{
    fontFamily:'Poppins_500Medium',
    fontSize:24,
    color: '#6A6180',
  },
  introductionFooter:{
    height:40,
    justifyContent:'space-between',
    width:'100%',
    alignItems:'center',
    flexDirection:'row',
    marginTop:50,
  },
})

export default styles;
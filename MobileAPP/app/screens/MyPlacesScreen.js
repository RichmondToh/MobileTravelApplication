import React from 'react';
import {useState} from 'react';
import {View,StyleSheet,ScrollView,TouchableOpacity,Text,FlatList, Dimensions } from 'react-native';
import { LogBox } from 'react-native';


import MyAppScreen from '../components/MyAppScreen';
import MySideCardComponents from '../components/MySideCardComponents';

const data = [

    {
        id:1,
        title:"Home",
        subtitle:"77 Tanundal St, Howrah",
        cost:"$850",
        bed:"6",
        car:"3",
        shower:"2",
        image: require("../assets/home2.jpg"),
    },

    {
        id:2,
        title:"Home",
        subtitle:"4 Taplan Street, Como",
        cost:"$850",
        bed:"6",
        car:"3",
        shower:"2",
        image: require("../assets/home3.jpg"),
    }, 
    {
        id:3,
        title:"Apartment",
        subtitle:"38 York Street",
        cost:"$600",
        bed:"2",
        car:"1",
        shower:"1",
        image: require("../assets/App1.jpg"),
    },
    {
        id:4,
        title:"Apartment",
        subtitle:"24/278 Sussex Street",
        cost:"$600",
        bed:"2",
        car:"1",
        shower:"1",
        image: require("../assets/App4.jpg"),
    },
    {
        id:5,
        title:"Apartment",
        subtitle:"66/365-377 Kent Street",
        cost:"$570",
        bed:"3",
        car:"2",
        shower:"1",
        image: require("../assets/App5.jpg"),
    },
    {
        id:6,
        title:"Apartment",
        subtitle:"66 Bond Street",
        cost:"$550",
        bed:"3",
        car:"2",
        shower:"2",
        image: require("../assets/App2.jpg"),
    },
    {
        id:7,
        title:"Home",
        subtitle:"50 Park St, Sydney",
        cost:"$550",
        bed:"4",
        car:"2",
        shower:"2",
        image: require("../assets/home1.jpg"),
    },
    {
        id:8,
        title:"Home",
        subtitle:"42 Tanundal St, Howrah",
        cost:"$530",
        bed:"4",
        car:"2",
        shower:"2",
        image: require("../assets/home5.jpg"),
    },
    {
        id:8,
        title:"Apartment",
        subtitle:"36/181 Clarence Street",
        cost:"$520",
        bed:"1",
        car:"1",
        shower:"1",
        image: require("../assets/App3.jpg"),
    },
    {
        id:10,
        title:"Home",
        subtitle:"14 Chantry St, Goulburn",
        cost:"$495",
        bed:"4",
        car:"2",
        shower:"5",
        image: require("../assets/home4.jpg"),
    },


   


]

const listTab = [
    {
        title: 'All',
        value: 0,
    },
    {
        title: 'Apartment',
        value: 1,
    },
    {
        title: 'Home',
        value: 2,
    },



]



function MyPlacesScreen(props) {

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

    const [title, setTitle] = useState('All')
    const [datalist, setDatalist] = useState(data)

    const setTagsFilter = title => {
        if(title !== 'All'){
            setDatalist([...data.filter(e => e.title === title )])
        }  else {
            setDatalist(data)
        }
        setTitle(title)
} //This filters the data by "House" and "Apartment"



    return (
      <MyAppScreen style={styles.container}>

            <View style={styles.listTab}>
                {
                    listTab.map(e => (
                    <TouchableOpacity style = {[styles.btnTab, title === e.title && styles.btnTabActive]}//Filters according to what button the user placed. 
                    onPress={() => setTagsFilter(e.title)}>
                        <Text>
                            {e.title}
                        </Text>
                    </TouchableOpacity>
                    ))
                }
            </View>

            
            <FlatList
            data = {datalist}
            keyExtractor={(item, index) => index.toString()}
            renderItem = {({item}) => 
            <MySideCardComponents
            title={item.title} 
            subtitle={item.subtitle}
            cost={item.cost}
            bed={item.bed}
            car={item.car}
            shower={item.shower}
            image={item.image}          
            />}

            ItemSeparatorComponent ={()=>
            <View style={styles.separator}/>
            }
            />

        </MyAppScreen>
    );
}



const styles = StyleSheet.create({
    listTab:{
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 5,
        color: 'black'
    },
    btnTab:{
        width: Dimensions.get('window').width/3.5,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: "black",
        padding:10,
        marginTop:5,
        borderRadius:10,
        marginLeft:10,
        marginRight:10,
    },
     textTab:{
         fontSize:16,

     },
     btnTabActive:{
         backgroundColor:"grey",
     },
  
    container:{
        // backgroundColor:"#ECEFF1",

        flex:1,
        paddingHorizontal:10,
        justifyContent:'center',
        marginTop: 60,
    },
    containerbutton: {
        flexDirection:'row',
        backgroundColor: '#ecf0f1',
        padding: 8,
      },

    filterButton: {
        backgroundColor: "red",   //Button Colour
        borderRadius: 20,                     //Rounded Edges
        width: 150,
        height: 50,                         
        padding: 10,                          //Add width and height around button
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderWidth: 1,
      },
})

export default MyPlacesScreen;
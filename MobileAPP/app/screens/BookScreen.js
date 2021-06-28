import React, {useState} from 'react';
import {  FlatList, StyleSheet, View, TouchableOpacity, Text} from 'react-native';


import MyAppScreen from '../components/MyAppScreen';
import DataManager from '../config/DataManager';
import MyWishCard from '../components/MyWishCard';
import MyAppIcon from '../components/MyAppIcon';

const getBooks = () => {
    let commonData = DataManager.getInstance(); //Gets datamanger instance copy
    let user = commonData.getUserID();
    return commonData.getBooks(user);  
}

function BooksScreen(props) {
    const bookList = getBooks();
    console.log(bookList);




const[refreshing, setRefreshing] = useState(false);

const[books,setBooks] = useState(bookList);


const onDelete = (book) => {     //Fuction to delete Booked locations on the Wishlist screen
   const newBookList = books.filter (item => item.bookid !== book.bookid); //creates a newBookedWishlist by removing the item selected by the user
   setBooks(newBookList); //sets the useState of Bookedlocations on the screen

   let newArr = DataManager.getInstance(); //gets updated information from the data manager
   newArr.changeData(newBookList);  //dynamically 
}


    return (
        <MyAppScreen style={styles.container}>

            <View style={styles.tab}>
            <Text style={styles.text1}>Pull to refresh, and swipe left on item to delete</Text>
            </View>
            
            <FlatList 
                data={books}
                keyExtractor = {book => book.bookid.toString()}

                refreshing ={refreshing} // Refreshes and updates the screen, best used after the user has added something to their wishlist
                onRefresh={() => setBooks(getBooks())}

                renderItem = {({item}) => 
                        <MyWishCard
                            title={item.title}
                            subtitle={item.subtitle}
                            image={item.image}

                    onSwipeLeft={() => (<View style={styles.deleteView}>
                    <TouchableOpacity onPress={() => onDelete(item)}>  
                    <MyAppIcon name="trash-can" iconColor={"black"} backgroundColor={"grey"}/>
                    </TouchableOpacity>
                   </View>

                   //The onDelete{} deletes the item the user has selected
                   
                   )}
                        />}
                />
        </MyAppScreen>
        
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"brown",
        flex:1,
        marginTop:0,

    },
    text1:{
        marginTop: 10,
        marginBottom:5,
        fontSize: 15,
        marginLeft:40,
        justifyContent:"center",
        textDecorationLine:'underline',
    },
    tab:{
        justifyContent:"center",
    },
    deleteView:{
        backgroundColor:"lightblue",
        width:50,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
    }
})

export default BooksScreen;
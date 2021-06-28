export default class DataManager{

    static myInstance = null; //variable to store login
    userID= "";

    books = [
        {
            userid: "user1",
            bookid:1,
            title:"Twelve Apostles Vic",
            subtitle:"Planned to go on 02/01/2022",
            image:require("../assets/apostles.jpg"),
        },
        {
            userid: "user1",
            bookid:2,
            title:"Brighton Bathing Boxes",
            subtitle:"Planned to go on 22/07/2023",
            image:require("../assets/brightonhouse.jpg"),
        },
        {
            userid: "user1",
            bookid:3,
            title:"Cradle Mountain",
            subtitle:"Planned to go on 23/06/2022",
            image:require("../assets/cradlemountain.jpg"),
        },
        {
            userid: "user1",
            bookid:4,
            title:"Uluru",
            subtitle:"Planned to go on 14/02/2024",
            image:require("../assets/uluru.jpg"),
        },
        {
            userid: "user1",
            bookid:5,
            title:"Lake Gairdner",
            subtitle:"Planned to go on 08/09/2022",
            image:require("../assets/lakegairdner.jpeg"),
        },
        {
            userid: "user2",
            bookid:6,
            title:"Kangaroo Island",
            subtitle:"Planned to go on 05/02/2025",
            image:require("../assets/kangarooisland.jpg"),
        },
        {
            userid: "user2",
            bookid:7,
            title:"The Pinnacles Desert",
            subtitle:"Planned to go on 14/05/2022",
            image:require("../assets/pinnacles.jpg"),
        },
        {
            userid: "user2",
            bookid:1,
            title:"Twelve Apostles Vic",
            subtitle:"Planned to go on 18/08/2023",
            image:require("../assets/apostles.jpg"),
        },
        {
            userid: "user3",
            bookid:8,
            title:"Maria Island",
            subtitle:"Planned to go on 21/03/2024",
            image:require("../assets/mariaisland.jpg"),
        },
        {
            userid: "user3",
            bookid:3,
            title:"Cradle Mountain",
            subtitle:"Planned to go on 12/01/2022",
            image:require("../assets/cradlemountain.jpg"),
        },





    ]

    users = [
        {
            id: "user1",
            IDuser:1,
            name: "Pengu",
            email: "p@gmail.com",
            password: "p12345",
            image: require('../assets/Pengu.png')
        },
        {
            id: "user2",
            IDuser:2,
            name: "AgentPotato",
            email: "potato@gmail.com",
            password: "wowwowwow",
            image: require('../assets/Panda.png'),
        },
        {
            id: "user3",
            IDuser:3,
            name: "Risky",
            email: "Risk@gmail.com",
            password: "apassword",
            image: require('../assets/Risky.jpg'),
        },
    ];
    static getInstance (){ 
        if (DataManager.myInstance == null) {
            DataManager.myInstance = new DataManager();
        }
        return this.myInstance;
    }

    getUserID(){
        return this.userID;

    }

    setUserID(id){
        this.userID = id;
    }

    getBooks(id){
        return this.books.filter((book)=> book.userid === id);
    }

    addBook(book){
        this.books.push(book);
    }

    addUser(user){
        this.users.push(user)
    }

    getSizeUser(){
        return this.users.length+1;
    }

    changeData(newBooks){
        this.books = newBooks;
    }



}
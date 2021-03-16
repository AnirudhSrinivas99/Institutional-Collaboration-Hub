import React from "react";
import { ScrollView,View, Text, StyleSheet, Image, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import Fire from "../Fire";


// temporary data until we pull from Firebase
posts = [


    



    



   



    



    {
        id: "1",
        name: "Anirudh Srinivas",
        text:
            "Allows you to collaborate with others to do projects and team engagement.",
        timestamp: 1569109273726,
        avatar: require("../assets/im7.jpeg"),
        image: require("../assets/i5.jpeg")


    },
    {
        id: "2",
        name: "Madhumitha",
        text:
            "Website for home decors using HTML, CSS, JavaScript from scratch. Backend ( SQL ). RDBMS and web development in single go",
        timestamp: 1569109273726,
        avatar: require("../assets/im6.jpeg"),
        image: require("../assets/i1.jpeg")


    }, 
    {
        id: "3",
        name: "Sachin",
        text:
            "A simple image processing application using python. Newbie to python programming. Library used - pillow.",
        timestamp: 1569109273726,
        avatar: require("../assets/im2.jpeg"),
        image: require("../assets/i2.jpeg")
    },
    {
        id: "4",
        name: "Immanuel",
        text:
            "Dept groups app for college using mongo DB and bootstrap. Backend - pymongo drive. Students discussion forum in real-time.",
        timestamp: 1569109273726,
        avatar: require("../assets/im1.jpeg"),
        image: require("../assets/i3.jpeg")
    },
    {
        id: "5",
        name: "Janakiram",
        text:
            "Crop recommendation system using python machine learning , and random forest algorithm. Uses flask framework as the backend. accuracy of the trained model 100%.",
        timestamp: 1569109273726,
        avatar: require("../assets/im5.jpeg"),
        image: require("../assets/i4.jpeg")
    }
];

export default class HomeScreen extends React.Component {

    state = {
        user: {},
        
    MedCardData: [],
  

    };

    unsubscribe = null;

   

    componentDidMount() {
        const user = this.props.uid || Fire.shared.uid;

        this.unsubscribe = Fire.shared.firestore
            .collection("users")
            .doc(user)
            .onSnapshot(doc => {
                this.setState({ user: doc.data() });
            });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
    renderPost = post => {
        return (
            <View style={styles.feedItem}>
                <Image        
                        
                source={post.avatar}
                style={styles.avatar} />
                
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.name}>{post.name}</Text>
                            <Text style={styles.timestamp}>1mins ago</Text>
                        </View>

                        <Ionicons name="ios-ellipsis-vertical" size={24} color="#73788B" />
                    </View>
                    <Text style={styles.post}>{post.text}</Text>
                    <Image source={post.image} style={styles.postImage} resizeMode="cover" />
                    <View style={{ flexDirection: "row" }}>
                        <Ionicons name="ios-flame" size={24} color="#73788B" style={{ marginRight: 16 }} />
                        <Ionicons name="ios-chatbubble-ellipses" size={24} color="#73788B" />

 


                    </View>
                </View>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Institutional Collaboration Hub</Text>
                </View>

                <FlatList
                    style={styles.feed}
                    data={posts}
                    renderItem={({ item }) => this.renderPost(item)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                ></FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EBECF4"
    },

 
 
  
   

    header: {
        paddingTop: 64,
        paddingBottom: 16,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#EBECF4",
        shadowColor: "#454D65",
        shadowOffset: { height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "bold"
    },
    feed: {
        marginHorizontal: 16
    },
    feedItem: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 8,
        flexDirection: "row",
        marginVertical: 8
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 16
    },
    name: {
        fontSize: 15,
        fontWeight: "500",
        color: "#454D65"
    },
    timestamp: {
        fontSize: 11,
        color: "#C4C6CE",
        marginTop: 4
    },
    post: {
        marginTop: 16,
        fontSize: 14,
        color: "#838899"
    },
    postImage: {
        width: undefined,
        height: 150,
        borderRadius: 5,
        marginVertical: 16
    }
});

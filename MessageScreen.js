import React from "react";
import { ScrollView,View, Text, StyleSheet, Image, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import Fire from "../Fire";


// temporary data until we pull from Firebase

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
 

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Team Up</Text>
                </View>
<ScrollView>

{/*
<View style={styles.feedItem}>
<Image        
                                    
                                        source={
                                        
                                                 require("../assets/bill.jpg")
                                        }
                        
                
                style={styles.avatar} />

<View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.name}>Bill Gates</Text>
                            <Text style={styles.timestamp}>1mins</Text>
                        </View>
                        <Ionicons name="ios-ellipsis-vertical" size={24} color="#73788B" />
                        </View>
                        <Text style={styles.post}><Text style={{color: "#000000"}}>Name</Text> : Bill Gates  {"\n"}
                        <Text style={{color: "#000000"}}>Year</Text>: 4 {"\n"}
                        <Text style={{color: "#000000"}}>Dept</Text>: IT {"\n"}
                        <Text style={{color: "#000000"}}>Email</Text>: bill@gmail.com {"\n"}
                        <Text style={{color: "#000000"}}>Title</Text>: Online Music Gallery {"\n"}
                        <Text style={{color: "#000000"}}>Domain</Text>: Python {"\n"}
                        <Text style={{color: "#000000"}}>Discription</Text>:This is an online application developed using python for music lovers {"\n"}
                        <Text style={{color: "#000000"}}>Requirement</Text>: Backend Developer</Text>
               
                    </View>


</View>
                                    */}


{/*

<View style={styles.feedItem}>
<Image        
                                    
                                        source={
                                        
                                                 require("../assets/elon.jpg")
                                        }
                        
                
                style={styles.avatar} />

<View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.name}>Elon Musk</Text>
                            <Text style={styles.timestamp}>1mins</Text>
                        </View>
                        <Ionicons name="ios-ellipsis-vertical" size={24} color="#73788B" />
                        </View>
                        <Text style={styles.post}><Text style={{color: "#000000"}}>Name</Text> : Elon Musk  {"\n"}
                        <Text style={{color: "#000000"}}>Year</Text>: 4 {"\n"}
                        <Text style={{color: "#000000"}}>Dept</Text>: IT {"\n"}
                        <Text style={{color: "#000000"}}>Email</Text>: elon@gmail.com {"\n"}
                        <Text style={{color: "#000000"}}>Title</Text>: Student Record Management {"\n"}
                        <Text style={{color: "#000000"}}>Domain</Text>: Python {"\n"}
                        <Text style={{color: "#000000"}}>Discription</Text>:This is an online application developed using python for Students record {"\n"}
                        <Text style={{color: "#000000"}}>Requirement</Text>: Backend Developer</Text>
               
                    </View>


</View>
                                    */}

  {/*                                  

<View style={styles.feedItem}>
<Image        
                                    
                                        source={
                                        
                                                 require("../assets/mark.jpg")
                                        }
                        
                
                style={styles.avatar} />

<View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.name}>Mark Zuckerberg</Text>
                            <Text style={styles.timestamp}>1mins</Text>
                        </View>
                        <Ionicons name="ios-ellipsis-vertical" size={24} color="#73788B" />
                        </View>
                        <Text style={styles.post}><Text style={{color: "#000000"}}>Name</Text> : Mark Zuckerberg  {"\n"}
                        <Text style={{color: "#000000"}}>Year</Text>: 4 {"\n"}
                        <Text style={{color: "#000000"}}>Dept</Text>: IT {"\n"}
                        <Text style={{color: "#000000"}}>Email</Text>: mark@gmail.com {"\n"}
                        <Text style={{color: "#000000"}}>Title</Text>: Simple Student Management {"\n"}
                        <Text style={{color: "#000000"}}>Domain</Text>: Python {"\n"}
                        <Text style={{color: "#000000"}}>Discription</Text>:This is an online application developed using python for Student management {"\n"}
                        <Text style={{color: "#000000"}}>Requirement</Text>: Backend Developer</Text>
               
                    </View>


</View>
                                    */}

                                    

<View style={styles.feedItem}>
<Image        
                                    
                                        source={
                                        
                                                 require("../assets/ani.jpg")
                                        }
                        
                
                style={styles.avatar} />

<View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.name}>Anirudh</Text>
                            <Text style={styles.timestamp}>1mins</Text>
                        </View>
                        <Ionicons name="ios-ellipsis-vertical" size={24} color="#73788B" />
                        </View>
                        <Text style={styles.post}><Text style={{color: "#000000"}}>Name</Text> : Anirudh  {"\n"}
                        <Text style={{color: "#000000"}}>Year</Text>: 4 {"\n"}
                        <Text style={{color: "#000000"}}>Dept</Text>: IT {"\n"}
                        <Text style={{color: "#000000"}}>Email</Text>: anirudh@gmail.com {"\n"}
                        <Text style={{color: "#000000"}}>Title</Text>:face mask detection {"\n"}
                        <Text style={{color: "#000000"}}>Domain</Text>: python {"\n"}
                        <Text style={{color: "#000000"}}>Discription</Text>:This is an online application developed using python for face mask detection. {"\n"}
                        <Text style={{color: "#000000"}}>Requirement</Text>: Backend Developer</Text>
               
                    </View>


</View>
                                    





<View style={styles.feedItem}>
<Image        
                                    
                                        source={
                                        
                                                 require("../assets/im7.jpeg")
                                        }
                        
                
                style={styles.avatar} />

<View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.name}>Anirudh Srinivas</Text>
                            <Text style={styles.timestamp}>1mins</Text>
                        </View>
                        <Ionicons name="ios-ellipsis-vertical" size={24} color="#73788B" />
                        </View>
                        <Text style={styles.post}><Text style={{color: "#000000"}}>Name</Text> : Anirudh  {"\n"}
                        <Text style={{color: "#000000"}}>Year</Text>: 4 {"\n"}
                        <Text style={{color: "#000000"}}>Dept</Text>: IT {"\n"}
                        <Text style={{color: "#000000"}}>Email</Text>: anirudh@gmail.com {"\n"}
                        <Text style={{color: "#000000"}}>Title</Text>:icollabhub {"\n"}
                        <Text style={{color: "#000000"}}>Domain</Text>: App development {"\n"}
                        <Text style={{color: "#000000"}}>Discription</Text>:Allows you to collaborate with others to do projects and team engagement. {"\n"}
                        <Text style={{color: "#000000"}}>Requirement</Text>: Backend Developer</Text>
               
                    </View>


</View>


<View style={styles.feedItem}>
<Image        
                                    
                                        source={
                                        
                                                 require("../assets/im2.jpeg")
                                        }
                        
                
                style={styles.avatar} />

<View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.name}>Janakiram</Text>
                            <Text style={styles.timestamp}>1mins</Text>
                        </View>
                        <Ionicons name="ios-ellipsis-vertical" size={24} color="#73788B" />
                        </View>
                        <Text style={styles.post}><Text style={{color: "#000000"}}>Name</Text> : Janakiram  {"\n"}
                        <Text style={{color: "#000000"}}>Year</Text>: 2 {"\n"}
                        <Text style={{color: "#000000"}}>Dept</Text>: CSE {"\n"}
                        <Text style={{color: "#000000"}}>Email</Text>: janakiram@gmail.com {"\n"}
                        <Text style={{color: "#000000"}}>Title</Text>:Cloud Based Local Train Ticketing System. {"\n"}
                        <Text style={{color: "#000000"}}>Domain</Text>: Cloud computing.  {"\n"}
                        <Text style={{color: "#000000"}}>Discription</Text>: We propose to build a unique and easy to use local train ticketing project for efficient robust ticketing system using cloud infrastructure. {"\n"}
                        <Text style={{color: "#000000"}}>Requirement</Text>: frontend developer.</Text>
               
                    </View>


</View>

             
<View style={styles.feedItem}>
<Image        
                                    
                                        source={
                                        
                                                 require("../assets/im5.jpeg")
                                        
                                        }

                
                style={styles.avatar} />

<View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.name}>Jithin</Text>
                            <Text style={styles.timestamp}>1mins ago</Text>
                        </View>

                        <Ionicons name="ios-ellipsis-vertical" size={24} color="#73788B" />
                    </View>
                    <Text style={styles.post}><Text style={{color: "#000000"}}>Name</Text> : Jithin  {"\n"}
                        <Text style={{color: "#000000"}}>Year</Text>: 3 {"\n"}
                        <Text style={{color: "#000000"}}>Dept</Text>: ECE {"\n"}
                        <Text style={{color: "#000000"}}>Email</Text>: jithin@gmail.com {"\n"}
                        <Text style={{color: "#000000"}}>Title</Text>: Object Finder Robot. {"\n"}
                        <Text style={{color: "#000000"}}>Domain</Text>:  Robotics.  {"\n"}
                        <Text style={{color: "#000000"}}>Discription</Text>:  The Object Finder Robot uses OpenCV and computer vision along with a pre-trained model of TensorFlow running on the Raspberry Pi for detecting and classifying an object. {"\n"}
                        <Text style={{color: "#000000"}}>Requirement</Text>: Embedded specialist.</Text>
               
                    </View>

</View>


             
<View style={styles.feedItem}>
<Image        
                                    
                                        source={
                                    
                                                 require("../assets/im6.jpeg")
                                        }
                        
                
                style={styles.avatar} />

<View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.name}>Madhumitha</Text>
                            <Text style={styles.timestamp}>1mins</Text>
                        </View>

                        <Ionicons name="ios-ellipsis-vertical" size={24} color="#73788B" />
                    </View>
                    <Text style={styles.post}><Text style={{color: "#000000"}}>Name</Text> :Madhumitha {"\n"}
                        <Text style={{color: "#000000"}}>Year</Text>: 3 {"\n"}
                        <Text style={{color: "#000000"}}>Dept</Text>: It {"\n"}
                        <Text style={{color: "#000000"}}>Email</Text>: madhu@gmail.com {"\n"}
                        <Text style={{color: "#000000"}}>Title</Text>:Secure File Storage On Cloud Using Hybrid Cryptography. {"\n"}
                        <Text style={{color: "#000000"}}>Domain</Text>: Cybersecurity  {"\n"}
                        <Text style={{color: "#000000"}}>Discription</Text>: The proposed software product is liable to meet the required security needs of data center of cloud.The hybrid approach when deployed in cloud environment makes the remote server more secure.
 {"\n"}
                        <Text style={{color: "#000000"}}>Requirement</Text>: cloud architect</Text>
               
                    </View>

</View>


             
<View style={styles.feedItem}>
<Image        
                                    
                                        source={
                                    
                                                 require("../assets/im4.jpeg")
                                        }
                        
                
                style={styles.avatar} />

<View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.name}>Danveer</Text>
                            <Text style={styles.timestamp}>1mins</Text>
                        </View>

                        <Ionicons name="ios-ellipsis-vertical" size={24} color="#73788B" />
                    </View>
                    <Text style={styles.post}><Text style={{color: "#000000"}}>Name</Text> : Danveer  {"\n"}
                        <Text style={{color: "#000000"}}>Year</Text>: 2 {"\n"}
                        <Text style={{color: "#000000"}}>Dept</Text>: Mech {"\n"}
                        <Text style={{color: "#000000"}}>Email</Text>: danveer@yahoo.com {"\n"}
                        <Text style={{color: "#000000"}}>Title</Text>:Soccer Ball Launcher Machine {"\n"}
                        <Text style={{color: "#000000"}}>Domain</Text>: manufacturing.  {"\n"}
                        <Text style={{color: "#000000"}}>Discription</Text>:players and each player needs ball practice. So here we design a machine that can shoot soccer balls with high speed and very high accuracy for efficient soccer practice.
Our machine makes use of 2 x high torque motors with attached pulley wheels for throwing balls.
{"\n"}
                        <Text style={{color: "#000000"}}>Requirement</Text>: Materials engineer</Text>
               
                    </View>

</View>


             
<View style={styles.feedItem}>
<Image        
                                    
                                        source={
                                        
                                                 require("../assets/im1.jpeg")
                                        }
                        
                
                style={styles.avatar} />

<View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.name}>Immanuel</Text>
                            <Text style={styles.timestamp}>1mins</Text>
                        </View>

                        <Ionicons name="ios-ellipsis-vertical" size={24} color="#73788B" />
                    </View>
                    <Text style={styles.post}><Text style={{color: "#000000"}}>Name</Text> : Immanuel  {"\n"}
                        <Text style={{color: "#000000"}}>Year</Text>: 4 {"\n"}
                        <Text style={{color: "#000000"}}>Dept</Text>: CSE {"\n"}
                        <Text style={{color: "#000000"}}>Email</Text>: stanley@gmail.com {"\n"}
                        <Text style={{color: "#000000"}}>Title</Text>:Advanced Tour Guide. {"\n"}
                        <Text style={{color: "#000000"}}>Domain</Text>: Android app development  {"\n"}
                        <Text style={{color: "#000000"}}>Discription</Text>: highly promising system helping a tourist or any user to get accurate and best data in no time. This System is an Android Application and uses Android Studio as its Front End and SQL Server as its Back End.
 {"\n"}
                        <Text style={{color: "#000000"}}>Requirement</Text>: SQL developer.</Text>
               
                    </View>

      
</View>

    
</ScrollView>

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
        width: 50,
        height: 50,
        borderRadius: 10,
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

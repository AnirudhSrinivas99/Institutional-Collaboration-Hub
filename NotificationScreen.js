  
import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ImageBackground,TouchableOpacity, Image, TextInput , Linking} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'
import Fire from "../Fire"
import { LinearGradient} from "expo-linear-gradient";
import InputScrollView from 'react-native-input-scroll-view';
import AlertPro from "react-native-alert-pro";
import * as ImagePicker from 'expo-image-picker'
import UserPermissions from "../utilities/UserPermissions";
import { ScrollView } from 'react-native-gesture-handler'

const firebase = require("firebase");
require("firebase/firestore");

export default class Detail extends React.Component {

    state = {
        text: "",
        image: '../images/edit1.png'
    }

    componentDidMount() {
        UserPermissions.getCamerPermission();
    }

    getPhotoPermission = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)

            if (status != "granted") {
                alert("Precisamos de permissão para acessar suas fotos.")
            }
        }
    };

    handlePost = () => {
        Fire.shared
            .addPost({ text: this.state.text.trim(), localUri: this.state.image })
            .then(ref => {
                this.setState({ text: "", image: null });
                this.props.navigation.goBack();
            })
            .catch(error => {
                alert(error.message);
            });
    };

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3]
        })

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    }


    state = {
      user: {},
      email: "",
      displayName: ""
  };

componentDidMount() {
    const { email, displayName } = firebase.auth().currentUser;

    this.setState({ email, displayName });
}



signOutUser = () => {
  firebase.auth().signOut();
};



  unsubscrible = null;

  componentDidMount() {
      const user = this.props.uid || Fire.shared.uid;

      this.unsubscrible = Fire.shared.firestore
          .collection("users")
          .doc(user)
          .onSnapshot(doc => {
              this.setState({ user: doc.data() });
          });
  }

  componentWillUnmount() {
      this.unsubscrible();
  }



    render(){
        return(
            <View style={{
               backgroundColor:"#f8f8f8",
                height:"100%",
                paddingHorizontal:20,
            
            

            }}> 
            <ScrollView
   showsVerticalScrollIndicator ={false}
  showsHorizontalScrollIndicator={false}

  >


         
            <ImageBackground source={require("../assets/dev3.png")} 
                  style={{ width:"100%",height:250,marginTop:20}}>

   <TouchableOpacity  onPress={()=>this.props.navigation.goBack()} style={{
                          backgroundColor:"#000000",
                          height: 35,
                          width: 35,
                          marginLeft:0,
                          marginTop:10,
                          borderRadius:8,
                          zIndex:100
                      }}>
                          
                               <Image source={require("../assets/back1.png")} style={{width:25,height:10,top:11,left:5}}/>
                
                      </TouchableOpacity>

            </ImageBackground>
  

            <View style={{
                        backgroundColor:"#FFF",
                        padding:10,
                        borderRadius:15,
                        marginTop: 30,
                        }}>
                            <View style={{
                                flexDirection:"row",
                                alignItems:"center",
                               
                            }}>
                                            <View>
                                                    <Text style={{
                                                        fontSize:20,
                                                        fontWeight:"bold"
                                                        }}>                   Collaboration                                                    </Text>
                                            </View>
                        
                            </View>
                                <View style={{
                                    flexDirection:"row",
                                    paddingTop:10,
                                    alignItems:"center"
                                }}>

                             
                                </View>
                    </View>

                    <View style={{
                        flexDirection:"row",
                        marginTop:20,
                        borderRadius:10,
                    }}>
                            <View style={{
                                backgroundColor:"#FFF",
                                paddingVertical:10,
                                paddingHorizontal:10,
                                borderRadius:10,
                                width:420
                                    }}>
                                        <Text style={{
                                            fontWeight:"bold",
                                            left:10
                                    
                                        }}>         Don't hesitate to ask us if you have{"\n"}any doubts in this screen contact this email ID</Text>

                                     
  <Text
    style={{color: '#000080',fontWeight:"bold", textDecorationLine: "underline",left:70}}
    onPress={() => Linking.openURL('mailto:icollabhub@gmail.com?subject=InstitutionCollaborationHub&body=feel free to give your feedback') }
      title="icollabhub@gmail.com"
  >
    icollabhub@gmail.com
  </Text>

                                       
                            </View>

                          

                    </View>

<View  style={{paddingLeft:220}}>



                    <TouchableOpacity   onPress={() => { this.handlePost();  {this.AlertPro.open()} }} style={{
                                backgroundColor:"#dcdcdc",
                                paddingVertical:10,
                                paddingLeft:15,
                                borderRadius:8,
                                width:100,
                                marginTop:10,            
                                    }}>
                               
                                        <Text style={{
                                            fontWeight:"bold",
                                            fontSize:15
                                    
                                        }}><Ionicons name="md-send" color={"#000"} size={20} />  Send</Text>
        
                            </TouchableOpacity>

          
</View>
                    

            <View style={{ 
                        marginTop:10,
                        marginBottom:20
                    }}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:20,
                            marginBottom:10
                        }}>Format</Text>
                        <Text style={{
                            fontWeight:"bold",
                            color:"#B2B2B2",
                        }}>Name: {"\n"}
                        Year: {"\n"}
                        Dept:  {"\n"}
                        Email:  {"\n"}
                        Title:  {"\n"}
                        Domain: {"\n"}
                        Discription: {"\n"}
                        Requirement: {"\n"}
                        <Text style={{textDecorationLine: "underline"}}> Add project logo or Screenshot </Text>
                        </Text>
                    </View>



                


                                 
                    
                    <View style={styles.inputContainer}>

       <LinearGradient   colors={['#d3d3d3', '#d3d3d3']} 
                      start={[0,0]} end={[1,1]} 
                          style={{
                          
   borderRadius: 20,
   marginTop:30,
   width:320,
   height: 200,
      }}>
        <InputScrollView >

        <TextInput  
               multiline={true}
               style={{fontSize:18,fontWeight: "bold",paddingStart:20,paddingEnd:20,marginTop:10}}
               placeholder="Type your idea here . . ."
               onChangeText={text => this.setState({ text })}
               value={this.state.text}></TextInput>
        </InputScrollView>

          
</LinearGradient>


       </View>



  <View  style={{ marginTop:-50, flexDirection: "row", paddingLeft:90}}>
 

<Text style={{
                                   fontWeight:"bold",
                               }}>Add your Screenshot here</Text>
 <TouchableOpacity onPress={this.pickImage}>

           <Ionicons name="md-camera" size={32} color="#696969" style={{top:-8, paddingLeft:5}} />

</TouchableOpacity>



  </View>

       <View style={{ marginHorizontal: 32, marginTop: 10, height: 150, bottom:10 }}>
           <Image source={{ uri: this.state.image }} style={{ width: "100%", height: "100%" }}></Image>
       </View>


       <AlertPro
          ref={ref => {
            this.AlertPro = ref;
          }}
          onConfirm={() => this.AlertPro.close()}
          onCancel={() => this.AlertPro.close()}
          title="Your message has been successfully sent"
          textCancel="CANCEL"
          textConfirm="OK"
          customStyles={{
            mask: {
              backgroundColor: "transparent"
            },
            container: {
              borderWidth: 1,
              borderColor: "#9900cc",
              shadowColor: "#000000",
              shadowOpacity: 0.1,
              shadowRadius: 10
            },
            buttonCancel: {
              backgroundColor: "#4da6ff"
            },
            buttonConfirm: {
              backgroundColor: "#ffa31a"
            },
            title: {
                fontWeight: "bold"
            }
          }}
        />

                  



                  
                    </ScrollView>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#FFF"
    },
    header: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#D8D9DB"
    },
    inputContainer: {
        right:20,
        margin:20,
        top:-50,
        flexDirection: "row"
    },
    avatar: {
        marginTop: 40,
        width: 60,
        height: 60,
        borderRadius: 24,
        marginRight: 16
    },
    photo: {
    

    }
})
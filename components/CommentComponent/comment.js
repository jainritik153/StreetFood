import React ,{useReducer,useEffect,useState}from "react";
import {Alert,Platform, TouchableOpacity, TextInput,View, Text, StyleSheet, ImageBackground,ActivityIndicator ,AsyncStorage ,KeyboardAvoidingView} from "react-native";
import CommentCard from "./commentCard";
import { ScrollView } from "react-native-gesture-handler";

const commentObject = [
  {
    _id: 1,
    Comment:
      "Very nice..Awesome taste ..I recommend alll to go and have it once ,you'll love it",
    User_id: "USER_NAME",
    likes: 10,
    imageUrl:
      "https://i.pinimg.com/originals/d4/d4/ee/d4d4ee8b3f45e22fa9306a1255c76d5c.jpg"
  },
  {
    _id: 2,
    Comment:
      "Very nice..Awesome taste ..I recommend alll to go and have it once ,you'll love it",
    User_id: "USER_NAME",
    likes: 10,
    imageUrl:
      "https://i.pinimg.com/originals/d4/d4/ee/d4d4ee8b3f45e22fa9306a1255c76d5c.jpg"
  },
  {
    _id: 3,
    Comment:
      "Very nice..Awesome taste ..I recommend alll to go and have it once ,you'll love it",
    User_id: "USER_NAME",
    likes: 10,
    imageUrl:
      "https://i.pinimg.com/originals/d4/d4/ee/d4d4ee8b3f45e22fa9306a1255c76d5c.jpg"
  },
  {
    _id: 4,
    Comment:
      "Very nice..Awesome taste ..I recommend alll to go and have it once ,you'll love it",
    User_id: "USER_NAME",
    likes: 10,
    imageUrl:
      "https://i.pinimg.com/originals/d4/d4/ee/d4d4ee8b3f45e22fa9306a1255c76d5c.jpg"
  },
];
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_COMMENT":
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case "ERROR":
      return {
        loading: false,
        data: [],
        error: "Something went wrong",
      };
  }
};

const initialState = {
  loading: true,
  data: [],
  error: "",
};

const submit=(comment,videoId,token,setText)=>{
  try {
    console.log("inside submit");
    console.log(comment);
    let rspns = fetch(`https://damp-refuge-17780.herokuapp.com/comment/${videoId}`, {
      method: "PATCH",

       headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({
        "Comment":comment
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setText("")
        console.log("from post ",data)
      });
  } catch (e) {
    console.log("from post eroorr",e.message);
  }
}



export default function Comment({route,navigation}) {

  const {videoId} = route.params;
  const [token,setToken]=useState("")
  const [text,setText]=useState("")
  const [comments,setComments]=useState([])

  const retrieveItem=async(key)=> {
    try {
      const token =  await AsyncStorage.getItem(key);
      return token
    } catch (error) {
      console.log("errrorroro",error.message);
    }
    return
  }

  

  console.log("$$$$",token)
  const [state,dispatch] =useReducer(reducer,initialState);
  console.log("vdieoid=-=-------",videoId)
//
//Auth failed becoz token is not passed in the url
  useEffect(() => {
    retrieveItem("token").then(mytoken=>{
    setToken(mytoken)
     fetch(`https://damp-refuge-17780.herokuapp.com/getcomment/${videoId}`,{
        method: 'GET',
        headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + mytoken,
      }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        if(responseJson.message == "Auth Failed"){
           Alert.alert(
            //title
            'Authorization Failed',
            'Do you want to cancel',
            [
              {text: 'Yes', onPress: () => console.log('Yes Pressed')},
              {text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel'},
            ],
            { cancelable: false }
            //clicking out side of alert will not cancel
        );
        }
        console.log("response" , responseJson)
        dispatch({ type: "FETCH_COMMENT", payload: responseJson });
      })
      .catch((error) => {
       
        dispatch({ type: "ERROR" });
        console.log("error",error.message)
      });
  })
  },[state]);
  

  if (state.loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <ActivityIndicator></ActivityIndicator>
      </View>
    );
  } 
  else{

  return (
    <View style={styles.container}>
      <ScrollView>
        {state.data.map(comment => {
          return (
            <CommentCard
              key={comment._id}
              comment={comment.Comment}
              userName={comment.User_id}
              //likes={comment.likes}
              //imageUrl={comment.imageUrl}
            />
          );
        })}
      </ScrollView>
      
      <KeyboardAvoidingView
         behavior='position'
         keyboardVerticalOffset={74}
      >
        <View style={styles.inputcontainer}>
          {/* Comment input field */}
          <TextInput
            placeholder="Add a comment..."
            keyboardType="twitter" // keyboard with no return button
            style={styles.input}
            value={text}
            onChangeText={(comment) =>setText(comment)}
            clearButtonMode="always"
          />
          {/* Post button */}
          <TouchableOpacity
            style={styles.button}
            onPress={()=>submit(text,videoId,token,setText)}
          >
            {/* Apply inactive style if no input */}
            <Text style={[styles.text, !text ? styles.inactive : []]}>Post</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  },
   inputcontainer: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#EEE',
    alignItems: 'center',
    paddingLeft: 15,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 15,
  },
  button: {
    height: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inactive: {
    color: '#CCC',
  },
  text: {
    color: '#3F51B5',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
});

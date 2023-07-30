import React, { useState } from 'react';
import { Text, View, SafeAreaView, ImageBackground, StatusBar, Dimensions, TouchableOpacity, Image, TextInput } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo"
const windowwidth = Dimensions.get("window").width
const windowheight = Dimensions.get("window").height
const Login = ({navigation}) => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [passHidden,setPassHidden] = useState("")
    return (
<<<<<<< HEAD
        <View style={{flex:1}}>
           <StatusBar barStyle="default" />
            <View style={{width:"100%",height:"25%"}}>
                <Image source={require("../images/img1.png")} style={{width:"100%",height:"100%"}} />
            </View>
            <View style={{width:"100%",height:"5%",flexDirection:"column"}}>
                    <Text style={{width:"5%",height:"5%",borderRadius:50,backgroundColor:"#ffd124"}}>.</Text>
            </View>
            <View style={{width:"100%",height:"6%",backgroundColor:"#f6f8f6",borderTopRightRadius:45,borderTopLeftRadius:45}}>
                <Text style={{fontSize:25,textAlign:"center",fontWeight:"900",color:"#3a3c3f"}}>Đăng nhập tài khoản</Text>
            </View>
            <View style={{width:"100%",height:"64%",backgroundColor:"#ffd124",borderTopRightRadius:45,borderTopLeftRadius:45}}>
                {/* <View style={{width:"100%",height:"12%",alignItems:"center",justifyContent:"center",marginTop:20}}>
                     <Image source={require("../images/logo.png")} style={{width:"40%",height:"100%",textAlign:"center"}} />
                </View> */}
                <View style={{width:"100%",height:"14%",alignItems:"center",justifyContent:"space-evenly",marginTop:20,flexDirection:"row"}}>
                    <TouchableOpacity style={{borderRadius:15,width:"25%",height:"85%",alignItems:"center",backgroundColor:"white",justifyContent:"center",marginTop:6}}>
                            <Text style={{fontWeight:"500"}}>Cá Nhân</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderRadius:15,paddingLeft:3,paddingRight:3,width:"25%",height:"85%",alignItems:"center",backgroundColor:"white",justifyContent:"center",marginTop:6}}>
                            <Text style={{fontWeight:"500"}}>Doanh Nghiệp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderRadius:15,width:"25%",height:"85%",alignItems:"center",backgroundColor:"white",justifyContent:"center",marginTop:6}}>
                            <Text style={{fontWeight:"500"}}>Trung gian</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:windowwidth-70,marginLeft:35,height:"12%",borderBottomWidth:1,alignItems:"center",justifyContent:"center",marginTop:10,flexDirection:"row"}}>
                     <TextInput style={{flex:1,height:"100%",fontSize:20}}
                         placeholder="Email/SĐT"
                        autoCapitalize={false}
                     />
                </View>
                <View style={{width:windowwidth-70,marginLeft:35,height:"12%",borderBottomWidth:1,alignItems:"center",justifyContent:"center",marginTop:10,flexDirection:"row"}}>
                     <TextInput style={{flex:1,height:"100%",fontSize:20}}
                         placeholder="Mật Khẩu"
                        autoCapitalize={false}
                        secureTextEntry={passHidden?true:false}
                     />
                     <TouchableOpacity  style={{height:"100%",aspectRatio:1,alignItems:"center",justifyContent:"center"}}
                           onPress={()=>setPassHidden(!passHidden)}
                     >
                        {passHidden ? 
                        <Image source={require("../images/eye-visible.png")} resizeMode="stretch" style={{width:20,height:15}} />
                        :  <Image source={require("../images/eye-invisible.png")} resizeMode="stretch" style={{width:20,height:15}} /> 
                    }
                     </TouchableOpacity>
                </View>
                <View style={{width:windowwidth-70,marginLeft:35,height:"5%",alignItems:"center",justifyContent:"flex-end",marginTop:10,flexDirection:"row"}}>
                  <TouchableOpacity>
                   <Text className={{right:0,position:"absolute",color:"black"}}>Quên mật khẩu?</Text>
                  </TouchableOpacity>
                </View>
            
                  <TouchableOpacity style={{backgroundColor:"white",borderRadius:100 ,width:windowwidth-70,marginLeft:35,height:"10%",alignItems:"center",justifyContent:"center",marginTop:10}}>
                      <Text className={{position:"absolute",color:"black",fontWeight:"900"}}>Login</Text>
                  </TouchableOpacity>
                <View style={{width:windowwidth-70,marginLeft:35,height:"5%",alignItems:"center",justifyContent:"center",marginTop:10}}>
                
                   <Text className={{position:"absolute",color:"black",fontWeight:"700"}}>Hoặc</Text>
                
                </View>
                <View style={{width:windowwidth-70,marginLeft:35,height:"5%",alignItems:"center",justifyContent:"center",marginTop:20,flexDirection:"row"}}>
                
                 <Image source={require("../images/google.png")} style={{width:35,height:35,borderRadius:50,marginRight:10}} />
                 <Image source={require("../images/face.png")} style={{width:35,height:35,borderRadius:50}} />
                
                </View>
                 <View style={{width:windowwidth-70,marginLeft:35,height:"5%",alignItems:"center",justifyContent:"center",marginTop:20}}>
                  <TouchableOpacity>
                   <Text className={{position:"absolute",color:"white"}}>Bạn chưa có tài khoản? Đăng ký</Text>
                  </TouchableOpacity>
=======
        <ImageBackground style={{height:"100%",width:"100%"}} source={require("../images/login.jpg")} resizeMode="stretch">
            <StatusBar barStyle='light-content'/>
            <Text>Logiqwen</Text>
            <SafeAreaView style={{flex:1}}>
                <View style={{height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity style={{height:"15%",width:"60%" , marginTop:windowheight*0.3 , borderColor:"black",borderWidth:2} }
                     onPress={()=>{
                        navigation.navigate("HomeTabs")
                    }}>
                        <Text style={{color:"red",textAlign:"center",fontSize:40}}>Login</Text>
                    </TouchableOpacity>           
>>>>>>> f3f7483cca9a854a12d4e559bee2f95d058291e7
                </View>
            </View>
       </View>
    );
};

export default Login;
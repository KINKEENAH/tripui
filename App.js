import { Image, ImageBackground, SafeAreaView, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#F6F6F6",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        margin: 15,
        flex:1
      }}
    >
      <View style={{ marginTop: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 20, paddingRight: 165 }}>
            Rio de Janeiro
          </Text>
          <View
            style={{ borderWidth: 0.1, flexDirection: "row", borderRadius: 50, paddingTop:4,backgroundColor:"white" }}
          >
            <View style={{paddingLeft:3}}>
            <AntDesign name="staro" size={18} color="black" />
            </View>

            <Text style={{ paddingLeft: 4 , paddingRight: 2}}>5.0</Text>
          </View>
        </View>
      </View>

      <View style={{ justifyContent: "space-between", flexDirection: "row" , marginTop:5}}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ borderRadius: 20, height: 20, width: 20 }}
            source={{
              uri: "https://media.istockphoto.com/id/990986106/vector/brazil-round-flag-vector-flat-icon.jpg?s=612x612&w=0&k=20&c=UE3dhHVfnQmAnQdEydT5dW9qFroW4VX3Gmp011aeYyo=",
            }}
          />
          <Text>Brazil</Text>
        </View>

        <View>
          <Text style={{ textDecorationLine: "underline" }}> 143 reviews</Text>
        </View>
      </View>

      <View style={{marginTop: 20, marginBottom:22}}>
        <Text>
          Rio de Janeiro, often simply called Rio, is one of Brazil's most
          iconic cities, renowned for...
        </Text>
        <Text style={{ textDecorationLine: "underline", paddingTop:9 }}>Read more</Text>
      </View>

      <View>
        <Text style={{fontSize:20}}>Upcoming tours</Text>
      </View>
      <View
        style={{
          borderWidth: 0.01,
          borderRadius: 17,
          backgroundColor: "#FFFFFF",
        }}
      >
        <View style={{ marginBottom: 5, paddingLeft: 10, paddingTop: 10 }}>
          <ImageBackground
            style={{
              borderRadius: 17,
              overflow: "hidden",
              height: 200,
              width: 333,
            }}
            source={{
              uri: "https://sceneloc8.com/wp-content/uploads/2024/11/Rio-De-Janerio-Brazil.jpg",
            }}
          >
            <View
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                backgroundColor: "white",
                borderRadius: 20,
                padding: 5,
              }}
            >
              <MaterialIcons name="favorite-border" size={24} color="black" />
            </View>
          </ImageBackground>
        </View>

        <Text style={{ fontSize: 18 }}>Iconic Brazil</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ paddingRight: 8, color:"gray" }}>8 days</Text>
            <View style={{ paddingTop: 7, paddingRight: 8 }}>
              <FontAwesome name="asterisk" size={7} color="gray" />
            </View>
          </View>
          <Text style={{color:"gray"}}>from $659/person</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <AntDesign name="staro" size={20} color="black" />
              <Text style={{ paddingRight: 15, paddingLeft: 5 }}>4.6</Text>
            </View>
            <View>
              <Text style={{color:"gray"}}>56 reviews</Text>
            </View>
          </View>
          <View>
            <Ionicons
              name="arrow-forward-circle-sharp"
              size={50}
              color="black"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

import { StatusBar } from "expo-status-bar";
import { Text, View, Image, ScrollView, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 700,
        width: 400,
        backgroundColor: "#007AFF",
      }}
    >
      <Text style={{ fontSize: 25, color: "white" }}>beaconSMS</Text>
      <View
        style={{
          width: 400,
          height: 400,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ScrollView contentContainerStyle={{}}>
          {" "}
          {/* Center content within ScrollView */}
          <Text
            style={{
              fontSize: 20,
              marginVertical: 20,
              textAlign: "center",
            }}
          >
            Customer Login
          </Text>
          <Text style={{ fontSize: 20 }}>Username</Text>
          <TextInput
            title='Username'
            style={{
              height: 40,
              width: 340,
              borderColor: "gray",
              borderWidth: 1,
              marginBottom: 10,
              paddingHorizontal: 8,
              backgroundColor: "white", // Optional but makes it clearly visible
              marginVertical: 5,
              padding: 10,
              fontSize: 18,
            }}
            placeholder='Enter your username'
            multiline={false}
          />
          <Text style={{ fontSize: 20 }}>Username</Text>
          <TextInput
            title='Password'
            style={{
              height: 40,
              width: 340,
              borderColor: "gray",
              borderWidth: 1,
              marginBottom: 10,
              paddingHorizontal: 8,
              backgroundColor: "white", // Optional but makes it clearly visible
              marginBottom: 25,
              fontSize: 18,
            }}
            multiline={false}
            placeholder='Enter your password'
            secureTextEntry
          />
          <Button
            title='Login'
            onPress={() => {
              alert("Login button pressed");
            }}
            style={{ marginTop: 10 }}
          />
        </ScrollView>
      </View>
    </View>
  );
}

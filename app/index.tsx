import Navbar from "../Components/Navbar/Navbar";
import "./global.css";
import HomeScreen from "./home";

export default function Index() {
  return (
    <>
      {/* <View className=" bg-gray-100"> */}
      <Navbar />
      <HomeScreen />
      {/* </View> */}
      {/* <ActivityListScreen /> */}
    </>
  );
}

import { View, Text, Pressable, Image, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/ui/CustomButton";
import search from "@/assets/images/search.png";
import bigBike from "@/assets/images/bike-1.png";
import bgSkew from "@/assets/images/skewer.png";
import { BlurView } from "expo-blur";

const Home = () => {
  return (
    <SafeAreaView className="bg-primaryGray flex-1">
      <View className="flex px-4 flex-row items-center justify-between w-full">
        <Text className="text-3xl font-bold text-white">Choose Your Bike</Text>

        <Pressable className="bg-lightBlue p-3  shadow-md rounded-lg flex items-center justify-center">
          <Image source={search} resizeMode="contain" className="w-6 h-6" />
        </Pressable>
      </View>
      {/*The Bike on Offer*/}
      <View className="mt-8 relative mx-auto bg-darkBlue rounded-[30px] overflow-hidden">
        {/*<BlurView*/}
        {/*  intensity={90}*/}
        {/*  experimentalBlurMethod="dimezisBlurView"*/}
        {/*  className="absolute top-0 left-0 bottom-0 right-0 clipper"*/}
        {/*/>*/}
        <View className="justify-center items-center p-[20px]">
          <Image
            source={bigBike}
            resizeMode="contain"
            className="w-[300px] h-[150px] mb-4"
          />
          <Text className="text-2xl self-start text-white font-bold">
            30% Off
          </Text>
        </View>
      </View>

      {/*    icons to select products */}
    </SafeAreaView>
  );
};
export default Home;

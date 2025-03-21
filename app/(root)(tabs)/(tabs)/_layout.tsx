import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import bikeIcon from "@/assets/images/bicycle.png";

const TabIcon = ({
  focused,
  source,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => (
  <View className="flex flex-row justify-center items-center">
    <View className="w-16 h-16 items-center justify-center">
      <Image source={source} resizeMode="contain" className="w-8 h-8" />
    </View>
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#222834",
          overflow: "hidden",
          height: 80,
          position: "absolute",
          flexDirection: "row",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={bikeIcon} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};
export default TabsLayout;

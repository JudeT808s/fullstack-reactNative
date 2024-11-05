import { View, Text, FlatList } from "react-native";
import { useState } from "react";
import React from "react";
import * as AnimaTable from "react-native-animatable";
import { TouchableOpacity } from "react-native";
import { ImageBackground } from "react-native-web";
const TrendingItem = ({ activeItem, item }) => {
  const [play, setPlay] = useState(false);

  return (
    <AnimaTable.View
      className="mr-5"
      animation={activeItem == item.$id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
        <Text className="text-3xl text-white">Playing</Text>
      ) : (
        <TouchableOpacity className="relative justify-center items-center" activeOpacity={0.7}onPress={() => setPlay(true)}>
          <ImageBackground
            source={{ uri: item.thumbnail }}
            className="w-52 h-72 rounded-[35px] overflow-hidden shadow-lg shadow-black/40"
          />
        </TouchableOpacity>
      )}
    </AnimaTable.View>
  );
  const zoomIn = {
    0: {
      scale: 0,
    },
    0.5: {
      scale: 0.5,
    },
    1: {
      scale: 1,
    },
  };
  const zoomOut = {
    0: {
      scale: 1,
    },
    0.5: {
      scale: 0.5,
    },
    1: {
      scale: 0.9,
    },
  };
};
const Trending = (posts) => {
  const [activeItem, setActiveItem] = useState(posts[0]);

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <Text className="text-3xl text-white">{item.id}</Text>
      )}
      horizontal
    />
  );
};

export default Trending;

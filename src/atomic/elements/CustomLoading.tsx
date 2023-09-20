import { CustomLoadingProps } from '@/types';
import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { CustomPhoto } from './CustomPhoto';
import { images } from '@/constants';

const CustomLoading = (props: CustomLoadingProps) => {
 const { message, color, size, background, colorText, isActivate } = props;
 if (!isActivate) return null;
 return (
  <View className={`p-4 flex-1 flex-col justify-center items-stretch ${background}`}>
   <View className="bg-white space-y-4 px-4 py-8 rounded-xl">
    <Text className={`font-semibold text-2xl text-center ${colorText}`}>{message.title}</Text>
    <Text className={`font-normal text-xl text-center ${colorText}`}> {message.text} </Text>
    <View className="flex-row- justify-center items-center">
     <CustomPhoto image={images.load} />
    </View>
    {/* <ActivityIndicator size={size} color={color} /> */}
   </View>
  </View>
 );
};
export { CustomLoading };

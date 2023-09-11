import { CustomLoadingProps } from '@/types';
import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

const CustomLoading = (props: CustomLoadingProps) => {
 const { message, color, size, background, colorText, isActivate } = props;
 if (!isActivate) return null;
 return (
  <View className={`p-4 flex-1 flex-col justify-center items-stretch space-y-4 ${background}`}>
   <Text className={`font-semibold text-2xl text-center ${colorText}`}>{message.title}</Text>
   <Text className={`font-normal text-xl text-center ${colorText}`}> {message.text} </Text>
   <ActivityIndicator size={size} color={color} />
  </View>
 );
};
export { CustomLoading };

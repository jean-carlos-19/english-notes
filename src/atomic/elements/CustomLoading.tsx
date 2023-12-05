import React from 'react';
import { images } from '@/constants';
import { Text, View } from 'react-native';
import { CustomPhoto } from './CustomPhoto';
import { CustomLoadingProps } from '@/types';

const CustomLoading = (props: CustomLoadingProps) => {
 return (
  <View className={`p-4 flex-1 flex-col justify-center items-stretch bg-sky-100`}>
   <View className="bg-white space-y-4 px-4 py-8 rounded-xl">
    <Text className={`font-semibold text-2xl text-center text-slate-800`}>
     {props.message.title}
    </Text>
    <Text className={`font-normal text-xl text-center text-slate-800`}> {props.message.text} </Text>
    <View className="flex-row- justify-center items-center">
     <CustomPhoto image={images.load} />
    </View>
   </View>
  </View>
 );
};
export { CustomLoading };

import React from 'react';
import { View } from 'react-native';
import { CustomText } from './CustomText';
import { CustomPhoto } from './CustomPhoto';
import { CustomLoadingProps } from '@/types';
import { images, typesSizeTextStyle, typesText } from '@/constants';

const CustomLoading = (props: CustomLoadingProps) => {
 return (
  <View className={`p-4 flex-1 flex-col justify-center items-stretch bg-sky-100`}>
   <View className="flex flex-col justify-center items-center bg-white space-y-2 px-4 py-8 rounded-xl">
    <CustomText
     text={props.message.title as string}
     variant={typesText.primary}
     size={typesSizeTextStyle['2xl']}
    />
    <View></View>
    <CustomText
     text={props.message.text as string}
     variant={typesText.seccundary}
     size={typesSizeTextStyle['xl']}
    />
    <View className="flex-row- justify-center items-center">
     <CustomPhoto image={images.load} />
    </View>
   </View>
  </View>
 );
};
export { CustomLoading };

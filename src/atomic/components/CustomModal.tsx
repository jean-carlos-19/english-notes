import React from 'react';
import { Text, View } from 'react-native';
import { CustomModalProps } from '@/types';
import { CustomButton, CustomPhoto } from '@/atomic/elements';
import { images, typesButtonConst } from '@/constants';

const CustomModal = (props: CustomModalProps) => {
 const { setting } = props;
 const { handlerHidde, message, isActivate, type, name } = setting;

 if (!isActivate) return null;

 return (
  <View className="w-full h-full p-4 flex-col justify-center items-stretch  bg-sky-100">
   {/* body modal */}
   <View className="bg-white space-y-4 px-4 py-8 rounded-xl">
    {/* photo modal */}
    <View className="flex justify-center items-center">
     <CustomPhoto image={type === 'error' ? images.warning : images.success} />
    </View>
    {/* title and message modal */}
    <Text className="text-gray-700 font-semibold text-2xl text-center">{message?.title}</Text>
    <Text className="text-gray-700 font-normal text-xl text-center">
     {message?.text}
     <Text className="text-gray-700 text-xl text-center font-semibold"> {name} </Text>
    </Text>
    {/* Button modal */}
    <View></View>
    <CustomButton
     type={typesButtonConst.default}
     isDisable={false}
     stylyText={'text-center font-semibold text-xl text-slate-100'}
     text={'Ok'}
     handlerPress={handlerHidde}
     stylyButton={'p-4 rounded-xl bg-blue-500'}
    />
   </View>
  </View>
 );
};

export { CustomModal };

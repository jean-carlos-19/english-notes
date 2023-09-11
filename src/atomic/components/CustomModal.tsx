import React from 'react';
import { Text, View } from 'react-native';
import { CustomModalProps } from '@/types';
import { CustomButton, CustomPhoto } from '@/atomic/elements';
import { imagesConst, typesButtonConst } from '@/constants';

const CustomModal = (props: CustomModalProps) => {
 const { setting } = props;
 const { handlerHidde, message, isActivate, type, name } = setting;

 if (!isActivate) return null;

 return (
  <View className="w-full h-full p-4 flex-col justify-center items-stretch space-y-4 bg-slate-100">
   <View className="flex justify-center items-center">
    <CustomPhoto image={type === 'error' ? imagesConst.warning : imagesConst.success} />
   </View>
   <Text className="text-gray-700 font-semibold text-2xl text-center">{message?.title}</Text>
   <Text className="text-gray-700 font-normal text-xl text-center">
    {message?.text}
    <Text className="text-gray-700 text-xl text-center font-semibold"> {name} </Text>
   </Text>
   <View>
    <CustomButton
     type={typesButtonConst.default}
     isDisable={true}
     stylyText={'text-center font-semibold text-xl text-gray-700'}
     text={'Ok'}
     handlerPress={handlerHidde}
     stylyButton={'p-4 rounded-xl bg-white'}
    />
   </View>
  </View>
 );
};

export { CustomModal };

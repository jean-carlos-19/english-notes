import { CustomDialogProps } from '@/types';
import React from 'react';
import { Text, View } from 'react-native';
import { CustomButton } from './CustomButton';
import { typesButtonConst } from '@/constants';

const CustomDialog = (props: CustomDialogProps) => {
 const { setting } = props;
 const { isActivate, content, handlerVerify } = setting;

 if (!isActivate) return null;

 return (
  <View className="p-4 absolute top-0 z-10 w-full h-full bg-white flex-row items-center justify-stretch">
   <View className="p-4 flex-1 space-y-4 bg-slate-100 rounded-xl">
    <Text className="text-2xl font-semibold text-center text-slate-800">{content?.message.title}</Text>
    <Text className="text-xl text-slate-800 text-center">
     {' '}
     {content?.message.text} <Text className="text-xl font-semibold text-center text-slate-800"> {content?.name} </Text>{' '}
    </Text>

    <View>
     <CustomButton
      type={typesButtonConst.default}
      isDisable={true}
      stylyButton={'p-4 rounded-xl bg-blue-400'}
      stylyText={'text-xl text-slate-200 text-center font-semibold'}
      text={'Si'}
      handlerPress={() => handlerVerify(true)}
     />
    </View>

    <View>
     <CustomButton
      type={typesButtonConst.default}
      isDisable={true}
      stylyButton={'p-4 rounded-xl bg-slate-300'}
      stylyText={'text-xl text-slate-500 text-center font-semibold'}
      text={'No'}
      handlerPress={() => handlerVerify(false)}
     />
    </View>
   </View>
  </View>
 );
};

export { CustomDialog };

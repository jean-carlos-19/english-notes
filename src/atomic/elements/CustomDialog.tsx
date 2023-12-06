import { CustomDialogProps } from '@/types';
import React from 'react';
import { Text, View } from 'react-native';
import { CustomButton } from './CustomButton';
import { typesButton, typesSizeTextStyle, typesText } from '@/constants';
import { CustomText } from './CustomText';

const CustomDialog = (props: CustomDialogProps) => {
 if (!props.setting.isActivate) return null;

 return (
  <View className="p-4 absolute top-0 z-10 w-full h-full bg-sky-100 flex-row items-center justify-stretch">
   {/* body dialog */}
   <View className="px-4 py-8 flex-1 space-y-4 bg-white rounded-xl">
    {/* title and message dialog */}
    <CustomText
     variant={typesText.seccundary}
     size={typesSizeTextStyle['2xl']}
     text={props.setting.content?.message.title as string}
    />

    <CustomText
     variant={typesText.seccundary}
     size={typesSizeTextStyle['normal']}
     text={props.setting.content?.message.text as string}
    />
    {/* button primary dialog */}
    <View></View>
    <CustomButton
     type={typesButton.default}
     isDisable={false}
     stylyButton={'p-4 rounded-xl bg-blue-500'}
     stylyText={'text-xl text-slate-200 text-center font-semibold'}
     text={'Yes'}
     handlerPress={() => props.setting.handlerVerify(true)}
    />
    {/* button secundary dialog */}
    <View></View>
    <CustomButton
     type={typesButton.default}
     isDisable={false}
     stylyButton={'p-4 rounded-xl bg-slate-200'}
     stylyText={'text-xl text-slate-600 text-center font-semibold'}
     text={'No'}
     handlerPress={() => props.setting.handlerVerify(false)}
    />
   </View>
  </View>
 );
};

export { CustomDialog };

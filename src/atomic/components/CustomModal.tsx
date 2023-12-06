import React from 'react';
import { View } from 'react-native';
import { CustomModalProps } from '@/types';
import { images, typesButton, typesSizeTextStyle, typesText } from '@/constants';
import { CustomButton, CustomPhoto, CustomText } from '@/atomic/elements';

const CustomModal = (props: CustomModalProps) => {
 if (!props.setting.isActivate) return null;

 return (
  <View className="w-full h-full p-4 flex-col justify-center items-stretch  bg-sky-100">
   {/* body modal */}
   <View className="bg-white space-y-4 px-4 py-8 rounded-xl">
    {/* photo modal */}
    <View className="flex justify-center items-center">
     <CustomPhoto image={props.setting.type === 'error' ? images.warning : images.success} />
    </View>
    {/* title and message modal */}
    <CustomText
     variant={typesText.seccundary}
     size={typesSizeTextStyle['2xl']}
     text={props.setting.message?.title as string}
    />
    <CustomText
     variant={typesText.seccundary}
     size={typesSizeTextStyle['xl']}
     text={props.setting.message?.text as string}
    />
    {/* Button modal */}
    <View></View>
    <CustomButton
     type={typesButton.default}
     isDisable={false}
     stylyText={'text-center font-semibold text-xl text-slate-100'}
     text={'Ok'}
     handlerPress={props.setting.handlerHidde}
     stylyButton={'p-4 rounded-xl bg-blue-500'}
    />
   </View>
  </View>
 );
};

export { CustomModal };

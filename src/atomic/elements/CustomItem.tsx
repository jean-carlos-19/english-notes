import { useSpeech } from '@/hooks';
import { types } from '@/constants';
import React, { useState } from 'react';
import { CustomItemProps } from '@/types';
import { CustomButton } from './CustomButton';
import { TouchableOpacity, View } from 'react-native';
import { CustomText } from './CustomText';

const CustomItem = (props: CustomItemProps) => {
 const { isLoading, handlerSpeak } = useSpeech();
 const [isVisible, setIsVisible] = useState<boolean>(false);

 const handlerVisible = () => setIsVisible(!isVisible);

 return (
  <TouchableOpacity
   className={`p-4 bg-blue-100 rounded-xl mt-4 flex-col justify-start items-stretch space-y-4`}
   onPress={() => props.goScreen && props.goScreen(props.id, props.title)}
  >
   <View className="flex-row justify-between items-center space-x-2 ">
    <View className="basis-4/5">
     <CustomText variant={types.text.primary} size={types.styleText.xl} text={props.title} />
     {props.text && (
      <CustomText
       variant={types.text.seccundary}
       size={types.styleText.normal}
       text={props.text as string}
      />
     )}
    </View>
    <View></View>
    <CustomButton
     type={types.button.icon}
     icon={isVisible ? types.icon.eye : types.icon.EyeSlashIcon}
     handlerPress={handlerVisible}
    />
   </View>

   {isVisible && (
    <View className="flex-row justify-end items-stretch space-x-4">
     {/* buttons edit o eliminate */}
     {props.icons.map((icon, i) => (
      <View key={i}>
       <CustomButton
        stylyButton={'p-2 bg-white rounded-xl'}
        type={types.button.icon}
        icon={icon}
        handlerPress={() => {
         props.handlerEdit && icon === types.icon.edit && props.handlerEdit(props.id, props.title);
         props.handlerEliminate &&
          icon === types.icon.elimited &&
          props.handlerEliminate(props.id, props.title);
         props.handlerEnable &&
          icon === types.icon.enable &&
          props.handlerEnable(props.id, props.title);
        }}
       />
      </View>
     ))}

     {/* button  voice*/}
     <CustomButton
      type={types.button.icon}
      isDisable={isLoading}
      icon={isLoading ? types.icon.clock : types.icon.MicrophoneIcon}
      stylyButton={'p-2 ml-2 bg-white rounded-xl'}
      handlerPress={() => {
       handlerSpeak(props.title);
      }}
     />
    </View>
   )}
  </TouchableOpacity>
 );
};
export { CustomItem };

import { useSpeech } from '@/hooks';
import React, { useState } from 'react';
import { CustomItemProps } from '@/types';
import { CustomButton } from './CustomButton';
import { typesButton, typesIcon, typesSizeTextStyle, typesText } from '@/constants';
import { Text, TouchableOpacity, View } from 'react-native';
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
     <CustomText variant={typesText.primary} size={typesSizeTextStyle.xl} text={props.title} />
     {props.text && (
      <CustomText
       variant={typesText.seccundary}
       size={typesSizeTextStyle.normal}
       text={props.text as string}
      />
     )}
    </View>
    <View></View>
    <CustomButton
     type={typesButton.icon}
     icon={isVisible ? typesIcon.eye : typesIcon.EyeSlashIcon}
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
        type={typesButton.icon}
        icon={icon}
        handlerPress={() => {
         props.handlerEdit && icon === typesIcon.edit && props.handlerEdit(props.id, props.title);
         props.handlerEliminate &&
          icon === typesIcon.elimited &&
          props.handlerEliminate(props.id, props.title);
         props.handlerEnable &&
          icon === typesIcon.enable &&
          props.handlerEnable(props.id, props.title);
        }}
       />
      </View>
     ))}

     {/* button  voice*/}
     <CustomButton
      type={typesButton.icon}
      isDisable={isLoading}
      icon={isLoading ? typesIcon.clock : typesIcon.MicrophoneIcon}
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

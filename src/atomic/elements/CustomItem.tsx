import { CustomItemProps } from '@/types';
import React, { useState } from 'react';
import { CustomButton } from './CustomButton';
import { Text, TouchableOpacity, View } from 'react-native';
import { typesButtonConst, typesIconConst } from '@/constants';
import { useSpeech } from '@/hooks';
import { theme } from '../theme';

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
    <View className='basis-4/5'>
    <Text className={"text-xl text-blue-900 font-semibold"}>{props.title}</Text>
    {props.text && <Text className={"text-gray-600 font-semibold"}>{props.text}</Text>}
    </View>
    <View></View>
    <CustomButton
     type={typesButtonConst.icon}
     icon={{
      type: isVisible ? typesIconConst.eye : typesIconConst.EyeSlashIcon,
      color: theme.gray,
      size: 30,
      strokeWidth: 5,
     }}
     handlerPress={handlerVisible}
    />
   </View>

   {isVisible && (
    <View className="flex-row justify-end items-stretch space-x-4">
     {/* buttons edit o eliminate */}
     {props.buttons.map((button, i) => (
      <View key={i}>
       <CustomButton
        stylyButton={button.stylyButton}
        type={button.type}
        icon={button.icon}
        handlerPress={() => {
         props.handlerEdit &&
          button.icon?.type === typesIconConst.edit &&
          props.handlerEdit(props.id, props.title);
         props.handlerEliminate &&
          button.icon?.type === typesIconConst.elimited &&
          props.handlerEliminate(props.id, props.title);
         props.handlerEnable &&
          button.icon?.type === typesIconConst.enable &&
          props.handlerEnable(props.id, props.title);
        }}
       />
      </View>
     ))}

     {/* button  voice*/}
     <CustomButton
      type={typesButtonConst.icon}
      isDisable={isLoading}
      icon={{
       type: isLoading ? typesIconConst.clock : typesIconConst.MicrophoneIcon,
       color: theme.blue,
       size: 25,
       strokeWidth: 2,
      }}
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

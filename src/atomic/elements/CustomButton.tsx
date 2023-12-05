import React from 'react';
import { Icon } from './Icon';
import { typesButton } from '@/constants';
import { CustomButtonProps } from '@/types';
import { TouchableOpacity, Text, View } from 'react-native';

const CustomButton = (props: CustomButtonProps) => {
 /* default button  */
 if (props.type === typesButton.default)
  return (
   <TouchableOpacity
    className={props.isDisable ? 'p-4 bg-gray-400 rounded-xl' : props.stylyButton}
    disabled={props.isDisable}
    onPress={props.handlerPress}
   >
    <Text className={props.stylyText}>{props.text}</Text>
    {props.textSecundary && <Text className={props.stylyTextSecundary}>{props.textSecundary}</Text>}
   </TouchableOpacity>
  );
 /* icon button */
 if (props.type === typesButton.icon && props.icon)
  return (
   <TouchableOpacity
    className={props.stylyButton}
    onPress={props.handlerPress}
    disabled={props.isDisable}
   >
    <Icon icon={props.icon} />
   </TouchableOpacity>
  );
 /* icon and text of the button */
 if (props.type === typesButton.iconText && props.icon)
  return (
   <TouchableOpacity
    className={props.stylyButton}
    onPress={props.handlerPress}
    disabled={props.isDisable}
   >
    <Text className={props.stylyText}>{props.text}</Text>
    <View></View>
    <Icon icon={props.icon} />
   </TouchableOpacity>
  );
 return null;
};

export { CustomButton };

import React from 'react';
import { Icon } from './Icon';
import { CustomButtonProps } from '@/types';
import { typesButtonConst } from '@/constants';
import { TouchableOpacity, Text, View } from 'react-native';

const CustomButton = (props: CustomButtonProps) => {
 if (props.type === typesButtonConst.default)
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
 if (
  props.type === typesButtonConst.icon &&
  props.icon?.type &&
  props.icon.size &&
  props.icon.size &&
  props.icon.strokeWidth
 )
  return (
   <TouchableOpacity
    className={props.stylyButton}
    onPress={props.handlerPress}
    disabled={props.isDisable}
   >
    <Icon
     type={props.icon.type}
     color={props.icon.color}
     size={props.icon.size}
     strokeWidth={props.icon.strokeWidth}
    />
   </TouchableOpacity>
  );
 if (
  props.type === typesButtonConst.iconText &&
  props.icon?.type &&
  props.icon.size &&
  props.icon.size &&
  props.icon.strokeWidth
 )
  return (
   <TouchableOpacity
    className={props.stylyButton}
    onPress={props.handlerPress}
    disabled={props.isDisable}
   >
    <Text className={props.stylyText}>{props.text}</Text>
    <View></View>
    <Icon
     type={props.icon.type}
     color={props.icon.color}
     size={props.icon.size}
     strokeWidth={props.icon.strokeWidth}
    />
   </TouchableOpacity>
  );
 return null;
};

export { CustomButton };

import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { CustomButtonProps } from '@/types';
import { Icon } from './Icon';
import { typesButtonConst } from '@/constants';

const CustomButton = (props: CustomButtonProps) => {
 const { stylyButton, stylyText, isDisable, text, type, icon, handlerPress } = props;

 if (type === typesButtonConst.default)
  return (
   <TouchableOpacity
    className={isDisable ? 'p-4 bg-gray-400 rounded-xl' : stylyButton}
    disabled={isDisable}
    onPress={handlerPress}
   >
    <Text className={stylyText}>{text}</Text>
   </TouchableOpacity>
  );
 if (type === typesButtonConst.icon && icon?.type && icon.size && icon.size && icon.strokeWidth)
  return (
   <TouchableOpacity className={stylyButton} onPress={handlerPress}>
    <Icon type={icon.type} color={icon.color} size={icon.size} strokeWidth={icon.strokeWidth} />
   </TouchableOpacity>
  );
 if (type === typesButtonConst.iconText && icon?.type && icon.size && icon.size && icon.strokeWidth)
  return (
   <TouchableOpacity className={stylyButton} onPress={handlerPress}>
    <Text className={stylyText}>{text}</Text>
    <View></View>
    <Icon type={icon.type} color={icon.color} size={icon.size} strokeWidth={icon.strokeWidth} />
   </TouchableOpacity>
  );
 return null;
};

export { CustomButton };

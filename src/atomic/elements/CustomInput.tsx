import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { CustomInputProps } from '@/types';

const CustomInput = (props: CustomInputProps) => {
 const {
  className,
  styleLabel,
  stylyText,
  background,
  value,
  label,
  placeholder,
  isEditable,
  handlerChange,
  hanhandlerBlur,
 } = props;
 return (
  <View className={className} style={{ backgroundColor: background }}>
   <Text className={`${styleLabel}`}>{label}</Text>

   {!isEditable ? (
    <Text className={stylyText}> {value} </Text>
   ) : (
    <TextInput
     multiline
     value={value?.toString()}
     editable={isEditable}
     className={stylyText}
     placeholder={placeholder}
     onChangeText={handlerChange}
     onBlur={hanhandlerBlur}
    />
   )}
  </View>
 );
};

export { CustomInput };

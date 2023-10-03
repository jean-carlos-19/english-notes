import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { CustomInputProps } from '@/types';

const CustomInput = (props: CustomInputProps) => {
 return (
  <View className={props.className} style={{ backgroundColor: props.background }}>
   <Text className={`${props.styleLabel}`}>{props.label}</Text>

   {!props.isEditable ? (
    <Text className={props.stylyText}> {props.value} </Text>
   ) : (
    <TextInput
     multiline
     value={props.value?.toString()}
     editable={props.isEditable}
     className={props.stylyText}
     placeholder={props.placeholder}
     onChangeText={props.handlerChange}
     onBlur={props.hanhandlerBlur}
    />
   )}
  </View>
 );
};

export { CustomInput };

import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { CustomInputProps } from '@/types';

const CustomInput = (props: CustomInputProps) => {
 return (
  <View className={'flex-col justify-start items-stretch space-y-4 '}>
   <Text className="text-slate-500 text-xl">{props.label}</Text>

   {!props.isEditable ? (
    <Text className={'p-4 bg-white rounded-xl border-slate-200 border-4 text-xl text-gray-600'}>
     {' '}
     {props.value}{' '}
    </Text>
   ) : (
    <TextInput
     multiline
     value={props.value?.toString()}
     editable={props.isEditable}
     className={'p-4 bg-white rounded-xl border-slate-200 border-4 text-xl text-gray-600'}
     placeholder={props.placeholder}
     onChangeText={props.handlerChange}
     onBlur={props.hanhandlerBlur}
    />
   )}
  </View>
 );
};

export { CustomInput };

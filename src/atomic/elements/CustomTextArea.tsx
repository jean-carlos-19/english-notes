import React from 'react';
import { CustomInputProps } from '@/types';
import { Text, TextInput, View } from 'react-native';

const CustomTextArea = (props: CustomInputProps) => {
 return (
  <>
   <View className={props.className} style={{ backgroundColor: props.background }}>
    <Text className={`${props.styleLabel}`}>{props.label}</Text>

    {!props.isEditable ? (
     <Text className={props.stylyText}> {props.value} </Text>
    ) : (
     <View className="bg-white border-slate-200 border-4 rounded-xl flex-row justify-between items-center p-4">
      <TextInput
       multiline
       value={props.value?.toString()}
       editable={props.isEditable}
       className={props.stylyText}
       placeholder={props.placeholder}
       onChangeText={props.handlerChange}
       onBlur={props.hanhandlerBlur}
      />
     </View>
    )}
   </View>
  </>
 );
};

export { CustomTextArea };

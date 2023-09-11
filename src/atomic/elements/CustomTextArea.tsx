import React from 'react';
import { CustomInputProps } from '@/types';
import { Text, TextInput, View } from 'react-native';

const CustomTextArea = (props: CustomInputProps) => {
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
  <>
   <View className={className} style={{ backgroundColor: background }}>
    <Text className={`${styleLabel}`}>{label}</Text>

    {!isEditable ? (
     <Text className={stylyText}> {value} </Text>
    ) : (
     <View className="bg-white border-slate-200 border-4 rounded-xl flex-row justify-between items-center p-4">
      <TextInput
       multiline
       value={value?.toString()}
       editable={isEditable}
       className={stylyText}
       placeholder={placeholder}
       onChangeText={handlerChange}
       onBlur={hanhandlerBlur}
      />
     </View>
    )}
   </View>
  </>
 );
};

export { CustomTextArea };

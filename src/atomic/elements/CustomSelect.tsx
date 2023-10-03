import React from 'react';
import { Text, View } from 'react-native';
import { CustomSelectProps } from '@/types';
import { Picker } from '@react-native-picker/picker';

const CustomSelect = (props: CustomSelectProps) => {
 return (
  <View className="flex-col justify-start items-stretch space-y-2">
   <Text className={props.stylyLabel}> {props.label} </Text>
   <View className={props.stylySelect}>
    <Picker
     selectedValue={!props.value ? 'No seleccionado' : props.value}
     onValueChange={(itemValue) => props.handlerChange(props.id, itemValue)}
    >
     {props.data?.map((item, i) => (
      <Picker.Item key={i} label={item.name} value={item.name} style={{ fontSize: 20 }} />
     ))}
     {!props.value ? (
      <Picker.Item label={'No seleccionado'} value={'No seleccionado'} style={{ fontSize: 20 }} />
     ) : null}
    </Picker>
   </View>
  </View>
 );
};

export { CustomSelect };

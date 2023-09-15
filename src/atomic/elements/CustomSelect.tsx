import React from 'react';
import { CustomSelectProps } from '@/types';
import { Picker } from '@react-native-picker/picker';
import { Text, View } from 'react-native';

const CustomSelect = (props: CustomSelectProps) => {
 const { stylyLabel, stylySelect, label, data, value, id, handlerChange } = props;
 return (
  <View className="flex-col justify-start items-stretch space-y-2">
   <Text className={stylyLabel}> {label} </Text>
   <View className={stylySelect}>
    <Picker
     selectedValue={!value ? 'No seleccionado' : value}
     onValueChange={(itemValue) => handlerChange(id, itemValue)}
    >
     {data?.map((item, i) => (
      <Picker.Item key={i} label={item.name} value={item.name} style={{ fontSize: 20 }} />
     ))}
     {!value ? (
      <Picker.Item label={'No seleccionado'} value={'No seleccionado'} style={{ fontSize: 20 }} />
     ) : null}
    </Picker>
   </View>
  </View>
 );
};

export { CustomSelect };

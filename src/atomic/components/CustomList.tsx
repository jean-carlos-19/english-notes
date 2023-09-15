import { CustomListProps } from '@/types';
import React from 'react';
import { Text, View } from 'react-native';
import { CustomItem } from '../elements';

const CustomList = (props: CustomListProps) => {
 const { title, buttons, list, handlerItem, handlerEdit, handlerEliminate, handlerEnable } = props;
 return (
  <View className="bg-blue-400 p-4 rounded-xl">
   <Text className="text-xl font-semibold text-slate-100 text-center"> {title} </Text>
   {list?.map((item, i) => (
    <CustomItem
     key={i}
     id={item?.idCategory!}
     title={item.name}
     buttons={buttons}
     handlerItem={handlerItem}
     handlerEdit={handlerEdit}
     handlerEliminate={handlerEliminate}
     handlerEnable={handlerEnable}
    />
   ))}
  </View>
 );
};

export { CustomList };

import React from 'react';
import { Text, View } from 'react-native';
import { CustomListProps } from '@/types';
import { CustomItem } from '@/atomic/elements';
import { CustomSearchForm } from './CustomSearchForm';
import { ModelCategory } from '@/models';

const CustomList = (props: CustomListProps) => {
 const {
  title,
  buttons,
  list,
  searchForm,
  handlerItem,
  handlerEdit,
  handlerEliminate,
  handlerEnable,
 } = props;
 return (
  <View className="bg-white p-4 rounded-xl space-y-4">
    {/* title list */}
   <Text className="text-xl font-semibold text-blue-900 text-center"> {title} </Text>
   <View></View>
   {/* Search form */}
   <CustomSearchForm
    entity={searchForm.entity}
    validationSchema={searchForm.validationSchema}
    handlerSubmit={searchForm.handlerSubmit}
   />
   {/* items */}
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

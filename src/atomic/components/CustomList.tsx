import React from 'react';
import { images, data } from '@/constants';
import { CustomListProps } from '@/types';
import { ScrollView, Text, View } from 'react-native';
import { CustomSearchForm } from '@/atomic/components';
import { CustomItem, CustomPhoto } from '@/atomic/elements';

const content = data.lists;

const CustomList = (props: CustomListProps) => {
 return (
  <View className="flex-1 bg-white p-4 rounded-xl space-y-4">
   {/* title list */}
   <Text className="text-xl font-semibold text-blue-900 text-center"> {props.title} </Text>
   <View></View>
   {/* Search form */}
   {props.searchForm && (
    <CustomSearchForm
     entity={props.searchForm.entity}
     validationSchema={props.searchForm.validationSchema}
     handlerSubmit={props.searchForm.handlerSubmit}
    />
   )}
   {props.isLoading ? (
    <View className="flex-1 flex-row items-start justify-center">
     <Text className="text-xl font-semibold text-blue-900 text-center">
      {' '}
      {content.loading.text}{' '}
     </Text>
    </View>
   ) : props.items === undefined || props.items.length <= 0 ? (
    <View className="flex-1 flex-row items-center justify-center">
     <CustomPhoto image={images.empty} />
    </View>
   ) : (
    <ScrollView>
     {props.items?.map((item, i) => (
      <CustomItem
       key={i}
       id={item?.id}
       title={item.name}
       text={item.translation}
       icons={props.icons}
       goScreen={props.goScreen}
       handlerItem={props.handlerItem}
       handlerEdit={props.handlerEdit}
       handlerEnable={props.handlerEnable}
       handlerEliminate={props.handlerEliminate}
      />
     ))}
    </ScrollView>
   )}
   {/* items */}
   {}
  </View>
 );
};

export { CustomList };

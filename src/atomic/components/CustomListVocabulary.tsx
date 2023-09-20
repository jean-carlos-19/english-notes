import React from 'react';
import { Text, View } from 'react-native';
import { CustomLisVocabularytProps } from '@/types';
import { CustomItem, CustomPhoto } from '@/atomic/elements';
import { CustomSearchForm } from './CustomSearchForm';
import { ModelCategory } from '@/models';
import { images } from '@/constants';

const CustomListVocabulary = (props: CustomLisVocabularytProps) => {
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
  <View className="flex-1 bg-white p-4 rounded-xl space-y-4">
   {/* title list */}
   <Text className="text-xl font-semibold text-blue-900 text-center"> {title} </Text>
   <View></View>
   {/* Search form */}
   {/* <CustomSearchForm
    entity={searchForm.entity}
    validationSchema={searchForm.validationSchema}
    handlerSubmit={searchForm.handlerSubmit}
   /> */}
   {/* items */}
   {list === undefined || list.length <= 0 ? (
    <View className="flex-1 flex-row items-center justify-center">
     <CustomPhoto image={images.empty} />
    </View>
   ) : (
    list?.map((item, i) => (
     <CustomItem
      key={i}
      id={item?.idVocabulary!}
      title={item.vocabulary}
      buttons={buttons}
      handlerItem={handlerItem}
      handlerEdit={handlerEdit}
      handlerEliminate={handlerEliminate}
      handlerEnable={handlerEnable}
     />
    ))
   )}
  </View>
 );
};

export { CustomListVocabulary };

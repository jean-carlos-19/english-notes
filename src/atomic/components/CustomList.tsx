import React from 'react';
import { usePdf } from '@/hooks';
import { theme } from '@/atomic/theme';
import { CustomListProps } from '@/types';
import { ScrollView, View } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { CustomSearchForm } from '@/atomic/components';
import { images, data, typesText, typesSizeTextStyle, typesButton, typesIcon } from '@/constants';
import { CustomButton, CustomItem, CustomPhoto, CustomText } from '@/atomic/elements';

const content = data.lists;

const CustomList = (props: CustomListProps) => {
 const { handlerGeneratePdfCategory } = usePdf();
 return (
  <View className="flex-1 flex flex-col justify-start items-stretch bg-white p-4 rounded-xl space-y-4">
   <View className="flex flex-row justify-between items-center">
    {/* title list */}
    <CustomText variant={typesText.primary} size={typesSizeTextStyle.xl} text={props.title} />
    {/* pdf button */}
    <CustomButton
     type={typesButton.icon}
     icon={typesIcon.document}
     handlerPress={() => handlerGeneratePdfCategory(props.items, props.name)}
    />
   </View>
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
    <View className="flex-1 flex-col items-center justify-start space-y-4">
     <CustomText
      variant={typesText.primary}
      size={typesSizeTextStyle.xl}
      text={content.loading.text}
     />
     <View></View>
     <ActivityIndicator size={75} color={theme.blue} />
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
  </View>
 );
};

export { CustomList };

import React from 'react';
import { Text, View } from 'react-native';
import { CommunityItem, CustomPhoto } from '@/atomic/elements';
import { CommunityListProps } from '@/types';
import { imagesConst } from '@/constants';

const CommunityList = (props: CommunityListProps) => {
 const { data, title, button, handlerItem } = props;

 return (
  <View className="flex-1 p-4 bg-slate-100 rounded-xl space-y-4 flex-col justify-start items-stretch">
   <Text className="text-center text-slate-500 text-xl font-semibold w-[70%] self-center">{title}</Text>
   {data === undefined || data.length <= 0 ? (
    <View className="flex-1 flex-row items-center justify-center">
     <CustomPhoto image={imagesConst.empty} />
    </View>
   ) : (
    data.map((item, i) => (
     <CommunityItem key={i} title={item.name} id={item.id} button={button} handlerItem={handlerItem} />
    ))
   )}
  </View>
 );
};

export { CommunityList };

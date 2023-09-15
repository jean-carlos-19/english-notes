import { CustomItemProps } from '@/types';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { CustomButton } from './CustomButton';
import { View } from 'react-native';
import { typesIconConst } from '@/constants';
import { useNavigation } from '@react-navigation/native';

const CustomItem = (props: CustomItemProps) => {
 const { title, id, buttons, handlerEdit, handlerEliminate, handlerEnable } = props;
 const navigation = useNavigation();

 return (
  <TouchableOpacity
   className={`p-4 bg-white rounded-xl mt-4 flex-row justify-start items-stretch space-x-2`}
   onPress={() => navigation.navigate('Vocabulary', { category: title })}
  >
   <Text className="text-xl text-gray-700 flex-1"> {title} </Text>
   {buttons.map((button, i) => (
    <View key={i}>
     <CustomButton
      stylyButton={button.stylyButton}
      type={button.type}
      icon={button.icon}
      handlerPress={() => {
       handlerEdit && button.icon?.type === typesIconConst.edit && handlerEdit(id, title);
       handlerEliminate &&
        button.icon?.type === typesIconConst.elimited &&
        handlerEliminate(id, title);
       handlerEnable && button.icon?.type === typesIconConst.enable && handlerEnable(id, title);
      }}
     />
    </View>
   ))}
  </TouchableOpacity>
 );
};
export { CustomItem };

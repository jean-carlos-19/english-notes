import { CustomItemProps } from '@/types';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { CustomButton } from './CustomButton';
import { View } from 'react-native';
import { typesButtonConst, typesIconConst } from '@/constants';
import { useNavigation } from '@react-navigation/native';
import { useSpeech } from '@/hooks';
import { theme } from '../theme';

const CustomItem = (props: CustomItemProps) => {
 const { title, id, buttons, handlerEdit, handlerEliminate, handlerEnable } = props;
 const navigation = useNavigation();
 const { handlerSpeak } = useSpeech();
 const goScreenCategory = (category:string)=>navigation.navigate('Vocabulary', { category })

 return (
  <TouchableOpacity
   className={`p-4 bg-slate-100 rounded-xl mt-4 flex-row justify-start items-center space-x-2`}
   onPress={() => goScreenCategory(title)}
  >
    {/* text item */}
   <Text className="text-xl text-blue-900 font-semibold flex-1"> {title} </Text>
   {/* button  voice*/}
   <CustomButton
    type={typesButtonConst.icon}
    icon={{
     type: typesIconConst.MicrophoneIcon,
     color: theme.blue,
     size: 25,
     strokeWidth: 2,
    }}
    stylyButton={'p-2 ml-2 bg-slate-200 rounded-xl'}
    handlerPress={() => {
     handlerSpeak(title);
    }}
   />
   {/* buttons edit o eliminate */}
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

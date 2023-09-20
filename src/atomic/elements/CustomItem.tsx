import { CustomItemProps } from '@/types';
import React, { useState } from 'react';
import { CustomButton } from './CustomButton';
import { View } from 'react-native';
import { typesButtonConst, typesIconConst } from '@/constants';
import { useSpeech } from '@/hooks';
import { theme } from '../theme';

const CustomItem = (props: CustomItemProps) => {
 const { title, id, buttons, handlerEdit, handlerEliminate, handlerEnable, goScreen } = props;
 const { handlerSpeak } = useSpeech();
 const [isVisible, setIsVisible] = useState<boolean>(false);

 const handlerVisible = () => setIsVisible(!isVisible);
 return (
  <View
   className={`p-4 bg-blue-100 rounded-xl mt-4 flex-col justify-start items-stretch space-y-4`}
  >
   {/* text item onPress={() => goScreenCategory(title)} */}
   <View className="flex-row justify-between">
    <CustomButton
     type={'default'}
     stylyButton=""
     stylyText="text-xl text-blue-900 font-semibold"
     text={title}
     handlerPress={() => goScreen && goScreen(id, title)}
    />

    <CustomButton
     stylyButton={''}
     type={typesButtonConst.icon}
     icon={{
      type: isVisible ? typesIconConst.eye : typesIconConst.EyeSlashIcon,
      color: theme.gray,
      size: 30,
      strokeWidth: 5,
     }}
     handlerPress={handlerVisible}
    />
   </View>

   {isVisible && (
    <View className="flex-row justify-end items-stretch space-x-4">
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

     {/* button  voice*/}
     <CustomButton
      type={typesButtonConst.icon}
      icon={{
       type: typesIconConst.MicrophoneIcon,
       color: theme.blue,
       size: 25,
       strokeWidth: 2,
      }}
      stylyButton={'p-2 ml-2 bg-white rounded-xl'}
      handlerPress={() => {
       handlerSpeak(title);
      }}
     />
    </View>
   )}
  </View>
 );
};
export { CustomItem };

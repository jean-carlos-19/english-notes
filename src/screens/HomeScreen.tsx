import React from 'react';
import { typesButtonConst } from '@/constants';
import { CustomButton } from '@/atomic/elements';
import { useNavigation } from '@react-navigation/native';
import { View, StatusBar } from 'react-native';

const HomeScreen = () => {
 const navigation = useNavigation();

 const goScreenCategory = () => navigation.navigate('Category');

 const ContentScreen = Object.freeze({
  category: 'Vocabulary',
  verb: 'Verbs',
  phrasalVerb: 'Phrasal Verbs',
  idioms: 'Idioms',
  conversation: 'Conversation',
 });
 return (
  <>
   <StatusBar backgroundColor={'rgb(224 242 254)'} barStyle={'dark-content'} />
   <View className="p-4 bg-sky-100 w-full h-full flex-col justify-center items-stretch space-y-8">
    {/* button screen vocabulary */}
    <CustomButton
     isDisable={false}
     type={typesButtonConst.default}
     stylyButton={`p-4 bg-blue-500 rounded-xl`}
     stylyText="text-xl text-sky-100 font-bold text-center"
     text={ContentScreen.category}
     handlerPress={goScreenCategory}
    />
   </View>
  </>
 );
};

export { HomeScreen };

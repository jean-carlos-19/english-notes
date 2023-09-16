import React from 'react';
import { View, StatusBar, ScrollView } from 'react-native';
import { CustomButton } from '@/atomic/elements';
import { useNavigation } from '@react-navigation/native';
import { typesButtonConst } from '@/constants';

const HomeScreen = () => {
 const navigation = useNavigation();

 const goScreenCategory = () => navigation.navigate('Category');
 const goScreenVerbs = () => navigation.navigate('Verbs');
 const goScreenPharsalVerbs = () => navigation.navigate('PhrasalVerbs');
 const goScreenIdioms = () => navigation.navigate('Idioms');
 const goScreenConversation = () => navigation.navigate('Conversation');

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
    <View></View>
     {/* button screen verbs */}
    <CustomButton
     isDisable={false}
     stylyButton={`p-4 bg-blue-500 rounded-xl`}
     stylyText="text-xl text-sky-100 font-bold text-center"
     type={typesButtonConst.default}
     text={ContentScreen.verb}
     handlerPress={goScreenVerbs}
    />
    <View></View>
     {/* button screen phrasal verbs */}
    <CustomButton
     isDisable={false}
     type={typesButtonConst.default}
     stylyButton={`p-4 bg-blue-500 rounded-xl`}
     stylyText="text-xl text-sky-100 font-bold text-center"
     text={ContentScreen.phrasalVerb}
     handlerPress={goScreenPharsalVerbs}
    />
    <View></View>
     {/* button screen idioms */}
    <CustomButton
     isDisable={false}
     type={typesButtonConst.default}
     stylyButton={`p-4 bg-blue-500 rounded-xl`}
     stylyText="text-xl text-sky-100 font-bold text-center"
     text={ContentScreen.idioms}
     handlerPress={goScreenIdioms}
    />
    <View></View>
     {/* button screen conversation */}
    <CustomButton
     isDisable={false}
     type={typesButtonConst.default}
     stylyButton={`p-4 bg-blue-500 rounded-xl`}
     stylyText="text-xl text-sky-100 font-bold text-center"
     text={ContentScreen.conversation}
     handlerPress={goScreenConversation}
    />
   </View>
  </>
 );
};

export { HomeScreen };

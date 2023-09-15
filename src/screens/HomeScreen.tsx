import React from 'react';
import { View, StatusBar, ScrollView } from 'react-native';
import { CustomButton } from '@/atomic/elements';
import { useNavigation } from '@react-navigation/native';
import { typesButtonConst } from '@/constants';

const HomeScreen = () => {
 const navigation = useNavigation();

 const goScreenVocabulary = () => navigation.navigate('Vocabulary');
 const goScreenVerbs = () => navigation.navigate('Verbs');
 const goScreenPharsalVerbs = () => navigation.navigate('PhrasalVerbs');
 const goScreenIdioms = () => navigation.navigate('Idioms');
 const goScreenConversation = () => navigation.navigate('Conversation');

 const ContentScreen = Object.freeze({
  vocabulary: 'Vocabulary',
  verb: 'Verbs',
  phrasalVerb: 'Phrasal Verbs',
  idioms: 'Idioms',
  conversation: 'Conversation',
 });
 return (
  <>
   <StatusBar backgroundColor={'rgb(226, 232, 240)'} barStyle={'dark-content'} />
   <View className="p-4 bg-slate-200 w-full h-full flex-col justify-center items-stretch space-y-8">
    <CustomButton
     isDisable={false}
     type={typesButtonConst.default}
     stylyButton="p-4 bg-blue-400 rounded-xl"
     stylyText="text-xl text-slate-200 font-bold text-center"
     text={ContentScreen.vocabulary}
     handlerPress={goScreenVocabulary}
    />
    <View></View>
    <CustomButton
     isDisable={false}
     stylyButton="p-4 bg-blue-400 rounded-xl"
     stylyText="text-xl text-slate-200 font-bold text-center"
     type={typesButtonConst.default}
     text={ContentScreen.verb}
     handlerPress={goScreenVerbs}
    />
    <View></View>
    <CustomButton
     isDisable={false}
     type={typesButtonConst.default}
     stylyButton="p-4 bg-blue-400 rounded-xl"
     stylyText="text-xl text-slate-200 font-bold text-center"
     text={ContentScreen.phrasalVerb}
     handlerPress={goScreenPharsalVerbs}
    />
    <View></View>
    <CustomButton
     isDisable={false}
     type={typesButtonConst.default}
     stylyButton="p-4 bg-blue-400 rounded-xl"
     stylyText="text-xl text-slate-200 font-bold text-center"
     text={ContentScreen.idioms}
     handlerPress={goScreenIdioms}
    />
    <View></View>
    <CustomButton
     isDisable={false}
     type={typesButtonConst.default}
     stylyButton="p-4 bg-blue-400 rounded-xl"
     stylyText="text-xl text-slate-200 font-bold text-center"
     text={ContentScreen.conversation}
     handlerPress={goScreenConversation}
    />
   </View>
  </>
 );
};

export { HomeScreen };

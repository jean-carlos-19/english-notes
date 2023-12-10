import React from 'react';
import { RootStackParamList } from '@/types';
import { useVocabulary, useSearch } from '@/hooks';
import { validationVocabulary, validationSearch } from '@/validations';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Dimensions, StatusBar, Text, View, StyleSheet } from 'react-native';
import { CustomButton, CustomDialog, CustomLoading } from '@/atomic/elements';
import { CustomList, CustomModal, CustomVocabularyForm } from '@/atomic/components';
import { messageRefresh, types, data } from '@/constants';

type Props = NativeStackScreenProps<RootStackParamList, 'Vocabulary'>;
const content = data.lists;

const { width, height } = Dimensions.get('screen');

const VocabularyScreen = (props: Props) => {
 const { search, hanlderSearch } = useSearch();
 const {
  dialog,
  isEnable,
  isLoading,
  isEdition,
  vocabulary,
  vocabularies,
  modalSetting,
  isLoadingSearch,
  disabledVocabularies,
  goBack,
  handlerSave,
  handlerEdit,
  handlerEnable,
  handlerEdition,
  handlerDisable,
  handlerRefresAll,
  handlerHiddeDisable,
  handlerAppearDisable,
  handlerHiddeEdition,
 } = useVocabulary(props.route.params.idCategory, props.route.params.category, search);

 /* secction load */
 if (isLoading) return <CustomLoading message={messageRefresh} />;
 /* secction modal */
 if (modalSetting.isActivate) return <CustomModal setting={modalSetting} />;

 if (dialog.isActivate) return <CustomDialog setting={dialog} />;
 /* secction editing */
 if (isEdition)
  return (
   <View className="w-full h-full flex-col bg-sky-100 justify-start items-stretch p-4 space-y-8">
    {/* button go bakc */}
    <CustomButton
     type={types.button.icon}
     icon={types.icon.arrowLeft}
     handlerPress={handlerHiddeEdition}
    />
    <View></View>
    {/* edit category form */}
    <CustomVocabularyForm
     isVisible={true}
     type={types.form.edit}
     entity={vocabulary}
     validationSchema={validationVocabulary}
     handlerSubmit={handlerEdit}
    />
   </View>
  );
 /* secction enabling */
 if (isEnable)
  return (
   <View className="w-full h-full flex-col bg-sky-100 justify-start items-stretch p-4 space-y-8">
    {/* button go back */}
    <CustomButton
     type={types.button.icon}
     icon={types.icon.arrowLeft}
     handlerPress={handlerHiddeDisable}
    />
    <View></View>
    {/* list categories eliminated  */}
    <CustomList
     name={content.vocabulary.text}
     isLoading={isLoadingSearch}
     title={content.vocabulary.text}
     items={disabledVocabularies}
     handlerEnable={handlerEnable}
     icons={[types.icon.enable]}
    />
   </View>
  );

 return (
  <View className="p-4 bg-sky-100" style={styles.container}>
   <StatusBar backgroundColor={'rgb(224 242 254)'} barStyle={'dark-content'} />
   {/* bady Vocabulary screen */}
   <View className="flex-1 flex flex-col justify-stretch items-stretch space-y-8">
    {/* header */}
    <View className="flex-row justify-between items-center space-x-2">
     {/* button go back */}
     <CustomButton type={types.button.icon} icon={types.icon.arrowLeft} handlerPress={goBack} />
     <View></View>
     <Text className="flex-1 font-semibold text-center text-gray-700 text-base">
      {' '}
      Secction {props.route.params.category}{' '}
     </Text>
     <View></View>
     {/* button refresh */}
     <CustomButton
      isDisable={false}
      type={types.button.icon}
      icon={types.icon.refresh}
      stylyButton="bg-white p-2 rounded-xl flex-row justify-between"
      stylyText="text-xl text-red-800  text-center"
      handlerPress={handlerRefresAll}
     />
     <View></View>
     {/* button elimitating */}
     <CustomButton
      isDisable={false}
      type={types.button.iconText}
      icon={types.icon.elimited}
      text={`${disabledVocabularies.length}`}
      stylyButton="bg-white p-2 rounded-xl flex-row justify-between"
      stylyText="text-xl text-red-800  text-center"
      handlerPress={handlerAppearDisable}
     />
    </View>
    <View></View>
    {/* Vocabulary form */}
    <CustomVocabularyForm
     isVisible={false}
     type={types.form.create}
     entity={vocabulary}
     validationSchema={validationVocabulary}
     handlerSubmit={handlerSave}
    />
    <View></View>
    {/* List categories */}
    <CustomList
     name={` Vocabularies ${props.route.params.category}`}
     isLoading={isLoadingSearch}
     title={content.vocabulary.text}
     items={vocabularies}
     handlerEdit={handlerEdition}
     handlerEliminate={handlerDisable}
     icons={[types.icon.edit, types.icon.elimited]}
     searchForm={{
      entity: search,
      validationSchema: validationSearch,
      handlerSubmit: hanlderSearch,
     }}
    />
   </View>
  </View>
 );
};
const styles = StyleSheet.create({
 container: {
  width,
  height,
 },
});
export { VocabularyScreen };

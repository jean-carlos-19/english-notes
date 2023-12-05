import React from 'react';
import { RootStackParamList } from '@/types';
import { useVocabulary, useSearch } from '@/hooks';
import { Dimensions, StatusBar, Text, View } from 'react-native';
import { validationVocabulary, validationSearch } from '@/validations';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CustomButton, CustomDialog, CustomLoading } from '@/atomic/elements';
import { messageRefresh, typesButton, typesForm, typesIcon } from '@/constants';
import { CustomList, CustomModal, CustomVocabularyForm } from '@/atomic/components';

type Props = NativeStackScreenProps<RootStackParamList, 'Vocabulary'>;

const { width, height } = Dimensions.get('window');

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
     type={typesButton.icon}
     icon={typesIcon.arrowLeft}
     handlerPress={handlerHiddeEdition}
    />
    <View></View>
    {/* edit category form */}
    <CustomVocabularyForm
     isVisible={true}
     type={typesForm.edit}
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
     type={typesButton.icon}
     icon={typesIcon.arrowLeft}
     handlerPress={handlerHiddeDisable}
    />
    <View></View>
    {/* list categories eliminated  */}
    <CustomList
     isLoading={isLoadingSearch}
     title="List categories"
     items={disabledVocabularies}
     handlerEnable={handlerEnable}
     icons={[typesIcon.enable]}
    />
   </View>
  );

 return (
  <View
   className="w-full h-full bg-sky-100 p-4"
   style={{
    width,
    height,
   }}
  >
   <StatusBar backgroundColor={'rgb(224 242 254)'} barStyle={'dark-content'} />
   {/* bady Vocabulary screen */}
   <View className="flex-1 flex-col justify-start items-stretch space-y-8">
    {/* header */}
    <View className="flex-row justify-between items-center space-x-2">
     {/* button go back */}
     <CustomButton type={typesButton.icon} icon={typesIcon.arrowLeft} handlerPress={goBack} />
     <View></View>
     <Text className="flex-1 font-semibold text-center text-gray-700 text-base">
      {' '}
      Secction {props.route.params.category}{' '}
     </Text>
     <View></View>
     {/* button refresh */}
     <CustomButton
      isDisable={false}
      type={typesButton.icon}
      icon={typesIcon.refresh}
      stylyButton="bg-white p-2 rounded-xl flex-row justify-between"
      stylyText="text-xl text-red-800  text-center"
      handlerPress={handlerRefresAll}
     />
     <View></View>
     {/* button elimitating */}
     <CustomButton
      isDisable={false}
      type={typesButton.iconText}
      icon={typesIcon.elimited}
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
     type={typesForm.create}
     entity={vocabulary}
     validationSchema={validationVocabulary}
     handlerSubmit={handlerSave}
    />
    <View></View>
    {/* List categories */}
    <CustomList
     isLoading={isLoadingSearch}
     title="List vocabularies"
     items={vocabularies}
     handlerEdit={handlerEdition}
     handlerEliminate={handlerDisable}
     icons={[typesIcon.edit, typesIcon.elimited]}
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

export { VocabularyScreen };

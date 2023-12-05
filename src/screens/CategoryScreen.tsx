import React from 'react';
import { theme } from '@/atomic/theme';
import { useCategory, useSearch } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import { validationCategory, validationSearch } from '@/validations';
import { StatusBar, View, Dimensions, StyleSheet } from 'react-native';
import { CustomButton, CustomDialog, CustomLoading } from '@/atomic/elements';
import { CustomList, CustomCategoryForm, CustomModal } from '@/atomic/components';
import { messageRefresh, typesButton, typesForm, typesIcon } from '@/constants';

const { width, height } = Dimensions.get('window');

const CategoryScreen = () => {
 const { search, hanlderSearch } = useSearch();
 const {
  dialog,
  category,
  isEnable,
  isEdition,
  isLoading,
  categories,
  modalSetting,
  isLoadingSearch,
  disabledCategories,
  goBack,
  handlerEdit,
  handlerSave,
  handlerEnable,
  handlerEdition,
  handlerDisable,
  handlerRefresAll,
  handlerHiddeDisable,
  handlerHiddeEdition,
  handlerAppearDisable,
 } = useCategory(search);
 const navigation = useNavigation();
 const goScreenVocabulary = (id: number, typeCategory: string) =>
  navigation.navigate('Vocabulary', { idCategory: id, category: typeCategory });
 /* secction loading */
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
    <CustomCategoryForm
     isVisible={true}
     type={typesForm.edit}
     entity={category}
     validationSchema={validationCategory}
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
     items={disabledCategories}
     handlerEnable={handlerEnable}
     icons={[typesIcon.enable]}
    />
   </View>
  );

 return (
  <View className="p-4 bg-sky-100 w-full h-full" style={style.container}>
   <StatusBar backgroundColor={'rgb(224 242 254)'} barStyle={'dark-content'} />
   <View className="flex-1 flex-col justify-stretch items-stretch space-y-8">
    {/* header */}
    <View className="flex-row justify-between items-center space-x-2">
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
      text={`${disabledCategories.length}`}
      stylyButton="bg-white p-2 rounded-xl flex-row justify-between"
      stylyText="text-xl text-red-800  text-center"
      handlerPress={handlerAppearDisable}
     />
    </View>
    <View></View>
    {/* category Form */}
    <CustomCategoryForm
     isVisible={false}
     type={typesForm.create}
     entity={category}
     validationSchema={validationCategory}
     handlerSubmit={handlerSave}
    />
    <View></View>
    {/* List categories */}
    <CustomList
     isLoading={isLoadingSearch}
     searchForm={{
      entity: search,
      validationSchema: validationSearch,
      handlerSubmit: hanlderSearch,
     }}
     title="List categories"
     items={categories}
     goScreen={goScreenVocabulary}
     handlerEdit={handlerEdition}
     handlerEliminate={handlerDisable}
     icons={[typesIcon.edit, typesIcon.elimited]}
    />
   </View>
  </View>
 );
};

const style = StyleSheet.create({
 container: {
  width,
  height,
 },
});

export { CategoryScreen };

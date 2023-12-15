import React from 'react';
import { useCategory, useProfile, useSearch } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import { validationCategory, validationSearch } from '@/validations';
import { StatusBar, View, Dimensions, StyleSheet } from 'react-native';
import { CustomButton, CustomDialog, CustomLoading } from '@/atomic/elements';
import { CustomList, CustomCategoryForm, CustomModal } from '@/atomic/components';
import { types, data } from '@/constants';

const { width, height } = Dimensions.get('screen');

const content = data.lists;
const footer = data.footer;
const { message } = data.views.category;

const CategoryScreen = () => {
 const { search, hanlderSearch } = useSearch();
 const { handleProfile } = useProfile();
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
 if (isLoading) return <CustomLoading message={message.loading} />;
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
    <CustomCategoryForm
     isVisible={true}
     type={types.form.edit}
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
     type={types.button.icon}
     icon={types.icon.arrowLeft}
     handlerPress={handlerHiddeDisable}
    />
    <View></View>
    {/* list categories eliminated  */}
    <CustomList
     isLoading={isLoadingSearch}
     title={content.category.text}
     items={disabledCategories}
     handlerEnable={handlerEnable}
     icons={[types.icon.enable]}
     name={content.category.text}
    />
   </View>
  );

 return (
  <View className="p-4 bg-sky-100" style={styles.container}>
   <StatusBar backgroundColor={'rgb(224 242 254)'} barStyle={'dark-content'} />
   <View className="flex-1 flex flex-col justify-stretch items-stretch space-y-8">
    {/* header */}
    <View className="flex-row justify-between items-center space-x-2">
     {/* refresh button  */}
     <CustomButton
      isDisable={false}
      type={types.button.icon}
      icon={types.icon.refresh}
      stylyButton="bg-white p-2 rounded-xl flex-row justify-between"
      stylyText="text-xl text-red-800  text-center"
      handlerPress={handlerRefresAll}
     />
     <View></View>
     {/* button elimnate */}
     <CustomButton
      isDisable={false}
      type={types.button.iconText}
      icon={types.icon.elimited}
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
     type={types.form.create}
     entity={category}
     validationSchema={validationCategory}
     handlerSubmit={handlerSave}
    />
    <View></View>
    {/* List categories */}
    <CustomList
     name={content.category.text}
     isLoading={isLoadingSearch}
     searchForm={{
      entity: search,
      validationSchema: validationSearch,
      handlerSubmit: hanlderSearch,
     }}
     title={content.category.text}
     items={categories}
     goScreen={goScreenVocabulary}
     handlerEdit={handlerEdition}
     handlerEliminate={handlerDisable}
     icons={[types.icon.edit, types.icon.elimited]}
    />
    <View></View>
    <CustomButton
     type={types.button.default}
     stylyButton="p-4"
     stylyText="text-xl text-center text-slate-800 font-semibold"
     handlerPress={handleProfile}
     text={footer.text}
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

export { CategoryScreen };

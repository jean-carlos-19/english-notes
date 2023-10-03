import React from 'react';
import { theme } from '@/atomic/theme';
import { useCategory, useSearch } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import { StatusBar, View } from 'react-native';
import { validationCategory, validationSearch } from '@/validations';
import { CustomButton, CustomDialog, CustomLoading } from '@/atomic/elements';
import { CustomList, CustomCategoryForm, CustomModal } from '@/atomic/components';
import { messageRefresh, typesButtonConst, typesForm, typesIconConst } from '@/constants';
import { Dimensions } from 'react-native';

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
 if (isLoading)
  return (
   <CustomLoading
    isActivate={isLoading}
    colorText={'text-slate-800'}
    message={messageRefresh}
    background={'bg-sky-100'}
    color={'rgb(59 130 246)'}
    size={75}
   />
  );
 /* secction modal */
 if (modalSetting.isActivate) return <CustomModal setting={modalSetting} />;

 if (dialog.isActivate) return <CustomDialog setting={dialog} />;
 /* secction editing */
 if (isEdition)
  return (
   <View className="w-full h-full flex-col bg-sky-100 justify-start items-stretch p-4 space-y-8">
    {/* button go bakc */}
    <CustomButton
     type={typesButtonConst.icon}
     icon={{
      color: theme.blue,
      size: 50,
      strokeWidth: 1.5,
      type: typesIconConst.arrowLeft,
     }}
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
     type={typesButtonConst.icon}
     icon={{
      color: theme.blue,
      size: 50,
      strokeWidth: 2,
      type: typesIconConst.arrowLeft,
     }}
     handlerPress={handlerHiddeDisable}
    />
    <View></View>
    {/* list categories eliminated  */}
    <CustomList
     isLoading={isLoadingSearch}
     title="List categories"
     items={disabledCategories}
     handlerEnable={handlerEnable}
     buttons={[
      {
       stylyButton: 'p-2 bg-white rounded-xl',
       type: typesButtonConst.icon,
       icon: {
        type: typesIconConst.enable,
        color: theme.gray,
        size: 25,
        strokeWidth: 1,
       },
      },
     ]}
    />
   </View>
  );

 return (
  <View
   className="p-4 bg-sky-100 w-full h-full"
   style={{
    width,
    height,
   }}
  >
   <StatusBar backgroundColor={'rgb(224 242 254)'} barStyle={'dark-content'} />
   <View className="flex-1 flex-col justify-stretch items-stretch space-y-8">
    {/* header */}
    <View className="flex-row justify-between items-center space-x-2">
     {/* button go back */}
     <CustomButton
      type={typesButtonConst.icon}
      icon={{
       color: theme.blue,
       size: 50,
       strokeWidth: 2,
       type: typesIconConst.arrowLeft,
      }}
      handlerPress={goBack}
     />
     <View></View>
     {/* button refresh */}
     <CustomButton
      isDisable={false}
      type={typesButtonConst.icon}
      icon={{
       color: theme.gray,
       size: 25,
       strokeWidth: 2,
       type: typesIconConst.refresh,
      }}
      stylyButton="bg-white p-2 rounded-xl flex-row justify-between"
      stylyText="text-xl text-red-800  text-center"
      handlerPress={handlerRefresAll}
     />
     <View></View>
     {/* button elimitating */}
     <CustomButton
      isDisable={false}
      type={typesButtonConst.iconText}
      icon={{
       color: theme.red,
       size: 25,
       strokeWidth: 1,
       type: typesIconConst.elimited,
      }}
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
     buttons={[
      {
       stylyButton: 'p-2 bg-white rounded-xl',
       type: typesButtonConst.icon,
       icon: {
        type: typesIconConst.edit,
        color: theme.gray,
        size: 25,
        strokeWidth: 1,
       },
      },
      {
       stylyButton: 'p-2 bg-white rounded-xl',
       type: typesButtonConst.icon,
       icon: {
        type: typesIconConst.elimited,
        color: theme.red,
        size: 25,
        strokeWidth: 1,
       },
      },
     ]}
    />
   </View>
  </View>
 );
};

export { CategoryScreen };

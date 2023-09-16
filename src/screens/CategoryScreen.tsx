import React from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { theme } from '@/atomic/theme';
import { CustomButton, CustomDialog, CustomLoading } from '@/atomic/elements';
import { CustomList, CustomCategoryForm, CustomModal } from '@/atomic/components';
import { messageRefresh, typesButtonConst, typesForm, typesIconConst } from '@/constants';
import { validationCategory } from '@/validations';
import { useCategory } from '@/hooks';

const CategoryScreen = () => {
 const {
  dialog,
  category,
  isEnable,
  isEdition,
  isLoading,
  categories,
  modalSetting,
  disabledCategories,
  search,
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
 } = useCategory();
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
     searchForm={{
      entity: category,
      validationSchema: validationCategory,
      handlerSubmit: handlerSave,
     }}
     title="List categories"
     list={disabledCategories}
     handlerEnable={handlerEnable}
     buttons={[
      {
       stylyButton: 'p-2 bg-slate-200 rounded-xl',
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
  <ScrollView className="p-4 bg-sky-100 w-full h-full">
   <StatusBar backgroundColor={'rgb(224 242 254)'} barStyle={'dark-content'} />
   <View className="flex-col justify-start items-stretch space-y-8">
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
     type={typesForm.create}
     entity={category}
     validationSchema={validationCategory}
     handlerSubmit={handlerSave}
    />
    <View></View>
    {/* List categories */}
    <CustomList
     searchForm={{
      entity: category,
      validationSchema: validationCategory,
      handlerSubmit: search,
     }}
     title="List categories"
     list={categories}
     handlerEdit={handlerEdition}
     handlerEliminate={handlerDisable}
     buttons={[
      {
       stylyButton: 'p-2 bg-slate-200 rounded-xl',
       type: typesButtonConst.icon,
       icon: {
        type: typesIconConst.edit,
        color: theme.white,
        size: 25,
        strokeWidth: 1,
       },
      },
      {
       stylyButton: 'p-2 bg-slate-200 rounded-xl',
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
    <View></View>
   </View>
  </ScrollView>
 );
};

export { CategoryScreen };

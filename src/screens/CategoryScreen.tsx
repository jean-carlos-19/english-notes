import React from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { theme } from '@/atomic/theme';
import { CustomButton, CustomDialog, CustomLoading } from '@/atomic/elements';
import { CustomList, CustomCategoryForm, CustomModal } from '@/atomic/components';
import { messageRefresh, typesButtonConst, typesForm, typesIconConst } from '@/constants';
import { validationCategory } from '@/validations';
import { useCategory } from '@/hooks';

const contentBtnRefress = 'Refresh all';
const CategoryScreen = () => {
 const {
  dialog,
  category,
  isEdition,
  isLoading,
  categories,
  modalSetting,
  disabledCategories,
  isEnable,
  handlerHiddeDisable,
  goBack,
  handlerEdition,
  handlerAppearDisable,
  handlerEnable,
  handlerRefresAll,
  handlerDisable,
  handlerSave,
  handlerHiddeEdition,
  handlerEdit,
 } = useCategory();

 if (isLoading)
  return (
   <CustomLoading
    isActivate={isLoading}
    colorText={'text-slate-700'}
    message={messageRefresh}
    background={'bg-gray-200'}
    color={'#333'}
    size={75}
   />
  );

 if (modalSetting.isActivate) return <CustomModal setting={modalSetting} />;

 if (dialog.isActivate) return <CustomDialog setting={dialog} />;

 if (isEdition)
  return (
   <View className="w-full h-full flex-col bg-slate-200 justify-start items-stretch p-4 space-y-8">
    <CustomButton
     type={typesButtonConst.icon}
     icon={{
      color: theme.gray,
      size: 35,
      strokeWidth: 1.5,
      type: typesIconConst.arrowLeft,
     }}
     handlerPress={handlerHiddeEdition}
    />
    <View></View>
    <CustomCategoryForm
     type={typesForm.edit}
     entity={category}
     validationSchema={validationCategory}
     handlerSubmit={handlerEdit}
    />
   </View>
  );

 if (isEnable)
  return (
   <View className="w-full h-full flex-col bg-slate-200 justify-start items-stretch p-4 space-y-8">
    <CustomButton
     type={typesButtonConst.icon}
     icon={{
      color: theme.gray,
      size: 35,
      strokeWidth: 1.5,
      type: typesIconConst.arrowLeft,
     }}
     handlerPress={handlerHiddeDisable}
    />
    <View></View>
    <CustomList
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
  <ScrollView className="p-4 bg-slate-200 w-full h-full">
   <StatusBar backgroundColor={'rgb(226, 232, 240)'} barStyle={'dark-content'} />
   <View className="flex-col justify-start items-stretch space-y-8">
    <View className="flex-row justify-center items-center space-x-2">
     <CustomButton
      type={typesButtonConst.icon}
      icon={{
       color: theme.gray,
       size: 35,
       strokeWidth: 1.5,
       type: typesIconConst.arrowLeft,
      }}
      handlerPress={goBack}
     />
     <View></View>
     <CustomButton
      isDisable={false}
      type={typesButtonConst.default}
      text={contentBtnRefress}
      stylyButton="flex-1 p-4 bg-blue-400 rounded-xl"
      stylyText="text-xl text-slate-200 font-bold text-center"
      handlerPress={handlerRefresAll}
     />
     <View></View>
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
    <CustomCategoryForm
     type={typesForm.create}
     entity={category}
     validationSchema={validationCategory}
     handlerSubmit={handlerSave}
    />
    <View></View>
    <CustomList
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
        color: theme.gray,
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

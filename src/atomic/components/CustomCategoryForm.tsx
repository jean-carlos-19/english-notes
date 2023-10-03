import { theme } from '@/atomic/theme';
import React, { useState } from 'react';
import { ModelCategory } from '@/models';
import { Text, View } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import { CustomCategoryFormProps } from '@/types';
import { CustomButton, CustomInput } from '@/atomic/elements';
import { typesButtonConst, typesForm, typesIconConst } from '@/constants';

const contentCategoryForm = Object.freeze({
 create: {
  title: 'Create a category',
  button: 'Save category',
 },
 edit: {
  title: 'Edit a category',
  button: 'Save change',
 },
 category: {
  id: 'category',
  label: 'Category',
  placeholder: 'Ej: body',
 },
 button: {
  secundary: 'omitir change',
 },
});

const CustomCategoryForm = (props: CustomCategoryFormProps) => {
 const { type } = props;
 const [isActivate, setIsActivate] = useState<boolean>(props.isVisible);
 const handlerHiddeContent = () => {
  setIsActivate(!isActivate);
 };
 return (
  <Formik
   enableReinitialize={true}
   validationSchema={props.validationSchema}
   initialValues={props.entity}
   onSubmit={(values: ModelCategory, formikHelpers: FormikHelpers<ModelCategory>) => {
    formikHelpers.resetForm();
    props.handlerSubmit(values);
   }}
  >
   {(props) => {
    return (
     <View className="bg-white rounded-xl p-4 space-y-4">
      {/* Header */}
      <View className="flex-row justify-between items-center space-x-4">
       <Text className="text-blue-900 text-xl font-semibold text-center">
        {type === typesForm.edit
         ? contentCategoryForm.edit.title
         : contentCategoryForm.create.title}
       </Text>
       <View></View>
       <CustomButton
        isDisable={false}
        type={typesButtonConst.iconText}
        icon={{
         color: theme.gray,
         size: 25,
         strokeWidth: 1,
         type: isActivate ? typesIconConst.eye : typesIconConst.EyeSlashIcon,
        }}
        stylyButton="bg-white p-2 rounded-xl flex-row justify-between"
        stylyText="text-xl text-red-800  text-center"
        handlerPress={handlerHiddeContent}
       />
      </View>
      {isActivate && (
       /* body form */
       <View className="space-y-4">
        <View></View>
        {/* input category */}
        <CustomInput
         className={'flex-col justify-start items-stretch space-y-4 '}
         background={'transparent'}
         label={contentCategoryForm.category.label}
         styleLabel="text-slate-500 text-xl"
         stylyText={'p-4 bg-white rounded-xl border-slate-200 border-4 text-xl text-gray-600'}
         value={props.values.category}
         placeholder={contentCategoryForm.category.placeholder}
         handlerChange={props.handleChange(contentCategoryForm.category.id)}
         hanhandlerBlur={props.handleBlur(contentCategoryForm.category.id)}
         isEditable={true}
        />
        {/* message error category */}
        {props.touched.category && props.errors.category && (
         <Text className="text-red-700 font-semibold">{props.errors.category}</Text>
        )}
        <View></View>
        {/* button send and edit form */}
        <CustomButton
         type={typesButtonConst.default}
         isDisable={!props.isValid}
         stylyButton={'p-4 bg-blue-500 rounded-xl'}
         stylyText={'text-center font-semibold text-xl text-slate-100'}
         text={
          type === typesForm.edit
           ? contentCategoryForm.edit.button
           : contentCategoryForm.create.button
         }
         handlerPress={props.handleSubmit}
        />
        {/* button omitir form */}
        {type === typesForm.edit && (
         <View className="flex-col space-y-4">
          <CustomButton
           type={typesButtonConst.default}
           isDisable={false}
           stylyButton={'p-4 bg-blue-100 rounded-xl'}
           stylyText={'text-center font-semibold text-xl text-slate-500'}
           text={contentCategoryForm.button.secundary}
          />
         </View>
        )}
       </View>
      )}
     </View>
    );
   }}
  </Formik>
 );
};

export { CustomCategoryForm };

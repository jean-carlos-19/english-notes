import { ModelCategory } from '@/models';
import { CustomCategoryFormProps } from '@/types';
import { Formik, FormikHelpers } from 'formik';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { CustomButton, CustomInput } from '../elements';
import { typesButtonConst, typesForm, typesIconConst } from '@/constants';
import { theme } from '../theme';

const CustomCategoryForm = (props: CustomCategoryFormProps) => {
 const { entity, type, validationSchema, handlerSubmit } = props;
 const [isActivate, setIsActivate] = useState<boolean>(true);
 const handlerHiddeContent = () => {
  setIsActivate(!isActivate);
 };
 return (
  <Formik
   enableReinitialize={true}
   validationSchema={validationSchema}
   initialValues={entity}
   onSubmit={(values: ModelCategory, formikHelpers: FormikHelpers<ModelCategory>) => {
    formikHelpers.resetForm();
    handlerSubmit(values);
   }}
  >
   {(props) => {
    return (
     <View className="bg-white rounded-xl p-4 space-y-4">
      {/* Header */}
      <View className="flex-row justify-between items-center space-x-4">
       <Text className="text-blue-900 text-xl font-semibold text-center">
        {type === typesForm.edit ? 'Edit Category' : 'Create Category'}
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
         label={'Category'}
         styleLabel="text-slate-500 text-xl"
         stylyText={'p-4 bg-white rounded-xl border-slate-200 border-4 text-xl text-gray-600'}
         value={props.values.name}
         placeholder={'Ej: Store'}
         handlerChange={props.handleChange('name')}
         hanhandlerBlur={props.handleBlur('name')}
         isEditable={true}
        />
        {/* message error category */}
        {props.touched.name && props.errors.name && (
         <Text className="text-red-700 font-semibold">{props.errors.name}</Text>
        )}
        <View></View>
        {/* button send and edit form */}
        <CustomButton
         type={'default'}
         isDisable={!props.isValid}
         stylyButton={'p-4 bg-blue-500 rounded-xl'}
         stylyText={'text-center font-semibold text-xl text-slate-100'}
         text={type === typesForm.edit ? 'Save changes' : 'Save category'}
         handlerPress={props.handleSubmit}
        />
        {/* button omitir form */}
        {type === typesForm.edit && (
         <View className="flex-col space-y-4">
          <CustomButton
           type={'default'}
           isDisable={false}
           stylyButton={'p-4 bg-blue-100 rounded-xl'}
           stylyText={'text-center font-semibold text-xl text-slate-500'}
           text={'Omitir changes'}
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

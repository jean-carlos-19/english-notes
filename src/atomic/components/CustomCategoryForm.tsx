import { ModelCategory } from '@/models';
import { CustomCategoryFormProps } from '@/types';
import { Formik, FormikHelpers } from 'formik';
import React from 'react';
import { Text, View } from 'react-native';
import { CustomButton, CustomInput } from '../elements';
import { typesForm } from '@/constants';

const CustomCategoryForm = (props: CustomCategoryFormProps) => {
 const { entity, type, validationSchema, handlerSubmit } = props;
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
     <View className="bg-blue-400 rounded-xl p-4 space-y-4">
      <Text className="text-slate-100 text-xl font-semibold text-center">
       {type === typesForm.edit ? 'Edit Category' : 'Create Category'}
      </Text>
      <View></View>
      <CustomInput
       className={'flex-col justify-start items-stretch space-y-4 '}
       background={'transparent'}
       label={'Category'}
       styleLabel="text-slate-100 font-semibold text-xl"
       stylyText={
        'p-4 bg-white rounded-xl border-slate-200 border-4 text-xl border-slate-200 border-4  text-gray-600'
       }
       value={props.values.name}
       placeholder={'Ej: Store'}
       handlerChange={props.handleChange('name')}
       hanhandlerBlur={props.handleBlur('name')}
       isEditable={true}
      />
      {props.touched.name && props.errors.name && (
       <Text className="text-red-700 font-semibold">{props.errors.name}</Text>
      )}
      <View></View>
      <CustomButton
       type={'default'}
       isDisable={!props.isValid}
       stylyButton={'p-4 bg-blue-500 rounded-xl'}
       stylyText={'text-center font-semibold text-xl text-slate-100'}
       text={type === typesForm.edit ? 'Save changes' : 'Save category'}
       handlerPress={props.handleSubmit}
      />
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
    );
   }}
  </Formik>
 );
};

export { CustomCategoryForm };

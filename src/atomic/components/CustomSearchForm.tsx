import React from 'react';
import { TextInput, View } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import { CustomButton } from '@/atomic/elements';
import { typesButton, typesIcon, data } from '@/constants';
import { CustomSearchFormProps, Search } from '@/types';

const content = data.forms.search;

const CustomSearchForm = (props: CustomSearchFormProps) => {
 const { handlerSubmit } = props;
 return (
  <Formik
   validationSchema={props.validationSchema}
   enableReinitialize={true}
   initialValues={props.entity}
   onSubmit={(values: Search, formikHelpers: FormikHelpers<Search>) => {
    formikHelpers.resetForm();
    props.handlerSubmit(values);
   }}
  >
   {(props) => {
    handlerSubmit(props.values);
    return (
     <View className="flex-row p-4 bg-white rounded-xl border-gray-200 border-4">
      {/* input category */}
      <TextInput
       className={'flex-1 text-slate-600 text-xl'}
       multiline
       value={props.values.search}
       placeholder={content.placeholder}
       editable={true}
       onChangeText={props.handleChange(content.id)}
       onBlur={props.handleBlur(content.id)}
      />
      <View></View>
      {/* button send and edit form */}
      <CustomButton
       stylyButton={''}
       type={typesButton.icon}
       icon={typesIcon.MagnifyingGlassIcon}
       isDisable={!props.isValid}
       handlerPress={props.handleSubmit}
      />
     </View>
    );
   }}
  </Formik>
 );
};

export { CustomSearchForm };

import React from 'react';
import { TextInput, View } from 'react-native';
import { ModelCategory } from '@/models';
import { CustomSearchFormProps } from '@/types';
import { Formik, FormikHelpers } from 'formik';
import { CustomButton } from '@/atomic/elements';
import { typesButtonConst, typesIconConst } from '@/constants';
import { theme } from '../theme';

const CustomSearchForm = (props: CustomSearchFormProps) => {
 const { entity, validationSchema, handlerSubmit } = props;
 return (
  <Formik
   enableReinitialize={true}
   initialValues={entity}
   onSubmit={(values: ModelCategory, formikHelpers: FormikHelpers<ModelCategory>) => {
    formikHelpers.resetForm();
    handlerSubmit(values);
   }}
  >
   {(props) => {
    //   handlerSubmit(props.values.nam);
    return (
     <View className="flex-row p-4 bg-white rounded-xl border-gray-200 border-4">
      {/* input category */}

      <TextInput
       className={' flex-1 text-slate-600 text-xl'}
       multiline
       value={props.values.name}
       placeholder={'Ej: Search Store'}
       editable={true}
       onChangeText={props.handleChange('name')}
       onBlur={props.handleBlur('name')}
      />
      <View></View>
      {/* button send and edit form */}
      <CustomButton
       stylyButton={''}
       type={typesButtonConst.icon}
       icon={{
        color: theme.blue,
        size: 30,
        strokeWidth: 2,
        type: typesIconConst.MagnifyingGlassIcon,
       }}
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

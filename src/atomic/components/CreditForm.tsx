import React from 'react';
import { Text, View } from 'react-native';
import { CustomButton, CustomInput } from '../elements';
import { Formik, FormikHelpers } from 'formik';
import { CreditFormProps } from '@/types';
import { CreditModel } from '@/models';

const CreditForm = (props: CreditFormProps) => {
 const { entity, handlerSubmit, type, validationSchema } = props;
 return (
  <Formik
   enableReinitialize={true}
   validationSchema={validationSchema}
   initialValues={entity}
   onSubmit={(values: CreditModel, formikHelpers: FormikHelpers<CreditModel>) => {
    formikHelpers.resetForm();
    handlerSubmit(values);
   }}
  >
   {(props) => {
    return (
     <View className="bg-blue-200 p-4 rounded-xl space-y-8">
      <View>
       <CustomInput
        className={'flex-col justify-start items-stretch space-y-4'}
        background={'transparent'}
        label={'Abonar'}
        styleLabel="text-slate-500 font-semibold text-xl"
        stylyText={'p-4 bg-white rounded-xl text-xl'}
        value={props.values.credit}
        handlerChange={props.handleChange('credit')}
        hanhandlerBlur={props.handleBlur('credit')}
        placeholder={'Ej: 5.50'}
        isEditable={true}
       />
       {props.touched.credit && props.errors.credit && <Text className="text-red-400 font-semibold">{props.errors.credit}</Text>}
      </View>
      <View>
       <CustomButton
        isDisable={props.isValid}
        stylyButton={'p-4 bg-blue-400 rounded-xl'}
        stylyText={'text-center font-semibold text-xl text-slate-100'}
        text={'Guardar abono'}
        handlePress={props.handleSubmit}
       />
      </View>
     </View>
    );
   }}
  </Formik>
 );
};

export { CreditForm };

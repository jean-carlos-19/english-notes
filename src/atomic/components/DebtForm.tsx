import React from 'react';
import { View, Text } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import { DebtModel } from '@/models';
import { DebtFormProps } from '@/types';
import { CustomButton, CustomInput, CustomSelect, CustomTextArea } from '@/atomic/elements';
import { useNavigation } from '@react-navigation/native';
import { debtFormConst, typesButtonConst } from '@/constants';

const DebtForm = (props: DebtFormProps) => {
 const { entity, validationSchema, communities, type, handlerSubmit } = props;
 const navigation = useNavigation();
 return (
  <Formik
   enableReinitialize={true}
   validationSchema={validationSchema}
   initialValues={entity}
   onSubmit={(values: DebtModel, formikHelpers: FormikHelpers<DebtModel>) => {
    formikHelpers.resetForm();
    handlerSubmit(values);
   }}
  >
   {(props) => {
    return (
     <View className="flex-1 p-4 bg-slate-100 rounded-xl space-y-8">
      <Text className="text-xl text-slate-600 text-center font-semibold">
       {type === 'create' ? 'Añadir Deuda' : 'Edicion de deuda'}
      </Text>
      <View>
       <CustomSelect
        label={debtFormConst.community.label}
        id="community"
        value={props.values.community}
        data={communities}
        stylyLabel="text-slate-500 font-semibold text-xl"
        stylySelect="bg-white rounded-xl border-slate-200 border-4 "
        handlerChange={props.setFieldValue}
       />
       {props.touched.community ||
        (props.errors.community && <Text className="text-red-400 font-semibold">{props.errors.community}</Text>)}
      </View>
      <View>
       <CustomInput
        className={'flex-col justify-start items-stretch space-y-4 '}
        background={'transparent'}
        label={debtFormConst.customer.label}
        styleLabel="text-slate-500 font-semibold text-xl"
        stylyText={'p-4 bg-white rounded-xl border-slate-200 border-4 text-xl border-slate-200 border-4 '}
        value={props.values.customer}
        placeholder={debtFormConst.community.placeholder}
        handlerChange={props.handleChange('customer')}
        hanhandlerBlur={props.handleBlur('customer')}
        isEditable={true}
       />
       {props.touched.customer && props.errors.customer && (
        <Text className="text-red-400 font-semibold">{props.errors.customer}</Text>
       )}
      </View>
      <View>
       <CustomTextArea
        className={'flex-col justify-start items-stretch space-y-4'}
        background={'transparent'}
        label={debtFormConst.description.label}
        styleLabel="text-slate-500 font-semibold text-xl"
        stylyText={'flex-1 bg-white rounded-xl text-xl'}
        value={props.values.description}
        placeholder={debtFormConst.description.placeholder}
        handlerChange={props.handleChange('description')}
        hanhandlerBlur={props.handleBlur('description')}
        isEditable={true}
       />
       {props.touched.description && props.errors.description && (
        <Text className="text-red-400 font-semibold">{props.errors.description}</Text>
       )}
      </View>
      <View>
       <CustomInput
        className={'flex-col justify-start items-stretch space-y-4'}
        background={'transparent'}
        label={debtFormConst.value.label}
        styleLabel="text-slate-500 font-semibold text-xl"
        stylyText={'p-4 bg-white rounded-xl text-xl border-slate-200 border-4'}
        value={props.values.value}
        placeholder={debtFormConst.value.placeholder}
        handlerChange={props.handleChange('value')}
        hanhandlerBlur={props.handleBlur('value')}
        isEditable={true}
       />
       {props.touched.value && props.errors.value && (
        <Text className="text-red-400 font-semibold">{props.errors.value}</Text>
       )}
      </View>
      <View>
       <CustomButton
        type="default"
        isDisable={props.isValid}
        stylyButton={'p-4 bg-blue-400 rounded-xl'}
        stylyText={'text-center font-semibold text-xl text-slate-200'}
        text={type === 'edit' ? 'Guardar cambios' : 'Guardar deuda'}
        handlerPress={props.handleSubmit}
       />
      </View>
      <View>
       <CustomButton
        type={typesButtonConst.default}
        isDisable={true}
        stylyButton={'p-4 bg-slate-300 rounded-xl'}
        stylyText={'text-center font-semibold text-xl text-slate-500'}
        text={`${type === 'edit' ? 'Omitir cambios' : 'Limpiar campos'}`}
        handlerPress={() => {
         if (type === 'edit') navigation.goBack();
         else props.handleReset();
        }}
       />
      </View>
     </View>
    );
   }}
  </Formik>
 );
};

export { DebtForm };

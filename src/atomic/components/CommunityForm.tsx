import React from 'react';
import { Text, View } from 'react-native';
import { CustomButton, CustomInput } from '@/atomic/elements';
import { Formik, FormikHelpers } from 'formik';
import { CommunityModel } from '@/models';
import { CommunityValidation } from '@/validations';
import { CommunityFormProps } from '@/types';
import { CommunityFormConst, typesButtonConst } from '@/constants';

const CommunityForm = (props: CommunityFormProps) => {
 const { entity, handlerSubmit } = props;

 return (
  <Formik
   initialValues={entity}
   validationSchema={CommunityValidation}
   onSubmit={function (values: CommunityModel, formikHelpers: FormikHelpers<CommunityModel>) {
    formikHelpers.resetForm();
    handlerSubmit(values.name);
   }}
  >
   {(props) => {
    return (
     <View className="p-4 bg-slate-100 rounded-xl space-y-8">
      <View>
       <Text className="text-slate-600 text-xl text-center font-semibold">{CommunityFormConst.title}</Text>
      </View>
      <View>
       <CustomInput
        className={'flex-col justify-start items-stretch space-y-4'}
        background={'transparent'}
        label={CommunityFormConst.label}
        styleLabel="text-slate-500 font-semibold text-xl"
        stylyText={'p-4 bg-white rounded-xl text-xl border-slate-200 border-4'}
        value={props.values.name}
        placeholder={CommunityFormConst.placeholder}
        handlerChange={props.handleChange('name')}
        hanhandlerBlur={props.handleBlur('name')}
        isEditable={true}
       />
       {props.touched.name && props.errors.name && (
        <Text className="text-red-400 font-semibold">{props.errors.name}</Text>
       )}
      </View>
      <View>
       <CustomButton
        type={typesButtonConst.default}
        isDisable={props.isValid}
        stylyButton={'p-4 bg-blue-400 rounded-xl'}
        stylyText={'text-center font-semibold text-xl text-slate-200'}
        text={CommunityFormConst.button}
        handlerPress={props.handleSubmit}
       />
      </View>
     </View>
    );
   }}
  </Formik>
 );
};

export { CommunityForm };

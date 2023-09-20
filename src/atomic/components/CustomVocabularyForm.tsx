import { ModelVocabulary } from '@/models';
import { CustomVocabularyFormProps } from '@/types';
import { Formik, FormikHelpers } from 'formik';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { CustomButton, CustomInput } from '../elements';
import { typesButtonConst, typesForm, typesIconConst } from '@/constants';
import { theme } from '../theme';

const CustomVocabularyForm = (props: CustomVocabularyFormProps) => {
 const { entity, type, validationSchema, isVisible, handlerSubmit } = props;
 const [isActivate, setIsActivate] = useState<boolean>(isVisible);
 const handlerHiddeContent = () => {
  setIsActivate(!isActivate);
 };
 return (
  <Formik
   enableReinitialize={true}
   validationSchema={validationSchema}
   initialValues={entity}
   onSubmit={(values: ModelVocabulary, formikHelpers: FormikHelpers<ModelVocabulary>) => {
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
        {type === typesForm.edit ? 'Edit vocabulary' : 'Create vocabulary'}
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
        {/* input vocabulary */}
        <CustomInput
         className={'flex-col justify-start items-stretch space-y-4 '}
         background={'transparent'}
         label={'Vocabulary'}
         styleLabel="text-slate-500 text-xl"
         stylyText={'p-4 bg-white rounded-xl border-slate-200 border-4 text-xl text-gray-600'}
         value={props.values.vocabulary}
         placeholder={'Ej: Store'}
         handlerChange={props.handleChange('vocabulary')}
         hanhandlerBlur={props.handleBlur('vocabulary')}
         isEditable={true}
        />
        {/* message error vocabulary */}
        {props.errors.vocabulary && (
         <Text className="text-red-700 font-semibold">{props.errors.vocabulary}</Text>
        )}
        <View></View>
        {/* input translation */}
        <CustomInput
         className={'flex-col justify-start items-stretch space-y-4 '}
         background={'transparent'}
         label={'Translation'}
         styleLabel="text-slate-500 text-xl"
         stylyText={'p-4 bg-white rounded-xl border-slate-200 border-4 text-xl text-gray-600'}
         value={props.values.translation}
         placeholder={'Ej: Store'}
         handlerChange={props.handleChange('translation')}
         hanhandlerBlur={props.handleBlur('translation')}
         isEditable={true}
        />
        {/* message error vocabulary */}
        {props.errors.translation && (
         <Text className="text-red-700 font-semibold">{props.errors.translation}</Text>
        )}
        <View></View>
        {/* button send and edit form */}
        <CustomButton
         type={'default'}
         isDisable={!props.isValid}
         stylyButton={'p-4 bg-blue-500 rounded-xl'}
         stylyText={'text-center font-semibold text-xl text-slate-100'}
         text={type === typesForm.edit ? 'Save changes' : 'Save vocabulary'}
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

export { CustomVocabularyForm };

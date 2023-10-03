import { theme } from '@/atomic/theme';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ModelVocabulary } from '@/models';
import { Formik, FormikHelpers } from 'formik';
import { CustomVocabularyFormProps } from '@/types';
import { CustomButton, CustomInput } from '@/atomic/elements';
import { typesButtonConst, typesForm, typesIconConst } from '@/constants';
const contentVocabularyForm = Object.freeze({
 create: {
  title: 'Create a vocabulary',
  button: 'Save vocabulary',
 },
 edit: {
  title: 'Edit a vocabulary',
  button: 'Save change',
 },
 vocabulary: {
  id: 'vocabulary',
  label: 'vocabulary',
  placeholder: 'Ej: beatiful',
 },
 translation: {
  id: 'translation',
  label: 'translation',
  placeholder: 'Ej: hermosa',
 },
 button: {
  secundary: 'omitir change',
 },
});

const CustomVocabularyForm = (props: CustomVocabularyFormProps) => {
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
   onSubmit={(values: ModelVocabulary, formikHelpers: FormikHelpers<ModelVocabulary>) => {
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
         ? contentVocabularyForm.edit.title
         : contentVocabularyForm.create.title}
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
         label={contentVocabularyForm.vocabulary.label}
         styleLabel="text-slate-500 text-xl"
         stylyText={'p-4 bg-white rounded-xl border-slate-200 border-4 text-xl text-gray-600'}
         value={props.values.vocabulary}
         placeholder={contentVocabularyForm.vocabulary.placeholder}
         handlerChange={props.handleChange(contentVocabularyForm.vocabulary.id)}
         hanhandlerBlur={props.handleBlur(contentVocabularyForm.vocabulary.id)}
         isEditable={true}
        />
        {/* message error vocabulary */}
        {props.touched.vocabulary && props.errors.vocabulary && (
         <Text className="text-red-700 font-semibold">{props.errors.vocabulary}</Text>
        )}
        <View></View>
        {/* input translation */}
        <CustomInput
         className={'flex-col justify-start items-stretch space-y-4 '}
         background={'transparent'}
         label={contentVocabularyForm.translation.label}
         styleLabel="text-slate-500 text-xl"
         stylyText={'p-4 bg-white rounded-xl border-slate-200 border-4 text-xl text-gray-600'}
         value={props.values.translation}
         placeholder={contentVocabularyForm.translation.placeholder}
         handlerChange={props.handleChange(contentVocabularyForm.translation.id)}
         hanhandlerBlur={props.handleBlur(contentVocabularyForm.translation.id)}
         isEditable={true}
        />
        {/* message error vocabulary */}
        {props.touched.translation && props.errors.translation && (
         <Text className="text-red-700 font-semibold">{props.errors.translation}</Text>
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
           ? contentVocabularyForm.edit.button
           : contentVocabularyForm.create.button
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
           text={contentVocabularyForm.button.secundary}
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

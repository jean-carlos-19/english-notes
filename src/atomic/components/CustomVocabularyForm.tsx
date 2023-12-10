import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ModelVocabulary } from '@/models';
import { Formik, FormikHelpers } from 'formik';
import { CustomVocabularyFormProps } from '@/types';
import { CustomButton, CustomInput, CustomText } from '@/atomic/elements';
import { types, data } from '@/constants';

const content = data.forms.vocabulary;

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
       <CustomText
        variant={types.text.primary}
        size={types.styleText.xl}
        text={type === types.form.edit ? content.edit.title : content.create.title}
       />
       <View></View>
       <CustomButton
        isDisable={false}
        type={types.button.iconText}
        icon={isActivate ? types.icon.eye : types.icon.EyeSlashIcon}
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
         label={content.fields.vocabulary.label}
         value={props.values.vocabulary}
         placeholder={content.fields.vocabulary.placeholder}
         handlerChange={props.handleChange(content.fields.vocabulary.id)}
         hanhandlerBlur={props.handleBlur(content.fields.vocabulary.id)}
         isEditable={true}
        />
        {/* message error vocabulary */}
        {props.touched.vocabulary && props.errors.vocabulary && (
         <Text className="text-red-700 font-semibold">{props.errors.vocabulary}</Text>
        )}
        <View></View>
        {/* input translation */}
        <CustomInput
         label={content.fields.translation.label}
         value={props.values.translation}
         placeholder={content.fields.translation.placeholder}
         handlerChange={props.handleChange(content.fields.translation.id)}
         hanhandlerBlur={props.handleBlur(content.fields.translation.id)}
         isEditable={true}
        />
        {/* message error vocabulary */}
        {props.touched.translation && props.errors.translation && (
         <Text className="text-red-700 font-semibold">{props.errors.translation}</Text>
        )}
        <View></View>
        {/* button send and edit form */}
        <CustomButton
         type={types.button.default}
         isDisable={!props.isValid}
         stylyButton={'p-4 bg-blue-500 rounded-xl'}
         stylyText={'text-center font-semibold text-xl text-slate-100'}
         text={type === types.form.edit ? content.edit.button : content.create.button}
         handlerPress={props.handleSubmit}
        />
        {/* button omitir form */}
        {type === types.form.edit && (
         <View className="flex-col space-y-4">
          <CustomButton
           type={types.button.default}
           isDisable={false}
           stylyButton={'p-4 bg-blue-100 rounded-xl'}
           stylyText={'text-center font-semibold text-xl text-slate-500'}
           text={content.buttons.secundary}
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

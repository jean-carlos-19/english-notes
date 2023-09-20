import {
 messageSuccessVocabulary,
 messageVocabularyDialog,
 typesAction,
 typesStatusDialog,
} from '@/constants';
import { useNavigation } from '@react-navigation/native';
import { ServiceVocabulary } from '@/services';
import { useEffect, useState } from 'react';
import { ModelVocabulary } from '@/models';
import { useDialog } from './useDialog';
import { useModal } from './useModal';
import * as SQLite from 'expo-sqlite';

const service: ServiceVocabulary = ServiceVocabulary.getService();

const useVocabulary = (idCategory: number, category: string) => {
 const navigation = useNavigation();
 const [vocabulary, setVocabulary] = useState<ModelVocabulary>({
  idCategory,
  category,
  vocabulary:'',
  translation:''
 });
 const [vocabularies, setVocabularies] = useState<ModelVocabulary[]>([]);
 const [disabledVocabularies, setDisabledVocabularies] = useState<ModelVocabulary[]>([]);
 const [isEdition, setEdition] = useState<boolean>(false);
 const [isLoading, setIsLoading] = useState<boolean>(false);
 const [isEnable, setIsEnable] = useState<boolean>(false);
 const {
  type,
  content,
  isActivate,
  decisition,
  resetDialog,
  handlerHidde,
  handlerAppear,
  handlerVerify,
 } = useDialog();
 useEffect(() => {
  setVocabulary({
   idCategory,
   category,
   translation: undefined,
   vocabulary: undefined,
   idVocabulary: undefined,
  });
 }, [idCategory, category]);

 const { modalSetting, handlerStatus } = useModal(false, typesStatusDialog.success, false);

 useEffect(()=>{
  console.log(idCategory,category)
 },[idCategory,category])

 useEffect(() => {
  initializeDatabase();
 }, []);

 /* go back screen  */
 const goBack = () => navigation.goBack();

 /* initialize database */
 const initializeDatabase = async () => {
  setIsLoading(true);
  try {
   await service.createDataBase();
   await updateAll();
  } catch (error) {
   console.log('Error al crear la base de datos' + error);
  } finally {
   setIsLoading(false);
  }
 };

 /* hanlder to update all category information */
 const handlerRefresAll = () => {
  updateAll();
 };

 /* handler to create a new category */
 const handlerSave = (values: ModelVocabulary) => {
  if(!values.vocabulary) return ;
  create(values);
  handlerStatus(messageSuccessVocabulary.create, true, values.vocabulary);
 };

 /* handler to edit a new category */
 const handlerEdit = (values: ModelVocabulary) => {
  if(!values.vocabulary) return ;
  handlerAppear(values.vocabulary, typesAction.edit, messageVocabularyDialog.edit);
  setVocabulary(values);
 };

 /* handler to display the screen edition */
 const handlerEdition = (id: number, name: string) => {
  setEdition(!isEdition);
  verify(id);
 };

 /* handler to hidde the screen edition */
 const handlerHiddeEdition = () => {
  setEdition(!isEdition);
 };

 const handlerAppearDisable = () => {
  setIsEnable(true);
 };

 const handlerHiddeDisable = () => {
  setIsEnable(false);
 };

 /* handler to disable one category */
 const handlerDisable = (id: number, vocabulary: string) => {
  handlerAppear(vocabulary, typesAction.eliminate, messageVocabularyDialog.disable);
  setVocabulary({ idVocabulary: id, vocabulary, translation: '', category });
 };

 /* handler to enable one category */
 const handlerEnable = (id: number, vocabulary: string) => {
  handlerAppear(vocabulary, typesAction.enable, messageVocabularyDialog.enable);
  setVocabulary({ idVocabulary: id, vocabulary, translation: '', category });
 };

 /* update all category information */
 const updateAll = async () => {
  setIsLoading(true);
  try {
   await resetAll();
   await searchAllEnable();
   await searchAllDisabled();
  } catch (error) {
   console.log('Error al crear la categoria: ' + error);
  } finally {
   setIsLoading(false);
  }
 };

 /* create a new category */
 const create = async (values: ModelVocabulary) => {
  setIsLoading(true);
  try {
   const rs = await service.create(values, idCategory);
   await updateAll();
   console.log(rs)
  } catch (error) {
   console.log('Error al crear la categoria: ' + error);
  } finally {
   setIsLoading(false);
  }
 };
 /* edit a new category */
 const edit = async (values: ModelVocabulary) => {
  setIsLoading(true);
  try {
   await service.edit(values);
   setEdition(false);
   await updateAll();
  } catch (error) {
   console.log('Error al verificar la categoria: ' + error);
  } finally {
   setIsLoading(false);
  }
 };
 /* search a cetgory */
 const search = async (values: ModelVocabulary) => {
  if(!values.vocabulary) return ;
  setIsLoading(true);
  try {
   const rs = await service.search(values.vocabulary);
   const data = (rs as SQLite.ResultSet[])[0].rows;
   setVocabularies(data as ModelVocabulary[]);
   if (values.vocabulary === '' || !values.vocabulary) await updateAll();
  } catch (error) {
   console.log('Error al verificar la categoria: ' + error);
  } finally {
   setIsLoading(false);
  }
 };
 /* disable a category */
 const disable = async (id: number) => {
  setIsLoading(true);
  try {
   await service.disable(id);
   await updateAll();
  } catch (error) {
   console.log('Error al desabilitar: ' + error);
  } finally {
   setIsLoading(false);
  }
 };
 /* enable a category */
 const enable = async (id: number) => {
  setIsLoading(true);
  try {
   await service.enable(id);
   await updateAll();
  } catch (error) {
   console.log('Error al desabilitar: ' + error);
  } finally {
   setIsLoading(false);
  }
 };
 /* verify category */
 const verify = async (id: number) => {
  setIsLoading(true);
  try {
   const rs = await service.verify(id);
   const data = (rs as SQLite.ResultSet[])[0].rows[0];
   setVocabulary(data as ModelVocabulary);
  } catch (error) {
   console.log('Error al verificar la categoria: ' + error);
  } finally {
   setIsLoading(false);
  }
 };
 /* search all enable category  */
 const searchAllEnable = async () => {
  try {
   const rs = await service.showAllEnable(idCategory);
   const data = (rs as SQLite.ResultSet[])[0].rows;
   setVocabularies(data as ModelVocabulary[]);
  } catch (error) {
   console.log('Error al buscar todas las categorias habilitadas categoria: ' + error);
  }
 };
 /* search all disable category */
 const searchAllDisabled = async () => {
  try {
   const rs = await service.showAllDisable(idCategory);
   const data = (rs as SQLite.ResultSet[])[0].rows;
   setDisabledVocabularies(data as ModelVocabulary[]);
  } catch (error) {
   console.log('Error al buscar todas las categorias desabilitadas categoria: ' + error);
  }
 };

 const resetAll = () => {
  setVocabulary({
    idCategory,
    category,
    translation: undefined,
    vocabulary: undefined,
    idVocabulary: undefined,
  });
 };
 if (decisition && type === typesAction.eliminate && vocabulary?.idVocabulary) {
   if(!vocabulary.vocabulary) return ;
  disable(vocabulary.idVocabulary);
  handlerHidde();
  handlerStatus(messageSuccessVocabulary.disable, true, vocabulary.vocabulary);
 }
 if (decisition && type === typesAction.enable && vocabulary?.idVocabulary) {
  if(!vocabulary.vocabulary) return ;
  enable(vocabulary.idVocabulary);
  handlerHidde();
  handlerStatus(messageSuccessVocabulary.enable, true, vocabulary.vocabulary);
 }
 if (decisition && type === typesAction.edit && vocabulary?.idVocabulary) {
  if(!vocabulary.vocabulary) return ;
  edit(vocabulary);
  handlerHidde();
  handlerStatus(messageSuccessVocabulary.edit, true, vocabulary.vocabulary);
 }

 const dialog = Object.freeze({
  isActivate,
  content,
  handlerAppear,
  handlerVerify,
  handlerHidde,
  resetAll: resetDialog,
 });

 return {
  dialog,
  isEnable,
  isLoading,
  isEdition,
  vocabulary,
  modalSetting,
  vocabularies,
  disabledVocabularies,
  search,
  goBack,
  enable,
  handlerSave,
  handlerEdit,
  handlerEnable,
  handlerEdition,
  handlerDisable,
  setVocabularies,
  handlerRefresAll,
  handlerHiddeDisable,
  handlerAppearDisable,
  handlerHiddeEdition,
 };
};
export { useVocabulary };

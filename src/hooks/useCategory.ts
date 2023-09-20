import * as SQLite from 'expo-sqlite';
import { ModelCategory } from '@/models';
import { useEffect, useState } from 'react';
import { ServiceCategory } from '@/services';
import { useNavigation } from '@react-navigation/native';
import { useDialog } from './useDialog';
import {
 messageCategoryDialog,
 messageSuccessCategory,
 typesAction,
 typesStatusDialog,
} from '@/constants';
import { useModal } from './useModal';

const service: ServiceCategory = ServiceCategory.getService();

const useCategory = () => {
 const navigation = useNavigation();
 const [category, setCategory] = useState<ModelCategory>({
  category: '',
 });
 const [categories, setCategories] = useState<ModelCategory[]>([]);
 const [disabledCategories, setDisabledCategories] = useState<ModelCategory[]>([]);
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

 const { modalSetting, handlerStatus } = useModal(false, typesStatusDialog.success, false);

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
 const handlerSave = (values: ModelCategory) => {
  create(values);
  handlerStatus(messageSuccessCategory.create, true, values.category);
 };

 /* handler to edit a new category */
 const handlerEdit = (values: ModelCategory) => {
  handlerAppear(values.category, typesAction.edit, messageCategoryDialog.edit);
  setCategory(values);
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
 const handlerDisable = (id: number, category: string) => {
  handlerAppear(category, typesAction.eliminate, messageCategoryDialog.disable);
  setCategory({ idCategory: id, category });
 };

 /* handler to enable one category */
 const handlerEnable = (id: number, category: string) => {
  handlerAppear(category, typesAction.enable, messageCategoryDialog.enable);
  setCategory({ idCategory: id, category });
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
 const create = async (values: ModelCategory) => {
  setIsLoading(true);
  try {
   await service.create(values);
   await updateAll();
  } catch (error) {
   console.log('Error al crear la categoria: ' + error);
  } finally {
   setIsLoading(false);
  }
 };
 /* edit a new category */
 const edit = async (values: ModelCategory) => {
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
 const search = async (values: ModelCategory) => {
  setIsLoading(true);
  try {
   const rs = await service.search(values.category);
   const data = (rs as SQLite.ResultSet[])[0].rows;
   setCategories(data as ModelCategory[]);
   if (values.category === '' || !values.category) await updateAll();
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
   setCategory(data as ModelCategory);
  } catch (error) {
   console.log('Error al verificar la categoria: ' + error);
  } finally {
   setIsLoading(false);
  }
 };
 /* search all enable category  */
 const searchAllEnable = async () => {
  try {
   const rs = await service.showAllEnable();
   const data = (rs as SQLite.ResultSet[])[0].rows;
   setCategories(data as ModelCategory[]);
  } catch (error) {
   console.log('Error al buscar todas las categorias habilitadas categoria: ' + error);
  }
 };
 /* search all disable category */
 const searchAllDisabled = async () => {
  try {
   const rs = await service.showAllDisable();
   const data = (rs as SQLite.ResultSet[])[0].rows;
   setDisabledCategories(data as ModelCategory[]);
  } catch (error) {
   console.log('Error al buscar todas las categorias desabilitadas categoria: ' + error);
  }
 };

 const resetAll = () => {
  setCategory({
   idCategory: 0,
   category: '',
  });
 };

 if (decisition && type === typesAction.eliminate && category?.idCategory) {
  disable(category.idCategory);
  handlerHidde();
  handlerStatus(messageSuccessCategory.disable, true, category.category);
 }
 if (decisition && type === typesAction.enable && category?.idCategory) {
  enable(category.idCategory);
  handlerHidde();
  handlerStatus(messageSuccessCategory.enable, true, category.category);
 }
 if (decisition && type === typesAction.edit && category?.idCategory) {
  edit(category);
  handlerHidde();
  handlerStatus(messageSuccessCategory.edit, true, category.category);
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
  category,
  isEdition,
  categories,
  modalSetting,
  disabledCategories,
  search,
  goBack,
  enable,
  handlerSave,
  handlerEdit,
  handlerEdition,
  handlerEnable,
  handlerDisable,
  handlerRefresAll,
  handlerHiddeDisable,
  handlerAppearDisable,
  handlerHiddeEdition,
 };
};
export { useCategory };

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
  name: '',
 });
 const [categories, setCategories] = useState<ModelCategory[]>([]);
 const [disabledCategories, setDisabledCategories] = useState<ModelCategory[]>([]);
 const [isEdition, setEdition] = useState<boolean>(false);
 const [isLoading, setIsLoading] = useState<boolean>(false);
 const [isEnable, setIsEnable] = useState<boolean>(false);
 const {
  isActivate,
  decisition,
  content,
  type,
  handlerAppear,
  handlerVerify,
  handlerHidde,
  resetAll,
 } = useDialog();

 const { modalSetting, handlerStatus } = useModal(false, typesStatusDialog.success, false);

 const goBack = () => navigation.goBack();

 useEffect(() => {
  initializeDatabase();
 }, []);

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

 const updateAll = async () => {
  setIsLoading(true);
  try {
   await searchAllEnable();
   await searchAllDisabled();
   await reselAll();
  } catch (error) {
   console.log('Error al crear la categoria: ' + error);
  } finally {
   setIsLoading(false);
  }
 };

 const handlerSave = (values: ModelCategory) => {
  create(values);
  handlerStatus(messageSuccessCategory.create, true, values.name);
 };

 const handlerEdit = (values: ModelCategory) => {
  handlerAppear(values.name, typesAction.edit, messageCategoryDialog.edit);
  setCategory(values);
  // edit(values);
  // handlerStatus(messageSuccessCategory.edit, true, values.name);
 };

 const handlerEdition = (id: number, name: string) => {
  setEdition(!isEdition);
  verify(id);
 };

 const handlerHiddeEdition = () => {
  setEdition(!isEdition);
 };

 const handlerAppearDisable = () => {
  setIsEnable(true);
 };

 const handlerHiddeDisable = () => {
  setIsEnable(false);
 };

 const handlerDisable = (id: number, name: string) => {
  handlerAppear(name, typesAction.eliminate, messageCategoryDialog.disable);
  setCategory({ idCategory: id, name });
 };

 const handlerEnable = (id: number, name: string) => {
  handlerAppear(name, typesAction.enable, messageCategoryDialog.enable);
  setCategory({ idCategory: id, name });
 };

 const handlerRefresAll = () => {
  updateAll();
 };

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

 const edit = async (values: ModelCategory) => {
  setIsLoading(true);
  try {
   console.log(values);
   await service.edit(values);
   setEdition(false);
   await updateAll();
  } catch (error) {
   console.log('Error al verificar la categoria: ' + error);
  } finally {
   setIsLoading(false);
  }
 };

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

 const searchAllEnable = async () => {
  try {
   const rs = await service.showAllEnable();
   const data = (rs as SQLite.ResultSet[])[0].rows;
   setCategories(data as ModelCategory[]);
  } catch (error) {
   console.log('Error al buscar todas las categorias habilitadas categoria: ' + error);
  }
 };

 const searchAllDisabled = async () => {
  try {
   const rs = await service.showAllDisable();
   const data = (rs as SQLite.ResultSet[])[0].rows;
   setDisabledCategories(data as ModelCategory[]);
  } catch (error) {
   console.log('Error al buscar todas las categorias desabilitadas categoria: ' + error);
  }
 };

 const reselAll = () => {
  setCategory({
   name: '',
  });
 };

 if (decisition && type === typesAction.eliminate && category?.idCategory) {
  disable(category.idCategory);
  handlerHidde();
  handlerStatus(messageSuccessCategory.disable, true, category.name);
 }
 if (decisition && type === typesAction.enable && category?.idCategory) {
  enable(category.idCategory);
  handlerHidde();
  handlerStatus(messageSuccessCategory.enable, true, category.name);
 }
 if (decisition && type === typesAction.edit && category?.idCategory) {
  edit(category);
  handlerHidde();
  handlerStatus(messageSuccessCategory.edit, true, category.name);
 }

 const dialog = Object.freeze({
  isActivate,
  content,
  handlerAppear,
  handlerVerify,
  handlerHidde,
  resetAll,
 });

 return {
  dialog,
  isEnable,
  modalSetting,
  isLoading,
  category,
  isEdition,
  categories,
  disabledCategories,
  goBack,
  enable,
  handlerEdition,
  handlerHiddeDisable,
  handlerEnable,
  handlerDisable,
  handlerRefresAll,
  handlerAppearDisable,
  handlerEdit,
  handlerSave,
  handlerHiddeEdition,
 };
};
export { useCategory };

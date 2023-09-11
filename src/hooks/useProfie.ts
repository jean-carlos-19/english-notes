import { useEffect, useState } from 'react';
import { DebtService } from '@/services';
import { CreditModel, DebtModel, UserDebtModel } from '@/models';
import * as SQLite from 'expo-sqlite';
import {
 modalCancelDebtConst,
 ModalUpdateDebtConst,
 ModalUpdateCreditDebtConst,
 dialogCancelDebtConst,
 typesStatusDialog,
 statusAction,
 typesAction,
} from '@/constants';
import { useModal } from './useModal';
import { useDialog } from './useDialog';
import { Community } from '@/types';

const services: DebtService = DebtService.getService();
const useProfile = (id: number, typeProfile: statusAction) => {
 const { modalSetting, handlerStatus } = useModal(false, typesStatusDialog.success, false);
 const { dialogSetting, decisition, comunity, handlerAppearForm, type } = useDialog(dialogCancelDebtConst);
 const [entity, setEntity] = useState<DebtModel>({
  community: undefined,
  customer: undefined,
  description: undefined,
  value: undefined,
 });
 const [user, setUser] = useState<UserDebtModel>({
  community: undefined,
  customer: undefined,
  description: undefined,
  fecha: undefined,
  value: undefined,
 });

 const [isLoading, setIsLoading] = useState<boolean>(false);

 useEffect(() => {
  if (typeProfile === typesAction.edit) {
   getInfoDebt(id);
   handlerDebt(id);
  }
 }, [id, type]);
 useEffect(() => {
  if (decisition && comunity && type && type === typesAction.cancel) {
   handlerCancelDebt(comunity);
  }
 }, [decisition]);

 const getInfoDebt = async (id: number) => {
  setIsLoading(true);
  try {
   const rs = await services.searchDebt(id);
   const data = (rs as SQLite.ResultSet[])[0].rows[0];
   setUser(data as UserDebtModel);
  } catch (error) {
   console.log('Error al  buscar el el cliente deudor' + error);
  }
  setIsLoading(false);
 };

 const handlerCancelDebt = async (community: Community) => {
  setIsLoading(true);
  try {
   await services.cancelDebt(community.id);
   handlerStatus(modalCancelDebtConst, true, community.name);
  } catch (error) {
   console.log('Error al  buscar el el cliente deudor' + error);
  }
  setIsLoading(false);
 };

 const handlerDebt = async (id: number) => {
  setIsLoading(true);
  try {
   const rs = await services.getDebt(id);
   const data = (rs as SQLite.ResultSet[])[0].rows[0];
   setEntity(data as DebtModel);
  } catch (error) {
   console.log('Error al  buscar al cliente' + error);
  }
  setIsLoading(false);
 };

 const handlerUpdateDebt = async (values: DebtModel) => {
  setIsLoading(true);
  try {
   await services.updateDebt(values, id);
   handlerStatus(ModalUpdateDebtConst, true, values.customer!);
  } catch (error) {
   console.log('Error al  buscar al cliente: ' + error);
  }
  setIsLoading(false);
 };
 const handlerUpdateCreeditDebt = async (values: CreditModel, name: string) => {
  setIsLoading(true);
  try {
   await services.updateCreditDebt(id, values);
   handlerStatus(ModalUpdateCreditDebtConst, true, name);
  } catch (error) {
   console.log('Error al  buscar al cliente: ' + error);
  }
  setIsLoading(false);
 };
 return {
  user,
  isLoading,
  entity,
  dialogSetting,
  modalSetting,
  handlerUpdateDebt,
  handlerCancelDebt,
  handlerAppearForm,
  handlerUpdateCreeditDebt,
 };
};
export { useProfile };

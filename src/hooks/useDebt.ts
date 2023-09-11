import {
 DialogUpdateDebtConst,
 ModalUpdateDebtConst,
 modalAddDebtConst,
 modalCancelDebtConst,
 statusAction,
 typesAction,
 typesStatusDialog,
} from '@/constants';
import { useEffect, useState } from 'react';
import { DebtService } from '@/services';
import * as SQLite from 'expo-sqlite';
import { DebtModel, UserDebtModel } from '@/models';
import { useModal } from './useModal';
import { useDialog } from './useDialog';

const useDebt = (id?: number, typeDebt?: statusAction, name?: string) => {
 const { modalSetting, handlerStatus } = useModal(
  false,
  typesStatusDialog.success,
  typeDebt === typesAction.create ? false : true,
 );
 const { dialogSetting, decisition, debt, type, handlerAppearForm } = useDialog(DialogUpdateDebtConst);
 const service: DebtService = DebtService.getService();
 const [debts, setDebts] = useState<{ id: number; customer: string }[]>();
 const [isLoading, setIsLoading] = useState<boolean>(false);
 const [user, setUser] = useState<UserDebtModel>({
  community: undefined,
  customer: undefined,
  description: undefined,
  fecha: undefined,
  value: undefined,
 });

 const [entity, setEntity] = useState<DebtModel>({
  community: undefined,
  customer: undefined,
  description: undefined,
  value: undefined,
 });

 useEffect(() => {
  if (decisition && debt && type && type === typesAction.update) {
   handlerUpdateDebt(debt);
  }
 }, [decisition]);

 useEffect(() => {
  initializeDatabase();
 }, []);

 const initializeDatabase = async () => {
  try {
   await service.createDataBase();
   if (typeDebt === typesAction.edit && id) getInfoDebt(id);
   if (typeDebt === typesAction.cancel && id) handlerCancelDebt(id, name!);
  } catch (error) {
   console.log('Error al crear la base de datos' + error);
  }
 };

 const getInfoDebt = async (id: number) => {
  setIsLoading(true);
  try {
   const rs = await service.searchDebt(id);
   const data = (rs as SQLite.ResultSet[])[0].rows[0] as UserDebtModel;
   const { community, customer, description, value } = data;
   setEntity({ community, customer, description, value });
   setUser(data);
  } catch (error) {
   console.log('Error al  buscar el el cliente deudor' + error);
  }
  setIsLoading(false);
 };

 const handlerCancelDebt = async (id: number, name: string) => {
  setIsLoading(true);
  try {
   await service.cancelDebt(id);
   handlerStatus(modalCancelDebtConst, true, name);
  } catch (error) {
   console.log('Error al  buscar el el cliente deudor' + error);
  }
  setIsLoading(false);
 };

 const addDebts = async (datas: DebtModel) => {
  setIsLoading(true);
  try {
   await service.createDebts(datas);
   handlerStatus(modalAddDebtConst, true, datas.customer!);
  } catch (error) {
   console.log('Error al crear el deudor' + error);
  }
  setIsLoading(false);
 };

 const handlerUpdateDebt = async (values: DebtModel) => {
  setIsLoading(true);
  try {
   await service.updateDebt(values, id!);
   handlerStatus(ModalUpdateDebtConst, true, values.customer!);
  } catch (error) {
   console.log('Error al  buscar al cliente: ' + error);
  }
  setIsLoading(false);
 };

 const searchDebts = async (comunity: string) => {
  setIsLoading(true);
  try {
   const rs = await service.searchDebts(comunity);
   const data = (rs as SQLite.ResultSet[])[0].rows;
   setDebts(data as { id: number; customer: string }[]);
  } catch (error) {
   console.log('Error al buscar el deudor' + error);
  }
  setIsLoading(false);
 };
 return {
  user,
  debts,
  entity,
  isLoading,
  modalSetting,
  dialogSetting,
  addDebts,
  searchDebts,
  handlerUpdateDebt,
  handlerAppearForm,
 };
};
export { useDebt };

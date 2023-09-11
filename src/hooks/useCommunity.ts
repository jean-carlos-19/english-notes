import { CommunityModel } from '@/models';
import { useEffect, useState } from 'react';
import { CommunityService } from '@/services';
import * as SQLite from 'expo-sqlite';
import { Community } from '@/types';
import {
 dialogElimitedCommunityConst,
 mocalAddCommunityConst,
 modalDeleteCommunityConst,
 modalEnableCommunityConst,
 dialogEnableCommunityConst,
 typesAction,
 typesStatusDialog,
} from '@/constants';
import { useModal } from './useModal';
import { useDialog } from './useDialog';

const service: CommunityService = CommunityService.getService();

const entity: CommunityModel = {
 name: '',
};

const useCommunity = () => {
 const { modalSetting, handlerStatus } = useModal(false, typesStatusDialog.success, false);
 const { dialogSetting, decisition, comunity, type } = useDialog(dialogElimitedCommunityConst);
 const [isLoading, setIsLoading] = useState<boolean>(false);
 const [comunities, setComunities] = useState<Community[] | undefined>();
 const [debComunities, setDebComunities] = useState<Community[] | undefined>();
 const [disabledCommunity, setDisabledCommunity] = useState<Community[] | undefined>();

 useEffect(() => {
  initializeDatabase();
 }, []);

 useEffect(() => {
  if (decisition && comunity && type && type === typesAction.eliminate) {
   deleteCommunity(comunity);
  }
  if (decisition && comunity && type && type === typesAction.enable) {
   enableCommunity(comunity);
  }
 }, [decisition]);

 const initializeDatabase = async () => {
  try {
   await service.createDataBase();
   await updateAll();
  } catch (error) {
   console.log('Error al crear la base de datos' + error);
  }
 };

 const updateAll = async () => {
  setIsLoading(true);
  await searchAllCommunitiesDebts();
  await searchAllDisabledComunities();
  await searchAllComunities();
  setIsLoading(false);
 };

 const searchAllDisabledComunities = async () => {
  try {
   const rs = await service.searchAllDisabledCommunity();
   const data = (rs as SQLite.ResultSet[])[0].rows;
   setDisabledCommunity(data as Community[]);
  } catch (error) {
   console.log('Error al buscar todas las comunidades: ' + error);
  }
 };
 const searchAllComunities = async () => {
  try {
   const rs = await service.searchAllCommunity();
   const data = (rs as SQLite.ResultSet[])[0].rows;
   setComunities(data as Community[]);
  } catch (error) {
   console.log('Error al buscar todas las comunidades: ' + error);
  }
 };

 const searchAllCommunitiesDebts = async () => {
  try {
   const rs = await service.searchAllCommunitiesDebts();
   const data = (rs as SQLite.ResultSet[])[0].rows;
   setDebComunities(data as Community[]);
  } catch (error) {
   console.log('Error al listar las comunidade con deudores: ' + error);
  }
 };

 const addCommunity = async (name: string) => {
  setIsLoading(true);
  try {
   await service.createCommunity(name);
   handlerStatus(mocalAddCommunityConst, true, name);
   await updateAll();
  } catch (error) {
   console.log('error al agregar la comunidad' + error);
  }
  setIsLoading(false);
 };

 const deleteCommunity = async (community: Community) => {
  setIsLoading(true);
  try {
   if (decisition) {
    await service.deleteCommunity(community.id);
    handlerStatus(modalDeleteCommunityConst, true, community.name);
    await updateAll();
   }
  } catch (error) {
   console.log('Error al eliminar una comunidad: ' + error);
  }
  setIsLoading(false);
 };

 const enableCommunity = async (community: Community) => {
  setIsLoading(true);
  try {
   if (decisition) {
    await service.enableCommunity(community.id);
    handlerStatus(modalEnableCommunityConst, true, community.name);
    await updateAll();
   }
  } catch (error) {
   console.log('Error al buscar habilitar una comunidad: ' + error);
  }
  setIsLoading(false);
 };

 const comunitySetting = {
  entity,
  comunities,
  debComunities,
  disabledCommunity,
  addCommunity,
  deleteCommunity,
  enableCommunity,
  searchAllComunities,
 };

 return {
  loading: {
   isLoading,
  },
  modalSetting,
  dialogSetting,
  comunitySetting,
  updateAll,
  deleteCommunity,
  enableCommunity,
 };
};
export { useCommunity };

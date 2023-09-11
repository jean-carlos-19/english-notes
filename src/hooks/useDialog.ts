import { statusAction, typesAction } from '@/constants';
import { Community, Message, dialogSetting } from '@/types';
import { useState } from 'react';

const useDialog = (message: Message) => {
 const [isActivate, setIsActivate] = useState<boolean>(false);
 const [comunity, setComunity] = useState<Community>();
 const [debt, setDebt] = useState<any>();
 const [decisition, setDecisition] = useState<boolean>(false);
 const [type, setType] = useState<statusAction | undefined>();
 const [content, setContent] = useState<{ message: Message; name: string }>();

 const handlerVerify = (status: boolean) => {
  setDecisition(status);
  setIsActivate(false);
 };

 const handlerAppear = (id: number, name: string, type: statusAction) => {
  setIsActivate(true);
  setComunity({ id, name });
  setContent({
   message: {
    title: getTitle(type),
    text: geText(type),
   },
   name,
  });
  setType(type);
 };
 const handlerAppearForm = (values: any, name: string, type: statusAction) => {
  setIsActivate(true);
  setDebt(values);
  setContent({
   message: {
    title: getTitle(type),
    text: geText(type),
   },
   name,
  });
  setType(type);
 };
 const resetAll = () => {
  setDecisition(false);
 };
 const getTitle = (id: statusAction) => {
  if (id === typesAction.create) return 'Mensaje de creacion';
  if (id === typesAction.eliminate) return 'Mensaje de eliminacion';
  if (id === typesAction.update) return 'Mensaje de actualizacion';
  if (id === typesAction.enable) return 'Mensaje de habilitacion';
  if (id === typesAction.cancel) return 'Mensaje de cancelacion';
 };
 const geText = (id: statusAction) => {
  if (id === typesAction.create) return 'Se ha creado correctamente la deududa del cliente: ';
  if (id === typesAction.eliminate) return '¿Desea eliminar la comunidad?';
  if (id === typesAction.update) return '¿Desea actualizar la deuda? De: ';
  if (id === typesAction.enable) return '¿Desea habilitar nuevamente ? ';
  if (id === typesAction.cancel) return '¿Estas seguro de borrar la deuda? De:';
 };
 const dialogSetting: dialogSetting = {
  content: content,
  isActivate,
  resetAll,
  handlerAppear,
  handlerHidde: () => null,
  handlerVerify,
 };

 return { dialogSetting, decisition, comunity, type, debt, handlerAppearForm };
};
export { useDialog };

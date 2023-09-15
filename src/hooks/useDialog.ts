import { statusAction } from '@/constants';
import { Message } from '@/types';
import { useState } from 'react';

const useDialog = () => {
 const [isActivate, setIsActivate] = useState<boolean>(false);
 const [decisition, setDecisition] = useState<boolean>(false);
 const [type, setType] = useState<statusAction | undefined>();
 const [content, setContent] = useState<{ message: Message; name: string }>();

 const handlerVerify = (status: boolean) => {
  setDecisition(status);
  setIsActivate(false);
  return status;
 };

 const handlerAppear = (name: string, type: statusAction, message: string) => {
  setIsActivate(true);
  setContent({
   message: {
    title: 'Verifing Message',
    text: message,
   },
   name,
  });
  setType(type);
 };
 const handlerHidde = () => {
  setIsActivate(false);
  setDecisition(false);
 };

 const resetAll = () => {
  setDecisition(false);
 };

 return {
  isActivate,
  decisition,
  content,
  type,
  handlerHidde,
  handlerAppear,
  handlerVerify,
  resetAll,
 };
};
export { useDialog };

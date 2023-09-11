import { useState } from 'react';
import { Message, ModalSetting } from '@/types';
import { useNavigation } from '@react-navigation/native';
import { statusDialog } from 'src/constants/modal.const';

const useModal = (isOpen: boolean, type: statusDialog, isSureGoBack: boolean) => {
 const [isActivate, setIsActivate] = useState<boolean>(isOpen);
 const [message, setMessage] = useState<Message | undefined>(undefined);
 const [name, setName] = useState<string>('');
 const navigation = useNavigation();

 const handlerHidde = () => {
     if (isSureGoBack) {
      navigation.goBack();
      setIsActivate(false);
  }
  setIsActivate(false);
 };
 const handlerAppear = () => {
  setIsActivate(true);
 };
 const handlerStatus = (message: Message, status: boolean, name: string) => {
  setIsActivate(status);
  setMessage(message);
  setName(name);
 };

 const modalSetting: ModalSetting = {
  name,
  type,
  message,
  isActivate,
  handlerAppear,
  handlerHidde,
  handlerStatus,
 };
 return { handlerStatus, modalSetting };
};
export { useModal };

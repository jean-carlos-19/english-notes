import { satusList } from '@/constants';
import { CustomButtonIconProps, IconProps } from '@/types';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import {
 PlusIcon,
 TrashIcon,
 XMarkIcon,
 CheckIcon,
 ArrowLeftCircleIcon,
 ArrowPathIcon,
 ArrowsPointingOutIcon,
 EyeIcon,
 PencilIcon,
} from 'react-native-heroicons/solid';

const CustomButtonIcon = (props: CustomButtonIconProps) => {
 const { type, className, text, handlerPress } = props;
 return (
  <TouchableOpacity
   className={`p-2 rounded-full bg-slate-100 flex-row justify-center items-center ${className}`}
   onPress={handlerPress}
  >
   {text && type === 'eliminated' && (
    <Text className=" mr-2 text-red-900 font-semibold"> {text} </Text>
   )}
   {text && type === 'refresh' && (
    <Text className=" mr-2 text-gray-600 font-semibold"> {text} </Text>
   )}

   <Icon type={type} />
  </TouchableOpacity>
 );
};

const Icon = (props: IconProps) => {
 const { type } = props;
 if (type === satusList.default) return <XMarkIcon size={25} color={'rgb(156, 163, 175)'} />;
 if (type === satusList.disabled) return <CheckIcon size={25} color={'rgb(156, 163, 175)'} />;
 if (type === satusList.eliminated) return <TrashIcon size={25} color={'rgb(239, 68, 68)'} />;
 if (type === satusList.view) return <PlusIcon size={25} color={'rgb(156, 163, 175)'} />;
 if (type === satusList.hidde) return <XMarkIcon size={25} color={'rgb(156, 163, 175)'} />;
 if (type === satusList.arrowLeft)
  return <ArrowLeftCircleIcon size={50} color={'rgb(156, 163, 175)'} />;
 if (type === satusList.refresh) return <ArrowPathIcon size={25} color={'rgb(156, 163, 175)'} />;
 if (type === satusList.expand)
  return <ArrowsPointingOutIcon size={25} color={'rgb(156, 163, 175)'} />;
 if (type === satusList.eye) return <EyeIcon size={25} color={'rgb(156, 163, 175)'} />;
 if (type === satusList.edit) return <PencilIcon size={25} color={'rgb(156, 163, 175)'} />;

 return null;
};

export { CustomButtonIcon };

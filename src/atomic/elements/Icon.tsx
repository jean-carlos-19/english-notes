import React from 'react';
import { IconProps } from '@/types';
import { typesIconConst } from '@/constants';
import {
 PlusIcon,
 TrashIcon,
 XMarkIcon,
 CheckIcon,
 ArrowsPointingOutIcon,
 EyeIcon,
 PencilIcon,
 PlusCircleIcon,
 SpeakerWaveIcon,
 EyeSlashIcon,
 MagnifyingGlassIcon,
 ArrowLeftCircleIcon,
 ArrowPathIcon,
 ClockIcon,
} from 'react-native-heroicons/solid';

const Icon = (props: IconProps) => {
 const { type, color, size, strokeWidth } = props;
 if (type === typesIconConst.default)
  return <XMarkIcon size={size} color={color} strokeWidth={strokeWidth} />;
 if (type === typesIconConst.enable)
  return <CheckIcon size={size} color={color} strokeWidth={strokeWidth} />;
 if (type === typesIconConst.elimited)
  return <TrashIcon size={size} color={color} strokeWidth={strokeWidth} />;
 if (type === typesIconConst.view)
  return <PlusIcon size={size} color={color} strokeWidth={strokeWidth} />;
 if (type === typesIconConst.hidde)
  return <XMarkIcon size={size} color={color} strokeWidth={strokeWidth} />;
 if (type === typesIconConst.arrowLeft)
  return <ArrowLeftCircleIcon size={size} color={color} strokeWidth={strokeWidth} />;
 if (type === typesIconConst.refresh)
  return <ArrowPathIcon size={size} color={color} strokeWidth={strokeWidth} />;
 if (type === typesIconConst.expand)
  return <ArrowsPointingOutIcon size={size} color={color} strokeWidth={strokeWidth} />;
 if (type === typesIconConst.eye)
  return <EyeIcon size={size} color={color} strokeWidth={strokeWidth} />;
 if (type === typesIconConst.edit)
  return <PencilIcon size={size} color={color} strokeWidth={strokeWidth} />;
 if (type === typesIconConst.create)
  return <PlusCircleIcon size={size} color={color} strokeWidth={strokeWidth} />;
 if (type === typesIconConst.MicrophoneIcon)
  return <SpeakerWaveIcon size={size} color={color} strokeWidth={strokeWidth} />;
 if (type === typesIconConst.EyeSlashIcon)
  return <EyeSlashIcon size={size} color={color} strokeWidth={strokeWidth} />;
 if (type === typesIconConst.MagnifyingGlassIcon)
  return <MagnifyingGlassIcon size={size} color={color} strokeWidth={strokeWidth} />;
 if (type === typesIconConst.clock)
  return <ClockIcon size={size} color={color} strokeWidth={strokeWidth} />;
 return null;
};

export { Icon };

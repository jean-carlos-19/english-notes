import React from 'react';
import { IconProps } from '@/types';
import { types } from '@/constants';
import { theme } from '@/atomic/theme';
import {
 EyeIcon,
 TrashIcon,
 ClockIcon,
 CheckIcon,
 PencilIcon,
 EyeSlashIcon,
 ArrowPathIcon,
 SpeakerWaveIcon,
 MagnifyingGlassIcon,
 ArrowLeftCircleIcon,
 DocumentArrowDownIcon,
} from 'react-native-heroicons/solid';

const Icon = (props: IconProps) => {
 const { icon } = props;

 if (icon === types.icon.enable) return <CheckIcon size={25} color={theme.gray} strokeWidth={1} />;
 if (icon === types.icon.elimited) return <TrashIcon size={25} color={theme.red} strokeWidth={1} />;
 if (icon === types.icon.arrowLeft)
  return <ArrowLeftCircleIcon size={50} color={theme.blue} strokeWidth={1.5} />;
 if (icon === types.icon.refresh)
  return <ArrowPathIcon size={25} color={theme.gray} strokeWidth={2} />;
 if (icon === types.icon.eye) return <EyeIcon size={30} color={theme.gray} strokeWidth={5} />;
 if (icon === types.icon.edit) return <PencilIcon size={25} color={theme.gray} strokeWidth={1} />;
 if (icon === types.icon.MicrophoneIcon)
  return <SpeakerWaveIcon size={25} color={theme.blue} strokeWidth={2} />;
 if (icon === types.icon.EyeSlashIcon)
  return <EyeSlashIcon size={30} color={theme.gray} strokeWidth={5} />;
 if (icon === types.icon.MagnifyingGlassIcon)
  return <MagnifyingGlassIcon size={30} color={theme.blue} strokeWidth={2} />;
 if (icon === types.icon.clock) return <ClockIcon size={25} color={theme.blue} strokeWidth={2} />;
 if (icon === types.icon.document)
  return <DocumentArrowDownIcon size={25} color={theme.blue} strokeWidth={2} />;
 return null;
};

export { Icon };

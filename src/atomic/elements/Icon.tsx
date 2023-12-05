import React from 'react';
import { IconProps } from '@/types';
import { typesIcon } from '@/constants';
import { theme } from '@/atomic/theme';
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
 const { icon } = props;

 if (icon === typesIcon.enable) return <CheckIcon size={25} color={theme.gray} strokeWidth={1} />;
 if (icon === typesIcon.elimited) return <TrashIcon size={25} color={theme.red} strokeWidth={1} />;
 if (icon === typesIcon.arrowLeft)
  return <ArrowLeftCircleIcon size={50} color={theme.blue} strokeWidth={1.5} />;
 if (icon === typesIcon.refresh)
  return <ArrowPathIcon size={25} color={theme.gray} strokeWidth={2} />;
 if (icon === typesIcon.eye) return <EyeIcon size={30} color={theme.gray} strokeWidth={5} />;
 if (icon === typesIcon.edit) return <PencilIcon size={25} color={theme.gray} strokeWidth={1} />;
 if (icon === typesIcon.MicrophoneIcon)
  return <SpeakerWaveIcon size={25} color={theme.blue} strokeWidth={2} />;
 if (icon === typesIcon.EyeSlashIcon)
  return <EyeSlashIcon size={30} color={theme.gray} strokeWidth={5} />;
 if (icon === typesIcon.MagnifyingGlassIcon)
  return <MagnifyingGlassIcon size={30} color={theme.blue} strokeWidth={2} />;
 if (icon === typesIcon.clock) return <ClockIcon size={25} color={theme.blue} strokeWidth={2} />;
 return null;
};

export { Icon };

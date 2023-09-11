import React from 'react';
import { IconProps } from '@/types';
import { typesIconConst } from '@/constants';
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
 PlusCircleIcon,
} from 'react-native-heroicons/solid';

const Icon = (props: IconProps) => {
 const { type, color,size,strokeWidth } = props;
 if (type === typesIconConst.default) return <XMarkIcon size={size} color={color} strokeWidth={strokeWidth} />;
 if (type === typesIconConst.disabled) return <CheckIcon size={size} color={color} strokeWidth={strokeWidth} />;
 if (type === typesIconConst.elimited) return <TrashIcon size={size} color={color} strokeWidth={strokeWidth} />;
 if (type === typesIconConst.view) return <PlusIcon size={size} color={color} strokeWidth={strokeWidth} />;
 if (type === typesIconConst.hidde) return <XMarkIcon size={size} color={color} strokeWidth={strokeWidth} />;
 if (type === typesIconConst.arrowLeft) return <ArrowLeftCircleIcon size={size} color={color} strokeWidth={strokeWidth} />;
 if (type === typesIconConst.refresh) return <ArrowPathIcon size={size} color={color} strokeWidth={strokeWidth} />;
 if (type === typesIconConst.expand) return <ArrowsPointingOutIcon size={size} color={color} strokeWidth={strokeWidth} />;
 if (type === typesIconConst.eye) return <EyeIcon size={size} color={color} strokeWidth={strokeWidth} />;
 if (type === typesIconConst.edit) return <PencilIcon size={size} color={color} strokeWidth={strokeWidth} />;
 if (type === typesIconConst.create) return <PlusCircleIcon size={size} color={color} strokeWidth={strokeWidth} />;

 return null;
};

export { Icon };

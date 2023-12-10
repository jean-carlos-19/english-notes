import React from 'react';
import { Text } from 'react-native';
import { types } from '@/constants';
import { CustomTextProps, statusText } from '@/types';

const getClassName = (type: statusText): string => {
 let className: string = '';
 if (type === types.text.primary) className = 'text-blue-900 font-semibold';
 if (type === types.text.seccundary) className = 'text-slate-800';
 if (type === types.text.error) className = '';
 return className;
};

const getSizeStyle = (size: string): string => {
 let className: string = '';
 if (size === types.styleText.normal) className = 'text-sm';
 if (size === types.styleText.xl) className = 'text-xl';
 if (size === types.styleText['2xl']) className = 'text-2xl';
 if (size === types.styleText['3xl']) className = 'text-3xl';
 return className;
};
const CustomText = (props: CustomTextProps) => {
 const className: string = getClassName(props.variant);
 const size: string = getSizeStyle(props.size);
 return <Text className={`${className} ${size} text-xl`}>{props.text}</Text>;
};

export { CustomText };

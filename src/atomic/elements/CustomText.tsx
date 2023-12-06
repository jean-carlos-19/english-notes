import { CustomTextProps, statusText } from '@/types';
import { typesText, typesSizeTextStyle } from '@/constants';
import { Text } from 'react-native';
import React from 'react';

const getClassName = (type: statusText): string => {
 let className: string = '';
 if (type === typesText.primary) className = 'text-blue-900 font-semibold';
 if (type === typesText.seccundary) className = 'text-slate-800';
 if (type === typesText.error) className = '';
 return className;
};

const getSizeStyle = (size: string): string => {
 let className: string = '';
 if (size === typesSizeTextStyle.normal) className = 'text-sm';
 if (size === typesSizeTextStyle.xl) className = 'text-xl';
 if (size === typesSizeTextStyle['2xl']) className = 'text-2xl';
 if (size === typesSizeTextStyle['3xl']) className = 'text-3xl';
 return className;
};
const CustomText = (props: CustomTextProps) => {
 const className: string = getClassName(props.variant);
 const size: string = getSizeStyle(props.size);
 return <Text className={`${className} ${size} text-xl`}>{props.text}</Text>;
};

export { CustomText };

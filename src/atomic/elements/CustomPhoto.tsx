import { CustomPhotoProps } from '@/types';
import React from 'react';
import { View, Image } from 'react-native';

const CustomPhoto = (props: CustomPhotoProps) => {
 return (
  <View
   className="flex-row justify-center items-center"
   style={{ width: props.image.size[0], height: props.image.size[1] }}
  >
   <Image
    className={props.className}
    source={props.image.src}
    alt={props.image.alt}
    style={{ width: '60%', height: props.image.size[1] }}
    resizeMode="center"
   />
  </View>
 );
};

export { CustomPhoto };

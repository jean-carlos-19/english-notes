import { CustomPhotoProps } from '@/types';
import React from 'react';
import { View, Image } from 'react-native';

const CustomPhoto = (props: CustomPhotoProps) => {
 const { className, image } = props;
 return (
  <View
   className="flex-row justify-center items-center"
   style={{ width: image.size[0], height: image.size[1] }}
  >
   <Image
    className={className}
    source={image.src}
    alt={image.alt}
    style={{ width: '60%', height: image.size[1] }}
    resizeMode="center"
   />
  </View>
 );
};

export { CustomPhoto };

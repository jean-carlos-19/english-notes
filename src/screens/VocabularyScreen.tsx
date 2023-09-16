import React from 'react'
import { Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types';
type Props = NativeStackScreenProps<RootStackParamList, 'Vocabulary'>;

const VocabularyScreen = (props:Props) => {
    console.log(props.route.params.category)
  return (
    <View>
      <Text> Welcome Vocabulary</Text>
    </View>
  )
}

export {VocabularyScreen}

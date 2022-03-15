import { VFC } from 'react';
import { Text } from 'react-native';

import { View } from '../FlexView/FlexView';
import { DeepChild } from '../DeepChild/DeepChild';


export const Child: VFC = () => {

  return (
    <View
      jc='center'
      ai='center'
    >
      <Text>Child Component</Text>
      <DeepChild />
    </View>
  );
};

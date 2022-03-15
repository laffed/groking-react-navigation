import { FC } from 'react';
import {
  View as RNView, StyleSheet, FlexStyle, ViewStyle
} from 'react-native';


export const View: FC<{
  jc?: FlexStyle['justifyContent'];
  ai?: FlexStyle['alignItems'];
  containerStyles?: ViewStyle;
}> = ({ children, jc, ai, containerStyles }) => {

  const customStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: jc ?? 'flex-start',
      alignItems: ai ?? 'flex-start',
      ...containerStyles,
    },
  });

  return (
    <RNView style={ customStyles.container }>
      {children}
    </RNView>
  );
};

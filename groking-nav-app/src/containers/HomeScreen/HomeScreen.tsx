import { VFC } from 'react';
import { Text } from 'react-native';

import { View } from 'components';
import { TabStackScreenProp, TabRoutes } from 'navigation';


export const HomeScreen: VFC<TabStackScreenProp<TabRoutes.HOME>> = () => {

  return (
    <View
      jc='center'
      ai='center'
    >
      <Text>
        Home
      </Text>
    </View>
  );
};

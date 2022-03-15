import { VFC } from 'react';
import { Text } from 'react-native';

import { ScreenView } from 'components';
import { TabStackScreenProp, TabRoutes } from 'navigation';


export const HomeScreen: VFC<TabStackScreenProp<TabRoutes.HOME>> = () => {

  return (
    <ScreenView
      jc='center'
      ai='center'
    >
      <Text>
        Home
      </Text>
    </ScreenView>
  );
};

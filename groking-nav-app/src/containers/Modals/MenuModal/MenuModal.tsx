import { VFC } from 'react';
import { Text } from 'react-native';

import { RootStackScreenProp, ModalRoutes } from 'navigation';
import { ScreenView } from 'components';


export const MenuModal: VFC<RootStackScreenProp<ModalRoutes.MENU>> = () => {
  return (
    <ScreenView
      jc='center'
      ai='center'
    >
      <Text>
        My Profile Menu
      </Text>
    </ScreenView>
  );
};

import { VFC } from 'react';

import { RootStackScreenProp, ModalRoutes } from 'navigation';
import { View, Child } from 'components';


export const MenuModal: VFC<RootStackScreenProp<ModalRoutes.MENU>> = () => {
  return (
    <View
      jc='center'
      ai='center'
    >
      <Child />
    </View>
  );
};

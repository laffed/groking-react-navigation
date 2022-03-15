import { useCallback, VFC } from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-paper';

import { ScreenView } from 'components';
import { TabStackScreenProp, TabRoutes, ModalRoutes } from 'navigation';


export const ProfileScreen: VFC<TabStackScreenProp<TabRoutes.PROFILE>> = ({ navigation }) => {

  const onPress = useCallback(() => {
    navigation.navigate(ModalRoutes.MENU);
  }, [navigation]);

  return (
    <ScreenView
      jc='center'
      ai='center'
    >
      <Text>
        Profile
      </Text>
      <Button onPress={ onPress }>
        Edit Profile
      </Button>
    </ScreenView>
  );
};

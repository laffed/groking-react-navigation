import { VFC, useCallback } from 'react';
import { Button } from 'react-native-paper';
import { View } from 'react-native';

import { useNavigation } from 'hooks/useNavigation';
import { RootNavigatorRoutes, TabRoutes } from 'navigation/routes';


export const DeepChild: VFC = () => {
  const { navigate } = useNavigation();
  const onHomePress = useCallback(() => {
    navigate(RootNavigatorRoutes.TAB_STACK, {
      screen: TabRoutes.HOME,
    });
  }, [navigate]);

  return (
    <View>
      <Button onPress={ onHomePress }>Go to Home</Button>
    </View>
  );
};

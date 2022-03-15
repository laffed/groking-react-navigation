import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { useCallback, VFC } from 'react';
import { RouteProp } from '@react-navigation/native';
import { TouchableNativeFeedback, Text, View } from 'react-native';

import { RootNavigatorParamsList, RootStackScreenProp } from '../types';
import { ModalRoutes } from '../routes';


type Props = {
  route: RouteProp<RootNavigatorParamsList, ModalRoutes>;
  navigation: RootStackScreenProp<ModalRoutes>['navigation'];
}
type Options = ((props: Props) => NativeStackNavigationOptions);


const HeaderX: VFC<Props> = ({ navigation }) => {
  const onPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <TouchableNativeFeedback onPress={ onPress }>
      <Text>
        X
      </Text>
    </TouchableNativeFeedback>
  );
};

export const modalScreenOptions: Options = (props) => ({
  presentation: 'modal',
  headerShown: true,
  headerRight: () => <HeaderX { ...props } />,
});

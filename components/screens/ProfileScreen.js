import { Icon, Layout, Text, TopNavigationAction } from '@ui-kitten/components';
import React from 'react';
import { SafeAreaView } from 'react-native';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

export const ProfileScreen = ({ navigation }) => {

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>DETAILS</Text>
      </Layout>
    </SafeAreaView>
  );
};
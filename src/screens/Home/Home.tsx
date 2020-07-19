import { View, Text, Button } from 'react-native';
import React from 'react';
import s from './styles';

const Home: React.FC = ({ navigation }) => {
  return (
    <View style={s.root}>
      <Text style={s.root}>Component</Text>
      <Button
        title="Press"
        onPress={(): void => navigation.navigate('Settings')}
      />
    </View>
  );
};

export default Home;

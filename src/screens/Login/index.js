import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';
import {logo} from '../../assets';
import Card from '../../components/card';
import CustomText from '../../components/customText';
const Login = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
      <Card>
        <Text style={{color: 'white'}}>index</Text>
        {/* <CustomText style={{color: 'white'}}>index</CustomText> */}
      </Card>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 32,
    height: 32,
  },
});

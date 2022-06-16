import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';
import {eye, logo} from '../../assets';
import Card from '../../components/card';
import CustomText from '../../components/customText';
import OnboardInput from '../../components/onboardInput';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import CustomButton from '../../components/customButton';
const Login = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
      <Card style={{marginTop: 42, paddingBottom: 40}}>
        <View style={{alignItems: 'center'}}>
          <CustomText
            style={{
              color: colors.greyTextColor,
              fontSize: 14,
              fontWeight: '500',
              marginTop: 40,
            }}>
            WELCOME BACK
          </CustomText>
          <CustomText
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: '600',
              marginTop: 8,
            }}>
            Log into your account
          </CustomText>
        </View>
        <CustomText
          style={{
            color: colors.textColor,
            fontSize: 14,
            fontWeight: '500',
            marginTop: 34,
          }}>
          Email or Username
        </CustomText>
        <OnboardInput
          placeholder="Enter your email"
          //   letfIcon={false}
          //   rightIcon={true}
          //   rIconName={eye}
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: 16,
            justifyContent: 'space-between',
          }}>
          <CustomText
            style={{
              color: colors.textColor,
              fontSize: 14,
              fontWeight: '500',
            }}>
            Password
          </CustomText>
          <CustomText
            style={{
              color: colors.textColor,
              fontSize: 12,
              fontWeight: '500',
            }}>
            Forgot Password?
          </CustomText>
        </View>
        <OnboardInput
          placeholder="Your supersafe password "
          rightIcon={true}
          rIconName={eye}
        />
        <CustomButton style={{marginTop: 20}} textStyle={{fontSize: 16}}>
          Login now
        </CustomButton>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 14,
            alignItems: 'center',
          }}>
          <CustomText
            style={{
              color: colors.textColor,
              fontSize: 14,
              fontWeight: '500',
            }}>
            Not registered yet?
          </CustomText>
          <CustomText
            style={{
              color: colors.white,
              fontSize: 14,
              fontWeight: '500',
            }}>
            {' '}
            Register
          </CustomText>
          <Icon
            name="arrowright"
            size={14}
            color={colors.white}
            style={{paddingLeft: 5}}
          />
        </View>
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

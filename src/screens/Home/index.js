import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import CustomText from '../../components/customText';
import {colors} from '../../constants/colors';
import Card from '../../components/card';
import OnboardInput from '../../components/onboardInput';
import {chatIcon, comment} from '../../assets';
const Home = () => {
  return (
    <ScrollView style={{paddingTop: 80, paddingHorizontal: 16}}>
      <CustomText
        style={{color: colors.white, fontWeight: '500', fontSize: 28}}>
        Hello Jane
      </CustomText>
      <CustomText
        style={{
          color: colors.greyTextColor,
          fontWeight: '400',
          fontSize: 16,
          lineHeight: 25,
        }}>
        How are you doing today? Would you like to share something with the
        community 🤗
      </CustomText>
      <Card
        style={{
          paddingTop: 24,
          paddingHorizontal: 12,
          paddingBottom: 24,
          marginTop: 32,
        }}>
        <CustomText
          style={{
            color: colors.white,
            fontWeight: '500',
            fontSize: 18,
          }}>
          Create post
        </CustomText>
        <OnboardInput
          backgroundColor={'#191920'}
          placeholder="How are you feeling today?"
          leftIcon={true}
          lIconName={chatIcon}
          lIconStyle={{
            borderRadius: 30 / 2,
            backgroundColor: colors.primaryBg,
            width: 30,
            height: 30,
            // padding: 18,
          }}
        />
      </Card>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});

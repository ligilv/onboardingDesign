import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CustomText from '../../components/customText';
import {colors} from '../../constants/colors';
import Card from '../../components/card';
import OnboardInput from '../../components/onboardInput';
import {chatIcon, comment, user1} from '../../assets';
import {mockdata} from './data';
import CustomButton from '../../components/customButton';
import PostSection from './postSection';
const Home = () => {
  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 100}}
      style={{
        paddingTop: 80,
        paddingHorizontal: 16,
        backgroundColor: colors.black,
      }}>
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
          backgroundColor={colors.inputBlackShade}
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
        <CustomButton
          style={{
            marginLeft: 244,
            marginTop: 12,
          }}>
          Post
        </CustomButton>
      </Card>
      <PostSection />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});

import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
  console.log('images.logo:', images.logo);

  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [isSubmitting, setisSubmitting]= useState(false);

  const submit = () => {
  
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="h-full">
      <View className="w-full justify-center min-h-[85vh] px-4 my-6">
        <Image
          source={images.logo}
          resizeMode="contain"
          className="w-[115px] h-[35px] mx-auto"
        />
        <Text className="text-2xl text-white font-semibold mt-10">
          Log in to Aora
        </Text>
        <FormField
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles="mt-7"
          keyboardType="email-address"
        />
        <FormField
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles="mt-7"
        />
        <CustomButton
          title="Sign In"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
        />
        <View className="flex-row justify-center pt-5 gap-2">
          <Text className="text-sm text-gray-200">Don't have an account?</Text>
          <Link href="/sign-up" className="text-sm text-secondary">
            Sign Up
          </Link>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

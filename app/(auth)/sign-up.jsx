import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignUp = () => {
  console.log('images.logo:', images.logo);

  const [form, setForm] = useState({
    username: "",
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
          Sign up to Aora
        </Text>
        <FormField
          title="Username"
          value={form.username}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles="mt-10"
        />
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
          title="Sign Up"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
        />
        <View className="flex-row justify-center pt-5 gap-2">
          <Text className="text-sm text-gray-200">have an account already?</Text>
          <Link href="/sign-in" className="text-sm text-secondary">
            Sign In
          </Link>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

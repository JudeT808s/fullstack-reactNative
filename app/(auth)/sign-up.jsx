import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";
import { images } from "../../constants";
import { createUser } from "../../lib/appwrite";
import { Alert } from "react-native";
import router from "expo-router";
const SignUp = () => {

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [isSubmitting, setisSubmitting]= useState(false);

  const submit = async() => {
    if(!form.username || !form.email || !form.password) {
      Alert.alert("All fields are required");
    }
    setisSubmitting(true);
    try{
      const reuslt = await createUser(form.email, form.password, form.username);

      router.replace('/home')
    }catch(e){
      Alert.alert("An error occured", e.message);
    }finally{
      setisSubmitting(false);
    }
      Alert.return;
  createUser();
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
          handleChangeText={(e) => setForm({ ...form, username: e })}
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

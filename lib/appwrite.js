import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";
import { Query } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jude.aora",
  projectId: "6716dc15001f5f37c97a",
  databaseId: "6716dd29000bfd3ac285",
  userCollectionId: "6716dd4a0002fd91787d",
  videoCollectionId: "6716dd7c0003c826ef7a",
  storageId: "6716decc002834e62ad3",
};
// Init your React Native SDK
const client = new Client();
const{
  endpoint,
platform,
projectId,
databaseId,
userCollectionId,
videoCollectionId,
storageId,
} = config
client
  .setEndpoint(endpoint)
  .setProject(projectId)
  .setPlatform(platform);
const account = new Account(client);
const avatars= new Avatars(client)
const databases= new Databases(client)

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if(!newAccount) throw Error
    const avatarUrl = avatars.getInitials(username);


    await SignIn(email, password);
    const newUser = await databases.createDocument(
        databaseId, userCollectionId, ID.unique(),{
            accountId: newAccount.$id,
            email,
            username,
            avatar: avatarUrl
        }
    )
  } catch (e) {
    console.log("error");
    throw new Error(e)
  }
};
export const SignIn = async (email, password)=> {
    try{
        await account.createEmailPasswordSession(email, password);
    }
    catch(e){
        throw new Error(e);  
    }
}
export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();
    if(!currentAccount) throw Error
    const currentUser = await databases.listDocuments(
        databaseId,
        userCollectionId,
        [Query.equal['accountId'], currentAccount.$id]
    );
    if(!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (e) {
    console.log(e);
  }
}
// Get all video Posts
export async function getAllPosts() {
  try {
    const posts = await databases.listDocuments(
      databaseId,
      videoCollectionId
    );

    return posts.documents;
  } catch (error) {
    throw new Error(error);
  }
}

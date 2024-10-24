import { Client, Account, ID , Avatars, Databases} from "react-native-appwrite";

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

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);
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
        config.databaseId, config.userCollectionId, ID.unique(),{
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
export async function SignIn(email, password) {
    try{
        const session = await account.createEmailPasswordSession(email, password)
    }
    catch(e){
        throw new Error(e)  
    }
}

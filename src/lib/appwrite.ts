import { Client, Avatars, Account, OAuthProvider } from 'react-native-appwrite'
import * as Linking from 'expo-linking'
import { openAuthSessionAsync } from 'expo-web-browser'

const appWriteConfig = {
  platform: 'com.zer0nze.imob',
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
}

const appWriteClient = new Client()

appWriteClient
  .setPlatform(appWriteConfig.platform!)
  .setProject(appWriteConfig.projectId!)
  .setEndpoint(appWriteConfig.endpoint!)

const appWriteAvatar = new Avatars(appWriteClient)
const appWriteAccount = new Account(appWriteClient)

const signInWithGoogle = async () => {
  try {
    const redirectURL = Linking.createURL('/')
    const response = await appWriteAccount.createOAuth2Session(
      OAuthProvider.Google,
      redirectURL,
    )

    if (!response) {
      throw new Error('Failed to sign in with Google')
    }

    const browserResponse = await openAuthSessionAsync(
      response.toString(),
      redirectURL,
    )

    if (browserResponse.type !== 'success') {
      throw new Error('Failed to sign in with Google')
    }

    const url = new URL(browserResponse.url)
    const secret = url.searchParams.get('secret')?.toString()
    const userId = url.searchParams.get('userId')?.toString()

    if (!secret || !userId) {
      throw new Error('Failed to sign in with Google')
    }

    const session = await appWriteAccount.createSession(secret, userId)

    if (!session) {
      throw new Error('Failed to sign in with Google')
    }

    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

const signOut = async () => {
  try {
    await appWriteAccount.deleteSession('current')
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

const getUser = async () => {
  try {
    const user = await appWriteAccount.get()

    if (user.$id) {
      const userAvatar = await appWriteAvatar.getInitials(user.name)
      return {
        ...user,
        avatar: userAvatar.toString(),
      }
    }
  } catch (error) {
    console.log(error)
    return null
  }
}

export {
  appWriteConfig,
  appWriteClient,
  appWriteAvatar,
  appWriteAccount,
  signInWithGoogle,
  signOut,
  getUser,
}

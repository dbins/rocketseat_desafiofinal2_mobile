import { GoogleSignin, statusCodes } from 'react-native-google-signin';

// EXEMPLO RETORNO USERINFO

// {
//  idToken: string,
//  serverAuthCode: string,
//  scopes: Array<string>, // on iOS this is empty array if no additional scopes are defined
//  user: {
//    email: string,
//    id: string,
//    givenName: string,
//    familyName: string,
//    photo: string, // url
//    name: string // full name
//  }

export const googleSignIn = async () => {
  // Prompts a modal to let the user sign in into your application.
  let retorno = {};
  await GoogleSignin.configure({
    webClientId: '878310133679-n440v380b04cd5pnjj8n93f4a1nkbrto.apps.googleusercontent.com',
  });
  try {
    await GoogleSignin.hasPlayServices({
      // Check if device has Google Play Services installed.
      // Always resolves to true on iOS.
      showPlayServicesUpdateDialog: true,
    });
    const userInfo = await GoogleSignin.signIn();
    retorno = userInfo;
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      retorno.error = 'User Cancelled the Login Flow';
    } else if (error.code === statusCodes.IN_PROGRESS) {
      retorno.error = 'Signing In';
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      retorno.error = 'Play Services Not Available or Outdated';
    } else {
      retorno.error = 'Some Other Error Happened';
    }
  }
  return retorno;
};

export const googleGetCurrentUser = async () => {
  // May be called eg. in the componentDidMount of your main component.
  // This method returns the current user
  // if they already signed in and null otherwise.
  let retorno = {};
  try {
    const userInfo = await GoogleSignin.signInSilently();
    retorno = userInfo;
  } catch (error) {}
  return retorno;
};

export const googleSignOut = async () => {
  // Remove user session from the device.
  const retorno = {};
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
  } catch(err){
	//Tratar o erro  
  }
  return retorno;
};

export const googleRevokeAccess = async () => {
  // Remove your application from the user authorized applications.
  try {
    await GoogleSignin.revokeAccess();
  } catch(err){
	//Tratar o erro  
  }
};

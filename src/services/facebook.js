import React, { Component } from "react";
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager
} from "react-native-fbsdk";

import { AsyncStorage } from "react-native";

export default class Facebook extends Component {
  getAccountInfo = accessData =>
    new Promise((resolve, reject) => {
      new GraphRequestManager()
        .addRequest(
          new GraphRequest(
            "/me",
            {
              accessToken: accessData.accessToken,
              parameters: {
                fields: {
                  string: "id, name, email, picture.type(large)"
                }
              }
            },
            (error, result) => {
              if (error) {
                return reject(error);
              }

              return resolve(result);
            }
          )
        )
        .start();
    });

  facebookLogin = async () => {
    let result;
    let accessData;

    try {
      const offlineUser = await AsyncStorage.getItem("@Facebook:accessData");

      if (offlineUser) {
        accessData = JSON.parse(
          await AsyncStorage.getItem("@Facebook:accessData")
        );
      } else {
        result = await LoginManager.logInWithReadPermissions([
          "public_profile",
          "email"
        ]);

        if (result.isCancelled) {
          return { error: "Usuário cancelou o Login!" };
        }

        accessData = await AccessToken.getCurrentAccessToken();
        await AsyncStorage.setItem(
          "@Facebook:accessData",
          JSON.stringify(accessData)
        );
      }

      const info = await getAccountInfo(accessData);

      //Enviar os dados para a rota de login social
      //Fazer o login automatico
      //Fazer isso pelo REDUX

      return { user: info };
    } catch (err) {
      await AsyncStorage.removeItem("@Facebook:accessData");
      console.tron.log(err);
      // return err.userInfo[Object.keys(err.userInfo)[2]].body;
      return { error: "Houve um erro ao recuperar os dados!" };
    }
  };
}

import { name } from './../node_modules/ci-info/index.d';
//.d viết tắt của data type

type RootStackParamList = { 
    //screen name: parameter type
  Home: undefined;
  Detail: {id: number, title: String, star: number} | undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
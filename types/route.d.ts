//.d viết tắt của data type

type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
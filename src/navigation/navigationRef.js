import { createNavigationContainerRef, StackActions, CommonActions } from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef();

navigationRef.push = (...args) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(...args));
  } else {
    alert('页面还没准备好');
  }
}

navigationRef.goBack = (...args) => {
  setTimeout(() => {
    navigationRef.dispatch(CommonActions.goBack(...args));
  }, 0)
}

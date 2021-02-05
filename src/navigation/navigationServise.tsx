import * as React from 'react';
import { StackActions } from '@react-navigation/native';

export const isMountedRef = React.createRef();

export const navigationRef: any = React.createRef();

class NavigationService {
  public navigate(name: string, params?: object | undefined): void {
    if (isMountedRef.current && navigationRef.current) {
      navigationRef.current.navigate(name, params);
    }
  }

  public goBack(): void {
    if (isMountedRef.current && navigationRef.current) {
      navigationRef.current.goBack();
    }
  }

  public push(name: string, params?: object | undefined): void {
    if (isMountedRef.current && navigationRef.current) {
      const pushAction = StackActions.push(name, params);

      navigationRef.current.dispatch(pushAction);
    }
  }

  public replace(name: string, params?: object | undefined): void {
    if (isMountedRef.current && navigationRef.current) {
      const pushAction = StackActions.replace(name, params);

      navigationRef.current.dispatch(pushAction);
    }
  }
}

export default new NavigationService();
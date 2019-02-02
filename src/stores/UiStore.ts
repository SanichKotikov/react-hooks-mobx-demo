import { observable, action } from 'mobx';
import { ThemeName } from '../types';

class UiStore {

  @observable theme: ThemeName;

  constructor() {
    this.theme = 'light';
  }

  @action switchTheme = (theme: ThemeName) => {
    this.theme = theme;
  };

}

export default UiStore;

import { observable, action } from 'mobx';
import { uiThemeName } from '../types';

class UiStore {

  @observable theme: uiThemeName;

  constructor() {
    this.theme = uiThemeName.Light;
  }

  @action switchTheme = (theme: uiThemeName) => {
    this.theme = theme;
  };

}

export default UiStore;

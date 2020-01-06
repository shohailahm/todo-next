import { useStaticRendering } from 'mobx-react';

import UIStore from './UIStore';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

export default function initializeStore(initialData = { postStore: {} }) {
  if (isServer) {
    return {
      uiStore: new UIStore(),
    };
  }
  if (store === null) {
    store = {
      uiStore: new UIStore(),
    };
  }

  return store;
}
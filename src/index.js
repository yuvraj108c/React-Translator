import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { IntlProvider } from "react-intl";
import { addLocaleData } from "react-intl";
import locale_en from "react-intl/locale-data/en";
import locale_fr from "react-intl/locale-data/fr";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import messages_en from "./translations/en.json";
import messages_fr from "./translations/fr.json";

addLocaleData([...locale_en, ...locale_fr]);

const messages = {
  en: messages_en,
  fr: messages_fr
};

const store = createStore(reducer);

store.subscribe(() => {
  const language = store.getState().language;
  renderIndex(language);
});

const renderIndex = language => {
  ReactDOM.render(
    <IntlProvider locale={language} messages={messages[language]}>
      <Provider store={store}>
        <App />
      </Provider>
    </IntlProvider>,
    document.getElementById("root")
  );
};

renderIndex(store.getState().language);

serviceWorker.unregister();

import React, { useState } from "react";
import { IntlProvider, FormattedMessage, FormattedDate, FormattedNumber } from "react-intl";

import EnglishMessages from "./lang/en-US.json";
import SpanishMessages from "./lang/es-ES.json";

import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [locale, setLocale] = useState("en-US");

  const changeMode = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const toogleLocale = () => {
    if (locale === "en-US") {
      setLocale("es-ES");
    } else {
      setLocale("en-US");
    }
  };

  return (
    <IntlProvider
      locale={locale}
      messages={locale === "en-US" ? EnglishMessages : SpanishMessages}
    >
      <div className="App">
        <div className={theme === "dark" ? "dark" : "light"}>
          <h2 className="title__mode">
            {theme}, {locale}
          </h2>
          <div>
            <button onClick={changeMode}>Change mode</button>
          </div>
          <div>
            <button onClick={toogleLocale}>Change locale</button>
          </div>
          <div className="principal__text">
            <FormattedMessage
              id="app.welcome"
              defaultMessage="Welcome, {name}"
              values={{ name: "Manu" }}
            />
          </div>
          <div className="principal__date">
            <FormattedDate
              value={Date.now()}
              year="numeric"
              month="long"
              day="numeric"
              weekday="long"
              weekday="long"
            />
          </div>
          <div>
          <FormattedNumber value={10000.3523423} maximumFractionDigits={2} />
          </div>
        </div>
      </div>
    </IntlProvider>
  );
};

export default App;

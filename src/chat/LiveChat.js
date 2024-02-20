import React, { useEffect } from "react";

export default function Livechat() {
  useEffect(() => {
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: "left",
      locale: "en",
      type: "standard",
    };

    (function (d, t) {
      var BASE_URL = "https://app.chatwoot.com";
      var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + "/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      s.parentNode.insertBefore(g, s);

      g.onload = function () {
        window.chatwootSDK.run({
          websiteToken: process.env.REACT_APP_WEBSITE_TOKEN,
          baseUrl: BASE_URL,
        });
      };
    })(document, "script");
  }, []);

  returnnull;
}

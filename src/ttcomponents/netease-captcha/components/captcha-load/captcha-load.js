require("./../../runtime"), require("./../../common"), (tt.neCaptchaJsonp = tt.neCaptchaJsonp || []).push([[6], {
  20: function (e, t, a) {
    "use strict";

    var s,
        n = a(4),
        o = (s = n) && s.__esModule ? s : {
      default: s
    };
    Component({
      behaviors: [o.default],
      externalClasses: ["load-captcha-cls"],
      properties: {
        status: {
          type: String,
          value: "done"
        }
      }
    });
  }
}, [[20, 1, 0]]]);
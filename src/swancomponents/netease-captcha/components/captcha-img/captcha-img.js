require("./../../runtime"), require("./../../common"), (swan.neCaptchaJsonp = swan.neCaptchaJsonp || []).push([[4], {
  14: function (t, e, i) {
    "use strict";

    var a = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];

        for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
      }

      return t;
    },
        r = i(2),
        h = n(r),
        s = n(i(4));

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    Component({
      behaviors: [s.default],
      externalClasses: ["image-class"],
      properties: {
        mode: String,
        autoWidth: Boolean,
        urls: {
          type: Array,
          observer: function (t, e) {
            if (t && (!t || !e || t.join(" ") !== e.join(" "))) {
              var i = t.length ? t[0] : "";
              i && i === this.data.url && "swan" === "swan" && this.triggerEvent("load", {
                height: this.data.height,
                width: this.data.width,
                url: i
              }), this.setData({
                url: i
              });
            }
          }
        },
        retry: {
          type: Boolean,
          value: !0
        },
        imgStyle: String,
        swanIdForSystem: {
          type: String,
          value: "123445"
        }
      },
      data: {
        url: "",
        width: 0,
        height: 0,
        wrapHeight: 0
      },
      ready: function () {
        var t = this;
        this.data.autoWidth && (this.getHeight(), this.unsubscribeStore = this.store.subscribe(function (e, i) {
          "UPDATE_VISIBLE" === e.type && i.visible && !t.data.wrapHeight && t.getHeight();
        }));
      },
      detached: function () {
        this.unsubscribeStore && this.unsubscribeStore();
      },
      methods: {
        getHeight: function () {
          var t = this;
          this.createSelectorQuery().select(".captcha-img").boundingClientRect(function (e) {
            if (e) {
              var i = e.height;
              t.data.autoWidth && t.data.height && t.setData({
                width: (i / t.data.height * t.data.width).toFixed(2)
              }), 0 !== i && t.setData({
                wrapHeight: i
              });
            }
          }).exec();
        },
        handleLoaded: function (t) {
          var e = t.detail.height,
              i = t.detail.width;
          this.data.autoWidth && (this.store && this.store.state.visible && !this.data.wrapHeight && this.getHeight(), this.data.wrapHeight && (i = (this.data.wrapHeight / e * i).toFixed(2)), this.setData({
            width: i,
            height: e
          })), this.triggerEvent("load", {
            height: e,
            width: i,
            url: this.data.url
          });
        },
        handleError: function (t) {
          var e = this.data.urls,
              i = e.indexOf(this.data.url);
          this.data.retry && i !== e.length - 1 || this.triggerEvent("error", a({}, t.detail)), this.setData({
            url: e[i + 1]
          });
          var s = new h.default(r.REQUEST_IMG_ERROR, t.detail.errMsg);
          s.data = {
            url: e[i],
            type: "image",
            index: i
          }, this.triggerEvent("tryerror", s);
        }
      }
    });
  }
}, [[14, 1, 0]]]);
require("./../../runtime"), require("./../../common"), (tt.neCaptchaJsonp = tt.neCaptchaJsonp || []).push([[3], {
  21: function (t, a, e) {
    "use strict";

    var i,
        s,
        n = Object.assign || function (t) {
      for (var a = 1; a < arguments.length; a++) {
        var e = arguments[a];

        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
      }

      return t;
    },
        r = T(e(1)),
        o = e(0),
        c = e(2),
        h = T(c),
        u = T(e(12)),
        d = T(e(6)),
        f = T(e(4)),
        l = T(e(13)),
        p = e(5);

    function T(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function E(t) {
      return function () {
        var a = t.apply(this, arguments);
        return new Promise(function (t, e) {
          return function i(s, n) {
            try {
              var r = a[s](n),
                  o = r.value;
            } catch (t) {
              return void e(t);
            }

            if (!r.done) return Promise.resolve(o).then(function (t) {
              i("next", t);
            }, function (t) {
              i("throw", t);
            });
            t(o);
          }("next");
        });
      };
    }

    Component({
      behaviors: [f.default],
      properties: {
        visible: {
          type: Boolean,
          value: !1,
          observer: function (t, a) {
            t !== a && this.toggleVisible(t);
          }
        }
      },
      data: {
        CAPTCHA_TYPE: o.CAPTCHA_TYPE,
        VERIFY_STATUS: o.VERIFY_STATUS,
        minWidth: o.WIDTH_RANGE[0],
        modalAnimationData: {},
        maskOpacity: 0,
        popupVisible: !1,
        captchaType: "",
        loadInfo: {
          status: "aaa",
          data: null
        },
        countsOfVerifyError: 0,
        verifyStatus: "",
        captchaTip: "",
        theme: "",
        width: 0,
        isReady: !1,
        isFromInit: !1,
        widthIsNotAuto: !1,
        popWidth: ""
      },
      created: function () {
        var t = tt.createAnimation();
        this.modalAnimation = t;
      },
      attached: function () {
        var t = this;
        this.initData(), this.setData({
          isFromInit: !0
        }), this.triggerEvent("init"), this.unsubscribeStore = this.store.subscribe(function (a, e) {
          "UPDATE_TYPE" === a.type && t.setData({
            captchaType: e.captchaType
          });
        });
      },
      detached: function () {
        this.unsubscribeStore();
      },
      methods: {
        initData: function () {
          var t = this.store.state,
              a = t.config,
              e = t.customStyles,
              i = t.$fetch;
          if (!a) throw new h.default(c.CONFIG_ERROR, "[core] config must not be null");
          var s = a.theme,
              n = "auto" !== e.width;
          this.setData({
            config: a,
            theme: s,
            customStyles: e,
            widthIsNotAuto: n,
            popWidth: n ? e.width + "px" : "auto"
          }), this.$fetch = i;
        },
        toggleVisible: function (t) {
          var a = this;
          if (t) this.setData({
            popupVisible: t
          }), !this.data.isFromInit && this.store.state.token || this.reset(), setTimeout(function () {
            a.modalAnimation.opacity(1).translateY(0).step({
              duration: 300,
              timingFunction: "linear"
            }), a.setData({
              modalAnimationData: a.modalAnimation.export(),
              maskOpacity: .3
            }), a.store.commit("UPDATE_VISIBLE", t);
          }, 30);else {
            this.modalAnimation.opacity(0).translateY(-40).step({
              duration: 200,
              timingFunction: "ease-out"
            }), this.setData({
              modalAnimationData: this.modalAnimation.export(),
              maskOpacity: 0
            }), setTimeout(function () {
              a.setData({
                popupVisible: t
              }), a.triggerEvent("closed"), a.store.commit("UPDATE_VISIBLE", t);
            }, 200);
          }
        },
        reset: function () {
          this.setData({
            loadInfo: {
              status: "loading",
              data: null
            },
            countsOfVerifyError: 0,
            verifyStatus: "",
            captchaTip: "",
            isFromInit: !1
          }), this.refresh();
        },
        resetIfNeed: function () {
          var t = this.data,
              a = t.countsOfVerifyError,
              e = t.verifyStatus;
          a > o.MAX_VERIFICATION && e === o.VERIFY_STATUS.MAX_ERROR && this.reset();
        },
        refresh: function () {
          var t = {
            verifyStatus: "",
            token: this.store.state.token
          };
          this.fetchCaptcha(t);
        },
        fetchCaptcha: (s = E(r.default.mark(function t(a) {
          var e,
              i,
              s,
              n,
              f,
              l,
              p,
              T,
              E,
              I,
              A,
              v,
              m = this;
          return r.default.wrap(function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return e = this.data.langPkg, this.setData({
                  verifyStatus: "",
                  loadInfo: {
                    status: "loading",
                    data: null
                  },
                  captchaTip: e.LOADING
                }), i = this.data.config, s = i.captchaId, n = i.captchaType, f = this.store.state, l = f.drp, p = f.token, T = Object.assign({
                  id: s,
                  https: !0,
                  type: n,
                  version: "1.1.4",
                  drp: l,
                  token: p,
                  dev: o.DEVICE_TYPE.TOUCH,
                  cb: (0, u.default)(),
                  width: this.data.width,
                  runEnv: o.RUNENV["tt"]
                }, a), E = "/api/v2/mp/get", t.prev = 6, t.next = 9, this.$fetch({
                  url: E,
                  data: T,
                  onTryError: (0, d.default)(this.data.config)
                });

              case 9:
                I = t.sent, A = I.data, this.setData({
                  loadInfo: {
                    status: "loading",
                    data: A
                  }
                }), this.store.commit("UPDATE_TOKEN", {
                  token: A.token
                }), this.store.commit("UPDATE_TYPE", {
                  captchaType: A.type
                }), t.next = 21;
                break;

              case 16:
                t.prev = 16, t.t0 = t.catch(6), v = new h.default(c.REQUEST_API_ERROR, t.t0.message, {
                  url: E
                }), this.setData({
                  loadInfo: {
                    status: "error",
                    data: null
                  },
                  captchaTip: e.LOAD_FAIL
                }), this.catchError(v);

              case 21:
                this.data.width || this.createSelectorQuery().select(".yidun-captcha__wrap").boundingClientRect(function (t) {
                  m.setData({
                    width: t.width
                  });
                }).exec();

              case 22:
              case "end":
                return t.stop();
            }
          }, t, this, [[6, 16]]);
        })), function (t) {
          return s.apply(this, arguments);
        }),
        finishLoad: function (t) {
          var a = t.detail ? "error" : "done",
              e = void 0;
          if (t.detail) e = this.data.langPkg.LOAD_FAIL;else switch (this.store.state.captchaType) {
            case o.CAPTCHA_TYPE.JIGSAW:
              e = this.data.langPkg.SLIDE_TIP;
              break;

            case o.CAPTCHA_TYPE.POINT:
            case o.CAPTCHA_TYPE.ICON_POINT:
              e = this.data.langPkg.CLICK_IN_TURN;
              break;

            default:
              e = "";
          }
          this.setData({
            loadInfo: n({}, this.data.loadInfo, {
              status: a
            }),
            captchaTip: e
          }), "error" === a && this.catchError(t.detail), "done" !== a || this.data.isReady || (this.setData({
            isReady: !0
          }), this.triggerEvent("ready"));
        },
        catchError: function (t) {
          this.triggerEvent("coreerror", t);
        },
        onVerifyCaptcha: function (t) {
          var a = this.data.width,
              e = this.store.state.token,
              i = t.detail,
              s = i.data,
              r = i.type;
          this.verifyCaptcha(n({
            token: e,
            width: a,
            type: r
          }, s));
        },
        verifyCaptcha: (i = E(r.default.mark(function t(a) {
          var e,
              i,
              s,
              n,
              f,
              T,
              E,
              I,
              A,
              v,
              m,
              g,
              y,
              _ = this;

          return r.default.wrap(function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return this.setData({
                  verifyStatus: o.VERIFY_STATUS.DOING
                }), e = this.store.state, i = e.captchaType, s = e.extraData, n = "/api/v2/mp/check", f = function (t) {
                  var e = _.data.countsOfVerifyError + 1,
                      s = "";
                  e > o.MAX_VERIFICATION ? s = _.data.langPkg.VERIFY_OUT_OF_LIMIT : i !== o.CAPTCHA_TYPE.JIGSAW && (s = _.data.langPkg.VERIFY_ERROR), _.setData({
                    countsOfVerifyError: e,
                    verifyStatus: e > o.MAX_VERIFICATION ? o.VERIFY_STATUS.MAX_ERROR : o.VERIFY_STATUS.ERROR,
                    captchaTip: s
                  });
                  var r = null;
                  r = t ? new h.default(c.REQUEST_API_ERROR, t.message, {
                    url: n,
                    token: a ? a.token : ""
                  }) : new h.default(c.BUSINESS_ERROR, "Failed to verify captcha.", {
                    url: n
                  }), _.triggerEvent("verify", [r]), e <= o.MAX_VERIFICATION && setTimeout(function () {
                    _.refresh();
                  }, [o.CAPTCHA_TYPE.POINT, o.CAPTCHA_TYPE.ICON_POINT].includes(i) ? 1200 : 300);
                }, T = this.data.config, E = T.captchaId, I = T.zoneId, A = Object.assign({}, {
                  id: E,
                  extraData: s,
                  version: "1.1.4",
                  cb: (0, u.default)(),
                  runEnv: o.RUNENV["tt"]
                }, a), t.prev = 6, t.next = 9, this.$fetch({
                  url: n,
                  method: "POST",
                  data: A,
                  onTryError: (0, d.default)(this.data.config, {
                    token: A.token
                  })
                });

              case 9:
                v = t.sent, (m = v.data).result ? (this.setData({
                  verifyStatus: o.VERIFY_STATUS.SUCCESS,
                  captchaTip: i === o.CAPTCHA_TYPE.JIGSAW ? "" : this.data.langPkg.VERIFY_SUCCESS
                }), g = (0, l.default)((0, p.eypt)(m.validate + "::")), y = I ? I + "_" + g : g, this.triggerEvent("verify", [null, y]), this.closeDialog()) : f(), t.next = 17;
                break;

              case 14:
                t.prev = 14, t.t0 = t.catch(6), f(t.t0);

              case 17:
              case "end":
                return t.stop();
            }
          }, t, this, [[6, 14]]);
        })), function (t) {
          return i.apply(this, arguments);
        }),
        closeDialog: function () {
          this.triggerEvent("close");
        }
      }
    });
  }
}, [[21, 1, 0]]]);
require("./../../runtime"), require("./../../common"), (tt.neCaptchaJsonp = tt.neCaptchaJsonp || []).push([[7], {
  19: function (t, e, a) {
    "use strict";

    var n,
        i,
        r = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];

        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
      }

      return t;
    },
        s = a(5),
        o = a(3),
        c = l(a(4)),
        u = a(0),
        h = l(a(6)),
        d = l(a(1));

    function l(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function p(t) {
      return function () {
        var e = t.apply(this, arguments);
        return new Promise(function (t, a) {
          return function n(i, r) {
            try {
              var s = e[i](r),
                  o = s.value;
            } catch (t) {
              return void a(t);
            }

            if (!s.done) return Promise.resolve(o).then(function (t) {
              n("next", t);
            }, function (t) {
              n("throw", t);
            });
            t(o);
          }("next");
        });
      };
    }

    Component({
      behaviors: [c.default],
      externalClasses: ["point-captcha-cls"],
      properties: {
        captchaType: {
          type: Number
        },
        loadInfo: {
          type: Object,
          value: {},
          observer: function (t, e) {
            if (t.status !== e.status) if ("loading" === t.status && this.resetPoints(), "done" === t.status) {
              var a = "";
              this.data.captchaType === u.CAPTCHA_TYPE.POINT && (a = t.data.front.replace(/./g, ' "$&"')), this.setData({
                answer: a
              });
            } else this.setData({
              answerBg: ""
            });
          }
        },
        verifyStatus: {
          type: String,
          value: ""
        }
      },
      data: {
        VERIFY_STATUS: u.VERIFY_STATUS,
        CAPTCHA_TYPE: u.CAPTCHA_TYPE,
        answer: "",
        answerBg: "",
        beginTime: 0,
        pointsStack: [],
        clickCounts: 0,
        traceData: [],
        imgRect: null
      },
      methods: {
        resetPoints: function () {
          this.setData({
            pointsStack: [],
            imgRect: null,
            clickCounts: 0,
            beginTime: 0
          });
        },
        getImgRect: function () {
          var t = this;
          return new Promise(function (e) {
            t.data.imgRect ? e(t.data.imgRect) : t.createSelectorQuery().select(".yidun-captcha__bgimg").boundingClientRect(function (a) {
              t.setData({
                imgRect: {
                  left: a.left,
                  top: a.top
                }
              }), e(a);
            }).exec();
          });
        },
        verifyCaptcha: function (t) {
          this.triggerEvent("verify", {
            data: t,
            type: this.data.captchaType
          });
        },
        handleBgImgLoaded: function (t) {
          this.data.captchaType === u.CAPTCHA_TYPE.ICON_POINT && this.setData({
            answerBg: "url(" + t.detail.url + ")"
          }), this.triggerEvent("imgload", null);
        },
        handleImgLoadError: function (t) {
          this.triggerEvent("imgload", r({}, t.detail));
        },
        handleImgTryError: function (t) {
          var e = (0, h.default)(this.store.state.config, {
            token: this.data.loadInfo.data.token
          }),
              a = t.detail;
          e(a, r({}, a.data));
        },
        handlePointTap: (i = p(d.default.mark(function t(e) {
          var a, n, i, r, o, c, h, l, p;
          return d.default.wrap(function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                if (!this.data.verifyStatus) {
                  t.next = 2;
                  break;
                }

                return t.abrupt("return");

              case 2:
                if (this.setData({
                  clickCounts: this.data.clickCounts + 1
                }), a = this.data.beginTime, (n = this.data.pointsStack).length || (a = Date.now()), !n.length || +e.target.dataset.point != n.length - 1) {
                  t.next = 9;
                  break;
                }

                return this.setData({
                  pointsStack: n.slice(0, -1)
                }), t.abrupt("return");

              case 9:
                if (!(n.length >= u.MAX_POINTS)) {
                  t.next = 11;
                  break;
                }

                return t.abrupt("return");

              case 11:
                return i = this.data.loadInfo.data.token, r = e.touches[0], o = r.clientX, c = r.clientY, t.next = 15, this.getImgRect();

              case 15:
                h = t.sent, l = h.left, p = h.top, l = o - l, p = c - p, this.setData({
                  beginTime: a,
                  pointsStack: [].concat(n, [{
                    left: l - 13,
                    top: p - 30,
                    coord: (0, s.xor_encode)(i, [Math.round(l), Math.round(p), Date.now() - a] + "")
                  }])
                }), this.shouldVerifyCaptcha();

              case 22:
              case "end":
                return t.stop();
            }
          }, t, this);
        })), function (t) {
          return i.apply(this, arguments);
        }),
        shouldVerifyCaptcha: function () {
          if (this.data.pointsStack.length === u.MAX_POINTS) {
            var t = this.data.loadInfo.data.token,
                e = this.data.pointsStack.map(function (t) {
              return t.coord;
            });
            this.verifyCaptcha({
              data: JSON.stringify({
                d: "",
                m: (0, s.eypt)((0, o.sample)(this.data.traceData, u.SAMPLE_NUM).join(":")),
                p: (0, s.eypt)(e.join(":")),
                ext: (0, s.eypt)((0, s.xor_encode)(t, this.data.clickCounts + "," + this.data.traceData.length))
              })
            });
          }
        },
        handleTrackMoving: (n = p(d.default.mark(function t(e) {
          var a, n, i, r, o, c, u, h;
          return d.default.wrap(function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                if (this.data.beginTime) {
                  t.next = 2;
                  break;
                }

                return t.abrupt("return");

              case 2:
                return a = this.data.loadInfo.data.token, t.next = 5, this.getImgRect();

              case 5:
                n = t.sent, i = n.left, r = n.top, o = e.touches[0], c = o.clientX, u = o.clientY, h = (0, s.xor_encode)(a, [Math.round(c - i), Math.round(u - r), Date.now() - this.beginTime] + ""), this.setData({
                  traceData: [].concat(this.data.traceData, [h])
                });

              case 11:
              case "end":
                return t.stop();
            }
          }, t, this);
        })), function (t) {
          return n.apply(this, arguments);
        })
      }
    });
  }
}, [[19, 1, 0]]]);
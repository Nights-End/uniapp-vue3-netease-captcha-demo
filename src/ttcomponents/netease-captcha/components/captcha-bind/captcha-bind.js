require("./../../runtime"), require("./../../common"), (tt.neCaptchaJsonp = tt.neCaptchaJsonp || []).push([[2], {
  22: function (t, e, a) {
    "use strict";

    var r = p(a(1)),
        n = a(0),
        i = a(2),
        s = p(i),
        o = p(a(12)),
        u = p(a(6)),
        c = p(a(13)),
        h = a(5),
        f = a(3),
        d = p(a(4));

    function p(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function v(t) {
      return function () {
        var e = t.apply(this, arguments);
        return new Promise(function (t, a) {
          return function r(n, i) {
            try {
              var s = e[n](i),
                  o = s.value;
            } catch (t) {
              return void a(t);
            }

            if (!s.done) return Promise.resolve(o).then(function (t) {
              r("next", t);
            }, function (t) {
              r("throw", t);
            });
            t(o);
          }("next");
        });
      };
    }

    var l, y;
    Component({
      behaviors: [d.default],
      data: {
        beginTime: 0,
        isReady: !1,
        verifyStatus: ""
      },
      attached: function () {
        this.initData(), this.triggerEvent("init"), this.reset();
      },
      methods: {
        initData: function () {
          var t = this.store.state,
              e = t.config,
              a = t.$fetch;
          if (!e) throw new s.default(i.CONFIG_ERROR, "[core] config must not be null");
          this.$fetch = a;
        },
        fetchCaptcha: (y = v(r.default.mark(function t() {
          var e, a, c, h, f, d, p, v;
          return r.default.wrap(function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return e = this.store.state, a = e.config, c = e.drp, h = {
                  id: a.captchaId,
                  https: !0,
                  type: a.captchaType,
                  version: "1.1.4",
                  drp: c,
                  dev: n.DEVICE_TYPE.TOUCH,
                  cb: (0, o.default)(),
                  width: 240,
                  runEnv: n.RUNENV["tt"]
                }, f = "/api/v2/mp/get", this.setData({
                  verifyStatus: "loading"
                }), t.prev = 4, t.next = 7, this.$fetch({
                  url: f,
                  data: h,
                  onTryError: (0, u.default)(a)
                });

              case 7:
                d = t.sent, p = d.data, this.store.commit("UPDATE_TOKEN", {
                  token: p.token
                }), this.store.commit("UPDATE_TYPE", {
                  captchaType: p.type
                }), this.setData({
                  verifyStatus: "loaded"
                }), this.data.isReady || (this.triggerEvent("ready"), this.setData({
                  isReady: !0
                })), t.next = 20;
                break;

              case 15:
                t.prev = 15, t.t0 = t.catch(4), this.setData({
                  verifyStatus: "loadFailed"
                }), v = new s.default(i.REQUEST_API_ERROR, t.t0.message, {
                  url: f
                }), this.triggerEvent("error", v);

              case 20:
              case "end":
                return t.stop();
            }
          }, t, this, [[4, 15]]);
        })), function () {
          return y.apply(this, arguments);
        }),
        verifyCaptcha: (l = v(r.default.mark(function t() {
          var e,
              a,
              d,
              p,
              v,
              l,
              y,
              E,
              g,
              m,
              R,
              T,
              S,
              w,
              D = this;
          return r.default.wrap(function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                if (!this.data.verifyStatus || "loaded" === this.data.verifyStatus) {
                  t.next = 2;
                  break;
                }

                return t.abrupt("return");

              case 2:
                return e = this.store.state, a = e.config, d = e.captchaType, p = e.token, v = e.extraData, l = [], y = (0, h.xor_encode)(p, [0, 0, Date.now() - this.data.beginTime] + ""), E = {
                  id: a.captchaId,
                  extraData: v,
                  token: p,
                  type: d || "",
                  version: "1.1.4",
                  cb: (0, o.default)(),
                  runEnv: n.RUNENV["tt"],
                  width: 240,
                  data: JSON.stringify({
                    d: "",
                    m: (0, h.eypt)((0, f.sample)(l, n.SAMPLE_NUM).join(":")),
                    p: (0, h.eypt)(y),
                    ext: (0, h.eypt)((0, h.xor_encode)(p, "1," + l.length))
                  })
                }, g = "/api/v2/mp/check", m = function (t) {
                  var e = void 0;
                  e = t ? new s.default(i.REQUEST_API_ERROR, t.message, {
                    url: g,
                    token: p
                  }) : new s.default(i.BUSINESS_ERROR, "Failed to verify captcha.", {
                    url: g
                  }), D.setData({
                    verifyStatus: "failed"
                  }), D.triggerEvent("verify", [e]);
                }, this.setData({
                  verifyStatus: "verifying"
                }), t.prev = 9, t.next = 12, this.$fetch({
                  url: g,
                  method: "POST",
                  data: E,
                  onTryError: (0, u.default)(a, {
                    token: p
                  })
                });

              case 12:
                R = t.sent, (T = R.data).result ? (S = (0, c.default)((0, h.eypt)(T.validate + "::")), w = a.zoneId ? a.zoneId + "_" + S : S, this.setData({
                  verifyStatus: "success"
                }), this.triggerEvent("verify", [null, w])) : m(), t.next = 20;
                break;

              case 17:
                t.prev = 17, t.t0 = t.catch(9), m(t.t0);

              case 20:
              case "end":
                return t.stop();
            }
          }, t, this, [[9, 17]]);
        })), function () {
          return l.apply(this, arguments);
        }),
        reset: function () {
          this.setData({
            beginTime: Date.now(),
            verifyStatus: ""
          }), this.fetchCaptcha();
        }
      }
    });
  }
}, [[22, 1, 0]]]);
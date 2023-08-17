require("./../../runtime"), require("./../../common"), (tt.neCaptchaJsonp = tt.neCaptchaJsonp || []).push([[5], {
  15: function (t, a, e) {
    "use strict";

    var i = Object.assign || function (t) {
      for (var a = 1; a < arguments.length; a++) {
        var e = arguments[a];

        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
      }

      return t;
    },
        s = e(5),
        d = e(3),
        r = g(e(4)),
        n = e(0),
        o = g(e(6));

    g(e(1));

    function g(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var h = {
      status: "dragend",
      beginTime: 0,
      clientX: 0,
      startX: 0,
      clientY: 0,
      startY: 0,
      left: 0,
      startLeft: 0,
      dragX: 0
    };
    Component({
      behaviors: [r.default],
      externalClasses: ["jigsaw-captcha-cls"],
      properties: {
        loadInfo: {
          type: Object,
          value: {},
          observer: function (t, a) {
            t.status !== a.status && "loading" === t.status && this.resetDrag();
          }
        },
        wrapWidth: Number,
        verifyStatus: {
          type: String,
          value: "",
          observer: function (t, a) {
            if (t !== a) {
              var e = "";
              e = t === n.VERIFY_STATUS.ERROR ? this.data.customStyles.controlBar.slideIconError : t === n.VERIFY_STATUS.SUCCESS ? this.data.customStyles.controlBar.slideIconSuccess : this.data.customStyles.controlBar.slideIcon, this.setData({
                slider: Object.assign({}, this.data.slider, {
                  icon: e
                })
              });
            }
          }
        }
      },
      data: {
        slider: {
          width: 0,
          icon: ""
        },
        bgImgLoaded: !1,
        jigsawImg: {
          loaded: !1,
          left: 0,
          width: 0
        },
        drag: i({}, h),
        traceData: [],
        mouseDownCounts: 0,
        VERIFY_STATUS: n.VERIFY_STATUS,
        previousTime: 0
      },
      attached: function () {
        var t = this.data.customStyles.controlBar.slideIcon;
        this.setData({
          slider: Object.assign({}, this.data.slider, {
            icon: t
          })
        });
      },
      ready: function () {
        this.getSliderWidth();
      },
      methods: {
        resetDrag: function () {
          this.setData({
            drag: i({}, h),
            traceData: [],
            mouseDownCounts: 0,
            bgImgLoaded: !1,
            jigsawImg: {
              loaded: !1,
              left: 0,
              width: 0
            }
          });
        },
        getSliderWidth: function () {
          var t = this;
          this.createSelectorQuery().select(".yidun-slider").boundingClientRect(function (a) {
            t.setData({
              slider: Object.assign({}, t.data.slider, {
                width: a.width
              })
            });
          }).exec();
        },
        readyToDrag: function (t) {
          if (this.setData({
            mouseDownCounts: this.data.mouseDownCounts + 1
          }), this.data.bgImgLoaded && this.data.jigsawImg.loaded && !this.data.verifyStatus) {
            var a = t.changedTouches;
            "dragend" === this.data.drag.status && this.setData({
              drag: Object.assign({}, this.data.drag, {
                beginTime: Date.now(),
                clientX: a[0].clientX,
                startX: a[0].clientX,
                clientY: a[0].clientY,
                startY: a[0].clientY,
                dragX: 0
              })
            });
          }
        },
        dragmove: function (t) {
          var a = this.data.drag,
              e = a.status,
              i = a.beginTime,
              d = a.startX,
              r = a.dragX,
              n = a.startY,
              o = t.changedTouches[0],
              g = o.clientX,
              h = o.clientY,
              c = i && g - d > 3 && "dragend" === e ? "dragstart" : e;

          if ("dragend" !== c) {
            var l = this.data.loadInfo.data.token,
                u = (0, s.xor_encode)(l, [Math.round(r < 0 ? 0 : r), Math.round(h - n), Date.now() - i].join(","));
            if (this.setData({
              drag: Object.assign({}, this.data.drag, {
                clientX: g,
                clientY: h,
                dragX: g - d
              }),
              traceData: [].concat(this.data.traceData, [u])
            }), "dragstart" === c) this.setData({
              drag: Object.assign({}, this.data.drag, {
                status: "dragging",
                startLeft: 0
              })
            });else if ("dragging" === c) {
              t.timeStamp - this.data.previousTime >= 80 && this.refreshUI(t.timeStamp);
            }
          }
        },
        refreshUI: function (t) {
          var a = this.data.customStyles.controlBar.slideIconMoving,
              e = this.restrictWidth("slider", this.data.slider.width);
          this.setData({
            drag: Object.assign({}, this.data.drag, {
              left: e
            }),
            jigsawImg: Object.assign({}, this.data.jigsawImg, {
              left: this.restrictWidth("jigsaw", this.data.jigsawImg.width)
            }),
            slider: Object.assign({}, this.data.slider, {
              icon: a || ""
            }),
            previousTime: t
          });
        },
        endDrag: function () {
          if ("dragend" !== this.data.drag.status) {
            var t = (0, d.sample)(this.data.traceData, n.SAMPLE_NUM),
                a = this.data.loadInfo.data.token,
                e = (0, s.eypt)((0, s.xor_encode)(a, Number.parseInt(this.data.jigsawImg.left, 10) / this.data.wrapWidth * 100 + ""));
            this.verifyCaptcha({
              data: JSON.stringify({
                d: (0, s.eypt)(t.join(":")),
                m: "",
                p: e,
                ext: (0, s.eypt)((0, s.xor_encode)(a, this.data.mouseDownCounts + "," + this.data.traceData.length))
              })
            }), this.setData({
              drag: i({}, h, {
                left: this.data.drag.left
              })
            });
          } else this.setData({
            drag: Object.assign({}, this.data.drag, {
              beginTime: 0
            }),
            previousTime: 0
          });
        },
        restrictWidth: function (t, a) {
          var e = this.data.drag,
              i = e.startLeft,
              s = e.dragX,
              d = i + s,
              r = this.data.wrapWidth,
              n = r - a;

          if ("jigsaw" === t) {
            var o = void 0,
                g = this.data.slider.width,
                h = g - a,
                c = h < 0 ? -h : h / 2;
            s <= c ? (o = s, d += h < 0 ? -o / 2 : s) : r - s - g <= c ? (o = s - (r - g - c), d += (h < 0 ? -o / 2 : o) + h / 2) : d += h / 2;
          }

          return d <= 0 ? d = 0 : d >= n && (d = n), d;
        },
        verifyCaptcha: function (t) {
          this.triggerEvent("verify", {
            data: t,
            type: n.CAPTCHA_TYPE.JIGSAW
          });
        },
        handleBgImgLoaded: function () {
          this.setData({
            bgImgLoaded: !0
          }), this.data.jigsawImg.loaded && this.triggerEvent("imgload", null);
        },
        handleImgLoadError: function (t) {
          this.triggerEvent("imgload", i({}, t.detail));
        },
        handleJigsawImgLoaded: function (t) {
          this.setData({
            jigsawImg: {
              loaded: !0,
              left: 0,
              width: t.detail.width
            }
          }), this.data.bgImgLoaded && this.triggerEvent("imgload", null);
        },
        handleImgTryError: function (t) {
          var a = (0, o.default)(this.store.state.config, {
            token: this.data.loadInfo.data.token
          }),
              e = t.detail;
          a(e, i({}, e.data));
        }
      }
    });
  }
}, [[15, 1, 0]]]);
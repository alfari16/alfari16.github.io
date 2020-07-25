webpackJsonp([0], {
  79: function (t, e, r) {
    'use strict';
    function n(t) {
      return function () {
        var e = t.apply(this, arguments);
        return new Promise(function (t, r) {
          function n(o, a) {
            try {
              var i = e[o](a),
                c = i.value;
            } catch (t) {
              return void r(t);
            }
            if (!i.done)
              return Promise.resolve(c).then(
                function (t) {
                  n('next', t);
                },
                function (t) {
                  n('throw', t);
                }
              );
            t(c);
          }
          return n('next');
        });
      };
    }
    function o(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    function a(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ('object' !== typeof e && 'function' !== typeof e) ? t : e;
    }
    function i(t, e) {
      if ('function' !== typeof e && null !== e)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, '__esModule', { value: !0 });
    var c = r(84),
      s = r.n(c),
      u = r(0),
      l = r.n(u),
      f = r(25),
      h = r(87),
      m =
        (r.n(h),
        (function () {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, r, n) {
            return r && t(e.prototype, r), n && t(e, n), e;
          };
        })()),
      p = Object(f.a)(function () {
        return r.e(4).then(r.bind(null, 83));
      }),
      d = (function (t) {
        function e() {
          var t,
            r,
            i,
            c,
            u = this;
          o(this, e);
          for (var l = arguments.length, f = Array(l), h = 0; h < l; h++)
            f[h] = arguments[h];
          return (
            (r = i = a(
              this,
              (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(
                t,
                [this].concat(f)
              )
            )),
            (i.state = { items: [], error: !1 }),
            (i.request = n(
              s.a.mark(function t() {
                var e, r, n;
                return s.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (t.next = 3),
                            fetch(
                              'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fapi.medium.com%2Ffeed%2F%40alfari'
                            )
                          );
                        case 3:
                          return (e = t.sent), (t.next = 6), e.json();
                        case 6:
                          (r = t.sent),
                            (n = r.items),
                            i.setState({ items: n }),
                            (t.next = 15);
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(0)),
                            console.log(t.t0),
                            i.setState({ error: !0 });
                        case 15:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  u,
                  [[0, 11]]
                );
              })
            )),
            (i.tryAgain = function () {
              i.setState({ error: !1 }), i.request();
            }),
            (c = r),
            a(i, c)
          );
        }
        return (
          i(e, t),
          m(e, [
            {
              key: 'componentDidMount',
              value: (function () {
                function t() {
                  return e.apply(this, arguments);
                }
                var e = n(
                  s.a.mark(function t() {
                    return s.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              this.request();
                            case 1:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                return t;
              })(),
            },
            {
              key: 'render',
              value: function () {
                var t = this.state.items.map(function (t) {
                    var e =
                      t.description
                        .replace(
                          /<h3>.*<\/h3>|<figcaption>.*<\/figcaption>|<[^>]*>/gi,
                          ''
                        )
                        .slice(0, 230) + ' ...';
                    return l.a.createElement(
                      'div',
                      { className: 'single-feed mb-2 card', key: t.link },
                      l.a.createElement('img', {
                        className: 'card-img-top medium-img',
                        src: t.thumbnail,
                        alt: 'Medium articles',
                      }),
                      l.a.createElement(
                        'div',
                        { className: 'card-body' },
                        l.a.createElement(
                          'h5',
                          { className: 'card-title title' },
                          t.title
                        ),
                        l.a.createElement('p', { className: 'card-text' }, e),
                        l.a.createElement(
                          'a',
                          {
                            href: t.link,
                            target: '_blank',
                            className: 'btn btn-primary',
                          },
                          'More'
                        )
                      )
                    );
                  }),
                  e = l.a.createElement(
                    'div',
                    { className: 'loading-wrapper' },
                    l.a.createElement('div', { className: 'loading' }),
                    l.a.createElement('div', { className: 'loading' }),
                    l.a.createElement('div', { className: 'loading' })
                  );
                return l.a.createElement(
                  'div',
                  null,
                  l.a.createElement(
                    p,
                    {
                      link: 'https://medium.com/@alfari',
                      bgColor: 'bg-primary',
                      color: 'white',
                      icon: 'fa-medium',
                    },
                    'Medium'
                  ),
                  l.a.createElement(
                    'div',
                    { className: 'medium item-container' },
                    this.state.error &&
                      l.a.createElement(
                        'div',
                        { className: 'text-center' },
                        l.a.createElement('p', null, 'Failed to fetch'),
                        l.a.createElement(
                          'button',
                          {
                            className: 'btn btn-primary',
                            onClick: this.tryAgain,
                          },
                          'Try Again'
                        )
                      ),
                    !this.state.items.length && !this.state.error && e,
                    l.a.createElement('div', { className: 'container' }, t)
                  )
                );
              },
            },
          ]),
          e
        );
      })(u.Component);
    e.default = d;
  },
  84: function (t, e, r) {
    t.exports = r(85);
  },
  85: function (t, e, r) {
    var n =
        (function () {
          return this;
        })() || Function('return this')(),
      o =
        n.regeneratorRuntime &&
        Object.getOwnPropertyNames(n).indexOf('regeneratorRuntime') >= 0,
      a = o && n.regeneratorRuntime;
    if (((n.regeneratorRuntime = void 0), (t.exports = r(86)), o))
      n.regeneratorRuntime = a;
    else
      try {
        delete n.regeneratorRuntime;
      } catch (t) {
        n.regeneratorRuntime = void 0;
      }
  },
  86: function (t, e) {
    !(function (e) {
      'use strict';
      function r(t, e, r, n) {
        var a = e && e.prototype instanceof o ? e : o,
          i = Object.create(a.prototype),
          c = new m(n || []);
        return (i._invoke = u(t, r, c)), i;
      }
      function n(t, e, r) {
        try {
          return { type: 'normal', arg: t.call(e, r) };
        } catch (t) {
          return { type: 'throw', arg: t };
        }
      }
      function o() {}
      function a() {}
      function i() {}
      function c(t) {
        ['next', 'throw', 'return'].forEach(function (e) {
          t[e] = function (t) {
            return this._invoke(e, t);
          };
        });
      }
      function s(t) {
        function e(r, o, a, i) {
          var c = n(t[r], t, o);
          if ('throw' !== c.type) {
            var s = c.arg,
              u = s.value;
            return u && 'object' === typeof u && v.call(u, '__await')
              ? Promise.resolve(u.__await).then(
                  function (t) {
                    e('next', t, a, i);
                  },
                  function (t) {
                    e('throw', t, a, i);
                  }
                )
              : Promise.resolve(u).then(function (t) {
                  (s.value = t), a(s);
                }, i);
          }
          i(c.arg);
        }
        function r(t, r) {
          function n() {
            return new Promise(function (n, o) {
              e(t, r, n, o);
            });
          }
          return (o = o ? o.then(n, n) : n());
        }
        var o;
        this._invoke = r;
      }
      function u(t, e, r) {
        var o = k;
        return function (a, i) {
          if (o === D) throw new Error('Generator is already running');
          if (o === L) {
            if ('throw' === a) throw i;
            return d();
          }
          for (r.method = a, r.arg = i; ; ) {
            var c = r.delegate;
            if (c) {
              var s = l(c, r);
              if (s) {
                if (s === j) continue;
                return s;
              }
            }
            if ('next' === r.method) r.sent = r._sent = r.arg;
            else if ('throw' === r.method) {
              if (o === k) throw ((o = L), r.arg);
              r.dispatchException(r.arg);
            } else 'return' === r.method && r.abrupt('return', r.arg);
            o = D;
            var u = n(t, e, r);
            if ('normal' === u.type) {
              if (((o = r.done ? L : B), u.arg === j)) continue;
              return { value: u.arg, done: r.done };
            }
            'throw' === u.type &&
              ((o = L), (r.method = 'throw'), (r.arg = u.arg));
          }
        };
      }
      function l(t, e) {
        var r = t.iterator[e.method];
        if (r === A) {
          if (((e.delegate = null), 'throw' === e.method)) {
            if (
              t.iterator.return &&
              ((e.method = 'return'),
              (e.arg = A),
              l(t, e),
              'throw' === e.method)
            )
              return j;
            (e.method = 'throw'),
              (e.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return j;
        }
        var o = n(r, t.iterator, e.arg);
        if ('throw' === o.type)
          return (e.method = 'throw'), (e.arg = o.arg), (e.delegate = null), j;
        var a = o.arg;
        return a
          ? a.done
            ? ((e[t.resultName] = a.value),
              (e.next = t.nextLoc),
              'return' !== e.method && ((e.method = 'next'), (e.arg = A)),
              (e.delegate = null),
              j)
            : a
          : ((e.method = 'throw'),
            (e.arg = new TypeError('iterator result is not an object')),
            (e.delegate = null),
            j);
      }
      function f(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function h(t) {
        var e = t.completion || {};
        (e.type = 'normal'), delete e.arg, (t.completion = e);
      }
      function m(t) {
        (this.tryEntries = [{ tryLoc: 'root' }]),
          t.forEach(f, this),
          this.reset(!0);
      }
      function p(t) {
        if (t) {
          var e = t[C];
          if (e) return e.call(t);
          if ('function' === typeof t.next) return t;
          if (!isNaN(t.length)) {
            var r = -1,
              n = function e() {
                for (; ++r < t.length; )
                  if (v.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                return (e.value = A), (e.done = !0), e;
              };
            return (n.next = n);
          }
        }
        return { next: d };
      }
      function d() {
        return { value: A, done: !0 };
      }
      var A,
        g = Object.prototype,
        v = g.hasOwnProperty,
        y = 'function' === typeof Symbol ? Symbol : {},
        C = y.iterator || '@@iterator',
        w = y.asyncIterator || '@@asyncIterator',
        b = y.toStringTag || '@@toStringTag',
        E = 'object' === typeof t,
        x = e.regeneratorRuntime;
      if (x) return void (E && (t.exports = x));
      (x = e.regeneratorRuntime = E ? t.exports : {}), (x.wrap = r);
      var k = 'suspendedStart',
        B = 'suspendedYield',
        D = 'executing',
        L = 'completed',
        j = {},
        _ = {};
      _[C] = function () {
        return this;
      };
      var O = Object.getPrototypeOf,
        N = O && O(O(p([])));
      N && N !== g && v.call(N, C) && (_ = N);
      var P = (i.prototype = o.prototype = Object.create(_));
      (a.prototype = P.constructor = i),
        (i.constructor = a),
        (i[b] = a.displayName = 'GeneratorFunction'),
        (x.isGeneratorFunction = function (t) {
          var e = 'function' === typeof t && t.constructor;
          return (
            !!e &&
            (e === a || 'GeneratorFunction' === (e.displayName || e.name))
          );
        }),
        (x.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, i)
              : ((t.__proto__ = i), b in t || (t[b] = 'GeneratorFunction')),
            (t.prototype = Object.create(P)),
            t
          );
        }),
        (x.awrap = function (t) {
          return { __await: t };
        }),
        c(s.prototype),
        (s.prototype[w] = function () {
          return this;
        }),
        (x.AsyncIterator = s),
        (x.async = function (t, e, n, o) {
          var a = new s(r(t, e, n, o));
          return x.isGeneratorFunction(e)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        c(P),
        (P[b] = 'Generator'),
        (P[C] = function () {
          return this;
        }),
        (P.toString = function () {
          return '[object Generator]';
        }),
        (x.keys = function (t) {
          var e = [];
          for (var r in t) e.push(r);
          return (
            e.reverse(),
            function r() {
              for (; e.length; ) {
                var n = e.pop();
                if (n in t) return (r.value = n), (r.done = !1), r;
              }
              return (r.done = !0), r;
            }
          );
        }),
        (x.values = p),
        (m.prototype = {
          constructor: m,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = A),
              (this.done = !1),
              (this.delegate = null),
              (this.method = 'next'),
              (this.arg = A),
              this.tryEntries.forEach(h),
              !t)
            )
              for (var e in this)
                't' === e.charAt(0) &&
                  v.call(this, e) &&
                  !isNaN(+e.slice(1)) &&
                  (this[e] = A);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0],
              e = t.completion;
            if ('throw' === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            function e(e, n) {
              return (
                (a.type = 'throw'),
                (a.arg = t),
                (r.next = e),
                n && ((r.method = 'next'), (r.arg = A)),
                !!n
              );
            }
            if (this.done) throw t;
            for (var r = this, n = this.tryEntries.length - 1; n >= 0; --n) {
              var o = this.tryEntries[n],
                a = o.completion;
              if ('root' === o.tryLoc) return e('end');
              if (o.tryLoc <= this.prev) {
                var i = v.call(o, 'catchLoc'),
                  c = v.call(o, 'finallyLoc');
                if (i && c) {
                  if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return e(o.finallyLoc);
                } else if (i) {
                  if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                } else {
                  if (!c)
                    throw new Error('try statement without catch or finally');
                  if (this.prev < o.finallyLoc) return e(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var n = this.tryEntries[r];
              if (
                n.tryLoc <= this.prev &&
                v.call(n, 'finallyLoc') &&
                this.prev < n.finallyLoc
              ) {
                var o = n;
                break;
              }
            }
            o &&
              ('break' === t || 'continue' === t) &&
              o.tryLoc <= e &&
              e <= o.finallyLoc &&
              (o = null);
            var a = o ? o.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              o
                ? ((this.method = 'next'), (this.next = o.finallyLoc), j)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ('throw' === t.type) throw t.arg;
            return (
              'break' === t.type || 'continue' === t.type
                ? (this.next = t.arg)
                : 'return' === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = 'return'),
                  (this.next = 'end'))
                : 'normal' === t.type && e && (this.next = e),
              j
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t)
                return this.complete(r.completion, r.afterLoc), h(r), j;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ('throw' === n.type) {
                  var o = n.arg;
                  h(r);
                }
                return o;
              }
            }
            throw new Error('illegal catch attempt');
          },
          delegateYield: function (t, e, r) {
            return (
              (this.delegate = { iterator: p(t), resultName: e, nextLoc: r }),
              'next' === this.method && (this.arg = A),
              j
            );
          },
        });
    })(
      (function () {
        return this;
      })() || Function('return this')()
    );
  },
  87: function (t, e, r) {
    var n = r(88);
    'string' === typeof n && (n = [[t.i, n, '']]);
    var o = { hmr: !1 };
    o.transform = void 0;
    r(78)(n, o);
    n.locals && (t.exports = n.locals);
  },
  88: function (t, e, r) {
    (e = t.exports = r(77)(!0)),
      e.push([
        t.i,
        '.medium-img{height:200px;-o-object-fit:cover;object-fit:cover}.card-title{font-weight:900}.loading-wrapper{position:relative;width:100px;height:100px;margin:10px auto}.loading{border:3px solid transparent;border-right-color:#1c3fa7;-webkit-animation:rotate 1s linear infinite;animation:rotate 1s linear infinite;border-radius:50%;position:absolute;top:50%;left:50%}.loading:first-child{width:100%;height:100%;-webkit-animation-duration:3s;animation-duration:3s}.loading:nth-child(2){width:90%;height:90%;-webkit-animation-duration:2s;animation-duration:2s}.loading:nth-child(3){width:80%;height:80%}@-webkit-keyframes rotate{0%{-webkit-transform:translate(-50%,-50%) rotate(0deg);transform:translate(-50%,-50%) rotate(0deg)}to{-webkit-transform:translate(-50%,-50%) rotate(1turn);transform:translate(-50%,-50%) rotate(1turn)}}@keyframes rotate{0%{-webkit-transform:translate(-50%,-50%) rotate(0deg);transform:translate(-50%,-50%) rotate(0deg)}to{-webkit-transform:translate(-50%,-50%) rotate(1turn);transform:translate(-50%,-50%) rotate(1turn)}}',
        '',
        {
          version: 3,
          sources: [
            '/home/alfari/Documents/new-portfolio/src/components/Medium/Medium.css',
          ],
          names: [],
          mappings:
            'AAAA,YACE,aAAc,AACd,oBAAqB,AAClB,gBAAkB,CACtB,AAED,YACE,eAAiB,CAClB,AACD,iBACE,kBAAmB,AACnB,YAAa,AACb,aAAc,AACd,gBAAkB,CACnB,AACD,SACE,6BAA8B,AAC9B,2BAA4B,AAC5B,4CAA6C,AACrC,oCAAqC,AAC7C,kBAAmB,AACnB,kBAAmB,AACnB,QAAS,AACT,QAAU,CACX,AACD,qBACE,WAAY,AACZ,YAAa,AACb,8BAA+B,AACvB,qBAAuB,CAChC,AACD,sBACE,UAAW,AACX,WAAY,AACZ,8BAA+B,AACvB,qBAAuB,CAChC,AACD,sBACE,UAAW,AACX,UAAY,CACb,AACD,0BACE,GACE,oDAAsD,AAC9C,2CAA8C,CACvD,AACD,GACE,qDAAwD,AAChD,4CAAgD,CACzD,CACF,AACD,kBACE,GACE,oDAAsD,AAC9C,2CAA8C,CACvD,AACD,GACE,qDAAwD,AAChD,4CAAgD,CACzD,CACF',
          file: 'Medium.css',
          sourcesContent: [
            '.medium-img {\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.card-title {\n  font-weight: 900;\n}\n.loading-wrapper {\n  position: relative;\n  width: 100px;\n  height: 100px;\n  margin: 10px auto;\n}\n.loading {\n  border: 3px solid transparent;\n  border-right-color: #1c3fa7;\n  -webkit-animation: rotate 1s linear infinite;\n          animation: rotate 1s linear infinite;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n.loading:nth-child(1) {\n  width: 100%;\n  height: 100%;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n}\n.loading:nth-child(2) {\n  width: 90%;\n  height: 90%;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n}\n.loading:nth-child(3) {\n  width: 80%;\n  height: 80%;\n}\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform: translate(-50%, -50%) rotate(0deg);\n            transform: translate(-50%, -50%) rotate(0deg);\n  }\n  to {\n    -webkit-transform: translate(-50%, -50%) rotate(360deg);\n            transform: translate(-50%, -50%) rotate(360deg);\n  }\n}\n@keyframes rotate {\n  from {\n    -webkit-transform: translate(-50%, -50%) rotate(0deg);\n            transform: translate(-50%, -50%) rotate(0deg);\n  }\n  to {\n    -webkit-transform: translate(-50%, -50%) rotate(360deg);\n            transform: translate(-50%, -50%) rotate(360deg);\n  }\n}\n',
          ],
          sourceRoot: '',
        },
      ]);
  },
});
//# sourceMappingURL=Medium.f770bf8f.chunk.js.map

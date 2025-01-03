/*! For license information please see 49.e032cb44.chunk.js.LICENSE.txt */
(self.webpackChunkaiw_web_app = self.webpackChunkaiw_web_app || []).push([
  [49],
  {
    26785: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(17053);
      function i(e, t, r) {
        return (
          void 0 === t && (t = new Uint8Array(2)),
          void 0 === r && (r = 0),
          (t[r + 0] = e >>> 8),
          (t[r + 1] = e >>> 0),
          t
        );
      }
      function s(e, t, r) {
        return (
          void 0 === t && (t = new Uint8Array(2)),
          void 0 === r && (r = 0),
          (t[r + 0] = e >>> 0),
          (t[r + 1] = e >>> 8),
          t
        );
      }
      function o(e, t) {
        return (
          void 0 === t && (t = 0),
          (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]
        );
      }
      function a(e, t) {
        return (
          void 0 === t && (t = 0),
          ((e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]) >>> 0
        );
      }
      function c(e, t) {
        return (
          void 0 === t && (t = 0),
          (e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t]
        );
      }
      function u(e, t) {
        return (
          void 0 === t && (t = 0),
          ((e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t]) >>> 0
        );
      }
      function h(e, t, r) {
        return (
          void 0 === t && (t = new Uint8Array(4)),
          void 0 === r && (r = 0),
          (t[r + 0] = e >>> 24),
          (t[r + 1] = e >>> 16),
          (t[r + 2] = e >>> 8),
          (t[r + 3] = e >>> 0),
          t
        );
      }
      function l(e, t, r) {
        return (
          void 0 === t && (t = new Uint8Array(4)),
          void 0 === r && (r = 0),
          (t[r + 0] = e >>> 0),
          (t[r + 1] = e >>> 8),
          (t[r + 2] = e >>> 16),
          (t[r + 3] = e >>> 24),
          t
        );
      }
      function f(e, t, r) {
        return (
          void 0 === t && (t = new Uint8Array(8)),
          void 0 === r && (r = 0),
          h((e / 4294967296) >>> 0, t, r),
          h(e >>> 0, t, r + 4),
          t
        );
      }
      function p(e, t, r) {
        return (
          void 0 === t && (t = new Uint8Array(8)),
          void 0 === r && (r = 0),
          l(e >>> 0, t, r),
          l((e / 4294967296) >>> 0, t, r + 4),
          t
        );
      }
      (t.readInt16BE = function (e, t) {
        return (
          void 0 === t && (t = 0), (((e[t + 0] << 8) | e[t + 1]) << 16) >> 16
        );
      }),
        (t.readUint16BE = function (e, t) {
          return void 0 === t && (t = 0), ((e[t + 0] << 8) | e[t + 1]) >>> 0;
        }),
        (t.readInt16LE = function (e, t) {
          return (
            void 0 === t && (t = 0), (((e[t + 1] << 8) | e[t]) << 16) >> 16
          );
        }),
        (t.readUint16LE = function (e, t) {
          return void 0 === t && (t = 0), ((e[t + 1] << 8) | e[t]) >>> 0;
        }),
        (t.writeUint16BE = i),
        (t.writeInt16BE = i),
        (t.writeUint16LE = s),
        (t.writeInt16LE = s),
        (t.readInt32BE = o),
        (t.readUint32BE = a),
        (t.readInt32LE = c),
        (t.readUint32LE = u),
        (t.writeUint32BE = h),
        (t.writeInt32BE = h),
        (t.writeUint32LE = l),
        (t.writeInt32LE = l),
        (t.readInt64BE = function (e, t) {
          void 0 === t && (t = 0);
          var r = o(e, t),
            n = o(e, t + 4);
          return 4294967296 * r + n - 4294967296 * (n >> 31);
        }),
        (t.readUint64BE = function (e, t) {
          return void 0 === t && (t = 0), 4294967296 * a(e, t) + a(e, t + 4);
        }),
        (t.readInt64LE = function (e, t) {
          void 0 === t && (t = 0);
          var r = c(e, t);
          return 4294967296 * c(e, t + 4) + r - 4294967296 * (r >> 31);
        }),
        (t.readUint64LE = function (e, t) {
          void 0 === t && (t = 0);
          var r = u(e, t);
          return 4294967296 * u(e, t + 4) + r;
        }),
        (t.writeUint64BE = f),
        (t.writeInt64BE = f),
        (t.writeUint64LE = p),
        (t.writeInt64LE = p),
        (t.readUintBE = function (e, t, r) {
          if ((void 0 === r && (r = 0), e % 8 !== 0))
            throw new Error(
              "readUintBE supports only bitLengths divisible by 8"
            );
          if (e / 8 > t.length - r)
            throw new Error(
              "readUintBE: array is too short for the given bitLength"
            );
          for (var n = 0, i = 1, s = e / 8 + r - 1; s >= r; s--)
            (n += t[s] * i), (i *= 256);
          return n;
        }),
        (t.readUintLE = function (e, t, r) {
          if ((void 0 === r && (r = 0), e % 8 !== 0))
            throw new Error(
              "readUintLE supports only bitLengths divisible by 8"
            );
          if (e / 8 > t.length - r)
            throw new Error(
              "readUintLE: array is too short for the given bitLength"
            );
          for (var n = 0, i = 1, s = r; s < r + e / 8; s++)
            (n += t[s] * i), (i *= 256);
          return n;
        }),
        (t.writeUintBE = function (e, t, r, i) {
          if (
            (void 0 === r && (r = new Uint8Array(e / 8)),
            void 0 === i && (i = 0),
            e % 8 !== 0)
          )
            throw new Error(
              "writeUintBE supports only bitLengths divisible by 8"
            );
          if (!n.isSafeInteger(t))
            throw new Error("writeUintBE value must be an integer");
          for (var s = 1, o = e / 8 + i - 1; o >= i; o--)
            (r[o] = (t / s) & 255), (s *= 256);
          return r;
        }),
        (t.writeUintLE = function (e, t, r, i) {
          if (
            (void 0 === r && (r = new Uint8Array(e / 8)),
            void 0 === i && (i = 0),
            e % 8 !== 0)
          )
            throw new Error(
              "writeUintLE supports only bitLengths divisible by 8"
            );
          if (!n.isSafeInteger(t))
            throw new Error("writeUintLE value must be an integer");
          for (var s = 1, o = i; o < i + e / 8; o++)
            (r[o] = (t / s) & 255), (s *= 256);
          return r;
        }),
        (t.readFloat32BE = function (e, t) {
          return (
            void 0 === t && (t = 0),
            new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t)
          );
        }),
        (t.readFloat32LE = function (e, t) {
          return (
            void 0 === t && (t = 0),
            new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t, !0)
          );
        }),
        (t.readFloat64BE = function (e, t) {
          return (
            void 0 === t && (t = 0),
            new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t)
          );
        }),
        (t.readFloat64LE = function (e, t) {
          return (
            void 0 === t && (t = 0),
            new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t, !0)
          );
        }),
        (t.writeFloat32BE = function (e, t, r) {
          return (
            void 0 === t && (t = new Uint8Array(4)),
            void 0 === r && (r = 0),
            new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(r, e),
            t
          );
        }),
        (t.writeFloat32LE = function (e, t, r) {
          return (
            void 0 === t && (t = new Uint8Array(4)),
            void 0 === r && (r = 0),
            new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(
              r,
              e,
              !0
            ),
            t
          );
        }),
        (t.writeFloat64BE = function (e, t, r) {
          return (
            void 0 === t && (t = new Uint8Array(8)),
            void 0 === r && (r = 0),
            new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(r, e),
            t
          );
        }),
        (t.writeFloat64LE = function (e, t, r) {
          return (
            void 0 === t && (t = new Uint8Array(8)),
            void 0 === r && (r = 0),
            new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(
              r,
              e,
              !0
            ),
            t
          );
        });
    },
    44491: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(26785),
        i = r(56537),
        s = 20;
      function o(e, t, r) {
        for (
          var i = 1634760805,
            o = 857760878,
            a = 2036477234,
            c = 1797285236,
            u = (r[3] << 24) | (r[2] << 16) | (r[1] << 8) | r[0],
            h = (r[7] << 24) | (r[6] << 16) | (r[5] << 8) | r[4],
            l = (r[11] << 24) | (r[10] << 16) | (r[9] << 8) | r[8],
            f = (r[15] << 24) | (r[14] << 16) | (r[13] << 8) | r[12],
            p = (r[19] << 24) | (r[18] << 16) | (r[17] << 8) | r[16],
            d = (r[23] << 24) | (r[22] << 16) | (r[21] << 8) | r[20],
            g = (r[27] << 24) | (r[26] << 16) | (r[25] << 8) | r[24],
            y = (r[31] << 24) | (r[30] << 16) | (r[29] << 8) | r[28],
            v = (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0],
            m = (t[7] << 24) | (t[6] << 16) | (t[5] << 8) | t[4],
            w = (t[11] << 24) | (t[10] << 16) | (t[9] << 8) | t[8],
            b = (t[15] << 24) | (t[14] << 16) | (t[13] << 8) | t[12],
            _ = i,
            E = o,
            S = a,
            I = c,
            P = u,
            O = h,
            A = l,
            x = f,
            R = p,
            N = d,
            T = g,
            C = y,
            j = v,
            U = m,
            L = w,
            M = b,
            D = 0;
          D < s;
          D += 2
        )
          (P =
            ((P ^= R =
              (R + (j = ((j ^= _ = (_ + P) | 0) >>> 16) | (j << 16))) | 0) >>>
              20) |
            (P << 12)),
            (O =
              ((O ^= N =
                (N + (U = ((U ^= E = (E + O) | 0) >>> 16) | (U << 16))) | 0) >>>
                20) |
              (O << 12)),
            (A =
              ((A ^= T =
                (T + (L = ((L ^= S = (S + A) | 0) >>> 16) | (L << 16))) | 0) >>>
                20) |
              (A << 12)),
            (x =
              ((x ^= C =
                (C + (M = ((M ^= I = (I + x) | 0) >>> 16) | (M << 16))) | 0) >>>
                20) |
              (x << 12)),
            (A =
              ((A ^= T =
                (T + (L = ((L ^= S = (S + A) | 0) >>> 24) | (L << 8))) | 0) >>>
                25) |
              (A << 7)),
            (x =
              ((x ^= C =
                (C + (M = ((M ^= I = (I + x) | 0) >>> 24) | (M << 8))) | 0) >>>
                25) |
              (x << 7)),
            (O =
              ((O ^= N =
                (N + (U = ((U ^= E = (E + O) | 0) >>> 24) | (U << 8))) | 0) >>>
                25) |
              (O << 7)),
            (P =
              ((P ^= R =
                (R + (j = ((j ^= _ = (_ + P) | 0) >>> 24) | (j << 8))) | 0) >>>
                25) |
              (P << 7)),
            (O =
              ((O ^= T =
                (T + (M = ((M ^= _ = (_ + O) | 0) >>> 16) | (M << 16))) | 0) >>>
                20) |
              (O << 12)),
            (A =
              ((A ^= C =
                (C + (j = ((j ^= E = (E + A) | 0) >>> 16) | (j << 16))) | 0) >>>
                20) |
              (A << 12)),
            (x =
              ((x ^= R =
                (R + (U = ((U ^= S = (S + x) | 0) >>> 16) | (U << 16))) | 0) >>>
                20) |
              (x << 12)),
            (P =
              ((P ^= N =
                (N + (L = ((L ^= I = (I + P) | 0) >>> 16) | (L << 16))) | 0) >>>
                20) |
              (P << 12)),
            (x =
              ((x ^= R =
                (R + (U = ((U ^= S = (S + x) | 0) >>> 24) | (U << 8))) | 0) >>>
                25) |
              (x << 7)),
            (P =
              ((P ^= N =
                (N + (L = ((L ^= I = (I + P) | 0) >>> 24) | (L << 8))) | 0) >>>
                25) |
              (P << 7)),
            (A =
              ((A ^= C =
                (C + (j = ((j ^= E = (E + A) | 0) >>> 24) | (j << 8))) | 0) >>>
                25) |
              (A << 7)),
            (O =
              ((O ^= T =
                (T + (M = ((M ^= _ = (_ + O) | 0) >>> 24) | (M << 8))) | 0) >>>
                25) |
              (O << 7));
        n.writeUint32LE((_ + i) | 0, e, 0),
          n.writeUint32LE((E + o) | 0, e, 4),
          n.writeUint32LE((S + a) | 0, e, 8),
          n.writeUint32LE((I + c) | 0, e, 12),
          n.writeUint32LE((P + u) | 0, e, 16),
          n.writeUint32LE((O + h) | 0, e, 20),
          n.writeUint32LE((A + l) | 0, e, 24),
          n.writeUint32LE((x + f) | 0, e, 28),
          n.writeUint32LE((R + p) | 0, e, 32),
          n.writeUint32LE((N + d) | 0, e, 36),
          n.writeUint32LE((T + g) | 0, e, 40),
          n.writeUint32LE((C + y) | 0, e, 44),
          n.writeUint32LE((j + v) | 0, e, 48),
          n.writeUint32LE((U + m) | 0, e, 52),
          n.writeUint32LE((L + w) | 0, e, 56),
          n.writeUint32LE((M + b) | 0, e, 60);
      }
      function a(e, t, r, n, s) {
        if ((void 0 === s && (s = 0), 32 !== e.length))
          throw new Error("ChaCha: key size must be 32 bytes");
        if (n.length < r.length)
          throw new Error("ChaCha: destination is shorter than source");
        var a, u;
        if (0 === s) {
          if (8 !== t.length && 12 !== t.length)
            throw new Error("ChaCha nonce must be 8 or 12 bytes");
          (u = (a = new Uint8Array(16)).length - t.length), a.set(t, u);
        } else {
          if (16 !== t.length)
            throw new Error("ChaCha nonce with counter must be 16 bytes");
          (a = t), (u = s);
        }
        for (var h = new Uint8Array(64), l = 0; l < r.length; l += 64) {
          o(h, a, e);
          for (var f = l; f < l + 64 && f < r.length; f++)
            n[f] = r[f] ^ h[f - l];
          c(a, 0, u);
        }
        return i.wipe(h), 0 === s && i.wipe(a), n;
      }
      function c(e, t, r) {
        for (var n = 1; r--; )
          (n = (n + (255 & e[t])) | 0), (e[t] = 255 & n), (n >>>= 8), t++;
        if (n > 0) throw new Error("ChaCha: counter overflow");
      }
      (t.streamXOR = a),
        (t.stream = function (e, t, r, n) {
          return void 0 === n && (n = 0), i.wipe(r), a(e, t, r, r, n);
        });
    },
    58953: (e, t, r) => {
      "use strict";
      var n = r(44491),
        i = r(56657),
        s = r(56537),
        o = r(26785),
        a = r(60825);
      (t.J4 = 32), (t.PX = 12), (t.iW = 16);
      var c = new Uint8Array(16),
        u = (function () {
          function e(e) {
            if (
              ((this.nonceLength = t.PX),
              (this.tagLength = t.iW),
              e.length !== t.J4)
            )
              throw new Error("ChaCha20Poly1305 needs 32-byte key");
            this._key = new Uint8Array(e);
          }
          return (
            (e.prototype.seal = function (e, t, r, i) {
              if (e.length > 16)
                throw new Error("ChaCha20Poly1305: incorrect nonce length");
              var o = new Uint8Array(16);
              o.set(e, o.length - e.length);
              var a = new Uint8Array(32);
              n.stream(this._key, o, a, 4);
              var c,
                u = t.length + this.tagLength;
              if (i) {
                if (i.length !== u)
                  throw new Error(
                    "ChaCha20Poly1305: incorrect destination length"
                  );
                c = i;
              } else c = new Uint8Array(u);
              return (
                n.streamXOR(this._key, o, t, c, 4),
                this._authenticate(
                  c.subarray(c.length - this.tagLength, c.length),
                  a,
                  c.subarray(0, c.length - this.tagLength),
                  r
                ),
                s.wipe(o),
                c
              );
            }),
            (e.prototype.open = function (e, t, r, i) {
              if (e.length > 16)
                throw new Error("ChaCha20Poly1305: incorrect nonce length");
              if (t.length < this.tagLength) return null;
              var o = new Uint8Array(16);
              o.set(e, o.length - e.length);
              var c = new Uint8Array(32);
              n.stream(this._key, o, c, 4);
              var u = new Uint8Array(this.tagLength);
              if (
                (this._authenticate(
                  u,
                  c,
                  t.subarray(0, t.length - this.tagLength),
                  r
                ),
                !a.equal(u, t.subarray(t.length - this.tagLength, t.length)))
              )
                return null;
              var h,
                l = t.length - this.tagLength;
              if (i) {
                if (i.length !== l)
                  throw new Error(
                    "ChaCha20Poly1305: incorrect destination length"
                  );
                h = i;
              } else h = new Uint8Array(l);
              return (
                n.streamXOR(
                  this._key,
                  o,
                  t.subarray(0, t.length - this.tagLength),
                  h,
                  4
                ),
                s.wipe(o),
                h
              );
            }),
            (e.prototype.clean = function () {
              return s.wipe(this._key), this;
            }),
            (e.prototype._authenticate = function (e, t, r, n) {
              var a = new i.Poly1305(t);
              n &&
                (a.update(n),
                n.length % 16 > 0 && a.update(c.subarray(n.length % 16))),
                a.update(r),
                r.length % 16 > 0 && a.update(c.subarray(r.length % 16));
              var u = new Uint8Array(8);
              n && o.writeUint64LE(n.length, u),
                a.update(u),
                o.writeUint64LE(r.length, u),
                a.update(u);
              for (var h = a.digest(), l = 0; l < h.length; l++) e[l] = h[l];
              a.clean(), s.wipe(h), s.wipe(u);
            }),
            e
          );
        })();
      t.g6 = u;
    },
    60825: (e, t) => {
      "use strict";
      function r(e, t) {
        if (e.length !== t.length) return 0;
        for (var r = 0, n = 0; n < e.length; n++) r |= e[n] ^ t[n];
        return 1 & ((r - 1) >>> 8);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.select = function (e, t, r) {
          return (~(e - 1) & t) | ((e - 1) & r);
        }),
        (t.lessOrEqual = function (e, t) {
          return (((0 | e) - (0 | t) - 1) >>> 31) & 1;
        }),
        (t.compare = r),
        (t.equal = function (e, t) {
          return 0 !== e.length && 0 !== t.length && 0 !== r(e, t);
        });
    },
    43045: (e, t, r) => {
      "use strict";
      t._S = t.K = t.TP = t.wE = t.Ee = void 0;
      const n = r(95473),
        i = r(70251),
        s = r(56537);
      function o(e) {
        const t = new Float64Array(16);
        if (e) for (let r = 0; r < e.length; r++) t[r] = e[r];
        return t;
      }
      (t.Ee = 64), (t.wE = 64), (t.TP = 32);
      new Uint8Array(32)[0] = 9;
      const a = o(),
        c = o([1]),
        u = o([
          30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585,
          16505, 36039, 65139, 11119, 27886, 20995,
        ]),
        h = o([
          61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171,
          33010, 6542, 64743, 22239, 55772, 9222,
        ]),
        l = o([
          54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
          57905, 49316, 21502, 52590, 14035, 8553,
        ]),
        f = o([
          26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
          26214, 26214, 26214, 26214, 26214, 26214,
        ]),
        p = o([
          41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867,
          153, 11085, 57099, 20417, 9344, 11139,
        ]);
      function d(e, t) {
        for (let r = 0; r < 16; r++) e[r] = 0 | t[r];
      }
      function g(e) {
        let t = 1;
        for (let r = 0; r < 16; r++) {
          let n = e[r] + t + 65535;
          (t = Math.floor(n / 65536)), (e[r] = n - 65536 * t);
        }
        e[0] += t - 1 + 37 * (t - 1);
      }
      function y(e, t, r) {
        const n = ~(r - 1);
        for (let i = 0; i < 16; i++) {
          const r = n & (e[i] ^ t[i]);
          (e[i] ^= r), (t[i] ^= r);
        }
      }
      function v(e, t) {
        const r = o(),
          n = o();
        for (let i = 0; i < 16; i++) n[i] = t[i];
        g(n), g(n), g(n);
        for (let i = 0; i < 2; i++) {
          r[0] = n[0] - 65517;
          for (let t = 1; t < 15; t++)
            (r[t] = n[t] - 65535 - ((r[t - 1] >> 16) & 1)), (r[t - 1] &= 65535);
          r[15] = n[15] - 32767 - ((r[14] >> 16) & 1);
          const e = (r[15] >> 16) & 1;
          (r[14] &= 65535), y(n, r, 1 - e);
        }
        for (let i = 0; i < 16; i++)
          (e[2 * i] = 255 & n[i]), (e[2 * i + 1] = n[i] >> 8);
      }
      function m(e, t) {
        let r = 0;
        for (let n = 0; n < 32; n++) r |= e[n] ^ t[n];
        return (1 & ((r - 1) >>> 8)) - 1;
      }
      function w(e, t) {
        const r = new Uint8Array(32),
          n = new Uint8Array(32);
        return v(r, e), v(n, t), m(r, n);
      }
      function b(e) {
        const t = new Uint8Array(32);
        return v(t, e), 1 & t[0];
      }
      function _(e, t, r) {
        for (let n = 0; n < 16; n++) e[n] = t[n] + r[n];
      }
      function E(e, t, r) {
        for (let n = 0; n < 16; n++) e[n] = t[n] - r[n];
      }
      function S(e, t, r) {
        let n,
          i,
          s = 0,
          o = 0,
          a = 0,
          c = 0,
          u = 0,
          h = 0,
          l = 0,
          f = 0,
          p = 0,
          d = 0,
          g = 0,
          y = 0,
          v = 0,
          m = 0,
          w = 0,
          b = 0,
          _ = 0,
          E = 0,
          S = 0,
          I = 0,
          P = 0,
          O = 0,
          A = 0,
          x = 0,
          R = 0,
          N = 0,
          T = 0,
          C = 0,
          j = 0,
          U = 0,
          L = 0,
          M = r[0],
          D = r[1],
          k = r[2],
          q = r[3],
          $ = r[4],
          z = r[5],
          H = r[6],
          B = r[7],
          K = r[8],
          V = r[9],
          F = r[10],
          W = r[11],
          G = r[12],
          Y = r[13],
          J = r[14],
          Q = r[15];
        (n = t[0]),
          (s += n * M),
          (o += n * D),
          (a += n * k),
          (c += n * q),
          (u += n * $),
          (h += n * z),
          (l += n * H),
          (f += n * B),
          (p += n * K),
          (d += n * V),
          (g += n * F),
          (y += n * W),
          (v += n * G),
          (m += n * Y),
          (w += n * J),
          (b += n * Q),
          (n = t[1]),
          (o += n * M),
          (a += n * D),
          (c += n * k),
          (u += n * q),
          (h += n * $),
          (l += n * z),
          (f += n * H),
          (p += n * B),
          (d += n * K),
          (g += n * V),
          (y += n * F),
          (v += n * W),
          (m += n * G),
          (w += n * Y),
          (b += n * J),
          (_ += n * Q),
          (n = t[2]),
          (a += n * M),
          (c += n * D),
          (u += n * k),
          (h += n * q),
          (l += n * $),
          (f += n * z),
          (p += n * H),
          (d += n * B),
          (g += n * K),
          (y += n * V),
          (v += n * F),
          (m += n * W),
          (w += n * G),
          (b += n * Y),
          (_ += n * J),
          (E += n * Q),
          (n = t[3]),
          (c += n * M),
          (u += n * D),
          (h += n * k),
          (l += n * q),
          (f += n * $),
          (p += n * z),
          (d += n * H),
          (g += n * B),
          (y += n * K),
          (v += n * V),
          (m += n * F),
          (w += n * W),
          (b += n * G),
          (_ += n * Y),
          (E += n * J),
          (S += n * Q),
          (n = t[4]),
          (u += n * M),
          (h += n * D),
          (l += n * k),
          (f += n * q),
          (p += n * $),
          (d += n * z),
          (g += n * H),
          (y += n * B),
          (v += n * K),
          (m += n * V),
          (w += n * F),
          (b += n * W),
          (_ += n * G),
          (E += n * Y),
          (S += n * J),
          (I += n * Q),
          (n = t[5]),
          (h += n * M),
          (l += n * D),
          (f += n * k),
          (p += n * q),
          (d += n * $),
          (g += n * z),
          (y += n * H),
          (v += n * B),
          (m += n * K),
          (w += n * V),
          (b += n * F),
          (_ += n * W),
          (E += n * G),
          (S += n * Y),
          (I += n * J),
          (P += n * Q),
          (n = t[6]),
          (l += n * M),
          (f += n * D),
          (p += n * k),
          (d += n * q),
          (g += n * $),
          (y += n * z),
          (v += n * H),
          (m += n * B),
          (w += n * K),
          (b += n * V),
          (_ += n * F),
          (E += n * W),
          (S += n * G),
          (I += n * Y),
          (P += n * J),
          (O += n * Q),
          (n = t[7]),
          (f += n * M),
          (p += n * D),
          (d += n * k),
          (g += n * q),
          (y += n * $),
          (v += n * z),
          (m += n * H),
          (w += n * B),
          (b += n * K),
          (_ += n * V),
          (E += n * F),
          (S += n * W),
          (I += n * G),
          (P += n * Y),
          (O += n * J),
          (A += n * Q),
          (n = t[8]),
          (p += n * M),
          (d += n * D),
          (g += n * k),
          (y += n * q),
          (v += n * $),
          (m += n * z),
          (w += n * H),
          (b += n * B),
          (_ += n * K),
          (E += n * V),
          (S += n * F),
          (I += n * W),
          (P += n * G),
          (O += n * Y),
          (A += n * J),
          (x += n * Q),
          (n = t[9]),
          (d += n * M),
          (g += n * D),
          (y += n * k),
          (v += n * q),
          (m += n * $),
          (w += n * z),
          (b += n * H),
          (_ += n * B),
          (E += n * K),
          (S += n * V),
          (I += n * F),
          (P += n * W),
          (O += n * G),
          (A += n * Y),
          (x += n * J),
          (R += n * Q),
          (n = t[10]),
          (g += n * M),
          (y += n * D),
          (v += n * k),
          (m += n * q),
          (w += n * $),
          (b += n * z),
          (_ += n * H),
          (E += n * B),
          (S += n * K),
          (I += n * V),
          (P += n * F),
          (O += n * W),
          (A += n * G),
          (x += n * Y),
          (R += n * J),
          (N += n * Q),
          (n = t[11]),
          (y += n * M),
          (v += n * D),
          (m += n * k),
          (w += n * q),
          (b += n * $),
          (_ += n * z),
          (E += n * H),
          (S += n * B),
          (I += n * K),
          (P += n * V),
          (O += n * F),
          (A += n * W),
          (x += n * G),
          (R += n * Y),
          (N += n * J),
          (T += n * Q),
          (n = t[12]),
          (v += n * M),
          (m += n * D),
          (w += n * k),
          (b += n * q),
          (_ += n * $),
          (E += n * z),
          (S += n * H),
          (I += n * B),
          (P += n * K),
          (O += n * V),
          (A += n * F),
          (x += n * W),
          (R += n * G),
          (N += n * Y),
          (T += n * J),
          (C += n * Q),
          (n = t[13]),
          (m += n * M),
          (w += n * D),
          (b += n * k),
          (_ += n * q),
          (E += n * $),
          (S += n * z),
          (I += n * H),
          (P += n * B),
          (O += n * K),
          (A += n * V),
          (x += n * F),
          (R += n * W),
          (N += n * G),
          (T += n * Y),
          (C += n * J),
          (j += n * Q),
          (n = t[14]),
          (w += n * M),
          (b += n * D),
          (_ += n * k),
          (E += n * q),
          (S += n * $),
          (I += n * z),
          (P += n * H),
          (O += n * B),
          (A += n * K),
          (x += n * V),
          (R += n * F),
          (N += n * W),
          (T += n * G),
          (C += n * Y),
          (j += n * J),
          (U += n * Q),
          (n = t[15]),
          (b += n * M),
          (_ += n * D),
          (E += n * k),
          (S += n * q),
          (I += n * $),
          (P += n * z),
          (O += n * H),
          (A += n * B),
          (x += n * K),
          (R += n * V),
          (N += n * F),
          (T += n * W),
          (C += n * G),
          (j += n * Y),
          (U += n * J),
          (L += n * Q),
          (s += 38 * _),
          (o += 38 * E),
          (a += 38 * S),
          (c += 38 * I),
          (u += 38 * P),
          (h += 38 * O),
          (l += 38 * A),
          (f += 38 * x),
          (p += 38 * R),
          (d += 38 * N),
          (g += 38 * T),
          (y += 38 * C),
          (v += 38 * j),
          (m += 38 * U),
          (w += 38 * L),
          (i = 1),
          (n = s + i + 65535),
          (i = Math.floor(n / 65536)),
          (s = n - 65536 * i),
          (n = o + i + 65535),
          (i = Math.floor(n / 65536)),
          (o = n - 65536 * i),
          (n = a + i + 65535),
          (i = Math.floor(n / 65536)),
          (a = n - 65536 * i),
          (n = c + i + 65535),
          (i = Math.floor(n / 65536)),
          (c = n - 65536 * i),
          (n = u + i + 65535),
          (i = Math.floor(n / 65536)),
          (u = n - 65536 * i),
          (n = h + i + 65535),
          (i = Math.floor(n / 65536)),
          (h = n - 65536 * i),
          (n = l + i + 65535),
          (i = Math.floor(n / 65536)),
          (l = n - 65536 * i),
          (n = f + i + 65535),
          (i = Math.floor(n / 65536)),
          (f = n - 65536 * i),
          (n = p + i + 65535),
          (i = Math.floor(n / 65536)),
          (p = n - 65536 * i),
          (n = d + i + 65535),
          (i = Math.floor(n / 65536)),
          (d = n - 65536 * i),
          (n = g + i + 65535),
          (i = Math.floor(n / 65536)),
          (g = n - 65536 * i),
          (n = y + i + 65535),
          (i = Math.floor(n / 65536)),
          (y = n - 65536 * i),
          (n = v + i + 65535),
          (i = Math.floor(n / 65536)),
          (v = n - 65536 * i),
          (n = m + i + 65535),
          (i = Math.floor(n / 65536)),
          (m = n - 65536 * i),
          (n = w + i + 65535),
          (i = Math.floor(n / 65536)),
          (w = n - 65536 * i),
          (n = b + i + 65535),
          (i = Math.floor(n / 65536)),
          (b = n - 65536 * i),
          (s += i - 1 + 37 * (i - 1)),
          (i = 1),
          (n = s + i + 65535),
          (i = Math.floor(n / 65536)),
          (s = n - 65536 * i),
          (n = o + i + 65535),
          (i = Math.floor(n / 65536)),
          (o = n - 65536 * i),
          (n = a + i + 65535),
          (i = Math.floor(n / 65536)),
          (a = n - 65536 * i),
          (n = c + i + 65535),
          (i = Math.floor(n / 65536)),
          (c = n - 65536 * i),
          (n = u + i + 65535),
          (i = Math.floor(n / 65536)),
          (u = n - 65536 * i),
          (n = h + i + 65535),
          (i = Math.floor(n / 65536)),
          (h = n - 65536 * i),
          (n = l + i + 65535),
          (i = Math.floor(n / 65536)),
          (l = n - 65536 * i),
          (n = f + i + 65535),
          (i = Math.floor(n / 65536)),
          (f = n - 65536 * i),
          (n = p + i + 65535),
          (i = Math.floor(n / 65536)),
          (p = n - 65536 * i),
          (n = d + i + 65535),
          (i = Math.floor(n / 65536)),
          (d = n - 65536 * i),
          (n = g + i + 65535),
          (i = Math.floor(n / 65536)),
          (g = n - 65536 * i),
          (n = y + i + 65535),
          (i = Math.floor(n / 65536)),
          (y = n - 65536 * i),
          (n = v + i + 65535),
          (i = Math.floor(n / 65536)),
          (v = n - 65536 * i),
          (n = m + i + 65535),
          (i = Math.floor(n / 65536)),
          (m = n - 65536 * i),
          (n = w + i + 65535),
          (i = Math.floor(n / 65536)),
          (w = n - 65536 * i),
          (n = b + i + 65535),
          (i = Math.floor(n / 65536)),
          (b = n - 65536 * i),
          (s += i - 1 + 37 * (i - 1)),
          (e[0] = s),
          (e[1] = o),
          (e[2] = a),
          (e[3] = c),
          (e[4] = u),
          (e[5] = h),
          (e[6] = l),
          (e[7] = f),
          (e[8] = p),
          (e[9] = d),
          (e[10] = g),
          (e[11] = y),
          (e[12] = v),
          (e[13] = m),
          (e[14] = w),
          (e[15] = b);
      }
      function I(e, t) {
        S(e, t, t);
      }
      function P(e, t) {
        const r = o();
        let n;
        for (n = 0; n < 16; n++) r[n] = t[n];
        for (n = 253; n >= 0; n--) I(r, r), 2 !== n && 4 !== n && S(r, r, t);
        for (n = 0; n < 16; n++) e[n] = r[n];
      }
      function O(e, t) {
        const r = o(),
          n = o(),
          i = o(),
          s = o(),
          a = o(),
          c = o(),
          u = o(),
          l = o(),
          f = o();
        E(r, e[1], e[0]),
          E(f, t[1], t[0]),
          S(r, r, f),
          _(n, e[0], e[1]),
          _(f, t[0], t[1]),
          S(n, n, f),
          S(i, e[3], t[3]),
          S(i, i, h),
          S(s, e[2], t[2]),
          _(s, s, s),
          E(a, n, r),
          E(c, s, i),
          _(u, s, i),
          _(l, n, r),
          S(e[0], a, c),
          S(e[1], l, u),
          S(e[2], u, c),
          S(e[3], a, l);
      }
      function A(e, t, r) {
        for (let n = 0; n < 4; n++) y(e[n], t[n], r);
      }
      function x(e, t) {
        const r = o(),
          n = o(),
          i = o();
        P(i, t[2]), S(r, t[0], i), S(n, t[1], i), v(e, n), (e[31] ^= b(r) << 7);
      }
      function R(e, t, r) {
        d(e[0], a), d(e[1], c), d(e[2], c), d(e[3], a);
        for (let n = 255; n >= 0; --n) {
          const i = (r[(n / 8) | 0] >> (7 & n)) & 1;
          A(e, t, i), O(t, e), O(e, e), A(e, t, i);
        }
      }
      function N(e, t) {
        const r = [o(), o(), o(), o()];
        d(r[0], l), d(r[1], f), d(r[2], c), S(r[3], l, f), R(e, r, t);
      }
      function T(e) {
        if (e.length !== t.TP)
          throw new Error(`ed25519: seed must be ${t.TP} bytes`);
        const r = (0, i.hash)(e);
        (r[0] &= 248), (r[31] &= 127), (r[31] |= 64);
        const n = new Uint8Array(32),
          s = [o(), o(), o(), o()];
        N(s, r), x(n, s);
        const a = new Uint8Array(64);
        return a.set(e), a.set(n, 32), { publicKey: n, secretKey: a };
      }
      t.K = T;
      const C = new Float64Array([
        237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222,
        20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
      ]);
      function j(e, t) {
        let r, n, i, s;
        for (n = 63; n >= 32; --n) {
          for (r = 0, i = n - 32, s = n - 12; i < s; ++i)
            (t[i] += r - 16 * t[n] * C[i - (n - 32)]),
              (r = Math.floor((t[i] + 128) / 256)),
              (t[i] -= 256 * r);
          (t[i] += r), (t[n] = 0);
        }
        for (r = 0, i = 0; i < 32; i++)
          (t[i] += r - (t[31] >> 4) * C[i]), (r = t[i] >> 8), (t[i] &= 255);
        for (i = 0; i < 32; i++) t[i] -= r * C[i];
        for (n = 0; n < 32; n++) (t[n + 1] += t[n] >> 8), (e[n] = 255 & t[n]);
      }
      function U(e) {
        const t = new Float64Array(64);
        for (let r = 0; r < 64; r++) t[r] = e[r];
        for (let r = 0; r < 64; r++) e[r] = 0;
        j(e, t);
      }
      function L(e, t) {
        const r = o(),
          n = o(),
          i = o(),
          s = o(),
          h = o(),
          l = o(),
          f = o();
        return (
          d(e[2], c),
          (function (e, t) {
            for (let r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8);
            e[15] &= 32767;
          })(e[1], t),
          I(i, e[1]),
          S(s, i, u),
          E(i, i, e[2]),
          _(s, e[2], s),
          I(h, s),
          I(l, h),
          S(f, l, h),
          S(r, f, i),
          S(r, r, s),
          (function (e, t) {
            const r = o();
            let n;
            for (n = 0; n < 16; n++) r[n] = t[n];
            for (n = 250; n >= 0; n--) I(r, r), 1 !== n && S(r, r, t);
            for (n = 0; n < 16; n++) e[n] = r[n];
          })(r, r),
          S(r, r, i),
          S(r, r, s),
          S(r, r, s),
          S(e[0], r, s),
          I(n, e[0]),
          S(n, n, s),
          w(n, i) && S(e[0], e[0], p),
          I(n, e[0]),
          S(n, n, s),
          w(n, i)
            ? -1
            : (b(e[0]) === t[31] >> 7 && E(e[0], a, e[0]),
              S(e[3], e[0], e[1]),
              0)
        );
      }
      t._S = function (e, t) {
        const r = new Float64Array(64),
          n = [o(), o(), o(), o()],
          s = (0, i.hash)(e.subarray(0, 32));
        (s[0] &= 248), (s[31] &= 127), (s[31] |= 64);
        const a = new Uint8Array(64);
        a.set(s.subarray(32), 32);
        const c = new i.SHA512();
        c.update(a.subarray(32)), c.update(t);
        const u = c.digest();
        c.clean(),
          U(u),
          N(n, u),
          x(a, n),
          c.reset(),
          c.update(a.subarray(0, 32)),
          c.update(e.subarray(32)),
          c.update(t);
        const h = c.digest();
        U(h);
        for (let i = 0; i < 32; i++) r[i] = u[i];
        for (let i = 0; i < 32; i++)
          for (let e = 0; e < 32; e++) r[i + e] += h[i] * s[e];
        return j(a.subarray(32), r), a;
      };
    },
    98967: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isSerializableHash = function (e) {
          return (
            "undefined" !== typeof e.saveState &&
            "undefined" !== typeof e.restoreState &&
            "undefined" !== typeof e.cleanSavedState
          );
        });
    },
    10269: (e, t, r) => {
      "use strict";
      var n = r(32553),
        i = r(56537),
        s = (function () {
          function e(e, t, r, i) {
            void 0 === r && (r = new Uint8Array(0)),
              (this._counter = new Uint8Array(1)),
              (this._hash = e),
              (this._info = i);
            var s = n.hmac(this._hash, r, t);
            (this._hmac = new n.HMAC(e, s)),
              (this._buffer = new Uint8Array(this._hmac.digestLength)),
              (this._bufpos = this._buffer.length);
          }
          return (
            (e.prototype._fillBuffer = function () {
              this._counter[0]++;
              var e = this._counter[0];
              if (0 === e) throw new Error("hkdf: cannot expand more");
              this._hmac.reset(),
                e > 1 && this._hmac.update(this._buffer),
                this._info && this._hmac.update(this._info),
                this._hmac.update(this._counter),
                this._hmac.finish(this._buffer),
                (this._bufpos = 0);
            }),
            (e.prototype.expand = function (e) {
              for (var t = new Uint8Array(e), r = 0; r < t.length; r++)
                this._bufpos === this._buffer.length && this._fillBuffer(),
                  (t[r] = this._buffer[this._bufpos++]);
              return t;
            }),
            (e.prototype.clean = function () {
              this._hmac.clean(),
                i.wipe(this._buffer),
                i.wipe(this._counter),
                (this._bufpos = 0);
            }),
            e
          );
        })();
      t.i = s;
    },
    32553: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(98967),
        i = r(60825),
        s = r(56537),
        o = (function () {
          function e(e, t) {
            (this._finished = !1),
              (this._inner = new e()),
              (this._outer = new e()),
              (this.blockSize = this._outer.blockSize),
              (this.digestLength = this._outer.digestLength);
            var r = new Uint8Array(this.blockSize);
            t.length > this.blockSize
              ? this._inner.update(t).finish(r).clean()
              : r.set(t);
            for (var i = 0; i < r.length; i++) r[i] ^= 54;
            this._inner.update(r);
            for (i = 0; i < r.length; i++) r[i] ^= 106;
            this._outer.update(r),
              n.isSerializableHash(this._inner) &&
                n.isSerializableHash(this._outer) &&
                ((this._innerKeyedState = this._inner.saveState()),
                (this._outerKeyedState = this._outer.saveState())),
              s.wipe(r);
          }
          return (
            (e.prototype.reset = function () {
              if (
                !n.isSerializableHash(this._inner) ||
                !n.isSerializableHash(this._outer)
              )
                throw new Error(
                  "hmac: can't reset() because hash doesn't implement restoreState()"
                );
              return (
                this._inner.restoreState(this._innerKeyedState),
                this._outer.restoreState(this._outerKeyedState),
                (this._finished = !1),
                this
              );
            }),
            (e.prototype.clean = function () {
              n.isSerializableHash(this._inner) &&
                this._inner.cleanSavedState(this._innerKeyedState),
                n.isSerializableHash(this._outer) &&
                  this._outer.cleanSavedState(this._outerKeyedState),
                this._inner.clean(),
                this._outer.clean();
            }),
            (e.prototype.update = function (e) {
              return this._inner.update(e), this;
            }),
            (e.prototype.finish = function (e) {
              return this._finished
                ? (this._outer.finish(e), this)
                : (this._inner.finish(e),
                  this._outer
                    .update(e.subarray(0, this.digestLength))
                    .finish(e),
                  (this._finished = !0),
                  this);
            }),
            (e.prototype.digest = function () {
              var e = new Uint8Array(this.digestLength);
              return this.finish(e), e;
            }),
            (e.prototype.saveState = function () {
              if (!n.isSerializableHash(this._inner))
                throw new Error(
                  "hmac: can't saveState() because hash doesn't implement it"
                );
              return this._inner.saveState();
            }),
            (e.prototype.restoreState = function (e) {
              if (
                !n.isSerializableHash(this._inner) ||
                !n.isSerializableHash(this._outer)
              )
                throw new Error(
                  "hmac: can't restoreState() because hash doesn't implement it"
                );
              return (
                this._inner.restoreState(e),
                this._outer.restoreState(this._outerKeyedState),
                (this._finished = !1),
                this
              );
            }),
            (e.prototype.cleanSavedState = function (e) {
              if (!n.isSerializableHash(this._inner))
                throw new Error(
                  "hmac: can't cleanSavedState() because hash doesn't implement it"
                );
              this._inner.cleanSavedState(e);
            }),
            e
          );
        })();
      (t.HMAC = o),
        (t.hmac = function (e, t, r) {
          var n = new o(e, t);
          n.update(r);
          var i = n.digest();
          return n.clean(), i;
        }),
        (t.equal = i.equal);
    },
    17053: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.mul =
          Math.imul ||
          function (e, t) {
            var r = 65535 & e,
              n = 65535 & t;
            return (
              (r * n +
                (((((e >>> 16) & 65535) * n + r * ((t >>> 16) & 65535)) <<
                  16) >>>
                  0)) |
              0
            );
          }),
        (t.add = function (e, t) {
          return (e + t) | 0;
        }),
        (t.sub = function (e, t) {
          return (e - t) | 0;
        }),
        (t.rotl = function (e, t) {
          return (e << t) | (e >>> (32 - t));
        }),
        (t.rotr = function (e, t) {
          return (e << (32 - t)) | (e >>> t);
        }),
        (t.isInteger =
          Number.isInteger ||
          function (e) {
            return "number" === typeof e && isFinite(e) && Math.floor(e) === e;
          }),
        (t.MAX_SAFE_INTEGER = 9007199254740991),
        (t.isSafeInteger = function (e) {
          return (
            t.isInteger(e) &&
            e >= -t.MAX_SAFE_INTEGER &&
            e <= t.MAX_SAFE_INTEGER
          );
        });
    },
    56657: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(60825),
        i = r(56537);
      t.DIGEST_LENGTH = 16;
      var s = (function () {
        function e(e) {
          (this.digestLength = t.DIGEST_LENGTH),
            (this._buffer = new Uint8Array(16)),
            (this._r = new Uint16Array(10)),
            (this._h = new Uint16Array(10)),
            (this._pad = new Uint16Array(8)),
            (this._leftover = 0),
            (this._fin = 0),
            (this._finished = !1);
          var r = e[0] | (e[1] << 8);
          this._r[0] = 8191 & r;
          var n = e[2] | (e[3] << 8);
          this._r[1] = 8191 & ((r >>> 13) | (n << 3));
          var i = e[4] | (e[5] << 8);
          this._r[2] = 7939 & ((n >>> 10) | (i << 6));
          var s = e[6] | (e[7] << 8);
          this._r[3] = 8191 & ((i >>> 7) | (s << 9));
          var o = e[8] | (e[9] << 8);
          (this._r[4] = 255 & ((s >>> 4) | (o << 12))),
            (this._r[5] = (o >>> 1) & 8190);
          var a = e[10] | (e[11] << 8);
          this._r[6] = 8191 & ((o >>> 14) | (a << 2));
          var c = e[12] | (e[13] << 8);
          this._r[7] = 8065 & ((a >>> 11) | (c << 5));
          var u = e[14] | (e[15] << 8);
          (this._r[8] = 8191 & ((c >>> 8) | (u << 8))),
            (this._r[9] = (u >>> 5) & 127),
            (this._pad[0] = e[16] | (e[17] << 8)),
            (this._pad[1] = e[18] | (e[19] << 8)),
            (this._pad[2] = e[20] | (e[21] << 8)),
            (this._pad[3] = e[22] | (e[23] << 8)),
            (this._pad[4] = e[24] | (e[25] << 8)),
            (this._pad[5] = e[26] | (e[27] << 8)),
            (this._pad[6] = e[28] | (e[29] << 8)),
            (this._pad[7] = e[30] | (e[31] << 8));
        }
        return (
          (e.prototype._blocks = function (e, t, r) {
            for (
              var n = this._fin ? 0 : 2048,
                i = this._h[0],
                s = this._h[1],
                o = this._h[2],
                a = this._h[3],
                c = this._h[4],
                u = this._h[5],
                h = this._h[6],
                l = this._h[7],
                f = this._h[8],
                p = this._h[9],
                d = this._r[0],
                g = this._r[1],
                y = this._r[2],
                v = this._r[3],
                m = this._r[4],
                w = this._r[5],
                b = this._r[6],
                _ = this._r[7],
                E = this._r[8],
                S = this._r[9];
              r >= 16;

            ) {
              var I = e[t + 0] | (e[t + 1] << 8);
              i += 8191 & I;
              var P = e[t + 2] | (e[t + 3] << 8);
              s += 8191 & ((I >>> 13) | (P << 3));
              var O = e[t + 4] | (e[t + 5] << 8);
              o += 8191 & ((P >>> 10) | (O << 6));
              var A = e[t + 6] | (e[t + 7] << 8);
              a += 8191 & ((O >>> 7) | (A << 9));
              var x = e[t + 8] | (e[t + 9] << 8);
              (c += 8191 & ((A >>> 4) | (x << 12))), (u += (x >>> 1) & 8191);
              var R = e[t + 10] | (e[t + 11] << 8);
              h += 8191 & ((x >>> 14) | (R << 2));
              var N = e[t + 12] | (e[t + 13] << 8);
              l += 8191 & ((R >>> 11) | (N << 5));
              var T = e[t + 14] | (e[t + 15] << 8),
                C = 0,
                j = C;
              (j += i * d),
                (j += s * (5 * S)),
                (j += o * (5 * E)),
                (j += a * (5 * _)),
                (C = (j += c * (5 * b)) >>> 13),
                (j &= 8191),
                (j += u * (5 * w)),
                (j += h * (5 * m)),
                (j += l * (5 * v)),
                (j += (f += 8191 & ((N >>> 8) | (T << 8))) * (5 * y));
              var U = (C += (j += (p += (T >>> 5) | n) * (5 * g)) >>> 13);
              (U += i * g),
                (U += s * d),
                (U += o * (5 * S)),
                (U += a * (5 * E)),
                (C = (U += c * (5 * _)) >>> 13),
                (U &= 8191),
                (U += u * (5 * b)),
                (U += h * (5 * w)),
                (U += l * (5 * m)),
                (U += f * (5 * v)),
                (C += (U += p * (5 * y)) >>> 13),
                (U &= 8191);
              var L = C;
              (L += i * y),
                (L += s * g),
                (L += o * d),
                (L += a * (5 * S)),
                (C = (L += c * (5 * E)) >>> 13),
                (L &= 8191),
                (L += u * (5 * _)),
                (L += h * (5 * b)),
                (L += l * (5 * w)),
                (L += f * (5 * m));
              var M = (C += (L += p * (5 * v)) >>> 13);
              (M += i * v),
                (M += s * y),
                (M += o * g),
                (M += a * d),
                (C = (M += c * (5 * S)) >>> 13),
                (M &= 8191),
                (M += u * (5 * E)),
                (M += h * (5 * _)),
                (M += l * (5 * b)),
                (M += f * (5 * w));
              var D = (C += (M += p * (5 * m)) >>> 13);
              (D += i * m),
                (D += s * v),
                (D += o * y),
                (D += a * g),
                (C = (D += c * d) >>> 13),
                (D &= 8191),
                (D += u * (5 * S)),
                (D += h * (5 * E)),
                (D += l * (5 * _)),
                (D += f * (5 * b));
              var k = (C += (D += p * (5 * w)) >>> 13);
              (k += i * w),
                (k += s * m),
                (k += o * v),
                (k += a * y),
                (C = (k += c * g) >>> 13),
                (k &= 8191),
                (k += u * d),
                (k += h * (5 * S)),
                (k += l * (5 * E)),
                (k += f * (5 * _));
              var q = (C += (k += p * (5 * b)) >>> 13);
              (q += i * b),
                (q += s * w),
                (q += o * m),
                (q += a * v),
                (C = (q += c * y) >>> 13),
                (q &= 8191),
                (q += u * g),
                (q += h * d),
                (q += l * (5 * S)),
                (q += f * (5 * E));
              var $ = (C += (q += p * (5 * _)) >>> 13);
              ($ += i * _),
                ($ += s * b),
                ($ += o * w),
                ($ += a * m),
                (C = ($ += c * v) >>> 13),
                ($ &= 8191),
                ($ += u * y),
                ($ += h * g),
                ($ += l * d),
                ($ += f * (5 * S));
              var z = (C += ($ += p * (5 * E)) >>> 13);
              (z += i * E),
                (z += s * _),
                (z += o * b),
                (z += a * w),
                (C = (z += c * m) >>> 13),
                (z &= 8191),
                (z += u * v),
                (z += h * y),
                (z += l * g),
                (z += f * d);
              var H = (C += (z += p * (5 * S)) >>> 13);
              (H += i * S),
                (H += s * E),
                (H += o * _),
                (H += a * b),
                (C = (H += c * w) >>> 13),
                (H &= 8191),
                (H += u * m),
                (H += h * v),
                (H += l * y),
                (H += f * g),
                (i = j =
                  8191 &
                  (C =
                    ((C = (((C += (H += p * d) >>> 13) << 2) + C) | 0) +
                      (j &= 8191)) |
                    0)),
                (s = U += C >>>= 13),
                (o = L &= 8191),
                (a = M &= 8191),
                (c = D &= 8191),
                (u = k &= 8191),
                (h = q &= 8191),
                (l = $ &= 8191),
                (f = z &= 8191),
                (p = H &= 8191),
                (t += 16),
                (r -= 16);
            }
            (this._h[0] = i),
              (this._h[1] = s),
              (this._h[2] = o),
              (this._h[3] = a),
              (this._h[4] = c),
              (this._h[5] = u),
              (this._h[6] = h),
              (this._h[7] = l),
              (this._h[8] = f),
              (this._h[9] = p);
          }),
          (e.prototype.finish = function (e, t) {
            void 0 === t && (t = 0);
            var r,
              n,
              i,
              s,
              o = new Uint16Array(10);
            if (this._leftover) {
              for (s = this._leftover, this._buffer[s++] = 1; s < 16; s++)
                this._buffer[s] = 0;
              (this._fin = 1), this._blocks(this._buffer, 0, 16);
            }
            for (r = this._h[1] >>> 13, this._h[1] &= 8191, s = 2; s < 10; s++)
              (this._h[s] += r), (r = this._h[s] >>> 13), (this._h[s] &= 8191);
            for (
              this._h[0] += 5 * r,
                r = this._h[0] >>> 13,
                this._h[0] &= 8191,
                this._h[1] += r,
                r = this._h[1] >>> 13,
                this._h[1] &= 8191,
                this._h[2] += r,
                o[0] = this._h[0] + 5,
                r = o[0] >>> 13,
                o[0] &= 8191,
                s = 1;
              s < 10;
              s++
            )
              (o[s] = this._h[s] + r), (r = o[s] >>> 13), (o[s] &= 8191);
            for (o[9] -= 8192, n = (1 ^ r) - 1, s = 0; s < 10; s++) o[s] &= n;
            for (n = ~n, s = 0; s < 10; s++)
              this._h[s] = (this._h[s] & n) | o[s];
            for (
              this._h[0] = 65535 & (this._h[0] | (this._h[1] << 13)),
                this._h[1] = 65535 & ((this._h[1] >>> 3) | (this._h[2] << 10)),
                this._h[2] = 65535 & ((this._h[2] >>> 6) | (this._h[3] << 7)),
                this._h[3] = 65535 & ((this._h[3] >>> 9) | (this._h[4] << 4)),
                this._h[4] =
                  65535 &
                  ((this._h[4] >>> 12) |
                    (this._h[5] << 1) |
                    (this._h[6] << 14)),
                this._h[5] = 65535 & ((this._h[6] >>> 2) | (this._h[7] << 11)),
                this._h[6] = 65535 & ((this._h[7] >>> 5) | (this._h[8] << 8)),
                this._h[7] = 65535 & ((this._h[8] >>> 8) | (this._h[9] << 5)),
                i = this._h[0] + this._pad[0],
                this._h[0] = 65535 & i,
                s = 1;
              s < 8;
              s++
            )
              (i = (((this._h[s] + this._pad[s]) | 0) + (i >>> 16)) | 0),
                (this._h[s] = 65535 & i);
            return (
              (e[t + 0] = this._h[0] >>> 0),
              (e[t + 1] = this._h[0] >>> 8),
              (e[t + 2] = this._h[1] >>> 0),
              (e[t + 3] = this._h[1] >>> 8),
              (e[t + 4] = this._h[2] >>> 0),
              (e[t + 5] = this._h[2] >>> 8),
              (e[t + 6] = this._h[3] >>> 0),
              (e[t + 7] = this._h[3] >>> 8),
              (e[t + 8] = this._h[4] >>> 0),
              (e[t + 9] = this._h[4] >>> 8),
              (e[t + 10] = this._h[5] >>> 0),
              (e[t + 11] = this._h[5] >>> 8),
              (e[t + 12] = this._h[6] >>> 0),
              (e[t + 13] = this._h[6] >>> 8),
              (e[t + 14] = this._h[7] >>> 0),
              (e[t + 15] = this._h[7] >>> 8),
              (this._finished = !0),
              this
            );
          }),
          (e.prototype.update = function (e) {
            var t,
              r = 0,
              n = e.length;
            if (this._leftover) {
              (t = 16 - this._leftover) > n && (t = n);
              for (var i = 0; i < t; i++)
                this._buffer[this._leftover + i] = e[r + i];
              if (
                ((n -= t), (r += t), (this._leftover += t), this._leftover < 16)
              )
                return this;
              this._blocks(this._buffer, 0, 16), (this._leftover = 0);
            }
            if (
              (n >= 16 &&
                ((t = n - (n % 16)), this._blocks(e, r, t), (r += t), (n -= t)),
              n)
            ) {
              for (i = 0; i < n; i++)
                this._buffer[this._leftover + i] = e[r + i];
              this._leftover += n;
            }
            return this;
          }),
          (e.prototype.digest = function () {
            if (this._finished) throw new Error("Poly1305 was finished");
            var e = new Uint8Array(16);
            return this.finish(e), e;
          }),
          (e.prototype.clean = function () {
            return (
              i.wipe(this._buffer),
              i.wipe(this._r),
              i.wipe(this._h),
              i.wipe(this._pad),
              (this._leftover = 0),
              (this._fin = 0),
              (this._finished = !0),
              this
            );
          }),
          e
        );
      })();
      (t.Poly1305 = s),
        (t.oneTimeAuth = function (e, t) {
          var r = new s(e);
          r.update(t);
          var n = r.digest();
          return r.clean(), n;
        }),
        (t.equal = function (e, r) {
          return (
            e.length === t.DIGEST_LENGTH &&
            r.length === t.DIGEST_LENGTH &&
            n.equal(e, r)
          );
        });
    },
    95473: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.randomStringForEntropy =
          t.randomString =
          t.randomUint32 =
          t.randomBytes =
          t.defaultRandomSource =
            void 0);
      const n = r(50015),
        i = r(26785),
        s = r(56537);
      function o(e) {
        return (
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : t.defaultRandomSource
        ).randomBytes(e);
      }
      (t.defaultRandomSource = new n.SystemRandomSource()),
        (t.randomBytes = o),
        (t.randomUint32 = function () {
          const e = o(
              4,
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : t.defaultRandomSource
            ),
            r = (0, i.readUint32LE)(e);
          return (0, s.wipe)(e), r;
        });
      const a =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      function c(e) {
        let r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : t.defaultRandomSource;
        if (r.length < 2) throw new Error("randomString charset is too short");
        if (r.length > 256) throw new Error("randomString charset is too long");
        let i = "";
        const c = r.length,
          u = 256 - (256 % c);
        for (; e > 0; ) {
          const t = o(Math.ceil((256 * e) / u), n);
          for (let n = 0; n < t.length && e > 0; n++) {
            const s = t[n];
            s < u && ((i += r.charAt(s % c)), e--);
          }
          (0, s.wipe)(t);
        }
        return i;
      }
      (t.randomString = c),
        (t.randomStringForEntropy = function (e) {
          let r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : a,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : t.defaultRandomSource;
          return c(Math.ceil(e / (Math.log(r.length) / Math.LN2)), r, n);
        });
    },
    4968: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BrowserRandomSource = void 0);
      t.BrowserRandomSource = class {
        constructor() {
          (this.isAvailable = !1), (this.isInstantiated = !1);
          const e =
            "undefined" !== typeof self ? self.crypto || self.msCrypto : null;
          e &&
            void 0 !== e.getRandomValues &&
            ((this._crypto = e),
            (this.isAvailable = !0),
            (this.isInstantiated = !0));
        }
        randomBytes(e) {
          if (!this.isAvailable || !this._crypto)
            throw new Error("Browser random byte generator is not available.");
          const t = new Uint8Array(e);
          for (let r = 0; r < t.length; r += 65536)
            this._crypto.getRandomValues(
              t.subarray(r, r + Math.min(t.length - r, 65536))
            );
          return t;
        }
      };
    },
    35786: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.NodeRandomSource = void 0);
      const n = r(56537);
      t.NodeRandomSource = class {
        constructor() {
          (this.isAvailable = !1), (this.isInstantiated = !1);
          {
            const e = r(99432);
            e &&
              e.randomBytes &&
              ((this._crypto = e),
              (this.isAvailable = !0),
              (this.isInstantiated = !0));
          }
        }
        randomBytes(e) {
          if (!this.isAvailable || !this._crypto)
            throw new Error("Node.js random byte generator is not available.");
          let t = this._crypto.randomBytes(e);
          if (t.length !== e)
            throw new Error("NodeRandomSource: got fewer bytes than requested");
          const r = new Uint8Array(e);
          for (let n = 0; n < r.length; n++) r[n] = t[n];
          return (0, n.wipe)(t), r;
        }
      };
    },
    50015: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SystemRandomSource = void 0);
      const n = r(4968),
        i = r(35786);
      t.SystemRandomSource = class {
        constructor() {
          return (
            (this.isAvailable = !1),
            (this.name = ""),
            (this._source = new n.BrowserRandomSource()),
            this._source.isAvailable
              ? ((this.isAvailable = !0), void (this.name = "Browser"))
              : ((this._source = new i.NodeRandomSource()),
                this._source.isAvailable
                  ? ((this.isAvailable = !0), void (this.name = "Node"))
                  : void 0)
          );
        }
        randomBytes(e) {
          if (!this.isAvailable)
            throw new Error("System random byte generator is not available.");
          return this._source.randomBytes(e);
        }
      };
    },
    20153: (e, t, r) => {
      "use strict";
      var n = r(26785),
        i = r(56537);
      (t.On = 32), (t.cS = 64);
      var s = (function () {
        function e() {
          (this.digestLength = t.On),
            (this.blockSize = t.cS),
            (this._state = new Int32Array(8)),
            (this._temp = new Int32Array(64)),
            (this._buffer = new Uint8Array(128)),
            (this._bufferLength = 0),
            (this._bytesHashed = 0),
            (this._finished = !1),
            this.reset();
        }
        return (
          (e.prototype._initState = function () {
            (this._state[0] = 1779033703),
              (this._state[1] = 3144134277),
              (this._state[2] = 1013904242),
              (this._state[3] = 2773480762),
              (this._state[4] = 1359893119),
              (this._state[5] = 2600822924),
              (this._state[6] = 528734635),
              (this._state[7] = 1541459225);
          }),
          (e.prototype.reset = function () {
            return (
              this._initState(),
              (this._bufferLength = 0),
              (this._bytesHashed = 0),
              (this._finished = !1),
              this
            );
          }),
          (e.prototype.clean = function () {
            i.wipe(this._buffer), i.wipe(this._temp), this.reset();
          }),
          (e.prototype.update = function (e, t) {
            if ((void 0 === t && (t = e.length), this._finished))
              throw new Error(
                "SHA256: can't update because hash was finished."
              );
            var r = 0;
            if (((this._bytesHashed += t), this._bufferLength > 0)) {
              for (; this._bufferLength < this.blockSize && t > 0; )
                (this._buffer[this._bufferLength++] = e[r++]), t--;
              this._bufferLength === this.blockSize &&
                (a(this._temp, this._state, this._buffer, 0, this.blockSize),
                (this._bufferLength = 0));
            }
            for (
              t >= this.blockSize &&
              ((r = a(this._temp, this._state, e, r, t)),
              (t %= this.blockSize));
              t > 0;

            )
              (this._buffer[this._bufferLength++] = e[r++]), t--;
            return this;
          }),
          (e.prototype.finish = function (e) {
            if (!this._finished) {
              var t = this._bytesHashed,
                r = this._bufferLength,
                i = (t / 536870912) | 0,
                s = t << 3,
                o = t % 64 < 56 ? 64 : 128;
              this._buffer[r] = 128;
              for (var c = r + 1; c < o - 8; c++) this._buffer[c] = 0;
              n.writeUint32BE(i, this._buffer, o - 8),
                n.writeUint32BE(s, this._buffer, o - 4),
                a(this._temp, this._state, this._buffer, 0, o),
                (this._finished = !0);
            }
            for (c = 0; c < this.digestLength / 4; c++)
              n.writeUint32BE(this._state[c], e, 4 * c);
            return this;
          }),
          (e.prototype.digest = function () {
            var e = new Uint8Array(this.digestLength);
            return this.finish(e), e;
          }),
          (e.prototype.saveState = function () {
            if (this._finished)
              throw new Error("SHA256: cannot save finished state");
            return {
              state: new Int32Array(this._state),
              buffer:
                this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
              bufferLength: this._bufferLength,
              bytesHashed: this._bytesHashed,
            };
          }),
          (e.prototype.restoreState = function (e) {
            return (
              this._state.set(e.state),
              (this._bufferLength = e.bufferLength),
              e.buffer && this._buffer.set(e.buffer),
              (this._bytesHashed = e.bytesHashed),
              (this._finished = !1),
              this
            );
          }),
          (e.prototype.cleanSavedState = function (e) {
            i.wipe(e.state),
              e.buffer && i.wipe(e.buffer),
              (e.bufferLength = 0),
              (e.bytesHashed = 0);
          }),
          e
        );
      })();
      t.aD = s;
      var o = new Int32Array([
        1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
        2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
        1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
        264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
        2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
        113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
        1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
        3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
        430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
        1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
        2428436474, 2756734187, 3204031479, 3329325298,
      ]);
      function a(e, t, r, i, s) {
        for (; s >= 64; ) {
          for (
            var a = t[0],
              c = t[1],
              u = t[2],
              h = t[3],
              l = t[4],
              f = t[5],
              p = t[6],
              d = t[7],
              g = 0;
            g < 16;
            g++
          ) {
            var y = i + 4 * g;
            e[g] = n.readUint32BE(r, y);
          }
          for (g = 16; g < 64; g++) {
            var v = e[g - 2],
              m =
                ((v >>> 17) | (v << 15)) ^
                ((v >>> 19) | (v << 13)) ^
                (v >>> 10),
              w =
                (((v = e[g - 15]) >>> 7) | (v << 25)) ^
                ((v >>> 18) | (v << 14)) ^
                (v >>> 3);
            e[g] = ((m + e[g - 7]) | 0) + ((w + e[g - 16]) | 0);
          }
          for (g = 0; g < 64; g++) {
            (m =
              ((((((l >>> 6) | (l << 26)) ^
                ((l >>> 11) | (l << 21)) ^
                ((l >>> 25) | (l << 7))) +
                ((l & f) ^ (~l & p))) |
                0) +
                ((d + ((o[g] + e[g]) | 0)) | 0)) |
              0),
              (w =
                ((((a >>> 2) | (a << 30)) ^
                  ((a >>> 13) | (a << 19)) ^
                  ((a >>> 22) | (a << 10))) +
                  ((a & c) ^ (a & u) ^ (c & u))) |
                0);
            (d = p),
              (p = f),
              (f = l),
              (l = (h + m) | 0),
              (h = u),
              (u = c),
              (c = a),
              (a = (m + w) | 0);
          }
          (t[0] += a),
            (t[1] += c),
            (t[2] += u),
            (t[3] += h),
            (t[4] += l),
            (t[5] += f),
            (t[6] += p),
            (t[7] += d),
            (i += 64),
            (s -= 64);
        }
        return i;
      }
      t.tW = function (e) {
        var t = new s();
        t.update(e);
        var r = t.digest();
        return t.clean(), r;
      };
    },
    70251: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(26785),
        i = r(56537);
      (t.DIGEST_LENGTH = 64), (t.BLOCK_SIZE = 128);
      var s = (function () {
        function e() {
          (this.digestLength = t.DIGEST_LENGTH),
            (this.blockSize = t.BLOCK_SIZE),
            (this._stateHi = new Int32Array(8)),
            (this._stateLo = new Int32Array(8)),
            (this._tempHi = new Int32Array(16)),
            (this._tempLo = new Int32Array(16)),
            (this._buffer = new Uint8Array(256)),
            (this._bufferLength = 0),
            (this._bytesHashed = 0),
            (this._finished = !1),
            this.reset();
        }
        return (
          (e.prototype._initState = function () {
            (this._stateHi[0] = 1779033703),
              (this._stateHi[1] = 3144134277),
              (this._stateHi[2] = 1013904242),
              (this._stateHi[3] = 2773480762),
              (this._stateHi[4] = 1359893119),
              (this._stateHi[5] = 2600822924),
              (this._stateHi[6] = 528734635),
              (this._stateHi[7] = 1541459225),
              (this._stateLo[0] = 4089235720),
              (this._stateLo[1] = 2227873595),
              (this._stateLo[2] = 4271175723),
              (this._stateLo[3] = 1595750129),
              (this._stateLo[4] = 2917565137),
              (this._stateLo[5] = 725511199),
              (this._stateLo[6] = 4215389547),
              (this._stateLo[7] = 327033209);
          }),
          (e.prototype.reset = function () {
            return (
              this._initState(),
              (this._bufferLength = 0),
              (this._bytesHashed = 0),
              (this._finished = !1),
              this
            );
          }),
          (e.prototype.clean = function () {
            i.wipe(this._buffer),
              i.wipe(this._tempHi),
              i.wipe(this._tempLo),
              this.reset();
          }),
          (e.prototype.update = function (e, r) {
            if ((void 0 === r && (r = e.length), this._finished))
              throw new Error(
                "SHA512: can't update because hash was finished."
              );
            var n = 0;
            if (((this._bytesHashed += r), this._bufferLength > 0)) {
              for (; this._bufferLength < t.BLOCK_SIZE && r > 0; )
                (this._buffer[this._bufferLength++] = e[n++]), r--;
              this._bufferLength === this.blockSize &&
                (a(
                  this._tempHi,
                  this._tempLo,
                  this._stateHi,
                  this._stateLo,
                  this._buffer,
                  0,
                  this.blockSize
                ),
                (this._bufferLength = 0));
            }
            for (
              r >= this.blockSize &&
              ((n = a(
                this._tempHi,
                this._tempLo,
                this._stateHi,
                this._stateLo,
                e,
                n,
                r
              )),
              (r %= this.blockSize));
              r > 0;

            )
              (this._buffer[this._bufferLength++] = e[n++]), r--;
            return this;
          }),
          (e.prototype.finish = function (e) {
            if (!this._finished) {
              var t = this._bytesHashed,
                r = this._bufferLength,
                i = (t / 536870912) | 0,
                s = t << 3,
                o = t % 128 < 112 ? 128 : 256;
              this._buffer[r] = 128;
              for (var c = r + 1; c < o - 8; c++) this._buffer[c] = 0;
              n.writeUint32BE(i, this._buffer, o - 8),
                n.writeUint32BE(s, this._buffer, o - 4),
                a(
                  this._tempHi,
                  this._tempLo,
                  this._stateHi,
                  this._stateLo,
                  this._buffer,
                  0,
                  o
                ),
                (this._finished = !0);
            }
            for (c = 0; c < this.digestLength / 8; c++)
              n.writeUint32BE(this._stateHi[c], e, 8 * c),
                n.writeUint32BE(this._stateLo[c], e, 8 * c + 4);
            return this;
          }),
          (e.prototype.digest = function () {
            var e = new Uint8Array(this.digestLength);
            return this.finish(e), e;
          }),
          (e.prototype.saveState = function () {
            if (this._finished)
              throw new Error("SHA256: cannot save finished state");
            return {
              stateHi: new Int32Array(this._stateHi),
              stateLo: new Int32Array(this._stateLo),
              buffer:
                this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
              bufferLength: this._bufferLength,
              bytesHashed: this._bytesHashed,
            };
          }),
          (e.prototype.restoreState = function (e) {
            return (
              this._stateHi.set(e.stateHi),
              this._stateLo.set(e.stateLo),
              (this._bufferLength = e.bufferLength),
              e.buffer && this._buffer.set(e.buffer),
              (this._bytesHashed = e.bytesHashed),
              (this._finished = !1),
              this
            );
          }),
          (e.prototype.cleanSavedState = function (e) {
            i.wipe(e.stateHi),
              i.wipe(e.stateLo),
              e.buffer && i.wipe(e.buffer),
              (e.bufferLength = 0),
              (e.bytesHashed = 0);
          }),
          e
        );
      })();
      t.SHA512 = s;
      var o = new Int32Array([
        1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
        3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
        2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
        310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
        1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
        3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
        264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
        1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
        2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
        3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
        113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
        773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
        1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
        2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
        3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
        3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
        430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
        883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
        1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
        2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
        2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
        3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
        3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
        174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
        685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
        1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
        1607167915, 987167468, 1816402316, 1246189591,
      ]);
      function a(e, t, r, i, s, a, c) {
        for (
          var u,
            h,
            l,
            f,
            p,
            d,
            g,
            y,
            v = r[0],
            m = r[1],
            w = r[2],
            b = r[3],
            _ = r[4],
            E = r[5],
            S = r[6],
            I = r[7],
            P = i[0],
            O = i[1],
            A = i[2],
            x = i[3],
            R = i[4],
            N = i[5],
            T = i[6],
            C = i[7];
          c >= 128;

        ) {
          for (var j = 0; j < 16; j++) {
            var U = 8 * j + a;
            (e[j] = n.readUint32BE(s, U)), (t[j] = n.readUint32BE(s, U + 4));
          }
          for (j = 0; j < 80; j++) {
            var L,
              M,
              D = v,
              k = m,
              q = w,
              $ = b,
              z = _,
              H = E,
              B = S,
              K = P,
              V = O,
              F = A,
              W = x,
              G = R,
              Y = N,
              J = T;
            if (
              ((p = 65535 & (h = C)),
              (d = h >>> 16),
              (g = 65535 & (u = I)),
              (y = u >>> 16),
              (p +=
                65535 &
                (h =
                  ((R >>> 14) | (_ << 18)) ^
                  ((R >>> 18) | (_ << 14)) ^
                  ((_ >>> 9) | (R << 23)))),
              (d += h >>> 16),
              (g +=
                65535 &
                (u =
                  ((_ >>> 14) | (R << 18)) ^
                  ((_ >>> 18) | (R << 14)) ^
                  ((R >>> 9) | (_ << 23)))),
              (y += u >>> 16),
              (p += 65535 & (h = (R & N) ^ (~R & T))),
              (d += h >>> 16),
              (g += 65535 & (u = (_ & E) ^ (~_ & S))),
              (y += u >>> 16),
              (u = o[2 * j]),
              (p += 65535 & (h = o[2 * j + 1])),
              (d += h >>> 16),
              (g += 65535 & u),
              (y += u >>> 16),
              (u = e[j % 16]),
              (d += (h = t[j % 16]) >>> 16),
              (g += 65535 & u),
              (y += u >>> 16),
              (g += (d += (p += 65535 & h) >>> 16) >>> 16),
              (p = 65535 & (h = f = (65535 & p) | (d << 16))),
              (d = h >>> 16),
              (g = 65535 & (u = l = (65535 & g) | ((y += g >>> 16) << 16))),
              (y = u >>> 16),
              (p +=
                65535 &
                (h =
                  ((P >>> 28) | (v << 4)) ^
                  ((v >>> 2) | (P << 30)) ^
                  ((v >>> 7) | (P << 25)))),
              (d += h >>> 16),
              (g +=
                65535 &
                (u =
                  ((v >>> 28) | (P << 4)) ^
                  ((P >>> 2) | (v << 30)) ^
                  ((P >>> 7) | (v << 25)))),
              (y += u >>> 16),
              (d += (h = (P & O) ^ (P & A) ^ (O & A)) >>> 16),
              (g += 65535 & (u = (v & m) ^ (v & w) ^ (m & w))),
              (y += u >>> 16),
              (L =
                (65535 & (g += (d += (p += 65535 & h) >>> 16) >>> 16)) |
                ((y += g >>> 16) << 16)),
              (M = (65535 & p) | (d << 16)),
              (p = 65535 & (h = W)),
              (d = h >>> 16),
              (g = 65535 & (u = $)),
              (y = u >>> 16),
              (d += (h = f) >>> 16),
              (g += 65535 & (u = l)),
              (y += u >>> 16),
              (m = D),
              (w = k),
              (b = q),
              (_ = $ =
                (65535 & (g += (d += (p += 65535 & h) >>> 16) >>> 16)) |
                ((y += g >>> 16) << 16)),
              (E = z),
              (S = H),
              (I = B),
              (v = L),
              (O = K),
              (A = V),
              (x = F),
              (R = W = (65535 & p) | (d << 16)),
              (N = G),
              (T = Y),
              (C = J),
              (P = M),
              j % 16 === 15)
            )
              for (U = 0; U < 16; U++)
                (u = e[U]),
                  (p = 65535 & (h = t[U])),
                  (d = h >>> 16),
                  (g = 65535 & u),
                  (y = u >>> 16),
                  (u = e[(U + 9) % 16]),
                  (p += 65535 & (h = t[(U + 9) % 16])),
                  (d += h >>> 16),
                  (g += 65535 & u),
                  (y += u >>> 16),
                  (l = e[(U + 1) % 16]),
                  (p +=
                    65535 &
                    (h =
                      (((f = t[(U + 1) % 16]) >>> 1) | (l << 31)) ^
                      ((f >>> 8) | (l << 24)) ^
                      ((f >>> 7) | (l << 25)))),
                  (d += h >>> 16),
                  (g +=
                    65535 &
                    (u =
                      ((l >>> 1) | (f << 31)) ^
                      ((l >>> 8) | (f << 24)) ^
                      (l >>> 7))),
                  (y += u >>> 16),
                  (l = e[(U + 14) % 16]),
                  (d +=
                    (h =
                      (((f = t[(U + 14) % 16]) >>> 19) | (l << 13)) ^
                      ((l >>> 29) | (f << 3)) ^
                      ((f >>> 6) | (l << 26))) >>> 16),
                  (g +=
                    65535 &
                    (u =
                      ((l >>> 19) | (f << 13)) ^
                      ((f >>> 29) | (l << 3)) ^
                      (l >>> 6))),
                  (y += u >>> 16),
                  (y += (g += (d += (p += 65535 & h) >>> 16) >>> 16) >>> 16),
                  (e[U] = (65535 & g) | (y << 16)),
                  (t[U] = (65535 & p) | (d << 16));
          }
          (p = 65535 & (h = P)),
            (d = h >>> 16),
            (g = 65535 & (u = v)),
            (y = u >>> 16),
            (u = r[0]),
            (d += (h = i[0]) >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (y += (g += (d += (p += 65535 & h) >>> 16) >>> 16) >>> 16),
            (r[0] = v = (65535 & g) | (y << 16)),
            (i[0] = P = (65535 & p) | (d << 16)),
            (p = 65535 & (h = O)),
            (d = h >>> 16),
            (g = 65535 & (u = m)),
            (y = u >>> 16),
            (u = r[1]),
            (d += (h = i[1]) >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (y += (g += (d += (p += 65535 & h) >>> 16) >>> 16) >>> 16),
            (r[1] = m = (65535 & g) | (y << 16)),
            (i[1] = O = (65535 & p) | (d << 16)),
            (p = 65535 & (h = A)),
            (d = h >>> 16),
            (g = 65535 & (u = w)),
            (y = u >>> 16),
            (u = r[2]),
            (d += (h = i[2]) >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (y += (g += (d += (p += 65535 & h) >>> 16) >>> 16) >>> 16),
            (r[2] = w = (65535 & g) | (y << 16)),
            (i[2] = A = (65535 & p) | (d << 16)),
            (p = 65535 & (h = x)),
            (d = h >>> 16),
            (g = 65535 & (u = b)),
            (y = u >>> 16),
            (u = r[3]),
            (d += (h = i[3]) >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (y += (g += (d += (p += 65535 & h) >>> 16) >>> 16) >>> 16),
            (r[3] = b = (65535 & g) | (y << 16)),
            (i[3] = x = (65535 & p) | (d << 16)),
            (p = 65535 & (h = R)),
            (d = h >>> 16),
            (g = 65535 & (u = _)),
            (y = u >>> 16),
            (u = r[4]),
            (d += (h = i[4]) >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (y += (g += (d += (p += 65535 & h) >>> 16) >>> 16) >>> 16),
            (r[4] = _ = (65535 & g) | (y << 16)),
            (i[4] = R = (65535 & p) | (d << 16)),
            (p = 65535 & (h = N)),
            (d = h >>> 16),
            (g = 65535 & (u = E)),
            (y = u >>> 16),
            (u = r[5]),
            (d += (h = i[5]) >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (y += (g += (d += (p += 65535 & h) >>> 16) >>> 16) >>> 16),
            (r[5] = E = (65535 & g) | (y << 16)),
            (i[5] = N = (65535 & p) | (d << 16)),
            (p = 65535 & (h = T)),
            (d = h >>> 16),
            (g = 65535 & (u = S)),
            (y = u >>> 16),
            (u = r[6]),
            (d += (h = i[6]) >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (y += (g += (d += (p += 65535 & h) >>> 16) >>> 16) >>> 16),
            (r[6] = S = (65535 & g) | (y << 16)),
            (i[6] = T = (65535 & p) | (d << 16)),
            (p = 65535 & (h = C)),
            (d = h >>> 16),
            (g = 65535 & (u = I)),
            (y = u >>> 16),
            (u = r[7]),
            (d += (h = i[7]) >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (y += (g += (d += (p += 65535 & h) >>> 16) >>> 16) >>> 16),
            (r[7] = I = (65535 & g) | (y << 16)),
            (i[7] = C = (65535 & p) | (d << 16)),
            (a += 128),
            (c -= 128);
        }
        return a;
      }
      t.hash = function (e) {
        var t = new s();
        t.update(e);
        var r = t.digest();
        return t.clean(), r;
      };
    },
    56537: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.wipe = function (e) {
          for (var t = 0; t < e.length; t++) e[t] = 0;
          return e;
        });
    },
    87887: (e, t, r) => {
      "use strict";
      t.Tc = t.TZ = t.wE = t.Xx = void 0;
      const n = r(95473),
        i = r(56537);
      function s(e) {
        const t = new Float64Array(16);
        if (e) for (let r = 0; r < e.length; r++) t[r] = e[r];
        return t;
      }
      (t.Xx = 32), (t.wE = 32);
      const o = new Uint8Array(32);
      o[0] = 9;
      const a = s([56129, 1]);
      function c(e) {
        let t = 1;
        for (let r = 0; r < 16; r++) {
          let n = e[r] + t + 65535;
          (t = Math.floor(n / 65536)), (e[r] = n - 65536 * t);
        }
        e[0] += t - 1 + 37 * (t - 1);
      }
      function u(e, t, r) {
        const n = ~(r - 1);
        for (let i = 0; i < 16; i++) {
          const r = n & (e[i] ^ t[i]);
          (e[i] ^= r), (t[i] ^= r);
        }
      }
      function h(e, t, r) {
        for (let n = 0; n < 16; n++) e[n] = t[n] + r[n];
      }
      function l(e, t, r) {
        for (let n = 0; n < 16; n++) e[n] = t[n] - r[n];
      }
      function f(e, t, r) {
        let n,
          i,
          s = 0,
          o = 0,
          a = 0,
          c = 0,
          u = 0,
          h = 0,
          l = 0,
          f = 0,
          p = 0,
          d = 0,
          g = 0,
          y = 0,
          v = 0,
          m = 0,
          w = 0,
          b = 0,
          _ = 0,
          E = 0,
          S = 0,
          I = 0,
          P = 0,
          O = 0,
          A = 0,
          x = 0,
          R = 0,
          N = 0,
          T = 0,
          C = 0,
          j = 0,
          U = 0,
          L = 0,
          M = r[0],
          D = r[1],
          k = r[2],
          q = r[3],
          $ = r[4],
          z = r[5],
          H = r[6],
          B = r[7],
          K = r[8],
          V = r[9],
          F = r[10],
          W = r[11],
          G = r[12],
          Y = r[13],
          J = r[14],
          Q = r[15];
        (n = t[0]),
          (s += n * M),
          (o += n * D),
          (a += n * k),
          (c += n * q),
          (u += n * $),
          (h += n * z),
          (l += n * H),
          (f += n * B),
          (p += n * K),
          (d += n * V),
          (g += n * F),
          (y += n * W),
          (v += n * G),
          (m += n * Y),
          (w += n * J),
          (b += n * Q),
          (n = t[1]),
          (o += n * M),
          (a += n * D),
          (c += n * k),
          (u += n * q),
          (h += n * $),
          (l += n * z),
          (f += n * H),
          (p += n * B),
          (d += n * K),
          (g += n * V),
          (y += n * F),
          (v += n * W),
          (m += n * G),
          (w += n * Y),
          (b += n * J),
          (_ += n * Q),
          (n = t[2]),
          (a += n * M),
          (c += n * D),
          (u += n * k),
          (h += n * q),
          (l += n * $),
          (f += n * z),
          (p += n * H),
          (d += n * B),
          (g += n * K),
          (y += n * V),
          (v += n * F),
          (m += n * W),
          (w += n * G),
          (b += n * Y),
          (_ += n * J),
          (E += n * Q),
          (n = t[3]),
          (c += n * M),
          (u += n * D),
          (h += n * k),
          (l += n * q),
          (f += n * $),
          (p += n * z),
          (d += n * H),
          (g += n * B),
          (y += n * K),
          (v += n * V),
          (m += n * F),
          (w += n * W),
          (b += n * G),
          (_ += n * Y),
          (E += n * J),
          (S += n * Q),
          (n = t[4]),
          (u += n * M),
          (h += n * D),
          (l += n * k),
          (f += n * q),
          (p += n * $),
          (d += n * z),
          (g += n * H),
          (y += n * B),
          (v += n * K),
          (m += n * V),
          (w += n * F),
          (b += n * W),
          (_ += n * G),
          (E += n * Y),
          (S += n * J),
          (I += n * Q),
          (n = t[5]),
          (h += n * M),
          (l += n * D),
          (f += n * k),
          (p += n * q),
          (d += n * $),
          (g += n * z),
          (y += n * H),
          (v += n * B),
          (m += n * K),
          (w += n * V),
          (b += n * F),
          (_ += n * W),
          (E += n * G),
          (S += n * Y),
          (I += n * J),
          (P += n * Q),
          (n = t[6]),
          (l += n * M),
          (f += n * D),
          (p += n * k),
          (d += n * q),
          (g += n * $),
          (y += n * z),
          (v += n * H),
          (m += n * B),
          (w += n * K),
          (b += n * V),
          (_ += n * F),
          (E += n * W),
          (S += n * G),
          (I += n * Y),
          (P += n * J),
          (O += n * Q),
          (n = t[7]),
          (f += n * M),
          (p += n * D),
          (d += n * k),
          (g += n * q),
          (y += n * $),
          (v += n * z),
          (m += n * H),
          (w += n * B),
          (b += n * K),
          (_ += n * V),
          (E += n * F),
          (S += n * W),
          (I += n * G),
          (P += n * Y),
          (O += n * J),
          (A += n * Q),
          (n = t[8]),
          (p += n * M),
          (d += n * D),
          (g += n * k),
          (y += n * q),
          (v += n * $),
          (m += n * z),
          (w += n * H),
          (b += n * B),
          (_ += n * K),
          (E += n * V),
          (S += n * F),
          (I += n * W),
          (P += n * G),
          (O += n * Y),
          (A += n * J),
          (x += n * Q),
          (n = t[9]),
          (d += n * M),
          (g += n * D),
          (y += n * k),
          (v += n * q),
          (m += n * $),
          (w += n * z),
          (b += n * H),
          (_ += n * B),
          (E += n * K),
          (S += n * V),
          (I += n * F),
          (P += n * W),
          (O += n * G),
          (A += n * Y),
          (x += n * J),
          (R += n * Q),
          (n = t[10]),
          (g += n * M),
          (y += n * D),
          (v += n * k),
          (m += n * q),
          (w += n * $),
          (b += n * z),
          (_ += n * H),
          (E += n * B),
          (S += n * K),
          (I += n * V),
          (P += n * F),
          (O += n * W),
          (A += n * G),
          (x += n * Y),
          (R += n * J),
          (N += n * Q),
          (n = t[11]),
          (y += n * M),
          (v += n * D),
          (m += n * k),
          (w += n * q),
          (b += n * $),
          (_ += n * z),
          (E += n * H),
          (S += n * B),
          (I += n * K),
          (P += n * V),
          (O += n * F),
          (A += n * W),
          (x += n * G),
          (R += n * Y),
          (N += n * J),
          (T += n * Q),
          (n = t[12]),
          (v += n * M),
          (m += n * D),
          (w += n * k),
          (b += n * q),
          (_ += n * $),
          (E += n * z),
          (S += n * H),
          (I += n * B),
          (P += n * K),
          (O += n * V),
          (A += n * F),
          (x += n * W),
          (R += n * G),
          (N += n * Y),
          (T += n * J),
          (C += n * Q),
          (n = t[13]),
          (m += n * M),
          (w += n * D),
          (b += n * k),
          (_ += n * q),
          (E += n * $),
          (S += n * z),
          (I += n * H),
          (P += n * B),
          (O += n * K),
          (A += n * V),
          (x += n * F),
          (R += n * W),
          (N += n * G),
          (T += n * Y),
          (C += n * J),
          (j += n * Q),
          (n = t[14]),
          (w += n * M),
          (b += n * D),
          (_ += n * k),
          (E += n * q),
          (S += n * $),
          (I += n * z),
          (P += n * H),
          (O += n * B),
          (A += n * K),
          (x += n * V),
          (R += n * F),
          (N += n * W),
          (T += n * G),
          (C += n * Y),
          (j += n * J),
          (U += n * Q),
          (n = t[15]),
          (b += n * M),
          (_ += n * D),
          (E += n * k),
          (S += n * q),
          (I += n * $),
          (P += n * z),
          (O += n * H),
          (A += n * B),
          (x += n * K),
          (R += n * V),
          (N += n * F),
          (T += n * W),
          (C += n * G),
          (j += n * Y),
          (U += n * J),
          (L += n * Q),
          (s += 38 * _),
          (o += 38 * E),
          (a += 38 * S),
          (c += 38 * I),
          (u += 38 * P),
          (h += 38 * O),
          (l += 38 * A),
          (f += 38 * x),
          (p += 38 * R),
          (d += 38 * N),
          (g += 38 * T),
          (y += 38 * C),
          (v += 38 * j),
          (m += 38 * U),
          (w += 38 * L),
          (i = 1),
          (n = s + i + 65535),
          (i = Math.floor(n / 65536)),
          (s = n - 65536 * i),
          (n = o + i + 65535),
          (i = Math.floor(n / 65536)),
          (o = n - 65536 * i),
          (n = a + i + 65535),
          (i = Math.floor(n / 65536)),
          (a = n - 65536 * i),
          (n = c + i + 65535),
          (i = Math.floor(n / 65536)),
          (c = n - 65536 * i),
          (n = u + i + 65535),
          (i = Math.floor(n / 65536)),
          (u = n - 65536 * i),
          (n = h + i + 65535),
          (i = Math.floor(n / 65536)),
          (h = n - 65536 * i),
          (n = l + i + 65535),
          (i = Math.floor(n / 65536)),
          (l = n - 65536 * i),
          (n = f + i + 65535),
          (i = Math.floor(n / 65536)),
          (f = n - 65536 * i),
          (n = p + i + 65535),
          (i = Math.floor(n / 65536)),
          (p = n - 65536 * i),
          (n = d + i + 65535),
          (i = Math.floor(n / 65536)),
          (d = n - 65536 * i),
          (n = g + i + 65535),
          (i = Math.floor(n / 65536)),
          (g = n - 65536 * i),
          (n = y + i + 65535),
          (i = Math.floor(n / 65536)),
          (y = n - 65536 * i),
          (n = v + i + 65535),
          (i = Math.floor(n / 65536)),
          (v = n - 65536 * i),
          (n = m + i + 65535),
          (i = Math.floor(n / 65536)),
          (m = n - 65536 * i),
          (n = w + i + 65535),
          (i = Math.floor(n / 65536)),
          (w = n - 65536 * i),
          (n = b + i + 65535),
          (i = Math.floor(n / 65536)),
          (b = n - 65536 * i),
          (s += i - 1 + 37 * (i - 1)),
          (i = 1),
          (n = s + i + 65535),
          (i = Math.floor(n / 65536)),
          (s = n - 65536 * i),
          (n = o + i + 65535),
          (i = Math.floor(n / 65536)),
          (o = n - 65536 * i),
          (n = a + i + 65535),
          (i = Math.floor(n / 65536)),
          (a = n - 65536 * i),
          (n = c + i + 65535),
          (i = Math.floor(n / 65536)),
          (c = n - 65536 * i),
          (n = u + i + 65535),
          (i = Math.floor(n / 65536)),
          (u = n - 65536 * i),
          (n = h + i + 65535),
          (i = Math.floor(n / 65536)),
          (h = n - 65536 * i),
          (n = l + i + 65535),
          (i = Math.floor(n / 65536)),
          (l = n - 65536 * i),
          (n = f + i + 65535),
          (i = Math.floor(n / 65536)),
          (f = n - 65536 * i),
          (n = p + i + 65535),
          (i = Math.floor(n / 65536)),
          (p = n - 65536 * i),
          (n = d + i + 65535),
          (i = Math.floor(n / 65536)),
          (d = n - 65536 * i),
          (n = g + i + 65535),
          (i = Math.floor(n / 65536)),
          (g = n - 65536 * i),
          (n = y + i + 65535),
          (i = Math.floor(n / 65536)),
          (y = n - 65536 * i),
          (n = v + i + 65535),
          (i = Math.floor(n / 65536)),
          (v = n - 65536 * i),
          (n = m + i + 65535),
          (i = Math.floor(n / 65536)),
          (m = n - 65536 * i),
          (n = w + i + 65535),
          (i = Math.floor(n / 65536)),
          (w = n - 65536 * i),
          (n = b + i + 65535),
          (i = Math.floor(n / 65536)),
          (b = n - 65536 * i),
          (s += i - 1 + 37 * (i - 1)),
          (e[0] = s),
          (e[1] = o),
          (e[2] = a),
          (e[3] = c),
          (e[4] = u),
          (e[5] = h),
          (e[6] = l),
          (e[7] = f),
          (e[8] = p),
          (e[9] = d),
          (e[10] = g),
          (e[11] = y),
          (e[12] = v),
          (e[13] = m),
          (e[14] = w),
          (e[15] = b);
      }
      function p(e, t) {
        f(e, t, t);
      }
      function d(e, t) {
        const r = new Uint8Array(32),
          n = new Float64Array(80),
          i = s(),
          o = s(),
          d = s(),
          g = s(),
          y = s(),
          v = s();
        for (let s = 0; s < 31; s++) r[s] = e[s];
        (r[31] = (127 & e[31]) | 64),
          (r[0] &= 248),
          (function (e, t) {
            for (let r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8);
            e[15] &= 32767;
          })(n, t);
        for (let s = 0; s < 16; s++) o[s] = n[s];
        i[0] = g[0] = 1;
        for (let s = 254; s >= 0; --s) {
          const e = (r[s >>> 3] >>> (7 & s)) & 1;
          u(i, o, e),
            u(d, g, e),
            h(y, i, d),
            l(i, i, d),
            h(d, o, g),
            l(o, o, g),
            p(g, y),
            p(v, i),
            f(i, d, i),
            f(d, o, y),
            h(y, i, d),
            l(i, i, d),
            p(o, i),
            l(d, g, v),
            f(i, d, a),
            h(i, i, g),
            f(d, d, i),
            f(i, g, v),
            f(g, o, n),
            p(o, y),
            u(i, o, e),
            u(d, g, e);
        }
        for (let s = 0; s < 16; s++)
          (n[s + 16] = i[s]),
            (n[s + 32] = d[s]),
            (n[s + 48] = o[s]),
            (n[s + 64] = g[s]);
        const m = n.subarray(32),
          w = n.subarray(16);
        !(function (e, t) {
          const r = s();
          for (let n = 0; n < 16; n++) r[n] = t[n];
          for (let n = 253; n >= 0; n--)
            p(r, r), 2 !== n && 4 !== n && f(r, r, t);
          for (let n = 0; n < 16; n++) e[n] = r[n];
        })(m, m),
          f(w, w, m);
        const b = new Uint8Array(32);
        return (
          (function (e, t) {
            const r = s(),
              n = s();
            for (let i = 0; i < 16; i++) n[i] = t[i];
            c(n), c(n), c(n);
            for (let i = 0; i < 2; i++) {
              r[0] = n[0] - 65517;
              for (let t = 1; t < 15; t++)
                (r[t] = n[t] - 65535 - ((r[t - 1] >> 16) & 1)),
                  (r[t - 1] &= 65535);
              r[15] = n[15] - 32767 - ((r[14] >> 16) & 1);
              const e = (r[15] >> 16) & 1;
              (r[14] &= 65535), u(n, r, 1 - e);
            }
            for (let i = 0; i < 16; i++)
              (e[2 * i] = 255 & n[i]), (e[2 * i + 1] = n[i] >> 8);
          })(b, w),
          b
        );
      }
      function g(e) {
        return d(e, o);
      }
      function y(e) {
        if (e.length !== t.wE)
          throw new Error(`x25519: seed must be ${t.wE} bytes`);
        const r = new Uint8Array(e);
        return { publicKey: g(r), secretKey: r };
      }
      (t.TZ = function (e) {
        const t = (0, n.randomBytes)(32, e),
          r = y(t);
        return (0, i.wipe)(t), r;
      }),
        (t.Tc = function (e, r) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (e.length !== t.Xx)
            throw new Error("X25519: incorrect secret key length");
          if (r.length !== t.Xx)
            throw new Error("X25519: incorrect public key length");
          const i = d(e, r);
          if (n) {
            let e = 0;
            for (let t = 0; t < i.length; t++) e |= i[t];
            if (0 === e) throw new Error("X25519: invalid shared key");
          }
          return i;
        });
    },
    10364: (e, t, r) => {
      "use strict";
      function n() {
        return (
          (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) ||
          (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) ||
          {}
        );
      }
      function i() {
        const e = n();
        return e.subtle || e.webkitSubtle;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isBrowserCryptoAvailable =
          t.getSubtleCrypto =
          t.getBrowerCrypto =
            void 0),
        (t.getBrowerCrypto = n),
        (t.getSubtleCrypto = i),
        (t.isBrowserCryptoAvailable = function () {
          return !!n() && !!i();
        });
    },
    96454: (e, t) => {
      "use strict";
      function r() {
        return (
          "undefined" === typeof document &&
          "undefined" !== typeof navigator &&
          "ReactNative" === navigator.product
        );
      }
      function n() {
        return (
          "undefined" !== typeof process &&
          "undefined" !== typeof process.versions &&
          "undefined" !== typeof process.versions.node
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isBrowser = t.isNode = t.isReactNative = void 0),
        (t.isReactNative = r),
        (t.isNode = n),
        (t.isBrowser = function () {
          return !r() && !n();
        });
    },
    8129: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(46613);
      n.__exportStar(r(10364), t), n.__exportStar(r(96454), t);
    },
    46613: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          __assign: () => s,
          __asyncDelegator: () => b,
          __asyncGenerator: () => w,
          __asyncValues: () => _,
          __await: () => m,
          __awaiter: () => h,
          __classPrivateFieldGet: () => P,
          __classPrivateFieldSet: () => O,
          __createBinding: () => f,
          __decorate: () => a,
          __exportStar: () => p,
          __extends: () => i,
          __generator: () => l,
          __importDefault: () => I,
          __importStar: () => S,
          __makeTemplateObject: () => E,
          __metadata: () => u,
          __param: () => c,
          __read: () => g,
          __rest: () => o,
          __spread: () => y,
          __spreadArrays: () => v,
          __values: () => d,
        });
      var n = function (e, t) {
        return (
          (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            }),
          n(e, t)
        );
      };
      function i(e, t) {
        function r() {
          this.constructor = e;
        }
        n(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var s = function () {
        return (
          (s =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          s.apply(this, arguments)
        );
      };
      function o(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (r[n] = e[n]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            t.indexOf(n[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
              (r[n[i]] = e[n[i]]);
        }
        return r;
      }
      function a(e, t, r, n) {
        var i,
          s = arguments.length,
          o =
            s < 3
              ? t
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(t, r))
              : n;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          o = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (i = e[a]) &&
              (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
        return s > 3 && o && Object.defineProperty(t, r, o), o;
      }
      function c(e, t) {
        return function (r, n) {
          t(r, n, e);
        };
      }
      function u(e, t) {
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.metadata
        )
          return Reflect.metadata(e, t);
      }
      function h(e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function o(e) {
            try {
              c(n.next(e));
            } catch (t) {
              s(t);
            }
          }
          function a(e) {
            try {
              c(n.throw(e));
            } catch (t) {
              s(t);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(o, a);
          }
          c((n = n.apply(e, t || [])).next());
        });
      }
      function l(e, t) {
        var r,
          n,
          i,
          s,
          o = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (s = { next: a(0), throw: a(1), return: a(2) }),
          "function" === typeof Symbol &&
            (s[Symbol.iterator] = function () {
              return this;
            }),
          s
        );
        function a(s) {
          return function (a) {
            return (function (s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; o; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (i =
                        2 & s[0]
                          ? n.return
                          : s[0]
                          ? n.throw || ((i = n.return) && i.call(n), 0)
                          : n.next) &&
                      !(i = i.call(n, s[1])).done)
                  )
                    return i;
                  switch (((n = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                    case 0:
                    case 1:
                      i = s;
                      break;
                    case 4:
                      return o.label++, { value: s[1], done: !1 };
                    case 5:
                      o.label++, (n = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                        (6 === s[0] || 2 === s[0])
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                        o.label = s[1];
                        break;
                      }
                      if (6 === s[0] && o.label < i[1]) {
                        (o.label = i[1]), (i = s);
                        break;
                      }
                      if (i && o.label < i[2]) {
                        (o.label = i[2]), o.ops.push(s);
                        break;
                      }
                      i[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  s = t.call(e, o);
                } catch (a) {
                  (s = [6, a]), (n = 0);
                } finally {
                  r = i = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, a]);
          };
        }
      }
      function f(e, t, r, n) {
        void 0 === n && (n = r), (e[n] = t[r]);
      }
      function p(e, t) {
        for (var r in e)
          "default" === r || t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      function d(e) {
        var t = "function" === typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
        if (r) return r.call(e);
        if (e && "number" === typeof e.length)
          return {
            next: function () {
              return (
                e && n >= e.length && (e = void 0),
                { value: e && e[n++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function g(e, t) {
        var r = "function" === typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          i,
          s = r.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = s.next()).done; )
            o.push(n.value);
        } catch (a) {
          i = { error: a };
        } finally {
          try {
            n && !n.done && (r = s.return) && r.call(s);
          } finally {
            if (i) throw i.error;
          }
        }
        return o;
      }
      function y() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(g(arguments[t]));
        return e;
      }
      function v() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        var n = Array(e),
          i = 0;
        for (t = 0; t < r; t++)
          for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++)
            n[i] = s[o];
        return n;
      }
      function m(e) {
        return this instanceof m ? ((this.v = e), this) : new m(e);
      }
      function w(e, t, r) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var n,
          i = r.apply(e, t || []),
          s = [];
        return (
          (n = {}),
          o("next"),
          o("throw"),
          o("return"),
          (n[Symbol.asyncIterator] = function () {
            return this;
          }),
          n
        );
        function o(e) {
          i[e] &&
            (n[e] = function (t) {
              return new Promise(function (r, n) {
                s.push([e, t, r, n]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            (r = i[e](t)).value instanceof m
              ? Promise.resolve(r.value.v).then(c, u)
              : h(s[0][2], r);
          } catch (n) {
            h(s[0][3], n);
          }
          var r;
        }
        function c(e) {
          a("next", e);
        }
        function u(e) {
          a("throw", e);
        }
        function h(e, t) {
          e(t), s.shift(), s.length && a(s[0][0], s[0][1]);
        }
      }
      function b(e) {
        var t, r;
        return (
          (t = {}),
          n("next"),
          n("throw", function (e) {
            throw e;
          }),
          n("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function n(n, i) {
          t[n] = e[n]
            ? function (t) {
                return (r = !r)
                  ? { value: m(e[n](t)), done: "return" === n }
                  : i
                  ? i(t)
                  : t;
              }
            : i;
        }
      }
      function _(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = d(e)),
            (t = {}),
            n("next"),
            n("throw"),
            n("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function n(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (n, i) {
                (function (e, t, r, n) {
                  Promise.resolve(n).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(n, i, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function E(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      function S(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function I(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function P(e, t) {
        if (!t.has(e))
          throw new TypeError("attempted to get private field on non-instance");
        return t.get(e);
      }
      function O(e, t, r) {
        if (!t.has(e))
          throw new TypeError("attempted to set private field on non-instance");
        return t.set(e, r), r;
      }
    },
    9049: (e, t, r) => {
      "use strict";
      r.d(t, { EthereumProvider: () => eh });
      var n = {};
      r.r(n), r.d(n, { identity: () => k });
      var i = {};
      r.r(i), r.d(i, { base2: () => q });
      var s = {};
      r.r(s), r.d(s, { base8: () => $ });
      var o = {};
      r.r(o), r.d(o, { base10: () => z });
      var a = {};
      r.r(a), r.d(a, { base16: () => H, base16upper: () => B });
      var c = {};
      r.r(c),
        r.d(c, {
          base32: () => K,
          base32hex: () => G,
          base32hexpad: () => J,
          base32hexpadupper: () => Q,
          base32hexupper: () => Y,
          base32pad: () => F,
          base32padupper: () => W,
          base32upper: () => V,
          base32z: () => X,
        });
      var u = {};
      r.r(u), r.d(u, { base36: () => Z, base36upper: () => ee });
      var h = {};
      r.r(h), r.d(h, { base58btc: () => te, base58flickr: () => re });
      var l = {};
      r.r(l),
        r.d(l, {
          base64: () => ne,
          base64pad: () => ie,
          base64url: () => se,
          base64urlpad: () => oe,
        });
      var f = {};
      r.r(f), r.d(f, { base256emoji: () => he });
      var p = {};
      r.r(p), r.d(p, { sha256: () => Le, sha512: () => Me });
      var d = {};
      r.r(d), r.d(d, { identity: () => ke });
      var g = {};
      r.r(g),
        r.d(g, {
          code: () => $e,
          decode: () => He,
          encode: () => ze,
          name: () => qe,
        });
      var y = {};
      r.r(y),
        r.d(y, {
          code: () => Fe,
          decode: () => Ge,
          encode: () => We,
          name: () => Ve,
        });
      var v = r(27284),
        m = r.n(v),
        w = r(58953),
        b = r(10269),
        _ = r(95473),
        E = r(20153),
        S = r(87887);
      function I(e) {
        return null != globalThis.Buffer
          ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
          : e;
      }
      function P() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return null != globalThis.Buffer &&
          null != globalThis.Buffer.allocUnsafe
          ? I(globalThis.Buffer.allocUnsafe(e))
          : new Uint8Array(e);
      }
      function O(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        const r = P(t);
        let n = 0;
        for (const i of e) r.set(i, n), (n += i.length);
        return I(r);
      }
      var A = function (e, t) {
        if (e.length >= 255) throw new TypeError("Alphabet too long");
        for (var r = new Uint8Array(256), n = 0; n < r.length; n++) r[n] = 255;
        for (var i = 0; i < e.length; i++) {
          var s = e.charAt(i),
            o = s.charCodeAt(0);
          if (255 !== r[o]) throw new TypeError(s + " is ambiguous");
          r[o] = i;
        }
        var a = e.length,
          c = e.charAt(0),
          u = Math.log(a) / Math.log(256),
          h = Math.log(256) / Math.log(a);
        function l(e) {
          if ("string" !== typeof e) throw new TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (" " !== e[t]) {
            for (var n = 0, i = 0; e[t] === c; ) n++, t++;
            for (
              var s = ((e.length - t) * u + 1) >>> 0, o = new Uint8Array(s);
              e[t];

            ) {
              var h = r[e.charCodeAt(t)];
              if (255 === h) return;
              for (
                var l = 0, f = s - 1;
                (0 !== h || l < i) && -1 !== f;
                f--, l++
              )
                (h += (a * o[f]) >>> 0),
                  (o[f] = h % 256 >>> 0),
                  (h = (h / 256) >>> 0);
              if (0 !== h) throw new Error("Non-zero carry");
              (i = l), t++;
            }
            if (" " !== e[t]) {
              for (var p = s - i; p !== s && 0 === o[p]; ) p++;
              for (var d = new Uint8Array(n + (s - p)), g = n; p !== s; )
                d[g++] = o[p++];
              return d;
            }
          }
        }
        return {
          encode: function (t) {
            if (
              (t instanceof Uint8Array ||
                (ArrayBuffer.isView(t)
                  ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                  : Array.isArray(t) && (t = Uint8Array.from(t))),
              !(t instanceof Uint8Array))
            )
              throw new TypeError("Expected Uint8Array");
            if (0 === t.length) return "";
            for (var r = 0, n = 0, i = 0, s = t.length; i !== s && 0 === t[i]; )
              i++, r++;
            for (
              var o = ((s - i) * h + 1) >>> 0, u = new Uint8Array(o);
              i !== s;

            ) {
              for (
                var l = t[i], f = 0, p = o - 1;
                (0 !== l || f < n) && -1 !== p;
                p--, f++
              )
                (l += (256 * u[p]) >>> 0),
                  (u[p] = l % a >>> 0),
                  (l = (l / a) >>> 0);
              if (0 !== l) throw new Error("Non-zero carry");
              (n = f), i++;
            }
            for (var d = o - n; d !== o && 0 === u[d]; ) d++;
            for (var g = c.repeat(r); d < o; ++d) g += e.charAt(u[d]);
            return g;
          },
          decodeUnsafe: l,
          decode: function (e) {
            var r = l(e);
            if (r) return r;
            throw new Error(`Non-${t} character`);
          },
        };
      };
      const x = A,
        R =
          (new Uint8Array(0),
          (e) => {
            if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
              return e;
            if (e instanceof ArrayBuffer) return new Uint8Array(e);
            if (ArrayBuffer.isView(e))
              return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
            throw new Error("Unknown type, must be binary type");
          });
      class N {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
          throw Error("Unknown type, must be binary type");
        }
      }
      class T {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw new Error("Invalid prefix character");
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r);
        }
        decode(e) {
          if ("string" === typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${
                  this.name
                } decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(e) {
          return j(this, e);
        }
      }
      class C {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return j(this, e);
        }
        decode(e) {
          const t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              e
            )}, only inputs prefixed with ${Object.keys(
              this.decoders
            )} are supported`
          );
        }
      }
      const j = (e, t) =>
        new C({
          ...(e.decoders || { [e.prefix]: e }),
          ...(t.decoders || { [t.prefix]: t }),
        });
      class U {
        constructor(e, t, r, n) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = n),
            (this.encoder = new N(e, t, r)),
            (this.decoder = new T(e, t, n));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      const L = (e) => {
          let { name: t, prefix: r, encode: n, decode: i } = e;
          return new U(t, r, n, i);
        },
        M = (e) => {
          let { prefix: t, name: r, alphabet: n } = e;
          const { encode: i, decode: s } = x(n, r);
          return L({ prefix: t, name: r, encode: i, decode: (e) => R(s(e)) });
        },
        D = (e) => {
          let { name: t, prefix: r, bitsPerChar: n, alphabet: i } = e;
          return L({
            prefix: r,
            name: t,
            encode: (e) =>
              ((e, t, r) => {
                const n = "=" === t[t.length - 1],
                  i = (1 << r) - 1;
                let s = "",
                  o = 0,
                  a = 0;
                for (let c = 0; c < e.length; ++c)
                  for (a = (a << 8) | e[c], o += 8; o > r; )
                    (o -= r), (s += t[i & (a >> o)]);
                if ((o && (s += t[i & (a << (r - o))]), n))
                  for (; (s.length * r) & 7; ) s += "=";
                return s;
              })(e, i, n),
            decode: (e) =>
              ((e, t, r, n) => {
                const i = {};
                for (let h = 0; h < t.length; ++h) i[t[h]] = h;
                let s = e.length;
                for (; "=" === e[s - 1]; ) --s;
                const o = new Uint8Array(((s * r) / 8) | 0);
                let a = 0,
                  c = 0,
                  u = 0;
                for (let h = 0; h < s; ++h) {
                  const t = i[e[h]];
                  if (void 0 === t) throw new SyntaxError(`Non-${n} character`);
                  (c = (c << r) | t),
                    (a += r),
                    a >= 8 && ((a -= 8), (o[u++] = 255 & (c >> a)));
                }
                if (a >= r || 255 & (c << (8 - a)))
                  throw new SyntaxError("Unexpected end of data");
                return o;
              })(e, i, n, t),
          });
        },
        k = L({
          prefix: "\0",
          name: "identity",
          encode: (e) => ((e) => new TextDecoder().decode(e))(e),
          decode: (e) => ((e) => new TextEncoder().encode(e))(e),
        }),
        q = D({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 }),
        $ = D({
          prefix: "7",
          name: "base8",
          alphabet: "01234567",
          bitsPerChar: 3,
        }),
        z = M({ prefix: "9", name: "base10", alphabet: "0123456789" }),
        H = D({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        B = D({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        }),
        K = D({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        V = D({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        F = D({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        W = D({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        G = D({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        Y = D({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        J = D({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        Q = D({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        X = D({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        }),
        Z = M({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        ee = M({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        }),
        te = M({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        re = M({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        }),
        ne = D({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        ie = D({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        se = D({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        oe = D({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        }),
        ae = Array.from(
          "\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42"
        ),
        ce = ae.reduce((e, t, r) => ((e[r] = t), e), []),
        ue = ae.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []);
      const he = L({
        prefix: "\ud83d\ude80",
        name: "base256emoji",
        encode: function (e) {
          return e.reduce((e, t) => (e += ce[t]), "");
        },
        decode: function (e) {
          const t = [];
          for (const r of e) {
            const e = ue[r.codePointAt(0)];
            if (void 0 === e)
              throw new Error(`Non-base256emoji character: ${r}`);
            t.push(e);
          }
          return new Uint8Array(t);
        },
      });
      var le = function e(t, r, n) {
          r = r || [];
          var i = (n = n || 0);
          for (; t >= de; ) (r[n++] = (255 & t) | fe), (t /= 128);
          for (; t & pe; ) (r[n++] = (255 & t) | fe), (t >>>= 7);
          return (r[n] = 0 | t), (e.bytes = n - i + 1), r;
        },
        fe = 128,
        pe = -128,
        de = Math.pow(2, 31);
      var ge = function e(t, r) {
          var n,
            i = 0,
            s = 0,
            o = (r = r || 0),
            a = t.length;
          do {
            if (o >= a)
              throw ((e.bytes = 0), new RangeError("Could not decode varint"));
            (n = t[o++]),
              (i += s < 28 ? (n & ve) << s : (n & ve) * Math.pow(2, s)),
              (s += 7);
          } while (n >= ye);
          return (e.bytes = o - r), i;
        },
        ye = 128,
        ve = 127;
      var me = Math.pow(2, 7),
        we = Math.pow(2, 14),
        be = Math.pow(2, 21),
        _e = Math.pow(2, 28),
        Ee = Math.pow(2, 35),
        Se = Math.pow(2, 42),
        Ie = Math.pow(2, 49),
        Pe = Math.pow(2, 56),
        Oe = Math.pow(2, 63);
      const Ae = {
          encode: le,
          decode: ge,
          encodingLength: function (e) {
            return e < me
              ? 1
              : e < we
              ? 2
              : e < be
              ? 3
              : e < _e
              ? 4
              : e < Ee
              ? 5
              : e < Se
              ? 6
              : e < Ie
              ? 7
              : e < Pe
              ? 8
              : e < Oe
              ? 9
              : 10;
          },
        },
        xe = function (e, t) {
          let r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return Ae.encode(e, t, r), t;
        },
        Re = (e) => Ae.encodingLength(e),
        Ne = (e, t) => {
          const r = t.byteLength,
            n = Re(e),
            i = n + Re(r),
            s = new Uint8Array(i + r);
          return xe(e, s, 0), xe(r, s, n), s.set(t, i), new Te(e, r, t, s);
        };
      class Te {
        constructor(e, t, r, n) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = n);
        }
      }
      const Ce = (e) => {
        let { name: t, code: r, encode: n } = e;
        return new je(t, r, n);
      };
      class je {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            const t = this.encode(e);
            return t instanceof Uint8Array
              ? Ne(this.code, t)
              : t.then((e) => Ne(this.code, e));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      const Ue = (e) => async (t) =>
          new Uint8Array(await crypto.subtle.digest(e, t)),
        Le = Ce({ name: "sha2-256", code: 18, encode: Ue("SHA-256") }),
        Me = Ce({ name: "sha2-512", code: 19, encode: Ue("SHA-512") }),
        De = R,
        ke = {
          code: 0,
          name: "identity",
          encode: De,
          digest: (e) => Ne(0, De(e)),
        },
        qe = "raw",
        $e = 85,
        ze = (e) => R(e),
        He = (e) => R(e),
        Be = new TextEncoder(),
        Ke = new TextDecoder(),
        Ve = "json",
        Fe = 512,
        We = (e) => Be.encode(JSON.stringify(e)),
        Ge = (e) => JSON.parse(Ke.decode(e));
      Symbol.toStringTag, Symbol.for("nodejs.util.inspect.custom");
      Symbol.for("@ipld/js-cid/CID");
      const Ye = { ...n, ...i, ...s, ...o, ...a, ...c, ...u, ...h, ...l, ...f };
      function Je(e, t, r, n) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: n },
        };
      }
      const Qe = Je(
          "utf8",
          "u",
          (e) => "u" + new TextDecoder("utf8").decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        Xe = Je(
          "ascii",
          "a",
          (e) => {
            let t = "a";
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            const t = P((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        Ze = {
          utf8: Qe,
          "utf-8": Qe,
          hex: Ye.base16,
          latin1: Xe,
          ascii: Xe,
          binary: Xe,
          ...Ye,
        };
      function et(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "utf8";
        const r = Ze[t];
        if (!r) throw new Error(`Unsupported encoding "${t}"`);
        return ("utf8" !== t && "utf-8" !== t) ||
          null == globalThis.Buffer ||
          null == globalThis.Buffer.from
          ? r.decoder.decode(`${r.prefix}${e}`)
          : I(globalThis.Buffer.from(e, "utf-8"));
      }
      function tt(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "utf8";
        const r = Ze[t];
        if (!r) throw new Error(`Unsupported encoding "${t}"`);
        return ("utf8" !== t && "utf-8" !== t) ||
          null == globalThis.Buffer ||
          null == globalThis.Buffer.from
          ? r.encoder.encode(e).substring(1)
          : globalThis.Buffer.from(
              e.buffer,
              e.byteOffset,
              e.byteLength
            ).toString("utf8");
      }
      var rt = function (e, t, r) {
          if (r || 2 === arguments.length)
            for (var n, i = 0, s = t.length; i < s; i++)
              (!n && i in t) ||
                (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
          return e.concat(n || Array.prototype.slice.call(t));
        },
        nt = function (e, t, r) {
          (this.name = e),
            (this.version = t),
            (this.os = r),
            (this.type = "browser");
        },
        it = function (e) {
          (this.version = e),
            (this.type = "node"),
            (this.name = "node"),
            (this.os = process.platform);
        },
        st = function (e, t, r, n) {
          (this.name = e),
            (this.version = t),
            (this.os = r),
            (this.bot = n),
            (this.type = "bot-device");
        },
        ot = function () {
          (this.type = "bot"),
            (this.bot = !0),
            (this.name = "bot"),
            (this.version = null),
            (this.os = null);
        },
        at = function () {
          (this.type = "react-native"),
            (this.name = "react-native"),
            (this.version = null),
            (this.os = null);
        },
        ct =
          /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
        ut = 3,
        ht = [
          ["aol", /AOLShield\/([0-9\._]+)/],
          ["edge", /Edge\/([0-9\._]+)/],
          ["edge-ios", /EdgiOS\/([0-9\._]+)/],
          ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
          ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
          ["samsung", /SamsungBrowser\/([0-9\.]+)/],
          ["silk", /\bSilk\/([0-9._-]+)\b/],
          ["miui", /MiuiBrowser\/([0-9\.]+)$/],
          ["beaker", /BeakerBrowser\/([0-9\.]+)/],
          ["edge-chromium", /EdgA?\/([0-9\.]+)/],
          [
            "chromium-webview",
            /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
          ],
          ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
          ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
          ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
          ["fxios", /FxiOS\/([0-9\.]+)/],
          ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
          ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
          ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
          ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
          [
            "pie",
            /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
          ],
          ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
          ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
          ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ["ie", /MSIE\s(7\.0)/],
          ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ["android", /Android\s([0-9\.]+)/],
          ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ["safari", /Version\/([0-9\._]+).*Safari/],
          ["facebook", /FB[AS]V\/([0-9\.]+)/],
          ["instagram", /Instagram\s([0-9\.]+)/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
          ["curl", /^curl\/([0-9\.]+)$/],
          [
            "searchbot",
            /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
          ],
        ],
        lt = [
          ["iOS", /iP(hone|od|ad)/],
          ["Android OS", /Android/],
          ["BlackBerry OS", /BlackBerry|BB10/],
          ["Windows Mobile", /IEMobile/],
          ["Amazon OS", /Kindle/],
          ["Windows 3.11", /Win16/],
          ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
          ["Windows 98", /(Windows 98)|(Win98)/],
          ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
          ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
          ["Windows Server 2003", /(Windows NT 5.2)/],
          ["Windows Vista", /(Windows NT 6.0)/],
          ["Windows 7", /(Windows NT 6.1)/],
          ["Windows 8", /(Windows NT 6.2)/],
          ["Windows 8.1", /(Windows NT 6.3)/],
          ["Windows 10", /(Windows NT 10.0)/],
          ["Windows ME", /Windows ME/],
          ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
          ["Open BSD", /OpenBSD/],
          ["Sun OS", /SunOS/],
          ["Chrome OS", /CrOS/],
          ["Linux", /(Linux)|(X11)/],
          ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
          ["QNX", /QNX/],
          ["BeOS", /BeOS/],
          ["OS/2", /OS\/2/],
        ];
      function ft(e) {
        return e
          ? dt(e)
          : "undefined" === typeof document &&
            "undefined" !== typeof navigator &&
            "ReactNative" === navigator.product
          ? new at()
          : "undefined" !== typeof navigator
          ? dt(navigator.userAgent)
          : "undefined" !== typeof process && process.version
          ? new it(process.version.slice(1))
          : null;
      }
      function pt(e) {
        return (
          "" !== e &&
          ht.reduce(function (t, r) {
            var n = r[0],
              i = r[1];
            if (t) return t;
            var s = i.exec(e);
            return !!s && [n, s];
          }, !1)
        );
      }
      function dt(e) {
        var t = pt(e);
        if (!t) return null;
        var r = t[0],
          n = t[1];
        if ("searchbot" === r) return new ot();
        var i = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
        i
          ? i.length < ut &&
            (i = rt(
              rt([], i, !0),
              (function (e) {
                for (var t = [], r = 0; r < e; r++) t.push("0");
                return t;
              })(ut - i.length),
              !0
            ))
          : (i = []);
        var s = i.join("."),
          o = (function (e) {
            for (var t = 0, r = lt.length; t < r; t++) {
              var n = lt[t],
                i = n[0];
              if (n[1].exec(e)) return i;
            }
            return null;
          })(e),
          a = ct.exec(e);
        return a && a[1] ? new st(r, s, o, a[1]) : new nt(r, s, o);
      }
      var gt = r(33901),
        yt = r(20033),
        vt = r(39332),
        mt = r(9370);
      r(71322);
      const wt = {
          waku: {
            publish: "waku_publish",
            batchPublish: "waku_batchPublish",
            subscribe: "waku_subscribe",
            batchSubscribe: "waku_batchSubscribe",
            subscription: "waku_subscription",
            unsubscribe: "waku_unsubscribe",
            batchUnsubscribe: "waku_batchUnsubscribe",
          },
          irn: {
            publish: "irn_publish",
            batchPublish: "irn_batchPublish",
            subscribe: "irn_subscribe",
            batchSubscribe: "irn_batchSubscribe",
            subscription: "irn_subscription",
            unsubscribe: "irn_unsubscribe",
            batchUnsubscribe: "irn_batchUnsubscribe",
          },
          iridium: {
            publish: "iridium_publish",
            batchPublish: "iridium_batchPublish",
            subscribe: "iridium_subscribe",
            batchSubscribe: "iridium_batchSubscribe",
            subscription: "iridium_subscription",
            unsubscribe: "iridium_unsubscribe",
            batchUnsubscribe: "iridium_batchUnsubscribe",
          },
        },
        bt = ":";
      function _t(e) {
        const [t, r] = e.split(bt);
        return { namespace: t, reference: r };
      }
      function Et(e, t) {
        return e.includes(":") ? [e] : t.chains || [];
      }
      const St = "base10",
        It = "base16",
        Pt = "base64pad",
        Ot = "utf8",
        At = 0,
        xt = 1,
        Rt = 0,
        Nt = 1,
        Tt = 12,
        Ct = 32;
      function jt() {
        return tt((0, _.randomBytes)(Ct), It);
      }
      function Ut(e) {
        return tt((0, E.tW)(et(e, Ot)), It);
      }
      function Lt(e) {
        return Number(tt(e, St));
      }
      function Mt(e) {
        const t = (function (e) {
          return et(`${e}`, St);
        })(typeof e.type < "u" ? e.type : At);
        if (Lt(t) === xt && typeof e.senderPublicKey > "u")
          throw new Error("Missing sender public key for type 1 envelope");
        const r =
            typeof e.senderPublicKey < "u" ? et(e.senderPublicKey, It) : void 0,
          n = typeof e.iv < "u" ? et(e.iv, It) : (0, _.randomBytes)(Tt);
        return (function (e) {
          if (Lt(e.type) === xt) {
            if (typeof e.senderPublicKey > "u")
              throw new Error("Missing sender public key for type 1 envelope");
            return tt(O([e.type, e.senderPublicKey, e.iv, e.sealed]), Pt);
          }
          return tt(O([e.type, e.iv, e.sealed]), Pt);
        })({
          type: t,
          sealed: new w.g6(et(e.symKey, It)).seal(n, et(e.message, Ot)),
          iv: n,
          senderPublicKey: r,
        });
      }
      function Dt(e) {
        const t = et(e, Pt),
          r = t.slice(Rt, Nt),
          n = Nt;
        if (Lt(r) === xt) {
          const e = n + Ct,
            i = e + Tt,
            s = t.slice(n, e),
            o = t.slice(e, i);
          return { type: r, sealed: t.slice(i), iv: o, senderPublicKey: s };
        }
        const i = n + Tt,
          s = t.slice(n, i);
        return { type: r, sealed: t.slice(i), iv: s };
      }
      function kt(e) {
        const t = e?.type || At;
        if (t === xt) {
          if (typeof e?.senderPublicKey > "u")
            throw new Error("missing sender public key");
          if (typeof e?.receiverPublicKey > "u")
            throw new Error("missing receiver public key");
        }
        return {
          type: t,
          senderPublicKey: e?.senderPublicKey,
          receiverPublicKey: e?.receiverPublicKey,
        };
      }
      function qt(e) {
        return (
          e.type === xt &&
          "string" == typeof e.senderPublicKey &&
          "string" == typeof e.receiverPublicKey
        );
      }
      var $t = Object.defineProperty,
        zt = Object.getOwnPropertySymbols,
        Ht = Object.prototype.hasOwnProperty,
        Bt = Object.prototype.propertyIsEnumerable,
        Kt = (e, t, r) =>
          t in e
            ? $t(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Vt = (e, t) => {
          for (var r in t || (t = {})) Ht.call(t, r) && Kt(e, r, t[r]);
          if (zt) for (var r of zt(t)) Bt.call(t, r) && Kt(e, r, t[r]);
          return e;
        };
      const Ft = "ReactNative",
        Wt = {
          reactNative: "react-native",
          node: "node",
          browser: "browser",
          unknown: "unknown",
        },
        Gt = "js";
      function Yt() {
        return (
          typeof process < "u" &&
          typeof process.versions < "u" &&
          typeof process.versions.node < "u"
        );
      }
      function Jt() {
        return (
          !(0, yt.getDocument)() &&
          !!(0, yt.getNavigator)() &&
          navigator.product === Ft
        );
      }
      function Qt() {
        return !Yt() && !!(0, yt.getNavigator)() && !!(0, yt.getDocument)();
      }
      function Xt() {
        return Jt()
          ? Wt.reactNative
          : Yt()
          ? Wt.node
          : Qt()
          ? Wt.browser
          : Wt.unknown;
      }
      function Zt(e, t, n) {
        const i = (function () {
            if (
              Xt() === Wt.reactNative &&
              typeof r.g < "u" &&
              typeof (null == r.g ? void 0 : r.g.Platform) < "u"
            ) {
              const { OS: e, Version: t } = r.g.Platform;
              return [e, t].join("-");
            }
            const e = ft();
            if (null === e) return "unknown";
            const t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
            return "browser" === e.type
              ? [t, e.name, e.version].join("-")
              : [t, e.version].join("-");
          })(),
          s = (function () {
            var e;
            const t = Xt();
            return t === Wt.browser
              ? [
                  t,
                  (null == (e = (0, yt.getLocation)()) ? void 0 : e.host) ||
                    "unknown",
                ].join(":")
              : t;
          })();
        return [[e, t].join("-"), [Gt, n].join("-"), i, s].join("/");
      }
      function er(e) {
        let {
          protocol: t,
          version: r,
          relayUrl: n,
          sdkVersion: i,
          auth: s,
          projectId: o,
          useOnCloseEvent: a,
          bundleId: c,
        } = e;
        const u = n.split("?"),
          h = {
            auth: s,
            ua: Zt(t, r, i),
            projectId: o,
            useOnCloseEvent: a || void 0,
            origin: c || void 0,
          },
          l = (function (e, t) {
            let r = mt.parse(e);
            return (r = Vt(Vt({}, r), t)), mt.stringify(r);
          })(u[1] || "", h);
        return u[0] + "?" + l;
      }
      function tr(e, t) {
        return e.filter((e) => t.includes(e)).length === e.length;
      }
      function rr(e) {
        return Object.fromEntries(e.entries());
      }
      function nr(e) {
        return new Map(Object.entries(e));
      }
      function ir() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : gt.FIVE_MINUTES,
          t = arguments.length > 1 ? arguments[1] : void 0;
        const r = (0, gt.toMiliseconds)(e || gt.FIVE_MINUTES);
        let n, i, s;
        return {
          resolve: (e) => {
            s && n && (clearTimeout(s), n(e));
          },
          reject: (e) => {
            s && i && (clearTimeout(s), i(e));
          },
          done: () =>
            new Promise((e, o) => {
              (s = setTimeout(() => {
                o(new Error(t));
              }, r)),
                (n = e),
                (i = o);
            }),
        };
      }
      function sr(e, t, r) {
        return new Promise(async (n, i) => {
          const s = setTimeout(() => i(new Error(r)), t);
          try {
            n(await e);
          } catch (Wn) {
            i(Wn);
          }
          clearTimeout(s);
        });
      }
      function or(e, t) {
        if ("string" == typeof t && t.startsWith(`${e}:`)) return t;
        if ("topic" === e.toLowerCase()) {
          if ("string" != typeof t)
            throw new Error(
              'Value must be "string" for expirer target type: topic'
            );
          return `topic:${t}`;
        }
        if ("id" === e.toLowerCase()) {
          if ("number" != typeof t)
            throw new Error(
              'Value must be "number" for expirer target type: id'
            );
          return `id:${t}`;
        }
        throw new Error(`Unknown expirer target type: ${e}`);
      }
      function ar(e) {
        const [t, r] = e.split(":"),
          n = { id: void 0, topic: void 0 };
        if ("topic" === t && "string" == typeof r) n.topic = r;
        else {
          if ("id" !== t || !Number.isInteger(Number(r)))
            throw new Error(
              `Invalid target, expected id:number or topic:string, got ${t}:${r}`
            );
          n.id = Number(r);
        }
        return n;
      }
      function cr(e, t) {
        return (0, gt.fromMiliseconds)(
          (t || Date.now()) + (0, gt.toMiliseconds)(e)
        );
      }
      function ur(e) {
        return Date.now() >= (0, gt.toMiliseconds)(e);
      }
      function hr(e, t) {
        return `${e}${t ? `:${t}` : ""}`;
      }
      function lr() {
        return [
          ...new Set([
            ...(arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : []),
            ...(arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : []),
          ]),
        ];
      }
      function fr(e) {
        return e?.relay || { protocol: "irn" };
      }
      function pr(e) {
        const t = wt[e];
        if (typeof t > "u")
          throw new Error(`Relay Protocol not supported: ${e}`);
        return t;
      }
      var dr = Object.defineProperty,
        gr = Object.defineProperties,
        yr = Object.getOwnPropertyDescriptors,
        vr = Object.getOwnPropertySymbols,
        mr = Object.prototype.hasOwnProperty,
        wr = Object.prototype.propertyIsEnumerable,
        br = (e, t, r) =>
          t in e
            ? dr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      function _r(e) {
        const t = {},
          r =
            "relay" +
            (arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "-");
        return (
          Object.keys(e).forEach((n) => {
            if (n.startsWith(r)) {
              const i = n.replace(r, ""),
                s = e[n];
              t[i] = s;
            }
          }),
          t
        );
      }
      function Er(e) {
        const t = (e = (e = e.includes("wc://")
            ? e.replace("wc://", "")
            : e).includes("wc:")
            ? e.replace("wc:", "")
            : e).indexOf(":"),
          r = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
          n = e.substring(0, t),
          i = e.substring(t + 1, r).split("@"),
          s = typeof r < "u" ? e.substring(r) : "",
          o = mt.parse(s);
        return {
          protocol: n,
          topic: Sr(i[0]),
          version: parseInt(i[1], 10),
          symKey: o.symKey,
          relay: _r(o),
          expiryTimestamp: o.expiryTimestamp
            ? parseInt(o.expiryTimestamp, 10)
            : void 0,
        };
      }
      function Sr(e) {
        return e.startsWith("//") ? e.substring(2) : e;
      }
      function Ir(e) {
        return (
          `${e.protocol}:${e.topic}@${e.version}?` +
          mt.stringify(
            ((e, t) => gr(e, yr(t)))(
              ((e, t) => {
                for (var r in t || (t = {})) mr.call(t, r) && br(e, r, t[r]);
                if (vr) for (var r of vr(t)) wr.call(t, r) && br(e, r, t[r]);
                return e;
              })(
                { symKey: e.symKey },
                (function (e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "-";
                  const r = {};
                  return (
                    Object.keys(e).forEach((n) => {
                      const i = "relay" + t + n;
                      e[n] && (r[i] = e[n]);
                    }),
                    r
                  );
                })(e.relay)
              ),
              { expiryTimestamp: e.expiryTimestamp }
            )
          )
        );
      }
      Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      function Pr(e) {
        const t = [];
        return (
          e.forEach((e) => {
            const [r, n] = e.split(":");
            t.push(`${r}:${n}`);
          }),
          t
        );
      }
      function Or(e) {
        return e.includes(":");
      }
      function Ar(e) {
        return Or(e) ? e.split(":")[0] : e;
      }
      const xr = {
          INVALID_METHOD: { message: "Invalid method.", code: 1001 },
          INVALID_EVENT: { message: "Invalid event.", code: 1002 },
          INVALID_UPDATE_REQUEST: {
            message: "Invalid update request.",
            code: 1003,
          },
          INVALID_EXTEND_REQUEST: {
            message: "Invalid extend request.",
            code: 1004,
          },
          INVALID_SESSION_SETTLE_REQUEST: {
            message: "Invalid session settle request.",
            code: 1005,
          },
          UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
          UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
          UNAUTHORIZED_UPDATE_REQUEST: {
            message: "Unauthorized update request.",
            code: 3003,
          },
          UNAUTHORIZED_EXTEND_REQUEST: {
            message: "Unauthorized extend request.",
            code: 3004,
          },
          USER_REJECTED: { message: "User rejected.", code: 5e3 },
          USER_REJECTED_CHAINS: {
            message: "User rejected chains.",
            code: 5001,
          },
          USER_REJECTED_METHODS: {
            message: "User rejected methods.",
            code: 5002,
          },
          USER_REJECTED_EVENTS: {
            message: "User rejected events.",
            code: 5003,
          },
          UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
          UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
          UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
          UNSUPPORTED_ACCOUNTS: {
            message: "Unsupported accounts.",
            code: 5103,
          },
          UNSUPPORTED_NAMESPACE_KEY: {
            message: "Unsupported namespace key.",
            code: 5104,
          },
          USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
          SESSION_SETTLEMENT_FAILED: {
            message: "Session settlement failed.",
            code: 7e3,
          },
          WC_METHOD_UNSUPPORTED: {
            message: "Unsupported wc_ method.",
            code: 10001,
          },
        },
        Rr = {
          NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
          NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
          RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
          RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
          MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
          EXPIRED: { message: "Expired.", code: 6 },
          UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
          MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
          NON_CONFORMING_NAMESPACES: {
            message: "Non conforming namespaces.",
            code: 9,
          },
        };
      function Nr(e, t) {
        const { message: r, code: n } = Rr[e];
        return { message: t ? `${r} ${t}` : r, code: n };
      }
      function Tr(e, t) {
        const { message: r, code: n } = xr[e];
        return { message: t ? `${r} ${t}` : r, code: n };
      }
      function Cr(e, t) {
        return (
          !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t))
        );
      }
      function jr(e) {
        return (
          Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
        );
      }
      function Ur(e) {
        return typeof e > "u";
      }
      function Lr(e, t) {
        return !(!t || !Ur(e)) || ("string" == typeof e && !!e.trim().length);
      }
      function Mr(e, t) {
        return !(!t || !Ur(e)) || ("number" == typeof e && !isNaN(e));
      }
      function Dr(e) {
        return !(!Lr(e, !1) || !e.includes(":")) && 2 === e.split(":").length;
      }
      function kr(e) {
        let t = !0;
        return (
          Cr(e) ? e.length && (t = e.every((e) => Lr(e, !1))) : (t = !1), t
        );
      }
      function qr(e, t, r) {
        let n = null;
        return (
          Object.entries(e).forEach((e) => {
            let [i, s] = e;
            if (n) return;
            const o = (function (e, t, r) {
              let n = null;
              return (
                Cr(t) && t.length
                  ? t.forEach((e) => {
                      n ||
                        Dr(e) ||
                        (n = Tr(
                          "UNSUPPORTED_CHAINS",
                          `${r}, chain ${e} should be a string and conform to "namespace:chainId" format`
                        ));
                    })
                  : Dr(e) ||
                    (n = Tr(
                      "UNSUPPORTED_CHAINS",
                      `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
                    )),
                n
              );
            })(i, Et(i, s), `${t} ${r}`);
            o && (n = o);
          }),
          n
        );
      }
      function $r(e, t) {
        let r = null;
        return (
          Cr(e)
            ? e.forEach((e) => {
                r ||
                  (function (e) {
                    if (Lr(e, !1) && e.includes(":")) {
                      const t = e.split(":");
                      if (3 === t.length) {
                        const e = t[0] + ":" + t[1];
                        return !!t[2] && Dr(e);
                      }
                    }
                    return !1;
                  })(e) ||
                  (r = Tr(
                    "UNSUPPORTED_ACCOUNTS",
                    `${t}, account ${e} should be a string and conform to "namespace:chainId:address" format`
                  ));
              })
            : (r = Tr(
                "UNSUPPORTED_ACCOUNTS",
                `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
              )),
          r
        );
      }
      function zr(e, t) {
        let r = null;
        return (
          Object.values(e).forEach((e) => {
            if (r) return;
            const n = (function (e, t) {
              let r = null;
              return (
                kr(e?.methods)
                  ? kr(e?.events) ||
                    (r = Tr(
                      "UNSUPPORTED_EVENTS",
                      `${t}, events should be an array of strings or empty array for no events`
                    ))
                  : (r = Tr(
                      "UNSUPPORTED_METHODS",
                      `${t}, methods should be an array of strings or empty array for no methods`
                    )),
                r
              );
            })(e, `${t}, namespace`);
            n && (r = n);
          }),
          r
        );
      }
      function Hr(e, t) {
        let r = null;
        if (e && jr(e)) {
          const n = zr(e, t);
          n && (r = n);
          const i = (function (e, t) {
            let r = null;
            return (
              Object.values(e).forEach((e) => {
                if (r) return;
                const n = $r(e?.accounts, `${t} namespace`);
                n && (r = n);
              }),
              r
            );
          })(e, t);
          i && (r = i);
        } else
          r = Nr(
            "MISSING_OR_INVALID",
            `${t}, namespaces should be an object with data`
          );
        return r;
      }
      function Br(e) {
        return Lr(e.protocol, !0);
      }
      function Kr(e) {
        return typeof e < "u" && null !== typeof e;
      }
      function Vr(e, t) {
        return !(
          !Dr(t) ||
          !(function (e) {
            const t = [];
            return (
              Object.values(e).forEach((e) => {
                t.push(...Pr(e.accounts));
              }),
              t
            );
          })(e).includes(t)
        );
      }
      function Fr(e, t, r) {
        return (
          !!Lr(r, !1) &&
          (function (e, t) {
            const r = [];
            return (
              Object.values(e).forEach((e) => {
                Pr(e.accounts).includes(t) && r.push(...e.methods);
              }),
              r
            );
          })(e, t).includes(r)
        );
      }
      function Wr(e, t, r) {
        return (
          !!Lr(r, !1) &&
          (function (e, t) {
            const r = [];
            return (
              Object.values(e).forEach((e) => {
                Pr(e.accounts).includes(t) && r.push(...e.events);
              }),
              r
            );
          })(e, t).includes(r)
        );
      }
      function Gr(e, t, r) {
        let n = null;
        const i = (function (e) {
            const t = {};
            return (
              Object.keys(e).forEach((r) => {
                var n;
                r.includes(":")
                  ? (t[r] = e[r])
                  : null == (n = e[r].chains) ||
                    n.forEach((n) => {
                      t[n] = { methods: e[r].methods, events: e[r].events };
                    });
              }),
              t
            );
          })(e),
          s = (function (e) {
            const t = {};
            return (
              Object.keys(e).forEach((r) => {
                if (r.includes(":")) t[r] = e[r];
                else {
                  const n = Pr(e[r].accounts);
                  n?.forEach((n) => {
                    t[n] = {
                      accounts: e[r].accounts.filter((e) =>
                        e.includes(`${n}:`)
                      ),
                      methods: e[r].methods,
                      events: e[r].events,
                    };
                  });
                }
              }),
              t
            );
          })(t),
          o = Object.keys(i),
          a = Object.keys(s),
          c = Yr(Object.keys(e)),
          u = Yr(Object.keys(t)),
          h = c.filter((e) => !u.includes(e));
        return (
          h.length &&
            (n = Nr(
              "NON_CONFORMING_NAMESPACES",
              `${r} namespaces keys don't satisfy requiredNamespaces.\n      Required: ${h.toString()}\n      Received: ${Object.keys(
                t
              ).toString()}`
            )),
          tr(o, a) ||
            (n = Nr(
              "NON_CONFORMING_NAMESPACES",
              `${r} namespaces chains don't satisfy required namespaces.\n      Required: ${o.toString()}\n      Approved: ${a.toString()}`
            )),
          Object.keys(t).forEach((e) => {
            if (!e.includes(":") || n) return;
            const i = Pr(t[e].accounts);
            i.includes(e) ||
              (n = Nr(
                "NON_CONFORMING_NAMESPACES",
                `${r} namespaces accounts don't satisfy namespace accounts for ${e}\n        Required: ${e}\n        Approved: ${i.toString()}`
              ));
          }),
          o.forEach((e) => {
            n ||
              (tr(i[e].methods, s[e].methods)
                ? tr(i[e].events, s[e].events) ||
                  (n = Nr(
                    "NON_CONFORMING_NAMESPACES",
                    `${r} namespaces events don't satisfy namespace events for ${e}`
                  ))
                : (n = Nr(
                    "NON_CONFORMING_NAMESPACES",
                    `${r} namespaces methods don't satisfy namespace methods for ${e}`
                  )));
          }),
          n
        );
      }
      function Yr(e) {
        return [
          ...new Set(e.map((e) => (e.includes(":") ? e.split(":")[0] : e))),
        ];
      }
      function Jr() {
        const e = Xt();
        return new Promise((t) => {
          switch (e) {
            case Wt.browser:
              t(Qt() && navigator?.onLine);
              break;
            case Wt.reactNative:
              t(
                (async function () {
                  if (Jt() && typeof r.g < "u" && null != r.g && r.g.NetInfo) {
                    const e = await (null == r.g
                      ? void 0
                      : r.g.NetInfo.fetch());
                    return e?.isConnected;
                  }
                  return !0;
                })()
              );
              break;
            case Wt.node:
            default:
              t(!0);
          }
        });
      }
      function Qr(e) {
        switch (Xt()) {
          case Wt.browser:
            !(function (e) {
              !Jt() &&
                Qt() &&
                (window.addEventListener("online", () => e(!0)),
                window.addEventListener("offline", () => e(!1)));
            })(e);
            break;
          case Wt.reactNative:
            !(function (e) {
              Jt() &&
                typeof r.g < "u" &&
                null != r.g &&
                r.g.NetInfo &&
                r.g?.NetInfo.addEventListener((t) => e(t?.isConnected));
            })(e);
          case Wt.node:
        }
      }
      const Xr = {};
      class Zr {
        static get(e) {
          return Xr[e];
        }
        static set(e, t) {
          Xr[e] = t;
        }
        static delete(e) {
          delete Xr[e];
        }
      }
      const en =
          /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
        tn =
          /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
        rn = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
      function nn(e, t) {
        if (
          !(
            "__proto__" === e ||
            ("constructor" === e &&
              t &&
              "object" === typeof t &&
              "prototype" in t)
          )
        )
          return t;
        !(function (e) {
          console.warn(
            `[destr] Dropping "${e}" key to prevent prototype pollution.`
          );
        })(e);
      }
      function sn(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if ("string" !== typeof e) return e;
        const r = e.trim();
        if ('"' === e[0] && e.endsWith('"') && !e.includes("\\"))
          return r.slice(1, -1);
        if (r.length <= 9) {
          const e = r.toLowerCase();
          if ("true" === e) return !0;
          if ("false" === e) return !1;
          if ("undefined" === e) return;
          if ("null" === e) return null;
          if ("nan" === e) return Number.NaN;
          if ("infinity" === e) return Number.POSITIVE_INFINITY;
          if ("-infinity" === e) return Number.NEGATIVE_INFINITY;
        }
        if (!rn.test(e)) {
          if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
          return e;
        }
        try {
          if (en.test(e) || tn.test(e)) {
            if (t.strict)
              throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(e, nn);
          }
          return JSON.parse(e);
        } catch (n) {
          if (t.strict) throw n;
          return e;
        }
      }
      function on(e) {
        try {
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
            n < t;
            n++
          )
            r[n - 1] = arguments[n];
          return (i = e(...r)) && "function" === typeof i.then
            ? i
            : Promise.resolve(i);
        } catch (s) {
          return Promise.reject(s);
        }
        var i;
      }
      function an(e) {
        if (
          (function (e) {
            const t = typeof e;
            return null === e || ("object" !== t && "function" !== t);
          })(e)
        )
          return String(e);
        if (
          (function (e) {
            const t = Object.getPrototypeOf(e);
            return !t || t.isPrototypeOf(Object);
          })(e) ||
          Array.isArray(e)
        )
          return JSON.stringify(e);
        if ("function" === typeof e.toJSON) return an(e.toJSON());
        throw new Error("[unstorage] Cannot stringify value!");
      }
      function cn() {
        if (void 0 === typeof Buffer)
          throw new TypeError("[unstorage] Buffer is not supported!");
      }
      const un = "base64:";
      function hn(e) {
        return e
          ? e
              .split("?")[0]
              .replace(/[/\\]/g, ":")
              .replace(/:+/g, ":")
              .replace(/^:|:$/g, "")
          : "";
      }
      function ln() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return hn(t.join(":"));
      }
      function fn(e) {
        return (e = hn(e)) ? e + ":" : "";
      }
      const pn = () => {
        const e = new Map();
        return {
          name: "memory",
          options: {},
          hasItem: (t) => e.has(t),
          getItem: (t) => e.get(t) ?? null,
          getItemRaw: (t) => e.get(t) ?? null,
          setItem(t, r) {
            e.set(t, r);
          },
          setItemRaw(t, r) {
            e.set(t, r);
          },
          removeItem(t) {
            e.delete(t);
          },
          getKeys: () => Array.from(e.keys()),
          clear() {
            e.clear();
          },
          dispose() {
            e.clear();
          },
        };
      };
      function dn() {
        const e = {
            mounts: {
              "":
                (arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
                ).driver || pn(),
            },
            mountpoints: [""],
            watching: !1,
            watchListeners: [],
            unwatch: {},
          },
          t = (t) => {
            for (const r of e.mountpoints)
              if (t.startsWith(r))
                return {
                  base: r,
                  relativeKey: t.slice(r.length),
                  driver: e.mounts[r],
                };
            return { base: "", relativeKey: t, driver: e.mounts[""] };
          },
          r = (t, r) =>
            e.mountpoints
              .filter((e) => e.startsWith(t) || (r && t.startsWith(e)))
              .map((r) => ({
                relativeBase: t.length > r.length ? t.slice(r.length) : void 0,
                mountpoint: r,
                driver: e.mounts[r],
              })),
          n = (t, r) => {
            if (e.watching) {
              r = hn(r);
              for (const n of e.watchListeners) n(t, r);
            }
          },
          i = async () => {
            if (e.watching) {
              for (const t in e.unwatch) await e.unwatch[t]();
              (e.unwatch = {}), (e.watching = !1);
            }
          },
          s = (e, r, n) => {
            const i = new Map(),
              s = (e) => {
                let t = i.get(e.base);
                return (
                  t ||
                    ((t = { driver: e.driver, base: e.base, items: [] }),
                    i.set(e.base, t)),
                  t
                );
              };
            for (const o of e) {
              const e = "string" === typeof o,
                n = hn(e ? o : o.key),
                i = e ? void 0 : o.value,
                a = e || !o.options ? r : { ...r, ...o.options },
                c = t(n);
              s(c).items.push({
                key: n,
                value: i,
                relativeKey: c.relativeKey,
                options: a,
              });
            }
            return Promise.all([...i.values()].map((e) => n(e))).then((e) =>
              e.flat()
            );
          },
          o = {
            hasItem(e) {
              let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              e = hn(e);
              const { relativeKey: n, driver: i } = t(e);
              return on(i.hasItem, n, r);
            },
            getItem(e) {
              let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              e = hn(e);
              const { relativeKey: n, driver: i } = t(e);
              return on(i.getItem, n, r).then((e) => sn(e));
            },
            getItems: (e, t) =>
              s(e, t, (e) =>
                e.driver.getItems
                  ? on(
                      e.driver.getItems,
                      e.items.map((e) => ({
                        key: e.relativeKey,
                        options: e.options,
                      })),
                      t
                    ).then((t) =>
                      t.map((t) => ({
                        key: ln(e.base, t.key),
                        value: sn(t.value),
                      }))
                    )
                  : Promise.all(
                      e.items.map((t) =>
                        on(e.driver.getItem, t.relativeKey, t.options).then(
                          (e) => ({ key: t.key, value: sn(e) })
                        )
                      )
                    )
              ),
            getItemRaw(e) {
              let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              e = hn(e);
              const { relativeKey: n, driver: i } = t(e);
              return i.getItemRaw
                ? on(i.getItemRaw, n, r)
                : on(i.getItem, n, r).then((e) =>
                    (function (e) {
                      return "string" !== typeof e
                        ? e
                        : e.startsWith(un)
                        ? (cn(), Buffer.from(e.slice(un.length), "base64"))
                        : e;
                    })(e)
                  );
            },
            async setItem(e, r) {
              let i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              if (void 0 === r) return o.removeItem(e);
              e = hn(e);
              const { relativeKey: s, driver: a } = t(e);
              a.setItem &&
                (await on(a.setItem, s, an(r), i), a.watch || n("update", e));
            },
            async setItems(e, t) {
              await s(e, t, async (e) => {
                if (e.driver.setItems)
                  return on(
                    e.driver.setItems,
                    e.items.map((e) => ({
                      key: e.relativeKey,
                      value: an(e.value),
                      options: e.options,
                    })),
                    t
                  );
                e.driver.setItem &&
                  (await Promise.all(
                    e.items.map((t) =>
                      on(
                        e.driver.setItem,
                        t.relativeKey,
                        an(t.value),
                        t.options
                      )
                    )
                  ));
              });
            },
            async setItemRaw(e, r) {
              let i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              if (void 0 === r) return o.removeItem(e, i);
              e = hn(e);
              const { relativeKey: s, driver: a } = t(e);
              if (a.setItemRaw) await on(a.setItemRaw, s, r, i);
              else {
                if (!a.setItem) return;
                await on(
                  a.setItem,
                  s,
                  (function (e) {
                    if ("string" === typeof e) return e;
                    cn();
                    const t = Buffer.from(e).toString("base64");
                    return un + t;
                  })(r),
                  i
                );
              }
              a.watch || n("update", e);
            },
            async removeItem(e) {
              let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              "boolean" === typeof r && (r = { removeMeta: r }), (e = hn(e));
              const { relativeKey: i, driver: s } = t(e);
              s.removeItem &&
                (await on(s.removeItem, i, r),
                (r.removeMeta || r.removeMata) &&
                  (await on(s.removeItem, i + "$", r)),
                s.watch || n("remove", e));
            },
            async getMeta(e) {
              let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              "boolean" === typeof r && (r = { nativeOnly: r }), (e = hn(e));
              const { relativeKey: n, driver: i } = t(e),
                s = Object.create(null);
              if (
                (i.getMeta && Object.assign(s, await on(i.getMeta, n, r)),
                !r.nativeOnly)
              ) {
                const e = await on(i.getItem, n + "$", r).then((e) => sn(e));
                e &&
                  "object" === typeof e &&
                  ("string" === typeof e.atime && (e.atime = new Date(e.atime)),
                  "string" === typeof e.mtime && (e.mtime = new Date(e.mtime)),
                  Object.assign(s, e));
              }
              return s;
            },
            setMeta(e, t) {
              let r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              return this.setItem(e + "$", t, r);
            },
            removeMeta(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return this.removeItem(e + "$", t);
            },
            async getKeys(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              e = fn(e);
              const n = r(e, !0);
              let i = [];
              const s = [];
              for (const r of n) {
                const e = (await on(r.driver.getKeys, r.relativeBase, t))
                  .map((e) => r.mountpoint + hn(e))
                  .filter((e) => !i.some((t) => e.startsWith(t)));
                s.push(...e),
                  (i = [
                    r.mountpoint,
                    ...i.filter((e) => !e.startsWith(r.mountpoint)),
                  ]);
              }
              return e
                ? s.filter((t) => t.startsWith(e) && !t.endsWith("$"))
                : s.filter((e) => !e.endsWith("$"));
            },
            async clear(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              (e = fn(e)),
                await Promise.all(
                  r(e, !1).map(async (e) => {
                    if (e.driver.clear)
                      return on(e.driver.clear, e.relativeBase, t);
                    if (e.driver.removeItem) {
                      const r = await e.driver.getKeys(e.relativeBase || "", t);
                      return Promise.all(
                        r.map((r) => e.driver.removeItem(r, t))
                      );
                    }
                  })
                );
            },
            async dispose() {
              await Promise.all(Object.values(e.mounts).map((e) => yn(e)));
            },
            watch: async (t) => (
              await (async () => {
                if (!e.watching) {
                  e.watching = !0;
                  for (const t in e.mounts)
                    e.unwatch[t] = await gn(e.mounts[t], n, t);
                }
              })(),
              e.watchListeners.push(t),
              async () => {
                (e.watchListeners = e.watchListeners.filter((e) => e !== t)),
                  0 === e.watchListeners.length && (await i());
              }
            ),
            async unwatch() {
              (e.watchListeners = []), await i();
            },
            mount(t, r) {
              if ((t = fn(t)) && e.mounts[t])
                throw new Error(`already mounted at ${t}`);
              return (
                t &&
                  (e.mountpoints.push(t),
                  e.mountpoints.sort((e, t) => t.length - e.length)),
                (e.mounts[t] = r),
                e.watching &&
                  Promise.resolve(gn(r, n, t))
                    .then((r) => {
                      e.unwatch[t] = r;
                    })
                    .catch(console.error),
                o
              );
            },
            async unmount(t) {
              let r =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
              (t = fn(t)) &&
                e.mounts[t] &&
                (e.watching &&
                  t in e.unwatch &&
                  (e.unwatch[t](), delete e.unwatch[t]),
                r && (await yn(e.mounts[t])),
                (e.mountpoints = e.mountpoints.filter((e) => e !== t)),
                delete e.mounts[t]);
            },
            getMount() {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
              e = hn(e) + ":";
              const r = t(e);
              return { driver: r.driver, base: r.base };
            },
            getMounts() {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              e = hn(e);
              return r(e, t.parents).map((e) => ({
                driver: e.driver,
                base: e.mountpoint,
              }));
            },
          };
        return o;
      }
      function gn(e, t, r) {
        return e.watch ? e.watch((e, n) => t(e, r + n)) : () => {};
      }
      async function yn(e) {
        "function" === typeof e.dispose && (await on(e.dispose));
      }
      function vn(e) {
        return new Promise((t, r) => {
          (e.oncomplete = e.onsuccess = () => t(e.result)),
            (e.onabort = e.onerror = () => r(e.error));
        });
      }
      function mn(e, t) {
        const r = indexedDB.open(e);
        r.onupgradeneeded = () => r.result.createObjectStore(t);
        const n = vn(r);
        return (e, r) => n.then((n) => r(n.transaction(t, e).objectStore(t)));
      }
      let wn;
      function bn() {
        return wn || (wn = mn("keyval-store", "keyval")), wn;
      }
      function _n(e) {
        return (
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bn()
        )("readonly", (t) => vn(t.get(e)));
      }
      function En(e, t) {
        return (
          (e.openCursor().onsuccess = function () {
            this.result && (t(this.result), this.result.continue());
          }),
          vn(e.transaction)
        );
      }
      const Sn = (e) =>
          JSON.stringify(e, (e, t) =>
            "bigint" === typeof t ? t.toString() + "n" : t
          ),
        In = (e) => {
          const t = e.replace(
            /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
            '$1"$2n"$3'
          );
          return JSON.parse(t, (e, t) =>
            "string" === typeof t && t.match(/^\d+n$/)
              ? BigInt(t.substring(0, t.length - 1))
              : t
          );
        };
      function Pn(e) {
        if ("string" !== typeof e)
          throw new Error("Cannot safe json parse value of type " + typeof e);
        try {
          return In(e);
        } catch (t) {
          return e;
        }
      }
      function On(e) {
        return "string" === typeof e ? e : Sn(e) || "";
      }
      var An = function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const t = e.base && e.base.length > 0 ? `${e.base}:` : "",
          r = (e) => t + e;
        let n;
        return (
          e.dbName && e.storeName && (n = mn(e.dbName, e.storeName)),
          {
            name: "idb-keyval",
            options: e,
            hasItem: async (e) => !(typeof (await _n(r(e), n)) > "u"),
            getItem: async (e) => (await _n(r(e), n)) ?? null,
            setItem: (e, t) =>
              (function (e, t) {
                return (
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : bn()
                )("readwrite", (r) => (r.put(t, e), vn(r.transaction)));
              })(r(e), t, n),
            removeItem: (e) =>
              (function (e) {
                return (
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : bn()
                )("readwrite", (t) => (t.delete(e), vn(t.transaction)));
              })(r(e), n),
            getKeys: () =>
              (function () {
                return (
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : bn()
                )("readonly", (e) => {
                  if (e.getAllKeys) return vn(e.getAllKeys());
                  const t = [];
                  return En(e, (e) => t.push(e.key)).then(() => t);
                });
              })(n),
            clear: () =>
              (function () {
                return (
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : bn()
                )("readwrite", (e) => (e.clear(), vn(e.transaction)));
              })(n),
          }
        );
      };
      class xn {
        constructor() {
          this.indexedDb = dn({
            driver: An({
              dbName: "WALLET_CONNECT_V2_INDEXED_DB",
              storeName: "keyvaluestorage",
            }),
          });
        }
        async getKeys() {
          return this.indexedDb.getKeys();
        }
        async getEntries() {
          return (
            await this.indexedDb.getItems(await this.indexedDb.getKeys())
          ).map((e) => [e.key, e.value]);
        }
        async getItem(e) {
          const t = await this.indexedDb.getItem(e);
          if (null !== t) return t;
        }
        async setItem(e, t) {
          await this.indexedDb.setItem(e, On(t));
        }
        async removeItem(e) {
          await this.indexedDb.removeItem(e);
        }
      }
      var Rn =
          typeof globalThis < "u"
            ? globalThis
            : typeof window < "u"
            ? window
            : typeof r.g < "u"
            ? r.g
            : typeof self < "u"
            ? self
            : {},
        Nn = { exports: {} };
      function Tn(e) {
        var t;
        return [e[0], Pn(null != (t = e[1]) ? t : "")];
      }
      !(function () {
        let e;
        function t() {}
        (e = t),
          (e.prototype.getItem = function (e) {
            return this.hasOwnProperty(e) ? String(this[e]) : null;
          }),
          (e.prototype.setItem = function (e, t) {
            this[e] = String(t);
          }),
          (e.prototype.removeItem = function (e) {
            delete this[e];
          }),
          (e.prototype.clear = function () {
            const e = this;
            Object.keys(e).forEach(function (t) {
              (e[t] = void 0), delete e[t];
            });
          }),
          (e.prototype.key = function (e) {
            return (e = e || 0), Object.keys(this)[e];
          }),
          e.prototype.__defineGetter__("length", function () {
            return Object.keys(this).length;
          }),
          typeof Rn < "u" && Rn.localStorage
            ? (Nn.exports = Rn.localStorage)
            : typeof window < "u" && window.localStorage
            ? (Nn.exports = window.localStorage)
            : (Nn.exports = new t());
      })();
      class Cn {
        constructor() {
          this.localStorage = Nn.exports;
        }
        async getKeys() {
          return Object.keys(this.localStorage);
        }
        async getEntries() {
          return Object.entries(this.localStorage).map(Tn);
        }
        async getItem(e) {
          const t = this.localStorage.getItem(e);
          if (null !== t) return Pn(t);
        }
        async setItem(e, t) {
          this.localStorage.setItem(e, On(t));
        }
        async removeItem(e) {
          this.localStorage.removeItem(e);
        }
      }
      const jn = async (e, t) => {
        t.length &&
          t.forEach(async (t) => {
            await e.removeItem(t);
          });
      };
      class Un {
        constructor() {
          (this.initialized = !1),
            (this.setInitialized = (e) => {
              (this.storage = e), (this.initialized = !0);
            });
          const e = new Cn();
          this.storage = e;
          try {
            (async (e, t, r) => {
              const n = "wc_storage_version",
                i = await t.getItem(n);
              if (i && i >= 1) return void r(t);
              const s = await e.getKeys();
              if (!s.length) return void r(t);
              const o = [];
              for (; s.length; ) {
                const r = s.shift();
                if (!r) continue;
                const n = r.toLowerCase();
                if (
                  n.includes("wc@") ||
                  n.includes("walletconnect") ||
                  n.includes("wc_") ||
                  n.includes("wallet_connect")
                ) {
                  const n = await e.getItem(r);
                  await t.setItem(r, n), o.push(r);
                }
              }
              await t.setItem(n, 1), r(t), jn(e, o);
            })(e, new xn(), this.setInitialized);
          } catch {
            this.initialized = !0;
          }
        }
        async getKeys() {
          return await this.initialize(), this.storage.getKeys();
        }
        async getEntries() {
          return await this.initialize(), this.storage.getEntries();
        }
        async getItem(e) {
          return await this.initialize(), this.storage.getItem(e);
        }
        async setItem(e, t) {
          return await this.initialize(), this.storage.setItem(e, t);
        }
        async removeItem(e) {
          return await this.initialize(), this.storage.removeItem(e);
        }
        async initialize() {
          this.initialized ||
            (await new Promise((e) => {
              const t = setInterval(() => {
                this.initialized && (clearInterval(t), e());
              }, 20);
            }));
        }
      }
      var Ln = r(77326),
        Mn = r(25711),
        Dn = r.n(Mn);
      const kn = "info",
        qn = "custom_context";
      Symbol.iterator;
      var $n = Object.defineProperty,
        zn = Object.defineProperties,
        Hn = Object.getOwnPropertyDescriptors,
        Bn = Object.getOwnPropertySymbols,
        Kn = Object.prototype.hasOwnProperty,
        Vn = Object.prototype.propertyIsEnumerable,
        Fn = (e, t, r) =>
          t in e
            ? $n(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Wn = (e, t) => {
          for (var r in t || (t = {})) Kn.call(t, r) && Fn(e, r, t[r]);
          if (Bn) for (var r of Bn(t)) Vn.call(t, r) && Fn(e, r, t[r]);
          return e;
        },
        Gn = (e, t) => zn(e, Hn(t));
      function Yn(e) {
        return Gn(Wn({}, e), { level: e?.level || kn });
      }
      function Jn(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qn,
          r = "";
        return (
          (r =
            typeof e.bindings > "u"
              ? (function (e) {
                  return (
                    e[
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : qn
                    ] || ""
                  );
                })(e, t)
              : e.bindings().context || ""),
          r
        );
      }
      function Qn(e, t) {
        let r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qn;
        const n = (function (e, t) {
          const r = Jn(
            e,
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qn
          );
          return r.trim() ? `${r}/${t}` : t;
        })(e, t, r);
        return (function (e, t) {
          return (
            (e[
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : qn
            ] = t),
            e
          );
        })(e.child({ context: n }), n, r);
      }
      var Xn = r(61775);
      class Zn extends Xn.H {
        constructor(e) {
          super(), (this.opts = e), (this.protocol = "wc"), (this.version = 2);
        }
      }
      class ei extends Xn.H {
        constructor(e, t) {
          super(),
            (this.core = e),
            (this.logger = t),
            (this.records = new Map());
        }
      }
      class ti {
        constructor(e, t) {
          (this.logger = e), (this.core = t);
        }
      }
      class ri extends Xn.H {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class ni extends Xn.H {
        constructor(e) {
          super();
        }
      }
      class ii {
        constructor(e, t, r, n) {
          (this.core = e), (this.logger = t), (this.name = r);
        }
      }
      class si extends Xn.H {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class oi extends Xn.H {
        constructor(e, t) {
          super(), (this.core = e), (this.logger = t);
        }
      }
      class ai {
        constructor(e, t) {
          (this.projectId = e), (this.logger = t);
        }
      }
      class ci {
        constructor(e, t) {
          (this.projectId = e), (this.logger = t);
        }
      }
      m();
      class ui {
        constructor(e) {
          (this.opts = e), (this.protocol = "wc"), (this.version = 2);
        }
      }
      v.EventEmitter;
      class hi {
        constructor(e) {
          this.client = e;
        }
      }
      var li = r(43045);
      const fi = ".",
        pi = "base64url",
        di = "utf8",
        gi = "utf8",
        yi = ":",
        vi = "did",
        mi = "key",
        wi = "base58btc",
        bi = "z",
        _i = "K36";
      function Ei(e) {
        return tt(et(On(e), di), pi);
      }
      function Si(e) {
        const t = et(_i, wi),
          r = bi + tt(O([t, e]), wi);
        return [vi, mi, r].join(yi);
      }
      function Ii() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : (0, _.randomBytes)(32);
        return li.K(e);
      }
      async function Pi(e, t, r, n) {
        let i =
          arguments.length > 4 && void 0 !== arguments[4]
            ? arguments[4]
            : (0, gt.fromMiliseconds)(Date.now());
        const s = { alg: "EdDSA", typ: "JWT" },
          o = { iss: Si(n.publicKey), sub: e, aud: t, iat: i, exp: i + r },
          a = et(
            [Ei((c = { header: s, payload: o }).header), Ei(c.payload)].join(
              fi
            ),
            gi
          );
        var c;
        return (function (e) {
          return [
            Ei(e.header),
            Ei(e.payload),
            ((t = e.signature), tt(t, pi)),
          ].join(fi);
          var t;
        })({ header: s, payload: o, signature: li._S(n.secretKey, a) });
      }
      r(36388);
      const Oi = "PARSE_ERROR",
        Ai = "INVALID_REQUEST",
        xi = "METHOD_NOT_FOUND",
        Ri = "INVALID_PARAMS",
        Ni = "INTERNAL_ERROR",
        Ti = "SERVER_ERROR",
        Ci = [-32700, -32600, -32601, -32602, -32603],
        ji = {
          [Oi]: { code: -32700, message: "Parse error" },
          [Ai]: { code: -32600, message: "Invalid Request" },
          [xi]: { code: -32601, message: "Method not found" },
          [Ri]: { code: -32602, message: "Invalid params" },
          [Ni]: { code: -32603, message: "Internal error" },
          [Ti]: { code: -32e3, message: "Server error" },
        },
        Ui = Ti;
      function Li(e) {
        return Ci.includes(e);
      }
      function Mi(e) {
        return Object.keys(ji).includes(e) ? ji[e] : ji[Ui];
      }
      function Di(e) {
        const t = Object.values(ji).find((t) => t.code === e);
        return t || ji[Ui];
      }
      function ki(e, t, r) {
        return e.message.includes("getaddrinfo ENOTFOUND") ||
          e.message.includes("connect ECONNREFUSED")
          ? new Error(`Unavailable ${r} RPC url at ${t}`)
          : e;
      }
      var qi = r(8129);
      function $i() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
        return (
          Date.now() * Math.pow(10, e) +
          Math.floor(Math.random() * Math.pow(10, e))
        );
      }
      function zi() {
        return BigInt(
          $i(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6)
        );
      }
      function Hi(e, t, r) {
        return { id: r || $i(), jsonrpc: "2.0", method: e, params: t };
      }
      function Bi(e, t) {
        return { id: e, jsonrpc: "2.0", result: t };
      }
      function Ki(e, t, r) {
        return { id: e, jsonrpc: "2.0", error: Vi(t, r) };
      }
      function Vi(e, t) {
        return "undefined" === typeof e
          ? Mi(Ni)
          : ("string" === typeof e &&
              (e = Object.assign(Object.assign({}, Mi(Ti)), { message: e })),
            "undefined" !== typeof t && (e.data = t),
            Li(e.code) && (e = Di(e.code)),
            e);
      }
      class Fi {}
      class Wi extends Fi {
        constructor() {
          super();
        }
      }
      class Gi extends Wi {
        constructor(e) {
          super();
        }
      }
      function Yi(e, t) {
        const r = (function (e) {
          const t = e.match(new RegExp(/^\w+:/, "gi"));
          if (t && t.length) return t[0];
        })(e);
        return "undefined" !== typeof r && new RegExp(t).test(r);
      }
      function Ji(e) {
        return Yi(e, "^https?:");
      }
      function Qi(e) {
        return Yi(e, "^wss?:");
      }
      function Xi(e) {
        return (
          "object" === typeof e &&
          "id" in e &&
          "jsonrpc" in e &&
          "2.0" === e.jsonrpc
        );
      }
      function Zi(e) {
        return Xi(e) && "method" in e;
      }
      function es(e) {
        return Xi(e) && (ts(e) || rs(e));
      }
      function ts(e) {
        return "result" in e;
      }
      function rs(e) {
        return "error" in e;
      }
      class ns extends Gi {
        constructor(e) {
          super(e),
            (this.events = new v.EventEmitter()),
            (this.hasRegisteredEventListeners = !1),
            (this.connection = this.setConnection(e)),
            this.connection.connected && this.registerEventListeners();
        }
        async connect() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.connection;
          await this.open(e);
        }
        async disconnect() {
          await this.close();
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async request(e, t) {
          return this.requestStrict(
            Hi(e.method, e.params || [], e.id || zi().toString()),
            t
          );
        }
        async requestStrict(e, t) {
          return new Promise(async (r, n) => {
            if (!this.connection.connected)
              try {
                await this.open();
              } catch (i) {
                n(i);
              }
            this.events.on(`${e.id}`, (e) => {
              rs(e) ? n(e.error) : r(e.result);
            });
            try {
              await this.connection.send(e, t);
            } catch (i) {
              n(i);
            }
          });
        }
        setConnection() {
          return arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : this.connection;
        }
        onPayload(e) {
          this.events.emit("payload", e),
            es(e)
              ? this.events.emit(`${e.id}`, e)
              : this.events.emit("message", { type: e.method, data: e.params });
        }
        onClose(e) {
          e &&
            3e3 === e.code &&
            this.events.emit(
              "error",
              new Error(
                `WebSocket connection closed abnormally with code: ${e.code} ${
                  e.reason ? `(${e.reason})` : ""
                }`
              )
            ),
            this.events.emit("disconnect");
        }
        async open() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.connection;
          (this.connection === e && this.connection.connected) ||
            (this.connection.connected && this.close(),
            "string" === typeof e &&
              (await this.connection.open(e), (e = this.connection)),
            (this.connection = this.setConnection(e)),
            await this.connection.open(),
            this.registerEventListeners(),
            this.events.emit("connect"));
        }
        async close() {
          await this.connection.close();
        }
        registerEventListeners() {
          this.hasRegisteredEventListeners ||
            (this.connection.on("payload", (e) => this.onPayload(e)),
            this.connection.on("close", (e) => this.onClose(e)),
            this.connection.on("error", (e) => this.events.emit("error", e)),
            this.connection.on("register_error", (e) => this.onClose()),
            (this.hasRegisteredEventListeners = !0));
        }
      }
      const is = (e) => e.split("?")[0],
        ss =
          typeof WebSocket < "u"
            ? WebSocket
            : typeof r.g < "u" && typeof r.g.WebSocket < "u"
            ? r.g.WebSocket
            : typeof window < "u" && typeof window.WebSocket < "u"
            ? window.WebSocket
            : typeof self < "u" && typeof self.WebSocket < "u"
            ? self.WebSocket
            : r(32909);
      class os {
        constructor(e) {
          if (
            ((this.url = e),
            (this.events = new v.EventEmitter()),
            (this.registering = !1),
            !Qi(e))
          )
            throw new Error(
              `Provided URL is not compatible with WebSocket connection: ${e}`
            );
          this.url = e;
        }
        get connected() {
          return typeof this.socket < "u";
        }
        get connecting() {
          return this.registering;
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async open() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.url;
          await this.register(e);
        }
        async close() {
          return new Promise((e, t) => {
            typeof this.socket > "u"
              ? t(new Error("Connection already closed"))
              : ((this.socket.onclose = (t) => {
                  this.onClose(t), e();
                }),
                this.socket.close());
          });
        }
        async send(e) {
          typeof this.socket > "u" && (this.socket = await this.register());
          try {
            this.socket.send(On(e));
          } catch (t) {
            this.onError(e.id, t);
          }
        }
        register() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.url;
          if (!Qi(e))
            throw new Error(
              `Provided URL is not compatible with WebSocket connection: ${e}`
            );
          if (this.registering) {
            const e = this.events.getMaxListeners();
            return (
              (this.events.listenerCount("register_error") >= e ||
                this.events.listenerCount("open") >= e) &&
                this.events.setMaxListeners(e + 1),
              new Promise((e, t) => {
                this.events.once("register_error", (e) => {
                  this.resetMaxListeners(), t(e);
                }),
                  this.events.once("open", () => {
                    if ((this.resetMaxListeners(), typeof this.socket > "u"))
                      return t(
                        new Error("WebSocket connection is missing or invalid")
                      );
                    e(this.socket);
                  });
              })
            );
          }
          return (
            (this.url = e),
            (this.registering = !0),
            new Promise((t, n) => {
              const i = new URLSearchParams(e).get("origin"),
                s = (0, qi.isReactNative)()
                  ? { headers: { origin: i } }
                  : {
                      rejectUnauthorized:
                        ((a = e),
                        !new RegExp("wss?://localhost(:d{2,5})?").test(a)),
                    },
                o = new ss(e, [], s);
              var a;
              typeof WebSocket < "u" ||
              (typeof r.g < "u" && typeof r.g.WebSocket < "u") ||
              (typeof window < "u" && typeof window.WebSocket < "u") ||
              (typeof self < "u" && typeof self.WebSocket < "u")
                ? (o.onerror = (e) => {
                    const t = e;
                    n(this.emitError(t.error));
                  })
                : o.on("error", (e) => {
                    n(this.emitError(e));
                  }),
                (o.onopen = () => {
                  this.onOpen(o), t(o);
                });
            })
          );
        }
        onOpen(e) {
          (e.onmessage = (e) => this.onPayload(e)),
            (e.onclose = (e) => this.onClose(e)),
            (this.socket = e),
            (this.registering = !1),
            this.events.emit("open");
        }
        onClose(e) {
          (this.socket = void 0),
            (this.registering = !1),
            this.events.emit("close", e);
        }
        onPayload(e) {
          if (typeof e.data > "u") return;
          const t = "string" == typeof e.data ? Pn(e.data) : e.data;
          this.events.emit("payload", t);
        }
        onError(e, t) {
          const r = this.parseError(t),
            n = Ki(e, r.message || r.toString());
          this.events.emit("payload", n);
        }
        parseError(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.url;
          return ki(e, is(t), "WS");
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
        emitError(e) {
          const t = this.parseError(
            new Error(
              e?.message ||
                `WebSocket connection failed for host: ${is(this.url)}`
            )
          );
          return this.events.emit("register_error", t), t;
        }
      }
      var as = r(20067),
        cs = r.n(as),
        us = r(31106),
        hs = r.n(us);
      var ls = function (e, t) {
          if (e.length >= 255) throw new TypeError("Alphabet too long");
          for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
            r[n] = 255;
          for (var i = 0; i < e.length; i++) {
            var s = e.charAt(i),
              o = s.charCodeAt(0);
            if (255 !== r[o]) throw new TypeError(s + " is ambiguous");
            r[o] = i;
          }
          var a = e.length,
            c = e.charAt(0),
            u = Math.log(a) / Math.log(256),
            h = Math.log(256) / Math.log(a);
          function l(e) {
            if ("string" != typeof e) throw new TypeError("Expected String");
            if (0 === e.length) return new Uint8Array();
            var t = 0;
            if (" " !== e[t]) {
              for (var n = 0, i = 0; e[t] === c; ) n++, t++;
              for (
                var s = ((e.length - t) * u + 1) >>> 0, o = new Uint8Array(s);
                e[t];

              ) {
                var h = r[e.charCodeAt(t)];
                if (255 === h) return;
                for (
                  var l = 0, f = s - 1;
                  (0 !== h || l < i) && -1 !== f;
                  f--, l++
                )
                  (h += (a * o[f]) >>> 0),
                    (o[f] = h % 256 >>> 0),
                    (h = (h / 256) >>> 0);
                if (0 !== h) throw new Error("Non-zero carry");
                (i = l), t++;
              }
              if (" " !== e[t]) {
                for (var p = s - i; p !== s && 0 === o[p]; ) p++;
                for (var d = new Uint8Array(n + (s - p)), g = n; p !== s; )
                  d[g++] = o[p++];
                return d;
              }
            }
          }
          return {
            encode: function (t) {
              if (
                (t instanceof Uint8Array ||
                  (ArrayBuffer.isView(t)
                    ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                    : Array.isArray(t) && (t = Uint8Array.from(t))),
                !(t instanceof Uint8Array))
              )
                throw new TypeError("Expected Uint8Array");
              if (0 === t.length) return "";
              for (
                var r = 0, n = 0, i = 0, s = t.length;
                i !== s && 0 === t[i];

              )
                i++, r++;
              for (
                var o = ((s - i) * h + 1) >>> 0, u = new Uint8Array(o);
                i !== s;

              ) {
                for (
                  var l = t[i], f = 0, p = o - 1;
                  (0 !== l || f < n) && -1 !== p;
                  p--, f++
                )
                  (l += (256 * u[p]) >>> 0),
                    (u[p] = l % a >>> 0),
                    (l = (l / a) >>> 0);
                if (0 !== l) throw new Error("Non-zero carry");
                (n = f), i++;
              }
              for (var d = o - n; d !== o && 0 === u[d]; ) d++;
              for (var g = c.repeat(r); d < o; ++d) g += e.charAt(u[d]);
              return g;
            },
            decodeUnsafe: l,
            decode: function (e) {
              var r = l(e);
              if (r) return r;
              throw new Error(`Non-${t} character`);
            },
          };
        },
        fs = ls;
      const ps = (e) => {
        if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
          return e;
        if (e instanceof ArrayBuffer) return new Uint8Array(e);
        if (ArrayBuffer.isView(e))
          return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        throw new Error("Unknown type, must be binary type");
      };
      class ds {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
          throw Error("Unknown type, must be binary type");
        }
      }
      class gs {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw new Error("Invalid prefix character");
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r);
        }
        decode(e) {
          if ("string" == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${
                  this.name
                } decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(e) {
          return vs(this, e);
        }
      }
      class ys {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return vs(this, e);
        }
        decode(e) {
          const t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              e
            )}, only inputs prefixed with ${Object.keys(
              this.decoders
            )} are supported`
          );
        }
      }
      const vs = (e, t) =>
        new ys({
          ...(e.decoders || { [e.prefix]: e }),
          ...(t.decoders || { [t.prefix]: t }),
        });
      class ms {
        constructor(e, t, r, n) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = n),
            (this.encoder = new ds(e, t, r)),
            (this.decoder = new gs(e, t, n));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      const ws = (e) => {
          let { name: t, prefix: r, encode: n, decode: i } = e;
          return new ms(t, r, n, i);
        },
        bs = (e) => {
          let { prefix: t, name: r, alphabet: n } = e;
          const { encode: i, decode: s } = fs(n, r);
          return ws({ prefix: t, name: r, encode: i, decode: (e) => ps(s(e)) });
        },
        _s = (e) => {
          let { name: t, prefix: r, bitsPerChar: n, alphabet: i } = e;
          return ws({
            prefix: r,
            name: t,
            encode: (e) =>
              ((e, t, r) => {
                const n = "=" === t[t.length - 1],
                  i = (1 << r) - 1;
                let s = "",
                  o = 0,
                  a = 0;
                for (let c = 0; c < e.length; ++c)
                  for (a = (a << 8) | e[c], o += 8; o > r; )
                    (o -= r), (s += t[i & (a >> o)]);
                if ((o && (s += t[i & (a << (r - o))]), n))
                  for (; (s.length * r) & 7; ) s += "=";
                return s;
              })(e, i, n),
            decode: (e) =>
              ((e, t, r, n) => {
                const i = {};
                for (let h = 0; h < t.length; ++h) i[t[h]] = h;
                let s = e.length;
                for (; "=" === e[s - 1]; ) --s;
                const o = new Uint8Array(((s * r) / 8) | 0);
                let a = 0,
                  c = 0,
                  u = 0;
                for (let h = 0; h < s; ++h) {
                  const t = i[e[h]];
                  if (void 0 === t) throw new SyntaxError(`Non-${n} character`);
                  (c = (c << r) | t),
                    (a += r),
                    a >= 8 && ((a -= 8), (o[u++] = 255 & (c >> a)));
                }
                if (a >= r || 255 & (c << (8 - a)))
                  throw new SyntaxError("Unexpected end of data");
                return o;
              })(e, i, n, t),
          });
        },
        Es = ws({
          prefix: "\0",
          name: "identity",
          encode: (e) => ((e) => new TextDecoder().decode(e))(e),
          decode: (e) => ((e) => new TextEncoder().encode(e))(e),
        });
      var Ss = Object.freeze({ __proto__: null, identity: Es });
      const Is = _s({
        prefix: "0",
        name: "base2",
        alphabet: "01",
        bitsPerChar: 1,
      });
      var Ps = Object.freeze({ __proto__: null, base2: Is });
      const Os = _s({
        prefix: "7",
        name: "base8",
        alphabet: "01234567",
        bitsPerChar: 3,
      });
      var As = Object.freeze({ __proto__: null, base8: Os });
      const xs = bs({ prefix: "9", name: "base10", alphabet: "0123456789" });
      var Rs = Object.freeze({ __proto__: null, base10: xs });
      const Ns = _s({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        Ts = _s({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        });
      var Cs = Object.freeze({ __proto__: null, base16: Ns, base16upper: Ts });
      const js = _s({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        Us = _s({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        Ls = _s({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        Ms = _s({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        Ds = _s({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        ks = _s({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        qs = _s({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        $s = _s({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        zs = _s({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        });
      var Hs = Object.freeze({
        __proto__: null,
        base32: js,
        base32upper: Us,
        base32pad: Ls,
        base32padupper: Ms,
        base32hex: Ds,
        base32hexupper: ks,
        base32hexpad: qs,
        base32hexpadupper: $s,
        base32z: zs,
      });
      const Bs = bs({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        Ks = bs({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        });
      var Vs = Object.freeze({ __proto__: null, base36: Bs, base36upper: Ks });
      const Fs = bs({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        Ws = bs({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        });
      var Gs = Object.freeze({
        __proto__: null,
        base58btc: Fs,
        base58flickr: Ws,
      });
      const Ys = _s({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        Js = _s({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        Qs = _s({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        Xs = _s({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        });
      var Zs = Object.freeze({
        __proto__: null,
        base64: Ys,
        base64pad: Js,
        base64url: Qs,
        base64urlpad: Xs,
      });
      const eo = Array.from(
          "\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42"
        ),
        to = eo.reduce((e, t, r) => ((e[r] = t), e), []),
        ro = eo.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []);
      const no = ws({
        prefix: "\ud83d\ude80",
        name: "base256emoji",
        encode: function (e) {
          return e.reduce((e, t) => (e += to[t]), "");
        },
        decode: function (e) {
          const t = [];
          for (const r of e) {
            const e = ro[r.codePointAt(0)];
            if (void 0 === e)
              throw new Error(`Non-base256emoji character: ${r}`);
            t.push(e);
          }
          return new Uint8Array(t);
        },
      });
      var io = Object.freeze({ __proto__: null, base256emoji: no }),
        so = function e(t, r, n) {
          r = r || [];
          for (var i = (n = n || 0); t >= co; )
            (r[n++] = (255 & t) | oo), (t /= 128);
          for (; t & ao; ) (r[n++] = (255 & t) | oo), (t >>>= 7);
          return (r[n] = 0 | t), (e.bytes = n - i + 1), r;
        },
        oo = 128,
        ao = -128,
        co = Math.pow(2, 31);
      var uo = function e(t, r) {
          var n,
            i = 0,
            s = ((r = r || 0), 0),
            o = r,
            a = t.length;
          do {
            if (o >= a)
              throw ((e.bytes = 0), new RangeError("Could not decode varint"));
            (n = t[o++]),
              (i += s < 28 ? (n & lo) << s : (n & lo) * Math.pow(2, s)),
              (s += 7);
          } while (n >= ho);
          return (e.bytes = o - r), i;
        },
        ho = 128,
        lo = 127;
      var fo = Math.pow(2, 7),
        po = Math.pow(2, 14),
        go = Math.pow(2, 21),
        yo = Math.pow(2, 28),
        vo = Math.pow(2, 35),
        mo = Math.pow(2, 42),
        wo = Math.pow(2, 49),
        bo = Math.pow(2, 56),
        _o = Math.pow(2, 63),
        Eo = {
          encode: so,
          decode: uo,
          encodingLength: function (e) {
            return e < fo
              ? 1
              : e < po
              ? 2
              : e < go
              ? 3
              : e < yo
              ? 4
              : e < vo
              ? 5
              : e < mo
              ? 6
              : e < wo
              ? 7
              : e < bo
              ? 8
              : e < _o
              ? 9
              : 10;
          },
        },
        So = Eo;
      const Io = function (e, t) {
          let r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return So.encode(e, t, r), t;
        },
        Po = (e) => So.encodingLength(e),
        Oo = (e, t) => {
          const r = t.byteLength,
            n = Po(e),
            i = n + Po(r),
            s = new Uint8Array(i + r);
          return Io(e, s, 0), Io(r, s, n), s.set(t, i), new Ao(e, r, t, s);
        };
      class Ao {
        constructor(e, t, r, n) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = n);
        }
      }
      const xo = (e) => {
        let { name: t, code: r, encode: n } = e;
        return new Ro(t, r, n);
      };
      class Ro {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            const t = this.encode(e);
            return t instanceof Uint8Array
              ? Oo(this.code, t)
              : t.then((e) => Oo(this.code, e));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      const No = (e) => async (t) =>
          new Uint8Array(await crypto.subtle.digest(e, t)),
        To = xo({ name: "sha2-256", code: 18, encode: No("SHA-256") }),
        Co = xo({ name: "sha2-512", code: 19, encode: No("SHA-512") });
      Object.freeze({ __proto__: null, sha256: To, sha512: Co });
      const jo = ps,
        Uo = {
          code: 0,
          name: "identity",
          encode: jo,
          digest: (e) => Oo(0, jo(e)),
        };
      Object.freeze({ __proto__: null, identity: Uo });
      new TextEncoder(), new TextDecoder();
      const Lo = {
        ...Ss,
        ...Ps,
        ...As,
        ...Rs,
        ...Cs,
        ...Hs,
        ...Vs,
        ...Gs,
        ...Zs,
        ...io,
      };
      function Mo(e) {
        return null != globalThis.Buffer
          ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
          : e;
      }
      function Do(e, t, r, n) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: n },
        };
      }
      const ko = Do(
          "utf8",
          "u",
          (e) => "u" + new TextDecoder("utf8").decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        qo = Do(
          "ascii",
          "a",
          (e) => {
            let t = "a";
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            const t = (function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0;
              return null != globalThis.Buffer &&
                null != globalThis.Buffer.allocUnsafe
                ? Mo(globalThis.Buffer.allocUnsafe(e))
                : new Uint8Array(e);
            })((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        $o = {
          utf8: ko,
          "utf-8": ko,
          hex: Lo.base16,
          latin1: qo,
          ascii: qo,
          binary: qo,
          ...Lo,
        };
      const zo = "core",
        Ho = `wc@2:${zo}:`,
        Bo = "error",
        Ko = { database: ":memory:" },
        Vo = "client_ed25519_seed",
        Fo = gt.ONE_DAY,
        Wo = gt.SIX_HOURS,
        Go = "wss://relay.walletconnect.com",
        Yo = "wss://relay.walletconnect.org",
        Jo = "relayer_message",
        Qo = "relayer_message_ack",
        Xo = "relayer_connect",
        Zo = "relayer_disconnect",
        ea = "relayer_error",
        ta = "relayer_connection_stalled",
        ra = "relayer_publish",
        na = "payload",
        ia = "connect",
        sa = "disconnect",
        oa = "error",
        aa = gt.ONE_SECOND,
        ca = "subscription_created",
        ua = "subscription_deleted",
        ha = "subscription_sync",
        la = "subscription_resubscribed",
        fa = 1e3 * gt.FIVE_SECONDS,
        pa = {
          wc_pairingDelete: {
            req: { ttl: gt.ONE_DAY, prompt: !1, tag: 1e3 },
            res: { ttl: gt.ONE_DAY, prompt: !1, tag: 1001 },
          },
          wc_pairingPing: {
            req: { ttl: gt.THIRTY_SECONDS, prompt: !1, tag: 1002 },
            res: { ttl: gt.THIRTY_SECONDS, prompt: !1, tag: 1003 },
          },
          unregistered_method: {
            req: { ttl: gt.ONE_DAY, prompt: !1, tag: 0 },
            res: { ttl: gt.ONE_DAY, prompt: !1, tag: 0 },
          },
        },
        da = "pairing_create",
        ga = "pairing_expire",
        ya = "pairing_delete",
        va = "pairing_ping",
        ma = "history_created",
        wa = "history_updated",
        ba = "history_deleted",
        _a = "history_sync",
        Ea = "expirer_created",
        Sa = "expirer_deleted",
        Ia = "expirer_expired",
        Pa = "expirer_sync",
        Oa = "verify-api",
        Aa = "https://verify.walletconnect.com",
        xa = "https://verify.walletconnect.org",
        Ra = [Aa, xa];
      class Na {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            (this.keychain = new Map()),
            (this.name = "keychain"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = Ho),
            (this.init = async () => {
              if (!this.initialized) {
                const e = await this.getKeyChain();
                typeof e < "u" && (this.keychain = e), (this.initialized = !0);
              }
            }),
            (this.has = (e) => (this.isInitialized(), this.keychain.has(e))),
            (this.set = async (e, t) => {
              this.isInitialized(),
                this.keychain.set(e, t),
                await this.persist();
            }),
            (this.get = (e) => {
              this.isInitialized();
              const t = this.keychain.get(e);
              if (typeof t > "u") {
                const { message: t } = Nr(
                  "NO_MATCHING_KEY",
                  `${this.name}: ${e}`
                );
                throw new Error(t);
              }
              return t;
            }),
            (this.del = async (e) => {
              this.isInitialized(),
                this.keychain.delete(e),
                await this.persist();
            }),
            (this.core = e),
            (this.logger = Qn(t, this.name));
        }
        get context() {
          return Jn(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        async setKeyChain(e) {
          await this.core.storage.setItem(this.storageKey, rr(e));
        }
        async getKeyChain() {
          const e = await this.core.storage.getItem(this.storageKey);
          return typeof e < "u" ? nr(e) : void 0;
        }
        async persist() {
          await this.setKeyChain(this.keychain);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = Nr("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class Ta {
        constructor(e, t, r) {
          (this.core = e),
            (this.logger = t),
            (this.name = "crypto"),
            (this.initialized = !1),
            (this.init = async () => {
              this.initialized ||
                (await this.keychain.init(), (this.initialized = !0));
            }),
            (this.hasKeys = (e) => (
              this.isInitialized(), this.keychain.has(e)
            )),
            (this.getClientId = async () => {
              this.isInitialized();
              return Si(Ii(await this.getClientSeed()).publicKey);
            }),
            (this.generateKeyPair = () => {
              this.isInitialized();
              const e = (function () {
                const e = S.TZ();
                return {
                  privateKey: tt(e.secretKey, It),
                  publicKey: tt(e.publicKey, It),
                };
              })();
              return this.setPrivateKey(e.publicKey, e.privateKey);
            }),
            (this.signJWT = async (e) => {
              this.isInitialized();
              const t = Ii(await this.getClientSeed()),
                r = jt(),
                n = Fo;
              return await Pi(r, e, n, t);
            }),
            (this.generateSharedKey = (e, t, r) => {
              this.isInitialized();
              const n = (function (e, t) {
                const r = S.Tc(et(e, It), et(t, It), !0);
                return tt(new b.i(E.aD, r).expand(Ct), It);
              })(this.getPrivateKey(e), t);
              return this.setSymKey(n, r);
            }),
            (this.setSymKey = async (e, t) => {
              this.isInitialized();
              const r =
                t ||
                (function (e) {
                  return tt((0, E.tW)(et(e, It)), It);
                })(e);
              return await this.keychain.set(r, e), r;
            }),
            (this.deleteKeyPair = async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            (this.deleteSymKey = async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            (this.encode = async (e, t, r) => {
              this.isInitialized();
              const n = kt(r),
                i = On(t);
              if (qt(n)) {
                const t = n.senderPublicKey,
                  r = n.receiverPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              const s = this.getSymKey(e),
                { type: o, senderPublicKey: a } = n;
              return Mt({ type: o, symKey: s, message: i, senderPublicKey: a });
            }),
            (this.decode = async (e, t, r) => {
              this.isInitialized();
              const n = (function (e, t) {
                const r = Dt(e);
                return kt({
                  type: Lt(r.type),
                  senderPublicKey:
                    typeof r.senderPublicKey < "u"
                      ? tt(r.senderPublicKey, It)
                      : void 0,
                  receiverPublicKey: t?.receiverPublicKey,
                });
              })(t, r);
              if (qt(n)) {
                const t = n.receiverPublicKey,
                  r = n.senderPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              try {
                const r = (function (e) {
                  const t = new w.g6(et(e.symKey, It)),
                    { sealed: r, iv: n } = Dt(e.encoded),
                    i = t.open(n, r);
                  if (null === i) throw new Error("Failed to decrypt");
                  return tt(i, Ot);
                })({ symKey: this.getSymKey(e), encoded: t });
                return Pn(r);
              } catch (i) {
                this.logger.error(
                  `Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`
                ),
                  this.logger.error(i);
              }
            }),
            (this.getPayloadType = (e) => Lt(Dt(e).type)),
            (this.getPayloadSenderPublicKey = (e) => {
              const t = Dt(e);
              return t.senderPublicKey ? tt(t.senderPublicKey, It) : void 0;
            }),
            (this.core = e),
            (this.logger = Qn(t, this.name)),
            (this.keychain = r || new Na(this.core, this.logger));
        }
        get context() {
          return Jn(this.logger);
        }
        async setPrivateKey(e, t) {
          return await this.keychain.set(e, t), e;
        }
        getPrivateKey(e) {
          return this.keychain.get(e);
        }
        async getClientSeed() {
          let e = "";
          try {
            e = this.keychain.get(Vo);
          } catch {
            (e = jt()), await this.keychain.set(Vo, e);
          }
          return (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "utf8";
            const r = $o[t];
            if (!r) throw new Error(`Unsupported encoding "${t}"`);
            return ("utf8" !== t && "utf-8" !== t) ||
              null == globalThis.Buffer ||
              null == globalThis.Buffer.from
              ? r.decoder.decode(`${r.prefix}${e}`)
              : Mo(globalThis.Buffer.from(e, "utf-8"));
          })(e, "base16");
        }
        getSymKey(e) {
          return this.keychain.get(e);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = Nr("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class Ca extends ti {
        constructor(e, t) {
          super(e, t),
            (this.logger = e),
            (this.core = t),
            (this.messages = new Map()),
            (this.name = "messages"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = Ho),
            (this.init = async () => {
              if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                  const e = await this.getRelayerMessages();
                  typeof e < "u" && (this.messages = e),
                    this.logger.debug(
                      `Successfully Restored records for ${this.name}`
                    ),
                    this.logger.trace({
                      type: "method",
                      method: "restore",
                      size: this.messages.size,
                    });
                } catch (Wn) {
                  this.logger.debug(
                    `Failed to Restore records for ${this.name}`
                  ),
                    this.logger.error(Wn);
                } finally {
                  this.initialized = !0;
                }
              }
            }),
            (this.set = async (e, t) => {
              this.isInitialized();
              const r = Ut(t);
              let n = this.messages.get(e);
              return (
                typeof n > "u" && (n = {}),
                typeof n[r] < "u" ||
                  ((n[r] = t), this.messages.set(e, n), await this.persist()),
                r
              );
            }),
            (this.get = (e) => {
              this.isInitialized();
              let t = this.messages.get(e);
              return typeof t > "u" && (t = {}), t;
            }),
            (this.has = (e, t) => {
              this.isInitialized();
              return typeof this.get(e)[Ut(t)] < "u";
            }),
            (this.del = async (e) => {
              this.isInitialized(),
                this.messages.delete(e),
                await this.persist();
            }),
            (this.logger = Qn(e, this.name)),
            (this.core = t);
        }
        get context() {
          return Jn(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        async setRelayerMessages(e) {
          await this.core.storage.setItem(this.storageKey, rr(e));
        }
        async getRelayerMessages() {
          const e = await this.core.storage.getItem(this.storageKey);
          return typeof e < "u" ? nr(e) : void 0;
        }
        async persist() {
          await this.setRelayerMessages(this.messages);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = Nr("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class ja extends ri {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            (this.events = new v.EventEmitter()),
            (this.name = "publisher"),
            (this.queue = new Map()),
            (this.publishTimeout = (0, gt.toMiliseconds)(2 * gt.TEN_SECONDS)),
            (this.needsTransportRestart = !1),
            (this.publish = async (e, t, r) => {
              var n;
              this.logger.debug("Publishing Payload"),
                this.logger.trace({
                  type: "method",
                  method: "publish",
                  params: { topic: e, message: t, opts: r },
                });
              try {
                const s = r?.ttl || Wo,
                  o = fr(r),
                  a = r?.prompt || !1,
                  c = r?.tag || 0,
                  u = r?.id || zi().toString(),
                  h = {
                    topic: e,
                    message: t,
                    opts: { ttl: s, relay: o, prompt: a, tag: c, id: u },
                  },
                  l = setTimeout(
                    () => this.queue.set(u, h),
                    this.publishTimeout
                  );
                try {
                  await await sr(
                    this.rpcPublish(e, t, s, o, a, c, u),
                    this.publishTimeout,
                    `Failed to publish payload, please try again. id:${u} tag:${c}`
                  ),
                    this.removeRequestFromQueue(u),
                    this.relayer.events.emit(ra, h);
                } catch (i) {
                  if (
                    (this.logger.debug("Publishing Payload stalled"),
                    (this.needsTransportRestart = !0),
                    null != (n = r?.internal) && n.throwOnFailedPublish)
                  )
                    throw (this.removeRequestFromQueue(u), i);
                  return;
                } finally {
                  clearTimeout(l);
                }
                this.logger.debug("Successfully Published Payload"),
                  this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: { topic: e, message: t, opts: r },
                  });
              } catch (ti) {
                throw (
                  (this.logger.debug("Failed to Publish Payload"),
                  this.logger.error(ti),
                  ti)
                );
              }
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.relayer = e),
            (this.logger = Qn(t, this.name)),
            this.registerEventListeners();
        }
        get context() {
          return Jn(this.logger);
        }
        rpcPublish(e, t, r, n, i, s, o) {
          var a, c, u, h;
          const l = {
            method: pr(n.protocol).publish,
            params: { topic: e, message: t, ttl: r, prompt: i, tag: s },
            id: o,
          };
          return (
            Ur(null == (a = l.params) ? void 0 : a.prompt) &&
              (null == (c = l.params) || delete c.prompt),
            Ur(null == (u = l.params) ? void 0 : u.tag) &&
              (null == (h = l.params) || delete h.tag),
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "message",
              direction: "outgoing",
              request: l,
            }),
            this.relayer.request(l)
          );
        }
        removeRequestFromQueue(e) {
          this.queue.delete(e);
        }
        checkQueue() {
          this.queue.forEach(async (e) => {
            const { topic: t, message: r, opts: n } = e;
            await this.publish(t, r, n);
          });
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(Ln.HEARTBEAT_EVENTS.pulse, () => {
            if (this.needsTransportRestart)
              return (
                (this.needsTransportRestart = !1),
                void this.relayer.events.emit(ta)
              );
            this.checkQueue();
          }),
            this.relayer.on(Qo, (e) => {
              this.removeRequestFromQueue(e.id.toString());
            });
        }
      }
      class Ua {
        constructor() {
          (this.map = new Map()),
            (this.set = (e, t) => {
              const r = this.get(e);
              this.exists(e, t) || this.map.set(e, [...r, t]);
            }),
            (this.get = (e) => this.map.get(e) || []),
            (this.exists = (e, t) => this.get(e).includes(t)),
            (this.delete = (e, t) => {
              if (typeof t > "u") return void this.map.delete(e);
              if (!this.map.has(e)) return;
              const r = this.get(e);
              if (!this.exists(e, t)) return;
              const n = r.filter((e) => e !== t);
              n.length ? this.map.set(e, n) : this.map.delete(e);
            }),
            (this.clear = () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      }
      var La = Object.defineProperty,
        Ma = Object.defineProperties,
        Da = Object.getOwnPropertyDescriptors,
        ka = Object.getOwnPropertySymbols,
        qa = Object.prototype.hasOwnProperty,
        $a = Object.prototype.propertyIsEnumerable,
        za = (e, t, r) =>
          t in e
            ? La(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Ha = (e, t) => {
          for (var r in t || (t = {})) qa.call(t, r) && za(e, r, t[r]);
          if (ka) for (var r of ka(t)) $a.call(t, r) && za(e, r, t[r]);
          return e;
        },
        Ba = (e, t) => Ma(e, Da(t));
      class Ka extends si {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            (this.subscriptions = new Map()),
            (this.topicMap = new Ua()),
            (this.events = new v.EventEmitter()),
            (this.name = "subscription"),
            (this.version = "0.3"),
            (this.pending = new Map()),
            (this.cached = []),
            (this.initialized = !1),
            (this.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
            (this.pollingInterval = 20),
            (this.storagePrefix = Ho),
            (this.subscribeTimeout = 1e4),
            (this.restartInProgress = !1),
            (this.batchSubscribeTopicsLimit = 500),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                this.registerEventListeners(),
                (this.clientId = await this.relayer.core.crypto.getClientId()));
            }),
            (this.subscribe = async (e, t) => {
              await this.restartToComplete(),
                this.isInitialized(),
                this.logger.debug("Subscribing Topic"),
                this.logger.trace({
                  type: "method",
                  method: "subscribe",
                  params: { topic: e, opts: t },
                });
              try {
                const r = fr(t),
                  n = { topic: e, relay: r };
                this.pending.set(e, n);
                const i = await this.rpcSubscribe(e, r);
                return (
                  this.onSubscribe(i, n),
                  this.logger.debug("Successfully Subscribed Topic"),
                  this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: { topic: e, opts: t },
                  }),
                  i
                );
              } catch (r) {
                throw (
                  (this.logger.debug("Failed to Subscribe Topic"),
                  this.logger.error(r),
                  r)
                );
              }
            }),
            (this.unsubscribe = async (e, t) => {
              await this.restartToComplete(),
                this.isInitialized(),
                typeof t?.id < "u"
                  ? await this.unsubscribeById(e, t.id, t)
                  : await this.unsubscribeByTopic(e, t);
            }),
            (this.isSubscribed = async (e) => {
              if (this.topics.includes(e)) return !0;
              const t = `${this.pendingSubscriptionWatchLabel}_${e}`;
              return await new Promise((r, n) => {
                const i = new gt.Watch();
                i.start(t);
                const s = setInterval(() => {
                  !this.pending.has(e) &&
                    this.topics.includes(e) &&
                    (clearInterval(s), i.stop(t), r(!0)),
                    i.elapsed(t) >= fa &&
                      (clearInterval(s),
                      i.stop(t),
                      n(new Error("Subscription resolution timeout")));
                }, this.pollingInterval);
              }).catch(() => !1);
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.restart = async () => {
              (this.restartInProgress = !0),
                await this.restore(),
                await this.reset(),
                (this.restartInProgress = !1);
            }),
            (this.relayer = e),
            (this.logger = Qn(t, this.name)),
            (this.clientId = "");
        }
        get context() {
          return Jn(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.relayer.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.subscriptions.size;
        }
        get ids() {
          return Array.from(this.subscriptions.keys());
        }
        get values() {
          return Array.from(this.subscriptions.values());
        }
        get topics() {
          return this.topicMap.topics;
        }
        hasSubscription(e, t) {
          let r = !1;
          try {
            r = this.getSubscription(e).topic === t;
          } catch {}
          return r;
        }
        onEnable() {
          (this.cached = []), (this.initialized = !0);
        }
        onDisable() {
          (this.cached = this.values),
            this.subscriptions.clear(),
            this.topicMap.clear();
        }
        async unsubscribeByTopic(e, t) {
          const r = this.topicMap.get(e);
          await Promise.all(
            r.map(async (r) => await this.unsubscribeById(e, r, t))
          );
        }
        async unsubscribeById(e, t, r) {
          this.logger.debug("Unsubscribing Topic"),
            this.logger.trace({
              type: "method",
              method: "unsubscribe",
              params: { topic: e, id: t, opts: r },
            });
          try {
            const n = fr(r);
            await this.rpcUnsubscribe(e, t, n);
            const i = Tr("USER_DISCONNECTED", `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, i),
              this.logger.debug("Successfully Unsubscribed Topic"),
              this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: { topic: e, id: t, opts: r },
              });
          } catch (n) {
            throw (
              (this.logger.debug("Failed to Unsubscribe Topic"),
              this.logger.error(n),
              n)
            );
          }
        }
        async rpcSubscribe(e, t) {
          const r = { method: pr(t.protocol).subscribe, params: { topic: e } };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: r,
            });
          try {
            await await sr(this.relayer.request(r), this.subscribeTimeout);
          } catch {
            this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
              this.relayer.events.emit(ta);
          }
          return Ut(e + this.clientId);
        }
        async rpcBatchSubscribe(e) {
          if (!e.length) return;
          const t = {
            method: pr(e[0].relay.protocol).batchSubscribe,
            params: { topics: e.map((e) => e.topic) },
          };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: t,
            });
          try {
            return await await sr(
              this.relayer.request(t),
              this.subscribeTimeout
            );
          } catch {
            this.logger.debug("Outgoing Relay Payload stalled"),
              this.relayer.events.emit(ta);
          }
        }
        rpcUnsubscribe(e, t, r) {
          const n = {
            method: pr(r.protocol).unsubscribe,
            params: { topic: e, id: t },
          };
          return (
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: n,
            }),
            this.relayer.request(n)
          );
        }
        onSubscribe(e, t) {
          this.setSubscription(e, Ba(Ha({}, t), { id: e })),
            this.pending.delete(t.topic);
        }
        onBatchSubscribe(e) {
          e.length &&
            e.forEach((e) => {
              this.setSubscription(e.id, Ha({}, e)),
                this.pending.delete(e.topic);
            });
        }
        async onUnsubscribe(e, t, r) {
          this.events.removeAllListeners(t),
            this.hasSubscription(t, e) && this.deleteSubscription(t, r),
            await this.relayer.messages.del(e);
        }
        async setRelayerSubscriptions(e) {
          await this.relayer.core.storage.setItem(this.storageKey, e);
        }
        async getRelayerSubscriptions() {
          return await this.relayer.core.storage.getItem(this.storageKey);
        }
        setSubscription(e, t) {
          this.subscriptions.has(e) ||
            (this.logger.debug("Setting subscription"),
            this.logger.trace({
              type: "method",
              method: "setSubscription",
              id: e,
              subscription: t,
            }),
            this.addSubscription(e, t));
        }
        addSubscription(e, t) {
          this.subscriptions.set(e, Ha({}, t)),
            this.topicMap.set(t.topic, e),
            this.events.emit(ca, t);
        }
        getSubscription(e) {
          this.logger.debug("Getting subscription"),
            this.logger.trace({
              type: "method",
              method: "getSubscription",
              id: e,
            });
          const t = this.subscriptions.get(e);
          if (!t) {
            const { message: t } = Nr("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(t);
          }
          return t;
        }
        deleteSubscription(e, t) {
          this.logger.debug("Deleting subscription"),
            this.logger.trace({
              type: "method",
              method: "deleteSubscription",
              id: e,
              reason: t,
            });
          const r = this.getSubscription(e);
          this.subscriptions.delete(e),
            this.topicMap.delete(r.topic, e),
            this.events.emit(ua, Ba(Ha({}, r), { reason: t }));
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values), this.events.emit(ha);
        }
        async reset() {
          if (this.cached.length) {
            const e = Math.ceil(
              this.cached.length / this.batchSubscribeTopicsLimit
            );
            for (let t = 0; t < e; t++) {
              const e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
              await this.batchSubscribe(e);
            }
          }
          this.events.emit(la);
        }
        async restore() {
          try {
            const e = await this.getRelayerSubscriptions();
            if (typeof e > "u" || !e.length) return;
            if (this.subscriptions.size) {
              const { message: e } = Nr("RESTORE_WILL_OVERRIDE", this.name);
              throw (
                (this.logger.error(e),
                this.logger.error(
                  `${this.name}: ${JSON.stringify(this.values)}`
                ),
                new Error(e))
              );
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored subscriptions for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values,
              });
          } catch (e) {
            this.logger.debug(
              `Failed to Restore subscriptions for ${this.name}`
            ),
              this.logger.error(e);
          }
        }
        async batchSubscribe(e) {
          if (!e.length) return;
          const t = await this.rpcBatchSubscribe(e);
          Cr(t) &&
            this.onBatchSubscribe(t.map((t, r) => Ba(Ha({}, e[r]), { id: t })));
        }
        async onConnect() {
          this.restartInProgress || (await this.restart(), this.onEnable());
        }
        onDisconnect() {
          this.onDisable();
        }
        async checkPending() {
          if (!this.initialized || this.relayer.transportExplicitlyClosed)
            return;
          const e = [];
          this.pending.forEach((t) => {
            e.push(t);
          }),
            await this.batchSubscribe(e);
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(
            Ln.HEARTBEAT_EVENTS.pulse,
            async () => {
              await this.checkPending();
            }
          ),
            this.relayer.on(Xo, async () => {
              await this.onConnect();
            }),
            this.relayer.on(Zo, () => {
              this.onDisconnect();
            }),
            this.events.on(ca, async (e) => {
              const t = ca;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                await this.persist();
            }),
            this.events.on(ua, async (e) => {
              const t = ua;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                await this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = Nr("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
        async restartToComplete() {
          this.restartInProgress &&
            (await new Promise((e) => {
              const t = setInterval(() => {
                this.restartInProgress || (clearInterval(t), e());
              }, this.pollingInterval);
            }));
        }
      }
      var Va = Object.defineProperty,
        Fa = Object.getOwnPropertySymbols,
        Wa = Object.prototype.hasOwnProperty,
        Ga = Object.prototype.propertyIsEnumerable,
        Ya = (e, t, r) =>
          t in e
            ? Va(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      class Ja extends ni {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.events = new v.EventEmitter()),
            (this.name = "relayer"),
            (this.transportExplicitlyClosed = !1),
            (this.initialized = !1),
            (this.connectionAttemptInProgress = !1),
            (this.connectionStatusPollingInterval = 20),
            (this.staleConnectionErrors = ["socket hang up", "socket stalled"]),
            (this.hasExperiencedNetworkDisruption = !1),
            (this.requestsInFlight = new Map()),
            (this.request = async (e) => {
              this.logger.debug("Publishing Request Payload");
              const t = e.id;
              try {
                await this.toEstablishConnection();
                const r = this.provider.request(e);
                return (
                  this.requestsInFlight.set(t, { promise: r, request: e }),
                  await r
                );
              } catch (r) {
                throw (
                  (this.logger.debug("Failed to Publish Request"),
                  this.logger.error(r),
                  r)
                );
              } finally {
                this.requestsInFlight.delete(t);
              }
            }),
            (this.onPayloadHandler = (e) => {
              this.onProviderPayload(e);
            }),
            (this.onConnectHandler = () => {
              this.events.emit(Xo);
            }),
            (this.onDisconnectHandler = () => {
              this.onProviderDisconnect();
            }),
            (this.onProviderErrorHandler = (e) => {
              this.logger.error(e),
                this.events.emit(ea, e),
                this.logger.info(
                  "Fatal socket error received, closing transport"
                ),
                this.transportClose();
            }),
            (this.registerProviderListeners = () => {
              this.provider.on(na, this.onPayloadHandler),
                this.provider.on(ia, this.onConnectHandler),
                this.provider.on(sa, this.onDisconnectHandler),
                this.provider.on(oa, this.onProviderErrorHandler);
            }),
            (this.core = e.core),
            (this.logger =
              typeof e.logger < "u" && "string" != typeof e.logger
                ? Qn(e.logger, this.name)
                : Dn()(Yn({ level: e.logger || "error" }))),
            (this.messages = new Ca(this.logger, e.core)),
            (this.subscriber = new Ka(this, this.logger)),
            (this.publisher = new ja(this, this.logger)),
            (this.relayUrl = e?.relayUrl || Go),
            (this.projectId = e.projectId),
            (this.bundleId = (function () {
              var e;
              try {
                return Jt() &&
                  typeof r.g < "u" &&
                  typeof (null == r.g ? void 0 : r.g.Application) < "u"
                  ? null == (e = r.g.Application)
                    ? void 0
                    : e.applicationId
                  : void 0;
              } catch {
                return;
              }
            })()),
            (this.provider = {});
        }
        async init() {
          this.logger.trace("Initialized"),
            this.registerEventListeners(),
            await this.createProvider(),
            await Promise.all([this.messages.init(), this.subscriber.init()]);
          try {
            await this.transportOpen();
          } catch {
            this.logger.warn(
              `Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Yo}...`
            ),
              await this.restartTransport(Yo);
          }
          (this.initialized = !0),
            setTimeout(async () => {
              0 === this.subscriber.topics.length &&
                (this.logger.info(
                  "No topics subscribed to after init, closing transport"
                ),
                await this.transportClose(),
                (this.transportExplicitlyClosed = !1));
            }, 1e4);
        }
        get context() {
          return Jn(this.logger);
        }
        get connected() {
          return this.provider.connection.connected;
        }
        get connecting() {
          return this.provider.connection.connecting;
        }
        async publish(e, t, r) {
          this.isInitialized(),
            await this.publisher.publish(e, t, r),
            await this.recordMessageEvent({
              topic: e,
              message: t,
              publishedAt: Date.now(),
            });
        }
        async subscribe(e, t) {
          var r;
          this.isInitialized();
          let n,
            i =
              (null == (r = this.subscriber.topicMap.get(e)) ? void 0 : r[0]) ||
              "";
          if (i) return i;
          const s = (t) => {
            t.topic === e && (this.subscriber.off(ca, s), n());
          };
          return (
            await Promise.all([
              new Promise((e) => {
                (n = e), this.subscriber.on(ca, s);
              }),
              new Promise(async (r) => {
                (i = await this.subscriber.subscribe(e, t)), r();
              }),
            ]),
            i
          );
        }
        async unsubscribe(e, t) {
          this.isInitialized(), await this.subscriber.unsubscribe(e, t);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async transportClose() {
          this.requestsInFlight.size > 0 &&
            (this.logger.debug(
              "Waiting for all in-flight requests to finish before closing transport..."
            ),
            this.requestsInFlight.forEach(async (e) => {
              await e.promise;
            })),
            (this.transportExplicitlyClosed = !0),
            this.hasExperiencedNetworkDisruption && this.connected
              ? await sr(
                  this.provider.disconnect(),
                  1e3,
                  "provider.disconnect()"
                ).catch(() => this.onProviderDisconnect())
              : this.connected && (await this.provider.disconnect());
        }
        async transportOpen(e) {
          if (
            ((this.transportExplicitlyClosed = !1),
            await this.confirmOnlineStateOrThrow(),
            !this.connectionAttemptInProgress)
          ) {
            e &&
              e !== this.relayUrl &&
              ((this.relayUrl = e),
              await this.transportClose(),
              await this.createProvider()),
              (this.connectionAttemptInProgress = !0);
            try {
              await Promise.all([
                new Promise((e) => {
                  if (!this.initialized) return e();
                  this.subscriber.once(la, () => {
                    e();
                  });
                }),
                new Promise(async (e, t) => {
                  try {
                    await sr(
                      this.provider.connect(),
                      1e4,
                      `Socket stalled when trying to connect to ${this.relayUrl}`
                    );
                  } catch (r) {
                    return void t(r);
                  }
                  e();
                }),
              ]);
            } catch (t) {
              this.logger.error(t);
              const e = t;
              if (!this.isConnectionStalled(e.message)) throw t;
              this.provider.events.emit(sa);
            } finally {
              (this.connectionAttemptInProgress = !1),
                (this.hasExperiencedNetworkDisruption = !1);
            }
          }
        }
        async restartTransport(e) {
          await this.confirmOnlineStateOrThrow(),
            !this.connectionAttemptInProgress &&
              ((this.relayUrl = e || this.relayUrl),
              await this.transportClose(),
              await this.createProvider(),
              await this.transportOpen());
        }
        async confirmOnlineStateOrThrow() {
          if (!(await Jr()))
            throw new Error(
              "No internet connection detected. Please restart your network and try again."
            );
        }
        isConnectionStalled(e) {
          return this.staleConnectionErrors.some((t) => e.includes(t));
        }
        async createProvider() {
          this.provider.connection && this.unregisterProviderListeners();
          const e = await this.core.crypto.signJWT(this.relayUrl);
          (this.provider = new ns(
            new os(
              er({
                sdkVersion: "2.11.2",
                protocol: this.protocol,
                version: this.version,
                relayUrl: this.relayUrl,
                projectId: this.projectId,
                auth: e,
                useOnCloseEvent: !0,
                bundleId: this.bundleId,
              })
            )
          )),
            this.registerProviderListeners();
        }
        async recordMessageEvent(e) {
          const { topic: t, message: r } = e;
          await this.messages.set(t, r);
        }
        async shouldIgnoreMessageEvent(e) {
          const { topic: t, message: r } = e;
          if (!r || 0 === r.length)
            return (
              this.logger.debug(`Ignoring invalid/empty message: ${r}`), !0
            );
          if (!(await this.subscriber.isSubscribed(t)))
            return (
              this.logger.debug(
                `Ignoring message for non-subscribed topic ${t}`
              ),
              !0
            );
          const n = this.messages.has(t, r);
          return n && this.logger.debug(`Ignoring duplicate message: ${r}`), n;
        }
        async onProviderPayload(e) {
          if (
            (this.logger.debug("Incoming Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "incoming",
              payload: e,
            }),
            Zi(e))
          ) {
            if (!e.method.endsWith("_subscription")) return;
            const t = e.params,
              { topic: r, message: n, publishedAt: i } = t.data,
              s = { topic: r, message: n, publishedAt: i };
            this.logger.debug("Emitting Relayer Payload"),
              this.logger.trace(
                ((e, t) => {
                  for (var r in t || (t = {})) Wa.call(t, r) && Ya(e, r, t[r]);
                  if (Fa) for (var r of Fa(t)) Ga.call(t, r) && Ya(e, r, t[r]);
                  return e;
                })({ type: "event", event: t.id }, s)
              ),
              this.events.emit(t.id, s),
              await this.acknowledgePayload(e),
              await this.onMessageEvent(s);
          } else es(e) && this.events.emit(Qo, e);
        }
        async onMessageEvent(e) {
          (await this.shouldIgnoreMessageEvent(e)) ||
            (this.events.emit(Jo, e), await this.recordMessageEvent(e));
        }
        async acknowledgePayload(e) {
          const t = Bi(e.id, !0);
          await this.provider.connection.send(t);
        }
        unregisterProviderListeners() {
          this.provider.off(na, this.onPayloadHandler),
            this.provider.off(ia, this.onConnectHandler),
            this.provider.off(sa, this.onDisconnectHandler),
            this.provider.off(oa, this.onProviderErrorHandler);
        }
        async registerEventListeners() {
          this.events.on(ta, () => {
            this.restartTransport().catch((e) => this.logger.error(e));
          });
          let e = await Jr();
          Qr(async (t) => {
            this.initialized &&
              e !== t &&
              ((e = t),
              t
                ? await this.restartTransport().catch((e) =>
                    this.logger.error(e)
                  )
                : ((this.hasExperiencedNetworkDisruption = !0),
                  await this.transportClose().catch((e) =>
                    this.logger.error(e)
                  )));
          });
        }
        onProviderDisconnect() {
          this.events.emit(Zo), this.attemptToReconnect();
        }
        attemptToReconnect() {
          this.transportExplicitlyClosed ||
            (this.logger.info("attemptToReconnect called. Connecting..."),
            setTimeout(async () => {
              await this.restartTransport().catch((e) => this.logger.error(e));
            }, (0, gt.toMiliseconds)(aa)));
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = Nr("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
        async toEstablishConnection() {
          if ((await this.confirmOnlineStateOrThrow(), !this.connected)) {
            if (this.connectionAttemptInProgress)
              return await new Promise((e) => {
                const t = setInterval(() => {
                  this.connected && (clearInterval(t), e());
                }, this.connectionStatusPollingInterval);
              });
            await this.restartTransport();
          }
        }
      }
      var Qa = Object.defineProperty,
        Xa = Object.getOwnPropertySymbols,
        Za = Object.prototype.hasOwnProperty,
        ec = Object.prototype.propertyIsEnumerable,
        tc = (e, t, r) =>
          t in e
            ? Qa(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        rc = (e, t) => {
          for (var r in t || (t = {})) Za.call(t, r) && tc(e, r, t[r]);
          if (Xa) for (var r of Xa(t)) ec.call(t, r) && tc(e, r, t[r]);
          return e;
        };
      class nc extends ii {
        constructor(e, t, r) {
          let n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : Ho,
            i =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : void 0;
          super(e, t, r, n),
            (this.core = e),
            (this.logger = t),
            (this.name = r),
            (this.map = new Map()),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = Ho),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => {
                  this.getKey && null !== e && !Ur(e)
                    ? this.map.set(this.getKey(e), e)
                    : (function (e) {
                        var t;
                        return null == (t = e?.proposer) ? void 0 : t.publicKey;
                      })(e)
                    ? this.map.set(e.id, e)
                    : (function (e) {
                        return e?.topic;
                      })(e) && this.map.set(e.topic, e);
                }),
                (this.cached = []),
                (this.initialized = !0));
            }),
            (this.set = async (e, t) => {
              this.isInitialized(),
                this.map.has(e)
                  ? await this.update(e, t)
                  : (this.logger.debug("Setting value"),
                    this.logger.trace({
                      type: "method",
                      method: "set",
                      key: e,
                      value: t,
                    }),
                    this.map.set(e, t),
                    await this.persist());
            }),
            (this.get = (e) => (
              this.isInitialized(),
              this.logger.debug("Getting value"),
              this.logger.trace({ type: "method", method: "get", key: e }),
              this.getData(e)
            )),
            (this.getAll = (e) => (
              this.isInitialized(),
              e
                ? this.values.filter((t) =>
                    Object.keys(e).every((r) => cs()(t[r], e[r]))
                  )
                : this.values
            )),
            (this.update = async (e, t) => {
              this.isInitialized(),
                this.logger.debug("Updating value"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  key: e,
                  update: t,
                });
              const r = rc(rc({}, this.getData(e)), t);
              this.map.set(e, r), await this.persist();
            }),
            (this.delete = async (e, t) => {
              this.isInitialized(),
                this.map.has(e) &&
                  (this.logger.debug("Deleting value"),
                  this.logger.trace({
                    type: "method",
                    method: "delete",
                    key: e,
                    reason: t,
                  }),
                  this.map.delete(e),
                  await this.persist());
            }),
            (this.logger = Qn(t, this.name)),
            (this.storagePrefix = n),
            (this.getKey = i);
        }
        get context() {
          return Jn(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.map.size;
        }
        get keys() {
          return Array.from(this.map.keys());
        }
        get values() {
          return Array.from(this.map.values());
        }
        async setDataStore(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getDataStore() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getData(e) {
          const t = this.map.get(e);
          if (!t) {
            const { message: t } = Nr("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw (this.logger.error(t), new Error(t));
          }
          return t;
        }
        async persist() {
          await this.setDataStore(this.values);
        }
        async restore() {
          try {
            const e = await this.getDataStore();
            if (typeof e > "u" || !e.length) return;
            if (this.map.size) {
              const { message: e } = Nr("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), new Error(e));
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored value for ${this.name}`),
              this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`),
              this.logger.error(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = Nr("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class ic {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            (this.name = "pairing"),
            (this.version = "0.3"),
            (this.events = new (m())()),
            (this.initialized = !1),
            (this.storagePrefix = Ho),
            (this.ignoredPayloadTypes = [xt]),
            (this.registeredMethods = []),
            (this.init = async () => {
              this.initialized ||
                (await this.pairings.init(),
                await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                (this.initialized = !0),
                this.logger.trace("Initialized"));
            }),
            (this.register = (e) => {
              let { methods: t } = e;
              this.isInitialized(),
                (this.registeredMethods = [
                  ...new Set([...this.registeredMethods, ...t]),
                ]);
            }),
            (this.create = async () => {
              this.isInitialized();
              const e = jt(),
                t = await this.core.crypto.setSymKey(e),
                r = cr(gt.FIVE_MINUTES),
                n = { protocol: "irn" },
                i = { topic: t, expiry: r, relay: n, active: !1 },
                s = Ir({
                  protocol: this.core.protocol,
                  version: this.core.version,
                  topic: t,
                  symKey: e,
                  relay: n,
                  expiryTimestamp: r,
                });
              return (
                await this.pairings.set(t, i),
                await this.core.relayer.subscribe(t),
                this.core.expirer.set(t, r),
                { topic: t, uri: s }
              );
            }),
            (this.pair = async (e) => {
              this.isInitialized(), this.isValidPair(e);
              const {
                topic: t,
                symKey: r,
                relay: n,
                expiryTimestamp: i,
              } = Er(e.uri);
              let s;
              if (
                this.pairings.keys.includes(t) &&
                ((s = this.pairings.get(t)), s.active)
              )
                throw new Error(
                  `Pairing already exists: ${t}. Please try again with a new connection URI.`
                );
              const o = i || cr(gt.FIVE_MINUTES),
                a = { topic: t, relay: n, expiry: o, active: !1 };
              return (
                await this.pairings.set(t, a),
                this.core.expirer.set(t, o),
                e.activatePairing && (await this.activate({ topic: t })),
                this.events.emit(da, a),
                this.core.crypto.keychain.has(t) ||
                  (await this.core.crypto.setSymKey(r, t),
                  await this.core.relayer.subscribe(t, { relay: n })),
                a
              );
            }),
            (this.activate = async (e) => {
              let { topic: t } = e;
              this.isInitialized();
              const r = cr(gt.THIRTY_DAYS);
              await this.pairings.update(t, { active: !0, expiry: r }),
                this.core.expirer.set(t, r);
            }),
            (this.ping = async (e) => {
              this.isInitialized(), await this.isValidPing(e);
              const { topic: t } = e;
              if (this.pairings.keys.includes(t)) {
                const e = await this.sendRequest(t, "wc_pairingPing", {}),
                  { done: r, resolve: n, reject: i } = ir();
                this.events.once(hr("pairing_ping", e), (e) => {
                  let { error: t } = e;
                  t ? i(t) : n();
                }),
                  await r();
              }
            }),
            (this.updateExpiry = async (e) => {
              let { topic: t, expiry: r } = e;
              this.isInitialized(),
                await this.pairings.update(t, { expiry: r });
            }),
            (this.updateMetadata = async (e) => {
              let { topic: t, metadata: r } = e;
              this.isInitialized(),
                await this.pairings.update(t, { peerMetadata: r });
            }),
            (this.getPairings = () => (
              this.isInitialized(), this.pairings.values
            )),
            (this.disconnect = async (e) => {
              this.isInitialized(), await this.isValidDisconnect(e);
              const { topic: t } = e;
              this.pairings.keys.includes(t) &&
                (await this.sendRequest(
                  t,
                  "wc_pairingDelete",
                  Tr("USER_DISCONNECTED")
                ),
                await this.deletePairing(t));
            }),
            (this.sendRequest = async (e, t, r) => {
              const n = Hi(t, r),
                i = await this.core.crypto.encode(e, n),
                s = pa[t].req;
              return (
                this.core.history.set(e, n),
                this.core.relayer.publish(e, i, s),
                n.id
              );
            }),
            (this.sendResult = async (e, t, r) => {
              const n = Bi(e, r),
                i = await this.core.crypto.encode(t, n),
                s = await this.core.history.get(t, e),
                o = pa[s.request.method].res;
              await this.core.relayer.publish(t, i, o),
                await this.core.history.resolve(n);
            }),
            (this.sendError = async (e, t, r) => {
              const n = Ki(e, r),
                i = await this.core.crypto.encode(t, n),
                s = await this.core.history.get(t, e),
                o = pa[s.request.method]
                  ? pa[s.request.method].res
                  : pa.unregistered_method.res;
              await this.core.relayer.publish(t, i, o),
                await this.core.history.resolve(n);
            }),
            (this.deletePairing = async (e, t) => {
              await this.core.relayer.unsubscribe(e),
                await Promise.all([
                  this.pairings.delete(e, Tr("USER_DISCONNECTED")),
                  this.core.crypto.deleteSymKey(e),
                  t ? Promise.resolve() : this.core.expirer.del(e),
                ]);
            }),
            (this.cleanup = async () => {
              const e = this.pairings.getAll().filter((e) => ur(e.expiry));
              await Promise.all(e.map((e) => this.deletePairing(e.topic)));
            }),
            (this.onRelayEventRequest = (e) => {
              const { topic: t, payload: r } = e;
              switch (r.method) {
                case "wc_pairingPing":
                  return this.onPairingPingRequest(t, r);
                case "wc_pairingDelete":
                  return this.onPairingDeleteRequest(t, r);
                default:
                  return this.onUnknownRpcMethodRequest(t, r);
              }
            }),
            (this.onRelayEventResponse = async (e) => {
              const { topic: t, payload: r } = e,
                n = (await this.core.history.get(t, r.id)).request.method;
              return "wc_pairingPing" === n
                ? this.onPairingPingResponse(t, r)
                : this.onUnknownRpcMethodResponse(n);
            }),
            (this.onPairingPingRequest = async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult(r, e, !0),
                  this.events.emit(va, { id: r, topic: e });
              } catch (n) {
                await this.sendError(r, e, n), this.logger.error(n);
              }
            }),
            (this.onPairingPingResponse = (e, t) => {
              const { id: r } = t;
              setTimeout(() => {
                ts(t)
                  ? this.events.emit(hr("pairing_ping", r), {})
                  : rs(t) &&
                    this.events.emit(hr("pairing_ping", r), { error: t.error });
              }, 500);
            }),
            (this.onPairingDeleteRequest = async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e }),
                  await this.deletePairing(e),
                  this.events.emit(ya, { id: r, topic: e });
              } catch (n) {
                await this.sendError(r, e, n), this.logger.error(n);
              }
            }),
            (this.onUnknownRpcMethodRequest = async (e, t) => {
              const { id: r, method: n } = t;
              try {
                if (this.registeredMethods.includes(n)) return;
                const t = Tr("WC_METHOD_UNSUPPORTED", n);
                await this.sendError(r, e, t), this.logger.error(t);
              } catch (ti) {
                await this.sendError(r, e, ti), this.logger.error(ti);
              }
            }),
            (this.onUnknownRpcMethodResponse = (e) => {
              this.registeredMethods.includes(e) ||
                this.logger.error(Tr("WC_METHOD_UNSUPPORTED", e));
            }),
            (this.isValidPair = (e) => {
              var t;
              if (!Kr(e)) {
                const { message: t } = Nr(
                  "MISSING_OR_INVALID",
                  `pair() params: ${e}`
                );
                throw new Error(t);
              }
              if (
                !(function (e) {
                  if (Lr(e, !1))
                    try {
                      return typeof new URL(e) < "u";
                    } catch {
                      return !1;
                    }
                  return !1;
                })(e.uri)
              ) {
                const { message: t } = Nr(
                  "MISSING_OR_INVALID",
                  `pair() uri: ${e.uri}`
                );
                throw new Error(t);
              }
              const r = Er(e.uri);
              if (null == (t = r?.relay) || !t.protocol) {
                const { message: e } = Nr(
                  "MISSING_OR_INVALID",
                  "pair() uri#relay-protocol"
                );
                throw new Error(e);
              }
              if (null == r || !r.symKey) {
                const { message: e } = Nr(
                  "MISSING_OR_INVALID",
                  "pair() uri#symKey"
                );
                throw new Error(e);
              }
              if (
                null != r &&
                r.expiryTimestamp &&
                (0, gt.toMiliseconds)(r?.expiryTimestamp) < Date.now()
              ) {
                const { message: e } = Nr(
                  "EXPIRED",
                  "pair() URI has expired. Please try again with a new connection URI."
                );
                throw new Error(e);
              }
            }),
            (this.isValidPing = async (e) => {
              if (!Kr(e)) {
                const { message: t } = Nr(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            (this.isValidDisconnect = async (e) => {
              if (!Kr(e)) {
                const { message: t } = Nr(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            (this.isValidPairingTopic = async (e) => {
              if (!Lr(e, !1)) {
                const { message: t } = Nr(
                  "MISSING_OR_INVALID",
                  `pairing topic should be a string: ${e}`
                );
                throw new Error(t);
              }
              if (!this.pairings.keys.includes(e)) {
                const { message: t } = Nr(
                  "NO_MATCHING_KEY",
                  `pairing topic doesn't exist: ${e}`
                );
                throw new Error(t);
              }
              if (ur(this.pairings.get(e).expiry)) {
                await this.deletePairing(e);
                const { message: t } = Nr("EXPIRED", `pairing topic: ${e}`);
                throw new Error(t);
              }
            }),
            (this.core = e),
            (this.logger = Qn(t, this.name)),
            (this.pairings = new nc(
              this.core,
              this.logger,
              this.name,
              this.storagePrefix
            ));
        }
        get context() {
          return Jn(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = Nr("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
        registerRelayerEvents() {
          this.core.relayer.on(Jo, async (e) => {
            const { topic: t, message: r } = e;
            if (
              !this.pairings.keys.includes(t) ||
              this.ignoredPayloadTypes.includes(
                this.core.crypto.getPayloadType(r)
              )
            )
              return;
            const n = await this.core.crypto.decode(t, r);
            try {
              Zi(n)
                ? (this.core.history.set(t, n),
                  this.onRelayEventRequest({ topic: t, payload: n }))
                : es(n) &&
                  (await this.core.history.resolve(n),
                  await this.onRelayEventResponse({ topic: t, payload: n }),
                  this.core.history.delete(t, n.id));
            } catch (i) {
              this.logger.error(i);
            }
          });
        }
        registerExpirerEvents() {
          this.core.expirer.on(Ia, async (e) => {
            const { topic: t } = ar(e.target);
            t &&
              this.pairings.keys.includes(t) &&
              (await this.deletePairing(t, !0),
              this.events.emit(ga, { topic: t }));
          });
        }
      }
      class sc extends ei {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            (this.records = new Map()),
            (this.events = new v.EventEmitter()),
            (this.name = "history"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = Ho),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.records.set(e.id, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.set = (e, t, r) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Setting JSON-RPC request history record"),
                this.logger.trace({
                  type: "method",
                  method: "set",
                  topic: e,
                  request: t,
                  chainId: r,
                }),
                this.records.has(t.id))
              )
                return;
              const n = {
                id: t.id,
                topic: e,
                request: { method: t.method, params: t.params || null },
                chainId: r,
                expiry: cr(gt.THIRTY_DAYS),
              };
              this.records.set(n.id, n), this.events.emit(ma, n);
            }),
            (this.resolve = async (e) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Updating JSON-RPC response history record"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  response: e,
                }),
                !this.records.has(e.id))
              )
                return;
              const t = await this.getRecord(e.id);
              typeof t.response > "u" &&
                ((t.response = rs(e)
                  ? { error: e.error }
                  : { result: e.result }),
                this.records.set(t.id, t),
                this.events.emit(wa, t));
            }),
            (this.get = async (e, t) => (
              this.isInitialized(),
              this.logger.debug("Getting record"),
              this.logger.trace({
                type: "method",
                method: "get",
                topic: e,
                id: t,
              }),
              await this.getRecord(t)
            )),
            (this.delete = (e, t) => {
              this.isInitialized(),
                this.logger.debug("Deleting record"),
                this.logger.trace({ type: "method", method: "delete", id: t }),
                this.values.forEach((r) => {
                  if (r.topic === e) {
                    if (typeof t < "u" && r.id !== t) return;
                    this.records.delete(r.id), this.events.emit(ba, r);
                  }
                });
            }),
            (this.exists = async (e, t) => (
              this.isInitialized(),
              !!this.records.has(t) && (await this.getRecord(t)).topic === e
            )),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = Qn(t, this.name));
        }
        get context() {
          return Jn(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get size() {
          return this.records.size;
        }
        get keys() {
          return Array.from(this.records.keys());
        }
        get values() {
          return Array.from(this.records.values());
        }
        get pending() {
          const e = [];
          return (
            this.values.forEach((t) => {
              if (typeof t.response < "u") return;
              const r = {
                topic: t.topic,
                request: Hi(t.request.method, t.request.params, t.id),
                chainId: t.chainId,
              };
              return e.push(r);
            }),
            e
          );
        }
        async setJsonRpcRecords(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getJsonRpcRecords() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getRecord(e) {
          this.isInitialized();
          const t = this.records.get(e);
          if (!t) {
            const { message: t } = Nr("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(t);
          }
          return t;
        }
        async persist() {
          await this.setJsonRpcRecords(this.values), this.events.emit(_a);
        }
        async restore() {
          try {
            const e = await this.getJsonRpcRecords();
            if (typeof e > "u" || !e.length) return;
            if (this.records.size) {
              const { message: e } = Nr("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), new Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored records for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
              this.logger.error(e);
          }
        }
        registerEventListeners() {
          this.events.on(ma, (e) => {
            const t = ma;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({ type: "event", event: t, record: e }),
              this.persist();
          }),
            this.events.on(wa, (e) => {
              const t = wa;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: e }),
                this.persist();
            }),
            this.events.on(ba, (e) => {
              const t = ba;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: e }),
                this.persist();
            }),
            this.core.heartbeat.on(Ln.HEARTBEAT_EVENTS.pulse, () => {
              this.cleanup();
            });
        }
        cleanup() {
          try {
            this.records.forEach((e) => {
              (0, gt.toMiliseconds)(e.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(`Deleting expired history log: ${e.id}`),
                this.delete(e.topic, e.id));
            });
          } catch (e) {
            this.logger.warn(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = Nr("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class oc extends oi {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            (this.expirations = new Map()),
            (this.events = new v.EventEmitter()),
            (this.name = "expirer"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = Ho),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.expirations.set(e.target, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.has = (e) => {
              try {
                const t = this.formatTarget(e);
                return typeof this.getExpiration(t) < "u";
              } catch {
                return !1;
              }
            }),
            (this.set = (e, t) => {
              this.isInitialized();
              const r = this.formatTarget(e),
                n = { target: r, expiry: t };
              this.expirations.set(r, n),
                this.checkExpiry(r, n),
                this.events.emit(Ea, { target: r, expiration: n });
            }),
            (this.get = (e) => {
              this.isInitialized();
              const t = this.formatTarget(e);
              return this.getExpiration(t);
            }),
            (this.del = (e) => {
              if ((this.isInitialized(), this.has(e))) {
                const t = this.formatTarget(e),
                  r = this.getExpiration(t);
                this.expirations.delete(t),
                  this.events.emit(Sa, { target: t, expiration: r });
              }
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = Qn(t, this.name));
        }
        get context() {
          return Jn(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.expirations.size;
        }
        get keys() {
          return Array.from(this.expirations.keys());
        }
        get values() {
          return Array.from(this.expirations.values());
        }
        formatTarget(e) {
          if ("string" == typeof e)
            return (function (e) {
              return or("topic", e);
            })(e);
          if ("number" == typeof e)
            return (function (e) {
              return or("id", e);
            })(e);
          const { message: t } = Nr("UNKNOWN_TYPE", "Target type: " + typeof e);
          throw new Error(t);
        }
        async setExpirations(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getExpirations() {
          return await this.core.storage.getItem(this.storageKey);
        }
        async persist() {
          await this.setExpirations(this.values), this.events.emit(Pa);
        }
        async restore() {
          try {
            const e = await this.getExpirations();
            if (typeof e > "u" || !e.length) return;
            if (this.expirations.size) {
              const { message: e } = Nr("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), new Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored expirations for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`),
              this.logger.error(e);
          }
        }
        getExpiration(e) {
          const t = this.expirations.get(e);
          if (!t) {
            const { message: t } = Nr("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw (this.logger.error(t), new Error(t));
          }
          return t;
        }
        checkExpiry(e, t) {
          const { expiry: r } = t;
          (0, gt.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t);
        }
        expire(e, t) {
          this.expirations.delete(e),
            this.events.emit(Ia, { target: e, expiration: t });
        }
        checkExpirations() {
          this.core.relayer.connected &&
            this.expirations.forEach((e, t) => this.checkExpiry(t, e));
        }
        registerEventListeners() {
          this.core.heartbeat.on(Ln.HEARTBEAT_EVENTS.pulse, () =>
            this.checkExpirations()
          ),
            this.events.on(Ea, (e) => {
              const t = Ea;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(Ia, (e) => {
              const t = Ia;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(Sa, (e) => {
              const t = Sa;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = Nr("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class ac extends ai {
        constructor(e, t) {
          super(e, t),
            (this.projectId = e),
            (this.logger = t),
            (this.name = Oa),
            (this.initialized = !1),
            (this.queue = []),
            (this.verifyDisabled = !1),
            (this.init = async (e) => {
              if (this.verifyDisabled || Jt() || !Qt()) return;
              const t = this.getVerifyUrl(e?.verifyUrl);
              this.verifyUrl !== t && this.removeIframe(), (this.verifyUrl = t);
              try {
                await this.createIframe();
              } catch (r) {
                this.logger.info(
                  `Verify iframe failed to load: ${this.verifyUrl}`
                ),
                  this.logger.info(r);
              }
              if (!this.initialized) {
                this.removeIframe(), (this.verifyUrl = xa);
                try {
                  await this.createIframe();
                } catch (r) {
                  this.logger.info(
                    `Verify iframe failed to load: ${this.verifyUrl}`
                  ),
                    this.logger.info(r),
                    (this.verifyDisabled = !0);
                }
              }
            }),
            (this.register = async (e) => {
              this.initialized
                ? this.sendPost(e.attestationId)
                : (this.addToQueue(e.attestationId), await this.init());
            }),
            (this.resolve = async (e) => {
              if (this.isDevEnv) return "";
              const t = this.getVerifyUrl(e?.verifyUrl);
              let r;
              try {
                r = await this.fetchAttestation(e.attestationId, t);
              } catch (n) {
                this.logger.info(
                  `failed to resolve attestation: ${e.attestationId} from url: ${t}`
                ),
                  this.logger.info(n),
                  (r = await this.fetchAttestation(e.attestationId, xa));
              }
              return r;
            }),
            (this.fetchAttestation = async (e, t) => {
              this.logger.info(`resolving attestation: ${e} from url: ${t}`);
              const r = this.startAbortTimer(2 * gt.ONE_SECOND),
                n = await fetch(`${t}/attestation/${e}`, {
                  signal: this.abortController.signal,
                });
              return (
                clearTimeout(r), 200 === n.status ? await n.json() : void 0
              );
            }),
            (this.addToQueue = (e) => {
              this.queue.push(e);
            }),
            (this.processQueue = () => {
              0 !== this.queue.length &&
                (this.queue.forEach((e) => this.sendPost(e)),
                (this.queue = []));
            }),
            (this.sendPost = (e) => {
              var t;
              try {
                if (!this.iframe) return;
                null == (t = this.iframe.contentWindow) ||
                  t.postMessage(e, "*"),
                  this.logger.info(`postMessage sent: ${e} ${this.verifyUrl}`);
              } catch {}
            }),
            (this.createIframe = async () => {
              let e;
              const t = (r) => {
                "verify_ready" === r.data &&
                  ((this.initialized = !0),
                  this.processQueue(),
                  window.removeEventListener("message", t),
                  e());
              };
              await Promise.race([
                new Promise((r) => {
                  if (document.getElementById(Oa)) return r();
                  window.addEventListener("message", t);
                  const n = document.createElement("iframe");
                  (n.id = Oa),
                    (n.src = `${this.verifyUrl}/${this.projectId}`),
                    (n.style.display = "none"),
                    document.body.append(n),
                    (this.iframe = n),
                    (e = r);
                }),
                new Promise((e, r) =>
                  setTimeout(() => {
                    window.removeEventListener("message", t),
                      r("verify iframe load timeout");
                  }, (0, gt.toMiliseconds)(gt.FIVE_SECONDS))
                ),
              ]);
            }),
            (this.removeIframe = () => {
              this.iframe &&
                (this.iframe.remove(),
                (this.iframe = void 0),
                (this.initialized = !1));
            }),
            (this.getVerifyUrl = (e) => {
              let t = e || Aa;
              return (
                Ra.includes(t) ||
                  (this.logger.info(
                    `verify url: ${t}, not included in trusted list, assigning default: ${Aa}`
                  ),
                  (t = Aa)),
                t
              );
            }),
            (this.logger = Qn(t, this.name)),
            (this.verifyUrl = Aa),
            (this.abortController = new AbortController()),
            (this.isDevEnv =
              Yt() &&
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
                REACT_APP_WEB_BASE_URL: "https://app.stabilityworld.ai",
                REACT_APP_UNLOCK_COMMINGSOON: "",
                REACT_APP_API_BASE_URL: "https://api.stabilityworld.ai",
                REACT_APP_API: "https://api.stabilityworld.ai/api/app/",
                REACT_APP_GOOGLE_CLIENT_ID:
                  "846996706584-rpl4hgo013g8ojko4qro4nu2uinqqnra.apps.googleusercontent.com",
                REACT_APP_DISCORD_CLIENT_ID: "1253661276383739974",
                REACT_APP_CALLBACK_DISCORD: "https://app.stabilityworld.ai",
                REACT_APP_CALLBACK_GOOGLE: "https://app.stabilityworld.ai",
                REACT_APP_REF_URL: "https://app.stabilityworld.ai",
                REACT_APP_PROJECT_ID: "f9ea16e5a146c0e64bf2832000287c02",
                REACT_APP_TELEGRAM_CALLBACK: "https://app.stabilityworld.ai",
                REACT_APP_TELEGRAM_BOT_ID: "6437228099",
              }.IS_VITEST);
        }
        get context() {
          return Jn(this.logger);
        }
        startAbortTimer(e) {
          return (
            (this.abortController = new AbortController()),
            setTimeout(
              () => this.abortController.abort(),
              (0, gt.toMiliseconds)(e)
            )
          );
        }
      }
      class cc extends ci {
        constructor(e, t) {
          super(e, t),
            (this.projectId = e),
            (this.logger = t),
            (this.context = "echo"),
            (this.registerDeviceToken = async (e) => {
              const {
                  clientId: t,
                  token: r,
                  notificationType: n,
                  enableEncrypted: i = !1,
                } = e,
                s = `https://echo.walletconnect.com/${this.projectId}/clients`;
              await hs()(s, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  client_id: t,
                  type: n,
                  token: r,
                  always_raw: i,
                }),
              });
            }),
            (this.logger = Qn(t, this.context));
        }
      }
      var uc = Object.defineProperty,
        hc = Object.getOwnPropertySymbols,
        lc = Object.prototype.hasOwnProperty,
        fc = Object.prototype.propertyIsEnumerable,
        pc = (e, t, r) =>
          t in e
            ? uc(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        dc = (e, t) => {
          for (var r in t || (t = {})) lc.call(t, r) && pc(e, r, t[r]);
          if (hc) for (var r of hc(t)) fc.call(t, r) && pc(e, r, t[r]);
          return e;
        };
      class gc extends Zn {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = zo),
            (this.events = new v.EventEmitter()),
            (this.initialized = !1),
            (this.on = (e, t) => this.events.on(e, t)),
            (this.once = (e, t) => this.events.once(e, t)),
            (this.off = (e, t) => this.events.off(e, t)),
            (this.removeListener = (e, t) => this.events.removeListener(e, t)),
            (this.projectId = e?.projectId),
            (this.relayUrl = e?.relayUrl || Go),
            (this.customStoragePrefix =
              null != e && e.customStoragePrefix
                ? `:${e.customStoragePrefix}`
                : "");
          const t =
            typeof e?.logger < "u" && "string" != typeof e?.logger
              ? e.logger
              : Dn()(Yn({ level: e?.logger || Bo }));
          (this.logger = Qn(t, this.name)),
            (this.heartbeat = new Ln.HeartBeat()),
            (this.crypto = new Ta(this, this.logger, e?.keychain)),
            (this.history = new sc(this, this.logger)),
            (this.expirer = new oc(this, this.logger)),
            (this.storage =
              null != e && e.storage
                ? e.storage
                : new Un(dc(dc({}, Ko), e?.storageOptions))),
            (this.relayer = new Ja({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new ic(this, this.logger)),
            (this.verify = new ac(this.projectId || "", this.logger)),
            (this.echoClient = new cc(this.projectId || "", this.logger));
        }
        static async init(e) {
          const t = new gc(e);
          await t.initialize();
          const r = await t.crypto.getClientId();
          return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", r), t;
        }
        get context() {
          return Jn(this.logger);
        }
        async start() {
          this.initialized || (await this.initialize());
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.crypto.init(),
              await this.history.init(),
              await this.expirer.init(),
              await this.relayer.init(),
              await this.heartbeat.init(),
              await this.pairing.init(),
              (this.initialized = !0),
              this.logger.info("Core Initialization Success");
          } catch (e) {
            throw (
              (this.logger.warn(
                `Core Initialization Failure at epoch ${Date.now()}`,
                e
              ),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
      const yc = gc,
        vc = "client",
        mc = `wc@2:${vc}:`,
        wc = vc,
        bc = "error",
        _c = "WALLETCONNECT_DEEPLINK_CHOICE",
        Ec = "Proposal expired",
        Sc = gt.SEVEN_DAYS,
        Ic = {
          wc_sessionPropose: {
            req: { ttl: gt.FIVE_MINUTES, prompt: !0, tag: 1100 },
            res: { ttl: gt.FIVE_MINUTES, prompt: !1, tag: 1101 },
          },
          wc_sessionSettle: {
            req: { ttl: gt.FIVE_MINUTES, prompt: !1, tag: 1102 },
            res: { ttl: gt.FIVE_MINUTES, prompt: !1, tag: 1103 },
          },
          wc_sessionUpdate: {
            req: { ttl: gt.ONE_DAY, prompt: !1, tag: 1104 },
            res: { ttl: gt.ONE_DAY, prompt: !1, tag: 1105 },
          },
          wc_sessionExtend: {
            req: { ttl: gt.ONE_DAY, prompt: !1, tag: 1106 },
            res: { ttl: gt.ONE_DAY, prompt: !1, tag: 1107 },
          },
          wc_sessionRequest: {
            req: { ttl: gt.FIVE_MINUTES, prompt: !0, tag: 1108 },
            res: { ttl: gt.FIVE_MINUTES, prompt: !1, tag: 1109 },
          },
          wc_sessionEvent: {
            req: { ttl: gt.FIVE_MINUTES, prompt: !0, tag: 1110 },
            res: { ttl: gt.FIVE_MINUTES, prompt: !1, tag: 1111 },
          },
          wc_sessionDelete: {
            req: { ttl: gt.ONE_DAY, prompt: !1, tag: 1112 },
            res: { ttl: gt.ONE_DAY, prompt: !1, tag: 1113 },
          },
          wc_sessionPing: {
            req: { ttl: gt.THIRTY_SECONDS, prompt: !1, tag: 1114 },
            res: { ttl: gt.THIRTY_SECONDS, prompt: !1, tag: 1115 },
          },
        },
        Pc = { min: gt.FIVE_MINUTES, max: gt.SEVEN_DAYS },
        Oc = "IDLE",
        Ac = "ACTIVE",
        xc = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
      var Rc = Object.defineProperty,
        Nc = Object.defineProperties,
        Tc = Object.getOwnPropertyDescriptors,
        Cc = Object.getOwnPropertySymbols,
        jc = Object.prototype.hasOwnProperty,
        Uc = Object.prototype.propertyIsEnumerable,
        Lc = (e, t, r) =>
          t in e
            ? Rc(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Mc = (e, t) => {
          for (var r in t || (t = {})) jc.call(t, r) && Lc(e, r, t[r]);
          if (Cc) for (var r of Cc(t)) Uc.call(t, r) && Lc(e, r, t[r]);
          return e;
        },
        Dc = (e, t) => Nc(e, Tc(t));
      class kc extends hi {
        constructor(e) {
          var t;
          super(e),
            (t = this),
            (this.name = "engine"),
            (this.events = new (m())()),
            (this.initialized = !1),
            (this.ignoredPayloadTypes = [xt]),
            (this.requestQueue = { state: Oc, queue: [] }),
            (this.sessionRequestQueue = { state: Oc, queue: [] }),
            (this.requestQueueDelay = gt.ONE_SECOND),
            (this.init = async () => {
              this.initialized ||
                (await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                this.registerPairingEvents(),
                this.client.core.pairing.register({ methods: Object.keys(Ic) }),
                (this.initialized = !0),
                setTimeout(() => {
                  (this.sessionRequestQueue.queue =
                    this.getPendingSessionRequests()),
                    this.processSessionRequestQueue();
                }, (0, gt.toMiliseconds)(this.requestQueueDelay)));
            }),
            (this.connect = async (e) => {
              await this.isInitialized();
              const t = Dc(Mc({}, e), {
                requiredNamespaces: e.requiredNamespaces || {},
                optionalNamespaces: e.optionalNamespaces || {},
              });
              await this.isValidConnect(t);
              const {
                pairingTopic: r,
                requiredNamespaces: n,
                optionalNamespaces: i,
                sessionProperties: s,
                relays: o,
              } = t;
              let a,
                c = r,
                u = !1;
              if (
                (c && (u = this.client.core.pairing.pairings.get(c).active),
                !c || !u)
              ) {
                const { topic: e, uri: t } =
                  await this.client.core.pairing.create();
                (c = e), (a = t);
              }
              const h = await this.client.core.crypto.generateKeyPair(),
                l = Ic.wc_sessionPropose.req.ttl || gt.FIVE_MINUTES,
                f = cr(l),
                p = Mc(
                  {
                    requiredNamespaces: n,
                    optionalNamespaces: i,
                    relays: o ?? [{ protocol: "irn" }],
                    proposer: { publicKey: h, metadata: this.client.metadata },
                    expiryTimestamp: f,
                  },
                  s && { sessionProperties: s }
                ),
                { reject: d, resolve: g, done: y } = ir(l, Ec);
              if (
                (this.events.once(hr("session_connect"), async (e) => {
                  let { error: t, session: r } = e;
                  if (t) d(t);
                  else if (r) {
                    r.self.publicKey = h;
                    const e = Dc(Mc({}, r), {
                      requiredNamespaces: p.requiredNamespaces,
                      optionalNamespaces: p.optionalNamespaces,
                    });
                    await this.client.session.set(r.topic, e),
                      await this.setExpiry(r.topic, r.expiry),
                      c &&
                        (await this.client.core.pairing.updateMetadata({
                          topic: c,
                          metadata: r.peer.metadata,
                        })),
                      g(e);
                  }
                }),
                !c)
              ) {
                const { message: e } = Nr(
                  "NO_MATCHING_KEY",
                  `connect() pairing topic: ${c}`
                );
                throw new Error(e);
              }
              const v = await this.sendRequest({
                topic: c,
                method: "wc_sessionPropose",
                params: p,
                throwOnFailedPublish: !0,
              });
              return (
                await this.setProposal(v, Mc({ id: v }, p)),
                { uri: a, approval: y }
              );
            }),
            (this.pair = async (e) => (
              await this.isInitialized(), await this.client.core.pairing.pair(e)
            )),
            (this.approve = async (e) => {
              await this.isInitialized(), await this.isValidApprove(e);
              const {
                  id: t,
                  relayProtocol: r,
                  namespaces: n,
                  sessionProperties: i,
                } = e,
                s = this.client.proposal.get(t);
              let {
                pairingTopic: o,
                proposer: a,
                requiredNamespaces: c,
                optionalNamespaces: u,
              } = s;
              o = o || "";
              const h = await this.client.core.crypto.generateKeyPair(),
                l = a.publicKey,
                f = await this.client.core.crypto.generateSharedKey(h, l);
              o &&
                t &&
                (await this.client.core.pairing.updateMetadata({
                  topic: o,
                  metadata: a.metadata,
                }),
                await this.sendResult({
                  id: t,
                  topic: o,
                  result: {
                    relay: { protocol: r ?? "irn" },
                    responderPublicKey: h,
                  },
                }),
                await this.client.proposal.delete(t, Tr("USER_DISCONNECTED")),
                await this.client.core.pairing.activate({ topic: o }));
              const p = Mc(
                {
                  relay: { protocol: r ?? "irn" },
                  namespaces: n,
                  pairingTopic: o,
                  controller: { publicKey: h, metadata: this.client.metadata },
                  expiry: cr(Sc),
                },
                i && { sessionProperties: i }
              );
              await this.client.core.relayer.subscribe(f);
              const d = Dc(Mc({}, p), {
                topic: f,
                requiredNamespaces: c,
                optionalNamespaces: u,
                pairingTopic: o,
                acknowledged: !1,
                self: p.controller,
                peer: { publicKey: a.publicKey, metadata: a.metadata },
                controller: h,
              });
              await this.client.session.set(f, d);
              try {
                await this.sendRequest({
                  topic: f,
                  method: "wc_sessionSettle",
                  params: p,
                  throwOnFailedPublish: !0,
                });
              } catch (tr) {
                throw (
                  (this.client.logger.error(tr),
                  this.client.session.delete(f, Tr("USER_DISCONNECTED")),
                  await this.client.core.relayer.unsubscribe(f),
                  tr)
                );
              }
              return (
                await this.setExpiry(f, cr(Sc)),
                {
                  topic: f,
                  acknowledged: () =>
                    new Promise((e) =>
                      setTimeout(() => e(this.client.session.get(f)), 500)
                    ),
                }
              );
            }),
            (this.reject = async (e) => {
              await this.isInitialized(), await this.isValidReject(e);
              const { id: t, reason: r } = e,
                { pairingTopic: n } = this.client.proposal.get(t);
              n &&
                (await this.sendError(t, n, r),
                await this.client.proposal.delete(t, Tr("USER_DISCONNECTED")));
            }),
            (this.update = async (e) => {
              await this.isInitialized(), await this.isValidUpdate(e);
              const { topic: t, namespaces: r } = e,
                n = await this.sendRequest({
                  topic: t,
                  method: "wc_sessionUpdate",
                  params: { namespaces: r },
                }),
                { done: i, resolve: s, reject: o } = ir();
              return (
                this.events.once(hr("session_update", n), (e) => {
                  let { error: t } = e;
                  t ? o(t) : s();
                }),
                await this.client.session.update(t, { namespaces: r }),
                { acknowledged: i }
              );
            }),
            (this.extend = async (e) => {
              await this.isInitialized(), await this.isValidExtend(e);
              const { topic: t } = e,
                r = await this.sendRequest({
                  topic: t,
                  method: "wc_sessionExtend",
                  params: {},
                }),
                { done: n, resolve: i, reject: s } = ir();
              return (
                this.events.once(hr("session_extend", r), (e) => {
                  let { error: t } = e;
                  t ? s(t) : i();
                }),
                await this.setExpiry(t, cr(Sc)),
                { acknowledged: n }
              );
            }),
            (this.request = async (t) => {
              await this.isInitialized(), await this.isValidRequest(t);
              const {
                  chainId: n,
                  request: i,
                  topic: s,
                  expiry: o = Ic.wc_sessionRequest.req.ttl,
                } = t,
                a = $i(),
                {
                  done: c,
                  resolve: u,
                  reject: h,
                } = ir(o, "Request expired. Please try again.");
              return (
                this.events.once(hr("session_request", a), (e) => {
                  let { error: t, result: r } = e;
                  t ? h(t) : u(r);
                }),
                await Promise.all([
                  new Promise(async (e) => {
                    await this.sendRequest({
                      clientRpcId: a,
                      topic: s,
                      method: "wc_sessionRequest",
                      params: {
                        request: Dc(Mc({}, i), { expiryTimestamp: cr(o) }),
                        chainId: n,
                      },
                      expiry: o,
                      throwOnFailedPublish: !0,
                    }).catch((e) => h(e)),
                      this.client.events.emit("session_request_sent", {
                        topic: s,
                        request: i,
                        chainId: n,
                        id: a,
                      }),
                      e();
                  }),
                  new Promise(async (t) => {
                    const n = await (async function (e, t) {
                      try {
                        return (
                          (await e.getItem(t)) ||
                          (Qt() ? localStorage.getItem(t) : void 0)
                        );
                      } catch (i) {
                        console.error(i);
                      }
                    })(this.client.core.storage, _c);
                    (async function (t) {
                      let { id: n, topic: i, wcDeepLink: s } = t;
                      try {
                        if (!s) return;
                        const e = "string" == typeof s ? JSON.parse(s) : s;
                        let t = e?.href;
                        if ("string" != typeof t) return;
                        t.endsWith("/") && (t = t.slice(0, -1));
                        const o = `${t}/wc?requestId=${n}&sessionTopic=${i}`,
                          a = Xt();
                        a === Wt.browser
                          ? o.startsWith("https://")
                            ? window.open(o, "_blank", "noreferrer noopener")
                            : window.open(o, "_self", "noreferrer noopener")
                          : a === Wt.reactNative &&
                            typeof (null == r.g ? void 0 : r.g.Linking) < "u" &&
                            (await r.g.Linking.openURL(o));
                      } catch (e) {
                        console.error(e);
                      }
                    })({ id: a, topic: s, wcDeepLink: n }),
                      t();
                  }),
                  c(),
                ]).then((e) => e[2])
              );
            }),
            (this.respond = async (e) => {
              await this.isInitialized(), await this.isValidRespond(e);
              const { topic: t, response: r } = e,
                { id: n } = r;
              ts(r)
                ? await this.sendResult({
                    id: n,
                    topic: t,
                    result: r.result,
                    throwOnFailedPublish: !0,
                  })
                : rs(r) && (await this.sendError(n, t, r.error)),
                this.cleanupAfterResponse(e);
            }),
            (this.ping = async (e) => {
              await this.isInitialized(), await this.isValidPing(e);
              const { topic: t } = e;
              if (this.client.session.keys.includes(t)) {
                const e = await this.sendRequest({
                    topic: t,
                    method: "wc_sessionPing",
                    params: {},
                  }),
                  { done: r, resolve: n, reject: i } = ir();
                this.events.once(hr("session_ping", e), (e) => {
                  let { error: t } = e;
                  t ? i(t) : n();
                }),
                  await r();
              } else
                this.client.core.pairing.pairings.keys.includes(t) &&
                  (await this.client.core.pairing.ping({ topic: t }));
            }),
            (this.emit = async (e) => {
              await this.isInitialized(), await this.isValidEmit(e);
              const { topic: t, event: r, chainId: n } = e;
              await this.sendRequest({
                topic: t,
                method: "wc_sessionEvent",
                params: { event: r, chainId: n },
              });
            }),
            (this.disconnect = async (e) => {
              await this.isInitialized(), await this.isValidDisconnect(e);
              const { topic: t } = e;
              if (this.client.session.keys.includes(t))
                await this.sendRequest({
                  topic: t,
                  method: "wc_sessionDelete",
                  params: Tr("USER_DISCONNECTED"),
                  throwOnFailedPublish: !0,
                }),
                  await this.deleteSession({ topic: t, emitEvent: !1 });
              else {
                if (!this.client.core.pairing.pairings.keys.includes(t)) {
                  const { message: e } = Nr(
                    "MISMATCHED_TOPIC",
                    `Session or pairing topic not found: ${t}`
                  );
                  throw new Error(e);
                }
                await this.client.core.pairing.disconnect({ topic: t });
              }
            }),
            (this.find = (e) => (
              this.isInitialized(),
              this.client.session.getAll().filter((t) =>
                (function (e, t) {
                  const { requiredNamespaces: r } = t,
                    n = Object.keys(e.namespaces),
                    i = Object.keys(r);
                  let s = !0;
                  return (
                    !!tr(i, n) &&
                    (n.forEach((t) => {
                      const {
                          accounts: n,
                          methods: i,
                          events: o,
                        } = e.namespaces[t],
                        a = Pr(n),
                        c = r[t];
                      (!tr(Et(t, c), a) ||
                        !tr(c.methods, i) ||
                        !tr(c.events, o)) &&
                        (s = !1);
                    }),
                    s)
                  );
                })(t, e)
              )
            )),
            (this.getPendingSessionRequests = () =>
              this.client.pendingRequest.getAll()),
            (this.cleanupDuplicatePairings = async (e) => {
              if (e.pairingTopic)
                try {
                  const t = this.client.core.pairing.pairings.get(
                      e.pairingTopic
                    ),
                    r = this.client.core.pairing.pairings
                      .getAll()
                      .filter((r) => {
                        var n, i;
                        return (
                          (null == (n = r.peerMetadata) ? void 0 : n.url) &&
                          (null == (i = r.peerMetadata) ? void 0 : i.url) ===
                            e.peer.metadata.url &&
                          r.topic &&
                          r.topic !== t.topic
                        );
                      });
                  if (0 === r.length) return;
                  this.client.logger.info(
                    `Cleaning up ${r.length} duplicate pairing(s)`
                  ),
                    await Promise.all(
                      r.map((e) =>
                        this.client.core.pairing.disconnect({ topic: e.topic })
                      )
                    ),
                    this.client.logger.info(
                      "Duplicate pairings clean up finished"
                    );
                } catch (t) {
                  this.client.logger.error(t);
                }
            }),
            (this.deleteSession = async (e) => {
              const {
                  topic: t,
                  expirerHasDeleted: r = !1,
                  emitEvent: n = !0,
                  id: i = 0,
                } = e,
                { self: s } = this.client.session.get(t);
              await this.client.core.relayer.unsubscribe(t),
                await this.client.session.delete(t, Tr("USER_DISCONNECTED")),
                this.client.core.crypto.keychain.has(s.publicKey) &&
                  (await this.client.core.crypto.deleteKeyPair(s.publicKey)),
                this.client.core.crypto.keychain.has(t) &&
                  (await this.client.core.crypto.deleteSymKey(t)),
                r || this.client.core.expirer.del(t),
                this.client.core.storage
                  .removeItem(_c)
                  .catch((e) => this.client.logger.warn(e)),
                this.getPendingSessionRequests().forEach((e) => {
                  e.topic === t &&
                    this.deletePendingSessionRequest(
                      e.id,
                      Tr("USER_DISCONNECTED")
                    );
                }),
                n &&
                  this.client.events.emit("session_delete", {
                    id: i,
                    topic: t,
                  });
            }),
            (this.deleteProposal = async (e, t) => {
              await Promise.all([
                this.client.proposal.delete(e, Tr("USER_DISCONNECTED")),
                t ? Promise.resolve() : this.client.core.expirer.del(e),
              ]);
            }),
            (this.deletePendingSessionRequest = async function (e, r) {
              let n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              await Promise.all([
                t.client.pendingRequest.delete(e, r),
                n ? Promise.resolve() : t.client.core.expirer.del(e),
              ]),
                (t.sessionRequestQueue.queue =
                  t.sessionRequestQueue.queue.filter((t) => t.id !== e)),
                n &&
                  ((t.sessionRequestQueue.state = Oc),
                  t.client.events.emit("session_request_expire", { id: e }));
            }),
            (this.setExpiry = async (e, t) => {
              this.client.session.keys.includes(e) &&
                (await this.client.session.update(e, { expiry: t })),
                this.client.core.expirer.set(e, t);
            }),
            (this.setProposal = async (e, t) => {
              await this.client.proposal.set(e, t),
                this.client.core.expirer.set(
                  e,
                  cr(Ic.wc_sessionPropose.req.ttl)
                );
            }),
            (this.setPendingSessionRequest = async (e) => {
              const { id: t, topic: r, params: n, verifyContext: i } = e,
                s =
                  n.request.expiryTimestamp || cr(Ic.wc_sessionRequest.req.ttl);
              await this.client.pendingRequest.set(t, {
                id: t,
                topic: r,
                params: n,
                verifyContext: i,
              }),
                s && this.client.core.expirer.set(t, s);
            }),
            (this.sendRequest = async (e) => {
              const {
                  topic: t,
                  method: r,
                  params: n,
                  expiry: i,
                  relayRpcId: s,
                  clientRpcId: o,
                  throwOnFailedPublish: a,
                } = e,
                c = Hi(r, n, o);
              if (Qt() && xc.includes(r)) {
                const e = Ut(JSON.stringify(c));
                this.client.core.verify.register({ attestationId: e });
              }
              const u = await this.client.core.crypto.encode(t, c),
                h = Ic[r].req;
              return (
                i && (h.ttl = i),
                s && (h.id = s),
                this.client.core.history.set(t, c),
                a
                  ? ((h.internal = Dc(Mc({}, h.internal), {
                      throwOnFailedPublish: !0,
                    })),
                    await this.client.core.relayer.publish(t, u, h))
                  : this.client.core.relayer
                      .publish(t, u, h)
                      .catch((e) => this.client.logger.error(e)),
                c.id
              );
            }),
            (this.sendResult = async (e) => {
              const { id: t, topic: r, result: n, throwOnFailedPublish: i } = e,
                s = Bi(t, n),
                o = await this.client.core.crypto.encode(r, s),
                a = await this.client.core.history.get(r, t),
                c = Ic[a.request.method].res;
              i
                ? ((c.internal = Dc(Mc({}, c.internal), {
                    throwOnFailedPublish: !0,
                  })),
                  await this.client.core.relayer.publish(r, o, c))
                : this.client.core.relayer
                    .publish(r, o, c)
                    .catch((e) => this.client.logger.error(e)),
                await this.client.core.history.resolve(s);
            }),
            (this.sendError = async (e, t, r) => {
              const n = Ki(e, r),
                i = await this.client.core.crypto.encode(t, n),
                s = await this.client.core.history.get(t, e),
                o = Ic[s.request.method].res;
              this.client.core.relayer.publish(t, i, o),
                await this.client.core.history.resolve(n);
            }),
            (this.cleanup = async () => {
              const e = [],
                t = [];
              this.client.session.getAll().forEach((t) => {
                let r = !1;
                ur(t.expiry) && (r = !0),
                  this.client.core.crypto.keychain.has(t.topic) || (r = !0),
                  r && e.push(t.topic);
              }),
                this.client.proposal.getAll().forEach((e) => {
                  ur(e.expiryTimestamp) && t.push(e.id);
                }),
                await Promise.all([
                  ...e.map((e) => this.deleteSession({ topic: e })),
                  ...t.map((e) => this.deleteProposal(e)),
                ]);
            }),
            (this.onRelayEventRequest = async (e) => {
              this.requestQueue.queue.push(e),
                await this.processRequestsQueue();
            }),
            (this.processRequestsQueue = async () => {
              if (this.requestQueue.state !== Ac) {
                for (
                  this.client.logger.info(
                    `Request queue starting with ${this.requestQueue.queue.length} requests`
                  );
                  this.requestQueue.queue.length > 0;

                ) {
                  this.requestQueue.state = Ac;
                  const t = this.requestQueue.queue.shift();
                  if (t)
                    try {
                      this.processRequest(t),
                        await new Promise((e) => setTimeout(e, 300));
                    } catch (e) {
                      this.client.logger.warn(e);
                    }
                }
                this.requestQueue.state = Oc;
              } else
                this.client.logger.info(
                  "Request queue already active, skipping..."
                );
            }),
            (this.processRequest = (e) => {
              const { topic: t, payload: r } = e,
                n = r.method;
              switch (n) {
                case "wc_sessionPropose":
                  return this.onSessionProposeRequest(t, r);
                case "wc_sessionSettle":
                  return this.onSessionSettleRequest(t, r);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateRequest(t, r);
                case "wc_sessionExtend":
                  return this.onSessionExtendRequest(t, r);
                case "wc_sessionPing":
                  return this.onSessionPingRequest(t, r);
                case "wc_sessionDelete":
                  return this.onSessionDeleteRequest(t, r);
                case "wc_sessionRequest":
                  return this.onSessionRequest(t, r);
                case "wc_sessionEvent":
                  return this.onSessionEventRequest(t, r);
                default:
                  return this.client.logger.info(
                    `Unsupported request method ${n}`
                  );
              }
            }),
            (this.onRelayEventResponse = async (e) => {
              const { topic: t, payload: r } = e,
                n = (await this.client.core.history.get(t, r.id)).request
                  .method;
              switch (n) {
                case "wc_sessionPropose":
                  return this.onSessionProposeResponse(t, r);
                case "wc_sessionSettle":
                  return this.onSessionSettleResponse(t, r);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateResponse(t, r);
                case "wc_sessionExtend":
                  return this.onSessionExtendResponse(t, r);
                case "wc_sessionPing":
                  return this.onSessionPingResponse(t, r);
                case "wc_sessionRequest":
                  return this.onSessionRequestResponse(t, r);
                default:
                  return this.client.logger.info(
                    `Unsupported response method ${n}`
                  );
              }
            }),
            (this.onRelayEventUnknownPayload = (e) => {
              const { topic: t } = e,
                { message: r } = Nr(
                  "MISSING_OR_INVALID",
                  `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`
                );
              throw new Error(r);
            }),
            (this.onSessionProposeRequest = async (e, t) => {
              const { params: r, id: n } = t;
              try {
                this.isValidConnect(Mc({}, t.params));
                const i = r.expiryTimestamp || cr(Ic.wc_sessionPropose.req.ttl),
                  s = Mc({ id: n, pairingTopic: e, expiryTimestamp: i }, r);
                await this.setProposal(n, s);
                const o = Ut(JSON.stringify(t)),
                  a = await this.getVerifyContext(o, s.proposer.metadata);
                this.client.events.emit("session_proposal", {
                  id: n,
                  params: s,
                  verifyContext: a,
                });
              } catch (qn) {
                await this.sendError(n, e, qn), this.client.logger.error(qn);
              }
            }),
            (this.onSessionProposeResponse = async (e, t) => {
              const { id: r } = t;
              if (ts(t)) {
                const { result: n } = t;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  result: n,
                });
                const i = this.client.proposal.get(r);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  proposal: i,
                });
                const s = i.proposer.publicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  selfPublicKey: s,
                });
                const o = n.responderPublicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  peerPublicKey: o,
                });
                const a = await this.client.core.crypto.generateSharedKey(s, o);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  sessionTopic: a,
                });
                const c = await this.client.core.relayer.subscribe(a);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  subscriptionId: c,
                }),
                  await this.client.core.pairing.activate({ topic: e });
              } else
                rs(t) &&
                  (await this.client.proposal.delete(
                    r,
                    Tr("USER_DISCONNECTED")
                  ),
                  this.events.emit(hr("session_connect"), { error: t.error }));
            }),
            (this.onSessionSettleRequest = async (e, t) => {
              const { id: r, params: n } = t;
              try {
                this.isValidSessionSettleRequest(n);
                const {
                    relay: r,
                    controller: i,
                    expiry: s,
                    namespaces: o,
                    sessionProperties: a,
                    pairingTopic: c,
                  } = t.params,
                  u = Mc(
                    {
                      topic: e,
                      relay: r,
                      expiry: s,
                      namespaces: o,
                      acknowledged: !0,
                      pairingTopic: c,
                      requiredNamespaces: {},
                      optionalNamespaces: {},
                      controller: i.publicKey,
                      self: { publicKey: "", metadata: this.client.metadata },
                      peer: { publicKey: i.publicKey, metadata: i.metadata },
                    },
                    a && { sessionProperties: a }
                  );
                await this.sendResult({ id: t.id, topic: e, result: !0 }),
                  this.events.emit(hr("session_connect"), { session: u }),
                  this.cleanupDuplicatePairings(u);
              } catch (qn) {
                await this.sendError(r, e, qn), this.client.logger.error(qn);
              }
            }),
            (this.onSessionSettleResponse = async (e, t) => {
              const { id: r } = t;
              ts(t)
                ? (await this.client.session.update(e, { acknowledged: !0 }),
                  this.events.emit(hr("session_approve", r), {}))
                : rs(t) &&
                  (await this.client.session.delete(e, Tr("USER_DISCONNECTED")),
                  this.events.emit(hr("session_approve", r), {
                    error: t.error,
                  }));
            }),
            (this.onSessionUpdateRequest = async (e, t) => {
              const { params: r, id: n } = t;
              try {
                const t = `${e}_session_update`,
                  i = Zr.get(t);
                if (i && this.isRequestOutOfSync(i, n))
                  return void this.client.logger.info(
                    `Discarding out of sync request - ${n}`
                  );
                this.isValidUpdate(Mc({ topic: e }, r)),
                  await this.client.session.update(e, {
                    namespaces: r.namespaces,
                  }),
                  await this.sendResult({ id: n, topic: e, result: !0 }),
                  this.client.events.emit("session_update", {
                    id: n,
                    topic: e,
                    params: r,
                  }),
                  Zr.set(t, n);
              } catch (qn) {
                await this.sendError(n, e, qn), this.client.logger.error(qn);
              }
            }),
            (this.isRequestOutOfSync = (e, t) =>
              parseInt(t.toString().slice(0, -3)) <=
              parseInt(e.toString().slice(0, -3))),
            (this.onSessionUpdateResponse = (e, t) => {
              const { id: r } = t;
              ts(t)
                ? this.events.emit(hr("session_update", r), {})
                : rs(t) &&
                  this.events.emit(hr("session_update", r), { error: t.error });
            }),
            (this.onSessionExtendRequest = async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidExtend({ topic: e }),
                  await this.setExpiry(e, cr(Sc)),
                  await this.sendResult({ id: r, topic: e, result: !0 }),
                  this.client.events.emit("session_extend", {
                    id: r,
                    topic: e,
                  });
              } catch (Wn) {
                await this.sendError(r, e, Wn), this.client.logger.error(Wn);
              }
            }),
            (this.onSessionExtendResponse = (e, t) => {
              const { id: r } = t;
              ts(t)
                ? this.events.emit(hr("session_extend", r), {})
                : rs(t) &&
                  this.events.emit(hr("session_extend", r), { error: t.error });
            }),
            (this.onSessionPingRequest = async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult({ id: r, topic: e, result: !0 }),
                  this.client.events.emit("session_ping", { id: r, topic: e });
              } catch (Wn) {
                await this.sendError(r, e, Wn), this.client.logger.error(Wn);
              }
            }),
            (this.onSessionPingResponse = (e, t) => {
              const { id: r } = t;
              setTimeout(() => {
                ts(t)
                  ? this.events.emit(hr("session_ping", r), {})
                  : rs(t) &&
                    this.events.emit(hr("session_ping", r), { error: t.error });
              }, 500);
            }),
            (this.onSessionDeleteRequest = async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e, reason: t.params }),
                  await Promise.all([
                    new Promise((t) => {
                      this.client.core.relayer.once(ra, async () => {
                        t(await this.deleteSession({ topic: e, id: r }));
                      });
                    }),
                    this.sendResult({ id: r, topic: e, result: !0 }),
                    this.cleanupPendingSentRequestsForTopic({
                      topic: e,
                      error: Tr("USER_DISCONNECTED"),
                    }),
                  ]);
              } catch (Wn) {
                this.client.logger.error(Wn);
              }
            }),
            (this.onSessionRequest = async (e, t) => {
              const { id: r, params: n } = t;
              try {
                this.isValidRequest(Mc({ topic: e }, n));
                const t = Ut(JSON.stringify(Hi("wc_sessionRequest", n, r))),
                  i = this.client.session.get(e),
                  s = {
                    id: r,
                    topic: e,
                    params: n,
                    verifyContext: await this.getVerifyContext(
                      t,
                      i.peer.metadata
                    ),
                  };
                await this.setPendingSessionRequest(s),
                  this.addSessionRequestToSessionRequestQueue(s),
                  this.processSessionRequestQueue();
              } catch (qn) {
                await this.sendError(r, e, qn), this.client.logger.error(qn);
              }
            }),
            (this.onSessionRequestResponse = (e, t) => {
              const { id: r } = t;
              ts(t)
                ? this.events.emit(hr("session_request", r), {
                    result: t.result,
                  })
                : rs(t) &&
                  this.events.emit(hr("session_request", r), {
                    error: t.error,
                  });
            }),
            (this.onSessionEventRequest = async (e, t) => {
              const { id: r, params: n } = t;
              try {
                const t = `${e}_session_event_${n.event.name}`,
                  i = Zr.get(t);
                if (i && this.isRequestOutOfSync(i, r))
                  return void this.client.logger.info(
                    `Discarding out of sync request - ${r}`
                  );
                this.isValidEmit(Mc({ topic: e }, n)),
                  this.client.events.emit("session_event", {
                    id: r,
                    topic: e,
                    params: n,
                  }),
                  Zr.set(t, r);
              } catch (qn) {
                await this.sendError(r, e, qn), this.client.logger.error(qn);
              }
            }),
            (this.addSessionRequestToSessionRequestQueue = (e) => {
              this.sessionRequestQueue.queue.push(e);
            }),
            (this.cleanupAfterResponse = (e) => {
              this.deletePendingSessionRequest(e.response.id, {
                message: "fulfilled",
                code: 0,
              }),
                setTimeout(() => {
                  (this.sessionRequestQueue.state = Oc),
                    this.processSessionRequestQueue();
                }, (0, gt.toMiliseconds)(this.requestQueueDelay));
            }),
            (this.cleanupPendingSentRequestsForTopic = (e) => {
              let { topic: t, error: r } = e;
              const n = this.client.core.history.pending;
              n.length > 0 &&
                n
                  .filter(
                    (e) =>
                      e.topic === t && "wc_sessionRequest" === e.request.method
                  )
                  .forEach((e) => {
                    this.events.emit(hr("session_request", e.request.id), {
                      error: r,
                    });
                  });
            }),
            (this.processSessionRequestQueue = () => {
              if (this.sessionRequestQueue.state === Ac)
                return void this.client.logger.info(
                  "session request queue is already active."
                );
              const e = this.sessionRequestQueue.queue[0];
              if (e)
                try {
                  (this.sessionRequestQueue.state = Ac),
                    this.client.events.emit("session_request", e);
                } catch (t) {
                  this.client.logger.error(t);
                }
              else this.client.logger.info("session request queue is empty.");
            }),
            (this.onPairingCreated = (e) => {
              if (e.active) return;
              const t = this.client.proposal
                .getAll()
                .find((t) => t.pairingTopic === e.topic);
              t &&
                this.onSessionProposeRequest(
                  e.topic,
                  Hi(
                    "wc_sessionPropose",
                    {
                      requiredNamespaces: t.requiredNamespaces,
                      optionalNamespaces: t.optionalNamespaces,
                      relays: t.relays,
                      proposer: t.proposer,
                      sessionProperties: t.sessionProperties,
                    },
                    t.id
                  )
                );
            }),
            (this.isValidConnect = async (e) => {
              if (!Kr(e)) {
                const { message: t } = Nr(
                  "MISSING_OR_INVALID",
                  `connect() params: ${JSON.stringify(e)}`
                );
                throw new Error(t);
              }
              const {
                pairingTopic: t,
                requiredNamespaces: r,
                optionalNamespaces: n,
                sessionProperties: i,
                relays: s,
              } = e;
              if (
                (Ur(t) || (await this.isValidPairingTopic(t)),
                !(function (e, t) {
                  let r = !1;
                  return (
                    t && !e
                      ? (r = !0)
                      : e &&
                        Cr(e) &&
                        e.length &&
                        e.forEach((e) => {
                          r = Br(e);
                        }),
                    r
                  );
                })(s, !0))
              ) {
                const { message: e } = Nr(
                  "MISSING_OR_INVALID",
                  `connect() relays: ${s}`
                );
                throw new Error(e);
              }
              !Ur(r) &&
                0 !== jr(r) &&
                this.validateNamespaces(r, "requiredNamespaces"),
                !Ur(n) &&
                  0 !== jr(n) &&
                  this.validateNamespaces(n, "optionalNamespaces"),
                Ur(i) || this.validateSessionProps(i, "sessionProperties");
            }),
            (this.validateNamespaces = (e, t) => {
              const r = (function (e, t, r) {
                let n = null;
                if (e && jr(e)) {
                  const i = zr(e, t);
                  i && (n = i);
                  const s = qr(e, t, r);
                  s && (n = s);
                } else
                  n = Nr(
                    "MISSING_OR_INVALID",
                    `${t}, ${r} should be an object with data`
                  );
                return n;
              })(e, "connect()", t);
              if (r) throw new Error(r.message);
            }),
            (this.isValidApprove = async (e) => {
              if (!Kr(e))
                throw new Error(
                  Nr("MISSING_OR_INVALID", `approve() params: ${e}`).message
                );
              const {
                id: t,
                namespaces: r,
                relayProtocol: n,
                sessionProperties: i,
              } = e;
              await this.isValidProposalId(t);
              const s = this.client.proposal.get(t),
                o = Hr(r, "approve()");
              if (o) throw new Error(o.message);
              const a = Gr(s.requiredNamespaces, r, "approve()");
              if (a) throw new Error(a.message);
              if (!Lr(n, !0)) {
                const { message: e } = Nr(
                  "MISSING_OR_INVALID",
                  `approve() relayProtocol: ${n}`
                );
                throw new Error(e);
              }
              Ur(i) || this.validateSessionProps(i, "sessionProperties");
            }),
            (this.isValidReject = async (e) => {
              if (!Kr(e)) {
                const { message: t } = Nr(
                  "MISSING_OR_INVALID",
                  `reject() params: ${e}`
                );
                throw new Error(t);
              }
              const { id: t, reason: r } = e;
              if (
                (await this.isValidProposalId(t),
                !(function (e) {
                  return !(
                    !e ||
                    "object" != typeof e ||
                    !e.code ||
                    !Mr(e.code, !1) ||
                    !e.message ||
                    !Lr(e.message, !1)
                  );
                })(r))
              ) {
                const { message: e } = Nr(
                  "MISSING_OR_INVALID",
                  `reject() reason: ${JSON.stringify(r)}`
                );
                throw new Error(e);
              }
            }),
            (this.isValidSessionSettleRequest = (e) => {
              if (!Kr(e)) {
                const { message: t } = Nr(
                  "MISSING_OR_INVALID",
                  `onSessionSettleRequest() params: ${e}`
                );
                throw new Error(t);
              }
              const { relay: t, controller: r, namespaces: n, expiry: i } = e;
              if (!Br(t)) {
                const { message: e } = Nr(
                  "MISSING_OR_INVALID",
                  "onSessionSettleRequest() relay protocol should be a string"
                );
                throw new Error(e);
              }
              const s = (function (e, t) {
                let r = null;
                return (
                  Lr(e?.publicKey, !1) ||
                    (r = Nr(
                      "MISSING_OR_INVALID",
                      `${t} controller public key should be a string`
                    )),
                  r
                );
              })(r, "onSessionSettleRequest()");
              if (s) throw new Error(s.message);
              const o = Hr(n, "onSessionSettleRequest()");
              if (o) throw new Error(o.message);
              if (ur(i)) {
                const { message: e } = Nr(
                  "EXPIRED",
                  "onSessionSettleRequest()"
                );
                throw new Error(e);
              }
            }),
            (this.isValidUpdate = async (e) => {
              if (!Kr(e)) {
                const { message: t } = Nr(
                  "MISSING_OR_INVALID",
                  `update() params: ${e}`
                );
                throw new Error(t);
              }
              const { topic: t, namespaces: r } = e;
              await this.isValidSessionTopic(t);
              const n = this.client.session.get(t),
                i = Hr(r, "update()");
              if (i) throw new Error(i.message);
              const s = Gr(n.requiredNamespaces, r, "update()");
              if (s) throw new Error(s.message);
            }),
            (this.isValidExtend = async (e) => {
              if (!Kr(e)) {
                const { message: t } = Nr(
                  "MISSING_OR_INVALID",
                  `extend() params: ${e}`
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidSessionTopic(t);
            }),
            (this.isValidRequest = async (e) => {
              if (!Kr(e)) {
                const { message: t } = Nr(
                  "MISSING_OR_INVALID",
                  `request() params: ${e}`
                );
                throw new Error(t);
              }
              const { topic: t, request: r, chainId: n, expiry: i } = e;
              await this.isValidSessionTopic(t);
              const { namespaces: s } = this.client.session.get(t);
              if (!Vr(s, n)) {
                const { message: e } = Nr(
                  "MISSING_OR_INVALID",
                  `request() chainId: ${n}`
                );
                throw new Error(e);
              }
              if (
                !(function (e) {
                  return !(Ur(e) || !Lr(e.method, !1));
                })(r)
              ) {
                const { message: e } = Nr(
                  "MISSING_OR_INVALID",
                  `request() ${JSON.stringify(r)}`
                );
                throw new Error(e);
              }
              if (!Fr(s, n, r.method)) {
                const { message: e } = Nr(
                  "MISSING_OR_INVALID",
                  `request() method: ${r.method}`
                );
                throw new Error(e);
              }
              if (
                i &&
                !(function (e, t) {
                  return Mr(e, !1) && e <= t.max && e >= t.min;
                })(i, Pc)
              ) {
                const { message: e } = Nr(
                  "MISSING_OR_INVALID",
                  `request() expiry: ${i}. Expiry must be a number (in seconds) between ${Pc.min} and ${Pc.max}`
                );
                throw new Error(e);
              }
            }),
            (this.isValidRespond = async (e) => {
              var t;
              if (!Kr(e)) {
                const { message: t } = Nr(
                  "MISSING_OR_INVALID",
                  `respond() params: ${e}`
                );
                throw new Error(t);
              }
              const { topic: r, response: n } = e;
              try {
                await this.isValidSessionTopic(r);
              } catch (qn) {
                throw (
                  (null != (t = e?.response) &&
                    t.id &&
                    this.cleanupAfterResponse(e),
                  qn)
                );
              }
              if (
                !(function (e) {
                  return !(
                    Ur(e) ||
                    (Ur(e.result) && Ur(e.error)) ||
                    !Mr(e.id, !1) ||
                    !Lr(e.jsonrpc, !1)
                  );
                })(n)
              ) {
                const { message: e } = Nr(
                  "MISSING_OR_INVALID",
                  `respond() response: ${JSON.stringify(n)}`
                );
                throw new Error(e);
              }
            }),
            (this.isValidPing = async (e) => {
              if (!Kr(e)) {
                const { message: t } = Nr(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            (this.isValidEmit = async (e) => {
              if (!Kr(e)) {
                const { message: t } = Nr(
                  "MISSING_OR_INVALID",
                  `emit() params: ${e}`
                );
                throw new Error(t);
              }
              const { topic: t, event: r, chainId: n } = e;
              await this.isValidSessionTopic(t);
              const { namespaces: i } = this.client.session.get(t);
              if (!Vr(i, n)) {
                const { message: e } = Nr(
                  "MISSING_OR_INVALID",
                  `emit() chainId: ${n}`
                );
                throw new Error(e);
              }
              if (
                !(function (e) {
                  return !(Ur(e) || !Lr(e.name, !1));
                })(r)
              ) {
                const { message: e } = Nr(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(r)}`
                );
                throw new Error(e);
              }
              if (!Wr(i, n, r.name)) {
                const { message: e } = Nr(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(r)}`
                );
                throw new Error(e);
              }
            }),
            (this.isValidDisconnect = async (e) => {
              if (!Kr(e)) {
                const { message: t } = Nr(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            (this.getVerifyContext = async (e, t) => {
              const r = {
                verified: {
                  verifyUrl: t.verifyUrl || Aa,
                  validation: "UNKNOWN",
                  origin: t.url || "",
                },
              };
              try {
                const n = await this.client.core.verify.resolve({
                  attestationId: e,
                  verifyUrl: t.verifyUrl,
                });
                n &&
                  ((r.verified.origin = n.origin),
                  (r.verified.isScam = n.isScam),
                  (r.verified.validation =
                    n.origin === new URL(t.url).origin ? "VALID" : "INVALID"));
              } catch (Wn) {
                this.client.logger.info(Wn);
              }
              return (
                this.client.logger.info(`Verify context: ${JSON.stringify(r)}`),
                r
              );
            }),
            (this.validateSessionProps = (e, t) => {
              Object.values(e).forEach((e) => {
                if (!Lr(e, !1)) {
                  const { message: r } = Nr(
                    "MISSING_OR_INVALID",
                    `${t} must be in Record<string, string> format. Received: ${JSON.stringify(
                      e
                    )}`
                  );
                  throw new Error(r);
                }
              });
            });
        }
        async isInitialized() {
          if (!this.initialized) {
            const { message: e } = Nr("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
          await this.client.core.relayer.confirmOnlineStateOrThrow();
        }
        registerRelayerEvents() {
          this.client.core.relayer.on(Jo, async (e) => {
            const { topic: t, message: r } = e;
            if (
              this.ignoredPayloadTypes.includes(
                this.client.core.crypto.getPayloadType(r)
              )
            )
              return;
            const n = await this.client.core.crypto.decode(t, r);
            try {
              Zi(n)
                ? (this.client.core.history.set(t, n),
                  this.onRelayEventRequest({ topic: t, payload: n }))
                : es(n)
                ? (await this.client.core.history.resolve(n),
                  await this.onRelayEventResponse({ topic: t, payload: n }),
                  this.client.core.history.delete(t, n.id))
                : this.onRelayEventUnknownPayload({ topic: t, payload: n });
            } catch (Wn) {
              this.client.logger.error(Wn);
            }
          });
        }
        registerExpirerEvents() {
          this.client.core.expirer.on(Ia, async (e) => {
            const { topic: t, id: r } = ar(e.target);
            if (r && this.client.pendingRequest.keys.includes(r))
              return await this.deletePendingSessionRequest(
                r,
                Nr("EXPIRED"),
                !0
              );
            t
              ? this.client.session.keys.includes(t) &&
                (await this.deleteSession({ topic: t, expirerHasDeleted: !0 }),
                this.client.events.emit("session_expire", { topic: t }))
              : r &&
                (await this.deleteProposal(r, !0),
                this.client.events.emit("proposal_expire", { id: r }));
          });
        }
        registerPairingEvents() {
          this.client.core.pairing.events.on(da, (e) =>
            this.onPairingCreated(e)
          );
        }
        isValidPairingTopic(e) {
          if (!Lr(e, !1)) {
            const { message: t } = Nr(
              "MISSING_OR_INVALID",
              `pairing topic should be a string: ${e}`
            );
            throw new Error(t);
          }
          if (!this.client.core.pairing.pairings.keys.includes(e)) {
            const { message: t } = Nr(
              "NO_MATCHING_KEY",
              `pairing topic doesn't exist: ${e}`
            );
            throw new Error(t);
          }
          if (ur(this.client.core.pairing.pairings.get(e).expiry)) {
            const { message: t } = Nr("EXPIRED", `pairing topic: ${e}`);
            throw new Error(t);
          }
        }
        async isValidSessionTopic(e) {
          if (!Lr(e, !1)) {
            const { message: t } = Nr(
              "MISSING_OR_INVALID",
              `session topic should be a string: ${e}`
            );
            throw new Error(t);
          }
          if (!this.client.session.keys.includes(e)) {
            const { message: t } = Nr(
              "NO_MATCHING_KEY",
              `session topic doesn't exist: ${e}`
            );
            throw new Error(t);
          }
          if (ur(this.client.session.get(e).expiry)) {
            await this.deleteSession({ topic: e });
            const { message: t } = Nr("EXPIRED", `session topic: ${e}`);
            throw new Error(t);
          }
          if (!this.client.core.crypto.keychain.has(e)) {
            const { message: t } = Nr(
              "MISSING_OR_INVALID",
              `session topic does not exist in keychain: ${e}`
            );
            throw (await this.deleteSession({ topic: e }), new Error(t));
          }
        }
        async isValidSessionOrPairingTopic(e) {
          if (this.client.session.keys.includes(e))
            await this.isValidSessionTopic(e);
          else {
            if (!this.client.core.pairing.pairings.keys.includes(e)) {
              if (Lr(e, !1)) {
                const { message: t } = Nr(
                  "NO_MATCHING_KEY",
                  `session or pairing topic doesn't exist: ${e}`
                );
                throw new Error(t);
              }
              {
                const { message: t } = Nr(
                  "MISSING_OR_INVALID",
                  `session or pairing topic should be a string: ${e}`
                );
                throw new Error(t);
              }
            }
            this.isValidPairingTopic(e);
          }
        }
        async isValidProposalId(e) {
          if ("number" != typeof e) {
            const { message: t } = Nr(
              "MISSING_OR_INVALID",
              `proposal id should be a number: ${e}`
            );
            throw new Error(t);
          }
          if (!this.client.proposal.keys.includes(e)) {
            const { message: t } = Nr(
              "NO_MATCHING_KEY",
              `proposal id doesn't exist: ${e}`
            );
            throw new Error(t);
          }
          if (ur(this.client.proposal.get(e).expiryTimestamp)) {
            await this.deleteProposal(e);
            const { message: t } = Nr("EXPIRED", `proposal id: ${e}`);
            throw new Error(t);
          }
        }
      }
      class qc extends nc {
        constructor(e, t) {
          super(e, t, "proposal", mc), (this.core = e), (this.logger = t);
        }
      }
      class $c extends nc {
        constructor(e, t) {
          super(e, t, "session", mc), (this.core = e), (this.logger = t);
        }
      }
      class zc extends nc {
        constructor(e, t) {
          super(e, t, "request", mc, (e) => e.id),
            (this.core = e),
            (this.logger = t);
        }
      }
      class Hc extends ui {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = wc),
            (this.events = new v.EventEmitter()),
            (this.on = (e, t) => this.events.on(e, t)),
            (this.once = (e, t) => this.events.once(e, t)),
            (this.off = (e, t) => this.events.off(e, t)),
            (this.removeListener = (e, t) => this.events.removeListener(e, t)),
            (this.removeAllListeners = (e) =>
              this.events.removeAllListeners(e)),
            (this.connect = async (e) => {
              try {
                return await this.engine.connect(e);
              } catch (t) {
                throw (this.logger.error(t.message), t);
              }
            }),
            (this.pair = async (e) => {
              try {
                return await this.engine.pair(e);
              } catch (t) {
                throw (this.logger.error(t.message), t);
              }
            }),
            (this.approve = async (e) => {
              try {
                return await this.engine.approve(e);
              } catch (t) {
                throw (this.logger.error(t.message), t);
              }
            }),
            (this.reject = async (e) => {
              try {
                return await this.engine.reject(e);
              } catch (t) {
                throw (this.logger.error(t.message), t);
              }
            }),
            (this.update = async (e) => {
              try {
                return await this.engine.update(e);
              } catch (t) {
                throw (this.logger.error(t.message), t);
              }
            }),
            (this.extend = async (e) => {
              try {
                return await this.engine.extend(e);
              } catch (t) {
                throw (this.logger.error(t.message), t);
              }
            }),
            (this.request = async (e) => {
              try {
                return await this.engine.request(e);
              } catch (t) {
                throw (this.logger.error(t.message), t);
              }
            }),
            (this.respond = async (e) => {
              try {
                return await this.engine.respond(e);
              } catch (t) {
                throw (this.logger.error(t.message), t);
              }
            }),
            (this.ping = async (e) => {
              try {
                return await this.engine.ping(e);
              } catch (t) {
                throw (this.logger.error(t.message), t);
              }
            }),
            (this.emit = async (e) => {
              try {
                return await this.engine.emit(e);
              } catch (t) {
                throw (this.logger.error(t.message), t);
              }
            }),
            (this.disconnect = async (e) => {
              try {
                return await this.engine.disconnect(e);
              } catch (t) {
                throw (this.logger.error(t.message), t);
              }
            }),
            (this.find = (e) => {
              try {
                return this.engine.find(e);
              } catch (t) {
                throw (this.logger.error(t.message), t);
              }
            }),
            (this.getPendingSessionRequests = () => {
              try {
                return this.engine.getPendingSessionRequests();
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.name = e?.name || wc),
            (this.metadata = e?.metadata ||
              (0, vt.g)() || {
                name: "",
                description: "",
                url: "",
                icons: [""],
              });
          const t =
            typeof e?.logger < "u" && "string" != typeof e?.logger
              ? e.logger
              : Dn()(Yn({ level: e?.logger || bc }));
          (this.core = e?.core || new yc(e)),
            (this.logger = Qn(t, this.name)),
            (this.session = new $c(this.core, this.logger)),
            (this.proposal = new qc(this.core, this.logger)),
            (this.pendingRequest = new zc(this.core, this.logger)),
            (this.engine = new kc(this));
        }
        static async init(e) {
          const t = new Hc(e);
          return await t.initialize(), t;
        }
        get context() {
          return Jn(this.logger);
        }
        get pairing() {
          return this.core.pairing.pairings;
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.core.start(),
              await this.session.init(),
              await this.proposal.init(),
              await this.pendingRequest.init(),
              await this.engine.init(),
              this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }),
              this.logger.info("SignClient Initialization Success");
          } catch (e) {
            throw (
              (this.logger.info("SignClient Initialization Failure"),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
      var Bc = r(99038),
        Kc = r.n(Bc);
      const Vc = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      };
      class Fc {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (
            ((this.url = e),
            (this.disableProviderPing = t),
            (this.events = new v.EventEmitter()),
            (this.isAvailable = !1),
            (this.registering = !1),
            !Ji(e))
          )
            throw new Error(
              `Provided URL is not compatible with HTTP connection: ${e}`
            );
          (this.url = e), (this.disableProviderPing = t);
        }
        get connected() {
          return this.isAvailable;
        }
        get connecting() {
          return this.registering;
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async open() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.url;
          await this.register(e);
        }
        async close() {
          if (!this.isAvailable) throw new Error("Connection already closed");
          this.onClose();
        }
        async send(e, t) {
          this.isAvailable || (await this.register());
          try {
            const t = On(e),
              r = await Kc()(
                this.url,
                Object.assign(Object.assign({}, Vc), { body: t })
              ),
              n = await r.json();
            this.onPayload({ data: n });
          } catch (r) {
            this.onError(e.id, r);
          }
        }
        async register() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.url;
          if (!Ji(e))
            throw new Error(
              `Provided URL is not compatible with HTTP connection: ${e}`
            );
          if (this.registering) {
            const e = this.events.getMaxListeners();
            return (
              (this.events.listenerCount("register_error") >= e ||
                this.events.listenerCount("open") >= e) &&
                this.events.setMaxListeners(e + 1),
              new Promise((e, t) => {
                this.events.once("register_error", (e) => {
                  this.resetMaxListeners(), t(e);
                }),
                  this.events.once("open", () => {
                    if (
                      (this.resetMaxListeners(),
                      "undefined" === typeof this.isAvailable)
                    )
                      return t(
                        new Error("HTTP connection is missing or invalid")
                      );
                    e();
                  });
              })
            );
          }
          (this.url = e), (this.registering = !0);
          try {
            if (!this.disableProviderPing) {
              const t = On({
                id: 1,
                jsonrpc: "2.0",
                method: "test",
                params: [],
              });
              await Kc()(e, Object.assign(Object.assign({}, Vc), { body: t }));
            }
            this.onOpen();
          } catch (t) {
            const e = this.parseError(t);
            throw (this.events.emit("register_error", e), this.onClose(), e);
          }
        }
        onOpen() {
          (this.isAvailable = !0),
            (this.registering = !1),
            this.events.emit("open");
        }
        onClose() {
          (this.isAvailable = !1),
            (this.registering = !1),
            this.events.emit("close");
        }
        onPayload(e) {
          if ("undefined" === typeof e.data) return;
          const t = "string" === typeof e.data ? Pn(e.data) : e.data;
          this.events.emit("payload", t);
        }
        onError(e, t) {
          const r = this.parseError(t),
            n = Ki(e, r.message || r.toString());
          this.events.emit("payload", n);
        }
        parseError(e) {
          return ki(
            e,
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.url,
            "HTTP"
          );
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
      }
      const Wc = Fc,
        Gc = "error",
        Yc = "wc@2:universal_provider:",
        Jc = "default_chain_changed";
      var Qc =
          typeof globalThis < "u"
            ? globalThis
            : typeof window < "u"
            ? window
            : typeof r.g < "u"
            ? r.g
            : typeof self < "u"
            ? self
            : {},
        Xc = { exports: {} };
      !(function (e, t) {
        (function () {
          var r,
            n = "Expected a function",
            i = "__lodash_hash_undefined__",
            s = "__lodash_placeholder__",
            o = 16,
            a = 32,
            c = 64,
            u = 128,
            h = 256,
            l = 1 / 0,
            f = 9007199254740991,
            p = NaN,
            d = 4294967295,
            g = d - 1,
            y = d >>> 1,
            v = [
              ["ary", u],
              ["bind", 1],
              ["bindKey", 2],
              ["curry", 8],
              ["curryRight", o],
              ["flip", 512],
              ["partial", a],
              ["partialRight", c],
              ["rearg", h],
            ],
            m = "[object Arguments]",
            w = "[object Array]",
            b = "[object Boolean]",
            _ = "[object Date]",
            E = "[object Error]",
            S = "[object Function]",
            I = "[object GeneratorFunction]",
            P = "[object Map]",
            O = "[object Number]",
            A = "[object Object]",
            x = "[object Promise]",
            R = "[object RegExp]",
            N = "[object Set]",
            T = "[object String]",
            C = "[object Symbol]",
            j = "[object WeakMap]",
            U = "[object ArrayBuffer]",
            L = "[object DataView]",
            M = "[object Float32Array]",
            D = "[object Float64Array]",
            k = "[object Int8Array]",
            q = "[object Int16Array]",
            $ = "[object Int32Array]",
            z = "[object Uint8Array]",
            H = "[object Uint8ClampedArray]",
            B = "[object Uint16Array]",
            K = "[object Uint32Array]",
            V = /\b__p \+= '';/g,
            F = /\b(__p \+=) '' \+/g,
            W = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            G = /&(?:amp|lt|gt|quot|#39);/g,
            Y = /[&<>"']/g,
            J = RegExp(G.source),
            Q = RegExp(Y.source),
            X = /<%-([\s\S]+?)%>/g,
            Z = /<%([\s\S]+?)%>/g,
            ee = /<%=([\s\S]+?)%>/g,
            te = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            re = /^\w*$/,
            ne =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            ie = /[\\^$.*+?()[\]{}|]/g,
            se = RegExp(ie.source),
            oe = /^\s+/,
            ae = /\s/,
            ce = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            ue = /\{\n\/\* \[wrapped with (.+)\] \*/,
            he = /,? & /,
            le = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            fe = /[()=,{}\[\]\/\s]/,
            pe = /\\(\\)?/g,
            de = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            ge = /\w*$/,
            ye = /^[-+]0x[0-9a-f]+$/i,
            ve = /^0b[01]+$/i,
            me = /^\[object .+?Constructor\]$/,
            we = /^0o[0-7]+$/i,
            be = /^(?:0|[1-9]\d*)$/,
            _e = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            Ee = /($^)/,
            Se = /['\n\r\u2028\u2029\\]/g,
            Ie = "\\ud800-\\udfff",
            Pe = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
            Oe = "\\u2700-\\u27bf",
            Ae = "a-z\\xdf-\\xf6\\xf8-\\xff",
            xe = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            Re = "\\ufe0e\\ufe0f",
            Ne =
              "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            Te = "['\u2019]",
            Ce = "[" + Ie + "]",
            je = "[" + Ne + "]",
            Ue = "[" + Pe + "]",
            Le = "\\d+",
            Me = "[" + Oe + "]",
            De = "[" + Ae + "]",
            ke = "[^" + Ie + Ne + Le + Oe + Ae + xe + "]",
            qe = "\\ud83c[\\udffb-\\udfff]",
            $e = "[^" + Ie + "]",
            ze = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            He = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            Be = "[" + xe + "]",
            Ke = "\\u200d",
            Ve = "(?:" + De + "|" + ke + ")",
            Fe = "(?:" + Be + "|" + ke + ")",
            We = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?",
            Ge = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",
            Ye = "(?:" + Ue + "|" + qe + ")" + "?",
            Je = "[" + Re + "]?",
            Qe =
              Je +
              Ye +
              ("(?:" +
                Ke +
                "(?:" +
                [$e, ze, He].join("|") +
                ")" +
                Je +
                Ye +
                ")*"),
            Xe = "(?:" + [Me, ze, He].join("|") + ")" + Qe,
            Ze = "(?:" + [$e + Ue + "?", Ue, ze, He, Ce].join("|") + ")",
            et = RegExp(Te, "g"),
            tt = RegExp(Ue, "g"),
            rt = RegExp(qe + "(?=" + qe + ")|" + Ze + Qe, "g"),
            nt = RegExp(
              [
                Be +
                  "?" +
                  De +
                  "+" +
                  We +
                  "(?=" +
                  [je, Be, "$"].join("|") +
                  ")",
                Fe + "+" + Ge + "(?=" + [je, Be + Ve, "$"].join("|") + ")",
                Be + "?" + Ve + "+" + We,
                Be + "+" + Ge,
                "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                Le,
                Xe,
              ].join("|"),
              "g"
            ),
            it = RegExp("[" + Ke + Ie + Pe + Re + "]"),
            st =
              /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            ot = [
              "Array",
              "Buffer",
              "DataView",
              "Date",
              "Error",
              "Float32Array",
              "Float64Array",
              "Function",
              "Int8Array",
              "Int16Array",
              "Int32Array",
              "Map",
              "Math",
              "Object",
              "Promise",
              "RegExp",
              "Set",
              "String",
              "Symbol",
              "TypeError",
              "Uint8Array",
              "Uint8ClampedArray",
              "Uint16Array",
              "Uint32Array",
              "WeakMap",
              "_",
              "clearTimeout",
              "isFinite",
              "parseInt",
              "setTimeout",
            ],
            at = -1,
            ct = {};
          (ct[M] =
            ct[D] =
            ct[k] =
            ct[q] =
            ct[$] =
            ct[z] =
            ct[H] =
            ct[B] =
            ct[K] =
              !0),
            (ct[m] =
              ct[w] =
              ct[U] =
              ct[b] =
              ct[L] =
              ct[_] =
              ct[E] =
              ct[S] =
              ct[P] =
              ct[O] =
              ct[A] =
              ct[R] =
              ct[N] =
              ct[T] =
              ct[j] =
                !1);
          var ut = {};
          (ut[m] =
            ut[w] =
            ut[U] =
            ut[L] =
            ut[b] =
            ut[_] =
            ut[M] =
            ut[D] =
            ut[k] =
            ut[q] =
            ut[$] =
            ut[P] =
            ut[O] =
            ut[A] =
            ut[R] =
            ut[N] =
            ut[T] =
            ut[C] =
            ut[z] =
            ut[H] =
            ut[B] =
            ut[K] =
              !0),
            (ut[E] = ut[S] = ut[j] = !1);
          var ht = {
              "\\": "\\",
              "'": "'",
              "\n": "n",
              "\r": "r",
              "\u2028": "u2028",
              "\u2029": "u2029",
            },
            lt = parseFloat,
            ft = parseInt,
            pt = "object" == typeof Qc && Qc && Qc.Object === Object && Qc,
            dt =
              "object" == typeof self && self && self.Object === Object && self,
            gt = pt || dt || Function("return this")(),
            yt = t && !t.nodeType && t,
            vt = yt && e && !e.nodeType && e,
            mt = vt && vt.exports === yt,
            wt = mt && pt.process,
            bt = (function () {
              try {
                return (
                  (vt && vt.require && vt.require("util").types) ||
                  (wt && wt.binding && wt.binding("util"))
                );
              } catch {}
            })(),
            _t = bt && bt.isArrayBuffer,
            Et = bt && bt.isDate,
            St = bt && bt.isMap,
            It = bt && bt.isRegExp,
            Pt = bt && bt.isSet,
            Ot = bt && bt.isTypedArray;
          function At(e, t, r) {
            switch (r.length) {
              case 0:
                return e.call(t);
              case 1:
                return e.call(t, r[0]);
              case 2:
                return e.call(t, r[0], r[1]);
              case 3:
                return e.call(t, r[0], r[1], r[2]);
            }
            return e.apply(t, r);
          }
          function xt(e, t, r, n) {
            for (var i = -1, s = null == e ? 0 : e.length; ++i < s; ) {
              var o = e[i];
              t(n, o, r(o), e);
            }
            return n;
          }
          function Rt(e, t) {
            for (
              var r = -1, n = null == e ? 0 : e.length;
              ++r < n && !1 !== t(e[r], r, e);

            );
            return e;
          }
          function Nt(e, t) {
            for (
              var r = null == e ? 0 : e.length;
              r-- && !1 !== t(e[r], r, e);

            );
            return e;
          }
          function Tt(e, t) {
            for (var r = -1, n = null == e ? 0 : e.length; ++r < n; )
              if (!t(e[r], r, e)) return !1;
            return !0;
          }
          function Ct(e, t) {
            for (
              var r = -1, n = null == e ? 0 : e.length, i = 0, s = [];
              ++r < n;

            ) {
              var o = e[r];
              t(o, r, e) && (s[i++] = o);
            }
            return s;
          }
          function jt(e, t) {
            return !!(null == e ? 0 : e.length) && Bt(e, t, 0) > -1;
          }
          function Ut(e, t, r) {
            for (var n = -1, i = null == e ? 0 : e.length; ++n < i; )
              if (r(t, e[n])) return !0;
            return !1;
          }
          function Lt(e, t) {
            for (
              var r = -1, n = null == e ? 0 : e.length, i = Array(n);
              ++r < n;

            )
              i[r] = t(e[r], r, e);
            return i;
          }
          function Mt(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n; )
              e[i + r] = t[r];
            return e;
          }
          function Dt(e, t, r, n) {
            var i = -1,
              s = null == e ? 0 : e.length;
            for (n && s && (r = e[++i]); ++i < s; ) r = t(r, e[i], i, e);
            return r;
          }
          function kt(e, t, r, n) {
            var i = null == e ? 0 : e.length;
            for (n && i && (r = e[--i]); i--; ) r = t(r, e[i], i, e);
            return r;
          }
          function qt(e, t) {
            for (var r = -1, n = null == e ? 0 : e.length; ++r < n; )
              if (t(e[r], r, e)) return !0;
            return !1;
          }
          var $t = Wt("length");
          function zt(e, t, r) {
            var n;
            return (
              r(e, function (e, r, i) {
                if (t(e, r, i)) return (n = r), !1;
              }),
              n
            );
          }
          function Ht(e, t, r, n) {
            for (var i = e.length, s = r + (n ? 1 : -1); n ? s-- : ++s < i; )
              if (t(e[s], s, e)) return s;
            return -1;
          }
          function Bt(e, t, r) {
            return t === t
              ? (function (e, t, r) {
                  for (var n = r - 1, i = e.length; ++n < i; )
                    if (e[n] === t) return n;
                  return -1;
                })(e, t, r)
              : Ht(e, Vt, r);
          }
          function Kt(e, t, r, n) {
            for (var i = r - 1, s = e.length; ++i < s; )
              if (n(e[i], t)) return i;
            return -1;
          }
          function Vt(e) {
            return e !== e;
          }
          function Ft(e, t) {
            var r = null == e ? 0 : e.length;
            return r ? Jt(e, t) / r : p;
          }
          function Wt(e) {
            return function (t) {
              return null == t ? r : t[e];
            };
          }
          function Gt(e) {
            return function (t) {
              return null == e ? r : e[t];
            };
          }
          function Yt(e, t, r, n, i) {
            return (
              i(e, function (e, i, s) {
                r = n ? ((n = !1), e) : t(r, e, i, s);
              }),
              r
            );
          }
          function Jt(e, t) {
            for (var n, i = -1, s = e.length; ++i < s; ) {
              var o = t(e[i]);
              o !== r && (n = n === r ? o : n + o);
            }
            return n;
          }
          function Qt(e, t) {
            for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
            return n;
          }
          function Xt(e) {
            return e && e.slice(0, dr(e) + 1).replace(oe, "");
          }
          function Zt(e) {
            return function (t) {
              return e(t);
            };
          }
          function er(e, t) {
            return Lt(t, function (t) {
              return e[t];
            });
          }
          function tr(e, t) {
            return e.has(t);
          }
          function rr(e, t) {
            for (var r = -1, n = e.length; ++r < n && Bt(t, e[r], 0) > -1; );
            return r;
          }
          function nr(e, t) {
            for (var r = e.length; r-- && Bt(t, e[r], 0) > -1; );
            return r;
          }
          var ir = Gt({
              "\xc0": "A",
              "\xc1": "A",
              "\xc2": "A",
              "\xc3": "A",
              "\xc4": "A",
              "\xc5": "A",
              "\xe0": "a",
              "\xe1": "a",
              "\xe2": "a",
              "\xe3": "a",
              "\xe4": "a",
              "\xe5": "a",
              "\xc7": "C",
              "\xe7": "c",
              "\xd0": "D",
              "\xf0": "d",
              "\xc8": "E",
              "\xc9": "E",
              "\xca": "E",
              "\xcb": "E",
              "\xe8": "e",
              "\xe9": "e",
              "\xea": "e",
              "\xeb": "e",
              "\xcc": "I",
              "\xcd": "I",
              "\xce": "I",
              "\xcf": "I",
              "\xec": "i",
              "\xed": "i",
              "\xee": "i",
              "\xef": "i",
              "\xd1": "N",
              "\xf1": "n",
              "\xd2": "O",
              "\xd3": "O",
              "\xd4": "O",
              "\xd5": "O",
              "\xd6": "O",
              "\xd8": "O",
              "\xf2": "o",
              "\xf3": "o",
              "\xf4": "o",
              "\xf5": "o",
              "\xf6": "o",
              "\xf8": "o",
              "\xd9": "U",
              "\xda": "U",
              "\xdb": "U",
              "\xdc": "U",
              "\xf9": "u",
              "\xfa": "u",
              "\xfb": "u",
              "\xfc": "u",
              "\xdd": "Y",
              "\xfd": "y",
              "\xff": "y",
              "\xc6": "Ae",
              "\xe6": "ae",
              "\xde": "Th",
              "\xfe": "th",
              "\xdf": "ss",
              "\u0100": "A",
              "\u0102": "A",
              "\u0104": "A",
              "\u0101": "a",
              "\u0103": "a",
              "\u0105": "a",
              "\u0106": "C",
              "\u0108": "C",
              "\u010a": "C",
              "\u010c": "C",
              "\u0107": "c",
              "\u0109": "c",
              "\u010b": "c",
              "\u010d": "c",
              "\u010e": "D",
              "\u0110": "D",
              "\u010f": "d",
              "\u0111": "d",
              "\u0112": "E",
              "\u0114": "E",
              "\u0116": "E",
              "\u0118": "E",
              "\u011a": "E",
              "\u0113": "e",
              "\u0115": "e",
              "\u0117": "e",
              "\u0119": "e",
              "\u011b": "e",
              "\u011c": "G",
              "\u011e": "G",
              "\u0120": "G",
              "\u0122": "G",
              "\u011d": "g",
              "\u011f": "g",
              "\u0121": "g",
              "\u0123": "g",
              "\u0124": "H",
              "\u0126": "H",
              "\u0125": "h",
              "\u0127": "h",
              "\u0128": "I",
              "\u012a": "I",
              "\u012c": "I",
              "\u012e": "I",
              "\u0130": "I",
              "\u0129": "i",
              "\u012b": "i",
              "\u012d": "i",
              "\u012f": "i",
              "\u0131": "i",
              "\u0134": "J",
              "\u0135": "j",
              "\u0136": "K",
              "\u0137": "k",
              "\u0138": "k",
              "\u0139": "L",
              "\u013b": "L",
              "\u013d": "L",
              "\u013f": "L",
              "\u0141": "L",
              "\u013a": "l",
              "\u013c": "l",
              "\u013e": "l",
              "\u0140": "l",
              "\u0142": "l",
              "\u0143": "N",
              "\u0145": "N",
              "\u0147": "N",
              "\u014a": "N",
              "\u0144": "n",
              "\u0146": "n",
              "\u0148": "n",
              "\u014b": "n",
              "\u014c": "O",
              "\u014e": "O",
              "\u0150": "O",
              "\u014d": "o",
              "\u014f": "o",
              "\u0151": "o",
              "\u0154": "R",
              "\u0156": "R",
              "\u0158": "R",
              "\u0155": "r",
              "\u0157": "r",
              "\u0159": "r",
              "\u015a": "S",
              "\u015c": "S",
              "\u015e": "S",
              "\u0160": "S",
              "\u015b": "s",
              "\u015d": "s",
              "\u015f": "s",
              "\u0161": "s",
              "\u0162": "T",
              "\u0164": "T",
              "\u0166": "T",
              "\u0163": "t",
              "\u0165": "t",
              "\u0167": "t",
              "\u0168": "U",
              "\u016a": "U",
              "\u016c": "U",
              "\u016e": "U",
              "\u0170": "U",
              "\u0172": "U",
              "\u0169": "u",
              "\u016b": "u",
              "\u016d": "u",
              "\u016f": "u",
              "\u0171": "u",
              "\u0173": "u",
              "\u0174": "W",
              "\u0175": "w",
              "\u0176": "Y",
              "\u0177": "y",
              "\u0178": "Y",
              "\u0179": "Z",
              "\u017b": "Z",
              "\u017d": "Z",
              "\u017a": "z",
              "\u017c": "z",
              "\u017e": "z",
              "\u0132": "IJ",
              "\u0133": "ij",
              "\u0152": "Oe",
              "\u0153": "oe",
              "\u0149": "'n",
              "\u017f": "s",
            }),
            sr = Gt({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
            });
          function or(e) {
            return "\\" + ht[e];
          }
          function ar(e) {
            return it.test(e);
          }
          function cr(e) {
            var t = -1,
              r = Array(e.size);
            return (
              e.forEach(function (e, n) {
                r[++t] = [n, e];
              }),
              r
            );
          }
          function ur(e, t) {
            return function (r) {
              return e(t(r));
            };
          }
          function hr(e, t) {
            for (var r = -1, n = e.length, i = 0, o = []; ++r < n; ) {
              var a = e[r];
              (a === t || a === s) && ((e[r] = s), (o[i++] = r));
            }
            return o;
          }
          function lr(e) {
            var t = -1,
              r = Array(e.size);
            return (
              e.forEach(function (e) {
                r[++t] = e;
              }),
              r
            );
          }
          function fr(e) {
            return ar(e)
              ? (function (e) {
                  for (var t = (rt.lastIndex = 0); rt.test(e); ) ++t;
                  return t;
                })(e)
              : $t(e);
          }
          function pr(e) {
            return ar(e)
              ? (function (e) {
                  return e.match(rt) || [];
                })(e)
              : (function (e) {
                  return e.split("");
                })(e);
          }
          function dr(e) {
            for (var t = e.length; t-- && ae.test(e.charAt(t)); );
            return t;
          }
          var gr = Gt({
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'",
          });
          var yr = (function e(t) {
            var ae = (t =
                null == t ? gt : yr.defaults(gt.Object(), t, yr.pick(gt, ot)))
                .Array,
              Ie = t.Date,
              Pe = t.Error,
              Oe = t.Function,
              Ae = t.Math,
              xe = t.Object,
              Re = t.RegExp,
              Ne = t.String,
              Te = t.TypeError,
              Ce = ae.prototype,
              je = Oe.prototype,
              Ue = xe.prototype,
              Le = t["__core-js_shared__"],
              Me = je.toString,
              De = Ue.hasOwnProperty,
              ke = 0,
              qe = (function () {
                var e = /[^.]+$/.exec(
                  (Le && Le.keys && Le.keys.IE_PROTO) || ""
                );
                return e ? "Symbol(src)_1." + e : "";
              })(),
              $e = Ue.toString,
              ze = Me.call(xe),
              He = gt._,
              Be = Re(
                "^" +
                  Me.call(De)
                    .replace(ie, "\\$&")
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      "$1.*?"
                    ) +
                  "$"
              ),
              Ke = mt ? t.Buffer : r,
              Ve = t.Symbol,
              Fe = t.Uint8Array,
              We = Ke ? Ke.allocUnsafe : r,
              Ge = ur(xe.getPrototypeOf, xe),
              Ye = xe.create,
              Je = Ue.propertyIsEnumerable,
              Qe = Ce.splice,
              Xe = Ve ? Ve.isConcatSpreadable : r,
              Ze = Ve ? Ve.iterator : r,
              rt = Ve ? Ve.toStringTag : r,
              it = (function () {
                try {
                  var e = fs(xe, "defineProperty");
                  return e({}, "", {}), e;
                } catch {}
              })(),
              ht = t.clearTimeout !== gt.clearTimeout && t.clearTimeout,
              pt = Ie && Ie.now !== gt.Date.now && Ie.now,
              dt = t.setTimeout !== gt.setTimeout && t.setTimeout,
              yt = Ae.ceil,
              vt = Ae.floor,
              wt = xe.getOwnPropertySymbols,
              bt = Ke ? Ke.isBuffer : r,
              $t = t.isFinite,
              Gt = Ce.join,
              vr = ur(xe.keys, xe),
              mr = Ae.max,
              wr = Ae.min,
              br = Ie.now,
              _r = t.parseInt,
              Er = Ae.random,
              Sr = Ce.reverse,
              Ir = fs(t, "DataView"),
              Pr = fs(t, "Map"),
              Or = fs(t, "Promise"),
              Ar = fs(t, "Set"),
              xr = fs(t, "WeakMap"),
              Rr = fs(xe, "create"),
              Nr = xr && new xr(),
              Tr = {},
              Cr = ks(Ir),
              jr = ks(Pr),
              Ur = ks(Or),
              Lr = ks(Ar),
              Mr = ks(xr),
              Dr = Ve ? Ve.prototype : r,
              kr = Dr ? Dr.valueOf : r,
              qr = Dr ? Dr.toString : r;
            function $r(e) {
              if (ra(e) && !Vo(e) && !(e instanceof Kr)) {
                if (e instanceof Br) return e;
                if (De.call(e, "__wrapped__")) return qs(e);
              }
              return new Br(e);
            }
            var zr = (function () {
              function e() {}
              return function (t) {
                if (!ta(t)) return {};
                if (Ye) return Ye(t);
                e.prototype = t;
                var n = new e();
                return (e.prototype = r), n;
              };
            })();
            function Hr() {}
            function Br(e, t) {
              (this.__wrapped__ = e),
                (this.__actions__ = []),
                (this.__chain__ = !!t),
                (this.__index__ = 0),
                (this.__values__ = r);
            }
            function Kr(e) {
              (this.__wrapped__ = e),
                (this.__actions__ = []),
                (this.__dir__ = 1),
                (this.__filtered__ = !1),
                (this.__iteratees__ = []),
                (this.__takeCount__ = d),
                (this.__views__ = []);
            }
            function Vr(e) {
              var t = -1,
                r = null == e ? 0 : e.length;
              for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1]);
              }
            }
            function Fr(e) {
              var t = -1,
                r = null == e ? 0 : e.length;
              for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1]);
              }
            }
            function Wr(e) {
              var t = -1,
                r = null == e ? 0 : e.length;
              for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1]);
              }
            }
            function Gr(e) {
              var t = -1,
                r = null == e ? 0 : e.length;
              for (this.__data__ = new Wr(); ++t < r; ) this.add(e[t]);
            }
            function Yr(e) {
              var t = (this.__data__ = new Fr(e));
              this.size = t.size;
            }
            function Jr(e, t) {
              var r = Vo(e),
                n = !r && Ko(e),
                i = !r && !n && Yo(e),
                s = !r && !n && !i && ha(e),
                o = r || n || i || s,
                a = o ? Qt(e.length, Ne) : [],
                c = a.length;
              for (var u in e)
                (t || De.call(e, u)) &&
                  (!o ||
                    !(
                      "length" == u ||
                      (i && ("offset" == u || "parent" == u)) ||
                      (s &&
                        ("buffer" == u ||
                          "byteLength" == u ||
                          "byteOffset" == u)) ||
                      ws(u, c)
                    )) &&
                  a.push(u);
              return a;
            }
            function Qr(e) {
              var t = e.length;
              return t ? e[Yn(0, t - 1)] : r;
            }
            function Xr(e, t) {
              return Ls(Ni(e), cn(t, 0, e.length));
            }
            function Zr(e) {
              return Ls(Ni(e));
            }
            function en(e, t, n) {
              ((n !== r && !zo(e[t], n)) || (n === r && !(t in e))) &&
                on(e, t, n);
            }
            function tn(e, t, n) {
              var i = e[t];
              (!De.call(e, t) || !zo(i, n) || (n === r && !(t in e))) &&
                on(e, t, n);
            }
            function rn(e, t) {
              for (var r = e.length; r--; ) if (zo(e[r][0], t)) return r;
              return -1;
            }
            function nn(e, t, r, n) {
              return (
                pn(e, function (e, i, s) {
                  t(n, e, r(e), s);
                }),
                n
              );
            }
            function sn(e, t) {
              return e && Ti(t, Ca(t), e);
            }
            function on(e, t, r) {
              "__proto__" == t && it
                ? it(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: r,
                    writable: !0,
                  })
                : (e[t] = r);
            }
            function an(e, t) {
              for (
                var n = -1, i = t.length, s = ae(i), o = null == e;
                ++n < i;

              )
                s[n] = o ? r : Aa(e, t[n]);
              return s;
            }
            function cn(e, t, n) {
              return (
                e === e &&
                  (n !== r && (e = e <= n ? e : n),
                  t !== r && (e = e >= t ? e : t)),
                e
              );
            }
            function un(e, t, n, i, s, o) {
              var a,
                c = 1 & t,
                u = 2 & t,
                h = 4 & t;
              if ((n && (a = s ? n(e, i, s, o) : n(e)), a !== r)) return a;
              if (!ta(e)) return e;
              var l = Vo(e);
              if (l) {
                if (
                  ((a = (function (e) {
                    var t = e.length,
                      r = new e.constructor(t);
                    return (
                      t &&
                        "string" == typeof e[0] &&
                        De.call(e, "index") &&
                        ((r.index = e.index), (r.input = e.input)),
                      r
                    );
                  })(e)),
                  !c)
                )
                  return Ni(e, a);
              } else {
                var f = gs(e),
                  p = f == S || f == I;
                if (Yo(e)) return Ii(e, c);
                if (f == A || f == m || (p && !s)) {
                  if (((a = u || p ? {} : vs(e)), !c))
                    return u
                      ? (function (e, t) {
                          return Ti(e, ds(e), t);
                        })(
                          e,
                          (function (e, t) {
                            return e && Ti(t, ja(t), e);
                          })(a, e)
                        )
                      : (function (e, t) {
                          return Ti(e, ps(e), t);
                        })(e, sn(a, e));
                } else {
                  if (!ut[f]) return s ? e : {};
                  a = (function (e, t, r) {
                    var n = e.constructor;
                    switch (t) {
                      case U:
                        return Pi(e);
                      case b:
                      case _:
                        return new n(+e);
                      case L:
                        return (function (e, t) {
                          var r = t ? Pi(e.buffer) : e.buffer;
                          return new e.constructor(
                            r,
                            e.byteOffset,
                            e.byteLength
                          );
                        })(e, r);
                      case M:
                      case D:
                      case k:
                      case q:
                      case $:
                      case z:
                      case H:
                      case B:
                      case K:
                        return Oi(e, r);
                      case P:
                        return new n();
                      case O:
                      case T:
                        return new n(e);
                      case R:
                        return (function (e) {
                          var t = new e.constructor(e.source, ge.exec(e));
                          return (t.lastIndex = e.lastIndex), t;
                        })(e);
                      case N:
                        return new n();
                      case C:
                        return (function (e) {
                          return kr ? xe(kr.call(e)) : {};
                        })(e);
                    }
                  })(e, f, c);
                }
              }
              o || (o = new Yr());
              var d = o.get(e);
              if (d) return d;
              o.set(e, a),
                aa(e)
                  ? e.forEach(function (r) {
                      a.add(un(r, t, n, r, e, o));
                    })
                  : na(e) &&
                    e.forEach(function (r, i) {
                      a.set(i, un(r, t, n, i, e, o));
                    });
              var g = l ? r : (h ? (u ? ss : is) : u ? ja : Ca)(e);
              return (
                Rt(g || e, function (r, i) {
                  g && (r = e[(i = r)]), tn(a, i, un(r, t, n, i, e, o));
                }),
                a
              );
            }
            function hn(e, t, n) {
              var i = n.length;
              if (null == e) return !i;
              for (e = xe(e); i--; ) {
                var s = n[i],
                  o = t[s],
                  a = e[s];
                if ((a === r && !(s in e)) || !o(a)) return !1;
              }
              return !0;
            }
            function ln(e, t, i) {
              if ("function" != typeof e) throw new Te(n);
              return Ts(function () {
                e.apply(r, i);
              }, t);
            }
            function fn(e, t, r, n) {
              var i = -1,
                s = jt,
                o = !0,
                a = e.length,
                c = [],
                u = t.length;
              if (!a) return c;
              r && (t = Lt(t, Zt(r))),
                n
                  ? ((s = Ut), (o = !1))
                  : t.length >= 200 && ((s = tr), (o = !1), (t = new Gr(t)));
              e: for (; ++i < a; ) {
                var h = e[i],
                  l = null == r ? h : r(h);
                if (((h = n || 0 !== h ? h : 0), o && l === l)) {
                  for (var f = u; f--; ) if (t[f] === l) continue e;
                  c.push(h);
                } else s(t, l, n) || c.push(h);
              }
              return c;
            }
            ($r.templateSettings = {
              escape: X,
              evaluate: Z,
              interpolate: ee,
              variable: "",
              imports: { _: $r },
            }),
              ($r.prototype = Hr.prototype),
              ($r.prototype.constructor = $r),
              (Br.prototype = zr(Hr.prototype)),
              (Br.prototype.constructor = Br),
              (Kr.prototype = zr(Hr.prototype)),
              (Kr.prototype.constructor = Kr),
              (Vr.prototype.clear = function () {
                (this.__data__ = Rr ? Rr(null) : {}), (this.size = 0);
              }),
              (Vr.prototype.delete = function (e) {
                var t = this.has(e) && delete this.__data__[e];
                return (this.size -= t ? 1 : 0), t;
              }),
              (Vr.prototype.get = function (e) {
                var t = this.__data__;
                if (Rr) {
                  var n = t[e];
                  return n === i ? r : n;
                }
                return De.call(t, e) ? t[e] : r;
              }),
              (Vr.prototype.has = function (e) {
                var t = this.__data__;
                return Rr ? t[e] !== r : De.call(t, e);
              }),
              (Vr.prototype.set = function (e, t) {
                var n = this.__data__;
                return (
                  (this.size += this.has(e) ? 0 : 1),
                  (n[e] = Rr && t === r ? i : t),
                  this
                );
              }),
              (Fr.prototype.clear = function () {
                (this.__data__ = []), (this.size = 0);
              }),
              (Fr.prototype.delete = function (e) {
                var t = this.__data__,
                  r = rn(t, e);
                return (
                  !(r < 0) &&
                  (r == t.length - 1 ? t.pop() : Qe.call(t, r, 1),
                  --this.size,
                  !0)
                );
              }),
              (Fr.prototype.get = function (e) {
                var t = this.__data__,
                  n = rn(t, e);
                return n < 0 ? r : t[n][1];
              }),
              (Fr.prototype.has = function (e) {
                return rn(this.__data__, e) > -1;
              }),
              (Fr.prototype.set = function (e, t) {
                var r = this.__data__,
                  n = rn(r, e);
                return (
                  n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this
                );
              }),
              (Wr.prototype.clear = function () {
                (this.size = 0),
                  (this.__data__ = {
                    hash: new Vr(),
                    map: new (Pr || Fr)(),
                    string: new Vr(),
                  });
              }),
              (Wr.prototype.delete = function (e) {
                var t = hs(this, e).delete(e);
                return (this.size -= t ? 1 : 0), t;
              }),
              (Wr.prototype.get = function (e) {
                return hs(this, e).get(e);
              }),
              (Wr.prototype.has = function (e) {
                return hs(this, e).has(e);
              }),
              (Wr.prototype.set = function (e, t) {
                var r = hs(this, e),
                  n = r.size;
                return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
              }),
              (Gr.prototype.add = Gr.prototype.push =
                function (e) {
                  return this.__data__.set(e, i), this;
                }),
              (Gr.prototype.has = function (e) {
                return this.__data__.has(e);
              }),
              (Yr.prototype.clear = function () {
                (this.__data__ = new Fr()), (this.size = 0);
              }),
              (Yr.prototype.delete = function (e) {
                var t = this.__data__,
                  r = t.delete(e);
                return (this.size = t.size), r;
              }),
              (Yr.prototype.get = function (e) {
                return this.__data__.get(e);
              }),
              (Yr.prototype.has = function (e) {
                return this.__data__.has(e);
              }),
              (Yr.prototype.set = function (e, t) {
                var r = this.__data__;
                if (r instanceof Fr) {
                  var n = r.__data__;
                  if (!Pr || n.length < 199)
                    return n.push([e, t]), (this.size = ++r.size), this;
                  r = this.__data__ = new Wr(n);
                }
                return r.set(e, t), (this.size = r.size), this;
              });
            var pn = Ui(_n),
              dn = Ui(En, !0);
            function gn(e, t) {
              var r = !0;
              return (
                pn(e, function (e, n, i) {
                  return (r = !!t(e, n, i));
                }),
                r
              );
            }
            function yn(e, t, n) {
              for (var i = -1, s = e.length; ++i < s; ) {
                var o = e[i],
                  a = t(o);
                if (null != a && (c === r ? a === a && !ua(a) : n(a, c)))
                  var c = a,
                    u = o;
              }
              return u;
            }
            function vn(e, t) {
              var r = [];
              return (
                pn(e, function (e, n, i) {
                  t(e, n, i) && r.push(e);
                }),
                r
              );
            }
            function mn(e, t, r, n, i) {
              var s = -1,
                o = e.length;
              for (r || (r = ms), i || (i = []); ++s < o; ) {
                var a = e[s];
                t > 0 && r(a)
                  ? t > 1
                    ? mn(a, t - 1, r, n, i)
                    : Mt(i, a)
                  : n || (i[i.length] = a);
              }
              return i;
            }
            var wn = Li(),
              bn = Li(!0);
            function _n(e, t) {
              return e && wn(e, t, Ca);
            }
            function En(e, t) {
              return e && bn(e, t, Ca);
            }
            function Sn(e, t) {
              return Ct(t, function (t) {
                return Xo(e[t]);
              });
            }
            function In(e, t) {
              for (var n = 0, i = (t = bi(t, e)).length; null != e && n < i; )
                e = e[Ds(t[n++])];
              return n && n == i ? e : r;
            }
            function Pn(e, t, r) {
              var n = t(e);
              return Vo(e) ? n : Mt(n, r(e));
            }
            function On(e) {
              return null == e
                ? e === r
                  ? "[object Undefined]"
                  : "[object Null]"
                : rt && rt in xe(e)
                ? (function (e) {
                    var t = De.call(e, rt),
                      n = e[rt];
                    try {
                      e[rt] = r;
                      var i = !0;
                    } catch {}
                    var s = $e.call(e);
                    return i && (t ? (e[rt] = n) : delete e[rt]), s;
                  })(e)
                : (function (e) {
                    return $e.call(e);
                  })(e);
            }
            function An(e, t) {
              return e > t;
            }
            function xn(e, t) {
              return null != e && De.call(e, t);
            }
            function Rn(e, t) {
              return null != e && t in xe(e);
            }
            function Nn(e, t, n) {
              for (
                var i = n ? Ut : jt,
                  s = e[0].length,
                  o = e.length,
                  a = o,
                  c = ae(o),
                  u = 1 / 0,
                  h = [];
                a--;

              ) {
                var l = e[a];
                a && t && (l = Lt(l, Zt(t))),
                  (u = wr(l.length, u)),
                  (c[a] =
                    !n && (t || (s >= 120 && l.length >= 120))
                      ? new Gr(a && l)
                      : r);
              }
              l = e[0];
              var f = -1,
                p = c[0];
              e: for (; ++f < s && h.length < u; ) {
                var d = l[f],
                  g = t ? t(d) : d;
                if (
                  ((d = n || 0 !== d ? d : 0), !(p ? tr(p, g) : i(h, g, n)))
                ) {
                  for (a = o; --a; ) {
                    var y = c[a];
                    if (!(y ? tr(y, g) : i(e[a], g, n))) continue e;
                  }
                  p && p.push(g), h.push(d);
                }
              }
              return h;
            }
            function Tn(e, t, n) {
              var i = null == (e = xs(e, (t = bi(t, e)))) ? e : e[Ds(Js(t))];
              return null == i ? r : At(i, e, n);
            }
            function Cn(e) {
              return ra(e) && On(e) == m;
            }
            function jn(e, t, n, i, s) {
              return (
                e === t ||
                (null == e || null == t || (!ra(e) && !ra(t))
                  ? e !== e && t !== t
                  : (function (e, t, n, i, s, o) {
                      var a = Vo(e),
                        c = Vo(t),
                        u = a ? w : gs(e),
                        h = c ? w : gs(t);
                      (u = u == m ? A : u), (h = h == m ? A : h);
                      var l = u == A,
                        f = h == A,
                        p = u == h;
                      if (p && Yo(e)) {
                        if (!Yo(t)) return !1;
                        (a = !0), (l = !1);
                      }
                      if (p && !l)
                        return (
                          o || (o = new Yr()),
                          a || ha(e)
                            ? rs(e, t, n, i, s, o)
                            : (function (e, t, r, n, i, s, o) {
                                switch (r) {
                                  case L:
                                    if (
                                      e.byteLength != t.byteLength ||
                                      e.byteOffset != t.byteOffset
                                    )
                                      return !1;
                                    (e = e.buffer), (t = t.buffer);
                                  case U:
                                    return !(
                                      e.byteLength != t.byteLength ||
                                      !s(new Fe(e), new Fe(t))
                                    );
                                  case b:
                                  case _:
                                  case O:
                                    return zo(+e, +t);
                                  case E:
                                    return (
                                      e.name == t.name && e.message == t.message
                                    );
                                  case R:
                                  case T:
                                    return e == t + "";
                                  case P:
                                    var a = cr;
                                  case N:
                                    var c = 1 & n;
                                    if ((a || (a = lr), e.size != t.size && !c))
                                      return !1;
                                    var u = o.get(e);
                                    if (u) return u == t;
                                    (n |= 2), o.set(e, t);
                                    var h = rs(a(e), a(t), n, i, s, o);
                                    return o.delete(e), h;
                                  case C:
                                    if (kr) return kr.call(e) == kr.call(t);
                                }
                                return !1;
                              })(e, t, u, n, i, s, o)
                        );
                      if (!(1 & n)) {
                        var d = l && De.call(e, "__wrapped__"),
                          g = f && De.call(t, "__wrapped__");
                        if (d || g) {
                          var y = d ? e.value() : e,
                            v = g ? t.value() : t;
                          return o || (o = new Yr()), s(y, v, n, i, o);
                        }
                      }
                      return (
                        !!p &&
                        (o || (o = new Yr()),
                        (function (e, t, n, i, s, o) {
                          var a = 1 & n,
                            c = is(e),
                            u = c.length,
                            h = is(t),
                            l = h.length;
                          if (u != l && !a) return !1;
                          for (var f = u; f--; ) {
                            var p = c[f];
                            if (!(a ? p in t : De.call(t, p))) return !1;
                          }
                          var d = o.get(e),
                            g = o.get(t);
                          if (d && g) return d == t && g == e;
                          var y = !0;
                          o.set(e, t), o.set(t, e);
                          for (var v = a; ++f < u; ) {
                            var m = e[(p = c[f])],
                              w = t[p];
                            if (i)
                              var b = a
                                ? i(w, m, p, t, e, o)
                                : i(m, w, p, e, t, o);
                            if (!(b === r ? m === w || s(m, w, n, i, o) : b)) {
                              y = !1;
                              break;
                            }
                            v || (v = "constructor" == p);
                          }
                          if (y && !v) {
                            var _ = e.constructor,
                              E = t.constructor;
                            _ != E &&
                              "constructor" in e &&
                              "constructor" in t &&
                              !(
                                "function" == typeof _ &&
                                _ instanceof _ &&
                                "function" == typeof E &&
                                E instanceof E
                              ) &&
                              (y = !1);
                          }
                          return o.delete(e), o.delete(t), y;
                        })(e, t, n, i, s, o))
                      );
                    })(e, t, n, i, jn, s))
              );
            }
            function Un(e, t, n, i) {
              var s = n.length,
                o = s,
                a = !i;
              if (null == e) return !o;
              for (e = xe(e); s--; ) {
                var c = n[s];
                if (a && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1;
              }
              for (; ++s < o; ) {
                var u = (c = n[s])[0],
                  h = e[u],
                  l = c[1];
                if (a && c[2]) {
                  if (h === r && !(u in e)) return !1;
                } else {
                  var f = new Yr();
                  if (i) var p = i(h, l, u, e, t, f);
                  if (!(p === r ? jn(l, h, 3, i, f) : p)) return !1;
                }
              }
              return !0;
            }
            function Ln(e) {
              return (
                !(
                  !ta(e) ||
                  (function (e) {
                    return !!qe && qe in e;
                  })(e)
                ) && (Xo(e) ? Be : me).test(ks(e))
              );
            }
            function Mn(e) {
              return "function" == typeof e
                ? e
                : null == e
                ? ic
                : "object" == typeof e
                ? Vo(e)
                  ? Hn(e[0], e[1])
                  : zn(e)
                : pc(e);
            }
            function Dn(e) {
              if (!Is(e)) return vr(e);
              var t = [];
              for (var r in xe(e))
                De.call(e, r) && "constructor" != r && t.push(r);
              return t;
            }
            function kn(e) {
              if (!ta(e))
                return (function (e) {
                  var t = [];
                  if (null != e) for (var r in xe(e)) t.push(r);
                  return t;
                })(e);
              var t = Is(e),
                r = [];
              for (var n in e)
                ("constructor" == n && (t || !De.call(e, n))) || r.push(n);
              return r;
            }
            function qn(e, t) {
              return e < t;
            }
            function $n(e, t) {
              var r = -1,
                n = Wo(e) ? ae(e.length) : [];
              return (
                pn(e, function (e, i, s) {
                  n[++r] = t(e, i, s);
                }),
                n
              );
            }
            function zn(e) {
              var t = ls(e);
              return 1 == t.length && t[0][2]
                ? Os(t[0][0], t[0][1])
                : function (r) {
                    return r === e || Un(r, e, t);
                  };
            }
            function Hn(e, t) {
              return _s(e) && Ps(t)
                ? Os(Ds(e), t)
                : function (n) {
                    var i = Aa(n, e);
                    return i === r && i === t ? xa(n, e) : jn(t, i, 3);
                  };
            }
            function Bn(e, t, n, i, s) {
              e !== t &&
                wn(
                  t,
                  function (o, a) {
                    if ((s || (s = new Yr()), ta(o)))
                      !(function (e, t, n, i, s, o, a) {
                        var c = Rs(e, n),
                          u = Rs(t, n),
                          h = a.get(u);
                        if (h) return void en(e, n, h);
                        var l = o ? o(c, u, n + "", e, t, a) : r,
                          f = l === r;
                        if (f) {
                          var p = Vo(u),
                            d = !p && Yo(u),
                            g = !p && !d && ha(u);
                          (l = u),
                            p || d || g
                              ? Vo(c)
                                ? (l = c)
                                : Go(c)
                                ? (l = Ni(c))
                                : d
                                ? ((f = !1), (l = Ii(u, !0)))
                                : g
                                ? ((f = !1), (l = Oi(u, !0)))
                                : (l = [])
                              : sa(u) || Ko(u)
                              ? ((l = c),
                                Ko(c)
                                  ? (l = ma(c))
                                  : (!ta(c) || Xo(c)) && (l = vs(u)))
                              : (f = !1);
                        }
                        f && (a.set(u, l), s(l, u, i, o, a), a.delete(u)),
                          en(e, n, l);
                      })(e, t, a, n, Bn, i, s);
                    else {
                      var c = i ? i(Rs(e, a), o, a + "", e, t, s) : r;
                      c === r && (c = o), en(e, a, c);
                    }
                  },
                  ja
                );
            }
            function Kn(e, t) {
              var n = e.length;
              if (n) return ws((t += t < 0 ? n : 0), n) ? e[t] : r;
            }
            function Vn(e, t, r) {
              t = t.length
                ? Lt(t, function (e) {
                    return Vo(e)
                      ? function (t) {
                          return In(t, 1 === e.length ? e[0] : e);
                        }
                      : e;
                  })
                : [ic];
              var n = -1;
              t = Lt(t, Zt(us()));
              var i = $n(e, function (e, r, i) {
                var s = Lt(t, function (t) {
                  return t(e);
                });
                return { criteria: s, index: ++n, value: e };
              });
              return (function (e, t) {
                var r = e.length;
                for (e.sort(t); r--; ) e[r] = e[r].value;
                return e;
              })(i, function (e, t) {
                return (function (e, t, r) {
                  for (
                    var n = -1,
                      i = e.criteria,
                      s = t.criteria,
                      o = i.length,
                      a = r.length;
                    ++n < o;

                  ) {
                    var c = Ai(i[n], s[n]);
                    if (c) return n >= a ? c : c * ("desc" == r[n] ? -1 : 1);
                  }
                  return e.index - t.index;
                })(e, t, r);
              });
            }
            function Fn(e, t, r) {
              for (var n = -1, i = t.length, s = {}; ++n < i; ) {
                var o = t[n],
                  a = In(e, o);
                r(a, o) && ei(s, bi(o, e), a);
              }
              return s;
            }
            function Wn(e, t, r, n) {
              var i = n ? Kt : Bt,
                s = -1,
                o = t.length,
                a = e;
              for (e === t && (t = Ni(t)), r && (a = Lt(e, Zt(r))); ++s < o; )
                for (
                  var c = 0, u = t[s], h = r ? r(u) : u;
                  (c = i(a, h, c, n)) > -1;

                )
                  a !== e && Qe.call(a, c, 1), Qe.call(e, c, 1);
              return e;
            }
            function Gn(e, t) {
              for (var r = e ? t.length : 0, n = r - 1; r--; ) {
                var i = t[r];
                if (r == n || i !== s) {
                  var s = i;
                  ws(i) ? Qe.call(e, i, 1) : fi(e, i);
                }
              }
              return e;
            }
            function Yn(e, t) {
              return e + vt(Er() * (t - e + 1));
            }
            function Jn(e, t) {
              var r = "";
              if (!e || t < 1 || t > f) return r;
              do {
                t % 2 && (r += e), (t = vt(t / 2)) && (e += e);
              } while (t);
              return r;
            }
            function Qn(e, t) {
              return Cs(As(e, t, ic), e + "");
            }
            function Xn(e) {
              return Qr(za(e));
            }
            function Zn(e, t) {
              var r = za(e);
              return Ls(r, cn(t, 0, r.length));
            }
            function ei(e, t, n, i) {
              if (!ta(e)) return e;
              for (
                var s = -1, o = (t = bi(t, e)).length, a = o - 1, c = e;
                null != c && ++s < o;

              ) {
                var u = Ds(t[s]),
                  h = n;
                if (
                  "__proto__" === u ||
                  "constructor" === u ||
                  "prototype" === u
                )
                  return e;
                if (s != a) {
                  var l = c[u];
                  (h = i ? i(l, u, c) : r) === r &&
                    (h = ta(l) ? l : ws(t[s + 1]) ? [] : {});
                }
                tn(c, u, h), (c = c[u]);
              }
              return e;
            }
            var ti = Nr
                ? function (e, t) {
                    return Nr.set(e, t), e;
                  }
                : ic,
              ri = it
                ? function (e, t) {
                    return it(e, "toString", {
                      configurable: !0,
                      enumerable: !1,
                      value: tc(t),
                      writable: !0,
                    });
                  }
                : ic;
            function ni(e) {
              return Ls(za(e));
            }
            function ii(e, t, r) {
              var n = -1,
                i = e.length;
              t < 0 && (t = -t > i ? 0 : i + t),
                (r = r > i ? i : r) < 0 && (r += i),
                (i = t > r ? 0 : (r - t) >>> 0),
                (t >>>= 0);
              for (var s = ae(i); ++n < i; ) s[n] = e[n + t];
              return s;
            }
            function si(e, t) {
              var r;
              return (
                pn(e, function (e, n, i) {
                  return !(r = t(e, n, i));
                }),
                !!r
              );
            }
            function oi(e, t, r) {
              var n = 0,
                i = null == e ? n : e.length;
              if ("number" == typeof t && t === t && i <= y) {
                for (; n < i; ) {
                  var s = (n + i) >>> 1,
                    o = e[s];
                  null !== o && !ua(o) && (r ? o <= t : o < t)
                    ? (n = s + 1)
                    : (i = s);
                }
                return i;
              }
              return ai(e, t, ic, r);
            }
            function ai(e, t, n, i) {
              var s = 0,
                o = null == e ? 0 : e.length;
              if (0 === o) return 0;
              for (
                var a = (t = n(t)) !== t,
                  c = null === t,
                  u = ua(t),
                  h = t === r;
                s < o;

              ) {
                var l = vt((s + o) / 2),
                  f = n(e[l]),
                  p = f !== r,
                  d = null === f,
                  y = f === f,
                  v = ua(f);
                if (a) var m = i || y;
                else
                  m = h
                    ? y && (i || p)
                    : c
                    ? y && p && (i || !d)
                    : u
                    ? y && p && !d && (i || !v)
                    : !d && !v && (i ? f <= t : f < t);
                m ? (s = l + 1) : (o = l);
              }
              return wr(o, g);
            }
            function ci(e, t) {
              for (var r = -1, n = e.length, i = 0, s = []; ++r < n; ) {
                var o = e[r],
                  a = t ? t(o) : o;
                if (!r || !zo(a, c)) {
                  var c = a;
                  s[i++] = 0 === o ? 0 : o;
                }
              }
              return s;
            }
            function ui(e) {
              return "number" == typeof e ? e : ua(e) ? p : +e;
            }
            function hi(e) {
              if ("string" == typeof e) return e;
              if (Vo(e)) return Lt(e, hi) + "";
              if (ua(e)) return qr ? qr.call(e) : "";
              var t = e + "";
              return "0" == t && 1 / e == -l ? "-0" : t;
            }
            function li(e, t, r) {
              var n = -1,
                i = jt,
                s = e.length,
                o = !0,
                a = [],
                c = a;
              if (r) (o = !1), (i = Ut);
              else if (s >= 200) {
                var u = t ? null : Ji(e);
                if (u) return lr(u);
                (o = !1), (i = tr), (c = new Gr());
              } else c = t ? [] : a;
              e: for (; ++n < s; ) {
                var h = e[n],
                  l = t ? t(h) : h;
                if (((h = r || 0 !== h ? h : 0), o && l === l)) {
                  for (var f = c.length; f--; ) if (c[f] === l) continue e;
                  t && c.push(l), a.push(h);
                } else i(c, l, r) || (c !== a && c.push(l), a.push(h));
              }
              return a;
            }
            function fi(e, t) {
              return null == (e = xs(e, (t = bi(t, e)))) || delete e[Ds(Js(t))];
            }
            function pi(e, t, r, n) {
              return ei(e, t, r(In(e, t)), n);
            }
            function di(e, t, r, n) {
              for (
                var i = e.length, s = n ? i : -1;
                (n ? s-- : ++s < i) && t(e[s], s, e);

              );
              return r
                ? ii(e, n ? 0 : s, n ? s + 1 : i)
                : ii(e, n ? s + 1 : 0, n ? i : s);
            }
            function gi(e, t) {
              var r = e;
              return (
                r instanceof Kr && (r = r.value()),
                Dt(
                  t,
                  function (e, t) {
                    return t.func.apply(t.thisArg, Mt([e], t.args));
                  },
                  r
                )
              );
            }
            function yi(e, t, r) {
              var n = e.length;
              if (n < 2) return n ? li(e[0]) : [];
              for (var i = -1, s = ae(n); ++i < n; )
                for (var o = e[i], a = -1; ++a < n; )
                  a != i && (s[i] = fn(s[i] || o, e[a], t, r));
              return li(mn(s, 1), t, r);
            }
            function vi(e, t, n) {
              for (var i = -1, s = e.length, o = t.length, a = {}; ++i < s; ) {
                var c = i < o ? t[i] : r;
                n(a, e[i], c);
              }
              return a;
            }
            function mi(e) {
              return Go(e) ? e : [];
            }
            function wi(e) {
              return "function" == typeof e ? e : ic;
            }
            function bi(e, t) {
              return Vo(e) ? e : _s(e, t) ? [e] : Ms(wa(e));
            }
            var _i = Qn;
            function Ei(e, t, n) {
              var i = e.length;
              return (n = n === r ? i : n), !t && n >= i ? e : ii(e, t, n);
            }
            var Si =
              ht ||
              function (e) {
                return gt.clearTimeout(e);
              };
            function Ii(e, t) {
              if (t) return e.slice();
              var r = e.length,
                n = We ? We(r) : new e.constructor(r);
              return e.copy(n), n;
            }
            function Pi(e) {
              var t = new e.constructor(e.byteLength);
              return new Fe(t).set(new Fe(e)), t;
            }
            function Oi(e, t) {
              var r = t ? Pi(e.buffer) : e.buffer;
              return new e.constructor(r, e.byteOffset, e.length);
            }
            function Ai(e, t) {
              if (e !== t) {
                var n = e !== r,
                  i = null === e,
                  s = e === e,
                  o = ua(e),
                  a = t !== r,
                  c = null === t,
                  u = t === t,
                  h = ua(t);
                if (
                  (!c && !h && !o && e > t) ||
                  (o && a && u && !c && !h) ||
                  (i && a && u) ||
                  (!n && u) ||
                  !s
                )
                  return 1;
                if (
                  (!i && !o && !h && e < t) ||
                  (h && n && s && !i && !o) ||
                  (c && n && s) ||
                  (!a && s) ||
                  !u
                )
                  return -1;
              }
              return 0;
            }
            function xi(e, t, r, n) {
              for (
                var i = -1,
                  s = e.length,
                  o = r.length,
                  a = -1,
                  c = t.length,
                  u = mr(s - o, 0),
                  h = ae(c + u),
                  l = !n;
                ++a < c;

              )
                h[a] = t[a];
              for (; ++i < o; ) (l || i < s) && (h[r[i]] = e[i]);
              for (; u--; ) h[a++] = e[i++];
              return h;
            }
            function Ri(e, t, r, n) {
              for (
                var i = -1,
                  s = e.length,
                  o = -1,
                  a = r.length,
                  c = -1,
                  u = t.length,
                  h = mr(s - a, 0),
                  l = ae(h + u),
                  f = !n;
                ++i < h;

              )
                l[i] = e[i];
              for (var p = i; ++c < u; ) l[p + c] = t[c];
              for (; ++o < a; ) (f || i < s) && (l[p + r[o]] = e[i++]);
              return l;
            }
            function Ni(e, t) {
              var r = -1,
                n = e.length;
              for (t || (t = ae(n)); ++r < n; ) t[r] = e[r];
              return t;
            }
            function Ti(e, t, n, i) {
              var s = !n;
              n || (n = {});
              for (var o = -1, a = t.length; ++o < a; ) {
                var c = t[o],
                  u = i ? i(n[c], e[c], c, n, e) : r;
                u === r && (u = e[c]), s ? on(n, c, u) : tn(n, c, u);
              }
              return n;
            }
            function Ci(e, t) {
              return function (r, n) {
                var i = Vo(r) ? xt : nn,
                  s = t ? t() : {};
                return i(r, e, us(n, 2), s);
              };
            }
            function ji(e) {
              return Qn(function (t, n) {
                var i = -1,
                  s = n.length,
                  o = s > 1 ? n[s - 1] : r,
                  a = s > 2 ? n[2] : r;
                for (
                  o = e.length > 3 && "function" == typeof o ? (s--, o) : r,
                    a && bs(n[0], n[1], a) && ((o = s < 3 ? r : o), (s = 1)),
                    t = xe(t);
                  ++i < s;

                ) {
                  var c = n[i];
                  c && e(t, c, i, o);
                }
                return t;
              });
            }
            function Ui(e, t) {
              return function (r, n) {
                if (null == r) return r;
                if (!Wo(r)) return e(r, n);
                for (
                  var i = r.length, s = t ? i : -1, o = xe(r);
                  (t ? s-- : ++s < i) && !1 !== n(o[s], s, o);

                );
                return r;
              };
            }
            function Li(e) {
              return function (t, r, n) {
                for (var i = -1, s = xe(t), o = n(t), a = o.length; a--; ) {
                  var c = o[e ? a : ++i];
                  if (!1 === r(s[c], c, s)) break;
                }
                return t;
              };
            }
            function Mi(e) {
              return function (t) {
                var n = ar((t = wa(t))) ? pr(t) : r,
                  i = n ? n[0] : t.charAt(0),
                  s = n ? Ei(n, 1).join("") : t.slice(1);
                return i[e]() + s;
              };
            }
            function Di(e) {
              return function (t) {
                return Dt(Xa(Ka(t).replace(et, "")), e, "");
              };
            }
            function ki(e) {
              return function () {
                var t = arguments;
                switch (t.length) {
                  case 0:
                    return new e();
                  case 1:
                    return new e(t[0]);
                  case 2:
                    return new e(t[0], t[1]);
                  case 3:
                    return new e(t[0], t[1], t[2]);
                  case 4:
                    return new e(t[0], t[1], t[2], t[3]);
                  case 5:
                    return new e(t[0], t[1], t[2], t[3], t[4]);
                  case 6:
                    return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                  case 7:
                    return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
                }
                var r = zr(e.prototype),
                  n = e.apply(r, t);
                return ta(n) ? n : r;
              };
            }
            function qi(e) {
              return function (t, n, i) {
                var s = xe(t);
                if (!Wo(t)) {
                  var o = us(n, 3);
                  (t = Ca(t)),
                    (n = function (e) {
                      return o(s[e], e, s);
                    });
                }
                var a = e(t, n, i);
                return a > -1 ? s[o ? t[a] : a] : r;
              };
            }
            function $i(e) {
              return ns(function (t) {
                var i = t.length,
                  s = i,
                  o = Br.prototype.thru;
                for (e && t.reverse(); s--; ) {
                  var a = t[s];
                  if ("function" != typeof a) throw new Te(n);
                  if (o && !c && "wrapper" == as(a)) var c = new Br([], !0);
                }
                for (s = c ? s : i; ++s < i; ) {
                  var u = as((a = t[s])),
                    h = "wrapper" == u ? os(a) : r;
                  c =
                    h && Es(h[0]) && 424 == h[1] && !h[4].length && 1 == h[9]
                      ? c[as(h[0])].apply(c, h[3])
                      : 1 == a.length && Es(a)
                      ? c[u]()
                      : c.thru(a);
                }
                return function () {
                  var e = arguments,
                    r = e[0];
                  if (c && 1 == e.length && Vo(r)) return c.plant(r).value();
                  for (var n = 0, s = i ? t[n].apply(this, e) : r; ++n < i; )
                    s = t[n].call(this, s);
                  return s;
                };
              });
            }
            function zi(e, t, n, i, s, o, a, c, h, l) {
              var f = t & u,
                p = 1 & t,
                d = 2 & t,
                g = 24 & t,
                y = 512 & t,
                v = d ? r : ki(e);
              return function u() {
                for (var m = arguments.length, w = ae(m), b = m; b--; )
                  w[b] = arguments[b];
                if (g)
                  var _ = cs(u),
                    E = (function (e, t) {
                      for (var r = e.length, n = 0; r--; ) e[r] === t && ++n;
                      return n;
                    })(w, _);
                if (
                  (i && (w = xi(w, i, s, g)),
                  o && (w = Ri(w, o, a, g)),
                  (m -= E),
                  g && m < l)
                ) {
                  var S = hr(w, _);
                  return Gi(e, t, zi, u.placeholder, n, w, S, c, h, l - m);
                }
                var I = p ? n : this,
                  P = d ? I[e] : e;
                return (
                  (m = w.length),
                  c
                    ? (w = (function (e, t) {
                        for (
                          var n = e.length, i = wr(t.length, n), s = Ni(e);
                          i--;

                        ) {
                          var o = t[i];
                          e[i] = ws(o, n) ? s[o] : r;
                        }
                        return e;
                      })(w, c))
                    : y && m > 1 && w.reverse(),
                  f && h < m && (w.length = h),
                  this && this !== gt && this instanceof u && (P = v || ki(P)),
                  P.apply(I, w)
                );
              };
            }
            function Hi(e, t) {
              return function (r, n) {
                return (function (e, t, r, n) {
                  return (
                    _n(e, function (e, i, s) {
                      t(n, r(e), i, s);
                    }),
                    n
                  );
                })(r, e, t(n), {});
              };
            }
            function Bi(e, t) {
              return function (n, i) {
                var s;
                if (n === r && i === r) return t;
                if ((n !== r && (s = n), i !== r)) {
                  if (s === r) return i;
                  "string" == typeof n || "string" == typeof i
                    ? ((n = hi(n)), (i = hi(i)))
                    : ((n = ui(n)), (i = ui(i))),
                    (s = e(n, i));
                }
                return s;
              };
            }
            function Ki(e) {
              return ns(function (t) {
                return (
                  (t = Lt(t, Zt(us()))),
                  Qn(function (r) {
                    var n = this;
                    return e(t, function (e) {
                      return At(e, n, r);
                    });
                  })
                );
              });
            }
            function Vi(e, t) {
              var n = (t = t === r ? " " : hi(t)).length;
              if (n < 2) return n ? Jn(t, e) : t;
              var i = Jn(t, yt(e / fr(t)));
              return ar(t) ? Ei(pr(i), 0, e).join("") : i.slice(0, e);
            }
            function Fi(e) {
              return function (t, n, i) {
                return (
                  i && "number" != typeof i && bs(t, n, i) && (n = i = r),
                  (t = da(t)),
                  n === r ? ((n = t), (t = 0)) : (n = da(n)),
                  (function (e, t, r, n) {
                    for (
                      var i = -1, s = mr(yt((t - e) / (r || 1)), 0), o = ae(s);
                      s--;

                    )
                      (o[n ? s : ++i] = e), (e += r);
                    return o;
                  })(t, n, (i = i === r ? (t < n ? 1 : -1) : da(i)), e)
                );
              };
            }
            function Wi(e) {
              return function (t, r) {
                return (
                  ("string" == typeof t && "string" == typeof r) ||
                    ((t = va(t)), (r = va(r))),
                  e(t, r)
                );
              };
            }
            function Gi(e, t, n, i, s, o, u, h, l, f) {
              var p = 8 & t;
              (t |= p ? a : c), 4 & (t &= ~(p ? c : a)) || (t &= -4);
              var d = [
                  e,
                  t,
                  s,
                  p ? o : r,
                  p ? u : r,
                  p ? r : o,
                  p ? r : u,
                  h,
                  l,
                  f,
                ],
                g = n.apply(r, d);
              return Es(e) && Ns(g, d), (g.placeholder = i), js(g, e, t);
            }
            function Yi(e) {
              var t = Ae[e];
              return function (e, r) {
                if (
                  ((e = va(e)), (r = null == r ? 0 : wr(ga(r), 292)) && $t(e))
                ) {
                  var n = (wa(e) + "e").split("e");
                  return +(
                    (n = (wa(t(n[0] + "e" + (+n[1] + r))) + "e").split(
                      "e"
                    ))[0] +
                    "e" +
                    (+n[1] - r)
                  );
                }
                return t(e);
              };
            }
            var Ji =
              Ar && 1 / lr(new Ar([, -0]))[1] == l
                ? function (e) {
                    return new Ar(e);
                  }
                : uc;
            function Qi(e) {
              return function (t) {
                var r = gs(t);
                return r == P
                  ? cr(t)
                  : r == N
                  ? (function (e) {
                      var t = -1,
                        r = Array(e.size);
                      return (
                        e.forEach(function (e) {
                          r[++t] = [e, e];
                        }),
                        r
                      );
                    })(t)
                  : (function (e, t) {
                      return Lt(t, function (t) {
                        return [t, e[t]];
                      });
                    })(t, e(t));
              };
            }
            function Xi(e, t, i, l, f, p, d, g) {
              var y = 2 & t;
              if (!y && "function" != typeof e) throw new Te(n);
              var v = l ? l.length : 0;
              if (
                (v || ((t &= -97), (l = f = r)),
                (d = d === r ? d : mr(ga(d), 0)),
                (g = g === r ? g : ga(g)),
                (v -= f ? f.length : 0),
                t & c)
              ) {
                var m = l,
                  w = f;
                l = f = r;
              }
              var b = y ? r : os(e),
                _ = [e, t, i, l, f, m, w, p, d, g];
              if (
                (b &&
                  (function (e, t) {
                    var r = e[1],
                      n = t[1],
                      i = r | n,
                      o = i < 131,
                      a =
                        (n == u && 8 == r) ||
                        (n == u && r == h && e[7].length <= t[8]) ||
                        (384 == n && t[7].length <= t[8] && 8 == r);
                    if (!o && !a) return e;
                    1 & n && ((e[2] = t[2]), (i |= 1 & r ? 0 : 4));
                    var c = t[3];
                    if (c) {
                      var l = e[3];
                      (e[3] = l ? xi(l, c, t[4]) : c),
                        (e[4] = l ? hr(e[3], s) : t[4]);
                    }
                    (c = t[5]),
                      c &&
                        ((l = e[5]),
                        (e[5] = l ? Ri(l, c, t[6]) : c),
                        (e[6] = l ? hr(e[5], s) : t[6])),
                      (c = t[7]),
                      c && (e[7] = c),
                      n & u && (e[8] = null == e[8] ? t[8] : wr(e[8], t[8])),
                      null == e[9] && (e[9] = t[9]),
                      (e[0] = t[0]),
                      (e[1] = i);
                  })(_, b),
                (e = _[0]),
                (t = _[1]),
                (i = _[2]),
                (l = _[3]),
                (f = _[4]),
                !(g = _[9] =
                  _[9] === r ? (y ? 0 : e.length) : mr(_[9] - v, 0)) &&
                  24 & t &&
                  (t &= -25),
                t && 1 != t)
              )
                E =
                  8 == t || t == o
                    ? (function (e, t, n) {
                        var i = ki(e);
                        return function s() {
                          for (
                            var o = arguments.length,
                              a = ae(o),
                              c = o,
                              u = cs(s);
                            c--;

                          )
                            a[c] = arguments[c];
                          var h =
                            o < 3 && a[0] !== u && a[o - 1] !== u
                              ? []
                              : hr(a, u);
                          return (o -= h.length) < n
                            ? Gi(e, t, zi, s.placeholder, r, a, h, r, r, n - o)
                            : At(
                                this && this !== gt && this instanceof s
                                  ? i
                                  : e,
                                this,
                                a
                              );
                        };
                      })(e, t, g)
                    : (t != a && 33 != t) || f.length
                    ? zi.apply(r, _)
                    : (function (e, t, r, n) {
                        var i = 1 & t,
                          s = ki(e);
                        return function t() {
                          for (
                            var o = -1,
                              a = arguments.length,
                              c = -1,
                              u = n.length,
                              h = ae(u + a),
                              l =
                                this && this !== gt && this instanceof t
                                  ? s
                                  : e;
                            ++c < u;

                          )
                            h[c] = n[c];
                          for (; a--; ) h[c++] = arguments[++o];
                          return At(l, i ? r : this, h);
                        };
                      })(e, t, i, l);
              else
                var E = (function (e, t, r) {
                  var n = 1 & t,
                    i = ki(e);
                  return function t() {
                    return (
                      this && this !== gt && this instanceof t ? i : e
                    ).apply(n ? r : this, arguments);
                  };
                })(e, t, i);
              return js((b ? ti : Ns)(E, _), e, t);
            }
            function Zi(e, t, n, i) {
              return e === r || (zo(e, Ue[n]) && !De.call(i, n)) ? t : e;
            }
            function es(e, t, n, i, s, o) {
              return (
                ta(e) &&
                  ta(t) &&
                  (o.set(t, e), Bn(e, t, r, es, o), o.delete(t)),
                e
              );
            }
            function ts(e) {
              return sa(e) ? r : e;
            }
            function rs(e, t, n, i, s, o) {
              var a = 1 & n,
                c = e.length,
                u = t.length;
              if (c != u && !(a && u > c)) return !1;
              var h = o.get(e),
                l = o.get(t);
              if (h && l) return h == t && l == e;
              var f = -1,
                p = !0,
                d = 2 & n ? new Gr() : r;
              for (o.set(e, t), o.set(t, e); ++f < c; ) {
                var g = e[f],
                  y = t[f];
                if (i) var v = a ? i(y, g, f, t, e, o) : i(g, y, f, e, t, o);
                if (v !== r) {
                  if (v) continue;
                  p = !1;
                  break;
                }
                if (d) {
                  if (
                    !qt(t, function (e, t) {
                      if (!tr(d, t) && (g === e || s(g, e, n, i, o)))
                        return d.push(t);
                    })
                  ) {
                    p = !1;
                    break;
                  }
                } else if (g !== y && !s(g, y, n, i, o)) {
                  p = !1;
                  break;
                }
              }
              return o.delete(e), o.delete(t), p;
            }
            function ns(e) {
              return Cs(As(e, r, Vs), e + "");
            }
            function is(e) {
              return Pn(e, Ca, ps);
            }
            function ss(e) {
              return Pn(e, ja, ds);
            }
            var os = Nr
              ? function (e) {
                  return Nr.get(e);
                }
              : uc;
            function as(e) {
              for (
                var t = e.name + "",
                  r = Tr[t],
                  n = De.call(Tr, t) ? r.length : 0;
                n--;

              ) {
                var i = r[n],
                  s = i.func;
                if (null == s || s == e) return i.name;
              }
              return t;
            }
            function cs(e) {
              return (De.call($r, "placeholder") ? $r : e).placeholder;
            }
            function us() {
              var e = $r.iteratee || sc;
              return (
                (e = e === sc ? Mn : e),
                arguments.length ? e(arguments[0], arguments[1]) : e
              );
            }
            function hs(e, t) {
              var r = e.__data__;
              return (function (e) {
                var t = typeof e;
                return "string" == t ||
                  "number" == t ||
                  "symbol" == t ||
                  "boolean" == t
                  ? "__proto__" !== e
                  : null === e;
              })(t)
                ? r["string" == typeof t ? "string" : "hash"]
                : r.map;
            }
            function ls(e) {
              for (var t = Ca(e), r = t.length; r--; ) {
                var n = t[r],
                  i = e[n];
                t[r] = [n, i, Ps(i)];
              }
              return t;
            }
            function fs(e, t) {
              var n = (function (e, t) {
                return null == e ? r : e[t];
              })(e, t);
              return Ln(n) ? n : r;
            }
            var ps = wt
                ? function (e) {
                    return null == e
                      ? []
                      : ((e = xe(e)),
                        Ct(wt(e), function (t) {
                          return Je.call(e, t);
                        }));
                  }
                : yc,
              ds = wt
                ? function (e) {
                    for (var t = []; e; ) Mt(t, ps(e)), (e = Ge(e));
                    return t;
                  }
                : yc,
              gs = On;
            function ys(e, t, r) {
              for (var n = -1, i = (t = bi(t, e)).length, s = !1; ++n < i; ) {
                var o = Ds(t[n]);
                if (!(s = null != e && r(e, o))) break;
                e = e[o];
              }
              return s || ++n != i
                ? s
                : !!(i = null == e ? 0 : e.length) &&
                    ea(i) &&
                    ws(o, i) &&
                    (Vo(e) || Ko(e));
            }
            function vs(e) {
              return "function" != typeof e.constructor || Is(e)
                ? {}
                : zr(Ge(e));
            }
            function ms(e) {
              return Vo(e) || Ko(e) || !!(Xe && e && e[Xe]);
            }
            function ws(e, t) {
              var r = typeof e;
              return (
                !!(t = t ?? f) &&
                ("number" == r || ("symbol" != r && be.test(e))) &&
                e > -1 &&
                e % 1 == 0 &&
                e < t
              );
            }
            function bs(e, t, r) {
              if (!ta(r)) return !1;
              var n = typeof t;
              return (
                !!("number" == n
                  ? Wo(r) && ws(t, r.length)
                  : "string" == n && t in r) && zo(r[t], e)
              );
            }
            function _s(e, t) {
              if (Vo(e)) return !1;
              var r = typeof e;
              return (
                !(
                  "number" != r &&
                  "symbol" != r &&
                  "boolean" != r &&
                  null != e &&
                  !ua(e)
                ) ||
                re.test(e) ||
                !te.test(e) ||
                (null != t && e in xe(t))
              );
            }
            function Es(e) {
              var t = as(e),
                r = $r[t];
              if ("function" != typeof r || !(t in Kr.prototype)) return !1;
              if (e === r) return !0;
              var n = os(r);
              return !!n && e === n[0];
            }
            ((Ir && gs(new Ir(new ArrayBuffer(1))) != L) ||
              (Pr && gs(new Pr()) != P) ||
              (Or && gs(Or.resolve()) != x) ||
              (Ar && gs(new Ar()) != N) ||
              (xr && gs(new xr()) != j)) &&
              (gs = function (e) {
                var t = On(e),
                  n = t == A ? e.constructor : r,
                  i = n ? ks(n) : "";
                if (i)
                  switch (i) {
                    case Cr:
                      return L;
                    case jr:
                      return P;
                    case Ur:
                      return x;
                    case Lr:
                      return N;
                    case Mr:
                      return j;
                  }
                return t;
              });
            var Ss = Le ? Xo : vc;
            function Is(e) {
              var t = e && e.constructor;
              return e === (("function" == typeof t && t.prototype) || Ue);
            }
            function Ps(e) {
              return e === e && !ta(e);
            }
            function Os(e, t) {
              return function (n) {
                return null != n && n[e] === t && (t !== r || e in xe(n));
              };
            }
            function As(e, t, n) {
              return (
                (t = mr(t === r ? e.length - 1 : t, 0)),
                function () {
                  for (
                    var r = arguments,
                      i = -1,
                      s = mr(r.length - t, 0),
                      o = ae(s);
                    ++i < s;

                  )
                    o[i] = r[t + i];
                  i = -1;
                  for (var a = ae(t + 1); ++i < t; ) a[i] = r[i];
                  return (a[t] = n(o)), At(e, this, a);
                }
              );
            }
            function xs(e, t) {
              return t.length < 2 ? e : In(e, ii(t, 0, -1));
            }
            function Rs(e, t) {
              if (
                ("constructor" !== t || "function" != typeof e[t]) &&
                "__proto__" != t
              )
                return e[t];
            }
            var Ns = Us(ti),
              Ts =
                dt ||
                function (e, t) {
                  return gt.setTimeout(e, t);
                },
              Cs = Us(ri);
            function js(e, t, r) {
              var n = t + "";
              return Cs(
                e,
                (function (e, t) {
                  var r = t.length;
                  if (!r) return e;
                  var n = r - 1;
                  return (
                    (t[n] = (r > 1 ? "& " : "") + t[n]),
                    (t = t.join(r > 2 ? ", " : " ")),
                    e.replace(ce, "{\n/* [wrapped with " + t + "] */\n")
                  );
                })(
                  n,
                  (function (e, t) {
                    return (
                      Rt(v, function (r) {
                        var n = "_." + r[0];
                        t & r[1] && !jt(e, n) && e.push(n);
                      }),
                      e.sort()
                    );
                  })(
                    (function (e) {
                      var t = e.match(ue);
                      return t ? t[1].split(he) : [];
                    })(n),
                    r
                  )
                )
              );
            }
            function Us(e) {
              var t = 0,
                n = 0;
              return function () {
                var i = br(),
                  s = 16 - (i - n);
                if (((n = i), s > 0)) {
                  if (++t >= 800) return arguments[0];
                } else t = 0;
                return e.apply(r, arguments);
              };
            }
            function Ls(e, t) {
              var n = -1,
                i = e.length,
                s = i - 1;
              for (t = t === r ? i : t; ++n < t; ) {
                var o = Yn(n, s),
                  a = e[o];
                (e[o] = e[n]), (e[n] = a);
              }
              return (e.length = t), e;
            }
            var Ms = (function (e) {
              var t = Lo(e, function (e) {
                  return 500 === r.size && r.clear(), e;
                }),
                r = t.cache;
              return t;
            })(function (e) {
              var t = [];
              return (
                46 === e.charCodeAt(0) && t.push(""),
                e.replace(ne, function (e, r, n, i) {
                  t.push(n ? i.replace(pe, "$1") : r || e);
                }),
                t
              );
            });
            function Ds(e) {
              if ("string" == typeof e || ua(e)) return e;
              var t = e + "";
              return "0" == t && 1 / e == -l ? "-0" : t;
            }
            function ks(e) {
              if (null != e) {
                try {
                  return Me.call(e);
                } catch {}
                try {
                  return e + "";
                } catch {}
              }
              return "";
            }
            function qs(e) {
              if (e instanceof Kr) return e.clone();
              var t = new Br(e.__wrapped__, e.__chain__);
              return (
                (t.__actions__ = Ni(e.__actions__)),
                (t.__index__ = e.__index__),
                (t.__values__ = e.__values__),
                t
              );
            }
            var $s = Qn(function (e, t) {
                return Go(e) ? fn(e, mn(t, 1, Go, !0)) : [];
              }),
              zs = Qn(function (e, t) {
                var n = Js(t);
                return (
                  Go(n) && (n = r),
                  Go(e) ? fn(e, mn(t, 1, Go, !0), us(n, 2)) : []
                );
              }),
              Hs = Qn(function (e, t) {
                var n = Js(t);
                return (
                  Go(n) && (n = r), Go(e) ? fn(e, mn(t, 1, Go, !0), r, n) : []
                );
              });
            function Bs(e, t, r) {
              var n = null == e ? 0 : e.length;
              if (!n) return -1;
              var i = null == r ? 0 : ga(r);
              return i < 0 && (i = mr(n + i, 0)), Ht(e, us(t, 3), i);
            }
            function Ks(e, t, n) {
              var i = null == e ? 0 : e.length;
              if (!i) return -1;
              var s = i - 1;
              return (
                n !== r &&
                  ((s = ga(n)), (s = n < 0 ? mr(i + s, 0) : wr(s, i - 1))),
                Ht(e, us(t, 3), s, !0)
              );
            }
            function Vs(e) {
              return (null == e ? 0 : e.length) ? mn(e, 1) : [];
            }
            function Fs(e) {
              return e && e.length ? e[0] : r;
            }
            var Ws = Qn(function (e) {
                var t = Lt(e, mi);
                return t.length && t[0] === e[0] ? Nn(t) : [];
              }),
              Gs = Qn(function (e) {
                var t = Js(e),
                  n = Lt(e, mi);
                return (
                  t === Js(n) ? (t = r) : n.pop(),
                  n.length && n[0] === e[0] ? Nn(n, us(t, 2)) : []
                );
              }),
              Ys = Qn(function (e) {
                var t = Js(e),
                  n = Lt(e, mi);
                return (
                  (t = "function" == typeof t ? t : r) && n.pop(),
                  n.length && n[0] === e[0] ? Nn(n, r, t) : []
                );
              });
            function Js(e) {
              var t = null == e ? 0 : e.length;
              return t ? e[t - 1] : r;
            }
            var Qs = Qn(Xs);
            function Xs(e, t) {
              return e && e.length && t && t.length ? Wn(e, t) : e;
            }
            var Zs = ns(function (e, t) {
              var r = null == e ? 0 : e.length,
                n = an(e, t);
              return (
                Gn(
                  e,
                  Lt(t, function (e) {
                    return ws(e, r) ? +e : e;
                  }).sort(Ai)
                ),
                n
              );
            });
            function eo(e) {
              return null == e ? e : Sr.call(e);
            }
            var to = Qn(function (e) {
                return li(mn(e, 1, Go, !0));
              }),
              ro = Qn(function (e) {
                var t = Js(e);
                return Go(t) && (t = r), li(mn(e, 1, Go, !0), us(t, 2));
              }),
              no = Qn(function (e) {
                var t = Js(e);
                return (
                  (t = "function" == typeof t ? t : r),
                  li(mn(e, 1, Go, !0), r, t)
                );
              });
            function io(e) {
              if (!e || !e.length) return [];
              var t = 0;
              return (
                (e = Ct(e, function (e) {
                  if (Go(e)) return (t = mr(e.length, t)), !0;
                })),
                Qt(t, function (t) {
                  return Lt(e, Wt(t));
                })
              );
            }
            function so(e, t) {
              if (!e || !e.length) return [];
              var n = io(e);
              return null == t
                ? n
                : Lt(n, function (e) {
                    return At(t, r, e);
                  });
            }
            var oo = Qn(function (e, t) {
                return Go(e) ? fn(e, t) : [];
              }),
              ao = Qn(function (e) {
                return yi(Ct(e, Go));
              }),
              co = Qn(function (e) {
                var t = Js(e);
                return Go(t) && (t = r), yi(Ct(e, Go), us(t, 2));
              }),
              uo = Qn(function (e) {
                var t = Js(e);
                return (
                  (t = "function" == typeof t ? t : r), yi(Ct(e, Go), r, t)
                );
              }),
              ho = Qn(io);
            var lo = Qn(function (e) {
              var t = e.length,
                n = t > 1 ? e[t - 1] : r;
              return (n = "function" == typeof n ? (e.pop(), n) : r), so(e, n);
            });
            function fo(e) {
              var t = $r(e);
              return (t.__chain__ = !0), t;
            }
            function po(e, t) {
              return t(e);
            }
            var go = ns(function (e) {
              var t = e.length,
                n = t ? e[0] : 0,
                i = this.__wrapped__,
                s = function (t) {
                  return an(t, e);
                };
              return !(t > 1 || this.__actions__.length) &&
                i instanceof Kr &&
                ws(n)
                ? ((i = i.slice(n, +n + (t ? 1 : 0))).__actions__.push({
                    func: po,
                    args: [s],
                    thisArg: r,
                  }),
                  new Br(i, this.__chain__).thru(function (e) {
                    return t && !e.length && e.push(r), e;
                  }))
                : this.thru(s);
            });
            var yo = Ci(function (e, t, r) {
              De.call(e, r) ? ++e[r] : on(e, r, 1);
            });
            var vo = qi(Bs),
              mo = qi(Ks);
            function wo(e, t) {
              return (Vo(e) ? Rt : pn)(e, us(t, 3));
            }
            function bo(e, t) {
              return (Vo(e) ? Nt : dn)(e, us(t, 3));
            }
            var _o = Ci(function (e, t, r) {
              De.call(e, r) ? e[r].push(t) : on(e, r, [t]);
            });
            var Eo = Qn(function (e, t, r) {
                var n = -1,
                  i = "function" == typeof t,
                  s = Wo(e) ? ae(e.length) : [];
                return (
                  pn(e, function (e) {
                    s[++n] = i ? At(t, e, r) : Tn(e, t, r);
                  }),
                  s
                );
              }),
              So = Ci(function (e, t, r) {
                on(e, r, t);
              });
            function Io(e, t) {
              return (Vo(e) ? Lt : $n)(e, us(t, 3));
            }
            var Po = Ci(
              function (e, t, r) {
                e[r ? 0 : 1].push(t);
              },
              function () {
                return [[], []];
              }
            );
            var Oo = Qn(function (e, t) {
                if (null == e) return [];
                var r = t.length;
                return (
                  r > 1 && bs(e, t[0], t[1])
                    ? (t = [])
                    : r > 2 && bs(t[0], t[1], t[2]) && (t = [t[0]]),
                  Vn(e, mn(t, 1), [])
                );
              }),
              Ao =
                pt ||
                function () {
                  return gt.Date.now();
                };
            function xo(e, t, n) {
              return (
                (t = n ? r : t),
                (t = e && null == t ? e.length : t),
                Xi(e, u, r, r, r, r, t)
              );
            }
            function Ro(e, t) {
              var i;
              if ("function" != typeof t) throw new Te(n);
              return (
                (e = ga(e)),
                function () {
                  return (
                    --e > 0 && (i = t.apply(this, arguments)),
                    e <= 1 && (t = r),
                    i
                  );
                }
              );
            }
            var No = Qn(function (e, t, r) {
                var n = 1;
                if (r.length) {
                  var i = hr(r, cs(No));
                  n |= a;
                }
                return Xi(e, n, t, r, i);
              }),
              To = Qn(function (e, t, r) {
                var n = 3;
                if (r.length) {
                  var i = hr(r, cs(To));
                  n |= a;
                }
                return Xi(t, n, e, r, i);
              });
            function Co(e, t, i) {
              var s,
                o,
                a,
                c,
                u,
                h,
                l = 0,
                f = !1,
                p = !1,
                d = !0;
              if ("function" != typeof e) throw new Te(n);
              function g(t) {
                var n = s,
                  i = o;
                return (s = o = r), (l = t), (c = e.apply(i, n));
              }
              function y(e) {
                var n = e - h;
                return h === r || n >= t || n < 0 || (p && e - l >= a);
              }
              function v() {
                var e = Ao();
                if (y(e)) return m(e);
                u = Ts(
                  v,
                  (function (e) {
                    var r = t - (e - h);
                    return p ? wr(r, a - (e - l)) : r;
                  })(e)
                );
              }
              function m(e) {
                return (u = r), d && s ? g(e) : ((s = o = r), c);
              }
              function w() {
                var e = Ao(),
                  n = y(e);
                if (((s = arguments), (o = this), (h = e), n)) {
                  if (u === r)
                    return (function (e) {
                      return (l = e), (u = Ts(v, t)), f ? g(e) : c;
                    })(h);
                  if (p) return Si(u), (u = Ts(v, t)), g(h);
                }
                return u === r && (u = Ts(v, t)), c;
              }
              return (
                (t = va(t) || 0),
                ta(i) &&
                  ((f = !!i.leading),
                  (a = (p = "maxWait" in i) ? mr(va(i.maxWait) || 0, t) : a),
                  (d = "trailing" in i ? !!i.trailing : d)),
                (w.cancel = function () {
                  u !== r && Si(u), (l = 0), (s = h = o = u = r);
                }),
                (w.flush = function () {
                  return u === r ? c : m(Ao());
                }),
                w
              );
            }
            var jo = Qn(function (e, t) {
                return ln(e, 1, t);
              }),
              Uo = Qn(function (e, t, r) {
                return ln(e, va(t) || 0, r);
              });
            function Lo(e, t) {
              if (
                "function" != typeof e ||
                (null != t && "function" != typeof t)
              )
                throw new Te(n);
              var r = function () {
                var n = arguments,
                  i = t ? t.apply(this, n) : n[0],
                  s = r.cache;
                if (s.has(i)) return s.get(i);
                var o = e.apply(this, n);
                return (r.cache = s.set(i, o) || s), o;
              };
              return (r.cache = new (Lo.Cache || Wr)()), r;
            }
            function Mo(e) {
              if ("function" != typeof e) throw new Te(n);
              return function () {
                var t = arguments;
                switch (t.length) {
                  case 0:
                    return !e.call(this);
                  case 1:
                    return !e.call(this, t[0]);
                  case 2:
                    return !e.call(this, t[0], t[1]);
                  case 3:
                    return !e.call(this, t[0], t[1], t[2]);
                }
                return !e.apply(this, t);
              };
            }
            Lo.Cache = Wr;
            var Do = _i(function (e, t) {
                var r = (t =
                  1 == t.length && Vo(t[0])
                    ? Lt(t[0], Zt(us()))
                    : Lt(mn(t, 1), Zt(us()))).length;
                return Qn(function (n) {
                  for (var i = -1, s = wr(n.length, r); ++i < s; )
                    n[i] = t[i].call(this, n[i]);
                  return At(e, this, n);
                });
              }),
              ko = Qn(function (e, t) {
                var n = hr(t, cs(ko));
                return Xi(e, a, r, t, n);
              }),
              qo = Qn(function (e, t) {
                var n = hr(t, cs(qo));
                return Xi(e, c, r, t, n);
              }),
              $o = ns(function (e, t) {
                return Xi(e, h, r, r, r, t);
              });
            function zo(e, t) {
              return e === t || (e !== e && t !== t);
            }
            var Ho = Wi(An),
              Bo = Wi(function (e, t) {
                return e >= t;
              }),
              Ko = Cn(
                (function () {
                  return arguments;
                })()
              )
                ? Cn
                : function (e) {
                    return (
                      ra(e) && De.call(e, "callee") && !Je.call(e, "callee")
                    );
                  },
              Vo = ae.isArray,
              Fo = _t
                ? Zt(_t)
                : function (e) {
                    return ra(e) && On(e) == U;
                  };
            function Wo(e) {
              return null != e && ea(e.length) && !Xo(e);
            }
            function Go(e) {
              return ra(e) && Wo(e);
            }
            var Yo = bt || vc,
              Jo = Et
                ? Zt(Et)
                : function (e) {
                    return ra(e) && On(e) == _;
                  };
            function Qo(e) {
              if (!ra(e)) return !1;
              var t = On(e);
              return (
                t == E ||
                "[object DOMException]" == t ||
                ("string" == typeof e.message &&
                  "string" == typeof e.name &&
                  !sa(e))
              );
            }
            function Xo(e) {
              if (!ta(e)) return !1;
              var t = On(e);
              return (
                t == S ||
                t == I ||
                "[object AsyncFunction]" == t ||
                "[object Proxy]" == t
              );
            }
            function Zo(e) {
              return "number" == typeof e && e == ga(e);
            }
            function ea(e) {
              return "number" == typeof e && e > -1 && e % 1 == 0 && e <= f;
            }
            function ta(e) {
              var t = typeof e;
              return null != e && ("object" == t || "function" == t);
            }
            function ra(e) {
              return null != e && "object" == typeof e;
            }
            var na = St
              ? Zt(St)
              : function (e) {
                  return ra(e) && gs(e) == P;
                };
            function ia(e) {
              return "number" == typeof e || (ra(e) && On(e) == O);
            }
            function sa(e) {
              if (!ra(e) || On(e) != A) return !1;
              var t = Ge(e);
              if (null === t) return !0;
              var r = De.call(t, "constructor") && t.constructor;
              return (
                "function" == typeof r && r instanceof r && Me.call(r) == ze
              );
            }
            var oa = It
              ? Zt(It)
              : function (e) {
                  return ra(e) && On(e) == R;
                };
            var aa = Pt
              ? Zt(Pt)
              : function (e) {
                  return ra(e) && gs(e) == N;
                };
            function ca(e) {
              return "string" == typeof e || (!Vo(e) && ra(e) && On(e) == T);
            }
            function ua(e) {
              return "symbol" == typeof e || (ra(e) && On(e) == C);
            }
            var ha = Ot
              ? Zt(Ot)
              : function (e) {
                  return ra(e) && ea(e.length) && !!ct[On(e)];
                };
            var la = Wi(qn),
              fa = Wi(function (e, t) {
                return e <= t;
              });
            function pa(e) {
              if (!e) return [];
              if (Wo(e)) return ca(e) ? pr(e) : Ni(e);
              if (Ze && e[Ze])
                return (function (e) {
                  for (var t, r = []; !(t = e.next()).done; ) r.push(t.value);
                  return r;
                })(e[Ze]());
              var t = gs(e);
              return (t == P ? cr : t == N ? lr : za)(e);
            }
            function da(e) {
              return e
                ? (e = va(e)) === l || e === -l
                  ? 17976931348623157e292 * (e < 0 ? -1 : 1)
                  : e === e
                  ? e
                  : 0
                : 0 === e
                ? e
                : 0;
            }
            function ga(e) {
              var t = da(e),
                r = t % 1;
              return t === t ? (r ? t - r : t) : 0;
            }
            function ya(e) {
              return e ? cn(ga(e), 0, d) : 0;
            }
            function va(e) {
              if ("number" == typeof e) return e;
              if (ua(e)) return p;
              if (ta(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = ta(t) ? t + "" : t;
              }
              if ("string" != typeof e) return 0 === e ? e : +e;
              e = Xt(e);
              var r = ve.test(e);
              return r || we.test(e)
                ? ft(e.slice(2), r ? 2 : 8)
                : ye.test(e)
                ? p
                : +e;
            }
            function ma(e) {
              return Ti(e, ja(e));
            }
            function wa(e) {
              return null == e ? "" : hi(e);
            }
            var ba = ji(function (e, t) {
                if (Is(t) || Wo(t)) Ti(t, Ca(t), e);
                else for (var r in t) De.call(t, r) && tn(e, r, t[r]);
              }),
              _a = ji(function (e, t) {
                Ti(t, ja(t), e);
              }),
              Ea = ji(function (e, t, r, n) {
                Ti(t, ja(t), e, n);
              }),
              Sa = ji(function (e, t, r, n) {
                Ti(t, Ca(t), e, n);
              }),
              Ia = ns(an);
            var Pa = Qn(function (e, t) {
                e = xe(e);
                var n = -1,
                  i = t.length,
                  s = i > 2 ? t[2] : r;
                for (s && bs(t[0], t[1], s) && (i = 1); ++n < i; )
                  for (
                    var o = t[n], a = ja(o), c = -1, u = a.length;
                    ++c < u;

                  ) {
                    var h = a[c],
                      l = e[h];
                    (l === r || (zo(l, Ue[h]) && !De.call(e, h))) &&
                      (e[h] = o[h]);
                  }
                return e;
              }),
              Oa = Qn(function (e) {
                return e.push(r, es), At(La, r, e);
              });
            function Aa(e, t, n) {
              var i = null == e ? r : In(e, t);
              return i === r ? n : i;
            }
            function xa(e, t) {
              return null != e && ys(e, t, Rn);
            }
            var Ra = Hi(function (e, t, r) {
                null != t &&
                  "function" != typeof t.toString &&
                  (t = $e.call(t)),
                  (e[t] = r);
              }, tc(ic)),
              Na = Hi(function (e, t, r) {
                null != t &&
                  "function" != typeof t.toString &&
                  (t = $e.call(t)),
                  De.call(e, t) ? e[t].push(r) : (e[t] = [r]);
              }, us),
              Ta = Qn(Tn);
            function Ca(e) {
              return Wo(e) ? Jr(e) : Dn(e);
            }
            function ja(e) {
              return Wo(e) ? Jr(e, !0) : kn(e);
            }
            var Ua = ji(function (e, t, r) {
                Bn(e, t, r);
              }),
              La = ji(function (e, t, r, n) {
                Bn(e, t, r, n);
              }),
              Ma = ns(function (e, t) {
                var r = {};
                if (null == e) return r;
                var n = !1;
                (t = Lt(t, function (t) {
                  return (t = bi(t, e)), n || (n = t.length > 1), t;
                })),
                  Ti(e, ss(e), r),
                  n && (r = un(r, 7, ts));
                for (var i = t.length; i--; ) fi(r, t[i]);
                return r;
              });
            var Da = ns(function (e, t) {
              return null == e
                ? {}
                : (function (e, t) {
                    return Fn(e, t, function (t, r) {
                      return xa(e, r);
                    });
                  })(e, t);
            });
            function ka(e, t) {
              if (null == e) return {};
              var r = Lt(ss(e), function (e) {
                return [e];
              });
              return (
                (t = us(t)),
                Fn(e, r, function (e, r) {
                  return t(e, r[0]);
                })
              );
            }
            var qa = Qi(Ca),
              $a = Qi(ja);
            function za(e) {
              return null == e ? [] : er(e, Ca(e));
            }
            var Ha = Di(function (e, t, r) {
              return (t = t.toLowerCase()), e + (r ? Ba(t) : t);
            });
            function Ba(e) {
              return Qa(wa(e).toLowerCase());
            }
            function Ka(e) {
              return (e = wa(e)) && e.replace(_e, ir).replace(tt, "");
            }
            var Va = Di(function (e, t, r) {
                return e + (r ? "-" : "") + t.toLowerCase();
              }),
              Fa = Di(function (e, t, r) {
                return e + (r ? " " : "") + t.toLowerCase();
              }),
              Wa = Mi("toLowerCase");
            var Ga = Di(function (e, t, r) {
              return e + (r ? "_" : "") + t.toLowerCase();
            });
            var Ya = Di(function (e, t, r) {
              return e + (r ? " " : "") + Qa(t);
            });
            var Ja = Di(function (e, t, r) {
                return e + (r ? " " : "") + t.toUpperCase();
              }),
              Qa = Mi("toUpperCase");
            function Xa(e, t, n) {
              return (
                (e = wa(e)),
                (t = n ? r : t) === r
                  ? (function (e) {
                      return st.test(e);
                    })(e)
                    ? (function (e) {
                        return e.match(nt) || [];
                      })(e)
                    : (function (e) {
                        return e.match(le) || [];
                      })(e)
                  : e.match(t) || []
              );
            }
            var Za = Qn(function (e, t) {
                try {
                  return At(e, r, t);
                } catch (n) {
                  return Qo(n) ? n : new Pe(n);
                }
              }),
              ec = ns(function (e, t) {
                return (
                  Rt(t, function (t) {
                    (t = Ds(t)), on(e, t, No(e[t], e));
                  }),
                  e
                );
              });
            function tc(e) {
              return function () {
                return e;
              };
            }
            var rc = $i(),
              nc = $i(!0);
            function ic(e) {
              return e;
            }
            function sc(e) {
              return Mn("function" == typeof e ? e : un(e, 1));
            }
            var oc = Qn(function (e, t) {
                return function (r) {
                  return Tn(r, e, t);
                };
              }),
              ac = Qn(function (e, t) {
                return function (r) {
                  return Tn(e, r, t);
                };
              });
            function cc(e, t, r) {
              var n = Ca(t),
                i = Sn(t, n);
              null == r &&
                (!ta(t) || (!i.length && n.length)) &&
                ((r = t), (t = e), (e = this), (i = Sn(t, Ca(t))));
              var s = !(ta(r) && "chain" in r) || !!r.chain,
                o = Xo(e);
              return (
                Rt(i, function (r) {
                  var n = t[r];
                  (e[r] = n),
                    o &&
                      (e.prototype[r] = function () {
                        var t = this.__chain__;
                        if (s || t) {
                          var r = e(this.__wrapped__);
                          return (
                            (r.__actions__ = Ni(this.__actions__)).push({
                              func: n,
                              args: arguments,
                              thisArg: e,
                            }),
                            (r.__chain__ = t),
                            r
                          );
                        }
                        return n.apply(e, Mt([this.value()], arguments));
                      });
                }),
                e
              );
            }
            function uc() {}
            var hc = Ki(Lt),
              lc = Ki(Tt),
              fc = Ki(qt);
            function pc(e) {
              return _s(e)
                ? Wt(Ds(e))
                : (function (e) {
                    return function (t) {
                      return In(t, e);
                    };
                  })(e);
            }
            var dc = Fi(),
              gc = Fi(!0);
            function yc() {
              return [];
            }
            function vc() {
              return !1;
            }
            var mc = Bi(function (e, t) {
                return e + t;
              }, 0),
              wc = Yi("ceil"),
              bc = Bi(function (e, t) {
                return e / t;
              }, 1),
              _c = Yi("floor");
            var Ec = Bi(function (e, t) {
                return e * t;
              }, 1),
              Sc = Yi("round"),
              Ic = Bi(function (e, t) {
                return e - t;
              }, 0);
            return (
              ($r.after = function (e, t) {
                if ("function" != typeof t) throw new Te(n);
                return (
                  (e = ga(e)),
                  function () {
                    if (--e < 1) return t.apply(this, arguments);
                  }
                );
              }),
              ($r.ary = xo),
              ($r.assign = ba),
              ($r.assignIn = _a),
              ($r.assignInWith = Ea),
              ($r.assignWith = Sa),
              ($r.at = Ia),
              ($r.before = Ro),
              ($r.bind = No),
              ($r.bindAll = ec),
              ($r.bindKey = To),
              ($r.castArray = function () {
                if (!arguments.length) return [];
                var e = arguments[0];
                return Vo(e) ? e : [e];
              }),
              ($r.chain = fo),
              ($r.chunk = function (e, t, n) {
                t = (n ? bs(e, t, n) : t === r) ? 1 : mr(ga(t), 0);
                var i = null == e ? 0 : e.length;
                if (!i || t < 1) return [];
                for (var s = 0, o = 0, a = ae(yt(i / t)); s < i; )
                  a[o++] = ii(e, s, (s += t));
                return a;
              }),
              ($r.compact = function (e) {
                for (
                  var t = -1, r = null == e ? 0 : e.length, n = 0, i = [];
                  ++t < r;

                ) {
                  var s = e[t];
                  s && (i[n++] = s);
                }
                return i;
              }),
              ($r.concat = function () {
                var e = arguments.length;
                if (!e) return [];
                for (var t = ae(e - 1), r = arguments[0], n = e; n--; )
                  t[n - 1] = arguments[n];
                return Mt(Vo(r) ? Ni(r) : [r], mn(t, 1));
              }),
              ($r.cond = function (e) {
                var t = null == e ? 0 : e.length,
                  r = us();
                return (
                  (e = t
                    ? Lt(e, function (e) {
                        if ("function" != typeof e[1]) throw new Te(n);
                        return [r(e[0]), e[1]];
                      })
                    : []),
                  Qn(function (r) {
                    for (var n = -1; ++n < t; ) {
                      var i = e[n];
                      if (At(i[0], this, r)) return At(i[1], this, r);
                    }
                  })
                );
              }),
              ($r.conforms = function (e) {
                return (function (e) {
                  var t = Ca(e);
                  return function (r) {
                    return hn(r, e, t);
                  };
                })(un(e, 1));
              }),
              ($r.constant = tc),
              ($r.countBy = yo),
              ($r.create = function (e, t) {
                var r = zr(e);
                return null == t ? r : sn(r, t);
              }),
              ($r.curry = function e(t, n, i) {
                var s = Xi(t, 8, r, r, r, r, r, (n = i ? r : n));
                return (s.placeholder = e.placeholder), s;
              }),
              ($r.curryRight = function e(t, n, i) {
                var s = Xi(t, o, r, r, r, r, r, (n = i ? r : n));
                return (s.placeholder = e.placeholder), s;
              }),
              ($r.debounce = Co),
              ($r.defaults = Pa),
              ($r.defaultsDeep = Oa),
              ($r.defer = jo),
              ($r.delay = Uo),
              ($r.difference = $s),
              ($r.differenceBy = zs),
              ($r.differenceWith = Hs),
              ($r.drop = function (e, t, n) {
                var i = null == e ? 0 : e.length;
                return i
                  ? ii(e, (t = n || t === r ? 1 : ga(t)) < 0 ? 0 : t, i)
                  : [];
              }),
              ($r.dropRight = function (e, t, n) {
                var i = null == e ? 0 : e.length;
                return i
                  ? ii(
                      e,
                      0,
                      (t = i - (t = n || t === r ? 1 : ga(t))) < 0 ? 0 : t
                    )
                  : [];
              }),
              ($r.dropRightWhile = function (e, t) {
                return e && e.length ? di(e, us(t, 3), !0, !0) : [];
              }),
              ($r.dropWhile = function (e, t) {
                return e && e.length ? di(e, us(t, 3), !0) : [];
              }),
              ($r.fill = function (e, t, n, i) {
                var s = null == e ? 0 : e.length;
                return s
                  ? (n &&
                      "number" != typeof n &&
                      bs(e, t, n) &&
                      ((n = 0), (i = s)),
                    (function (e, t, n, i) {
                      var s = e.length;
                      for (
                        (n = ga(n)) < 0 && (n = -n > s ? 0 : s + n),
                          (i = i === r || i > s ? s : ga(i)) < 0 && (i += s),
                          i = n > i ? 0 : ya(i);
                        n < i;

                      )
                        e[n++] = t;
                      return e;
                    })(e, t, n, i))
                  : [];
              }),
              ($r.filter = function (e, t) {
                return (Vo(e) ? Ct : vn)(e, us(t, 3));
              }),
              ($r.flatMap = function (e, t) {
                return mn(Io(e, t), 1);
              }),
              ($r.flatMapDeep = function (e, t) {
                return mn(Io(e, t), l);
              }),
              ($r.flatMapDepth = function (e, t, n) {
                return (n = n === r ? 1 : ga(n)), mn(Io(e, t), n);
              }),
              ($r.flatten = Vs),
              ($r.flattenDeep = function (e) {
                return (null == e ? 0 : e.length) ? mn(e, l) : [];
              }),
              ($r.flattenDepth = function (e, t) {
                return (null == e ? 0 : e.length)
                  ? mn(e, (t = t === r ? 1 : ga(t)))
                  : [];
              }),
              ($r.flip = function (e) {
                return Xi(e, 512);
              }),
              ($r.flow = rc),
              ($r.flowRight = nc),
              ($r.fromPairs = function (e) {
                for (
                  var t = -1, r = null == e ? 0 : e.length, n = {};
                  ++t < r;

                ) {
                  var i = e[t];
                  n[i[0]] = i[1];
                }
                return n;
              }),
              ($r.functions = function (e) {
                return null == e ? [] : Sn(e, Ca(e));
              }),
              ($r.functionsIn = function (e) {
                return null == e ? [] : Sn(e, ja(e));
              }),
              ($r.groupBy = _o),
              ($r.initial = function (e) {
                return (null == e ? 0 : e.length) ? ii(e, 0, -1) : [];
              }),
              ($r.intersection = Ws),
              ($r.intersectionBy = Gs),
              ($r.intersectionWith = Ys),
              ($r.invert = Ra),
              ($r.invertBy = Na),
              ($r.invokeMap = Eo),
              ($r.iteratee = sc),
              ($r.keyBy = So),
              ($r.keys = Ca),
              ($r.keysIn = ja),
              ($r.map = Io),
              ($r.mapKeys = function (e, t) {
                var r = {};
                return (
                  (t = us(t, 3)),
                  _n(e, function (e, n, i) {
                    on(r, t(e, n, i), e);
                  }),
                  r
                );
              }),
              ($r.mapValues = function (e, t) {
                var r = {};
                return (
                  (t = us(t, 3)),
                  _n(e, function (e, n, i) {
                    on(r, n, t(e, n, i));
                  }),
                  r
                );
              }),
              ($r.matches = function (e) {
                return zn(un(e, 1));
              }),
              ($r.matchesProperty = function (e, t) {
                return Hn(e, un(t, 1));
              }),
              ($r.memoize = Lo),
              ($r.merge = Ua),
              ($r.mergeWith = La),
              ($r.method = oc),
              ($r.methodOf = ac),
              ($r.mixin = cc),
              ($r.negate = Mo),
              ($r.nthArg = function (e) {
                return (
                  (e = ga(e)),
                  Qn(function (t) {
                    return Kn(t, e);
                  })
                );
              }),
              ($r.omit = Ma),
              ($r.omitBy = function (e, t) {
                return ka(e, Mo(us(t)));
              }),
              ($r.once = function (e) {
                return Ro(2, e);
              }),
              ($r.orderBy = function (e, t, n, i) {
                return null == e
                  ? []
                  : (Vo(t) || (t = null == t ? [] : [t]),
                    Vo((n = i ? r : n)) || (n = null == n ? [] : [n]),
                    Vn(e, t, n));
              }),
              ($r.over = hc),
              ($r.overArgs = Do),
              ($r.overEvery = lc),
              ($r.overSome = fc),
              ($r.partial = ko),
              ($r.partialRight = qo),
              ($r.partition = Po),
              ($r.pick = Da),
              ($r.pickBy = ka),
              ($r.property = pc),
              ($r.propertyOf = function (e) {
                return function (t) {
                  return null == e ? r : In(e, t);
                };
              }),
              ($r.pull = Qs),
              ($r.pullAll = Xs),
              ($r.pullAllBy = function (e, t, r) {
                return e && e.length && t && t.length ? Wn(e, t, us(r, 2)) : e;
              }),
              ($r.pullAllWith = function (e, t, n) {
                return e && e.length && t && t.length ? Wn(e, t, r, n) : e;
              }),
              ($r.pullAt = Zs),
              ($r.range = dc),
              ($r.rangeRight = gc),
              ($r.rearg = $o),
              ($r.reject = function (e, t) {
                return (Vo(e) ? Ct : vn)(e, Mo(us(t, 3)));
              }),
              ($r.remove = function (e, t) {
                var r = [];
                if (!e || !e.length) return r;
                var n = -1,
                  i = [],
                  s = e.length;
                for (t = us(t, 3); ++n < s; ) {
                  var o = e[n];
                  t(o, n, e) && (r.push(o), i.push(n));
                }
                return Gn(e, i), r;
              }),
              ($r.rest = function (e, t) {
                if ("function" != typeof e) throw new Te(n);
                return Qn(e, (t = t === r ? t : ga(t)));
              }),
              ($r.reverse = eo),
              ($r.sampleSize = function (e, t, n) {
                return (
                  (t = (n ? bs(e, t, n) : t === r) ? 1 : ga(t)),
                  (Vo(e) ? Xr : Zn)(e, t)
                );
              }),
              ($r.set = function (e, t, r) {
                return null == e ? e : ei(e, t, r);
              }),
              ($r.setWith = function (e, t, n, i) {
                return (
                  (i = "function" == typeof i ? i : r),
                  null == e ? e : ei(e, t, n, i)
                );
              }),
              ($r.shuffle = function (e) {
                return (Vo(e) ? Zr : ni)(e);
              }),
              ($r.slice = function (e, t, n) {
                var i = null == e ? 0 : e.length;
                return i
                  ? (n && "number" != typeof n && bs(e, t, n)
                      ? ((t = 0), (n = i))
                      : ((t = null == t ? 0 : ga(t)),
                        (n = n === r ? i : ga(n))),
                    ii(e, t, n))
                  : [];
              }),
              ($r.sortBy = Oo),
              ($r.sortedUniq = function (e) {
                return e && e.length ? ci(e) : [];
              }),
              ($r.sortedUniqBy = function (e, t) {
                return e && e.length ? ci(e, us(t, 2)) : [];
              }),
              ($r.split = function (e, t, n) {
                return (
                  n && "number" != typeof n && bs(e, t, n) && (t = n = r),
                  (n = n === r ? d : n >>> 0)
                    ? (e = wa(e)) &&
                      ("string" == typeof t || (null != t && !oa(t))) &&
                      !(t = hi(t)) &&
                      ar(e)
                      ? Ei(pr(e), 0, n)
                      : e.split(t, n)
                    : []
                );
              }),
              ($r.spread = function (e, t) {
                if ("function" != typeof e) throw new Te(n);
                return (
                  (t = null == t ? 0 : mr(ga(t), 0)),
                  Qn(function (r) {
                    var n = r[t],
                      i = Ei(r, 0, t);
                    return n && Mt(i, n), At(e, this, i);
                  })
                );
              }),
              ($r.tail = function (e) {
                var t = null == e ? 0 : e.length;
                return t ? ii(e, 1, t) : [];
              }),
              ($r.take = function (e, t, n) {
                return e && e.length
                  ? ii(e, 0, (t = n || t === r ? 1 : ga(t)) < 0 ? 0 : t)
                  : [];
              }),
              ($r.takeRight = function (e, t, n) {
                var i = null == e ? 0 : e.length;
                return i
                  ? ii(
                      e,
                      (t = i - (t = n || t === r ? 1 : ga(t))) < 0 ? 0 : t,
                      i
                    )
                  : [];
              }),
              ($r.takeRightWhile = function (e, t) {
                return e && e.length ? di(e, us(t, 3), !1, !0) : [];
              }),
              ($r.takeWhile = function (e, t) {
                return e && e.length ? di(e, us(t, 3)) : [];
              }),
              ($r.tap = function (e, t) {
                return t(e), e;
              }),
              ($r.throttle = function (e, t, r) {
                var i = !0,
                  s = !0;
                if ("function" != typeof e) throw new Te(n);
                return (
                  ta(r) &&
                    ((i = "leading" in r ? !!r.leading : i),
                    (s = "trailing" in r ? !!r.trailing : s)),
                  Co(e, t, { leading: i, maxWait: t, trailing: s })
                );
              }),
              ($r.thru = po),
              ($r.toArray = pa),
              ($r.toPairs = qa),
              ($r.toPairsIn = $a),
              ($r.toPath = function (e) {
                return Vo(e) ? Lt(e, Ds) : ua(e) ? [e] : Ni(Ms(wa(e)));
              }),
              ($r.toPlainObject = ma),
              ($r.transform = function (e, t, r) {
                var n = Vo(e),
                  i = n || Yo(e) || ha(e);
                if (((t = us(t, 4)), null == r)) {
                  var s = e && e.constructor;
                  r = i ? (n ? new s() : []) : ta(e) && Xo(s) ? zr(Ge(e)) : {};
                }
                return (
                  (i ? Rt : _n)(e, function (e, n, i) {
                    return t(r, e, n, i);
                  }),
                  r
                );
              }),
              ($r.unary = function (e) {
                return xo(e, 1);
              }),
              ($r.union = to),
              ($r.unionBy = ro),
              ($r.unionWith = no),
              ($r.uniq = function (e) {
                return e && e.length ? li(e) : [];
              }),
              ($r.uniqBy = function (e, t) {
                return e && e.length ? li(e, us(t, 2)) : [];
              }),
              ($r.uniqWith = function (e, t) {
                return (
                  (t = "function" == typeof t ? t : r),
                  e && e.length ? li(e, r, t) : []
                );
              }),
              ($r.unset = function (e, t) {
                return null == e || fi(e, t);
              }),
              ($r.unzip = io),
              ($r.unzipWith = so),
              ($r.update = function (e, t, r) {
                return null == e ? e : pi(e, t, wi(r));
              }),
              ($r.updateWith = function (e, t, n, i) {
                return (
                  (i = "function" == typeof i ? i : r),
                  null == e ? e : pi(e, t, wi(n), i)
                );
              }),
              ($r.values = za),
              ($r.valuesIn = function (e) {
                return null == e ? [] : er(e, ja(e));
              }),
              ($r.without = oo),
              ($r.words = Xa),
              ($r.wrap = function (e, t) {
                return ko(wi(t), e);
              }),
              ($r.xor = ao),
              ($r.xorBy = co),
              ($r.xorWith = uo),
              ($r.zip = ho),
              ($r.zipObject = function (e, t) {
                return vi(e || [], t || [], tn);
              }),
              ($r.zipObjectDeep = function (e, t) {
                return vi(e || [], t || [], ei);
              }),
              ($r.zipWith = lo),
              ($r.entries = qa),
              ($r.entriesIn = $a),
              ($r.extend = _a),
              ($r.extendWith = Ea),
              cc($r, $r),
              ($r.add = mc),
              ($r.attempt = Za),
              ($r.camelCase = Ha),
              ($r.capitalize = Ba),
              ($r.ceil = wc),
              ($r.clamp = function (e, t, n) {
                return (
                  n === r && ((n = t), (t = r)),
                  n !== r && (n = (n = va(n)) === n ? n : 0),
                  t !== r && (t = (t = va(t)) === t ? t : 0),
                  cn(va(e), t, n)
                );
              }),
              ($r.clone = function (e) {
                return un(e, 4);
              }),
              ($r.cloneDeep = function (e) {
                return un(e, 5);
              }),
              ($r.cloneDeepWith = function (e, t) {
                return un(e, 5, (t = "function" == typeof t ? t : r));
              }),
              ($r.cloneWith = function (e, t) {
                return un(e, 4, (t = "function" == typeof t ? t : r));
              }),
              ($r.conformsTo = function (e, t) {
                return null == t || hn(e, t, Ca(t));
              }),
              ($r.deburr = Ka),
              ($r.defaultTo = function (e, t) {
                return null == e || e !== e ? t : e;
              }),
              ($r.divide = bc),
              ($r.endsWith = function (e, t, n) {
                (e = wa(e)), (t = hi(t));
                var i = e.length,
                  s = (n = n === r ? i : cn(ga(n), 0, i));
                return (n -= t.length) >= 0 && e.slice(n, s) == t;
              }),
              ($r.eq = zo),
              ($r.escape = function (e) {
                return (e = wa(e)) && Q.test(e) ? e.replace(Y, sr) : e;
              }),
              ($r.escapeRegExp = function (e) {
                return (e = wa(e)) && se.test(e) ? e.replace(ie, "\\$&") : e;
              }),
              ($r.every = function (e, t, n) {
                var i = Vo(e) ? Tt : gn;
                return n && bs(e, t, n) && (t = r), i(e, us(t, 3));
              }),
              ($r.find = vo),
              ($r.findIndex = Bs),
              ($r.findKey = function (e, t) {
                return zt(e, us(t, 3), _n);
              }),
              ($r.findLast = mo),
              ($r.findLastIndex = Ks),
              ($r.findLastKey = function (e, t) {
                return zt(e, us(t, 3), En);
              }),
              ($r.floor = _c),
              ($r.forEach = wo),
              ($r.forEachRight = bo),
              ($r.forIn = function (e, t) {
                return null == e ? e : wn(e, us(t, 3), ja);
              }),
              ($r.forInRight = function (e, t) {
                return null == e ? e : bn(e, us(t, 3), ja);
              }),
              ($r.forOwn = function (e, t) {
                return e && _n(e, us(t, 3));
              }),
              ($r.forOwnRight = function (e, t) {
                return e && En(e, us(t, 3));
              }),
              ($r.get = Aa),
              ($r.gt = Ho),
              ($r.gte = Bo),
              ($r.has = function (e, t) {
                return null != e && ys(e, t, xn);
              }),
              ($r.hasIn = xa),
              ($r.head = Fs),
              ($r.identity = ic),
              ($r.includes = function (e, t, r, n) {
                (e = Wo(e) ? e : za(e)), (r = r && !n ? ga(r) : 0);
                var i = e.length;
                return (
                  r < 0 && (r = mr(i + r, 0)),
                  ca(e)
                    ? r <= i && e.indexOf(t, r) > -1
                    : !!i && Bt(e, t, r) > -1
                );
              }),
              ($r.indexOf = function (e, t, r) {
                var n = null == e ? 0 : e.length;
                if (!n) return -1;
                var i = null == r ? 0 : ga(r);
                return i < 0 && (i = mr(n + i, 0)), Bt(e, t, i);
              }),
              ($r.inRange = function (e, t, n) {
                return (
                  (t = da(t)),
                  n === r ? ((n = t), (t = 0)) : (n = da(n)),
                  (function (e, t, r) {
                    return e >= wr(t, r) && e < mr(t, r);
                  })((e = va(e)), t, n)
                );
              }),
              ($r.invoke = Ta),
              ($r.isArguments = Ko),
              ($r.isArray = Vo),
              ($r.isArrayBuffer = Fo),
              ($r.isArrayLike = Wo),
              ($r.isArrayLikeObject = Go),
              ($r.isBoolean = function (e) {
                return !0 === e || !1 === e || (ra(e) && On(e) == b);
              }),
              ($r.isBuffer = Yo),
              ($r.isDate = Jo),
              ($r.isElement = function (e) {
                return ra(e) && 1 === e.nodeType && !sa(e);
              }),
              ($r.isEmpty = function (e) {
                if (null == e) return !0;
                if (
                  Wo(e) &&
                  (Vo(e) ||
                    "string" == typeof e ||
                    "function" == typeof e.splice ||
                    Yo(e) ||
                    ha(e) ||
                    Ko(e))
                )
                  return !e.length;
                var t = gs(e);
                if (t == P || t == N) return !e.size;
                if (Is(e)) return !Dn(e).length;
                for (var r in e) if (De.call(e, r)) return !1;
                return !0;
              }),
              ($r.isEqual = function (e, t) {
                return jn(e, t);
              }),
              ($r.isEqualWith = function (e, t, n) {
                var i = (n = "function" == typeof n ? n : r) ? n(e, t) : r;
                return i === r ? jn(e, t, r, n) : !!i;
              }),
              ($r.isError = Qo),
              ($r.isFinite = function (e) {
                return "number" == typeof e && $t(e);
              }),
              ($r.isFunction = Xo),
              ($r.isInteger = Zo),
              ($r.isLength = ea),
              ($r.isMap = na),
              ($r.isMatch = function (e, t) {
                return e === t || Un(e, t, ls(t));
              }),
              ($r.isMatchWith = function (e, t, n) {
                return (n = "function" == typeof n ? n : r), Un(e, t, ls(t), n);
              }),
              ($r.isNaN = function (e) {
                return ia(e) && e != +e;
              }),
              ($r.isNative = function (e) {
                if (Ss(e))
                  throw new Pe(
                    "Unsupported core-js use. Try https://npms.io/search?q=ponyfill."
                  );
                return Ln(e);
              }),
              ($r.isNil = function (e) {
                return null == e;
              }),
              ($r.isNull = function (e) {
                return null === e;
              }),
              ($r.isNumber = ia),
              ($r.isObject = ta),
              ($r.isObjectLike = ra),
              ($r.isPlainObject = sa),
              ($r.isRegExp = oa),
              ($r.isSafeInteger = function (e) {
                return Zo(e) && e >= -f && e <= f;
              }),
              ($r.isSet = aa),
              ($r.isString = ca),
              ($r.isSymbol = ua),
              ($r.isTypedArray = ha),
              ($r.isUndefined = function (e) {
                return e === r;
              }),
              ($r.isWeakMap = function (e) {
                return ra(e) && gs(e) == j;
              }),
              ($r.isWeakSet = function (e) {
                return ra(e) && "[object WeakSet]" == On(e);
              }),
              ($r.join = function (e, t) {
                return null == e ? "" : Gt.call(e, t);
              }),
              ($r.kebabCase = Va),
              ($r.last = Js),
              ($r.lastIndexOf = function (e, t, n) {
                var i = null == e ? 0 : e.length;
                if (!i) return -1;
                var s = i;
                return (
                  n !== r &&
                    (s = (s = ga(n)) < 0 ? mr(i + s, 0) : wr(s, i - 1)),
                  t === t
                    ? (function (e, t, r) {
                        for (var n = r + 1; n--; ) if (e[n] === t) return n;
                        return n;
                      })(e, t, s)
                    : Ht(e, Vt, s, !0)
                );
              }),
              ($r.lowerCase = Fa),
              ($r.lowerFirst = Wa),
              ($r.lt = la),
              ($r.lte = fa),
              ($r.max = function (e) {
                return e && e.length ? yn(e, ic, An) : r;
              }),
              ($r.maxBy = function (e, t) {
                return e && e.length ? yn(e, us(t, 2), An) : r;
              }),
              ($r.mean = function (e) {
                return Ft(e, ic);
              }),
              ($r.meanBy = function (e, t) {
                return Ft(e, us(t, 2));
              }),
              ($r.min = function (e) {
                return e && e.length ? yn(e, ic, qn) : r;
              }),
              ($r.minBy = function (e, t) {
                return e && e.length ? yn(e, us(t, 2), qn) : r;
              }),
              ($r.stubArray = yc),
              ($r.stubFalse = vc),
              ($r.stubObject = function () {
                return {};
              }),
              ($r.stubString = function () {
                return "";
              }),
              ($r.stubTrue = function () {
                return !0;
              }),
              ($r.multiply = Ec),
              ($r.nth = function (e, t) {
                return e && e.length ? Kn(e, ga(t)) : r;
              }),
              ($r.noConflict = function () {
                return gt._ === this && (gt._ = He), this;
              }),
              ($r.noop = uc),
              ($r.now = Ao),
              ($r.pad = function (e, t, r) {
                e = wa(e);
                var n = (t = ga(t)) ? fr(e) : 0;
                if (!t || n >= t) return e;
                var i = (t - n) / 2;
                return Vi(vt(i), r) + e + Vi(yt(i), r);
              }),
              ($r.padEnd = function (e, t, r) {
                e = wa(e);
                var n = (t = ga(t)) ? fr(e) : 0;
                return t && n < t ? e + Vi(t - n, r) : e;
              }),
              ($r.padStart = function (e, t, r) {
                e = wa(e);
                var n = (t = ga(t)) ? fr(e) : 0;
                return t && n < t ? Vi(t - n, r) + e : e;
              }),
              ($r.parseInt = function (e, t, r) {
                return (
                  r || null == t ? (t = 0) : t && (t = +t),
                  _r(wa(e).replace(oe, ""), t || 0)
                );
              }),
              ($r.random = function (e, t, n) {
                if (
                  (n && "boolean" != typeof n && bs(e, t, n) && (t = n = r),
                  n === r &&
                    ("boolean" == typeof t
                      ? ((n = t), (t = r))
                      : "boolean" == typeof e && ((n = e), (e = r))),
                  e === r && t === r
                    ? ((e = 0), (t = 1))
                    : ((e = da(e)), t === r ? ((t = e), (e = 0)) : (t = da(t))),
                  e > t)
                ) {
                  var i = e;
                  (e = t), (t = i);
                }
                if (n || e % 1 || t % 1) {
                  var s = Er();
                  return wr(
                    e + s * (t - e + lt("1e-" + ((s + "").length - 1))),
                    t
                  );
                }
                return Yn(e, t);
              }),
              ($r.reduce = function (e, t, r) {
                var n = Vo(e) ? Dt : Yt,
                  i = arguments.length < 3;
                return n(e, us(t, 4), r, i, pn);
              }),
              ($r.reduceRight = function (e, t, r) {
                var n = Vo(e) ? kt : Yt,
                  i = arguments.length < 3;
                return n(e, us(t, 4), r, i, dn);
              }),
              ($r.repeat = function (e, t, n) {
                return (
                  (t = (n ? bs(e, t, n) : t === r) ? 1 : ga(t)), Jn(wa(e), t)
                );
              }),
              ($r.replace = function () {
                var e = arguments,
                  t = wa(e[0]);
                return e.length < 3 ? t : t.replace(e[1], e[2]);
              }),
              ($r.result = function (e, t, n) {
                var i = -1,
                  s = (t = bi(t, e)).length;
                for (s || ((s = 1), (e = r)); ++i < s; ) {
                  var o = null == e ? r : e[Ds(t[i])];
                  o === r && ((i = s), (o = n)), (e = Xo(o) ? o.call(e) : o);
                }
                return e;
              }),
              ($r.round = Sc),
              ($r.runInContext = e),
              ($r.sample = function (e) {
                return (Vo(e) ? Qr : Xn)(e);
              }),
              ($r.size = function (e) {
                if (null == e) return 0;
                if (Wo(e)) return ca(e) ? fr(e) : e.length;
                var t = gs(e);
                return t == P || t == N ? e.size : Dn(e).length;
              }),
              ($r.snakeCase = Ga),
              ($r.some = function (e, t, n) {
                var i = Vo(e) ? qt : si;
                return n && bs(e, t, n) && (t = r), i(e, us(t, 3));
              }),
              ($r.sortedIndex = function (e, t) {
                return oi(e, t);
              }),
              ($r.sortedIndexBy = function (e, t, r) {
                return ai(e, t, us(r, 2));
              }),
              ($r.sortedIndexOf = function (e, t) {
                var r = null == e ? 0 : e.length;
                if (r) {
                  var n = oi(e, t);
                  if (n < r && zo(e[n], t)) return n;
                }
                return -1;
              }),
              ($r.sortedLastIndex = function (e, t) {
                return oi(e, t, !0);
              }),
              ($r.sortedLastIndexBy = function (e, t, r) {
                return ai(e, t, us(r, 2), !0);
              }),
              ($r.sortedLastIndexOf = function (e, t) {
                if (null == e ? 0 : e.length) {
                  var r = oi(e, t, !0) - 1;
                  if (zo(e[r], t)) return r;
                }
                return -1;
              }),
              ($r.startCase = Ya),
              ($r.startsWith = function (e, t, r) {
                return (
                  (e = wa(e)),
                  (r = null == r ? 0 : cn(ga(r), 0, e.length)),
                  (t = hi(t)),
                  e.slice(r, r + t.length) == t
                );
              }),
              ($r.subtract = Ic),
              ($r.sum = function (e) {
                return e && e.length ? Jt(e, ic) : 0;
              }),
              ($r.sumBy = function (e, t) {
                return e && e.length ? Jt(e, us(t, 2)) : 0;
              }),
              ($r.template = function (e, t, n) {
                var i = $r.templateSettings;
                n && bs(e, t, n) && (t = r),
                  (e = wa(e)),
                  (t = Ea({}, t, i, Zi));
                var s,
                  o,
                  a = Ea({}, t.imports, i.imports, Zi),
                  c = Ca(a),
                  u = er(a, c),
                  h = 0,
                  l = t.interpolate || Ee,
                  f = "__p += '",
                  p = Re(
                    (t.escape || Ee).source +
                      "|" +
                      l.source +
                      "|" +
                      (l === ee ? de : Ee).source +
                      "|" +
                      (t.evaluate || Ee).source +
                      "|$",
                    "g"
                  ),
                  d =
                    "//# sourceURL=" +
                    (De.call(t, "sourceURL")
                      ? (t.sourceURL + "").replace(/\s/g, " ")
                      : "lodash.templateSources[" + ++at + "]") +
                    "\n";
                e.replace(p, function (t, r, n, i, a, c) {
                  return (
                    n || (n = i),
                    (f += e.slice(h, c).replace(Se, or)),
                    r && ((s = !0), (f += "' +\n__e(" + r + ") +\n'")),
                    a && ((o = !0), (f += "';\n" + a + ";\n__p += '")),
                    n &&
                      (f +=
                        "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"),
                    (h = c + t.length),
                    t
                  );
                }),
                  (f += "';\n");
                var g = De.call(t, "variable") && t.variable;
                if (g) {
                  if (fe.test(g))
                    throw new Pe(
                      "Invalid `variable` option passed into `_.template`"
                    );
                } else f = "with (obj) {\n" + f + "\n}\n";
                (f = (o ? f.replace(V, "") : f)
                  .replace(F, "$1")
                  .replace(W, "$1;")),
                  (f =
                    "function(" +
                    (g || "obj") +
                    ") {\n" +
                    (g ? "" : "obj || (obj = {});\n") +
                    "var __t, __p = ''" +
                    (s ? ", __e = _.escape" : "") +
                    (o
                      ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                      : ";\n") +
                    f +
                    "return __p\n}");
                var y = Za(function () {
                  return Oe(c, d + "return " + f).apply(r, u);
                });
                if (((y.source = f), Qo(y))) throw y;
                return y;
              }),
              ($r.times = function (e, t) {
                if ((e = ga(e)) < 1 || e > f) return [];
                var r = d,
                  n = wr(e, d);
                (t = us(t)), (e -= d);
                for (var i = Qt(n, t); ++r < e; ) t(r);
                return i;
              }),
              ($r.toFinite = da),
              ($r.toInteger = ga),
              ($r.toLength = ya),
              ($r.toLower = function (e) {
                return wa(e).toLowerCase();
              }),
              ($r.toNumber = va),
              ($r.toSafeInteger = function (e) {
                return e ? cn(ga(e), -f, f) : 0 === e ? e : 0;
              }),
              ($r.toString = wa),
              ($r.toUpper = function (e) {
                return wa(e).toUpperCase();
              }),
              ($r.trim = function (e, t, n) {
                if ((e = wa(e)) && (n || t === r)) return Xt(e);
                if (!e || !(t = hi(t))) return e;
                var i = pr(e),
                  s = pr(t);
                return Ei(i, rr(i, s), nr(i, s) + 1).join("");
              }),
              ($r.trimEnd = function (e, t, n) {
                if ((e = wa(e)) && (n || t === r)) return e.slice(0, dr(e) + 1);
                if (!e || !(t = hi(t))) return e;
                var i = pr(e);
                return Ei(i, 0, nr(i, pr(t)) + 1).join("");
              }),
              ($r.trimStart = function (e, t, n) {
                if ((e = wa(e)) && (n || t === r)) return e.replace(oe, "");
                if (!e || !(t = hi(t))) return e;
                var i = pr(e);
                return Ei(i, rr(i, pr(t))).join("");
              }),
              ($r.truncate = function (e, t) {
                var n = 30,
                  i = "...";
                if (ta(t)) {
                  var s = "separator" in t ? t.separator : s;
                  (n = "length" in t ? ga(t.length) : n),
                    (i = "omission" in t ? hi(t.omission) : i);
                }
                var o = (e = wa(e)).length;
                if (ar(e)) {
                  var a = pr(e);
                  o = a.length;
                }
                if (n >= o) return e;
                var c = n - fr(i);
                if (c < 1) return i;
                var u = a ? Ei(a, 0, c).join("") : e.slice(0, c);
                if (s === r) return u + i;
                if ((a && (c += u.length - c), oa(s))) {
                  if (e.slice(c).search(s)) {
                    var h,
                      l = u;
                    for (
                      s.global || (s = Re(s.source, wa(ge.exec(s)) + "g")),
                        s.lastIndex = 0;
                      (h = s.exec(l));

                    )
                      var f = h.index;
                    u = u.slice(0, f === r ? c : f);
                  }
                } else if (e.indexOf(hi(s), c) != c) {
                  var p = u.lastIndexOf(s);
                  p > -1 && (u = u.slice(0, p));
                }
                return u + i;
              }),
              ($r.unescape = function (e) {
                return (e = wa(e)) && J.test(e) ? e.replace(G, gr) : e;
              }),
              ($r.uniqueId = function (e) {
                var t = ++ke;
                return wa(e) + t;
              }),
              ($r.upperCase = Ja),
              ($r.upperFirst = Qa),
              ($r.each = wo),
              ($r.eachRight = bo),
              ($r.first = Fs),
              cc(
                $r,
                (function () {
                  var e = {};
                  return (
                    _n($r, function (t, r) {
                      De.call($r.prototype, r) || (e[r] = t);
                    }),
                    e
                  );
                })(),
                { chain: !1 }
              ),
              ($r.VERSION = "4.17.21"),
              Rt(
                [
                  "bind",
                  "bindKey",
                  "curry",
                  "curryRight",
                  "partial",
                  "partialRight",
                ],
                function (e) {
                  $r[e].placeholder = $r;
                }
              ),
              Rt(["drop", "take"], function (e, t) {
                (Kr.prototype[e] = function (n) {
                  n = n === r ? 1 : mr(ga(n), 0);
                  var i = this.__filtered__ && !t ? new Kr(this) : this.clone();
                  return (
                    i.__filtered__
                      ? (i.__takeCount__ = wr(n, i.__takeCount__))
                      : i.__views__.push({
                          size: wr(n, d),
                          type: e + (i.__dir__ < 0 ? "Right" : ""),
                        }),
                    i
                  );
                }),
                  (Kr.prototype[e + "Right"] = function (t) {
                    return this.reverse()[e](t).reverse();
                  });
              }),
              Rt(["filter", "map", "takeWhile"], function (e, t) {
                var r = t + 1,
                  n = 1 == r || 3 == r;
                Kr.prototype[e] = function (e) {
                  var t = this.clone();
                  return (
                    t.__iteratees__.push({ iteratee: us(e, 3), type: r }),
                    (t.__filtered__ = t.__filtered__ || n),
                    t
                  );
                };
              }),
              Rt(["head", "last"], function (e, t) {
                var r = "take" + (t ? "Right" : "");
                Kr.prototype[e] = function () {
                  return this[r](1).value()[0];
                };
              }),
              Rt(["initial", "tail"], function (e, t) {
                var r = "drop" + (t ? "" : "Right");
                Kr.prototype[e] = function () {
                  return this.__filtered__ ? new Kr(this) : this[r](1);
                };
              }),
              (Kr.prototype.compact = function () {
                return this.filter(ic);
              }),
              (Kr.prototype.find = function (e) {
                return this.filter(e).head();
              }),
              (Kr.prototype.findLast = function (e) {
                return this.reverse().find(e);
              }),
              (Kr.prototype.invokeMap = Qn(function (e, t) {
                return "function" == typeof e
                  ? new Kr(this)
                  : this.map(function (r) {
                      return Tn(r, e, t);
                    });
              })),
              (Kr.prototype.reject = function (e) {
                return this.filter(Mo(us(e)));
              }),
              (Kr.prototype.slice = function (e, t) {
                e = ga(e);
                var n = this;
                return n.__filtered__ && (e > 0 || t < 0)
                  ? new Kr(n)
                  : (e < 0 ? (n = n.takeRight(-e)) : e && (n = n.drop(e)),
                    t !== r &&
                      (n = (t = ga(t)) < 0 ? n.dropRight(-t) : n.take(t - e)),
                    n);
              }),
              (Kr.prototype.takeRightWhile = function (e) {
                return this.reverse().takeWhile(e).reverse();
              }),
              (Kr.prototype.toArray = function () {
                return this.take(d);
              }),
              _n(Kr.prototype, function (e, t) {
                var n = /^(?:filter|find|map|reject)|While$/.test(t),
                  i = /^(?:head|last)$/.test(t),
                  s = $r[i ? "take" + ("last" == t ? "Right" : "") : t],
                  o = i || /^find/.test(t);
                s &&
                  ($r.prototype[t] = function () {
                    var t = this.__wrapped__,
                      a = i ? [1] : arguments,
                      c = t instanceof Kr,
                      u = a[0],
                      h = c || Vo(t),
                      l = function (e) {
                        var t = s.apply($r, Mt([e], a));
                        return i && f ? t[0] : t;
                      };
                    h &&
                      n &&
                      "function" == typeof u &&
                      1 != u.length &&
                      (c = h = !1);
                    var f = this.__chain__,
                      p = !!this.__actions__.length,
                      d = o && !f,
                      g = c && !p;
                    if (!o && h) {
                      t = g ? t : new Kr(this);
                      var y = e.apply(t, a);
                      return (
                        y.__actions__.push({ func: po, args: [l], thisArg: r }),
                        new Br(y, f)
                      );
                    }
                    return d && g
                      ? e.apply(this, a)
                      : ((y = this.thru(l)),
                        d ? (i ? y.value()[0] : y.value()) : y);
                  });
              }),
              Rt(
                ["pop", "push", "shift", "sort", "splice", "unshift"],
                function (e) {
                  var t = Ce[e],
                    r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                    n = /^(?:pop|shift)$/.test(e);
                  $r.prototype[e] = function () {
                    var e = arguments;
                    if (n && !this.__chain__) {
                      var i = this.value();
                      return t.apply(Vo(i) ? i : [], e);
                    }
                    return this[r](function (r) {
                      return t.apply(Vo(r) ? r : [], e);
                    });
                  };
                }
              ),
              _n(Kr.prototype, function (e, t) {
                var r = $r[t];
                if (r) {
                  var n = r.name + "";
                  De.call(Tr, n) || (Tr[n] = []),
                    Tr[n].push({ name: t, func: r });
                }
              }),
              (Tr[zi(r, 2).name] = [{ name: "wrapper", func: r }]),
              (Kr.prototype.clone = function () {
                var e = new Kr(this.__wrapped__);
                return (
                  (e.__actions__ = Ni(this.__actions__)),
                  (e.__dir__ = this.__dir__),
                  (e.__filtered__ = this.__filtered__),
                  (e.__iteratees__ = Ni(this.__iteratees__)),
                  (e.__takeCount__ = this.__takeCount__),
                  (e.__views__ = Ni(this.__views__)),
                  e
                );
              }),
              (Kr.prototype.reverse = function () {
                if (this.__filtered__) {
                  var e = new Kr(this);
                  (e.__dir__ = -1), (e.__filtered__ = !0);
                } else (e = this.clone()).__dir__ *= -1;
                return e;
              }),
              (Kr.prototype.value = function () {
                var e = this.__wrapped__.value(),
                  t = this.__dir__,
                  r = Vo(e),
                  n = t < 0,
                  i = r ? e.length : 0,
                  s = (function (e, t, r) {
                    for (var n = -1, i = r.length; ++n < i; ) {
                      var s = r[n],
                        o = s.size;
                      switch (s.type) {
                        case "drop":
                          e += o;
                          break;
                        case "dropRight":
                          t -= o;
                          break;
                        case "take":
                          t = wr(t, e + o);
                          break;
                        case "takeRight":
                          e = mr(e, t - o);
                      }
                    }
                    return { start: e, end: t };
                  })(0, i, this.__views__),
                  o = s.start,
                  a = s.end,
                  c = a - o,
                  u = n ? a : o - 1,
                  h = this.__iteratees__,
                  l = h.length,
                  f = 0,
                  p = wr(c, this.__takeCount__);
                if (!r || (!n && i == c && p == c))
                  return gi(e, this.__actions__);
                var d = [];
                e: for (; c-- && f < p; ) {
                  for (var g = -1, y = e[(u += t)]; ++g < l; ) {
                    var v = h[g],
                      m = v.iteratee,
                      w = v.type,
                      b = m(y);
                    if (2 == w) y = b;
                    else if (!b) {
                      if (1 == w) continue e;
                      break e;
                    }
                  }
                  d[f++] = y;
                }
                return d;
              }),
              ($r.prototype.at = go),
              ($r.prototype.chain = function () {
                return fo(this);
              }),
              ($r.prototype.commit = function () {
                return new Br(this.value(), this.__chain__);
              }),
              ($r.prototype.next = function () {
                this.__values__ === r && (this.__values__ = pa(this.value()));
                var e = this.__index__ >= this.__values__.length;
                return {
                  done: e,
                  value: e ? r : this.__values__[this.__index__++],
                };
              }),
              ($r.prototype.plant = function (e) {
                for (var t, n = this; n instanceof Hr; ) {
                  var i = qs(n);
                  (i.__index__ = 0),
                    (i.__values__ = r),
                    t ? (s.__wrapped__ = i) : (t = i);
                  var s = i;
                  n = n.__wrapped__;
                }
                return (s.__wrapped__ = e), t;
              }),
              ($r.prototype.reverse = function () {
                var e = this.__wrapped__;
                if (e instanceof Kr) {
                  var t = e;
                  return (
                    this.__actions__.length && (t = new Kr(this)),
                    (t = t.reverse()).__actions__.push({
                      func: po,
                      args: [eo],
                      thisArg: r,
                    }),
                    new Br(t, this.__chain__)
                  );
                }
                return this.thru(eo);
              }),
              ($r.prototype.toJSON =
                $r.prototype.valueOf =
                $r.prototype.value =
                  function () {
                    return gi(this.__wrapped__, this.__actions__);
                  }),
              ($r.prototype.first = $r.prototype.head),
              Ze &&
                ($r.prototype[Ze] = function () {
                  return this;
                }),
              $r
            );
          })();
          vt ? (((vt.exports = yr)._ = yr), (yt._ = yr)) : (gt._ = yr);
        }.call(Qc));
      })(Xc, Xc.exports);
      var Zc = Object.defineProperty,
        eu = Object.defineProperties,
        tu = Object.getOwnPropertyDescriptors,
        ru = Object.getOwnPropertySymbols,
        nu = Object.prototype.hasOwnProperty,
        iu = Object.prototype.propertyIsEnumerable,
        su = (e, t, r) =>
          t in e
            ? Zc(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        ou = (e, t) => {
          for (var r in t || (t = {})) nu.call(t, r) && su(e, r, t[r]);
          if (ru) for (var r of ru(t)) iu.call(t, r) && su(e, r, t[r]);
          return e;
        },
        au = (e, t) => eu(e, tu(t));
      function cu(e, t, r) {
        var n;
        const i = _t(e);
        return (
          (null == (n = t.rpcMap) ? void 0 : n[i.reference]) ||
          `https://rpc.walletconnect.com/v1/?chainId=${i.namespace}:${i.reference}&projectId=${r}`
        );
      }
      function uu(e) {
        return e.includes(":") ? e.split(":")[1] : e;
      }
      function hu(e) {
        return e.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
      }
      function lu() {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const t = fu(
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          ),
          r = fu(e);
        return Xc.exports.merge(t, r);
      }
      function fu(e) {
        var t, r, n, i;
        const s = {};
        if (!jr(e)) return s;
        for (const [o, a] of Object.entries(e)) {
          const e = Or(o) ? [o] : a.chains,
            c = a.methods || [],
            u = a.events || [],
            h = a.rpcMap || {},
            l = Ar(o);
          s[l] = au(ou(ou({}, s[l]), a), {
            chains: lr(e, null == (t = s[l]) ? void 0 : t.chains),
            methods: lr(c, null == (r = s[l]) ? void 0 : r.methods),
            events: lr(u, null == (n = s[l]) ? void 0 : n.events),
            rpcMap: ou(ou({}, h), null == (i = s[l]) ? void 0 : i.rpcMap),
          });
        }
        return s;
      }
      function pu(e) {
        return e.includes(":") ? e.split(":")[2] : e;
      }
      function du(e) {
        const t = {};
        for (const [r, n] of Object.entries(e)) {
          const e = n.methods || [],
            i = n.events || [],
            s = n.accounts || [],
            o = Or(r) ? [r] : n.chains ? n.chains : hu(n.accounts);
          t[r] = { chains: o, methods: e, events: i, accounts: s };
        }
        return t;
      }
      function gu(e) {
        return "number" == typeof e
          ? e
          : e.includes("0x")
          ? parseInt(e, 16)
          : ((e = e.includes(":") ? e.split(":")[1] : e),
            isNaN(Number(e)) ? e : Number(e));
      }
      const yu = {},
        vu = (e) => yu[e],
        mu = (e, t) => {
          yu[e] = t;
        };
      class wu {
        constructor(e) {
          (this.name = "polkadot"),
            (this.namespace = e.namespace),
            (this.events = vu("events")),
            (this.client = vu("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(Jc, `${this.name}:${e}`);
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(":")[1] === this.chainId.toString())
                .map((e) => e.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              const n = uu(t);
              e[n] = this.createHttpProvider(
                n,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || cu(e, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new ns(new Wc(r, vu("disableProviderPing")));
        }
      }
      class bu {
        constructor(e) {
          (this.name = "eip155"),
            (this.namespace = e.namespace),
            (this.events = vu("events")),
            (this.client = vu("client")),
            (this.httpProviders = this.createHttpProviders()),
            (this.chainId = parseInt(this.getDefaultChain()));
        }
        async request(e) {
          switch (e.request.method) {
            case "eth_requestAccounts":
            case "eth_accounts":
              return this.getAccounts();
            case "wallet_switchEthereumChain":
              return await this.handleSwitchChain(e);
            case "eth_chainId":
              return parseInt(this.getDefaultChain());
          }
          return this.namespace.methods.includes(e.request.method)
            ? await this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
            (this.chainId = parseInt(e)),
            this.events.emit(Jc, `${this.name}:${e}`);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId.toString();
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        createHttpProvider(e, t) {
          const r =
            t ||
            cu(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new ns(new Fc(r, vu("disableProviderPing")));
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              const n = parseInt(uu(t));
              e[n] = this.createHttpProvider(
                n,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        getHttpProvider() {
          const e = this.chainId,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        async handleSwitchChain(e) {
          var t, r;
          let n = e.request.params
            ? null == (t = e.request.params[0])
              ? void 0
              : t.chainId
            : "0x0";
          n = n.startsWith("0x") ? n : `0x${n}`;
          const i = parseInt(n, 16);
          if (this.isChainApproved(i)) this.setDefaultChain(`${i}`);
          else {
            if (!this.namespace.methods.includes("wallet_switchEthereumChain"))
              throw new Error(
                `Failed to switch to chain 'eip155:${i}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
              );
            await this.client.request({
              topic: e.topic,
              request: { method: e.request.method, params: [{ chainId: n }] },
              chainId: null == (r = this.namespace.chains) ? void 0 : r[0],
            }),
              this.setDefaultChain(`${i}`);
          }
          return null;
        }
        isChainApproved(e) {
          return this.namespace.chains.includes(`${this.name}:${e}`);
        }
      }
      class _u {
        constructor(e) {
          (this.name = "solana"),
            (this.namespace = e.namespace),
            (this.events = vu("events")),
            (this.client = vu("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(Jc, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              const n = uu(t);
              e[n] = this.createHttpProvider(
                n,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || cu(e, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new ns(new Wc(r, vu("disableProviderPing")));
        }
      }
      class Eu {
        constructor(e) {
          (this.name = "cosmos"),
            (this.namespace = e.namespace),
            (this.events = vu("events")),
            (this.client = vu("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(Jc, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              const n = uu(t);
              e[n] = this.createHttpProvider(
                n,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || cu(e, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new ns(new Wc(r, vu("disableProviderPing")));
        }
      }
      class Su {
        constructor(e) {
          (this.name = "cip34"),
            (this.namespace = e.namespace),
            (this.events = vu("events")),
            (this.client = vu("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(Jc, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              const r = this.getCardanoRPCUrl(t),
                n = uu(t);
              e[n] = this.createHttpProvider(n, r);
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        getCardanoRPCUrl(e) {
          const t = this.namespace.rpcMap;
          if (t) return t[e];
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || this.getCardanoRPCUrl(e);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new ns(new Wc(r, vu("disableProviderPing")));
        }
      }
      class Iu {
        constructor(e) {
          (this.name = "elrond"),
            (this.namespace = e.namespace),
            (this.events = vu("events")),
            (this.client = vu("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(Jc, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              const n = uu(t);
              e[n] = this.createHttpProvider(
                n,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || cu(e, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new ns(new Wc(r, vu("disableProviderPing")));
        }
      }
      class Pu {
        constructor(e) {
          (this.name = "multiversx"),
            (this.namespace = e.namespace),
            (this.events = vu("events")),
            (this.client = vu("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(Jc, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              const n = uu(t);
              e[n] = this.createHttpProvider(
                n,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || cu(e, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new ns(new Wc(r, vu("disableProviderPing")));
        }
      }
      class Ou {
        constructor(e) {
          (this.name = "near"),
            (this.namespace = e.namespace),
            (this.events = vu("events")),
            (this.client = vu("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            const r = t || cu(`${this.name}:${e}`, this.namespace);
            if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          this.events.emit(Jc, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(":")[1] === this.chainId.toString())
                .map((e) => e.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              e[t] = this.createHttpProvider(
                t,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || cu(e, this.namespace);
          return typeof r > "u"
            ? void 0
            : new ns(new Wc(r, vu("disableProviderPing")));
        }
      }
      var Au = Object.defineProperty,
        xu = Object.defineProperties,
        Ru = Object.getOwnPropertyDescriptors,
        Nu = Object.getOwnPropertySymbols,
        Tu = Object.prototype.hasOwnProperty,
        Cu = Object.prototype.propertyIsEnumerable,
        ju = (e, t, r) =>
          t in e
            ? Au(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Uu = (e, t) => {
          for (var r in t || (t = {})) Tu.call(t, r) && ju(e, r, t[r]);
          if (Nu) for (var r of Nu(t)) Cu.call(t, r) && ju(e, r, t[r]);
          return e;
        },
        Lu = (e, t) => xu(e, Ru(t));
      class Mu {
        constructor(e) {
          (this.events = new (m())()),
            (this.rpcProviders = {}),
            (this.shouldAbortPairingAttempt = !1),
            (this.maxPairingAttempts = 10),
            (this.disableProviderPing = !1),
            (this.providerOpts = e),
            (this.logger =
              typeof e?.logger < "u" && "string" != typeof e?.logger
                ? e.logger
                : Dn()(Yn({ level: e?.logger || Gc }))),
            (this.disableProviderPing = e?.disableProviderPing || !1);
        }
        static async init(e) {
          const t = new Mu(e);
          return await t.initialize(), t;
        }
        async request(e, t, r) {
          const [n, i] = this.validateChain(t);
          if (!this.session)
            throw new Error("Please call connect() before request()");
          return await this.getProvider(n).request({
            request: Uu({}, e),
            chainId: `${n}:${i}`,
            topic: this.session.topic,
            expiry: r,
          });
        }
        sendAsync(e, t, r, n) {
          const i = new Date().getTime();
          this.request(e, r, n)
            .then((e) => t(null, Bi(i, e)))
            .catch((e) => t(e, void 0));
        }
        async enable() {
          if (!this.client) throw new Error("Sign Client not initialized");
          return (
            this.session ||
              (await this.connect({
                namespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties,
              })),
            await this.requestAccounts()
          );
        }
        async disconnect() {
          var e;
          if (!this.session)
            throw new Error("Please call connect() before enable()");
          await this.client.disconnect({
            topic: null == (e = this.session) ? void 0 : e.topic,
            reason: Tr("USER_DISCONNECTED"),
          }),
            await this.cleanup();
        }
        async connect(e) {
          if (!this.client) throw new Error("Sign Client not initialized");
          if (
            (this.setNamespaces(e),
            await this.cleanupPendingPairings(),
            !e.skipPairing)
          )
            return await this.pair(e.pairingTopic);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        get isWalletConnect() {
          return !0;
        }
        async pair(e) {
          this.shouldAbortPairingAttempt = !1;
          let t = 0;
          do {
            if (this.shouldAbortPairingAttempt)
              throw new Error("Pairing aborted");
            if (t >= this.maxPairingAttempts)
              throw new Error("Max auto pairing attempts reached");
            const { uri: r, approval: n } = await this.client.connect({
              pairingTopic: e,
              requiredNamespaces: this.namespaces,
              optionalNamespaces: this.optionalNamespaces,
              sessionProperties: this.sessionProperties,
            });
            r && ((this.uri = r), this.events.emit("display_uri", r)),
              await n()
                .then((e) => {
                  this.session = e;
                  const t = du(e.namespaces);
                  (this.namespaces = lu(this.namespaces, t)),
                    this.persist("namespaces", this.namespaces);
                })
                .catch((e) => {
                  if (e.message !== Ec) throw e;
                  t++;
                });
          } while (!this.session);
          return this.onConnect(), this.session;
        }
        setDefaultChain(e, t) {
          try {
            if (!this.session) return;
            const [r, n] = this.validateChain(e);
            this.getProvider(r).setDefaultChain(n, t);
          } catch (r) {
            if (!/Please call connect/.test(r.message)) throw r;
          }
        }
        async cleanupPendingPairings() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.logger.info("Cleaning up inactive pairings...");
          const t = this.client.pairing.getAll();
          if (Cr(t)) {
            for (const r of t)
              e.deletePairings
                ? this.client.core.expirer.set(r.topic, 0)
                : await this.client.core.relayer.subscriber.unsubscribe(
                    r.topic
                  );
            this.logger.info(`Inactive pairings cleared: ${t.length}`);
          }
        }
        abortPairingAttempt() {
          this.shouldAbortPairingAttempt = !0;
        }
        async checkStorage() {
          if (
            ((this.namespaces = await this.getFromStore("namespaces")),
            (this.optionalNamespaces =
              (await this.getFromStore("optionalNamespaces")) || {}),
            this.client.session.length)
          ) {
            const e = this.client.session.keys.length - 1;
            (this.session = this.client.session.get(
              this.client.session.keys[e]
            )),
              this.createProviders();
          }
        }
        async initialize() {
          this.logger.trace("Initialized"),
            await this.createClient(),
            await this.checkStorage(),
            this.registerEventListeners();
        }
        async createClient() {
          (this.client =
            this.providerOpts.client ||
            (await Hc.init({
              logger: this.providerOpts.logger || Gc,
              relayUrl:
                this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
              projectId: this.providerOpts.projectId,
              metadata: this.providerOpts.metadata,
              storageOptions: this.providerOpts.storageOptions,
              storage: this.providerOpts.storage,
              name: this.providerOpts.name,
            }))),
            this.logger.trace("SignClient Initialized");
        }
        createProviders() {
          if (!this.client) throw new Error("Sign Client not initialized");
          if (!this.session)
            throw new Error(
              "Session not initialized. Please call connect() before enable()"
            );
          const e = [
            ...new Set(Object.keys(this.session.namespaces).map((e) => Ar(e))),
          ];
          mu("client", this.client),
            mu("events", this.events),
            mu("disableProviderPing", this.disableProviderPing),
            e.forEach((e) => {
              if (!this.session) return;
              const t = (function (e, t) {
                  const r = Object.keys(t.namespaces).filter((t) =>
                    t.includes(e)
                  );
                  if (!r.length) return [];
                  const n = [];
                  return (
                    r.forEach((e) => {
                      const r = t.namespaces[e].accounts;
                      n.push(...r);
                    }),
                    n
                  );
                })(e, this.session),
                r = hu(t),
                n = lu(this.namespaces, this.optionalNamespaces),
                i = Lu(Uu({}, n[e]), { accounts: t, chains: r });
              switch (e) {
                case "eip155":
                  this.rpcProviders[e] = new bu({ namespace: i });
                  break;
                case "solana":
                  this.rpcProviders[e] = new _u({ namespace: i });
                  break;
                case "cosmos":
                  this.rpcProviders[e] = new Eu({ namespace: i });
                  break;
                case "polkadot":
                  this.rpcProviders[e] = new wu({ namespace: i });
                  break;
                case "cip34":
                  this.rpcProviders[e] = new Su({ namespace: i });
                  break;
                case "elrond":
                  this.rpcProviders[e] = new Iu({ namespace: i });
                  break;
                case "multiversx":
                  this.rpcProviders[e] = new Pu({ namespace: i });
                  break;
                case "near":
                  this.rpcProviders[e] = new Ou({ namespace: i });
              }
            });
        }
        registerEventListeners() {
          if (typeof this.client > "u")
            throw new Error("Sign Client is not initialized");
          this.client.on("session_ping", (e) => {
            this.events.emit("session_ping", e);
          }),
            this.client.on("session_event", (e) => {
              const { params: t } = e,
                { event: r } = t;
              if ("accountsChanged" === r.name) {
                const e = r.data;
                e && Cr(e) && this.events.emit("accountsChanged", e.map(pu));
              } else if ("chainChanged" === r.name) {
                const e = t.chainId,
                  r = t.event.data,
                  n = Ar(e),
                  i = gu(e) !== gu(r) ? `${n}:${gu(r)}` : e;
                this.onChainChanged(i);
              } else this.events.emit(r.name, r.data);
              this.events.emit("session_event", e);
            }),
            this.client.on("session_update", (e) => {
              let { topic: t, params: r } = e;
              var n;
              const { namespaces: i } = r,
                s = null == (n = this.client) ? void 0 : n.session.get(t);
              (this.session = Lu(Uu({}, s), { namespaces: i })),
                this.onSessionUpdate(),
                this.events.emit("session_update", { topic: t, params: r });
            }),
            this.client.on("session_delete", async (e) => {
              await this.cleanup(),
                this.events.emit("session_delete", e),
                this.events.emit(
                  "disconnect",
                  Lu(Uu({}, Tr("USER_DISCONNECTED")), { data: e.topic })
                );
            }),
            this.on(Jc, (e) => {
              this.onChainChanged(e, !0);
            });
        }
        getProvider(e) {
          if (!this.rpcProviders[e])
            throw new Error(`Provider not found: ${e}`);
          return this.rpcProviders[e];
        }
        onSessionUpdate() {
          Object.keys(this.rpcProviders).forEach((e) => {
            var t;
            this.getProvider(e).updateNamespace(
              null == (t = this.session) ? void 0 : t.namespaces[e]
            );
          });
        }
        setNamespaces(e) {
          const {
            namespaces: t,
            optionalNamespaces: r,
            sessionProperties: n,
          } = e;
          t && Object.keys(t).length && (this.namespaces = t),
            r && Object.keys(r).length && (this.optionalNamespaces = r),
            (this.sessionProperties = n),
            this.persist("namespaces", t),
            this.persist("optionalNamespaces", r);
        }
        validateChain(e) {
          const [t, r] = e?.split(":") || ["", ""];
          if (!this.namespaces || !Object.keys(this.namespaces).length)
            return [t, r];
          if (
            t &&
            !Object.keys(this.namespaces || {})
              .map((e) => Ar(e))
              .includes(t)
          )
            throw new Error(
              `Namespace '${t}' is not configured. Please call connect() first with namespace config.`
            );
          if (t && r) return [t, r];
          const n = Ar(Object.keys(this.namespaces)[0]);
          return [n, this.rpcProviders[n].getDefaultChain()];
        }
        async requestAccounts() {
          const [e] = this.validateChain();
          return await this.getProvider(e).requestAccounts();
        }
        onChainChanged(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (!this.namespaces) return;
          const [r, n] = this.validateChain(e);
          n &&
            (t || this.getProvider(r).setDefaultChain(n),
            this.namespaces[r]
              ? (this.namespaces[r].defaultChain = n)
              : this.namespaces[`${r}:${n}`]
              ? (this.namespaces[`${r}:${n}`].defaultChain = n)
              : (this.namespaces[`${r}:${n}`] = { defaultChain: n }),
            this.persist("namespaces", this.namespaces),
            this.events.emit("chainChanged", n));
        }
        onConnect() {
          this.createProviders(),
            this.events.emit("connect", { session: this.session });
        }
        async cleanup() {
          (this.session = void 0),
            (this.namespaces = void 0),
            (this.optionalNamespaces = void 0),
            (this.sessionProperties = void 0),
            this.persist("namespaces", void 0),
            this.persist("optionalNamespaces", void 0),
            this.persist("sessionProperties", void 0),
            await this.cleanupPendingPairings({ deletePairings: !0 });
        }
        persist(e, t) {
          this.client.core.storage.setItem(`${Yc}/${e}`, t);
        }
        async getFromStore(e) {
          return await this.client.core.storage.getItem(`${Yc}/${e}`);
        }
      }
      const Du = Mu,
        ku = ["eth_sendTransaction", "personal_sign"],
        qu = [
          "eth_accounts",
          "eth_requestAccounts",
          "eth_sendRawTransaction",
          "eth_sign",
          "eth_signTransaction",
          "eth_signTypedData",
          "eth_signTypedData_v3",
          "eth_signTypedData_v4",
          "eth_sendTransaction",
          "personal_sign",
          "wallet_switchEthereumChain",
          "wallet_addEthereumChain",
          "wallet_getPermissions",
          "wallet_requestPermissions",
          "wallet_registerOnboarding",
          "wallet_watchAsset",
          "wallet_scanQRCode",
        ],
        $u = ["chainChanged", "accountsChanged"],
        zu = [
          "chainChanged",
          "accountsChanged",
          "message",
          "disconnect",
          "connect",
        ];
      var Hu = Object.defineProperty,
        Bu = Object.defineProperties,
        Ku = Object.getOwnPropertyDescriptors,
        Vu = Object.getOwnPropertySymbols,
        Fu = Object.prototype.hasOwnProperty,
        Wu = Object.prototype.propertyIsEnumerable,
        Gu = (e, t, r) =>
          t in e
            ? Hu(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Yu = (e, t) => {
          for (var r in t || (t = {})) Fu.call(t, r) && Gu(e, r, t[r]);
          if (Vu) for (var r of Vu(t)) Wu.call(t, r) && Gu(e, r, t[r]);
          return e;
        },
        Ju = (e, t) => Bu(e, Ku(t));
      function Qu(e) {
        return Number(e[0].split(":")[1]);
      }
      function Xu(e) {
        return `0x${e.toString(16)}`;
      }
      class Zu {
        constructor() {
          (this.events = new v.EventEmitter()),
            (this.namespace = "eip155"),
            (this.accounts = []),
            (this.chainId = 1),
            (this.STORAGE_KEY = "wc@2:ethereum_provider:"),
            (this.on = (e, t) => (this.events.on(e, t), this)),
            (this.once = (e, t) => (this.events.once(e, t), this)),
            (this.removeListener = (e, t) => (
              this.events.removeListener(e, t), this
            )),
            (this.off = (e, t) => (this.events.off(e, t), this)),
            (this.parseAccount = (e) =>
              this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e),
            (this.signer = {}),
            (this.rpc = {});
        }
        static async init(e) {
          const t = new Zu();
          return await t.initialize(e), t;
        }
        async request(e, t) {
          return await this.signer.request(
            e,
            this.formatChainId(this.chainId),
            t
          );
        }
        sendAsync(e, t, r) {
          this.signer.sendAsync(e, t, this.formatChainId(this.chainId), r);
        }
        get connected() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connected
          );
        }
        get connecting() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connecting
          );
        }
        async enable() {
          return (
            this.session || (await this.connect()),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async connect(e) {
          if (!this.signer.client)
            throw new Error("Provider not initialized. Call init() first");
          this.loadConnectOpts(e);
          const { required: t, optional: r } = (function (e) {
            const {
              chains: t,
              optionalChains: r,
              methods: n,
              optionalMethods: i,
              events: s,
              optionalEvents: o,
              rpcMap: a,
            } = e;
            if (!Cr(t)) throw new Error("Invalid chains");
            const c = {
                chains: t,
                methods: n || ku,
                events: s || $u,
                rpcMap: Yu({}, t.length ? { [Qu(t)]: a[Qu(t)] } : {}),
              },
              u = s?.filter((e) => !$u.includes(e)),
              h = n?.filter((e) => !ku.includes(e));
            if (
              !r &&
              !o &&
              !i &&
              (null == u || !u.length) &&
              (null == h || !h.length)
            )
              return { required: t.length ? c : void 0 };
            const l = {
              chains: [
                ...new Set(
                  (u?.length && h?.length) || !r ? c.chains.concat(r || []) : r
                ),
              ],
              methods: [
                ...new Set(c.methods.concat(null != i && i.length ? i : qu)),
              ],
              events: [
                ...new Set(c.events.concat(null != o && o.length ? o : zu)),
              ],
              rpcMap: a,
            };
            return {
              required: t.length ? c : void 0,
              optional: r.length ? l : void 0,
            };
          })(this.rpc);
          try {
            const n = await new Promise(async (n, i) => {
              var s;
              this.rpc.showQrModal &&
                (null == (s = this.modal) ||
                  s.subscribeModal((e) => {
                    !e.open &&
                      !this.signer.session &&
                      (this.signer.abortPairingAttempt(),
                      i(
                        new Error("Connection request reset. Please try again.")
                      ));
                  })),
                await this.signer
                  .connect(
                    Ju(
                      Yu(
                        { namespaces: Yu({}, t && { [this.namespace]: t }) },
                        r && { optionalNamespaces: { [this.namespace]: r } }
                      ),
                      { pairingTopic: e?.pairingTopic }
                    )
                  )
                  .then((e) => {
                    n(e);
                  })
                  .catch((e) => {
                    i(new Error(e.message));
                  });
            });
            if (!n) return;
            const i = (function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [];
              const r = [];
              return (
                Object.keys(e).forEach((n) => {
                  if (t.length && !t.includes(n)) return;
                  const i = e[n];
                  r.push(...i.accounts);
                }),
                r
              );
            })(n.namespaces, [this.namespace]);
            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : i),
              this.setAccounts(i),
              this.events.emit("connect", { chainId: Xu(this.chainId) });
          } catch (qn) {
            throw (this.signer.logger.error(qn), qn);
          } finally {
            this.modal && this.modal.closeModal();
          }
        }
        async disconnect() {
          this.session && (await this.signer.disconnect()), this.reset();
        }
        get isWalletConnect() {
          return !0;
        }
        get session() {
          return this.signer.session;
        }
        registerEventListeners() {
          this.signer.on("session_event", (e) => {
            const { params: t } = e,
              { event: r } = t;
            "accountsChanged" === r.name
              ? ((this.accounts = this.parseAccounts(r.data)),
                this.events.emit("accountsChanged", this.accounts))
              : "chainChanged" === r.name
              ? this.setChainId(this.formatChainId(r.data))
              : this.events.emit(r.name, r.data),
              this.events.emit("session_event", e);
          }),
            this.signer.on("chainChanged", (e) => {
              const t = parseInt(e);
              (this.chainId = t),
                this.events.emit("chainChanged", Xu(this.chainId)),
                this.persist();
            }),
            this.signer.on("session_update", (e) => {
              this.events.emit("session_update", e);
            }),
            this.signer.on("session_delete", (e) => {
              this.reset(),
                this.events.emit("session_delete", e),
                this.events.emit(
                  "disconnect",
                  Ju(Yu({}, Tr("USER_DISCONNECTED")), {
                    data: e.topic,
                    name: "USER_DISCONNECTED",
                  })
                );
            }),
            this.signer.on("display_uri", (e) => {
              var t, r;
              this.rpc.showQrModal &&
                (null == (t = this.modal) || t.closeModal(),
                null == (r = this.modal) || r.openModal({ uri: e })),
                this.events.emit("display_uri", e);
            });
        }
        switchEthereumChain(e) {
          this.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: e.toString(16) }],
          });
        }
        isCompatibleChainId(e) {
          return "string" == typeof e && e.startsWith(`${this.namespace}:`);
        }
        formatChainId(e) {
          return `${this.namespace}:${e}`;
        }
        parseChainId(e) {
          return Number(e.split(":")[1]);
        }
        setChainIds(e) {
          const t = e
            .filter((e) => this.isCompatibleChainId(e))
            .map((e) => this.parseChainId(e));
          t.length &&
            ((this.chainId = t[0]),
            this.events.emit("chainChanged", Xu(this.chainId)),
            this.persist());
        }
        setChainId(e) {
          if (this.isCompatibleChainId(e)) {
            const t = this.parseChainId(e);
            (this.chainId = t), this.switchEthereumChain(t);
          }
        }
        parseAccountId(e) {
          const [t, r, n] = e.split(":");
          return { chainId: `${t}:${r}`, address: n };
        }
        setAccounts(e) {
          (this.accounts = e
            .filter(
              (e) =>
                this.parseChainId(this.parseAccountId(e).chainId) ===
                this.chainId
            )
            .map((e) => this.parseAccountId(e).address)),
            this.events.emit("accountsChanged", this.accounts);
        }
        getRpcConfig(e) {
          var t, r;
          const n = null != (t = e?.chains) ? t : [],
            i = null != (r = e?.optionalChains) ? r : [],
            s = n.concat(i);
          if (!s.length)
            throw new Error(
              "No chains specified in either `chains` or `optionalChains`"
            );
          const o = n.length ? e?.methods || ku : [],
            a = n.length ? e?.events || $u : [],
            c = e?.optionalMethods || [],
            u = e?.optionalEvents || [],
            h = e?.rpcMap || this.buildRpcMap(s, e.projectId),
            l = e?.qrModalOptions || void 0;
          return {
            chains: n?.map((e) => this.formatChainId(e)),
            optionalChains: i.map((e) => this.formatChainId(e)),
            methods: o,
            events: a,
            optionalMethods: c,
            optionalEvents: u,
            rpcMap: h,
            showQrModal: !(null == e || !e.showQrModal),
            qrModalOptions: l,
            projectId: e.projectId,
            metadata: e.metadata,
          };
        }
        buildRpcMap(e, t) {
          const r = {};
          return (
            e.forEach((e) => {
              r[e] = this.getRpcUrl(e, t);
            }),
            r
          );
        }
        async initialize(e) {
          if (
            ((this.rpc = this.getRpcConfig(e)),
            (this.chainId = this.rpc.chains.length
              ? Qu(this.rpc.chains)
              : Qu(this.rpc.optionalChains)),
            (this.signer = await Du.init({
              projectId: this.rpc.projectId,
              metadata: this.rpc.metadata,
              disableProviderPing: e.disableProviderPing,
              relayUrl: e.relayUrl,
              storageOptions: e.storageOptions,
            })),
            this.registerEventListeners(),
            await this.loadPersistedSession(),
            this.rpc.showQrModal)
          ) {
            let e;
            try {
              const { WalletConnectModal: t } = await r
                .e(171)
                .then(r.bind(r, 67171));
              e = t;
            } catch {
              throw new Error(
                "To use QR modal, please install @walletconnect/modal package"
              );
            }
            if (e)
              try {
                this.modal = new e(
                  Yu({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions)
                );
              } catch (Wn) {
                throw (
                  (this.signer.logger.error(Wn),
                  new Error("Could not generate WalletConnectModal Instance"))
                );
              }
          }
        }
        loadConnectOpts(e) {
          if (!e) return;
          const { chains: t, optionalChains: r, rpcMap: n } = e;
          t &&
            Cr(t) &&
            ((this.rpc.chains = t.map((e) => this.formatChainId(e))),
            t.forEach((e) => {
              this.rpc.rpcMap[e] = n?.[e] || this.getRpcUrl(e);
            })),
            r &&
              Cr(r) &&
              ((this.rpc.optionalChains = []),
              (this.rpc.optionalChains = r?.map((e) => this.formatChainId(e))),
              r.forEach((e) => {
                this.rpc.rpcMap[e] = n?.[e] || this.getRpcUrl(e);
              }));
        }
        getRpcUrl(e, t) {
          var r;
          return (
            (null == (r = this.rpc.rpcMap) ? void 0 : r[e]) ||
            `https://rpc.walletconnect.com/v1/?chainId=eip155:${e}&projectId=${
              t || this.rpc.projectId
            }`
          );
        }
        async loadPersistedSession() {
          if (!this.session) return;
          const e = await this.signer.client.core.storage.getItem(
              `${this.STORAGE_KEY}/chainId`
            ),
            t = this.session.namespaces[`${this.namespace}:${e}`]
              ? this.session.namespaces[`${this.namespace}:${e}`]
              : this.session.namespaces[this.namespace];
          this.setChainIds(e ? [this.formatChainId(e)] : t?.accounts),
            this.setAccounts(t?.accounts);
        }
        reset() {
          (this.chainId = 1), (this.accounts = []);
        }
        persist() {
          this.session &&
            this.signer.client.core.storage.setItem(
              `${this.STORAGE_KEY}/chainId`,
              this.chainId
            );
        }
        parseAccounts(e) {
          return "string" == typeof e || e instanceof String
            ? [this.parseAccount(e)]
            : e.map((e) => this.parseAccount(e));
        }
      }
      const eh = Zu;
    },
    61775: (e, t, r) => {
      "use strict";
      r.d(t, { H: () => n });
      class n {}
    },
    61748: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { IEvents: () => n.H });
      var n = r(61775);
    },
    27220: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HEARTBEAT_EVENTS = t.HEARTBEAT_INTERVAL = void 0);
      const n = r(33901);
      (t.HEARTBEAT_INTERVAL = n.FIVE_SECONDS),
        (t.HEARTBEAT_EVENTS = { pulse: "heartbeat_pulse" });
    },
    95896: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      r(55774).__exportStar(r(27220), t);
    },
    79062: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HeartBeat = void 0);
      const n = r(55774),
        i = r(27284),
        s = r(33901),
        o = r(23468),
        a = r(95896);
      class c extends o.IHeartBeat {
        constructor(e) {
          super(e),
            (this.events = new i.EventEmitter()),
            (this.interval = a.HEARTBEAT_INTERVAL),
            (this.interval =
              (null === e || void 0 === e ? void 0 : e.interval) ||
              a.HEARTBEAT_INTERVAL);
        }
        static init(e) {
          return n.__awaiter(this, void 0, void 0, function* () {
            const t = new c(e);
            return yield t.init(), t;
          });
        }
        init() {
          return n.__awaiter(this, void 0, void 0, function* () {
            yield this.initialize();
          });
        }
        stop() {
          clearInterval(this.intervalRef);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        initialize() {
          return n.__awaiter(this, void 0, void 0, function* () {
            this.intervalRef = setInterval(
              () => this.pulse(),
              s.toMiliseconds(this.interval)
            );
          });
        }
        pulse() {
          this.events.emit(a.HEARTBEAT_EVENTS.pulse);
        }
      }
      t.HeartBeat = c;
    },
    77326: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(55774);
      n.__exportStar(r(79062), t),
        n.__exportStar(r(23468), t),
        n.__exportStar(r(95896), t);
    },
    87808: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IHeartBeat = void 0);
      const n = r(61748);
      class i extends n.IEvents {
        constructor(e) {
          super();
        }
      }
      t.IHeartBeat = i;
    },
    23468: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      r(55774).__exportStar(r(87808), t);
    },
    55774: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          __assign: () => s,
          __asyncDelegator: () => b,
          __asyncGenerator: () => w,
          __asyncValues: () => _,
          __await: () => m,
          __awaiter: () => h,
          __classPrivateFieldGet: () => P,
          __classPrivateFieldSet: () => O,
          __createBinding: () => f,
          __decorate: () => a,
          __exportStar: () => p,
          __extends: () => i,
          __generator: () => l,
          __importDefault: () => I,
          __importStar: () => S,
          __makeTemplateObject: () => E,
          __metadata: () => u,
          __param: () => c,
          __read: () => g,
          __rest: () => o,
          __spread: () => y,
          __spreadArrays: () => v,
          __values: () => d,
        });
      var n = function (e, t) {
        return (
          (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            }),
          n(e, t)
        );
      };
      function i(e, t) {
        function r() {
          this.constructor = e;
        }
        n(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var s = function () {
        return (
          (s =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          s.apply(this, arguments)
        );
      };
      function o(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (r[n] = e[n]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            t.indexOf(n[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
              (r[n[i]] = e[n[i]]);
        }
        return r;
      }
      function a(e, t, r, n) {
        var i,
          s = arguments.length,
          o =
            s < 3
              ? t
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(t, r))
              : n;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          o = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (i = e[a]) &&
              (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
        return s > 3 && o && Object.defineProperty(t, r, o), o;
      }
      function c(e, t) {
        return function (r, n) {
          t(r, n, e);
        };
      }
      function u(e, t) {
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.metadata
        )
          return Reflect.metadata(e, t);
      }
      function h(e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function o(e) {
            try {
              c(n.next(e));
            } catch (t) {
              s(t);
            }
          }
          function a(e) {
            try {
              c(n.throw(e));
            } catch (t) {
              s(t);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(o, a);
          }
          c((n = n.apply(e, t || [])).next());
        });
      }
      function l(e, t) {
        var r,
          n,
          i,
          s,
          o = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (s = { next: a(0), throw: a(1), return: a(2) }),
          "function" === typeof Symbol &&
            (s[Symbol.iterator] = function () {
              return this;
            }),
          s
        );
        function a(s) {
          return function (a) {
            return (function (s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; o; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (i =
                        2 & s[0]
                          ? n.return
                          : s[0]
                          ? n.throw || ((i = n.return) && i.call(n), 0)
                          : n.next) &&
                      !(i = i.call(n, s[1])).done)
                  )
                    return i;
                  switch (((n = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                    case 0:
                    case 1:
                      i = s;
                      break;
                    case 4:
                      return o.label++, { value: s[1], done: !1 };
                    case 5:
                      o.label++, (n = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                        (6 === s[0] || 2 === s[0])
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                        o.label = s[1];
                        break;
                      }
                      if (6 === s[0] && o.label < i[1]) {
                        (o.label = i[1]), (i = s);
                        break;
                      }
                      if (i && o.label < i[2]) {
                        (o.label = i[2]), o.ops.push(s);
                        break;
                      }
                      i[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  s = t.call(e, o);
                } catch (a) {
                  (s = [6, a]), (n = 0);
                } finally {
                  r = i = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, a]);
          };
        }
      }
      function f(e, t, r, n) {
        void 0 === n && (n = r), (e[n] = t[r]);
      }
      function p(e, t) {
        for (var r in e)
          "default" === r || t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      function d(e) {
        var t = "function" === typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
        if (r) return r.call(e);
        if (e && "number" === typeof e.length)
          return {
            next: function () {
              return (
                e && n >= e.length && (e = void 0),
                { value: e && e[n++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function g(e, t) {
        var r = "function" === typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          i,
          s = r.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = s.next()).done; )
            o.push(n.value);
        } catch (a) {
          i = { error: a };
        } finally {
          try {
            n && !n.done && (r = s.return) && r.call(s);
          } finally {
            if (i) throw i.error;
          }
        }
        return o;
      }
      function y() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(g(arguments[t]));
        return e;
      }
      function v() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        var n = Array(e),
          i = 0;
        for (t = 0; t < r; t++)
          for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++)
            n[i] = s[o];
        return n;
      }
      function m(e) {
        return this instanceof m ? ((this.v = e), this) : new m(e);
      }
      function w(e, t, r) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var n,
          i = r.apply(e, t || []),
          s = [];
        return (
          (n = {}),
          o("next"),
          o("throw"),
          o("return"),
          (n[Symbol.asyncIterator] = function () {
            return this;
          }),
          n
        );
        function o(e) {
          i[e] &&
            (n[e] = function (t) {
              return new Promise(function (r, n) {
                s.push([e, t, r, n]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            (r = i[e](t)).value instanceof m
              ? Promise.resolve(r.value.v).then(c, u)
              : h(s[0][2], r);
          } catch (n) {
            h(s[0][3], n);
          }
          var r;
        }
        function c(e) {
          a("next", e);
        }
        function u(e) {
          a("throw", e);
        }
        function h(e, t) {
          e(t), s.shift(), s.length && a(s[0][0], s[0][1]);
        }
      }
      function b(e) {
        var t, r;
        return (
          (t = {}),
          n("next"),
          n("throw", function (e) {
            throw e;
          }),
          n("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function n(n, i) {
          t[n] = e[n]
            ? function (t) {
                return (r = !r)
                  ? { value: m(e[n](t)), done: "return" === n }
                  : i
                  ? i(t)
                  : t;
              }
            : i;
        }
      }
      function _(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = d(e)),
            (t = {}),
            n("next"),
            n("throw"),
            n("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function n(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (n, i) {
                (function (e, t, r, n) {
                  Promise.resolve(n).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(n, i, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function E(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      function S(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function I(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function P(e, t) {
        if (!t.has(e))
          throw new TypeError("attempted to get private field on non-instance");
        return t.get(e);
      }
      function O(e, t, r) {
        if (!t.has(e))
          throw new TypeError("attempted to set private field on non-instance");
        return t.set(e, r), r;
      }
    },
    32909: (e) => {
      "use strict";
      e.exports = function () {
        throw new Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object"
        );
      };
    },
    71322: () => {},
    36388: () => {},
    48251: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(56121);
      n.__exportStar(r(8951), t), n.__exportStar(r(45746), t);
    },
    8951: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ONE_THOUSAND = t.ONE_HUNDRED = void 0),
        (t.ONE_HUNDRED = 100),
        (t.ONE_THOUSAND = 1e3);
    },
    45746: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ONE_YEAR =
          t.FOUR_WEEKS =
          t.THREE_WEEKS =
          t.TWO_WEEKS =
          t.ONE_WEEK =
          t.THIRTY_DAYS =
          t.SEVEN_DAYS =
          t.FIVE_DAYS =
          t.THREE_DAYS =
          t.ONE_DAY =
          t.TWENTY_FOUR_HOURS =
          t.TWELVE_HOURS =
          t.SIX_HOURS =
          t.THREE_HOURS =
          t.ONE_HOUR =
          t.SIXTY_MINUTES =
          t.THIRTY_MINUTES =
          t.TEN_MINUTES =
          t.FIVE_MINUTES =
          t.ONE_MINUTE =
          t.SIXTY_SECONDS =
          t.THIRTY_SECONDS =
          t.TEN_SECONDS =
          t.FIVE_SECONDS =
          t.ONE_SECOND =
            void 0),
        (t.ONE_SECOND = 1),
        (t.FIVE_SECONDS = 5),
        (t.TEN_SECONDS = 10),
        (t.THIRTY_SECONDS = 30),
        (t.SIXTY_SECONDS = 60),
        (t.ONE_MINUTE = t.SIXTY_SECONDS),
        (t.FIVE_MINUTES = 5 * t.ONE_MINUTE),
        (t.TEN_MINUTES = 10 * t.ONE_MINUTE),
        (t.THIRTY_MINUTES = 30 * t.ONE_MINUTE),
        (t.SIXTY_MINUTES = 60 * t.ONE_MINUTE),
        (t.ONE_HOUR = t.SIXTY_MINUTES),
        (t.THREE_HOURS = 3 * t.ONE_HOUR),
        (t.SIX_HOURS = 6 * t.ONE_HOUR),
        (t.TWELVE_HOURS = 12 * t.ONE_HOUR),
        (t.TWENTY_FOUR_HOURS = 24 * t.ONE_HOUR),
        (t.ONE_DAY = t.TWENTY_FOUR_HOURS),
        (t.THREE_DAYS = 3 * t.ONE_DAY),
        (t.FIVE_DAYS = 5 * t.ONE_DAY),
        (t.SEVEN_DAYS = 7 * t.ONE_DAY),
        (t.THIRTY_DAYS = 30 * t.ONE_DAY),
        (t.ONE_WEEK = t.SEVEN_DAYS),
        (t.TWO_WEEKS = 2 * t.ONE_WEEK),
        (t.THREE_WEEKS = 3 * t.ONE_WEEK),
        (t.FOUR_WEEKS = 4 * t.ONE_WEEK),
        (t.ONE_YEAR = 365 * t.ONE_DAY);
    },
    33901: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(56121);
      n.__exportStar(r(65871), t),
        n.__exportStar(r(71822), t),
        n.__exportStar(r(1067), t),
        n.__exportStar(r(48251), t);
    },
    1067: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      r(56121).__exportStar(r(40656), t);
    },
    40656: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IWatch = void 0);
      t.IWatch = class {};
    },
    568: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.fromMiliseconds = t.toMiliseconds = void 0);
      const n = r(48251);
      (t.toMiliseconds = function (e) {
        return e * n.ONE_THOUSAND;
      }),
        (t.fromMiliseconds = function (e) {
          return Math.floor(e / n.ONE_THOUSAND);
        });
    },
    30296: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.delay = void 0),
        (t.delay = function (e) {
          return new Promise((t) => {
            setTimeout(() => {
              t(!0);
            }, e);
          });
        });
    },
    65871: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(56121);
      n.__exportStar(r(30296), t), n.__exportStar(r(568), t);
    },
    71822: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Watch = void 0);
      class r {
        constructor() {
          this.timestamps = new Map();
        }
        start(e) {
          if (this.timestamps.has(e))
            throw new Error(`Watch already started for label: ${e}`);
          this.timestamps.set(e, { started: Date.now() });
        }
        stop(e) {
          const t = this.get(e);
          if ("undefined" !== typeof t.elapsed)
            throw new Error(`Watch already stopped for label: ${e}`);
          const r = Date.now() - t.started;
          this.timestamps.set(e, { started: t.started, elapsed: r });
        }
        get(e) {
          const t = this.timestamps.get(e);
          if ("undefined" === typeof t)
            throw new Error(`No timestamp found for label: ${e}`);
          return t;
        }
        elapsed(e) {
          const t = this.get(e);
          return t.elapsed || Date.now() - t.started;
        }
      }
      (t.Watch = r), (t.default = r);
    },
    56121: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          __assign: () => s,
          __asyncDelegator: () => b,
          __asyncGenerator: () => w,
          __asyncValues: () => _,
          __await: () => m,
          __awaiter: () => h,
          __classPrivateFieldGet: () => P,
          __classPrivateFieldSet: () => O,
          __createBinding: () => f,
          __decorate: () => a,
          __exportStar: () => p,
          __extends: () => i,
          __generator: () => l,
          __importDefault: () => I,
          __importStar: () => S,
          __makeTemplateObject: () => E,
          __metadata: () => u,
          __param: () => c,
          __read: () => g,
          __rest: () => o,
          __spread: () => y,
          __spreadArrays: () => v,
          __values: () => d,
        });
      var n = function (e, t) {
        return (
          (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            }),
          n(e, t)
        );
      };
      function i(e, t) {
        function r() {
          this.constructor = e;
        }
        n(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var s = function () {
        return (
          (s =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          s.apply(this, arguments)
        );
      };
      function o(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (r[n] = e[n]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            t.indexOf(n[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
              (r[n[i]] = e[n[i]]);
        }
        return r;
      }
      function a(e, t, r, n) {
        var i,
          s = arguments.length,
          o =
            s < 3
              ? t
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(t, r))
              : n;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          o = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (i = e[a]) &&
              (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
        return s > 3 && o && Object.defineProperty(t, r, o), o;
      }
      function c(e, t) {
        return function (r, n) {
          t(r, n, e);
        };
      }
      function u(e, t) {
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.metadata
        )
          return Reflect.metadata(e, t);
      }
      function h(e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function o(e) {
            try {
              c(n.next(e));
            } catch (t) {
              s(t);
            }
          }
          function a(e) {
            try {
              c(n.throw(e));
            } catch (t) {
              s(t);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(o, a);
          }
          c((n = n.apply(e, t || [])).next());
        });
      }
      function l(e, t) {
        var r,
          n,
          i,
          s,
          o = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (s = { next: a(0), throw: a(1), return: a(2) }),
          "function" === typeof Symbol &&
            (s[Symbol.iterator] = function () {
              return this;
            }),
          s
        );
        function a(s) {
          return function (a) {
            return (function (s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; o; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (i =
                        2 & s[0]
                          ? n.return
                          : s[0]
                          ? n.throw || ((i = n.return) && i.call(n), 0)
                          : n.next) &&
                      !(i = i.call(n, s[1])).done)
                  )
                    return i;
                  switch (((n = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                    case 0:
                    case 1:
                      i = s;
                      break;
                    case 4:
                      return o.label++, { value: s[1], done: !1 };
                    case 5:
                      o.label++, (n = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                        (6 === s[0] || 2 === s[0])
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                        o.label = s[1];
                        break;
                      }
                      if (6 === s[0] && o.label < i[1]) {
                        (o.label = i[1]), (i = s);
                        break;
                      }
                      if (i && o.label < i[2]) {
                        (o.label = i[2]), o.ops.push(s);
                        break;
                      }
                      i[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  s = t.call(e, o);
                } catch (a) {
                  (s = [6, a]), (n = 0);
                } finally {
                  r = i = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, a]);
          };
        }
      }
      function f(e, t, r, n) {
        void 0 === n && (n = r), (e[n] = t[r]);
      }
      function p(e, t) {
        for (var r in e)
          "default" === r || t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      function d(e) {
        var t = "function" === typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
        if (r) return r.call(e);
        if (e && "number" === typeof e.length)
          return {
            next: function () {
              return (
                e && n >= e.length && (e = void 0),
                { value: e && e[n++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function g(e, t) {
        var r = "function" === typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          i,
          s = r.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = s.next()).done; )
            o.push(n.value);
        } catch (a) {
          i = { error: a };
        } finally {
          try {
            n && !n.done && (r = s.return) && r.call(s);
          } finally {
            if (i) throw i.error;
          }
        }
        return o;
      }
      function y() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(g(arguments[t]));
        return e;
      }
      function v() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        var n = Array(e),
          i = 0;
        for (t = 0; t < r; t++)
          for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++)
            n[i] = s[o];
        return n;
      }
      function m(e) {
        return this instanceof m ? ((this.v = e), this) : new m(e);
      }
      function w(e, t, r) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var n,
          i = r.apply(e, t || []),
          s = [];
        return (
          (n = {}),
          o("next"),
          o("throw"),
          o("return"),
          (n[Symbol.asyncIterator] = function () {
            return this;
          }),
          n
        );
        function o(e) {
          i[e] &&
            (n[e] = function (t) {
              return new Promise(function (r, n) {
                s.push([e, t, r, n]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            (r = i[e](t)).value instanceof m
              ? Promise.resolve(r.value.v).then(c, u)
              : h(s[0][2], r);
          } catch (n) {
            h(s[0][3], n);
          }
          var r;
        }
        function c(e) {
          a("next", e);
        }
        function u(e) {
          a("throw", e);
        }
        function h(e, t) {
          e(t), s.shift(), s.length && a(s[0][0], s[0][1]);
        }
      }
      function b(e) {
        var t, r;
        return (
          (t = {}),
          n("next"),
          n("throw", function (e) {
            throw e;
          }),
          n("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function n(n, i) {
          t[n] = e[n]
            ? function (t) {
                return (r = !r)
                  ? { value: m(e[n](t)), done: "return" === n }
                  : i
                  ? i(t)
                  : t;
              }
            : i;
        }
      }
      function _(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = d(e)),
            (t = {}),
            n("next"),
            n("throw"),
            n("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function n(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (n, i) {
                (function (e, t, r, n) {
                  Promise.resolve(n).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(n, i, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function E(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      function S(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function I(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function P(e, t) {
        if (!t.has(e))
          throw new TypeError("attempted to get private field on non-instance");
        return t.get(e);
      }
      function O(e, t, r) {
        if (!t.has(e))
          throw new TypeError("attempted to set private field on non-instance");
        return t.set(e, r), r;
      }
    },
    20033: (e, t) => {
      "use strict";
      function r(e) {
        let t;
        return (
          "undefined" !== typeof window &&
            "undefined" !== typeof window[e] &&
            (t = window[e]),
          t
        );
      }
      function n(e) {
        const t = r(e);
        if (!t) throw new Error(`${e} is not defined in Window`);
        return t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getLocalStorage =
          t.getLocalStorageOrThrow =
          t.getCrypto =
          t.getCryptoOrThrow =
          t.getLocation =
          t.getLocationOrThrow =
          t.getNavigator =
          t.getNavigatorOrThrow =
          t.getDocument =
          t.getDocumentOrThrow =
          t.getFromWindowOrThrow =
          t.getFromWindow =
            void 0),
        (t.getFromWindow = r),
        (t.getFromWindowOrThrow = n),
        (t.getDocumentOrThrow = function () {
          return n("document");
        }),
        (t.getDocument = function () {
          return r("document");
        }),
        (t.getNavigatorOrThrow = function () {
          return n("navigator");
        }),
        (t.getNavigator = function () {
          return r("navigator");
        }),
        (t.getLocationOrThrow = function () {
          return n("location");
        }),
        (t.getLocation = function () {
          return r("location");
        }),
        (t.getCryptoOrThrow = function () {
          return n("crypto");
        }),
        (t.getCrypto = function () {
          return r("crypto");
        }),
        (t.getLocalStorageOrThrow = function () {
          return n("localStorage");
        }),
        (t.getLocalStorage = function () {
          return r("localStorage");
        });
    },
    39332: (e, t, r) => {
      "use strict";
      t.g = void 0;
      const n = r(20033);
      t.g = function () {
        let e, t;
        try {
          (e = n.getDocumentOrThrow()), (t = n.getLocationOrThrow());
        } catch (s) {
          return null;
        }
        function r() {
          for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          const i = e.getElementsByTagName("meta");
          for (let e = 0; e < i.length; e++) {
            const t = i[e],
              n = ["itemprop", "property", "name"]
                .map((e) => t.getAttribute(e))
                .filter((e) => !!e && r.includes(e));
            if (n.length && n) {
              const e = t.getAttribute("content");
              if (e) return e;
            }
          }
          return "";
        }
        const i = (function () {
          let t = r("name", "og:site_name", "og:title", "twitter:title");
          return t || (t = e.title), t;
        })();
        return {
          description: r(
            "description",
            "og:description",
            "twitter:description",
            "keywords"
          ),
          url: t.origin,
          icons: (function () {
            const r = e.getElementsByTagName("link"),
              n = [];
            for (let e = 0; e < r.length; e++) {
              const i = r[e],
                s = i.getAttribute("rel");
              if (s && s.toLowerCase().indexOf("icon") > -1) {
                const e = i.getAttribute("href");
                if (e)
                  if (
                    -1 === e.toLowerCase().indexOf("https:") &&
                    -1 === e.toLowerCase().indexOf("http:") &&
                    0 !== e.indexOf("//")
                  ) {
                    let r = t.protocol + "//" + t.host;
                    if (0 === e.indexOf("/")) r += e;
                    else {
                      const n = t.pathname.split("/");
                      n.pop();
                      r += n.join("/") + "/" + e;
                    }
                    n.push(r);
                  } else if (0 === e.indexOf("//")) {
                    const r = t.protocol + e;
                    n.push(r);
                  } else n.push(e);
              }
            }
            return n;
          })(),
          name: i,
        };
      };
    },
    99038: function (e, t) {
      var r = "undefined" !== typeof self ? self : this,
        n = (function () {
          function e() {
            (this.fetch = !1), (this.DOMException = r.DOMException);
          }
          return (e.prototype = r), new e();
        })();
      !(function (e) {
        !(function (t) {
          var r = "URLSearchParams" in e,
            n = "Symbol" in e && "iterator" in Symbol,
            i =
              "FileReader" in e &&
              "Blob" in e &&
              (function () {
                try {
                  return new Blob(), !0;
                } catch (e) {
                  return !1;
                }
              })(),
            s = "FormData" in e,
            o = "ArrayBuffer" in e;
          if (o)
            var a = [
                "[object Int8Array]",
                "[object Uint8Array]",
                "[object Uint8ClampedArray]",
                "[object Int16Array]",
                "[object Uint16Array]",
                "[object Int32Array]",
                "[object Uint32Array]",
                "[object Float32Array]",
                "[object Float64Array]",
              ],
              c =
                ArrayBuffer.isView ||
                function (e) {
                  return e && a.indexOf(Object.prototype.toString.call(e)) > -1;
                };
          function u(e) {
            if (
              ("string" !== typeof e && (e = String(e)),
              /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))
            )
              throw new TypeError("Invalid character in header field name");
            return e.toLowerCase();
          }
          function h(e) {
            return "string" !== typeof e && (e = String(e)), e;
          }
          function l(e) {
            var t = {
              next: function () {
                var t = e.shift();
                return { done: void 0 === t, value: t };
              },
            };
            return (
              n &&
                (t[Symbol.iterator] = function () {
                  return t;
                }),
              t
            );
          }
          function f(e) {
            (this.map = {}),
              e instanceof f
                ? e.forEach(function (e, t) {
                    this.append(t, e);
                  }, this)
                : Array.isArray(e)
                ? e.forEach(function (e) {
                    this.append(e[0], e[1]);
                  }, this)
                : e &&
                  Object.getOwnPropertyNames(e).forEach(function (t) {
                    this.append(t, e[t]);
                  }, this);
          }
          function p(e) {
            if (e.bodyUsed)
              return Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0;
          }
          function d(e) {
            return new Promise(function (t, r) {
              (e.onload = function () {
                t(e.result);
              }),
                (e.onerror = function () {
                  r(e.error);
                });
            });
          }
          function g(e) {
            var t = new FileReader(),
              r = d(t);
            return t.readAsArrayBuffer(e), r;
          }
          function y(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer;
          }
          function v() {
            return (
              (this.bodyUsed = !1),
              (this._initBody = function (e) {
                var t;
                (this._bodyInit = e),
                  e
                    ? "string" === typeof e
                      ? (this._bodyText = e)
                      : i && Blob.prototype.isPrototypeOf(e)
                      ? (this._bodyBlob = e)
                      : s && FormData.prototype.isPrototypeOf(e)
                      ? (this._bodyFormData = e)
                      : r && URLSearchParams.prototype.isPrototypeOf(e)
                      ? (this._bodyText = e.toString())
                      : o && i && (t = e) && DataView.prototype.isPrototypeOf(t)
                      ? ((this._bodyArrayBuffer = y(e.buffer)),
                        (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                      : o && (ArrayBuffer.prototype.isPrototypeOf(e) || c(e))
                      ? (this._bodyArrayBuffer = y(e))
                      : (this._bodyText = e = Object.prototype.toString.call(e))
                    : (this._bodyText = ""),
                  this.headers.get("content-type") ||
                    ("string" === typeof e
                      ? this.headers.set(
                          "content-type",
                          "text/plain;charset=UTF-8"
                        )
                      : this._bodyBlob && this._bodyBlob.type
                      ? this.headers.set("content-type", this._bodyBlob.type)
                      : r &&
                        URLSearchParams.prototype.isPrototypeOf(e) &&
                        this.headers.set(
                          "content-type",
                          "application/x-www-form-urlencoded;charset=UTF-8"
                        ));
              }),
              i &&
                ((this.blob = function () {
                  var e = p(this);
                  if (e) return e;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  if (this._bodyFormData)
                    throw new Error("could not read FormData body as blob");
                  return Promise.resolve(new Blob([this._bodyText]));
                }),
                (this.arrayBuffer = function () {
                  return this._bodyArrayBuffer
                    ? p(this) || Promise.resolve(this._bodyArrayBuffer)
                    : this.blob().then(g);
                })),
              (this.text = function () {
                var e = p(this);
                if (e) return e;
                if (this._bodyBlob)
                  return (function (e) {
                    var t = new FileReader(),
                      r = d(t);
                    return t.readAsText(e), r;
                  })(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(
                    (function (e) {
                      for (
                        var t = new Uint8Array(e),
                          r = new Array(t.length),
                          n = 0;
                        n < t.length;
                        n++
                      )
                        r[n] = String.fromCharCode(t[n]);
                      return r.join("");
                    })(this._bodyArrayBuffer)
                  );
                if (this._bodyFormData)
                  throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText);
              }),
              s &&
                (this.formData = function () {
                  return this.text().then(b);
                }),
              (this.json = function () {
                return this.text().then(JSON.parse);
              }),
              this
            );
          }
          (f.prototype.append = function (e, t) {
            (e = u(e)), (t = h(t));
            var r = this.map[e];
            this.map[e] = r ? r + ", " + t : t;
          }),
            (f.prototype.delete = function (e) {
              delete this.map[u(e)];
            }),
            (f.prototype.get = function (e) {
              return (e = u(e)), this.has(e) ? this.map[e] : null;
            }),
            (f.prototype.has = function (e) {
              return this.map.hasOwnProperty(u(e));
            }),
            (f.prototype.set = function (e, t) {
              this.map[u(e)] = h(t);
            }),
            (f.prototype.forEach = function (e, t) {
              for (var r in this.map)
                this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
            }),
            (f.prototype.keys = function () {
              var e = [];
              return (
                this.forEach(function (t, r) {
                  e.push(r);
                }),
                l(e)
              );
            }),
            (f.prototype.values = function () {
              var e = [];
              return (
                this.forEach(function (t) {
                  e.push(t);
                }),
                l(e)
              );
            }),
            (f.prototype.entries = function () {
              var e = [];
              return (
                this.forEach(function (t, r) {
                  e.push([r, t]);
                }),
                l(e)
              );
            }),
            n && (f.prototype[Symbol.iterator] = f.prototype.entries);
          var m = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
          function w(e, t) {
            var r = (t = t || {}).body;
            if (e instanceof w) {
              if (e.bodyUsed) throw new TypeError("Already read");
              (this.url = e.url),
                (this.credentials = e.credentials),
                t.headers || (this.headers = new f(e.headers)),
                (this.method = e.method),
                (this.mode = e.mode),
                (this.signal = e.signal),
                r ||
                  null == e._bodyInit ||
                  ((r = e._bodyInit), (e.bodyUsed = !0));
            } else this.url = String(e);
            if (
              ((this.credentials =
                t.credentials || this.credentials || "same-origin"),
              (!t.headers && this.headers) || (this.headers = new f(t.headers)),
              (this.method = (function (e) {
                var t = e.toUpperCase();
                return m.indexOf(t) > -1 ? t : e;
              })(t.method || this.method || "GET")),
              (this.mode = t.mode || this.mode || null),
              (this.signal = t.signal || this.signal),
              (this.referrer = null),
              ("GET" === this.method || "HEAD" === this.method) && r)
            )
              throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(r);
          }
          function b(e) {
            var t = new FormData();
            return (
              e
                .trim()
                .split("&")
                .forEach(function (e) {
                  if (e) {
                    var r = e.split("="),
                      n = r.shift().replace(/\+/g, " "),
                      i = r.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(n), decodeURIComponent(i));
                  }
                }),
              t
            );
          }
          function _(e) {
            var t = new f();
            return (
              e
                .replace(/\r?\n[\t ]+/g, " ")
                .split(/\r?\n/)
                .forEach(function (e) {
                  var r = e.split(":"),
                    n = r.shift().trim();
                  if (n) {
                    var i = r.join(":").trim();
                    t.append(n, i);
                  }
                }),
              t
            );
          }
          function E(e, t) {
            t || (t = {}),
              (this.type = "default"),
              (this.status = void 0 === t.status ? 200 : t.status),
              (this.ok = this.status >= 200 && this.status < 300),
              (this.statusText = "statusText" in t ? t.statusText : "OK"),
              (this.headers = new f(t.headers)),
              (this.url = t.url || ""),
              this._initBody(e);
          }
          (w.prototype.clone = function () {
            return new w(this, { body: this._bodyInit });
          }),
            v.call(w.prototype),
            v.call(E.prototype),
            (E.prototype.clone = function () {
              return new E(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new f(this.headers),
                url: this.url,
              });
            }),
            (E.error = function () {
              var e = new E(null, { status: 0, statusText: "" });
              return (e.type = "error"), e;
            });
          var S = [301, 302, 303, 307, 308];
          (E.redirect = function (e, t) {
            if (-1 === S.indexOf(t))
              throw new RangeError("Invalid status code");
            return new E(null, { status: t, headers: { location: e } });
          }),
            (t.DOMException = e.DOMException);
          try {
            new t.DOMException();
          } catch (P) {
            (t.DOMException = function (e, t) {
              (this.message = e), (this.name = t);
              var r = Error(e);
              this.stack = r.stack;
            }),
              (t.DOMException.prototype = Object.create(Error.prototype)),
              (t.DOMException.prototype.constructor = t.DOMException);
          }
          function I(e, r) {
            return new Promise(function (n, s) {
              var o = new w(e, r);
              if (o.signal && o.signal.aborted)
                return s(new t.DOMException("Aborted", "AbortError"));
              var a = new XMLHttpRequest();
              function c() {
                a.abort();
              }
              (a.onload = function () {
                var e = {
                  status: a.status,
                  statusText: a.statusText,
                  headers: _(a.getAllResponseHeaders() || ""),
                };
                e.url =
                  "responseURL" in a
                    ? a.responseURL
                    : e.headers.get("X-Request-URL");
                var t = "response" in a ? a.response : a.responseText;
                n(new E(t, e));
              }),
                (a.onerror = function () {
                  s(new TypeError("Network request failed"));
                }),
                (a.ontimeout = function () {
                  s(new TypeError("Network request failed"));
                }),
                (a.onabort = function () {
                  s(new t.DOMException("Aborted", "AbortError"));
                }),
                a.open(o.method, o.url, !0),
                "include" === o.credentials
                  ? (a.withCredentials = !0)
                  : "omit" === o.credentials && (a.withCredentials = !1),
                "responseType" in a && i && (a.responseType = "blob"),
                o.headers.forEach(function (e, t) {
                  a.setRequestHeader(t, e);
                }),
                o.signal &&
                  (o.signal.addEventListener("abort", c),
                  (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      o.signal.removeEventListener("abort", c);
                  })),
                a.send("undefined" === typeof o._bodyInit ? null : o._bodyInit);
            });
          }
          (I.polyfill = !0),
            e.fetch ||
              ((e.fetch = I),
              (e.Headers = f),
              (e.Request = w),
              (e.Response = E)),
            (t.Headers = f),
            (t.Request = w),
            (t.Response = E),
            (t.fetch = I),
            Object.defineProperty(t, "__esModule", { value: !0 });
        })({});
      })(n),
        (n.fetch.ponyfill = !0),
        delete n.fetch.polyfill;
      var i = n;
      ((t = i.fetch).default = i.fetch),
        (t.fetch = i.fetch),
        (t.Headers = i.Headers),
        (t.Request = i.Request),
        (t.Response = i.Response),
        (e.exports = t);
    },
    95707: (e) => {
      "use strict";
      var t = "%[a-f0-9]{2}",
        r = new RegExp("(" + t + ")|([^%]+?)", "gi"),
        n = new RegExp("(" + t + ")+", "gi");
      function i(e, t) {
        try {
          return [decodeURIComponent(e.join(""))];
        } catch (s) {}
        if (1 === e.length) return e;
        t = t || 1;
        var r = e.slice(0, t),
          n = e.slice(t);
        return Array.prototype.concat.call([], i(r), i(n));
      }
      function s(e) {
        try {
          return decodeURIComponent(e);
        } catch (s) {
          for (var t = e.match(r) || [], n = 1; n < t.length; n++)
            t = (e = i(t, n).join("")).match(r) || [];
          return e;
        }
      }
      e.exports = function (e) {
        if ("string" !== typeof e)
          throw new TypeError(
            "Expected `encodedURI` to be of type `string`, got `" +
              typeof e +
              "`"
          );
        try {
          return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
        } catch (t) {
          return (function (e) {
            for (
              var r = { "%FE%FF": "\ufffd\ufffd", "%FF%FE": "\ufffd\ufffd" },
                i = n.exec(e);
              i;

            ) {
              try {
                r[i[0]] = decodeURIComponent(i[0]);
              } catch (t) {
                var o = s(i[0]);
                o !== i[0] && (r[i[0]] = o);
              }
              i = n.exec(e);
            }
            r["%C2"] = "\ufffd";
            for (var a = Object.keys(r), c = 0; c < a.length; c++) {
              var u = a[c];
              e = e.replace(new RegExp(u, "g"), r[u]);
            }
            return e;
          })(e);
        }
      };
    },
    27284: (e) => {
      "use strict";
      var t,
        r = "object" === typeof Reflect ? Reflect : null,
        n =
          r && "function" === typeof r.apply
            ? r.apply
            : function (e, t, r) {
                return Function.prototype.apply.call(e, t, r);
              };
      t =
        r && "function" === typeof r.ownKeys
          ? r.ownKeys
          : Object.getOwnPropertySymbols
          ? function (e) {
              return Object.getOwnPropertyNames(e).concat(
                Object.getOwnPropertySymbols(e)
              );
            }
          : function (e) {
              return Object.getOwnPropertyNames(e);
            };
      var i =
        Number.isNaN ||
        function (e) {
          return e !== e;
        };
      function s() {
        s.init.call(this);
      }
      (e.exports = s),
        (e.exports.once = function (e, t) {
          return new Promise(function (r, n) {
            function i(r) {
              e.removeListener(t, s), n(r);
            }
            function s() {
              "function" === typeof e.removeListener &&
                e.removeListener("error", i),
                r([].slice.call(arguments));
            }
            g(e, t, s, { once: !0 }),
              "error" !== t &&
                (function (e, t, r) {
                  "function" === typeof e.on && g(e, "error", t, r);
                })(e, i, { once: !0 });
          });
        }),
        (s.EventEmitter = s),
        (s.prototype._events = void 0),
        (s.prototype._eventsCount = 0),
        (s.prototype._maxListeners = void 0);
      var o = 10;
      function a(e) {
        if ("function" !== typeof e)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof e
          );
      }
      function c(e) {
        return void 0 === e._maxListeners
          ? s.defaultMaxListeners
          : e._maxListeners;
      }
      function u(e, t, r, n) {
        var i, s, o, u;
        if (
          (a(r),
          void 0 === (s = e._events)
            ? ((s = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== s.newListener &&
                (e.emit("newListener", t, r.listener ? r.listener : r),
                (s = e._events)),
              (o = s[t])),
          void 0 === o)
        )
          (o = s[t] = r), ++e._eventsCount;
        else if (
          ("function" === typeof o
            ? (o = s[t] = n ? [r, o] : [o, r])
            : n
            ? o.unshift(r)
            : o.push(r),
          (i = c(e)) > 0 && o.length > i && !o.warned)
        ) {
          o.warned = !0;
          var h = new Error(
            "Possible EventEmitter memory leak detected. " +
              o.length +
              " " +
              String(t) +
              " listeners added. Use emitter.setMaxListeners() to increase limit"
          );
          (h.name = "MaxListenersExceededWarning"),
            (h.emitter = e),
            (h.type = t),
            (h.count = o.length),
            (u = h),
            console && console.warn && console.warn(u);
        }
        return e;
      }
      function h() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }
      function l(e, t, r) {
        var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r },
          i = h.bind(n);
        return (i.listener = r), (n.wrapFn = i), i;
      }
      function f(e, t, r) {
        var n = e._events;
        if (void 0 === n) return [];
        var i = n[t];
        return void 0 === i
          ? []
          : "function" === typeof i
          ? r
            ? [i.listener || i]
            : [i]
          : r
          ? (function (e) {
              for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                t[r] = e[r].listener || e[r];
              return t;
            })(i)
          : d(i, i.length);
      }
      function p(e) {
        var t = this._events;
        if (void 0 !== t) {
          var r = t[e];
          if ("function" === typeof r) return 1;
          if (void 0 !== r) return r.length;
        }
        return 0;
      }
      function d(e, t) {
        for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
        return r;
      }
      function g(e, t, r, n) {
        if ("function" === typeof e.on) n.once ? e.once(t, r) : e.on(t, r);
        else {
          if ("function" !== typeof e.addEventListener)
            throw new TypeError(
              'The "emitter" argument must be of type EventEmitter. Received type ' +
                typeof e
            );
          e.addEventListener(t, function i(s) {
            n.once && e.removeEventListener(t, i), r(s);
          });
        }
      }
      Object.defineProperty(s, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return o;
        },
        set: function (e) {
          if ("number" !== typeof e || e < 0 || i(e))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          o = e;
        },
      }),
        (s.init = function () {
          (void 0 !== this._events &&
            this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (s.prototype.setMaxListeners = function (e) {
          if ("number" !== typeof e || e < 0 || i(e))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          return (this._maxListeners = e), this;
        }),
        (s.prototype.getMaxListeners = function () {
          return c(this);
        }),
        (s.prototype.emit = function (e) {
          for (var t = [], r = 1; r < arguments.length; r++)
            t.push(arguments[r]);
          var i = "error" === e,
            s = this._events;
          if (void 0 !== s) i = i && void 0 === s.error;
          else if (!i) return !1;
          if (i) {
            var o;
            if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o;
            var a = new Error(
              "Unhandled error." + (o ? " (" + o.message + ")" : "")
            );
            throw ((a.context = o), a);
          }
          var c = s[e];
          if (void 0 === c) return !1;
          if ("function" === typeof c) n(c, this, t);
          else {
            var u = c.length,
              h = d(c, u);
            for (r = 0; r < u; ++r) n(h[r], this, t);
          }
          return !0;
        }),
        (s.prototype.addListener = function (e, t) {
          return u(this, e, t, !1);
        }),
        (s.prototype.on = s.prototype.addListener),
        (s.prototype.prependListener = function (e, t) {
          return u(this, e, t, !0);
        }),
        (s.prototype.once = function (e, t) {
          return a(t), this.on(e, l(this, e, t)), this;
        }),
        (s.prototype.prependOnceListener = function (e, t) {
          return a(t), this.prependListener(e, l(this, e, t)), this;
        }),
        (s.prototype.removeListener = function (e, t) {
          var r, n, i, s, o;
          if ((a(t), void 0 === (n = this._events))) return this;
          if (void 0 === (r = n[e])) return this;
          if (r === t || r.listener === t)
            0 === --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete n[e],
                n.removeListener &&
                  this.emit("removeListener", e, r.listener || t));
          else if ("function" !== typeof r) {
            for (i = -1, s = r.length - 1; s >= 0; s--)
              if (r[s] === t || r[s].listener === t) {
                (o = r[s].listener), (i = s);
                break;
              }
            if (i < 0) return this;
            0 === i
              ? r.shift()
              : (function (e, t) {
                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                  e.pop();
                })(r, i),
              1 === r.length && (n[e] = r[0]),
              void 0 !== n.removeListener &&
                this.emit("removeListener", e, o || t);
          }
          return this;
        }),
        (s.prototype.off = s.prototype.removeListener),
        (s.prototype.removeAllListeners = function (e) {
          var t, r, n;
          if (void 0 === (r = this._events)) return this;
          if (void 0 === r.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== r[e] &&
                  (0 === --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete r[e]),
              this
            );
          if (0 === arguments.length) {
            var i,
              s = Object.keys(r);
            for (n = 0; n < s.length; ++n)
              "removeListener" !== (i = s[n]) && this.removeAllListeners(i);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" === typeof (t = r[e])) this.removeListener(e, t);
          else if (void 0 !== t)
            for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]);
          return this;
        }),
        (s.prototype.listeners = function (e) {
          return f(this, e, !0);
        }),
        (s.prototype.rawListeners = function (e) {
          return f(this, e, !1);
        }),
        (s.listenerCount = function (e, t) {
          return "function" === typeof e.listenerCount
            ? e.listenerCount(t)
            : p.call(e, t);
        }),
        (s.prototype.listenerCount = p),
        (s.prototype.eventNames = function () {
          return this._eventsCount > 0 ? t(this._events) : [];
        });
    },
    10038: (e) => {
      "use strict";
      e.exports = function (e, t) {
        for (
          var r = {}, n = Object.keys(e), i = Array.isArray(t), s = 0;
          s < n.length;
          s++
        ) {
          var o = n[s],
            a = e[o];
          (i ? -1 !== t.indexOf(o) : t(o, a, e)) && (r[o] = a);
        }
        return r;
      };
    },
    31106: (e, t, r) => {
      e.exports = self.fetch || (self.fetch = r(1009).default || r(1009));
    },
    20067: (e, t, r) => {
      e = r.nmd(e);
      var n = "__lodash_hash_undefined__",
        i = 1,
        s = 2,
        o = 9007199254740991,
        a = "[object Arguments]",
        c = "[object Array]",
        u = "[object AsyncFunction]",
        h = "[object Boolean]",
        l = "[object Date]",
        f = "[object Error]",
        p = "[object Function]",
        d = "[object GeneratorFunction]",
        g = "[object Map]",
        y = "[object Number]",
        v = "[object Null]",
        m = "[object Object]",
        w = "[object Promise]",
        b = "[object Proxy]",
        _ = "[object RegExp]",
        E = "[object Set]",
        S = "[object String]",
        I = "[object Symbol]",
        P = "[object Undefined]",
        O = "[object WeakMap]",
        A = "[object ArrayBuffer]",
        x = "[object DataView]",
        R = /^\[object .+?Constructor\]$/,
        N = /^(?:0|[1-9]\d*)$/,
        T = {};
      (T["[object Float32Array]"] =
        T["[object Float64Array]"] =
        T["[object Int8Array]"] =
        T["[object Int16Array]"] =
        T["[object Int32Array]"] =
        T["[object Uint8Array]"] =
        T["[object Uint8ClampedArray]"] =
        T["[object Uint16Array]"] =
        T["[object Uint32Array]"] =
          !0),
        (T[a] =
          T[c] =
          T[A] =
          T[h] =
          T[x] =
          T[l] =
          T[f] =
          T[p] =
          T[g] =
          T[y] =
          T[m] =
          T[_] =
          T[E] =
          T[S] =
          T[O] =
            !1);
      var C = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
        j = "object" == typeof self && self && self.Object === Object && self,
        U = C || j || Function("return this")(),
        L = t && !t.nodeType && t,
        M = L && e && !e.nodeType && e,
        D = M && M.exports === L,
        k = D && C.process,
        q = (function () {
          try {
            return k && k.binding && k.binding("util");
          } catch (e) {}
        })(),
        $ = q && q.isTypedArray;
      function z(e, t) {
        for (var r = -1, n = null == e ? 0 : e.length; ++r < n; )
          if (t(e[r], r, e)) return !0;
        return !1;
      }
      function H(e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (e, n) {
            r[++t] = [n, e];
          }),
          r
        );
      }
      function B(e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (e) {
            r[++t] = e;
          }),
          r
        );
      }
      var K,
        V,
        F = Array.prototype,
        W = Function.prototype,
        G = Object.prototype,
        Y = U["__core-js_shared__"],
        J = W.toString,
        Q = G.hasOwnProperty,
        X = (function () {
          var e = /[^.]+$/.exec((Y && Y.keys && Y.keys.IE_PROTO) || "");
          return e ? "Symbol(src)_1." + e : "";
        })(),
        Z = G.toString,
        ee = RegExp(
          "^" +
            J.call(Q)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        ),
        te = D ? U.Buffer : void 0,
        re = U.Symbol,
        ne = U.Uint8Array,
        ie = G.propertyIsEnumerable,
        se = F.splice,
        oe = re ? re.toStringTag : void 0,
        ae = Object.getOwnPropertySymbols,
        ce = te ? te.isBuffer : void 0,
        ue =
          ((K = Object.keys),
          (V = Object),
          function (e) {
            return K(V(e));
          }),
        he = ke(U, "DataView"),
        le = ke(U, "Map"),
        fe = ke(U, "Promise"),
        pe = ke(U, "Set"),
        de = ke(U, "WeakMap"),
        ge = ke(Object, "create"),
        ye = He(he),
        ve = He(le),
        me = He(fe),
        we = He(pe),
        be = He(de),
        _e = re ? re.prototype : void 0,
        Ee = _e ? _e.valueOf : void 0;
      function Se(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      function Ie(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      function Pe(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      function Oe(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.__data__ = new Pe(); ++t < r; ) this.add(e[t]);
      }
      function Ae(e) {
        var t = (this.__data__ = new Ie(e));
        this.size = t.size;
      }
      function xe(e, t) {
        var r = Ve(e),
          n = !r && Ke(e),
          i = !r && !n && Fe(e),
          s = !r && !n && !i && Qe(e),
          o = r || n || i || s,
          a = o
            ? (function (e, t) {
                for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
                return n;
              })(e.length, String)
            : [],
          c = a.length;
        for (var u in e)
          (!t && !Q.call(e, u)) ||
            (o &&
              ("length" == u ||
                (i && ("offset" == u || "parent" == u)) ||
                (s &&
                  ("buffer" == u || "byteLength" == u || "byteOffset" == u)) ||
                ze(u, c))) ||
            a.push(u);
        return a;
      }
      function Re(e, t) {
        for (var r = e.length; r--; ) if (Be(e[r][0], t)) return r;
        return -1;
      }
      function Ne(e) {
        return null == e
          ? void 0 === e
            ? P
            : v
          : oe && oe in Object(e)
          ? (function (e) {
              var t = Q.call(e, oe),
                r = e[oe];
              try {
                e[oe] = void 0;
                var n = !0;
              } catch (s) {}
              var i = Z.call(e);
              n && (t ? (e[oe] = r) : delete e[oe]);
              return i;
            })(e)
          : (function (e) {
              return Z.call(e);
            })(e);
      }
      function Te(e) {
        return Je(e) && Ne(e) == a;
      }
      function Ce(e, t, r, n, o) {
        return (
          e === t ||
          (null == e || null == t || (!Je(e) && !Je(t))
            ? e !== e && t !== t
            : (function (e, t, r, n, o, u) {
                var p = Ve(e),
                  d = Ve(t),
                  v = p ? c : $e(e),
                  w = d ? c : $e(t),
                  b = (v = v == a ? m : v) == m,
                  P = (w = w == a ? m : w) == m,
                  O = v == w;
                if (O && Fe(e)) {
                  if (!Fe(t)) return !1;
                  (p = !0), (b = !1);
                }
                if (O && !b)
                  return (
                    u || (u = new Ae()),
                    p || Qe(e)
                      ? Le(e, t, r, n, o, u)
                      : (function (e, t, r, n, o, a, c) {
                          switch (r) {
                            case x:
                              if (
                                e.byteLength != t.byteLength ||
                                e.byteOffset != t.byteOffset
                              )
                                return !1;
                              (e = e.buffer), (t = t.buffer);
                            case A:
                              return !(
                                e.byteLength != t.byteLength ||
                                !a(new ne(e), new ne(t))
                              );
                            case h:
                            case l:
                            case y:
                              return Be(+e, +t);
                            case f:
                              return e.name == t.name && e.message == t.message;
                            case _:
                            case S:
                              return e == t + "";
                            case g:
                              var u = H;
                            case E:
                              var p = n & i;
                              if ((u || (u = B), e.size != t.size && !p))
                                return !1;
                              var d = c.get(e);
                              if (d) return d == t;
                              (n |= s), c.set(e, t);
                              var v = Le(u(e), u(t), n, o, a, c);
                              return c.delete(e), v;
                            case I:
                              if (Ee) return Ee.call(e) == Ee.call(t);
                          }
                          return !1;
                        })(e, t, v, r, n, o, u)
                  );
                if (!(r & i)) {
                  var R = b && Q.call(e, "__wrapped__"),
                    N = P && Q.call(t, "__wrapped__");
                  if (R || N) {
                    var T = R ? e.value() : e,
                      C = N ? t.value() : t;
                    return u || (u = new Ae()), o(T, C, r, n, u);
                  }
                }
                if (!O) return !1;
                return (
                  u || (u = new Ae()),
                  (function (e, t, r, n, s, o) {
                    var a = r & i,
                      c = Me(e),
                      u = c.length,
                      h = Me(t),
                      l = h.length;
                    if (u != l && !a) return !1;
                    var f = u;
                    for (; f--; ) {
                      var p = c[f];
                      if (!(a ? p in t : Q.call(t, p))) return !1;
                    }
                    var d = o.get(e);
                    if (d && o.get(t)) return d == t;
                    var g = !0;
                    o.set(e, t), o.set(t, e);
                    var y = a;
                    for (; ++f < u; ) {
                      var v = e[(p = c[f])],
                        m = t[p];
                      if (n)
                        var w = a ? n(m, v, p, t, e, o) : n(v, m, p, e, t, o);
                      if (!(void 0 === w ? v === m || s(v, m, r, n, o) : w)) {
                        g = !1;
                        break;
                      }
                      y || (y = "constructor" == p);
                    }
                    if (g && !y) {
                      var b = e.constructor,
                        _ = t.constructor;
                      b == _ ||
                        !("constructor" in e) ||
                        !("constructor" in t) ||
                        ("function" == typeof b &&
                          b instanceof b &&
                          "function" == typeof _ &&
                          _ instanceof _) ||
                        (g = !1);
                    }
                    return o.delete(e), o.delete(t), g;
                  })(e, t, r, n, o, u)
                );
              })(e, t, r, n, Ce, o))
        );
      }
      function je(e) {
        return (
          !(
            !Ye(e) ||
            (function (e) {
              return !!X && X in e;
            })(e)
          ) && (We(e) ? ee : R).test(He(e))
        );
      }
      function Ue(e) {
        if (
          !(function (e) {
            var t = e && e.constructor,
              r = ("function" == typeof t && t.prototype) || G;
            return e === r;
          })(e)
        )
          return ue(e);
        var t = [];
        for (var r in Object(e))
          Q.call(e, r) && "constructor" != r && t.push(r);
        return t;
      }
      function Le(e, t, r, n, o, a) {
        var c = r & i,
          u = e.length,
          h = t.length;
        if (u != h && !(c && h > u)) return !1;
        var l = a.get(e);
        if (l && a.get(t)) return l == t;
        var f = -1,
          p = !0,
          d = r & s ? new Oe() : void 0;
        for (a.set(e, t), a.set(t, e); ++f < u; ) {
          var g = e[f],
            y = t[f];
          if (n) var v = c ? n(y, g, f, t, e, a) : n(g, y, f, e, t, a);
          if (void 0 !== v) {
            if (v) continue;
            p = !1;
            break;
          }
          if (d) {
            if (
              !z(t, function (e, t) {
                if (((i = t), !d.has(i) && (g === e || o(g, e, r, n, a))))
                  return d.push(t);
                var i;
              })
            ) {
              p = !1;
              break;
            }
          } else if (g !== y && !o(g, y, r, n, a)) {
            p = !1;
            break;
          }
        }
        return a.delete(e), a.delete(t), p;
      }
      function Me(e) {
        return (function (e, t, r) {
          var n = t(e);
          return Ve(e)
            ? n
            : (function (e, t) {
                for (var r = -1, n = t.length, i = e.length; ++r < n; )
                  e[i + r] = t[r];
                return e;
              })(n, r(e));
        })(e, Xe, qe);
      }
      function De(e, t) {
        var r = e.__data__;
        return (function (e) {
          var t = typeof e;
          return "string" == t ||
            "number" == t ||
            "symbol" == t ||
            "boolean" == t
            ? "__proto__" !== e
            : null === e;
        })(t)
          ? r["string" == typeof t ? "string" : "hash"]
          : r.map;
      }
      function ke(e, t) {
        var r = (function (e, t) {
          return null == e ? void 0 : e[t];
        })(e, t);
        return je(r) ? r : void 0;
      }
      (Se.prototype.clear = function () {
        (this.__data__ = ge ? ge(null) : {}), (this.size = 0);
      }),
        (Se.prototype.delete = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        }),
        (Se.prototype.get = function (e) {
          var t = this.__data__;
          if (ge) {
            var r = t[e];
            return r === n ? void 0 : r;
          }
          return Q.call(t, e) ? t[e] : void 0;
        }),
        (Se.prototype.has = function (e) {
          var t = this.__data__;
          return ge ? void 0 !== t[e] : Q.call(t, e);
        }),
        (Se.prototype.set = function (e, t) {
          var r = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (r[e] = ge && void 0 === t ? n : t),
            this
          );
        }),
        (Ie.prototype.clear = function () {
          (this.__data__ = []), (this.size = 0);
        }),
        (Ie.prototype.delete = function (e) {
          var t = this.__data__,
            r = Re(t, e);
          return (
            !(r < 0) &&
            (r == t.length - 1 ? t.pop() : se.call(t, r, 1), --this.size, !0)
          );
        }),
        (Ie.prototype.get = function (e) {
          var t = this.__data__,
            r = Re(t, e);
          return r < 0 ? void 0 : t[r][1];
        }),
        (Ie.prototype.has = function (e) {
          return Re(this.__data__, e) > -1;
        }),
        (Ie.prototype.set = function (e, t) {
          var r = this.__data__,
            n = Re(r, e);
          return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
        }),
        (Pe.prototype.clear = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new Se(),
              map: new (le || Ie)(),
              string: new Se(),
            });
        }),
        (Pe.prototype.delete = function (e) {
          var t = De(this, e).delete(e);
          return (this.size -= t ? 1 : 0), t;
        }),
        (Pe.prototype.get = function (e) {
          return De(this, e).get(e);
        }),
        (Pe.prototype.has = function (e) {
          return De(this, e).has(e);
        }),
        (Pe.prototype.set = function (e, t) {
          var r = De(this, e),
            n = r.size;
          return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
        }),
        (Oe.prototype.add = Oe.prototype.push =
          function (e) {
            return this.__data__.set(e, n), this;
          }),
        (Oe.prototype.has = function (e) {
          return this.__data__.has(e);
        }),
        (Ae.prototype.clear = function () {
          (this.__data__ = new Ie()), (this.size = 0);
        }),
        (Ae.prototype.delete = function (e) {
          var t = this.__data__,
            r = t.delete(e);
          return (this.size = t.size), r;
        }),
        (Ae.prototype.get = function (e) {
          return this.__data__.get(e);
        }),
        (Ae.prototype.has = function (e) {
          return this.__data__.has(e);
        }),
        (Ae.prototype.set = function (e, t) {
          var r = this.__data__;
          if (r instanceof Ie) {
            var n = r.__data__;
            if (!le || n.length < 199)
              return n.push([e, t]), (this.size = ++r.size), this;
            r = this.__data__ = new Pe(n);
          }
          return r.set(e, t), (this.size = r.size), this;
        });
      var qe = ae
          ? function (e) {
              return null == e
                ? []
                : ((e = Object(e)),
                  (function (e, t) {
                    for (
                      var r = -1, n = null == e ? 0 : e.length, i = 0, s = [];
                      ++r < n;

                    ) {
                      var o = e[r];
                      t(o, r, e) && (s[i++] = o);
                    }
                    return s;
                  })(ae(e), function (t) {
                    return ie.call(e, t);
                  }));
            }
          : function () {
              return [];
            },
        $e = Ne;
      function ze(e, t) {
        return (
          !!(t = null == t ? o : t) &&
          ("number" == typeof e || N.test(e)) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      }
      function He(e) {
        if (null != e) {
          try {
            return J.call(e);
          } catch (t) {}
          try {
            return e + "";
          } catch (t) {}
        }
        return "";
      }
      function Be(e, t) {
        return e === t || (e !== e && t !== t);
      }
      ((he && $e(new he(new ArrayBuffer(1))) != x) ||
        (le && $e(new le()) != g) ||
        (fe && $e(fe.resolve()) != w) ||
        (pe && $e(new pe()) != E) ||
        (de && $e(new de()) != O)) &&
        ($e = function (e) {
          var t = Ne(e),
            r = t == m ? e.constructor : void 0,
            n = r ? He(r) : "";
          if (n)
            switch (n) {
              case ye:
                return x;
              case ve:
                return g;
              case me:
                return w;
              case we:
                return E;
              case be:
                return O;
            }
          return t;
        });
      var Ke = Te(
          (function () {
            return arguments;
          })()
        )
          ? Te
          : function (e) {
              return Je(e) && Q.call(e, "callee") && !ie.call(e, "callee");
            },
        Ve = Array.isArray;
      var Fe =
        ce ||
        function () {
          return !1;
        };
      function We(e) {
        if (!Ye(e)) return !1;
        var t = Ne(e);
        return t == p || t == d || t == u || t == b;
      }
      function Ge(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= o;
      }
      function Ye(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      }
      function Je(e) {
        return null != e && "object" == typeof e;
      }
      var Qe = $
        ? (function (e) {
            return function (t) {
              return e(t);
            };
          })($)
        : function (e) {
            return Je(e) && Ge(e.length) && !!T[Ne(e)];
          };
      function Xe(e) {
        return null != (t = e) && Ge(t.length) && !We(t) ? xe(e) : Ue(e);
        var t;
      }
      e.exports = function (e, t) {
        return Ce(e, t);
      };
    },
    9370: (e, t, r) => {
      "use strict";
      const n = r(67491),
        i = r(95707),
        s = r(71289),
        o = r(10038),
        a = Symbol("encodeFragmentIdentifier");
      function c(e) {
        if ("string" !== typeof e || 1 !== e.length)
          throw new TypeError(
            "arrayFormatSeparator must be single character string"
          );
      }
      function u(e, t) {
        return t.encode ? (t.strict ? n(e) : encodeURIComponent(e)) : e;
      }
      function h(e, t) {
        return t.decode ? i(e) : e;
      }
      function l(e) {
        return Array.isArray(e)
          ? e.sort()
          : "object" === typeof e
          ? l(Object.keys(e))
              .sort((e, t) => Number(e) - Number(t))
              .map((t) => e[t])
          : e;
      }
      function f(e) {
        const t = e.indexOf("#");
        return -1 !== t && (e = e.slice(0, t)), e;
      }
      function p(e) {
        const t = (e = f(e)).indexOf("?");
        return -1 === t ? "" : e.slice(t + 1);
      }
      function d(e, t) {
        return (
          t.parseNumbers &&
          !Number.isNaN(Number(e)) &&
          "string" === typeof e &&
          "" !== e.trim()
            ? (e = Number(e))
            : !t.parseBooleans ||
              null === e ||
              ("true" !== e.toLowerCase() && "false" !== e.toLowerCase()) ||
              (e = "true" === e.toLowerCase()),
          e
        );
      }
      function g(e, t) {
        c(
          (t = Object.assign(
            {
              decode: !0,
              sort: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
              parseNumbers: !1,
              parseBooleans: !1,
            },
            t
          )).arrayFormatSeparator
        );
        const r = (function (e) {
            let t;
            switch (e.arrayFormat) {
              case "index":
                return (e, r, n) => {
                  (t = /\[(\d*)\]$/.exec(e)),
                    (e = e.replace(/\[\d*\]$/, "")),
                    t
                      ? (void 0 === n[e] && (n[e] = {}), (n[e][t[1]] = r))
                      : (n[e] = r);
                };
              case "bracket":
                return (e, r, n) => {
                  (t = /(\[\])$/.exec(e)),
                    (e = e.replace(/\[\]$/, "")),
                    t
                      ? void 0 !== n[e]
                        ? (n[e] = [].concat(n[e], r))
                        : (n[e] = [r])
                      : (n[e] = r);
                };
              case "colon-list-separator":
                return (e, r, n) => {
                  (t = /(:list)$/.exec(e)),
                    (e = e.replace(/:list$/, "")),
                    t
                      ? void 0 !== n[e]
                        ? (n[e] = [].concat(n[e], r))
                        : (n[e] = [r])
                      : (n[e] = r);
                };
              case "comma":
              case "separator":
                return (t, r, n) => {
                  const i =
                      "string" === typeof r &&
                      r.includes(e.arrayFormatSeparator),
                    s =
                      "string" === typeof r &&
                      !i &&
                      h(r, e).includes(e.arrayFormatSeparator);
                  r = s ? h(r, e) : r;
                  const o =
                    i || s
                      ? r.split(e.arrayFormatSeparator).map((t) => h(t, e))
                      : null === r
                      ? r
                      : h(r, e);
                  n[t] = o;
                };
              case "bracket-separator":
                return (t, r, n) => {
                  const i = /(\[\])$/.test(t);
                  if (((t = t.replace(/\[\]$/, "")), !i))
                    return void (n[t] = r ? h(r, e) : r);
                  const s =
                    null === r
                      ? []
                      : r.split(e.arrayFormatSeparator).map((t) => h(t, e));
                  void 0 !== n[t] ? (n[t] = [].concat(n[t], s)) : (n[t] = s);
                };
              default:
                return (e, t, r) => {
                  void 0 !== r[e] ? (r[e] = [].concat(r[e], t)) : (r[e] = t);
                };
            }
          })(t),
          n = Object.create(null);
        if ("string" !== typeof e) return n;
        if (!(e = e.trim().replace(/^[?#&]/, ""))) return n;
        for (const i of e.split("&")) {
          if ("" === i) continue;
          let [e, o] = s(t.decode ? i.replace(/\+/g, " ") : i, "=");
          (o =
            void 0 === o
              ? null
              : ["comma", "separator", "bracket-separator"].includes(
                  t.arrayFormat
                )
              ? o
              : h(o, t)),
            r(h(e, t), o, n);
        }
        for (const i of Object.keys(n)) {
          const e = n[i];
          if ("object" === typeof e && null !== e)
            for (const r of Object.keys(e)) e[r] = d(e[r], t);
          else n[i] = d(e, t);
        }
        return !1 === t.sort
          ? n
          : (!0 === t.sort
              ? Object.keys(n).sort()
              : Object.keys(n).sort(t.sort)
            ).reduce((e, t) => {
              const r = n[t];
              return (
                Boolean(r) && "object" === typeof r && !Array.isArray(r)
                  ? (e[t] = l(r))
                  : (e[t] = r),
                e
              );
            }, Object.create(null));
      }
      (t.extract = p),
        (t.parse = g),
        (t.stringify = (e, t) => {
          if (!e) return "";
          c(
            (t = Object.assign(
              {
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
              },
              t
            )).arrayFormatSeparator
          );
          const r = (r) => {
              return (
                (t.skipNull && (null === (n = e[r]) || void 0 === n)) ||
                (t.skipEmptyString && "" === e[r])
              );
              var n;
            },
            n = (function (e) {
              switch (e.arrayFormat) {
                case "index":
                  return (t) => (r, n) => {
                    const i = r.length;
                    return void 0 === n ||
                      (e.skipNull && null === n) ||
                      (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                      ? [...r, [u(t, e), "[", i, "]"].join("")]
                      : [...r, [u(t, e), "[", u(i, e), "]=", u(n, e)].join("")];
                  };
                case "bracket":
                  return (t) => (r, n) =>
                    void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                      ? [...r, [u(t, e), "[]"].join("")]
                      : [...r, [u(t, e), "[]=", u(n, e)].join("")];
                case "colon-list-separator":
                  return (t) => (r, n) =>
                    void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                      ? [...r, [u(t, e), ":list="].join("")]
                      : [...r, [u(t, e), ":list=", u(n, e)].join("")];
                case "comma":
                case "separator":
                case "bracket-separator": {
                  const t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                  return (r) => (n, i) =>
                    void 0 === i ||
                    (e.skipNull && null === i) ||
                    (e.skipEmptyString && "" === i)
                      ? n
                      : ((i = null === i ? "" : i),
                        0 === n.length
                          ? [[u(r, e), t, u(i, e)].join("")]
                          : [[n, u(i, e)].join(e.arrayFormatSeparator)]);
                }
                default:
                  return (t) => (r, n) =>
                    void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                      ? [...r, u(t, e)]
                      : [...r, [u(t, e), "=", u(n, e)].join("")];
              }
            })(t),
            i = {};
          for (const o of Object.keys(e)) r(o) || (i[o] = e[o]);
          const s = Object.keys(i);
          return (
            !1 !== t.sort && s.sort(t.sort),
            s
              .map((r) => {
                const i = e[r];
                return void 0 === i
                  ? ""
                  : null === i
                  ? u(r, t)
                  : Array.isArray(i)
                  ? 0 === i.length && "bracket-separator" === t.arrayFormat
                    ? u(r, t) + "[]"
                    : i.reduce(n(r), []).join("&")
                  : u(r, t) + "=" + u(i, t);
              })
              .filter((e) => e.length > 0)
              .join("&")
          );
        }),
        (t.parseUrl = (e, t) => {
          t = Object.assign({ decode: !0 }, t);
          const [r, n] = s(e, "#");
          return Object.assign(
            { url: r.split("?")[0] || "", query: g(p(e), t) },
            t && t.parseFragmentIdentifier && n
              ? { fragmentIdentifier: h(n, t) }
              : {}
          );
        }),
        (t.stringifyUrl = (e, r) => {
          r = Object.assign({ encode: !0, strict: !0, [a]: !0 }, r);
          const n = f(e.url).split("?")[0] || "",
            i = t.extract(e.url),
            s = t.parse(i, { sort: !1 }),
            o = Object.assign(s, e.query);
          let c = t.stringify(o, r);
          c && (c = `?${c}`);
          let h = (function (e) {
            let t = "";
            const r = e.indexOf("#");
            return -1 !== r && (t = e.slice(r)), t;
          })(e.url);
          return (
            e.fragmentIdentifier &&
              (h = `#${
                r[a] ? u(e.fragmentIdentifier, r) : e.fragmentIdentifier
              }`),
            `${n}${c}${h}`
          );
        }),
        (t.pick = (e, r, n) => {
          n = Object.assign({ parseFragmentIdentifier: !0, [a]: !1 }, n);
          const { url: i, query: s, fragmentIdentifier: c } = t.parseUrl(e, n);
          return t.stringifyUrl(
            { url: i, query: o(s, r), fragmentIdentifier: c },
            n
          );
        }),
        (t.exclude = (e, r, n) => {
          const i = Array.isArray(r)
            ? (e) => !r.includes(e)
            : (e, t) => !r(e, t);
          return t.pick(e, i, n);
        });
    },
    75984: (e) => {
      "use strict";
      function t(e) {
        try {
          return JSON.stringify(e);
        } catch (t) {
          return '"[Circular]"';
        }
      }
      e.exports = function (e, r, n) {
        var i = (n && n.stringify) || t;
        if ("object" === typeof e && null !== e) {
          var s = r.length + 1;
          if (1 === s) return e;
          var o = new Array(s);
          o[0] = i(e);
          for (var a = 1; a < s; a++) o[a] = i(r[a]);
          return o.join(" ");
        }
        if ("string" !== typeof e) return e;
        var c = r.length;
        if (0 === c) return e;
        for (
          var u = "", h = 0, l = -1, f = (e && e.length) || 0, p = 0;
          p < f;

        ) {
          if (37 === e.charCodeAt(p) && p + 1 < f) {
            switch (((l = l > -1 ? l : 0), e.charCodeAt(p + 1))) {
              case 100:
              case 102:
                if (h >= c) break;
                if (null == r[h]) break;
                l < p && (u += e.slice(l, p)),
                  (u += Number(r[h])),
                  (l = p + 2),
                  p++;
                break;
              case 105:
                if (h >= c) break;
                if (null == r[h]) break;
                l < p && (u += e.slice(l, p)),
                  (u += Math.floor(Number(r[h]))),
                  (l = p + 2),
                  p++;
                break;
              case 79:
              case 111:
              case 106:
                if (h >= c) break;
                if (void 0 === r[h]) break;
                l < p && (u += e.slice(l, p));
                var d = typeof r[h];
                if ("string" === d) {
                  (u += "'" + r[h] + "'"), (l = p + 2), p++;
                  break;
                }
                if ("function" === d) {
                  (u += r[h].name || "<anonymous>"), (l = p + 2), p++;
                  break;
                }
                (u += i(r[h])), (l = p + 2), p++;
                break;
              case 115:
                if (h >= c) break;
                l < p && (u += e.slice(l, p)),
                  (u += String(r[h])),
                  (l = p + 2),
                  p++;
                break;
              case 37:
                l < p && (u += e.slice(l, p)),
                  (u += "%"),
                  (l = p + 2),
                  p++,
                  h--;
            }
            ++h;
          }
          ++p;
        }
        if (-1 === l) return e;
        l < f && (u += e.slice(l));
        return u;
      };
    },
    71289: (e) => {
      "use strict";
      e.exports = (e, t) => {
        if ("string" !== typeof e || "string" !== typeof t)
          throw new TypeError("Expected the arguments to be of type `string`");
        if ("" === t) return [e];
        const r = e.indexOf(t);
        return -1 === r ? [e] : [e.slice(0, r), e.slice(r + t.length)];
      };
    },
    67491: (e) => {
      "use strict";
      e.exports = (e) =>
        encodeURIComponent(e).replace(
          /[!'()*]/g,
          (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`
        );
    },
    1009: (e, t, r) => {
      "use strict";
      function n(e, t) {
        return (
          (t = t || {}),
          new Promise(function (r, n) {
            var i = new XMLHttpRequest(),
              s = [],
              o = [],
              a = {},
              c = function () {
                return {
                  ok: 2 == ((i.status / 100) | 0),
                  statusText: i.statusText,
                  status: i.status,
                  url: i.responseURL,
                  text: function () {
                    return Promise.resolve(i.responseText);
                  },
                  json: function () {
                    return Promise.resolve(i.responseText).then(JSON.parse);
                  },
                  blob: function () {
                    return Promise.resolve(new Blob([i.response]));
                  },
                  clone: c,
                  headers: {
                    keys: function () {
                      return s;
                    },
                    entries: function () {
                      return o;
                    },
                    get: function (e) {
                      return a[e.toLowerCase()];
                    },
                    has: function (e) {
                      return e.toLowerCase() in a;
                    },
                  },
                };
              };
            for (var u in (i.open(t.method || "get", e, !0),
            (i.onload = function () {
              i
                .getAllResponseHeaders()
                .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (e, t, r) {
                  s.push((t = t.toLowerCase())),
                    o.push([t, r]),
                    (a[t] = a[t] ? a[t] + "," + r : r);
                }),
                r(c());
            }),
            (i.onerror = n),
            (i.withCredentials = "include" == t.credentials),
            t.headers))
              i.setRequestHeader(u, t.headers[u]);
            i.send(t.body || null);
          })
        );
      }
      r.r(t), r.d(t, { default: () => n });
    },
    25711: (e, t, r) => {
      "use strict";
      const n = r(75984);
      e.exports = o;
      const i =
          (function () {
            function e(e) {
              return "undefined" !== typeof e && e;
            }
            try {
              return (
                "undefined" !== typeof globalThis ||
                  Object.defineProperty(Object.prototype, "globalThis", {
                    get: function () {
                      return (
                        delete Object.prototype.globalThis,
                        (this.globalThis = this)
                      );
                    },
                    configurable: !0,
                  }),
                globalThis
              );
            } catch (t) {
              return e(self) || e(window) || e(this) || {};
            }
          })().console || {},
        s = {
          mapHttpRequest: f,
          mapHttpResponse: f,
          wrapRequestSerializer: p,
          wrapResponseSerializer: p,
          wrapErrorSerializer: p,
          req: f,
          res: f,
          err: function (e) {
            const t = {
              type: e.constructor.name,
              msg: e.message,
              stack: e.stack,
            };
            for (const r in e) void 0 === t[r] && (t[r] = e[r]);
            return t;
          },
        };
      function o(e) {
        (e = e || {}).browser = e.browser || {};
        const t = e.browser.transmit;
        if (t && "function" !== typeof t.send)
          throw Error("pino: transmit option must have a send function");
        const r = e.browser.write || i;
        e.browser.write && (e.browser.asObject = !0);
        const n = e.serializers || {},
          s = (function (e, t) {
            if (Array.isArray(e))
              return e.filter(function (e) {
                return "!stdSerializers.err" !== e;
              });
            return !0 === e && Object.keys(t);
          })(e.browser.serialize, n);
        let f = e.browser.serialize;
        Array.isArray(e.browser.serialize) &&
          e.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
          (f = !1);
        "function" === typeof r &&
          (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r),
          !1 === e.enabled && (e.level = "silent");
        const p = e.level || "info",
          g = Object.create(r);
        g.log || (g.log = d),
          Object.defineProperty(g, "levelVal", {
            get: function () {
              return "silent" === this.level
                ? 1 / 0
                : this.levels.values[this.level];
            },
          }),
          Object.defineProperty(g, "level", {
            get: function () {
              return this._level;
            },
            set: function (e) {
              if ("silent" !== e && !this.levels.values[e])
                throw Error("unknown level " + e);
              (this._level = e),
                a(y, g, "error", "log"),
                a(y, g, "fatal", "error"),
                a(y, g, "warn", "error"),
                a(y, g, "info", "log"),
                a(y, g, "debug", "log"),
                a(y, g, "trace", "log");
            },
          });
        const y = {
          transmit: t,
          serialize: s,
          asObject: e.browser.asObject,
          levels: ["error", "fatal", "warn", "info", "debug", "trace"],
          timestamp: l(e),
        };
        return (
          (g.levels = o.levels),
          (g.level = p),
          (g.setMaxListeners =
            g.getMaxListeners =
            g.emit =
            g.addListener =
            g.on =
            g.prependListener =
            g.once =
            g.prependOnceListener =
            g.removeListener =
            g.removeAllListeners =
            g.listeners =
            g.listenerCount =
            g.eventNames =
            g.write =
            g.flush =
              d),
          (g.serializers = n),
          (g._serialize = s),
          (g._stdErrSerialize = f),
          (g.child = function (r, i) {
            if (!r) throw new Error("missing bindings for child Pino");
            (i = i || {}),
              s && r.serializers && (i.serializers = r.serializers);
            const o = i.serializers;
            if (s && o) {
              var a = Object.assign({}, n, o),
                l = !0 === e.browser.serialize ? Object.keys(a) : s;
              delete r.serializers, c([r], l, a, this._stdErrSerialize);
            }
            function f(e) {
              (this._childLevel = 1 + (0 | e._childLevel)),
                (this.error = u(e, r, "error")),
                (this.fatal = u(e, r, "fatal")),
                (this.warn = u(e, r, "warn")),
                (this.info = u(e, r, "info")),
                (this.debug = u(e, r, "debug")),
                (this.trace = u(e, r, "trace")),
                a && ((this.serializers = a), (this._serialize = l)),
                t && (this._logEvent = h([].concat(e._logEvent.bindings, r)));
            }
            return (f.prototype = this), new f(this);
          }),
          t && (g._logEvent = h()),
          g
        );
      }
      function a(e, t, r, s) {
        const a = Object.getPrototypeOf(t);
        (t[r] =
          t.levelVal > t.levels.values[r]
            ? d
            : a[r]
            ? a[r]
            : i[r] || i[s] || d),
          (function (e, t, r) {
            if (!e.transmit && t[r] === d) return;
            t[r] =
              ((s = t[r]),
              function () {
                const a = e.timestamp(),
                  u = new Array(arguments.length),
                  l =
                    Object.getPrototypeOf && Object.getPrototypeOf(this) === i
                      ? i
                      : this;
                for (var f = 0; f < u.length; f++) u[f] = arguments[f];
                if (
                  (e.serialize &&
                    !e.asObject &&
                    c(
                      u,
                      this._serialize,
                      this.serializers,
                      this._stdErrSerialize
                    ),
                  e.asObject
                    ? s.call(
                        l,
                        (function (e, t, r, i) {
                          e._serialize &&
                            c(
                              r,
                              e._serialize,
                              e.serializers,
                              e._stdErrSerialize
                            );
                          const s = r.slice();
                          let a = s[0];
                          const u = {};
                          i && (u.time = i), (u.level = o.levels.values[t]);
                          let h = 1 + (0 | e._childLevel);
                          if (
                            (h < 1 && (h = 1),
                            null !== a && "object" === typeof a)
                          ) {
                            for (; h-- && "object" === typeof s[0]; )
                              Object.assign(u, s.shift());
                            a = s.length ? n(s.shift(), s) : void 0;
                          } else "string" === typeof a && (a = n(s.shift(), s));
                          return void 0 !== a && (u.msg = a), u;
                        })(this, r, u, a)
                      )
                    : s.apply(l, u),
                  e.transmit)
                ) {
                  const n = e.transmit.level || t.level,
                    i = o.levels.values[n],
                    s = o.levels.values[r];
                  if (s < i) return;
                  !(function (e, t, r) {
                    const n = t.send,
                      i = t.ts,
                      s = t.methodLevel,
                      o = t.methodValue,
                      a = t.val,
                      u = e._logEvent.bindings;
                    c(
                      r,
                      e._serialize || Object.keys(e.serializers),
                      e.serializers,
                      void 0 === e._stdErrSerialize || e._stdErrSerialize
                    ),
                      (e._logEvent.ts = i),
                      (e._logEvent.messages = r.filter(function (e) {
                        return -1 === u.indexOf(e);
                      })),
                      (e._logEvent.level.label = s),
                      (e._logEvent.level.value = o),
                      n(s, e._logEvent, a),
                      (e._logEvent = h(u));
                  })(
                    this,
                    {
                      ts: a,
                      methodLevel: r,
                      methodValue: s,
                      transmitLevel: n,
                      transmitValue:
                        o.levels.values[e.transmit.level || t.level],
                      send: e.transmit.send,
                      val: t.levelVal,
                    },
                    u
                  );
                }
              });
            var s;
          })(e, t, r);
      }
      function c(e, t, r, n) {
        for (const i in e)
          if (n && e[i] instanceof Error) e[i] = o.stdSerializers.err(e[i]);
          else if ("object" === typeof e[i] && !Array.isArray(e[i]))
            for (const n in e[i])
              t && t.indexOf(n) > -1 && n in r && (e[i][n] = r[n](e[i][n]));
      }
      function u(e, t, r) {
        return function () {
          const n = new Array(1 + arguments.length);
          n[0] = t;
          for (var i = 1; i < n.length; i++) n[i] = arguments[i - 1];
          return e[r].apply(this, n);
        };
      }
      function h(e) {
        return {
          ts: 0,
          messages: [],
          bindings: e || [],
          level: { label: "", value: 0 },
        };
      }
      function l(e) {
        return "function" === typeof e.timestamp
          ? e.timestamp
          : !1 === e.timestamp
          ? g
          : y;
      }
      function f() {
        return {};
      }
      function p(e) {
        return e;
      }
      function d() {}
      function g() {
        return !1;
      }
      function y() {
        return Date.now();
      }
      (o.levels = {
        values: {
          fatal: 60,
          error: 50,
          warn: 40,
          info: 30,
          debug: 20,
          trace: 10,
        },
        labels: {
          10: "trace",
          20: "debug",
          30: "info",
          40: "warn",
          50: "error",
          60: "fatal",
        },
      }),
        (o.stdSerializers = s),
        (o.stdTimeFunctions = Object.assign(
          {},
          {
            nullTime: g,
            epochTime: y,
            unixTime: function () {
              return Math.round(Date.now() / 1e3);
            },
            isoTime: function () {
              return new Date(Date.now()).toISOString();
            },
          }
        ));
    },
  },
]);
//# sourceMappingURL=49.e032cb44.chunk.js.map

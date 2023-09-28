define([
  'exports',
  './Matrix2-47e98d76',
  './RuntimeError-8952249c',
  './defaultValue-81eec7ed',
  './ComponentDatatype-a15c9a19',
  './commonjsHelpers',
  './combine-3c023bda',
], function (e, t, n, r, o, i, s) {
  'use strict'
  function a(e) {
    ;(this._ellipsoid = r.defaultValue(e, t.Ellipsoid.WGS84)),
      (this._semimajorAxis = this._ellipsoid.maximumRadius),
      (this._oneOverSemimajorAxis = 1 / this._semimajorAxis)
  }
  Object.defineProperties(a.prototype, {
    ellipsoid: {
      get: function () {
        return this._ellipsoid
      },
    },
  }),
    (a.prototype.project = function (e, n) {
      const o = this._semimajorAxis,
        i = e.longitude * o,
        s = e.latitude * o,
        a = e.height
      return r.defined(n) ? ((n.x = i), (n.y = s), (n.z = a), n) : new t.Cartesian3(i, s, a)
    }),
    (a.prototype.unproject = function (e, n) {
      const o = this._oneOverSemimajorAxis,
        i = e.x * o,
        s = e.y * o,
        a = e.z
      return r.defined(n)
        ? ((n.longitude = i), (n.latitude = s), (n.height = a), n)
        : new t.Cartographic(i, s, a)
    })
  var u = Object.freeze({ OUTSIDE: -1, INTERSECTING: 0, INSIDE: 1 })
  function c(e, t) {
    ;(this.start = r.defaultValue(e, 0)), (this.stop = r.defaultValue(t, 0))
  }
  function l(e, n) {
    ;(this.center = t.Cartesian3.clone(r.defaultValue(e, t.Cartesian3.ZERO))),
      (this.radius = r.defaultValue(n, 0))
  }
  const d = new t.Cartesian3(),
    f = new t.Cartesian3(),
    p = new t.Cartesian3(),
    h = new t.Cartesian3(),
    m = new t.Cartesian3(),
    g = new t.Cartesian3(),
    y = new t.Cartesian3(),
    v = new t.Cartesian3(),
    C = new t.Cartesian3(),
    _ = new t.Cartesian3(),
    w = new t.Cartesian3(),
    b = new t.Cartesian3(),
    x = (4 / 3) * o.CesiumMath.PI
  l.fromPoints = function (e, n) {
    if ((r.defined(n) || (n = new l()), !r.defined(e) || 0 === e.length))
      return (n.center = t.Cartesian3.clone(t.Cartesian3.ZERO, n.center)), (n.radius = 0), n
    const o = t.Cartesian3.clone(e[0], y),
      i = t.Cartesian3.clone(o, d),
      s = t.Cartesian3.clone(o, f),
      a = t.Cartesian3.clone(o, p),
      u = t.Cartesian3.clone(o, h),
      c = t.Cartesian3.clone(o, m),
      x = t.Cartesian3.clone(o, g),
      S = e.length
    let A
    for (A = 1; A < S; A++) {
      t.Cartesian3.clone(e[A], o)
      const n = o.x,
        r = o.y,
        l = o.z
      n < i.x && t.Cartesian3.clone(o, i),
        n > u.x && t.Cartesian3.clone(o, u),
        r < s.y && t.Cartesian3.clone(o, s),
        r > c.y && t.Cartesian3.clone(o, c),
        l < a.z && t.Cartesian3.clone(o, a),
        l > x.z && t.Cartesian3.clone(o, x)
    }
    const E = t.Cartesian3.magnitudeSquared(t.Cartesian3.subtract(u, i, v)),
      O = t.Cartesian3.magnitudeSquared(t.Cartesian3.subtract(c, s, v)),
      I = t.Cartesian3.magnitudeSquared(t.Cartesian3.subtract(x, a, v))
    let P = i,
      R = u,
      T = E
    O > T && ((T = O), (P = s), (R = c)), I > T && ((T = I), (P = a), (R = x))
    const q = C
    ;(q.x = 0.5 * (P.x + R.x)), (q.y = 0.5 * (P.y + R.y)), (q.z = 0.5 * (P.z + R.z))
    let z = t.Cartesian3.magnitudeSquared(t.Cartesian3.subtract(R, q, v)),
      M = Math.sqrt(z)
    const D = _
    ;(D.x = i.x), (D.y = s.y), (D.z = a.z)
    const U = w
    ;(U.x = u.x), (U.y = c.y), (U.z = x.z)
    const k = t.Cartesian3.midpoint(D, U, b)
    let F = 0
    for (A = 0; A < S; A++) {
      t.Cartesian3.clone(e[A], o)
      const n = t.Cartesian3.magnitude(t.Cartesian3.subtract(o, k, v))
      n > F && (F = n)
      const r = t.Cartesian3.magnitudeSquared(t.Cartesian3.subtract(o, q, v))
      if (r > z) {
        const e = Math.sqrt(r)
        ;(M = 0.5 * (M + e)), (z = M * M)
        const t = e - M
        ;(q.x = (M * q.x + t * o.x) / e),
          (q.y = (M * q.y + t * o.y) / e),
          (q.z = (M * q.z + t * o.z) / e)
      }
    }
    return (
      M < F
        ? (t.Cartesian3.clone(q, n.center), (n.radius = M))
        : (t.Cartesian3.clone(k, n.center), (n.radius = F)),
      n
    )
  }
  const S = new a(),
    A = new t.Cartesian3(),
    E = new t.Cartesian3(),
    O = new t.Cartographic(),
    I = new t.Cartographic()
  ;(l.fromRectangle2D = function (e, t, n) {
    return l.fromRectangleWithHeights2D(e, t, 0, 0, n)
  }),
    (l.fromRectangleWithHeights2D = function (e, n, o, i, s) {
      if ((r.defined(s) || (s = new l()), !r.defined(e)))
        return (s.center = t.Cartesian3.clone(t.Cartesian3.ZERO, s.center)), (s.radius = 0), s
      ;(n = r.defaultValue(n, S)),
        t.Rectangle.southwest(e, O),
        (O.height = o),
        t.Rectangle.northeast(e, I),
        (I.height = i)
      const a = n.project(O, A),
        u = n.project(I, E),
        c = u.x - a.x,
        d = u.y - a.y,
        f = u.z - a.z
      s.radius = 0.5 * Math.sqrt(c * c + d * d + f * f)
      const p = s.center
      return (p.x = a.x + 0.5 * c), (p.y = a.y + 0.5 * d), (p.z = a.z + 0.5 * f), s
    })
  const P = []
  ;(l.fromRectangle3D = function (e, n, o, i) {
    if (
      ((n = r.defaultValue(n, t.Ellipsoid.WGS84)),
      (o = r.defaultValue(o, 0)),
      r.defined(i) || (i = new l()),
      !r.defined(e))
    )
      return (i.center = t.Cartesian3.clone(t.Cartesian3.ZERO, i.center)), (i.radius = 0), i
    const s = t.Rectangle.subsample(e, n, o, P)
    return l.fromPoints(s, i)
  }),
    (l.fromVertices = function (e, n, o, i) {
      if ((r.defined(i) || (i = new l()), !r.defined(e) || 0 === e.length))
        return (i.center = t.Cartesian3.clone(t.Cartesian3.ZERO, i.center)), (i.radius = 0), i
      ;(n = r.defaultValue(n, t.Cartesian3.ZERO)), (o = r.defaultValue(o, 3))
      const s = y
      ;(s.x = e[0] + n.x), (s.y = e[1] + n.y), (s.z = e[2] + n.z)
      const a = t.Cartesian3.clone(s, d),
        u = t.Cartesian3.clone(s, f),
        c = t.Cartesian3.clone(s, p),
        x = t.Cartesian3.clone(s, h),
        S = t.Cartesian3.clone(s, m),
        A = t.Cartesian3.clone(s, g),
        E = e.length
      let O
      for (O = 0; O < E; O += o) {
        const r = e[O] + n.x,
          o = e[O + 1] + n.y,
          i = e[O + 2] + n.z
        ;(s.x = r),
          (s.y = o),
          (s.z = i),
          r < a.x && t.Cartesian3.clone(s, a),
          r > x.x && t.Cartesian3.clone(s, x),
          o < u.y && t.Cartesian3.clone(s, u),
          o > S.y && t.Cartesian3.clone(s, S),
          i < c.z && t.Cartesian3.clone(s, c),
          i > A.z && t.Cartesian3.clone(s, A)
      }
      const I = t.Cartesian3.magnitudeSquared(t.Cartesian3.subtract(x, a, v)),
        P = t.Cartesian3.magnitudeSquared(t.Cartesian3.subtract(S, u, v)),
        R = t.Cartesian3.magnitudeSquared(t.Cartesian3.subtract(A, c, v))
      let T = a,
        q = x,
        z = I
      P > z && ((z = P), (T = u), (q = S)), R > z && ((z = R), (T = c), (q = A))
      const M = C
      ;(M.x = 0.5 * (T.x + q.x)), (M.y = 0.5 * (T.y + q.y)), (M.z = 0.5 * (T.z + q.z))
      let D = t.Cartesian3.magnitudeSquared(t.Cartesian3.subtract(q, M, v)),
        U = Math.sqrt(D)
      const k = _
      ;(k.x = a.x), (k.y = u.y), (k.z = c.z)
      const F = w
      ;(F.x = x.x), (F.y = S.y), (F.z = A.z)
      const N = t.Cartesian3.midpoint(k, F, b)
      let j = 0
      for (O = 0; O < E; O += o) {
        ;(s.x = e[O] + n.x), (s.y = e[O + 1] + n.y), (s.z = e[O + 2] + n.z)
        const r = t.Cartesian3.magnitude(t.Cartesian3.subtract(s, N, v))
        r > j && (j = r)
        const o = t.Cartesian3.magnitudeSquared(t.Cartesian3.subtract(s, M, v))
        if (o > D) {
          const e = Math.sqrt(o)
          ;(U = 0.5 * (U + e)), (D = U * U)
          const t = e - U
          ;(M.x = (U * M.x + t * s.x) / e),
            (M.y = (U * M.y + t * s.y) / e),
            (M.z = (U * M.z + t * s.z) / e)
        }
      }
      return (
        U < j
          ? (t.Cartesian3.clone(M, i.center), (i.radius = U))
          : (t.Cartesian3.clone(N, i.center), (i.radius = j)),
        i
      )
    }),
    (l.fromEncodedCartesianVertices = function (e, n, o) {
      if (
        (r.defined(o) || (o = new l()),
        !r.defined(e) || !r.defined(n) || e.length !== n.length || 0 === e.length)
      )
        return (o.center = t.Cartesian3.clone(t.Cartesian3.ZERO, o.center)), (o.radius = 0), o
      const i = y
      ;(i.x = e[0] + n[0]), (i.y = e[1] + n[1]), (i.z = e[2] + n[2])
      const s = t.Cartesian3.clone(i, d),
        a = t.Cartesian3.clone(i, f),
        u = t.Cartesian3.clone(i, p),
        c = t.Cartesian3.clone(i, h),
        x = t.Cartesian3.clone(i, m),
        S = t.Cartesian3.clone(i, g),
        A = e.length
      let E
      for (E = 0; E < A; E += 3) {
        const r = e[E] + n[E],
          o = e[E + 1] + n[E + 1],
          l = e[E + 2] + n[E + 2]
        ;(i.x = r),
          (i.y = o),
          (i.z = l),
          r < s.x && t.Cartesian3.clone(i, s),
          r > c.x && t.Cartesian3.clone(i, c),
          o < a.y && t.Cartesian3.clone(i, a),
          o > x.y && t.Cartesian3.clone(i, x),
          l < u.z && t.Cartesian3.clone(i, u),
          l > S.z && t.Cartesian3.clone(i, S)
      }
      const O = t.Cartesian3.magnitudeSquared(t.Cartesian3.subtract(c, s, v)),
        I = t.Cartesian3.magnitudeSquared(t.Cartesian3.subtract(x, a, v)),
        P = t.Cartesian3.magnitudeSquared(t.Cartesian3.subtract(S, u, v))
      let R = s,
        T = c,
        q = O
      I > q && ((q = I), (R = a), (T = x)), P > q && ((q = P), (R = u), (T = S))
      const z = C
      ;(z.x = 0.5 * (R.x + T.x)), (z.y = 0.5 * (R.y + T.y)), (z.z = 0.5 * (R.z + T.z))
      let M = t.Cartesian3.magnitudeSquared(t.Cartesian3.subtract(T, z, v)),
        D = Math.sqrt(M)
      const U = _
      ;(U.x = s.x), (U.y = a.y), (U.z = u.z)
      const k = w
      ;(k.x = c.x), (k.y = x.y), (k.z = S.z)
      const F = t.Cartesian3.midpoint(U, k, b)
      let N = 0
      for (E = 0; E < A; E += 3) {
        ;(i.x = e[E] + n[E]), (i.y = e[E + 1] + n[E + 1]), (i.z = e[E + 2] + n[E + 2])
        const r = t.Cartesian3.magnitude(t.Cartesian3.subtract(i, F, v))
        r > N && (N = r)
        const o = t.Cartesian3.magnitudeSquared(t.Cartesian3.subtract(i, z, v))
        if (o > M) {
          const e = Math.sqrt(o)
          ;(D = 0.5 * (D + e)), (M = D * D)
          const t = e - D
          ;(z.x = (D * z.x + t * i.x) / e),
            (z.y = (D * z.y + t * i.y) / e),
            (z.z = (D * z.z + t * i.z) / e)
        }
      }
      return (
        D < N
          ? (t.Cartesian3.clone(z, o.center), (o.radius = D))
          : (t.Cartesian3.clone(F, o.center), (o.radius = N)),
        o
      )
    }),
    (l.fromCornerPoints = function (e, n, o) {
      r.defined(o) || (o = new l())
      const i = t.Cartesian3.midpoint(e, n, o.center)
      return (o.radius = t.Cartesian3.distance(i, n)), o
    }),
    (l.fromEllipsoid = function (e, n) {
      return (
        r.defined(n) || (n = new l()),
        t.Cartesian3.clone(t.Cartesian3.ZERO, n.center),
        (n.radius = e.maximumRadius),
        n
      )
    })
  const R = new t.Cartesian3()
  l.fromBoundingSpheres = function (e, n) {
    if ((r.defined(n) || (n = new l()), !r.defined(e) || 0 === e.length))
      return (n.center = t.Cartesian3.clone(t.Cartesian3.ZERO, n.center)), (n.radius = 0), n
    const o = e.length
    if (1 === o) return l.clone(e[0], n)
    if (2 === o) return l.union(e[0], e[1], n)
    const i = []
    let s
    for (s = 0; s < o; s++) i.push(e[s].center)
    const a = (n = l.fromPoints(i, n)).center
    let u = n.radius
    for (s = 0; s < o; s++) {
      const n = e[s]
      u = Math.max(u, t.Cartesian3.distance(a, n.center, R) + n.radius)
    }
    return (n.radius = u), n
  }
  const T = new t.Cartesian3(),
    q = new t.Cartesian3(),
    z = new t.Cartesian3()
  l.fromOrientedBoundingBox = function (e, n) {
    r.defined(n) || (n = new l())
    const o = e.halfAxes,
      i = t.Matrix3.getColumn(o, 0, T),
      s = t.Matrix3.getColumn(o, 1, q),
      a = t.Matrix3.getColumn(o, 2, z)
    return (
      t.Cartesian3.add(i, s, i),
      t.Cartesian3.add(i, a, i),
      (n.center = t.Cartesian3.clone(e.center, n.center)),
      (n.radius = t.Cartesian3.magnitude(i)),
      n
    )
  }
  const M = new t.Cartesian3(),
    D = new t.Cartesian3()
  ;(l.fromTransformation = function (e, n) {
    r.defined(n) || (n = new l())
    const o = t.Matrix4.getTranslation(e, M),
      i = t.Matrix4.getScale(e, D),
      s = 0.5 * t.Cartesian3.magnitude(i)
    return (n.center = t.Cartesian3.clone(o, n.center)), (n.radius = s), n
  }),
    (l.clone = function (e, n) {
      if (r.defined(e))
        return r.defined(n)
          ? ((n.center = t.Cartesian3.clone(e.center, n.center)), (n.radius = e.radius), n)
          : new l(e.center, e.radius)
    }),
    (l.packedLength = 4),
    (l.pack = function (e, t, n) {
      n = r.defaultValue(n, 0)
      const o = e.center
      return (t[n++] = o.x), (t[n++] = o.y), (t[n++] = o.z), (t[n] = e.radius), t
    }),
    (l.unpack = function (e, t, n) {
      ;(t = r.defaultValue(t, 0)), r.defined(n) || (n = new l())
      const o = n.center
      return (o.x = e[t++]), (o.y = e[t++]), (o.z = e[t++]), (n.radius = e[t]), n
    })
  const U = new t.Cartesian3(),
    k = new t.Cartesian3()
  l.union = function (e, n, o) {
    r.defined(o) || (o = new l())
    const i = e.center,
      s = e.radius,
      a = n.center,
      u = n.radius,
      c = t.Cartesian3.subtract(a, i, U),
      d = t.Cartesian3.magnitude(c)
    if (s >= d + u) return e.clone(o), o
    if (u >= d + s) return n.clone(o), o
    const f = 0.5 * (s + d + u),
      p = t.Cartesian3.multiplyByScalar(c, (-s + f) / d, k)
    return t.Cartesian3.add(p, i, p), t.Cartesian3.clone(p, o.center), (o.radius = f), o
  }
  const F = new t.Cartesian3()
  ;(l.expand = function (e, n, r) {
    r = l.clone(e, r)
    const o = t.Cartesian3.magnitude(t.Cartesian3.subtract(n, r.center, F))
    return o > r.radius && (r.radius = o), r
  }),
    (l.intersectPlane = function (e, n) {
      const r = e.center,
        o = e.radius,
        i = n.normal,
        s = t.Cartesian3.dot(i, r) + n.distance
      return s < -o ? u.OUTSIDE : s < o ? u.INTERSECTING : u.INSIDE
    }),
    (l.transform = function (e, n, o) {
      return (
        r.defined(o) || (o = new l()),
        (o.center = t.Matrix4.multiplyByPoint(n, e.center, o.center)),
        (o.radius = t.Matrix4.getMaximumScale(n) * e.radius),
        o
      )
    })
  const N = new t.Cartesian3()
  ;(l.distanceSquaredTo = function (e, n) {
    const r = t.Cartesian3.subtract(e.center, n, N),
      o = t.Cartesian3.magnitude(r) - e.radius
    return o <= 0 ? 0 : o * o
  }),
    (l.transformWithoutScale = function (e, n, o) {
      return (
        r.defined(o) || (o = new l()),
        (o.center = t.Matrix4.multiplyByPoint(n, e.center, o.center)),
        (o.radius = e.radius),
        o
      )
    })
  const j = new t.Cartesian3()
  l.computePlaneDistances = function (e, n, o, i) {
    r.defined(i) || (i = new c())
    const s = t.Cartesian3.subtract(e.center, n, j),
      a = t.Cartesian3.dot(o, s)
    return (i.start = a - e.radius), (i.stop = a + e.radius), i
  }
  const B = new t.Cartesian3(),
    V = new t.Cartesian3(),
    L = new t.Cartesian3(),
    Q = new t.Cartesian3(),
    $ = new t.Cartesian3(),
    W = new t.Cartographic(),
    H = new Array(8)
  for (let e = 0; e < 8; ++e) H[e] = new t.Cartesian3()
  const Y = new a()
  function Z() {
    let e, t
    const n = new Promise(function (n, r) {
      ;(e = n), (t = r)
    })
    return { resolve: e, reject: t, promise: n }
  }
  let G
  ;(l.projectTo2D = function (e, n, o) {
    const i = (n = r.defaultValue(n, Y)).ellipsoid
    let s = e.center
    const a = e.radius
    let u
    u = t.Cartesian3.equals(s, t.Cartesian3.ZERO)
      ? t.Cartesian3.clone(t.Cartesian3.UNIT_X, B)
      : i.geodeticSurfaceNormal(s, B)
    const c = t.Cartesian3.cross(t.Cartesian3.UNIT_Z, u, V)
    t.Cartesian3.normalize(c, c)
    const d = t.Cartesian3.cross(u, c, L)
    t.Cartesian3.normalize(d, d),
      t.Cartesian3.multiplyByScalar(u, a, u),
      t.Cartesian3.multiplyByScalar(d, a, d),
      t.Cartesian3.multiplyByScalar(c, a, c)
    const f = t.Cartesian3.negate(d, $),
      p = t.Cartesian3.negate(c, Q),
      h = H
    let m = h[0]
    t.Cartesian3.add(u, d, m),
      t.Cartesian3.add(m, c, m),
      (m = h[1]),
      t.Cartesian3.add(u, d, m),
      t.Cartesian3.add(m, p, m),
      (m = h[2]),
      t.Cartesian3.add(u, f, m),
      t.Cartesian3.add(m, p, m),
      (m = h[3]),
      t.Cartesian3.add(u, f, m),
      t.Cartesian3.add(m, c, m),
      t.Cartesian3.negate(u, u),
      (m = h[4]),
      t.Cartesian3.add(u, d, m),
      t.Cartesian3.add(m, c, m),
      (m = h[5]),
      t.Cartesian3.add(u, d, m),
      t.Cartesian3.add(m, p, m),
      (m = h[6]),
      t.Cartesian3.add(u, f, m),
      t.Cartesian3.add(m, p, m),
      (m = h[7]),
      t.Cartesian3.add(u, f, m),
      t.Cartesian3.add(m, c, m)
    const g = h.length
    for (let e = 0; e < g; ++e) {
      const r = h[e]
      t.Cartesian3.add(s, r, r)
      const o = i.cartesianToCartographic(r, W)
      n.project(o, r)
    }
    s = (o = l.fromPoints(h, o)).center
    const y = s.x,
      v = s.y,
      C = s.z
    return (s.x = C), (s.y = y), (s.z = v), o
  }),
    (l.isOccluded = function (e, t) {
      return !t.isBoundingSphereVisible(e)
    }),
    (l.equals = function (e, n) {
      return (
        e === n ||
        (r.defined(e) &&
          r.defined(n) &&
          t.Cartesian3.equals(e.center, n.center) &&
          e.radius === n.radius)
      )
    }),
    (l.prototype.intersectPlane = function (e) {
      return l.intersectPlane(this, e)
    }),
    (l.prototype.distanceSquaredTo = function (e) {
      return l.distanceSquaredTo(this, e)
    }),
    (l.prototype.computePlaneDistances = function (e, t, n) {
      return l.computePlaneDistances(this, e, t, n)
    }),
    (l.prototype.isOccluded = function (e) {
      return l.isOccluded(this, e)
    }),
    (l.prototype.equals = function (e) {
      return l.equals(this, e)
    }),
    (l.prototype.clone = function (e) {
      return l.clone(this, e)
    }),
    (l.prototype.volume = function () {
      const e = this.radius
      return x * e * e * e
    })
  const J = {
      requestFullscreen: void 0,
      exitFullscreen: void 0,
      fullscreenEnabled: void 0,
      fullscreenElement: void 0,
      fullscreenchange: void 0,
      fullscreenerror: void 0,
    },
    X = {}
  let K, ee, te, ne, re, oe, ie, se, ae, ue, ce, le, de, fe, pe, he, me, ge
  function ye(e) {
    const t = e.split('.')
    for (let e = 0, n = t.length; e < n; ++e) t[e] = parseInt(t[e], 10)
    return t
  }
  function ve() {
    if (!r.defined(ee) && ((ee = !1), !be())) {
      const e = / Chrome\/([\.0-9]+)/.exec(K.userAgent)
      null !== e && ((ee = !0), (te = ye(e[1])))
    }
    return ee
  }
  function Ce() {
    if (!r.defined(ne) && ((ne = !1), !ve() && !be() && / Safari\/[\.0-9]+/.test(K.userAgent))) {
      const e = / Version\/([\.0-9]+)/.exec(K.userAgent)
      null !== e && ((ne = !0), (re = ye(e[1])))
    }
    return ne
  }
  function _e() {
    if (!r.defined(oe)) {
      oe = !1
      const e = / AppleWebKit\/([\.0-9]+)(\+?)/.exec(K.userAgent)
      null !== e && ((oe = !0), (ie = ye(e[1])), (ie.isNightly = !!e[2]))
    }
    return oe
  }
  function we() {
    if (!r.defined(se)) {
      let e
      ;(se = !1),
        'Microsoft Internet Explorer' === K.appName
          ? ((e = /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(K.userAgent)),
            null !== e && ((se = !0), (ae = ye(e[1]))))
          : 'Netscape' === K.appName &&
            ((e = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(K.userAgent)),
            null !== e && ((se = !0), (ae = ye(e[1]))))
    }
    return se
  }
  function be() {
    if (!r.defined(ue)) {
      ue = !1
      const e = / Edge\/([\.0-9]+)/.exec(K.userAgent)
      null !== e && ((ue = !0), (ce = ye(e[1])))
    }
    return ue
  }
  function xe() {
    if (!r.defined(le)) {
      le = !1
      const e = /Firefox\/([\.0-9]+)/.exec(K.userAgent)
      null !== e && ((le = !0), (de = ye(e[1])))
    }
    return le
  }
  function Se() {
    if (!r.defined(ge)) {
      const e = document.createElement('canvas')
      e.setAttribute('style', 'image-rendering: -moz-crisp-edges;image-rendering: pixelated;')
      const t = e.style.imageRendering
      ;(ge = r.defined(t) && '' !== t), ge && (me = t)
    }
    return ge
  }
  function Ae() {
    return Ae._result
  }
  Object.defineProperties(X, {
    element: {
      get: function () {
        if (X.supportsFullscreen()) return document[J.fullscreenElement]
      },
    },
    changeEventName: {
      get: function () {
        if (X.supportsFullscreen()) return J.fullscreenchange
      },
    },
    errorEventName: {
      get: function () {
        if (X.supportsFullscreen()) return J.fullscreenerror
      },
    },
    enabled: {
      get: function () {
        if (X.supportsFullscreen()) return document[J.fullscreenEnabled]
      },
    },
    fullscreen: {
      get: function () {
        if (X.supportsFullscreen()) return null !== X.element
      },
    },
  }),
    (X.supportsFullscreen = function () {
      if (r.defined(G)) return G
      G = !1
      const e = document.body
      if ('function' == typeof e.requestFullscreen)
        return (
          (J.requestFullscreen = 'requestFullscreen'),
          (J.exitFullscreen = 'exitFullscreen'),
          (J.fullscreenEnabled = 'fullscreenEnabled'),
          (J.fullscreenElement = 'fullscreenElement'),
          (J.fullscreenchange = 'fullscreenchange'),
          (J.fullscreenerror = 'fullscreenerror'),
          (G = !0),
          G
        )
      const t = ['webkit', 'moz', 'o', 'ms', 'khtml']
      let n
      for (let r = 0, o = t.length; r < o; ++r) {
        const o = t[r]
        ;(n = `${o}RequestFullscreen`),
          'function' == typeof e[n]
            ? ((J.requestFullscreen = n), (G = !0))
            : ((n = `${o}RequestFullScreen`),
              'function' == typeof e[n] && ((J.requestFullscreen = n), (G = !0))),
          (n = `${o}ExitFullscreen`),
          'function' == typeof document[n]
            ? (J.exitFullscreen = n)
            : ((n = `${o}CancelFullScreen`),
              'function' == typeof document[n] && (J.exitFullscreen = n)),
          (n = `${o}FullscreenEnabled`),
          void 0 !== document[n]
            ? (J.fullscreenEnabled = n)
            : ((n = `${o}FullScreenEnabled`), void 0 !== document[n] && (J.fullscreenEnabled = n)),
          (n = `${o}FullscreenElement`),
          void 0 !== document[n]
            ? (J.fullscreenElement = n)
            : ((n = `${o}FullScreenElement`), void 0 !== document[n] && (J.fullscreenElement = n)),
          (n = `${o}fullscreenchange`),
          void 0 !== document[`on${n}`] &&
            ('ms' === o && (n = 'MSFullscreenChange'), (J.fullscreenchange = n)),
          (n = `${o}fullscreenerror`),
          void 0 !== document[`on${n}`] &&
            ('ms' === o && (n = 'MSFullscreenError'), (J.fullscreenerror = n))
      }
      return G
    }),
    (X.requestFullscreen = function (e, t) {
      X.supportsFullscreen() && e[J.requestFullscreen]({ vrDisplay: t })
    }),
    (X.exitFullscreen = function () {
      X.supportsFullscreen() && document[J.exitFullscreen]()
    }),
    (X._names = J),
    (K = 'undefined' != typeof navigator ? navigator : {}),
    (Ae._promise = void 0),
    (Ae._result = void 0),
    (Ae.initialize = function () {
      if (r.defined(Ae._promise)) return Ae._promise
      const e = Z()
      if (((Ae._promise = e.promise), be()))
        return (Ae._result = !1), e.resolve(Ae._result), e.promise
      const t = new Image()
      return (
        (t.onload = function () {
          ;(Ae._result = t.width > 0 && t.height > 0), e.resolve(Ae._result)
        }),
        (t.onerror = function () {
          ;(Ae._result = !1), e.resolve(Ae._result)
        }),
        (t.src = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA'),
        e.promise
      )
    }),
    Object.defineProperties(Ae, {
      initialized: {
        get: function () {
          return r.defined(Ae._result)
        },
      },
    })
  const Ee = []
  'undefined' != typeof ArrayBuffer &&
    (Ee.push(
      Int8Array,
      Uint8Array,
      Int16Array,
      Uint16Array,
      Int32Array,
      Uint32Array,
      Float32Array,
      Float64Array
    ),
    'undefined' != typeof Uint8ClampedArray && Ee.push(Uint8ClampedArray),
    'undefined' != typeof Uint8ClampedArray && Ee.push(Uint8ClampedArray),
    'undefined' != typeof BigInt64Array && Ee.push(BigInt64Array),
    'undefined' != typeof BigUint64Array && Ee.push(BigUint64Array))
  const Oe = {
    isChrome: ve,
    chromeVersion: function () {
      return ve() && te
    },
    isSafari: Ce,
    safariVersion: function () {
      return Ce() && re
    },
    isWebkit: _e,
    webkitVersion: function () {
      return _e() && ie
    },
    isInternetExplorer: we,
    internetExplorerVersion: function () {
      return we() && ae
    },
    isEdge: be,
    edgeVersion: function () {
      return be() && ce
    },
    isFirefox: xe,
    firefoxVersion: function () {
      return xe() && de
    },
    isWindows: function () {
      return r.defined(fe) || (fe = /Windows/i.test(K.appVersion)), fe
    },
    isIPadOrIOS: function () {
      return (
        r.defined(pe) ||
          (pe =
            'iPhone' === navigator.platform ||
            'iPod' === navigator.platform ||
            'iPad' === navigator.platform),
        pe
      )
    },
    hardwareConcurrency: r.defaultValue(K.hardwareConcurrency, 3),
    supportsPointerEvents: function () {
      return (
        r.defined(he) ||
          (he =
            !xe() &&
            'undefined' != typeof PointerEvent &&
            (!r.defined(K.pointerEnabled) || K.pointerEnabled)),
        he
      )
    },
    supportsImageRenderingPixelated: Se,
    supportsWebP: Ae,
    imageRenderingValue: function () {
      return Se() ? me : void 0
    },
    typedArrayTypes: Ee,
  }
  function Ie(e, t, n, o) {
    ;(this.x = r.defaultValue(e, 0)),
      (this.y = r.defaultValue(t, 0)),
      (this.z = r.defaultValue(n, 0)),
      (this.w = r.defaultValue(o, 0))
  }
  ;(Oe.supportsBasis = function (e) {
    return Oe.supportsWebAssembly() && e.context.supportsBasis
  }),
    (Oe.supportsFullscreen = function () {
      return X.supportsFullscreen()
    }),
    (Oe.supportsTypedArrays = function () {
      return 'undefined' != typeof ArrayBuffer
    }),
    (Oe.supportsBigInt64Array = function () {
      return 'undefined' != typeof BigInt64Array
    }),
    (Oe.supportsBigUint64Array = function () {
      return 'undefined' != typeof BigUint64Array
    }),
    (Oe.supportsBigInt = function () {
      return 'undefined' != typeof BigInt
    }),
    (Oe.supportsWebWorkers = function () {
      return 'undefined' != typeof Worker
    }),
    (Oe.supportsWebAssembly = function () {
      return 'undefined' != typeof WebAssembly && !Oe.isEdge()
    })
  let Pe = new t.Cartesian3()
  Ie.fromAxisAngle = function (e, n, o) {
    const i = n / 2,
      s = Math.sin(i)
    Pe = t.Cartesian3.normalize(e, Pe)
    const a = Pe.x * s,
      u = Pe.y * s,
      c = Pe.z * s,
      l = Math.cos(i)
    return r.defined(o) ? ((o.x = a), (o.y = u), (o.z = c), (o.w = l), o) : new Ie(a, u, c, l)
  }
  const Re = [1, 2, 0],
    Te = new Array(3)
  Ie.fromRotationMatrix = function (e, n) {
    let o, i, s, a, u
    const c = e[t.Matrix3.COLUMN0ROW0],
      l = e[t.Matrix3.COLUMN1ROW1],
      d = e[t.Matrix3.COLUMN2ROW2],
      f = c + l + d
    if (f > 0)
      (o = Math.sqrt(f + 1)),
        (u = 0.5 * o),
        (o = 0.5 / o),
        (i = (e[t.Matrix3.COLUMN1ROW2] - e[t.Matrix3.COLUMN2ROW1]) * o),
        (s = (e[t.Matrix3.COLUMN2ROW0] - e[t.Matrix3.COLUMN0ROW2]) * o),
        (a = (e[t.Matrix3.COLUMN0ROW1] - e[t.Matrix3.COLUMN1ROW0]) * o)
    else {
      const n = Re
      let r = 0
      l > c && (r = 1), d > c && d > l && (r = 2)
      const f = n[r],
        p = n[f]
      o = Math.sqrt(
        e[t.Matrix3.getElementIndex(r, r)] -
          e[t.Matrix3.getElementIndex(f, f)] -
          e[t.Matrix3.getElementIndex(p, p)] +
          1
      )
      const h = Te
      ;(h[r] = 0.5 * o),
        (o = 0.5 / o),
        (u = (e[t.Matrix3.getElementIndex(p, f)] - e[t.Matrix3.getElementIndex(f, p)]) * o),
        (h[f] = (e[t.Matrix3.getElementIndex(f, r)] + e[t.Matrix3.getElementIndex(r, f)]) * o),
        (h[p] = (e[t.Matrix3.getElementIndex(p, r)] + e[t.Matrix3.getElementIndex(r, p)]) * o),
        (i = -h[0]),
        (s = -h[1]),
        (a = -h[2])
    }
    return r.defined(n) ? ((n.x = i), (n.y = s), (n.z = a), (n.w = u), n) : new Ie(i, s, a, u)
  }
  const qe = new Ie()
  let ze = new Ie(),
    Me = new Ie(),
    De = new Ie()
  Ie.fromHeadingPitchRoll = function (e, n) {
    return (
      (De = Ie.fromAxisAngle(t.Cartesian3.UNIT_X, e.roll, qe)),
      (Me = Ie.fromAxisAngle(t.Cartesian3.UNIT_Y, -e.pitch, n)),
      (n = Ie.multiply(Me, De, Me)),
      (ze = Ie.fromAxisAngle(t.Cartesian3.UNIT_Z, -e.heading, qe)),
      Ie.multiply(ze, n, n)
    )
  }
  const Ue = new t.Cartesian3(),
    ke = new t.Cartesian3(),
    Fe = new Ie(),
    Ne = new Ie(),
    je = new Ie()
  ;(Ie.packedLength = 4),
    (Ie.pack = function (e, t, n) {
      return (
        (n = r.defaultValue(n, 0)), (t[n++] = e.x), (t[n++] = e.y), (t[n++] = e.z), (t[n] = e.w), t
      )
    }),
    (Ie.unpack = function (e, t, n) {
      return (
        (t = r.defaultValue(t, 0)),
        r.defined(n) || (n = new Ie()),
        (n.x = e[t]),
        (n.y = e[t + 1]),
        (n.z = e[t + 2]),
        (n.w = e[t + 3]),
        n
      )
    }),
    (Ie.packedInterpolationLength = 3),
    (Ie.convertPackedArrayForInterpolation = function (e, t, n, o) {
      Ie.unpack(e, 4 * n, je), Ie.conjugate(je, je)
      for (let i = 0, s = n - t + 1; i < s; i++) {
        const n = 3 * i
        Ie.unpack(e, 4 * (t + i), Fe),
          Ie.multiply(Fe, je, Fe),
          Fe.w < 0 && Ie.negate(Fe, Fe),
          Ie.computeAxis(Fe, Ue)
        const s = Ie.computeAngle(Fe)
        r.defined(o) || (o = []), (o[n] = Ue.x * s), (o[n + 1] = Ue.y * s), (o[n + 2] = Ue.z * s)
      }
    }),
    (Ie.unpackInterpolationResult = function (e, n, o, i, s) {
      r.defined(s) || (s = new Ie()), t.Cartesian3.fromArray(e, 0, ke)
      const a = t.Cartesian3.magnitude(ke)
      return (
        Ie.unpack(n, 4 * i, Ne),
        0 === a ? Ie.clone(Ie.IDENTITY, Fe) : Ie.fromAxisAngle(ke, a, Fe),
        Ie.multiply(Fe, Ne, s)
      )
    }),
    (Ie.clone = function (e, t) {
      if (r.defined(e))
        return r.defined(t)
          ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), (t.w = e.w), t)
          : new Ie(e.x, e.y, e.z, e.w)
    }),
    (Ie.conjugate = function (e, t) {
      return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), (t.w = e.w), t
    }),
    (Ie.magnitudeSquared = function (e) {
      return e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w
    }),
    (Ie.magnitude = function (e) {
      return Math.sqrt(Ie.magnitudeSquared(e))
    }),
    (Ie.normalize = function (e, t) {
      const n = 1 / Ie.magnitude(e),
        r = e.x * n,
        o = e.y * n,
        i = e.z * n,
        s = e.w * n
      return (t.x = r), (t.y = o), (t.z = i), (t.w = s), t
    }),
    (Ie.inverse = function (e, t) {
      const n = Ie.magnitudeSquared(e)
      return (t = Ie.conjugate(e, t)), Ie.multiplyByScalar(t, 1 / n, t)
    }),
    (Ie.add = function (e, t, n) {
      return (n.x = e.x + t.x), (n.y = e.y + t.y), (n.z = e.z + t.z), (n.w = e.w + t.w), n
    }),
    (Ie.subtract = function (e, t, n) {
      return (n.x = e.x - t.x), (n.y = e.y - t.y), (n.z = e.z - t.z), (n.w = e.w - t.w), n
    }),
    (Ie.negate = function (e, t) {
      return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), (t.w = -e.w), t
    }),
    (Ie.dot = function (e, t) {
      return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w
    }),
    (Ie.multiply = function (e, t, n) {
      const r = e.x,
        o = e.y,
        i = e.z,
        s = e.w,
        a = t.x,
        u = t.y,
        c = t.z,
        l = t.w,
        d = s * a + r * l + o * c - i * u,
        f = s * u - r * c + o * l + i * a,
        p = s * c + r * u - o * a + i * l,
        h = s * l - r * a - o * u - i * c
      return (n.x = d), (n.y = f), (n.z = p), (n.w = h), n
    }),
    (Ie.multiplyByScalar = function (e, t, n) {
      return (n.x = e.x * t), (n.y = e.y * t), (n.z = e.z * t), (n.w = e.w * t), n
    }),
    (Ie.divideByScalar = function (e, t, n) {
      return (n.x = e.x / t), (n.y = e.y / t), (n.z = e.z / t), (n.w = e.w / t), n
    }),
    (Ie.computeAxis = function (e, t) {
      const n = e.w
      if (Math.abs(n - 1) < o.CesiumMath.EPSILON6) return (t.x = t.y = t.z = 0), t
      const r = 1 / Math.sqrt(1 - n * n)
      return (t.x = e.x * r), (t.y = e.y * r), (t.z = e.z * r), t
    }),
    (Ie.computeAngle = function (e) {
      return Math.abs(e.w - 1) < o.CesiumMath.EPSILON6 ? 0 : 2 * Math.acos(e.w)
    })
  let Be = new Ie()
  Ie.lerp = function (e, t, n, r) {
    return (
      (Be = Ie.multiplyByScalar(t, n, Be)), (r = Ie.multiplyByScalar(e, 1 - n, r)), Ie.add(Be, r, r)
    )
  }
  let Ve = new Ie(),
    Le = new Ie(),
    Qe = new Ie()
  ;(Ie.slerp = function (e, t, n, r) {
    let i = Ie.dot(e, t),
      s = t
    if ((i < 0 && ((i = -i), (s = Ve = Ie.negate(t, Ve))), 1 - i < o.CesiumMath.EPSILON6))
      return Ie.lerp(e, s, n, r)
    const a = Math.acos(i)
    return (
      (Le = Ie.multiplyByScalar(e, Math.sin((1 - n) * a), Le)),
      (Qe = Ie.multiplyByScalar(s, Math.sin(n * a), Qe)),
      (r = Ie.add(Le, Qe, r)),
      Ie.multiplyByScalar(r, 1 / Math.sin(a), r)
    )
  }),
    (Ie.log = function (e, n) {
      const r = o.CesiumMath.acosClamped(e.w)
      let i = 0
      return 0 !== r && (i = r / Math.sin(r)), t.Cartesian3.multiplyByScalar(e, i, n)
    }),
    (Ie.exp = function (e, n) {
      const r = t.Cartesian3.magnitude(e)
      let o = 0
      return (
        0 !== r && (o = Math.sin(r) / r),
        (n.x = e.x * o),
        (n.y = e.y * o),
        (n.z = e.z * o),
        (n.w = Math.cos(r)),
        n
      )
    })
  const $e = new t.Cartesian3(),
    We = new t.Cartesian3(),
    He = new Ie(),
    Ye = new Ie()
  ;(Ie.computeInnerQuadrangle = function (e, n, r, o) {
    const i = Ie.conjugate(n, He)
    Ie.multiply(i, r, Ye)
    const s = Ie.log(Ye, $e)
    Ie.multiply(i, e, Ye)
    const a = Ie.log(Ye, We)
    return (
      t.Cartesian3.add(s, a, s),
      t.Cartesian3.multiplyByScalar(s, 0.25, s),
      t.Cartesian3.negate(s, s),
      Ie.exp(s, He),
      Ie.multiply(n, He, o)
    )
  }),
    (Ie.squad = function (e, t, n, r, o, i) {
      const s = Ie.slerp(e, t, o, He),
        a = Ie.slerp(n, r, o, Ye)
      return Ie.slerp(s, a, 2 * o * (1 - o), i)
    })
  const Ze = new Ie(),
    Ge = 1.9011074535173003,
    Je = Oe.supportsTypedArrays() ? new Float32Array(8) : [],
    Xe = Oe.supportsTypedArrays() ? new Float32Array(8) : [],
    Ke = Oe.supportsTypedArrays() ? new Float32Array(8) : [],
    et = Oe.supportsTypedArrays() ? new Float32Array(8) : []
  for (let e = 0; e < 7; ++e) {
    const t = e + 1,
      n = 2 * t + 1
    ;(Je[e] = 1 / (t * n)), (Xe[e] = t / n)
  }
  function tt(e, t, n) {
    let r,
      o,
      i = 0,
      s = e.length - 1
    for (; i <= s; )
      if (((r = ~~((i + s) / 2)), (o = n(e[r], t)), o < 0)) i = r + 1
      else {
        if (!(o > 0)) return r
        s = r - 1
      }
    return ~(s + 1)
  }
  function nt(e, t, n, r, o) {
    ;(this.xPoleWander = e),
      (this.yPoleWander = t),
      (this.xPoleOffset = n),
      (this.yPoleOffset = r),
      (this.ut1MinusUtc = o)
  }
  function rt(e, t, n, r, o, i, s, a) {
    ;(this.year = e),
      (this.month = t),
      (this.day = n),
      (this.hour = r),
      (this.minute = o),
      (this.second = i),
      (this.millisecond = s),
      (this.isLeapSecond = a)
  }
  function ot(e) {
    return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0
  }
  function it(e, t) {
    ;(this.julianDate = e), (this.offset = t)
  }
  ;(Je[7] = Ge / 136),
    (Xe[7] = (8 * Ge) / 17),
    (Ie.fastSlerp = function (e, t, n, r) {
      let o,
        i = Ie.dot(e, t)
      i >= 0 ? (o = 1) : ((o = -1), (i = -i))
      const s = i - 1,
        a = 1 - n,
        u = n * n,
        c = a * a
      for (let e = 7; e >= 0; --e)
        (Ke[e] = (Je[e] * u - Xe[e]) * s), (et[e] = (Je[e] * c - Xe[e]) * s)
      const l =
          o *
          n *
          (1 +
            Ke[0] *
              (1 +
                Ke[1] *
                  (1 +
                    Ke[2] * (1 + Ke[3] * (1 + Ke[4] * (1 + Ke[5] * (1 + Ke[6] * (1 + Ke[7])))))))),
        d =
          a *
          (1 +
            et[0] *
              (1 +
                et[1] *
                  (1 +
                    et[2] * (1 + et[3] * (1 + et[4] * (1 + et[5] * (1 + et[6] * (1 + et[7])))))))),
        f = Ie.multiplyByScalar(e, d, Ze)
      return Ie.multiplyByScalar(t, l, r), Ie.add(f, r, r)
    }),
    (Ie.fastSquad = function (e, t, n, r, o, i) {
      const s = Ie.fastSlerp(e, t, o, He),
        a = Ie.fastSlerp(n, r, o, Ye)
      return Ie.fastSlerp(s, a, 2 * o * (1 - o), i)
    }),
    (Ie.equals = function (e, t) {
      return (
        e === t ||
        (r.defined(e) && r.defined(t) && e.x === t.x && e.y === t.y && e.z === t.z && e.w === t.w)
      )
    }),
    (Ie.equalsEpsilon = function (e, t, n) {
      return (
        (n = r.defaultValue(n, 0)),
        e === t ||
          (r.defined(e) &&
            r.defined(t) &&
            Math.abs(e.x - t.x) <= n &&
            Math.abs(e.y - t.y) <= n &&
            Math.abs(e.z - t.z) <= n &&
            Math.abs(e.w - t.w) <= n)
      )
    }),
    (Ie.ZERO = Object.freeze(new Ie(0, 0, 0, 0))),
    (Ie.IDENTITY = Object.freeze(new Ie(0, 0, 0, 1))),
    (Ie.prototype.clone = function (e) {
      return Ie.clone(this, e)
    }),
    (Ie.prototype.equals = function (e) {
      return Ie.equals(this, e)
    }),
    (Ie.prototype.equalsEpsilon = function (e, t) {
      return Ie.equalsEpsilon(this, e, t)
    }),
    (Ie.prototype.toString = function () {
      return `(${this.x}, ${this.y}, ${this.z}, ${this.w})`
    })
  var st = Object.freeze({
    SECONDS_PER_MILLISECOND: 0.001,
    SECONDS_PER_MINUTE: 60,
    MINUTES_PER_HOUR: 60,
    HOURS_PER_DAY: 24,
    SECONDS_PER_HOUR: 3600,
    MINUTES_PER_DAY: 1440,
    SECONDS_PER_DAY: 86400,
    DAYS_PER_JULIAN_CENTURY: 36525,
    PICOSECOND: 1e-9,
    MODIFIED_JULIAN_DATE_DIFFERENCE: 2400000.5,
  })
  var at = Object.freeze({ UTC: 0, TAI: 1 })
  const ut = new rt(),
    ct = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  function lt(e, t) {
    return At.compare(e.julianDate, t.julianDate)
  }
  const dt = new it()
  function ft(e) {
    dt.julianDate = e
    const t = At.leapSeconds
    let n = tt(t, dt, lt)
    n < 0 && (n = ~n), n >= t.length && (n = t.length - 1)
    let r = t[n].offset
    if (n > 0) {
      At.secondsDifference(t[n].julianDate, e) > r && (n--, (r = t[n].offset))
    }
    At.addSeconds(e, r, e)
  }
  function pt(e, t) {
    dt.julianDate = e
    const n = At.leapSeconds
    let r = tt(n, dt, lt)
    if ((r < 0 && (r = ~r), 0 === r)) return At.addSeconds(e, -n[0].offset, t)
    if (r >= n.length) return At.addSeconds(e, -n[r - 1].offset, t)
    const o = At.secondsDifference(n[r].julianDate, e)
    return 0 === o
      ? At.addSeconds(e, -n[r].offset, t)
      : o <= 1
      ? void 0
      : At.addSeconds(e, -n[--r].offset, t)
  }
  function ht(e, t, n) {
    const r = (t / st.SECONDS_PER_DAY) | 0
    return (
      (e += r),
      (t -= st.SECONDS_PER_DAY * r) < 0 && (e--, (t += st.SECONDS_PER_DAY)),
      (n.dayNumber = e),
      (n.secondsOfDay = t),
      n
    )
  }
  function mt(e, t, n, r, o, i, s) {
    const a = ((t - 14) / 12) | 0,
      u = e + 4800 + a
    let c =
      (((1461 * u) / 4) | 0) +
      (((367 * (t - 2 - 12 * a)) / 12) | 0) -
      (((3 * (((u + 100) / 100) | 0)) / 4) | 0) +
      n -
      32075
    ;(r -= 12) < 0 && (r += 24)
    const l =
      i + (r * st.SECONDS_PER_HOUR + o * st.SECONDS_PER_MINUTE + s * st.SECONDS_PER_MILLISECOND)
    return l >= 43200 && (c -= 1), [c, l]
  }
  const gt = /^(\d{4})$/,
    yt = /^(\d{4})-(\d{2})$/,
    vt = /^(\d{4})-?(\d{3})$/,
    Ct = /^(\d{4})-?W(\d{2})-?(\d{1})?$/,
    _t = /^(\d{4})-?(\d{2})-?(\d{2})$/,
    wt = /([Z+\-])?(\d{2})?:?(\d{2})?$/,
    bt = /^(\d{2})(\.\d+)?/.source + wt.source,
    xt = /^(\d{2}):?(\d{2})(\.\d+)?/.source + wt.source,
    St = /^(\d{2}):?(\d{2}):?(\d{2})(\.\d+)?/.source + wt.source
  function At(e, t, n) {
    ;(this.dayNumber = void 0),
      (this.secondsOfDay = void 0),
      (e = r.defaultValue(e, 0)),
      (t = r.defaultValue(t, 0)),
      (n = r.defaultValue(n, at.UTC))
    const o = 0 | e
    ht(o, (t += (e - o) * st.SECONDS_PER_DAY), this), n === at.UTC && ft(this)
  }
  ;(At.fromGregorianDate = function (e, t) {
    const n = mt(e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond)
    return r.defined(t) ? (ht(n[0], n[1], t), ft(t), t) : new At(n[0], n[1], at.UTC)
  }),
    (At.fromDate = function (e, t) {
      const n = mt(
        e.getUTCFullYear(),
        e.getUTCMonth() + 1,
        e.getUTCDate(),
        e.getUTCHours(),
        e.getUTCMinutes(),
        e.getUTCSeconds(),
        e.getUTCMilliseconds()
      )
      return r.defined(t) ? (ht(n[0], n[1], t), ft(t), t) : new At(n[0], n[1], at.UTC)
    }),
    (At.fromIso8601 = function (e, t) {
      let n,
        o = (e = e.replace(',', '.')).split('T'),
        i = 1,
        s = 1,
        a = 0,
        u = 0,
        c = 0,
        l = 0
      const d = o[0],
        f = o[1]
      let p, h, m
      if (((o = d.match(_t)), null !== o)) (n = +o[1]), (i = +o[2]), (s = +o[3])
      else if (((o = d.match(yt)), null !== o)) (n = +o[1]), (i = +o[2])
      else if (((o = d.match(gt)), null !== o)) n = +o[1]
      else {
        let e
        if (((o = d.match(vt)), null !== o)) (n = +o[1]), (e = +o[2]), (h = ot(n))
        else if (((o = d.match(Ct)), null !== o)) {
          n = +o[1]
          e = 7 * +o[2] + (+o[3] || 0) - new Date(Date.UTC(n, 0, 4)).getUTCDay() - 3
        }
        ;(p = new Date(Date.UTC(n, 0, 1))),
          p.setUTCDate(e),
          (i = p.getUTCMonth() + 1),
          (s = p.getUTCDate())
      }
      if (((h = ot(n)), r.defined(f))) {
        ;(o = f.match(St)),
          null !== o
            ? ((a = +o[1]), (u = +o[2]), (c = +o[3]), (l = 1e3 * +(o[4] || 0)), (m = 5))
            : ((o = f.match(xt)),
              null !== o
                ? ((a = +o[1]), (u = +o[2]), (c = 60 * +(o[3] || 0)), (m = 4))
                : ((o = f.match(bt)),
                  null !== o && ((a = +o[1]), (u = 60 * +(o[2] || 0)), (m = 3))))
        const e = o[m],
          t = +o[m + 1],
          r = +(o[m + 2] || 0)
        switch (e) {
          case '+':
            ;(a -= t), (u -= r)
            break
          case '-':
            ;(a += t), (u += r)
            break
          case 'Z':
            break
          default:
            u += new Date(Date.UTC(n, i - 1, s, a, u)).getTimezoneOffset()
        }
      }
      const g = 60 === c
      for (g && c--; u >= 60; ) (u -= 60), a++
      for (; a >= 24; ) (a -= 24), s++
      for (p = h && 2 === i ? 29 : ct[i - 1]; s > p; )
        (s -= p), i++, i > 12 && ((i -= 12), n++), (p = h && 2 === i ? 29 : ct[i - 1])
      for (; u < 0; ) (u += 60), a--
      for (; a < 0; ) (a += 24), s--
      for (; s < 1; ) i--, i < 1 && ((i += 12), n--), (p = h && 2 === i ? 29 : ct[i - 1]), (s += p)
      const y = mt(n, i, s, a, u, c, l)
      return (
        r.defined(t) ? (ht(y[0], y[1], t), ft(t)) : (t = new At(y[0], y[1], at.UTC)),
        g && At.addSeconds(t, 1, t),
        t
      )
    }),
    (At.now = function (e) {
      return At.fromDate(new Date(), e)
    })
  const Et = new At(0, 0, at.TAI)
  ;(At.toGregorianDate = function (e, t) {
    let n = !1,
      o = pt(e, Et)
    r.defined(o) || (At.addSeconds(e, -1, Et), (o = pt(Et, Et)), (n = !0))
    let i = o.dayNumber
    const s = o.secondsOfDay
    s >= 43200 && (i += 1)
    let a = (i + 68569) | 0
    const u = ((4 * a) / 146097) | 0
    a = (a - (((146097 * u + 3) / 4) | 0)) | 0
    const c = ((4e3 * (a + 1)) / 1461001) | 0
    a = (a - (((1461 * c) / 4) | 0) + 31) | 0
    const l = ((80 * a) / 2447) | 0,
      d = (a - (((2447 * l) / 80) | 0)) | 0
    a = (l / 11) | 0
    const f = (l + 2 - 12 * a) | 0,
      p = (100 * (u - 49) + c + a) | 0
    let h = (s / st.SECONDS_PER_HOUR) | 0,
      m = s - h * st.SECONDS_PER_HOUR
    const g = (m / st.SECONDS_PER_MINUTE) | 0
    m -= g * st.SECONDS_PER_MINUTE
    let y = 0 | m
    const v = (m - y) / st.SECONDS_PER_MILLISECOND
    return (
      (h += 12),
      h > 23 && (h -= 24),
      n && (y += 1),
      r.defined(t)
        ? ((t.year = p),
          (t.month = f),
          (t.day = d),
          (t.hour = h),
          (t.minute = g),
          (t.second = y),
          (t.millisecond = v),
          (t.isLeapSecond = n),
          t)
        : new rt(p, f, d, h, g, y, v, n)
    )
  }),
    (At.toDate = function (e) {
      const t = At.toGregorianDate(e, ut)
      let n = t.second
      return (
        t.isLeapSecond && (n -= 1),
        new Date(Date.UTC(t.year, t.month - 1, t.day, t.hour, t.minute, n, t.millisecond))
      )
    }),
    (At.toIso8601 = function (e, t) {
      const n = At.toGregorianDate(e, ut)
      let o = n.year,
        i = n.month,
        s = n.day,
        a = n.hour
      const u = n.minute,
        c = n.second,
        l = n.millisecond
      let d
      return (
        1e4 === o &&
          1 === i &&
          1 === s &&
          0 === a &&
          0 === u &&
          0 === c &&
          0 === l &&
          ((o = 9999), (i = 12), (s = 31), (a = 24)),
        r.defined(t) || 0 === l
          ? r.defined(t) && 0 !== t
            ? ((d = (0.01 * l).toFixed(t).replace('.', '').slice(0, t)),
              `${o.toString().padStart(4, '0')}-${i.toString().padStart(2, '0')}-${s
                .toString()
                .padStart(2, '0')}T${a.toString().padStart(2, '0')}:${u
                .toString()
                .padStart(2, '0')}:${c.toString().padStart(2, '0')}.${d}Z`)
            : `${o.toString().padStart(4, '0')}-${i.toString().padStart(2, '0')}-${s
                .toString()
                .padStart(2, '0')}T${a.toString().padStart(2, '0')}:${u
                .toString()
                .padStart(2, '0')}:${c.toString().padStart(2, '0')}Z`
          : ((d = (0.01 * l).toString().replace('.', '')),
            `${o.toString().padStart(4, '0')}-${i.toString().padStart(2, '0')}-${s
              .toString()
              .padStart(2, '0')}T${a.toString().padStart(2, '0')}:${u
              .toString()
              .padStart(2, '0')}:${c.toString().padStart(2, '0')}.${d}Z`)
      )
    }),
    (At.clone = function (e, t) {
      if (r.defined(e))
        return r.defined(t)
          ? ((t.dayNumber = e.dayNumber), (t.secondsOfDay = e.secondsOfDay), t)
          : new At(e.dayNumber, e.secondsOfDay, at.TAI)
    }),
    (At.compare = function (e, t) {
      const n = e.dayNumber - t.dayNumber
      return 0 !== n ? n : e.secondsOfDay - t.secondsOfDay
    }),
    (At.equals = function (e, t) {
      return (
        e === t ||
        (r.defined(e) &&
          r.defined(t) &&
          e.dayNumber === t.dayNumber &&
          e.secondsOfDay === t.secondsOfDay)
      )
    }),
    (At.equalsEpsilon = function (e, t, n) {
      return (
        (n = r.defaultValue(n, 0)),
        e === t || (r.defined(e) && r.defined(t) && Math.abs(At.secondsDifference(e, t)) <= n)
      )
    }),
    (At.totalDays = function (e) {
      return e.dayNumber + e.secondsOfDay / st.SECONDS_PER_DAY
    }),
    (At.secondsDifference = function (e, t) {
      return (e.dayNumber - t.dayNumber) * st.SECONDS_PER_DAY + (e.secondsOfDay - t.secondsOfDay)
    }),
    (At.daysDifference = function (e, t) {
      return e.dayNumber - t.dayNumber + (e.secondsOfDay - t.secondsOfDay) / st.SECONDS_PER_DAY
    }),
    (At.computeTaiMinusUtc = function (e) {
      dt.julianDate = e
      const t = At.leapSeconds
      let n = tt(t, dt, lt)
      return n < 0 && ((n = ~n), --n, n < 0 && (n = 0)), t[n].offset
    }),
    (At.addSeconds = function (e, t, n) {
      return ht(e.dayNumber, e.secondsOfDay + t, n)
    }),
    (At.addMinutes = function (e, t, n) {
      const r = e.secondsOfDay + t * st.SECONDS_PER_MINUTE
      return ht(e.dayNumber, r, n)
    }),
    (At.addHours = function (e, t, n) {
      const r = e.secondsOfDay + t * st.SECONDS_PER_HOUR
      return ht(e.dayNumber, r, n)
    }),
    (At.addDays = function (e, t, n) {
      return ht(e.dayNumber + t, e.secondsOfDay, n)
    }),
    (At.lessThan = function (e, t) {
      return At.compare(e, t) < 0
    }),
    (At.lessThanOrEquals = function (e, t) {
      return At.compare(e, t) <= 0
    }),
    (At.greaterThan = function (e, t) {
      return At.compare(e, t) > 0
    }),
    (At.greaterThanOrEquals = function (e, t) {
      return At.compare(e, t) >= 0
    }),
    (At.prototype.clone = function (e) {
      return At.clone(this, e)
    }),
    (At.prototype.equals = function (e) {
      return At.equals(this, e)
    }),
    (At.prototype.equalsEpsilon = function (e, t) {
      return At.equalsEpsilon(this, e, t)
    }),
    (At.prototype.toString = function () {
      return At.toIso8601(this)
    }),
    (At.leapSeconds = [
      new it(new At(2441317, 43210, at.TAI), 10),
      new it(new At(2441499, 43211, at.TAI), 11),
      new it(new At(2441683, 43212, at.TAI), 12),
      new it(new At(2442048, 43213, at.TAI), 13),
      new it(new At(2442413, 43214, at.TAI), 14),
      new it(new At(2442778, 43215, at.TAI), 15),
      new it(new At(2443144, 43216, at.TAI), 16),
      new it(new At(2443509, 43217, at.TAI), 17),
      new it(new At(2443874, 43218, at.TAI), 18),
      new it(new At(2444239, 43219, at.TAI), 19),
      new it(new At(2444786, 43220, at.TAI), 20),
      new it(new At(2445151, 43221, at.TAI), 21),
      new it(new At(2445516, 43222, at.TAI), 22),
      new it(new At(2446247, 43223, at.TAI), 23),
      new it(new At(2447161, 43224, at.TAI), 24),
      new it(new At(2447892, 43225, at.TAI), 25),
      new it(new At(2448257, 43226, at.TAI), 26),
      new it(new At(2448804, 43227, at.TAI), 27),
      new it(new At(2449169, 43228, at.TAI), 28),
      new it(new At(2449534, 43229, at.TAI), 29),
      new it(new At(2450083, 43230, at.TAI), 30),
      new it(new At(2450630, 43231, at.TAI), 31),
      new it(new At(2451179, 43232, at.TAI), 32),
      new it(new At(2453736, 43233, at.TAI), 33),
      new it(new At(2454832, 43234, at.TAI), 34),
      new it(new At(2456109, 43235, at.TAI), 35),
      new it(new At(2457204, 43236, at.TAI), 36),
      new it(new At(2457754, 43237, at.TAI), 37),
    ])
  var Ot = i.createCommonjsModule(function (e, t) {
      !(function (n) {
        var r = t && !t.nodeType && t,
          o = e && !e.nodeType && e,
          s = 'object' == typeof i.commonjsGlobal && i.commonjsGlobal
        ;(s.global !== s && s.window !== s && s.self !== s) || (n = s)
        var a,
          u,
          c = 2147483647,
          l = 36,
          d = /^xn--/,
          f = /[^\x20-\x7E]/,
          p = /[\x2E\u3002\uFF0E\uFF61]/g,
          h = {
            'overflow': 'Overflow: input needs wider integers to process',
            'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
            'invalid-input': 'Invalid input',
          },
          m = Math.floor,
          g = String.fromCharCode
        function y(e) {
          throw new RangeError(h[e])
        }
        function v(e, t) {
          for (var n = e.length, r = []; n--; ) r[n] = t(e[n])
          return r
        }
        function C(e, t) {
          var n = e.split('@'),
            r = ''
          return (
            n.length > 1 && ((r = n[0] + '@'), (e = n[1])),
            r + v((e = e.replace(p, '.')).split('.'), t).join('.')
          )
        }
        function _(e) {
          for (var t, n, r = [], o = 0, i = e.length; o < i; )
            (t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < i
              ? 56320 == (64512 & (n = e.charCodeAt(o++)))
                ? r.push(((1023 & t) << 10) + (1023 & n) + 65536)
                : (r.push(t), o--)
              : r.push(t)
          return r
        }
        function w(e) {
          return v(e, function (e) {
            var t = ''
            return (
              e > 65535 &&
                ((t += g((((e -= 65536) >>> 10) & 1023) | 55296)), (e = 56320 | (1023 & e))),
              (t += g(e))
            )
          }).join('')
        }
        function b(e, t) {
          return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
        }
        function x(e, t, n) {
          var r = 0
          for (e = n ? m(e / 700) : e >> 1, e += m(e / t); e > 455; r += l) e = m(e / 35)
          return m(r + (36 * e) / (e + 38))
        }
        function S(e) {
          var t,
            n,
            r,
            o,
            i,
            s,
            a,
            u,
            d,
            f,
            p,
            h = [],
            g = e.length,
            v = 0,
            C = 128,
            _ = 72
          for ((n = e.lastIndexOf('-')) < 0 && (n = 0), r = 0; r < n; ++r)
            e.charCodeAt(r) >= 128 && y('not-basic'), h.push(e.charCodeAt(r))
          for (o = n > 0 ? n + 1 : 0; o < g; ) {
            for (
              i = v, s = 1, a = l;
              o >= g && y('invalid-input'),
                ((u =
                  (p = e.charCodeAt(o++)) - 48 < 10
                    ? p - 22
                    : p - 65 < 26
                    ? p - 65
                    : p - 97 < 26
                    ? p - 97
                    : l) >= l ||
                  u > m((c - v) / s)) &&
                  y('overflow'),
                (v += u * s),
                !(u < (d = a <= _ ? 1 : a >= _ + 26 ? 26 : a - _));
              a += l
            )
              s > m(c / (f = l - d)) && y('overflow'), (s *= f)
            ;(_ = x(v - i, (t = h.length + 1), 0 == i)),
              m(v / t) > c - C && y('overflow'),
              (C += m(v / t)),
              (v %= t),
              h.splice(v++, 0, C)
          }
          return w(h)
        }
        function A(e) {
          var t,
            n,
            r,
            o,
            i,
            s,
            a,
            u,
            d,
            f,
            p,
            h,
            v,
            C,
            w,
            S = []
          for (h = (e = _(e)).length, t = 128, n = 0, i = 72, s = 0; s < h; ++s)
            (p = e[s]) < 128 && S.push(g(p))
          for (r = o = S.length, o && S.push('-'); r < h; ) {
            for (a = c, s = 0; s < h; ++s) (p = e[s]) >= t && p < a && (a = p)
            for (
              a - t > m((c - n) / (v = r + 1)) && y('overflow'), n += (a - t) * v, t = a, s = 0;
              s < h;
              ++s
            )
              if (((p = e[s]) < t && ++n > c && y('overflow'), p == t)) {
                for (u = n, d = l; !(u < (f = d <= i ? 1 : d >= i + 26 ? 26 : d - i)); d += l)
                  (w = u - f), (C = l - f), S.push(g(b(f + (w % C), 0))), (u = m(w / C))
                S.push(g(b(u, 0))), (i = x(n, v, r == o)), (n = 0), ++r
              }
            ++n, ++t
          }
          return S.join('')
        }
        if (
          ((a = {
            version: '1.3.2',
            ucs2: { decode: _, encode: w },
            decode: S,
            encode: A,
            toASCII: function (e) {
              return C(e, function (e) {
                return f.test(e) ? 'xn--' + A(e) : e
              })
            },
            toUnicode: function (e) {
              return C(e, function (e) {
                return d.test(e) ? S(e.slice(4).toLowerCase()) : e
              })
            },
          }),
          r && o)
        )
          if (e.exports == r) o.exports = a
          else for (u in a) a.hasOwnProperty(u) && (r[u] = a[u])
        else n.punycode = a
      })(i.commonjsGlobal)
    }),
    It = i.createCommonjsModule(function (e) {
      /*!
       * URI.js - Mutating URLs
       * IPv6 Support
       *
       * Version: 1.19.11
       *
       * Author: Rodney Rehm
       * Web: http://medialize.github.io/URI.js/
       *
       * Licensed under
       *   MIT License http://www.opensource.org/licenses/mit-license
       *
       */ var t, n
      ;(t = i.commonjsGlobal),
        (n = function (e) {
          var t = e && e.IPv6
          return {
            best: function (e) {
              var t,
                n,
                r = e.toLowerCase().split(':'),
                o = r.length,
                i = 8
              for (
                '' === r[0] && '' === r[1] && '' === r[2]
                  ? (r.shift(), r.shift())
                  : '' === r[0] && '' === r[1]
                  ? r.shift()
                  : '' === r[o - 1] && '' === r[o - 2] && r.pop(),
                  -1 !== r[(o = r.length) - 1].indexOf('.') && (i = 7),
                  t = 0;
                t < o && '' !== r[t];
                t++
              );
              if (t < i) for (r.splice(t, 1, '0000'); r.length < i; ) r.splice(t, 0, '0000')
              for (var s = 0; s < i; s++) {
                n = r[s].split('')
                for (var a = 0; a < 3 && '0' === n[0] && n.length > 1; a++) n.splice(0, 1)
                r[s] = n.join('')
              }
              var u = -1,
                c = 0,
                l = 0,
                d = -1,
                f = !1
              for (s = 0; s < i; s++)
                f
                  ? '0' === r[s]
                    ? (l += 1)
                    : ((f = !1), l > c && ((u = d), (c = l)))
                  : '0' === r[s] && ((f = !0), (d = s), (l = 1))
              l > c && ((u = d), (c = l)), c > 1 && r.splice(u, c, ''), (o = r.length)
              var p = ''
              for ('' === r[0] && (p = ':'), s = 0; s < o && ((p += r[s]), s !== o - 1); s++)
                p += ':'
              return '' === r[o - 1] && (p += ':'), p
            },
            noConflict: function () {
              return e.IPv6 === this && (e.IPv6 = t), this
            },
          }
        }),
        e.exports ? (e.exports = n()) : (t.IPv6 = n(t))
    }),
    Pt = i.createCommonjsModule(function (e) {
      /*!
       * URI.js - Mutating URLs
       * Second Level Domain (SLD) Support
       *
       * Version: 1.19.11
       *
       * Author: Rodney Rehm
       * Web: http://medialize.github.io/URI.js/
       *
       * Licensed under
       *   MIT License http://www.opensource.org/licenses/mit-license
       *
       */ var t, n
      ;(t = i.commonjsGlobal),
        (n = function (e) {
          var t = e && e.SecondLevelDomains,
            n = {
              list: {
                ac: ' com gov mil net org ',
                ae: ' ac co gov mil name net org pro sch ',
                af: ' com edu gov net org ',
                al: ' com edu gov mil net org ',
                ao: ' co ed gv it og pb ',
                ar: ' com edu gob gov int mil net org tur ',
                at: ' ac co gv or ',
                au: ' asn com csiro edu gov id net org ',
                ba: ' co com edu gov mil net org rs unbi unmo unsa untz unze ',
                bb: ' biz co com edu gov info net org store tv ',
                bh: ' biz cc com edu gov info net org ',
                bn: ' com edu gov net org ',
                bo: ' com edu gob gov int mil net org tv ',
                br: ' adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ',
                bs: ' com edu gov net org ',
                bz: ' du et om ov rg ',
                ca: ' ab bc mb nb nf nl ns nt nu on pe qc sk yk ',
                ck: ' biz co edu gen gov info net org ',
                cn: ' ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ',
                co: ' com edu gov mil net nom org ',
                cr: ' ac c co ed fi go or sa ',
                cy: ' ac biz com ekloges gov ltd name net org parliament press pro tm ',
                do: ' art com edu gob gov mil net org sld web ',
                dz: ' art asso com edu gov net org pol ',
                ec: ' com edu fin gov info med mil net org pro ',
                eg: ' com edu eun gov mil name net org sci ',
                er: ' com edu gov ind mil net org rochest w ',
                es: ' com edu gob nom org ',
                et: ' biz com edu gov info name net org ',
                fj: ' ac biz com info mil name net org pro ',
                fk: ' ac co gov net nom org ',
                fr: ' asso com f gouv nom prd presse tm ',
                gg: ' co net org ',
                gh: ' com edu gov mil org ',
                gn: ' ac com gov net org ',
                gr: ' com edu gov mil net org ',
                gt: ' com edu gob ind mil net org ',
                gu: ' com edu gov net org ',
                hk: ' com edu gov idv net org ',
                hu: ' 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sport suli szex tm tozsde utazas video ',
                id: ' ac co go mil net or sch web ',
                il: ' ac co gov idf k12 muni net org ',
                in: ' ac co edu ernet firm gen gov i ind mil net nic org res ',
                iq: ' com edu gov i mil net org ',
                ir: ' ac co dnssec gov i id net org sch ',
                it: ' edu gov ',
                je: ' co net org ',
                jo: ' com edu gov mil name net org sch ',
                jp: ' ac ad co ed go gr lg ne or ',
                ke: ' ac co go info me mobi ne or sc ',
                kh: ' com edu gov mil net org per ',
                ki: ' biz com de edu gov info mob net org tel ',
                km: ' asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ',
                kn: ' edu gov net org ',
                kr: ' ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ',
                kw: ' com edu gov net org ',
                ky: ' com edu gov net org ',
                kz: ' com edu gov mil net org ',
                lb: ' com edu gov net org ',
                lk: ' assn com edu gov grp hotel int ltd net ngo org sch soc web ',
                lr: ' com edu gov net org ',
                lv: ' asn com conf edu gov id mil net org ',
                ly: ' com edu gov id med net org plc sch ',
                ma: ' ac co gov m net org press ',
                mc: ' asso tm ',
                me: ' ac co edu gov its net org priv ',
                mg: ' com edu gov mil nom org prd tm ',
                mk: ' com edu gov inf name net org pro ',
                ml: ' com edu gov net org presse ',
                mn: ' edu gov org ',
                mo: ' com edu gov net org ',
                mt: ' com edu gov net org ',
                mv: ' aero biz com coop edu gov info int mil museum name net org pro ',
                mw: ' ac co com coop edu gov int museum net org ',
                mx: ' com edu gob net org ',
                my: ' com edu gov mil name net org sch ',
                nf: ' arts com firm info net other per rec store web ',
                ng: ' biz com edu gov mil mobi name net org sch ',
                ni: ' ac co com edu gob mil net nom org ',
                np: ' com edu gov mil net org ',
                nr: ' biz com edu gov info net org ',
                om: ' ac biz co com edu gov med mil museum net org pro sch ',
                pe: ' com edu gob mil net nom org sld ',
                ph: ' com edu gov i mil net ngo org ',
                pk: ' biz com edu fam gob gok gon gop gos gov net org web ',
                pl: ' art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ',
                pr: ' ac biz com edu est gov info isla name net org pro prof ',
                ps: ' com edu gov net org plo sec ',
                pw: ' belau co ed go ne or ',
                ro: ' arts com firm info nom nt org rec store tm www ',
                rs: ' ac co edu gov in org ',
                sb: ' com edu gov net org ',
                sc: ' com edu gov net org ',
                sh: ' co com edu gov net nom org ',
                sl: ' com edu gov net org ',
                st: ' co com consulado edu embaixada gov mil net org principe saotome store ',
                sv: ' com edu gob org red ',
                sz: ' ac co org ',
                tr: ' av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ',
                tt: ' aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ',
                tw: ' club com ebiz edu game gov idv mil net org ',
                mu: ' ac co com gov net or org ',
                mz: ' ac co edu gov org ',
                na: ' co com ',
                nz: ' ac co cri geek gen govt health iwi maori mil net org parliament school ',
                pa: ' abo ac com edu gob ing med net nom org sld ',
                pt: ' com edu gov int net nome org publ ',
                py: ' com edu gov mil net org ',
                qa: ' com edu gov mil net org ',
                re: ' asso com nom ',
                ru: ' ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ',
                rw: ' ac co com edu gouv gov int mil net ',
                sa: ' com edu gov med net org pub sch ',
                sd: ' com edu gov info med net org tv ',
                se: ' a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ',
                sg: ' com edu gov idn net org per ',
                sn: ' art com edu gouv org perso univ ',
                sy: ' com edu gov mil net news org ',
                th: ' ac co go in mi net or ',
                tj: ' ac biz co com edu go gov info int mil name net nic org test web ',
                tn: ' agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ',
                tz: ' ac co go ne or ',
                ua: ' biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ',
                ug: ' ac co go ne or org sc ',
                uk: ' ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ',
                us: ' dni fed isa kids nsn ',
                uy: ' com edu gub mil net org ',
                ve: ' co com edu gob info mil net org web ',
                vi: ' co com k12 net org ',
                vn: ' ac biz com edu gov health info int name net org pro ',
                ye: ' co com gov ltd me net org plc ',
                yu: ' ac co edu gov org ',
                za: ' ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ',
                zm: ' ac co com edu gov net org sch ',
                com: 'ar br cn de eu gb gr hu jpn kr no qc ru sa se uk us uy za ',
                net: 'gb jp se uk ',
                org: 'ae',
                de: 'com ',
              },
              has: function (e) {
                var t = e.lastIndexOf('.')
                if (t <= 0 || t >= e.length - 1) return !1
                var r = e.lastIndexOf('.', t - 1)
                if (r <= 0 || r >= t - 1) return !1
                var o = n.list[e.slice(t + 1)]
                return !!o && o.indexOf(' ' + e.slice(r + 1, t) + ' ') >= 0
              },
              is: function (e) {
                var t = e.lastIndexOf('.')
                if (t <= 0 || t >= e.length - 1) return !1
                if (e.lastIndexOf('.', t - 1) >= 0) return !1
                var r = n.list[e.slice(t + 1)]
                return !!r && r.indexOf(' ' + e.slice(0, t) + ' ') >= 0
              },
              get: function (e) {
                var t = e.lastIndexOf('.')
                if (t <= 0 || t >= e.length - 1) return null
                var r = e.lastIndexOf('.', t - 1)
                if (r <= 0 || r >= t - 1) return null
                var o = n.list[e.slice(t + 1)]
                return o
                  ? o.indexOf(' ' + e.slice(r + 1, t) + ' ') < 0
                    ? null
                    : e.slice(r + 1)
                  : null
              },
              noConflict: function () {
                return e.SecondLevelDomains === this && (e.SecondLevelDomains = t), this
              },
            }
          return n
        }),
        e.exports ? (e.exports = n()) : (t.SecondLevelDomains = n(t))
    }),
    Rt = i.createCommonjsModule(function (e) {
      /*!
       * URI.js - Mutating URLs
       *
       * Version: 1.19.11
       *
       * Author: Rodney Rehm
       * Web: http://medialize.github.io/URI.js/
       *
       * Licensed under
       *   MIT License http://www.opensource.org/licenses/mit-license
       *
       */ var t, n
      ;(t = i.commonjsGlobal),
        (n = function (e, t, n, r) {
          var o = r && r.URI
          function i(e, t) {
            var n = arguments.length >= 1,
              r = arguments.length >= 2
            if (!(this instanceof i)) return n ? (r ? new i(e, t) : new i(e)) : new i()
            if (void 0 === e) {
              if (n) throw new TypeError('undefined is not a valid argument for URI')
              e = 'undefined' != typeof location ? location.href + '' : ''
            }
            if (null === e && n) throw new TypeError('null is not a valid argument for URI')
            return this.href(e), void 0 !== t ? this.absoluteTo(t) : this
          }
          i.version = '1.19.11'
          var s = i.prototype,
            a = Object.prototype.hasOwnProperty
          function u(e) {
            return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1')
          }
          function c(e) {
            return void 0 === e
              ? 'Undefined'
              : String(Object.prototype.toString.call(e)).slice(8, -1)
          }
          function l(e) {
            return 'Array' === c(e)
          }
          function d(e, t) {
            var n,
              r,
              o = {}
            if ('RegExp' === c(t)) o = null
            else if (l(t)) for (n = 0, r = t.length; n < r; n++) o[t[n]] = !0
            else o[t] = !0
            for (n = 0, r = e.length; n < r; n++)
              ((o && void 0 !== o[e[n]]) || (!o && t.test(e[n]))) && (e.splice(n, 1), r--, n--)
            return e
          }
          function f(e, t) {
            var n, r
            if (l(t)) {
              for (n = 0, r = t.length; n < r; n++) if (!f(e, t[n])) return !1
              return !0
            }
            var o = c(t)
            for (n = 0, r = e.length; n < r; n++)
              if ('RegExp' === o) {
                if ('string' == typeof e[n] && e[n].match(t)) return !0
              } else if (e[n] === t) return !0
            return !1
          }
          function p(e, t) {
            if (!l(e) || !l(t)) return !1
            if (e.length !== t.length) return !1
            e.sort(), t.sort()
            for (var n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1
            return !0
          }
          function h(e) {
            return e.replace(/^\/+|\/+$/g, '')
          }
          function m(e) {
            return escape(e)
          }
          function g(e) {
            return encodeURIComponent(e)
              .replace(/[!'()*]/g, m)
              .replace(/\*/g, '%2A')
          }
          ;(i._parts = function () {
            return {
              protocol: null,
              username: null,
              password: null,
              hostname: null,
              urn: null,
              port: null,
              path: null,
              query: null,
              fragment: null,
              preventInvalidHostname: i.preventInvalidHostname,
              duplicateQueryParameters: i.duplicateQueryParameters,
              escapeQuerySpace: i.escapeQuerySpace,
            }
          }),
            (i.preventInvalidHostname = !1),
            (i.duplicateQueryParameters = !1),
            (i.escapeQuerySpace = !0),
            (i.protocol_expression = /^[a-z][a-z0-9.+-]*$/i),
            (i.idn_expression = /[^a-z0-9\._-]/i),
            (i.punycode_expression = /(xn--)/i),
            (i.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/),
            (i.ip6_expression =
              /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/),
            (i.find_uri_expression =
              /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi),
            (i.findUri = {
              start: /\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,
              end: /[\s\r\n]|$/,
              trim: /[`!()\[\]{};:'".,<>?«»“”„‘’]+$/,
              parens: /(\([^\)]*\)|\[[^\]]*\]|\{[^}]*\}|<[^>]*>)/g,
            }),
            (i.leading_whitespace_expression =
              /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/),
            (i.ascii_tab_whitespace = /[\u0009\u000A\u000D]+/g),
            (i.defaultPorts = {
              http: '80',
              https: '443',
              ftp: '21',
              gopher: '70',
              ws: '80',
              wss: '443',
            }),
            (i.hostProtocols = ['http', 'https']),
            (i.invalid_hostname_characters = /[^a-zA-Z0-9\.\-:_]/),
            (i.domAttributes = {
              a: 'href',
              blockquote: 'cite',
              link: 'href',
              base: 'href',
              script: 'src',
              form: 'action',
              img: 'src',
              area: 'href',
              iframe: 'src',
              embed: 'src',
              source: 'src',
              track: 'src',
              input: 'src',
              audio: 'src',
              video: 'src',
            }),
            (i.getDomAttribute = function (e) {
              if (e && e.nodeName) {
                var t = e.nodeName.toLowerCase()
                if ('input' !== t || 'image' === e.type) return i.domAttributes[t]
              }
            }),
            (i.encode = g),
            (i.decode = decodeURIComponent),
            (i.iso8859 = function () {
              ;(i.encode = escape), (i.decode = unescape)
            }),
            (i.unicode = function () {
              ;(i.encode = g), (i.decode = decodeURIComponent)
            }),
            (i.characters = {
              pathname: {
                encode: {
                  expression: /%(24|26|2B|2C|3B|3D|3A|40)/gi,
                  map: {
                    '%24': '$',
                    '%26': '&',
                    '%2B': '+',
                    '%2C': ',',
                    '%3B': ';',
                    '%3D': '=',
                    '%3A': ':',
                    '%40': '@',
                  },
                },
                decode: { expression: /[\/\?#]/g, map: { '/': '%2F', '?': '%3F', '#': '%23' } },
              },
              reserved: {
                encode: {
                  expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,
                  map: {
                    '%3A': ':',
                    '%2F': '/',
                    '%3F': '?',
                    '%23': '#',
                    '%5B': '[',
                    '%5D': ']',
                    '%40': '@',
                    '%21': '!',
                    '%24': '$',
                    '%26': '&',
                    '%27': "'",
                    '%28': '(',
                    '%29': ')',
                    '%2A': '*',
                    '%2B': '+',
                    '%2C': ',',
                    '%3B': ';',
                    '%3D': '=',
                  },
                },
              },
              urnpath: {
                encode: {
                  expression: /%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/gi,
                  map: {
                    '%21': '!',
                    '%24': '$',
                    '%27': "'",
                    '%28': '(',
                    '%29': ')',
                    '%2A': '*',
                    '%2B': '+',
                    '%2C': ',',
                    '%3B': ';',
                    '%3D': '=',
                    '%40': '@',
                  },
                },
                decode: {
                  expression: /[\/\?#:]/g,
                  map: { '/': '%2F', '?': '%3F', '#': '%23', ':': '%3A' },
                },
              },
            }),
            (i.encodeQuery = function (e, t) {
              var n = i.encode(e + '')
              return void 0 === t && (t = i.escapeQuerySpace), t ? n.replace(/%20/g, '+') : n
            }),
            (i.decodeQuery = function (e, t) {
              ;(e += ''), void 0 === t && (t = i.escapeQuerySpace)
              try {
                return i.decode(t ? e.replace(/\+/g, '%20') : e)
              } catch (t) {
                return e
              }
            })
          var y,
            v = { encode: 'encode', decode: 'decode' },
            C = function (e, t) {
              return function (n) {
                try {
                  return i[t](n + '').replace(i.characters[e][t].expression, function (n) {
                    return i.characters[e][t].map[n]
                  })
                } catch (e) {
                  return n
                }
              }
            }
          for (y in v)
            (i[y + 'PathSegment'] = C('pathname', v[y])),
              (i[y + 'UrnPathSegment'] = C('urnpath', v[y]))
          var _ = function (e, t, n) {
            return function (r) {
              var o
              o = n
                ? function (e) {
                    return i[t](i[n](e))
                  }
                : i[t]
              for (var s = (r + '').split(e), a = 0, u = s.length; a < u; a++) s[a] = o(s[a])
              return s.join(e)
            }
          }
          function w(e) {
            return function (t, n) {
              return void 0 === t
                ? this._parts[e] || ''
                : ((this._parts[e] = t || null), this.build(!n), this)
            }
          }
          function b(e, t) {
            return function (n, r) {
              return void 0 === n
                ? this._parts[e] || ''
                : (null !== n && (n += '').charAt(0) === t && (n = n.substring(1)),
                  (this._parts[e] = n),
                  this.build(!r),
                  this)
            }
          }
          ;(i.decodePath = _('/', 'decodePathSegment')),
            (i.decodeUrnPath = _(':', 'decodeUrnPathSegment')),
            (i.recodePath = _('/', 'encodePathSegment', 'decode')),
            (i.recodeUrnPath = _(':', 'encodeUrnPathSegment', 'decode')),
            (i.encodeReserved = C('reserved', 'encode')),
            (i.parse = function (e, t) {
              var n
              return (
                t || (t = { preventInvalidHostname: i.preventInvalidHostname }),
                (n = (e = (e = e.replace(i.leading_whitespace_expression, '')).replace(
                  i.ascii_tab_whitespace,
                  ''
                )).indexOf('#')) > -1 &&
                  ((t.fragment = e.substring(n + 1) || null), (e = e.substring(0, n))),
                (n = e.indexOf('?')) > -1 &&
                  ((t.query = e.substring(n + 1) || null), (e = e.substring(0, n))),
                '//' ===
                (e = (e = e.replace(/^(https?|ftp|wss?)?:+[/\\]*/i, '$1://')).replace(
                  /^[/\\]{2,}/i,
                  '//'
                )).substring(0, 2)
                  ? ((t.protocol = null), (e = e.substring(2)), (e = i.parseAuthority(e, t)))
                  : (n = e.indexOf(':')) > -1 &&
                    ((t.protocol = e.substring(0, n) || null),
                    t.protocol && !t.protocol.match(i.protocol_expression)
                      ? (t.protocol = void 0)
                      : '//' === e.substring(n + 1, n + 3).replace(/\\/g, '/')
                      ? ((e = e.substring(n + 3)), (e = i.parseAuthority(e, t)))
                      : ((e = e.substring(n + 1)), (t.urn = !0))),
                (t.path = e),
                t
              )
            }),
            (i.parseHost = function (e, t) {
              e || (e = '')
              var n,
                r,
                o = (e = e.replace(/\\/g, '/')).indexOf('/')
              if ((-1 === o && (o = e.length), '[' === e.charAt(0)))
                (n = e.indexOf(']')),
                  (t.hostname = e.substring(1, n) || null),
                  (t.port = e.substring(n + 2, o) || null),
                  '/' === t.port && (t.port = null)
              else {
                var s = e.indexOf(':'),
                  a = e.indexOf('/'),
                  u = e.indexOf(':', s + 1)
                ;-1 !== u && (-1 === a || u < a)
                  ? ((t.hostname = e.substring(0, o) || null), (t.port = null))
                  : ((r = e.substring(0, o).split(':')),
                    (t.hostname = r[0] || null),
                    (t.port = r[1] || null))
              }
              return (
                t.hostname && '/' !== e.substring(o).charAt(0) && (o++, (e = '/' + e)),
                t.preventInvalidHostname && i.ensureValidHostname(t.hostname, t.protocol),
                t.port && i.ensureValidPort(t.port),
                e.substring(o) || '/'
              )
            }),
            (i.parseAuthority = function (e, t) {
              return (e = i.parseUserinfo(e, t)), i.parseHost(e, t)
            }),
            (i.parseUserinfo = function (e, t) {
              var n = e
              ;-1 !== e.indexOf('\\') && (e = e.replace(/\\/g, '/'))
              var r,
                o = e.indexOf('/'),
                s = e.lastIndexOf('@', o > -1 ? o : e.length - 1)
              return (
                s > -1 && (-1 === o || s < o)
                  ? ((r = e.substring(0, s).split(':')),
                    (t.username = r[0] ? i.decode(r[0]) : null),
                    r.shift(),
                    (t.password = r[0] ? i.decode(r.join(':')) : null),
                    (e = n.substring(s + 1)))
                  : ((t.username = null), (t.password = null)),
                e
              )
            }),
            (i.parseQuery = function (e, t) {
              if (!e) return {}
              if (!(e = e.replace(/&+/g, '&').replace(/^\?*&*|&+$/g, ''))) return {}
              for (var n, r, o, s = {}, u = e.split('&'), c = u.length, l = 0; l < c; l++)
                (n = u[l].split('=')),
                  (r = i.decodeQuery(n.shift(), t)),
                  (o = n.length ? i.decodeQuery(n.join('='), t) : null),
                  '__proto__' !== r &&
                    (a.call(s, r)
                      ? (('string' != typeof s[r] && null !== s[r]) || (s[r] = [s[r]]),
                        s[r].push(o))
                      : (s[r] = o))
              return s
            }),
            (i.build = function (e) {
              var t = '',
                n = !1
              return (
                e.protocol && (t += e.protocol + ':'),
                e.urn || (!t && !e.hostname) || ((t += '//'), (n = !0)),
                (t += i.buildAuthority(e) || ''),
                'string' == typeof e.path &&
                  ('/' !== e.path.charAt(0) && n && (t += '/'), (t += e.path)),
                'string' == typeof e.query && e.query && (t += '?' + e.query),
                'string' == typeof e.fragment && e.fragment && (t += '#' + e.fragment),
                t
              )
            }),
            (i.buildHost = function (e) {
              var t = ''
              return e.hostname
                ? (i.ip6_expression.test(e.hostname)
                    ? (t += '[' + e.hostname + ']')
                    : (t += e.hostname),
                  e.port && (t += ':' + e.port),
                  t)
                : ''
            }),
            (i.buildAuthority = function (e) {
              return i.buildUserinfo(e) + i.buildHost(e)
            }),
            (i.buildUserinfo = function (e) {
              var t = ''
              return (
                e.username && (t += i.encode(e.username)),
                e.password && (t += ':' + i.encode(e.password)),
                t && (t += '@'),
                t
              )
            }),
            (i.buildQuery = function (e, t, n) {
              var r,
                o,
                s,
                u,
                c = ''
              for (o in e)
                if ('__proto__' !== o && a.call(e, o))
                  if (l(e[o]))
                    for (r = {}, s = 0, u = e[o].length; s < u; s++)
                      void 0 !== e[o][s] &&
                        void 0 === r[e[o][s] + ''] &&
                        ((c += '&' + i.buildQueryParameter(o, e[o][s], n)),
                        !0 !== t && (r[e[o][s] + ''] = !0))
                  else void 0 !== e[o] && (c += '&' + i.buildQueryParameter(o, e[o], n))
              return c.substring(1)
            }),
            (i.buildQueryParameter = function (e, t, n) {
              return i.encodeQuery(e, n) + (null !== t ? '=' + i.encodeQuery(t, n) : '')
            }),
            (i.addQuery = function (e, t, n) {
              if ('object' == typeof t) for (var r in t) a.call(t, r) && i.addQuery(e, r, t[r])
              else {
                if ('string' != typeof t)
                  throw new TypeError(
                    'URI.addQuery() accepts an object, string as the name parameter'
                  )
                if (void 0 === e[t]) return void (e[t] = n)
                'string' == typeof e[t] && (e[t] = [e[t]]),
                  l(n) || (n = [n]),
                  (e[t] = (e[t] || []).concat(n))
              }
            }),
            (i.setQuery = function (e, t, n) {
              if ('object' == typeof t) for (var r in t) a.call(t, r) && i.setQuery(e, r, t[r])
              else {
                if ('string' != typeof t)
                  throw new TypeError(
                    'URI.setQuery() accepts an object, string as the name parameter'
                  )
                e[t] = void 0 === n ? null : n
              }
            }),
            (i.removeQuery = function (e, t, n) {
              var r, o, s
              if (l(t)) for (r = 0, o = t.length; r < o; r++) e[t[r]] = void 0
              else if ('RegExp' === c(t)) for (s in e) t.test(s) && (e[s] = void 0)
              else if ('object' == typeof t) for (s in t) a.call(t, s) && i.removeQuery(e, s, t[s])
              else {
                if ('string' != typeof t)
                  throw new TypeError(
                    'URI.removeQuery() accepts an object, string, RegExp as the first parameter'
                  )
                void 0 !== n
                  ? 'RegExp' === c(n)
                    ? !l(e[t]) && n.test(e[t])
                      ? (e[t] = void 0)
                      : (e[t] = d(e[t], n))
                    : e[t] !== String(n) || (l(n) && 1 !== n.length)
                    ? l(e[t]) && (e[t] = d(e[t], n))
                    : (e[t] = void 0)
                  : (e[t] = void 0)
              }
            }),
            (i.hasQuery = function (e, t, n, r) {
              switch (c(t)) {
                case 'String':
                  break
                case 'RegExp':
                  for (var o in e)
                    if (a.call(e, o) && t.test(o) && (void 0 === n || i.hasQuery(e, o, n)))
                      return !0
                  return !1
                case 'Object':
                  for (var s in t) if (a.call(t, s) && !i.hasQuery(e, s, t[s])) return !1
                  return !0
                default:
                  throw new TypeError(
                    'URI.hasQuery() accepts a string, regular expression or object as the name parameter'
                  )
              }
              switch (c(n)) {
                case 'Undefined':
                  return t in e
                case 'Boolean':
                  return n === Boolean(l(e[t]) ? e[t].length : e[t])
                case 'Function':
                  return !!n(e[t], t, e)
                case 'Array':
                  return !!l(e[t]) && (r ? f : p)(e[t], n)
                case 'RegExp':
                  return l(e[t]) ? !!r && f(e[t], n) : Boolean(e[t] && e[t].match(n))
                case 'Number':
                  n = String(n)
                case 'String':
                  return l(e[t]) ? !!r && f(e[t], n) : e[t] === n
                default:
                  throw new TypeError(
                    'URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter'
                  )
              }
            }),
            (i.joinPaths = function () {
              for (var e = [], t = [], n = 0, r = 0; r < arguments.length; r++) {
                var o = new i(arguments[r])
                e.push(o)
                for (var s = o.segment(), a = 0; a < s.length; a++)
                  'string' == typeof s[a] && t.push(s[a]), s[a] && n++
              }
              if (!t.length || !n) return new i('')
              var u = new i('').segment(t)
              return (
                ('' !== e[0].path() && '/' !== e[0].path().slice(0, 1)) || u.path('/' + u.path()),
                u.normalize()
              )
            }),
            (i.commonPath = function (e, t) {
              var n,
                r = Math.min(e.length, t.length)
              for (n = 0; n < r; n++)
                if (e.charAt(n) !== t.charAt(n)) {
                  n--
                  break
                }
              return n < 1
                ? e.charAt(0) === t.charAt(0) && '/' === e.charAt(0)
                  ? '/'
                  : ''
                : (('/' === e.charAt(n) && '/' === t.charAt(n)) ||
                    (n = e.substring(0, n).lastIndexOf('/')),
                  e.substring(0, n + 1))
            }),
            (i.withinString = function (e, t, n) {
              n || (n = {})
              var r = n.start || i.findUri.start,
                o = n.end || i.findUri.end,
                s = n.trim || i.findUri.trim,
                a = n.parens || i.findUri.parens,
                u = /[a-z0-9-]=["']?$/i
              for (r.lastIndex = 0; ; ) {
                var c = r.exec(e)
                if (!c) break
                var l = c.index
                if (n.ignoreHtml) {
                  var d = e.slice(Math.max(l - 3, 0), l)
                  if (d && u.test(d)) continue
                }
                for (var f = l + e.slice(l).search(o), p = e.slice(l, f), h = -1; ; ) {
                  var m = a.exec(p)
                  if (!m) break
                  var g = m.index + m[0].length
                  h = Math.max(h, g)
                }
                if (
                  !(
                    (p = h > -1 ? p.slice(0, h) + p.slice(h).replace(s, '') : p.replace(s, ''))
                      .length <= c[0].length ||
                    (n.ignore && n.ignore.test(p))
                  )
                ) {
                  var y = t(p, l, (f = l + p.length), e)
                  void 0 !== y
                    ? ((y = String(y)),
                      (e = e.slice(0, l) + y + e.slice(f)),
                      (r.lastIndex = l + y.length))
                    : (r.lastIndex = f)
                }
              }
              return (r.lastIndex = 0), e
            }),
            (i.ensureValidHostname = function (t, n) {
              var r = !!t,
                o = !1
              if ((!!n && (o = f(i.hostProtocols, n)), o && !r))
                throw new TypeError('Hostname cannot be empty, if protocol is ' + n)
              if (t && t.match(i.invalid_hostname_characters)) {
                if (!e)
                  throw new TypeError(
                    'Hostname "' +
                      t +
                      '" contains characters other than [A-Z0-9.-:_] and Punycode.js is not available'
                  )
                if (e.toASCII(t).match(i.invalid_hostname_characters))
                  throw new TypeError(
                    'Hostname "' + t + '" contains characters other than [A-Z0-9.-:_]'
                  )
              }
            }),
            (i.ensureValidPort = function (e) {
              if (e) {
                var t = Number(e)
                if (!(/^[0-9]+$/.test(t) && t > 0 && t < 65536))
                  throw new TypeError('Port "' + e + '" is not a valid port')
              }
            }),
            (i.noConflict = function (e) {
              if (e) {
                var t = { URI: this.noConflict() }
                return (
                  r.URITemplate &&
                    'function' == typeof r.URITemplate.noConflict &&
                    (t.URITemplate = r.URITemplate.noConflict()),
                  r.IPv6 &&
                    'function' == typeof r.IPv6.noConflict &&
                    (t.IPv6 = r.IPv6.noConflict()),
                  r.SecondLevelDomains &&
                    'function' == typeof r.SecondLevelDomains.noConflict &&
                    (t.SecondLevelDomains = r.SecondLevelDomains.noConflict()),
                  t
                )
              }
              return r.URI === this && (r.URI = o), this
            }),
            (s.build = function (e) {
              return (
                !0 === e
                  ? (this._deferred_build = !0)
                  : (void 0 === e || this._deferred_build) &&
                    ((this._string = i.build(this._parts)), (this._deferred_build = !1)),
                this
              )
            }),
            (s.clone = function () {
              return new i(this)
            }),
            (s.valueOf = s.toString =
              function () {
                return this.build(!1)._string
              }),
            (s.protocol = w('protocol')),
            (s.username = w('username')),
            (s.password = w('password')),
            (s.hostname = w('hostname')),
            (s.port = w('port')),
            (s.query = b('query', '?')),
            (s.fragment = b('fragment', '#')),
            (s.search = function (e, t) {
              var n = this.query(e, t)
              return 'string' == typeof n && n.length ? '?' + n : n
            }),
            (s.hash = function (e, t) {
              var n = this.fragment(e, t)
              return 'string' == typeof n && n.length ? '#' + n : n
            }),
            (s.pathname = function (e, t) {
              if (void 0 === e || !0 === e) {
                var n = this._parts.path || (this._parts.hostname ? '/' : '')
                return e ? (this._parts.urn ? i.decodeUrnPath : i.decodePath)(n) : n
              }
              return (
                this._parts.urn
                  ? (this._parts.path = e ? i.recodeUrnPath(e) : '')
                  : (this._parts.path = e ? i.recodePath(e) : '/'),
                this.build(!t),
                this
              )
            }),
            (s.path = s.pathname),
            (s.href = function (e, t) {
              var n
              if (void 0 === e) return this.toString()
              ;(this._string = ''), (this._parts = i._parts())
              var r = e instanceof i,
                o = 'object' == typeof e && (e.hostname || e.path || e.pathname)
              if (
                (e.nodeName && ((e = e[i.getDomAttribute(e)] || ''), (o = !1)),
                !r && o && void 0 !== e.pathname && (e = e.toString()),
                'string' == typeof e || e instanceof String)
              )
                this._parts = i.parse(String(e), this._parts)
              else {
                if (!r && !o) throw new TypeError('invalid input')
                var s = r ? e._parts : e
                for (n in s) 'query' !== n && a.call(this._parts, n) && (this._parts[n] = s[n])
                s.query && this.query(s.query, !1)
              }
              return this.build(!t), this
            }),
            (s.is = function (e) {
              var t = !1,
                r = !1,
                o = !1,
                s = !1,
                a = !1,
                u = !1,
                c = !1,
                l = !this._parts.urn
              switch (
                (this._parts.hostname &&
                  ((l = !1),
                  (r = i.ip4_expression.test(this._parts.hostname)),
                  (o = i.ip6_expression.test(this._parts.hostname)),
                  (a = (s = !(t = r || o)) && n && n.has(this._parts.hostname)),
                  (u = s && i.idn_expression.test(this._parts.hostname)),
                  (c = s && i.punycode_expression.test(this._parts.hostname))),
                e.toLowerCase())
              ) {
                case 'relative':
                  return l
                case 'absolute':
                  return !l
                case 'domain':
                case 'name':
                  return s
                case 'sld':
                  return a
                case 'ip':
                  return t
                case 'ip4':
                case 'ipv4':
                case 'inet4':
                  return r
                case 'ip6':
                case 'ipv6':
                case 'inet6':
                  return o
                case 'idn':
                  return u
                case 'url':
                  return !this._parts.urn
                case 'urn':
                  return !!this._parts.urn
                case 'punycode':
                  return c
              }
              return null
            })
          var x = s.protocol,
            S = s.port,
            A = s.hostname
          ;(s.protocol = function (e, t) {
            if (e && !(e = e.replace(/:(\/\/)?$/, '')).match(i.protocol_expression))
              throw new TypeError(
                'Protocol "' +
                  e +
                  '" contains characters other than [A-Z0-9.+-] or doesn\'t start with [A-Z]'
              )
            return x.call(this, e, t)
          }),
            (s.scheme = s.protocol),
            (s.port = function (e, t) {
              return this._parts.urn
                ? void 0 === e
                  ? ''
                  : this
                : (void 0 !== e &&
                    (0 === e && (e = null),
                    e &&
                      (':' === (e += '').charAt(0) && (e = e.substring(1)), i.ensureValidPort(e))),
                  S.call(this, e, t))
            }),
            (s.hostname = function (e, t) {
              if (this._parts.urn) return void 0 === e ? '' : this
              if (void 0 !== e) {
                var n = { preventInvalidHostname: this._parts.preventInvalidHostname }
                if ('/' !== i.parseHost(e, n))
                  throw new TypeError(
                    'Hostname "' + e + '" contains characters other than [A-Z0-9.-]'
                  )
                ;(e = n.hostname),
                  this._parts.preventInvalidHostname &&
                    i.ensureValidHostname(e, this._parts.protocol)
              }
              return A.call(this, e, t)
            }),
            (s.origin = function (e, t) {
              if (this._parts.urn) return void 0 === e ? '' : this
              if (void 0 === e) {
                var n = this.protocol()
                return this.authority() ? (n ? n + '://' : '') + this.authority() : ''
              }
              var r = i(e)
              return this.protocol(r.protocol()).authority(r.authority()).build(!t), this
            }),
            (s.host = function (e, t) {
              if (this._parts.urn) return void 0 === e ? '' : this
              if (void 0 === e) return this._parts.hostname ? i.buildHost(this._parts) : ''
              if ('/' !== i.parseHost(e, this._parts))
                throw new TypeError(
                  'Hostname "' + e + '" contains characters other than [A-Z0-9.-]'
                )
              return this.build(!t), this
            }),
            (s.authority = function (e, t) {
              if (this._parts.urn) return void 0 === e ? '' : this
              if (void 0 === e) return this._parts.hostname ? i.buildAuthority(this._parts) : ''
              if ('/' !== i.parseAuthority(e, this._parts))
                throw new TypeError(
                  'Hostname "' + e + '" contains characters other than [A-Z0-9.-]'
                )
              return this.build(!t), this
            }),
            (s.userinfo = function (e, t) {
              if (this._parts.urn) return void 0 === e ? '' : this
              if (void 0 === e) {
                var n = i.buildUserinfo(this._parts)
                return n ? n.substring(0, n.length - 1) : n
              }
              return (
                '@' !== e[e.length - 1] && (e += '@'),
                i.parseUserinfo(e, this._parts),
                this.build(!t),
                this
              )
            }),
            (s.resource = function (e, t) {
              var n
              return void 0 === e
                ? this.path() + this.search() + this.hash()
                : ((n = i.parse(e)),
                  (this._parts.path = n.path),
                  (this._parts.query = n.query),
                  (this._parts.fragment = n.fragment),
                  this.build(!t),
                  this)
            }),
            (s.subdomain = function (e, t) {
              if (this._parts.urn) return void 0 === e ? '' : this
              if (void 0 === e) {
                if (!this._parts.hostname || this.is('IP')) return ''
                var n = this._parts.hostname.length - this.domain().length - 1
                return this._parts.hostname.substring(0, n) || ''
              }
              var r = this._parts.hostname.length - this.domain().length,
                o = this._parts.hostname.substring(0, r),
                s = new RegExp('^' + u(o))
              if ((e && '.' !== e.charAt(e.length - 1) && (e += '.'), -1 !== e.indexOf(':')))
                throw new TypeError('Domains cannot contain colons')
              return (
                e && i.ensureValidHostname(e, this._parts.protocol),
                (this._parts.hostname = this._parts.hostname.replace(s, e)),
                this.build(!t),
                this
              )
            }),
            (s.domain = function (e, t) {
              if (this._parts.urn) return void 0 === e ? '' : this
              if (('boolean' == typeof e && ((t = e), (e = void 0)), void 0 === e)) {
                if (!this._parts.hostname || this.is('IP')) return ''
                var n = this._parts.hostname.match(/\./g)
                if (n && n.length < 2) return this._parts.hostname
                var r = this._parts.hostname.length - this.tld(t).length - 1
                return (
                  (r = this._parts.hostname.lastIndexOf('.', r - 1) + 1),
                  this._parts.hostname.substring(r) || ''
                )
              }
              if (!e) throw new TypeError('cannot set domain empty')
              if (-1 !== e.indexOf(':')) throw new TypeError('Domains cannot contain colons')
              if (
                (i.ensureValidHostname(e, this._parts.protocol),
                !this._parts.hostname || this.is('IP'))
              )
                this._parts.hostname = e
              else {
                var o = new RegExp(u(this.domain()) + '$')
                this._parts.hostname = this._parts.hostname.replace(o, e)
              }
              return this.build(!t), this
            }),
            (s.tld = function (e, t) {
              if (this._parts.urn) return void 0 === e ? '' : this
              if (('boolean' == typeof e && ((t = e), (e = void 0)), void 0 === e)) {
                if (!this._parts.hostname || this.is('IP')) return ''
                var r = this._parts.hostname.lastIndexOf('.'),
                  o = this._parts.hostname.substring(r + 1)
                return (
                  (!0 !== t && n && n.list[o.toLowerCase()] && n.get(this._parts.hostname)) || o
                )
              }
              var i
              if (!e) throw new TypeError('cannot set TLD empty')
              if (e.match(/[^a-zA-Z0-9-]/)) {
                if (!n || !n.is(e))
                  throw new TypeError('TLD "' + e + '" contains characters other than [A-Z0-9]')
                ;(i = new RegExp(u(this.tld()) + '$')),
                  (this._parts.hostname = this._parts.hostname.replace(i, e))
              } else {
                if (!this._parts.hostname || this.is('IP'))
                  throw new ReferenceError('cannot set TLD on non-domain host')
                ;(i = new RegExp(u(this.tld()) + '$')),
                  (this._parts.hostname = this._parts.hostname.replace(i, e))
              }
              return this.build(!t), this
            }),
            (s.directory = function (e, t) {
              if (this._parts.urn) return void 0 === e ? '' : this
              if (void 0 === e || !0 === e) {
                if (!this._parts.path && !this._parts.hostname) return ''
                if ('/' === this._parts.path) return '/'
                var n = this._parts.path.length - this.filename().length - 1,
                  r = this._parts.path.substring(0, n) || (this._parts.hostname ? '/' : '')
                return e ? i.decodePath(r) : r
              }
              var o = this._parts.path.length - this.filename().length,
                s = this._parts.path.substring(0, o),
                a = new RegExp('^' + u(s))
              return (
                this.is('relative') || (e || (e = '/'), '/' !== e.charAt(0) && (e = '/' + e)),
                e && '/' !== e.charAt(e.length - 1) && (e += '/'),
                (e = i.recodePath(e)),
                (this._parts.path = this._parts.path.replace(a, e)),
                this.build(!t),
                this
              )
            }),
            (s.filename = function (e, t) {
              if (this._parts.urn) return void 0 === e ? '' : this
              if ('string' != typeof e) {
                if (!this._parts.path || '/' === this._parts.path) return ''
                var n = this._parts.path.lastIndexOf('/'),
                  r = this._parts.path.substring(n + 1)
                return e ? i.decodePathSegment(r) : r
              }
              var o = !1
              '/' === e.charAt(0) && (e = e.substring(1)), e.match(/\.?\//) && (o = !0)
              var s = new RegExp(u(this.filename()) + '$')
              return (
                (e = i.recodePath(e)),
                (this._parts.path = this._parts.path.replace(s, e)),
                o ? this.normalizePath(t) : this.build(!t),
                this
              )
            }),
            (s.suffix = function (e, t) {
              if (this._parts.urn) return void 0 === e ? '' : this
              if (void 0 === e || !0 === e) {
                if (!this._parts.path || '/' === this._parts.path) return ''
                var n,
                  r,
                  o = this.filename(),
                  s = o.lastIndexOf('.')
                return -1 === s
                  ? ''
                  : ((n = o.substring(s + 1)),
                    (r = /^[a-z0-9%]+$/i.test(n) ? n : ''),
                    e ? i.decodePathSegment(r) : r)
              }
              '.' === e.charAt(0) && (e = e.substring(1))
              var a,
                c = this.suffix()
              if (c) a = e ? new RegExp(u(c) + '$') : new RegExp(u('.' + c) + '$')
              else {
                if (!e) return this
                this._parts.path += '.' + i.recodePath(e)
              }
              return (
                a && ((e = i.recodePath(e)), (this._parts.path = this._parts.path.replace(a, e))),
                this.build(!t),
                this
              )
            }),
            (s.segment = function (e, t, n) {
              var r = this._parts.urn ? ':' : '/',
                o = this.path(),
                i = '/' === o.substring(0, 1),
                s = o.split(r)
              if (
                (void 0 !== e && 'number' != typeof e && ((n = t), (t = e), (e = void 0)),
                void 0 !== e && 'number' != typeof e)
              )
                throw new Error('Bad segment "' + e + '", must be 0-based integer')
              if ((i && s.shift(), e < 0 && (e = Math.max(s.length + e, 0)), void 0 === t))
                return void 0 === e ? s : s[e]
              if (null === e || void 0 === s[e])
                if (l(t)) {
                  s = []
                  for (var a = 0, u = t.length; a < u; a++)
                    (t[a].length || (s.length && s[s.length - 1].length)) &&
                      (s.length && !s[s.length - 1].length && s.pop(), s.push(h(t[a])))
                } else
                  (t || 'string' == typeof t) &&
                    ((t = h(t)), '' === s[s.length - 1] ? (s[s.length - 1] = t) : s.push(t))
              else t ? (s[e] = h(t)) : s.splice(e, 1)
              return i && s.unshift(''), this.path(s.join(r), n)
            }),
            (s.segmentCoded = function (e, t, n) {
              var r, o, s
              if (('number' != typeof e && ((n = t), (t = e), (e = void 0)), void 0 === t)) {
                if (l((r = this.segment(e, t, n))))
                  for (o = 0, s = r.length; o < s; o++) r[o] = i.decode(r[o])
                else r = void 0 !== r ? i.decode(r) : void 0
                return r
              }
              if (l(t)) for (o = 0, s = t.length; o < s; o++) t[o] = i.encode(t[o])
              else t = 'string' == typeof t || t instanceof String ? i.encode(t) : t
              return this.segment(e, t, n)
            })
          var E = s.query
          return (
            (s.query = function (e, t) {
              if (!0 === e) return i.parseQuery(this._parts.query, this._parts.escapeQuerySpace)
              if ('function' == typeof e) {
                var n = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace),
                  r = e.call(this, n)
                return (
                  (this._parts.query = i.buildQuery(
                    r || n,
                    this._parts.duplicateQueryParameters,
                    this._parts.escapeQuerySpace
                  )),
                  this.build(!t),
                  this
                )
              }
              return void 0 !== e && 'string' != typeof e
                ? ((this._parts.query = i.buildQuery(
                    e,
                    this._parts.duplicateQueryParameters,
                    this._parts.escapeQuerySpace
                  )),
                  this.build(!t),
                  this)
                : E.call(this, e, t)
            }),
            (s.setQuery = function (e, t, n) {
              var r = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace)
              if ('string' == typeof e || e instanceof String) r[e] = void 0 !== t ? t : null
              else {
                if ('object' != typeof e)
                  throw new TypeError(
                    'URI.addQuery() accepts an object, string as the name parameter'
                  )
                for (var o in e) a.call(e, o) && (r[o] = e[o])
              }
              return (
                (this._parts.query = i.buildQuery(
                  r,
                  this._parts.duplicateQueryParameters,
                  this._parts.escapeQuerySpace
                )),
                'string' != typeof e && (n = t),
                this.build(!n),
                this
              )
            }),
            (s.addQuery = function (e, t, n) {
              var r = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace)
              return (
                i.addQuery(r, e, void 0 === t ? null : t),
                (this._parts.query = i.buildQuery(
                  r,
                  this._parts.duplicateQueryParameters,
                  this._parts.escapeQuerySpace
                )),
                'string' != typeof e && (n = t),
                this.build(!n),
                this
              )
            }),
            (s.removeQuery = function (e, t, n) {
              var r = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace)
              return (
                i.removeQuery(r, e, t),
                (this._parts.query = i.buildQuery(
                  r,
                  this._parts.duplicateQueryParameters,
                  this._parts.escapeQuerySpace
                )),
                'string' != typeof e && (n = t),
                this.build(!n),
                this
              )
            }),
            (s.hasQuery = function (e, t, n) {
              var r = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace)
              return i.hasQuery(r, e, t, n)
            }),
            (s.setSearch = s.setQuery),
            (s.addSearch = s.addQuery),
            (s.removeSearch = s.removeQuery),
            (s.hasSearch = s.hasQuery),
            (s.normalize = function () {
              return this._parts.urn
                ? this.normalizeProtocol(!1)
                    .normalizePath(!1)
                    .normalizeQuery(!1)
                    .normalizeFragment(!1)
                    .build()
                : this.normalizeProtocol(!1)
                    .normalizeHostname(!1)
                    .normalizePort(!1)
                    .normalizePath(!1)
                    .normalizeQuery(!1)
                    .normalizeFragment(!1)
                    .build()
            }),
            (s.normalizeProtocol = function (e) {
              return (
                'string' == typeof this._parts.protocol &&
                  ((this._parts.protocol = this._parts.protocol.toLowerCase()), this.build(!e)),
                this
              )
            }),
            (s.normalizeHostname = function (n) {
              return (
                this._parts.hostname &&
                  (this.is('IDN') && e
                    ? (this._parts.hostname = e.toASCII(this._parts.hostname))
                    : this.is('IPv6') && t && (this._parts.hostname = t.best(this._parts.hostname)),
                  (this._parts.hostname = this._parts.hostname.toLowerCase()),
                  this.build(!n)),
                this
              )
            }),
            (s.normalizePort = function (e) {
              return (
                'string' == typeof this._parts.protocol &&
                  this._parts.port === i.defaultPorts[this._parts.protocol] &&
                  ((this._parts.port = null), this.build(!e)),
                this
              )
            }),
            (s.normalizePath = function (e) {
              var t,
                n = this._parts.path
              if (!n) return this
              if (this._parts.urn)
                return (this._parts.path = i.recodeUrnPath(this._parts.path)), this.build(!e), this
              if ('/' === this._parts.path) return this
              var r,
                o,
                s = ''
              for (
                '/' !== (n = i.recodePath(n)).charAt(0) && ((t = !0), (n = '/' + n)),
                  ('/..' !== n.slice(-3) && '/.' !== n.slice(-2)) || (n += '/'),
                  n = n.replace(/(\/(\.\/)+)|(\/\.$)/g, '/').replace(/\/{2,}/g, '/'),
                  t && (s = n.substring(1).match(/^(\.\.\/)+/) || '') && (s = s[0]);
                -1 !== (r = n.search(/\/\.\.(\/|$)/));

              )
                0 !== r
                  ? (-1 === (o = n.substring(0, r).lastIndexOf('/')) && (o = r),
                    (n = n.substring(0, o) + n.substring(r + 3)))
                  : (n = n.substring(3))
              return (
                t && this.is('relative') && (n = s + n.substring(1)),
                (this._parts.path = n),
                this.build(!e),
                this
              )
            }),
            (s.normalizePathname = s.normalizePath),
            (s.normalizeQuery = function (e) {
              return (
                'string' == typeof this._parts.query &&
                  (this._parts.query.length
                    ? this.query(i.parseQuery(this._parts.query, this._parts.escapeQuerySpace))
                    : (this._parts.query = null),
                  this.build(!e)),
                this
              )
            }),
            (s.normalizeFragment = function (e) {
              return this._parts.fragment || ((this._parts.fragment = null), this.build(!e)), this
            }),
            (s.normalizeSearch = s.normalizeQuery),
            (s.normalizeHash = s.normalizeFragment),
            (s.iso8859 = function () {
              var e = i.encode,
                t = i.decode
              ;(i.encode = escape), (i.decode = decodeURIComponent)
              try {
                this.normalize()
              } finally {
                ;(i.encode = e), (i.decode = t)
              }
              return this
            }),
            (s.unicode = function () {
              var e = i.encode,
                t = i.decode
              ;(i.encode = g), (i.decode = unescape)
              try {
                this.normalize()
              } finally {
                ;(i.encode = e), (i.decode = t)
              }
              return this
            }),
            (s.readable = function () {
              var t = this.clone()
              t.username('').password('').normalize()
              var n = ''
              if (
                (t._parts.protocol && (n += t._parts.protocol + '://'),
                t._parts.hostname &&
                  (t.is('punycode') && e
                    ? ((n += e.toUnicode(t._parts.hostname)),
                      t._parts.port && (n += ':' + t._parts.port))
                    : (n += t.host())),
                t._parts.hostname && t._parts.path && '/' !== t._parts.path.charAt(0) && (n += '/'),
                (n += t.path(!0)),
                t._parts.query)
              ) {
                for (var r = '', o = 0, s = t._parts.query.split('&'), a = s.length; o < a; o++) {
                  var u = (s[o] || '').split('=')
                  ;(r +=
                    '&' + i.decodeQuery(u[0], this._parts.escapeQuerySpace).replace(/&/g, '%26')),
                    void 0 !== u[1] &&
                      (r +=
                        '=' +
                        i.decodeQuery(u[1], this._parts.escapeQuerySpace).replace(/&/g, '%26'))
                }
                n += '?' + r.substring(1)
              }
              return (n += i.decodeQuery(t.hash(), !0))
            }),
            (s.absoluteTo = function (e) {
              var t,
                n,
                r,
                o = this.clone(),
                s = ['protocol', 'username', 'password', 'hostname', 'port']
              if (this._parts.urn)
                throw new Error('URNs do not have any generally defined hierarchical components')
              if ((e instanceof i || (e = new i(e)), o._parts.protocol)) return o
              if (((o._parts.protocol = e._parts.protocol), this._parts.hostname)) return o
              for (n = 0; (r = s[n]); n++) o._parts[r] = e._parts[r]
              return (
                o._parts.path
                  ? ('..' === o._parts.path.substring(-2) && (o._parts.path += '/'),
                    '/' !== o.path().charAt(0) &&
                      ((t = (t = e.directory()) || (0 === e.path().indexOf('/') ? '/' : '')),
                      (o._parts.path = (t ? t + '/' : '') + o._parts.path),
                      o.normalizePath()))
                  : ((o._parts.path = e._parts.path),
                    o._parts.query || (o._parts.query = e._parts.query)),
                o.build(),
                o
              )
            }),
            (s.relativeTo = function (e) {
              var t,
                n,
                r,
                o,
                s,
                a = this.clone().normalize()
              if (a._parts.urn)
                throw new Error('URNs do not have any generally defined hierarchical components')
              if (
                ((e = new i(e).normalize()),
                (t = a._parts),
                (n = e._parts),
                (o = a.path()),
                (s = e.path()),
                '/' !== o.charAt(0))
              )
                throw new Error('URI is already relative')
              if ('/' !== s.charAt(0))
                throw new Error('Cannot calculate a URI relative to another relative URI')
              if (
                (t.protocol === n.protocol && (t.protocol = null),
                t.username !== n.username || t.password !== n.password)
              )
                return a.build()
              if (null !== t.protocol || null !== t.username || null !== t.password)
                return a.build()
              if (t.hostname !== n.hostname || t.port !== n.port) return a.build()
              if (((t.hostname = null), (t.port = null), o === s)) return (t.path = ''), a.build()
              if (!(r = i.commonPath(o, s))) return a.build()
              var u = n.path
                .substring(r.length)
                .replace(/[^\/]*$/, '')
                .replace(/.*?\//g, '../')
              return (t.path = u + t.path.substring(r.length) || './'), a.build()
            }),
            (s.equals = function (e) {
              var t,
                n,
                r,
                o,
                s,
                u = this.clone(),
                c = new i(e),
                d = {}
              if ((u.normalize(), c.normalize(), u.toString() === c.toString())) return !0
              if (
                ((r = u.query()),
                (o = c.query()),
                u.query(''),
                c.query(''),
                u.toString() !== c.toString())
              )
                return !1
              if (r.length !== o.length) return !1
              for (s in ((t = i.parseQuery(r, this._parts.escapeQuerySpace)),
              (n = i.parseQuery(o, this._parts.escapeQuerySpace)),
              t))
                if (a.call(t, s)) {
                  if (l(t[s])) {
                    if (!p(t[s], n[s])) return !1
                  } else if (t[s] !== n[s]) return !1
                  d[s] = !0
                }
              for (s in n) if (a.call(n, s) && !d[s]) return !1
              return !0
            }),
            (s.preventInvalidHostname = function (e) {
              return (this._parts.preventInvalidHostname = !!e), this
            }),
            (s.duplicateQueryParameters = function (e) {
              return (this._parts.duplicateQueryParameters = !!e), this
            }),
            (s.escapeQuerySpace = function (e) {
              return (this._parts.escapeQuerySpace = !!e), this
            }),
            i
          )
        }),
        e.exports
          ? (e.exports = n(Ot, It, Pt))
          : (t.URI = n(t.punycode, t.IPv6, t.SecondLevelDomains, t))
    })
  function Tt(e, t) {
    if (null === e || 'object' != typeof e) return e
    t = r.defaultValue(t, !1)
    const n = new e.constructor()
    for (const r in e)
      if (e.hasOwnProperty(r)) {
        let o = e[r]
        t && (o = Tt(o, t)), (n[r] = o)
      }
    return n
  }
  function qt(e, t) {
    let n
    return 'undefined' != typeof document && (n = document), qt._implementation(e, t, n)
  }
  qt._implementation = function (e, t, n) {
    if (!r.defined(t)) {
      if (void 0 === n) return e
      t = r.defaultValue(n.baseURI, n.location.href)
    }
    const o = new Rt(e)
    return '' !== o.scheme() ? o.toString() : o.absoluteTo(t).toString()
  }
  const zt = {}
  function Mt(e, t, n) {
    r.defined(t) || (t = e.width), r.defined(n) || (n = e.height)
    let o = zt[t]
    r.defined(o) || ((o = {}), (zt[t] = o))
    let i = o[n]
    if (!r.defined(i)) {
      const e = document.createElement('canvas')
      ;(e.width = t),
        (e.height = n),
        (i = e.getContext('2d')),
        (i.globalCompositeOperation = 'copy'),
        (o[n] = i)
    }
    return i.drawImage(e, 0, 0, t, n), i.getImageData(0, 0, t, n).data
  }
  const Dt = /^blob:/i
  function Ut(e) {
    return Dt.test(e)
  }
  let kt
  const Ft = /^data:/i
  function Nt(e) {
    return Ft.test(e)
  }
  var jt = Object.freeze({
    UNISSUED: 0,
    ISSUED: 1,
    ACTIVE: 2,
    RECEIVED: 3,
    CANCELLED: 4,
    FAILED: 5,
  })
  var Bt = Object.freeze({ TERRAIN: 0, IMAGERY: 1, TILES3D: 2, OTHER: 3 })
  function Vt(e) {
    e = r.defaultValue(e, r.defaultValue.EMPTY_OBJECT)
    const t = r.defaultValue(e.throttleByServer, !1),
      n = r.defaultValue(e.throttle, !1)
    ;(this.url = e.url),
      (this.requestFunction = e.requestFunction),
      (this.cancelFunction = e.cancelFunction),
      (this.priorityFunction = e.priorityFunction),
      (this.priority = r.defaultValue(e.priority, 0)),
      (this.throttle = n),
      (this.throttleByServer = t),
      (this.type = r.defaultValue(e.type, Bt.OTHER)),
      (this.serverKey = void 0),
      (this.state = jt.UNISSUED),
      (this.deferred = void 0),
      (this.cancelled = !1)
  }
  function Lt(e, t, n) {
    ;(this.statusCode = e),
      (this.response = t),
      (this.responseHeaders = n),
      'string' == typeof this.responseHeaders &&
        (this.responseHeaders = (function (e) {
          const t = {}
          if (!e) return t
          const n = e.split('\r\n')
          for (let e = 0; e < n.length; ++e) {
            const r = n[e],
              o = r.indexOf(': ')
            if (o > 0) {
              const e = r.substring(0, o),
                n = r.substring(o + 2)
              t[e] = n
            }
          }
          return t
        })(this.responseHeaders))
  }
  function Qt() {
    ;(this._listeners = []),
      (this._scopes = []),
      (this._toRemove = []),
      (this._insideRaiseEvent = !1)
  }
  function $t(e, t) {
    return t - e
  }
  function Wt(e) {
    ;(this._comparator = e.comparator),
      (this._array = []),
      (this._length = 0),
      (this._maximumLength = void 0)
  }
  function Ht(e, t, n) {
    const r = e[t]
    ;(e[t] = e[n]), (e[n] = r)
  }
  ;(Vt.prototype.cancel = function () {
    this.cancelled = !0
  }),
    (Vt.prototype.clone = function (e) {
      return r.defined(e)
        ? ((e.url = this.url),
          (e.requestFunction = this.requestFunction),
          (e.cancelFunction = this.cancelFunction),
          (e.priorityFunction = this.priorityFunction),
          (e.priority = this.priority),
          (e.throttle = this.throttle),
          (e.throttleByServer = this.throttleByServer),
          (e.type = this.type),
          (e.serverKey = this.serverKey),
          (e.state = this.RequestState.UNISSUED),
          (e.deferred = void 0),
          (e.cancelled = !1),
          e)
        : new Vt(this)
    }),
    (Lt.prototype.toString = function () {
      let e = 'Request has failed.'
      return r.defined(this.statusCode) && (e += ` Status Code: ${this.statusCode}`), e
    }),
    Object.defineProperties(Qt.prototype, {
      numberOfListeners: {
        get: function () {
          return this._listeners.length - this._toRemove.length
        },
      },
    }),
    (Qt.prototype.addEventListener = function (e, t) {
      this._listeners.push(e), this._scopes.push(t)
      const n = this
      return function () {
        n.removeEventListener(e, t)
      }
    }),
    (Qt.prototype.removeEventListener = function (e, t) {
      const n = this._listeners,
        r = this._scopes
      let o = -1
      for (let i = 0; i < n.length; i++)
        if (n[i] === e && r[i] === t) {
          o = i
          break
        }
      return (
        -1 !== o &&
        (this._insideRaiseEvent
          ? (this._toRemove.push(o), (n[o] = void 0), (r[o] = void 0))
          : (n.splice(o, 1), r.splice(o, 1)),
        !0)
      )
    }),
    (Qt.prototype.raiseEvent = function () {
      let e
      this._insideRaiseEvent = !0
      const t = this._listeners,
        n = this._scopes
      let o = t.length
      for (e = 0; e < o; e++) {
        const o = t[e]
        r.defined(o) && t[e].apply(n[e], arguments)
      }
      const i = this._toRemove
      if (((o = i.length), o > 0)) {
        for (i.sort($t), e = 0; e < o; e++) {
          const r = i[e]
          t.splice(r, 1), n.splice(r, 1)
        }
        i.length = 0
      }
      this._insideRaiseEvent = !1
    }),
    Object.defineProperties(Wt.prototype, {
      length: {
        get: function () {
          return this._length
        },
      },
      internalArray: {
        get: function () {
          return this._array
        },
      },
      maximumLength: {
        get: function () {
          return this._maximumLength
        },
        set: function (e) {
          const t = this._length
          if (e < t) {
            const n = this._array
            for (let r = e; r < t; ++r) n[r] = void 0
            ;(this._length = e), (n.length = e)
          }
          this._maximumLength = e
        },
      },
      comparator: {
        get: function () {
          return this._comparator
        },
      },
    }),
    (Wt.prototype.reserve = function (e) {
      ;(e = r.defaultValue(e, this._length)), (this._array.length = e)
    }),
    (Wt.prototype.heapify = function (e) {
      e = r.defaultValue(e, 0)
      const t = this._length,
        n = this._comparator,
        o = this._array
      let i = -1,
        s = !0
      for (; s; ) {
        const r = 2 * (e + 1),
          a = r - 1
        ;(i = a < t && n(o[a], o[e]) < 0 ? a : e),
          r < t && n(o[r], o[i]) < 0 && (i = r),
          i !== e ? (Ht(o, i, e), (e = i)) : (s = !1)
      }
    }),
    (Wt.prototype.resort = function () {
      const e = this._length
      for (let t = Math.ceil(e / 2); t >= 0; --t) this.heapify(t)
    }),
    (Wt.prototype.insert = function (e) {
      const t = this._array,
        n = this._comparator,
        o = this._maximumLength
      let i,
        s = this._length++
      for (s < t.length ? (t[s] = e) : t.push(e); 0 !== s; ) {
        const e = Math.floor((s - 1) / 2)
        if (!(n(t[s], t[e]) < 0)) break
        Ht(t, s, e), (s = e)
      }
      return r.defined(o) && this._length > o && ((i = t[o]), (this._length = o)), i
    }),
    (Wt.prototype.pop = function (e) {
      if (((e = r.defaultValue(e, 0)), 0 === this._length)) return
      const t = this._array,
        n = t[e]
      return Ht(t, e, --this._length), this.heapify(e), (t[this._length] = void 0), n
    })
  const Yt = {
    numberOfAttemptedRequests: 0,
    numberOfActiveRequests: 0,
    numberOfCancelledRequests: 0,
    numberOfCancelledActiveRequests: 0,
    numberOfFailedRequests: 0,
    numberOfActiveRequestsEver: 0,
    lastNumberOfActiveRequests: 0,
  }
  let Zt = 20
  const Gt = new Wt({
    comparator: function (e, t) {
      return e.priority - t.priority
    },
  })
  ;(Gt.maximumLength = Zt), Gt.reserve(Zt)
  const Jt = []
  let Xt = {}
  const Kt = 'undefined' != typeof document ? new Rt(document.location.href) : new Rt(),
    en = new Qt()
  function tn() {}
  function nn(e) {
    r.defined(e.priorityFunction) && (e.priority = e.priorityFunction())
  }
  function rn(e) {
    return (
      e.state === jt.UNISSUED && ((e.state = jt.ISSUED), (e.deferred = Z())), e.deferred.promise
    )
  }
  function on(e) {
    const t = rn(e)
    return (
      (e.state = jt.ACTIVE),
      Jt.push(e),
      ++Yt.numberOfActiveRequests,
      ++Yt.numberOfActiveRequestsEver,
      ++Xt[e.serverKey],
      e
        .requestFunction()
        .then(
          (function (e) {
            return function (t) {
              if (e.state === jt.CANCELLED) return
              const n = e.deferred
              --Yt.numberOfActiveRequests,
                --Xt[e.serverKey],
                en.raiseEvent(),
                (e.state = jt.RECEIVED),
                (e.deferred = void 0),
                n.resolve(t)
            }
          })(e)
        )
        .catch(
          (function (e) {
            return function (t) {
              e.state !== jt.CANCELLED &&
                (++Yt.numberOfFailedRequests,
                --Yt.numberOfActiveRequests,
                --Xt[e.serverKey],
                en.raiseEvent(t),
                (e.state = jt.FAILED),
                e.deferred.reject(t))
            }
          })(e)
        ),
      t
    )
  }
  function sn(e) {
    const t = e.state === jt.ACTIVE
    if (((e.state = jt.CANCELLED), ++Yt.numberOfCancelledRequests, r.defined(e.deferred))) {
      const t = e.deferred
      ;(e.deferred = void 0), t.reject()
    }
    t && (--Yt.numberOfActiveRequests, --Xt[e.serverKey], ++Yt.numberOfCancelledActiveRequests),
      r.defined(e.cancelFunction) && e.cancelFunction()
  }
  ;(tn.maximumRequests = 50),
    (tn.maximumRequestsPerServer = 6),
    (tn.requestsByServer = { 'api.cesium.com:443': 18, 'assets.cesium.com:443': 18 }),
    (tn.throttleRequests = !0),
    (tn.debugShowStatistics = !1),
    (tn.requestCompletedEvent = en),
    Object.defineProperties(tn, {
      statistics: {
        get: function () {
          return Yt
        },
      },
      priorityHeapLength: {
        get: function () {
          return Zt
        },
        set: function (e) {
          if (e < Zt)
            for (; Gt.length > e; ) {
              sn(Gt.pop())
            }
          ;(Zt = e), (Gt.maximumLength = e), Gt.reserve(e)
        },
      },
    }),
    (tn.serverHasOpenSlots = function (e, t) {
      t = r.defaultValue(t, 1)
      const n = r.defaultValue(tn.requestsByServer[e], tn.maximumRequestsPerServer)
      return Xt[e] + t <= n
    }),
    (tn.heapHasOpenSlots = function (e) {
      return Gt.length + e <= Zt
    }),
    (tn.update = function () {
      let e,
        t,
        n = 0
      const r = Jt.length
      for (e = 0; e < r; ++e)
        (t = Jt[e]), t.cancelled && sn(t), t.state === jt.ACTIVE ? n > 0 && (Jt[e - n] = t) : ++n
      Jt.length -= n
      const o = Gt.internalArray,
        i = Gt.length
      for (e = 0; e < i; ++e) nn(o[e])
      Gt.resort()
      const s = Math.max(tn.maximumRequests - Jt.length, 0)
      let a = 0
      for (; a < s && Gt.length > 0; )
        (t = Gt.pop()),
          t.cancelled
            ? sn(t)
            : !t.throttleByServer || tn.serverHasOpenSlots(t.serverKey)
            ? (on(t), ++a)
            : sn(t)
      !(function () {
        if (!tn.debugShowStatistics) return
        0 === Yt.numberOfActiveRequests &&
          Yt.lastNumberOfActiveRequests > 0 &&
          (Yt.numberOfAttemptedRequests > 0 &&
            (console.log(`Number of attempted requests: ${Yt.numberOfAttemptedRequests}`),
            (Yt.numberOfAttemptedRequests = 0)),
          Yt.numberOfCancelledRequests > 0 &&
            (console.log(`Number of cancelled requests: ${Yt.numberOfCancelledRequests}`),
            (Yt.numberOfCancelledRequests = 0)),
          Yt.numberOfCancelledActiveRequests > 0 &&
            (console.log(
              `Number of cancelled active requests: ${Yt.numberOfCancelledActiveRequests}`
            ),
            (Yt.numberOfCancelledActiveRequests = 0)),
          Yt.numberOfFailedRequests > 0 &&
            (console.log(`Number of failed requests: ${Yt.numberOfFailedRequests}`),
            (Yt.numberOfFailedRequests = 0)))
        Yt.lastNumberOfActiveRequests = Yt.numberOfActiveRequests
      })()
    }),
    (tn.getServerKey = function (e) {
      let t = new Rt(e)
      '' === t.scheme() && ((t = new Rt(e).absoluteTo(Kt)), t.normalize())
      let n = t.authority()
      ;/:/.test(n) || (n = `${n}:${'https' === t.scheme() ? '443' : '80'}`)
      const o = Xt[n]
      return r.defined(o) || (Xt[n] = 0), n
    }),
    (tn.request = function (e) {
      if (Nt(e.url) || Ut(e.url))
        return en.raiseEvent(), (e.state = jt.RECEIVED), e.requestFunction()
      if (
        (++Yt.numberOfAttemptedRequests,
        r.defined(e.serverKey) || (e.serverKey = tn.getServerKey(e.url)),
        tn.throttleRequests && e.throttleByServer && !tn.serverHasOpenSlots(e.serverKey))
      )
        return
      if (!tn.throttleRequests || !e.throttle) return on(e)
      if (Jt.length >= tn.maximumRequests) return
      nn(e)
      const t = Gt.insert(e)
      if (r.defined(t)) {
        if (t === e) return
        sn(t)
      }
      return rn(e)
    }),
    (tn.clearForSpecs = function () {
      for (; Gt.length > 0; ) {
        sn(Gt.pop())
      }
      const e = Jt.length
      for (let t = 0; t < e; ++t) sn(Jt[t])
      ;(Jt.length = 0),
        (Xt = {}),
        (Yt.numberOfAttemptedRequests = 0),
        (Yt.numberOfActiveRequests = 0),
        (Yt.numberOfCancelledRequests = 0),
        (Yt.numberOfCancelledActiveRequests = 0),
        (Yt.numberOfFailedRequests = 0),
        (Yt.numberOfActiveRequestsEver = 0),
        (Yt.lastNumberOfActiveRequests = 0)
    }),
    (tn.numberOfActiveRequestsByServer = function (e) {
      return Xt[e]
    }),
    (tn.requestHeap = Gt)
  const an = {}
  let un = {}
  ;(an.add = function (e, t) {
    const n = `${e.toLowerCase()}:${t}`
    r.defined(un[n]) || (un[n] = !0)
  }),
    (an.remove = function (e, t) {
      const n = `${e.toLowerCase()}:${t}`
      r.defined(un[n]) && delete un[n]
    }),
    (an.contains = function (e) {
      const t = (function (e) {
        const t = new Rt(e)
        t.normalize()
        let n = t.authority()
        if (0 !== n.length) {
          if ((t.authority(n), -1 !== n.indexOf('@'))) {
            const e = n.split('@')
            n = e[1]
          }
          if (-1 === n.indexOf(':')) {
            let e = t.scheme()
            if (
              (0 === e.length &&
                ((e = window.location.protocol), (e = e.substring(0, e.length - 1))),
              'http' === e)
            )
              n += ':80'
            else {
              if ('https' !== e) return
              n += ':443'
            }
          }
          return n
        }
      })(e)
      return !(!r.defined(t) || !r.defined(un[t]))
    }),
    (an.clear = function () {
      un = {}
    })
  const cn = (function () {
    try {
      const e = new XMLHttpRequest()
      return e.open('GET', '#', !0), (e.responseType = 'blob'), 'blob' === e.responseType
    } catch (e) {
      return !1
    }
  })()
  function ln(e, t, n, o) {
    const i = e.query()
    if (0 === i.length) return {}
    let s
    if (-1 === i.indexOf('=')) {
      const e = {}
      ;(e[i] = void 0), (s = e)
    } else
      s = (function (e) {
        const t = {}
        if ('' === e) return t
        const n = e.replace(/\+/g, '%20').split(/[&;]/)
        for (let e = 0, o = n.length; e < o; ++e) {
          const o = n[e].split('='),
            i = decodeURIComponent(o[0])
          let s = o[1]
          s = r.defined(s) ? decodeURIComponent(s) : ''
          const a = t[i]
          'string' == typeof a ? (t[i] = [a, s]) : Array.isArray(a) ? a.push(s) : (t[i] = s)
        }
        return t
      })(i)
    ;(t._queryParameters = n ? hn(s, t._queryParameters, o) : s), e.search('')
  }
  function dn(e, t) {
    const n = t._queryParameters,
      o = Object.keys(n)
    1 !== o.length || r.defined(n[o[0]])
      ? e.search(
          (function (e) {
            let t = ''
            for (const n in e)
              if (e.hasOwnProperty(n)) {
                const r = e[n],
                  o = `${encodeURIComponent(n)}=`
                if (Array.isArray(r))
                  for (let e = 0, n = r.length; e < n; ++e) t += `${o + encodeURIComponent(r[e])}&`
                else t += `${o + encodeURIComponent(r)}&`
              }
            return (t = t.slice(0, -1)), t
          })(n)
        )
      : e.search(o[0])
  }
  function fn(e, t) {
    return r.defined(e) ? (r.defined(e.clone) ? e.clone() : Tt(e)) : t
  }
  function pn(e) {
    if (e.state === jt.ISSUED || e.state === jt.ACTIVE)
      throw new n.RuntimeError('The Resource is already being fetched.')
    ;(e.state = jt.UNISSUED), (e.deferred = void 0)
  }
  function hn(e, t, n) {
    if (!n) return s.combine(e, t)
    const o = Tt(e, !0)
    for (const e in t)
      if (t.hasOwnProperty(e)) {
        let n = o[e]
        const i = t[e]
        r.defined(n)
          ? (Array.isArray(n) || (n = o[e] = [n]), (o[e] = n.concat(i)))
          : (o[e] = Array.isArray(i) ? i.slice() : i)
      }
    return o
  }
  function mn(e) {
    'string' == typeof (e = r.defaultValue(e, r.defaultValue.EMPTY_OBJECT)) && (e = { url: e }),
      (this._url = void 0),
      (this._templateValues = fn(e.templateValues, {})),
      (this._queryParameters = fn(e.queryParameters, {})),
      (this.headers = fn(e.headers, {})),
      (this.request = r.defaultValue(e.request, new Vt())),
      (this.proxy = e.proxy),
      (this.retryCallback = e.retryCallback),
      (this.retryAttempts = r.defaultValue(e.retryAttempts, 0)),
      (this._retryCount = 0)
    const t = new Rt(e.url)
    ln(t, this, !0, !0), t.fragment(''), (this._url = t.toString())
  }
  let gn
  function yn(e) {
    const t = e.resource,
      n = e.flipY,
      o = e.skipColorSpaceConversion,
      i = e.preferImageBitmap,
      s = t.request
    ;(s.url = t.url),
      (s.requestFunction = function () {
        let e = !1
        t.isDataUri || t.isBlobUri || (e = t.isCrossOriginUrl)
        const r = Z()
        return mn._Implementations.createImage(s, e, r, n, o, i), r.promise
      })
    const a = tn.request(s)
    if (r.defined(a))
      return a.catch(function (e) {
        return s.state !== jt.FAILED
          ? Promise.reject(e)
          : t.retryOnError(e).then(function (r) {
              return r
                ? ((s.state = jt.UNISSUED),
                  (s.deferred = void 0),
                  yn({ resource: t, flipY: n, skipColorSpaceConversion: o, preferImageBitmap: i }))
                : Promise.reject(e)
            })
      })
  }
  function vn(e, t, n) {
    const o = {}
    ;(o[t] = n), e.setQueryParameters(o)
    const i = e.request
    ;(i.url = e.url),
      (i.requestFunction = function () {
        const t = Z()
        return (
          (window[n] = function (e) {
            t.resolve(e)
            try {
              delete window[n]
            } catch (e) {
              window[n] = void 0
            }
          }),
          mn._Implementations.loadAndExecuteScript(e.url, n, t),
          t.promise
        )
      })
    const s = tn.request(i)
    if (r.defined(s))
      return s.catch(function (r) {
        return i.state !== jt.FAILED
          ? Promise.reject(r)
          : e.retryOnError(r).then(function (o) {
              return o
                ? ((i.state = jt.UNISSUED), (i.deferred = void 0), vn(e, t, n))
                : Promise.reject(r)
            })
      })
  }
  ;(mn.createIfNeeded = function (e) {
    return e instanceof mn
      ? e.getDerivedResource({ request: e.request })
      : 'string' != typeof e
      ? e
      : new mn({ url: e })
  }),
    (mn.supportsImageBitmapOptions = function () {
      if (r.defined(gn)) return gn
      if ('function' != typeof createImageBitmap) return (gn = Promise.resolve(!1)), gn
      return (
        (gn = mn
          .fetchBlob({
            url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAABGdBTUEAAE4g3rEiDgAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAADElEQVQI12Ng6GAAAAEUAIngE3ZiAAAAAElFTkSuQmCC',
          })
          .then(function (e) {
            return Promise.all([
              createImageBitmap(e, {
                imageOrientation: 'flipY',
                premultiplyAlpha: 'none',
                colorSpaceConversion: 'none',
              }),
              createImageBitmap(e),
            ])
          })
          .then(function (e) {
            const t = Mt(e[0]),
              n = Mt(e[1])
            return t[1] !== n[1]
          })
          .catch(function () {
            return !1
          })),
        gn
      )
    }),
    Object.defineProperties(mn, {
      isBlobSupported: {
        get: function () {
          return cn
        },
      },
    }),
    Object.defineProperties(mn.prototype, {
      queryParameters: {
        get: function () {
          return this._queryParameters
        },
      },
      templateValues: {
        get: function () {
          return this._templateValues
        },
      },
      url: {
        get: function () {
          return this.getUrlComponent(!0, !0)
        },
        set: function (e) {
          const t = new Rt(e)
          ln(t, this, !1), t.fragment(''), (this._url = t.toString())
        },
      },
      extension: {
        get: function () {
          return (function (e) {
            const t = new Rt(e)
            t.normalize()
            let n = t.path(),
              r = n.lastIndexOf('/')
            return (
              -1 !== r && (n = n.substr(r + 1)),
              (r = n.lastIndexOf('.')),
              (n = -1 === r ? '' : n.substr(r + 1)),
              n
            )
          })(this._url)
        },
      },
      isDataUri: {
        get: function () {
          return Nt(this._url)
        },
      },
      isBlobUri: {
        get: function () {
          return Ut(this._url)
        },
      },
      isCrossOriginUrl: {
        get: function () {
          return (function (e) {
            r.defined(kt) || (kt = document.createElement('a')), (kt.href = window.location.href)
            const t = kt.host,
              n = kt.protocol
            return (kt.href = e), (kt.href = kt.href), n !== kt.protocol || t !== kt.host
          })(this._url)
        },
      },
      hasHeaders: {
        get: function () {
          return Object.keys(this.headers).length > 0
        },
      },
    }),
    (mn.prototype.toString = function () {
      return this.getUrlComponent(!0, !0)
    }),
    (mn.prototype.getUrlComponent = function (e, t) {
      if (this.isDataUri) return this._url
      const n = new Rt(this._url)
      e && dn(n, this)
      let o = n.toString().replace(/%7B/g, '{').replace(/%7D/g, '}')
      const i = this._templateValues
      return (
        (o = o.replace(/{(.*?)}/g, function (e, t) {
          const n = i[t]
          return r.defined(n) ? encodeURIComponent(n) : e
        })),
        t && r.defined(this.proxy) && (o = this.proxy.getURL(o)),
        o
      )
    }),
    (mn.prototype.setQueryParameters = function (e, t) {
      this._queryParameters = t
        ? hn(this._queryParameters, e, !1)
        : hn(e, this._queryParameters, !1)
    }),
    (mn.prototype.appendQueryParameters = function (e) {
      this._queryParameters = hn(e, this._queryParameters, !0)
    }),
    (mn.prototype.setTemplateValues = function (e, t) {
      this._templateValues = t
        ? s.combine(this._templateValues, e)
        : s.combine(e, this._templateValues)
    }),
    (mn.prototype.getDerivedResource = function (e) {
      const t = this.clone()
      if (((t._retryCount = 0), r.defined(e.url))) {
        const n = new Rt(e.url)
        ln(n, t, !0, r.defaultValue(e.preserveQueryParameters, !1)),
          n.fragment(''),
          '' !== n.scheme()
            ? (t._url = n.toString())
            : (t._url = n.absoluteTo(new Rt(qt(this._url))).toString())
      }
      return (
        r.defined(e.queryParameters) &&
          (t._queryParameters = s.combine(e.queryParameters, t._queryParameters)),
        r.defined(e.templateValues) &&
          (t._templateValues = s.combine(e.templateValues, t.templateValues)),
        r.defined(e.headers) && (t.headers = s.combine(e.headers, t.headers)),
        r.defined(e.proxy) && (t.proxy = e.proxy),
        r.defined(e.request) && (t.request = e.request),
        r.defined(e.retryCallback) && (t.retryCallback = e.retryCallback),
        r.defined(e.retryAttempts) && (t.retryAttempts = e.retryAttempts),
        t
      )
    }),
    (mn.prototype.retryOnError = function (e) {
      const t = this.retryCallback
      if ('function' != typeof t || this._retryCount >= this.retryAttempts)
        return Promise.resolve(!1)
      const n = this
      return Promise.resolve(t(this, e)).then(function (e) {
        return ++n._retryCount, e
      })
    }),
    (mn.prototype.clone = function (e) {
      return (
        r.defined(e) || (e = new mn({ url: this._url })),
        (e._url = this._url),
        (e._queryParameters = Tt(this._queryParameters)),
        (e._templateValues = Tt(this._templateValues)),
        (e.headers = Tt(this.headers)),
        (e.proxy = this.proxy),
        (e.retryCallback = this.retryCallback),
        (e.retryAttempts = this.retryAttempts),
        (e._retryCount = 0),
        (e.request = this.request.clone()),
        e
      )
    }),
    (mn.prototype.getBaseUri = function (e) {
      return (function (e, t) {
        let n = ''
        const r = e.lastIndexOf('/')
        return (
          -1 !== r && (n = e.substring(0, r + 1)),
          t
            ? (0 !== (e = new Rt(e)).query().length && (n += `?${e.query()}`),
              0 !== e.fragment().length && (n += `#${e.fragment()}`),
              n)
            : n
        )
      })(this.getUrlComponent(e), e)
    }),
    (mn.prototype.appendForwardSlash = function () {
      var e
      this._url = ((0 !== (e = this._url).length && '/' === e[e.length - 1]) || (e = `${e}/`), e)
    }),
    (mn.prototype.fetchArrayBuffer = function () {
      return this.fetch({ responseType: 'arraybuffer' })
    }),
    (mn.fetchArrayBuffer = function (e) {
      return new mn(e).fetchArrayBuffer()
    }),
    (mn.prototype.fetchBlob = function () {
      return this.fetch({ responseType: 'blob' })
    }),
    (mn.fetchBlob = function (e) {
      return new mn(e).fetchBlob()
    }),
    (mn.prototype.fetchImage = function (e) {
      e = r.defaultValue(e, r.defaultValue.EMPTY_OBJECT)
      const t = r.defaultValue(e.preferImageBitmap, !1),
        n = r.defaultValue(e.preferBlob, !1),
        o = r.defaultValue(e.flipY, !1),
        i = r.defaultValue(e.skipColorSpaceConversion, !1)
      if ((pn(this.request), !cn || this.isDataUri || this.isBlobUri || (!this.hasHeaders && !n)))
        return yn({ resource: this, flipY: o, skipColorSpaceConversion: i, preferImageBitmap: t })
      const s = this.fetchBlob()
      if (!r.defined(s)) return
      let a, u, c, l
      return mn
        .supportsImageBitmapOptions()
        .then(function (e) {
          return (a = e), (u = a && t), s
        })
        .then(function (e) {
          if (!r.defined(e)) return
          if (((l = e), u))
            return mn.createImageBitmapFromBlob(e, {
              flipY: o,
              premultiplyAlpha: !1,
              skipColorSpaceConversion: i,
            })
          const t = window.URL.createObjectURL(e)
          return (
            (c = new mn({ url: t })),
            yn({ resource: c, flipY: o, skipColorSpaceConversion: i, preferImageBitmap: !1 })
          )
        })
        .then(function (e) {
          if (r.defined(e)) return (e.blob = l), u || window.URL.revokeObjectURL(c.url), e
        })
        .catch(function (e) {
          return r.defined(c) && window.URL.revokeObjectURL(c.url), (e.blob = l), Promise.reject(e)
        })
    }),
    (mn.fetchImage = function (e) {
      return new mn(e).fetchImage({
        flipY: e.flipY,
        skipColorSpaceConversion: e.skipColorSpaceConversion,
        preferBlob: e.preferBlob,
        preferImageBitmap: e.preferImageBitmap,
      })
    }),
    (mn.prototype.fetchText = function () {
      return this.fetch({ responseType: 'text' })
    }),
    (mn.fetchText = function (e) {
      return new mn(e).fetchText()
    }),
    (mn.prototype.fetchJson = function () {
      const e = this.fetch({
        responseType: 'text',
        headers: { Accept: 'application/json,*/*;q=0.01' },
      })
      if (r.defined(e))
        return e.then(function (e) {
          if (r.defined(e)) return JSON.parse(e)
        })
    }),
    (mn.fetchJson = function (e) {
      return new mn(e).fetchJson()
    }),
    (mn.prototype.fetchXML = function () {
      return this.fetch({ responseType: 'document', overrideMimeType: 'text/xml' })
    }),
    (mn.fetchXML = function (e) {
      return new mn(e).fetchXML()
    }),
    (mn.prototype.fetchJsonp = function (e) {
      let t
      ;(e = r.defaultValue(e, 'callback')), pn(this.request)
      do {
        t = `loadJsonp${o.CesiumMath.nextRandomNumber().toString().substring(2, 8)}`
      } while (r.defined(window[t]))
      return vn(this, e, t)
    }),
    (mn.fetchJsonp = function (e) {
      return new mn(e).fetchJsonp(e.callbackParameterName)
    }),
    (mn.prototype._makeRequest = function (e) {
      const t = this
      pn(t.request)
      const n = t.request
      ;(n.url = t.url),
        (n.requestFunction = function () {
          const o = e.responseType,
            i = s.combine(e.headers, t.headers),
            a = e.overrideMimeType,
            u = e.method,
            c = e.data,
            l = Z(),
            d = mn._Implementations.loadWithXhr(t.url, o, u, c, i, l, a)
          return (
            r.defined(d) &&
              r.defined(d.abort) &&
              (n.cancelFunction = function () {
                d.abort()
              }),
            l.promise
          )
        })
      const o = tn.request(n)
      if (r.defined(o))
        return o
          .then(function (e) {
            return (n.cancelFunction = void 0), e
          })
          .catch(function (r) {
            return (
              (n.cancelFunction = void 0),
              n.state !== jt.FAILED
                ? Promise.reject(r)
                : t.retryOnError(r).then(function (o) {
                    return o
                      ? ((n.state = jt.UNISSUED), (n.deferred = void 0), t.fetch(e))
                      : Promise.reject(r)
                  })
            )
          })
    })
  const Cn = /^data:(.*?)(;base64)?,(.*)$/
  function _n(e, t) {
    const n = decodeURIComponent(t)
    return e ? atob(n) : n
  }
  function wn(e, t) {
    const n = _n(e, t),
      r = new ArrayBuffer(n.length),
      o = new Uint8Array(r)
    for (let e = 0; e < n.length; e++) o[e] = n.charCodeAt(e)
    return r
  }
  function bn(e, t) {
    switch (t) {
      case 'text':
        return e.toString('utf8')
      case 'json':
        return JSON.parse(e.toString('utf8'))
      default:
        return new Uint8Array(e).buffer
    }
  }
  ;(mn.prototype.fetch = function (e) {
    return ((e = fn(e, {})).method = 'GET'), this._makeRequest(e)
  }),
    (mn.fetch = function (e) {
      return new mn(e).fetch({ responseType: e.responseType, overrideMimeType: e.overrideMimeType })
    }),
    (mn.prototype.delete = function (e) {
      return ((e = fn(e, {})).method = 'DELETE'), this._makeRequest(e)
    }),
    (mn.delete = function (e) {
      return new mn(e).delete({
        responseType: e.responseType,
        overrideMimeType: e.overrideMimeType,
        data: e.data,
      })
    }),
    (mn.prototype.head = function (e) {
      return ((e = fn(e, {})).method = 'HEAD'), this._makeRequest(e)
    }),
    (mn.head = function (e) {
      return new mn(e).head({ responseType: e.responseType, overrideMimeType: e.overrideMimeType })
    }),
    (mn.prototype.options = function (e) {
      return ((e = fn(e, {})).method = 'OPTIONS'), this._makeRequest(e)
    }),
    (mn.options = function (e) {
      return new mn(e).options({
        responseType: e.responseType,
        overrideMimeType: e.overrideMimeType,
      })
    }),
    (mn.prototype.post = function (e, t) {
      return (
        n.Check.defined('data', e),
        ((t = fn(t, {})).method = 'POST'),
        (t.data = e),
        this._makeRequest(t)
      )
    }),
    (mn.post = function (e) {
      return new mn(e).post(e.data, {
        responseType: e.responseType,
        overrideMimeType: e.overrideMimeType,
      })
    }),
    (mn.prototype.put = function (e, t) {
      return (
        n.Check.defined('data', e),
        ((t = fn(t, {})).method = 'PUT'),
        (t.data = e),
        this._makeRequest(t)
      )
    }),
    (mn.put = function (e) {
      return new mn(e).put(e.data, {
        responseType: e.responseType,
        overrideMimeType: e.overrideMimeType,
      })
    }),
    (mn.prototype.patch = function (e, t) {
      return (
        n.Check.defined('data', e),
        ((t = fn(t, {})).method = 'PATCH'),
        (t.data = e),
        this._makeRequest(t)
      )
    }),
    (mn.patch = function (e) {
      return new mn(e).patch(e.data, {
        responseType: e.responseType,
        overrideMimeType: e.overrideMimeType,
      })
    }),
    (mn._Implementations = {}),
    (mn._Implementations.loadImageElement = function (e, t, n) {
      const r = new Image()
      ;(r.onload = function () {
        0 === r.naturalWidth &&
          0 === r.naturalHeight &&
          0 === r.width &&
          0 === r.height &&
          ((r.width = 300), (r.height = 150)),
          n.resolve(r)
      }),
        (r.onerror = function (e) {
          n.reject(e)
        }),
        t && (an.contains(e) ? (r.crossOrigin = 'use-credentials') : (r.crossOrigin = '')),
        (r.src = e)
    }),
    (mn._Implementations.createImage = function (e, t, o, i, s, a) {
      const u = e.url
      mn.supportsImageBitmapOptions()
        .then(function (c) {
          if (!c || !a) return void mn._Implementations.loadImageElement(u, t, o)
          const l = Z(),
            d = mn._Implementations.loadWithXhr(
              u,
              'blob',
              'GET',
              void 0,
              void 0,
              l,
              void 0,
              void 0,
              void 0
            )
          return (
            r.defined(d) &&
              r.defined(d.abort) &&
              (e.cancelFunction = function () {
                d.abort()
              }),
            l.promise
              .then(function (e) {
                if (r.defined(e))
                  return mn.createImageBitmapFromBlob(e, {
                    flipY: i,
                    premultiplyAlpha: !1,
                    skipColorSpaceConversion: s,
                  })
                o.reject(
                  new n.RuntimeError(`Successfully retrieved ${u} but it contained no content.`)
                )
              })
              .then(function (e) {
                o.resolve(e)
              })
          )
        })
        .catch(function (e) {
          o.reject(e)
        })
    }),
    (mn.createImageBitmapFromBlob = function (e, t) {
      return (
        n.Check.defined('options', t),
        n.Check.typeOf.bool('options.flipY', t.flipY),
        n.Check.typeOf.bool('options.premultiplyAlpha', t.premultiplyAlpha),
        n.Check.typeOf.bool('options.skipColorSpaceConversion', t.skipColorSpaceConversion),
        createImageBitmap(e, {
          imageOrientation: t.flipY ? 'flipY' : 'none',
          premultiplyAlpha: t.premultiplyAlpha ? 'premultiply' : 'none',
          colorSpaceConversion: t.skipColorSpaceConversion ? 'none' : 'default',
        })
      )
    })
  const xn = 'undefined' == typeof XMLHttpRequest
  function Sn(e) {
    if (
      ((e = r.defaultValue(e, r.defaultValue.EMPTY_OBJECT)),
      (this._dates = void 0),
      (this._samples = void 0),
      (this._dateColumn = -1),
      (this._xPoleWanderRadiansColumn = -1),
      (this._yPoleWanderRadiansColumn = -1),
      (this._ut1MinusUtcSecondsColumn = -1),
      (this._xCelestialPoleOffsetRadiansColumn = -1),
      (this._yCelestialPoleOffsetRadiansColumn = -1),
      (this._taiMinusUtcSecondsColumn = -1),
      (this._columnCount = 0),
      (this._lastIndex = -1),
      (this._downloadPromise = void 0),
      (this._dataError = void 0),
      (this._addNewLeapSeconds = r.defaultValue(e.addNewLeapSeconds, !0)),
      r.defined(e.data))
    )
      En(this, e.data)
    else if (r.defined(e.url)) {
      const t = mn.createIfNeeded(e.url),
        n = this
      this._downloadPromise = t
        .fetchJson()
        .then(function (e) {
          En(n, e)
        })
        .catch(function () {
          n._dataError = `An error occurred while retrieving the EOP data from the URL ${t.url}.`
        })
    } else
      En(this, {
        columnNames: [
          'dateIso8601',
          'modifiedJulianDateUtc',
          'xPoleWanderRadians',
          'yPoleWanderRadians',
          'ut1MinusUtcSeconds',
          'lengthOfDayCorrectionSeconds',
          'xCelestialPoleOffsetRadians',
          'yCelestialPoleOffsetRadians',
          'taiMinusUtcSeconds',
        ],
        samples: [],
      })
  }
  function An(e, t) {
    return At.compare(e.julianDate, t)
  }
  function En(e, t) {
    if (!r.defined(t.columnNames))
      return void (e._dataError = 'Error in loaded EOP data: The columnNames property is required.')
    if (!r.defined(t.samples))
      return void (e._dataError = 'Error in loaded EOP data: The samples property is required.')
    const n = t.columnNames.indexOf('modifiedJulianDateUtc'),
      o = t.columnNames.indexOf('xPoleWanderRadians'),
      i = t.columnNames.indexOf('yPoleWanderRadians'),
      s = t.columnNames.indexOf('ut1MinusUtcSeconds'),
      a = t.columnNames.indexOf('xCelestialPoleOffsetRadians'),
      u = t.columnNames.indexOf('yCelestialPoleOffsetRadians'),
      c = t.columnNames.indexOf('taiMinusUtcSeconds')
    if (n < 0 || o < 0 || i < 0 || s < 0 || a < 0 || u < 0 || c < 0)
      return void (e._dataError =
        'Error in loaded EOP data: The columnNames property must include modifiedJulianDateUtc, xPoleWanderRadians, yPoleWanderRadians, ut1MinusUtcSeconds, xCelestialPoleOffsetRadians, yCelestialPoleOffsetRadians, and taiMinusUtcSeconds columns')
    const l = (e._samples = t.samples),
      d = (e._dates = [])
    let f
    ;(e._dateColumn = n),
      (e._xPoleWanderRadiansColumn = o),
      (e._yPoleWanderRadiansColumn = i),
      (e._ut1MinusUtcSecondsColumn = s),
      (e._xCelestialPoleOffsetRadiansColumn = a),
      (e._yCelestialPoleOffsetRadiansColumn = u),
      (e._taiMinusUtcSecondsColumn = c),
      (e._columnCount = t.columnNames.length),
      (e._lastIndex = void 0)
    const p = e._addNewLeapSeconds
    for (let t = 0, o = l.length; t < o; t += e._columnCount) {
      const e = l[t + n],
        o = l[t + c],
        i = new At(e + st.MODIFIED_JULIAN_DATE_DIFFERENCE, o, at.TAI)
      if ((d.push(i), p)) {
        if (o !== f && r.defined(f)) {
          const e = At.leapSeconds,
            t = tt(e, i, An)
          if (t < 0) {
            const n = new it(i, o)
            e.splice(~t, 0, n)
          }
        }
        f = o
      }
    }
  }
  function On(e, t, n, r, o) {
    const i = n * r
    ;(o.xPoleWander = t[i + e._xPoleWanderRadiansColumn]),
      (o.yPoleWander = t[i + e._yPoleWanderRadiansColumn]),
      (o.xPoleOffset = t[i + e._xCelestialPoleOffsetRadiansColumn]),
      (o.yPoleOffset = t[i + e._yCelestialPoleOffsetRadiansColumn]),
      (o.ut1MinusUtc = t[i + e._ut1MinusUtcSecondsColumn])
  }
  function In(e, t, n) {
    return t + e * (n - t)
  }
  function Pn(e, t, n, r, o, i, s) {
    const a = e._columnCount
    if (i > t.length - 1)
      return (
        (s.xPoleWander = 0),
        (s.yPoleWander = 0),
        (s.xPoleOffset = 0),
        (s.yPoleOffset = 0),
        (s.ut1MinusUtc = 0),
        s
      )
    const u = t[o],
      c = t[i]
    if (u.equals(c) || r.equals(u)) return On(e, n, o, a, s), s
    if (r.equals(c)) return On(e, n, i, a, s), s
    const l = At.secondsDifference(r, u) / At.secondsDifference(c, u),
      d = o * a,
      f = i * a
    let p = n[d + e._ut1MinusUtcSecondsColumn],
      h = n[f + e._ut1MinusUtcSecondsColumn]
    const m = h - p
    if (m > 0.5 || m < -0.5) {
      const t = n[d + e._taiMinusUtcSecondsColumn],
        o = n[f + e._taiMinusUtcSecondsColumn]
      t !== o && (c.equals(r) ? (p = h) : (h -= o - t))
    }
    return (
      (s.xPoleWander = In(
        l,
        n[d + e._xPoleWanderRadiansColumn],
        n[f + e._xPoleWanderRadiansColumn]
      )),
      (s.yPoleWander = In(
        l,
        n[d + e._yPoleWanderRadiansColumn],
        n[f + e._yPoleWanderRadiansColumn]
      )),
      (s.xPoleOffset = In(
        l,
        n[d + e._xCelestialPoleOffsetRadiansColumn],
        n[f + e._xCelestialPoleOffsetRadiansColumn]
      )),
      (s.yPoleOffset = In(
        l,
        n[d + e._yCelestialPoleOffsetRadiansColumn],
        n[f + e._yCelestialPoleOffsetRadiansColumn]
      )),
      (s.ut1MinusUtc = In(l, p, h)),
      s
    )
  }
  function Rn(e, t, n) {
    ;(this.heading = r.defaultValue(e, 0)),
      (this.pitch = r.defaultValue(t, 0)),
      (this.roll = r.defaultValue(n, 0))
  }
  ;(mn._Implementations.loadWithXhr = function (e, t, o, i, s, a, u) {
    const c = Cn.exec(e)
    if (null !== c)
      return void a.resolve(
        (function (e, t) {
          t = r.defaultValue(t, '')
          const n = e[1],
            o = !!e[2],
            i = e[3]
          let s, a
          switch (t) {
            case '':
            case 'text':
              return _n(o, i)
            case 'arraybuffer':
              return wn(o, i)
            case 'blob':
              return (s = wn(o, i)), new Blob([s], { type: n })
            case 'document':
              return (a = new DOMParser()), a.parseFromString(_n(o, i), n)
            case 'json':
              return JSON.parse(_n(o, i))
          }
        })(c, t)
      )
    if (xn)
      return void (function (e, t, r, o, i, s, a) {
        const u = require('url').parse(e),
          c = 'https:' === u.protocol ? require('https') : require('http'),
          l = require('zlib'),
          d = {
            protocol: u.protocol,
            hostname: u.hostname,
            port: u.port,
            path: u.path,
            query: u.query,
            method: r,
            headers: i,
          }
        c.request(d)
          .on('response', function (e) {
            if (e.statusCode < 200 || e.statusCode >= 300)
              return void s.reject(new Lt(e.statusCode, e, e.headers))
            const r = []
            e.on('data', function (e) {
              r.push(e)
            }),
              e.on('end', function () {
                const o = Buffer.concat(r)
                'gzip' === e.headers['content-encoding']
                  ? l.gunzip(o, function (e, r) {
                      e
                        ? s.reject(new n.RuntimeError('Error decompressing response.'))
                        : s.resolve(bn(r, t))
                    })
                  : s.resolve(bn(o, t))
              })
          })
          .on('error', function (e) {
            s.reject(new Lt())
          })
          .end()
      })(e, t, o, 0, s, a)
    const l = new XMLHttpRequest()
    if (
      (an.contains(e) && (l.withCredentials = !0),
      l.open(o, e, !0),
      r.defined(u) && r.defined(l.overrideMimeType) && l.overrideMimeType(u),
      r.defined(s))
    )
      for (const e in s) s.hasOwnProperty(e) && l.setRequestHeader(e, s[e])
    r.defined(t) && (l.responseType = t)
    let d = !1
    return (
      'string' == typeof e &&
        (d =
          0 === e.indexOf('file://') ||
          ('undefined' != typeof window && 'file://' === window.location.origin)),
      (l.onload = function () {
        if ((l.status < 200 || l.status >= 300) && (!d || 0 !== l.status))
          return void a.reject(new Lt(l.status, l.response, l.getAllResponseHeaders()))
        const e = l.response,
          i = l.responseType
        if ('HEAD' === o || 'OPTIONS' === o) {
          const e = l
              .getAllResponseHeaders()
              .trim()
              .split(/[\r\n]+/),
            t = {}
          return (
            e.forEach(function (e) {
              const n = e.split(': '),
                r = n.shift()
              t[r] = n.join(': ')
            }),
            void a.resolve(t)
          )
        }
        if (204 === l.status) a.resolve()
        else if (!r.defined(e) || (r.defined(t) && i !== t))
          if ('json' === t && 'string' == typeof e)
            try {
              a.resolve(JSON.parse(e))
            } catch (e) {
              a.reject(e)
            }
          else
            ('' === i || 'document' === i) &&
            r.defined(l.responseXML) &&
            l.responseXML.hasChildNodes()
              ? a.resolve(l.responseXML)
              : ('' !== i && 'text' !== i) || !r.defined(l.responseText)
              ? a.reject(new n.RuntimeError('Invalid XMLHttpRequest response type.'))
              : a.resolve(l.responseText)
        else a.resolve(e)
      }),
      (l.onerror = function (e) {
        a.reject(new Lt())
      }),
      l.send(i),
      l
    )
  }),
    (mn._Implementations.loadAndExecuteScript = function (e, t, n) {
      return (function (e) {
        const t = Z(),
          n = document.createElement('script')
        ;(n.async = !0), (n.src = e)
        const r = document.getElementsByTagName('head')[0]
        return (
          (n.onload = function () {
            ;(n.onload = void 0), r.removeChild(n), t.resolve()
          }),
          (n.onerror = function (e) {
            t.reject(e)
          }),
          r.appendChild(n),
          t.promise
        )
      })(e).catch(function (e) {
        n.reject(e)
      })
    }),
    (mn._DefaultImplementations = {}),
    (mn._DefaultImplementations.createImage = mn._Implementations.createImage),
    (mn._DefaultImplementations.loadWithXhr = mn._Implementations.loadWithXhr),
    (mn._DefaultImplementations.loadAndExecuteScript = mn._Implementations.loadAndExecuteScript),
    (mn.DEFAULT = Object.freeze(
      new mn({ url: 'undefined' == typeof document ? '' : document.location.href.split('?')[0] })
    )),
    (Sn.NONE = Object.freeze({
      getPromiseToLoad: function () {
        return Promise.resolve()
      },
      compute: function (e, t) {
        return (
          r.defined(t)
            ? ((t.xPoleWander = 0),
              (t.yPoleWander = 0),
              (t.xPoleOffset = 0),
              (t.yPoleOffset = 0),
              (t.ut1MinusUtc = 0))
            : (t = new nt(0, 0, 0, 0, 0)),
          t
        )
      },
    })),
    (Sn.prototype.getPromiseToLoad = function () {
      return Promise.resolve(this._downloadPromise)
    }),
    (Sn.prototype.compute = function (e, t) {
      if (!r.defined(this._samples)) {
        if (r.defined(this._dataError)) throw new n.RuntimeError(this._dataError)
        return
      }
      if ((r.defined(t) || (t = new nt(0, 0, 0, 0, 0)), 0 === this._samples.length))
        return (
          (t.xPoleWander = 0),
          (t.yPoleWander = 0),
          (t.xPoleOffset = 0),
          (t.yPoleOffset = 0),
          (t.ut1MinusUtc = 0),
          t
        )
      const o = this._dates,
        i = this._lastIndex
      let s = 0,
        a = 0
      if (r.defined(i)) {
        const n = o[i],
          u = o[i + 1],
          c = At.lessThanOrEquals(n, e),
          l = !r.defined(u),
          d = l || At.greaterThanOrEquals(u, e)
        if (c && d)
          return (
            (s = i),
            !l && u.equals(e) && ++s,
            (a = s + 1),
            Pn(this, o, this._samples, e, s, a, t),
            t
          )
      }
      let u = tt(o, e, At.compare, this._dateColumn)
      return (
        u >= 0
          ? (u < o.length - 1 && o[u + 1].equals(e) && ++u, (s = u), (a = u))
          : ((a = ~u), (s = a - 1), s < 0 && (s = 0)),
        (this._lastIndex = s),
        Pn(this, o, this._samples, e, s, a, t),
        t
      )
    }),
    (Rn.fromQuaternion = function (e, t) {
      r.defined(t) || (t = new Rn())
      const n = 2 * (e.w * e.y - e.z * e.x),
        i = 1 - 2 * (e.x * e.x + e.y * e.y),
        s = 2 * (e.w * e.x + e.y * e.z),
        a = 1 - 2 * (e.y * e.y + e.z * e.z),
        u = 2 * (e.w * e.z + e.x * e.y)
      return (
        (t.heading = -Math.atan2(u, a)),
        (t.roll = Math.atan2(s, i)),
        (t.pitch = -o.CesiumMath.asinClamped(n)),
        t
      )
    }),
    (Rn.fromDegrees = function (e, t, n, i) {
      return (
        r.defined(i) || (i = new Rn()),
        (i.heading = e * o.CesiumMath.RADIANS_PER_DEGREE),
        (i.pitch = t * o.CesiumMath.RADIANS_PER_DEGREE),
        (i.roll = n * o.CesiumMath.RADIANS_PER_DEGREE),
        i
      )
    }),
    (Rn.clone = function (e, t) {
      if (r.defined(e))
        return r.defined(t)
          ? ((t.heading = e.heading), (t.pitch = e.pitch), (t.roll = e.roll), t)
          : new Rn(e.heading, e.pitch, e.roll)
    }),
    (Rn.equals = function (e, t) {
      return (
        e === t ||
        (r.defined(e) &&
          r.defined(t) &&
          e.heading === t.heading &&
          e.pitch === t.pitch &&
          e.roll === t.roll)
      )
    }),
    (Rn.equalsEpsilon = function (e, t, n, i) {
      return (
        e === t ||
        (r.defined(e) &&
          r.defined(t) &&
          o.CesiumMath.equalsEpsilon(e.heading, t.heading, n, i) &&
          o.CesiumMath.equalsEpsilon(e.pitch, t.pitch, n, i) &&
          o.CesiumMath.equalsEpsilon(e.roll, t.roll, n, i))
      )
    }),
    (Rn.prototype.clone = function (e) {
      return Rn.clone(this, e)
    }),
    (Rn.prototype.equals = function (e) {
      return Rn.equals(this, e)
    }),
    (Rn.prototype.equalsEpsilon = function (e, t, n) {
      return Rn.equalsEpsilon(this, e, t, n)
    }),
    (Rn.prototype.toString = function () {
      return `(${this.heading}, ${this.pitch}, ${this.roll})`
    })
  const Tn = /((?:.*\/)|^)Cesium\.js(?:\?|\#|$)/
  let qn, zn, Mn
  function Dn(e) {
    return 'undefined' == typeof document
      ? e
      : (r.defined(qn) || (qn = document.createElement('a')),
        (qn.href = e),
        (qn.href = qn.href),
        qn.href)
  }
  function Un() {
    if (r.defined(zn)) return zn
    let e
    return (
      (e =
        'undefined' != typeof CESIUM_BASE_URL
          ? CESIUM_BASE_URL
          : 'object' == typeof define &&
            r.defined(define.amd) &&
            !define.amd.toUrlUndefined &&
            r.defined(require.toUrl)
          ? qt('..', Nn('Core/buildModuleUrl.js'))
          : (function () {
              const e = document.getElementsByTagName('script')
              for (let t = 0, n = e.length; t < n; ++t) {
                const n = e[t].getAttribute('src'),
                  r = Tn.exec(n)
                if (null !== r) return r[1]
              }
            })()),
      (zn = new mn({ url: Dn(e) })),
      zn.appendForwardSlash(),
      zn
    )
  }
  function kn(e) {
    return Dn(require.toUrl(`../${e}`))
  }
  function Fn(e) {
    return Un().getDerivedResource({ url: e }).url
  }
  function Nn(e) {
    r.defined(Mn) ||
      (Mn =
        'object' == typeof define &&
        r.defined(define.amd) &&
        !define.amd.toUrlUndefined &&
        r.defined(require.toUrl)
          ? kn
          : Fn)
    return Mn(e)
  }
  function jn(e, t, n) {
    ;(this.x = e), (this.y = t), (this.s = n)
  }
  function Bn(e) {
    ;(e = r.defaultValue(e, r.defaultValue.EMPTY_OBJECT)),
      (this._xysFileUrlTemplate = mn.createIfNeeded(e.xysFileUrlTemplate)),
      (this._interpolationOrder = r.defaultValue(e.interpolationOrder, 9)),
      (this._sampleZeroJulianEphemerisDate = r.defaultValue(
        e.sampleZeroJulianEphemerisDate,
        2442396.5
      )),
      (this._sampleZeroDateTT = new At(this._sampleZeroJulianEphemerisDate, 0, at.TAI)),
      (this._stepSizeDays = r.defaultValue(e.stepSizeDays, 1)),
      (this._samplesPerXysFile = r.defaultValue(e.samplesPerXysFile, 1e3)),
      (this._totalSamples = r.defaultValue(e.totalSamples, 27426)),
      (this._samples = new Array(3 * this._totalSamples)),
      (this._chunkDownloadsInProgress = [])
    const t = this._interpolationOrder,
      n = (this._denominators = new Array(t + 1)),
      o = (this._xTable = new Array(t + 1)),
      i = Math.pow(this._stepSizeDays, t)
    for (let e = 0; e <= t; ++e) {
      ;(n[e] = i), (o[e] = e * this._stepSizeDays)
      for (let r = 0; r <= t; ++r) r !== e && (n[e] *= e - r)
      n[e] = 1 / n[e]
    }
    ;(this._work = new Array(t + 1)), (this._coef = new Array(t + 1))
  }
  ;(Nn._cesiumScriptRegex = Tn),
    (Nn._buildModuleUrlFromBaseUrl = Fn),
    (Nn._clearBaseResource = function () {
      zn = void 0
    }),
    (Nn.setBaseUrl = function (e) {
      zn = mn.DEFAULT.getDerivedResource({ url: e })
    }),
    (Nn.getCesiumBaseUrl = Un)
  const Vn = new At(0, 0, at.TAI)
  function Ln(e, t, n) {
    const r = Vn
    return (r.dayNumber = t), (r.secondsOfDay = n), At.daysDifference(r, e._sampleZeroDateTT)
  }
  function Qn(e, t) {
    if (e._chunkDownloadsInProgress[t]) return e._chunkDownloadsInProgress[t]
    const n = Z()
    let o
    e._chunkDownloadsInProgress[t] = n
    const i = e._xysFileUrlTemplate
    return (
      (o = r.defined(i)
        ? i.getDerivedResource({ templateValues: { 0: t } })
        : new mn({ url: Nn(`Assets/IAU2006_XYS/IAU2006_XYS_${t}.json`) })),
      o.fetchJson().then(function (r) {
        e._chunkDownloadsInProgress[t] = !1
        const o = e._samples,
          i = r.samples,
          s = t * e._samplesPerXysFile * 3
        for (let e = 0, t = i.length; e < t; ++e) o[s + e] = i[e]
        n.resolve()
      }),
      n.promise
    )
  }
  ;(Bn.prototype.preload = function (e, t, n, r) {
    const o = Ln(this, e, t),
      i = Ln(this, n, r)
    let s = (o / this._stepSizeDays - this._interpolationOrder / 2) | 0
    s < 0 && (s = 0)
    let a = (i / this._stepSizeDays - this._interpolationOrder / 2) | (0 + this._interpolationOrder)
    a >= this._totalSamples && (a = this._totalSamples - 1)
    const u = (s / this._samplesPerXysFile) | 0,
      c = (a / this._samplesPerXysFile) | 0,
      l = []
    for (let e = u; e <= c; ++e) l.push(Qn(this, e))
    return Promise.all(l)
  }),
    (Bn.prototype.computeXysRadians = function (e, t, n) {
      const o = Ln(this, e, t)
      if (o < 0) return
      const i = (o / this._stepSizeDays) | 0
      if (i >= this._totalSamples) return
      const s = this._interpolationOrder
      let a = i - ((s / 2) | 0)
      a < 0 && (a = 0)
      let u = a + s
      u >= this._totalSamples && ((u = this._totalSamples - 1), (a = u - s), a < 0 && (a = 0))
      let c = !1
      const l = this._samples
      if (
        (r.defined(l[3 * a]) || (Qn(this, (a / this._samplesPerXysFile) | 0), (c = !0)),
        r.defined(l[3 * u]) || (Qn(this, (u / this._samplesPerXysFile) | 0), (c = !0)),
        c)
      )
        return
      r.defined(n) ? ((n.x = 0), (n.y = 0), (n.s = 0)) : (n = new jn(0, 0, 0))
      const d = o - a * this._stepSizeDays,
        f = this._work,
        p = this._denominators,
        h = this._coef,
        m = this._xTable
      let g, y
      for (g = 0; g <= s; ++g) f[g] = d - m[g]
      for (g = 0; g <= s; ++g) {
        for (h[g] = 1, y = 0; y <= s; ++y) y !== g && (h[g] *= f[y])
        h[g] *= p[g]
        let e = 3 * (a + g)
        ;(n.x += h[g] * l[e++]), (n.y += h[g] * l[e++]), (n.s += h[g] * l[e])
      }
      return n
    })
  const $n = {},
    Wn = {
      up: { south: 'east', north: 'west', west: 'south', east: 'north' },
      down: { south: 'west', north: 'east', west: 'north', east: 'south' },
      south: { up: 'west', down: 'east', west: 'down', east: 'up' },
      north: { up: 'east', down: 'west', west: 'up', east: 'down' },
      west: { up: 'north', down: 'south', north: 'down', south: 'up' },
      east: { up: 'south', down: 'north', north: 'up', south: 'down' },
    },
    Hn = {
      north: [-1, 0, 0],
      east: [0, 1, 0],
      up: [0, 0, 1],
      south: [1, 0, 0],
      west: [0, -1, 0],
      down: [0, 0, -1],
    },
    Yn = {},
    Zn = {
      east: new t.Cartesian3(),
      north: new t.Cartesian3(),
      up: new t.Cartesian3(),
      west: new t.Cartesian3(),
      south: new t.Cartesian3(),
      down: new t.Cartesian3(),
    }
  let Gn = new t.Cartesian3(),
    Jn = new t.Cartesian3(),
    Xn = new t.Cartesian3()
  ;($n.localFrameToFixedFrameGenerator = function (e, i) {
    if (!Wn.hasOwnProperty(e) || !Wn[e].hasOwnProperty(i))
      throw new n.DeveloperError(
        'firstAxis and secondAxis must be east, north, up, west, south or down.'
      )
    const s = Wn[e][i]
    let a
    const u = e + i
    return (
      r.defined(Yn[u])
        ? (a = Yn[u])
        : ((a = function (n, a, u) {
            if (
              (r.defined(u) || (u = new t.Matrix4()),
              t.Cartesian3.equalsEpsilon(n, t.Cartesian3.ZERO, o.CesiumMath.EPSILON14))
            )
              t.Cartesian3.unpack(Hn[e], 0, Gn),
                t.Cartesian3.unpack(Hn[i], 0, Jn),
                t.Cartesian3.unpack(Hn[s], 0, Xn)
            else if (
              o.CesiumMath.equalsEpsilon(n.x, 0, o.CesiumMath.EPSILON14) &&
              o.CesiumMath.equalsEpsilon(n.y, 0, o.CesiumMath.EPSILON14)
            ) {
              const r = o.CesiumMath.sign(n.z)
              t.Cartesian3.unpack(Hn[e], 0, Gn),
                'east' !== e && 'west' !== e && t.Cartesian3.multiplyByScalar(Gn, r, Gn),
                t.Cartesian3.unpack(Hn[i], 0, Jn),
                'east' !== i && 'west' !== i && t.Cartesian3.multiplyByScalar(Jn, r, Jn),
                t.Cartesian3.unpack(Hn[s], 0, Xn),
                'east' !== s && 'west' !== s && t.Cartesian3.multiplyByScalar(Xn, r, Xn)
            } else {
              ;(a = r.defaultValue(a, t.Ellipsoid.WGS84)).geodeticSurfaceNormal(n, Zn.up)
              const o = Zn.up,
                u = Zn.east
              ;(u.x = -n.y),
                (u.y = n.x),
                (u.z = 0),
                t.Cartesian3.normalize(u, Zn.east),
                t.Cartesian3.cross(o, u, Zn.north),
                t.Cartesian3.multiplyByScalar(Zn.up, -1, Zn.down),
                t.Cartesian3.multiplyByScalar(Zn.east, -1, Zn.west),
                t.Cartesian3.multiplyByScalar(Zn.north, -1, Zn.south),
                (Gn = Zn[e]),
                (Jn = Zn[i]),
                (Xn = Zn[s])
            }
            return (
              (u[0] = Gn.x),
              (u[1] = Gn.y),
              (u[2] = Gn.z),
              (u[3] = 0),
              (u[4] = Jn.x),
              (u[5] = Jn.y),
              (u[6] = Jn.z),
              (u[7] = 0),
              (u[8] = Xn.x),
              (u[9] = Xn.y),
              (u[10] = Xn.z),
              (u[11] = 0),
              (u[12] = n.x),
              (u[13] = n.y),
              (u[14] = n.z),
              (u[15] = 1),
              u
            )
          }),
          (Yn[u] = a)),
      a
    )
  }),
    ($n.eastNorthUpToFixedFrame = $n.localFrameToFixedFrameGenerator('east', 'north')),
    ($n.northEastDownToFixedFrame = $n.localFrameToFixedFrameGenerator('north', 'east')),
    ($n.northUpEastToFixedFrame = $n.localFrameToFixedFrameGenerator('north', 'up')),
    ($n.northWestUpToFixedFrame = $n.localFrameToFixedFrameGenerator('north', 'west'))
  const Kn = new Ie(),
    er = new t.Cartesian3(1, 1, 1),
    tr = new t.Matrix4()
  $n.headingPitchRollToFixedFrame = function (e, n, o, i, s) {
    i = r.defaultValue(i, $n.eastNorthUpToFixedFrame)
    const a = Ie.fromHeadingPitchRoll(n, Kn),
      u = t.Matrix4.fromTranslationQuaternionRotationScale(t.Cartesian3.ZERO, a, er, tr)
    return (s = i(e, o, s)), t.Matrix4.multiply(s, u, s)
  }
  const nr = new t.Matrix4(),
    rr = new t.Matrix3()
  $n.headingPitchRollQuaternion = function (e, n, r, o, i) {
    const s = $n.headingPitchRollToFixedFrame(e, n, r, o, nr),
      a = t.Matrix4.getMatrix3(s, rr)
    return Ie.fromRotationMatrix(a, i)
  }
  const or = new t.Cartesian3(1, 1, 1),
    ir = new t.Cartesian3(),
    sr = new t.Matrix4(),
    ar = new t.Matrix4(),
    ur = new t.Matrix3(),
    cr = new Ie()
  $n.fixedFrameToHeadingPitchRoll = function (e, n, o, i) {
    ;(n = r.defaultValue(n, t.Ellipsoid.WGS84)),
      (o = r.defaultValue(o, $n.eastNorthUpToFixedFrame)),
      r.defined(i) || (i = new Rn())
    const s = t.Matrix4.getTranslation(e, ir)
    if (t.Cartesian3.equals(s, t.Cartesian3.ZERO))
      return (i.heading = 0), (i.pitch = 0), (i.roll = 0), i
    let a = t.Matrix4.inverseTransformation(o(s, n, sr), sr),
      u = t.Matrix4.setScale(e, or, ar)
    ;(u = t.Matrix4.setTranslation(u, t.Cartesian3.ZERO, u)), (a = t.Matrix4.multiply(a, u, a))
    let c = Ie.fromRotationMatrix(t.Matrix4.getMatrix3(a, ur), cr)
    return (c = Ie.normalize(c, c)), Rn.fromQuaternion(c, i)
  }
  const lr = o.CesiumMath.TWO_PI / 86400
  let dr = new At()
  ;($n.computeTemeToPseudoFixedMatrix = function (e, n) {
    dr = At.addSeconds(e, -At.computeTaiMinusUtc(e), dr)
    const i = dr.dayNumber,
      s = dr.secondsOfDay
    let a
    const u = i - 2451545
    a = s >= 43200 ? (u + 0.5) / st.DAYS_PER_JULIAN_CENTURY : (u - 0.5) / st.DAYS_PER_JULIAN_CENTURY
    const c =
        (((24110.54841 + a * (8640184.812866 + a * (0.093104 + -62e-7 * a))) * lr) %
          o.CesiumMath.TWO_PI) +
        (72921158553e-15 + 11772758384668e-32 * (i - 2451545.5)) *
          ((s + 0.5 * st.SECONDS_PER_DAY) % st.SECONDS_PER_DAY),
      l = Math.cos(c),
      d = Math.sin(c)
    return r.defined(n)
      ? ((n[0] = l),
        (n[1] = -d),
        (n[2] = 0),
        (n[3] = d),
        (n[4] = l),
        (n[5] = 0),
        (n[6] = 0),
        (n[7] = 0),
        (n[8] = 1),
        n)
      : new t.Matrix3(l, d, 0, -d, l, 0, 0, 0, 1)
  }),
    ($n.iau2006XysData = new Bn()),
    ($n.earthOrientationParameters = Sn.NONE)
  const fr = 32.184
  ;($n.preloadIcrfFixed = function (e) {
    const t = e.start.dayNumber,
      n = e.start.secondsOfDay + fr,
      r = e.stop.dayNumber,
      o = e.stop.secondsOfDay + fr,
      i = $n.iau2006XysData.preload(t, n, r, o),
      s = $n.earthOrientationParameters.getPromiseToLoad()
    return Promise.all([i, s])
  }),
    ($n.computeIcrfToFixedMatrix = function (e, n) {
      r.defined(n) || (n = new t.Matrix3())
      const o = $n.computeFixedToIcrfMatrix(e, n)
      if (r.defined(o)) return t.Matrix3.transpose(o, n)
    })
  const pr = new jn(0, 0, 0),
    hr = new nt(0, 0, 0, 0, 0, 0),
    mr = new t.Matrix3(),
    gr = new t.Matrix3()
  $n.computeFixedToIcrfMatrix = function (e, n) {
    r.defined(n) || (n = new t.Matrix3())
    const i = $n.earthOrientationParameters.compute(e, hr)
    if (!r.defined(i)) return
    const s = e.dayNumber,
      a = e.secondsOfDay + fr,
      u = $n.iau2006XysData.computeXysRadians(s, a, pr)
    if (!r.defined(u)) return
    const c = u.x + i.xPoleOffset,
      l = u.y + i.yPoleOffset,
      d = 1 / (1 + Math.sqrt(1 - c * c - l * l)),
      f = mr
    ;(f[0] = 1 - d * c * c),
      (f[3] = -d * c * l),
      (f[6] = c),
      (f[1] = -d * c * l),
      (f[4] = 1 - d * l * l),
      (f[7] = l),
      (f[2] = -c),
      (f[5] = -l),
      (f[8] = 1 - d * (c * c + l * l))
    const p = t.Matrix3.fromRotationZ(-u.s, gr),
      h = t.Matrix3.multiply(f, p, mr),
      m = e.dayNumber - 2451545,
      g = (e.secondsOfDay - At.computeTaiMinusUtc(e) + i.ut1MinusUtc) / st.SECONDS_PER_DAY
    let y = 0.779057273264 + g + 0.00273781191135448 * (m + g)
    y = (y % 1) * o.CesiumMath.TWO_PI
    const v = t.Matrix3.fromRotationZ(y, gr),
      C = t.Matrix3.multiply(h, v, mr),
      _ = Math.cos(i.xPoleWander),
      w = Math.cos(i.yPoleWander),
      b = Math.sin(i.xPoleWander),
      x = Math.sin(i.yPoleWander)
    let S = s - 2451545 + a / st.SECONDS_PER_DAY
    S /= 36525
    const A = (-47e-6 * S * o.CesiumMath.RADIANS_PER_DEGREE) / 3600,
      E = Math.cos(A),
      O = Math.sin(A),
      I = gr
    return (
      (I[0] = _ * E),
      (I[1] = _ * O),
      (I[2] = b),
      (I[3] = -w * O + x * b * E),
      (I[4] = w * E + x * b * O),
      (I[5] = -x * _),
      (I[6] = -x * O - w * b * E),
      (I[7] = x * E - w * b * O),
      (I[8] = w * _),
      t.Matrix3.multiply(C, I, n)
    )
  }
  const yr = new t.Cartesian4()
  ;($n.pointToWindowCoordinates = function (e, t, n, r) {
    return ((r = $n.pointToGLWindowCoordinates(e, t, n, r)).y = 2 * t[5] - r.y), r
  }),
    ($n.pointToGLWindowCoordinates = function (e, n, o, i) {
      r.defined(i) || (i = new t.Cartesian2())
      const s = yr
      return (
        t.Matrix4.multiplyByVector(e, t.Cartesian4.fromElements(o.x, o.y, o.z, 1, s), s),
        t.Cartesian4.multiplyByScalar(s, 1 / s.w, s),
        t.Matrix4.multiplyByVector(n, s, s),
        t.Cartesian2.fromCartesian4(s, i)
      )
    })
  const vr = new t.Cartesian3(),
    Cr = new t.Cartesian3(),
    _r = new t.Cartesian3()
  $n.rotationMatrixFromPositionVelocity = function (e, n, i, s) {
    const a = r.defaultValue(i, t.Ellipsoid.WGS84).geodeticSurfaceNormal(e, vr)
    let u = t.Cartesian3.cross(n, a, Cr)
    t.Cartesian3.equalsEpsilon(u, t.Cartesian3.ZERO, o.CesiumMath.EPSILON6) &&
      (u = t.Cartesian3.clone(t.Cartesian3.UNIT_X, u))
    const c = t.Cartesian3.cross(u, n, _r)
    return (
      t.Cartesian3.normalize(c, c),
      t.Cartesian3.cross(n, c, u),
      t.Cartesian3.negate(u, u),
      t.Cartesian3.normalize(u, u),
      r.defined(s) || (s = new t.Matrix3()),
      (s[0] = n.x),
      (s[1] = n.y),
      (s[2] = n.z),
      (s[3] = u.x),
      (s[4] = u.y),
      (s[5] = u.z),
      (s[6] = c.x),
      (s[7] = c.y),
      (s[8] = c.z),
      s
    )
  }
  const wr = new t.Matrix4(0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1),
    br = new t.Cartographic(),
    xr = new t.Cartesian3(),
    Sr = new t.Cartesian3(),
    Ar = new t.Matrix3(),
    Er = new t.Matrix4(),
    Or = new t.Matrix4()
  ;($n.basisTo2D = function (e, n, r) {
    const o = t.Matrix4.getTranslation(n, Sr),
      i = e.ellipsoid,
      s = i.cartesianToCartographic(o, br),
      a = e.project(s, xr)
    t.Cartesian3.fromElements(a.z, a.x, a.y, a)
    const u = $n.eastNorthUpToFixedFrame(o, i, Er),
      c = t.Matrix4.inverseTransformation(u, Or),
      l = t.Matrix4.getMatrix3(n, Ar),
      d = t.Matrix4.multiplyByMatrix3(c, l, r)
    return t.Matrix4.multiply(wr, d, r), t.Matrix4.setTranslation(r, a, r), r
  }),
    ($n.wgs84To2DModelMatrix = function (e, n, r) {
      const o = e.ellipsoid,
        i = $n.eastNorthUpToFixedFrame(n, o, Er),
        s = t.Matrix4.inverseTransformation(i, Or),
        a = o.cartesianToCartographic(n, br),
        u = e.project(a, xr)
      t.Cartesian3.fromElements(u.z, u.x, u.y, u)
      const c = t.Matrix4.fromTranslation(u, Er)
      return t.Matrix4.multiply(wr, s, r), t.Matrix4.multiply(c, r, r), r
    }),
    (e.BoundingSphere = l),
    (e.FeatureDetection = Oe),
    (e.GeographicProjection = a),
    (e.Intersect = u),
    (e.Interval = c),
    (e.Quaternion = Ie),
    (e.Resource = mn),
    (e.Transforms = $n),
    (e.buildModuleUrl = Nn)
})

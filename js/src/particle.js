! function() {
	function n(n, e, t) {
		return n.getAttribute(e) || t
	}

	function e(n) {
		return document.getElementsByTagName(n)
	}

	function t() {
		var t = e("script"),
			o = t.length,
			i = t[o - 1];
		return {
			l: o,
			z: n(i, "zIndex", -1),
			o: n(i, "opacity", .9),
			c: n(i, "color", "203,58,86"),
			n: n(i, "count", 50)
		}
	}

	function o() {
		c = u.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, a = u.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
	}

	function i() {
		l.clearRect(0, 0, c, a);
		var n, e, t, o, u, d, x = [w].concat(y);
		y.forEach(function(i) {
			for (i.x += i.xa, i.y += i.ya, i.xa *= i.x > c || i.x < 0 ? -1 : 1, i.ya *= i.y > a || i.y < 0 ? -1 : 1, l.fillRect(i.x - .5, i.y - .5, 1, 1), e = 0; e < x.length; e++) n = x[e], i !== n && null !== n.x && null !== n.y && (o = i.x - n.x, u = i.y - n.y, d = o * o + u * u, d < n.max && (n === w && d >= n.max / 2 && (i.x -= .03 * o, i.y -= .03 * u), t = (n.max - d) / n.max, l.beginPath(), l.lineWidth = t / 2, l.strokeStyle = "rgba(" + m.c + "," + (t + .2) + ")", l.moveTo(i.x, i.y), l.lineTo(n.x, n.y), l.stroke()));
			x.splice(x.indexOf(i), 1)
		}), r(i)
	}
	var c, a, u = document.createElement("canvas"),
		m = t(),
		d = "c_n" + m.l,
		l = u.getContext("2d"),
		r = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(n) {
			window.setTimeout(n, 1e3 / 45)
		},
		x = Math.random,
		w = {
			x: null,
			y: null,
			max: 12e4
		};
	u.id = d, u.style.cssText = "position:fixed;top:0;left:0;z-index:" + m.z + ";opacity:" + m.o, e("body")[0].appendChild(u), o(), window.onresize = o;
	for (var y = [], s = 0; m.n > s; s++) {
		var f = x() * c,
			h = x() * a,
			g = 2 * x() - 1,
			p = 2 * x() - 1;
		y.push({
			x: f,
			y: h,
			xa: g,
			ya: p,
			max: 20e3
		})
	}
	setTimeout(function() {
		i()
	}, 100)
}();
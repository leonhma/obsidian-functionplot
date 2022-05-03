var $5sQNY$buffer = require("buffer");
var $5sQNY$obsidian = require("obsidian");
var $5sQNY$events = require("events");
var $5sQNY$process = require("process");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequired156"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequired156"] = parcelRequire;
}
parcelRequire.register("29jpn", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $3R9WZ = parcelRequire("3R9WZ");

var $b3K6t = parcelRequire("b3K6t");
function $190b7a1a227cb414$var$annotations(options) {
    const xScale = options.owner.meta.xScale;
    const yScale = options.owner.meta.yScale;
    const line = $3R9WZ.default().x(function(d) {
        return d[0];
    }).y(function(d) {
        return d[1];
    });
    return function(parentSelection) {
        parentSelection.each(function() {
            // join
            const current = $b3K6t.default(this);
            const selection = current.selectAll('g.annotations').data(function(d) {
                return d.annotations || [];
            });
            // enter
            const enter = selection.enter().append('g').attr('class', 'annotations');
            // enter + update
            // - path
            const yRange = yScale.range();
            const xRange = xScale.range();
            const path = selection.merge(enter).selectAll('path').data(function(d) {
                if ('x' in d) return [
                    [
                        [
                            0,
                            yRange[0]
                        ],
                        [
                            0,
                            yRange[1]
                        ]
                    ]
                ];
                else return [
                    [
                        [
                            xRange[0],
                            0
                        ],
                        [
                            xRange[1],
                            0
                        ]
                    ]
                ];
            });
            path.enter().append('path').attr('stroke', '#eee').attr('d', line);
            path.exit().remove();
            // enter + update
            // - text
            const text = selection.merge(enter).selectAll('text').data(function(d) {
                return [
                    {
                        text: d.text || '',
                        hasX: 'x' in d
                    }
                ];
            });
            text.enter().append('text').attr('y', function(d) {
                return d.hasX ? 3 : 0;
            }).attr('x', function(d) {
                return d.hasX ? 0 : 3;
            }).attr('dy', function(d) {
                return d.hasX ? 5 : -5;
            }).attr('text-anchor', function(d) {
                return d.hasX ? 'end' : '';
            }).attr('transform', function(d) {
                return d.hasX ? 'rotate(-90)' : '';
            }).text(function(d) {
                return d.text;
            });
            text.exit().remove();
            // enter + update
            // move group
            selection.merge(enter).attr('transform', function(d) {
                if ('x' in d) return 'translate(' + xScale(d.x) + ', 0)';
                else return 'translate(0, ' + yScale(d.y) + ')';
            });
            // exit
            selection.exit().remove();
        });
    };
}
module.exports.default = $190b7a1a227cb414$var$annotations;

});
parcelRequire.register("4nV4m", function(module, exports) {

$parcel$export(module.exports, "default", () => $331594341785cbe7$export$2e2bcd8739ae039);

var $d9Hub = parcelRequire("d9Hub");

var $3HtlU = parcelRequire("3HtlU");

var $bEQ8j = parcelRequire("bEQ8j");

var $1TT2j = parcelRequire("1TT2j");

var $3R9WZ = parcelRequire("3R9WZ");

var $38aL5 = parcelRequire("38aL5");
function $331594341785cbe7$export$2e2bcd8739ae039(x0, y0, y1) {
    var x1 = null, defined = $bEQ8j.default(true), context = null, curve = $1TT2j.default, output = null;
    x0 = typeof x0 === "function" ? x0 : x0 === undefined ? $38aL5.x : $bEQ8j.default(+x0);
    y0 = typeof y0 === "function" ? y0 : y0 === undefined ? $bEQ8j.default(0) : $bEQ8j.default(+y0);
    y1 = typeof y1 === "function" ? y1 : y1 === undefined ? $38aL5.y : $bEQ8j.default(+y1);
    function area(data) {
        var i, j, k, n = (data = $3HtlU.default(data)).length, d, defined0 = false, buffer, x0z = new Array(n), y0z = new Array(n);
        if (context == null) output = curve(buffer = $d9Hub.default());
        for(i = 0; i <= n; ++i){
            if (!(i < n && defined(d = data[i], i, data)) === defined0) {
                if (defined0 = !defined0) {
                    j = i;
                    output.areaStart();
                    output.lineStart();
                } else {
                    output.lineEnd();
                    output.lineStart();
                    for(k = i - 1; k >= j; --k)output.point(x0z[k], y0z[k]);
                    output.lineEnd();
                    output.areaEnd();
                }
            }
            if (defined0) {
                x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
                output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
            }
        }
        if (buffer) return output = null, buffer + "" || null;
    }
    function arealine() {
        return $3R9WZ.default().defined(defined).curve(curve).context(context);
    }
    area.x = function(_) {
        return arguments.length ? (x0 = typeof _ === "function" ? _ : $bEQ8j.default(+_), x1 = null, area) : x0;
    };
    area.x0 = function(_) {
        return arguments.length ? (x0 = typeof _ === "function" ? _ : $bEQ8j.default(+_), area) : x0;
    };
    area.x1 = function(_) {
        return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : $bEQ8j.default(+_), area) : x1;
    };
    area.y = function(_) {
        return arguments.length ? (y0 = typeof _ === "function" ? _ : $bEQ8j.default(+_), y1 = null, area) : y0;
    };
    area.y0 = function(_) {
        return arguments.length ? (y0 = typeof _ === "function" ? _ : $bEQ8j.default(+_), area) : y0;
    };
    area.y1 = function(_) {
        return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : $bEQ8j.default(+_), area) : y1;
    };
    area.lineX0 = area.lineY0 = function() {
        return arealine().x(x0).y(y0);
    };
    area.lineY1 = function() {
        return arealine().x(x0).y(y1);
    };
    area.lineX1 = function() {
        return arealine().x(x1).y(y0);
    };
    area.defined = function(_) {
        return arguments.length ? (defined = typeof _ === "function" ? _ : $bEQ8j.default(!!_), area) : defined;
    };
    area.curve = function(_) {
        return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
    };
    area.context = function(_) {
        return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
    };
    return area;
}

});
parcelRequire.register("d9Hub", function(module, exports) {

$parcel$export(module.exports, "default", () => $993dd90458c92e78$export$2e2bcd8739ae039);
const $993dd90458c92e78$var$pi = Math.PI, $993dd90458c92e78$var$tau = 2 * $993dd90458c92e78$var$pi, $993dd90458c92e78$var$epsilon = 1e-6, $993dd90458c92e78$var$tauEpsilon = $993dd90458c92e78$var$tau - $993dd90458c92e78$var$epsilon;
function $993dd90458c92e78$var$Path() {
    this._x0 = this._y0 = this._x1 = this._y1 = null; // end of current subpath
    this._ = "";
}
function $993dd90458c92e78$var$path() {
    return new $993dd90458c92e78$var$Path;
}
$993dd90458c92e78$var$Path.prototype = $993dd90458c92e78$var$path.prototype = {
    constructor: $993dd90458c92e78$var$Path,
    moveTo: function(x, y) {
        this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
    },
    closePath: function() {
        if (this._x1 !== null) {
            this._x1 = this._x0, this._y1 = this._y0;
            this._ += "Z";
        }
    },
    lineTo: function(x, y) {
        this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    quadraticCurveTo: function(x1, y1, x, y) {
        this._ += "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    bezierCurveTo: function(x1, y1, x2, y2, x, y) {
        this._ += "C" + +x1 + "," + +y1 + "," + +x2 + "," + +y2 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    arcTo: function(x1, y1, x2, y2, r) {
        x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
        var x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
        // Is the radius negative? Error.
        if (r < 0) throw new Error("negative radius: " + r);
        // Is this path empty? Move to (x1,y1).
        if (this._x1 === null) this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
        else if (!(l01_2 > $993dd90458c92e78$var$epsilon)) ;
        else if (!(Math.abs(y01 * x21 - y21 * x01) > $993dd90458c92e78$var$epsilon) || !r) this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
        else {
            var x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan(($993dd90458c92e78$var$pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
            // If the start tangent is not coincident with (x0,y0), line to.
            if (Math.abs(t01 - 1) > $993dd90458c92e78$var$epsilon) this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
            this._ += "A" + r + "," + r + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
        }
    },
    arc: function(x, y, r, a0, a1, ccw) {
        x = +x, y = +y, r = +r, ccw = !!ccw;
        var dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x + dx, y0 = y + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
        // Is the radius negative? Error.
        if (r < 0) throw new Error("negative radius: " + r);
        // Is this path empty? Move to (x0,y0).
        if (this._x1 === null) this._ += "M" + x0 + "," + y0;
        else if (Math.abs(this._x1 - x0) > $993dd90458c92e78$var$epsilon || Math.abs(this._y1 - y0) > $993dd90458c92e78$var$epsilon) this._ += "L" + x0 + "," + y0;
        // Is this arc empty? We’re done.
        if (!r) return;
        // Does the angle go the wrong way? Flip the direction.
        if (da < 0) da = da % $993dd90458c92e78$var$tau + $993dd90458c92e78$var$tau;
        // Is this a complete circle? Draw two arcs to complete the circle.
        if (da > $993dd90458c92e78$var$tauEpsilon) this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
        else if (da > $993dd90458c92e78$var$epsilon) this._ += "A" + r + "," + r + ",0," + +(da >= $993dd90458c92e78$var$pi) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    },
    rect: function(x, y, w, h) {
        this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + +w + "v" + +h + "h" + -w + "Z";
    },
    toString: function() {
        return this._;
    }
};
var $993dd90458c92e78$export$2e2bcd8739ae039 = $993dd90458c92e78$var$path;

});


parcelRequire.register("3HtlU", function(module, exports) {

$parcel$export(module.exports, "default", () => $2b1c28050c9855e7$export$2e2bcd8739ae039);
var $2b1c28050c9855e7$export$58adb3bec8346d0f = Array.prototype.slice;
function $2b1c28050c9855e7$export$2e2bcd8739ae039(x) {
    return typeof x === "object" && "length" in x ? x // Array, TypedArray, NodeList, array-like
     : Array.from(x); // Map, Set, iterable, string, or anything else
}

});

parcelRequire.register("bEQ8j", function(module, exports) {

$parcel$export(module.exports, "default", () => $87cbdeb2361d16b8$export$2e2bcd8739ae039);
function $87cbdeb2361d16b8$export$2e2bcd8739ae039(x) {
    return function constant() {
        return x;
    };
}

});

parcelRequire.register("1TT2j", function(module, exports) {

$parcel$export(module.exports, "default", () => $16259e901d486722$export$2e2bcd8739ae039);
function $16259e901d486722$var$Linear(context) {
    this._context = context;
}
$16259e901d486722$var$Linear.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._point = 0;
    },
    lineEnd: function() {
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2; // proceed
            default:
                this._context.lineTo(x, y);
                break;
        }
    }
};
function $16259e901d486722$export$2e2bcd8739ae039(context) {
    return new $16259e901d486722$var$Linear(context);
}

});

parcelRequire.register("3R9WZ", function(module, exports) {

$parcel$export(module.exports, "default", () => $2cee0a4f584da011$export$2e2bcd8739ae039);

var $d9Hub = parcelRequire("d9Hub");

var $3HtlU = parcelRequire("3HtlU");

var $bEQ8j = parcelRequire("bEQ8j");

var $1TT2j = parcelRequire("1TT2j");

var $38aL5 = parcelRequire("38aL5");
function $2cee0a4f584da011$export$2e2bcd8739ae039(x, y) {
    var defined = $bEQ8j.default(true), context = null, curve = $1TT2j.default, output = null;
    x = typeof x === "function" ? x : x === undefined ? $38aL5.x : $bEQ8j.default(x);
    y = typeof y === "function" ? y : y === undefined ? $38aL5.y : $bEQ8j.default(y);
    function line(data) {
        var i, n = (data = $3HtlU.default(data)).length, d, defined0 = false, buffer;
        if (context == null) output = curve(buffer = $d9Hub.default());
        for(i = 0; i <= n; ++i){
            if (!(i < n && defined(d = data[i], i, data)) === defined0) {
                if (defined0 = !defined0) output.lineStart();
                else output.lineEnd();
            }
            if (defined0) output.point(+x(d, i, data), +y(d, i, data));
        }
        if (buffer) return output = null, buffer + "" || null;
    }
    line.x = function(_) {
        return arguments.length ? (x = typeof _ === "function" ? _ : $bEQ8j.default(+_), line) : x;
    };
    line.y = function(_) {
        return arguments.length ? (y = typeof _ === "function" ? _ : $bEQ8j.default(+_), line) : y;
    };
    line.defined = function(_) {
        return arguments.length ? (defined = typeof _ === "function" ? _ : $bEQ8j.default(!!_), line) : defined;
    };
    line.curve = function(_) {
        return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
    };
    line.context = function(_) {
        return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
    };
    return line;
}

});
parcelRequire.register("38aL5", function(module, exports) {

$parcel$export(module.exports, "x", () => $247a76df29ffca1c$export$d141bba7fdc215a3);
$parcel$export(module.exports, "y", () => $247a76df29ffca1c$export$4a5767248b18ef41);
function $247a76df29ffca1c$export$d141bba7fdc215a3(p) {
    return p[0];
}
function $247a76df29ffca1c$export$4a5767248b18ef41(p) {
    return p[1];
}

});




parcelRequire.register("kXv5m", function(module, exports) {

$parcel$export(module.exports, "default", () => $f4216e454fe5fe90$export$2e2bcd8739ae039);
$parcel$export(module.exports, "childMatcher", () => $f4216e454fe5fe90$export$90c2759c036528);
function $f4216e454fe5fe90$export$2e2bcd8739ae039(selector) {
    return function() {
        return this.matches(selector);
    };
}
function $f4216e454fe5fe90$export$90c2759c036528(selector) {
    return function(node) {
        return node.matches(selector);
    };
}

});

parcelRequire.register("1fCt1", function(module, exports) {

$parcel$export(module.exports, "default", () => $0e9507e7b29dcba4$export$2e2bcd8739ae039);

var $7LP82 = parcelRequire("7LP82");
function $0e9507e7b29dcba4$export$2e2bcd8739ae039(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return $7LP82.default.hasOwnProperty(prefix) ? {
        space: $7LP82.default[prefix],
        local: name
    } : name; // eslint-disable-line no-prototype-builtins
}

});
parcelRequire.register("7LP82", function(module, exports) {

$parcel$export(module.exports, "xhtml", () => $0175c057f28a7f2b$export$201a3f7520ccc326);
$parcel$export(module.exports, "default", () => $0175c057f28a7f2b$export$2e2bcd8739ae039);
var $0175c057f28a7f2b$export$201a3f7520ccc326 = "http://www.w3.org/1999/xhtml";
var $0175c057f28a7f2b$export$2e2bcd8739ae039 = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: $0175c057f28a7f2b$export$201a3f7520ccc326,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};

});


parcelRequire.register("aMKaC", function(module, exports) {

$parcel$export(module.exports, "default", () => $7da23385e40491b2$export$2e2bcd8739ae039);

var $gPVzw = parcelRequire("gPVzw");
function $7da23385e40491b2$export$2e2bcd8739ae039(event, node) {
    event = $gPVzw.default(event);
    if (node === undefined) node = event.currentTarget;
    if (node) {
        var svg = node.ownerSVGElement || node;
        if (svg.createSVGPoint) {
            var point = svg.createSVGPoint();
            point.x = event.clientX, point.y = event.clientY;
            point = point.matrixTransform(node.getScreenCTM().inverse());
            return [
                point.x,
                point.y
            ];
        }
        if (node.getBoundingClientRect) {
            var rect = node.getBoundingClientRect();
            return [
                event.clientX - rect.left - node.clientLeft,
                event.clientY - rect.top - node.clientTop
            ];
        }
    }
    return [
        event.pageX,
        event.pageY
    ];
}

});
parcelRequire.register("gPVzw", function(module, exports) {

$parcel$export(module.exports, "default", () => $c41e115fd2420ccd$export$2e2bcd8739ae039);
function $c41e115fd2420ccd$export$2e2bcd8739ae039(event) {
    let sourceEvent;
    while(sourceEvent = event.sourceEvent)event = sourceEvent;
    return event;
}

});


parcelRequire.register("b3K6t", function(module, exports) {

$parcel$export(module.exports, "default", () => $80d3bcb762b2a5e3$export$2e2bcd8739ae039);

var $cT0Fo = parcelRequire("cT0Fo");
function $80d3bcb762b2a5e3$export$2e2bcd8739ae039(selector) {
    return typeof selector === "string" ? new $cT0Fo.Selection([
        [
            document.querySelector(selector)
        ]
    ], [
        document.documentElement
    ]) : new $cT0Fo.Selection([
        [
            selector
        ]
    ], $cT0Fo.root);
}

});
parcelRequire.register("cT0Fo", function(module, exports) {

$parcel$export(module.exports, "root", () => $961b2371f91c3940$export$e8e78c978b129247);
$parcel$export(module.exports, "Selection", () => $961b2371f91c3940$export$52baac22726c72bf);
$parcel$export(module.exports, "default", () => $961b2371f91c3940$export$2e2bcd8739ae039);

var $6HMTS = parcelRequire("6HMTS");

var $eVqFA = parcelRequire("eVqFA");

var $eOAPw = parcelRequire("eOAPw");

var $8VRS4 = parcelRequire("8VRS4");

var $5gXp8 = parcelRequire("5gXp8");

var $cUPit = parcelRequire("cUPit");

var $205Ui = parcelRequire("205Ui");

var $klRzJ = parcelRequire("klRzJ");

var $cH04W = parcelRequire("cH04W");

var $98MsX = parcelRequire("98MsX");

var $gbPDC = parcelRequire("gbPDC");

var $eSlmE = parcelRequire("eSlmE");

var $kRQRE = parcelRequire("kRQRE");

var $gFid6 = parcelRequire("gFid6");

var $arg1b = parcelRequire("arg1b");

var $81Ob3 = parcelRequire("81Ob3");

var $YpH8P = parcelRequire("YpH8P");

var $4qfn9 = parcelRequire("4qfn9");

var $2NACD = parcelRequire("2NACD");

var $3RTiU = parcelRequire("3RTiU");

var $3Voj1 = parcelRequire("3Voj1");

var $f8ZK6 = parcelRequire("f8ZK6");

var $7mgBm = parcelRequire("7mgBm");

var $38pTk = parcelRequire("38pTk");

var $Z7eWe = parcelRequire("Z7eWe");

var $50sUs = parcelRequire("50sUs");

var $6mnFG = parcelRequire("6mnFG");

var $85Ild = parcelRequire("85Ild");

var $8aVfO = parcelRequire("8aVfO");

var $egpfP = parcelRequire("egpfP");

var $501bx = parcelRequire("501bx");

var $jEMSk = parcelRequire("jEMSk");

var $8js5a = parcelRequire("8js5a");

var $98CAY = parcelRequire("98CAY");
var $961b2371f91c3940$export$e8e78c978b129247 = [
    null
];
function $961b2371f91c3940$export$52baac22726c72bf(groups, parents) {
    this._groups = groups;
    this._parents = parents;
}
function $961b2371f91c3940$var$selection() {
    return new $961b2371f91c3940$export$52baac22726c72bf([
        [
            document.documentElement
        ]
    ], $961b2371f91c3940$export$e8e78c978b129247);
}
function $961b2371f91c3940$var$selection_selection() {
    return this;
}
$961b2371f91c3940$export$52baac22726c72bf.prototype = $961b2371f91c3940$var$selection.prototype = {
    constructor: $961b2371f91c3940$export$52baac22726c72bf,
    select: $6HMTS.default,
    selectAll: $eVqFA.default,
    selectChild: $eOAPw.default,
    selectChildren: $8VRS4.default,
    filter: $5gXp8.default,
    data: $cUPit.default,
    enter: $205Ui.default,
    exit: $klRzJ.default,
    join: $cH04W.default,
    merge: $98MsX.default,
    selection: $961b2371f91c3940$var$selection_selection,
    order: $gbPDC.default,
    sort: $eSlmE.default,
    call: $kRQRE.default,
    nodes: $gFid6.default,
    node: $arg1b.default,
    size: $81Ob3.default,
    empty: $YpH8P.default,
    each: $4qfn9.default,
    attr: $2NACD.default,
    style: $3RTiU.default,
    property: $3Voj1.default,
    classed: $f8ZK6.default,
    text: $7mgBm.default,
    html: $38pTk.default,
    raise: $Z7eWe.default,
    lower: $50sUs.default,
    append: $6mnFG.default,
    insert: $85Ild.default,
    remove: $8aVfO.default,
    clone: $egpfP.default,
    datum: $501bx.default,
    on: $jEMSk.default,
    dispatch: $8js5a.default,
    [Symbol.iterator]: $98CAY.default
};
var $961b2371f91c3940$export$2e2bcd8739ae039 = $961b2371f91c3940$var$selection;

});
parcelRequire.register("6HMTS", function(module, exports) {

$parcel$export(module.exports, "default", () => $4e1cb0d1d6d96a25$export$2e2bcd8739ae039);

var $cT0Fo = parcelRequire("cT0Fo");

var $6vEBI = parcelRequire("6vEBI");
function $4e1cb0d1d6d96a25$export$2e2bcd8739ae039(select) {
    if (typeof select !== "function") select = $6vEBI.default(select);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i)if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
            if ("__data__" in node) subnode.__data__ = node.__data__;
            subgroup[i] = subnode;
        }
    }
    return new $cT0Fo.Selection(subgroups, this._parents);
}

});
parcelRequire.register("6vEBI", function(module, exports) {

$parcel$export(module.exports, "default", () => $4bd5231a1ca6f3ae$export$2e2bcd8739ae039);
function $4bd5231a1ca6f3ae$var$none() {}
function $4bd5231a1ca6f3ae$export$2e2bcd8739ae039(selector) {
    return selector == null ? $4bd5231a1ca6f3ae$var$none : function() {
        return this.querySelector(selector);
    };
}

});


parcelRequire.register("eVqFA", function(module, exports) {

$parcel$export(module.exports, "default", () => $addb139a59c75dc3$export$2e2bcd8739ae039);

var $cT0Fo = parcelRequire("cT0Fo");

var $6Bzog = parcelRequire("6Bzog");

var $b2GMI = parcelRequire("b2GMI");
function $addb139a59c75dc3$var$arrayAll(select) {
    return function() {
        var group = select.apply(this, arguments);
        return group == null ? [] : $6Bzog.default(group);
    };
}
function $addb139a59c75dc3$export$2e2bcd8739ae039(select) {
    if (typeof select === "function") select = $addb139a59c75dc3$var$arrayAll(select);
    else select = $b2GMI.default(select);
    for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            subgroups.push(select.call(node, node.__data__, i, group));
            parents.push(node);
        }
    }
    return new $cT0Fo.Selection(subgroups, parents);
}

});
parcelRequire.register("6Bzog", function(module, exports) {

$parcel$export(module.exports, "default", () => $4cf1a690e30bea6f$export$2e2bcd8739ae039);
function $4cf1a690e30bea6f$export$2e2bcd8739ae039(x) {
    return typeof x === "object" && "length" in x ? x // Array, TypedArray, NodeList, array-like
     : Array.from(x); // Map, Set, iterable, string, or anything else
}

});

parcelRequire.register("b2GMI", function(module, exports) {

$parcel$export(module.exports, "default", () => $80a111ca6ec27e75$export$2e2bcd8739ae039);
function $80a111ca6ec27e75$var$empty() {
    return [];
}
function $80a111ca6ec27e75$export$2e2bcd8739ae039(selector) {
    return selector == null ? $80a111ca6ec27e75$var$empty : function() {
        return this.querySelectorAll(selector);
    };
}

});


parcelRequire.register("eOAPw", function(module, exports) {

$parcel$export(module.exports, "default", () => $ac924de2ab793973$export$2e2bcd8739ae039);

var $kXv5m = parcelRequire("kXv5m");
var $ac924de2ab793973$var$find = Array.prototype.find;
function $ac924de2ab793973$var$childFind(match) {
    return function() {
        return $ac924de2ab793973$var$find.call(this.children, match);
    };
}
function $ac924de2ab793973$var$childFirst() {
    return this.firstElementChild;
}
function $ac924de2ab793973$export$2e2bcd8739ae039(match) {
    return this.select(match == null ? $ac924de2ab793973$var$childFirst : $ac924de2ab793973$var$childFind(typeof match === "function" ? match : $kXv5m.childMatcher(match)));
}

});

parcelRequire.register("8VRS4", function(module, exports) {

$parcel$export(module.exports, "default", () => $680d6f4966f19192$export$2e2bcd8739ae039);

var $kXv5m = parcelRequire("kXv5m");
var $680d6f4966f19192$var$filter = Array.prototype.filter;
function $680d6f4966f19192$var$children() {
    return this.children;
}
function $680d6f4966f19192$var$childrenFilter(match) {
    return function() {
        return $680d6f4966f19192$var$filter.call(this.children, match);
    };
}
function $680d6f4966f19192$export$2e2bcd8739ae039(match) {
    return this.selectAll(match == null ? $680d6f4966f19192$var$children : $680d6f4966f19192$var$childrenFilter(typeof match === "function" ? match : $kXv5m.childMatcher(match)));
}

});

parcelRequire.register("5gXp8", function(module, exports) {

$parcel$export(module.exports, "default", () => $3d6c86db99037e7f$export$2e2bcd8739ae039);

var $cT0Fo = parcelRequire("cT0Fo");

var $kXv5m = parcelRequire("kXv5m");
function $3d6c86db99037e7f$export$2e2bcd8739ae039(match) {
    if (typeof match !== "function") match = $kXv5m.default(match);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i)if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
    }
    return new $cT0Fo.Selection(subgroups, this._parents);
}

});

parcelRequire.register("cUPit", function(module, exports) {

$parcel$export(module.exports, "default", () => $9672817b8faf7384$export$2e2bcd8739ae039);

var $cT0Fo = parcelRequire("cT0Fo");

var $205Ui = parcelRequire("205Ui");

var $6Bzog = parcelRequire("6Bzog");

var $cbXkf = parcelRequire("cbXkf");
function $9672817b8faf7384$var$bindIndex(parent, group, enter, update, exit, data) {
    var i = 0, node, groupLength = group.length, dataLength = data.length;
    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for(; i < dataLength; ++i)if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
    } else enter[i] = new $205Ui.EnterNode(parent, data[i]);
    // Put any non-null nodes that don’t fit into exit.
    for(; i < groupLength; ++i)if (node = group[i]) exit[i] = node;
}
function $9672817b8faf7384$var$bindKey(parent, group, enter, update, exit, data, key) {
    var i, node, nodeByKeyValue = new Map, groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
    // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for(i = 0; i < groupLength; ++i)if (node = group[i]) {
        keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
        if (nodeByKeyValue.has(keyValue)) exit[i] = node;
        else nodeByKeyValue.set(keyValue, node);
    }
    // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for(i = 0; i < dataLength; ++i){
        keyValue = key.call(parent, data[i], i, data) + "";
        if (node = nodeByKeyValue.get(keyValue)) {
            update[i] = node;
            node.__data__ = data[i];
            nodeByKeyValue.delete(keyValue);
        } else enter[i] = new $205Ui.EnterNode(parent, data[i]);
    }
    // Add any remaining nodes that were not bound to data to exit.
    for(i = 0; i < groupLength; ++i)if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) exit[i] = node;
}
function $9672817b8faf7384$var$datum(node) {
    return node.__data__;
}
function $9672817b8faf7384$export$2e2bcd8739ae039(value, key) {
    if (!arguments.length) return Array.from(this, $9672817b8faf7384$var$datum);
    var bind = key ? $9672817b8faf7384$var$bindKey : $9672817b8faf7384$var$bindIndex, parents = this._parents, groups = this._groups;
    if (typeof value !== "function") value = $cbXkf.default(value);
    for(var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j){
        var parent = parents[j], group = groups[j], groupLength = group.length, data = $6Bzog.default(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
        bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
        // Now connect the enter nodes to their following update node, such that
        // appendChild can insert the materialized enter node before this node,
        // rather than at the end of the parent node.
        for(var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0)if (previous = enterGroup[i0]) {
            if (i0 >= i1) i1 = i0 + 1;
            while(!(next = updateGroup[i1]) && ++i1 < dataLength);
            previous._next = next || null;
        }
    }
    update = new $cT0Fo.Selection(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
}

});
parcelRequire.register("205Ui", function(module, exports) {

$parcel$export(module.exports, "default", () => $175029de3ad634d8$export$2e2bcd8739ae039);
$parcel$export(module.exports, "EnterNode", () => $175029de3ad634d8$export$67b01759a14cf6a4);

var $44M1i = parcelRequire("44M1i");

var $cT0Fo = parcelRequire("cT0Fo");
function $175029de3ad634d8$export$2e2bcd8739ae039() {
    return new $cT0Fo.Selection(this._enter || this._groups.map($44M1i.default), this._parents);
}
function $175029de3ad634d8$export$67b01759a14cf6a4(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
}
$175029de3ad634d8$export$67b01759a14cf6a4.prototype = {
    constructor: $175029de3ad634d8$export$67b01759a14cf6a4,
    appendChild: function(child) {
        return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function(child, next) {
        return this._parent.insertBefore(child, next);
    },
    querySelector: function(selector) {
        return this._parent.querySelector(selector);
    },
    querySelectorAll: function(selector) {
        return this._parent.querySelectorAll(selector);
    }
};

});
parcelRequire.register("44M1i", function(module, exports) {

$parcel$export(module.exports, "default", () => $2f7cc8dfa10c6f40$export$2e2bcd8739ae039);
function $2f7cc8dfa10c6f40$export$2e2bcd8739ae039(update) {
    return new Array(update.length);
}

});


parcelRequire.register("cbXkf", function(module, exports) {

$parcel$export(module.exports, "default", () => $8e0487f3a90b3444$export$2e2bcd8739ae039);
function $8e0487f3a90b3444$export$2e2bcd8739ae039(x) {
    return function() {
        return x;
    };
}

});


parcelRequire.register("klRzJ", function(module, exports) {

$parcel$export(module.exports, "default", () => $ed0f53c227fe1da4$export$2e2bcd8739ae039);

var $44M1i = parcelRequire("44M1i");

var $cT0Fo = parcelRequire("cT0Fo");
function $ed0f53c227fe1da4$export$2e2bcd8739ae039() {
    return new $cT0Fo.Selection(this._exit || this._groups.map($44M1i.default), this._parents);
}

});

parcelRequire.register("cH04W", function(module, exports) {

$parcel$export(module.exports, "default", () => $93d98fd259daa142$export$2e2bcd8739ae039);
function $93d98fd259daa142$export$2e2bcd8739ae039(onenter, onupdate, onexit) {
    var enter = this.enter(), update = this, exit = this.exit();
    enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
    if (onupdate != null) update = onupdate(update);
    if (onexit == null) exit.remove();
    else onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
}

});

parcelRequire.register("98MsX", function(module, exports) {

$parcel$export(module.exports, "default", () => $6a7a74c1555ae7a7$export$2e2bcd8739ae039);

var $cT0Fo = parcelRequire("cT0Fo");
function $6a7a74c1555ae7a7$export$2e2bcd8739ae039(selection) {
    if (!(selection instanceof $cT0Fo.Selection)) throw new Error("invalid merge");
    for(var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
        for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group0[i] || group1[i]) merge[i] = node;
    }
    for(; j < m0; ++j)merges[j] = groups0[j];
    return new $cT0Fo.Selection(merges, this._parents);
}

});

parcelRequire.register("gbPDC", function(module, exports) {

$parcel$export(module.exports, "default", () => $bc95baad7926f223$export$2e2bcd8739ae039);
function $bc95baad7926f223$export$2e2bcd8739ae039() {
    for(var groups = this._groups, j = -1, m = groups.length; ++j < m;){
        for(var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;)if (node = group[i]) {
            if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
            next = node;
        }
    }
    return this;
}

});

parcelRequire.register("eSlmE", function(module, exports) {

$parcel$export(module.exports, "default", () => $ad46ae5687fca634$export$2e2bcd8739ae039);

var $cT0Fo = parcelRequire("cT0Fo");
function $ad46ae5687fca634$export$2e2bcd8739ae039(compare) {
    if (!compare) compare = $ad46ae5687fca634$var$ascending;
    function compareNode(a, b) {
        return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }
    for(var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group[i]) sortgroup[i] = node;
        sortgroup.sort(compareNode);
    }
    return new $cT0Fo.Selection(sortgroups, this._parents).order();
}
function $ad46ae5687fca634$var$ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

});

parcelRequire.register("kRQRE", function(module, exports) {

$parcel$export(module.exports, "default", () => $f311c3a23f560965$export$2e2bcd8739ae039);
function $f311c3a23f560965$export$2e2bcd8739ae039() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
}

});

parcelRequire.register("gFid6", function(module, exports) {

$parcel$export(module.exports, "default", () => $c21e99e35442a9d8$export$2e2bcd8739ae039);
function $c21e99e35442a9d8$export$2e2bcd8739ae039() {
    return Array.from(this);
}

});

parcelRequire.register("arg1b", function(module, exports) {

$parcel$export(module.exports, "default", () => $7998d9d5a1f2e7f0$export$2e2bcd8739ae039);
function $7998d9d5a1f2e7f0$export$2e2bcd8739ae039() {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j)for(var group = groups[j], i = 0, n = group.length; i < n; ++i){
        var node = group[i];
        if (node) return node;
    }
    return null;
}

});

parcelRequire.register("81Ob3", function(module, exports) {

$parcel$export(module.exports, "default", () => $5d8556df4938daa0$export$2e2bcd8739ae039);
function $5d8556df4938daa0$export$2e2bcd8739ae039() {
    let size = 0;
    for (const node of this)++size; // eslint-disable-line no-unused-vars
    return size;
}

});

parcelRequire.register("YpH8P", function(module, exports) {

$parcel$export(module.exports, "default", () => $0b59892b601e400d$export$2e2bcd8739ae039);
function $0b59892b601e400d$export$2e2bcd8739ae039() {
    return !this.node();
}

});

parcelRequire.register("4qfn9", function(module, exports) {

$parcel$export(module.exports, "default", () => $338583c0e96061e9$export$2e2bcd8739ae039);
function $338583c0e96061e9$export$2e2bcd8739ae039(callback) {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i)if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
    return this;
}

});

parcelRequire.register("2NACD", function(module, exports) {

$parcel$export(module.exports, "default", () => $209c90c52a1552e0$export$2e2bcd8739ae039);

var $1fCt1 = parcelRequire("1fCt1");
function $209c90c52a1552e0$var$attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function $209c90c52a1552e0$var$attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function $209c90c52a1552e0$var$attrConstant(name, value) {
    return function() {
        this.setAttribute(name, value);
    };
}
function $209c90c52a1552e0$var$attrConstantNS(fullname, value) {
    return function() {
        this.setAttributeNS(fullname.space, fullname.local, value);
    };
}
function $209c90c52a1552e0$var$attrFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttribute(name);
        else this.setAttribute(name, v);
    };
}
function $209c90c52a1552e0$var$attrFunctionNS(fullname, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
        else this.setAttributeNS(fullname.space, fullname.local, v);
    };
}
function $209c90c52a1552e0$export$2e2bcd8739ae039(name, value) {
    var fullname = $1fCt1.default(name);
    if (arguments.length < 2) {
        var node = this.node();
        return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
    }
    return this.each((value == null ? fullname.local ? $209c90c52a1552e0$var$attrRemoveNS : $209c90c52a1552e0$var$attrRemove : typeof value === "function" ? fullname.local ? $209c90c52a1552e0$var$attrFunctionNS : $209c90c52a1552e0$var$attrFunction : fullname.local ? $209c90c52a1552e0$var$attrConstantNS : $209c90c52a1552e0$var$attrConstant)(fullname, value));
}

});

parcelRequire.register("3RTiU", function(module, exports) {

$parcel$export(module.exports, "default", () => $2d1138918f403a05$export$2e2bcd8739ae039);
$parcel$export(module.exports, "styleValue", () => $2d1138918f403a05$export$5e3cec964f0b5efd);

var $faM0d = parcelRequire("faM0d");
function $2d1138918f403a05$var$styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function $2d1138918f403a05$var$styleConstant(name, value, priority) {
    return function() {
        this.style.setProperty(name, value, priority);
    };
}
function $2d1138918f403a05$var$styleFunction(name, value, priority) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.style.removeProperty(name);
        else this.style.setProperty(name, v, priority);
    };
}
function $2d1138918f403a05$export$2e2bcd8739ae039(name, value, priority) {
    return arguments.length > 1 ? this.each((value == null ? $2d1138918f403a05$var$styleRemove : typeof value === "function" ? $2d1138918f403a05$var$styleFunction : $2d1138918f403a05$var$styleConstant)(name, value, priority == null ? "" : priority)) : $2d1138918f403a05$export$5e3cec964f0b5efd(this.node(), name);
}
function $2d1138918f403a05$export$5e3cec964f0b5efd(node, name) {
    return node.style.getPropertyValue(name) || $faM0d.default(node).getComputedStyle(node, null).getPropertyValue(name);
}

});
parcelRequire.register("faM0d", function(module, exports) {

$parcel$export(module.exports, "default", () => $b0bd067c68b6630e$export$2e2bcd8739ae039);
function $b0bd067c68b6630e$export$2e2bcd8739ae039(node) {
    return node.ownerDocument && node.ownerDocument.defaultView // node is a Node
     || node.document && node // node is a Window
     || node.defaultView; // node is a Document
}

});


parcelRequire.register("3Voj1", function(module, exports) {

$parcel$export(module.exports, "default", () => $2db98c9ea447bc42$export$2e2bcd8739ae039);
function $2db98c9ea447bc42$var$propertyRemove(name) {
    return function() {
        delete this[name];
    };
}
function $2db98c9ea447bc42$var$propertyConstant(name, value) {
    return function() {
        this[name] = value;
    };
}
function $2db98c9ea447bc42$var$propertyFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) delete this[name];
        else this[name] = v;
    };
}
function $2db98c9ea447bc42$export$2e2bcd8739ae039(name, value) {
    return arguments.length > 1 ? this.each((value == null ? $2db98c9ea447bc42$var$propertyRemove : typeof value === "function" ? $2db98c9ea447bc42$var$propertyFunction : $2db98c9ea447bc42$var$propertyConstant)(name, value)) : this.node()[name];
}

});

parcelRequire.register("f8ZK6", function(module, exports) {

$parcel$export(module.exports, "default", () => $b0677f28a362b6a3$export$2e2bcd8739ae039);
function $b0677f28a362b6a3$var$classArray(string) {
    return string.trim().split(/^|\s+/);
}
function $b0677f28a362b6a3$var$classList(node) {
    return node.classList || new $b0677f28a362b6a3$var$ClassList(node);
}
function $b0677f28a362b6a3$var$ClassList(node) {
    this._node = node;
    this._names = $b0677f28a362b6a3$var$classArray(node.getAttribute("class") || "");
}
$b0677f28a362b6a3$var$ClassList.prototype = {
    add: function(name) {
        var i = this._names.indexOf(name);
        if (i < 0) {
            this._names.push(name);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    remove: function(name) {
        var i = this._names.indexOf(name);
        if (i >= 0) {
            this._names.splice(i, 1);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    contains: function(name) {
        return this._names.indexOf(name) >= 0;
    }
};
function $b0677f28a362b6a3$var$classedAdd(node, names) {
    var list = $b0677f28a362b6a3$var$classList(node), i = -1, n = names.length;
    while(++i < n)list.add(names[i]);
}
function $b0677f28a362b6a3$var$classedRemove(node, names) {
    var list = $b0677f28a362b6a3$var$classList(node), i = -1, n = names.length;
    while(++i < n)list.remove(names[i]);
}
function $b0677f28a362b6a3$var$classedTrue(names) {
    return function() {
        $b0677f28a362b6a3$var$classedAdd(this, names);
    };
}
function $b0677f28a362b6a3$var$classedFalse(names) {
    return function() {
        $b0677f28a362b6a3$var$classedRemove(this, names);
    };
}
function $b0677f28a362b6a3$var$classedFunction(names, value) {
    return function() {
        (value.apply(this, arguments) ? $b0677f28a362b6a3$var$classedAdd : $b0677f28a362b6a3$var$classedRemove)(this, names);
    };
}
function $b0677f28a362b6a3$export$2e2bcd8739ae039(name, value) {
    var names = $b0677f28a362b6a3$var$classArray(name + "");
    if (arguments.length < 2) {
        var list = $b0677f28a362b6a3$var$classList(this.node()), i = -1, n = names.length;
        while(++i < n)if (!list.contains(names[i])) return false;
        return true;
    }
    return this.each((typeof value === "function" ? $b0677f28a362b6a3$var$classedFunction : value ? $b0677f28a362b6a3$var$classedTrue : $b0677f28a362b6a3$var$classedFalse)(names, value));
}

});

parcelRequire.register("7mgBm", function(module, exports) {

$parcel$export(module.exports, "default", () => $55b7773484984b57$export$2e2bcd8739ae039);
function $55b7773484984b57$var$textRemove() {
    this.textContent = "";
}
function $55b7773484984b57$var$textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function $55b7773484984b57$var$textFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.textContent = v == null ? "" : v;
    };
}
function $55b7773484984b57$export$2e2bcd8739ae039(value) {
    return arguments.length ? this.each(value == null ? $55b7773484984b57$var$textRemove : (typeof value === "function" ? $55b7773484984b57$var$textFunction : $55b7773484984b57$var$textConstant)(value)) : this.node().textContent;
}

});

parcelRequire.register("38pTk", function(module, exports) {

$parcel$export(module.exports, "default", () => $248633eca6f45048$export$2e2bcd8739ae039);
function $248633eca6f45048$var$htmlRemove() {
    this.innerHTML = "";
}
function $248633eca6f45048$var$htmlConstant(value) {
    return function() {
        this.innerHTML = value;
    };
}
function $248633eca6f45048$var$htmlFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.innerHTML = v == null ? "" : v;
    };
}
function $248633eca6f45048$export$2e2bcd8739ae039(value) {
    return arguments.length ? this.each(value == null ? $248633eca6f45048$var$htmlRemove : (typeof value === "function" ? $248633eca6f45048$var$htmlFunction : $248633eca6f45048$var$htmlConstant)(value)) : this.node().innerHTML;
}

});

parcelRequire.register("Z7eWe", function(module, exports) {

$parcel$export(module.exports, "default", () => $0b7b50522ba31ac1$export$2e2bcd8739ae039);
function $0b7b50522ba31ac1$var$raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
}
function $0b7b50522ba31ac1$export$2e2bcd8739ae039() {
    return this.each($0b7b50522ba31ac1$var$raise);
}

});

parcelRequire.register("50sUs", function(module, exports) {

$parcel$export(module.exports, "default", () => $3a5360af8d9cde41$export$2e2bcd8739ae039);
function $3a5360af8d9cde41$var$lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function $3a5360af8d9cde41$export$2e2bcd8739ae039() {
    return this.each($3a5360af8d9cde41$var$lower);
}

});

parcelRequire.register("6mnFG", function(module, exports) {

$parcel$export(module.exports, "default", () => $4a1728c527a3fa58$export$2e2bcd8739ae039);

var $5YxjU = parcelRequire("5YxjU");
function $4a1728c527a3fa58$export$2e2bcd8739ae039(name) {
    var create = typeof name === "function" ? name : $5YxjU.default(name);
    return this.select(function() {
        return this.appendChild(create.apply(this, arguments));
    });
}

});
parcelRequire.register("5YxjU", function(module, exports) {

$parcel$export(module.exports, "default", () => $459c670a1cea2305$export$2e2bcd8739ae039);

var $1fCt1 = parcelRequire("1fCt1");

var $7LP82 = parcelRequire("7LP82");
function $459c670a1cea2305$var$creatorInherit(name) {
    return function() {
        var document = this.ownerDocument, uri = this.namespaceURI;
        return uri === $7LP82.xhtml && document.documentElement.namespaceURI === $7LP82.xhtml ? document.createElement(name) : document.createElementNS(uri, name);
    };
}
function $459c670a1cea2305$var$creatorFixed(fullname) {
    return function() {
        return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
}
function $459c670a1cea2305$export$2e2bcd8739ae039(name) {
    var fullname = $1fCt1.default(name);
    return (fullname.local ? $459c670a1cea2305$var$creatorFixed : $459c670a1cea2305$var$creatorInherit)(fullname);
}

});


parcelRequire.register("85Ild", function(module, exports) {

$parcel$export(module.exports, "default", () => $5e412f9e47f8e719$export$2e2bcd8739ae039);

var $5YxjU = parcelRequire("5YxjU");

var $6vEBI = parcelRequire("6vEBI");
function $5e412f9e47f8e719$var$constantNull() {
    return null;
}
function $5e412f9e47f8e719$export$2e2bcd8739ae039(name, before) {
    var create = typeof name === "function" ? name : $5YxjU.default(name), select = before == null ? $5e412f9e47f8e719$var$constantNull : typeof before === "function" ? before : $6vEBI.default(before);
    return this.select(function() {
        return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
}

});

parcelRequire.register("8aVfO", function(module, exports) {

$parcel$export(module.exports, "default", () => $5f3bab5936e7bddf$export$2e2bcd8739ae039);
function $5f3bab5936e7bddf$var$remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
}
function $5f3bab5936e7bddf$export$2e2bcd8739ae039() {
    return this.each($5f3bab5936e7bddf$var$remove);
}

});

parcelRequire.register("egpfP", function(module, exports) {

$parcel$export(module.exports, "default", () => $a626264b7d16503a$export$2e2bcd8739ae039);
function $a626264b7d16503a$var$selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function $a626264b7d16503a$var$selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function $a626264b7d16503a$export$2e2bcd8739ae039(deep) {
    return this.select(deep ? $a626264b7d16503a$var$selection_cloneDeep : $a626264b7d16503a$var$selection_cloneShallow);
}

});

parcelRequire.register("501bx", function(module, exports) {

$parcel$export(module.exports, "default", () => $3a3ddf26b08f3df2$export$2e2bcd8739ae039);
function $3a3ddf26b08f3df2$export$2e2bcd8739ae039(value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
}

});

parcelRequire.register("jEMSk", function(module, exports) {

$parcel$export(module.exports, "default", () => $e4f7aa62128e2ed6$export$2e2bcd8739ae039);
function $e4f7aa62128e2ed6$var$contextListener(listener) {
    return function(event) {
        listener.call(this, event, this.__data__);
    };
}
function $e4f7aa62128e2ed6$var$parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        return {
            type: t,
            name: name
        };
    });
}
function $e4f7aa62128e2ed6$var$onRemove(typename) {
    return function() {
        var on = this.__on;
        if (!on) return;
        for(var j = 0, i = -1, m = on.length, o; j < m; ++j)if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) this.removeEventListener(o.type, o.listener, o.options);
        else on[++i] = o;
        if (++i) on.length = i;
        else delete this.__on;
    };
}
function $e4f7aa62128e2ed6$var$onAdd(typename, value, options) {
    return function() {
        var on = this.__on, o, listener = $e4f7aa62128e2ed6$var$contextListener(value);
        if (on) {
            for(var j = 0, m = on.length; j < m; ++j)if ((o = on[j]).type === typename.type && o.name === typename.name) {
                this.removeEventListener(o.type, o.listener, o.options);
                this.addEventListener(o.type, o.listener = listener, o.options = options);
                o.value = value;
                return;
            }
        }
        this.addEventListener(typename.type, listener, options);
        o = {
            type: typename.type,
            name: typename.name,
            value: value,
            listener: listener,
            options: options
        };
        if (!on) this.__on = [
            o
        ];
        else on.push(o);
    };
}
function $e4f7aa62128e2ed6$export$2e2bcd8739ae039(typename, value, options) {
    var typenames = $e4f7aa62128e2ed6$var$parseTypenames(typename + ""), i, n = typenames.length, t;
    if (arguments.length < 2) {
        var on = this.node().__on;
        if (on) for(var j = 0, m = on.length, o; j < m; ++j)for(i = 0, o = on[j]; i < n; ++i){
            if ((t = typenames[i]).type === o.type && t.name === o.name) return o.value;
        }
        return;
    }
    on = value ? $e4f7aa62128e2ed6$var$onAdd : $e4f7aa62128e2ed6$var$onRemove;
    for(i = 0; i < n; ++i)this.each(on(typenames[i], value, options));
    return this;
}

});

parcelRequire.register("8js5a", function(module, exports) {

$parcel$export(module.exports, "default", () => $60d5e1a33fd9cff6$export$2e2bcd8739ae039);

var $faM0d = parcelRequire("faM0d");
function $60d5e1a33fd9cff6$var$dispatchEvent(node, type, params) {
    var window = $faM0d.default(node), event = window.CustomEvent;
    if (typeof event === "function") event = new event(type, params);
    else {
        event = window.document.createEvent("Event");
        if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
        else event.initEvent(type, false, false);
    }
    node.dispatchEvent(event);
}
function $60d5e1a33fd9cff6$var$dispatchConstant(type, params) {
    return function() {
        return $60d5e1a33fd9cff6$var$dispatchEvent(this, type, params);
    };
}
function $60d5e1a33fd9cff6$var$dispatchFunction(type, params) {
    return function() {
        return $60d5e1a33fd9cff6$var$dispatchEvent(this, type, params.apply(this, arguments));
    };
}
function $60d5e1a33fd9cff6$export$2e2bcd8739ae039(type, params) {
    return this.each((typeof params === "function" ? $60d5e1a33fd9cff6$var$dispatchFunction : $60d5e1a33fd9cff6$var$dispatchConstant)(type, params));
}

});

parcelRequire.register("98CAY", function(module, exports) {

$parcel$export(module.exports, "default", () => $6a72cc9f7d27c13d$export$2e2bcd8739ae039);
function* $6a72cc9f7d27c13d$export$2e2bcd8739ae039() {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i)if (node = group[i]) yield node;
    }
}

});





parcelRequire.register("gL8VM", function(module, exports) {
"use strict";
var $c337f69ae15f6290$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $3R9WZ = parcelRequire("3R9WZ");

var $b3K6t = parcelRequire("b3K6t");

const $c337f69ae15f6290$var$clamp_1 = $c337f69ae15f6290$var$__importDefault((parcelRequire("lF0Ee")));

const $c337f69ae15f6290$var$utils_1 = $c337f69ae15f6290$var$__importDefault((parcelRequire("5dabv")));

const $c337f69ae15f6290$var$globals_1 = $c337f69ae15f6290$var$__importDefault((parcelRequire("c5O2L")));

var $flWYj = parcelRequire("flWYj");
function $c337f69ae15f6290$var$mouseTip(config) {
    config = Object.assign({
        xLine: false,
        yLine: false,
        renderer: function(x, y) {
            return '(' + x.toFixed(3) + ', ' + y.toFixed(3) + ')';
        },
        owner: null
    }, config);
    const MARGIN = 20;
    const line = $3R9WZ.default().x(function(d) {
        return d[0];
    }).y(function(d) {
        return d[1];
    });
    function lineGenerator(el, data) {
        return el.append('path').datum(data).attr('stroke', 'grey').attr('stroke-dasharray', '5,5').attr('opacity', 0.5).attr('d', line);
    }
    let tipInnerJoin, tipInnerEnter;
    function tip(selection) {
        const join = selection.selectAll('g.tip').data(function(d) {
            return [
                d
            ];
        });
        // enter
        const tipEnter = join.enter().append('g').attr('class', 'tip').attr('clip-path', 'url(#function-plot-clip-' + config.owner.id + ')');
        // enter + update = enter inner tip
        tipInnerJoin = join.merge(tipEnter).selectAll('g.inner-tip').data(function(d) {
            // debugger
            return [
                d
            ];
        });
        tipInnerEnter = tipInnerJoin.enter().append('g').attr('class', 'inner-tip').style('display', 'none').each(function() {
            const el = $b3K6t.default(this);
            lineGenerator(el, [
                [
                    0,
                    -config.owner.meta.height - MARGIN
                ],
                [
                    0,
                    config.owner.meta.height + MARGIN
                ]
            ]).attr('class', 'tip-x-line').style('display', 'none');
            lineGenerator(el, [
                [
                    -config.owner.meta.width - MARGIN,
                    0
                ],
                [
                    config.owner.meta.width + MARGIN,
                    0
                ]
            ]).attr('class', 'tip-y-line').style('display', 'none');
            el.append('circle').attr('r', 3);
            el.append('text').attr('transform', 'translate(5,-5)');
        });
        // enter + update
        tipInnerJoin.merge(tipInnerEnter).selectAll('.tip-x-line').style('display', config.xLine ? null : 'none');
        tipInnerJoin.merge(tipInnerEnter).selectAll('.tip-y-line').style('display', config.yLine ? null : 'none');
    }
    tip.move = function(coordinates) {
        let i;
        let minDist = Infinity;
        let closestIndex = -1;
        let x, y;
        const selection = tipInnerJoin.merge(tipInnerEnter);
        const inf = 1e8;
        const meta = config.owner.meta;
        const data = selection.datum().data;
        const xScale = meta.xScale;
        const yScale = meta.yScale;
        const width = meta.width;
        const height = meta.height;
        const x0 = coordinates.x;
        const y0 = coordinates.y;
        for(i = 0; i < data.length; i += 1){
            // skipTip=true skips the evaluation in the datum
            // implicit equations cannot be evaluated with a single point
            // parametric equations cannot be evaluated with a single point
            // polar equations cannot be evaluated with a single point
            if (data[i].skipTip || data[i].fnType !== 'linear') continue;
            const range = data[i].range || [
                -inf,
                inf
            ];
            let candidateY;
            if (x0 > range[0] - $c337f69ae15f6290$var$globals_1.default.TIP_X_EPS && x0 < range[1] + $c337f69ae15f6290$var$globals_1.default.TIP_X_EPS) {
                try {
                    candidateY = $flWYj.builtIn(data[i], 'fn', {
                        x: x0
                    });
                } catch (e) {}
                if ($c337f69ae15f6290$var$utils_1.default.isValidNumber(candidateY)) {
                    const tDist = Math.abs(candidateY - y0);
                    if (tDist < minDist) {
                        minDist = tDist;
                        closestIndex = i;
                    }
                }
            }
        }
        if (closestIndex !== -1) {
            x = x0;
            if (data[closestIndex].range) {
                x = Math.max(x, data[closestIndex].range[0]);
                x = Math.min(x, data[closestIndex].range[1]);
            }
            y = $flWYj.builtIn(data[closestIndex], 'fn', {
                x: x
            });
            tip.show();
            config.owner.emit('tip:update', {
                x: x,
                y: y,
                index: closestIndex
            });
            // @ts-ignore
            const clampX = $c337f69ae15f6290$var$clamp_1.default(x, xScale.invert(-MARGIN), xScale.invert(width + MARGIN));
            // @ts-ignore
            const clampY = $c337f69ae15f6290$var$clamp_1.default(y, yScale.invert(height + MARGIN), yScale.invert(-MARGIN));
            const color = $c337f69ae15f6290$var$utils_1.default.color(data[closestIndex], closestIndex);
            selection.style('color', 'red');
            selection.attr('transform', 'translate(' + xScale(clampX) + ',' + yScale(clampY) + ')');
            selection.select('circle').attr('fill', color);
            selection.select('text').attr('fill', color).text(config.renderer(x, y, closestIndex));
        } else tip.hide();
    };
    tip.show = function() {
        tipInnerJoin.merge(tipInnerEnter).style('display', null);
    };
    tip.hide = function() {
        tipInnerJoin.merge(tipInnerEnter).style('display', 'none');
    };
    // generations of getters/setters
    Object.keys(config).forEach(function(option) {
        $c337f69ae15f6290$var$utils_1.default.getterSetter.call(tip, config, option);
    });
    return tip;
}
module.exports.default = $c337f69ae15f6290$var$mouseTip;

});
parcelRequire.register("lF0Ee", function(module, exports) {
module.exports = $fc4dedf554f4a9f7$var$clamp;
function $fc4dedf554f4a9f7$var$clamp(value, min, max) {
    return min < max ? value < min ? min : value > max ? max : value : value < max ? max : value > min ? min : value;
}

});

parcelRequire.register("5dabv", function(module, exports) {
"use strict";
var $3cb6111948fbcba4$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

const $3cb6111948fbcba4$var$globals_1 = $3cb6111948fbcba4$var$__importDefault((parcelRequire("c5O2L")));
const $3cb6111948fbcba4$var$utils = {
    linspace: function(lo, hi, n) {
        const step = (hi - lo) / (n - 1);
        return Array.from({
            length: n
        }, (val, i)=>lo + step * i
        );
    },
    logspace: function(lo, hi, n) {
        return this.linspace(lo, hi, n).map((x)=>Math.pow(10, x)
        );
    },
    isValidNumber: function(v) {
        return typeof v === 'number' && !isNaN(v);
    },
    space: function(chart, range, n) {
        const lo = range[0];
        const hi = range[1];
        if (chart.options.xAxis.type === 'log') return this.logspace(Math.log10(lo), Math.log10(hi), n);
        // default is linear
        return this.linspace(lo, hi, n);
    },
    getterSetter: function(config, option) {
        const me = this;
        this[option] = function(value) {
            if (!arguments.length) return config[option];
            config[option] = value;
            return me;
        };
    },
    sgn: function(v) {
        if (v < 0) return -1;
        if (v > 0) return 1;
        return 0;
    },
    color: function(data, index) {
        return data.color || $3cb6111948fbcba4$var$globals_1.default.COLORS[index].hex();
    }
};
module.exports.default = $3cb6111948fbcba4$var$utils;

});
parcelRequire.register("c5O2L", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $bQdzo = parcelRequire("bQdzo");
// var d3 = window.d3
const $8cdcc547262380a0$var$Globals = {
    COLORS: [
        'steelblue',
        'red',
        '#05b378',
        'orange',
        '#4040e8',
        'yellow',
        'brown',
        'magenta',
        'cyan'
    ].map(function(v) {
        return $bQdzo.hsl(v);
    }),
    DEFAULT_WIDTH: 550,
    DEFAULT_HEIGHT: 350,
    TIP_X_EPS: 1,
    DEFAULT_ITERATIONS: Infinity,
    MAX_ITERATIONS: 0
};
$8cdcc547262380a0$var$Globals.DEFAULT_ITERATIONS = null;
$8cdcc547262380a0$var$Globals.MAX_ITERATIONS = $8cdcc547262380a0$var$Globals.DEFAULT_WIDTH * 10;
// module.exports.Globals = Globals
module.exports.default = $8cdcc547262380a0$var$Globals;

});
parcelRequire.register("bQdzo", function(module, exports) {

$parcel$export(module.exports, "default", () => $89ef13bdabea8903$export$2e2bcd8739ae039);
$parcel$export(module.exports, "rgb", () => $89ef13bdabea8903$export$8972dc0e6ad9238f);
$parcel$export(module.exports, "hsl", () => $89ef13bdabea8903$export$8f4a7c0bb78e6ea8);

var $fAhyN = parcelRequire("fAhyN");
function $89ef13bdabea8903$export$892596cec99bc70e() {}
var $89ef13bdabea8903$export$4adafc6ed0600c10 = 0.7;
var $89ef13bdabea8903$export$9eace2cc0d12c98d = 1 / $89ef13bdabea8903$export$4adafc6ed0600c10;
var $89ef13bdabea8903$var$reI = "\\s*([+-]?\\d+)\\s*", $89ef13bdabea8903$var$reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", $89ef13bdabea8903$var$reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", $89ef13bdabea8903$var$reHex = /^#([0-9a-f]{3,8})$/, $89ef13bdabea8903$var$reRgbInteger = new RegExp("^rgb\\(" + [
    $89ef13bdabea8903$var$reI,
    $89ef13bdabea8903$var$reI,
    $89ef13bdabea8903$var$reI
] + "\\)$"), $89ef13bdabea8903$var$reRgbPercent = new RegExp("^rgb\\(" + [
    $89ef13bdabea8903$var$reP,
    $89ef13bdabea8903$var$reP,
    $89ef13bdabea8903$var$reP
] + "\\)$"), $89ef13bdabea8903$var$reRgbaInteger = new RegExp("^rgba\\(" + [
    $89ef13bdabea8903$var$reI,
    $89ef13bdabea8903$var$reI,
    $89ef13bdabea8903$var$reI,
    $89ef13bdabea8903$var$reN
] + "\\)$"), $89ef13bdabea8903$var$reRgbaPercent = new RegExp("^rgba\\(" + [
    $89ef13bdabea8903$var$reP,
    $89ef13bdabea8903$var$reP,
    $89ef13bdabea8903$var$reP,
    $89ef13bdabea8903$var$reN
] + "\\)$"), $89ef13bdabea8903$var$reHslPercent = new RegExp("^hsl\\(" + [
    $89ef13bdabea8903$var$reN,
    $89ef13bdabea8903$var$reP,
    $89ef13bdabea8903$var$reP
] + "\\)$"), $89ef13bdabea8903$var$reHslaPercent = new RegExp("^hsla\\(" + [
    $89ef13bdabea8903$var$reN,
    $89ef13bdabea8903$var$reP,
    $89ef13bdabea8903$var$reP,
    $89ef13bdabea8903$var$reN
] + "\\)$");
var $89ef13bdabea8903$var$named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
};
$fAhyN.default($89ef13bdabea8903$export$892596cec99bc70e, $89ef13bdabea8903$export$2e2bcd8739ae039, {
    copy: function(channels) {
        return Object.assign(new this.constructor, this, channels);
    },
    displayable: function() {
        return this.rgb().displayable();
    },
    hex: $89ef13bdabea8903$var$color_formatHex,
    formatHex: $89ef13bdabea8903$var$color_formatHex,
    formatHsl: $89ef13bdabea8903$var$color_formatHsl,
    formatRgb: $89ef13bdabea8903$var$color_formatRgb,
    toString: $89ef13bdabea8903$var$color_formatRgb
});
function $89ef13bdabea8903$var$color_formatHex() {
    return this.rgb().formatHex();
}
function $89ef13bdabea8903$var$color_formatHsl() {
    return $89ef13bdabea8903$export$8133dc3fa904d6d1(this).formatHsl();
}
function $89ef13bdabea8903$var$color_formatRgb() {
    return this.rgb().formatRgb();
}
function $89ef13bdabea8903$export$2e2bcd8739ae039(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = $89ef13bdabea8903$var$reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? $89ef13bdabea8903$var$rgbn(m) // #ff0000
     : l === 3 ? new $89ef13bdabea8903$export$5e05a94393ac29e3(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
     : l === 8 ? $89ef13bdabea8903$var$rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
     : l === 4 ? $89ef13bdabea8903$var$rgba(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) // #f000
     : null // invalid hex
    ) : (m = $89ef13bdabea8903$var$reRgbInteger.exec(format)) ? new $89ef13bdabea8903$export$5e05a94393ac29e3(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
     : (m = $89ef13bdabea8903$var$reRgbPercent.exec(format)) ? new $89ef13bdabea8903$export$5e05a94393ac29e3(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
     : (m = $89ef13bdabea8903$var$reRgbaInteger.exec(format)) ? $89ef13bdabea8903$var$rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
     : (m = $89ef13bdabea8903$var$reRgbaPercent.exec(format)) ? $89ef13bdabea8903$var$rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
     : (m = $89ef13bdabea8903$var$reHslPercent.exec(format)) ? $89ef13bdabea8903$var$hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
     : (m = $89ef13bdabea8903$var$reHslaPercent.exec(format)) ? $89ef13bdabea8903$var$hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
     : $89ef13bdabea8903$var$named.hasOwnProperty(format) ? $89ef13bdabea8903$var$rgbn($89ef13bdabea8903$var$named[format]) // eslint-disable-line no-prototype-builtins
     : format === "transparent" ? new $89ef13bdabea8903$export$5e05a94393ac29e3(NaN, NaN, NaN, 0) : null;
}
function $89ef13bdabea8903$var$rgbn(n) {
    return new $89ef13bdabea8903$export$5e05a94393ac29e3(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}
function $89ef13bdabea8903$var$rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new $89ef13bdabea8903$export$5e05a94393ac29e3(r, g, b, a);
}
function $89ef13bdabea8903$export$42da0a331c2802f5(o) {
    if (!(o instanceof $89ef13bdabea8903$export$892596cec99bc70e)) o = $89ef13bdabea8903$export$2e2bcd8739ae039(o);
    if (!o) return new $89ef13bdabea8903$export$5e05a94393ac29e3;
    o = o.rgb();
    return new $89ef13bdabea8903$export$5e05a94393ac29e3(o.r, o.g, o.b, o.opacity);
}
function $89ef13bdabea8903$export$8972dc0e6ad9238f(r, g, b, opacity) {
    return arguments.length === 1 ? $89ef13bdabea8903$export$42da0a331c2802f5(r) : new $89ef13bdabea8903$export$5e05a94393ac29e3(r, g, b, opacity == null ? 1 : opacity);
}
function $89ef13bdabea8903$export$5e05a94393ac29e3(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
}
$fAhyN.default($89ef13bdabea8903$export$5e05a94393ac29e3, $89ef13bdabea8903$export$8972dc0e6ad9238f, $fAhyN.extend($89ef13bdabea8903$export$892596cec99bc70e, {
    brighter: function(k) {
        k = k == null ? $89ef13bdabea8903$export$9eace2cc0d12c98d : Math.pow($89ef13bdabea8903$export$9eace2cc0d12c98d, k);
        return new $89ef13bdabea8903$export$5e05a94393ac29e3(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker: function(k) {
        k = k == null ? $89ef13bdabea8903$export$4adafc6ed0600c10 : Math.pow($89ef13bdabea8903$export$4adafc6ed0600c10, k);
        return new $89ef13bdabea8903$export$5e05a94393ac29e3(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb: function() {
        return this;
    },
    displayable: function() {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: $89ef13bdabea8903$var$rgb_formatHex,
    formatHex: $89ef13bdabea8903$var$rgb_formatHex,
    formatRgb: $89ef13bdabea8903$var$rgb_formatRgb,
    toString: $89ef13bdabea8903$var$rgb_formatRgb
}));
function $89ef13bdabea8903$var$rgb_formatHex() {
    return "#" + $89ef13bdabea8903$var$hex(this.r) + $89ef13bdabea8903$var$hex(this.g) + $89ef13bdabea8903$var$hex(this.b);
}
function $89ef13bdabea8903$var$rgb_formatRgb() {
    var a = this.opacity;
    a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
}
function $89ef13bdabea8903$var$hex(value) {
    value = Math.max(0, Math.min(255, Math.round(value) || 0));
    return (value < 16 ? "0" : "") + value.toString(16);
}
function $89ef13bdabea8903$var$hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new $89ef13bdabea8903$var$Hsl(h, s, l, a);
}
function $89ef13bdabea8903$export$8133dc3fa904d6d1(o) {
    if (o instanceof $89ef13bdabea8903$var$Hsl) return new $89ef13bdabea8903$var$Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof $89ef13bdabea8903$export$892596cec99bc70e)) o = $89ef13bdabea8903$export$2e2bcd8739ae039(o);
    if (!o) return new $89ef13bdabea8903$var$Hsl;
    if (o instanceof $89ef13bdabea8903$var$Hsl) return o;
    o = o.rgb();
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
    if (s) {
        if (r === max) h = (g - b) / s + (g < b) * 6;
        else if (g === max) h = (b - r) / s + 2;
        else h = (r - g) / s + 4;
        s /= l < 0.5 ? max + min : 2 - max - min;
        h *= 60;
    } else s = l > 0 && l < 1 ? 0 : h;
    return new $89ef13bdabea8903$var$Hsl(h, s, l, o.opacity);
}
function $89ef13bdabea8903$export$8f4a7c0bb78e6ea8(h, s, l, opacity) {
    return arguments.length === 1 ? $89ef13bdabea8903$export$8133dc3fa904d6d1(h) : new $89ef13bdabea8903$var$Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function $89ef13bdabea8903$var$Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
$fAhyN.default($89ef13bdabea8903$var$Hsl, $89ef13bdabea8903$export$8f4a7c0bb78e6ea8, $fAhyN.extend($89ef13bdabea8903$export$892596cec99bc70e, {
    brighter: function(k) {
        k = k == null ? $89ef13bdabea8903$export$9eace2cc0d12c98d : Math.pow($89ef13bdabea8903$export$9eace2cc0d12c98d, k);
        return new $89ef13bdabea8903$var$Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function(k) {
        k = k == null ? $89ef13bdabea8903$export$4adafc6ed0600c10 : Math.pow($89ef13bdabea8903$export$4adafc6ed0600c10, k);
        return new $89ef13bdabea8903$var$Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function() {
        var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
        return new $89ef13bdabea8903$export$5e05a94393ac29e3($89ef13bdabea8903$var$hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), $89ef13bdabea8903$var$hsl2rgb(h, m1, m2), $89ef13bdabea8903$var$hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    displayable: function() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl: function() {
        var a = this.opacity;
        a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
        return (a === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a === 1 ? ")" : ", " + a + ")");
    }
}));
/* From FvD 13.37, CSS Color Module Level 3 */ function $89ef13bdabea8903$var$hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

});
parcelRequire.register("fAhyN", function(module, exports) {

$parcel$export(module.exports, "default", () => $b587d6e23b33f733$export$2e2bcd8739ae039);
$parcel$export(module.exports, "extend", () => $b587d6e23b33f733$export$8b58be045bf06082);
function $b587d6e23b33f733$export$2e2bcd8739ae039(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
}
function $b587d6e23b33f733$export$8b58be045bf06082(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for(var key in definition)prototype[key] = definition[key];
    return prototype;
}

});





parcelRequire.register("flWYj", function(module, exports) {
"use strict";
var $b2d68fc59b8cf03d$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.interval = module.exports.builtIn = void 0;

const $b2d68fc59b8cf03d$var$built_in_math_eval_1 = $b2d68fc59b8cf03d$var$__importDefault((parcelRequire("gMMJf")));

const $b2d68fc59b8cf03d$var$interval_arithmetic_eval_1 = $b2d68fc59b8cf03d$var$__importDefault((parcelRequire("lit6P")));
const $b2d68fc59b8cf03d$var$samplers = {
    interval: $b2d68fc59b8cf03d$var$interval_arithmetic_eval_1.default,
    builtIn: $b2d68fc59b8cf03d$var$built_in_math_eval_1.default
};
if ($parcel$global.math) $b2d68fc59b8cf03d$var$samplers.builtIn = $parcel$global.math.compile;
function $b2d68fc59b8cf03d$var$generateEvaluator(samplerName) {
    function doCompile(expression) {
        // compiles does the following
        //
        // when expression === string
        //
        //     gen = new require('math-codegen')
        //     return gen.parse(expression).compile(Interval|BultInMath)
        //
        //     which is an object with the form
        //
        //     {
        //       eval: function (scope) {
        //         // math-codegen magic
        //       }
        //     }
        //
        // when expression === function
        //
        //    {
        //      eval: expression
        //    }
        //
        // othewise throw an error
        if (typeof expression === 'string') {
            const compiled = $b2d68fc59b8cf03d$var$samplers[samplerName](expression);
            if ($parcel$global.math && samplerName === 'builtIn') // if mathjs is included use its evaluate method instead
            return {
                eval: compiled.evaluate || compiled.eval
            };
            return compiled;
        } else if (typeof expression === 'function') return {
            eval: expression
        };
        else throw Error('expression must be a string or a function');
    }
    function compileIfPossible(meta, property) {
        // compile the function using interval arithmetic, cache the result
        // so that multiple calls with the same argument don't trigger the
        // kinda expensive compilation process
        const expression = meta[property];
        const hiddenProperty = samplerName + '_Expression_' + property;
        const hiddenCompiled = samplerName + '_Compiled_' + property;
        if (expression !== meta[hiddenProperty]) {
            meta[hiddenProperty] = expression;
            meta[hiddenCompiled] = doCompile(expression);
        }
    }
    function getCompiledExpression(meta, property) {
        return meta[samplerName + '_Compiled_' + property];
    }
    /**
     * Evaluates meta[property] with `variables`
     *
     * - Compiles meta[property] if it wasn't compiled already (also with cache
     *   check)
     * - Evaluates the resulting function with the merge of meta.scope and
     *   `variables`
     *
     * @param {Object} meta
     * @param {String} property
     * @param {Object} variables
     * @returns {Number|Array} The builtIn evaluator returns a number, the
     * interval evaluator an array
     */ function evaluate(meta, property, variables) {
        // e.g.
        //
        //  meta: {
        //    fn: 'x + 3',
        //    scope: { y: 3 }
        //  }
        //  property: 'fn'
        //  variables:  { x: 3 }
        //
        compileIfPossible(meta, property);
        return getCompiledExpression(meta, property).eval(Object.assign({}, meta.scope || {}, variables));
    }
    return evaluate;
}
const $b2d68fc59b8cf03d$var$builtIn = $b2d68fc59b8cf03d$var$generateEvaluator('builtIn');
module.exports.builtIn = $b2d68fc59b8cf03d$var$builtIn;
const $b2d68fc59b8cf03d$var$interval = $b2d68fc59b8cf03d$var$generateEvaluator('interval');
module.exports.interval = $b2d68fc59b8cf03d$var$interval;

});
parcelRequire.register("gMMJf", function(module, exports) {
/*
 * built-in-math-eval
 *
 * Copyright (c) 2015 Mauricio Poppe
 * Licensed under the MIT license.
 */ 'use strict';

module.exports = (parcelRequire("5xwXA"));

});
parcelRequire.register("5xwXA", function(module, exports) {
'use strict';

var $2C6nF = parcelRequire("2C6nF");

var $40899a029d54e043$var$math = (parcelRequire("a8QmP"))();
function $40899a029d54e043$var$processScope(scope) {
    Object.keys(scope).forEach(function(k) {
        var value = scope[k];
        scope[k] = $40899a029d54e043$var$math.factory(value);
    });
}
module.exports = function(expression) {
    return new $2C6nF().setDefs({
        $$processScope: $40899a029d54e043$var$processScope
    }).parse(expression).compile($40899a029d54e043$var$math);
};
module.exports.math = $40899a029d54e043$var$math;

});
parcelRequire.register("2C6nF", function(module, exports) {
/*
 * math-codegen
 *
 * Copyright (c) 2015 Mauricio Poppe
 * Licensed under the MIT license.
 */ 'use strict';

module.exports = (parcelRequire("9ErwV"));

});
parcelRequire.register("9ErwV", function(module, exports) {
'use strict';

var $j4Wi0 = parcelRequire("j4Wi0");
var $706d3465d85e1dbf$require$Parser = $j4Wi0.Parser;

var $dBbDm = parcelRequire("dBbDm");

var $gnlMg = parcelRequire("gnlMg");
function $706d3465d85e1dbf$var$CodeGenerator(options, defs) {
    this.statements = [];
    this.defs = defs || {};
    this.interpreter = new $dBbDm(this, options);
}
$706d3465d85e1dbf$var$CodeGenerator.prototype.setDefs = function(defs) {
    this.defs = $gnlMg(this.defs, defs);
    return this;
};
$706d3465d85e1dbf$var$CodeGenerator.prototype.compile = function(namespace) {
    if (!namespace || !(typeof namespace === 'object' || typeof namespace === 'function')) throw TypeError('namespace must be an object');
    if (typeof namespace.factory !== 'function') throw TypeError('namespace.factory must be a function');
    // definitions available in the function
    // each property under this.defs is mapped to local variables
    // e.g
    //
    //  function (defs) {
    //    var ns = defs['ns']
    //    // code generated for the expression
    //  }
    this.defs.ns = namespace;
    this.defs.$$mathCodegen = {
        getProperty: function(symbol, scope, ns) {
            if (symbol in scope) return scope[symbol];
            if (symbol in ns) return ns[symbol];
            throw SyntaxError('symbol "' + symbol + '" is undefined');
        },
        functionProxy: function(fn, name) {
            if (typeof fn !== 'function') throw SyntaxError('symbol "' + name + '" must be a function');
            return fn;
        }
    };
    this.defs.$$processScope = this.defs.$$processScope || function() {};
    var defsCode = Object.keys(this.defs).map(function(name) {
        return 'var ' + name + ' = defs["' + name + '"]';
    });
    // statement join
    if (!this.statements.length) throw Error('there are no statements saved in this generator, make sure you parse an expression before compiling it');
    // last statement is always a return statement
    this.statements[this.statements.length - 1] = 'return ' + this.statements[this.statements.length - 1];
    var code = this.statements.join(';');
    var factoryCode = defsCode.join('\n') + '\n' + [
        'return {',
        '  eval: function (scope) {',
        '    scope = scope || {}',
        '    $$processScope(scope)',
        '    ' + code,
        '  },',
        "  code: '" + code + "'",
        '}'
    ].join('\n');
    /* eslint-disable */ var factory = new Function('defs', factoryCode);
    return factory(this.defs);
/* eslint-enable */ };
$706d3465d85e1dbf$var$CodeGenerator.prototype.parse = function(code) {
    var self = this;
    var program = new $706d3465d85e1dbf$require$Parser().parse(code);
    this.statements = program.blocks.map(function(statement) {
        return self.interpreter.next(statement);
    });
    return this;
};
module.exports = $706d3465d85e1dbf$var$CodeGenerator;

});
parcelRequire.register("j4Wi0", function(module, exports) {

$parcel$export(module.exports, "Parser", () => $de3b9b219025941f$export$7acfa6ed01010e37, (v) => $de3b9b219025941f$export$7acfa6ed01010e37 = v);
$parcel$export(module.exports, "nodeTypes", () => $de3b9b219025941f$export$29d219211fc19f4f, (v) => $de3b9b219025941f$export$29d219211fc19f4f = v);
var $de3b9b219025941f$export$6168dc8908a6c652;
var $de3b9b219025941f$export$7acfa6ed01010e37;
var $de3b9b219025941f$export$29d219211fc19f4f;
/*
 * mr-parser
 *
 * Copyright (c) 2015 Mauricio Poppe
 * Licensed under the MIT license.
 */ 'use strict';

$de3b9b219025941f$export$6168dc8908a6c652 = (parcelRequire("dwVX3"));

$de3b9b219025941f$export$7acfa6ed01010e37 = (parcelRequire("378H4"));

$de3b9b219025941f$export$29d219211fc19f4f = (parcelRequire("kaaGB"));

});
parcelRequire.register("dwVX3", function(module, exports) {

var $eLd4S = parcelRequire("eLd4S");
var $9d9b377e569d32db$var$ESCAPES = {
    'n': '\n',
    'f': '\f',
    'r': '\r',
    't': '\t',
    'v': '\v',
    '\'': '\'',
    '"': '"'
};
var $9d9b377e569d32db$var$DELIMITERS = {
    ',': true,
    '(': true,
    ')': true,
    '[': true,
    ']': true,
    ';': true,
    // unary
    '~': true,
    // factorial
    '!': true,
    // arithmetic operators
    '+': true,
    '-': true,
    '*': true,
    '/': true,
    '%': true,
    '^': true,
    '**': true,
    // misc operators
    '|': true,
    '&': true,
    '^|': true,
    '=': true,
    ':': true,
    '?': true,
    '||': true,
    '&&': true,
    'xor': true,
    // relational
    '==': true,
    '!=': true,
    '===': true,
    '!==': true,
    '<': true,
    '>': true,
    '>=': true,
    '<=': true,
    // shifts
    '>>>': true,
    '<<': true,
    '>>': true
};
// helpers
function $9d9b377e569d32db$var$isDigit(c) {
    return c >= '0' && c <= '9';
}
function $9d9b377e569d32db$var$isIdentifier(c) {
    return c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c === '$' || c === '_';
}
function $9d9b377e569d32db$var$isWhitespace(c) {
    return c === ' ' || c === '\r' || c === '\t' || c === '\n' || c === '\v' || c === '\u00A0';
}
function $9d9b377e569d32db$var$isDelimiter(str) {
    return $9d9b377e569d32db$var$DELIMITERS[str];
}
function $9d9b377e569d32db$var$isQuote(c) {
    return c === '\'' || c === '"';
}
// lexer
function $9d9b377e569d32db$var$Lexer() {}
$9d9b377e569d32db$var$Lexer.prototype.throwError = function(message, index) {
    index = typeof index === 'undefined' ? this.index : index;
    var error = new Error(message + ' at index ' + index);
    error.index = index;
    error.description = message;
    throw error;
};
$9d9b377e569d32db$var$Lexer.prototype.lex = function(text) {
    this.text = text;
    this.index = 0;
    this.tokens = [];
    while(this.index < this.text.length){
        // skip whitespaces
        while($9d9b377e569d32db$var$isWhitespace(this.peek()))this.consume();
        var c = this.peek();
        var c2 = c + this.peek(1);
        var c3 = c2 + this.peek(2);
        // order
        // - delimiter of 3 characters
        // - delimiter of 2 characters
        // - delimiter of 1 character
        // - number
        // - variables, functions and named operators
        if ($9d9b377e569d32db$var$isDelimiter(c3)) {
            this.tokens.push({
                type: $eLd4S.DELIMITER,
                value: c3
            });
            this.consume();
            this.consume();
            this.consume();
        } else if ($9d9b377e569d32db$var$isDelimiter(c2)) {
            this.tokens.push({
                type: $eLd4S.DELIMITER,
                value: c2
            });
            this.consume();
            this.consume();
        } else if ($9d9b377e569d32db$var$isDelimiter(c)) {
            this.tokens.push({
                type: $eLd4S.DELIMITER,
                value: c
            });
            this.consume();
        } else if ($9d9b377e569d32db$var$isDigit(c) || c === '.' && $9d9b377e569d32db$var$isDigit(this.peek(1))) this.tokens.push({
            type: $eLd4S.NUMBER,
            value: this.readNumber()
        });
        else if ($9d9b377e569d32db$var$isQuote(c)) this.tokens.push({
            type: $eLd4S.STRING,
            value: this.readString()
        });
        else if ($9d9b377e569d32db$var$isIdentifier(c)) this.tokens.push({
            type: $eLd4S.SYMBOL,
            value: this.readIdentifier()
        });
        else this.throwError('unexpected character ' + c);
    }
    // end token
    this.tokens.push({
        type: $eLd4S.EOF
    });
    return this.tokens;
};
$9d9b377e569d32db$var$Lexer.prototype.peek = function(nth) {
    nth = nth || 0;
    if (this.index + nth >= this.text.length) return;
    return this.text.charAt(this.index + nth);
};
$9d9b377e569d32db$var$Lexer.prototype.consume = function() {
    var current = this.peek();
    this.index += 1;
    return current;
};
$9d9b377e569d32db$var$Lexer.prototype.readNumber = function() {
    var number = '';
    if (this.peek() === '.') {
        number += this.consume();
        if (!$9d9b377e569d32db$var$isDigit(this.peek())) this.throwError('number expected');
    } else {
        while($9d9b377e569d32db$var$isDigit(this.peek()))number += this.consume();
        if (this.peek() === '.') number += this.consume();
    }
    // numbers after the decimal dot
    while($9d9b377e569d32db$var$isDigit(this.peek()))number += this.consume();
    // exponent if available
    if (this.peek() === 'e' || this.peek() === 'E') {
        number += this.consume();
        if (!($9d9b377e569d32db$var$isDigit(this.peek()) || this.peek() === '+' || this.peek() === '-')) this.throwError();
        if (this.peek() === '+' || this.peek() === '-') number += this.consume();
        if (!$9d9b377e569d32db$var$isDigit(this.peek())) this.throwError('number expected');
        while($9d9b377e569d32db$var$isDigit(this.peek()))number += this.consume();
    }
    return number;
};
$9d9b377e569d32db$var$Lexer.prototype.readIdentifier = function() {
    var text = '';
    while($9d9b377e569d32db$var$isIdentifier(this.peek()) || $9d9b377e569d32db$var$isDigit(this.peek()))text += this.consume();
    return text;
};
$9d9b377e569d32db$var$Lexer.prototype.readString = function() {
    var quote = this.consume();
    var string = '';
    var escape;
    while(true){
        var c = this.consume();
        if (!c) this.throwError('string is not closed');
        if (escape) {
            if (c === 'u') {
                var hex = this.text.substring(this.index + 1, this.index + 5);
                if (!hex.match(/[\da-f]{4}/i)) this.throwError('invalid unicode escape');
                this.index += 4;
                string += String.fromCharCode(parseInt(hex, 16));
            } else {
                var replacement = $9d9b377e569d32db$var$ESCAPES[c];
                if (replacement) string += replacement;
                else string += c;
            }
            escape = false;
        } else if (c === quote) break;
        else if (c === '\\') escape = true;
        else string += c;
    }
    return string;
};
module.exports = $9d9b377e569d32db$var$Lexer;

});
parcelRequire.register("eLd4S", function(module, exports) {
module.exports = {
    EOF: 0,
    DELIMITER: 1,
    NUMBER: 2,
    STRING: 3,
    SYMBOL: 4
};

});


parcelRequire.register("378H4", function(module, exports) {

var $eLd4S = parcelRequire("eLd4S");

var $dwVX3 = parcelRequire("dwVX3");

var $crzlP = parcelRequire("crzlP");

var $9ZXy6 = parcelRequire("9ZXy6");

var $kLHd2 = parcelRequire("kLHd2");

var $714wn = parcelRequire("714wn");

var $4pH8V = parcelRequire("4pH8V");

var $hXdEc = parcelRequire("hXdEc");

var $8b3AH = parcelRequire("8b3AH");

var $3c2Px = parcelRequire("3c2Px");

var $ffom5 = parcelRequire("ffom5");
/**
 * Grammar DSL:
 *
 * program          : block (; block)*
 *
 * block            : assignment
 *
 * assignment       : ternary
 *                  | symbol `=` assignment
 *
 * ternary          : logicalOR
 *                  | logicalOR `?` ternary `:` ternary
 *
 * logicalOR        : logicalXOR
 *                  | logicalXOR (`||`,`or`) logicalOR
 *
 * logicalXOR       : logicalAND
 *                  : logicalAND `xor` logicalXOR
 *
 * logicalAND       : bitwiseOR
 *                  | bitwiseOR (`&&`,`and`) logicalAND
 *
 * bitwiseOR        : bitwiseXOR
 *                  | bitwiseXOR `|` bitwiseOR
 *
 * bitwiseXOR       : bitwiseAND
 *                  | bitwiseAND `^|` bitwiseXOR
 *
 * bitwiseAND       : relational
 *                  | relational `&` bitwiseAND
 *
 * relational       : shift
 *                  | shift (`!=` | `==` | `>` | '<' | '<=' |'>=') shift)
 *
 * shift            : additive
 *                  | additive (`>>` | `<<` | `>>>`) shift
 *
 * additive         : multiplicative
 *                  | multiplicative (`+` | `-`) additive
 *
 * multiplicative   : unary
 *                  | unary (`*` | `/` | `%`) unary
 *                  | unary symbol
 *
 * unary            : pow
 *                  | (`-` | `+` | `~`) unary
 *
 * pow              : factorial
 *                  | factorial (`^`, '**') unary
 *
 * factorial        : symbol
 *                  | symbol (`!`)
 *
 * symbol           : symbolToken
 *                  | symbolToken functionCall
 *                  | string
 *
 * functionCall     : `(` `)`
 *                  | `(` ternary (, ternary)* `)`
 *
 * string           : `'` (character)* `'`
 *                  : `"` (character)* `"`
 *                  | array
 *
 * array            : `[` `]`
 *                  | `[` assignment (, assignment)* `]`
 *                  | number
 *
 * number           : number-token
 *                  | parentheses
 *
 * parentheses      : `(` assignment `)`
 *                  : end
 *
 * end              : NULL
 *
 * @param {[type]} lexer [description]
 */ function $2448c4f3bb282038$var$Parser() {
    this.lexer = new $dwVX3();
    this.tokens = null;
}
$2448c4f3bb282038$var$Parser.prototype.current = function() {
    return this.tokens[0];
};
$2448c4f3bb282038$var$Parser.prototype.next = function() {
    return this.tokens[1];
};
$2448c4f3bb282038$var$Parser.prototype.peek = function() {
    if (this.tokens.length) {
        var first = this.tokens[0];
        for(var i = 0; i < arguments.length; i += 1){
            if (first.value === arguments[i]) return true;
        }
    }
};
$2448c4f3bb282038$var$Parser.prototype.consume = function(e) {
    return this.tokens.shift();
};
$2448c4f3bb282038$var$Parser.prototype.expect = function(e) {
    if (!this.peek(e)) throw Error('expected ' + e);
    return this.consume();
};
$2448c4f3bb282038$var$Parser.prototype.isEOF = function() {
    return this.current().type === $eLd4S.EOF;
};
$2448c4f3bb282038$var$Parser.prototype.parse = function(text) {
    this.tokens = this.lexer.lex(text);
    return this.program();
};
$2448c4f3bb282038$var$Parser.prototype.program = function() {
    var blocks = [];
    while(!this.isEOF()){
        blocks.push(this.assignment());
        if (this.peek(';')) this.consume();
    }
    this.end();
    return new $ffom5(blocks);
};
$2448c4f3bb282038$var$Parser.prototype.assignment = function() {
    var left = this.ternary();
    if (left instanceof $714wn && this.peek('=')) {
        this.consume();
        return new $3c2Px(left.name, this.assignment());
    }
    return left;
};
$2448c4f3bb282038$var$Parser.prototype.ternary = function() {
    var predicate = this.logicalOR();
    if (this.peek('?')) {
        this.consume();
        var truthy = this.ternary();
        this.expect(':');
        var falsy = this.ternary();
        return new $8b3AH(predicate, truthy, falsy);
    }
    return predicate;
};
$2448c4f3bb282038$var$Parser.prototype.logicalOR = function() {
    var left = this.logicalXOR();
    if (this.peek('||')) {
        var op = this.consume();
        var right = this.logicalOR();
        return new $9ZXy6(op.value, [
            left,
            right
        ]);
    }
    return left;
};
$2448c4f3bb282038$var$Parser.prototype.logicalXOR = function() {
    var left = this.logicalAND();
    if (this.current().value === 'xor') {
        var op = this.consume();
        var right = this.logicalXOR();
        return new $9ZXy6(op.value, [
            left,
            right
        ]);
    }
    return left;
};
$2448c4f3bb282038$var$Parser.prototype.logicalAND = function() {
    var left = this.bitwiseOR();
    if (this.peek('&&')) {
        var op = this.consume();
        var right = this.logicalAND();
        return new $9ZXy6(op.value, [
            left,
            right
        ]);
    }
    return left;
};
$2448c4f3bb282038$var$Parser.prototype.bitwiseOR = function() {
    var left = this.bitwiseXOR();
    if (this.peek('|')) {
        var op = this.consume();
        var right = this.bitwiseOR();
        return new $9ZXy6(op.value, [
            left,
            right
        ]);
    }
    return left;
};
$2448c4f3bb282038$var$Parser.prototype.bitwiseXOR = function() {
    var left = this.bitwiseAND();
    if (this.peek('^|')) {
        var op = this.consume();
        var right = this.bitwiseXOR();
        return new $9ZXy6(op.value, [
            left,
            right
        ]);
    }
    return left;
};
$2448c4f3bb282038$var$Parser.prototype.bitwiseAND = function() {
    var left = this.relational();
    if (this.peek('&')) {
        var op = this.consume();
        var right = this.bitwiseAND();
        return new $9ZXy6(op.value, [
            left,
            right
        ]);
    }
    return left;
};
$2448c4f3bb282038$var$Parser.prototype.relational = function() {
    var left = this.shift();
    if (this.peek('==', '===', '!=', '!==', '>=', '<=', '>', '<')) {
        var op = this.consume();
        var right = this.shift();
        return new $9ZXy6(op.value, [
            left,
            right
        ]);
    }
    return left;
};
$2448c4f3bb282038$var$Parser.prototype.shift = function() {
    var left = this.additive();
    if (this.peek('>>', '<<', '>>>')) {
        var op = this.consume();
        var right = this.shift();
        return new $9ZXy6(op.value, [
            left,
            right
        ]);
    }
    return left;
};
$2448c4f3bb282038$var$Parser.prototype.additive = function() {
    var left = this.multiplicative();
    while(this.peek('+', '-')){
        var op = this.consume();
        left = new $9ZXy6(op.value, [
            left,
            this.multiplicative()
        ]);
    }
    return left;
};
$2448c4f3bb282038$var$Parser.prototype.multiplicative = function() {
    var op, right;
    var left = this.unary();
    while(this.peek('*', '/', '%')){
        op = this.consume();
        left = new $9ZXy6(op.value, [
            left,
            this.unary()
        ]);
    }
    // implicit multiplication
    // - 2 x
    // - 2(x)
    // - (2)2
    if (this.current().type === $eLd4S.SYMBOL || this.peek('(') || !(left.type instanceof $crzlP) && this.current().type === $eLd4S.NUMBER) {
        right = this.multiplicative();
        return new $9ZXy6('*', [
            left,
            right
        ]);
    }
    return left;
};
$2448c4f3bb282038$var$Parser.prototype.unary = function() {
    if (this.peek('-', '+', '~')) {
        var op = this.consume();
        var right = this.unary();
        return new $kLHd2(op.value, right);
    }
    return this.pow();
};
$2448c4f3bb282038$var$Parser.prototype.pow = function() {
    var left = this.factorial();
    if (this.peek('^', '**')) {
        var op = this.consume();
        var right = this.unary();
        return new $9ZXy6(op.value, [
            left,
            right
        ]);
    }
    return left;
};
$2448c4f3bb282038$var$Parser.prototype.factorial = function() {
    var left = this.symbol();
    if (this.peek('!')) {
        var op = this.consume();
        return new $9ZXy6(op.value, [
            left
        ]);
    }
    return left;
};
$2448c4f3bb282038$var$Parser.prototype.symbol = function() {
    var current = this.current();
    if (current.type === $eLd4S.SYMBOL) {
        var symbol = this.consume();
        var node = this.functionCall(symbol);
        return node;
    }
    return this.string();
};
$2448c4f3bb282038$var$Parser.prototype.functionCall = function(symbolToken) {
    var name = symbolToken.value;
    if (this.peek('(')) {
        this.consume();
        var params = [];
        while(!this.peek(')') && !this.isEOF()){
            params.push(this.assignment());
            if (this.peek(',')) this.consume();
        }
        this.expect(')');
        return new $4pH8V(name, params);
    }
    return new $714wn(name);
};
$2448c4f3bb282038$var$Parser.prototype.string = function() {
    if (this.current().type === $eLd4S.STRING) return new $crzlP(this.consume().value, 'string');
    return this.array();
};
$2448c4f3bb282038$var$Parser.prototype.array = function() {
    if (this.peek('[')) {
        this.consume();
        var params = [];
        while(!this.peek(']') && !this.isEOF()){
            params.push(this.assignment());
            if (this.peek(',')) this.consume();
        }
        this.expect(']');
        return new $hXdEc(params);
    }
    return this.number();
};
$2448c4f3bb282038$var$Parser.prototype.number = function() {
    var token = this.current();
    if (token.type === $eLd4S.NUMBER) return new $crzlP(this.consume().value, 'number');
    return this.parentheses();
};
$2448c4f3bb282038$var$Parser.prototype.parentheses = function() {
    var token = this.current();
    if (token.value === '(') {
        this.consume();
        var left = this.assignment();
        this.expect(')');
        return left;
    }
    return this.end();
};
$2448c4f3bb282038$var$Parser.prototype.end = function() {
    var token = this.current();
    if (token.type !== $eLd4S.EOF) throw Error('unexpected end of expression');
};
module.exports = $2448c4f3bb282038$var$Parser;

});
parcelRequire.register("crzlP", function(module, exports) {

var $namCE = parcelRequire("namCE");
var $90f36da5c220a6c0$var$SUPPORTED_TYPES = {
    number: true,
    string: true,
    'boolean': true,
    'undefined': true,
    'null': true
};
function $90f36da5c220a6c0$var$ConstantNode(value, type) {
    if (!$90f36da5c220a6c0$var$SUPPORTED_TYPES[type]) throw Error('unsupported type \'' + type + '\'');
    this.value = value;
    this.valueType = type;
}
$90f36da5c220a6c0$var$ConstantNode.prototype = Object.create($namCE.prototype);
$90f36da5c220a6c0$var$ConstantNode.prototype.type = 'ConstantNode';
module.exports = $90f36da5c220a6c0$var$ConstantNode;

});
parcelRequire.register("namCE", function(module, exports) {
function $045a3025a326710a$var$Node() {}
$045a3025a326710a$var$Node.prototype.type = 'Node';
module.exports = $045a3025a326710a$var$Node;

});


parcelRequire.register("9ZXy6", function(module, exports) {

var $namCE = parcelRequire("namCE");
function $747800c4107893f7$var$OperatorNode(op, args) {
    this.op = op;
    this.args = args || [];
}
$747800c4107893f7$var$OperatorNode.prototype = Object.create($namCE.prototype);
$747800c4107893f7$var$OperatorNode.prototype.type = 'OperatorNode';
module.exports = $747800c4107893f7$var$OperatorNode;

});

parcelRequire.register("kLHd2", function(module, exports) {

var $namCE = parcelRequire("namCE");
function $f1e9b6e8b5e52b1d$var$UnaryNode(op, argument) {
    this.op = op;
    this.argument = argument;
}
$f1e9b6e8b5e52b1d$var$UnaryNode.prototype = Object.create($namCE.prototype);
$f1e9b6e8b5e52b1d$var$UnaryNode.prototype.type = 'UnaryNode';
module.exports = $f1e9b6e8b5e52b1d$var$UnaryNode;

});

parcelRequire.register("714wn", function(module, exports) {

var $namCE = parcelRequire("namCE");
function $51bc223639594f5e$var$SymbolNode(name) {
    this.name = name;
}
$51bc223639594f5e$var$SymbolNode.prototype = Object.create($namCE.prototype);
$51bc223639594f5e$var$SymbolNode.prototype.type = 'SymbolNode';
module.exports = $51bc223639594f5e$var$SymbolNode;

});

parcelRequire.register("4pH8V", function(module, exports) {

var $namCE = parcelRequire("namCE");
function $336af67fcc46362c$var$FunctionNode(name, args) {
    this.name = name;
    this.args = args;
}
$336af67fcc46362c$var$FunctionNode.prototype = Object.create($namCE.prototype);
$336af67fcc46362c$var$FunctionNode.prototype.type = 'FunctionNode';
module.exports = $336af67fcc46362c$var$FunctionNode;

});

parcelRequire.register("hXdEc", function(module, exports) {

var $namCE = parcelRequire("namCE");
function $d1228876eb10d152$var$ArrayNode(nodes) {
    this.nodes = nodes;
}
$d1228876eb10d152$var$ArrayNode.prototype = Object.create($namCE.prototype);
$d1228876eb10d152$var$ArrayNode.prototype.type = 'ArrayNode';
module.exports = $d1228876eb10d152$var$ArrayNode;

});

parcelRequire.register("8b3AH", function(module, exports) {

var $namCE = parcelRequire("namCE");
function $5f4222e4470edcd2$var$ConditionalNode(predicate, truthy, falsy) {
    this.condition = predicate;
    this.trueExpr = truthy;
    this.falseExpr = falsy;
}
$5f4222e4470edcd2$var$ConditionalNode.prototype = Object.create($namCE.prototype);
$5f4222e4470edcd2$var$ConditionalNode.prototype.type = 'ConditionalNode';
module.exports = $5f4222e4470edcd2$var$ConditionalNode;

});

parcelRequire.register("3c2Px", function(module, exports) {

var $namCE = parcelRequire("namCE");
function $2534b020bb15114b$var$AssignmentNode(name, expr) {
    this.name = name;
    this.expr = expr;
}
$2534b020bb15114b$var$AssignmentNode.prototype = Object.create($namCE.prototype);
$2534b020bb15114b$var$AssignmentNode.prototype.type = 'AssignmentNode';
module.exports = $2534b020bb15114b$var$AssignmentNode;

});

parcelRequire.register("ffom5", function(module, exports) {

var $namCE = parcelRequire("namCE");
function $b19b262f608bfcc8$var$BlockNode(blocks) {
    this.blocks = blocks;
}
$b19b262f608bfcc8$var$BlockNode.prototype = Object.create($namCE.prototype);
$b19b262f608bfcc8$var$BlockNode.prototype.type = 'BlockNode';
module.exports = $b19b262f608bfcc8$var$BlockNode;

});


parcelRequire.register("kaaGB", function(module, exports) {










module.exports = {
    ArrayNode: (parcelRequire("hXdEc")),
    AssignmentNode: (parcelRequire("3c2Px")),
    BlockNode: (parcelRequire("ffom5")),
    ConditionalNode: (parcelRequire("8b3AH")),
    ConstantNode: (parcelRequire("crzlP")),
    FunctionNode: (parcelRequire("4pH8V")),
    Node: (parcelRequire("namCE")),
    OperatorNode: (parcelRequire("9ZXy6")),
    SymbolNode: (parcelRequire("714wn")),
    UnaryNode: (parcelRequire("kLHd2"))
};

});


parcelRequire.register("dBbDm", function(module, exports) {
'use strict';

var $gnlMg = parcelRequire("gnlMg");








var $9e67c1501211bc7d$var$types = {
    ArrayNode: (parcelRequire("3J4ZX")),
    AssignmentNode: (parcelRequire("cdh1c")),
    ConditionalNode: (parcelRequire("avtab")),
    ConstantNode: (parcelRequire("4VXts")),
    FunctionNode: (parcelRequire("1QfhK")),
    OperatorNode: (parcelRequire("3fx07")),
    SymbolNode: (parcelRequire("a0QrZ")),
    UnaryNode: (parcelRequire("2UEtU"))
};
var $9e67c1501211bc7d$var$Interpreter = function(owner, options) {
    this.owner = owner;
    this.options = $gnlMg({
        factory: 'ns.factory',
        raw: false,
        rawArrayExpressionElements: true,
        rawCallExpressionElements: false
    }, options);
};
$gnlMg($9e67c1501211bc7d$var$Interpreter.prototype, $9e67c1501211bc7d$var$types);
// main method which decides which expression to call
$9e67c1501211bc7d$var$Interpreter.prototype.next = function(node) {
    if (!(node.type in this)) throw new TypeError('the node type ' + node.type + ' is not implemented');
    return this[node.type](node);
};
$9e67c1501211bc7d$var$Interpreter.prototype.rawify = function(test, fn) {
    var oldRaw = this.options.raw;
    if (test) this.options.raw = true;
    fn();
    if (test) this.options.raw = oldRaw;
};
module.exports = $9e67c1501211bc7d$var$Interpreter;

});
parcelRequire.register("gnlMg", function(module, exports) {
'use strict';
var $bebfafddc65b28d0$var$hasOwn = Object.prototype.hasOwnProperty;
var $bebfafddc65b28d0$var$toStr = Object.prototype.toString;
var $bebfafddc65b28d0$var$defineProperty = Object.defineProperty;
var $bebfafddc65b28d0$var$gOPD = Object.getOwnPropertyDescriptor;
var $bebfafddc65b28d0$var$isArray = function isArray(arr) {
    if (typeof Array.isArray === 'function') return Array.isArray(arr);
    return $bebfafddc65b28d0$var$toStr.call(arr) === '[object Array]';
};
var $bebfafddc65b28d0$var$isPlainObject = function isPlainObject(obj) {
    if (!obj || $bebfafddc65b28d0$var$toStr.call(obj) !== '[object Object]') return false;
    var hasOwnConstructor = $bebfafddc65b28d0$var$hasOwn.call(obj, 'constructor');
    var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && $bebfafddc65b28d0$var$hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
    // Not own constructor property must be Object
    if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) return false;
    // Own properties are enumerated firstly, so to speed up,
    // if last one is own, then all properties are own.
    var key;
    for(key in obj);
    return typeof key === 'undefined' || $bebfafddc65b28d0$var$hasOwn.call(obj, key);
};
// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var $bebfafddc65b28d0$var$setProperty = function setProperty(target, options) {
    if ($bebfafddc65b28d0$var$defineProperty && options.name === '__proto__') $bebfafddc65b28d0$var$defineProperty(target, options.name, {
        enumerable: true,
        configurable: true,
        value: options.newValue,
        writable: true
    });
    else target[options.name] = options.newValue;
};
// Return undefined instead of __proto__ if '__proto__' is not an own property
var $bebfafddc65b28d0$var$getProperty = function getProperty(obj, name) {
    if (name === '__proto__') {
        if (!$bebfafddc65b28d0$var$hasOwn.call(obj, name)) return void 0;
        else if ($bebfafddc65b28d0$var$gOPD) // In early versions of node, obj['__proto__'] is buggy when obj has
        // __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
        return $bebfafddc65b28d0$var$gOPD(obj, name).value;
    }
    return obj[name];
};
module.exports = function extend() {
    var options, name, src, copy, copyIsArray, clone;
    var target = arguments[0];
    var i = 1;
    var length = arguments.length;
    var deep = false;
    // Handle a deep copy situation
    if (typeof target === 'boolean') {
        deep = target;
        target = arguments[1] || {};
        // skip the boolean and the target
        i = 2;
    }
    if (target == null || typeof target !== 'object' && typeof target !== 'function') target = {};
    for(; i < length; ++i){
        options = arguments[i];
        // Only deal with non-null/undefined values
        if (options != null) // Extend the base object
        for(name in options){
            src = $bebfafddc65b28d0$var$getProperty(target, name);
            copy = $bebfafddc65b28d0$var$getProperty(options, name);
            // Prevent never-ending loop
            if (target !== copy) {
                // Recurse if we're merging plain objects or arrays
                if (deep && copy && ($bebfafddc65b28d0$var$isPlainObject(copy) || (copyIsArray = $bebfafddc65b28d0$var$isArray(copy)))) {
                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && $bebfafddc65b28d0$var$isArray(src) ? src : [];
                    } else clone = src && $bebfafddc65b28d0$var$isPlainObject(src) ? src : {};
                    // Never move original objects, clone them
                    $bebfafddc65b28d0$var$setProperty(target, {
                        name: name,
                        newValue: extend(deep, clone, copy)
                    });
                // Don't bring in undefined values
                } else if (typeof copy !== 'undefined') $bebfafddc65b28d0$var$setProperty(target, {
                    name: name,
                    newValue: copy
                });
            }
        }
    }
    // Return the modified object
    return target;
};

});

parcelRequire.register("3J4ZX", function(module, exports) {
'use strict';
module.exports = function(node) {
    var self = this;
    var arr = [];
    this.rawify(this.options.rawArrayExpressionElements, function() {
        arr = node.nodes.map(function(el) {
            return self.next(el);
        });
    });
    var arrString = '[' + arr.join(',') + ']';
    if (this.options.raw) return arrString;
    return this.options.factory + '(' + arrString + ')';
};

});

parcelRequire.register("cdh1c", function(module, exports) {
'use strict';
module.exports = function(node) {
    return 'scope["' + node.name + '"] = ' + this.next(node.expr);
};

});

parcelRequire.register("avtab", function(module, exports) {
'use strict';
module.exports = function(node) {
    var condition = '!!(' + this.next(node.condition) + ')';
    var trueExpr = this.next(node.trueExpr);
    var falseExpr = this.next(node.falseExpr);
    return '(' + condition + ' ? (' + trueExpr + ') : (' + falseExpr + ') )';
};

});

parcelRequire.register("4VXts", function(module, exports) {
'use strict';
module.exports = function(node) {
    if (this.options.raw) return node.value;
    return this.options.factory + '(' + node.value + ')';
};

});

parcelRequire.register("1QfhK", function(module, exports) {
'use strict';

var $j4Wi0 = parcelRequire("j4Wi0");
var $15768114c1ad1873$var$SymbolNode = $j4Wi0.nodeTypes.SymbolNode;
var $15768114c1ad1873$var$functionProxy = function(node) {
    return '$$mathCodegen.functionProxy(' + this.next(new $15768114c1ad1873$var$SymbolNode(node.name)) + ', "' + node.name + '")';
};
module.exports = function(node) {
    var self = this;
    // wrap in a helper function to detect the type of symbol it must be a function
    // NOTE: if successful the wrapper returns the function itself
    // NOTE: node.name should be a symbol so that it's correctly represented as a string in SymbolNode
    var method = $15768114c1ad1873$var$functionProxy.call(this, node);
    var args = [];
    this.rawify(this.options.rawCallExpressionElements, function() {
        args = node.args.map(function(arg) {
            return self.next(arg);
        });
    });
    return method + '(' + args.join(', ') + ')';
};
module.exports.functionProxy = $15768114c1ad1873$var$functionProxy;

});

parcelRequire.register("3fx07", function(module, exports) {
'use strict';

var $lrJPw = parcelRequire("lrJPw");
module.exports = function(node) {
    if (this.options.raw) return [
        '(' + this.next(node.args[0]),
        node.op,
        this.next(node.args[1]) + ')'
    ].join(' ');
    var namedOperator = $lrJPw[node.op];
    if (!namedOperator) throw TypeError('unidentified operator');
    /* eslint-disable new-cap */ return this.FunctionNode({
        name: namedOperator,
        args: node.args
    });
/* eslint-enable new-cap */ };

});
parcelRequire.register("lrJPw", function(module, exports) {
'use strict';
module.exports = {
    // arithmetic
    '+': 'add',
    '-': 'sub',
    '*': 'mul',
    '/': 'div',
    '^': 'pow',
    '%': 'mod',
    '!': 'factorial',
    // misc operators
    '|': 'bitwiseOR',
    '^|': 'bitwiseXOR',
    '&': 'bitwiseAND',
    '||': 'logicalOR',
    'xor': 'logicalXOR',
    '&&': 'logicalAND',
    // comparison
    '<': 'lessThan',
    '>': 'greaterThan',
    '<=': 'lessEqualThan',
    '>=': 'greaterEqualThan',
    '===': 'strictlyEqual',
    '==': 'equal',
    '!==': 'strictlyNotEqual',
    '!=': 'notEqual',
    // shift
    '>>': 'shiftRight',
    '<<': 'shiftLeft',
    '>>>': 'unsignedRightShift'
};

});


parcelRequire.register("a0QrZ", function(module, exports) {
'use strict';
module.exports = function(node) {
    var id = node.name;
    return '$$mathCodegen.getProperty("' + id + '", scope, ns)';
};

});

parcelRequire.register("2UEtU", function(module, exports) {
'use strict';

var $kifJ3 = parcelRequire("kifJ3");
module.exports = function(node) {
    if (this.options.raw) return node.op + this.next(node.argument);
    if (!(node.op in $kifJ3)) throw new SyntaxError(node.op + ' not implemented');
    var namedOperator = $kifJ3[node.op];
    /* eslint-disable new-cap */ return this.FunctionNode({
        name: namedOperator,
        args: [
            node.argument
        ]
    });
/* eslint-enable new-cap */ };

});
parcelRequire.register("kifJ3", function(module, exports) {
'use strict';
module.exports = {
    '+': 'positive',
    '-': 'negative',
    '~': 'oneComplement'
};

});





parcelRequire.register("a8QmP", function(module, exports) {
'use strict';
module.exports = function() {
    var math = Object.create(Math);
    math.factory = function(a) {
        if (typeof a !== 'number') throw new TypeError('built-in math factory only accepts numbers');
        return Number(a);
    };
    math.add = function(a, b) {
        return a + b;
    };
    math.sub = function(a, b) {
        return a - b;
    };
    math.mul = function(a, b) {
        return a * b;
    };
    math.div = function(a, b) {
        return a / b;
    };
    math.mod = function(a, b) {
        return a % b;
    };
    math.factorial = function(a) {
        var res = 1;
        for(var i = 2; i <= a; i += 1)res *= i;
        return res;
    };
    // taken from https://github.com/josdejong/mathjs/blob/master/lib/function/arithmetic/nthRoot.js
    math.nthRoot = function(a, root) {
        var inv = root < 0;
        if (inv) root = -root;
        if (root === 0) throw new Error('Root must be non-zero');
        if (a < 0 && Math.abs(root) % 2 !== 1) throw new Error('Root must be odd when a is negative.');
        // edge cases zero and infinity
        if (a === 0) return 0;
        if (!isFinite(a)) return inv ? 0 : a;
        var x = Math.pow(Math.abs(a), 1 / root);
        // If a < 0, we require that root is an odd integer,
        // so (-1) ^ (1/root) = -1
        x = a < 0 ? -x : x;
        return inv ? 1 / x : x;
    };
    // logical
    math.logicalOR = function(a, b) {
        return a || b;
    };
    math.logicalXOR = function(a, b) {
        /* eslint-disable */ return a != b;
    /* eslint-enable*/ };
    math.logicalAND = function(a, b) {
        return a && b;
    };
    // bitwise
    math.bitwiseOR = function(a, b) {
        /* eslint-disable */ return a | b;
    /* eslint-enable*/ };
    math.bitwiseXOR = function(a, b) {
        /* eslint-disable */ return a ^ b;
    /* eslint-enable*/ };
    math.bitwiseAND = function(a, b) {
        /* eslint-disable */ return a & b;
    /* eslint-enable*/ };
    // relational
    math.lessThan = function(a, b) {
        return a < b;
    };
    math.lessEqualThan = function(a, b) {
        return a <= b;
    };
    math.greaterThan = function(a, b) {
        return a > b;
    };
    math.greaterEqualThan = function(a, b) {
        return a >= b;
    };
    math.equal = function(a, b) {
        /* eslint-disable */ return a == b;
    /* eslint-enable*/ };
    math.strictlyEqual = function(a, b) {
        return a === b;
    };
    math.notEqual = function(a, b) {
        /* eslint-disable */ return a != b;
    /* eslint-enable*/ };
    math.strictlyNotEqual = function(a, b) {
        return a !== b;
    };
    // shift
    math.shiftRight = function(a, b) {
        return a >> b;
    };
    math.shiftLeft = function(a, b) {
        return a << b;
    };
    math.unsignedRightShift = function(a, b) {
        return a >>> b;
    };
    // unary
    math.negative = function(a) {
        return -a;
    };
    math.positive = function(a) {
        return a;
    };
    return math;
};

});



parcelRequire.register("lit6P", function(module, exports) {
/*
 * interval-arithmetic-eval
 *
 * Copyright (c) 2015 Mauricio Poppe
 * Licensed under the MIT license.
 */ 'use strict';

module.exports = (parcelRequire("h11UJ"));

});
parcelRequire.register("h11UJ", function(module, exports) {
/**
 * Created by mauricio on 5/12/15.
 */ 'use strict';

var $2C6nF = parcelRequire("2C6nF");

var $bF55x = parcelRequire("bF55x");
var $c63403c61506d895$require$Interval = $bF55x.default;

(parcelRequire("iYUfz"))($c63403c61506d895$require$Interval);
function $c63403c61506d895$var$processScope(scope) {
    Object.keys(scope).forEach(function(k) {
        const value = scope[k];
        if (typeof value === 'number' || Array.isArray(value)) scope[k] = $c63403c61506d895$require$Interval.factory(value);
        else if (typeof value === 'object' && 'lo' in value && 'hi' in value) scope[k] = $c63403c61506d895$require$Interval.factory(value.lo, value.hi);
    });
}
module.exports = function(expression) {
    return new $2C6nF().setDefs({
        $$processScope: $c63403c61506d895$var$processScope
    }).parse(expression).compile($c63403c61506d895$require$Interval);
};

module.exports.policies = (parcelRequire("exAGA"))($c63403c61506d895$require$Interval);
module.exports.Interval = $c63403c61506d895$require$Interval;

});
parcelRequire.register("bF55x", function(module, exports) {

$parcel$export(module.exports, "default", () => $87d7787c10a09eda$export$2e2bcd8739ae039);

var $77Bzg = parcelRequire("77Bzg");

var $gu4IX = parcelRequire("gu4IX");

var $fR4oS = parcelRequire("fR4oS");
parcelRequire("7JfMK");
parcelRequire("6peeJ");
parcelRequire("3ScdR");
parcelRequire("cfagc");
parcelRequire("2VxbH");
parcelRequire("3owoD");
parcelRequire("7JfMK");
parcelRequire("6peeJ");
parcelRequire("3ScdR");
parcelRequire("cfagc");
parcelRequire("2VxbH");
parcelRequire("3owoD");

var $gu4IX = parcelRequire("gu4IX");
// Object assign only supports 4 union levels
var $87d7787c10a09eda$var$out1 = Object.assign($fR4oS.default, $gu4IX.default, $87d7787c10a09eda$import$d2f2b61378156cd4, $87d7787c10a09eda$import$df013ca33cad1ff9);
var $87d7787c10a09eda$var$out2 = Object.assign($87d7787c10a09eda$import$c77dc1be9a94c2c6, $87d7787c10a09eda$import$c1d9d9ecc2540f4b, $87d7787c10a09eda$import$bfb44d789f45e6a4, $87d7787c10a09eda$import$9b55ea187ec9bce6);
var $87d7787c10a09eda$var$out = Object.assign($77Bzg.Interval, $87d7787c10a09eda$var$out1, $87d7787c10a09eda$var$out2, {
    round: $gu4IX.default
});
var $87d7787c10a09eda$export$2e2bcd8739ae039 = $87d7787c10a09eda$var$out;

});
parcelRequire.register("77Bzg", function(module, exports) {

$parcel$export(module.exports, "Interval", () => $52f65407f6c3a790$export$e659c2681d58d45b);

var $3owoD = parcelRequire("3owoD");

var $gu4IX = parcelRequire("gu4IX");
/**
 * Constructor for closed intervals representing all the values inside (and
 * including) `lo` and `hi` e.g. `[lo, hi]`
 *
 * NOTE: If `lo > hi` then the constructor will return an empty interval
 *
 * @class
 * @mixes arithmetic
 * @mixes algebra
 * @mixes misc
 * @mixes relational
 * @mixes trigonometric
 * @mixes utils
 * @mixes constants
 *
 * @link #bounded
 * @link #boundedSingleton
 *
 * @example
 * ```typescript
 * new Interval(1, 2)  // {lo: 1, hi: 2}
 * // function invocation without new is also supported
 * Interval(1, 2)   // {lo: 1, hi: 2}
 * // with numbers
 * Interval(1, 2)   // {lo: 1, hi: 2}
 * Interval(1)      // {lo: 1, hi: 1}
 * // with an array
 * Interval([1, 2]) // {lo: 1, hi: 2}
 * // singleton intervals
 * var x = Interval(1)
 * var y = Interval(2)
 * Interval(x, y)   // {lo: 1, hi: 2}
 * // when `lo > hi` it returns an empty interval
 * Interval(2, 1)   // {lo: Infinity, hi: -Infinity}
 * // bounded interval
 * Interval().bounded(1, 2)  // { lo: 0.9999999999999999, hi: 2.0000000000000004 }
 * // singleton bounded interval
 * Interval().boundedSingleton(2)  // {lo: 1.9999999999999998, hi: 2.0000000000000004}
 * // half open and open intervals
 * // [2, 3]
 * Interval(2, 3)                     // {lo: 2, hi: 3}
 * // (2, 3]
 * Interval().halfOpenLeft(2, 3)      // {lo: 2.0000000000000004, hi: 3}
 * // [2, 3)
 * Interval().halfOpenRight(2, 3)     // {lo: 2, hi: 2.9999999999999996}
 * // (2, 3)
 * Interval().open(2, 3)              // {lo: 2.0000000000000004, hi: 2.9999999999999996}
 * ```
 *
 * @param {number|array|Interval} lo The left endpoint of the interval if it's a
 * number or a singleton interval, if it's an array then an interval will be
 * built out of the elements of the array
 * @param {number|Interval} [hi] The right endpoint of the interval if it's a
 * number or a singleton interval, if omitted then a singleton interval will be
 * built out of `lo`
 */ var $52f65407f6c3a790$export$774ff7a38eae015a = /** @class */ function() {
    function $52f65407f6c3a790$export$774ff7a38eae015a(lo, hi) {
        if (!(this instanceof $52f65407f6c3a790$export$e659c2681d58d45b)) return new $52f65407f6c3a790$export$e659c2681d58d45b(lo, hi);
        if (typeof lo !== 'undefined' && typeof hi !== 'undefined') {
            // possible cases:
            // - Interval(1, 2)
            // - Interval(Interval(1, 1), Interval(2, 2))     // singletons are required
            if ($3owoD.isInterval(lo)) {
                if (!$3owoD.isSingleton(lo)) throw new TypeError('Interval: interval `lo` must be a singleton');
                lo = lo.lo;
            }
            if ($3owoD.isInterval(hi)) {
                if (!$3owoD.isSingleton(hi)) throw TypeError('Interval: interval `hi` must be a singleton');
                hi = hi.hi;
            }
        } else if (typeof lo !== 'undefined') {
            // possible cases:
            // - Interval([1, 2])
            // - Interval([Interval(1, 1), Interval(2, 2)])
            if (Array.isArray(lo)) return new $52f65407f6c3a790$export$e659c2681d58d45b(lo[0], lo[1]);
            // - Interval(1)
            return new $52f65407f6c3a790$export$e659c2681d58d45b(lo, lo);
        } else // possible cases:
        // - Interval()
        lo = hi = 0;
        this.assign(lo, hi);
    }
    /**
     * Sets `this.lo` and `this.hi` to a single value `v`
     *
     * @param {number} v
     * @return {Interval} The calling interval i.e. `this`
     */ $52f65407f6c3a790$export$774ff7a38eae015a.prototype.singleton = function(v) {
        return this.set(v, v);
    };
    /**
     * Sets new endpoints to this interval, the left endpoint is equal to the
     * previous IEEE floating point value of `lo` and the right endpoint
     * is equal to the next IEEE floating point
     * value of `hi`, it's assumed that `lo <= hi`
     *
     * @example
     * ```typescript
     * const x = Interval().bounded(1, 2)
     * x.lo < 1 // true, x.lo === 0.9999999999999999
     * x.hi > 2 // true, x.hi === 2.0000000000000004
     * ```
     *
     * @example
     * ```typescript
     * // the correct representation of 1/3
     * var x = Interval().bounded(1/3, 1/3)
     * x.lo < 1/3 // true
     * x.hi > 1/3 // true
     * // however the floating point representation of 1/3 is less than the real 1/3
     * // therefore the left endpoint could be 1/3 instead of the previous value of
     * var next = Interval.round.safeNext
     * var x = Interval().set(1/3, next(1/3))
     * // x now represents 1/3 correctly
     * ```
     *
     * @param {number} lo
     * @param {number} hi
     * @return {Interval} The calling interval i.e. `this`
     */ $52f65407f6c3a790$export$774ff7a38eae015a.prototype.bounded = function(lo, hi) {
        return this.set($gu4IX.default.prev(lo), $gu4IX.default.next(hi));
    };
    /**
     * Equivalent to `Interval().bounded(v, v)`
     * @param {number} v
     * @return {Interval} The calling interval i.e. `this`
     */ $52f65407f6c3a790$export$774ff7a38eae015a.prototype.boundedSingleton = function(v) {
        return this.bounded(v, v);
    };
    /**
     * Sets new endpoints for this interval, this method bypasses any
     * checks on the type of arguments
     *
     * @param {Number} lo The left endpoint of the interval
     * @param {Number} hi The right endpoint of the interval
     * @return {Interval} The calling interval
     */ $52f65407f6c3a790$export$774ff7a38eae015a.prototype.set = function(lo, hi) {
        this.lo = lo;
        this.hi = hi;
        return this;
    };
    /**
     * Sets new endpoints for this interval checking that both arguments exist
     * and that are valid numbers, additionally if `lo > hi` the interval is set to
     * an empty interval
     *
     * @param {Number} lo The left endpoint of the interval
     * @param {Number} hi The right endpoint of the interval
     * @return {Interval} The calling interval
     */ $52f65407f6c3a790$export$774ff7a38eae015a.prototype.assign = function(lo, hi) {
        if (typeof lo !== 'number' || typeof hi !== 'number') throw TypeError('Interval#assign: arguments must be numbers');
        if (isNaN(lo) || isNaN(hi) || lo > hi) return this.setEmpty();
        return this.set(lo, hi);
    };
    /**
     * Sets the endpoints of this interval to `[∞, -∞]` effectively representing
     * no values
     * @return {Interval} The calling interval
     */ $52f65407f6c3a790$export$774ff7a38eae015a.prototype.setEmpty = function() {
        return this.set(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);
    };
    /**
     * Sets the endpoints of this interval to `[-∞, ∞]` effectively representing all
     * the possible real values
     * @return {Interval} The calling interval
     */ $52f65407f6c3a790$export$774ff7a38eae015a.prototype.setWhole = function() {
        return this.set(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    };
    /**
     * Sets the endpoints of this interval to the open interval `(lo, hi)`
     *
     * NOTE: `Interval.round.disable` has no effect on this method
     *
     * @example
     * ```typescript
     * // (2, 3)
     * Interval().open(2, 3)  // {lo: 2.0000000000000004, hi: 2.9999999999999996}
     * ```
     *
     * @param {number} lo
     * @param {number} hi
     * @return {Interval} The calling interval
     */ $52f65407f6c3a790$export$774ff7a38eae015a.prototype.open = function(lo, hi) {
        return this.assign($gu4IX.default.safeNext(lo), $gu4IX.default.safePrev(hi));
    };
    /**
     * Sets the endpoints of this interval to the half open interval `(lo, hi]`
     *
     * NOTE: `Interval.round.disable` has no effect on this method
     *
     * @example
     * ```typescript
     * // (2, 3]
     * Interval().halfOpenLeft(2, 3)  // {lo: 2.0000000000000004, hi: 3}
     * ```
     *
     * @param {number} lo
     * @param {number} hi
     * @return {Interval} The calling interval
     */ $52f65407f6c3a790$export$774ff7a38eae015a.prototype.halfOpenLeft = function(lo, hi) {
        return this.assign($gu4IX.default.safeNext(lo), hi);
    };
    /**
     * Sets the endpoints of this interval to the half open interval `[lo, hi)`
     *
     * NOTE: `Interval.round.disable` has no effect on this method
     *
     * @example
     * ```typescript
     * // [2, 3)
     * Interval.halfOpenRight(2, 3)     // {lo: 2, hi: 2.9999999999999996}
     * ```
     *
     * @param {number} lo
     * @param {number} hi
     * @return {Interval} The calling interval
     */ $52f65407f6c3a790$export$774ff7a38eae015a.prototype.halfOpenRight = function(lo, hi) {
        return this.assign(lo, $gu4IX.default.safePrev(hi));
    };
    /**
     * Array representation of this interval
     * @return {array}
     */ $52f65407f6c3a790$export$774ff7a38eae015a.prototype.toArray = function() {
        return [
            this.lo,
            this.hi
        ];
    };
    /**
     * Creates an interval equal to the calling one
     * @see Interval.clone
     * @name Interval.prototype
     * @example
     * ```typescript
     * var x = Interval(2, 3)
     * x.clone()    // Interval(2, 3)
     * ```
     * @return {Interval}
     */ $52f65407f6c3a790$export$774ff7a38eae015a.prototype.clone = function() {
        return new $52f65407f6c3a790$export$e659c2681d58d45b().set(this.lo, this.hi);
    };
    $52f65407f6c3a790$export$774ff7a38eae015a.factory = $52f65407f6c3a790$export$774ff7a38eae015a;
    return $52f65407f6c3a790$export$774ff7a38eae015a;
}();
var $52f65407f6c3a790$export$e659c2681d58d45b = $52f65407f6c3a790$export$774ff7a38eae015a;

});
parcelRequire.register("3owoD", function(module, exports) {

$parcel$export(module.exports, "isInterval", () => $278cbe3da3773ff2$export$59b3ee3d90b7f75e);
$parcel$export(module.exports, "isEmpty", () => $278cbe3da3773ff2$export$dd1bc94b04021eeb);
$parcel$export(module.exports, "isWhole", () => $278cbe3da3773ff2$export$d65e0d2355a8d62b);
$parcel$export(module.exports, "isSingleton", () => $278cbe3da3773ff2$export$ba6ae8fcf67265a6);
$parcel$export(module.exports, "zeroIn", () => $278cbe3da3773ff2$export$ec384ef24e7d6415);
$parcel$export(module.exports, "intervalsOverlap", () => $278cbe3da3773ff2$export$2fbc44555d9bb169);
function $278cbe3da3773ff2$export$59b3ee3d90b7f75e(x) {
    return typeof x === 'object' && typeof x.lo === 'number' && typeof x.hi === 'number';
}
function $278cbe3da3773ff2$export$dd1bc94b04021eeb(i) {
    return i.lo > i.hi;
}
function $278cbe3da3773ff2$export$d65e0d2355a8d62b(i) {
    return i.lo === -Infinity && i.hi === Infinity;
}
function $278cbe3da3773ff2$export$ba6ae8fcf67265a6(i) {
    return i.lo === i.hi;
}
function $278cbe3da3773ff2$export$ec384ef24e7d6415(i) {
    return $278cbe3da3773ff2$export$96bdbc84526f3739(i, 0);
}
function $278cbe3da3773ff2$export$96bdbc84526f3739(i, value) {
    if ($278cbe3da3773ff2$export$dd1bc94b04021eeb(i)) return false;
    return i.lo <= value && value <= i.hi;
}
function $278cbe3da3773ff2$export$13d7e4b4d1d3382c(x, y) {
    if ($278cbe3da3773ff2$export$dd1bc94b04021eeb(x)) return true;
    return !$278cbe3da3773ff2$export$dd1bc94b04021eeb(y) && y.lo <= x.lo && x.hi <= y.hi;
}
function $278cbe3da3773ff2$export$2fbc44555d9bb169(x, y) {
    if ($278cbe3da3773ff2$export$dd1bc94b04021eeb(x) || $278cbe3da3773ff2$export$dd1bc94b04021eeb(y)) return false;
    return x.lo <= y.lo && y.lo <= x.hi || y.lo <= x.lo && x.lo <= y.hi;
}

});

parcelRequire.register("gu4IX", function(module, exports) {

$parcel$export(module.exports, "default", () => $c0031cd1c3eb473e$export$2e2bcd8739ae039);

var $kb64S = parcelRequire("kb64S");
/**
 * @module interval-arithmetic/round-math
 */ function $c0031cd1c3eb473e$var$identity(v) {
    return v;
}
function $c0031cd1c3eb473e$var$prev(v) {
    if (v === Infinity) return v;
    return (/*@__PURE__*/$parcel$interopDefault($kb64S))(v, -Infinity);
}
function $c0031cd1c3eb473e$var$next(v) {
    if (v === -Infinity) return v;
    return (/*@__PURE__*/$parcel$interopDefault($kb64S))(v, Infinity);
}
function $c0031cd1c3eb473e$var$toInteger(x) {
    return x < 0 ? Math.ceil(x) : Math.floor(x);
}
var $c0031cd1c3eb473e$var$cache = {
    prev: $c0031cd1c3eb473e$var$prev,
    next: $c0031cd1c3eb473e$var$next
};
/**
 * @alias module:interval-arithmetic/round-math
 */ var $c0031cd1c3eb473e$var$round = {
    /**
     * Computes the previous IEEE floating point representation of `v`
     * @example
     * Interval.round.safePrev(1)          // 0.9999999999999999
     * Interval.round.safePrev(3)          // 2.9999999999999996
     * Interval.round.safePrev(Infinity)   // Infinity
     * @param {number} v
     * @return {number}
     * @function
     */ safePrev: $c0031cd1c3eb473e$var$prev,
    /**
     * Computes the next IEEE floating point representation of `v`
     * @example
     * Interval.round.safeNext(1)          // 1.0000000000000002
     * Interval.round.safeNext(3)          // 3.0000000000000004
     * Interval.round.safeNext(-Infinity)  // -Infinity
     * @param {number} v
     * @return {number}
     * @function
     */ safeNext: $c0031cd1c3eb473e$var$next,
    prev: function(x) {
        return $c0031cd1c3eb473e$var$cache.prev(x);
    },
    next: function(x) {
        return $c0031cd1c3eb473e$var$cache.next(x);
    },
    // prettier-ignore
    addLo: function(x, y) {
        return $c0031cd1c3eb473e$var$round.prev(x + y);
    },
    // prettier-ignore
    addHi: function(x, y) {
        return $c0031cd1c3eb473e$var$round.next(x + y);
    },
    // prettier-ignore
    subLo: function(x, y) {
        return $c0031cd1c3eb473e$var$round.prev(x - y);
    },
    // prettier-ignore
    subHi: function(x, y) {
        return $c0031cd1c3eb473e$var$round.next(x - y);
    },
    // prettier-ignore
    mulLo: function(x, y) {
        return $c0031cd1c3eb473e$var$round.prev(x * y);
    },
    // prettier-ignore
    mulHi: function(x, y) {
        return $c0031cd1c3eb473e$var$round.next(x * y);
    },
    // prettier-ignore
    divLo: function(x, y) {
        return $c0031cd1c3eb473e$var$round.prev(x / y);
    },
    // prettier-ignore
    divHi: function(x, y) {
        return $c0031cd1c3eb473e$var$round.next(x / y);
    },
    // prettier-ignore
    intLo: function(x) {
        return $c0031cd1c3eb473e$var$toInteger($c0031cd1c3eb473e$var$round.prev(x));
    },
    // prettier-ignore
    intHi: function(x) {
        return $c0031cd1c3eb473e$var$toInteger($c0031cd1c3eb473e$var$round.next(x));
    },
    // prettier-ignore
    logLo: function(x) {
        return $c0031cd1c3eb473e$var$round.prev(Math.log(x));
    },
    // prettier-ignore
    logHi: function(x) {
        return $c0031cd1c3eb473e$var$round.next(Math.log(x));
    },
    // prettier-ignore
    expLo: function(x) {
        return $c0031cd1c3eb473e$var$round.prev(Math.exp(x));
    },
    // prettier-ignore
    expHi: function(x) {
        return $c0031cd1c3eb473e$var$round.next(Math.exp(x));
    },
    // prettier-ignore
    sinLo: function(x) {
        return $c0031cd1c3eb473e$var$round.prev(Math.sin(x));
    },
    // prettier-ignore
    sinHi: function(x) {
        return $c0031cd1c3eb473e$var$round.next(Math.sin(x));
    },
    // prettier-ignore
    cosLo: function(x) {
        return $c0031cd1c3eb473e$var$round.prev(Math.cos(x));
    },
    // prettier-ignore
    cosHi: function(x) {
        return $c0031cd1c3eb473e$var$round.next(Math.cos(x));
    },
    // prettier-ignore
    tanLo: function(x) {
        return $c0031cd1c3eb473e$var$round.prev(Math.tan(x));
    },
    // prettier-ignore
    tanHi: function(x) {
        return $c0031cd1c3eb473e$var$round.next(Math.tan(x));
    },
    // prettier-ignore
    asinLo: function(x) {
        return $c0031cd1c3eb473e$var$round.prev(Math.asin(x));
    },
    // prettier-ignore
    asinHi: function(x) {
        return $c0031cd1c3eb473e$var$round.next(Math.asin(x));
    },
    // prettier-ignore
    acosLo: function(x) {
        return $c0031cd1c3eb473e$var$round.prev(Math.acos(x));
    },
    // prettier-ignore
    acosHi: function(x) {
        return $c0031cd1c3eb473e$var$round.next(Math.acos(x));
    },
    // prettier-ignore
    atanLo: function(x) {
        return $c0031cd1c3eb473e$var$round.prev(Math.atan(x));
    },
    // prettier-ignore
    atanHi: function(x) {
        return $c0031cd1c3eb473e$var$round.next(Math.atan(x));
    },
    // polyfill required for hyperbolic functions
    // prettier-ignore
    sinhLo: function(x) {
        return $c0031cd1c3eb473e$var$round.prev(Math.sinh(x));
    },
    // prettier-ignore
    sinhHi: function(x) {
        return $c0031cd1c3eb473e$var$round.next(Math.sinh(x));
    },
    // prettier-ignore
    coshLo: function(x) {
        return $c0031cd1c3eb473e$var$round.prev(Math.cosh(x));
    },
    // prettier-ignore
    coshHi: function(x) {
        return $c0031cd1c3eb473e$var$round.next(Math.cosh(x));
    },
    // prettier-ignore
    tanhLo: function(x) {
        return $c0031cd1c3eb473e$var$round.prev(Math.tanh(x));
    },
    // prettier-ignore
    tanhHi: function(x) {
        return $c0031cd1c3eb473e$var$round.next(Math.tanh(x));
    },
    /**
     * @ignore
     * ln(power) exponentiation of x
     * @param {number} x
     * @param {number} power
     * @returns {number}
     */ powLo: function(x, power) {
        if (power % 1 !== 0) // power has decimals
        return $c0031cd1c3eb473e$var$round.prev(Math.pow(x, power));
        var y = (power & 1) === 1 ? x : 1;
        power >>= 1;
        while(power > 0){
            x = $c0031cd1c3eb473e$var$round.mulLo(x, x);
            if ((power & 1) === 1) y = $c0031cd1c3eb473e$var$round.mulLo(x, y);
            power >>= 1;
        }
        return y;
    },
    /**
     * @ignore
     * ln(power) exponentiation of x
     * @param {number} x
     * @param {number} power
     * @returns {number}
     */ powHi: function(x, power) {
        if (power % 1 !== 0) // power has decimals
        return $c0031cd1c3eb473e$var$round.next(Math.pow(x, power));
        var y = (power & 1) === 1 ? x : 1;
        power >>= 1;
        while(power > 0){
            x = $c0031cd1c3eb473e$var$round.mulHi(x, x);
            if ((power & 1) === 1) y = $c0031cd1c3eb473e$var$round.mulHi(x, y);
            power >>= 1;
        }
        return y;
    },
    // prettier-ignore
    sqrtLo: function(x) {
        return $c0031cd1c3eb473e$var$round.prev(Math.sqrt(x));
    },
    // prettier-ignore
    sqrtHi: function(x) {
        return $c0031cd1c3eb473e$var$round.next(Math.sqrt(x));
    },
    /**
     * Most operations on intervals will cary the rounding error so that the
     * resulting interval correctly represents all the possible values, this feature
     * can be disabled by calling this method allowing a little boost in the
     * performance while operating on intervals
     *
     * @see module:interval-arithmetic/round-math.enable
     * @example
     * var x = Interval.add(
     *   Interval(1),
     *   Interval(1)
     * )
     * x // equal to {lo: 1.9999999999999998, hi: 2.0000000000000004}
     *
     * Interval.round.disable()
     * var y = Interval.add(
     *   Interval(1),
     *   Interval(1)
     * )
     * y // equal to {lo: 2, hi: 2}
     * @function
     */ disable: function() {
        $c0031cd1c3eb473e$var$cache.next = $c0031cd1c3eb473e$var$cache.prev = $c0031cd1c3eb473e$var$identity;
    },
    /**
     * Enables IEEE previous/next floating point wrapping of values (enabled by
     * default)
     * @see module:interval-arithmetic/round-math.disable
     * @example
     * var x = Interval.add(
     *   Interval(1),
     *   Interval(1)
     * )
     * x // equal to {lo: 1.9999999999999998, hi: 2.0000000000000004}
     *
     * Interval.round.disable()
     * var y = Interval.add(
     *   Interval(1),
     *   Interval(1)
     * )
     * y // equal to {lo: 2, hi: 2}
     *
     * Interval.round.enable()
     * var z = Interval.add(
     *   Interval(1),
     *   Interval(1)
     * )
     * z // equal to {lo: 1.9999999999999998, hi: 2.0000000000000004}
     * @function
     */ enable: function() {
        $c0031cd1c3eb473e$var$cache.next = $c0031cd1c3eb473e$var$next;
        $c0031cd1c3eb473e$var$cache.prev = $c0031cd1c3eb473e$var$prev;
    }
};
var $c0031cd1c3eb473e$export$2e2bcd8739ae039 = $c0031cd1c3eb473e$var$round;

});
parcelRequire.register("kb64S", function(module, exports) {
"use strict";

var $gjqEc = parcelRequire("gjqEc");
var $eb098ca6655bd544$var$SMALLEST_DENORM = Math.pow(2, -1074);
var $eb098ca6655bd544$var$UINT_MAX = 4294967295;
module.exports = $eb098ca6655bd544$var$nextafter;
function $eb098ca6655bd544$var$nextafter(x, y) {
    if (isNaN(x) || isNaN(y)) return NaN;
    if (x === y) return x;
    if (x === 0) {
        if (y < 0) return -$eb098ca6655bd544$var$SMALLEST_DENORM;
        else return $eb098ca6655bd544$var$SMALLEST_DENORM;
    }
    var hi = $gjqEc.hi(x);
    var lo = $gjqEc.lo(x);
    if (y > x === x > 0) {
        if (lo === $eb098ca6655bd544$var$UINT_MAX) {
            hi += 1;
            lo = 0;
        } else lo += 1;
    } else if (lo === 0) {
        lo = $eb098ca6655bd544$var$UINT_MAX;
        hi -= 1;
    } else lo -= 1;
    return $gjqEc.pack(lo, hi);
}

});
parcelRequire.register("gjqEc", function(module, exports) {

var $be031747bdcf0209$require$Buffer = $5sQNY$buffer.Buffer;
var $be031747bdcf0209$var$hasTypedArrays = false;
if (typeof Float64Array !== "undefined") {
    var $be031747bdcf0209$var$DOUBLE_VIEW = new Float64Array(1), $be031747bdcf0209$var$UINT_VIEW = new Uint32Array($be031747bdcf0209$var$DOUBLE_VIEW.buffer);
    $be031747bdcf0209$var$DOUBLE_VIEW[0] = 1.0;
    $be031747bdcf0209$var$hasTypedArrays = true;
    if ($be031747bdcf0209$var$UINT_VIEW[1] === 0x3ff00000) {
        //Use little endian
        module.exports = function doubleBitsLE(n) {
            $be031747bdcf0209$var$DOUBLE_VIEW[0] = n;
            return [
                $be031747bdcf0209$var$UINT_VIEW[0],
                $be031747bdcf0209$var$UINT_VIEW[1]
            ];
        };
        function $be031747bdcf0209$var$toDoubleLE(lo, hi) {
            $be031747bdcf0209$var$UINT_VIEW[0] = lo;
            $be031747bdcf0209$var$UINT_VIEW[1] = hi;
            return $be031747bdcf0209$var$DOUBLE_VIEW[0];
        }
        module.exports.pack = $be031747bdcf0209$var$toDoubleLE;
        function $be031747bdcf0209$var$lowUintLE(n) {
            $be031747bdcf0209$var$DOUBLE_VIEW[0] = n;
            return $be031747bdcf0209$var$UINT_VIEW[0];
        }
        module.exports.lo = $be031747bdcf0209$var$lowUintLE;
        function $be031747bdcf0209$var$highUintLE(n) {
            $be031747bdcf0209$var$DOUBLE_VIEW[0] = n;
            return $be031747bdcf0209$var$UINT_VIEW[1];
        }
        module.exports.hi = $be031747bdcf0209$var$highUintLE;
    } else if ($be031747bdcf0209$var$UINT_VIEW[0] === 0x3ff00000) {
        //Use big endian
        module.exports = function doubleBitsBE(n) {
            $be031747bdcf0209$var$DOUBLE_VIEW[0] = n;
            return [
                $be031747bdcf0209$var$UINT_VIEW[1],
                $be031747bdcf0209$var$UINT_VIEW[0]
            ];
        };
        function $be031747bdcf0209$var$toDoubleBE(lo, hi) {
            $be031747bdcf0209$var$UINT_VIEW[1] = lo;
            $be031747bdcf0209$var$UINT_VIEW[0] = hi;
            return $be031747bdcf0209$var$DOUBLE_VIEW[0];
        }
        module.exports.pack = $be031747bdcf0209$var$toDoubleBE;
        function $be031747bdcf0209$var$lowUintBE(n) {
            $be031747bdcf0209$var$DOUBLE_VIEW[0] = n;
            return $be031747bdcf0209$var$UINT_VIEW[1];
        }
        module.exports.lo = $be031747bdcf0209$var$lowUintBE;
        function $be031747bdcf0209$var$highUintBE(n) {
            $be031747bdcf0209$var$DOUBLE_VIEW[0] = n;
            return $be031747bdcf0209$var$UINT_VIEW[0];
        }
        module.exports.hi = $be031747bdcf0209$var$highUintBE;
    } else $be031747bdcf0209$var$hasTypedArrays = false;
}
if (!$be031747bdcf0209$var$hasTypedArrays) {
    var $be031747bdcf0209$var$buffer = new $be031747bdcf0209$require$Buffer(8);
    module.exports = function doubleBits(n) {
        $be031747bdcf0209$var$buffer.writeDoubleLE(n, 0, true);
        return [
            $be031747bdcf0209$var$buffer.readUInt32LE(0, true),
            $be031747bdcf0209$var$buffer.readUInt32LE(4, true)
        ];
    };
    function $be031747bdcf0209$var$toDouble(lo, hi) {
        $be031747bdcf0209$var$buffer.writeUInt32LE(lo, 0, true);
        $be031747bdcf0209$var$buffer.writeUInt32LE(hi, 4, true);
        return $be031747bdcf0209$var$buffer.readDoubleLE(0, true);
    }
    module.exports.pack = $be031747bdcf0209$var$toDouble;
    function $be031747bdcf0209$var$lowUint(n) {
        $be031747bdcf0209$var$buffer.writeDoubleLE(n, 0, true);
        return $be031747bdcf0209$var$buffer.readUInt32LE(0, true);
    }
    module.exports.lo = $be031747bdcf0209$var$lowUint;
    function $be031747bdcf0209$var$highUint(n) {
        $be031747bdcf0209$var$buffer.writeDoubleLE(n, 0, true);
        return $be031747bdcf0209$var$buffer.readUInt32LE(4, true);
    }
    module.exports.hi = $be031747bdcf0209$var$highUint;
}
module.exports.sign = function(n) {
    return module.exports.hi(n) >>> 31;
};
module.exports.exponent = function(n) {
    var b = module.exports.hi(n);
    return (b << 1 >>> 21) - 1023;
};
module.exports.fraction = function(n) {
    var lo = module.exports.lo(n);
    var hi = module.exports.hi(n);
    var b = hi & 1048575;
    if (hi & 0x7ff00000) b += 1048576;
    return [
        lo,
        b
    ];
};
module.exports.denormalized = function(n) {
    var hi = module.exports.hi(n);
    return !(hi & 0x7ff00000);
};

});




parcelRequire.register("fR4oS", function(module, exports) {

$parcel$export(module.exports, "default", () => $b8af38119827f08f$export$2e2bcd8739ae039);

var $77Bzg = parcelRequire("77Bzg");
var $b8af38119827f08f$var$piLow = 3.141592653589793;
var $b8af38119827f08f$var$piHigh = 3.1415926535897936;
/**
 * @mixin constants
 */ var $b8af38119827f08f$var$constants = {
    /**
     * Previous IEEE floating point value of PI (equal to Math.PI)
     * 3.141592653589793
     * @memberof constants
     * @type {number}
     */ PI_LOW: $b8af38119827f08f$var$piLow,
    /**
     * Next IEEE floating point value of PI, 3.1415926535897936
     * @memberof constants
     * @type {number}
     */ PI_HIGH: $b8af38119827f08f$var$piHigh,
    PI_HALF_LOW: $b8af38119827f08f$var$piLow / 2,
    PI_HALF_HIGH: $b8af38119827f08f$var$piHigh / 2,
    PI_TWICE_LOW: $b8af38119827f08f$var$piLow * 2,
    PI_TWICE_HIGH: $b8af38119827f08f$var$piHigh * 2,
    /**
     * An interval that represents PI, NOTE: calls to Interval.PI always return
     * a new interval representing PI
     * @memberof constants
     * @static
     * @example
     * ```typescript
     * Interval(Interval.PI_LOW, Interval.PI_HIGH)
     * ```
     * @name PI
     * @type {Interval}
     */ get PI () {
        return new $77Bzg.Interval($b8af38119827f08f$var$piLow, $b8af38119827f08f$var$piHigh);
    },
    /**
     * An interval that represents `PI / 2`, NOTE: calls to `Interval.PI_HALF` always
     * return a new interval representing `PI / 2`
     * @memberof constants
     * @static
     * @example
     * ```typescript
     * Interval(Interval.PI_LOW / 2, Interval.PI_HIGH / 2)
     * ```
     * @name PI_HALF
     * @type {Interval}
     */ get PI_HALF () {
        return new $77Bzg.Interval($b8af38119827f08f$var$constants.PI_HALF_LOW, $b8af38119827f08f$var$constants.PI_HALF_HIGH);
    },
    /**
     * An interval that represents `PI * 2` NOTE: calls to `Interval.PI_TWICE` always
     * return a new interval representing `PI * 2`
     * @memberof constants
     * @static
     * @example
     * ```typescript
     * Interval(Interval.PI_LOW * 2, Interval.PI_HIGH * 2)
     * ```
     * @name PI_TWICE
     * @type {Interval}
     */ get PI_TWICE () {
        return new $77Bzg.Interval($b8af38119827f08f$var$constants.PI_TWICE_LOW, $b8af38119827f08f$var$constants.PI_TWICE_HIGH);
    },
    /**
     * An interval that represents 0, NOTE: calls to `Interval.ZERO` always return a new interval representing 0
     * @memberof constants
     * @static
     * @example
     * ```typescript
     * // Interval.ZERO is equivalent to
     * Interval(0)
     * ```
     * @name ZERO
     * @type {Interval}
     */ get ZERO () {
        return new $77Bzg.Interval(0);
    },
    /**
     * An interval that represents 1, NOTE: calls to Interval.ONE always
     * return a new interval representing 1
     * @memberof constants
     * @static
     * @example
     * // Interval.ONE is equivalent to
     * Interval(1)
     * @name ONE
     * @type {Interval}
     */ get ONE () {
        return new $77Bzg.Interval(1);
    },
    /**
     * An interval that represents all the real values
     * NOTE: calls to Interval.WHOLE always return a new interval representing all the real values
     * @memberof constants
     * @static
     * @example
     * ```typescript
     * // Interval.WHOLE is equivalent to
     * Interval().setWhole()
     * ```
     * @name WHOLE
     * @type {Interval}
     */ get WHOLE () {
        return new $77Bzg.Interval().setWhole();
    },
    /**
     * An interval that represents no values
     * NOTE: calls to Interval.EMPTY always return a new interval representing no values
     * @memberof constants
     * @static
     * @example
     * ```typescript
     * // Interval.EMPTY is equivalent to
     * Interval().setEmpty()
     * ```
     * @name EMPTY
     * @type {Interval}
     */ get EMPTY () {
        return new $77Bzg.Interval().setEmpty();
    }
};
var $b8af38119827f08f$export$2e2bcd8739ae039 = $b8af38119827f08f$var$constants;

});

parcelRequire.register("7JfMK", function(module, exports) {

var $3owoD = parcelRequire("3owoD");
function $5a08fafa2f5eb334$export$411ce8e5a71e3069(x, y) {
    if ($3owoD.isEmpty(x)) return $3owoD.isEmpty(y);
    return !$3owoD.isEmpty(y) && x.lo === y.lo && x.hi === y.hi;
}
// <debug>
var $5a08fafa2f5eb334$var$EPS = 1e-7;
function $5a08fafa2f5eb334$var$assert(a, message) {
    /* istanbul ignore next */ // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!a) // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    throw new Error(message || 'assertion failed');
}
function $5a08fafa2f5eb334$var$assertEps(a, b) {
    if (!isFinite(a)) // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return $5a08fafa2f5eb334$var$assert(a === b, "[Infinity] expected " + a + " to be " + b);
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    $5a08fafa2f5eb334$var$assert(Math.abs(a - b) < $5a08fafa2f5eb334$var$EPS, "expected " + a + " to be close to " + b);
}
function $5a08fafa2f5eb334$export$78884cadddbfa935(x, y) {
    x = Array.isArray(x) ? x : x.toArray();
    y = Array.isArray(y) ? y : y.toArray();
    $5a08fafa2f5eb334$var$assertEps(x[0], y[0]);
    $5a08fafa2f5eb334$var$assertEps(x[1], y[1]);
}
function $5a08fafa2f5eb334$export$9a613eff54d56ead(x, y) {
    // checks that `y` is included in `x` with the bounds close to `x`
    $5a08fafa2f5eb334$export$78884cadddbfa935(x, y);
    x = Array.isArray(x) ? x : x.toArray();
    y = Array.isArray(y) ? y : y.toArray();
    $5a08fafa2f5eb334$var$assert(x[0] <= y[0], x[0] + " should be less/equal than " + y[0]);
    $5a08fafa2f5eb334$var$assert(y[1] <= x[1], y[1] + " should be less/equal than " + x[1]);
}
function $5a08fafa2f5eb334$export$53a6892c50694894(x, y) {
    if ($3owoD.isEmpty(x)) return !$3owoD.isEmpty(y);
    return $3owoD.isEmpty(y) || x.hi < y.lo || x.lo > y.hi;
}
function $5a08fafa2f5eb334$export$9b050841a3a1b328(x, y) {
    if ($3owoD.isEmpty(x) || $3owoD.isEmpty(y)) return false;
    return x.hi < y.lo;
}
var $5a08fafa2f5eb334$export$b961576059b7aeb6 = $5a08fafa2f5eb334$export$9b050841a3a1b328;
function $5a08fafa2f5eb334$export$f517ea36c68d4644(x, y) {
    if ($3owoD.isEmpty(x) || $3owoD.isEmpty(y)) return false;
    return x.lo > y.hi;
}
var $5a08fafa2f5eb334$export$dafeacbfe3530cd9 = $5a08fafa2f5eb334$export$f517ea36c68d4644;
function $5a08fafa2f5eb334$export$8e3eb4b31c4b44e6(x, y) {
    if ($3owoD.isEmpty(x) || $3owoD.isEmpty(y)) return false;
    return x.hi <= y.lo;
}
var $5a08fafa2f5eb334$export$8c5f3ec5d3a940d = $5a08fafa2f5eb334$export$8e3eb4b31c4b44e6;
function $5a08fafa2f5eb334$export$78cbd8266924bb4a(x, y) {
    if ($3owoD.isEmpty(x) || $3owoD.isEmpty(y)) return false;
    return x.lo >= y.hi;
}
var $5a08fafa2f5eb334$export$61f00a763551642c = $5a08fafa2f5eb334$export$78cbd8266924bb4a;

});

parcelRequire.register("6peeJ", function(module, exports) {

$parcel$export(module.exports, "sub", () => $4aa01ef22b14471c$export$f93b5905241a7cca);
$parcel$export(module.exports, "mul", () => $4aa01ef22b14471c$export$6e3a27864ab166fe);
$parcel$export(module.exports, "div", () => $4aa01ef22b14471c$export$159d9494db57879b);
$parcel$export(module.exports, "negative", () => $4aa01ef22b14471c$export$5f47f64d03acd206);

var $77Bzg = parcelRequire("77Bzg");

var $gu4IX = parcelRequire("gu4IX");

var $fR4oS = parcelRequire("fR4oS");

var $3owoD = parcelRequire("3owoD");

var $ctgVC = parcelRequire("ctgVC");
function $4aa01ef22b14471c$export$e16d8520af44a096(x, y) {
    return new $77Bzg.Interval($gu4IX.default.addLo(x.lo, y.lo), $gu4IX.default.addHi(x.hi, y.hi));
}
function $4aa01ef22b14471c$export$4e2d2ead65e5f7e3(x, y) {
    return new $77Bzg.Interval($gu4IX.default.subLo(x.lo, y.hi), $gu4IX.default.subHi(x.hi, y.lo));
}
var $4aa01ef22b14471c$export$f93b5905241a7cca = $4aa01ef22b14471c$export$4e2d2ead65e5f7e3;
function $4aa01ef22b14471c$export$2060d2db72cce88f(x, y) {
    if ($3owoD.isEmpty(x) || $3owoD.isEmpty(y)) return $fR4oS.default.EMPTY;
    var xl = x.lo;
    var xh = x.hi;
    var yl = y.lo;
    var yh = y.hi;
    var out = new $77Bzg.Interval();
    if (xl < 0) {
        if (xh > 0) {
            if (yl < 0) {
                if (yh > 0) {
                    // mixed * mixed
                    out.lo = Math.min($gu4IX.default.mulLo(xl, yh), $gu4IX.default.mulLo(xh, yl));
                    out.hi = Math.max($gu4IX.default.mulHi(xl, yl), $gu4IX.default.mulHi(xh, yh));
                } else {
                    // mixed * negative
                    out.lo = $gu4IX.default.mulLo(xh, yl);
                    out.hi = $gu4IX.default.mulHi(xl, yl);
                }
            } else if (yh > 0) {
                // mixed * positive
                out.lo = $gu4IX.default.mulLo(xl, yh);
                out.hi = $gu4IX.default.mulHi(xh, yh);
            } else {
                // mixed * zero
                out.lo = 0;
                out.hi = 0;
            }
        } else {
            if (yl < 0) {
                if (yh > 0) {
                    // negative * mixed
                    out.lo = $gu4IX.default.mulLo(xl, yh);
                    out.hi = $gu4IX.default.mulHi(xl, yl);
                } else {
                    // negative * negative
                    out.lo = $gu4IX.default.mulLo(xh, yh);
                    out.hi = $gu4IX.default.mulHi(xl, yl);
                }
            } else if (yh > 0) {
                // negative * positive
                out.lo = $gu4IX.default.mulLo(xl, yh);
                out.hi = $gu4IX.default.mulHi(xh, yl);
            } else {
                // negative * zero
                out.lo = 0;
                out.hi = 0;
            }
        }
    } else if (xh > 0) {
        if (yl < 0) {
            if (yh > 0) {
                // positive * mixed
                out.lo = $gu4IX.default.mulLo(xh, yl);
                out.hi = $gu4IX.default.mulHi(xh, yh);
            } else {
                // positive * negative
                out.lo = $gu4IX.default.mulLo(xh, yl);
                out.hi = $gu4IX.default.mulHi(xl, yh);
            }
        } else if (yh > 0) {
            // positive * positive
            out.lo = $gu4IX.default.mulLo(xl, yl);
            out.hi = $gu4IX.default.mulHi(xh, yh);
        } else {
            // positive * zero
            out.lo = 0;
            out.hi = 0;
        }
    } else {
        // zero * any other value
        out.lo = 0;
        out.hi = 0;
    }
    return out;
}
var $4aa01ef22b14471c$export$6e3a27864ab166fe = $4aa01ef22b14471c$export$2060d2db72cce88f;
function $4aa01ef22b14471c$export$cd007d971a5a2143(x, y) {
    if ($3owoD.isEmpty(x) || $3owoD.isEmpty(y)) return $fR4oS.default.EMPTY;
    if ($3owoD.zeroIn(y)) {
        if (y.lo !== 0) {
            if (y.hi !== 0) return $ctgVC.zero(x);
            else return $ctgVC.negative(x, y.lo);
        } else {
            if (y.hi !== 0) return $ctgVC.positive(x, y.hi);
            else return $fR4oS.default.EMPTY;
        }
    } else return $ctgVC.nonZero(x, y);
}
var $4aa01ef22b14471c$export$159d9494db57879b = $4aa01ef22b14471c$export$cd007d971a5a2143;
function $4aa01ef22b14471c$export$aa5128ab863cd04(x) {
    return new $77Bzg.Interval(x.lo, x.hi);
}
function $4aa01ef22b14471c$export$5f47f64d03acd206(x) {
    return new $77Bzg.Interval(-x.hi, -x.lo);
}

});
parcelRequire.register("ctgVC", function(module, exports) {

$parcel$export(module.exports, "nonZero", () => $91455316f62f787b$export$1d137ef1fa99192a);
$parcel$export(module.exports, "positive", () => $91455316f62f787b$export$aa5128ab863cd04);
$parcel$export(module.exports, "negative", () => $91455316f62f787b$export$5f47f64d03acd206);
$parcel$export(module.exports, "zero", () => $91455316f62f787b$export$7f9972325ebfd559);

var $77Bzg = parcelRequire("77Bzg");

var $gu4IX = parcelRequire("gu4IX");

var $3owoD = parcelRequire("3owoD");

var $fR4oS = parcelRequire("fR4oS");
function $91455316f62f787b$export$1d137ef1fa99192a(x, y) {
    var xl = x.lo;
    var xh = x.hi;
    var yl = y.lo;
    var yh = y.hi;
    var out = new $77Bzg.Interval();
    if (xh < 0) {
        if (yh < 0) {
            out.lo = $gu4IX.default.divLo(xh, yl);
            out.hi = $gu4IX.default.divHi(xl, yh);
        } else {
            out.lo = $gu4IX.default.divLo(xl, yl);
            out.hi = $gu4IX.default.divHi(xh, yh);
        }
    } else if (xl < 0) {
        if (yh < 0) {
            out.lo = $gu4IX.default.divLo(xh, yh);
            out.hi = $gu4IX.default.divHi(xl, yh);
        } else {
            out.lo = $gu4IX.default.divLo(xl, yl);
            out.hi = $gu4IX.default.divHi(xh, yl);
        }
    } else if (yh < 0) {
        out.lo = $gu4IX.default.divLo(xh, yh);
        out.hi = $gu4IX.default.divHi(xl, yl);
    } else {
        out.lo = $gu4IX.default.divLo(xl, yh);
        out.hi = $gu4IX.default.divHi(xh, yl);
    }
    return out;
}
function $91455316f62f787b$export$aa5128ab863cd04(x, v) {
    if (x.lo === 0 && x.hi === 0) return x;
    if ($3owoD.zeroIn(x)) // mixed considering zero in both ends
    return $fR4oS.default.WHOLE;
    if (x.hi < 0) // negative / v
    return new $77Bzg.Interval(Number.NEGATIVE_INFINITY, $gu4IX.default.divHi(x.hi, v));
    else // positive / v
    return new $77Bzg.Interval($gu4IX.default.divLo(x.lo, v), Number.POSITIVE_INFINITY);
}
function $91455316f62f787b$export$5f47f64d03acd206(x, v) {
    if (x.lo === 0 && x.hi === 0) return x;
    if ($3owoD.zeroIn(x)) // mixed considering zero in both ends
    return $fR4oS.default.WHOLE;
    if (x.hi < 0) // negative / v
    return new $77Bzg.Interval($gu4IX.default.divLo(x.hi, v), Number.POSITIVE_INFINITY);
    else // positive / v
    return new $77Bzg.Interval(Number.NEGATIVE_INFINITY, $gu4IX.default.divHi(x.lo, v));
}
function $91455316f62f787b$export$7f9972325ebfd559(x) {
    if (x.lo === 0 && x.hi === 0) return x;
    return $fR4oS.default.WHOLE;
}

});


parcelRequire.register("3ScdR", function(module, exports) {

$parcel$export(module.exports, "fmod", () => $2d1fe569db46c8d1$export$6fc8b8adc0e09cd);

var $77Bzg = parcelRequire("77Bzg");

var $gu4IX = parcelRequire("gu4IX");

var $fR4oS = parcelRequire("fR4oS");

var $3owoD = parcelRequire("3owoD");

var $6peeJ = parcelRequire("6peeJ");

var $kRq2n = parcelRequire("kRq2n");
function $2d1fe569db46c8d1$export$6fc8b8adc0e09cd(x, y) {
    if ($3owoD.isEmpty(x) || $3owoD.isEmpty(y)) return $fR4oS.default.EMPTY;
    var yb = x.lo < 0 ? y.lo : y.hi;
    var n = x.lo / yb;
    if (n < 0) n = Math.ceil(n);
    else n = Math.floor(n);
    // x mod y = x - n * y
    return $6peeJ.sub(x, $6peeJ.mul(y, new $77Bzg.Interval(n)));
}
function $2d1fe569db46c8d1$export$d6c28d6fd608755f(x) {
    if ($3owoD.isEmpty(x)) return $fR4oS.default.EMPTY;
    if ($3owoD.zeroIn(x)) {
        if (x.lo !== 0) {
            if (x.hi !== 0) // [negative, positive]
            return $fR4oS.default.WHOLE;
            else // [negative, zero]
            return new $77Bzg.Interval(Number.NEGATIVE_INFINITY, $gu4IX.default.divHi(1, x.lo));
        } else {
            if (x.hi !== 0) // [zero, positive]
            return new $77Bzg.Interval($gu4IX.default.divLo(1, x.hi), Number.POSITIVE_INFINITY);
            else // [zero, zero]
            return $fR4oS.default.EMPTY;
        }
    } else // [positive, positive]
    return new $77Bzg.Interval($gu4IX.default.divLo(1, x.hi), $gu4IX.default.divHi(1, x.lo));
}
function $2d1fe569db46c8d1$export$9c297f60e22e3389(x, power) {
    if ($3owoD.isEmpty(x)) return $fR4oS.default.EMPTY;
    if (typeof power === 'object') {
        if (!$3owoD.isSingleton(power)) return $fR4oS.default.EMPTY;
        power = power.lo;
    }
    if (power === 0) {
        if (x.lo === 0 && x.hi === 0) // 0^0
        return $fR4oS.default.EMPTY;
        else // x^0
        return $fR4oS.default.ONE;
    } else if (power < 0) // compute [1 / x]^-power if power is negative
    return $2d1fe569db46c8d1$export$9c297f60e22e3389($2d1fe569db46c8d1$export$d6c28d6fd608755f(x), -power);
    // power > 0
    if ((/*@__PURE__*/$parcel$interopDefault($kRq2n))(power)) {
        // power is integer
        if (x.hi < 0) {
            // [negative, negative]
            // assume that power is even so the operation will yield a positive interval
            // if not then just switch the sign and order of the interval bounds
            var yl = $gu4IX.default.powLo(-x.hi, power);
            var yh = $gu4IX.default.powHi(-x.lo, power);
            if ((power & 1) === 1) // odd power
            return new $77Bzg.Interval(-yh, -yl);
            else // even power
            return new $77Bzg.Interval(yl, yh);
        } else if (x.lo < 0) {
            // [negative, positive]
            if ((power & 1) === 1) return new $77Bzg.Interval(-$gu4IX.default.powLo(-x.lo, power), $gu4IX.default.powHi(x.hi, power));
            else // even power means that any negative number will be zero (min value = 0)
            // and the max value will be the max of x.lo^power, x.hi^power
            return new $77Bzg.Interval(0, $gu4IX.default.powHi(Math.max(-x.lo, x.hi), power));
        } else // [positive, positive]
        return new $77Bzg.Interval($gu4IX.default.powLo(x.lo, power), $gu4IX.default.powHi(x.hi, power));
    } else {
        console.warn('power is not an integer, you should use nth-root instead, returning an empty interval');
        return $fR4oS.default.EMPTY;
    }
}
function $2d1fe569db46c8d1$export$eba8049fb5020b81(x) {
    return $2d1fe569db46c8d1$export$cc5da69d359d7991(x, 2);
}
function $2d1fe569db46c8d1$export$cc5da69d359d7991(x, n) {
    if ($3owoD.isEmpty(x) || n < 0) // compute 1 / x^-power if power is negative
    return $fR4oS.default.EMPTY;
    // singleton interval check
    if (typeof n === 'object') {
        if (!$3owoD.isSingleton(n)) return $fR4oS.default.EMPTY;
        n = n.lo;
    }
    var power = 1 / n;
    if (x.hi < 0) {
        // [negative, negative]
        if ((/*@__PURE__*/$parcel$interopDefault($kRq2n))(n) && (n & 1) === 1) {
            // when n is odd we can always take the nth root
            var yl = $gu4IX.default.powHi(-x.lo, power);
            var yh = $gu4IX.default.powLo(-x.hi, power);
            return new $77Bzg.Interval(-yl, -yh);
        }
        // n is not odd therefore there's no nth root
        return $fR4oS.default.EMPTY;
    } else if (x.lo < 0) {
        // [negative, positive]
        var yp = $gu4IX.default.powHi(x.hi, power);
        if ((/*@__PURE__*/$parcel$interopDefault($kRq2n))(n) && (n & 1) === 1) {
            // nth root of x.lo is possible (n is odd)
            var yn = -$gu4IX.default.powHi(-x.lo, power);
            return new $77Bzg.Interval(yn, yp);
        }
        return new $77Bzg.Interval(0, yp);
    } else // [positive, positive]
    return new $77Bzg.Interval($gu4IX.default.powLo(x.lo, power), $gu4IX.default.powHi(x.hi, power));
}

});
parcelRequire.register("kRq2n", function(module, exports) {
'use strict';

var $2GZqN = parcelRequire("2GZqN");
module.exports = Number.isSafeInteger || function(val) {
    return typeof val === 'number' && val === val && val !== Infinity && val !== -Infinity && parseInt(val, 10) === val && Math.abs(val) <= $2GZqN;
};

});
parcelRequire.register("2GZqN", function(module, exports) {
'use strict';
module.exports = 9007199254740991;

});



parcelRequire.register("cfagc", function(module, exports) {

var $77Bzg = parcelRequire("77Bzg");

var $gu4IX = parcelRequire("gu4IX");

var $fR4oS = parcelRequire("fR4oS");

var $3owoD = parcelRequire("3owoD");

var $6peeJ = parcelRequire("6peeJ");

var $3ScdR = parcelRequire("3ScdR");

var $2VxbH = parcelRequire("2VxbH");
'use strict';
/**
 * @mixin trigonometric
 */ /**
 * Checks if an interval is
 * - [-Infinity, -Infinity]
 * - [Infinity, Infinity]
 * @param {Interval} x
 * @returns {boolean}
 */ function $8e9ed836708a0ee9$var$onlyInfinity(x) {
    return !isFinite(x.lo) && x.lo === x.hi;
}
/**
 * moves interval 2PI * k to the right until both bounds are positive
 * @param interval
 */ function $8e9ed836708a0ee9$var$handleNegative(interval) {
    if (interval.lo < 0) {
        if (interval.lo === -Infinity) {
            interval.lo = 0;
            interval.hi = Infinity;
        } else {
            var n = Math.ceil(-interval.lo / $fR4oS.default.PI_TWICE_LOW);
            interval.lo += $fR4oS.default.PI_TWICE_LOW * n;
            interval.hi += $fR4oS.default.PI_TWICE_LOW * n;
        }
    }
    return interval;
}
function $8e9ed836708a0ee9$export$50d414a77b60d802(x) {
    if ($3owoD.isEmpty(x) || $8e9ed836708a0ee9$var$onlyInfinity(x)) return $fR4oS.default.EMPTY;
    // create a clone of `x` because the clone is going to be modified
    var cache = new $77Bzg.Interval().set(x.lo, x.hi);
    $8e9ed836708a0ee9$var$handleNegative(cache);
    var pi2 = $fR4oS.default.PI_TWICE;
    var t = $3ScdR.fmod(cache, pi2);
    if ($2VxbH.width(t) >= pi2.lo) return new $77Bzg.Interval(-1, 1);
    // when t.lo > pi it's the same as
    // -cos(t - pi)
    if (t.lo >= $fR4oS.default.PI_HIGH) {
        var cosv = $8e9ed836708a0ee9$export$50d414a77b60d802($6peeJ.sub(t, $fR4oS.default.PI));
        return $6peeJ.negative(cosv);
    }
    var lo = t.lo;
    var hi = t.hi;
    var rlo = $gu4IX.default.cosLo(hi);
    var rhi = $gu4IX.default.cosHi(lo);
    // it's ensured that t.lo < pi and that t.lo >= 0
    if (hi <= $fR4oS.default.PI_LOW) // when t.hi < pi
    // [cos(t.lo), cos(t.hi)]
    return new $77Bzg.Interval(rlo, rhi);
    else if (hi <= pi2.lo) // when t.hi < 2pi
    // [-1, max(cos(t.lo), cos(t.hi))]
    return new $77Bzg.Interval(-1, Math.max(rlo, rhi));
    else // t.lo < pi and t.hi > 2pi
    return new $77Bzg.Interval(-1, 1);
}
function $8e9ed836708a0ee9$export$5de3937cb4b592ed(x) {
    if ($3owoD.isEmpty(x) || $8e9ed836708a0ee9$var$onlyInfinity(x)) return $fR4oS.default.EMPTY;
    return $8e9ed836708a0ee9$export$50d414a77b60d802($6peeJ.sub(x, $fR4oS.default.PI_HALF));
}
function $8e9ed836708a0ee9$export$fcdd3b0b3246a325(x) {
    if ($3owoD.isEmpty(x) || $8e9ed836708a0ee9$var$onlyInfinity(x)) return $fR4oS.default.EMPTY;
    // create a clone of `x` because the clone is going to be modified
    var cache = new $77Bzg.Interval().set(x.lo, x.hi);
    $8e9ed836708a0ee9$var$handleNegative(cache);
    var pi = $fR4oS.default.PI;
    var t = $3ScdR.fmod(cache, pi);
    if (t.lo >= $fR4oS.default.PI_HALF_LOW) t = $6peeJ.sub(t, pi);
    if (t.lo <= -$fR4oS.default.PI_HALF_LOW || t.hi >= $fR4oS.default.PI_HALF_LOW) return $fR4oS.default.WHOLE;
    return new $77Bzg.Interval($gu4IX.default.tanLo(t.lo), $gu4IX.default.tanHi(t.hi));
}
function $8e9ed836708a0ee9$export$41726bdb1fc63f(x) {
    if ($3owoD.isEmpty(x) || x.hi < -1 || x.lo > 1) return $fR4oS.default.EMPTY;
    var lo = x.lo <= -1 ? -$fR4oS.default.PI_HALF_HIGH : $gu4IX.default.asinLo(x.lo);
    var hi = x.hi >= 1 ? $fR4oS.default.PI_HALF_HIGH : $gu4IX.default.asinHi(x.hi);
    return new $77Bzg.Interval(lo, hi);
}
function $8e9ed836708a0ee9$export$fd6306be3fde5b04(x) {
    if ($3owoD.isEmpty(x) || x.hi < -1 || x.lo > 1) return $fR4oS.default.EMPTY;
    var lo = x.hi >= 1 ? 0 : $gu4IX.default.acosLo(x.hi);
    var hi = x.lo <= -1 ? $fR4oS.default.PI_HIGH : $gu4IX.default.acosHi(x.lo);
    return new $77Bzg.Interval(lo, hi);
}
function $8e9ed836708a0ee9$export$628dc4eed22b0fbd(x) {
    if ($3owoD.isEmpty(x)) return $fR4oS.default.EMPTY;
    return new $77Bzg.Interval($gu4IX.default.atanLo(x.lo), $gu4IX.default.atanHi(x.hi));
}
function $8e9ed836708a0ee9$export$545004b505d7c555(x) {
    if ($3owoD.isEmpty(x)) return $fR4oS.default.EMPTY;
    return new $77Bzg.Interval($gu4IX.default.sinhLo(x.lo), $gu4IX.default.sinhHi(x.hi));
}
function $8e9ed836708a0ee9$export$2e2fd1ad24e4d350(x) {
    if ($3owoD.isEmpty(x)) return $fR4oS.default.EMPTY;
    if (x.hi < 0) return new $77Bzg.Interval($gu4IX.default.coshLo(x.hi), $gu4IX.default.coshHi(x.lo));
    else if (x.lo >= 0) return new $77Bzg.Interval($gu4IX.default.coshLo(x.lo), $gu4IX.default.coshHi(x.hi));
    else return new $77Bzg.Interval(1, $gu4IX.default.coshHi(-x.lo > x.hi ? x.lo : x.hi));
}
function $8e9ed836708a0ee9$export$7128670e45beef9a(x) {
    if ($3owoD.isEmpty(x)) return $fR4oS.default.EMPTY;
    return new $77Bzg.Interval($gu4IX.default.tanhLo(x.lo), $gu4IX.default.tanhHi(x.hi));
}

});
parcelRequire.register("2VxbH", function(module, exports) {

$parcel$export(module.exports, "width", () => $221aa60ddf464006$export$7e3df82ee760448c);

var $77Bzg = parcelRequire("77Bzg");

var $gu4IX = parcelRequire("gu4IX");

var $fR4oS = parcelRequire("fR4oS");

var $3owoD = parcelRequire("3owoD");

var $6peeJ = parcelRequire("6peeJ");
function $221aa60ddf464006$export$b310ec824aaee37f(x) {
    if ($3owoD.isEmpty(x)) return $fR4oS.default.EMPTY;
    return new $77Bzg.Interval($gu4IX.default.expLo(x.lo), $gu4IX.default.expHi(x.hi));
}
function $221aa60ddf464006$export$bef1f36f5486a6a3(x) {
    if ($3owoD.isEmpty(x)) return $fR4oS.default.EMPTY;
    var l = x.lo <= 0 ? Number.NEGATIVE_INFINITY : $gu4IX.default.logLo(x.lo);
    return new $77Bzg.Interval(l, $gu4IX.default.logHi(x.hi));
}
var $221aa60ddf464006$export$876cb1b29620556f = $221aa60ddf464006$export$bef1f36f5486a6a3;
var $221aa60ddf464006$export$f51e4c89686fbfdd = $221aa60ddf464006$export$bef1f36f5486a6a3(new $77Bzg.Interval(10, 10));
function $221aa60ddf464006$export$75e08744a3ff8516(x) {
    if ($3owoD.isEmpty(x)) return $fR4oS.default.EMPTY;
    return $6peeJ.div($221aa60ddf464006$export$bef1f36f5486a6a3(x), $221aa60ddf464006$export$f51e4c89686fbfdd);
}
var $221aa60ddf464006$export$26d09d9adadb4bf2 = $221aa60ddf464006$export$bef1f36f5486a6a3(new $77Bzg.Interval(2, 2));
function $221aa60ddf464006$export$b9fae0bba9d9094d(x) {
    if ($3owoD.isEmpty(x)) return $fR4oS.default.EMPTY;
    return $6peeJ.div($221aa60ddf464006$export$bef1f36f5486a6a3(x), $221aa60ddf464006$export$26d09d9adadb4bf2);
}
function $221aa60ddf464006$export$b786f4033a68f961(x, y) {
    var badX = $3owoD.isEmpty(x);
    var badY = $3owoD.isEmpty(y);
    if (badX && badY) return $fR4oS.default.EMPTY;
    else if (badX) return y.clone();
    else if (badY) return x.clone();
    else return new $77Bzg.Interval(Math.min(x.lo, y.lo), Math.max(x.hi, y.hi));
}
function $221aa60ddf464006$export$bc86dfbf7795668c(x, y) {
    if ($3owoD.isEmpty(x) || $3owoD.isEmpty(y)) return $fR4oS.default.EMPTY;
    var lo = Math.max(x.lo, y.lo);
    var hi = Math.min(x.hi, y.hi);
    if (lo <= hi) return new $77Bzg.Interval(lo, hi);
    return $fR4oS.default.EMPTY;
}
function $221aa60ddf464006$export$971dd5b0dfd021b6(x, y) {
    if (!$3owoD.intervalsOverlap(x, y)) throw Error('Interval#union: intervals do not overlap');
    return new $77Bzg.Interval(Math.min(x.lo, y.lo), Math.max(x.hi, y.hi));
}
function $221aa60ddf464006$export$acaf96a27438246b(x, y) {
    if ($3owoD.isEmpty(x) || $3owoD.isWhole(y)) return $fR4oS.default.EMPTY;
    if ($3owoD.intervalsOverlap(x, y)) {
        if (x.lo < y.lo && y.hi < x.hi) // difference creates multiple subsets
        throw Error('Interval.difference: difference creates multiple intervals');
        // handle corner cases first
        if (y.lo <= x.lo && y.hi === Infinity || y.hi >= x.hi && y.lo === -Infinity) return $fR4oS.default.EMPTY;
        // NOTE: empty interval is handled automatically
        // e.g.
        //
        //    n = difference([0,1], [0,1]) // n = Interval(next(1), 1) = EMPTY
        //    isEmpty(n) === true
        //
        if (y.lo <= x.lo) return new $77Bzg.Interval().halfOpenLeft(y.hi, x.hi);
        // y.hi >= x.hi
        return new $77Bzg.Interval().halfOpenRight(x.lo, y.lo);
    }
    return x.clone();
}
function $221aa60ddf464006$export$7e3df82ee760448c(x) {
    if ($3owoD.isEmpty(x)) return 0;
    return $gu4IX.default.subHi(x.hi, x.lo);
}
var $221aa60ddf464006$export$558946cd121b3416 = $221aa60ddf464006$export$7e3df82ee760448c;
function $221aa60ddf464006$export$2335f513bbd82c6d(x) {
    if ($3owoD.isEmpty(x) || $3owoD.isWhole(x)) return $fR4oS.default.EMPTY;
    if (x.lo >= 0) return x.clone();
    if (x.hi <= 0) return $6peeJ.negative(x);
    return new $77Bzg.Interval(0, Math.max(-x.lo, x.hi));
}
function $221aa60ddf464006$export$8960430cfd85939f(x, y) {
    var badX = $3owoD.isEmpty(x);
    var badY = $3owoD.isEmpty(y);
    if (badX && badY) return $fR4oS.default.EMPTY;
    else if (badX) return y.clone();
    else if (badY) return x.clone();
    else return new $77Bzg.Interval(Math.max(x.lo, y.lo), Math.max(x.hi, y.hi));
}
function $221aa60ddf464006$export$96ec731ed4dcb222(x, y) {
    var badX = $3owoD.isEmpty(x);
    var badY = $3owoD.isEmpty(y);
    if (badX && badY) return $fR4oS.default.EMPTY;
    else if (badX) return y.clone();
    else if (badY) return x.clone();
    else return new $77Bzg.Interval(Math.min(x.lo, y.lo), Math.min(x.hi, y.hi));
}
function $221aa60ddf464006$export$9cd59f9826255e47(x) {
    // no bound checking
    return new $77Bzg.Interval().set(x.lo, x.hi);
}

});



parcelRequire.register("iYUfz", function(module, exports) {
'use strict';
module.exports = function(ns) {
    // mod
    ns.mod = ns.fmod;
    // relational
    ns.lessThan = ns.lt;
    ns.lessEqualThan = ns.leq;
    ns.greaterThan = ns.gt;
    ns.greaterEqualThan = ns.geq;
    ns.strictlyEqual = ns.equal;
    ns.strictlyNotEqual = ns.notEqual;
    ns.logicalAND = function(a, b) {
        return a && b;
    };
    ns.logicalXOR = function(a, b) {
        return a ^ b;
    };
    ns.logicalOR = function(a, b) {
        return a || b;
    };
};

});

parcelRequire.register("exAGA", function(module, exports) {
/**
 * Created by mauricio on 5/12/15.
 */ 'use strict';
module.exports = function(Interval) {
    return {
        disableRounding: function() {
            Interval.round.disable();
        },
        enableRounding: function() {
            Interval.round.enable();
        }
    };
};

});





parcelRequire.register("5nm2c", function(module, exports) {
"use strict";
var $3ea03156fa56b03f$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $b3K6t = parcelRequire("b3K6t");

const $3ea03156fa56b03f$var$derivative_1 = $3ea03156fa56b03f$var$__importDefault((parcelRequire("i1YVn")));

const $3ea03156fa56b03f$var$secant_1 = $3ea03156fa56b03f$var$__importDefault((parcelRequire("1VYeA")));
function $3ea03156fa56b03f$var$helpers(chart) {
    function helper(selection) {
        selection.each(function() {
            const el = $b3K6t.default(this);
            el.call($3ea03156fa56b03f$var$derivative_1.default(chart));
            el.call($3ea03156fa56b03f$var$secant_1.default(chart));
        });
    }
    return helper;
}
module.exports.default = $3ea03156fa56b03f$var$helpers;

});
parcelRequire.register("i1YVn", function(module, exports) {
"use strict";
var $d20794540972dbcf$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $b3K6t = parcelRequire("b3K6t");

var $8VpFR = parcelRequire("8VpFR");

var $flWYj = parcelRequire("flWYj");

const $d20794540972dbcf$var$datum_defaults_1 = $d20794540972dbcf$var$__importDefault((parcelRequire("x2YN5")));
function $d20794540972dbcf$var$derivative(chart) {
    const derivativeDatum = $d20794540972dbcf$var$datum_defaults_1.default({
        isHelper: true,
        skipTip: true,
        skipBoundsCheck: true,
        nSamples: 2,
        graphType: 'polyline'
    });
    function computeLine(d) {
        if (!d.derivative) return [];
        const x0 = typeof d.derivative.x0 === 'number' ? d.derivative.x0 : Infinity;
        derivativeDatum.index = d.index;
        derivativeDatum.scope = {
            m: $flWYj.builtIn(d.derivative, 'fn', {
                x: x0
            }),
            x0: x0,
            y0: $flWYj.builtIn(d, 'fn', {
                x: x0
            })
        };
        derivativeDatum.fn = 'm * (x - x0) + y0';
        return [
            derivativeDatum
        ];
    }
    function checkAutoUpdate(d) {
        const self = this;
        if (!d.derivative) return;
        if (d.derivative.updateOnMouseMove && !d.derivative.$$mouseListener) {
            d.derivative.$$mouseListener = function({ x: x  }) {
                // update initial value to be the position of the mouse
                // scope's x0 will be updated on the next call to `derivative(self)`
                if (d.derivative) d.derivative.x0 = x;
                // trigger update (selection = self)
                derivative(self);
            };
            // if d.derivative is destroyed and recreated, the tip:update event
            // will be fired on the new d.derivative :)
            chart.on('tip:update', d.derivative.$$mouseListener);
        }
    }
    const derivative = function(selection) {
        selection.each(function(d) {
            const el = $b3K6t.default(this);
            const data = computeLine.call(selection, d);
            checkAutoUpdate.call(selection, d);
            const innerSelection = el.selectAll('g.derivative').data(data);
            const innerSelectionEnter = innerSelection.enter().append('g').attr('class', 'derivative');
            // enter + update
            innerSelection.merge(innerSelectionEnter).call($8VpFR.polyline(chart));
            // update
            // change the opacity of the line
            innerSelection.merge(innerSelectionEnter).selectAll('path').attr('opacity', 0.5);
            innerSelection.exit().remove();
        });
    };
    return derivative;
}
module.exports.default = $d20794540972dbcf$var$derivative;

});
parcelRequire.register("8VpFR", function(module, exports) {
"use strict";
var $67f78ff182f17dbc$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.scatter = module.exports.interval = module.exports.polyline = void 0;

const $67f78ff182f17dbc$var$polyline_1 = $67f78ff182f17dbc$var$__importDefault((parcelRequire("lin1R")));
module.exports.polyline = $67f78ff182f17dbc$var$polyline_1.default;

const $67f78ff182f17dbc$var$interval_1 = $67f78ff182f17dbc$var$__importDefault((parcelRequire("eCUZe")));
module.exports.interval = $67f78ff182f17dbc$var$interval_1.default;

const $67f78ff182f17dbc$var$scatter_1 = $67f78ff182f17dbc$var$__importDefault((parcelRequire("PEFcc")));
module.exports.scatter = $67f78ff182f17dbc$var$scatter_1.default;

});
parcelRequire.register("lin1R", function(module, exports) {
"use strict";
var $f80d24801ab49efe$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $b3K6t = parcelRequire("b3K6t");

var $3R9WZ = parcelRequire("3R9WZ");
var $1TT2j = parcelRequire("1TT2j");
var $4nV4m = parcelRequire("4nV4m");

const $f80d24801ab49efe$var$clamp_1 = $f80d24801ab49efe$var$__importDefault((parcelRequire("lF0Ee")));

const $f80d24801ab49efe$var$utils_1 = $f80d24801ab49efe$var$__importDefault((parcelRequire("5dabv")));

const $f80d24801ab49efe$var$evaluate_1 = $f80d24801ab49efe$var$__importDefault((parcelRequire("44QSJ")));
function $f80d24801ab49efe$var$polyline(chart) {
    function plotLine(selection) {
        selection.each(function(d1) {
            const el = plotLine.el = $b3K6t.default(this);
            const index = d1.index;
            const evaluatedData = $f80d24801ab49efe$var$evaluate_1.default(chart, d1);
            const color = $f80d24801ab49efe$var$utils_1.default.color(d1, index);
            // join
            const innerSelection = el.selectAll(':scope > path.line').data(evaluatedData);
            const yRange = chart.meta.yScale.range();
            let yMax = yRange[0];
            let yMin = yRange[1];
            // workaround, clamp assuming that the bounds are finite but huge
            const diff = yMax - yMin;
            yMax += diff * 1e6;
            yMin -= diff * 1e6;
            if (d1.skipBoundsCheck) {
                yMax = Infinity;
                yMin = -Infinity;
            }
            function y(d) {
                return $f80d24801ab49efe$var$clamp_1.default(chart.meta.yScale(d[1]), yMin, yMax);
            }
            const line = $3R9WZ.default().curve($1TT2j.default).x(function(d) {
                return chart.meta.xScale(d[0]);
            }).y(y);
            const area = $4nV4m.default().x(function(d) {
                return chart.meta.yScale(d[0]);
            }).y0(chart.meta.yScale(0)).y1(y);
            const innerSelectionEnter = innerSelection.enter().append('path').attr('class', 'line line-' + index).attr('stroke-width', 1).attr('stroke-linecap', 'round');
            // enter + update
            innerSelection.merge(innerSelectionEnter).each(function() {
                const path = $b3K6t.default(this);
                let pathD;
                if (d1.closed) {
                    path.attr('fill', color);
                    path.attr('fill-opacity', 0.3);
                    pathD = area;
                } else {
                    path.attr('fill', 'none');
                    pathD = line;
                }
                path.attr('stroke', color).attr('marker-end', function() {
                    // special marker for vectors
                    return d1.fnType === 'vector' ? 'url(#' + chart.markerId + ')' : null;
                }).attr('d', pathD);
                if (d1.attr) {
                    for(let k in d1.attr)if (d1.attr.hasOwnProperty(k)) path.attr(k, d1.attr[k]);
                }
            });
            // exit
            innerSelection.exit().remove();
        });
    }
    return plotLine;
}
module.exports.default = $f80d24801ab49efe$var$polyline;

});
parcelRequire.register("44QSJ", function(module, exports) {
"use strict";
var $2f808e614f005933$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

const $2f808e614f005933$var$globals_1 = $2f808e614f005933$var$__importDefault((parcelRequire("c5O2L")));

var $1L4tB = parcelRequire("1L4tB");
const $2f808e614f005933$var$evalTypeFn = {
    interval: $1L4tB.interval,
    builtIn: $1L4tB.builtIn
};
/**
 * Computes the endpoints x_lo, x_hi of the range
 * from which the sampler will take samples
 *
 * @param {Object} scale
 * @param {Object} d An item from `data`
 * @returns {Array}
 */ function $2f808e614f005933$var$computeEndpoints(scale, d) {
    const range = d.range || [
        -Infinity,
        Infinity
    ];
    const start = Math.max(scale.domain()[0], range[0]);
    const end = Math.min(scale.domain()[1], range[1]);
    return [
        start,
        end
    ];
}
/**
 * Decides which sampler function to call based on the options
 * of `data`
 *
 * @param {Object} chart Chart instance which is orchestrating this sampling operation
 * @param {Object} d a.k.a a single item from `data`
 * @returns {Array}
 */ function $2f808e614f005933$var$evaluate(chart, d) {
    const range = $2f808e614f005933$var$computeEndpoints(chart.meta.xScale, d);
    const evalFn = $2f808e614f005933$var$evalTypeFn[d.sampler];
    const nSamples = d.nSamples || Math.min($2f808e614f005933$var$globals_1.default.MAX_ITERATIONS, $2f808e614f005933$var$globals_1.default.DEFAULT_ITERATIONS || chart.meta.width * 2);
    const data = evalFn(chart, d, range, nSamples);
    // NOTE: it's impossible to listen for the first eval event
    // as the event is already fired when a listener is attached
    chart.emit('eval', data, d.index, d.isHelper);
    return data;
}
module.exports.default = $2f808e614f005933$var$evaluate;

});
parcelRequire.register("1L4tB", function(module, exports) {
"use strict";
var $147da72d3065d3b4$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.interval = module.exports.builtIn = void 0;

const $147da72d3065d3b4$var$builtIn_1 = $147da72d3065d3b4$var$__importDefault((parcelRequire("9AsiH")));
module.exports.builtIn = $147da72d3065d3b4$var$builtIn_1.default;

const $147da72d3065d3b4$var$interval_1 = $147da72d3065d3b4$var$__importDefault((parcelRequire("kpzij")));
module.exports.interval = $147da72d3065d3b4$var$interval_1.default;

});
parcelRequire.register("9AsiH", function(module, exports) {
"use strict";
var $6fad6dc0495b67d7$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

const $6fad6dc0495b67d7$var$clamp_1 = $6fad6dc0495b67d7$var$__importDefault((parcelRequire("lF0Ee")));

const $6fad6dc0495b67d7$var$utils_1 = $6fad6dc0495b67d7$var$__importDefault((parcelRequire("5dabv")));

var $flWYj = parcelRequire("flWYj");
function $6fad6dc0495b67d7$var$checkAsymptote(d0, d1, d, sign, level) {
    if (!level) return {
        asymptote: true,
        d0: d0,
        d1: d1
    };
    const n = 10;
    const x0 = d0[0];
    const x1 = d1[0];
    const samples = $6fad6dc0495b67d7$var$utils_1.default.linspace(x0, x1, n);
    let oldY, oldX;
    for(let i = 0; i < n; i += 1){
        const x = samples[i];
        const y = $flWYj.builtIn(d, 'fn', {
            x: x
        });
        if (i && oldY) {
            const deltaY = y - oldY;
            const newSign = $6fad6dc0495b67d7$var$utils_1.default.sgn(deltaY);
            if (newSign === sign) return $6fad6dc0495b67d7$var$checkAsymptote([
                oldX,
                oldY
            ], [
                x,
                y
            ], d, sign, level - 1);
        }
        oldY = y;
        oldX = x;
    }
    return {
        asymptote: false,
        d0: d0,
        d1: d1
    };
}
/**
 * Splits the evaluated data into arrays, each array is separated by any asymptote found
 * through the process of detecting slope/sign brusque changes
 * @param chart
 * @param d
 * @param data
 * @returns {Array[]}
 */ function $6fad6dc0495b67d7$var$split(chart, d2, data) {
    let i, oldSign;
    let deltaX;
    let st = [];
    const sets = [];
    const domain = chart.meta.yScale.domain();
    const yMin = domain[0];
    const yMax = domain[1];
    if (data[0]) {
        st.push(data[0]);
        deltaX = data[1][0] - data[0][0];
        oldSign = $6fad6dc0495b67d7$var$utils_1.default.sgn(data[1][1] - data[0][1]);
    }
    function updateY(d) {
        d[1] = Math.min(d[1], yMax);
        d[1] = Math.max(d[1], yMin);
        return d;
    }
    i = 1;
    while(i < data.length){
        const y0 = data[i - 1][1];
        const y1 = data[i][1];
        const deltaY = y1 - y0;
        const newSign = $6fad6dc0495b67d7$var$utils_1.default.sgn(deltaY);
        // make a new set if:
        if (// there's a change in the slope sign
        oldSign !== newSign && // the slope is bigger to some value (according to the current zoom scale)
        Math.abs(deltaY / deltaX) > 1) {
            // retest this section again and determine if it's an asymptote
            const check = $6fad6dc0495b67d7$var$checkAsymptote(data[i - 1], data[i], d2, newSign, 3);
            if (check.asymptote) {
                st.push(updateY(check.d0));
                sets.push(st);
                st = [
                    updateY(check.d1)
                ];
            }
        }
        oldSign = newSign;
        st.push(data[i]);
        ++i;
    }
    if (st.length) sets.push(st);
    return sets;
}
function $6fad6dc0495b67d7$var$linear(chart, d, range, n) {
    const allX = $6fad6dc0495b67d7$var$utils_1.default.space(chart, range, n);
    const yDomain = chart.meta.yScale.domain();
    const yDomainMargin = yDomain[1] - yDomain[0];
    const yMin = yDomain[0] - yDomainMargin * 1e5;
    const yMax = yDomain[1] + yDomainMargin * 1e5;
    let data = [];
    for(let i = 0; i < allX.length; i += 1){
        const x = allX[i];
        const y = $flWYj.builtIn(d, 'fn', {
            x: x
        });
        if ($6fad6dc0495b67d7$var$utils_1.default.isValidNumber(x) && $6fad6dc0495b67d7$var$utils_1.default.isValidNumber(y)) data.push([
            x,
            $6fad6dc0495b67d7$var$clamp_1.default(y, yMin, yMax)
        ]);
    }
    data = $6fad6dc0495b67d7$var$split(chart, d, data);
    return data;
}
function $6fad6dc0495b67d7$var$parametric(chart, d, range, nSamples) {
    // range is mapped to canvas coordinates from the input
    // for parametric plots the range will tell the start/end points of the `t` param
    const parametricRange = d.range || [
        0,
        2 * Math.PI
    ];
    const tCoords = $6fad6dc0495b67d7$var$utils_1.default.space(chart, parametricRange, nSamples);
    const samples = [];
    for(let i = 0; i < tCoords.length; i += 1){
        const t = tCoords[i];
        const x = $flWYj.builtIn(d, 'x', {
            t: t
        });
        const y = $flWYj.builtIn(d, 'y', {
            t: t
        });
        samples.push([
            x,
            y
        ]);
    }
    return [
        samples
    ];
}
function $6fad6dc0495b67d7$var$polar(chart, d, range, nSamples) {
    // range is mapped to canvas coordinates from the input
    // for polar plots the range will tell the start/end points of the `theta` param
    const polarRange = d.range || [
        -Math.PI,
        Math.PI
    ];
    const thetaSamples = $6fad6dc0495b67d7$var$utils_1.default.space(chart, polarRange, nSamples);
    const samples = [];
    for(let i = 0; i < thetaSamples.length; i += 1){
        const theta = thetaSamples[i];
        const r = $flWYj.builtIn(d, 'r', {
            theta: theta
        });
        const x = r * Math.cos(theta);
        const y = r * Math.sin(theta);
        samples.push([
            x,
            y
        ]);
    }
    return [
        samples
    ];
}
function $6fad6dc0495b67d7$var$points(chart, d, range, nSamples) {
    return [
        d.points
    ];
}
function $6fad6dc0495b67d7$var$vector(chart, d, range, nSamples) {
    d.offset = d.offset || [
        0,
        0
    ];
    return [
        [
            d.offset,
            [
                d.vector[0] + d.offset[0],
                d.vector[1] + d.offset[1]
            ]
        ]
    ];
}
const $6fad6dc0495b67d7$var$sampler = function(chart, d, range, nSamples) {
    const fnTypes = {
        parametric: $6fad6dc0495b67d7$var$parametric,
        polar: $6fad6dc0495b67d7$var$polar,
        points: $6fad6dc0495b67d7$var$points,
        vector: $6fad6dc0495b67d7$var$vector,
        linear: $6fad6dc0495b67d7$var$linear
    };
    if (!(d.fnType in fnTypes)) throw Error(d.fnType + ' is not supported in the `builtIn` sampler');
    // @ts-ignore
    return fnTypes[d.fnType].apply(null, arguments);
};
module.exports.default = $6fad6dc0495b67d7$var$sampler;

});

parcelRequire.register("kpzij", function(module, exports) {
"use strict";
var $edc1852722bccc9f$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var $edc1852722bccc9f$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $edc1852722bccc9f$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $edc1852722bccc9f$var$__createBinding(result, mod, k);
    }
    $edc1852722bccc9f$var$__setModuleDefault(result, mod);
    return result;
};
var $edc1852722bccc9f$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

const $edc1852722bccc9f$var$interval_arithmetic_eval_1 = $edc1852722bccc9f$var$__importStar((parcelRequire("lit6P")));

var $flWYj = parcelRequire("flWYj");

const $edc1852722bccc9f$var$utils_1 = $edc1852722bccc9f$var$__importDefault((parcelRequire("5dabv")));
// const Interval = (intervalArithmeticEval as any).Interval
// disable the use of typed arrays in interval-arithmetic to improve the performance
$edc1852722bccc9f$var$interval_arithmetic_eval_1.default.policies.disableRounding();
function $edc1852722bccc9f$var$interval1d(chart, d, range, nSamples) {
    const xCoords = $edc1852722bccc9f$var$utils_1.default.space(chart, range, nSamples);
    const xScale = chart.meta.xScale;
    const yScale = chart.meta.yScale;
    const yMin = yScale.domain()[0];
    const yMax = yScale.domain()[1];
    const samples = [];
    let i;
    for(i = 0; i < xCoords.length - 1; i += 1){
        const x = {
            lo: xCoords[i],
            hi: xCoords[i + 1]
        };
        const y = $flWYj.interval(d, 'fn', {
            x: x
        });
        if (!$edc1852722bccc9f$var$interval_arithmetic_eval_1.Interval.isEmpty(y) && !$edc1852722bccc9f$var$interval_arithmetic_eval_1.Interval.isWhole(y)) samples.push([
            x,
            y
        ]);
        if ($edc1852722bccc9f$var$interval_arithmetic_eval_1.Interval.isWhole(y)) // means that the next and prev intervals need to be fixed
        samples.push(null);
    }
    // asymptote determination
    for(i = 1; i < samples.length - 1; i += 1)if (!samples[i]) {
        const prev = samples[i - 1];
        const next = samples[i + 1];
        if (prev && next && !$edc1852722bccc9f$var$interval_arithmetic_eval_1.Interval.intervalsOverlap(prev[1], next[1])) {
            // case:
            //
            //   |
            //
            //     |
            //
            //   p n
            if (prev[1].lo > next[1].hi) {
                prev[1].hi = Math.max(yMax, prev[1].hi);
                next[1].lo = Math.min(yMin, next[1].lo);
            }
            // case:
            //
            //     |
            //
            //   |
            //
            //   p n
            if (prev[1].hi < next[1].lo) {
                prev[1].lo = Math.min(yMin, prev[1].lo);
                next[1].hi = Math.max(yMax, next[1].hi);
            }
        }
    }
    samples.scaledDx = xScale(xCoords[1]) - xScale(xCoords[0]);
    return [
        samples
    ];
}
let $edc1852722bccc9f$var$rectEps;
function $edc1852722bccc9f$var$smallRect(x, y) {
    return $edc1852722bccc9f$var$interval_arithmetic_eval_1.Interval.width(x) < $edc1852722bccc9f$var$rectEps;
}
function $edc1852722bccc9f$var$quadTree(x, y, meta) {
    const sample = $flWYj.interval(meta, 'fn', {
        x: x,
        y: y
    });
    const fulfills = $edc1852722bccc9f$var$interval_arithmetic_eval_1.Interval.zeroIn(sample);
    if (!fulfills) return this;
    if ($edc1852722bccc9f$var$smallRect(x, y)) {
        this.push([
            x,
            y
        ]);
        return this;
    }
    const midX = x.lo + (x.hi - x.lo) / 2;
    const midY = y.lo + (y.hi - y.lo) / 2;
    const east = {
        lo: midX,
        hi: x.hi
    };
    const west = {
        lo: x.lo,
        hi: midX
    };
    const north = {
        lo: midY,
        hi: y.hi
    };
    const south = {
        lo: y.lo,
        hi: midY
    };
    $edc1852722bccc9f$var$quadTree.call(this, east, north, meta);
    $edc1852722bccc9f$var$quadTree.call(this, east, south, meta);
    $edc1852722bccc9f$var$quadTree.call(this, west, north, meta);
    $edc1852722bccc9f$var$quadTree.call(this, west, south, meta);
}
function $edc1852722bccc9f$var$interval2d(chart, meta) {
    const xScale = chart.meta.xScale;
    const xDomain = chart.meta.xScale.domain();
    const yDomain = chart.meta.yScale.domain();
    const x = {
        lo: xDomain[0],
        hi: xDomain[1]
    };
    const y = {
        lo: yDomain[0],
        hi: yDomain[1]
    };
    const samples = [];
    // 1 px
    $edc1852722bccc9f$var$rectEps = xScale.invert(1) - xScale.invert(0);
    $edc1852722bccc9f$var$quadTree.call(samples, x, y, meta);
    samples.scaledDx = 1;
    return [
        samples
    ];
}
const $edc1852722bccc9f$var$sampler = function(chart, d, range, nSamples) {
    const fnTypes = {
        implicit: $edc1852722bccc9f$var$interval2d,
        linear: $edc1852722bccc9f$var$interval1d
    };
    if (!fnTypes.hasOwnProperty(d.fnType)) throw Error(d.fnType + ' is not supported in the `interval` sampler');
    // @ts-ignore
    return fnTypes[d.fnType].apply(null, arguments);
};
module.exports.default = $edc1852722bccc9f$var$sampler;

});




parcelRequire.register("eCUZe", function(module, exports) {
"use strict";
var $aa60d1a8022551eb$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $b3K6t = parcelRequire("b3K6t");

const $aa60d1a8022551eb$var$evaluate_1 = $aa60d1a8022551eb$var$__importDefault((parcelRequire("44QSJ")));

const $aa60d1a8022551eb$var$utils_1 = $aa60d1a8022551eb$var$__importDefault((parcelRequire("5dabv")));
function $aa60d1a8022551eb$var$interval(chart) {
    let minWidthHeight;
    const xScale = chart.meta.xScale;
    const yScale = chart.meta.yScale;
    function clampRange(vLo, vHi, gLo, gHi) {
        // issue 69
        // by adding the option `invert` to both the xAxis and the `yAxis`
        // it might be possible that after the transformation to canvas space
        // the y limits of the rectangle get inverted i.e. gLo > gHi
        //
        // e.g.
        //
        //   functionPlot({
        //     target: '#playground',
        //     yAxis: { invert: true },
        //     // ...
        //   })
        //
        if (gLo > gHi) {
            const t = gLo;
            gLo = gHi;
            gHi = t;
        }
        const hi = Math.min(vHi, gHi);
        const lo = Math.max(vLo, gLo);
        if (lo > hi) // no overlap
        return [
            -minWidthHeight,
            0
        ];
        return [
            lo,
            hi
        ];
    }
    const line = function(points, closed) {
        let path = '';
        const range = yScale.range();
        const minY = Math.min.apply(Math, range);
        const maxY = Math.max.apply(Math, range);
        for(let i = 0, length = points.length; i < length; i += 1)if (points[i]) {
            const x = points[i][0];
            const y = points[i][1];
            let yLo = y.lo;
            let yHi = y.hi;
            // if options.closed is set to true then one of the bounds must be zero
            if (closed) {
                yLo = Math.min(yLo, 0);
                yHi = Math.max(yHi, 0);
            }
            // points.scaledDX is added because of the stroke-width
            const moveX = xScale(x.lo) + points.scaledDx / 2;
            const viewportY = clampRange(minY, maxY, isFinite(yHi) ? yScale(yHi) : -Infinity, isFinite(yLo) ? yScale(yLo) : Infinity);
            const vLo = viewportY[0];
            const vHi = viewportY[1];
            path += ' M ' + moveX + ' ' + vLo;
            path += ' v ' + Math.max(vHi - vLo, minWidthHeight);
        }
        return path;
    };
    function plotLine(selection1) {
        selection1.each(function(d1) {
            const el = plotLine.el = $b3K6t.default(this);
            const index = d1.index;
            const closed = d1.closed;
            const evaluatedData = $aa60d1a8022551eb$var$evaluate_1.default(chart, d1);
            const innerSelection = el.selectAll(':scope > path.line').data(evaluatedData);
            // the min height/width of the rects drawn by the path generator
            minWidthHeight = Math.max(evaluatedData[0].scaledDx, 1);
            const innerSelectionEnter = innerSelection.enter().append('path').attr('class', 'line line-' + index).attr('fill', 'none');
            // enter + update
            const selection = innerSelection.merge(innerSelectionEnter).attr('stroke-width', minWidthHeight).attr('stroke', $aa60d1a8022551eb$var$utils_1.default.color(d1, index)).attr('opacity', closed ? 0.5 : 1).attr('d', function(d) {
                return line(d, closed);
            });
            if (d1.attr) {
                for(let k in d1.attr)if (d1.attr.hasOwnProperty(k)) selection.attr(k, d1.attr[k]);
            }
            innerSelection.exit().remove();
        });
    }
    return plotLine;
}
module.exports.default = $aa60d1a8022551eb$var$interval;

});

parcelRequire.register("PEFcc", function(module, exports) {
"use strict";
var $09b44e72d5606110$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $b3K6t = parcelRequire("b3K6t");

var $bQdzo = parcelRequire("bQdzo");

const $09b44e72d5606110$var$utils_1 = $09b44e72d5606110$var$__importDefault((parcelRequire("5dabv")));

const $09b44e72d5606110$var$evaluate_1 = $09b44e72d5606110$var$__importDefault((parcelRequire("44QSJ")));
function $09b44e72d5606110$var$scatter(chart) {
    const xScale = chart.meta.xScale;
    const yScale = chart.meta.yScale;
    function scatter(selection1) {
        selection1.each(function(d1) {
            let i, j;
            const index = d1.index;
            const color = $09b44e72d5606110$var$utils_1.default.color(d1, index);
            const evaluatedData = $09b44e72d5606110$var$evaluate_1.default(chart, d1);
            // scatter doesn't need groups, therefore each group is
            // flattened into a single array
            const joined = [];
            for(i = 0; i < evaluatedData.length; i += 1)for(j = 0; j < evaluatedData[i].length; j += 1)joined.push(evaluatedData[i][j]);
            const innerSelection = $b3K6t.default(this).selectAll(':scope > circle').data(joined);
            const innerSelectionEnter = innerSelection.enter().append('circle');
            const selection = innerSelection.merge(innerSelectionEnter).attr('fill', $bQdzo.hsl(color.toString()).brighter(1.5).hex()).attr('stroke', color).attr('opacity', 0.7).attr('r', 1).attr('cx', function(d) {
                return xScale(d[0]);
            }).attr('cy', function(d) {
                return yScale(d[1]);
            });
            if (d1.attr) {
                for(let k in d1.attr)if (d1.attr.hasOwnProperty(k)) selection.attr(k, d1.attr[k]);
            }
            innerSelection.exit().remove();
        });
    }
    return scatter;
}
module.exports.default = $09b44e72d5606110$var$scatter;

});


parcelRequire.register("x2YN5", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
function $063564d918680862$var$datumDefaults(d) {
    // default graphType uses boxes i.e. 2d intervals
    if (!('graphType' in d)) d.graphType = 'interval';
    // if the graphType is not `interval` then the sampler is `builtIn`
    // because the interval sampler returns a box instead of a point
    if (!('sampler' in d)) d.sampler = d.graphType !== 'interval' ? 'builtIn' : 'interval';
    // TODO: handle default fnType
    // default `fnType` is linear
    if (!('fnType' in d)) d.fnType = 'linear';
    return d;
}
module.exports.default = $063564d918680862$var$datumDefaults;

});


parcelRequire.register("1VYeA", function(module, exports) {
"use strict";
var $1689d6959eea948d$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $b3K6t = parcelRequire("b3K6t");

var $flWYj = parcelRequire("flWYj");

const $1689d6959eea948d$var$datum_defaults_1 = $1689d6959eea948d$var$__importDefault((parcelRequire("x2YN5")));

var $8VpFR = parcelRequire("8VpFR");
function $1689d6959eea948d$var$secant(chart) {
    const secantDefaults = $1689d6959eea948d$var$datum_defaults_1.default({
        isHelper: true,
        skipTip: true,
        skipBoundsCheck: true,
        nSamples: 2,
        graphType: 'polyline'
    });
    function computeSlope(scope) {
        scope.m = (scope.y1 - scope.y0) / (scope.x1 - scope.x0);
    }
    function updateLine(d, secant) {
        if (!('x0' in secant)) throw Error('secant must have the property `x0` defined');
        secant.scope = secant.scope || {};
        const x0 = secant.x0;
        const x1 = typeof secant.x1 === 'number' ? secant.x1 : Infinity;
        Object.assign(secant.scope, {
            x0: x0,
            x1: x1,
            y0: $flWYj.builtIn(d, 'fn', {
                x: x0
            }),
            y1: $flWYj.builtIn(d, 'fn', {
                x: x1
            })
        });
        computeSlope(secant.scope);
    }
    function setFn(d, secant) {
        updateLine(d, secant);
        secant.fn = 'm * (x - x0) + y0';
    }
    function setMouseListener(d, secantObject) {
        const self = this;
        if (secantObject.updateOnMouseMove && !secantObject.$$mouseListener) {
            secantObject.$$mouseListener = function({ x: x  }) {
                secantObject.x1 = x;
                updateLine(d, secantObject);
                secant1(self);
            };
            chart.on('tip:update', secantObject.$$mouseListener);
        }
    }
    function computeLines(d) {
        const self = this;
        const data = [];
        d.secants = d.secants || [];
        for(let i = 0; i < d.secants.length; i += 1){
            const secant = d.secants[i] = Object.assign({}, secantDefaults, d.secants[i]);
            // necessary to make the secant have the same color as d
            secant.index = d.index;
            if (!secant.fn) {
                setFn.call(self, d, secant);
                setMouseListener.call(self, d, secant);
            }
            data.push(secant);
        }
        return data;
    }
    const secant1 = function(selection) {
        selection.each(function(d) {
            const el = $b3K6t.default(this);
            const data = computeLines.call(selection, d);
            const innerSelection = el.selectAll('g.secant').data(data);
            const innerSelectionEnter = innerSelection.enter().append('g').attr('class', 'secant');
            // enter + update
            innerSelection.merge(innerSelectionEnter).call($8VpFR.polyline(chart));
            // change the opacity of the secants
            innerSelection.merge(innerSelectionEnter).selectAll('path').attr('opacity', 0.5);
            // exit
            innerSelection.exit().remove();
        });
    };
    return secant1;
}
module.exports.default = $1689d6959eea948d$var$secant;

});



$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $b8759ca3c16956b4$export$2e2bcd8739ae039);
var $0e7121ef4d9042bf$exports = {};
"use strict";
var $0e7121ef4d9042bf$var$__createBinding = $0e7121ef4d9042bf$exports && $0e7121ef4d9042bf$exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var $0e7121ef4d9042bf$var$__setModuleDefault = $0e7121ef4d9042bf$exports && $0e7121ef4d9042bf$exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $0e7121ef4d9042bf$var$__importStar = $0e7121ef4d9042bf$exports && $0e7121ef4d9042bf$exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $0e7121ef4d9042bf$var$__createBinding(result, mod, k);
    }
    $0e7121ef4d9042bf$var$__setModuleDefault(result, mod);
    return result;
};
var $0e7121ef4d9042bf$var$__importDefault = $0e7121ef4d9042bf$exports && $0e7121ef4d9042bf$exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty($0e7121ef4d9042bf$exports, "__esModule", {
    value: true
});
$0e7121ef4d9042bf$exports.Chart = void 0;

var $3R9WZ = parcelRequire("3R9WZ");
function $bd6230ddfdfcd1b9$export$2e2bcd8739ae039(x) {
    return Math.abs(x = Math.round(x)) >= 1e21 ? x.toLocaleString("en").replace(/,/g, "") : x.toString(10);
}
function $bd6230ddfdfcd1b9$export$8f8e23dd27dc19f5(x, p) {
    if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
    var i, coefficient = x.slice(0, i);
    // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
    // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
    return [
        coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
        +x.slice(i + 1)
    ];
}


function $285194dd96149f3f$export$2e2bcd8739ae039(x) {
    return x = $bd6230ddfdfcd1b9$export$8f8e23dd27dc19f5(Math.abs(x)), x ? x[1] : NaN;
}


function $e4a31eed950240f8$export$2e2bcd8739ae039(grouping, thousands) {
    return function(value, width) {
        var i = value.length, t = [], j = 0, g = grouping[0], length = 0;
        while(i > 0 && g > 0){
            if (length + g + 1 > width) g = Math.max(1, width - length);
            t.push(value.substring(i -= g, i + g));
            if ((length += g + 1) > width) break;
            g = grouping[j = (j + 1) % grouping.length];
        }
        return t.reverse().join(thousands);
    };
}


function $c611c2ad52cce678$export$2e2bcd8739ae039(numerals) {
    return function(value) {
        return value.replace(/[0-9]/g, function(i) {
            return numerals[+i];
        });
    };
}


// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var $5f2d8a0a0291e286$var$re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function $5f2d8a0a0291e286$export$2e2bcd8739ae039(specifier) {
    if (!(match = $5f2d8a0a0291e286$var$re.exec(specifier))) throw new Error("invalid format: " + specifier);
    var match;
    return new $5f2d8a0a0291e286$export$963aac351db36ed4({
        fill: match[1],
        align: match[2],
        sign: match[3],
        symbol: match[4],
        zero: match[5],
        width: match[6],
        comma: match[7],
        precision: match[8] && match[8].slice(1),
        trim: match[9],
        type: match[10]
    });
}
$5f2d8a0a0291e286$export$2e2bcd8739ae039.prototype = $5f2d8a0a0291e286$export$963aac351db36ed4.prototype; // instanceof
function $5f2d8a0a0291e286$export$963aac351db36ed4(specifier) {
    this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
    this.align = specifier.align === undefined ? ">" : specifier.align + "";
    this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
    this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
    this.zero = !!specifier.zero;
    this.width = specifier.width === undefined ? undefined : +specifier.width;
    this.comma = !!specifier.comma;
    this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
    this.trim = !!specifier.trim;
    this.type = specifier.type === undefined ? "" : specifier.type + "";
}
$5f2d8a0a0291e286$export$963aac351db36ed4.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === undefined ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};


function $e5dae8885f837d29$export$2e2bcd8739ae039(s) {
    out: for(var n = s.length, i = 1, i0 = -1, i1; i < n; ++i)switch(s[i]){
        case ".":
            i0 = i1 = i;
            break;
        case "0":
            if (i0 === 0) i0 = i;
            i1 = i;
            break;
        default:
            if (!+s[i]) break out;
            if (i0 > 0) i0 = 0;
            break;
    }
    return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}




var $35609288ae8749f5$export$6863724d9a42263;
function $35609288ae8749f5$export$2e2bcd8739ae039(x, p) {
    var d = $bd6230ddfdfcd1b9$export$8f8e23dd27dc19f5(x, p);
    if (!d) return x + "";
    var coefficient = d[0], exponent = d[1], i = exponent - ($35609288ae8749f5$export$6863724d9a42263 = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n = coefficient.length;
    return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + $bd6230ddfdfcd1b9$export$8f8e23dd27dc19f5(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}



function $aa38e3440865f3f8$export$2e2bcd8739ae039(x, p) {
    var d = $bd6230ddfdfcd1b9$export$8f8e23dd27dc19f5(x, p);
    if (!d) return x + "";
    var coefficient = d[0], exponent = d[1];
    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}


var $8097a813a5581579$export$2e2bcd8739ae039 = {
    "%": (x, p)=>(x * 100).toFixed(p)
    ,
    "b": (x)=>Math.round(x).toString(2)
    ,
    "c": (x)=>x + ""
    ,
    "d": $bd6230ddfdfcd1b9$export$2e2bcd8739ae039,
    "e": (x, p)=>x.toExponential(p)
    ,
    "f": (x, p)=>x.toFixed(p)
    ,
    "g": (x, p)=>x.toPrecision(p)
    ,
    "o": (x)=>Math.round(x).toString(8)
    ,
    "p": (x, p)=>$aa38e3440865f3f8$export$2e2bcd8739ae039(x * 100, p)
    ,
    "r": $aa38e3440865f3f8$export$2e2bcd8739ae039,
    "s": $35609288ae8749f5$export$2e2bcd8739ae039,
    "X": (x)=>Math.round(x).toString(16).toUpperCase()
    ,
    "x": (x)=>Math.round(x).toString(16)
};



function $aa9c285c37db8918$export$2e2bcd8739ae039(x) {
    return x;
}


var $a19b68435d440b4a$var$map = Array.prototype.map, $a19b68435d440b4a$var$prefixes = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "µ",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y"
];
function $a19b68435d440b4a$export$2e2bcd8739ae039(locale) {
    var group = locale.grouping === undefined || locale.thousands === undefined ? $aa9c285c37db8918$export$2e2bcd8739ae039 : $e4a31eed950240f8$export$2e2bcd8739ae039($a19b68435d440b4a$var$map.call(locale.grouping, Number), locale.thousands + ""), currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "", currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "", decimal = locale.decimal === undefined ? "." : locale.decimal + "", numerals = locale.numerals === undefined ? $aa9c285c37db8918$export$2e2bcd8739ae039 : $c611c2ad52cce678$export$2e2bcd8739ae039($a19b68435d440b4a$var$map.call(locale.numerals, String)), percent = locale.percent === undefined ? "%" : locale.percent + "", minus = locale.minus === undefined ? "−" : locale.minus + "", nan = locale.nan === undefined ? "NaN" : locale.nan + "";
    function newFormat(specifier) {
        specifier = $5f2d8a0a0291e286$export$2e2bcd8739ae039(specifier);
        var fill = specifier.fill, align = specifier.align, sign = specifier.sign, symbol = specifier.symbol, zero = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
        // The "n" type is an alias for ",g".
        if (type === "n") comma = true, type = "g";
        else if (!$8097a813a5581579$export$2e2bcd8739ae039[type]) precision === undefined && (precision = 12), trim = true, type = "g";
        // If zero fill is specified, padding goes after sign and before digits.
        if (zero || fill === "0" && align === "=") zero = true, fill = "0", align = "=";
        // Compute the prefix and suffix.
        // For SI-prefix, the suffix is lazily computed.
        var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
        // What format function should we use?
        // Is this an integer type?
        // Can this type generate exponential notation?
        var formatType = $8097a813a5581579$export$2e2bcd8739ae039[type], maybeSuffix = /[defgprs%]/.test(type);
        // Set the default precision if not specified,
        // or clamp the specified precision to the supported range.
        // For significant precision, it must be in [1, 21].
        // For fixed precision, it must be in [0, 20].
        precision = precision === undefined ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
        function format(value) {
            var valuePrefix = prefix, valueSuffix = suffix, i, n, c;
            if (type === "c") {
                valueSuffix = formatType(value) + valueSuffix;
                value = "";
            } else {
                value = +value;
                // Determine the sign. -0 is not less than 0, but 1 / -0 is!
                var valueNegative = value < 0 || 1 / value < 0;
                // Perform the initial formatting.
                value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
                // Trim insignificant zeros.
                if (trim) value = $e5dae8885f837d29$export$2e2bcd8739ae039(value);
                // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
                if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;
                // Compute the prefix and suffix.
                valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
                valueSuffix = (type === "s" ? $a19b68435d440b4a$var$prefixes[8 + $35609288ae8749f5$export$6863724d9a42263 / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");
                // Break the formatted value into the integer “value” part that can be
                // grouped, and fractional or exponential “suffix” part that is not.
                if (maybeSuffix) {
                    i = -1, n = value.length;
                    while(++i < n)if (c = value.charCodeAt(i), 48 > c || c > 57) {
                        valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                        value = value.slice(0, i);
                        break;
                    }
                }
            }
            // If the fill character is not "0", grouping is applied before padding.
            if (comma && !zero) value = group(value, Infinity);
            // Compute the padding.
            var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
            // If the fill character is "0", grouping is applied after padding.
            if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
            // Reconstruct the final output based on the desired alignment.
            switch(align){
                case "<":
                    value = valuePrefix + value + valueSuffix + padding;
                    break;
                case "=":
                    value = valuePrefix + padding + value + valueSuffix;
                    break;
                case "^":
                    value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
                    break;
                default:
                    value = padding + valuePrefix + value + valueSuffix;
                    break;
            }
            return numerals(value);
        }
        format.toString = function() {
            return specifier + "";
        };
        return format;
    }
    function formatPrefix(specifier, value1) {
        var f = newFormat((specifier = $5f2d8a0a0291e286$export$2e2bcd8739ae039(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor($285194dd96149f3f$export$2e2bcd8739ae039(value1) / 3))) * 3, k = Math.pow(10, -e), prefix = $a19b68435d440b4a$var$prefixes[8 + e / 3];
        return function(value) {
            return f(k * value) + prefix;
        };
    }
    return {
        format: newFormat,
        formatPrefix: formatPrefix
    };
}


var $43f4f8ea9fa6192d$var$locale;
var $43f4f8ea9fa6192d$export$d9468344d3651243;
var $43f4f8ea9fa6192d$export$8d85692a469dde6f;
$43f4f8ea9fa6192d$export$2e2bcd8739ae039({
    thousands: ",",
    grouping: [
        3
    ],
    currency: [
        "$",
        ""
    ]
});
function $43f4f8ea9fa6192d$export$2e2bcd8739ae039(definition) {
    $43f4f8ea9fa6192d$var$locale = $a19b68435d440b4a$export$2e2bcd8739ae039(definition);
    $43f4f8ea9fa6192d$export$d9468344d3651243 = $43f4f8ea9fa6192d$var$locale.format;
    $43f4f8ea9fa6192d$export$8d85692a469dde6f = $43f4f8ea9fa6192d$var$locale.formatPrefix;
    return $43f4f8ea9fa6192d$var$locale;
}


function $11456134f7143db4$export$2e2bcd8739ae039(step) {
    return Math.max(0, -$285194dd96149f3f$export$2e2bcd8739ae039(Math.abs(step)));
}


function $ecf50f841903c670$export$2e2bcd8739ae039(step, value) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor($285194dd96149f3f$export$2e2bcd8739ae039(value) / 3))) * 3 - $285194dd96149f3f$export$2e2bcd8739ae039(Math.abs(step)));
}


function $aa59f3899ffdc9af$export$2e2bcd8739ae039(step, max) {
    step = Math.abs(step), max = Math.abs(max) - step;
    return Math.max(0, $285194dd96149f3f$export$2e2bcd8739ae039(max) - $285194dd96149f3f$export$2e2bcd8739ae039(step)) + 1;
}



function $2fd825f8bd452734$export$2e2bcd8739ae039(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}



function $659764298b978ebd$export$2e2bcd8739ae039(f) {
    let delta = f;
    let compare = f;
    if (f.length === 1) {
        delta = (d, x)=>f(d) - x
        ;
        compare = $659764298b978ebd$var$ascendingComparator(f);
    }
    function left(a, x, lo, hi) {
        if (lo == null) lo = 0;
        if (hi == null) hi = a.length;
        while(lo < hi){
            const mid = lo + hi >>> 1;
            if (compare(a[mid], x) < 0) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    }
    function right(a, x, lo, hi) {
        if (lo == null) lo = 0;
        if (hi == null) hi = a.length;
        while(lo < hi){
            const mid = lo + hi >>> 1;
            if (compare(a[mid], x) > 0) hi = mid;
            else lo = mid + 1;
        }
        return lo;
    }
    function center(a, x, lo, hi) {
        if (lo == null) lo = 0;
        if (hi == null) hi = a.length;
        const i = left(a, x, lo, hi - 1);
        return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
    }
    return {
        left: left,
        center: center,
        right: right
    };
}
function $659764298b978ebd$var$ascendingComparator(f) {
    return (d, x)=>$2fd825f8bd452734$export$2e2bcd8739ae039(f(d), x)
    ;
}


function $0ecd93055c1d4e80$export$2e2bcd8739ae039(x) {
    return x === null ? NaN : +x;
}
function* $0ecd93055c1d4e80$export$1f6c9cc012ebacae(values, valueof) {
    if (valueof === undefined) {
        for (let value of values)if (value != null && (value = +value) >= value) yield value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) yield value;
    }
}


const $78cbf5753dfe297f$var$ascendingBisect = $659764298b978ebd$export$2e2bcd8739ae039($2fd825f8bd452734$export$2e2bcd8739ae039);
const $78cbf5753dfe297f$export$4d945ad3ad5751b0 = $78cbf5753dfe297f$var$ascendingBisect.right;
const $78cbf5753dfe297f$export$df7d25c84ebd12a5 = $78cbf5753dfe297f$var$ascendingBisect.left;
const $78cbf5753dfe297f$export$c1cb828b1117c77b = $659764298b978ebd$export$2e2bcd8739ae039($0ecd93055c1d4e80$export$2e2bcd8739ae039).center;
var $78cbf5753dfe297f$export$2e2bcd8739ae039 = $78cbf5753dfe297f$export$4d945ad3ad5751b0;

var $0be4e5b8a318389a$var$e10 = Math.sqrt(50), $0be4e5b8a318389a$var$e5 = Math.sqrt(10), $0be4e5b8a318389a$var$e2 = Math.sqrt(2);
function $0be4e5b8a318389a$export$2e2bcd8739ae039(start, stop, count) {
    var reverse, i = -1, n, ticks, step;
    stop = +stop, start = +start, count = +count;
    if (start === stop && count > 0) return [
        start
    ];
    if (reverse = stop < start) n = start, start = stop, stop = n;
    if ((step = $0be4e5b8a318389a$export$bc64d00cc98e7e95(start, stop, count)) === 0 || !isFinite(step)) return [];
    if (step > 0) {
        let r0 = Math.round(start / step), r1 = Math.round(stop / step);
        if (r0 * step < start) ++r0;
        if (r1 * step > stop) --r1;
        ticks = new Array(n = r1 - r0 + 1);
        while(++i < n)ticks[i] = (r0 + i) * step;
    } else {
        step = -step;
        let r0 = Math.round(start * step), r1 = Math.round(stop * step);
        if (r0 / step < start) ++r0;
        if (r1 / step > stop) --r1;
        ticks = new Array(n = r1 - r0 + 1);
        while(++i < n)ticks[i] = (r0 + i) / step;
    }
    if (reverse) ticks.reverse();
    return ticks;
}
function $0be4e5b8a318389a$export$bc64d00cc98e7e95(start, stop, count) {
    var step = (stop - start) / Math.max(0, count), power = Math.floor(Math.log(step) / Math.LN10), error = step / Math.pow(10, power);
    return power >= 0 ? (error >= $0be4e5b8a318389a$var$e10 ? 10 : error >= $0be4e5b8a318389a$var$e5 ? 5 : error >= $0be4e5b8a318389a$var$e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= $0be4e5b8a318389a$var$e10 ? 10 : error >= $0be4e5b8a318389a$var$e5 ? 5 : error >= $0be4e5b8a318389a$var$e2 ? 2 : 1);
}
function $0be4e5b8a318389a$export$81087d9b915d4ede(start, stop, count) {
    var step0 = Math.abs(stop - start) / Math.max(0, count), step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)), error = step0 / step1;
    if (error >= $0be4e5b8a318389a$var$e10) step1 *= 10;
    else if (error >= $0be4e5b8a318389a$var$e5) step1 *= 5;
    else if (error >= $0be4e5b8a318389a$var$e2) step1 *= 2;
    return stop < start ? -step1 : step1;
}





var $bQdzo = parcelRequire("bQdzo");

var $bQdzo = parcelRequire("bQdzo");
function $95e9bad6586749eb$export$4e41033bfeec1a4c(t1, v0, v1, v2, v3) {
    var t2 = t1 * t1, t3 = t2 * t1;
    return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function $95e9bad6586749eb$export$2e2bcd8739ae039(values) {
    var n = values.length - 1;
    return function(t) {
        var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
        return $95e9bad6586749eb$export$4e41033bfeec1a4c((t - i / n) * n, v0, v1, v2, v3);
    };
}



function $71e5e2772d4819c0$export$2e2bcd8739ae039(values) {
    var n = values.length;
    return function(t) {
        var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
        return $95e9bad6586749eb$export$4e41033bfeec1a4c((t - i / n) * n, v0, v1, v2, v3);
    };
}


var $ede153293251e5b7$export$2e2bcd8739ae039 = (x)=>()=>x
;


function $a629de07684717f4$var$linear(a, d) {
    return function(t) {
        return a + t * d;
    };
}
function $a629de07684717f4$var$exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
        return Math.pow(a + t * b, y);
    };
}
function $a629de07684717f4$export$97d7b0c7ddb78dcf(a, b) {
    var d = b - a;
    return d ? $a629de07684717f4$var$linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : $ede153293251e5b7$export$2e2bcd8739ae039(isNaN(a) ? b : a);
}
function $a629de07684717f4$export$a7ebe8cc6aaf8d37(y) {
    return (y = +y) === 1 ? $a629de07684717f4$export$2e2bcd8739ae039 : function(a, b) {
        return b - a ? $a629de07684717f4$var$exponential(a, b, y) : $ede153293251e5b7$export$2e2bcd8739ae039(isNaN(a) ? b : a);
    };
}
function $a629de07684717f4$export$2e2bcd8739ae039(a, b) {
    var d = b - a;
    return d ? $a629de07684717f4$var$linear(a, d) : $ede153293251e5b7$export$2e2bcd8739ae039(isNaN(a) ? b : a);
}


var $b3b0e98d67c64be4$export$2e2bcd8739ae039 = function rgbGamma(y) {
    var color = $a629de07684717f4$export$a7ebe8cc6aaf8d37(y);
    function rgb(start, end) {
        var r = color((start = $bQdzo.rgb(start)).r, (end = $bQdzo.rgb(end)).r), g = color(start.g, end.g), b = color(start.b, end.b), opacity = $a629de07684717f4$export$2e2bcd8739ae039(start.opacity, end.opacity);
        return function(t) {
            start.r = r(t);
            start.g = g(t);
            start.b = b(t);
            start.opacity = opacity(t);
            return start + "";
        };
    }
    rgb.gamma = rgbGamma;
    return rgb;
}(1);
function $b3b0e98d67c64be4$var$rgbSpline(spline) {
    return function(colors) {
        var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color;
        for(i = 0; i < n; ++i){
            color = $bQdzo.rgb(colors[i]);
            r[i] = color.r || 0;
            g[i] = color.g || 0;
            b[i] = color.b || 0;
        }
        r = spline(r);
        g = spline(g);
        b = spline(b);
        color.opacity = 1;
        return function(t) {
            color.r = r(t);
            color.g = g(t);
            color.b = b(t);
            return color + "";
        };
    };
}
var $b3b0e98d67c64be4$export$2c0e28f2e2852d3f = $b3b0e98d67c64be4$var$rgbSpline($95e9bad6586749eb$export$2e2bcd8739ae039);
var $b3b0e98d67c64be4$export$53d5214f625ccd4c = $b3b0e98d67c64be4$var$rgbSpline($71e5e2772d4819c0$export$2e2bcd8739ae039);



function $0c2a8a70e3d587f3$export$2e2bcd8739ae039(a, b) {
    if (!b) b = [];
    var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
    return function(t) {
        for(i = 0; i < n; ++i)c[i] = a[i] * (1 - t) + b[i] * t;
        return c;
    };
}
function $0c2a8a70e3d587f3$export$5cd576d1827d40c8(x) {
    return ArrayBuffer.isView(x) && !(x instanceof DataView);
}


function $19ca0f1ee1747963$export$2e2bcd8739ae039(a, b) {
    return ($0c2a8a70e3d587f3$export$5cd576d1827d40c8(b) ? $0c2a8a70e3d587f3$export$2e2bcd8739ae039 : $19ca0f1ee1747963$export$15d09067c6a5ee49)(a, b);
}
function $19ca0f1ee1747963$export$15d09067c6a5ee49(a, b) {
    var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;
    for(i = 0; i < na; ++i)x[i] = $65e95bea40ad2a15$export$2e2bcd8739ae039(a[i], b[i]);
    for(; i < nb; ++i)c[i] = b[i];
    return function(t) {
        for(i = 0; i < na; ++i)c[i] = x[i](t);
        return c;
    };
}


function $5cf81a52c251d0bf$export$2e2bcd8739ae039(a, b) {
    var d = new Date;
    return a = +a, b = +b, function(t) {
        return d.setTime(a * (1 - t) + b * t), d;
    };
}


function $6bbf3b741ac59c64$export$2e2bcd8739ae039(a, b) {
    return a = +a, b = +b, function(t) {
        return a * (1 - t) + b * t;
    };
}



function $91c824b747908bf9$export$2e2bcd8739ae039(a, b) {
    var i = {}, c = {}, k;
    if (a === null || typeof a !== "object") a = {};
    if (b === null || typeof b !== "object") b = {};
    for(k in b)if (k in a) i[k] = $65e95bea40ad2a15$export$2e2bcd8739ae039(a[k], b[k]);
    else c[k] = b[k];
    return function(t) {
        for(k in i)c[k] = i[k](t);
        return c;
    };
}



var $f5f2fc7c078ff427$var$reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, $f5f2fc7c078ff427$var$reB = new RegExp($f5f2fc7c078ff427$var$reA.source, "g");
function $f5f2fc7c078ff427$var$zero(b) {
    return function() {
        return b;
    };
}
function $f5f2fc7c078ff427$var$one(b) {
    return function(t) {
        return b(t) + "";
    };
}
function $f5f2fc7c078ff427$export$2e2bcd8739ae039(a, b) {
    var bi = $f5f2fc7c078ff427$var$reA.lastIndex = $f5f2fc7c078ff427$var$reB.lastIndex = 0, am, bm, bs, i1 = -1, s = [], q = []; // number interpolators
    // Coerce inputs to strings.
    a = a + "", b = b + "";
    // Interpolate pairs of numbers in a & b.
    while((am = $f5f2fc7c078ff427$var$reA.exec(a)) && (bm = $f5f2fc7c078ff427$var$reB.exec(b))){
        if ((bs = bm.index) > bi) {
            bs = b.slice(bi, bs);
            if (s[i1]) s[i1] += bs; // coalesce with previous string
            else s[++i1] = bs;
        }
        if ((am = am[0]) === (bm = bm[0])) {
            if (s[i1]) s[i1] += bm; // coalesce with previous string
            else s[++i1] = bm;
        } else {
            s[++i1] = null;
            q.push({
                i: i1,
                x: $6bbf3b741ac59c64$export$2e2bcd8739ae039(am, bm)
            });
        }
        bi = $f5f2fc7c078ff427$var$reB.lastIndex;
    }
    // Add remains of b.
    if (bi < b.length) {
        bs = b.slice(bi);
        if (s[i1]) s[i1] += bs; // coalesce with previous string
        else s[++i1] = bs;
    }
    // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? q[0] ? $f5f2fc7c078ff427$var$one(q[0].x) : $f5f2fc7c078ff427$var$zero(b) : (b = q.length, function(t) {
        for(var i = 0, o; i < b; ++i)s[(o = q[i]).i] = o.x(t);
        return s.join("");
    });
}




function $65e95bea40ad2a15$export$2e2bcd8739ae039(a, b) {
    var t = typeof b, c;
    return b == null || t === "boolean" ? $ede153293251e5b7$export$2e2bcd8739ae039(b) : (t === "number" ? $6bbf3b741ac59c64$export$2e2bcd8739ae039 : t === "string" ? (c = $bQdzo.default(b)) ? (b = c, $b3b0e98d67c64be4$export$2e2bcd8739ae039) : $f5f2fc7c078ff427$export$2e2bcd8739ae039 : b instanceof $bQdzo.default ? $b3b0e98d67c64be4$export$2e2bcd8739ae039 : b instanceof Date ? $5cf81a52c251d0bf$export$2e2bcd8739ae039 : $0c2a8a70e3d587f3$export$5cd576d1827d40c8(b) ? $0c2a8a70e3d587f3$export$2e2bcd8739ae039 : Array.isArray(b) ? $19ca0f1ee1747963$export$15d09067c6a5ee49 : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? $91c824b747908bf9$export$2e2bcd8739ae039 : $6bbf3b741ac59c64$export$2e2bcd8739ae039)(a, b);
}

function $f3a727eb4df08cbc$export$2e2bcd8739ae039(a, b) {
    return a = +a, b = +b, function(t) {
        return Math.round(a * (1 - t) + b * t);
    };
}


var $9eb64b6d14938877$var$degrees = 180 / Math.PI;
var $9eb64b6d14938877$export$f0954fd7d5368655 = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
};
function $9eb64b6d14938877$export$2e2bcd8739ae039(a, b, c, d, e, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
    if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
    if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
    return {
        translateX: e,
        translateY: f,
        rotate: Math.atan2(b, a) * $9eb64b6d14938877$var$degrees,
        skewX: Math.atan(skewX) * $9eb64b6d14938877$var$degrees,
        scaleX: scaleX,
        scaleY: scaleY
    };
}


var $83bf827a93bbd0c2$var$svgNode;
function $83bf827a93bbd0c2$export$59ad369bf4938177(value) {
    const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m.isIdentity ? $9eb64b6d14938877$export$f0954fd7d5368655 : $9eb64b6d14938877$export$2e2bcd8739ae039(m.a, m.b, m.c, m.d, m.e, m.f);
}
function $83bf827a93bbd0c2$export$f9ef43f9a1d89a18(value) {
    if (value == null) return $9eb64b6d14938877$export$f0954fd7d5368655;
    if (!$83bf827a93bbd0c2$var$svgNode) $83bf827a93bbd0c2$var$svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    $83bf827a93bbd0c2$var$svgNode.setAttribute("transform", value);
    if (!(value = $83bf827a93bbd0c2$var$svgNode.transform.baseVal.consolidate())) return $9eb64b6d14938877$export$f0954fd7d5368655;
    value = value.matrix;
    return $9eb64b6d14938877$export$2e2bcd8739ae039(value.a, value.b, value.c, value.d, value.e, value.f);
}


function $0fd7c676cbf0f981$var$interpolateTransform(parse, pxComma, pxParen, degParen) {
    function pop(s) {
        return s.length ? s.pop() + " " : "";
    }
    function translate(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push("translate(", null, pxComma, null, pxParen);
            q.push({
                i: i - 4,
                x: $6bbf3b741ac59c64$export$2e2bcd8739ae039(xa, xb)
            }, {
                i: i - 2,
                x: $6bbf3b741ac59c64$export$2e2bcd8739ae039(ya, yb)
            });
        } else if (xb || yb) s.push("translate(" + xb + pxComma + yb + pxParen);
    }
    function rotate(a, b, s, q) {
        if (a !== b) {
            if (a - b > 180) b += 360;
            else if (b - a > 180) a += 360; // shortest path
            q.push({
                i: s.push(pop(s) + "rotate(", null, degParen) - 2,
                x: $6bbf3b741ac59c64$export$2e2bcd8739ae039(a, b)
            });
        } else if (b) s.push(pop(s) + "rotate(" + b + degParen);
    }
    function skewX(a, b, s, q) {
        if (a !== b) q.push({
            i: s.push(pop(s) + "skewX(", null, degParen) - 2,
            x: $6bbf3b741ac59c64$export$2e2bcd8739ae039(a, b)
        });
        else if (b) s.push(pop(s) + "skewX(" + b + degParen);
    }
    function scale(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push(pop(s) + "scale(", null, ",", null, ")");
            q.push({
                i: i - 4,
                x: $6bbf3b741ac59c64$export$2e2bcd8739ae039(xa, xb)
            }, {
                i: i - 2,
                x: $6bbf3b741ac59c64$export$2e2bcd8739ae039(ya, yb)
            });
        } else if (xb !== 1 || yb !== 1) s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
    return function(a, b) {
        var s = [], q = []; // number interpolators
        a = parse(a), b = parse(b);
        translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
        rotate(a.rotate, b.rotate, s, q);
        skewX(a.skewX, b.skewX, s, q);
        scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
        a = b = null; // gc
        return function(t) {
            var i = -1, n = q.length, o;
            while(++i < n)s[(o = q[i]).i] = o.x(t);
            return s.join("");
        };
    };
}
var $0fd7c676cbf0f981$export$56bec7123bb3589a = $0fd7c676cbf0f981$var$interpolateTransform($83bf827a93bbd0c2$export$59ad369bf4938177, "px, ", "px)", "deg)");
var $0fd7c676cbf0f981$export$da8cba906d64c082 = $0fd7c676cbf0f981$var$interpolateTransform($83bf827a93bbd0c2$export$f9ef43f9a1d89a18, ", ", ")", ")");

var $8e2cddf6ed67e451$var$epsilon2 = 1e-12;
function $8e2cddf6ed67e451$var$cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
}
function $8e2cddf6ed67e451$var$sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
}
function $8e2cddf6ed67e451$var$tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}
var $8e2cddf6ed67e451$export$2e2bcd8739ae039 = function zoomRho(rho, rho2, rho4) {
    // p0 = [ux0, uy0, w0]
    // p1 = [ux1, uy1, w1]
    function zoom(p0, p1) {
        var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
        // Special case for u0 ≅ u1.
        if (d2 < $8e2cddf6ed67e451$var$epsilon2) {
            S = Math.log(w1 / w0) / rho;
            i = function(t) {
                return [
                    ux0 + t * dx,
                    uy0 + t * dy,
                    w0 * Math.exp(rho * t * S)
                ];
            };
        } else {
            var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
            S = (r1 - r0) / rho;
            i = function(t) {
                var s = t * S, coshr0 = $8e2cddf6ed67e451$var$cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * $8e2cddf6ed67e451$var$tanh(rho * s + r0) - $8e2cddf6ed67e451$var$sinh(r0));
                return [
                    ux0 + u * dx,
                    uy0 + u * dy,
                    w0 * coshr0 / $8e2cddf6ed67e451$var$cosh(rho * s + r0)
                ];
            };
        }
        i.duration = S * 1000 * rho / Math.SQRT2;
        return i;
    }
    zoom.rho = function(_) {
        var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
        return zoomRho(_1, _2, _4);
    };
    return zoom;
}(Math.SQRT2, 2, 4);



function $757088d9ca852ec2$export$2e2bcd8739ae039(x) {
    return function() {
        return x;
    };
}


function $569712aae6c976a1$export$2e2bcd8739ae039(x) {
    return +x;
}


var $db1c28caf6aa6781$var$unit = [
    0,
    1
];
function $db1c28caf6aa6781$export$f0954fd7d5368655(x) {
    return x;
}
function $db1c28caf6aa6781$var$normalize(a, b) {
    return (b -= a = +a) ? function(x) {
        return (x - a) / b;
    } : $757088d9ca852ec2$export$2e2bcd8739ae039(isNaN(b) ? NaN : 0.5);
}
function $db1c28caf6aa6781$var$clamper(a, b) {
    var t;
    if (a > b) t = a, a = b, b = t;
    return function(x) {
        return Math.max(a, Math.min(b, x));
    };
}
// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function $db1c28caf6aa6781$var$bimap(domain, range, interpolate) {
    var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
    if (d1 < d0) d0 = $db1c28caf6aa6781$var$normalize(d1, d0), r0 = interpolate(r1, r0);
    else d0 = $db1c28caf6aa6781$var$normalize(d0, d1), r0 = interpolate(r0, r1);
    return function(x) {
        return r0(d0(x));
    };
}
function $db1c28caf6aa6781$var$polymap(domain, range, interpolate) {
    var j = Math.min(domain.length, range.length) - 1, d = new Array(j), r = new Array(j), i1 = -1;
    // Reverse descending domains.
    if (domain[j] < domain[0]) {
        domain = domain.slice().reverse();
        range = range.slice().reverse();
    }
    while(++i1 < j){
        d[i1] = $db1c28caf6aa6781$var$normalize(domain[i1], domain[i1 + 1]);
        r[i1] = interpolate(range[i1], range[i1 + 1]);
    }
    return function(x) {
        var i = $78cbf5753dfe297f$export$2e2bcd8739ae039(domain, x, 1, j) - 1;
        return r[i](d[i](x));
    };
}
function $db1c28caf6aa6781$export$784d13d8ee351f07(source, target) {
    return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function $db1c28caf6aa6781$export$6b468dcfb64c653c() {
    var domain = $db1c28caf6aa6781$var$unit, range = $db1c28caf6aa6781$var$unit, interpolate = $65e95bea40ad2a15$export$2e2bcd8739ae039, transform, untransform, unknown, clamp = $db1c28caf6aa6781$export$f0954fd7d5368655, piecewise, output, input;
    function rescale() {
        var n = Math.min(domain.length, range.length);
        if (clamp !== $db1c28caf6aa6781$export$f0954fd7d5368655) clamp = $db1c28caf6aa6781$var$clamper(domain[0], domain[n - 1]);
        piecewise = n > 2 ? $db1c28caf6aa6781$var$polymap : $db1c28caf6aa6781$var$bimap;
        output = input = null;
        return scale;
    }
    function scale(x) {
        return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
    }
    scale.invert = function(y) {
        return clamp(untransform((input || (input = piecewise(range, domain.map(transform), $6bbf3b741ac59c64$export$2e2bcd8739ae039)))(y)));
    };
    scale.domain = function(_) {
        return arguments.length ? (domain = Array.from(_, $569712aae6c976a1$export$2e2bcd8739ae039), rescale()) : domain.slice();
    };
    scale.range = function(_) {
        return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
    };
    scale.rangeRound = function(_) {
        return range = Array.from(_), interpolate = $f3a727eb4df08cbc$export$2e2bcd8739ae039, rescale();
    };
    scale.clamp = function(_) {
        return arguments.length ? (clamp = _ ? true : $db1c28caf6aa6781$export$f0954fd7d5368655, rescale()) : clamp !== $db1c28caf6aa6781$export$f0954fd7d5368655;
    };
    scale.interpolate = function(_) {
        return arguments.length ? (interpolate = _, rescale()) : interpolate;
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function(t, u) {
        transform = t, untransform = u;
        return rescale();
    };
}
function $db1c28caf6aa6781$export$2e2bcd8739ae039() {
    return $db1c28caf6aa6781$export$6b468dcfb64c653c()($db1c28caf6aa6781$export$f0954fd7d5368655, $db1c28caf6aa6781$export$f0954fd7d5368655);
}


function $51263b97d8f3f5f3$export$23c7bb9e6558da2a(domain, range) {
    switch(arguments.length){
        case 0:
            break;
        case 1:
            this.range(domain);
            break;
        default:
            this.range(range).domain(domain);
            break;
    }
    return this;
}
function $51263b97d8f3f5f3$export$7d6b419e59e83f3d(domain, interpolator) {
    switch(arguments.length){
        case 0:
            break;
        case 1:
            if (typeof domain === "function") this.interpolator(domain);
            else this.range(domain);
            break;
        default:
            this.domain(domain);
            if (typeof interpolator === "function") this.interpolator(interpolator);
            else this.range(interpolator);
            break;
    }
    return this;
}




function $5787156bc74cc17c$export$2e2bcd8739ae039(start, stop, count, specifier) {
    var step = $0be4e5b8a318389a$export$81087d9b915d4ede(start, stop, count), precision;
    specifier = $5f2d8a0a0291e286$export$2e2bcd8739ae039(specifier == null ? ",f" : specifier);
    switch(specifier.type){
        case "s":
            var value = Math.max(Math.abs(start), Math.abs(stop));
            if (specifier.precision == null && !isNaN(precision = $ecf50f841903c670$export$2e2bcd8739ae039(step, value))) specifier.precision = precision;
            return $43f4f8ea9fa6192d$export$8d85692a469dde6f(specifier, value);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
            if (specifier.precision == null && !isNaN(precision = $aa59f3899ffdc9af$export$2e2bcd8739ae039(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
            break;
        case "f":
        case "%":
            if (specifier.precision == null && !isNaN(precision = $11456134f7143db4$export$2e2bcd8739ae039(step))) specifier.precision = precision - (specifier.type === "%") * 2;
            break;
    }
    return $43f4f8ea9fa6192d$export$d9468344d3651243(specifier);
}


function $6332e12f180c8c11$export$16a5d4b4a61a274d(scale) {
    var domain = scale.domain;
    scale.ticks = function(count) {
        var d = domain();
        return $0be4e5b8a318389a$export$2e2bcd8739ae039(d[0], d[d.length - 1], count == null ? 10 : count);
    };
    scale.tickFormat = function(count, specifier) {
        var d = domain();
        return $5787156bc74cc17c$export$2e2bcd8739ae039(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
    };
    scale.nice = function(count) {
        if (count == null) count = 10;
        var d = domain();
        var i0 = 0;
        var i1 = d.length - 1;
        var start = d[i0];
        var stop = d[i1];
        var prestep;
        var step;
        var maxIter = 10;
        if (stop < start) {
            step = start, start = stop, stop = step;
            step = i0, i0 = i1, i1 = step;
        }
        while(maxIter-- > 0){
            step = $0be4e5b8a318389a$export$bc64d00cc98e7e95(start, stop, count);
            if (step === prestep) {
                d[i0] = start;
                d[i1] = stop;
                return domain(d);
            } else if (step > 0) {
                start = Math.floor(start / step) * step;
                stop = Math.ceil(stop / step) * step;
            } else if (step < 0) {
                start = Math.ceil(start * step) / step;
                stop = Math.floor(stop * step) / step;
            } else break;
            prestep = step;
        }
        return scale;
    };
    return scale;
}
function $6332e12f180c8c11$export$2e2bcd8739ae039() {
    var scale = $db1c28caf6aa6781$export$2e2bcd8739ae039();
    scale.copy = function() {
        return $db1c28caf6aa6781$export$784d13d8ee351f07(scale, $6332e12f180c8c11$export$2e2bcd8739ae039());
    };
    $51263b97d8f3f5f3$export$23c7bb9e6558da2a.apply(scale, arguments);
    return $6332e12f180c8c11$export$16a5d4b4a61a274d(scale);
}



function $813fb82c89fc6871$export$2e2bcd8739ae039(domain, interval) {
    domain = domain.slice();
    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], t;
    if (x1 < x0) {
        t = i0, i0 = i1, i1 = t;
        t = x0, x0 = x1, x1 = t;
    }
    domain[i0] = interval.floor(x0);
    domain[i1] = interval.ceil(x1);
    return domain;
}




function $7bf9b93fdee22b95$var$transformLog(x) {
    return Math.log(x);
}
function $7bf9b93fdee22b95$var$transformExp(x) {
    return Math.exp(x);
}
function $7bf9b93fdee22b95$var$transformLogn(x) {
    return -Math.log(-x);
}
function $7bf9b93fdee22b95$var$transformExpn(x) {
    return -Math.exp(-x);
}
function $7bf9b93fdee22b95$var$pow10(x) {
    return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}
function $7bf9b93fdee22b95$var$powp(base) {
    return base === 10 ? $7bf9b93fdee22b95$var$pow10 : base === Math.E ? Math.exp : function(x) {
        return Math.pow(base, x);
    };
}
function $7bf9b93fdee22b95$var$logp(base) {
    return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), function(x) {
        return Math.log(x) / base;
    });
}
function $7bf9b93fdee22b95$var$reflect(f) {
    return function(x) {
        return -f(-x);
    };
}
function $7bf9b93fdee22b95$export$860836db074028f0(transform) {
    var scale = transform($7bf9b93fdee22b95$var$transformLog, $7bf9b93fdee22b95$var$transformExp), domain = scale.domain, base = 10, logs, pows;
    function rescale() {
        logs = $7bf9b93fdee22b95$var$logp(base), pows = $7bf9b93fdee22b95$var$powp(base);
        if (domain()[0] < 0) {
            logs = $7bf9b93fdee22b95$var$reflect(logs), pows = $7bf9b93fdee22b95$var$reflect(pows);
            transform($7bf9b93fdee22b95$var$transformLogn, $7bf9b93fdee22b95$var$transformExpn);
        } else transform($7bf9b93fdee22b95$var$transformLog, $7bf9b93fdee22b95$var$transformExp);
        return scale;
    }
    scale.base = function(_) {
        return arguments.length ? (base = +_, rescale()) : base;
    };
    scale.domain = function(_) {
        return arguments.length ? (domain(_), rescale()) : domain();
    };
    scale.ticks = function(count) {
        var d = domain(), u = d[0], v = d[d.length - 1], r;
        if (r = v < u) i = u, u = v, v = i;
        var i = logs(u), j = logs(v), p, k, t, n = count == null ? 10 : +count, z = [];
        if (!(base % 1) && j - i < n) {
            i = Math.floor(i), j = Math.ceil(j);
            if (u > 0) for(; i <= j; ++i)for(k = 1, p = pows(i); k < base; ++k){
                t = p * k;
                if (t < u) continue;
                if (t > v) break;
                z.push(t);
            }
            else for(; i <= j; ++i)for(k = base - 1, p = pows(i); k >= 1; --k){
                t = p * k;
                if (t < u) continue;
                if (t > v) break;
                z.push(t);
            }
            if (z.length * 2 < n) z = $0be4e5b8a318389a$export$2e2bcd8739ae039(u, v, n);
        } else z = $0be4e5b8a318389a$export$2e2bcd8739ae039(i, j, Math.min(j - i, n)).map(pows);
        return r ? z.reverse() : z;
    };
    scale.tickFormat = function(count, specifier) {
        if (specifier == null) specifier = base === 10 ? ".0e" : ",";
        if (typeof specifier !== "function") specifier = $43f4f8ea9fa6192d$export$d9468344d3651243(specifier);
        if (count === Infinity) return specifier;
        if (count == null) count = 10;
        var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
        return function(d) {
            var i = d / pows(Math.round(logs(d)));
            if (i * base < base - 0.5) i *= base;
            return i <= k ? specifier(d) : "";
        };
    };
    scale.nice = function() {
        return domain($813fb82c89fc6871$export$2e2bcd8739ae039(domain(), {
            floor: function(x) {
                return pows(Math.floor(logs(x)));
            },
            ceil: function(x) {
                return pows(Math.ceil(logs(x)));
            }
        }));
    };
    return scale;
}
function $7bf9b93fdee22b95$export$2e2bcd8739ae039() {
    var scale = $7bf9b93fdee22b95$export$860836db074028f0($db1c28caf6aa6781$export$6b468dcfb64c653c()).domain([
        1,
        10
    ]);
    scale.copy = function() {
        return $db1c28caf6aa6781$export$784d13d8ee351f07(scale, $7bf9b93fdee22b95$export$2e2bcd8739ae039()).base(scale.base());
    };
    $51263b97d8f3f5f3$export$23c7bb9e6558da2a.apply(scale, arguments);
    return scale;
}



var $261b8182643de5bf$export$58adb3bec8346d0f = Array.prototype.slice;


function $7824d7dc0429d3cc$export$2e2bcd8739ae039(x) {
    return x;
}


var $a5f7962cc6e169b2$var$top = 1, $a5f7962cc6e169b2$var$right = 2, $a5f7962cc6e169b2$var$bottom = 3, $a5f7962cc6e169b2$var$left = 4, $a5f7962cc6e169b2$var$epsilon = 1e-6;
function $a5f7962cc6e169b2$var$translateX(x) {
    return "translate(" + x + ",0)";
}
function $a5f7962cc6e169b2$var$translateY(y) {
    return "translate(0," + y + ")";
}
function $a5f7962cc6e169b2$var$number(scale) {
    return (d)=>+scale(d)
    ;
}
function $a5f7962cc6e169b2$var$center(scale, offset) {
    offset = Math.max(0, scale.bandwidth() - offset * 2) / 2;
    if (scale.round()) offset = Math.round(offset);
    return (d)=>+scale(d) + offset
    ;
}
function $a5f7962cc6e169b2$var$entering() {
    return !this.__axis;
}
function $a5f7962cc6e169b2$var$axis(orient, scale) {
    var tickArguments = [], tickValues = null, tickFormat = null, tickSizeInner = 6, tickSizeOuter = 6, tickPadding = 3, offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5, k = orient === $a5f7962cc6e169b2$var$top || orient === $a5f7962cc6e169b2$var$left ? -1 : 1, x = orient === $a5f7962cc6e169b2$var$left || orient === $a5f7962cc6e169b2$var$right ? "x" : "y", transform = orient === $a5f7962cc6e169b2$var$top || orient === $a5f7962cc6e169b2$var$bottom ? $a5f7962cc6e169b2$var$translateX : $a5f7962cc6e169b2$var$translateY;
    function axis(context) {
        var values = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues, format = tickFormat == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : $7824d7dc0429d3cc$export$2e2bcd8739ae039 : tickFormat, spacing = Math.max(tickSizeInner, 0) + tickPadding, range = scale.range(), range0 = +range[0] + offset, range1 = +range[range.length - 1] + offset, position = (scale.bandwidth ? $a5f7962cc6e169b2$var$center : $a5f7962cc6e169b2$var$number)(scale.copy(), offset), selection = context.selection ? context.selection() : context, path = selection.selectAll(".domain").data([
            null
        ]), tick = selection.selectAll(".tick").data(values, scale).order(), tickExit = tick.exit(), tickEnter = tick.enter().append("g").attr("class", "tick"), line = tick.select("line"), text = tick.select("text");
        path = path.merge(path.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));
        tick = tick.merge(tickEnter);
        line = line.merge(tickEnter.append("line").attr("stroke", "currentColor").attr(x + "2", k * tickSizeInner));
        text = text.merge(tickEnter.append("text").attr("fill", "currentColor").attr(x, k * spacing).attr("dy", orient === $a5f7962cc6e169b2$var$top ? "0em" : orient === $a5f7962cc6e169b2$var$bottom ? "0.71em" : "0.32em"));
        if (context !== selection) {
            path = path.transition(context);
            tick = tick.transition(context);
            line = line.transition(context);
            text = text.transition(context);
            tickExit = tickExit.transition(context).attr("opacity", $a5f7962cc6e169b2$var$epsilon).attr("transform", function(d) {
                return isFinite(d = position(d)) ? transform(d + offset) : this.getAttribute("transform");
            });
            tickEnter.attr("opacity", $a5f7962cc6e169b2$var$epsilon).attr("transform", function(d) {
                var p = this.parentNode.__axis;
                return transform((p && isFinite(p = p(d)) ? p : position(d)) + offset);
            });
        }
        tickExit.remove();
        path.attr("d", orient === $a5f7962cc6e169b2$var$left || orient === $a5f7962cc6e169b2$var$right ? tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1 : tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1);
        tick.attr("opacity", 1).attr("transform", function(d) {
            return transform(position(d) + offset);
        });
        line.attr(x + "2", k * tickSizeInner);
        text.attr(x, k * spacing).text(format);
        selection.filter($a5f7962cc6e169b2$var$entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === $a5f7962cc6e169b2$var$right ? "start" : orient === $a5f7962cc6e169b2$var$left ? "end" : "middle");
        selection.each(function() {
            this.__axis = position;
        });
    }
    axis.scale = function(_) {
        return arguments.length ? (scale = _, axis) : scale;
    };
    axis.ticks = function() {
        return tickArguments = $261b8182643de5bf$export$58adb3bec8346d0f.call(arguments), axis;
    };
    axis.tickArguments = function(_) {
        return arguments.length ? (tickArguments = _ == null ? [] : $261b8182643de5bf$export$58adb3bec8346d0f.call(_), axis) : tickArguments.slice();
    };
    axis.tickValues = function(_) {
        return arguments.length ? (tickValues = _ == null ? null : $261b8182643de5bf$export$58adb3bec8346d0f.call(_), axis) : tickValues && tickValues.slice();
    };
    axis.tickFormat = function(_) {
        return arguments.length ? (tickFormat = _, axis) : tickFormat;
    };
    axis.tickSize = function(_) {
        return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
    };
    axis.tickSizeInner = function(_) {
        return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
    };
    axis.tickSizeOuter = function(_) {
        return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
    };
    axis.tickPadding = function(_) {
        return arguments.length ? (tickPadding = +_, axis) : tickPadding;
    };
    axis.offset = function(_) {
        return arguments.length ? (offset = +_, axis) : offset;
    };
    return axis;
}
function $a5f7962cc6e169b2$export$59b8cfab074bdeb1(scale) {
    return $a5f7962cc6e169b2$var$axis($a5f7962cc6e169b2$var$top, scale);
}
function $a5f7962cc6e169b2$export$b0d2e24dc4f898f0(scale) {
    return $a5f7962cc6e169b2$var$axis($a5f7962cc6e169b2$var$right, scale);
}
function $a5f7962cc6e169b2$export$e5cb22533a15e72e(scale) {
    return $a5f7962cc6e169b2$var$axis($a5f7962cc6e169b2$var$bottom, scale);
}
function $a5f7962cc6e169b2$export$2749afb169a520d2(scale) {
    return $a5f7962cc6e169b2$var$axis($a5f7962cc6e169b2$var$left, scale);
}



var $f75b872a5c91f6b0$var$noop = {
    value: ()=>{}
};
function $f75b872a5c91f6b0$var$dispatch() {
    for(var i = 0, n = arguments.length, _ = {}, t; i < n; ++i){
        if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
        _[t] = [];
    }
    return new $f75b872a5c91f6b0$var$Dispatch(_);
}
function $f75b872a5c91f6b0$var$Dispatch(_) {
    this._ = _;
}
function $f75b872a5c91f6b0$var$parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        return {
            type: t,
            name: name
        };
    });
}
$f75b872a5c91f6b0$var$Dispatch.prototype = $f75b872a5c91f6b0$var$dispatch.prototype = {
    constructor: $f75b872a5c91f6b0$var$Dispatch,
    on: function(typename, callback) {
        var _ = this._, T = $f75b872a5c91f6b0$var$parseTypenames(typename + "", _), t, i = -1, n = T.length;
        // If no callback was specified, return the callback of the given type and name.
        if (arguments.length < 2) {
            while(++i < n)if ((t = (typename = T[i]).type) && (t = $f75b872a5c91f6b0$var$get(_[t], typename.name))) return t;
            return;
        }
        // If a type was specified, set the callback for the given type and name.
        // Otherwise, if a null callback was specified, remove callbacks of the given name.
        if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
        while(++i < n){
            if (t = (typename = T[i]).type) _[t] = $f75b872a5c91f6b0$var$set(_[t], typename.name, callback);
            else if (callback == null) for(t in _)_[t] = $f75b872a5c91f6b0$var$set(_[t], typename.name, null);
        }
        return this;
    },
    copy: function() {
        var copy = {}, _ = this._;
        for(var t in _)copy[t] = _[t].slice();
        return new $f75b872a5c91f6b0$var$Dispatch(copy);
    },
    call: function(type, that) {
        if ((n = arguments.length - 2) > 0) for(var args = new Array(n), i = 0, n, t; i < n; ++i)args[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    },
    apply: function(type, that, args) {
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(var t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    }
};
function $f75b872a5c91f6b0$var$get(type, name) {
    for(var i = 0, n = type.length, c; i < n; ++i){
        if ((c = type[i]).name === name) return c.value;
    }
}
function $f75b872a5c91f6b0$var$set(type, name, callback) {
    for(var i = 0, n = type.length; i < n; ++i)if (type[i].name === name) {
        type[i] = $f75b872a5c91f6b0$var$noop, type = type.slice(0, i).concat(type.slice(i + 1));
        break;
    }
    if (callback != null) type.push({
        name: name,
        value: callback
    });
    return type;
}
var $f75b872a5c91f6b0$export$2e2bcd8739ae039 = $f75b872a5c91f6b0$var$dispatch;




var $b3K6t = parcelRequire("b3K6t");
function $839ea26eed6d9c10$export$2e2561858db9bf47(event) {
    event.stopImmediatePropagation();
}
function $839ea26eed6d9c10$export$2e2bcd8739ae039(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
}


function $8370cad99eefb5a6$export$2e2bcd8739ae039(view) {
    var root = view.document.documentElement, selection = $b3K6t.default(view).on("dragstart.drag", $839ea26eed6d9c10$export$2e2bcd8739ae039, true);
    if ("onselectstart" in root) selection.on("selectstart.drag", $839ea26eed6d9c10$export$2e2bcd8739ae039, true);
    else {
        root.__noselect = root.style.MozUserSelect;
        root.style.MozUserSelect = "none";
    }
}
function $8370cad99eefb5a6$export$833237748009e1e1(view, noclick) {
    var root = view.document.documentElement, selection = $b3K6t.default(view).on("dragstart.drag", null);
    if (noclick) {
        selection.on("click.drag", $839ea26eed6d9c10$export$2e2bcd8739ae039, true);
        setTimeout(function() {
            selection.on("click.drag", null);
        }, 0);
    }
    if ("onselectstart" in root) selection.on("selectstart.drag", null);
    else {
        root.style.MozUserSelect = root.__noselect;
        delete root.__noselect;
    }
}





var $b3K6t = parcelRequire("b3K6t");
var $aMKaC = parcelRequire("aMKaC");

var $cT0Fo = parcelRequire("cT0Fo");

var $ed96d65d53cb459c$var$frame = 0, $ed96d65d53cb459c$var$timeout = 0, $ed96d65d53cb459c$var$interval = 0, $ed96d65d53cb459c$var$pokeDelay = 1000, $ed96d65d53cb459c$var$taskHead, $ed96d65d53cb459c$var$taskTail, $ed96d65d53cb459c$var$clockLast = 0, $ed96d65d53cb459c$var$clockNow = 0, $ed96d65d53cb459c$var$clockSkew = 0, $ed96d65d53cb459c$var$clock = typeof performance === "object" && performance.now ? performance : Date, $ed96d65d53cb459c$var$setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
    setTimeout(f, 17);
};
function $ed96d65d53cb459c$export$461939dd4422153() {
    return $ed96d65d53cb459c$var$clockNow || ($ed96d65d53cb459c$var$setFrame($ed96d65d53cb459c$var$clearNow), $ed96d65d53cb459c$var$clockNow = $ed96d65d53cb459c$var$clock.now() + $ed96d65d53cb459c$var$clockSkew);
}
function $ed96d65d53cb459c$var$clearNow() {
    $ed96d65d53cb459c$var$clockNow = 0;
}
function $ed96d65d53cb459c$export$c57e9b2d8b9e4de() {
    this._call = this._time = this._next = null;
}
$ed96d65d53cb459c$export$c57e9b2d8b9e4de.prototype = $ed96d65d53cb459c$export$9dc4ecf953986f04.prototype = {
    constructor: $ed96d65d53cb459c$export$c57e9b2d8b9e4de,
    restart: function(callback, delay, time) {
        if (typeof callback !== "function") throw new TypeError("callback is not a function");
        time = (time == null ? $ed96d65d53cb459c$export$461939dd4422153() : +time) + (delay == null ? 0 : +delay);
        if (!this._next && $ed96d65d53cb459c$var$taskTail !== this) {
            if ($ed96d65d53cb459c$var$taskTail) $ed96d65d53cb459c$var$taskTail._next = this;
            else $ed96d65d53cb459c$var$taskHead = this;
            $ed96d65d53cb459c$var$taskTail = this;
        }
        this._call = callback;
        this._time = time;
        $ed96d65d53cb459c$var$sleep();
    },
    stop: function() {
        if (this._call) {
            this._call = null;
            this._time = Infinity;
            $ed96d65d53cb459c$var$sleep();
        }
    }
};
function $ed96d65d53cb459c$export$9dc4ecf953986f04(callback, delay, time) {
    var t = new $ed96d65d53cb459c$export$c57e9b2d8b9e4de;
    t.restart(callback, delay, time);
    return t;
}
function $ed96d65d53cb459c$export$d60154c1d7f3990e() {
    $ed96d65d53cb459c$export$461939dd4422153(); // Get the current time, if not already set.
    ++$ed96d65d53cb459c$var$frame; // Pretend we’ve set an alarm, if we haven’t already.
    var t = $ed96d65d53cb459c$var$taskHead, e;
    while(t){
        if ((e = $ed96d65d53cb459c$var$clockNow - t._time) >= 0) t._call.call(null, e);
        t = t._next;
    }
    --$ed96d65d53cb459c$var$frame;
}
function $ed96d65d53cb459c$var$wake() {
    $ed96d65d53cb459c$var$clockNow = ($ed96d65d53cb459c$var$clockLast = $ed96d65d53cb459c$var$clock.now()) + $ed96d65d53cb459c$var$clockSkew;
    $ed96d65d53cb459c$var$frame = $ed96d65d53cb459c$var$timeout = 0;
    try {
        $ed96d65d53cb459c$export$d60154c1d7f3990e();
    } finally{
        $ed96d65d53cb459c$var$frame = 0;
        $ed96d65d53cb459c$var$nap();
        $ed96d65d53cb459c$var$clockNow = 0;
    }
}
function $ed96d65d53cb459c$var$poke() {
    var $ed96d65d53cb459c$export$461939dd4422153 = $ed96d65d53cb459c$var$clock.now(), delay = $ed96d65d53cb459c$export$461939dd4422153 - $ed96d65d53cb459c$var$clockLast;
    if (delay > $ed96d65d53cb459c$var$pokeDelay) $ed96d65d53cb459c$var$clockSkew -= delay, $ed96d65d53cb459c$var$clockLast = $ed96d65d53cb459c$export$461939dd4422153;
}
function $ed96d65d53cb459c$var$nap() {
    var t0, t1 = $ed96d65d53cb459c$var$taskHead, t2, time = Infinity;
    while(t1)if (t1._call) {
        if (time > t1._time) time = t1._time;
        t0 = t1, t1 = t1._next;
    } else {
        t2 = t1._next, t1._next = null;
        t1 = t0 ? t0._next = t2 : $ed96d65d53cb459c$var$taskHead = t2;
    }
    $ed96d65d53cb459c$var$taskTail = t0;
    $ed96d65d53cb459c$var$sleep(time);
}
function $ed96d65d53cb459c$var$sleep(time) {
    if ($ed96d65d53cb459c$var$frame) return; // Soonest alarm already set, or will be.
    if ($ed96d65d53cb459c$var$timeout) $ed96d65d53cb459c$var$timeout = clearTimeout($ed96d65d53cb459c$var$timeout);
    var delay = time - $ed96d65d53cb459c$var$clockNow; // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
        if (time < Infinity) $ed96d65d53cb459c$var$timeout = setTimeout($ed96d65d53cb459c$var$wake, time - $ed96d65d53cb459c$var$clock.now() - $ed96d65d53cb459c$var$clockSkew);
        if ($ed96d65d53cb459c$var$interval) $ed96d65d53cb459c$var$interval = clearInterval($ed96d65d53cb459c$var$interval);
    } else {
        if (!$ed96d65d53cb459c$var$interval) $ed96d65d53cb459c$var$clockLast = $ed96d65d53cb459c$var$clock.now(), $ed96d65d53cb459c$var$interval = setInterval($ed96d65d53cb459c$var$poke, $ed96d65d53cb459c$var$pokeDelay);
        $ed96d65d53cb459c$var$frame = 1, $ed96d65d53cb459c$var$setFrame($ed96d65d53cb459c$var$wake);
    }
}


function $7c5ad27013dde2f0$export$2e2bcd8739ae039(callback, delay, time) {
    var t = new $ed96d65d53cb459c$export$c57e9b2d8b9e4de;
    delay = delay == null ? 0 : +delay;
    t.restart((elapsed)=>{
        t.stop();
        callback(elapsed + delay);
    }, delay, time);
    return t;
}



var $2729a63c2e56b492$var$emptyOn = $f75b872a5c91f6b0$export$2e2bcd8739ae039("start", "end", "cancel", "interrupt");
var $2729a63c2e56b492$var$emptyTween = [];
var $2729a63c2e56b492$export$ff39ebd4bb12b718 = 0;
var $2729a63c2e56b492$export$584530fe98d14a84 = 1;
var $2729a63c2e56b492$export$a5d151aee16efd42 = 2;
var $2729a63c2e56b492$export$fb935ab5849a0db9 = 3;
var $2729a63c2e56b492$export$1573e22b087389af = 4;
var $2729a63c2e56b492$export$a2e792214ded83b2 = 5;
var $2729a63c2e56b492$export$9d38167254403955 = 6;
function $2729a63c2e56b492$export$2e2bcd8739ae039(node, name, id, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules) node.__transition = {};
    else if (id in schedules) return;
    $2729a63c2e56b492$var$create(node, id, {
        name: name,
        index: index,
        group: group,
        on: $2729a63c2e56b492$var$emptyOn,
        tween: $2729a63c2e56b492$var$emptyTween,
        time: timing.time,
        delay: timing.delay,
        duration: timing.duration,
        ease: timing.ease,
        timer: null,
        state: $2729a63c2e56b492$export$ff39ebd4bb12b718
    });
}
function $2729a63c2e56b492$export$2cd8252107eb640b(node, id) {
    var schedule = $2729a63c2e56b492$export$3988ae62b71be9a3(node, id);
    if (schedule.state > $2729a63c2e56b492$export$ff39ebd4bb12b718) throw new Error("too late; already scheduled");
    return schedule;
}
function $2729a63c2e56b492$export$adaa4cf7ef1b65be(node, id) {
    var schedule = $2729a63c2e56b492$export$3988ae62b71be9a3(node, id);
    if (schedule.state > $2729a63c2e56b492$export$fb935ab5849a0db9) throw new Error("too late; already running");
    return schedule;
}
function $2729a63c2e56b492$export$3988ae62b71be9a3(node, id) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
    return schedule;
}
function $2729a63c2e56b492$var$create(node, id, self) {
    var schedules = node.__transition, tween;
    // Initialize the self timer when the transition is created.
    // Note the actual delay is not known until the first callback!
    schedules[id] = self;
    self.timer = $ed96d65d53cb459c$export$9dc4ecf953986f04(schedule, 0, self.time);
    function schedule(elapsed) {
        self.state = $2729a63c2e56b492$export$584530fe98d14a84;
        self.timer.restart(start, self.delay, self.time);
        // If the elapsed delay is less than our first sleep, start immediately.
        if (self.delay <= elapsed) start(elapsed - self.delay);
    }
    function start(elapsed) {
        var i, j, n, o;
        // If the state is not SCHEDULED, then we previously errored on start.
        if (self.state !== $2729a63c2e56b492$export$584530fe98d14a84) return stop();
        for(i in schedules){
            o = schedules[i];
            if (o.name !== self.name) continue;
            // While this element already has a starting transition during this frame,
            // defer starting an interrupting transition until that transition has a
            // chance to tick (and possibly end); see d3/d3-transition#54!
            if (o.state === $2729a63c2e56b492$export$fb935ab5849a0db9) return $7c5ad27013dde2f0$export$2e2bcd8739ae039(start);
            // Interrupt the active transition, if any.
            if (o.state === $2729a63c2e56b492$export$1573e22b087389af) {
                o.state = $2729a63c2e56b492$export$9d38167254403955;
                o.timer.stop();
                o.on.call("interrupt", node, node.__data__, o.index, o.group);
                delete schedules[i];
            } else if (+i < id) {
                o.state = $2729a63c2e56b492$export$9d38167254403955;
                o.timer.stop();
                o.on.call("cancel", node, node.__data__, o.index, o.group);
                delete schedules[i];
            }
        }
        // Defer the first tick to end of the current frame; see d3/d3#1576.
        // Note the transition may be canceled after start and before the first tick!
        // Note this must be scheduled before the start event; see d3/d3-transition#16!
        // Assuming this is successful, subsequent callbacks go straight to tick.
        $7c5ad27013dde2f0$export$2e2bcd8739ae039(function() {
            if (self.state === $2729a63c2e56b492$export$fb935ab5849a0db9) {
                self.state = $2729a63c2e56b492$export$1573e22b087389af;
                self.timer.restart(tick, self.delay, self.time);
                tick(elapsed);
            }
        });
        // Dispatch the start event.
        // Note this must be done before the tween are initialized.
        self.state = $2729a63c2e56b492$export$a5d151aee16efd42;
        self.on.call("start", node, node.__data__, self.index, self.group);
        if (self.state !== $2729a63c2e56b492$export$a5d151aee16efd42) return; // interrupted
        self.state = $2729a63c2e56b492$export$fb935ab5849a0db9;
        // Initialize the tween, deleting null tween.
        tween = new Array(n = self.tween.length);
        for(i = 0, j = -1; i < n; ++i)if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) tween[++j] = o;
        tween.length = j + 1;
    }
    function tick(elapsed) {
        var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = $2729a63c2e56b492$export$a2e792214ded83b2, 1), i = -1, n = tween.length;
        while(++i < n)tween[i].call(node, t);
        // Dispatch the end event.
        if (self.state === $2729a63c2e56b492$export$a2e792214ded83b2) {
            self.on.call("end", node, node.__data__, self.index, self.group);
            stop();
        }
    }
    function stop() {
        self.state = $2729a63c2e56b492$export$9d38167254403955;
        self.timer.stop();
        delete schedules[id];
        for(var i in schedules)return; // eslint-disable-line no-unused-vars
        delete node.__transition;
    }
}


function $98826eb4e4099364$export$2e2bcd8739ae039(node, name) {
    var schedules = node.__transition, schedule, active, empty = true, i;
    if (!schedules) return;
    name = name == null ? null : name + "";
    for(i in schedules){
        if ((schedule = schedules[i]).name !== name) {
            empty = false;
            continue;
        }
        active = schedule.state > $2729a63c2e56b492$export$a5d151aee16efd42 && schedule.state < $2729a63c2e56b492$export$a2e792214ded83b2;
        schedule.state = $2729a63c2e56b492$export$9d38167254403955;
        schedule.timer.stop();
        schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
        delete schedules[i];
    }
    if (empty) delete node.__transition;
}


function $df5781c7e2b8089b$export$2e2bcd8739ae039(name) {
    return this.each(function() {
        $98826eb4e4099364$export$2e2bcd8739ae039(this, name);
    });
}



var $cT0Fo = parcelRequire("cT0Fo");


var $1fCt1 = parcelRequire("1fCt1");

function $52dfce068d21d67f$var$tweenRemove(id, name) {
    var tween0, tween1;
    return function() {
        var schedule = $2729a63c2e56b492$export$adaa4cf7ef1b65be(this, id), tween = schedule.tween;
        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
            tween1 = tween0 = tween;
            for(var i = 0, n = tween1.length; i < n; ++i)if (tween1[i].name === name) {
                tween1 = tween1.slice();
                tween1.splice(i, 1);
                break;
            }
        }
        schedule.tween = tween1;
    };
}
function $52dfce068d21d67f$var$tweenFunction(id, name, value) {
    var tween0, tween1;
    if (typeof value !== "function") throw new Error;
    return function() {
        var schedule = $2729a63c2e56b492$export$adaa4cf7ef1b65be(this, id), tween = schedule.tween;
        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
            tween1 = (tween0 = tween).slice();
            for(var t = {
                name: name,
                value: value
            }, i = 0, n = tween1.length; i < n; ++i)if (tween1[i].name === name) {
                tween1[i] = t;
                break;
            }
            if (i === n) tween1.push(t);
        }
        schedule.tween = tween1;
    };
}
function $52dfce068d21d67f$export$2e2bcd8739ae039(name, value) {
    var id = this._id;
    name += "";
    if (arguments.length < 2) {
        var tween = $2729a63c2e56b492$export$3988ae62b71be9a3(this.node(), id).tween;
        for(var i = 0, n = tween.length, t; i < n; ++i){
            if ((t = tween[i]).name === name) return t.value;
        }
        return null;
    }
    return this.each((value == null ? $52dfce068d21d67f$var$tweenRemove : $52dfce068d21d67f$var$tweenFunction)(id, name, value));
}
function $52dfce068d21d67f$export$f78ce6ab10405d82(transition, name, value) {
    var id = transition._id;
    transition.each(function() {
        var schedule = $2729a63c2e56b492$export$adaa4cf7ef1b65be(this, id);
        (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });
    return function(node) {
        return $2729a63c2e56b492$export$3988ae62b71be9a3(node, id).value[name];
    };
}



var $bQdzo = parcelRequire("bQdzo");

function $739171a6e6914ef8$export$2e2bcd8739ae039(a, b) {
    var c;
    return (typeof b === "number" ? $6bbf3b741ac59c64$export$2e2bcd8739ae039 : b instanceof $bQdzo.default ? $b3b0e98d67c64be4$export$2e2bcd8739ae039 : (c = $bQdzo.default(b)) ? (b = c, $b3b0e98d67c64be4$export$2e2bcd8739ae039) : $f5f2fc7c078ff427$export$2e2bcd8739ae039)(a, b);
}


function $dd900aa120b3ceb6$var$attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function $dd900aa120b3ceb6$var$attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function $dd900aa120b3ceb6$var$attrConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = this.getAttribute(name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function $dd900aa120b3ceb6$var$attrConstantNS(fullname, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = this.getAttributeNS(fullname.space, fullname.local);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function $dd900aa120b3ceb6$var$attrFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttribute(name);
        string0 = this.getAttribute(name);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function $dd900aa120b3ceb6$var$attrFunctionNS(fullname, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
        string0 = this.getAttributeNS(fullname.space, fullname.local);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function $dd900aa120b3ceb6$export$2e2bcd8739ae039(name, value) {
    var fullname = $1fCt1.default(name), i = fullname === "transform" ? $0fd7c676cbf0f981$export$da8cba906d64c082 : $739171a6e6914ef8$export$2e2bcd8739ae039;
    return this.attrTween(name, typeof value === "function" ? (fullname.local ? $dd900aa120b3ceb6$var$attrFunctionNS : $dd900aa120b3ceb6$var$attrFunction)(fullname, i, $52dfce068d21d67f$export$f78ce6ab10405d82(this, "attr." + name, value)) : value == null ? (fullname.local ? $dd900aa120b3ceb6$var$attrRemoveNS : $dd900aa120b3ceb6$var$attrRemove)(fullname) : (fullname.local ? $dd900aa120b3ceb6$var$attrConstantNS : $dd900aa120b3ceb6$var$attrConstant)(fullname, i, value));
}



var $1fCt1 = parcelRequire("1fCt1");
function $ebd00ad4e06a162b$var$attrInterpolate(name, i) {
    return function(t) {
        this.setAttribute(name, i.call(this, t));
    };
}
function $ebd00ad4e06a162b$var$attrInterpolateNS(fullname, i) {
    return function(t) {
        this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
    };
}
function $ebd00ad4e06a162b$var$attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && $ebd00ad4e06a162b$var$attrInterpolateNS(fullname, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function $ebd00ad4e06a162b$var$attrTween(name, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && $ebd00ad4e06a162b$var$attrInterpolate(name, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function $ebd00ad4e06a162b$export$2e2bcd8739ae039(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    var fullname = $1fCt1.default(name);
    return this.tween(key, (fullname.local ? $ebd00ad4e06a162b$var$attrTweenNS : $ebd00ad4e06a162b$var$attrTween)(fullname, value));
}



function $e7820cdb0d6ff0d6$var$delayFunction(id, value) {
    return function() {
        $2729a63c2e56b492$export$2cd8252107eb640b(this, id).delay = +value.apply(this, arguments);
    };
}
function $e7820cdb0d6ff0d6$var$delayConstant(id, value) {
    return value = +value, function() {
        $2729a63c2e56b492$export$2cd8252107eb640b(this, id).delay = value;
    };
}
function $e7820cdb0d6ff0d6$export$2e2bcd8739ae039(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? $e7820cdb0d6ff0d6$var$delayFunction : $e7820cdb0d6ff0d6$var$delayConstant)(id, value)) : $2729a63c2e56b492$export$3988ae62b71be9a3(this.node(), id).delay;
}



function $41dfbbc6c719cbea$var$durationFunction(id, value) {
    return function() {
        $2729a63c2e56b492$export$adaa4cf7ef1b65be(this, id).duration = +value.apply(this, arguments);
    };
}
function $41dfbbc6c719cbea$var$durationConstant(id, value) {
    return value = +value, function() {
        $2729a63c2e56b492$export$adaa4cf7ef1b65be(this, id).duration = value;
    };
}
function $41dfbbc6c719cbea$export$2e2bcd8739ae039(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? $41dfbbc6c719cbea$var$durationFunction : $41dfbbc6c719cbea$var$durationConstant)(id, value)) : $2729a63c2e56b492$export$3988ae62b71be9a3(this.node(), id).duration;
}



function $56d80ece5d5870a4$var$easeConstant(id, value) {
    if (typeof value !== "function") throw new Error;
    return function() {
        $2729a63c2e56b492$export$adaa4cf7ef1b65be(this, id).ease = value;
    };
}
function $56d80ece5d5870a4$export$2e2bcd8739ae039(value) {
    var id = this._id;
    return arguments.length ? this.each($56d80ece5d5870a4$var$easeConstant(id, value)) : $2729a63c2e56b492$export$3988ae62b71be9a3(this.node(), id).ease;
}



function $d55e56fab14837b1$var$easeVarying(id, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (typeof v !== "function") throw new Error;
        $2729a63c2e56b492$export$adaa4cf7ef1b65be(this, id).ease = v;
    };
}
function $d55e56fab14837b1$export$2e2bcd8739ae039(value) {
    if (typeof value !== "function") throw new Error;
    return this.each($d55e56fab14837b1$var$easeVarying(this._id, value));
}



var $kXv5m = parcelRequire("kXv5m");

function $550a92d7477d8087$export$2e2bcd8739ae039(match) {
    if (typeof match !== "function") match = $kXv5m.default(match);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i)if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
    }
    return new $62286b1f3c4e6372$export$be58926105124dd4(subgroups, this._parents, this._name, this._id);
}



function $b7f41fd032fbaebe$export$2e2bcd8739ae039(transition) {
    if (transition._id !== this._id) throw new Error;
    for(var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
        for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group0[i] || group1[i]) merge[i] = node;
    }
    for(; j < m0; ++j)merges[j] = groups0[j];
    return new $62286b1f3c4e6372$export$be58926105124dd4(merges, this._parents, this._name, this._id);
}



function $79e9244a6a18b819$var$start(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t) {
        var i = t.indexOf(".");
        if (i >= 0) t = t.slice(0, i);
        return !t || t === "start";
    });
}
function $79e9244a6a18b819$var$onFunction(id, name, listener) {
    var on0, on1, sit = $79e9244a6a18b819$var$start(name) ? $2729a63c2e56b492$export$2cd8252107eb640b : $2729a63c2e56b492$export$adaa4cf7ef1b65be;
    return function() {
        var schedule = sit(this, id), on = schedule.on;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
        schedule.on = on1;
    };
}
function $79e9244a6a18b819$export$2e2bcd8739ae039(name, listener) {
    var id = this._id;
    return arguments.length < 2 ? $2729a63c2e56b492$export$3988ae62b71be9a3(this.node(), id).on.on(name) : this.each($79e9244a6a18b819$var$onFunction(id, name, listener));
}


function $497ea37c7340a420$var$removeFunction(id) {
    return function() {
        var parent = this.parentNode;
        for(var i in this.__transition)if (+i !== id) return;
        if (parent) parent.removeChild(this);
    };
}
function $497ea37c7340a420$export$2e2bcd8739ae039() {
    return this.on("end.remove", $497ea37c7340a420$var$removeFunction(this._id));
}



var $6vEBI = parcelRequire("6vEBI");


function $d5ba9856ab9f63c8$export$2e2bcd8739ae039(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function") select = $6vEBI.default(select);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i)if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
            if ("__data__" in node) subnode.__data__ = node.__data__;
            subgroup[i] = subnode;
            $2729a63c2e56b492$export$2e2bcd8739ae039(subgroup[i], name, id, i, subgroup, $2729a63c2e56b492$export$3988ae62b71be9a3(node, id));
        }
    }
    return new $62286b1f3c4e6372$export$be58926105124dd4(subgroups, this._parents, name, id);
}



var $b2GMI = parcelRequire("b2GMI");


function $0579104d91a5c6df$export$2e2bcd8739ae039(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function") select = $b2GMI.default(select);
    for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            for(var children = select.call(node, node.__data__, i, group), child, inherit = $2729a63c2e56b492$export$3988ae62b71be9a3(node, id), k = 0, l = children.length; k < l; ++k)if (child = children[k]) $2729a63c2e56b492$export$2e2bcd8739ae039(child, name, id, k, children, inherit);
            subgroups.push(children);
            parents.push(node);
        }
    }
    return new $62286b1f3c4e6372$export$be58926105124dd4(subgroups, parents, name, id);
}



var $cT0Fo = parcelRequire("cT0Fo");
var $136dc42d4e51ca65$var$Selection = $cT0Fo.default.prototype.constructor;
function $136dc42d4e51ca65$export$2e2bcd8739ae039() {
    return new $136dc42d4e51ca65$var$Selection(this._groups, this._parents);
}




var $3RTiU = parcelRequire("3RTiU");



function $0185c167a9dc86b4$var$styleNull(name, interpolate) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = $3RTiU.styleValue(this, name), string1 = (this.style.removeProperty(name), $3RTiU.styleValue(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
}
function $0185c167a9dc86b4$var$styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function $0185c167a9dc86b4$var$styleConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = $3RTiU.styleValue(this, name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function $0185c167a9dc86b4$var$styleFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = $3RTiU.styleValue(this, name), value1 = value(this), string1 = value1 + "";
        if (value1 == null) string1 = value1 = (this.style.removeProperty(name), $3RTiU.styleValue(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function $0185c167a9dc86b4$var$styleMaybeRemove(id, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
    return function() {
        var schedule = $2729a63c2e56b492$export$adaa4cf7ef1b65be(this, id), on = schedule.on, listener = schedule.value[key] == null ? remove || (remove = $0185c167a9dc86b4$var$styleRemove(name)) : undefined;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
        schedule.on = on1;
    };
}
function $0185c167a9dc86b4$export$2e2bcd8739ae039(name, value, priority) {
    var i = (name += "") === "transform" ? $0fd7c676cbf0f981$export$56bec7123bb3589a : $739171a6e6914ef8$export$2e2bcd8739ae039;
    return value == null ? this.styleTween(name, $0185c167a9dc86b4$var$styleNull(name, i)).on("end.style." + name, $0185c167a9dc86b4$var$styleRemove(name)) : typeof value === "function" ? this.styleTween(name, $0185c167a9dc86b4$var$styleFunction(name, i, $52dfce068d21d67f$export$f78ce6ab10405d82(this, "style." + name, value))).each($0185c167a9dc86b4$var$styleMaybeRemove(this._id, name)) : this.styleTween(name, $0185c167a9dc86b4$var$styleConstant(name, i, value), priority).on("end.style." + name, null);
}


function $8accb53f3b0c6a2e$var$styleInterpolate(name, i, priority) {
    return function(t) {
        this.style.setProperty(name, i.call(this, t), priority);
    };
}
function $8accb53f3b0c6a2e$var$styleTween(name, value, priority) {
    var t, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t = (i0 = i) && $8accb53f3b0c6a2e$var$styleInterpolate(name, i, priority);
        return t;
    }
    tween._value = value;
    return tween;
}
function $8accb53f3b0c6a2e$export$2e2bcd8739ae039(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, $8accb53f3b0c6a2e$var$styleTween(name, value, priority == null ? "" : priority));
}



function $8ade7e2183b7c53f$var$textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function $8ade7e2183b7c53f$var$textFunction(value) {
    return function() {
        var value1 = value(this);
        this.textContent = value1 == null ? "" : value1;
    };
}
function $8ade7e2183b7c53f$export$2e2bcd8739ae039(value) {
    return this.tween("text", typeof value === "function" ? $8ade7e2183b7c53f$var$textFunction($52dfce068d21d67f$export$f78ce6ab10405d82(this, "text", value)) : $8ade7e2183b7c53f$var$textConstant(value == null ? "" : value + ""));
}


function $048c97fa30f3c053$var$textInterpolate(i) {
    return function(t) {
        this.textContent = i.call(this, t);
    };
}
function $048c97fa30f3c053$var$textTween(value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && $048c97fa30f3c053$var$textInterpolate(i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function $048c97fa30f3c053$export$2e2bcd8739ae039(value) {
    var key = "text";
    if (arguments.length < 1) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, $048c97fa30f3c053$var$textTween(value));
}




function $0a801516f7ce60a7$export$2e2bcd8739ae039() {
    var name = this._name, id0 = this._id, id1 = $62286b1f3c4e6372$export$9ffd10a3fbdc175b();
    for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            var inherit = $2729a63c2e56b492$export$3988ae62b71be9a3(node, id0);
            $2729a63c2e56b492$export$2e2bcd8739ae039(node, name, id1, i, group, {
                time: inherit.time + inherit.delay + inherit.duration,
                delay: 0,
                duration: inherit.duration,
                ease: inherit.ease
            });
        }
    }
    return new $62286b1f3c4e6372$export$be58926105124dd4(groups, this._parents, name, id1);
}




function $80e9b7fdaace6ecb$export$2e2bcd8739ae039() {
    var on0, on1, that = this, id = that._id, size = that.size();
    return new Promise(function(resolve, reject) {
        var cancel = {
            value: reject
        }, end = {
            value: function() {
                if (--size === 0) resolve();
            }
        };
        that.each(function() {
            var schedule = $2729a63c2e56b492$export$adaa4cf7ef1b65be(this, id), on = schedule.on;
            // If this node shared a dispatch with the previous node,
            // just assign the updated shared dispatch and we’re done!
            // Otherwise, copy-on-write.
            if (on !== on0) {
                on1 = (on0 = on).copy();
                on1._.cancel.push(cancel);
                on1._.interrupt.push(cancel);
                on1._.end.push(end);
            }
            schedule.on = on1;
        });
        // The selection was empty, resolve end immediately
        if (size === 0) resolve();
    });
}


var $62286b1f3c4e6372$var$id = 0;
function $62286b1f3c4e6372$export$be58926105124dd4(groups, parents, name, id) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id;
}
function $62286b1f3c4e6372$export$2e2bcd8739ae039(name) {
    return $cT0Fo.default().transition(name);
}
function $62286b1f3c4e6372$export$9ffd10a3fbdc175b() {
    return ++$62286b1f3c4e6372$var$id;
}
var $62286b1f3c4e6372$var$selection_prototype = $cT0Fo.default.prototype;
$62286b1f3c4e6372$export$be58926105124dd4.prototype = $62286b1f3c4e6372$export$2e2bcd8739ae039.prototype = {
    constructor: $62286b1f3c4e6372$export$be58926105124dd4,
    select: $d5ba9856ab9f63c8$export$2e2bcd8739ae039,
    selectAll: $0579104d91a5c6df$export$2e2bcd8739ae039,
    filter: $550a92d7477d8087$export$2e2bcd8739ae039,
    merge: $b7f41fd032fbaebe$export$2e2bcd8739ae039,
    selection: $136dc42d4e51ca65$export$2e2bcd8739ae039,
    transition: $0a801516f7ce60a7$export$2e2bcd8739ae039,
    call: $62286b1f3c4e6372$var$selection_prototype.call,
    nodes: $62286b1f3c4e6372$var$selection_prototype.nodes,
    node: $62286b1f3c4e6372$var$selection_prototype.node,
    size: $62286b1f3c4e6372$var$selection_prototype.size,
    empty: $62286b1f3c4e6372$var$selection_prototype.empty,
    each: $62286b1f3c4e6372$var$selection_prototype.each,
    on: $79e9244a6a18b819$export$2e2bcd8739ae039,
    attr: $dd900aa120b3ceb6$export$2e2bcd8739ae039,
    attrTween: $ebd00ad4e06a162b$export$2e2bcd8739ae039,
    style: $0185c167a9dc86b4$export$2e2bcd8739ae039,
    styleTween: $8accb53f3b0c6a2e$export$2e2bcd8739ae039,
    text: $8ade7e2183b7c53f$export$2e2bcd8739ae039,
    textTween: $048c97fa30f3c053$export$2e2bcd8739ae039,
    remove: $497ea37c7340a420$export$2e2bcd8739ae039,
    tween: $52dfce068d21d67f$export$2e2bcd8739ae039,
    delay: $e7820cdb0d6ff0d6$export$2e2bcd8739ae039,
    duration: $41dfbbc6c719cbea$export$2e2bcd8739ae039,
    ease: $56d80ece5d5870a4$export$2e2bcd8739ae039,
    easeVarying: $d55e56fab14837b1$export$2e2bcd8739ae039,
    end: $80e9b7fdaace6ecb$export$2e2bcd8739ae039,
    [Symbol.iterator]: $62286b1f3c4e6372$var$selection_prototype[Symbol.iterator]
};



function $df71cddab275a317$export$b1a09cb1b71f86aa(t) {
    return t * t * t;
}
function $df71cddab275a317$export$68d528839c701b6(t) {
    return --t * t * t + 1;
}
function $df71cddab275a317$export$89238d3bc79d3ada(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}




var $9c76f721c32901bb$var$defaultTiming = {
    time: null,
    delay: 0,
    duration: 250,
    ease: $df71cddab275a317$export$89238d3bc79d3ada
};
function $9c76f721c32901bb$var$inherit(node, id) {
    var timing;
    while(!(timing = node.__transition) || !(timing = timing[id])){
        if (!(node = node.parentNode)) throw new Error(`transition ${id} not found`);
    }
    return timing;
}
function $9c76f721c32901bb$export$2e2bcd8739ae039(name) {
    var id, timing;
    if (name instanceof $62286b1f3c4e6372$export$be58926105124dd4) id = name._id, name = name._name;
    else id = $62286b1f3c4e6372$export$9ffd10a3fbdc175b(), (timing = $9c76f721c32901bb$var$defaultTiming).time = $ed96d65d53cb459c$export$461939dd4422153(), name = name == null ? null : name + "";
    for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) $2729a63c2e56b492$export$2e2bcd8739ae039(node, name, id, i, group, timing || $9c76f721c32901bb$var$inherit(node, id));
    }
    return new $62286b1f3c4e6372$export$be58926105124dd4(groups, this._parents, name, id);
}


$cT0Fo.default.prototype.interrupt = $df5781c7e2b8089b$export$2e2bcd8739ae039;
$cT0Fo.default.prototype.transition = $9c76f721c32901bb$export$2e2bcd8739ae039;





var $f21e195f72652136$var$root = [
    null
];
function $f21e195f72652136$export$2e2bcd8739ae039(node, name) {
    var schedules = node.__transition, schedule, i;
    if (schedules) {
        name = name == null ? null : name + "";
        for(i in schedules){
            if ((schedule = schedules[i]).state > $2729a63c2e56b492$export$584530fe98d14a84 && schedule.name === name) return new $62286b1f3c4e6372$export$be58926105124dd4([
                [
                    node
                ]
            ], $f21e195f72652136$var$root, name, +i);
        }
    }
    return null;
}





var $835cd767e02a94a0$export$2e2bcd8739ae039 = (x)=>()=>x
;


function $7b694bab8ce4fdae$export$2e2bcd8739ae039(type, { sourceEvent: sourceEvent , target: target , transform: transform , dispatch: dispatch  }) {
    Object.defineProperties(this, {
        type: {
            value: type,
            enumerable: true,
            configurable: true
        },
        sourceEvent: {
            value: sourceEvent,
            enumerable: true,
            configurable: true
        },
        target: {
            value: target,
            enumerable: true,
            configurable: true
        },
        transform: {
            value: transform,
            enumerable: true,
            configurable: true
        },
        _: {
            value: dispatch
        }
    });
}


function $8df456ec5f4f6432$export$563a914cafbdc389(k, x, y) {
    this.k = k;
    this.x = x;
    this.y = y;
}
$8df456ec5f4f6432$export$563a914cafbdc389.prototype = {
    constructor: $8df456ec5f4f6432$export$563a914cafbdc389,
    scale: function(k) {
        return k === 1 ? this : new $8df456ec5f4f6432$export$563a914cafbdc389(this.k * k, this.x, this.y);
    },
    translate: function(x, y) {
        return x === 0 & y === 0 ? this : new $8df456ec5f4f6432$export$563a914cafbdc389(this.k, this.x + this.k * x, this.y + this.k * y);
    },
    apply: function(point) {
        return [
            point[0] * this.k + this.x,
            point[1] * this.k + this.y
        ];
    },
    applyX: function(x) {
        return x * this.k + this.x;
    },
    applyY: function(y) {
        return y * this.k + this.y;
    },
    invert: function(location) {
        return [
            (location[0] - this.x) / this.k,
            (location[1] - this.y) / this.k
        ];
    },
    invertX: function(x) {
        return (x - this.x) / this.k;
    },
    invertY: function(y) {
        return (y - this.y) / this.k;
    },
    rescaleX: function(x) {
        return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
    },
    rescaleY: function(y) {
        return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
    },
    toString: function() {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
};
var $8df456ec5f4f6432$export$f0954fd7d5368655 = new $8df456ec5f4f6432$export$563a914cafbdc389(1, 0, 0);
$8df456ec5f4f6432$export$2e2bcd8739ae039.prototype = $8df456ec5f4f6432$export$563a914cafbdc389.prototype;
function $8df456ec5f4f6432$export$2e2bcd8739ae039(node) {
    while(!node.__zoom)if (!(node = node.parentNode)) return $8df456ec5f4f6432$export$f0954fd7d5368655;
    return node.__zoom;
}


function $1bc3c6e3c43b51ab$export$2e2561858db9bf47(event) {
    event.stopImmediatePropagation();
}
function $1bc3c6e3c43b51ab$export$2e2bcd8739ae039(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
}


// Ignore right-click, since that should open the context menu.
// except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
function $893ab0541a6b7afd$var$defaultFilter(event) {
    return (!event.ctrlKey || event.type === 'wheel') && !event.button;
}
function $893ab0541a6b7afd$var$defaultExtent() {
    var e = this;
    if (e instanceof SVGElement) {
        e = e.ownerSVGElement || e;
        if (e.hasAttribute("viewBox")) {
            e = e.viewBox.baseVal;
            return [
                [
                    e.x,
                    e.y
                ],
                [
                    e.x + e.width,
                    e.y + e.height
                ]
            ];
        }
        return [
            [
                0,
                0
            ],
            [
                e.width.baseVal.value,
                e.height.baseVal.value
            ]
        ];
    }
    return [
        [
            0,
            0
        ],
        [
            e.clientWidth,
            e.clientHeight
        ]
    ];
}
function $893ab0541a6b7afd$var$defaultTransform() {
    return this.__zoom || $8df456ec5f4f6432$export$f0954fd7d5368655;
}
function $893ab0541a6b7afd$var$defaultWheelDelta(event) {
    return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
}
function $893ab0541a6b7afd$var$defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
}
function $893ab0541a6b7afd$var$defaultConstrain(transform, extent, translateExtent) {
    var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
    return transform.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
}
function $893ab0541a6b7afd$export$2e2bcd8739ae039() {
    var filter = $893ab0541a6b7afd$var$defaultFilter, extent1 = $893ab0541a6b7afd$var$defaultExtent, constrain = $893ab0541a6b7afd$var$defaultConstrain, wheelDelta = $893ab0541a6b7afd$var$defaultWheelDelta, touchable = $893ab0541a6b7afd$var$defaultTouchable, scaleExtent = [
        0,
        Infinity
    ], translateExtent = [
        [
            -Infinity,
            -Infinity
        ],
        [
            Infinity,
            Infinity
        ]
    ], duration = 250, interpolate = $8e2cddf6ed67e451$export$2e2bcd8739ae039, listeners = $f75b872a5c91f6b0$export$2e2bcd8739ae039("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
    function zoom(selection) {
        selection.property("__zoom", $893ab0541a6b7afd$var$defaultTransform).on("wheel.zoom", wheeled).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    zoom.transform = function(collection, transform, point, event) {
        var selection = collection.selection ? collection.selection() : collection;
        selection.property("__zoom", $893ab0541a6b7afd$var$defaultTransform);
        if (collection !== selection) schedule(collection, transform, point, event);
        else selection.interrupt().each(function() {
            gesture(this, arguments).event(event).start().zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform).end();
        });
    };
    zoom.scaleBy = function(selection, k, p, event) {
        zoom.scaleTo(selection, function() {
            var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
            return k0 * k1;
        }, p, event);
    };
    zoom.scaleTo = function(selection, k, p, event) {
        zoom.transform(selection, function() {
            var e = extent1.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
            return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
        }, p, event);
    };
    zoom.translateBy = function(selection, x, y, event) {
        zoom.transform(selection, function() {
            return constrain(this.__zoom.translate(typeof x === "function" ? x.apply(this, arguments) : x, typeof y === "function" ? y.apply(this, arguments) : y), extent1.apply(this, arguments), translateExtent);
        }, null, event);
    };
    zoom.translateTo = function(selection, x, y, p, event) {
        zoom.transform(selection, function() {
            var e = extent1.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
            return constrain($8df456ec5f4f6432$export$f0954fd7d5368655.translate(p0[0], p0[1]).scale(t.k).translate(typeof x === "function" ? -x.apply(this, arguments) : -x, typeof y === "function" ? -y.apply(this, arguments) : -y), e, translateExtent);
        }, p, event);
    };
    function scale(transform, k) {
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
        return k === transform.k ? transform : new $8df456ec5f4f6432$export$563a914cafbdc389(k, transform.x, transform.y);
    }
    function translate(transform, p0, p1) {
        var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
        return x === transform.x && y === transform.y ? transform : new $8df456ec5f4f6432$export$563a914cafbdc389(transform.k, x, y);
    }
    function centroid(extent) {
        return [
            (+extent[0][0] + +extent[1][0]) / 2,
            (+extent[0][1] + +extent[1][1]) / 2
        ];
    }
    function schedule(transition, transform, point, event) {
        transition.on("start.zoom", function() {
            gesture(this, arguments).event(event).start();
        }).on("interrupt.zoom end.zoom", function() {
            gesture(this, arguments).event(event).end();
        }).tween("zoom", function() {
            var that = this, args = arguments, g = gesture(that, args).event(event), e = extent1.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform === "function" ? transform.apply(that, args) : transform, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
            return function(t) {
                if (t === 1) t = b; // Avoid rounding error on end.
                else {
                    var l = i(t), k = w / l[2];
                    t = new $8df456ec5f4f6432$export$563a914cafbdc389(k, p[0] - l[0] * k, p[1] - l[1] * k);
                }
                g.zoom(null, t);
            };
        });
    }
    function gesture(that, args, clean) {
        return !clean && that.__zooming || new Gesture(that, args);
    }
    function Gesture(that, args) {
        this.that = that;
        this.args = args;
        this.active = 0;
        this.sourceEvent = null;
        this.extent = extent1.apply(that, args);
        this.taps = 0;
    }
    Gesture.prototype = {
        event: function(event) {
            if (event) this.sourceEvent = event;
            return this;
        },
        start: function() {
            if (++this.active === 1) {
                this.that.__zooming = this;
                this.emit("start");
            }
            return this;
        },
        zoom: function(key, transform) {
            if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
            if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
            if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
            this.that.__zoom = transform;
            this.emit("zoom");
            return this;
        },
        end: function() {
            if (--this.active === 0) {
                delete this.that.__zooming;
                this.emit("end");
            }
            return this;
        },
        emit: function(type) {
            var d = $b3K6t.default(this.that).datum();
            listeners.call(type, this.that, new $7b694bab8ce4fdae$export$2e2bcd8739ae039(type, {
                sourceEvent: this.sourceEvent,
                target: zoom,
                type: type,
                transform: this.that.__zoom,
                dispatch: listeners
            }), d);
        }
    };
    function wheeled(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = $aMKaC.default(event);
        // If the mouse is in the same location as before, reuse it.
        // If there were recent wheel events, reset the wheel idle timeout.
        if (g.wheel) {
            if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) g.mouse[1] = t.invert(g.mouse[0] = p);
            clearTimeout(g.wheel);
        } else if (t.k === k) return;
        else {
            g.mouse = [
                p,
                t.invert(p)
            ];
            $98826eb4e4099364$export$2e2bcd8739ae039(this);
            g.start();
        }
        $1bc3c6e3c43b51ab$export$2e2bcd8739ae039(event);
        g.wheel = setTimeout(wheelidled, wheelDelay);
        g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
        function wheelidled() {
            g.wheel = null;
            g.end();
        }
    }
    function mousedowned(event1, ...args) {
        if (touchending || !filter.apply(this, arguments)) return;
        var g = gesture(this, args, true).event(event1), v = $b3K6t.default(event1.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = $aMKaC.default(event1, currentTarget), currentTarget = event1.currentTarget, x0 = event1.clientX, y0 = event1.clientY;
        $8370cad99eefb5a6$export$2e2bcd8739ae039(event1.view);
        $1bc3c6e3c43b51ab$export$2e2561858db9bf47(event1);
        g.mouse = [
            p,
            this.__zoom.invert(p)
        ];
        $98826eb4e4099364$export$2e2bcd8739ae039(this);
        g.start();
        function mousemoved(event) {
            $1bc3c6e3c43b51ab$export$2e2bcd8739ae039(event);
            if (!g.moved) {
                var dx = event.clientX - x0, dy = event.clientY - y0;
                g.moved = dx * dx + dy * dy > clickDistance2;
            }
            g.event(event).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = $aMKaC.default(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
        }
        function mouseupped(event) {
            v.on("mousemove.zoom mouseup.zoom", null);
            $8370cad99eefb5a6$export$833237748009e1e1(event.view, g.moved);
            $1bc3c6e3c43b51ab$export$2e2bcd8739ae039(event);
            g.event(event).end();
        }
    }
    function dblclicked(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var t0 = this.__zoom, p0 = $aMKaC.default(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent1.apply(this, args), translateExtent);
        $1bc3c6e3c43b51ab$export$2e2bcd8739ae039(event);
        if (duration > 0) $b3K6t.default(this).transition().duration(duration).call(schedule, t1, p0, event);
        else $b3K6t.default(this).call(zoom.transform, t1, p0, event);
    }
    function touchstarted(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
        $1bc3c6e3c43b51ab$export$2e2561858db9bf47(event);
        for(i = 0; i < n; ++i){
            t = touches[i], p = $aMKaC.default(t, this);
            p = [
                p,
                this.__zoom.invert(p),
                t.identifier
            ];
            if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
            else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
        }
        if (touchstarting) touchstarting = clearTimeout(touchstarting);
        if (started) {
            if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() {
                touchstarting = null;
            }, touchDelay);
            $98826eb4e4099364$export$2e2bcd8739ae039(this);
            g.start();
        }
    }
    function touchmoved(event, ...args) {
        if (!this.__zooming) return;
        var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
        $1bc3c6e3c43b51ab$export$2e2bcd8739ae039(event);
        for(i = 0; i < n; ++i){
            t = touches[i], p = $aMKaC.default(t, this);
            if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
            else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
        }
        t = g.that.__zoom;
        if (g.touch1) {
            var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
            t = scale(t, Math.sqrt(dp / dl));
            p = [
                (p0[0] + p1[0]) / 2,
                (p0[1] + p1[1]) / 2
            ];
            l = [
                (l0[0] + l1[0]) / 2,
                (l0[1] + l1[1]) / 2
            ];
        } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
        else return;
        g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
    }
    function touchended(event, ...args) {
        if (!this.__zooming) return;
        var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
        $1bc3c6e3c43b51ab$export$2e2561858db9bf47(event);
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() {
            touchending = null;
        }, touchDelay);
        for(i = 0; i < n; ++i){
            t = touches[i];
            if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
            else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
        }
        if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
        if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
        else {
            g.end();
            // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
            if (g.taps === 2) {
                t = $aMKaC.default(t, this);
                if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
                    var p = $b3K6t.default(this).on("dblclick.zoom");
                    if (p) p.apply(this, arguments);
                }
            }
        }
    }
    zoom.wheelDelta = function(_) {
        return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : $835cd767e02a94a0$export$2e2bcd8739ae039(+_), zoom) : wheelDelta;
    };
    zoom.filter = function(_) {
        return arguments.length ? (filter = typeof _ === "function" ? _ : $835cd767e02a94a0$export$2e2bcd8739ae039(!!_), zoom) : filter;
    };
    zoom.touchable = function(_) {
        return arguments.length ? (touchable = typeof _ === "function" ? _ : $835cd767e02a94a0$export$2e2bcd8739ae039(!!_), zoom) : touchable;
    };
    zoom.extent = function(_) {
        return arguments.length ? (extent1 = typeof _ === "function" ? _ : $835cd767e02a94a0$export$2e2bcd8739ae039([
            [
                +_[0][0],
                +_[0][1]
            ],
            [
                +_[1][0],
                +_[1][1]
            ]
        ]), zoom) : extent1;
    };
    zoom.scaleExtent = function(_) {
        return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [
            scaleExtent[0],
            scaleExtent[1]
        ];
    };
    zoom.translateExtent = function(_) {
        return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [
            [
                translateExtent[0][0],
                translateExtent[0][1]
            ],
            [
                translateExtent[1][0],
                translateExtent[1][1]
            ]
        ];
    };
    zoom.constrain = function(_) {
        return arguments.length ? (constrain = _, zoom) : constrain;
    };
    zoom.duration = function(_) {
        return arguments.length ? (duration = +_, zoom) : duration;
    };
    zoom.interpolate = function(_) {
        return arguments.length ? (interpolate = _, zoom) : interpolate;
    };
    zoom.on = function() {
        var value = listeners.on.apply(listeners, arguments);
        return value === listeners ? zoom : value;
    };
    zoom.clickDistance = function(_) {
        return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
    };
    zoom.tapDistance = function(_) {
        return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
    };
    return zoom;
}






var $b3K6t = parcelRequire("b3K6t");
var $aMKaC = parcelRequire("aMKaC");


const $0e7121ef4d9042bf$var$events_1 = $0e7121ef4d9042bf$var$__importDefault($5sQNY$events);

const $0e7121ef4d9042bf$var$annotations_1 = $0e7121ef4d9042bf$var$__importDefault((parcelRequire("29jpn")));

const $0e7121ef4d9042bf$var$tip_1 = $0e7121ef4d9042bf$var$__importDefault((parcelRequire("gL8VM")));

const $0e7121ef4d9042bf$var$helpers_1 = $0e7121ef4d9042bf$var$__importDefault((parcelRequire("5nm2c")));

const $0e7121ef4d9042bf$var$datum_defaults_1 = $0e7121ef4d9042bf$var$__importDefault((parcelRequire("x2YN5")));

const $0e7121ef4d9042bf$var$globals_1 = $0e7121ef4d9042bf$var$__importDefault((parcelRequire("c5O2L")));

const $0e7121ef4d9042bf$var$graphTypes = $0e7121ef4d9042bf$var$__importStar((parcelRequire("8VpFR")));

const $0e7121ef4d9042bf$var$$eval = $0e7121ef4d9042bf$var$__importStar((parcelRequire("flWYj")));
// @ts-ignore-file
// issue: https://github.com/maurizzzio/function-plot/issues/6
// solution: the line type is selecting the derivative line when the content is re-drawn, then when the
// derivative was redrawn an already selected line (by the line type) was used thus making a single line
// disappear from the graph, to avoid the selection of the derivative line the selector needs to
// work only for immediate children which is done with `:scope >`
// src: http://stackoverflow.com/questions/6481612/queryselector-search-immediate-children
/*eslint-disable */ if (typeof window !== 'undefined') (function(doc, proto) {
    try {
        doc.querySelector(':scope body');
    } catch (err) {
        [
            'querySelector',
            'querySelectorAll'
        ].forEach(function(method) {
            // @ts-ignore
            const native = proto[method];
            // @ts-ignore
            proto[method] = function(selectors) {
                if (/(^|,)\s*:scope/.test(selectors)) {
                    const id = this.id; // remember current element id
                    this.id = 'ID_' + Date.now(); // assign new unique id
                    selectors = selectors.replace(/((^|,)\s*):scope/g, '$1#' + this.id); // replace :scope with #ID
                    // @ts-ignore
                    const result = doc[method](selectors);
                    this.id = id; // restore previous id
                    return result;
                } else return native.call(this, selectors); // use native code for other selectors
            };
        });
    }
})(window.document, Element.prototype); // @ts-ignore-end
 /* eslint-enable */ 


const $0e7121ef4d9042bf$var$d3Scale = {
    linear: $6332e12f180c8c11$export$2e2bcd8739ae039,
    log: $7bf9b93fdee22b95$export$2e2bcd8739ae039
};
/**
 * An instance can subscribe to any of the following events by doing `instance.on([eventName], callback)`,
 * events can be triggered by doing `instance.emit([eventName][, params])`
 *
 * - `mouseover` fired whenever the mouse is over the canvas
 * - `mousemove` fired whenever the mouse is moved inside the canvas, callback params: a single object `{x: number, y: number}` (in canvas space
 coordinates)
 * - `mouseout` fired whenever the mouse is moved outside the canvas
 * - `before:draw` fired before drawing all the graphs
 * - `after:draw` fired after drawing all the graphs
 * - `zoom:scaleUpdate` fired whenever the scale of another graph is updated, callback params `xScale`, `yScale`
 (x-scale and y-scale of another graph whose scales were updated)
 * - `tip:update` fired whenever the tip position is updated, callback params `{x, y, index}` (in canvas
 space coordinates, `index` is the index of the graph where the tip is on top of)
 * - `eval` fired whenever the sampler evaluates a function, callback params `data` (an array of segment/points),
 `index` (the index of datum in the `data` array), `isHelper` (true if the data is created for a helper e.g.
 for the derivative/secant)
 *
 * The following events are dispatched to all the linked graphs
 *
 * - `all:mouseover` same as `mouseover` but it's dispatched in each linked graph
 * - `all:mousemove` same as `mousemove` but it's dispatched in each linked graph
 * - `all:mouseout` same as `mouseout` but it's dispatched in each linked graph
 * - `all:zoom:scaleUpdate` same as `zoom:scaleUpdate` but it's dispatched in each linked graph
 * - `all:zoom` fired whenever there's scaling/translation on the graph, dispatched on all the linked graphs
 */ class $0e7121ef4d9042bf$var$Chart extends $0e7121ef4d9042bf$var$events_1.default.EventEmitter {
    constructor(options){
        super();
        const n = Math.random();
        const letter = String.fromCharCode(Math.floor(n * 26) + 97);
        this.options = options;
        this.id = letter + n.toString(16).substr(2);
        this.options.id = this.id;
        this.markerId = this.id + '-marker';
        $0e7121ef4d9042bf$var$Chart.cache[this.id] = this;
        this.linkedGraphs = [
            this
        ];
        this.meta = {};
        this.setUpEventListeners();
    }
    /**
     * Rebuilds the entire graph from scratch recomputing
     *
     * - the inner width/height
     * - scales/axes
     *
     * After this is done it does a complete redraw of all the datums,
     * if only the datums need to be redrawn call `instance.draw()` instead
     *
     * @returns {Chart}
     */ build() {
        this.internalVars();
        this.drawGraphWrapper();
        return this;
    }
    getDraggableNode() {
        return $b3K6t.default(this.options.target).select('.zoom-and-drag').node();
    }
    /**
     * The draggable container won't change across different instances of Chart,
     * therefore multiple instances will share the draggable container, to avoid dispatching
     * the event from the old instance grab it in runtime with this function
     */ getEmitInstance() {
        let cachedInstance = this;
        const cachedNode = this.getDraggableNode();
        if (cachedNode) cachedInstance = cachedNode.instance;
        return cachedInstance;
    }
    internalVars() {
        const self = this;
        const margin = this.meta.margin = {
            left: 40,
            right: 20,
            top: 20,
            bottom: 20
        };
        // if there's a title make the top margin bigger
        if (this.options.title) this.meta.margin.top = 40;
        // inner width/height
        this.meta.width = (this.options.width || $0e7121ef4d9042bf$var$globals_1.default.DEFAULT_WIDTH) - margin.left - margin.right;
        this.meta.height = (this.options.height || $0e7121ef4d9042bf$var$globals_1.default.DEFAULT_HEIGHT) - margin.top - margin.bottom;
        this.initializeAxes();
    }
    initializeAxes() {
        const self = this;
        const integerFormat = $43f4f8ea9fa6192d$export$d9468344d3651243('~s');
        const floatFormat = $43f4f8ea9fa6192d$export$d9468344d3651243('~e');
        function formatter(d) {
            // take only the decimal part of the number
            const frac = Math.abs(d) - Math.floor(Math.abs(d));
            if (frac > 0) return d.toString();
            else return integerFormat(d);
        }
        function computeYScale(xScale) {
            // assumes that xScale is a linear scale
            const xDiff = xScale[1] - xScale[0];
            return self.meta.height * xDiff / self.meta.width;
        }
        this.options.xAxis = this.options.xAxis || {};
        this.options.xAxis.type = this.options.xAxis.type || 'linear';
        this.options.yAxis = this.options.yAxis || {};
        this.options.yAxis.type = this.options.yAxis.type || 'linear';
        const xDomain = this.meta.xDomain = function(axis) {
            if (axis.domain) return axis.domain;
            if (axis.type === 'linear') {
                const xLimit = 12;
                return [
                    -xLimit / 2,
                    xLimit / 2
                ];
            } else if (axis.type === 'log') return [
                1,
                10
            ];
            throw Error('axis type ' + axis.type + ' unsupported');
        }(this.options.xAxis);
        const yDomain = this.meta.yDomain = function(axis) {
            if (axis.domain) return axis.domain;
            const yLimit = computeYScale(xDomain);
            if (axis.type === 'linear') return [
                -yLimit / 2,
                yLimit / 2
            ];
            else if (axis.type === 'log') return [
                1,
                10
            ];
            throw Error('axis type ' + axis.type + ' unsupported');
        }(this.options.yAxis);
        if (!this.meta.xScale) this.meta.xScale = $0e7121ef4d9042bf$var$d3Scale[this.options.xAxis.type]();
        this.meta.xScale.domain(xDomain).range(this.options.xAxis.invert ? [
            this.meta.width,
            0
        ] : [
            0,
            this.meta.width
        ]);
        if (!this.meta.yScale) this.meta.yScale = $0e7121ef4d9042bf$var$d3Scale[this.options.yAxis.type]();
        this.meta.yScale.domain(yDomain).range(this.options.yAxis.invert ? [
            0,
            this.meta.height
        ] : [
            this.meta.height,
            0
        ]);
        if (!this.meta.xAxis) this.meta.xAxis = $a5f7962cc6e169b2$export$e5cb22533a15e72e(this.meta.xScale);
        this.meta.xAxis.tickSize(this.options.grid ? -this.meta.height : 0).tickFormat(formatter);
        if (!this.meta.yAxis) this.meta.yAxis = $a5f7962cc6e169b2$export$2749afb169a520d2(this.meta.yScale);
        this.meta.yAxis.tickSize(this.options.grid ? -this.meta.width : 0).tickFormat(formatter);
        this.line = $3R9WZ.default().x(function(d) {
            return self.meta.xScale(d[0]);
        }).y(function(d) {
            return self.meta.yScale(d[1]);
        });
    }
    drawGraphWrapper() {
        const root = this.root = $b3K6t.default(this.options.target).selectAll('svg').data([
            this.options
        ]);
        // enter
        this.root.enter = root.enter().append('svg').attr('class', 'function-plot').attr('font-size', this.getFontSize());
        // enter + update
        root.merge(this.root.enter).attr('width', this.meta.width + this.meta.margin.left + this.meta.margin.right).attr('height', this.meta.height + this.meta.margin.top + this.meta.margin.bottom);
        this.buildTitle();
        this.buildLegend();
        this.buildCanvas();
        this.buildClip();
        this.buildAxis();
        this.buildAxisLabel();
        // draw each datum after the wrapper was set up
        this.draw();
        // helper to detect the closest fn to the cursor's current abscissa
        const tip = this.tip = $0e7121ef4d9042bf$var$tip_1.default(Object.assign(this.options.tip || {}, {
            owner: this
        }));
        this.canvas.merge(this.canvas.enter).call(tip);
        this.buildZoomHelper();
        this.setUpPlugins();
    }
    buildTitle() {
        // join
        const selection = this.root.merge(this.root.enter).selectAll('text.title').data(function(d) {
            return [
                d.title
            ].filter(Boolean);
        });
        // enter
        const selectionEnter = selection.enter().append('text');
        selectionEnter.merge(selection).attr('class', 'title').attr('y', this.meta.margin.top / 2).attr('x', this.meta.margin.left + this.meta.width / 2).attr('font-size', 25).attr('text-anchor', 'middle').attr('alignment-baseline', 'middle').text(this.options.title);
        // exit
        selection.exit().remove();
    }
    buildLegend() {
        // enter
        this.root.enter.append('text').attr('class', 'top-right-legend').attr('text-anchor', 'end');
        // update + enter
        this.root.merge(this.root.enter).select('.top-right-legend').attr('y', this.meta.margin.top / 2).attr('x', this.meta.width + this.meta.margin.left);
    }
    buildCanvas() {
        // enter
        const canvas = this.canvas = this.root.merge(this.root.enter).selectAll('.canvas').data(function(d) {
            return [
                d
            ];
        });
        this.canvas.enter = canvas.enter().append('g').attr('class', 'canvas');
    // enter + update
    }
    buildClip() {
        // (so that the functions don't overflow on zoom or drag)
        const id = this.id;
        const defs = this.canvas.enter.append('defs');
        defs.append('clipPath').attr('id', 'function-plot-clip-' + id).append('rect').attr('class', 'clip static-clip');
        // enter + update
        this.canvas.merge(this.canvas.enter).selectAll('.clip').attr('width', this.meta.width).attr('height', this.meta.height);
        // marker clip (for vectors)
        defs.append('clipPath').append('marker').attr('id', this.markerId).attr('viewBox', '0 -5 10 10').attr('refX', 10).attr('markerWidth', 5).attr('markerHeight', 5).attr('orient', 'auto').append('svg:path').attr('d', 'M0,-5L10,0L0,5L0,0').attr('stroke-width', '0px').attr('fill-opacity', 1).attr('fill', '#777');
    }
    buildAxis() {
        // axis creation
        const canvasEnter = this.canvas.enter;
        canvasEnter.append('g').attr('class', 'x axis');
        canvasEnter.append('g').attr('class', 'y axis');
        // update
        this.canvas.merge(this.canvas.enter).select('.x.axis').attr('transform', 'translate(0,' + this.meta.height + ')').call(this.meta.xAxis);
        this.canvas.merge(this.canvas.enter).select('.y.axis').call(this.meta.yAxis);
    }
    buildAxisLabel() {
        // axis labeling
        const canvas = this.canvas;
        const xLabel = canvas.merge(canvas.enter).selectAll('text.x.axis-label').data(function(d) {
            return [
                d.xAxis.label
            ].filter(Boolean);
        });
        const xLabelEnter = xLabel.enter().append('text').attr('class', 'x axis-label').attr('text-anchor', 'end');
        xLabel.merge(xLabelEnter).attr('x', this.meta.width).attr('y', this.meta.height - 6).text(function(d) {
            return d;
        });
        xLabel.exit().remove();
        const yLabel = canvas.merge(canvas.enter).selectAll('text.y.axis-label').data(function(d) {
            return [
                d.yAxis.label
            ].filter(Boolean);
        });
        const yLabelEnter = yLabel.enter().append('text').attr('class', 'y axis-label').attr('y', 6).attr('dy', '.75em').attr('text-anchor', 'end').attr('transform', 'rotate(-90)');
        yLabel.merge(yLabelEnter).text(function(d) {
            return d;
        });
        yLabel.exit().remove();
    }
    /**
     * @private
     *
     * Draws each of the datums stored in data.options, to do a full
     * redraw call `instance.draw()`
     */ buildContent() {
        const self = this;
        const canvas = this.canvas;
        canvas.merge(canvas.enter).attr('transform', 'translate(' + this.meta.margin.left + ',' + this.meta.margin.top + ')');
        const content = this.content = canvas.merge(canvas.enter).selectAll(':scope > g.content').data(function(d) {
            return [
                d
            ];
        });
        // g tag clipped to hold the data
        const contentEnter = content.enter().append('g').attr('clip-path', 'url(#function-plot-clip-' + this.id + ')').attr('class', 'content');
        // helper line, x = 0
        if (this.options.xAxis.type === 'linear') {
            const yOrigin = content.merge(contentEnter).selectAll(':scope > path.y.origin').data([
                [
                    [
                        0,
                        this.meta.yScale.domain()[0]
                    ],
                    [
                        0,
                        this.meta.yScale.domain()[1]
                    ]
                ]
            ]);
            const yOriginEnter = yOrigin.enter().append('path').attr('class', 'y origin').attr('stroke', 'black').attr('opacity', 0.2);
            yOrigin.merge(yOriginEnter).attr('d', this.line);
        }
        // helper line y = 0
        if (this.options.yAxis.type === 'linear') {
            const xOrigin = content.merge(contentEnter).selectAll(':scope > path.x.origin').data([
                [
                    [
                        this.meta.xScale.domain()[0],
                        0
                    ],
                    [
                        this.meta.xScale.domain()[1],
                        0
                    ]
                ]
            ]);
            const xOriginEnter = xOrigin.enter().append('path').attr('class', 'x origin').attr('stroke', 'black').attr('opacity', 0.2);
            xOrigin.merge(xOriginEnter).attr('d', this.line);
        }
        // annotations
        content.merge(contentEnter).call($0e7121ef4d9042bf$var$annotations_1.default({
            owner: self
        }));
        // content construction
        // - join options.data to <g class='graph'> elements
        // - for each datum determine the sampler to use
        const graphs = content.merge(contentEnter).selectAll(':scope > g.graph').data((d)=>d.data.map($0e7121ef4d9042bf$var$datum_defaults_1.default)
        );
        // enter
        const graphsEnter = graphs.enter().append('g').attr('class', 'graph');
        // enter + update
        graphs.merge(graphsEnter).each(function(d, index) {
            // additional options needed in the graph-types/helpers
            d.index = index;
            const selection = $b3K6t.default(this);
            selection.call($0e7121ef4d9042bf$var$graphTypes[d.graphType](self));
            selection.call($0e7121ef4d9042bf$var$helpers_1.default(self));
        });
    }
    buildZoomHelper() {
        // dummy rect (detects the zoom + drag)
        const self = this;
        if (!this.meta.zoomBehavior) {
            this.meta.zoomBehavior = $893ab0541a6b7afd$export$2e2bcd8739ae039().on('zoom', function onZoom(ev) {
                self.getEmitInstance().emit('all:zoom', ev);
            });
            // the zoom behavior must work with a copy of the scale, the zoom behavior has its own state and assumes
            // that its updating the original scale!
            // things that failed when I tried rescaleX(self.meta.xScale), the state of self.meta.xScale was a multiplied
            // for zoom/mousemove operations
            //
            // this copy should only be created once when the application starts
            self.meta.zoomBehavior.xScale = self.meta.xScale.copy();
            self.meta.zoomBehavior.yScale = self.meta.yScale.copy();
        }
        // in the case where the original scale domains were updated (because of a change in the size of the canvas)
        // update the range only but not the domain, the domain is going to be updated
        self.meta.zoomBehavior.xScale.range(self.meta.xScale.range());
        self.meta.zoomBehavior.yScale.range(self.meta.yScale.range());
        // enter
        this.canvas.enter.append('rect').call(this.meta.zoomBehavior).attr('class', 'zoom-and-drag').style('fill', 'none').style('pointer-events', 'all').on('mouseover', function(event) {
            self.getEmitInstance().emit('all:mouseover', event);
        }).on('mouseout', function(event) {
            self.getEmitInstance().emit('all:mouseout', event);
        }).on('mousemove', function(event) {
            self.getEmitInstance().emit('all:mousemove', event);
        });
        // update + enter
        this.draggable = this.canvas.merge(this.canvas.enter).select('.zoom-and-drag').call((selection)=>{
            if (selection.node()) // store the instance for the next run
            selection.node().instance = self;
        }).attr('width', this.meta.width).attr('height', this.meta.height);
    }
    setUpPlugins() {
        const plugins = this.options.plugins || [];
        const self = this;
        plugins.forEach(function(plugin) {
            plugin(self);
        });
    }
    addLink() {
        for(let i = 0; i < arguments.length; i += 1)this.linkedGraphs.push(arguments[i]);
    }
    updateAxes() {
        const instance = this;
        const canvas = instance.canvas.merge(instance.canvas.enter);
        canvas.select('.x.axis').call(instance.meta.xAxis);
        canvas.select('.y.axis').call(instance.meta.yAxis);
        // updates the style of the axes
        canvas.selectAll('.axis path, .axis line').attr('fill', 'none').attr('stroke', 'black').attr('shape-rendering', 'crispedges').attr('opacity', 0.1);
    }
    syncOptions() {
        // update the original options yDomain and xDomain, this is done so that next calls to functionPlot()
        // with the same object preserve some of the computed state
        this.options.xAxis.domain = this.meta.xScale.domain();
        this.options.yAxis.domain = this.meta.yScale.domain();
    }
    getFontSize() {
        return Math.max(Math.max(this.meta.width, this.meta.height) / 50, 8);
    }
    draw() {
        const instance = this;
        instance.emit('before:draw');
        instance.syncOptions();
        instance.updateAxes();
        instance.buildContent();
        instance.emit('after:draw');
    }
    setUpEventListeners() {
        const self = this;
        // before setting up the listeners, remove any listeners set on the previous instance, this happens because
        // the draggable container is shared across instances
        const prevInstance = this.getEmitInstance();
        if (prevInstance) prevInstance.removeAllListeners();
        const events = {
            mousemove: function(coordinates) {
                self.tip.move(coordinates);
            },
            mouseover: function() {
                self.tip.show();
            },
            mouseout: function() {
                self.tip.hide();
            },
            zoom: function zoom({ transform: transform  }) {
                // disable zoom
                if (self.options.disableZoom) return;
                const xScaleClone = transform.rescaleX(self.meta.zoomBehavior.xScale).interpolate($f3a727eb4df08cbc$export$2e2bcd8739ae039);
                const yScaleClone = transform.rescaleY(self.meta.zoomBehavior.yScale).interpolate($f3a727eb4df08cbc$export$2e2bcd8739ae039);
                // update the scales's metadata
                // NOTE: setting self.meta.xScale = self.meta.zoomBehavior.xScale creates artifacts and weird lines
                self.meta.xScale.domain(xScaleClone.domain()).range(xScaleClone.range());
                self.meta.yScale.domain(yScaleClone.domain()).range(yScaleClone.range());
            },
            'tip:update': function({ x: x1 , y: y1 , index: index  }) {
                const meta = self.root.merge(self.root.enter).datum().data[index];
                const title = meta.title || '';
                const format = meta.renderer || function(x, y) {
                    return x.toFixed(3) + ', ' + y.toFixed(3);
                };
                const text = [];
                title && text.push(title);
                text.push(format(x1, y1));
                self.root.select('.top-right-legend').attr('fill', $0e7121ef4d9042bf$var$globals_1.default.COLORS[index]).text(text.join(' '));
            }
        };
        // all represents events that can be propagated to all the instances (including this one)
        const all = {
            mousemove: function(event) {
                const mouse = $aMKaC.default(event, self.draggable.node());
                const coordinates = {
                    x: self.meta.xScale.invert(mouse[0]),
                    y: self.meta.yScale.invert(mouse[1])
                };
                self.linkedGraphs.forEach(function(graph) {
                    graph.emit('before:mousemove', coordinates);
                    graph.emit('mousemove', coordinates);
                });
            },
            zoom: function(event) {
                self.linkedGraphs.forEach(function(graph) {
                    // hack to synchronize the zoom state across all the instances
                    graph.draggable.node().__zoom = self.draggable.node().__zoom;
                    graph.emit('zoom', event);
                    graph.draw();
                });
                // emit the position of the mouse to all the registered graphs
                self.emit('all:mousemove', event);
            }
        };
        Object.keys(events).forEach(function(e) {
            // create an event for each event existing on `events` in the form 'all:' event
            // e.g. all:mouseover all:mouseout
            // the objective is that all the linked graphs receive the same event as the current graph
            // @ts-ignore
            !all[e] && self.on('all:' + e, function() {
                const args = Array.prototype.slice.call(arguments);
                self.linkedGraphs.forEach(function(graph) {
                    const localArgs = args.slice();
                    localArgs.unshift(e);
                    graph.emit.apply(graph, localArgs);
                });
            });
            // @ts-ignore
            self.on(e, events[e]);
        });
        Object.keys(all).forEach(function(e) {
            // @ts-ignore
            self.on('all:' + e, all[e]);
        });
    }
}
$0e7121ef4d9042bf$exports.Chart = $0e7121ef4d9042bf$var$Chart;
$0e7121ef4d9042bf$var$Chart.cache = {};
function $0e7121ef4d9042bf$var$functionPlot(options = {
    target: null
}) {
    options.data = options.data || [];
    let instance = $0e7121ef4d9042bf$var$Chart.cache[options.id];
    if (!instance) instance = new $0e7121ef4d9042bf$var$Chart(options);
    return instance.build();
}
$0e7121ef4d9042bf$var$functionPlot.globals = $0e7121ef4d9042bf$var$globals_1.default;
$0e7121ef4d9042bf$var$functionPlot.$eval = $0e7121ef4d9042bf$var$$eval;
$0e7121ef4d9042bf$var$functionPlot.graphTypes = $0e7121ef4d9042bf$var$graphTypes;
$0e7121ef4d9042bf$exports.default = $0e7121ef4d9042bf$var$functionPlot;



const $f5f4f9194ee4d0b0$export$6e16f50e77e6cb4d = Symbol.for('yaml.alias');
const $f5f4f9194ee4d0b0$export$c41a48f61a15d775 = Symbol.for('yaml.document');
const $f5f4f9194ee4d0b0$export$ce970371e0e850bc = Symbol.for('yaml.map');
const $f5f4f9194ee4d0b0$export$c4eb1412cef9eb18 = Symbol.for('yaml.pair');
const $f5f4f9194ee4d0b0$export$8dde1211cb7c9d16 = Symbol.for('yaml.scalar');
const $f5f4f9194ee4d0b0$export$200ef2dcd45611c9 = Symbol.for('yaml.seq');
const $f5f4f9194ee4d0b0$export$accaa52ddae3fe58 = Symbol.for('yaml.node.type');
const $f5f4f9194ee4d0b0$export$c6275352883a2b3e = (node)=>!!node && typeof node === 'object' && node[$f5f4f9194ee4d0b0$export$accaa52ddae3fe58] === $f5f4f9194ee4d0b0$export$6e16f50e77e6cb4d
;
const $f5f4f9194ee4d0b0$export$62858bae88b53fd0 = (node)=>!!node && typeof node === 'object' && node[$f5f4f9194ee4d0b0$export$accaa52ddae3fe58] === $f5f4f9194ee4d0b0$export$c41a48f61a15d775
;
const $f5f4f9194ee4d0b0$export$5c90113a285f2241 = (node)=>!!node && typeof node === 'object' && node[$f5f4f9194ee4d0b0$export$accaa52ddae3fe58] === $f5f4f9194ee4d0b0$export$ce970371e0e850bc
;
const $f5f4f9194ee4d0b0$export$7c8d445944656308 = (node)=>!!node && typeof node === 'object' && node[$f5f4f9194ee4d0b0$export$accaa52ddae3fe58] === $f5f4f9194ee4d0b0$export$c4eb1412cef9eb18
;
const $f5f4f9194ee4d0b0$export$8f3495e22775e76c = (node)=>!!node && typeof node === 'object' && node[$f5f4f9194ee4d0b0$export$accaa52ddae3fe58] === $f5f4f9194ee4d0b0$export$8dde1211cb7c9d16
;
const $f5f4f9194ee4d0b0$export$342ac1d101ffe14b = (node)=>!!node && typeof node === 'object' && node[$f5f4f9194ee4d0b0$export$accaa52ddae3fe58] === $f5f4f9194ee4d0b0$export$200ef2dcd45611c9
;
function $f5f4f9194ee4d0b0$export$cea7aa84e978eba5(node) {
    if (node && typeof node === 'object') switch(node[$f5f4f9194ee4d0b0$export$accaa52ddae3fe58]){
        case $f5f4f9194ee4d0b0$export$ce970371e0e850bc:
        case $f5f4f9194ee4d0b0$export$200ef2dcd45611c9:
            return true;
    }
    return false;
}
function $f5f4f9194ee4d0b0$export$8ee0fc9ee280b4ee(node) {
    if (node && typeof node === 'object') switch(node[$f5f4f9194ee4d0b0$export$accaa52ddae3fe58]){
        case $f5f4f9194ee4d0b0$export$6e16f50e77e6cb4d:
        case $f5f4f9194ee4d0b0$export$ce970371e0e850bc:
        case $f5f4f9194ee4d0b0$export$8dde1211cb7c9d16:
        case $f5f4f9194ee4d0b0$export$200ef2dcd45611c9:
            return true;
    }
    return false;
}
const $f5f4f9194ee4d0b0$export$67947a995b37b771 = (node)=>($f5f4f9194ee4d0b0$export$8f3495e22775e76c(node) || $f5f4f9194ee4d0b0$export$cea7aa84e978eba5(node)) && !!node.anchor
;
class $f5f4f9194ee4d0b0$export$7cc40ad5cb33f2dc {
    constructor(type){
        Object.defineProperty(this, $f5f4f9194ee4d0b0$export$accaa52ddae3fe58, {
            value: type
        });
    }
    /** Create a copy of this node.  */ clone() {
        const copy = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
        if (this.range) copy.range = this.range.slice();
        return copy;
    }
}



/**
 * Recursively convert any node or its contents to native JavaScript
 *
 * @param value - The input value
 * @param arg - If `value` defines a `toJSON()` method, use this
 *   as its first argument
 * @param ctx - Conversion context, originally set in Document#toJS(). If
 *   `{ keep: true }` is not set, output should be suitable for JSON
 *   stringification.
 */ function $188b2a47b11993dc$export$f08965dd1304d490(value, arg, ctx) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    if (Array.isArray(value)) return value.map((v, i)=>$188b2a47b11993dc$export$f08965dd1304d490(v, String(i), ctx)
    );
    if (value && typeof value.toJSON === 'function') {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        if (!ctx || !$f5f4f9194ee4d0b0$export$67947a995b37b771(value)) return value.toJSON(arg, ctx);
        const data = {
            aliasCount: 0,
            count: 1,
            res: undefined
        };
        ctx.anchors.set(value, data);
        ctx.onCreate = (res)=>{
            data.res = res;
            delete ctx.onCreate;
        };
        const res1 = value.toJSON(arg, ctx);
        if (ctx.onCreate) ctx.onCreate(res1);
        return res1;
    }
    if (typeof value === 'bigint' && !(ctx === null || ctx === void 0 ? void 0 : ctx.keep)) return Number(value);
    return value;
}


const $1e4079dce2ff1bd7$export$dc071f102752d0eb = (value)=>!value || typeof value !== 'function' && typeof value !== 'object'
;
class $1e4079dce2ff1bd7$export$595dbf49c602a1f extends $f5f4f9194ee4d0b0$export$7cc40ad5cb33f2dc {
    constructor(value){
        super($f5f4f9194ee4d0b0$export$8dde1211cb7c9d16);
        this.value = value;
    }
    toJSON(arg, ctx) {
        return (ctx === null || ctx === void 0 ? void 0 : ctx.keep) ? this.value : $188b2a47b11993dc$export$f08965dd1304d490(this.value, arg, ctx);
    }
    toString() {
        return String(this.value);
    }
}
$1e4079dce2ff1bd7$export$595dbf49c602a1f.BLOCK_FOLDED = 'BLOCK_FOLDED';
$1e4079dce2ff1bd7$export$595dbf49c602a1f.BLOCK_LITERAL = 'BLOCK_LITERAL';
$1e4079dce2ff1bd7$export$595dbf49c602a1f.PLAIN = 'PLAIN';
$1e4079dce2ff1bd7$export$595dbf49c602a1f.QUOTE_DOUBLE = 'QUOTE_DOUBLE';
$1e4079dce2ff1bd7$export$595dbf49c602a1f.QUOTE_SINGLE = 'QUOTE_SINGLE';


function $201887ea634d8746$export$14aaa50a76ee848f(scalar, strict, onError) {
    const start = scalar.offset;
    const header = $201887ea634d8746$var$parseBlockScalarHeader(scalar, strict, onError);
    if (!header) return {
        value: '',
        type: null,
        comment: '',
        range: [
            start,
            start,
            start
        ]
    };
    const type = header.mode === '>' ? $1e4079dce2ff1bd7$export$595dbf49c602a1f.BLOCK_FOLDED : $1e4079dce2ff1bd7$export$595dbf49c602a1f.BLOCK_LITERAL;
    const lines = scalar.source ? $201887ea634d8746$var$splitLines(scalar.source) : [];
    // determine the end of content & start of chomping
    let chompStart = lines.length;
    for(let i = lines.length - 1; i >= 0; --i){
        const content = lines[i][1];
        if (content === '' || content === '\r') chompStart = i;
        else break;
    }
    // shortcut for empty contents
    if (chompStart === 0) {
        const value = header.chomp === '+' && lines.length > 0 ? '\n'.repeat(Math.max(1, lines.length - 1)) : '';
        let end = start + header.length;
        if (scalar.source) end += scalar.source.length;
        return {
            value: value,
            type: type,
            comment: header.comment,
            range: [
                start,
                end,
                end
            ]
        };
    }
    // find the indentation level to trim from start
    let trimIndent = scalar.indent + header.indent;
    let offset = scalar.offset + header.length;
    let contentStart = 0;
    for(let i1 = 0; i1 < chompStart; ++i1){
        const [indent, content] = lines[i1];
        if (content === '' || content === '\r') {
            if (header.indent === 0 && indent.length > trimIndent) trimIndent = indent.length;
        } else {
            if (indent.length < trimIndent) {
                const message = 'Block scalars with more-indented leading empty lines must use an explicit indentation indicator';
                onError(offset + indent.length, 'MISSING_CHAR', message);
            }
            if (header.indent === 0) trimIndent = indent.length;
            contentStart = i1;
            break;
        }
        offset += indent.length + content.length + 1;
    }
    // include trailing more-indented empty lines in content
    for(let i2 = lines.length - 1; i2 >= chompStart; --i2)if (lines[i2][0].length > trimIndent) chompStart = i2 + 1;
    let value = '';
    let sep = '';
    let prevMoreIndented = false;
    // leading whitespace is kept intact
    for(let i3 = 0; i3 < contentStart; ++i3)value += lines[i3][0].slice(trimIndent) + '\n';
    for(let i4 = contentStart; i4 < chompStart; ++i4){
        let [indent, content] = lines[i4];
        offset += indent.length + content.length + 1;
        const crlf = content[content.length - 1] === '\r';
        if (crlf) content = content.slice(0, -1);
        /* istanbul ignore if already caught in lexer */ if (content && indent.length < trimIndent) {
            const src = header.indent ? 'explicit indentation indicator' : 'first line';
            const message = `Block scalar lines must not be less indented than their ${src}`;
            onError(offset - content.length - (crlf ? 2 : 1), 'BAD_INDENT', message);
            indent = '';
        }
        if (type === $1e4079dce2ff1bd7$export$595dbf49c602a1f.BLOCK_LITERAL) {
            value += sep + indent.slice(trimIndent) + content;
            sep = '\n';
        } else if (indent.length > trimIndent || content[0] === '\t') {
            // more-indented content within a folded block
            if (sep === ' ') sep = '\n';
            else if (!prevMoreIndented && sep === '\n') sep = '\n\n';
            value += sep + indent.slice(trimIndent) + content;
            sep = '\n';
            prevMoreIndented = true;
        } else if (content === '') {
            // empty line
            if (sep === '\n') value += '\n';
            else sep = '\n';
        } else {
            value += sep + content;
            sep = ' ';
            prevMoreIndented = false;
        }
    }
    switch(header.chomp){
        case '-':
            break;
        case '+':
            for(let i5 = chompStart; i5 < lines.length; ++i5)value += '\n' + lines[i5][0].slice(trimIndent);
            if (value[value.length - 1] !== '\n') value += '\n';
            break;
        default:
            value += '\n';
    }
    const end = start + header.length + scalar.source.length;
    return {
        value: value,
        type: type,
        comment: header.comment,
        range: [
            start,
            end,
            end
        ]
    };
}
function $201887ea634d8746$var$parseBlockScalarHeader({ offset: offset , props: props  }, strict, onError) {
    /* istanbul ignore if should not happen */ if (props[0].type !== 'block-scalar-header') {
        onError(props[0], 'IMPOSSIBLE', 'Block scalar header not found');
        return null;
    }
    const { source: source  } = props[0];
    const mode = source[0];
    let indent = 0;
    let chomp = '';
    let error = -1;
    for(let i = 1; i < source.length; ++i){
        const ch = source[i];
        if (!chomp && (ch === '-' || ch === '+')) chomp = ch;
        else {
            const n = Number(ch);
            if (!indent && n) indent = n;
            else if (error === -1) error = offset + i;
        }
    }
    if (error !== -1) onError(error, 'UNEXPECTED_TOKEN', `Block scalar header includes extra characters: ${source}`);
    let hasSpace = false;
    let comment = '';
    let length = source.length;
    for(let i6 = 1; i6 < props.length; ++i6){
        const token = props[i6];
        switch(token.type){
            case 'space':
                hasSpace = true;
            // fallthrough
            case 'newline':
                length += token.source.length;
                break;
            case 'comment':
                if (strict && !hasSpace) {
                    const message = 'Comments must be separated from other tokens by white space characters';
                    onError(token, 'MISSING_CHAR', message);
                }
                length += token.source.length;
                comment = token.source.substring(1);
                break;
            case 'error':
                onError(token, 'UNEXPECTED_TOKEN', token.message);
                length += token.source.length;
                break;
            /* istanbul ignore next should not happen */ default:
                {
                    const message = `Unexpected token in block scalar header: ${token.type}`;
                    onError(token, 'UNEXPECTED_TOKEN', message);
                    const ts = token.source;
                    if (ts && typeof ts === 'string') length += ts.length;
                }
        }
    }
    return {
        mode: mode,
        indent: indent,
        chomp: chomp,
        comment: comment,
        length: length
    };
}
/** @returns Array of lines split up as `[indent, content]` */ function $201887ea634d8746$var$splitLines(source) {
    const split = source.split(/\n( *)/);
    const first = split[0];
    const m = first.match(/^( *)/);
    const line0 = (m === null || m === void 0 ? void 0 : m[1]) ? [
        m[1],
        first.slice(m[1].length)
    ] : [
        '',
        first
    ];
    const lines = [
        line0
    ];
    for(let i = 1; i < split.length; i += 2)lines.push([
        split[i],
        split[i + 1]
    ]);
    return lines;
}



function $936ecb118d387b35$export$9be3172c55e482a(end, offset, reqSpace, onError) {
    let comment = '';
    if (end) {
        let hasSpace = false;
        let sep = '';
        for (const token of end){
            const { source: source , type: type  } = token;
            switch(type){
                case 'space':
                    hasSpace = true;
                    break;
                case 'comment':
                    {
                        if (reqSpace && !hasSpace) onError(token, 'MISSING_CHAR', 'Comments must be separated from other tokens by white space characters');
                        const cb = source.substring(1) || ' ';
                        if (!comment) comment = cb;
                        else comment += sep + cb;
                        sep = '';
                        break;
                    }
                case 'newline':
                    if (comment) sep += source;
                    hasSpace = true;
                    break;
                default:
                    onError(token, 'UNEXPECTED_TOKEN', `Unexpected ${type} at node end`);
            }
            offset += source.length;
        }
    }
    return {
        comment: comment,
        offset: offset
    };
}


function $46feae795a3f9ead$export$2f1c3b16290da8c8(scalar, strict, onError) {
    const { offset: offset , type: type , source: source , end: end  } = scalar;
    let _type;
    let value;
    const _onError = (rel, code, msg)=>onError(offset + rel, code, msg)
    ;
    switch(type){
        case 'scalar':
            _type = $1e4079dce2ff1bd7$export$595dbf49c602a1f.PLAIN;
            value = $46feae795a3f9ead$var$plainValue(source, _onError);
            break;
        case 'single-quoted-scalar':
            _type = $1e4079dce2ff1bd7$export$595dbf49c602a1f.QUOTE_SINGLE;
            value = $46feae795a3f9ead$var$singleQuotedValue(source, _onError);
            break;
        case 'double-quoted-scalar':
            _type = $1e4079dce2ff1bd7$export$595dbf49c602a1f.QUOTE_DOUBLE;
            value = $46feae795a3f9ead$var$doubleQuotedValue(source, _onError);
            break;
        /* istanbul ignore next should not happen */ default:
            onError(scalar, 'UNEXPECTED_TOKEN', `Expected a flow scalar value, but found: ${type}`);
            return {
                value: '',
                type: null,
                comment: '',
                range: [
                    offset,
                    offset + source.length,
                    offset + source.length
                ]
            };
    }
    const valueEnd = offset + source.length;
    const re = $936ecb118d387b35$export$9be3172c55e482a(end, valueEnd, strict, onError);
    return {
        value: value,
        type: _type,
        comment: re.comment,
        range: [
            offset,
            valueEnd,
            re.offset
        ]
    };
}
function $46feae795a3f9ead$var$plainValue(source, onError) {
    let badChar = '';
    switch(source[0]){
        /* istanbul ignore next should not happen */ case '\t':
            badChar = 'a tab character';
            break;
        case ',':
            badChar = 'flow indicator character ,';
            break;
        case '%':
            badChar = 'directive indicator character %';
            break;
        case '|':
        case '>':
            badChar = `block scalar indicator ${source[0]}`;
            break;
        case '@':
        case '`':
            badChar = `reserved character ${source[0]}`;
            break;
    }
    if (badChar) onError(0, 'BAD_SCALAR_START', `Plain value cannot start with ${badChar}`);
    return $46feae795a3f9ead$var$foldLines(source);
}
function $46feae795a3f9ead$var$singleQuotedValue(source, onError) {
    if (source[source.length - 1] !== "'" || source.length === 1) onError(source.length, 'MISSING_CHAR', "Missing closing 'quote");
    return $46feae795a3f9ead$var$foldLines(source.slice(1, -1)).replace(/''/g, "'");
}
function $46feae795a3f9ead$var$foldLines(source) {
    var _a;
    /**
     * The negative lookbehind here and in the `re` RegExp is to
     * prevent causing a polynomial search time in certain cases.
     *
     * The try-catch is for Safari, which doesn't support this yet:
     * https://caniuse.com/js-regexp-lookbehind
     */ let first, line;
    try {
        first = new RegExp('(.*?)(?<![ \t])[ \t]*\r?\n', 'sy');
        line = new RegExp('[ \t]*(.*?)(?:(?<![ \t])[ \t]*)?\r?\n', 'sy');
    } catch (_) {
        first = /(.*?)[ \t]*\r?\n/sy;
        line = /[ \t]*(.*?)[ \t]*\r?\n/sy;
    }
    let match = first.exec(source);
    if (!match) return source;
    let res = match[1];
    let sep = ' ';
    let pos = first.lastIndex;
    line.lastIndex = pos;
    while(match = line.exec(source)){
        if (match[1] === '') {
            if (sep === '\n') res += sep;
            else sep = '\n';
        } else {
            res += sep + match[1];
            sep = ' ';
        }
        pos = line.lastIndex;
    }
    const last = /[ \t]*(.*)/sy;
    last.lastIndex = pos;
    match = last.exec(source);
    return res + sep + ((_a = match === null || match === void 0 ? void 0 : match[1]) !== null && _a !== void 0 ? _a : '');
}
function $46feae795a3f9ead$var$doubleQuotedValue(source, onError) {
    let res = '';
    for(let i = 1; i < source.length - 1; ++i){
        const ch = source[i];
        if (ch === '\r' && source[i + 1] === '\n') continue;
        if (ch === '\n') {
            const { fold: fold , offset: offset  } = $46feae795a3f9ead$var$foldNewline(source, i);
            res += fold;
            i = offset;
        } else if (ch === '\\') {
            let next = source[++i];
            const cc = $46feae795a3f9ead$var$escapeCodes[next];
            if (cc) res += cc;
            else if (next === '\n') {
                // skip escaped newlines, but still trim the following line
                next = source[i + 1];
                while(next === ' ' || next === '\t')next = source[++i + 1];
            } else if (next === '\r' && source[i + 1] === '\n') {
                // skip escaped CRLF newlines, but still trim the following line
                next = source[++i + 1];
                while(next === ' ' || next === '\t')next = source[++i + 1];
            } else if (next === 'x' || next === 'u' || next === 'U') {
                const length = {
                    x: 2,
                    u: 4,
                    U: 8
                }[next];
                res += $46feae795a3f9ead$var$parseCharCode(source, i + 1, length, onError);
                i += length;
            } else {
                const raw = source.substr(i - 1, 2);
                onError(i - 1, 'BAD_DQ_ESCAPE', `Invalid escape sequence ${raw}`);
                res += raw;
            }
        } else if (ch === ' ' || ch === '\t') {
            // trim trailing whitespace
            const wsStart = i;
            let next = source[i + 1];
            while(next === ' ' || next === '\t')next = source[++i + 1];
            if (next !== '\n' && !(next === '\r' && source[i + 2] === '\n')) res += i > wsStart ? source.slice(wsStart, i + 1) : ch;
        } else res += ch;
    }
    if (source[source.length - 1] !== '"' || source.length === 1) onError(source.length, 'MISSING_CHAR', 'Missing closing "quote');
    return res;
}
/**
 * Fold a single newline into a space, multiple newlines to N - 1 newlines.
 * Presumes `source[offset] === '\n'`
 */ function $46feae795a3f9ead$var$foldNewline(source, offset) {
    let fold = '';
    let ch = source[offset + 1];
    while(ch === ' ' || ch === '\t' || ch === '\n' || ch === '\r'){
        if (ch === '\r' && source[offset + 2] !== '\n') break;
        if (ch === '\n') fold += '\n';
        offset += 1;
        ch = source[offset + 1];
    }
    if (!fold) fold = ' ';
    return {
        fold: fold,
        offset: offset
    };
}
const $46feae795a3f9ead$var$escapeCodes = {
    '0': '\0',
    a: '\x07',
    b: '\b',
    e: '\x1b',
    f: '\f',
    n: '\n',
    r: '\r',
    t: '\t',
    v: '\v',
    N: '\u0085',
    _: '\u00a0',
    L: '\u2028',
    P: '\u2029',
    ' ': ' ',
    '"': '"',
    '/': '/',
    '\\': '\\',
    '\t': '\t'
};
function $46feae795a3f9ead$var$parseCharCode(source, offset, length, onError) {
    const cc = source.substr(offset, length);
    const ok = cc.length === length && /^[0-9a-fA-F]+$/.test(cc);
    const code = ok ? parseInt(cc, 16) : NaN;
    if (isNaN(code)) {
        const raw = source.substr(offset - 2, length + 2);
        onError(offset - 2, 'BAD_DQ_ESCAPE', `Invalid escape sequence ${raw}`);
        return raw;
    }
    return String.fromCodePoint(code);
}


class $e3676dc6987df596$export$699cd54d617b337f extends Error {
    constructor(name, pos, code, message){
        super();
        this.name = name;
        this.code = code;
        this.message = message;
        this.pos = pos;
    }
}
class $e3676dc6987df596$export$c1188aaa49090a5c extends $e3676dc6987df596$export$699cd54d617b337f {
    constructor(pos, code, message){
        super('YAMLParseError', pos, code, message);
    }
}
class $e3676dc6987df596$export$856b463bac79f971 extends $e3676dc6987df596$export$699cd54d617b337f {
    constructor(pos, code, message){
        super('YAMLWarning', pos, code, message);
    }
}
const $e3676dc6987df596$export$44eaaa72d914fe8c = (src, lc)=>(error)=>{
        if (error.pos[0] === -1) return;
        error.linePos = error.pos.map((pos)=>lc.linePos(pos)
        );
        const { line: line , col: col  } = error.linePos[0];
        error.message += ` at line ${line}, column ${col}`;
        let ci = col - 1;
        let lineStr = src.substring(lc.lineStarts[line - 1], lc.lineStarts[line]).replace(/[\n\r]+$/, '');
        // Trim to max 80 chars, keeping col position near the middle
        if (ci >= 60 && lineStr.length > 80) {
            const trimStart = Math.min(ci - 39, lineStr.length - 79);
            lineStr = '…' + lineStr.substring(trimStart);
            ci -= trimStart - 1;
        }
        if (lineStr.length > 80) lineStr = lineStr.substring(0, 79) + '…';
        // Include previous line in context if pointing at line start
        if (line > 1 && /^ *$/.test(lineStr.substring(0, ci))) {
            // Regexp won't match if start is trimmed
            let prev = src.substring(lc.lineStarts[line - 2], lc.lineStarts[line - 1]);
            if (prev.length > 80) prev = prev.substring(0, 79) + '…\n';
            lineStr = prev + lineStr;
        }
        if (/[^ ]/.test(lineStr)) {
            let count = 1;
            const end = error.linePos[1];
            if (end && end.line === line && end.col > col) count = Math.min(end.col - col, 80 - ci);
            const pointer = ' '.repeat(ci) + '^'.repeat(count);
            error.message += `:\n\n${lineStr}\n${pointer}\n`;
        }
    }
;



const $cda4d92ec23c378c$export$dfafce8168b25546 = 'flow';
const $cda4d92ec23c378c$export$609fbd56c8a85825 = 'block';
const $cda4d92ec23c378c$export$74d9ae4055c4d6cf = 'quoted';
/**
 * Tries to keep input at up to `lineWidth` characters, splitting only on spaces
 * not followed by newlines or spaces unless `mode` is `'quoted'`. Lines are
 * terminated with `\n` and started with `indent`.
 */ function $cda4d92ec23c378c$export$e82a5ab0b770aa09(text, indent, mode = 'flow', { indentAtStart: indentAtStart , lineWidth: lineWidth = 80 , minContentWidth: minContentWidth = 20 , onFold: onFold , onOverflow: onOverflow  } = {}) {
    if (!lineWidth || lineWidth < 0) return text;
    const endStep = Math.max(1 + minContentWidth, 1 + lineWidth - indent.length);
    if (text.length <= endStep) return text;
    const folds = [];
    const escapedFolds = {};
    let end = lineWidth - indent.length;
    if (typeof indentAtStart === 'number') {
        if (indentAtStart > lineWidth - Math.max(2, minContentWidth)) folds.push(0);
        else end = lineWidth - indentAtStart;
    }
    let split = undefined;
    let prev = undefined;
    let overflow = false;
    let i = -1;
    let escStart = -1;
    let escEnd = -1;
    if (mode === $cda4d92ec23c378c$export$609fbd56c8a85825) {
        i = $cda4d92ec23c378c$var$consumeMoreIndentedLines(text, i);
        if (i !== -1) end = i + endStep;
    }
    for(let ch; ch = text[i += 1];){
        if (mode === $cda4d92ec23c378c$export$74d9ae4055c4d6cf && ch === '\\') {
            escStart = i;
            switch(text[i + 1]){
                case 'x':
                    i += 3;
                    break;
                case 'u':
                    i += 5;
                    break;
                case 'U':
                    i += 9;
                    break;
                default:
                    i += 1;
            }
            escEnd = i;
        }
        if (ch === '\n') {
            if (mode === $cda4d92ec23c378c$export$609fbd56c8a85825) i = $cda4d92ec23c378c$var$consumeMoreIndentedLines(text, i);
            end = i + endStep;
            split = undefined;
        } else {
            if (ch === ' ' && prev && prev !== ' ' && prev !== '\n' && prev !== '\t') {
                // space surrounded by non-space can be replaced with newline + indent
                const next = text[i + 1];
                if (next && next !== ' ' && next !== '\n' && next !== '\t') split = i;
            }
            if (i >= end) {
                if (split) {
                    folds.push(split);
                    end = split + endStep;
                    split = undefined;
                } else if (mode === $cda4d92ec23c378c$export$74d9ae4055c4d6cf) {
                    // white-space collected at end may stretch past lineWidth
                    while(prev === ' ' || prev === '\t'){
                        prev = ch;
                        ch = text[i += 1];
                        overflow = true;
                    }
                    // Account for newline escape, but don't break preceding escape
                    const j = i > escEnd + 1 ? i - 2 : escStart - 1;
                    // Bail out if lineWidth & minContentWidth are shorter than an escape string
                    if (escapedFolds[j]) return text;
                    folds.push(j);
                    escapedFolds[j] = true;
                    end = j + endStep;
                    split = undefined;
                } else overflow = true;
            }
        }
        prev = ch;
    }
    if (overflow && onOverflow) onOverflow();
    if (folds.length === 0) return text;
    if (onFold) onFold();
    let res = text.slice(0, folds[0]);
    for(let i1 = 0; i1 < folds.length; ++i1){
        const fold = folds[i1];
        const end = folds[i1 + 1] || text.length;
        if (fold === 0) res = `\n${indent}${text.slice(0, end)}`;
        else {
            if (mode === $cda4d92ec23c378c$export$74d9ae4055c4d6cf && escapedFolds[fold]) res += `${text[fold]}\\`;
            res += `\n${indent}${text.slice(fold + 1, end)}`;
        }
    }
    return res;
}
/**
 * Presumes `i + 1` is at the start of a line
 * @returns index of last newline in more-indented block
 */ function $cda4d92ec23c378c$var$consumeMoreIndentedLines(text, i) {
    let ch = text[i + 1];
    while(ch === ' ' || ch === '\t'){
        do ch = text[i += 1];
        while (ch && ch !== '\n')
        ch = text[i + 1];
    }
    return i;
}


const $53767de6fc69a657$var$getFoldOptions = (ctx)=>({
        indentAtStart: ctx.indentAtStart,
        lineWidth: ctx.options.lineWidth,
        minContentWidth: ctx.options.minContentWidth
    })
;
// Also checks for lines starting with %, as parsing the output as YAML 1.1 will
// presume that's starting a new document.
const $53767de6fc69a657$var$containsDocumentMarker = (str)=>/^(%|---|\.\.\.)/m.test(str)
;
function $53767de6fc69a657$var$lineLengthOverLimit(str, lineWidth, indentLength) {
    if (!lineWidth || lineWidth < 0) return false;
    const limit = lineWidth - indentLength;
    const strLen = str.length;
    if (strLen <= limit) return false;
    for(let i = 0, start = 0; i < strLen; ++i)if (str[i] === '\n') {
        if (i - start > limit) return true;
        start = i + 1;
        if (strLen - start <= limit) return false;
    }
    return true;
}
function $53767de6fc69a657$var$doubleQuotedString(value, ctx) {
    const json = JSON.stringify(value);
    if (ctx.options.doubleQuotedAsJSON) return json;
    const { implicitKey: implicitKey  } = ctx;
    const minMultiLineLength = ctx.options.doubleQuotedMinMultiLineLength;
    const indent = ctx.indent || ($53767de6fc69a657$var$containsDocumentMarker(value) ? '  ' : '');
    let str = '';
    let start = 0;
    for(let i = 0, ch = json[i]; ch; ch = json[++i]){
        if (ch === ' ' && json[i + 1] === '\\' && json[i + 2] === 'n') {
            // space before newline needs to be escaped to not be folded
            str += json.slice(start, i) + '\\ ';
            i += 1;
            start = i;
            ch = '\\';
        }
        if (ch === '\\') switch(json[i + 1]){
            case 'u':
                {
                    str += json.slice(start, i);
                    const code = json.substr(i + 2, 4);
                    switch(code){
                        case '0000':
                            str += '\\0';
                            break;
                        case '0007':
                            str += '\\a';
                            break;
                        case '000b':
                            str += '\\v';
                            break;
                        case '001b':
                            str += '\\e';
                            break;
                        case '0085':
                            str += '\\N';
                            break;
                        case '00a0':
                            str += '\\_';
                            break;
                        case '2028':
                            str += '\\L';
                            break;
                        case '2029':
                            str += '\\P';
                            break;
                        default:
                            if (code.substr(0, 2) === '00') str += '\\x' + code.substr(2);
                            else str += json.substr(i, 6);
                    }
                    i += 5;
                    start = i + 1;
                }
                break;
            case 'n':
                if (implicitKey || json[i + 2] === '"' || json.length < minMultiLineLength) i += 1;
                else {
                    // folding will eat first newline
                    str += json.slice(start, i) + '\n\n';
                    while(json[i + 2] === '\\' && json[i + 3] === 'n' && json[i + 4] !== '"'){
                        str += '\n';
                        i += 2;
                    }
                    str += indent;
                    // space after newline needs to be escaped to not be folded
                    if (json[i + 2] === ' ') str += '\\';
                    i += 1;
                    start = i + 1;
                }
                break;
            default:
                i += 1;
        }
    }
    str = start ? str + json.slice(start) : json;
    return implicitKey ? str : $cda4d92ec23c378c$export$e82a5ab0b770aa09(str, indent, $cda4d92ec23c378c$export$74d9ae4055c4d6cf, $53767de6fc69a657$var$getFoldOptions(ctx));
}
function $53767de6fc69a657$var$singleQuotedString(value, ctx) {
    if (ctx.options.singleQuote === false || ctx.implicitKey && value.includes('\n') || /[ \t]\n|\n[ \t]/.test(value) // single quoted string can't have leading or trailing whitespace around newline
    ) return $53767de6fc69a657$var$doubleQuotedString(value, ctx);
    const indent = ctx.indent || ($53767de6fc69a657$var$containsDocumentMarker(value) ? '  ' : '');
    const res = "'" + value.replace(/'/g, "''").replace(/\n+/g, `$&\n${indent}`) + "'";
    return ctx.implicitKey ? res : $cda4d92ec23c378c$export$e82a5ab0b770aa09(res, indent, $cda4d92ec23c378c$export$dfafce8168b25546, $53767de6fc69a657$var$getFoldOptions(ctx));
}
function $53767de6fc69a657$var$quotedString(value, ctx) {
    const { singleQuote: singleQuote  } = ctx.options;
    let qs;
    if (singleQuote === false) qs = $53767de6fc69a657$var$doubleQuotedString;
    else {
        const hasDouble = value.includes('"');
        const hasSingle = value.includes("'");
        if (hasDouble && !hasSingle) qs = $53767de6fc69a657$var$singleQuotedString;
        else if (hasSingle && !hasDouble) qs = $53767de6fc69a657$var$doubleQuotedString;
        else qs = singleQuote ? $53767de6fc69a657$var$singleQuotedString : $53767de6fc69a657$var$doubleQuotedString;
    }
    return qs(value, ctx);
}
function $53767de6fc69a657$var$blockString({ comment: comment , type: type , value: value  }, ctx, onComment, onChompKeep) {
    const { blockQuote: blockQuote , commentString: commentString , lineWidth: lineWidth  } = ctx.options;
    // 1. Block can't end in whitespace unless the last line is non-empty.
    // 2. Strings consisting of only whitespace are best rendered explicitly.
    if (!blockQuote || /\n[\t ]+$/.test(value) || /^\s*$/.test(value)) return $53767de6fc69a657$var$quotedString(value, ctx);
    const indent = ctx.indent || (ctx.forceBlockIndent || $53767de6fc69a657$var$containsDocumentMarker(value) ? '  ' : '');
    const literal = blockQuote === 'literal' ? true : blockQuote === 'folded' || type === $1e4079dce2ff1bd7$export$595dbf49c602a1f.BLOCK_FOLDED ? false : type === $1e4079dce2ff1bd7$export$595dbf49c602a1f.BLOCK_LITERAL ? true : !$53767de6fc69a657$var$lineLengthOverLimit(value, lineWidth, indent.length);
    if (!value) return literal ? '|\n' : '>\n';
    // determine chomping from whitespace at value end
    let chomp;
    let endStart;
    for(endStart = value.length; endStart > 0; --endStart){
        const ch = value[endStart - 1];
        if (ch !== '\n' && ch !== '\t' && ch !== ' ') break;
    }
    let end = value.substring(endStart);
    const endNlPos = end.indexOf('\n');
    if (endNlPos === -1) chomp = '-'; // strip
    else if (value === end || endNlPos !== end.length - 1) {
        chomp = '+'; // keep
        if (onChompKeep) onChompKeep();
    } else chomp = ''; // clip
    if (end) {
        value = value.slice(0, -end.length);
        if (end[end.length - 1] === '\n') end = end.slice(0, -1);
        end = end.replace(/\n+(?!\n|$)/g, `$&${indent}`);
    }
    // determine indent indicator from whitespace at value start
    let startWithSpace = false;
    let startEnd;
    let startNlPos = -1;
    for(startEnd = 0; startEnd < value.length; ++startEnd){
        const ch = value[startEnd];
        if (ch === ' ') startWithSpace = true;
        else if (ch === '\n') startNlPos = startEnd;
        else break;
    }
    let start = value.substring(0, startNlPos < startEnd ? startNlPos + 1 : startEnd);
    if (start) {
        value = value.substring(start.length);
        start = start.replace(/\n+/g, `$&${indent}`);
    }
    const indentSize = indent ? '2' : '1'; // root is at -1
    let header = (literal ? '|' : '>') + (startWithSpace ? indentSize : '') + chomp;
    if (comment) {
        header += ' ' + commentString(comment.replace(/ ?[\r\n]+/g, ' '));
        if (onComment) onComment();
    }
    if (literal) {
        value = value.replace(/\n+/g, `$&${indent}`);
        return `${header}\n${indent}${start}${value}${end}`;
    }
    value = value.replace(/\n+/g, '\n$&').replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, '$1$2') // more-indented lines aren't folded
    //                ^ more-ind. ^ empty     ^ capture next empty lines only at end of indent
    .replace(/\n+/g, `$&${indent}`);
    const body = $cda4d92ec23c378c$export$e82a5ab0b770aa09(`${start}${value}${end}`, indent, $cda4d92ec23c378c$export$609fbd56c8a85825, $53767de6fc69a657$var$getFoldOptions(ctx));
    return `${header}\n${indent}${body}`;
}
function $53767de6fc69a657$var$plainString(item, ctx, onComment, onChompKeep) {
    const { type: type , value: value  } = item;
    const { actualString: actualString , implicitKey: implicitKey , indent: indent , inFlow: inFlow  } = ctx;
    if (implicitKey && /[\n[\]{},]/.test(value) || inFlow && /[[\]{},]/.test(value)) return $53767de6fc69a657$var$quotedString(value, ctx);
    if (!value || /^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(value)) // not allowed:
    // - empty string, '-' or '?'
    // - start with an indicator character (except [?:-]) or /[?-] /
    // - '\n ', ': ' or ' \n' anywhere
    // - '#' not preceded by a non-space char
    // - end with ' ' or ':'
    return implicitKey || inFlow || !value.includes('\n') ? $53767de6fc69a657$var$quotedString(value, ctx) : $53767de6fc69a657$var$blockString(item, ctx, onComment, onChompKeep);
    if (!implicitKey && !inFlow && type !== $1e4079dce2ff1bd7$export$595dbf49c602a1f.PLAIN && value.includes('\n')) // Where allowed & type not set explicitly, prefer block style for multiline strings
    return $53767de6fc69a657$var$blockString(item, ctx, onComment, onChompKeep);
    if (indent === '' && $53767de6fc69a657$var$containsDocumentMarker(value)) {
        ctx.forceBlockIndent = true;
        return $53767de6fc69a657$var$blockString(item, ctx, onComment, onChompKeep);
    }
    const str = value.replace(/\n+/g, `$&\n${indent}`);
    // Verify that output will be parsed as a string, as e.g. plain numbers and
    // booleans get parsed with those types in v1.2 (e.g. '42', 'true' & '0.9e-3'),
    // and others in v1.1.
    if (actualString) {
        const test = (tag)=>{
            var _a;
            return tag.default && tag.tag !== 'tag:yaml.org,2002:str' && ((_a = tag.test) === null || _a === void 0 ? void 0 : _a.test(str));
        };
        const { compat: compat , tags: tags  } = ctx.doc.schema;
        if (tags.some(test) || (compat === null || compat === void 0 ? void 0 : compat.some(test))) return $53767de6fc69a657$var$quotedString(value, ctx);
    }
    return implicitKey ? str : $cda4d92ec23c378c$export$e82a5ab0b770aa09(str, indent, $cda4d92ec23c378c$export$dfafce8168b25546, $53767de6fc69a657$var$getFoldOptions(ctx));
}
function $53767de6fc69a657$export$3457ffbf9a1af5aa(item, ctx, onComment, onChompKeep) {
    const { implicitKey: implicitKey , inFlow: inFlow  } = ctx;
    const ss = typeof item.value === 'string' ? item : Object.assign({}, item, {
        value: String(item.value)
    });
    let { type: type  } = item;
    if (type !== $1e4079dce2ff1bd7$export$595dbf49c602a1f.QUOTE_DOUBLE) // force double quotes on control characters & unpaired surrogates
    {
        if (/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(ss.value)) type = $1e4079dce2ff1bd7$export$595dbf49c602a1f.QUOTE_DOUBLE;
    }
    const _stringify = (_type)=>{
        switch(_type){
            case $1e4079dce2ff1bd7$export$595dbf49c602a1f.BLOCK_FOLDED:
            case $1e4079dce2ff1bd7$export$595dbf49c602a1f.BLOCK_LITERAL:
                return implicitKey || inFlow ? $53767de6fc69a657$var$quotedString(ss.value, ctx) // blocks are not valid inside flow containers
                 : $53767de6fc69a657$var$blockString(ss, ctx, onComment, onChompKeep);
            case $1e4079dce2ff1bd7$export$595dbf49c602a1f.QUOTE_DOUBLE:
                return $53767de6fc69a657$var$doubleQuotedString(ss.value, ctx);
            case $1e4079dce2ff1bd7$export$595dbf49c602a1f.QUOTE_SINGLE:
                return $53767de6fc69a657$var$singleQuotedString(ss.value, ctx);
            case $1e4079dce2ff1bd7$export$595dbf49c602a1f.PLAIN:
                return $53767de6fc69a657$var$plainString(ss, ctx, onComment, onChompKeep);
            default:
                return null;
        }
    };
    let res = _stringify(type);
    if (res === null) {
        const { defaultKeyType: defaultKeyType , defaultStringType: defaultStringType  } = ctx.options;
        const t = implicitKey && defaultKeyType || defaultStringType;
        res = _stringify(t);
        if (res === null) throw new Error(`Unsupported default string type ${t}`);
    }
    return res;
}


function $b8b1f9c2defecec2$export$2606595716b8fd6d(token, strict = true, onError) {
    if (token) {
        const _onError = (pos, code, message)=>{
            const offset = typeof pos === 'number' ? pos : Array.isArray(pos) ? pos[0] : pos.offset;
            if (onError) onError(offset, code, message);
            else throw new $e3676dc6987df596$export$c1188aaa49090a5c([
                offset,
                offset + 1
            ], code, message);
        };
        switch(token.type){
            case 'scalar':
            case 'single-quoted-scalar':
            case 'double-quoted-scalar':
                return $46feae795a3f9ead$export$2f1c3b16290da8c8(token, strict, _onError);
            case 'block-scalar':
                return $201887ea634d8746$export$14aaa50a76ee848f(token, strict, _onError);
        }
    }
    return null;
}
/**
 * Create a new scalar token with `value`
 *
 * Values that represent an actual string but may be parsed as a different type should use a `type` other than `'PLAIN'`,
 * as this function does not support any schema operations and won't check for such conflicts.
 *
 * @param value The string representation of the value, which will have its content properly indented.
 * @param context.end Comments and whitespace after the end of the value, or after the block scalar header. If undefined, a newline will be added.
 * @param context.implicitKey Being within an implicit key may affect the resolved type of the token's value.
 * @param context.indent The indent level of the token.
 * @param context.inFlow Is this scalar within a flow collection? This may affect the resolved type of the token's value.
 * @param context.offset The offset position of the token.
 * @param context.type The preferred type of the scalar token. If undefined, the previous type of the `token` will be used, defaulting to `'PLAIN'`.
 */ function $b8b1f9c2defecec2$export$bc6e7c97bb928c0c(value, context) {
    var _a;
    const { implicitKey: implicitKey = false , indent: indent , inFlow: inFlow = false , offset: offset = -1 , type: type = 'PLAIN'  } = context;
    const source = $53767de6fc69a657$export$3457ffbf9a1af5aa({
        type: type,
        value: value
    }, {
        implicitKey: implicitKey,
        indent: indent > 0 ? ' '.repeat(indent) : '',
        inFlow: inFlow,
        options: {
            blockQuote: true,
            lineWidth: -1
        }
    });
    const end = (_a = context.end) !== null && _a !== void 0 ? _a : [
        {
            type: 'newline',
            offset: -1,
            indent: indent,
            source: '\n'
        }
    ];
    switch(source[0]){
        case '|':
        case '>':
            {
                const he = source.indexOf('\n');
                const head = source.substring(0, he);
                const body = source.substring(he + 1) + '\n';
                const props = [
                    {
                        type: 'block-scalar-header',
                        offset: offset,
                        indent: indent,
                        source: head
                    }
                ];
                if (!$b8b1f9c2defecec2$var$addEndtoBlockProps(props, end)) props.push({
                    type: 'newline',
                    offset: -1,
                    indent: indent,
                    source: '\n'
                });
                return {
                    type: 'block-scalar',
                    offset: offset,
                    indent: indent,
                    props: props,
                    source: body
                };
            }
        case '"':
            return {
                type: 'double-quoted-scalar',
                offset: offset,
                indent: indent,
                source: source,
                end: end
            };
        case "'":
            return {
                type: 'single-quoted-scalar',
                offset: offset,
                indent: indent,
                source: source,
                end: end
            };
        default:
            return {
                type: 'scalar',
                offset: offset,
                indent: indent,
                source: source,
                end: end
            };
    }
}
/**
 * Set the value of `token` to the given string `value`, overwriting any previous contents and type that it may have.
 *
 * Best efforts are made to retain any comments previously associated with the `token`,
 * though all contents within a collection's `items` will be overwritten.
 *
 * Values that represent an actual string but may be parsed as a different type should use a `type` other than `'PLAIN'`,
 * as this function does not support any schema operations and won't check for such conflicts.
 *
 * @param token Any token. If it does not include an `indent` value, the value will be stringified as if it were an implicit key.
 * @param value The string representation of the value, which will have its content properly indented.
 * @param context.afterKey In most cases, values after a key should have an additional level of indentation.
 * @param context.implicitKey Being within an implicit key may affect the resolved type of the token's value.
 * @param context.inFlow Being within a flow collection may affect the resolved type of the token's value.
 * @param context.type The preferred type of the scalar token. If undefined, the previous type of the `token` will be used, defaulting to `'PLAIN'`.
 */ function $b8b1f9c2defecec2$export$ca02adc222d12536(token, value, context = {}) {
    let { afterKey: afterKey = false , implicitKey: implicitKey = false , inFlow: inFlow = false , type: type  } = context;
    let indent = 'indent' in token ? token.indent : null;
    if (afterKey && typeof indent === 'number') indent += 2;
    if (!type) switch(token.type){
        case 'single-quoted-scalar':
            type = 'QUOTE_SINGLE';
            break;
        case 'double-quoted-scalar':
            type = 'QUOTE_DOUBLE';
            break;
        case 'block-scalar':
            {
                const header = token.props[0];
                if (header.type !== 'block-scalar-header') throw new Error('Invalid block scalar header');
                type = header.source[0] === '>' ? 'BLOCK_FOLDED' : 'BLOCK_LITERAL';
                break;
            }
        default:
            type = 'PLAIN';
    }
    const source = $53767de6fc69a657$export$3457ffbf9a1af5aa({
        type: type,
        value: value
    }, {
        implicitKey: implicitKey || indent === null,
        indent: indent !== null && indent > 0 ? ' '.repeat(indent) : '',
        inFlow: inFlow,
        options: {
            blockQuote: true,
            lineWidth: -1
        }
    });
    switch(source[0]){
        case '|':
        case '>':
            $b8b1f9c2defecec2$var$setBlockScalarValue(token, source);
            break;
        case '"':
            $b8b1f9c2defecec2$var$setFlowScalarValue(token, source, 'double-quoted-scalar');
            break;
        case "'":
            $b8b1f9c2defecec2$var$setFlowScalarValue(token, source, 'single-quoted-scalar');
            break;
        default:
            $b8b1f9c2defecec2$var$setFlowScalarValue(token, source, 'scalar');
    }
}
function $b8b1f9c2defecec2$var$setBlockScalarValue(token, source) {
    const he = source.indexOf('\n');
    const head = source.substring(0, he);
    const body = source.substring(he + 1) + '\n';
    if (token.type === 'block-scalar') {
        const header = token.props[0];
        if (header.type !== 'block-scalar-header') throw new Error('Invalid block scalar header');
        header.source = head;
        token.source = body;
    } else {
        const { offset: offset  } = token;
        const indent = 'indent' in token ? token.indent : -1;
        const props = [
            {
                type: 'block-scalar-header',
                offset: offset,
                indent: indent,
                source: head
            }
        ];
        if (!$b8b1f9c2defecec2$var$addEndtoBlockProps(props, 'end' in token ? token.end : undefined)) props.push({
            type: 'newline',
            offset: -1,
            indent: indent,
            source: '\n'
        });
        for (const key of Object.keys(token))if (key !== 'type' && key !== 'offset') delete token[key];
        Object.assign(token, {
            type: 'block-scalar',
            indent: indent,
            props: props,
            source: body
        });
    }
}
/** @returns `true` if last token is a newline */ function $b8b1f9c2defecec2$var$addEndtoBlockProps(props, end) {
    if (end) for (const st of end)switch(st.type){
        case 'space':
        case 'comment':
            props.push(st);
            break;
        case 'newline':
            props.push(st);
            return true;
    }
    return false;
}
function $b8b1f9c2defecec2$var$setFlowScalarValue(token, source, type) {
    switch(token.type){
        case 'scalar':
        case 'double-quoted-scalar':
        case 'single-quoted-scalar':
            token.type = type;
            token.source = source;
            break;
        case 'block-scalar':
            {
                const end = token.props.slice(1);
                let oa = source.length;
                if (token.props[0].type === 'block-scalar-header') oa -= token.props[0].source.length;
                for (const tok of end)tok.offset += oa;
                delete token.props;
                Object.assign(token, {
                    type: type,
                    source: source,
                    end: end
                });
                break;
            }
        case 'block-map':
        case 'block-seq':
            {
                const offset = token.offset + source.length;
                const nl = {
                    type: 'newline',
                    offset: offset,
                    indent: token.indent,
                    source: '\n'
                };
                delete token.items;
                Object.assign(token, {
                    type: type,
                    source: source,
                    end: [
                        nl
                    ]
                });
                break;
            }
        default:
            {
                const indent = 'indent' in token ? token.indent : -1;
                const end = 'end' in token && Array.isArray(token.end) ? token.end.filter((st)=>st.type === 'space' || st.type === 'comment' || st.type === 'newline'
                ) : [];
                for (const key of Object.keys(token))if (key !== 'type' && key !== 'offset') delete token[key];
                Object.assign(token, {
                    type: type,
                    indent: indent,
                    source: source,
                    end: end
                });
            }
    }
}


/**
 * Stringify a CST document, token, or collection item
 *
 * Fair warning: This applies no validation whatsoever, and
 * simply concatenates the sources in their logical order.
 */ const $ba30d47f1f134eb1$export$fac44ee5b035f737 = (cst)=>'type' in cst ? $ba30d47f1f134eb1$var$stringifyToken(cst) : $ba30d47f1f134eb1$var$stringifyItem(cst)
;
function $ba30d47f1f134eb1$var$stringifyToken(token) {
    switch(token.type){
        case 'block-scalar':
            {
                let res = '';
                for (const tok of token.props)res += $ba30d47f1f134eb1$var$stringifyToken(tok);
                return res + token.source;
            }
        case 'block-map':
        case 'block-seq':
            {
                let res = '';
                for (const item of token.items)res += $ba30d47f1f134eb1$var$stringifyItem(item);
                return res;
            }
        case 'flow-collection':
            {
                let res = token.start.source;
                for (const item of token.items)res += $ba30d47f1f134eb1$var$stringifyItem(item);
                for (const st of token.end)res += st.source;
                return res;
            }
        case 'document':
            {
                let res = $ba30d47f1f134eb1$var$stringifyItem(token);
                if (token.end) for (const st of token.end)res += st.source;
                return res;
            }
        default:
            {
                let res = token.source;
                if ('end' in token && token.end) for (const st of token.end)res += st.source;
                return res;
            }
    }
}
function $ba30d47f1f134eb1$var$stringifyItem({ start: start , key: key , sep: sep , value: value  }) {
    let res = '';
    for (const st of start)res += st.source;
    if (key) res += $ba30d47f1f134eb1$var$stringifyToken(key);
    if (sep) for (const st1 of sep)res += st1.source;
    if (value) res += $ba30d47f1f134eb1$var$stringifyToken(value);
    return res;
}


const $5b7b1ed276595850$var$BREAK = Symbol('break visit');
const $5b7b1ed276595850$var$SKIP = Symbol('skip children');
const $5b7b1ed276595850$var$REMOVE = Symbol('remove item');
/**
 * Apply a visitor to a CST document or item.
 *
 * Walks through the tree (depth-first) starting from the root, calling a
 * `visitor` function with two arguments when entering each item:
 *   - `item`: The current item, which included the following members:
 *     - `start: SourceToken[]` – Source tokens before the key or value,
 *       possibly including its anchor or tag.
 *     - `key?: Token | null` – Set for pair values. May then be `null`, if
 *       the key before the `:` separator is empty.
 *     - `sep?: SourceToken[]` – Source tokens between the key and the value,
 *       which should include the `:` map value indicator if `value` is set.
 *     - `value?: Token` – The value of a sequence item, or of a map pair.
 *   - `path`: The steps from the root to the current node, as an array of
 *     `['key' | 'value', number]` tuples.
 *
 * The return value of the visitor may be used to control the traversal:
 *   - `undefined` (default): Do nothing and continue
 *   - `visit.SKIP`: Do not visit the children of this token, continue with
 *      next sibling
 *   - `visit.BREAK`: Terminate traversal completely
 *   - `visit.REMOVE`: Remove the current item, then continue with the next one
 *   - `number`: Set the index of the next step. This is useful especially if
 *     the index of the current token has changed.
 *   - `function`: Define the next visitor for this item. After the original
 *     visitor is called on item entry, next visitors are called after handling
 *     a non-empty `key` and when exiting the item.
 */ function $5b7b1ed276595850$export$bf638b60ea8b89b7(cst, visitor) {
    if ('type' in cst && cst.type === 'document') cst = {
        start: cst.start,
        value: cst.value
    };
    $5b7b1ed276595850$var$_visit(Object.freeze([]), cst, visitor);
}
// Without the `as symbol` casts, TS declares these in the `visit`
// namespace using `var`, but then complains about that because
// `unique symbol` must be `const`.
/** Terminate visit traversal completely */ $5b7b1ed276595850$export$bf638b60ea8b89b7.BREAK = $5b7b1ed276595850$var$BREAK;
/** Do not visit the children of the current item */ $5b7b1ed276595850$export$bf638b60ea8b89b7.SKIP = $5b7b1ed276595850$var$SKIP;
/** Remove the current item */ $5b7b1ed276595850$export$bf638b60ea8b89b7.REMOVE = $5b7b1ed276595850$var$REMOVE;
/** Find the item at `path` from `cst` as the root */ $5b7b1ed276595850$export$bf638b60ea8b89b7.itemAtPath = (cst, path)=>{
    let item = cst;
    for (const [field, index] of path){
        const tok = item === null || item === void 0 ? void 0 : item[field];
        if (tok && 'items' in tok) item = tok.items[index];
        else return undefined;
    }
    return item;
};
/**
 * Get the immediate parent collection of the item at `path` from `cst` as the root.
 *
 * Throws an error if the collection is not found, which should never happen if the item itself exists.
 */ $5b7b1ed276595850$export$bf638b60ea8b89b7.parentCollection = (cst, path)=>{
    const parent = $5b7b1ed276595850$export$bf638b60ea8b89b7.itemAtPath(cst, path.slice(0, -1));
    const field = path[path.length - 1][0];
    const coll = parent === null || parent === void 0 ? void 0 : parent[field];
    if (coll && 'items' in coll) return coll;
    throw new Error('Parent collection not found');
};
function $5b7b1ed276595850$var$_visit(path, item, visitor) {
    let ctrl = visitor(item, path);
    if (typeof ctrl === 'symbol') return ctrl;
    for (const field of [
        'key',
        'value'
    ]){
        const token = item[field];
        if (token && 'items' in token) {
            for(let i = 0; i < token.items.length; ++i){
                const ci = $5b7b1ed276595850$var$_visit(Object.freeze(path.concat([
                    [
                        field,
                        i
                    ]
                ])), token.items[i], visitor);
                if (typeof ci === 'number') i = ci - 1;
                else if (ci === $5b7b1ed276595850$var$BREAK) return $5b7b1ed276595850$var$BREAK;
                else if (ci === $5b7b1ed276595850$var$REMOVE) {
                    token.items.splice(i, 1);
                    i -= 1;
                }
            }
            if (typeof ctrl === 'function' && field === 'key') ctrl = ctrl(item, path);
        }
    }
    return typeof ctrl === 'function' ? ctrl(item, path) : ctrl;
}


/** The byte order mark */ const $4e74858e15934f7b$export$159b0f4ed2e9d663 = '\u{FEFF}';
/** Start of doc-mode */ const $4e74858e15934f7b$export$ef011b4e114b1fba = '\x02'; // C0: Start of Text
/** Unexpected end of flow-mode */ const $4e74858e15934f7b$export$f3c6ac4b8e8fc405 = '\x18'; // C0: Cancel
/** Next token is a scalar value */ const $4e74858e15934f7b$export$8dde1211cb7c9d16 = '\x1f'; // C0: Unit Separator
/** @returns `true` if `token` is a flow or block collection */ const $4e74858e15934f7b$export$cea7aa84e978eba5 = (token)=>!!token && 'items' in token
;
/** @returns `true` if `token` is a flow or block scalar; not an alias */ const $4e74858e15934f7b$export$8f3495e22775e76c = (token)=>!!token && (token.type === 'scalar' || token.type === 'single-quoted-scalar' || token.type === 'double-quoted-scalar' || token.type === 'block-scalar')
;
/* istanbul ignore next */ /** Get a printable representation of a lexer token */ function $4e74858e15934f7b$export$a7c32ec3dbc53b0d(token) {
    switch(token){
        case $4e74858e15934f7b$export$159b0f4ed2e9d663:
            return '<BOM>';
        case $4e74858e15934f7b$export$ef011b4e114b1fba:
            return '<DOC>';
        case $4e74858e15934f7b$export$f3c6ac4b8e8fc405:
            return '<FLOW_END>';
        case $4e74858e15934f7b$export$8dde1211cb7c9d16:
            return '<SCALAR>';
        default:
            return JSON.stringify(token);
    }
}
/** Identify the type of a lexer token. May return `null` for unknown tokens. */ function $4e74858e15934f7b$export$290cf9fbadf470bd(source) {
    switch(source){
        case $4e74858e15934f7b$export$159b0f4ed2e9d663:
            return 'byte-order-mark';
        case $4e74858e15934f7b$export$ef011b4e114b1fba:
            return 'doc-mode';
        case $4e74858e15934f7b$export$f3c6ac4b8e8fc405:
            return 'flow-error-end';
        case $4e74858e15934f7b$export$8dde1211cb7c9d16:
            return 'scalar';
        case '---':
            return 'doc-start';
        case '...':
            return 'doc-end';
        case '':
        case '\n':
        case '\r\n':
            return 'newline';
        case '-':
            return 'seq-item-ind';
        case '?':
            return 'explicit-key-ind';
        case ':':
            return 'map-value-ind';
        case '{':
            return 'flow-map-start';
        case '}':
            return 'flow-map-end';
        case '[':
            return 'flow-seq-start';
        case ']':
            return 'flow-seq-end';
        case ',':
            return 'comma';
    }
    switch(source[0]){
        case ' ':
        case '\t':
            return 'space';
        case '#':
            return 'comment';
        case '%':
            return 'directive-line';
        case '*':
            return 'alias';
        case '&':
            return 'anchor';
        case '!':
            return 'tag';
        case "'":
            return 'single-quoted-scalar';
        case '"':
            return 'double-quoted-scalar';
        case '|':
        case '>':
            return 'block-scalar-header';
    }
    return null;
}




const $bff54b384d43a86a$var$BREAK = Symbol('break visit');
const $bff54b384d43a86a$var$SKIP = Symbol('skip children');
const $bff54b384d43a86a$var$REMOVE = Symbol('remove node');
/**
 * Apply a visitor to an AST node or document.
 *
 * Walks through the tree (depth-first) starting from `node`, calling a
 * `visitor` function with three arguments:
 *   - `key`: For sequence values and map `Pair`, the node's index in the
 *     collection. Within a `Pair`, `'key'` or `'value'`, correspondingly.
 *     `null` for the root node.
 *   - `node`: The current node.
 *   - `path`: The ancestry of the current node.
 *
 * The return value of the visitor may be used to control the traversal:
 *   - `undefined` (default): Do nothing and continue
 *   - `visit.SKIP`: Do not visit the children of this node, continue with next
 *     sibling
 *   - `visit.BREAK`: Terminate traversal completely
 *   - `visit.REMOVE`: Remove the current node, then continue with the next one
 *   - `Node`: Replace the current node, then continue by visiting it
 *   - `number`: While iterating the items of a sequence or map, set the index
 *     of the next step. This is useful especially if the index of the current
 *     node has changed.
 *
 * If `visitor` is a single function, it will be called with all values
 * encountered in the tree, including e.g. `null` values. Alternatively,
 * separate visitor functions may be defined for each `Map`, `Pair`, `Seq`,
 * `Alias` and `Scalar` node. To define the same visitor function for more than
 * one node type, use the `Collection` (map and seq), `Value` (map, seq & scalar)
 * and `Node` (alias, map, seq & scalar) targets. Of all these, only the most
 * specific defined one will be used for each node.
 */ function $bff54b384d43a86a$export$bf638b60ea8b89b7(node, visitor) {
    const visitor_ = $bff54b384d43a86a$var$initVisitor(visitor);
    if ($f5f4f9194ee4d0b0$export$62858bae88b53fd0(node)) {
        const cd = $bff54b384d43a86a$var$visit_(null, node.contents, visitor_, Object.freeze([
            node
        ]));
        if (cd === $bff54b384d43a86a$var$REMOVE) node.contents = null;
    } else $bff54b384d43a86a$var$visit_(null, node, visitor_, Object.freeze([]));
}
// Without the `as symbol` casts, TS declares these in the `visit`
// namespace using `var`, but then complains about that because
// `unique symbol` must be `const`.
/** Terminate visit traversal completely */ $bff54b384d43a86a$export$bf638b60ea8b89b7.BREAK = $bff54b384d43a86a$var$BREAK;
/** Do not visit the children of the current node */ $bff54b384d43a86a$export$bf638b60ea8b89b7.SKIP = $bff54b384d43a86a$var$SKIP;
/** Remove the current node */ $bff54b384d43a86a$export$bf638b60ea8b89b7.REMOVE = $bff54b384d43a86a$var$REMOVE;
function $bff54b384d43a86a$var$visit_(key, node, visitor, path) {
    const ctrl = $bff54b384d43a86a$var$callVisitor(key, node, visitor, path);
    if ($f5f4f9194ee4d0b0$export$8ee0fc9ee280b4ee(ctrl) || $f5f4f9194ee4d0b0$export$7c8d445944656308(ctrl)) {
        $bff54b384d43a86a$var$replaceNode(key, path, ctrl);
        return $bff54b384d43a86a$var$visit_(key, ctrl, visitor, path);
    }
    if (typeof ctrl !== 'symbol') {
        if ($f5f4f9194ee4d0b0$export$cea7aa84e978eba5(node)) {
            path = Object.freeze(path.concat(node));
            for(let i = 0; i < node.items.length; ++i){
                const ci = $bff54b384d43a86a$var$visit_(i, node.items[i], visitor, path);
                if (typeof ci === 'number') i = ci - 1;
                else if (ci === $bff54b384d43a86a$var$BREAK) return $bff54b384d43a86a$var$BREAK;
                else if (ci === $bff54b384d43a86a$var$REMOVE) {
                    node.items.splice(i, 1);
                    i -= 1;
                }
            }
        } else if ($f5f4f9194ee4d0b0$export$7c8d445944656308(node)) {
            path = Object.freeze(path.concat(node));
            const ck = $bff54b384d43a86a$var$visit_('key', node.key, visitor, path);
            if (ck === $bff54b384d43a86a$var$BREAK) return $bff54b384d43a86a$var$BREAK;
            else if (ck === $bff54b384d43a86a$var$REMOVE) node.key = null;
            const cv = $bff54b384d43a86a$var$visit_('value', node.value, visitor, path);
            if (cv === $bff54b384d43a86a$var$BREAK) return $bff54b384d43a86a$var$BREAK;
            else if (cv === $bff54b384d43a86a$var$REMOVE) node.value = null;
        }
    }
    return ctrl;
}
/**
 * Apply an async visitor to an AST node or document.
 *
 * Walks through the tree (depth-first) starting from `node`, calling a
 * `visitor` function with three arguments:
 *   - `key`: For sequence values and map `Pair`, the node's index in the
 *     collection. Within a `Pair`, `'key'` or `'value'`, correspondingly.
 *     `null` for the root node.
 *   - `node`: The current node.
 *   - `path`: The ancestry of the current node.
 *
 * The return value of the visitor may be used to control the traversal:
 *   - `Promise`: Must resolve to one of the following values
 *   - `undefined` (default): Do nothing and continue
 *   - `visit.SKIP`: Do not visit the children of this node, continue with next
 *     sibling
 *   - `visit.BREAK`: Terminate traversal completely
 *   - `visit.REMOVE`: Remove the current node, then continue with the next one
 *   - `Node`: Replace the current node, then continue by visiting it
 *   - `number`: While iterating the items of a sequence or map, set the index
 *     of the next step. This is useful especially if the index of the current
 *     node has changed.
 *
 * If `visitor` is a single function, it will be called with all values
 * encountered in the tree, including e.g. `null` values. Alternatively,
 * separate visitor functions may be defined for each `Map`, `Pair`, `Seq`,
 * `Alias` and `Scalar` node. To define the same visitor function for more than
 * one node type, use the `Collection` (map and seq), `Value` (map, seq & scalar)
 * and `Node` (alias, map, seq & scalar) targets. Of all these, only the most
 * specific defined one will be used for each node.
 */ async function $bff54b384d43a86a$export$3c4f5d970a5e6a3b(node, visitor) {
    const visitor_ = $bff54b384d43a86a$var$initVisitor(visitor);
    if ($f5f4f9194ee4d0b0$export$62858bae88b53fd0(node)) {
        const cd = await $bff54b384d43a86a$var$visitAsync_(null, node.contents, visitor_, Object.freeze([
            node
        ]));
        if (cd === $bff54b384d43a86a$var$REMOVE) node.contents = null;
    } else await $bff54b384d43a86a$var$visitAsync_(null, node, visitor_, Object.freeze([]));
}
// Without the `as symbol` casts, TS declares these in the `visit`
// namespace using `var`, but then complains about that because
// `unique symbol` must be `const`.
/** Terminate visit traversal completely */ $bff54b384d43a86a$export$3c4f5d970a5e6a3b.BREAK = $bff54b384d43a86a$var$BREAK;
/** Do not visit the children of the current node */ $bff54b384d43a86a$export$3c4f5d970a5e6a3b.SKIP = $bff54b384d43a86a$var$SKIP;
/** Remove the current node */ $bff54b384d43a86a$export$3c4f5d970a5e6a3b.REMOVE = $bff54b384d43a86a$var$REMOVE;
async function $bff54b384d43a86a$var$visitAsync_(key, node, visitor, path) {
    const ctrl = await $bff54b384d43a86a$var$callVisitor(key, node, visitor, path);
    if ($f5f4f9194ee4d0b0$export$8ee0fc9ee280b4ee(ctrl) || $f5f4f9194ee4d0b0$export$7c8d445944656308(ctrl)) {
        $bff54b384d43a86a$var$replaceNode(key, path, ctrl);
        return $bff54b384d43a86a$var$visitAsync_(key, ctrl, visitor, path);
    }
    if (typeof ctrl !== 'symbol') {
        if ($f5f4f9194ee4d0b0$export$cea7aa84e978eba5(node)) {
            path = Object.freeze(path.concat(node));
            for(let i = 0; i < node.items.length; ++i){
                const ci = await $bff54b384d43a86a$var$visitAsync_(i, node.items[i], visitor, path);
                if (typeof ci === 'number') i = ci - 1;
                else if (ci === $bff54b384d43a86a$var$BREAK) return $bff54b384d43a86a$var$BREAK;
                else if (ci === $bff54b384d43a86a$var$REMOVE) {
                    node.items.splice(i, 1);
                    i -= 1;
                }
            }
        } else if ($f5f4f9194ee4d0b0$export$7c8d445944656308(node)) {
            path = Object.freeze(path.concat(node));
            const ck = await $bff54b384d43a86a$var$visitAsync_('key', node.key, visitor, path);
            if (ck === $bff54b384d43a86a$var$BREAK) return $bff54b384d43a86a$var$BREAK;
            else if (ck === $bff54b384d43a86a$var$REMOVE) node.key = null;
            const cv = await $bff54b384d43a86a$var$visitAsync_('value', node.value, visitor, path);
            if (cv === $bff54b384d43a86a$var$BREAK) return $bff54b384d43a86a$var$BREAK;
            else if (cv === $bff54b384d43a86a$var$REMOVE) node.value = null;
        }
    }
    return ctrl;
}
function $bff54b384d43a86a$var$initVisitor(visitor) {
    if (typeof visitor === 'object' && (visitor.Collection || visitor.Node || visitor.Value)) return Object.assign({
        Alias: visitor.Node,
        Map: visitor.Node,
        Scalar: visitor.Node,
        Seq: visitor.Node
    }, visitor.Value && {
        Map: visitor.Value,
        Scalar: visitor.Value,
        Seq: visitor.Value
    }, visitor.Collection && {
        Map: visitor.Collection,
        Seq: visitor.Collection
    }, visitor);
    return visitor;
}
function $bff54b384d43a86a$var$callVisitor(key, node, visitor, path) {
    var _a, _b, _c, _d, _e;
    if (typeof visitor === 'function') return visitor(key, node, path);
    if ($f5f4f9194ee4d0b0$export$5c90113a285f2241(node)) return (_a = visitor.Map) === null || _a === void 0 ? void 0 : _a.call(visitor, key, node, path);
    if ($f5f4f9194ee4d0b0$export$342ac1d101ffe14b(node)) return (_b = visitor.Seq) === null || _b === void 0 ? void 0 : _b.call(visitor, key, node, path);
    if ($f5f4f9194ee4d0b0$export$7c8d445944656308(node)) return (_c = visitor.Pair) === null || _c === void 0 ? void 0 : _c.call(visitor, key, node, path);
    if ($f5f4f9194ee4d0b0$export$8f3495e22775e76c(node)) return (_d = visitor.Scalar) === null || _d === void 0 ? void 0 : _d.call(visitor, key, node, path);
    if ($f5f4f9194ee4d0b0$export$c6275352883a2b3e(node)) return (_e = visitor.Alias) === null || _e === void 0 ? void 0 : _e.call(visitor, key, node, path);
    return undefined;
}
function $bff54b384d43a86a$var$replaceNode(key, path, node) {
    const parent = path[path.length - 1];
    if ($f5f4f9194ee4d0b0$export$cea7aa84e978eba5(parent)) parent.items[key] = node;
    else if ($f5f4f9194ee4d0b0$export$7c8d445944656308(parent)) {
        if (key === 'key') parent.key = node;
        else parent.value = node;
    } else if ($f5f4f9194ee4d0b0$export$62858bae88b53fd0(parent)) parent.contents = node;
    else {
        const pt = $f5f4f9194ee4d0b0$export$c6275352883a2b3e(parent) ? 'alias' : 'scalar';
        throw new Error(`Cannot replace node with ${pt} parent`);
    }
}


const $b8a939dc4e5e90e4$var$escapeChars = {
    '!': '%21',
    ',': '%2C',
    '[': '%5B',
    ']': '%5D',
    '{': '%7B',
    '}': '%7D'
};
const $b8a939dc4e5e90e4$var$escapeTagName = (tn)=>tn.replace(/[!,[\]{}]/g, (ch)=>$b8a939dc4e5e90e4$var$escapeChars[ch]
    )
;
class $b8a939dc4e5e90e4$export$129646a0e1af8d85 {
    constructor(yaml, tags){
        /**
         * The directives-end/doc-start marker `---`. If `null`, a marker may still be
         * included in the document's stringified representation.
         */ this.docStart = null;
        /** The doc-end marker `...`.  */ this.docEnd = false;
        this.yaml = Object.assign({}, $b8a939dc4e5e90e4$export$129646a0e1af8d85.defaultYaml, yaml);
        this.tags = Object.assign({}, $b8a939dc4e5e90e4$export$129646a0e1af8d85.defaultTags, tags);
    }
    clone() {
        const copy = new $b8a939dc4e5e90e4$export$129646a0e1af8d85(this.yaml, this.tags);
        copy.docStart = this.docStart;
        return copy;
    }
    /**
     * During parsing, get a Directives instance for the current document and
     * update the stream state according to the current version's spec.
     */ atDocument() {
        const res = new $b8a939dc4e5e90e4$export$129646a0e1af8d85(this.yaml, this.tags);
        switch(this.yaml.version){
            case '1.1':
                this.atNextDocument = true;
                break;
            case '1.2':
                this.atNextDocument = false;
                this.yaml = {
                    explicit: $b8a939dc4e5e90e4$export$129646a0e1af8d85.defaultYaml.explicit,
                    version: '1.2'
                };
                this.tags = Object.assign({}, $b8a939dc4e5e90e4$export$129646a0e1af8d85.defaultTags);
                break;
        }
        return res;
    }
    /**
     * @param onError - May be called even if the action was successful
     * @returns `true` on success
     */ add(line, onError) {
        if (this.atNextDocument) {
            this.yaml = {
                explicit: $b8a939dc4e5e90e4$export$129646a0e1af8d85.defaultYaml.explicit,
                version: '1.1'
            };
            this.tags = Object.assign({}, $b8a939dc4e5e90e4$export$129646a0e1af8d85.defaultTags);
            this.atNextDocument = false;
        }
        const parts = line.trim().split(/[ \t]+/);
        const name = parts.shift();
        switch(name){
            case '%TAG':
                {
                    if (parts.length !== 2) {
                        onError(0, '%TAG directive should contain exactly two parts');
                        if (parts.length < 2) return false;
                    }
                    const [handle, prefix] = parts;
                    this.tags[handle] = prefix;
                    return true;
                }
            case '%YAML':
                {
                    this.yaml.explicit = true;
                    if (parts.length !== 1) {
                        onError(0, '%YAML directive should contain exactly one part');
                        return false;
                    }
                    const [version] = parts;
                    if (version === '1.1' || version === '1.2') {
                        this.yaml.version = version;
                        return true;
                    } else {
                        const isValid = /^\d+\.\d+$/.test(version);
                        onError(6, `Unsupported YAML version ${version}`, isValid);
                        return false;
                    }
                }
            default:
                onError(0, `Unknown directive ${name}`, true);
                return false;
        }
    }
    /**
     * Resolves a tag, matching handles to those defined in %TAG directives.
     *
     * @returns Resolved tag, which may also be the non-specific tag `'!'` or a
     *   `'!local'` tag, or `null` if unresolvable.
     */ tagName(source, onError) {
        if (source === '!') return '!'; // non-specific tag
        if (source[0] !== '!') {
            onError(`Not a valid tag: ${source}`);
            return null;
        }
        if (source[1] === '<') {
            const verbatim = source.slice(2, -1);
            if (verbatim === '!' || verbatim === '!!') {
                onError(`Verbatim tags aren't resolved, so ${source} is invalid.`);
                return null;
            }
            if (source[source.length - 1] !== '>') onError('Verbatim tags must end with a >');
            return verbatim;
        }
        const [, handle, suffix] = source.match(/^(.*!)([^!]*)$/);
        if (!suffix) onError(`The ${source} tag has no suffix`);
        const prefix = this.tags[handle];
        if (prefix) return prefix + decodeURIComponent(suffix);
        if (handle === '!') return source; // local tag
        onError(`Could not resolve tag: ${source}`);
        return null;
    }
    /**
     * Given a fully resolved tag, returns its printable string form,
     * taking into account current tag prefixes and defaults.
     */ tagString(tag) {
        for (const [handle, prefix] of Object.entries(this.tags)){
            if (tag.startsWith(prefix)) return handle + $b8a939dc4e5e90e4$var$escapeTagName(tag.substring(prefix.length));
        }
        return tag[0] === '!' ? tag : `!<${tag}>`;
    }
    toString(doc) {
        const lines = this.yaml.explicit ? [
            `%YAML ${this.yaml.version || '1.2'}`
        ] : [];
        const tagEntries = Object.entries(this.tags);
        let tagNames;
        if (doc && tagEntries.length > 0 && $f5f4f9194ee4d0b0$export$8ee0fc9ee280b4ee(doc.contents)) {
            const tags = {};
            $bff54b384d43a86a$export$bf638b60ea8b89b7(doc.contents, (_key, node)=>{
                if ($f5f4f9194ee4d0b0$export$8ee0fc9ee280b4ee(node) && node.tag) tags[node.tag] = true;
            });
            tagNames = Object.keys(tags);
        } else tagNames = [];
        for (const [handle, prefix] of tagEntries){
            if (handle === '!!' && prefix === 'tag:yaml.org,2002:') continue;
            if (!doc || tagNames.some((tn)=>tn.startsWith(prefix)
            )) lines.push(`%TAG ${handle} ${prefix}`);
        }
        return lines.join('\n');
    }
}
$b8a939dc4e5e90e4$export$129646a0e1af8d85.defaultYaml = {
    explicit: false,
    version: '1.2'
};
$b8a939dc4e5e90e4$export$129646a0e1af8d85.defaultTags = {
    '!!': 'tag:yaml.org,2002:'
};




/**
 * Verify that the input string is a valid anchor.
 *
 * Will throw on errors.
 */ function $be49038f6ed5c8f2$export$67b774d238e24409(anchor) {
    if (/[\x00-\x19\s,[\]{}]/.test(anchor)) {
        const sa = JSON.stringify(anchor);
        const msg = `Anchor must not contain whitespace or control characters: ${sa}`;
        throw new Error(msg);
    }
    return true;
}
function $be49038f6ed5c8f2$export$402f230d710ffb75(root) {
    const anchors = new Set();
    $bff54b384d43a86a$export$bf638b60ea8b89b7(root, {
        Value (_key, node) {
            if (node.anchor) anchors.add(node.anchor);
        }
    });
    return anchors;
}
/** Find a new anchor name with the given `prefix` and a one-indexed suffix. */ function $be49038f6ed5c8f2$export$1a7f8f45ec43f9e4(prefix, exclude) {
    for(let i = 1;; ++i){
        const name = `${prefix}${i}`;
        if (!exclude.has(name)) return name;
    }
}
function $be49038f6ed5c8f2$export$5498887d1e6c340c(doc, prefix) {
    const aliasObjects = [];
    const sourceObjects = new Map();
    let prevAnchors = null;
    return {
        onAnchor: (source)=>{
            aliasObjects.push(source);
            if (!prevAnchors) prevAnchors = $be49038f6ed5c8f2$export$402f230d710ffb75(doc);
            const anchor = $be49038f6ed5c8f2$export$1a7f8f45ec43f9e4(prefix, prevAnchors);
            prevAnchors.add(anchor);
            return anchor;
        },
        /**
         * With circular references, the source node is only resolved after all
         * of its child nodes are. This is why anchors are set only after all of
         * the nodes have been created.
         */ setAnchors: ()=>{
            for (const source of aliasObjects){
                const ref = sourceObjects.get(source);
                if (typeof ref === 'object' && ref.anchor && ($f5f4f9194ee4d0b0$export$8f3495e22775e76c(ref.node) || $f5f4f9194ee4d0b0$export$cea7aa84e978eba5(ref.node))) ref.node.anchor = ref.anchor;
                else {
                    const error = new Error('Failed to resolve repeated object (this should not happen)');
                    error.source = source;
                    throw error;
                }
            }
        },
        sourceObjects: sourceObjects
    };
}




class $1fa424ec67fb901b$export$17b520249a85fe16 extends $f5f4f9194ee4d0b0$export$7cc40ad5cb33f2dc {
    constructor(source){
        super($f5f4f9194ee4d0b0$export$6e16f50e77e6cb4d);
        this.source = source;
        Object.defineProperty(this, 'tag', {
            set () {
                throw new Error('Alias nodes cannot have tags');
            }
        });
    }
    /**
     * Resolve the value of this alias within `doc`, finding the last
     * instance of the `source` anchor before this node.
     */ resolve(doc) {
        let found = undefined;
        $bff54b384d43a86a$export$bf638b60ea8b89b7(doc, {
            Node: (_key, node)=>{
                if (node === this) return $bff54b384d43a86a$export$bf638b60ea8b89b7.BREAK;
                if (node.anchor === this.source) found = node;
            }
        });
        return found;
    }
    toJSON(_arg, ctx) {
        if (!ctx) return {
            source: this.source
        };
        const { anchors: anchors , doc: doc , maxAliasCount: maxAliasCount  } = ctx;
        const source = this.resolve(doc);
        if (!source) {
            const msg = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
            throw new ReferenceError(msg);
        }
        const data = anchors.get(source);
        /* istanbul ignore if */ if (!data || data.res === undefined) {
            const msg = 'This should not happen: Alias anchor was not resolved?';
            throw new ReferenceError(msg);
        }
        if (maxAliasCount >= 0) {
            data.count += 1;
            if (data.aliasCount === 0) data.aliasCount = $1fa424ec67fb901b$var$getAliasCount(doc, source, anchors);
            if (data.count * data.aliasCount > maxAliasCount) {
                const msg = 'Excessive alias count indicates a resource exhaustion attack';
                throw new ReferenceError(msg);
            }
        }
        return data.res;
    }
    toString(ctx, _onComment, _onChompKeep) {
        const src = `*${this.source}`;
        if (ctx) {
            $be49038f6ed5c8f2$export$67b774d238e24409(this.source);
            if (ctx.options.verifyAliasOrder && !ctx.anchors.has(this.source)) {
                const msg = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
                throw new Error(msg);
            }
            if (ctx.implicitKey) return `${src} `;
        }
        return src;
    }
}
function $1fa424ec67fb901b$var$getAliasCount(doc, node, anchors) {
    if ($f5f4f9194ee4d0b0$export$c6275352883a2b3e(node)) {
        const source = node.resolve(doc);
        const anchor = anchors && source && anchors.get(source);
        return anchor ? anchor.count * anchor.aliasCount : 0;
    } else if ($f5f4f9194ee4d0b0$export$cea7aa84e978eba5(node)) {
        let count = 0;
        for (const item of node.items){
            const c = $1fa424ec67fb901b$var$getAliasCount(doc, item, anchors);
            if (c > count) count = c;
        }
        return count;
    } else if ($f5f4f9194ee4d0b0$export$7c8d445944656308(node)) {
        const kc = $1fa424ec67fb901b$var$getAliasCount(doc, node.key, anchors);
        const vc = $1fa424ec67fb901b$var$getAliasCount(doc, node.value, anchors);
        return Math.max(kc, vc);
    }
    return 1;
}





const $96c2f6d8a80ba80e$var$defaultTagPrefix = 'tag:yaml.org,2002:';
function $96c2f6d8a80ba80e$var$findTagObject(value, tagName, tags) {
    var _a1;
    if (tagName) {
        const match = tags.filter((t)=>t.tag === tagName
        );
        const tagObj = (_a1 = match.find((t)=>!t.format
        )) !== null && _a1 !== void 0 ? _a1 : match[0];
        if (!tagObj) throw new Error(`Tag ${tagName} not found`);
        return tagObj;
    }
    return tags.find((t)=>{
        var _a;
        return ((_a = t.identify) === null || _a === void 0 ? void 0 : _a.call(t, value)) && !t.format;
    });
}
function $96c2f6d8a80ba80e$export$270e7ba5936d3c48(value, tagName, ctx) {
    var _a, _b;
    if ($f5f4f9194ee4d0b0$export$62858bae88b53fd0(value)) value = value.contents;
    if ($f5f4f9194ee4d0b0$export$8ee0fc9ee280b4ee(value)) return value;
    if ($f5f4f9194ee4d0b0$export$7c8d445944656308(value)) {
        const map = (_b = (_a = ctx.schema[$f5f4f9194ee4d0b0$export$ce970371e0e850bc]).createNode) === null || _b === void 0 ? void 0 : _b.call(_a, ctx.schema, null, ctx);
        map.items.push(value);
        return map;
    }
    if (value instanceof String || value instanceof Number || value instanceof Boolean || typeof BigInt === 'function' && value instanceof BigInt // not supported everywhere
    ) // https://tc39.es/ecma262/#sec-serializejsonproperty
    value = value.valueOf();
    const { aliasDuplicateObjects: aliasDuplicateObjects , onAnchor: onAnchor , onTagObj: onTagObj , schema: schema , sourceObjects: sourceObjects  } = ctx;
    // Detect duplicate references to the same object & use Alias nodes for all
    // after first. The `ref` wrapper allows for circular references to resolve.
    let ref = undefined;
    if (aliasDuplicateObjects && value && typeof value === 'object') {
        ref = sourceObjects.get(value);
        if (ref) {
            if (!ref.anchor) ref.anchor = onAnchor(value);
            return new $1fa424ec67fb901b$export$17b520249a85fe16(ref.anchor);
        } else {
            ref = {
                anchor: null,
                node: null
            };
            sourceObjects.set(value, ref);
        }
    }
    if (tagName === null || tagName === void 0 ? void 0 : tagName.startsWith('!!')) tagName = $96c2f6d8a80ba80e$var$defaultTagPrefix + tagName.slice(2);
    let tagObj = $96c2f6d8a80ba80e$var$findTagObject(value, tagName, schema.tags);
    if (!tagObj) {
        if (value && typeof value.toJSON === 'function') // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        value = value.toJSON();
        if (!value || typeof value !== 'object') {
            const node = new $1e4079dce2ff1bd7$export$595dbf49c602a1f(value);
            if (ref) ref.node = node;
            return node;
        }
        tagObj = value instanceof Map ? schema[$f5f4f9194ee4d0b0$export$ce970371e0e850bc] : Symbol.iterator in Object(value) ? schema[$f5f4f9194ee4d0b0$export$200ef2dcd45611c9] : schema[$f5f4f9194ee4d0b0$export$ce970371e0e850bc];
    }
    if (onTagObj) {
        onTagObj(tagObj);
        delete ctx.onTagObj;
    }
    const node = (tagObj === null || tagObj === void 0 ? void 0 : tagObj.createNode) ? tagObj.createNode(ctx.schema, value, ctx) : new $1e4079dce2ff1bd7$export$595dbf49c602a1f(value);
    if (tagName) node.tag = tagName;
    if (ref) ref.node = node;
    return node;
}



function $c5947d2357a68267$export$f5ac8bc6072340dd(schema, path, value) {
    let v = value;
    for(let i = path.length - 1; i >= 0; --i){
        const k = path[i];
        if (typeof k === 'number' && Number.isInteger(k) && k >= 0) {
            const a = [];
            a[k] = v;
            v = a;
        } else v = new Map([
            [
                k,
                v
            ]
        ]);
    }
    return $96c2f6d8a80ba80e$export$270e7ba5936d3c48(v, undefined, {
        aliasDuplicateObjects: false,
        keepUndefined: false,
        onAnchor: ()=>{
            throw new Error('This should not happen, please report a bug.');
        },
        schema: schema,
        sourceObjects: new Map()
    });
}
// null, undefined, or an empty non-string iterable (e.g. [])
const $c5947d2357a68267$export$e3bfca790bd8f9da = (path)=>path == null || typeof path === 'object' && !!path[Symbol.iterator]().next().done
;
class $c5947d2357a68267$export$fb8073518f34e6ec extends $f5f4f9194ee4d0b0$export$7cc40ad5cb33f2dc {
    constructor(type, schema){
        super(type);
        Object.defineProperty(this, 'schema', {
            value: schema,
            configurable: true,
            enumerable: false,
            writable: true
        });
    }
    /**
     * Create a copy of this collection.
     *
     * @param schema - If defined, overwrites the original's schema
     */ clone(schema) {
        const copy = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
        if (schema) copy.schema = schema;
        copy.items = copy.items.map((it)=>$f5f4f9194ee4d0b0$export$8ee0fc9ee280b4ee(it) || $f5f4f9194ee4d0b0$export$7c8d445944656308(it) ? it.clone(schema) : it
        );
        if (this.range) copy.range = this.range.slice();
        return copy;
    }
    /**
     * Adds a value to the collection. For `!!map` and `!!omap` the value must
     * be a Pair instance or a `{ key, value }` object, which may not have a key
     * that already exists in the map.
     */ addIn(path, value) {
        if ($c5947d2357a68267$export$e3bfca790bd8f9da(path)) this.add(value);
        else {
            const [key, ...rest] = path;
            const node = this.get(key, true);
            if ($f5f4f9194ee4d0b0$export$cea7aa84e978eba5(node)) node.addIn(rest, value);
            else if (node === undefined && this.schema) this.set(key, $c5947d2357a68267$export$f5ac8bc6072340dd(this.schema, rest, value));
            else throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
        }
    }
    /**
     * Removes a value from the collection.
     * @returns `true` if the item was found and removed.
     */ deleteIn(path) {
        const [key, ...rest] = path;
        if (rest.length === 0) return this.delete(key);
        const node = this.get(key, true);
        if ($f5f4f9194ee4d0b0$export$cea7aa84e978eba5(node)) return node.deleteIn(rest);
        else throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
    }
    /**
     * Returns item at `key`, or `undefined` if not found. By default unwraps
     * scalar values from their surrounding node; to disable set `keepScalar` to
     * `true` (collections are always returned intact).
     */ getIn(path, keepScalar) {
        const [key, ...rest] = path;
        const node = this.get(key, true);
        if (rest.length === 0) return !keepScalar && $f5f4f9194ee4d0b0$export$8f3495e22775e76c(node) ? node.value : node;
        else return $f5f4f9194ee4d0b0$export$cea7aa84e978eba5(node) ? node.getIn(rest, keepScalar) : undefined;
    }
    hasAllNullValues(allowScalar) {
        return this.items.every((node)=>{
            if (!$f5f4f9194ee4d0b0$export$7c8d445944656308(node)) return false;
            const n = node.value;
            return n == null || allowScalar && $f5f4f9194ee4d0b0$export$8f3495e22775e76c(n) && n.value == null && !n.commentBefore && !n.comment && !n.tag;
        });
    }
    /**
     * Checks if the collection includes a value with the key `key`.
     */ hasIn(path) {
        const [key, ...rest] = path;
        if (rest.length === 0) return this.has(key);
        const node = this.get(key, true);
        return $f5f4f9194ee4d0b0$export$cea7aa84e978eba5(node) ? node.hasIn(rest) : false;
    }
    /**
     * Sets a value in this collection. For `!!set`, `value` needs to be a
     * boolean to add/remove the item from the set.
     */ setIn(path, value) {
        const [key, ...rest] = path;
        if (rest.length === 0) this.set(key, value);
        else {
            const node = this.get(key, true);
            if ($f5f4f9194ee4d0b0$export$cea7aa84e978eba5(node)) node.setIn(rest, value);
            else if (node === undefined && this.schema) this.set(key, $c5947d2357a68267$export$f5ac8bc6072340dd(this.schema, rest, value));
            else throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
        }
    }
}
$c5947d2357a68267$export$fb8073518f34e6ec.maxFlowStringSingleLineLength = 60;








/**
 * Stringifies a comment.
 *
 * Empty comment lines are left empty,
 * lines consisting of a single space are replaced by `#`,
 * and all other lines are prefixed with a `#`.
 */ const $ccd23ca1884f7fff$export$bda2970260483e9e = (str)=>str.replace(/^(?!$)(?: $)?/gm, '#')
;
function $ccd23ca1884f7fff$export$9933eb161eea191d(comment, indent) {
    if (/^\n+$/.test(comment)) return comment.substring(1);
    return indent ? comment.replace(/^(?! *$)/gm, indent) : comment;
}
const $ccd23ca1884f7fff$export$5d080f5a78d4f5b3 = (str, indent, comment)=>str.endsWith('\n') ? $ccd23ca1884f7fff$export$9933eb161eea191d(comment, indent) : comment.includes('\n') ? '\n' + $ccd23ca1884f7fff$export$9933eb161eea191d(comment, indent) : (str.endsWith(' ') ? '' : ' ') + comment
;



function $ede9f5b54624ae33$export$829faaf53c257c4d(doc, options) {
    const opt = Object.assign({
        blockQuote: true,
        commentString: $ccd23ca1884f7fff$export$bda2970260483e9e,
        defaultKeyType: null,
        defaultStringType: 'PLAIN',
        directives: null,
        doubleQuotedAsJSON: false,
        doubleQuotedMinMultiLineLength: 40,
        falseStr: 'false',
        indentSeq: true,
        lineWidth: 80,
        minContentWidth: 20,
        nullStr: 'null',
        simpleKeys: false,
        singleQuote: null,
        trueStr: 'true',
        verifyAliasOrder: true
    }, doc.schema.toStringOptions, options);
    let inFlow;
    switch(opt.collectionStyle){
        case 'block':
            inFlow = false;
            break;
        case 'flow':
            inFlow = true;
            break;
        default:
            inFlow = null;
    }
    return {
        anchors: new Set(),
        doc: doc,
        indent: '',
        indentStep: typeof opt.indent === 'number' ? ' '.repeat(opt.indent) : '  ',
        inFlow: inFlow,
        options: opt
    };
}
function $ede9f5b54624ae33$var$getTagObject(tags, item) {
    var _a1, _b, _c, _d;
    if (item.tag) {
        const match = tags.filter((t)=>t.tag === item.tag
        );
        if (match.length > 0) return (_a1 = match.find((t)=>t.format === item.format
        )) !== null && _a1 !== void 0 ? _a1 : match[0];
    }
    let tagObj = undefined;
    let obj;
    if ($f5f4f9194ee4d0b0$export$8f3495e22775e76c(item)) {
        obj = item.value;
        const match = tags.filter((t)=>{
            var _a;
            return (_a = t.identify) === null || _a === void 0 ? void 0 : _a.call(t, obj);
        });
        tagObj = (_b = match.find((t)=>t.format === item.format
        )) !== null && _b !== void 0 ? _b : match.find((t)=>!t.format
        );
    } else {
        obj = item;
        tagObj = tags.find((t)=>t.nodeClass && obj instanceof t.nodeClass
        );
    }
    if (!tagObj) {
        const name = (_d = (_c = obj === null || obj === void 0 ? void 0 : obj.constructor) === null || _c === void 0 ? void 0 : _c.name) !== null && _d !== void 0 ? _d : typeof obj;
        throw new Error(`Tag not resolved for ${name} value`);
    }
    return tagObj;
}
// needs to be called before value stringifier to allow for circular anchor refs
function $ede9f5b54624ae33$var$stringifyProps(node, tagObj, { anchors: anchors , doc: doc  }) {
    if (!doc.directives) return '';
    const props = [];
    const anchor = ($f5f4f9194ee4d0b0$export$8f3495e22775e76c(node) || $f5f4f9194ee4d0b0$export$cea7aa84e978eba5(node)) && node.anchor;
    if (anchor && $be49038f6ed5c8f2$export$67b774d238e24409(anchor)) {
        anchors.add(anchor);
        props.push(`&${anchor}`);
    }
    const tag = node.tag ? node.tag : tagObj.default ? null : tagObj.tag;
    if (tag) props.push(doc.directives.tagString(tag));
    return props.join(' ');
}
function $ede9f5b54624ae33$export$fac44ee5b035f737(item, ctx, onComment, onChompKeep) {
    var _a, _b;
    if ($f5f4f9194ee4d0b0$export$7c8d445944656308(item)) return item.toString(ctx, onComment, onChompKeep);
    if ($f5f4f9194ee4d0b0$export$c6275352883a2b3e(item)) {
        if (ctx.doc.directives) return item.toString(ctx);
        if ((_a = ctx.resolvedAliases) === null || _a === void 0 ? void 0 : _a.has(item)) throw new TypeError(`Cannot stringify circular structure without alias nodes`);
        else {
            if (ctx.resolvedAliases) ctx.resolvedAliases.add(item);
            else ctx.resolvedAliases = new Set([
                item
            ]);
            item = item.resolve(ctx.doc);
        }
    }
    let tagObj = undefined;
    const node = $f5f4f9194ee4d0b0$export$8ee0fc9ee280b4ee(item) ? item : ctx.doc.createNode(item, {
        onTagObj: (o)=>tagObj = o
    });
    if (!tagObj) tagObj = $ede9f5b54624ae33$var$getTagObject(ctx.doc.schema.tags, node);
    const props = $ede9f5b54624ae33$var$stringifyProps(node, tagObj, ctx);
    if (props.length > 0) ctx.indentAtStart = ((_b = ctx.indentAtStart) !== null && _b !== void 0 ? _b : 0) + props.length + 1;
    const str = typeof tagObj.stringify === 'function' ? tagObj.stringify(node, ctx, onComment, onChompKeep) : $f5f4f9194ee4d0b0$export$8f3495e22775e76c(node) ? $53767de6fc69a657$export$3457ffbf9a1af5aa(node, ctx, onComment, onChompKeep) : node.toString(ctx, onComment, onChompKeep);
    if (!props) return str;
    return $f5f4f9194ee4d0b0$export$8f3495e22775e76c(node) || str[0] === '{' || str[0] === '[' ? `${props} ${str}` : `${props}\n${ctx.indent}${str}`;
}



function $bcd91e9a9d169955$export$fffacbb893c76683({ key: key , value: value  }, ctx, onComment, onChompKeep) {
    const { allNullValues: allNullValues , doc: doc , indent: indent , indentStep: indentStep , options: { commentString: commentString , indentSeq: indentSeq , simpleKeys: simpleKeys  }  } = ctx;
    let keyComment = $f5f4f9194ee4d0b0$export$8ee0fc9ee280b4ee(key) && key.comment || null;
    if (simpleKeys) {
        if (keyComment) throw new Error('With simple keys, key nodes cannot have comments');
        if ($f5f4f9194ee4d0b0$export$cea7aa84e978eba5(key)) {
            const msg = 'With simple keys, collection cannot be used as a key value';
            throw new Error(msg);
        }
    }
    let explicitKey = !simpleKeys && (!key || keyComment && value == null && !ctx.inFlow || $f5f4f9194ee4d0b0$export$cea7aa84e978eba5(key) || ($f5f4f9194ee4d0b0$export$8f3495e22775e76c(key) ? key.type === $1e4079dce2ff1bd7$export$595dbf49c602a1f.BLOCK_FOLDED || key.type === $1e4079dce2ff1bd7$export$595dbf49c602a1f.BLOCK_LITERAL : typeof key === 'object'));
    ctx = Object.assign({}, ctx, {
        allNullValues: false,
        implicitKey: !explicitKey && (simpleKeys || !allNullValues),
        indent: indent + indentStep
    });
    let keyCommentDone = false;
    let chompKeep = false;
    let str = $ede9f5b54624ae33$export$fac44ee5b035f737(key, ctx, ()=>keyCommentDone = true
    , ()=>chompKeep = true
    );
    if (!explicitKey && !ctx.inFlow && str.length > 1024) {
        if (simpleKeys) throw new Error('With simple keys, single line scalar must not span more than 1024 characters');
        explicitKey = true;
    }
    if (ctx.inFlow) {
        if (allNullValues || value == null) {
            if (keyCommentDone && onComment) onComment();
            return str === '' ? '?' : explicitKey ? `? ${str}` : str;
        }
    } else if (allNullValues && !simpleKeys || value == null && explicitKey) {
        str = `? ${str}`;
        if (keyComment && !keyCommentDone) str += $ccd23ca1884f7fff$export$5d080f5a78d4f5b3(str, ctx.indent, commentString(keyComment));
        else if (chompKeep && onChompKeep) onChompKeep();
        return str;
    }
    if (keyCommentDone) keyComment = null;
    if (explicitKey) {
        if (keyComment) str += $ccd23ca1884f7fff$export$5d080f5a78d4f5b3(str, ctx.indent, commentString(keyComment));
        str = `? ${str}\n${indent}:`;
    } else {
        str = `${str}:`;
        if (keyComment) str += $ccd23ca1884f7fff$export$5d080f5a78d4f5b3(str, ctx.indent, commentString(keyComment));
    }
    let vcb = '';
    let valueComment = null;
    if ($f5f4f9194ee4d0b0$export$8ee0fc9ee280b4ee(value)) {
        if (value.spaceBefore) vcb = '\n';
        if (value.commentBefore) {
            const cs = commentString(value.commentBefore);
            vcb += `\n${$ccd23ca1884f7fff$export$9933eb161eea191d(cs, ctx.indent)}`;
        }
        valueComment = value.comment;
    } else if (value && typeof value === 'object') value = doc.createNode(value);
    ctx.implicitKey = false;
    if (!explicitKey && !keyComment && $f5f4f9194ee4d0b0$export$8f3495e22775e76c(value)) ctx.indentAtStart = str.length + 1;
    chompKeep = false;
    if (!indentSeq && indentStep.length >= 2 && !ctx.inFlow && !explicitKey && $f5f4f9194ee4d0b0$export$342ac1d101ffe14b(value) && !value.flow && !value.tag && !value.anchor) // If indentSeq === false, consider '- ' as part of indentation where possible
    ctx.indent = ctx.indent.substr(2);
    let valueCommentDone = false;
    const valueStr = $ede9f5b54624ae33$export$fac44ee5b035f737(value, ctx, ()=>valueCommentDone = true
    , ()=>chompKeep = true
    );
    let ws = ' ';
    if (vcb || keyComment) {
        if (valueStr === '' && !ctx.inFlow) ws = vcb === '\n' ? '\n\n' : vcb;
        else ws = `${vcb}\n${ctx.indent}`;
    } else if (!explicitKey && $f5f4f9194ee4d0b0$export$cea7aa84e978eba5(value)) {
        const flow = valueStr[0] === '[' || valueStr[0] === '{';
        if (!flow || valueStr.includes('\n')) ws = `\n${ctx.indent}`;
    } else if (valueStr === '' || valueStr[0] === '\n') ws = '';
    str += ws + valueStr;
    if (ctx.inFlow) {
        if (valueCommentDone && onComment) onComment();
    } else if (valueComment && !valueCommentDone) str += $ccd23ca1884f7fff$export$5d080f5a78d4f5b3(str, ctx.indent, commentString(valueComment));
    else if (chompKeep && onChompKeep) onChompKeep();
    return str;
}



function $b18651e4a098e126$export$1c9f709888824e05(logLevel, ...messages) {
    if (logLevel === 'debug') console.log(...messages);
}
function $b18651e4a098e126$export$c106dd0671a0fc2d(logLevel, warning) {
    if (logLevel === 'debug' || logLevel === 'warn') {
        if (typeof $5sQNY$process !== 'undefined' && $5sQNY$process.emitWarning) $5sQNY$process.emitWarning(warning);
        else console.warn(warning);
    }
}






const $47a3162908ea9c6c$var$MERGE_KEY = '<<';
function $47a3162908ea9c6c$export$fdef4d6a4585851d(ctx, map, { key: key , value: value  }) {
    if ((ctx === null || ctx === void 0 ? void 0 : ctx.doc.schema.merge) && $47a3162908ea9c6c$var$isMergeKey(key)) {
        value = $f5f4f9194ee4d0b0$export$c6275352883a2b3e(value) ? value.resolve(ctx.doc) : value;
        if ($f5f4f9194ee4d0b0$export$342ac1d101ffe14b(value)) for (const it of value.items)$47a3162908ea9c6c$var$mergeToJSMap(ctx, map, it);
        else if (Array.isArray(value)) for (const it1 of value)$47a3162908ea9c6c$var$mergeToJSMap(ctx, map, it1);
        else $47a3162908ea9c6c$var$mergeToJSMap(ctx, map, value);
    } else {
        const jsKey = $188b2a47b11993dc$export$f08965dd1304d490(key, '', ctx);
        if (map instanceof Map) map.set(jsKey, $188b2a47b11993dc$export$f08965dd1304d490(value, jsKey, ctx));
        else if (map instanceof Set) map.add(jsKey);
        else {
            const stringKey = $47a3162908ea9c6c$var$stringifyKey(key, jsKey, ctx);
            const jsValue = $188b2a47b11993dc$export$f08965dd1304d490(value, stringKey, ctx);
            if (stringKey in map) Object.defineProperty(map, stringKey, {
                value: jsValue,
                writable: true,
                enumerable: true,
                configurable: true
            });
            else map[stringKey] = jsValue;
        }
    }
    return map;
}
const $47a3162908ea9c6c$var$isMergeKey = (key)=>key === $47a3162908ea9c6c$var$MERGE_KEY || $f5f4f9194ee4d0b0$export$8f3495e22775e76c(key) && key.value === $47a3162908ea9c6c$var$MERGE_KEY && (!key.type || key.type === $1e4079dce2ff1bd7$export$595dbf49c602a1f.PLAIN)
;
// If the value associated with a merge key is a single mapping node, each of
// its key/value pairs is inserted into the current mapping, unless the key
// already exists in it. If the value associated with the merge key is a
// sequence, then this sequence is expected to contain mapping nodes and each
// of these nodes is merged in turn according to its order in the sequence.
// Keys in mapping nodes earlier in the sequence override keys specified in
// later mapping nodes. -- http://yaml.org/type/merge.html
function $47a3162908ea9c6c$var$mergeToJSMap(ctx, map, value) {
    const source = ctx && $f5f4f9194ee4d0b0$export$c6275352883a2b3e(value) ? value.resolve(ctx.doc) : value;
    if (!$f5f4f9194ee4d0b0$export$5c90113a285f2241(source)) throw new Error('Merge sources must be maps or map aliases');
    const srcMap = source.toJSON(null, ctx, Map);
    for (const [key, value1] of srcMap){
        if (map instanceof Map) {
            if (!map.has(key)) map.set(key, value1);
        } else if (map instanceof Set) map.add(key);
        else if (!Object.prototype.hasOwnProperty.call(map, key)) Object.defineProperty(map, key, {
            value: value1,
            writable: true,
            enumerable: true,
            configurable: true
        });
    }
    return map;
}
function $47a3162908ea9c6c$var$stringifyKey(key, jsKey, ctx) {
    if (jsKey === null) return '';
    if (typeof jsKey !== 'object') return String(jsKey);
    if ($f5f4f9194ee4d0b0$export$8ee0fc9ee280b4ee(key) && ctx && ctx.doc) {
        const strCtx = $ede9f5b54624ae33$export$829faaf53c257c4d(ctx.doc, {});
        strCtx.anchors = new Set();
        for (const node of ctx.anchors.keys())strCtx.anchors.add(node.anchor);
        strCtx.inFlow = true;
        strCtx.inStringifyKey = true;
        const strKey = key.toString(strCtx);
        if (!ctx.mapKeyWarned) {
            let jsonStr = JSON.stringify(strKey);
            if (jsonStr.length > 40) jsonStr = jsonStr.substring(0, 36) + '..."';
            $b18651e4a098e126$export$c106dd0671a0fc2d(ctx.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${jsonStr}. Set mapAsMap: true to use object keys.`);
            ctx.mapKeyWarned = true;
        }
        return strKey;
    }
    return JSON.stringify(jsKey);
}



function $76fb67eccca50f29$export$afe19f123272774(key, value, ctx) {
    const k = $96c2f6d8a80ba80e$export$270e7ba5936d3c48(key, undefined, ctx);
    const v = $96c2f6d8a80ba80e$export$270e7ba5936d3c48(value, undefined, ctx);
    return new $76fb67eccca50f29$export$d63d7cff08fe4dc9(k, v);
}
class $76fb67eccca50f29$export$d63d7cff08fe4dc9 {
    constructor(key, value = null){
        Object.defineProperty(this, $f5f4f9194ee4d0b0$export$accaa52ddae3fe58, {
            value: $f5f4f9194ee4d0b0$export$c4eb1412cef9eb18
        });
        this.key = key;
        this.value = value;
    }
    clone(schema) {
        let { key: key , value: value  } = this;
        if ($f5f4f9194ee4d0b0$export$8ee0fc9ee280b4ee(key)) key = key.clone(schema);
        if ($f5f4f9194ee4d0b0$export$8ee0fc9ee280b4ee(value)) value = value.clone(schema);
        return new $76fb67eccca50f29$export$d63d7cff08fe4dc9(key, value);
    }
    toJSON(_, ctx) {
        const pair = (ctx === null || ctx === void 0 ? void 0 : ctx.mapAsMap) ? new Map() : {};
        return $47a3162908ea9c6c$export$fdef4d6a4585851d(ctx, pair, this);
    }
    toString(ctx, onComment, onChompKeep) {
        return (ctx === null || ctx === void 0 ? void 0 : ctx.doc) ? $bcd91e9a9d169955$export$fffacbb893c76683(this, ctx, onComment, onChompKeep) : JSON.stringify(this);
    }
}










function $4c03a9ee09c0f2ab$export$b570edac7df98594(collection, ctx, options) {
    var _a;
    const flow = (_a = ctx.inFlow) !== null && _a !== void 0 ? _a : collection.flow;
    const stringify = flow ? $4c03a9ee09c0f2ab$var$stringifyFlowCollection : $4c03a9ee09c0f2ab$var$stringifyBlockCollection;
    return stringify(collection, ctx, options);
}
function $4c03a9ee09c0f2ab$var$stringifyBlockCollection({ comment: comment , items: items  }, ctx, { blockItemPrefix: blockItemPrefix , flowChars: flowChars , itemIndent: itemIndent , onChompKeep: onChompKeep , onComment: onComment  }) {
    const { indent: indent , options: { commentString: commentString  }  } = ctx;
    const itemCtx = Object.assign({}, ctx, {
        indent: itemIndent,
        type: null
    });
    let chompKeep = false; // flag for the preceding node's status
    const lines = [];
    for(let i = 0; i < items.length; ++i){
        const item = items[i];
        let comment = null;
        if ($f5f4f9194ee4d0b0$export$8ee0fc9ee280b4ee(item)) {
            if (!chompKeep && item.spaceBefore) lines.push('');
            $4c03a9ee09c0f2ab$var$addCommentBefore(ctx, lines, item.commentBefore, chompKeep);
            if (item.comment) comment = item.comment;
        } else if ($f5f4f9194ee4d0b0$export$7c8d445944656308(item)) {
            const ik = $f5f4f9194ee4d0b0$export$8ee0fc9ee280b4ee(item.key) ? item.key : null;
            if (ik) {
                if (!chompKeep && ik.spaceBefore) lines.push('');
                $4c03a9ee09c0f2ab$var$addCommentBefore(ctx, lines, ik.commentBefore, chompKeep);
            }
        }
        chompKeep = false;
        let str = $ede9f5b54624ae33$export$fac44ee5b035f737(item, itemCtx, ()=>comment = null
        , ()=>chompKeep = true
        );
        if (comment) str += $ccd23ca1884f7fff$export$5d080f5a78d4f5b3(str, itemIndent, commentString(comment));
        if (chompKeep && comment) chompKeep = false;
        lines.push(blockItemPrefix + str);
    }
    let str;
    if (lines.length === 0) str = flowChars.start + flowChars.end;
    else {
        str = lines[0];
        for(let i = 1; i < lines.length; ++i){
            const line = lines[i];
            str += line ? `\n${indent}${line}` : '\n';
        }
    }
    if (comment) {
        str += '\n' + $ccd23ca1884f7fff$export$9933eb161eea191d(commentString(comment), indent);
        if (onComment) onComment();
    } else if (chompKeep && onChompKeep) onChompKeep();
    return str;
}
function $4c03a9ee09c0f2ab$var$stringifyFlowCollection({ comment: comment , items: items  }, ctx, { flowChars: flowChars , itemIndent: itemIndent , onComment: onComment  }) {
    const { indent: indent , indentStep: indentStep , options: { commentString: commentString  }  } = ctx;
    itemIndent += indentStep;
    const itemCtx = Object.assign({}, ctx, {
        indent: itemIndent,
        inFlow: true,
        type: null
    });
    let reqNewline = false;
    let linesAtValue = 0;
    const lines = [];
    for(let i = 0; i < items.length; ++i){
        const item = items[i];
        let comment = null;
        if ($f5f4f9194ee4d0b0$export$8ee0fc9ee280b4ee(item)) {
            if (item.spaceBefore) lines.push('');
            $4c03a9ee09c0f2ab$var$addCommentBefore(ctx, lines, item.commentBefore, false);
            if (item.comment) comment = item.comment;
        } else if ($f5f4f9194ee4d0b0$export$7c8d445944656308(item)) {
            const ik = $f5f4f9194ee4d0b0$export$8ee0fc9ee280b4ee(item.key) ? item.key : null;
            if (ik) {
                if (ik.spaceBefore) lines.push('');
                $4c03a9ee09c0f2ab$var$addCommentBefore(ctx, lines, ik.commentBefore, false);
                if (ik.comment) reqNewline = true;
            }
            const iv = $f5f4f9194ee4d0b0$export$8ee0fc9ee280b4ee(item.value) ? item.value : null;
            if (iv) {
                if (iv.comment) comment = iv.comment;
                if (iv.commentBefore) reqNewline = true;
            } else if (item.value == null && ik && ik.comment) comment = ik.comment;
        }
        if (comment) reqNewline = true;
        let str = $ede9f5b54624ae33$export$fac44ee5b035f737(item, itemCtx, ()=>comment = null
        );
        if (i < items.length - 1) str += ',';
        if (comment) str += $ccd23ca1884f7fff$export$5d080f5a78d4f5b3(str, itemIndent, commentString(comment));
        if (!reqNewline && (lines.length > linesAtValue || str.includes('\n'))) reqNewline = true;
        lines.push(str);
        linesAtValue = lines.length;
    }
    let str;
    const { start: start , end: end  } = flowChars;
    if (lines.length === 0) str = start + end;
    else {
        if (!reqNewline) {
            const len = lines.reduce((sum, line)=>sum + line.length + 2
            , 2);
            reqNewline = len > $c5947d2357a68267$export$fb8073518f34e6ec.maxFlowStringSingleLineLength;
        }
        if (reqNewline) {
            str = start;
            for (const line of lines)str += line ? `\n${indentStep}${indent}${line}` : '\n';
            str += `\n${indent}${end}`;
        } else str = `${start} ${lines.join(' ')} ${end}`;
    }
    if (comment) {
        str += $ccd23ca1884f7fff$export$5d080f5a78d4f5b3(str, commentString(comment), indent);
        if (onComment) onComment();
    }
    return str;
}
function $4c03a9ee09c0f2ab$var$addCommentBefore({ indent: indent , options: { commentString: commentString  }  }, lines, comment, chompKeep) {
    if (comment && chompKeep) comment = comment.replace(/^\n+/, '');
    if (comment) {
        const ic = $ccd23ca1884f7fff$export$9933eb161eea191d(commentString(comment), indent);
        lines.push(ic.trimStart()); // Avoid double indent on first line
    }
}







function $c69f0da129ce9d4f$export$cb7eebdbb143b550(items, key) {
    const k = $f5f4f9194ee4d0b0$export$8f3495e22775e76c(key) ? key.value : key;
    for (const it of items)if ($f5f4f9194ee4d0b0$export$7c8d445944656308(it)) {
        if (it.key === key || it.key === k) return it;
        if ($f5f4f9194ee4d0b0$export$8f3495e22775e76c(it.key) && it.key.value === k) return it;
    }
    return undefined;
}
class $c69f0da129ce9d4f$export$eb1691c4b19bb5eb extends $c5947d2357a68267$export$fb8073518f34e6ec {
    constructor(schema){
        super($f5f4f9194ee4d0b0$export$ce970371e0e850bc, schema);
        this.items = [];
    }
    static get tagName() {
        return 'tag:yaml.org,2002:map';
    }
    /**
     * Adds a value to the collection.
     *
     * @param overwrite - If not set `true`, using a key that is already in the
     *   collection will throw. Otherwise, overwrites the previous value.
     */ add(pair, overwrite) {
        var _a;
        let _pair;
        if ($f5f4f9194ee4d0b0$export$7c8d445944656308(pair)) _pair = pair;
        else if (!pair || typeof pair !== 'object' || !('key' in pair)) // In TypeScript, this never happens.
        _pair = new $76fb67eccca50f29$export$d63d7cff08fe4dc9(pair, pair.value);
        else _pair = new $76fb67eccca50f29$export$d63d7cff08fe4dc9(pair.key, pair.value);
        const prev = $c69f0da129ce9d4f$export$cb7eebdbb143b550(this.items, _pair.key);
        const sortEntries = (_a = this.schema) === null || _a === void 0 ? void 0 : _a.sortMapEntries;
        if (prev) {
            if (!overwrite) throw new Error(`Key ${_pair.key} already set`);
            // For scalars, keep the old node & its comments and anchors
            if ($f5f4f9194ee4d0b0$export$8f3495e22775e76c(prev.value) && $1e4079dce2ff1bd7$export$dc071f102752d0eb(_pair.value)) prev.value.value = _pair.value;
            else prev.value = _pair.value;
        } else if (sortEntries) {
            const i = this.items.findIndex((item)=>sortEntries(_pair, item) < 0
            );
            if (i === -1) this.items.push(_pair);
            else this.items.splice(i, 0, _pair);
        } else this.items.push(_pair);
    }
    delete(key) {
        const it = $c69f0da129ce9d4f$export$cb7eebdbb143b550(this.items, key);
        if (!it) return false;
        const del = this.items.splice(this.items.indexOf(it), 1);
        return del.length > 0;
    }
    get(key, keepScalar) {
        const it = $c69f0da129ce9d4f$export$cb7eebdbb143b550(this.items, key);
        const node = it === null || it === void 0 ? void 0 : it.value;
        return !keepScalar && $f5f4f9194ee4d0b0$export$8f3495e22775e76c(node) ? node.value : node;
    }
    has(key) {
        return !!$c69f0da129ce9d4f$export$cb7eebdbb143b550(this.items, key);
    }
    set(key, value) {
        this.add(new $76fb67eccca50f29$export$d63d7cff08fe4dc9(key, value), true);
    }
    /**
     * @param ctx - Conversion context, originally set in Document#toJS()
     * @param {Class} Type - If set, forces the returned collection type
     * @returns Instance of Type, Map, or Object
     */ toJSON(_, ctx, Type) {
        const map = Type ? new Type() : (ctx === null || ctx === void 0 ? void 0 : ctx.mapAsMap) ? new Map() : {};
        if (ctx === null || ctx === void 0 ? void 0 : ctx.onCreate) ctx.onCreate(map);
        for (const item of this.items)$47a3162908ea9c6c$export$fdef4d6a4585851d(ctx, map, item);
        return map;
    }
    toString(ctx, onComment, onChompKeep) {
        if (!ctx) return JSON.stringify(this);
        for (const item of this.items){
            if (!$f5f4f9194ee4d0b0$export$7c8d445944656308(item)) throw new Error(`Map items must all be pairs; found ${JSON.stringify(item)} instead`);
        }
        if (!ctx.allNullValues && this.hasAllNullValues(false)) ctx = Object.assign({}, ctx, {
            allNullValues: true
        });
        return $4c03a9ee09c0f2ab$export$b570edac7df98594(this, ctx, {
            blockItemPrefix: '',
            flowChars: {
                start: '{',
                end: '}'
            },
            itemIndent: ctx.indent || '',
            onChompKeep: onChompKeep,
            onComment: onComment
        });
    }
}


function $afe1e04bd885f08f$var$createMap(schema, obj, ctx) {
    const { keepUndefined: keepUndefined , replacer: replacer  } = ctx;
    const $afe1e04bd885f08f$export$871de8747c9eaa88 = new $c69f0da129ce9d4f$export$eb1691c4b19bb5eb(schema);
    const add = (key, value)=>{
        if (typeof replacer === 'function') value = replacer.call(obj, key, value);
        else if (Array.isArray(replacer) && !replacer.includes(key)) return;
        if (value !== undefined || keepUndefined) $afe1e04bd885f08f$export$871de8747c9eaa88.items.push($76fb67eccca50f29$export$afe19f123272774(key, value, ctx));
    };
    if (obj instanceof Map) for (const [key2, value1] of obj)add(key2, value1);
    else if (obj && typeof obj === 'object') for (const key1 of Object.keys(obj))add(key1, obj[key1]);
    if (typeof schema.sortMapEntries === 'function') $afe1e04bd885f08f$export$871de8747c9eaa88.items.sort(schema.sortMapEntries);
    return $afe1e04bd885f08f$export$871de8747c9eaa88;
}
const $afe1e04bd885f08f$export$871de8747c9eaa88 = {
    collection: 'map',
    createNode: $afe1e04bd885f08f$var$createMap,
    default: true,
    nodeClass: $c69f0da129ce9d4f$export$eb1691c4b19bb5eb,
    tag: 'tag:yaml.org,2002:map',
    resolve ($afe1e04bd885f08f$export$871de8747c9eaa88, onError) {
        if (!$f5f4f9194ee4d0b0$export$5c90113a285f2241($afe1e04bd885f08f$export$871de8747c9eaa88)) onError('Expected a mapping for this tag');
        return $afe1e04bd885f08f$export$871de8747c9eaa88;
    }
};









class $b2eb05ad33a5939d$export$47adc25f769055b2 extends $c5947d2357a68267$export$fb8073518f34e6ec {
    constructor(schema){
        super($f5f4f9194ee4d0b0$export$200ef2dcd45611c9, schema);
        this.items = [];
    }
    static get tagName() {
        return 'tag:yaml.org,2002:seq';
    }
    add(value) {
        this.items.push(value);
    }
    /**
     * Removes a value from the collection.
     *
     * `key` must contain a representation of an integer for this to succeed.
     * It may be wrapped in a `Scalar`.
     *
     * @returns `true` if the item was found and removed.
     */ delete(key) {
        const idx = $b2eb05ad33a5939d$var$asItemIndex(key);
        if (typeof idx !== 'number') return false;
        const del = this.items.splice(idx, 1);
        return del.length > 0;
    }
    /**
     * Returns item at `key`, or `undefined` if not found. By default unwraps
     * scalar values from their surrounding node; to disable set `keepScalar` to
     * `true` (collections are always returned intact).
     *
     * `key` must contain a representation of an integer for this to succeed.
     * It may be wrapped in a `Scalar`.
     */ get(key, keepScalar) {
        const idx = $b2eb05ad33a5939d$var$asItemIndex(key);
        if (typeof idx !== 'number') return undefined;
        const it = this.items[idx];
        return !keepScalar && $f5f4f9194ee4d0b0$export$8f3495e22775e76c(it) ? it.value : it;
    }
    /**
     * Checks if the collection includes a value with the key `key`.
     *
     * `key` must contain a representation of an integer for this to succeed.
     * It may be wrapped in a `Scalar`.
     */ has(key) {
        const idx = $b2eb05ad33a5939d$var$asItemIndex(key);
        return typeof idx === 'number' && idx < this.items.length;
    }
    /**
     * Sets a value in this collection. For `!!set`, `value` needs to be a
     * boolean to add/remove the item from the set.
     *
     * If `key` does not contain a representation of an integer, this will throw.
     * It may be wrapped in a `Scalar`.
     */ set(key, value) {
        const idx = $b2eb05ad33a5939d$var$asItemIndex(key);
        if (typeof idx !== 'number') throw new Error(`Expected a valid index, not ${key}.`);
        const prev = this.items[idx];
        if ($f5f4f9194ee4d0b0$export$8f3495e22775e76c(prev) && $1e4079dce2ff1bd7$export$dc071f102752d0eb(value)) prev.value = value;
        else this.items[idx] = value;
    }
    toJSON(_, ctx) {
        const seq = [];
        if (ctx === null || ctx === void 0 ? void 0 : ctx.onCreate) ctx.onCreate(seq);
        let i = 0;
        for (const item of this.items)seq.push($188b2a47b11993dc$export$f08965dd1304d490(item, String(i++), ctx));
        return seq;
    }
    toString(ctx, onComment, onChompKeep) {
        if (!ctx) return JSON.stringify(this);
        return $4c03a9ee09c0f2ab$export$b570edac7df98594(this, ctx, {
            blockItemPrefix: '- ',
            flowChars: {
                start: '[',
                end: ']'
            },
            itemIndent: (ctx.indent || '') + '  ',
            onChompKeep: onChompKeep,
            onComment: onComment
        });
    }
}
function $b2eb05ad33a5939d$var$asItemIndex(key) {
    let idx = $f5f4f9194ee4d0b0$export$8f3495e22775e76c(key) ? key.value : key;
    if (idx && typeof idx === 'string') idx = Number(idx);
    return typeof idx === 'number' && Number.isInteger(idx) && idx >= 0 ? idx : null;
}


function $ff10f0bab5084a02$var$createSeq(schema, obj, ctx) {
    const { replacer: replacer  } = ctx;
    const $ff10f0bab5084a02$export$1041d4276c328e4d = new $b2eb05ad33a5939d$export$47adc25f769055b2(schema);
    if (obj && Symbol.iterator in Object(obj)) {
        let i = 0;
        for (let it of obj){
            if (typeof replacer === 'function') {
                const key = obj instanceof Set ? it : String(i++);
                it = replacer.call(obj, key, it);
            }
            $ff10f0bab5084a02$export$1041d4276c328e4d.items.push($96c2f6d8a80ba80e$export$270e7ba5936d3c48(it, undefined, ctx));
        }
    }
    return $ff10f0bab5084a02$export$1041d4276c328e4d;
}
const $ff10f0bab5084a02$export$1041d4276c328e4d = {
    collection: 'seq',
    createNode: $ff10f0bab5084a02$var$createSeq,
    default: true,
    nodeClass: $b2eb05ad33a5939d$export$47adc25f769055b2,
    tag: 'tag:yaml.org,2002:seq',
    resolve ($ff10f0bab5084a02$export$1041d4276c328e4d, onError) {
        if (!$f5f4f9194ee4d0b0$export$342ac1d101ffe14b($ff10f0bab5084a02$export$1041d4276c328e4d)) onError('Expected a sequence for this tag');
        return $ff10f0bab5084a02$export$1041d4276c328e4d;
    }
};



const $e536905cdbeb265c$export$22b082955e083ec3 = {
    identify: (value)=>typeof value === 'string'
    ,
    default: true,
    tag: 'tag:yaml.org,2002:str',
    resolve: (str)=>str
    ,
    stringify (item, ctx, onComment, onChompKeep) {
        ctx = Object.assign({
            actualString: true
        }, ctx);
        return $53767de6fc69a657$export$3457ffbf9a1af5aa(item, ctx, onComment, onChompKeep);
    }
};




const $9d5951870b8e7dcd$export$a4f9db1e8324ef6b = {
    identify: (value)=>value == null
    ,
    createNode: ()=>new $1e4079dce2ff1bd7$export$595dbf49c602a1f(null)
    ,
    default: true,
    tag: 'tag:yaml.org,2002:null',
    test: /^(?:~|[Nn]ull|NULL)?$/,
    resolve: ()=>new $1e4079dce2ff1bd7$export$595dbf49c602a1f(null)
    ,
    stringify: ({ source: source  }, ctx)=>typeof source === 'string' && $9d5951870b8e7dcd$export$a4f9db1e8324ef6b.test.test(source) ? source : ctx.options.nullStr
};





const $24308883787bbbf3$export$4f52eaca20f174c1 = {
    identify: (value)=>typeof value === 'boolean'
    ,
    default: true,
    tag: 'tag:yaml.org,2002:bool',
    test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
    resolve: (str)=>new $1e4079dce2ff1bd7$export$595dbf49c602a1f(str[0] === 't' || str[0] === 'T')
    ,
    stringify ({ source: source , value: value  }, ctx) {
        if (source && $24308883787bbbf3$export$4f52eaca20f174c1.test.test(source)) {
            const sv = source[0] === 't' || source[0] === 'T';
            if (value === sv) return source;
        }
        return value ? ctx.options.trueStr : ctx.options.falseStr;
    }
};



function $f1d192a340680c60$export$4c03b48e25071796({ format: format , minFractionDigits: minFractionDigits , tag: tag , value: value  }) {
    if (typeof value === 'bigint') return String(value);
    const num = typeof value === 'number' ? value : Number(value);
    if (!isFinite(num)) return isNaN(num) ? '.nan' : num < 0 ? '-.inf' : '.inf';
    let n = JSON.stringify(value);
    if (!format && minFractionDigits && (!tag || tag === 'tag:yaml.org,2002:float') && /^\d/.test(n)) {
        let i = n.indexOf('.');
        if (i < 0) {
            i = n.length;
            n += '.';
        }
        let d = minFractionDigits - (n.length - i - 1);
        while(d-- > 0)n += '0';
    }
    return n;
}


const $aca303293c36e96a$export$37d6b822c496e154 = {
    identify: (value)=>typeof value === 'number'
    ,
    default: true,
    tag: 'tag:yaml.org,2002:float',
    test: /^(?:[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN))$/,
    resolve: (str)=>str.slice(-3).toLowerCase() === 'nan' ? NaN : str[0] === '-' ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY
    ,
    stringify: $f1d192a340680c60$export$4c03b48e25071796
};
const $aca303293c36e96a$export$d62805e4174324af = {
    identify: (value)=>typeof value === 'number'
    ,
    default: true,
    tag: 'tag:yaml.org,2002:float',
    format: 'EXP',
    test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
    resolve: (str)=>parseFloat(str)
    ,
    stringify (node) {
        const num = Number(node.value);
        return isFinite(num) ? num.toExponential() : $f1d192a340680c60$export$4c03b48e25071796(node);
    }
};
const $aca303293c36e96a$export$6b5cd3983e3ee5ab = {
    identify: (value)=>typeof value === 'number'
    ,
    default: true,
    tag: 'tag:yaml.org,2002:float',
    test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
    resolve (str) {
        const node = new $1e4079dce2ff1bd7$export$595dbf49c602a1f(parseFloat(str));
        const dot = str.indexOf('.');
        if (dot !== -1 && str[str.length - 1] === '0') node.minFractionDigits = str.length - dot - 1;
        return node;
    },
    stringify: $f1d192a340680c60$export$4c03b48e25071796
};



const $ca37bad0ca3e6607$var$intIdentify = (value)=>typeof value === 'bigint' || Number.isInteger(value)
;
const $ca37bad0ca3e6607$var$intResolve = (str, offset, radix, { intAsBigInt: intAsBigInt  })=>intAsBigInt ? BigInt(str) : parseInt(str.substring(offset), radix)
;
function $ca37bad0ca3e6607$var$intStringify(node, radix, prefix) {
    const { value: value  } = node;
    if ($ca37bad0ca3e6607$var$intIdentify(value) && value >= 0) return prefix + value.toString(radix);
    return $f1d192a340680c60$export$4c03b48e25071796(node);
}
const $ca37bad0ca3e6607$export$3d3e8b3bce028aae = {
    identify: (value)=>$ca37bad0ca3e6607$var$intIdentify(value) && value >= 0
    ,
    default: true,
    tag: 'tag:yaml.org,2002:int',
    format: 'OCT',
    test: /^0o[0-7]+$/,
    resolve: (str, _onError, opt)=>$ca37bad0ca3e6607$var$intResolve(str, 2, 8, opt)
    ,
    stringify: (node)=>$ca37bad0ca3e6607$var$intStringify(node, 8, '0o')
};
const $ca37bad0ca3e6607$export$7d260a2a5f8bc19e = {
    identify: $ca37bad0ca3e6607$var$intIdentify,
    default: true,
    tag: 'tag:yaml.org,2002:int',
    test: /^[-+]?[0-9]+$/,
    resolve: (str, _onError, opt)=>$ca37bad0ca3e6607$var$intResolve(str, 0, 10, opt)
    ,
    stringify: $f1d192a340680c60$export$4c03b48e25071796
};
const $ca37bad0ca3e6607$export$3aff77776319ec6e = {
    identify: (value)=>$ca37bad0ca3e6607$var$intIdentify(value) && value >= 0
    ,
    default: true,
    tag: 'tag:yaml.org,2002:int',
    format: 'HEX',
    test: /^0x[0-9a-fA-F]+$/,
    resolve: (str, _onError, opt)=>$ca37bad0ca3e6607$var$intResolve(str, 2, 16, opt)
    ,
    stringify: (node)=>$ca37bad0ca3e6607$var$intStringify(node, 16, '0x')
};









const $8f153448b906e539$export$4902baddc787debb = [
    $afe1e04bd885f08f$export$871de8747c9eaa88,
    $ff10f0bab5084a02$export$1041d4276c328e4d,
    $e536905cdbeb265c$export$22b082955e083ec3,
    $9d5951870b8e7dcd$export$a4f9db1e8324ef6b,
    $24308883787bbbf3$export$4f52eaca20f174c1,
    $ca37bad0ca3e6607$export$3d3e8b3bce028aae,
    $ca37bad0ca3e6607$export$7d260a2a5f8bc19e,
    $ca37bad0ca3e6607$export$3aff77776319ec6e,
    $aca303293c36e96a$export$37d6b822c496e154,
    $aca303293c36e96a$export$d62805e4174324af,
    $aca303293c36e96a$export$6b5cd3983e3ee5ab
];





function $a7681215e3719b11$var$intIdentify(value) {
    return typeof value === 'bigint' || Number.isInteger(value);
}
const $a7681215e3719b11$var$stringifyJSON = ({ value: value  })=>JSON.stringify(value)
;
const $a7681215e3719b11$var$jsonScalars = [
    {
        identify: (value)=>typeof value === 'string'
        ,
        default: true,
        tag: 'tag:yaml.org,2002:str',
        resolve: (str)=>str
        ,
        stringify: $a7681215e3719b11$var$stringifyJSON
    },
    {
        identify: (value)=>value == null
        ,
        createNode: ()=>new $1e4079dce2ff1bd7$export$595dbf49c602a1f(null)
        ,
        default: true,
        tag: 'tag:yaml.org,2002:null',
        test: /^null$/,
        resolve: ()=>null
        ,
        stringify: $a7681215e3719b11$var$stringifyJSON
    },
    {
        identify: (value)=>typeof value === 'boolean'
        ,
        default: true,
        tag: 'tag:yaml.org,2002:bool',
        test: /^true|false$/,
        resolve: (str)=>str === 'true'
        ,
        stringify: $a7681215e3719b11$var$stringifyJSON
    },
    {
        identify: $a7681215e3719b11$var$intIdentify,
        default: true,
        tag: 'tag:yaml.org,2002:int',
        test: /^-?(?:0|[1-9][0-9]*)$/,
        resolve: (str, _onError, { intAsBigInt: intAsBigInt  })=>intAsBigInt ? BigInt(str) : parseInt(str, 10)
        ,
        stringify: ({ value: value  })=>$a7681215e3719b11$var$intIdentify(value) ? value.toString() : JSON.stringify(value)
    },
    {
        identify: (value)=>typeof value === 'number'
        ,
        default: true,
        tag: 'tag:yaml.org,2002:float',
        test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
        resolve: (str)=>parseFloat(str)
        ,
        stringify: $a7681215e3719b11$var$stringifyJSON
    }
];
const $a7681215e3719b11$var$jsonError = {
    default: true,
    tag: '',
    test: /^/,
    resolve (str, onError) {
        onError(`Unresolved plain scalar ${JSON.stringify(str)}`);
        return str;
    }
};
const $a7681215e3719b11$export$4902baddc787debb = [
    $afe1e04bd885f08f$export$871de8747c9eaa88,
    $ff10f0bab5084a02$export$1041d4276c328e4d
].concat($a7681215e3719b11$var$jsonScalars, $a7681215e3719b11$var$jsonError);





var $5f0e620362ae8898$require$Buffer = $5sQNY$buffer.Buffer;
const $5f0e620362ae8898$export$33902b7329277358 = {
    identify: (value)=>value instanceof Uint8Array
    ,
    default: false,
    tag: 'tag:yaml.org,2002:binary',
    /**
     * Returns a Buffer in node and an Uint8Array in browsers
     *
     * To use the resulting buffer as an image, you'll want to do something like:
     *
     *   const blob = new Blob([buffer], { type: 'image/jpeg' })
     *   document.querySelector('#photo').src = URL.createObjectURL(blob)
     */ resolve (src, onError) {
        if (typeof $5f0e620362ae8898$require$Buffer === 'function') return $5f0e620362ae8898$require$Buffer.from(src, 'base64');
        else if (typeof atob === 'function') {
            // On IE 11, atob() can't handle newlines
            const str = atob(src.replace(/[\n\r]/g, ''));
            const buffer = new Uint8Array(str.length);
            for(let i = 0; i < str.length; ++i)buffer[i] = str.charCodeAt(i);
            return buffer;
        } else {
            onError('This environment does not support reading binary tags; either Buffer or atob is required');
            return src;
        }
    },
    stringify ({ comment: comment , type: type , value: value  }, ctx, onComment, onChompKeep) {
        const buf = value; // checked earlier by binary.identify()
        let str;
        if (typeof $5f0e620362ae8898$require$Buffer === 'function') str = buf instanceof $5f0e620362ae8898$require$Buffer ? buf.toString('base64') : $5f0e620362ae8898$require$Buffer.from(buf.buffer).toString('base64');
        else if (typeof btoa === 'function') {
            let s = '';
            for(let i = 0; i < buf.length; ++i)s += String.fromCharCode(buf[i]);
            str = btoa(s);
        } else throw new Error('This environment does not support writing binary tags; either Buffer or btoa is required');
        if (!type) type = $1e4079dce2ff1bd7$export$595dbf49c602a1f.BLOCK_LITERAL;
        if (type !== $1e4079dce2ff1bd7$export$595dbf49c602a1f.QUOTE_DOUBLE) {
            const lineWidth = Math.max(ctx.options.lineWidth - ctx.indent.length, ctx.options.minContentWidth);
            const n = Math.ceil(str.length / lineWidth);
            const lines = new Array(n);
            for(let i = 0, o = 0; i < n; ++i, o += lineWidth)lines[i] = str.substr(o, lineWidth);
            str = lines.join(type === $1e4079dce2ff1bd7$export$595dbf49c602a1f.BLOCK_LITERAL ? '\n' : ' ');
        }
        return $53767de6fc69a657$export$3457ffbf9a1af5aa({
            comment: comment,
            type: type,
            value: str
        }, ctx, onComment, onChompKeep);
    }
};










function $112bfc693b1b7a07$export$f3d665c6925c05a1(seq, onError) {
    var _a;
    if ($f5f4f9194ee4d0b0$export$342ac1d101ffe14b(seq)) for(let i = 0; i < seq.items.length; ++i){
        let item = seq.items[i];
        if ($f5f4f9194ee4d0b0$export$7c8d445944656308(item)) continue;
        else if ($f5f4f9194ee4d0b0$export$5c90113a285f2241(item)) {
            if (item.items.length > 1) onError('Each pair must have its own sequence indicator');
            const pair = item.items[0] || new $76fb67eccca50f29$export$d63d7cff08fe4dc9(new $1e4079dce2ff1bd7$export$595dbf49c602a1f(null));
            if (item.commentBefore) pair.key.commentBefore = pair.key.commentBefore ? `${item.commentBefore}\n${pair.key.commentBefore}` : item.commentBefore;
            if (item.comment) {
                const cn = (_a = pair.value) !== null && _a !== void 0 ? _a : pair.key;
                cn.comment = cn.comment ? `${item.comment}\n${cn.comment}` : item.comment;
            }
            item = pair;
        }
        seq.items[i] = $f5f4f9194ee4d0b0$export$7c8d445944656308(item) ? item : new $76fb67eccca50f29$export$d63d7cff08fe4dc9(item);
    }
    else onError('Expected a sequence for this tag');
    return seq;
}
function $112bfc693b1b7a07$export$27bb6a7978f1f74a(schema, iterable, ctx) {
    const { replacer: replacer  } = ctx;
    const $112bfc693b1b7a07$export$589748d90c221be3 = new $b2eb05ad33a5939d$export$47adc25f769055b2(schema);
    $112bfc693b1b7a07$export$589748d90c221be3.tag = 'tag:yaml.org,2002:pairs';
    let i = 0;
    if (iterable && Symbol.iterator in Object(iterable)) for (let it of iterable){
        if (typeof replacer === 'function') it = replacer.call(iterable, String(i++), it);
        let key, value;
        if (Array.isArray(it)) {
            if (it.length === 2) {
                key = it[0];
                value = it[1];
            } else throw new TypeError(`Expected [key, value] tuple: ${it}`);
        } else if (it && it instanceof Object) {
            const keys = Object.keys(it);
            if (keys.length === 1) {
                key = keys[0];
                value = it[key];
            } else throw new TypeError(`Expected { key: value } tuple: ${it}`);
        } else key = it;
        $112bfc693b1b7a07$export$589748d90c221be3.items.push($76fb67eccca50f29$export$afe19f123272774(key, value, ctx));
    }
    return $112bfc693b1b7a07$export$589748d90c221be3;
}
const $112bfc693b1b7a07$export$589748d90c221be3 = {
    collection: 'seq',
    default: false,
    tag: 'tag:yaml.org,2002:pairs',
    resolve: $112bfc693b1b7a07$export$f3d665c6925c05a1,
    createNode: $112bfc693b1b7a07$export$27bb6a7978f1f74a
};


class $bc357abcadcf037a$export$7006ac3fb49022d8 extends $b2eb05ad33a5939d$export$47adc25f769055b2 {
    constructor(){
        super();
        this.add = $c69f0da129ce9d4f$export$eb1691c4b19bb5eb.prototype.add.bind(this);
        this.delete = $c69f0da129ce9d4f$export$eb1691c4b19bb5eb.prototype.delete.bind(this);
        this.get = $c69f0da129ce9d4f$export$eb1691c4b19bb5eb.prototype.get.bind(this);
        this.has = $c69f0da129ce9d4f$export$eb1691c4b19bb5eb.prototype.has.bind(this);
        this.set = $c69f0da129ce9d4f$export$eb1691c4b19bb5eb.prototype.set.bind(this);
        this.tag = $bc357abcadcf037a$export$7006ac3fb49022d8.tag;
    }
    /**
     * If `ctx` is given, the return type is actually `Map<unknown, unknown>`,
     * but TypeScript won't allow widening the signature of a child method.
     */ toJSON(_, ctx) {
        if (!ctx) return super.toJSON(_);
        const map = new Map();
        if (ctx === null || ctx === void 0 ? void 0 : ctx.onCreate) ctx.onCreate(map);
        for (const pair of this.items){
            let key, value;
            if ($f5f4f9194ee4d0b0$export$7c8d445944656308(pair)) {
                key = $188b2a47b11993dc$export$f08965dd1304d490(pair.key, '', ctx);
                value = $188b2a47b11993dc$export$f08965dd1304d490(pair.value, key, ctx);
            } else key = $188b2a47b11993dc$export$f08965dd1304d490(pair, '', ctx);
            if (map.has(key)) throw new Error('Ordered maps must not include duplicate keys');
            map.set(key, value);
        }
        return map;
    }
}
$bc357abcadcf037a$export$7006ac3fb49022d8.tag = 'tag:yaml.org,2002:omap';
const $bc357abcadcf037a$export$5a6b5e3152d599a2 = {
    collection: 'seq',
    identify: (value)=>value instanceof Map
    ,
    nodeClass: $bc357abcadcf037a$export$7006ac3fb49022d8,
    default: false,
    tag: 'tag:yaml.org,2002:omap',
    resolve (seq, onError) {
        const pairs = $112bfc693b1b7a07$export$f3d665c6925c05a1(seq, onError);
        const seenKeys = [];
        for (const { key: key  } of pairs.items)if ($f5f4f9194ee4d0b0$export$8f3495e22775e76c(key)) {
            if (seenKeys.includes(key.value)) onError(`Ordered maps must not include duplicate keys: ${key.value}`);
            else seenKeys.push(key.value);
        }
        return Object.assign(new $bc357abcadcf037a$export$7006ac3fb49022d8(), pairs);
    },
    createNode (schema, iterable, ctx) {
        const pairs = $112bfc693b1b7a07$export$27bb6a7978f1f74a(schema, iterable, ctx);
        const $bc357abcadcf037a$export$5a6b5e3152d599a2 = new $bc357abcadcf037a$export$7006ac3fb49022d8();
        $bc357abcadcf037a$export$5a6b5e3152d599a2.items = pairs.items;
        return $bc357abcadcf037a$export$5a6b5e3152d599a2;
    }
};









function $7625c962d3f8db2d$var$boolStringify({ value: value , source: source  }, ctx) {
    const boolObj = value ? $7625c962d3f8db2d$export$ae6fbb429290d2fa : $7625c962d3f8db2d$export$250e1f5a64500a2e;
    if (source && boolObj.test.test(source)) return source;
    return value ? ctx.options.trueStr : ctx.options.falseStr;
}
const $7625c962d3f8db2d$export$ae6fbb429290d2fa = {
    identify: (value)=>value === true
    ,
    default: true,
    tag: 'tag:yaml.org,2002:bool',
    test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
    resolve: ()=>new $1e4079dce2ff1bd7$export$595dbf49c602a1f(true)
    ,
    stringify: $7625c962d3f8db2d$var$boolStringify
};
const $7625c962d3f8db2d$export$250e1f5a64500a2e = {
    identify: (value)=>value === false
    ,
    default: true,
    tag: 'tag:yaml.org,2002:bool',
    test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/i,
    resolve: ()=>new $1e4079dce2ff1bd7$export$595dbf49c602a1f(false)
    ,
    stringify: $7625c962d3f8db2d$var$boolStringify
};




const $02e206d6fcfbdf13$export$37d6b822c496e154 = {
    identify: (value)=>typeof value === 'number'
    ,
    default: true,
    tag: 'tag:yaml.org,2002:float',
    test: /^[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN)$/,
    resolve: (str)=>str.slice(-3).toLowerCase() === 'nan' ? NaN : str[0] === '-' ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY
    ,
    stringify: $f1d192a340680c60$export$4c03b48e25071796
};
const $02e206d6fcfbdf13$export$d62805e4174324af = {
    identify: (value)=>typeof value === 'number'
    ,
    default: true,
    tag: 'tag:yaml.org,2002:float',
    format: 'EXP',
    test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
    resolve: (str)=>parseFloat(str.replace(/_/g, ''))
    ,
    stringify (node) {
        const num = Number(node.value);
        return isFinite(num) ? num.toExponential() : $f1d192a340680c60$export$4c03b48e25071796(node);
    }
};
const $02e206d6fcfbdf13$export$6b5cd3983e3ee5ab = {
    identify: (value)=>typeof value === 'number'
    ,
    default: true,
    tag: 'tag:yaml.org,2002:float',
    test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
    resolve (str) {
        const node = new $1e4079dce2ff1bd7$export$595dbf49c602a1f(parseFloat(str.replace(/_/g, '')));
        const dot = str.indexOf('.');
        if (dot !== -1) {
            const f = str.substring(dot + 1).replace(/_/g, '');
            if (f[f.length - 1] === '0') node.minFractionDigits = f.length;
        }
        return node;
    },
    stringify: $f1d192a340680c60$export$4c03b48e25071796
};



const $2b51fddf264a8de1$var$intIdentify = (value)=>typeof value === 'bigint' || Number.isInteger(value)
;
function $2b51fddf264a8de1$var$intResolve(str, offset, radix, { intAsBigInt: intAsBigInt  }) {
    const sign = str[0];
    if (sign === '-' || sign === '+') offset += 1;
    str = str.substring(offset).replace(/_/g, '');
    if (intAsBigInt) {
        switch(radix){
            case 2:
                str = `0b${str}`;
                break;
            case 8:
                str = `0o${str}`;
                break;
            case 16:
                str = `0x${str}`;
                break;
        }
        const n = BigInt(str);
        return sign === '-' ? BigInt(-1) * n : n;
    }
    const n = parseInt(str, radix);
    return sign === '-' ? -1 * n : n;
}
function $2b51fddf264a8de1$var$intStringify(node, radix, prefix) {
    const { value: value  } = node;
    if ($2b51fddf264a8de1$var$intIdentify(value)) {
        const str = value.toString(radix);
        return value < 0 ? '-' + prefix + str.substr(1) : prefix + str;
    }
    return $f1d192a340680c60$export$4c03b48e25071796(node);
}
const $2b51fddf264a8de1$export$a0833348c72870ac = {
    identify: $2b51fddf264a8de1$var$intIdentify,
    default: true,
    tag: 'tag:yaml.org,2002:int',
    format: 'BIN',
    test: /^[-+]?0b[0-1_]+$/,
    resolve: (str, _onError, opt)=>$2b51fddf264a8de1$var$intResolve(str, 2, 2, opt)
    ,
    stringify: (node)=>$2b51fddf264a8de1$var$intStringify(node, 2, '0b')
};
const $2b51fddf264a8de1$export$3d3e8b3bce028aae = {
    identify: $2b51fddf264a8de1$var$intIdentify,
    default: true,
    tag: 'tag:yaml.org,2002:int',
    format: 'OCT',
    test: /^[-+]?0[0-7_]+$/,
    resolve: (str, _onError, opt)=>$2b51fddf264a8de1$var$intResolve(str, 1, 8, opt)
    ,
    stringify: (node)=>$2b51fddf264a8de1$var$intStringify(node, 8, '0')
};
const $2b51fddf264a8de1$export$7d260a2a5f8bc19e = {
    identify: $2b51fddf264a8de1$var$intIdentify,
    default: true,
    tag: 'tag:yaml.org,2002:int',
    test: /^[-+]?[0-9][0-9_]*$/,
    resolve: (str, _onError, opt)=>$2b51fddf264a8de1$var$intResolve(str, 0, 10, opt)
    ,
    stringify: $f1d192a340680c60$export$4c03b48e25071796
};
const $2b51fddf264a8de1$export$3aff77776319ec6e = {
    identify: $2b51fddf264a8de1$var$intIdentify,
    default: true,
    tag: 'tag:yaml.org,2002:int',
    format: 'HEX',
    test: /^[-+]?0x[0-9a-fA-F_]+$/,
    resolve: (str, _onError, opt)=>$2b51fddf264a8de1$var$intResolve(str, 2, 16, opt)
    ,
    stringify: (node)=>$2b51fddf264a8de1$var$intStringify(node, 16, '0x')
};







class $133efb90084ef124$export$d64eaa29dab13634 extends $c69f0da129ce9d4f$export$eb1691c4b19bb5eb {
    constructor(schema){
        super(schema);
        this.tag = $133efb90084ef124$export$d64eaa29dab13634.tag;
    }
    add(key) {
        let pair;
        if ($f5f4f9194ee4d0b0$export$7c8d445944656308(key)) pair = key;
        else if (typeof key === 'object' && 'key' in key && 'value' in key && key.value === null) pair = new $76fb67eccca50f29$export$d63d7cff08fe4dc9(key.key, null);
        else pair = new $76fb67eccca50f29$export$d63d7cff08fe4dc9(key, null);
        const prev = $c69f0da129ce9d4f$export$cb7eebdbb143b550(this.items, pair.key);
        if (!prev) this.items.push(pair);
    }
    get(key, keepPair) {
        const pair = $c69f0da129ce9d4f$export$cb7eebdbb143b550(this.items, key);
        return !keepPair && $f5f4f9194ee4d0b0$export$7c8d445944656308(pair) ? $f5f4f9194ee4d0b0$export$8f3495e22775e76c(pair.key) ? pair.key.value : pair.key : pair;
    }
    set(key, value) {
        if (typeof value !== 'boolean') throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof value}`);
        const prev = $c69f0da129ce9d4f$export$cb7eebdbb143b550(this.items, key);
        if (prev && !value) this.items.splice(this.items.indexOf(prev), 1);
        else if (!prev && value) this.items.push(new $76fb67eccca50f29$export$d63d7cff08fe4dc9(key));
    }
    toJSON(_, ctx) {
        return super.toJSON(_, ctx, Set);
    }
    toString(ctx, onComment, onChompKeep) {
        if (!ctx) return JSON.stringify(this);
        if (this.hasAllNullValues(true)) return super.toString(Object.assign({}, ctx, {
            allNullValues: true
        }), onComment, onChompKeep);
        else throw new Error('Set items must all have null values');
    }
}
$133efb90084ef124$export$d64eaa29dab13634.tag = 'tag:yaml.org,2002:set';
const $133efb90084ef124$export$adaa4cf7ef1b65be = {
    collection: 'map',
    identify: (value)=>value instanceof Set
    ,
    nodeClass: $133efb90084ef124$export$d64eaa29dab13634,
    default: false,
    tag: 'tag:yaml.org,2002:set',
    resolve (map, onError) {
        if ($f5f4f9194ee4d0b0$export$5c90113a285f2241(map)) {
            if (map.hasAllNullValues(true)) return Object.assign(new $133efb90084ef124$export$d64eaa29dab13634(), map);
            else onError('Set items must all have null values');
        } else onError('Expected a mapping for this tag');
        return map;
    },
    createNode (schema, iterable, ctx) {
        const { replacer: replacer  } = ctx;
        const $133efb90084ef124$export$adaa4cf7ef1b65be = new $133efb90084ef124$export$d64eaa29dab13634(schema);
        if (iterable && Symbol.iterator in Object(iterable)) for (let value of iterable){
            if (typeof replacer === 'function') value = replacer.call(iterable, value, value);
            $133efb90084ef124$export$adaa4cf7ef1b65be.items.push($76fb67eccca50f29$export$afe19f123272774(value, null, ctx));
        }
        return $133efb90084ef124$export$adaa4cf7ef1b65be;
    }
};



/** Internal types handle bigint as number, because TS can't figure it out. */ function $3a59f36e7d8f6efd$var$parseSexagesimal(str, asBigInt) {
    const sign = str[0];
    const parts = sign === '-' || sign === '+' ? str.substring(1) : str;
    const num = (n)=>asBigInt ? BigInt(n) : Number(n)
    ;
    const res1 = parts.replace(/_/g, '').split(':').reduce((res, p)=>res * num(60) + num(p)
    , num(0));
    return sign === '-' ? num(-1) * res1 : res1;
}
/**
 * hhhh:mm:ss.sss
 *
 * Internal types handle bigint as number, because TS can't figure it out.
 */ function $3a59f36e7d8f6efd$var$stringifySexagesimal(node) {
    let { value: value  } = node;
    let num = (n)=>n
    ;
    if (typeof value === 'bigint') num = (n)=>BigInt(n)
    ;
    else if (isNaN(value) || !isFinite(value)) return $f1d192a340680c60$export$4c03b48e25071796(node);
    let sign = '';
    if (value < 0) {
        sign = '-';
        value *= num(-1);
    }
    const _60 = num(60);
    const parts = [
        value % _60
    ]; // seconds, including ms
    if (value < 60) parts.unshift(0); // at least one : is required
    else {
        value = (value - parts[0]) / _60;
        parts.unshift(value % _60); // minutes
        if (value >= 60) {
            value = (value - parts[0]) / _60;
            parts.unshift(value); // hours
        }
    }
    return sign + parts.map((n)=>n < 10 ? '0' + String(n) : String(n)
    ).join(':').replace(/000000\d*$/, '') // % 60 may introduce error
    ;
}
const $3a59f36e7d8f6efd$export$14aedb0832cb7538 = {
    identify: (value)=>typeof value === 'bigint' || Number.isInteger(value)
    ,
    default: true,
    tag: 'tag:yaml.org,2002:int',
    format: 'TIME',
    test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
    resolve: (str, _onError, { intAsBigInt: intAsBigInt  })=>$3a59f36e7d8f6efd$var$parseSexagesimal(str, intAsBigInt)
    ,
    stringify: $3a59f36e7d8f6efd$var$stringifySexagesimal
};
const $3a59f36e7d8f6efd$export$1ca419aed578763e = {
    identify: (value)=>typeof value === 'number'
    ,
    default: true,
    tag: 'tag:yaml.org,2002:float',
    format: 'TIME',
    test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
    resolve: (str)=>$3a59f36e7d8f6efd$var$parseSexagesimal(str, false)
    ,
    stringify: $3a59f36e7d8f6efd$var$stringifySexagesimal
};
const $3a59f36e7d8f6efd$export$fc00ee57782020aa = {
    identify: (value)=>value instanceof Date
    ,
    default: true,
    tag: 'tag:yaml.org,2002:timestamp',
    // If the time zone is omitted, the timestamp is assumed to be specified in UTC. The time part
    // may be omitted altogether, resulting in a date format. In such a case, the time part is
    // assumed to be 00:00:00Z (start of day, UTC).
    test: RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),
    resolve (str) {
        const match = str.match($3a59f36e7d8f6efd$export$fc00ee57782020aa.test);
        if (!match) throw new Error('!!timestamp expects a date, starting with yyyy-mm-dd');
        const [, year, month, day, hour, minute, second] = match.map(Number);
        const millisec = match[7] ? Number((match[7] + '00').substr(1, 3)) : 0;
        let date = Date.UTC(year, month - 1, day, hour || 0, minute || 0, second || 0, millisec);
        const tz = match[8];
        if (tz && tz !== 'Z') {
            let d = $3a59f36e7d8f6efd$var$parseSexagesimal(tz, false);
            if (Math.abs(d) < 30) d *= 60;
            date -= 60000 * d;
        }
        return new Date(date);
    },
    stringify: ({ value: value  })=>value.toISOString().replace(/((T00:00)?:00)?\.000Z$/, '')
};


const $e0a72689ad904a82$export$4902baddc787debb = [
    $afe1e04bd885f08f$export$871de8747c9eaa88,
    $ff10f0bab5084a02$export$1041d4276c328e4d,
    $e536905cdbeb265c$export$22b082955e083ec3,
    $9d5951870b8e7dcd$export$a4f9db1e8324ef6b,
    $7625c962d3f8db2d$export$ae6fbb429290d2fa,
    $7625c962d3f8db2d$export$250e1f5a64500a2e,
    $2b51fddf264a8de1$export$a0833348c72870ac,
    $2b51fddf264a8de1$export$3d3e8b3bce028aae,
    $2b51fddf264a8de1$export$7d260a2a5f8bc19e,
    $2b51fddf264a8de1$export$3aff77776319ec6e,
    $02e206d6fcfbdf13$export$37d6b822c496e154,
    $02e206d6fcfbdf13$export$d62805e4174324af,
    $02e206d6fcfbdf13$export$6b5cd3983e3ee5ab,
    $5f0e620362ae8898$export$33902b7329277358,
    $bc357abcadcf037a$export$5a6b5e3152d599a2,
    $112bfc693b1b7a07$export$589748d90c221be3,
    $133efb90084ef124$export$adaa4cf7ef1b65be,
    $3a59f36e7d8f6efd$export$14aedb0832cb7538,
    $3a59f36e7d8f6efd$export$1ca419aed578763e,
    $3a59f36e7d8f6efd$export$fc00ee57782020aa
];




const $96fedb6edc0ead5f$var$schemas = new Map([
    [
        'core',
        $8f153448b906e539$export$4902baddc787debb
    ],
    [
        'failsafe',
        [
            $afe1e04bd885f08f$export$871de8747c9eaa88,
            $ff10f0bab5084a02$export$1041d4276c328e4d,
            $e536905cdbeb265c$export$22b082955e083ec3
        ]
    ],
    [
        'json',
        $a7681215e3719b11$export$4902baddc787debb
    ],
    [
        'yaml11',
        $e0a72689ad904a82$export$4902baddc787debb
    ],
    [
        'yaml-1.1',
        $e0a72689ad904a82$export$4902baddc787debb
    ]
]);
const $96fedb6edc0ead5f$var$tagsByName = {
    binary: $5f0e620362ae8898$export$33902b7329277358,
    bool: $24308883787bbbf3$export$4f52eaca20f174c1,
    float: $aca303293c36e96a$export$6b5cd3983e3ee5ab,
    floatExp: $aca303293c36e96a$export$d62805e4174324af,
    floatNaN: $aca303293c36e96a$export$37d6b822c496e154,
    floatTime: $3a59f36e7d8f6efd$export$1ca419aed578763e,
    int: $ca37bad0ca3e6607$export$7d260a2a5f8bc19e,
    intHex: $ca37bad0ca3e6607$export$3aff77776319ec6e,
    intOct: $ca37bad0ca3e6607$export$3d3e8b3bce028aae,
    intTime: $3a59f36e7d8f6efd$export$14aedb0832cb7538,
    map: $afe1e04bd885f08f$export$871de8747c9eaa88,
    null: $9d5951870b8e7dcd$export$a4f9db1e8324ef6b,
    omap: $bc357abcadcf037a$export$5a6b5e3152d599a2,
    pairs: $112bfc693b1b7a07$export$589748d90c221be3,
    seq: $ff10f0bab5084a02$export$1041d4276c328e4d,
    set: $133efb90084ef124$export$adaa4cf7ef1b65be,
    timestamp: $3a59f36e7d8f6efd$export$fc00ee57782020aa
};
const $96fedb6edc0ead5f$export$aa155beb708c8cc4 = {
    'tag:yaml.org,2002:binary': $5f0e620362ae8898$export$33902b7329277358,
    'tag:yaml.org,2002:omap': $bc357abcadcf037a$export$5a6b5e3152d599a2,
    'tag:yaml.org,2002:pairs': $112bfc693b1b7a07$export$589748d90c221be3,
    'tag:yaml.org,2002:set': $133efb90084ef124$export$adaa4cf7ef1b65be,
    'tag:yaml.org,2002:timestamp': $3a59f36e7d8f6efd$export$fc00ee57782020aa
};
function $96fedb6edc0ead5f$export$af63d7414243dad3(customTags, schemaName) {
    let tags = $96fedb6edc0ead5f$var$schemas.get(schemaName);
    if (!tags) {
        if (Array.isArray(customTags)) tags = [];
        else {
            const keys = Array.from($96fedb6edc0ead5f$var$schemas.keys()).filter((key)=>key !== 'yaml11'
            ).map((key)=>JSON.stringify(key)
            ).join(', ');
            throw new Error(`Unknown schema "${schemaName}"; use one of ${keys} or define customTags array`);
        }
    }
    if (Array.isArray(customTags)) for (const tag1 of customTags)tags = tags.concat(tag1);
    else if (typeof customTags === 'function') tags = customTags(tags.slice());
    return tags.map((tag)=>{
        if (typeof tag !== 'string') return tag;
        const tagObj = $96fedb6edc0ead5f$var$tagsByName[tag];
        if (tagObj) return tagObj;
        const keys = Object.keys($96fedb6edc0ead5f$var$tagsByName).map((key)=>JSON.stringify(key)
        ).join(', ');
        throw new Error(`Unknown custom tag "${tag}"; use one of ${keys}`);
    });
}


const $15c12611a8a88dfc$var$sortMapEntriesByKey = (a, b)=>a.key < b.key ? -1 : a.key > b.key ? 1 : 0
;
class $15c12611a8a88dfc$export$19342e026b58ebb7 {
    constructor({ compat: compat , customTags: customTags , merge: merge , resolveKnownTags: resolveKnownTags , schema: schema , sortMapEntries: sortMapEntries , toStringDefaults: toStringDefaults  }){
        this.compat = Array.isArray(compat) ? $96fedb6edc0ead5f$export$af63d7414243dad3(compat, 'compat') : compat ? $96fedb6edc0ead5f$export$af63d7414243dad3(null, compat) : null;
        this.merge = !!merge;
        this.name = typeof schema === 'string' && schema || 'core';
        this.knownTags = resolveKnownTags ? $96fedb6edc0ead5f$export$aa155beb708c8cc4 : {};
        this.tags = $96fedb6edc0ead5f$export$af63d7414243dad3(customTags, this.name);
        this.toStringOptions = toStringDefaults !== null && toStringDefaults !== void 0 ? toStringDefaults : null;
        Object.defineProperty(this, $f5f4f9194ee4d0b0$export$ce970371e0e850bc, {
            value: $afe1e04bd885f08f$export$871de8747c9eaa88
        });
        Object.defineProperty(this, $f5f4f9194ee4d0b0$export$8dde1211cb7c9d16, {
            value: $e536905cdbeb265c$export$22b082955e083ec3
        });
        Object.defineProperty(this, $f5f4f9194ee4d0b0$export$200ef2dcd45611c9, {
            value: $ff10f0bab5084a02$export$1041d4276c328e4d
        });
        // Used by createMap()
        this.sortMapEntries = typeof sortMapEntries === 'function' ? sortMapEntries : sortMapEntries === true ? $15c12611a8a88dfc$var$sortMapEntriesByKey : null;
    }
    clone() {
        const copy = Object.create($15c12611a8a88dfc$export$19342e026b58ebb7.prototype, Object.getOwnPropertyDescriptors(this));
        copy.tags = this.tags.slice();
        return copy;
    }
}






function $2487dd130c9a7567$export$4ad5e7f5f7ff7493(doc, options) {
    var _a;
    const lines = [];
    let hasDirectives = options.directives === true;
    if (options.directives !== false && doc.directives) {
        const dir = doc.directives.toString(doc);
        if (dir) {
            lines.push(dir);
            hasDirectives = true;
        } else if (doc.directives.docStart) hasDirectives = true;
    }
    if (hasDirectives) lines.push('---');
    const ctx = $ede9f5b54624ae33$export$829faaf53c257c4d(doc, options);
    const { commentString: commentString  } = ctx.options;
    if (doc.commentBefore) {
        if (lines.length !== 1) lines.unshift('');
        const cs = commentString(doc.commentBefore);
        lines.unshift($ccd23ca1884f7fff$export$9933eb161eea191d(cs, ''));
    }
    let chompKeep = false;
    let contentComment = null;
    if (doc.contents) {
        if ($f5f4f9194ee4d0b0$export$8ee0fc9ee280b4ee(doc.contents)) {
            if (doc.contents.spaceBefore && hasDirectives) lines.push('');
            if (doc.contents.commentBefore) {
                const cs = commentString(doc.contents.commentBefore);
                lines.push($ccd23ca1884f7fff$export$9933eb161eea191d(cs, ''));
            }
            // top-level block scalars need to be indented if followed by a comment
            ctx.forceBlockIndent = !!doc.comment;
            contentComment = doc.contents.comment;
        }
        const onChompKeep = contentComment ? undefined : ()=>chompKeep = true
        ;
        let body = $ede9f5b54624ae33$export$fac44ee5b035f737(doc.contents, ctx, ()=>contentComment = null
        , onChompKeep);
        if (contentComment) body += $ccd23ca1884f7fff$export$5d080f5a78d4f5b3(body, '', commentString(contentComment));
        if ((body[0] === '|' || body[0] === '>') && lines[lines.length - 1] === '---') // Top-level block scalars with a preceding doc marker ought to use the
        // same line for their header.
        lines[lines.length - 1] = `--- ${body}`;
        else lines.push(body);
    } else lines.push($ede9f5b54624ae33$export$fac44ee5b035f737(doc.contents, ctx));
    if ((_a = doc.directives) === null || _a === void 0 ? void 0 : _a.docEnd) {
        if (doc.comment) {
            const cs = commentString(doc.comment);
            if (cs.includes('\n')) {
                lines.push('...');
                lines.push($ccd23ca1884f7fff$export$9933eb161eea191d(cs, ''));
            } else lines.push(`... ${cs}`);
        } else lines.push('...');
    } else {
        let dc = doc.comment;
        if (dc && chompKeep) dc = dc.replace(/^\n+/, '');
        if (dc) {
            if ((!chompKeep || contentComment) && lines[lines.length - 1] !== '') lines.push('');
            lines.push($ccd23ca1884f7fff$export$9933eb161eea191d(commentString(dc), ''));
        }
    }
    return lines.join('\n') + '\n';
}



/**
 * Applies the JSON.parse reviver algorithm as defined in the ECMA-262 spec,
 * in section 24.5.1.1 "Runtime Semantics: InternalizeJSONProperty" of the
 * 2021 edition: https://tc39.es/ecma262/#sec-json.parse
 *
 * Includes extensions for handling Map and Set objects.
 */ function $9ec1fad5155d4571$export$abc04374ac0ef535(reviver, obj, key, val) {
    if (val && typeof val === 'object') {
        if (Array.isArray(val)) for(let i = 0, len = val.length; i < len; ++i){
            const v0 = val[i];
            const v1 = $9ec1fad5155d4571$export$abc04374ac0ef535(reviver, val, String(i), v0);
            if (v1 === undefined) delete val[i];
            else if (v1 !== v0) val[i] = v1;
        }
        else if (val instanceof Map) for (const k of Array.from(val.keys())){
            const v0 = val.get(k);
            const v1 = $9ec1fad5155d4571$export$abc04374ac0ef535(reviver, val, k, v0);
            if (v1 === undefined) val.delete(k);
            else if (v1 !== v0) val.set(k, v1);
        }
        else if (val instanceof Set) for (const v0 of Array.from(val)){
            const v1 = $9ec1fad5155d4571$export$abc04374ac0ef535(reviver, val, v0, v0);
            if (v1 === undefined) val.delete(v0);
            else if (v1 !== v0) {
                val.delete(v0);
                val.add(v1);
            }
        }
        else for (const [k1, v01] of Object.entries(val)){
            const v1 = $9ec1fad5155d4571$export$abc04374ac0ef535(reviver, val, k1, v01);
            if (v1 === undefined) delete val[k1];
            else if (v1 !== v01) val[k1] = v1;
        }
    }
    return reviver.call(obj, key, val);
}




class $a1e25132f1f55cca$export$b34a105447964f9f {
    constructor(value, replacer, options){
        /** A comment before this Document */ this.commentBefore = null;
        /** A comment immediately after this Document */ this.comment = null;
        /** Errors encountered during parsing. */ this.errors = [];
        /** Warnings encountered during parsing. */ this.warnings = [];
        Object.defineProperty(this, $f5f4f9194ee4d0b0$export$accaa52ddae3fe58, {
            value: $f5f4f9194ee4d0b0$export$c41a48f61a15d775
        });
        let _replacer = null;
        if (typeof replacer === 'function' || Array.isArray(replacer)) _replacer = replacer;
        else if (options === undefined && replacer) {
            options = replacer;
            replacer = undefined;
        }
        const opt = Object.assign({
            intAsBigInt: false,
            keepSourceTokens: false,
            logLevel: 'warn',
            prettyErrors: true,
            strict: true,
            uniqueKeys: true,
            version: '1.2'
        }, options);
        this.options = opt;
        let { version: version  } = opt;
        if (options === null || options === void 0 ? void 0 : options.directives) {
            this.directives = options.directives.atDocument();
            if (this.directives.yaml.explicit) version = this.directives.yaml.version;
        } else this.directives = new $b8a939dc4e5e90e4$export$129646a0e1af8d85({
            version: version
        });
        this.setSchema(version, options);
        if (value === undefined) this.contents = null;
        else this.contents = this.createNode(value, _replacer, options);
    }
    /**
     * Create a deep copy of this Document and its contents.
     *
     * Custom Node values that inherit from `Object` still refer to their original instances.
     */ clone() {
        const copy = Object.create($a1e25132f1f55cca$export$b34a105447964f9f.prototype, {
            [$f5f4f9194ee4d0b0$export$accaa52ddae3fe58]: {
                value: $f5f4f9194ee4d0b0$export$c41a48f61a15d775
            }
        });
        copy.commentBefore = this.commentBefore;
        copy.comment = this.comment;
        copy.errors = this.errors.slice();
        copy.warnings = this.warnings.slice();
        copy.options = Object.assign({}, this.options);
        if (this.directives) copy.directives = this.directives.clone();
        copy.schema = this.schema.clone();
        copy.contents = $f5f4f9194ee4d0b0$export$8ee0fc9ee280b4ee(this.contents) ? this.contents.clone(copy.schema) : this.contents;
        if (this.range) copy.range = this.range.slice();
        return copy;
    }
    /** Adds a value to the document. */ add(value) {
        if ($a1e25132f1f55cca$var$assertCollection(this.contents)) this.contents.add(value);
    }
    /** Adds a value to the document. */ addIn(path, value) {
        if ($a1e25132f1f55cca$var$assertCollection(this.contents)) this.contents.addIn(path, value);
    }
    /**
     * Create a new `Alias` node, ensuring that the target `node` has the required anchor.
     *
     * If `node` already has an anchor, `name` is ignored.
     * Otherwise, the `node.anchor` value will be set to `name`,
     * or if an anchor with that name is already present in the document,
     * `name` will be used as a prefix for a new unique anchor.
     * If `name` is undefined, the generated anchor will use 'a' as a prefix.
     */ createAlias(node, name) {
        if (!node.anchor) {
            const prev = $be49038f6ed5c8f2$export$402f230d710ffb75(this);
            node.anchor = // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
            !name || prev.has(name) ? $be49038f6ed5c8f2$export$1a7f8f45ec43f9e4(name || 'a', prev) : name;
        }
        return new $1fa424ec67fb901b$export$17b520249a85fe16(node.anchor);
    }
    createNode(value, replacer, options) {
        let _replacer = undefined;
        if (typeof replacer === 'function') {
            value = replacer.call({
                '': value
            }, '', value);
            _replacer = replacer;
        } else if (Array.isArray(replacer)) {
            const keyToStr = (v)=>typeof v === 'number' || v instanceof String || v instanceof Number
            ;
            const asStr = replacer.filter(keyToStr).map(String);
            if (asStr.length > 0) replacer = replacer.concat(asStr);
            _replacer = replacer;
        } else if (options === undefined && replacer) {
            options = replacer;
            replacer = undefined;
        }
        const { aliasDuplicateObjects: aliasDuplicateObjects , anchorPrefix: anchorPrefix , flow: flow , keepUndefined: keepUndefined , onTagObj: onTagObj , tag: tag  } = options !== null && options !== void 0 ? options : {};
        const { onAnchor: onAnchor , setAnchors: setAnchors , sourceObjects: sourceObjects  } = $be49038f6ed5c8f2$export$5498887d1e6c340c(this, // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        anchorPrefix || 'a');
        const ctx = {
            aliasDuplicateObjects: aliasDuplicateObjects !== null && aliasDuplicateObjects !== void 0 ? aliasDuplicateObjects : true,
            keepUndefined: keepUndefined !== null && keepUndefined !== void 0 ? keepUndefined : false,
            onAnchor: onAnchor,
            onTagObj: onTagObj,
            replacer: _replacer,
            schema: this.schema,
            sourceObjects: sourceObjects
        };
        const node = $96c2f6d8a80ba80e$export$270e7ba5936d3c48(value, tag, ctx);
        if (flow && $f5f4f9194ee4d0b0$export$cea7aa84e978eba5(node)) node.flow = true;
        setAnchors();
        return node;
    }
    /**
     * Convert a key and a value into a `Pair` using the current schema,
     * recursively wrapping all values as `Scalar` or `Collection` nodes.
     */ createPair(key, value, options = {}) {
        const k = this.createNode(key, null, options);
        const v = this.createNode(value, null, options);
        return new $76fb67eccca50f29$export$d63d7cff08fe4dc9(k, v);
    }
    /**
     * Removes a value from the document.
     * @returns `true` if the item was found and removed.
     */ delete(key) {
        return $a1e25132f1f55cca$var$assertCollection(this.contents) ? this.contents.delete(key) : false;
    }
    /**
     * Removes a value from the document.
     * @returns `true` if the item was found and removed.
     */ deleteIn(path) {
        if ($c5947d2357a68267$export$e3bfca790bd8f9da(path)) {
            if (this.contents == null) return false;
            this.contents = null;
            return true;
        }
        return $a1e25132f1f55cca$var$assertCollection(this.contents) ? this.contents.deleteIn(path) : false;
    }
    /**
     * Returns item at `key`, or `undefined` if not found. By default unwraps
     * scalar values from their surrounding node; to disable set `keepScalar` to
     * `true` (collections are always returned intact).
     */ get(key, keepScalar) {
        return $f5f4f9194ee4d0b0$export$cea7aa84e978eba5(this.contents) ? this.contents.get(key, keepScalar) : undefined;
    }
    /**
     * Returns item at `path`, or `undefined` if not found. By default unwraps
     * scalar values from their surrounding node; to disable set `keepScalar` to
     * `true` (collections are always returned intact).
     */ getIn(path, keepScalar) {
        if ($c5947d2357a68267$export$e3bfca790bd8f9da(path)) return !keepScalar && $f5f4f9194ee4d0b0$export$8f3495e22775e76c(this.contents) ? this.contents.value : this.contents;
        return $f5f4f9194ee4d0b0$export$cea7aa84e978eba5(this.contents) ? this.contents.getIn(path, keepScalar) : undefined;
    }
    /**
     * Checks if the document includes a value with the key `key`.
     */ has(key) {
        return $f5f4f9194ee4d0b0$export$cea7aa84e978eba5(this.contents) ? this.contents.has(key) : false;
    }
    /**
     * Checks if the document includes a value at `path`.
     */ hasIn(path) {
        if ($c5947d2357a68267$export$e3bfca790bd8f9da(path)) return this.contents !== undefined;
        return $f5f4f9194ee4d0b0$export$cea7aa84e978eba5(this.contents) ? this.contents.hasIn(path) : false;
    }
    /**
     * Sets a value in this document. For `!!set`, `value` needs to be a
     * boolean to add/remove the item from the set.
     */ set(key, value) {
        if (this.contents == null) this.contents = $c5947d2357a68267$export$f5ac8bc6072340dd(this.schema, [
            key
        ], value);
        else if ($a1e25132f1f55cca$var$assertCollection(this.contents)) this.contents.set(key, value);
    }
    /**
     * Sets a value in this document. For `!!set`, `value` needs to be a
     * boolean to add/remove the item from the set.
     */ setIn(path, value) {
        if ($c5947d2357a68267$export$e3bfca790bd8f9da(path)) this.contents = value;
        else if (this.contents == null) this.contents = $c5947d2357a68267$export$f5ac8bc6072340dd(this.schema, Array.from(path), value);
        else if ($a1e25132f1f55cca$var$assertCollection(this.contents)) this.contents.setIn(path, value);
    }
    /**
     * Change the YAML version and schema used by the document.
     * A `null` version disables support for directives, explicit tags, anchors, and aliases.
     * It also requires the `schema` option to be given as a `Schema` instance value.
     *
     * Overrides all previously set schema options.
     */ setSchema(version, options = {}) {
        if (typeof version === 'number') version = String(version);
        let opt;
        switch(version){
            case '1.1':
                if (this.directives) this.directives.yaml.version = '1.1';
                else this.directives = new $b8a939dc4e5e90e4$export$129646a0e1af8d85({
                    version: '1.1'
                });
                opt = {
                    merge: true,
                    resolveKnownTags: false,
                    schema: 'yaml-1.1'
                };
                break;
            case '1.2':
            case 'next':
                if (this.directives) this.directives.yaml.version = version;
                else this.directives = new $b8a939dc4e5e90e4$export$129646a0e1af8d85({
                    version: version
                });
                opt = {
                    merge: false,
                    resolveKnownTags: true,
                    schema: 'core'
                };
                break;
            case null:
                if (this.directives) delete this.directives;
                opt = null;
                break;
            default:
                {
                    const sv = JSON.stringify(version);
                    throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${sv}`);
                }
        }
        // Not using `instanceof Schema` to allow for duck typing
        if (options.schema instanceof Object) this.schema = options.schema;
        else if (opt) this.schema = new $15c12611a8a88dfc$export$19342e026b58ebb7(Object.assign(opt, options));
        else throw new Error(`With a null YAML version, the { schema: Schema } option is required`);
    }
    // json & jsonArg are only used from toJSON()
    toJS({ json: json , jsonArg: jsonArg , mapAsMap: mapAsMap , maxAliasCount: maxAliasCount , onAnchor: onAnchor , reviver: reviver  } = {}) {
        const ctx = {
            anchors: new Map(),
            doc: this,
            keep: !json,
            mapAsMap: mapAsMap === true,
            mapKeyWarned: false,
            maxAliasCount: typeof maxAliasCount === 'number' ? maxAliasCount : 100,
            stringify: $ede9f5b54624ae33$export$fac44ee5b035f737
        };
        const res = $188b2a47b11993dc$export$f08965dd1304d490(this.contents, jsonArg !== null && jsonArg !== void 0 ? jsonArg : '', ctx);
        if (typeof onAnchor === 'function') for (const { count: count , res: res1  } of ctx.anchors.values())onAnchor(res1, count);
        return typeof reviver === 'function' ? $9ec1fad5155d4571$export$abc04374ac0ef535(reviver, {
            '': res
        }, '', res) : res;
    }
    /**
     * A JSON representation of the document `contents`.
     *
     * @param jsonArg Used by `JSON.stringify` to indicate the array index or
     *   property name.
     */ toJSON(jsonArg, onAnchor) {
        return this.toJS({
            json: true,
            jsonArg: jsonArg,
            mapAsMap: false,
            onAnchor: onAnchor
        });
    }
    /** A YAML representation of the document. */ toString(options = {}) {
        if (this.errors.length > 0) throw new Error('Document with errors cannot be stringified');
        if ('indent' in options && (!Number.isInteger(options.indent) || Number(options.indent) <= 0)) {
            const s = JSON.stringify(options.indent);
            throw new Error(`"indent" option must be a positive integer, not ${s}`);
        }
        return $2487dd130c9a7567$export$4ad5e7f5f7ff7493(this, options);
    }
}
function $a1e25132f1f55cca$var$assertCollection(contents) {
    if ($f5f4f9194ee4d0b0$export$cea7aa84e978eba5(contents)) return true;
    throw new Error('Expected a YAML collection as document contents');
}










function $d9f3649e3b6b1e0a$export$3947d67c7569cd22(tokens, { flow: flow , indicator: indicator , next: next , offset: offset , onError: onError , startOnNewline: startOnNewline  }) {
    let spaceBefore = false;
    let atNewline = startOnNewline;
    let hasSpace = startOnNewline;
    let comment = '';
    let commentSep = '';
    let hasNewline = false;
    let hasNewlineAfterProp = false;
    let reqSpace = false;
    let anchor = null;
    let tag = null;
    let comma = null;
    let found = null;
    let start = null;
    for (const token of tokens){
        if (reqSpace) {
            if (token.type !== 'space' && token.type !== 'newline' && token.type !== 'comma') onError(token.offset, 'MISSING_CHAR', 'Tags and anchors must be separated from the next token by white space');
            reqSpace = false;
        }
        switch(token.type){
            case 'space':
                // At the doc level, tabs at line start may be parsed
                // as leading white space rather than indentation.
                // In a flow collection, only the parser handles indent.
                if (!flow && atNewline && indicator !== 'doc-start' && token.source[0] === '\t') onError(token, 'TAB_AS_INDENT', 'Tabs are not allowed as indentation');
                hasSpace = true;
                break;
            case 'comment':
                {
                    if (!hasSpace) onError(token, 'MISSING_CHAR', 'Comments must be separated from other tokens by white space characters');
                    const cb = token.source.substring(1) || ' ';
                    if (!comment) comment = cb;
                    else comment += commentSep + cb;
                    commentSep = '';
                    atNewline = false;
                    break;
                }
            case 'newline':
                if (atNewline) {
                    if (comment) comment += token.source;
                    else spaceBefore = true;
                } else commentSep += token.source;
                atNewline = true;
                hasNewline = true;
                if (anchor || tag) hasNewlineAfterProp = true;
                hasSpace = true;
                break;
            case 'anchor':
                if (anchor) onError(token, 'MULTIPLE_ANCHORS', 'A node can have at most one anchor');
                if (token.source.endsWith(':')) onError(token.offset + token.source.length - 1, 'BAD_ALIAS', 'Anchor ending in : is ambiguous', true);
                anchor = token;
                if (start === null) start = token.offset;
                atNewline = false;
                hasSpace = false;
                reqSpace = true;
                break;
            case 'tag':
                if (tag) onError(token, 'MULTIPLE_TAGS', 'A node can have at most one tag');
                tag = token;
                if (start === null) start = token.offset;
                atNewline = false;
                hasSpace = false;
                reqSpace = true;
                break;
            case indicator:
                // Could here handle preceding comments differently
                if (anchor || tag) onError(token, 'BAD_PROP_ORDER', `Anchors and tags must be after the ${token.source} indicator`);
                if (found) onError(token, 'UNEXPECTED_TOKEN', `Unexpected ${token.source} in ${flow !== null && flow !== void 0 ? flow : 'collection'}`);
                found = token;
                atNewline = false;
                hasSpace = false;
                break;
            case 'comma':
                if (flow) {
                    if (comma) onError(token, 'UNEXPECTED_TOKEN', `Unexpected , in ${flow}`);
                    comma = token;
                    atNewline = false;
                    hasSpace = false;
                    break;
                }
            // else fallthrough
            default:
                onError(token, 'UNEXPECTED_TOKEN', `Unexpected ${token.type} token`);
                atNewline = false;
                hasSpace = false;
        }
    }
    const last = tokens[tokens.length - 1];
    const end = last ? last.offset + last.source.length : offset;
    if (reqSpace && next && next.type !== 'space' && next.type !== 'newline' && next.type !== 'comma' && (next.type !== 'scalar' || next.source !== '')) onError(next.offset, 'MISSING_CHAR', 'Tags and anchors must be separated from the next token by white space');
    return {
        comma: comma,
        found: found,
        spaceBefore: spaceBefore,
        comment: comment,
        hasNewline: hasNewline,
        hasNewlineAfterProp: hasNewlineAfterProp,
        anchor: anchor,
        tag: tag,
        end: end,
        start: start !== null && start !== void 0 ? start : end
    };
}


function $554ebd7bdb13c993$export$72c4c19842d44e03(key) {
    if (!key) return null;
    switch(key.type){
        case 'alias':
        case 'scalar':
        case 'double-quoted-scalar':
        case 'single-quoted-scalar':
            if (key.source.includes('\n')) return true;
            if (key.end) {
                for (const st of key.end)if (st.type === 'newline') return true;
            }
            return false;
        case 'flow-collection':
            for (const it of key.items){
                for (const st of it.start)if (st.type === 'newline') return true;
                if (it.sep) {
                    for (const st of it.sep)if (st.type === 'newline') return true;
                }
                if ($554ebd7bdb13c993$export$72c4c19842d44e03(it.key) || $554ebd7bdb13c993$export$72c4c19842d44e03(it.value)) return true;
            }
            return false;
        default:
            return true;
    }
}



function $4284034ecb131fb0$export$6195a21984b7a892(indent, fc, onError) {
    if ((fc === null || fc === void 0 ? void 0 : fc.type) === 'flow-collection') {
        const end = fc.end[0];
        if (end.indent === indent && (end.source === ']' || end.source === '}') && $554ebd7bdb13c993$export$72c4c19842d44e03(fc)) {
            const msg = 'Flow end indicator should be more indented than parent';
            onError(end, 'BAD_INDENT', msg, true);
        }
    }
}



function $8e280e331aeebe50$export$ab8ef54c273a4fc3(ctx, items, search) {
    const { uniqueKeys: uniqueKeys  } = ctx.options;
    if (uniqueKeys === false) return false;
    const isEqual = typeof uniqueKeys === 'function' ? uniqueKeys : (a, b)=>a === b || $f5f4f9194ee4d0b0$export$8f3495e22775e76c(a) && $f5f4f9194ee4d0b0$export$8f3495e22775e76c(b) && a.value === b.value && !(a.value === '<<' && ctx.schema.merge)
    ;
    return items.some((pair)=>isEqual(pair.key, search)
    );
}


const $d7835058e7d9f9e5$var$startColMsg = 'All mapping items must start at the same column';
function $d7835058e7d9f9e5$export$9c415700b1dbff3b({ composeNode: composeNode , composeEmptyNode: composeEmptyNode  }, ctx, bm, onError) {
    var _a;
    const map = new $c69f0da129ce9d4f$export$eb1691c4b19bb5eb(ctx.schema);
    if (ctx.atRoot) ctx.atRoot = false;
    let offset = bm.offset;
    for (const collItem of bm.items){
        const { start: start , key: key , sep: sep , value: value  } = collItem;
        // key properties
        const keyProps = $d9f3649e3b6b1e0a$export$3947d67c7569cd22(start, {
            indicator: 'explicit-key-ind',
            next: key !== null && key !== void 0 ? key : sep === null || sep === void 0 ? void 0 : sep[0],
            offset: offset,
            onError: onError,
            startOnNewline: true
        });
        const implicitKey = !keyProps.found;
        if (implicitKey) {
            if (key) {
                if (key.type === 'block-seq') onError(offset, 'BLOCK_AS_IMPLICIT_KEY', 'A block sequence may not be used as an implicit map key');
                else if ('indent' in key && key.indent !== bm.indent) onError(offset, 'BAD_INDENT', $d7835058e7d9f9e5$var$startColMsg);
            }
            if (!keyProps.anchor && !keyProps.tag && !sep) {
                // TODO: assert being at last item?
                if (keyProps.comment) {
                    if (map.comment) map.comment += '\n' + keyProps.comment;
                    else map.comment = keyProps.comment;
                }
                continue;
            }
            if (keyProps.hasNewlineAfterProp || $554ebd7bdb13c993$export$72c4c19842d44e03(key)) onError(key !== null && key !== void 0 ? key : start[start.length - 1], 'MULTILINE_IMPLICIT_KEY', 'Implicit keys need to be on a single line');
        } else if (((_a = keyProps.found) === null || _a === void 0 ? void 0 : _a.indent) !== bm.indent) onError(offset, 'BAD_INDENT', $d7835058e7d9f9e5$var$startColMsg);
        // key value
        const keyStart = keyProps.end;
        const keyNode = key ? composeNode(ctx, key, keyProps, onError) : composeEmptyNode(ctx, keyStart, start, null, keyProps, onError);
        if (ctx.schema.compat) $4284034ecb131fb0$export$6195a21984b7a892(bm.indent, key, onError);
        if ($8e280e331aeebe50$export$ab8ef54c273a4fc3(ctx, map.items, keyNode)) onError(keyStart, 'DUPLICATE_KEY', 'Map keys must be unique');
        // value properties
        const valueProps = $d9f3649e3b6b1e0a$export$3947d67c7569cd22(sep !== null && sep !== void 0 ? sep : [], {
            indicator: 'map-value-ind',
            next: value,
            offset: keyNode.range[2],
            onError: onError,
            startOnNewline: !key || key.type === 'block-scalar'
        });
        offset = valueProps.end;
        if (valueProps.found) {
            if (implicitKey) {
                if ((value === null || value === void 0 ? void 0 : value.type) === 'block-map' && !valueProps.hasNewline) onError(offset, 'BLOCK_AS_IMPLICIT_KEY', 'Nested mappings are not allowed in compact mappings');
                if (ctx.options.strict && keyProps.start < valueProps.found.offset - 1024) onError(keyNode.range, 'KEY_OVER_1024_CHARS', 'The : indicator must be at most 1024 chars after the start of an implicit block mapping key');
            }
            // value value
            const valueNode = value ? composeNode(ctx, value, valueProps, onError) : composeEmptyNode(ctx, offset, sep, null, valueProps, onError);
            if (ctx.schema.compat) $4284034ecb131fb0$export$6195a21984b7a892(bm.indent, value, onError);
            offset = valueNode.range[2];
            const pair = new $76fb67eccca50f29$export$d63d7cff08fe4dc9(keyNode, valueNode);
            if (ctx.options.keepSourceTokens) pair.srcToken = collItem;
            map.items.push(pair);
        } else {
            // key with no value
            if (implicitKey) onError(keyNode.range, 'MISSING_CHAR', 'Implicit map keys need to be followed by map values');
            if (valueProps.comment) {
                if (keyNode.comment) keyNode.comment += '\n' + valueProps.comment;
                else keyNode.comment = valueProps.comment;
            }
            const pair = new $76fb67eccca50f29$export$d63d7cff08fe4dc9(keyNode);
            if (ctx.options.keepSourceTokens) pair.srcToken = collItem;
            map.items.push(pair);
        }
    }
    map.range = [
        bm.offset,
        offset,
        offset
    ];
    return map;
}





function $e4960d76a6aa95ff$export$2db6dd42184ff7ac({ composeNode: composeNode , composeEmptyNode: composeEmptyNode  }, ctx, bs, onError) {
    const seq = new $b2eb05ad33a5939d$export$47adc25f769055b2(ctx.schema);
    if (ctx.atRoot) ctx.atRoot = false;
    let offset = bs.offset;
    for (const { start: start , value: value  } of bs.items){
        const props = $d9f3649e3b6b1e0a$export$3947d67c7569cd22(start, {
            indicator: 'seq-item-ind',
            next: value,
            offset: offset,
            onError: onError,
            startOnNewline: true
        });
        offset = props.end;
        if (!props.found) {
            if (props.anchor || props.tag || value) {
                if (value && value.type === 'block-seq') onError(offset, 'BAD_INDENT', 'All sequence items must start at the same column');
                else onError(offset, 'MISSING_CHAR', 'Sequence item without - indicator');
            } else {
                // TODO: assert being at last item?
                if (props.comment) seq.comment = props.comment;
                continue;
            }
        }
        const node = value ? composeNode(ctx, value, props, onError) : composeEmptyNode(ctx, offset, start, null, props, onError);
        if (ctx.schema.compat) $4284034ecb131fb0$export$6195a21984b7a892(bs.indent, value, onError);
        offset = node.range[2];
        seq.items.push(node);
    }
    seq.range = [
        bs.offset,
        offset,
        offset
    ];
    return seq;
}










const $504202ae0be096d7$var$blockMsg = 'Block collections are not allowed within flow collections';
const $504202ae0be096d7$var$isBlock = (token)=>token && (token.type === 'block-map' || token.type === 'block-seq')
;
function $504202ae0be096d7$export$fdd70fe10aa6d63e({ composeNode: composeNode , composeEmptyNode: composeEmptyNode  }, ctx, fc, onError) {
    var _a;
    const isMap = fc.start.source === '{';
    const fcName = isMap ? 'flow map' : 'flow sequence';
    const coll = isMap ? new $c69f0da129ce9d4f$export$eb1691c4b19bb5eb(ctx.schema) : new $b2eb05ad33a5939d$export$47adc25f769055b2(ctx.schema);
    coll.flow = true;
    const atRoot = ctx.atRoot;
    if (atRoot) ctx.atRoot = false;
    let offset = fc.offset + fc.start.source.length;
    for(let i = 0; i < fc.items.length; ++i){
        const collItem = fc.items[i];
        const { start: start , key: key , sep: sep , value: value  } = collItem;
        const props = $d9f3649e3b6b1e0a$export$3947d67c7569cd22(start, {
            flow: fcName,
            indicator: 'explicit-key-ind',
            next: key !== null && key !== void 0 ? key : sep === null || sep === void 0 ? void 0 : sep[0],
            offset: offset,
            onError: onError,
            startOnNewline: false
        });
        if (!props.found) {
            if (!props.anchor && !props.tag && !sep && !value) {
                if (i === 0 && props.comma) onError(props.comma, 'UNEXPECTED_TOKEN', `Unexpected , in ${fcName}`);
                else if (i < fc.items.length - 1) onError(props.start, 'UNEXPECTED_TOKEN', `Unexpected empty item in ${fcName}`);
                if (props.comment) {
                    if (coll.comment) coll.comment += '\n' + props.comment;
                    else coll.comment = props.comment;
                }
                offset = props.end;
                continue;
            }
            if (!isMap && ctx.options.strict && $554ebd7bdb13c993$export$72c4c19842d44e03(key)) onError(key, 'MULTILINE_IMPLICIT_KEY', 'Implicit keys of flow sequence pairs need to be on a single line');
        }
        if (i === 0) {
            if (props.comma) onError(props.comma, 'UNEXPECTED_TOKEN', `Unexpected , in ${fcName}`);
        } else {
            if (!props.comma) onError(props.start, 'MISSING_CHAR', `Missing , between ${fcName} items`);
            if (props.comment) {
                let prevItemComment = '';
                loop: for (const st of start)switch(st.type){
                    case 'comma':
                    case 'space':
                        break;
                    case 'comment':
                        prevItemComment = st.source.substring(1);
                        break loop;
                    default:
                        break loop;
                }
                if (prevItemComment) {
                    let prev = coll.items[coll.items.length - 1];
                    if ($f5f4f9194ee4d0b0$export$7c8d445944656308(prev)) prev = (_a = prev.value) !== null && _a !== void 0 ? _a : prev.key;
                    if (prev.comment) prev.comment += '\n' + prevItemComment;
                    else prev.comment = prevItemComment;
                    props.comment = props.comment.substring(prevItemComment.length + 1);
                }
            }
        }
        if (!isMap && !sep && !props.found) {
            // item is a value in a seq
            // → key & sep are empty, start does not include ? or :
            const valueNode = value ? composeNode(ctx, value, props, onError) : composeEmptyNode(ctx, props.end, sep, null, props, onError);
            coll.items.push(valueNode);
            offset = valueNode.range[2];
            if ($504202ae0be096d7$var$isBlock(value)) onError(valueNode.range, 'BLOCK_IN_FLOW', $504202ae0be096d7$var$blockMsg);
        } else {
            // item is a key+value pair
            // key value
            const keyStart = props.end;
            const keyNode = key ? composeNode(ctx, key, props, onError) : composeEmptyNode(ctx, keyStart, start, null, props, onError);
            if ($504202ae0be096d7$var$isBlock(key)) onError(keyNode.range, 'BLOCK_IN_FLOW', $504202ae0be096d7$var$blockMsg);
            // value properties
            const valueProps = $d9f3649e3b6b1e0a$export$3947d67c7569cd22(sep !== null && sep !== void 0 ? sep : [], {
                flow: fcName,
                indicator: 'map-value-ind',
                next: value,
                offset: keyNode.range[2],
                onError: onError,
                startOnNewline: false
            });
            if (valueProps.found) {
                if (!isMap && !props.found && ctx.options.strict) {
                    if (sep) for (const st of sep){
                        if (st === valueProps.found) break;
                        if (st.type === 'newline') {
                            onError(st, 'MULTILINE_IMPLICIT_KEY', 'Implicit keys of flow sequence pairs need to be on a single line');
                            break;
                        }
                    }
                    if (props.start < valueProps.found.offset - 1024) onError(valueProps.found, 'KEY_OVER_1024_CHARS', 'The : indicator must be at most 1024 chars after the start of an implicit flow sequence key');
                }
            } else if (value) {
                if ('source' in value && value.source && value.source[0] === ':') onError(value, 'MISSING_CHAR', `Missing space after : in ${fcName}`);
                else onError(valueProps.start, 'MISSING_CHAR', `Missing , or : between ${fcName} items`);
            }
            // value value
            const valueNode = value ? composeNode(ctx, value, valueProps, onError) : valueProps.found ? composeEmptyNode(ctx, valueProps.end, sep, null, valueProps, onError) : null;
            if (valueNode) {
                if ($504202ae0be096d7$var$isBlock(value)) onError(valueNode.range, 'BLOCK_IN_FLOW', $504202ae0be096d7$var$blockMsg);
            } else if (valueProps.comment) {
                if (keyNode.comment) keyNode.comment += '\n' + valueProps.comment;
                else keyNode.comment = valueProps.comment;
            }
            const pair = new $76fb67eccca50f29$export$d63d7cff08fe4dc9(keyNode, valueNode);
            if (ctx.options.keepSourceTokens) pair.srcToken = collItem;
            if (isMap) {
                const map = coll;
                if ($8e280e331aeebe50$export$ab8ef54c273a4fc3(ctx, map.items, keyNode)) onError(keyStart, 'DUPLICATE_KEY', 'Map keys must be unique');
                map.items.push(pair);
            } else {
                const map = new $c69f0da129ce9d4f$export$eb1691c4b19bb5eb(ctx.schema);
                map.flow = true;
                map.items.push(pair);
                coll.items.push(map);
            }
            offset = valueNode ? valueNode.range[2] : valueProps.end;
        }
    }
    const expectedEnd = isMap ? '}' : ']';
    const [ce, ...ee] = fc.end;
    let cePos = offset;
    if (ce && ce.source === expectedEnd) cePos = ce.offset + ce.source.length;
    else {
        const name = fcName[0].toUpperCase() + fcName.substring(1);
        const msg = atRoot ? `${name} must end with a ${expectedEnd}` : `${name} in block collection must be sufficiently indented and end with a ${expectedEnd}`;
        onError(offset, atRoot ? 'MISSING_CHAR' : 'BAD_INDENT', msg);
        if (ce && ce.source.length !== 1) ee.unshift(ce);
    }
    if (ee.length > 0) {
        const end = $936ecb118d387b35$export$9be3172c55e482a(ee, cePos, ctx.options.strict, onError);
        if (end.comment) {
            if (coll.comment) coll.comment += '\n' + end.comment;
            else coll.comment = end.comment;
        }
        coll.range = [
            fc.offset,
            cePos,
            end.offset
        ];
    } else coll.range = [
        fc.offset,
        cePos,
        cePos
    ];
    return coll;
}


function $030aab7d4dcde518$export$670d412b724aec43(CN, ctx, token, tagToken, onError) {
    let coll;
    switch(token.type){
        case 'block-map':
            coll = $d7835058e7d9f9e5$export$9c415700b1dbff3b(CN, ctx, token, onError);
            break;
        case 'block-seq':
            coll = $e4960d76a6aa95ff$export$2db6dd42184ff7ac(CN, ctx, token, onError);
            break;
        case 'flow-collection':
            coll = $504202ae0be096d7$export$fdd70fe10aa6d63e(CN, ctx, token, onError);
            break;
    }
    if (!tagToken) return coll;
    const tagName = ctx.directives.tagName(tagToken.source, (msg)=>onError(tagToken, 'TAG_RESOLVE_FAILED', msg)
    );
    if (!tagName) return coll;
    // Cast needed due to: https://github.com/Microsoft/TypeScript/issues/3841
    const Coll = coll.constructor;
    if (tagName === '!' || tagName === Coll.tagName) {
        coll.tag = Coll.tagName;
        return coll;
    }
    const expType = $f5f4f9194ee4d0b0$export$5c90113a285f2241(coll) ? 'map' : 'seq';
    let tag = ctx.schema.tags.find((t)=>t.collection === expType && t.tag === tagName
    );
    if (!tag) {
        const kt = ctx.schema.knownTags[tagName];
        if (kt && kt.collection === expType) {
            ctx.schema.tags.push(Object.assign({}, kt, {
                default: false
            }));
            tag = kt;
        } else {
            onError(tagToken, 'TAG_RESOLVE_FAILED', `Unresolved tag: ${tagName}`, true);
            coll.tag = tagName;
            return coll;
        }
    }
    const res = tag.resolve(coll, (msg)=>onError(tagToken, 'TAG_RESOLVE_FAILED', msg)
    , ctx.options);
    const node = $f5f4f9194ee4d0b0$export$8ee0fc9ee280b4ee(res) ? res : new $1e4079dce2ff1bd7$export$595dbf49c602a1f(res);
    node.range = coll.range;
    node.tag = tagName;
    if (tag === null || tag === void 0 ? void 0 : tag.format) node.format = tag.format;
    return node;
}






function $4a8b80c11a60c7c6$export$1fb1e480165041ec(ctx, token, tagToken, onError) {
    const { value: value , type: type , comment: comment , range: range  } = token.type === 'block-scalar' ? $201887ea634d8746$export$14aaa50a76ee848f(token, ctx.options.strict, onError) : $46feae795a3f9ead$export$2f1c3b16290da8c8(token, ctx.options.strict, onError);
    const tagName = tagToken ? ctx.directives.tagName(tagToken.source, (msg)=>onError(tagToken, 'TAG_RESOLVE_FAILED', msg)
    ) : null;
    const tag = tagToken && tagName ? $4a8b80c11a60c7c6$var$findScalarTagByName(ctx.schema, value, tagName, tagToken, onError) : token.type === 'scalar' ? $4a8b80c11a60c7c6$var$findScalarTagByTest(ctx, value, token, onError) : ctx.schema[$f5f4f9194ee4d0b0$export$8dde1211cb7c9d16];
    let scalar;
    try {
        const res = tag.resolve(value, (msg)=>onError(tagToken !== null && tagToken !== void 0 ? tagToken : token, 'TAG_RESOLVE_FAILED', msg)
        , ctx.options);
        scalar = $f5f4f9194ee4d0b0$export$8f3495e22775e76c(res) ? res : new $1e4079dce2ff1bd7$export$595dbf49c602a1f(res);
    } catch (error) {
        const msg = error instanceof Error ? error.message : String(error);
        onError(tagToken !== null && tagToken !== void 0 ? tagToken : token, 'TAG_RESOLVE_FAILED', msg);
        scalar = new $1e4079dce2ff1bd7$export$595dbf49c602a1f(value);
    }
    scalar.range = range;
    scalar.source = value;
    if (type) scalar.type = type;
    if (tagName) scalar.tag = tagName;
    if (tag.format) scalar.format = tag.format;
    if (comment) scalar.comment = comment;
    return scalar;
}
function $4a8b80c11a60c7c6$var$findScalarTagByName(schema, value, tagName, tagToken, onError) {
    var _a;
    if (tagName === '!') return schema[$f5f4f9194ee4d0b0$export$8dde1211cb7c9d16]; // non-specific tag
    const matchWithTest = [];
    for (const tag of schema.tags)if (!tag.collection && tag.tag === tagName) {
        if (tag.default && tag.test) matchWithTest.push(tag);
        else return tag;
    }
    for (const tag1 of matchWithTest)if ((_a = tag1.test) === null || _a === void 0 ? void 0 : _a.test(value)) return tag1;
    const kt = schema.knownTags[tagName];
    if (kt && !kt.collection) {
        // Ensure that the known tag is available for stringifying,
        // but does not get used by default.
        schema.tags.push(Object.assign({}, kt, {
            default: false,
            test: undefined
        }));
        return kt;
    }
    onError(tagToken, 'TAG_RESOLVE_FAILED', `Unresolved tag: ${tagName}`, tagName !== 'tag:yaml.org,2002:str');
    return schema[$f5f4f9194ee4d0b0$export$8dde1211cb7c9d16];
}
function $4a8b80c11a60c7c6$var$findScalarTagByTest({ directives: directives , schema: schema  }, value, token, onError) {
    var _a1;
    const tag2 = schema.tags.find((tag)=>{
        var _a;
        return tag.default && ((_a = tag.test) === null || _a === void 0 ? void 0 : _a.test(value));
    }) || schema[$f5f4f9194ee4d0b0$export$8dde1211cb7c9d16];
    if (schema.compat) {
        const compat = (_a1 = schema.compat.find((tag)=>{
            var _a;
            return tag.default && ((_a = tag.test) === null || _a === void 0 ? void 0 : _a.test(value));
        })) !== null && _a1 !== void 0 ? _a1 : schema[$f5f4f9194ee4d0b0$export$8dde1211cb7c9d16];
        if (tag2.tag !== compat.tag) {
            const ts = directives.tagString(tag2.tag);
            const cs = directives.tagString(compat.tag);
            const msg = `Value may be parsed as either ${ts} or ${cs}`;
            onError(token, 'TAG_RESOLVE_FAILED', msg, true);
        }
    }
    return tag2;
}



function $82b776720a351e21$export$b4be549696a70562(offset, before, pos) {
    if (before) {
        if (pos === null) pos = before.length;
        for(let i = pos - 1; i >= 0; --i){
            let st = before[i];
            switch(st.type){
                case 'space':
                case 'comment':
                case 'newline':
                    offset -= st.source.length;
                    continue;
            }
            // Technically, an empty scalar is immediately after the last non-empty
            // node, but it's more useful to place it after any whitespace.
            st = before[++i];
            while((st === null || st === void 0 ? void 0 : st.type) === 'space'){
                offset += st.source.length;
                st = before[++i];
            }
            break;
        }
    }
    return offset;
}


const $50100d67be7e79db$var$CN = {
    composeNode: $50100d67be7e79db$export$9247f8d3b1b759e0,
    composeEmptyNode: $50100d67be7e79db$export$ca2a6312a2caa181
};
function $50100d67be7e79db$export$9247f8d3b1b759e0(ctx, token, props, onError) {
    const { spaceBefore: spaceBefore , comment: comment , anchor: anchor , tag: tag  } = props;
    let node;
    let isSrcToken = true;
    switch(token.type){
        case 'alias':
            node = $50100d67be7e79db$var$composeAlias(ctx, token, onError);
            if (anchor || tag) onError(token, 'ALIAS_PROPS', 'An alias node must not specify any properties');
            break;
        case 'scalar':
        case 'single-quoted-scalar':
        case 'double-quoted-scalar':
        case 'block-scalar':
            node = $4a8b80c11a60c7c6$export$1fb1e480165041ec(ctx, token, tag, onError);
            if (anchor) node.anchor = anchor.source.substring(1);
            break;
        case 'block-map':
        case 'block-seq':
        case 'flow-collection':
            node = $030aab7d4dcde518$export$670d412b724aec43($50100d67be7e79db$var$CN, ctx, token, tag, onError);
            if (anchor) node.anchor = anchor.source.substring(1);
            break;
        default:
            {
                const message = token.type === 'error' ? token.message : `Unsupported token (type: ${token.type})`;
                onError(token, 'UNEXPECTED_TOKEN', message);
                node = $50100d67be7e79db$export$ca2a6312a2caa181(ctx, token.offset, undefined, null, props, onError);
                isSrcToken = false;
            }
    }
    if (anchor && node.anchor === '') onError(anchor, 'BAD_ALIAS', 'Anchor cannot be an empty string');
    if (spaceBefore) node.spaceBefore = true;
    if (comment) {
        if (token.type === 'scalar' && token.source === '') node.comment = comment;
        else node.commentBefore = comment;
    }
    // @ts-expect-error Type checking misses meaning of isSrcToken
    if (ctx.options.keepSourceTokens && isSrcToken) node.srcToken = token;
    return node;
}
function $50100d67be7e79db$export$ca2a6312a2caa181(ctx, offset, before, pos, { spaceBefore: spaceBefore , comment: comment , anchor: anchor , tag: tag  }, onError) {
    const token = {
        type: 'scalar',
        offset: $82b776720a351e21$export$b4be549696a70562(offset, before, pos),
        indent: -1,
        source: ''
    };
    const node = $4a8b80c11a60c7c6$export$1fb1e480165041ec(ctx, token, tag, onError);
    if (anchor) {
        node.anchor = anchor.source.substring(1);
        if (node.anchor === '') onError(anchor, 'BAD_ALIAS', 'Anchor cannot be an empty string');
    }
    if (spaceBefore) node.spaceBefore = true;
    if (comment) node.comment = comment;
    return node;
}
function $50100d67be7e79db$var$composeAlias({ options: options  }, { offset: offset , source: source , end: end  }, onError) {
    const alias = new $1fa424ec67fb901b$export$17b520249a85fe16(source.substring(1));
    if (alias.source === '') onError(offset, 'BAD_ALIAS', 'Alias cannot be an empty string');
    if (alias.source.endsWith(':')) onError(offset + source.length - 1, 'BAD_ALIAS', 'Alias ending in : is ambiguous', true);
    const valueEnd = offset + source.length;
    const re = $936ecb118d387b35$export$9be3172c55e482a(end, valueEnd, options.strict, onError);
    alias.range = [
        offset,
        valueEnd,
        re.offset
    ];
    if (re.comment) alias.comment = re.comment;
    return alias;
}




function $95ec8110ea7e74ad$export$5456c7d031a42a2a(options, directives, { offset: offset , start: start , value: value , end: end  }, onError) {
    const opts = Object.assign({
        directives: directives
    }, options);
    const doc = new $a1e25132f1f55cca$export$b34a105447964f9f(undefined, opts);
    const ctx = {
        atRoot: true,
        directives: doc.directives,
        options: doc.options,
        schema: doc.schema
    };
    const props = $d9f3649e3b6b1e0a$export$3947d67c7569cd22(start, {
        indicator: 'doc-start',
        next: value !== null && value !== void 0 ? value : end === null || end === void 0 ? void 0 : end[0],
        offset: offset,
        onError: onError,
        startOnNewline: true
    });
    if (props.found) {
        doc.directives.docStart = true;
        if (value && (value.type === 'block-map' || value.type === 'block-seq') && !props.hasNewline) onError(props.end, 'MISSING_CHAR', 'Block collection cannot start on same line with directives-end marker');
    }
    doc.contents = value ? $50100d67be7e79db$export$9247f8d3b1b759e0(ctx, value, props, onError) : $50100d67be7e79db$export$ca2a6312a2caa181(ctx, props.end, start, null, props, onError);
    const contentEnd = doc.contents.range[2];
    const re = $936ecb118d387b35$export$9be3172c55e482a(end, contentEnd, false, onError);
    if (re.comment) doc.comment = re.comment;
    doc.range = [
        offset,
        contentEnd,
        re.offset
    ];
    return doc;
}



function $c355eb80a8f6e301$var$getErrorPos(src) {
    if (typeof src === 'number') return [
        src,
        src + 1
    ];
    if (Array.isArray(src)) return src.length === 2 ? src : [
        src[0],
        src[1]
    ];
    const { offset: offset , source: source  } = src;
    return [
        offset,
        offset + (typeof source === 'string' ? source.length : 1)
    ];
}
function $c355eb80a8f6e301$var$parsePrelude(prelude) {
    var _a;
    let comment = '';
    let atComment = false;
    let afterEmptyLine = false;
    for(let i = 0; i < prelude.length; ++i){
        const source = prelude[i];
        switch(source[0]){
            case '#':
                comment += (comment === '' ? '' : afterEmptyLine ? '\n\n' : '\n') + (source.substring(1) || ' ');
                atComment = true;
                afterEmptyLine = false;
                break;
            case '%':
                if (((_a = prelude[i + 1]) === null || _a === void 0 ? void 0 : _a[0]) !== '#') i += 1;
                atComment = false;
                break;
            default:
                // This may be wrong after doc-end, but in that case it doesn't matter
                if (!atComment) afterEmptyLine = true;
                atComment = false;
        }
    }
    return {
        comment: comment,
        afterEmptyLine: afterEmptyLine
    };
}
/**
 * Compose a stream of CST nodes into a stream of YAML Documents.
 *
 * ```ts
 * import { Composer, Parser } from 'yaml'
 *
 * const src: string = ...
 * const tokens = new Parser().parse(src)
 * const docs = new Composer().compose(tokens)
 * ```
 */ class $c355eb80a8f6e301$export$57ed0bcea28f97a2 {
    constructor(options = {}){
        this.doc = null;
        this.atDirectives = false;
        this.prelude = [];
        this.errors = [];
        this.warnings = [];
        this.onError = (source, code, message, warning)=>{
            const pos = $c355eb80a8f6e301$var$getErrorPos(source);
            if (warning) this.warnings.push(new $e3676dc6987df596$export$856b463bac79f971(pos, code, message));
            else this.errors.push(new $e3676dc6987df596$export$c1188aaa49090a5c(pos, code, message));
        };
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        this.directives = new $b8a939dc4e5e90e4$export$129646a0e1af8d85({
            version: options.version || '1.2'
        });
        this.options = options;
    }
    decorate(doc, afterDoc) {
        const { comment: comment , afterEmptyLine: afterEmptyLine  } = $c355eb80a8f6e301$var$parsePrelude(this.prelude);
        //console.log({ dc: doc.comment, prelude, comment })
        if (comment) {
            const dc = doc.contents;
            if (afterDoc) doc.comment = doc.comment ? `${doc.comment}\n${comment}` : comment;
            else if (afterEmptyLine || doc.directives.docStart || !dc) doc.commentBefore = comment;
            else if ($f5f4f9194ee4d0b0$export$cea7aa84e978eba5(dc) && !dc.flow && dc.items.length > 0) {
                let it = dc.items[0];
                if ($f5f4f9194ee4d0b0$export$7c8d445944656308(it)) it = it.key;
                const cb = it.commentBefore;
                it.commentBefore = cb ? `${comment}\n${cb}` : comment;
            } else {
                const cb = dc.commentBefore;
                dc.commentBefore = cb ? `${comment}\n${cb}` : comment;
            }
        }
        if (afterDoc) {
            Array.prototype.push.apply(doc.errors, this.errors);
            Array.prototype.push.apply(doc.warnings, this.warnings);
        } else {
            doc.errors = this.errors;
            doc.warnings = this.warnings;
        }
        this.prelude = [];
        this.errors = [];
        this.warnings = [];
    }
    /**
     * Current stream status information.
     *
     * Mostly useful at the end of input for an empty stream.
     */ streamInfo() {
        return {
            comment: $c355eb80a8f6e301$var$parsePrelude(this.prelude).comment,
            directives: this.directives,
            errors: this.errors,
            warnings: this.warnings
        };
    }
    /**
     * Compose tokens into documents.
     *
     * @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
     * @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
     */ *compose(tokens, forceDoc = false, endOffset = -1) {
        for (const token of tokens)yield* this.next(token);
        yield* this.end(forceDoc, endOffset);
    }
    /** Advance the composer by one CST token. */ *next(token) {
        switch(token.type){
            case 'directive':
                this.directives.add(token.source, (offset, message, warning)=>{
                    const pos = $c355eb80a8f6e301$var$getErrorPos(token);
                    pos[0] += offset;
                    this.onError(pos, 'BAD_DIRECTIVE', message, warning);
                });
                this.prelude.push(token.source);
                this.atDirectives = true;
                break;
            case 'document':
                {
                    const doc = $95ec8110ea7e74ad$export$5456c7d031a42a2a(this.options, this.directives, token, this.onError);
                    if (this.atDirectives && !doc.directives.docStart) this.onError(token, 'MISSING_CHAR', 'Missing directives-end/doc-start indicator line');
                    this.decorate(doc, false);
                    if (this.doc) yield this.doc;
                    this.doc = doc;
                    this.atDirectives = false;
                    break;
                }
            case 'byte-order-mark':
            case 'space':
                break;
            case 'comment':
            case 'newline':
                this.prelude.push(token.source);
                break;
            case 'error':
                {
                    const msg = token.source ? `${token.message}: ${JSON.stringify(token.source)}` : token.message;
                    const error = new $e3676dc6987df596$export$c1188aaa49090a5c($c355eb80a8f6e301$var$getErrorPos(token), 'UNEXPECTED_TOKEN', msg);
                    if (this.atDirectives || !this.doc) this.errors.push(error);
                    else this.doc.errors.push(error);
                    break;
                }
            case 'doc-end':
                {
                    if (!this.doc) {
                        const msg = 'Unexpected doc-end without preceding document';
                        this.errors.push(new $e3676dc6987df596$export$c1188aaa49090a5c($c355eb80a8f6e301$var$getErrorPos(token), 'UNEXPECTED_TOKEN', msg));
                        break;
                    }
                    this.doc.directives.docEnd = true;
                    const end = $936ecb118d387b35$export$9be3172c55e482a(token.end, token.offset + token.source.length, this.doc.options.strict, this.onError);
                    this.decorate(this.doc, true);
                    if (end.comment) {
                        const dc = this.doc.comment;
                        this.doc.comment = dc ? `${dc}\n${end.comment}` : end.comment;
                    }
                    this.doc.range[2] = end.offset;
                    break;
                }
            default:
                this.errors.push(new $e3676dc6987df596$export$c1188aaa49090a5c($c355eb80a8f6e301$var$getErrorPos(token), 'UNEXPECTED_TOKEN', `Unsupported token ${token.type}`));
        }
    }
    /**
     * Call at end of input to yield any remaining document.
     *
     * @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
     * @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
     */ *end(forceDoc = false, endOffset = -1) {
        if (this.doc) {
            this.decorate(this.doc, true);
            yield this.doc;
            this.doc = null;
        } else if (forceDoc) {
            const opts = Object.assign({
                directives: this.directives
            }, this.options);
            const doc = new $a1e25132f1f55cca$export$b34a105447964f9f(undefined, opts);
            if (this.atDirectives) this.onError(endOffset, 'MISSING_CHAR', 'Missing directives-end indicator line');
            doc.range = [
                0,
                endOffset,
                endOffset
            ];
            this.decorate(doc, false);
            yield doc;
        }
    }
}












/*
START -> stream

stream
  directive -> line-end -> stream
  indent + line-end -> stream
  [else] -> line-start

line-end
  comment -> line-end
  newline -> .
  input-end -> END

line-start
  doc-start -> doc
  doc-end -> stream
  [else] -> indent -> block-start

block-start
  seq-item-start -> block-start
  explicit-key-start -> block-start
  map-value-start -> block-start
  [else] -> doc

doc
  line-end -> line-start
  spaces -> doc
  anchor -> doc
  tag -> doc
  flow-start -> flow -> doc
  flow-end -> error -> doc
  seq-item-start -> error -> doc
  explicit-key-start -> error -> doc
  map-value-start -> doc
  alias -> doc
  quote-start -> quoted-scalar -> doc
  block-scalar-header -> line-end -> block-scalar(min) -> line-start
  [else] -> plain-scalar(false, min) -> doc

flow
  line-end -> flow
  spaces -> flow
  anchor -> flow
  tag -> flow
  flow-start -> flow -> flow
  flow-end -> .
  seq-item-start -> error -> flow
  explicit-key-start -> flow
  map-value-start -> flow
  alias -> flow
  quote-start -> quoted-scalar -> flow
  comma -> flow
  [else] -> plain-scalar(true, 0) -> flow

quoted-scalar
  quote-end -> .
  [else] -> quoted-scalar

block-scalar(min)
  newline + peek(indent < min) -> .
  [else] -> block-scalar(min)

plain-scalar(is-flow, min)
  scalar-end(is-flow) -> .
  peek(newline + (indent < min)) -> .
  [else] -> plain-scalar(min)
*/ function $0be8c6273bb7dcdf$var$isEmpty(ch) {
    switch(ch){
        case undefined:
        case ' ':
        case '\n':
        case '\r':
        case '\t':
            return true;
        default:
            return false;
    }
}
const $0be8c6273bb7dcdf$var$hexDigits = '0123456789ABCDEFabcdef'.split('');
const $0be8c6273bb7dcdf$var$tagChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()".split('');
const $0be8c6273bb7dcdf$var$invalidFlowScalarChars = ',[]{}'.split('');
const $0be8c6273bb7dcdf$var$invalidAnchorChars = ' ,[]{}\n\r\t'.split('');
const $0be8c6273bb7dcdf$var$isNotAnchorChar = (ch)=>!ch || $0be8c6273bb7dcdf$var$invalidAnchorChars.includes(ch)
;
/**
 * Splits an input string into lexical tokens, i.e. smaller strings that are
 * easily identifiable by `tokens.tokenType()`.
 *
 * Lexing starts always in a "stream" context. Incomplete input may be buffered
 * until a complete token can be emitted.
 *
 * In addition to slices of the original input, the following control characters
 * may also be emitted:
 *
 * - `\x02` (Start of Text): A document starts with the next token
 * - `\x18` (Cancel): Unexpected end of flow-mode (indicates an error)
 * - `\x1f` (Unit Separator): Next token is a scalar value
 * - `\u{FEFF}` (Byte order mark): Emitted separately outside documents
 */ class $0be8c6273bb7dcdf$export$6168dc8908a6c652 {
    constructor(){
        /**
         * Flag indicating whether the end of the current buffer marks the end of
         * all input
         */ this.atEnd = false;
        /**
         * Explicit indent set in block scalar header, as an offset from the current
         * minimum indent, so e.g. set to 1 from a header `|2+`. Set to -1 if not
         * explicitly set.
         */ this.blockScalarIndent = -1;
        /**
         * Block scalars that include a + (keep) chomping indicator in their header
         * include trailing empty lines, which are otherwise excluded from the
         * scalar's contents.
         */ this.blockScalarKeep = false;
        /** Current input */ this.buffer = '';
        /**
         * Flag noting whether the map value indicator : can immediately follow this
         * node within a flow context.
         */ this.flowKey = false;
        /** Count of surrounding flow collection levels. */ this.flowLevel = 0;
        /**
         * Minimum level of indentation required for next lines to be parsed as a
         * part of the current scalar value.
         */ this.indentNext = 0;
        /** Indentation level of the current line. */ this.indentValue = 0;
        /** Position of the next \n character. */ this.lineEndPos = null;
        /** Stores the state of the lexer if reaching the end of incpomplete input */ this.next = null;
        /** A pointer to `buffer`; the current position of the lexer. */ this.pos = 0;
    }
    /**
     * Generate YAML tokens from the `source` string. If `incomplete`,
     * a part of the last line may be left as a buffer for the next call.
     *
     * @returns A generator of lexical tokens
     */ *lex(source, incomplete = false) {
        var _a;
        if (source) {
            this.buffer = this.buffer ? this.buffer + source : source;
            this.lineEndPos = null;
        }
        this.atEnd = !incomplete;
        let next = (_a = this.next) !== null && _a !== void 0 ? _a : 'stream';
        while(next && (incomplete || this.hasChars(1)))next = yield* this.parseNext(next);
    }
    atLineEnd() {
        let i = this.pos;
        let ch = this.buffer[i];
        while(ch === ' ' || ch === '\t')ch = this.buffer[++i];
        if (!ch || ch === '#' || ch === '\n') return true;
        if (ch === '\r') return this.buffer[i + 1] === '\n';
        return false;
    }
    charAt(n) {
        return this.buffer[this.pos + n];
    }
    continueScalar(offset) {
        let ch = this.buffer[offset];
        if (this.indentNext > 0) {
            let indent = 0;
            while(ch === ' ')ch = this.buffer[++indent + offset];
            if (ch === '\r') {
                const next = this.buffer[indent + offset + 1];
                if (next === '\n' || !next && !this.atEnd) return offset + indent + 1;
            }
            return ch === '\n' || indent >= this.indentNext || !ch && !this.atEnd ? offset + indent : -1;
        }
        if (ch === '-' || ch === '.') {
            const dt = this.buffer.substr(offset, 3);
            if ((dt === '---' || dt === '...') && $0be8c6273bb7dcdf$var$isEmpty(this.buffer[offset + 3])) return -1;
        }
        return offset;
    }
    getLine() {
        let end = this.lineEndPos;
        if (typeof end !== 'number' || end !== -1 && end < this.pos) {
            end = this.buffer.indexOf('\n', this.pos);
            this.lineEndPos = end;
        }
        if (end === -1) return this.atEnd ? this.buffer.substring(this.pos) : null;
        if (this.buffer[end - 1] === '\r') end -= 1;
        return this.buffer.substring(this.pos, end);
    }
    hasChars(n) {
        return this.pos + n <= this.buffer.length;
    }
    setNext(state) {
        this.buffer = this.buffer.substring(this.pos);
        this.pos = 0;
        this.lineEndPos = null;
        this.next = state;
        return null;
    }
    peek(n) {
        return this.buffer.substr(this.pos, n);
    }
    *parseNext(next) {
        switch(next){
            case 'stream':
                return yield* this.parseStream();
            case 'line-start':
                return yield* this.parseLineStart();
            case 'block-start':
                return yield* this.parseBlockStart();
            case 'doc':
                return yield* this.parseDocument();
            case 'flow':
                return yield* this.parseFlowCollection();
            case 'quoted-scalar':
                return yield* this.parseQuotedScalar();
            case 'block-scalar':
                return yield* this.parseBlockScalar();
            case 'plain-scalar':
                return yield* this.parsePlainScalar();
        }
    }
    *parseStream() {
        let line = this.getLine();
        if (line === null) return this.setNext('stream');
        if (line[0] === $4e74858e15934f7b$export$159b0f4ed2e9d663) {
            yield* this.pushCount(1);
            line = line.substring(1);
        }
        if (line[0] === '%') {
            let dirEnd = line.length;
            const cs = line.indexOf('#');
            if (cs !== -1) {
                const ch = line[cs - 1];
                if (ch === ' ' || ch === '\t') dirEnd = cs - 1;
            }
            while(true){
                const ch = line[dirEnd - 1];
                if (ch === ' ' || ch === '\t') dirEnd -= 1;
                else break;
            }
            const n = (yield* this.pushCount(dirEnd)) + (yield* this.pushSpaces(true));
            yield* this.pushCount(line.length - n); // possible comment
            this.pushNewline();
            return 'stream';
        }
        if (this.atLineEnd()) {
            const sp = yield* this.pushSpaces(true);
            yield* this.pushCount(line.length - sp);
            yield* this.pushNewline();
            return 'stream';
        }
        yield $4e74858e15934f7b$export$ef011b4e114b1fba;
        return yield* this.parseLineStart();
    }
    *parseLineStart() {
        const ch = this.charAt(0);
        if (!ch && !this.atEnd) return this.setNext('line-start');
        if (ch === '-' || ch === '.') {
            if (!this.atEnd && !this.hasChars(4)) return this.setNext('line-start');
            const s = this.peek(3);
            if (s === '---' && $0be8c6273bb7dcdf$var$isEmpty(this.charAt(3))) {
                yield* this.pushCount(3);
                this.indentValue = 0;
                this.indentNext = 0;
                return 'doc';
            } else if (s === '...' && $0be8c6273bb7dcdf$var$isEmpty(this.charAt(3))) {
                yield* this.pushCount(3);
                return 'stream';
            }
        }
        this.indentValue = yield* this.pushSpaces(false);
        if (this.indentNext > this.indentValue && !$0be8c6273bb7dcdf$var$isEmpty(this.charAt(1))) this.indentNext = this.indentValue;
        return yield* this.parseBlockStart();
    }
    *parseBlockStart() {
        const [ch0, ch1] = this.peek(2);
        if (!ch1 && !this.atEnd) return this.setNext('block-start');
        if ((ch0 === '-' || ch0 === '?' || ch0 === ':') && $0be8c6273bb7dcdf$var$isEmpty(ch1)) {
            const n = (yield* this.pushCount(1)) + (yield* this.pushSpaces(true));
            this.indentNext = this.indentValue + 1;
            this.indentValue += n;
            return yield* this.parseBlockStart();
        }
        return 'doc';
    }
    *parseDocument() {
        yield* this.pushSpaces(true);
        const line = this.getLine();
        if (line === null) return this.setNext('doc');
        let n = yield* this.pushIndicators();
        switch(line[n]){
            case '#':
                yield* this.pushCount(line.length - n);
            // fallthrough
            case undefined:
                yield* this.pushNewline();
                return yield* this.parseLineStart();
            case '{':
            case '[':
                yield* this.pushCount(1);
                this.flowKey = false;
                this.flowLevel = 1;
                return 'flow';
            case '}':
            case ']':
                // this is an error
                yield* this.pushCount(1);
                return 'doc';
            case '*':
                yield* this.pushUntil($0be8c6273bb7dcdf$var$isNotAnchorChar);
                return 'doc';
            case '"':
            case "'":
                return yield* this.parseQuotedScalar();
            case '|':
            case '>':
                n += yield* this.parseBlockScalarHeader();
                n += yield* this.pushSpaces(true);
                yield* this.pushCount(line.length - n);
                yield* this.pushNewline();
                return yield* this.parseBlockScalar();
            default:
                return yield* this.parsePlainScalar();
        }
    }
    *parseFlowCollection() {
        let nl, sp;
        let indent = -1;
        do {
            nl = yield* this.pushNewline();
            if (nl > 0) {
                sp = yield* this.pushSpaces(false);
                this.indentValue = indent = sp;
            } else sp = 0;
            sp += yield* this.pushSpaces(true);
        }while (nl + sp > 0)
        const line = this.getLine();
        if (line === null) return this.setNext('flow');
        if (indent !== -1 && indent < this.indentNext && line[0] !== '#' || indent === 0 && (line.startsWith('---') || line.startsWith('...')) && $0be8c6273bb7dcdf$var$isEmpty(line[3])) {
            // Allowing for the terminal ] or } at the same (rather than greater)
            // indent level as the initial [ or { is technically invalid, but
            // failing here would be surprising to users.
            const atFlowEndMarker = indent === this.indentNext - 1 && this.flowLevel === 1 && (line[0] === ']' || line[0] === '}');
            if (!atFlowEndMarker) {
                // this is an error
                this.flowLevel = 0;
                yield $4e74858e15934f7b$export$f3c6ac4b8e8fc405;
                return yield* this.parseLineStart();
            }
        }
        let n = 0;
        while(line[n] === ','){
            n += yield* this.pushCount(1);
            n += yield* this.pushSpaces(true);
            this.flowKey = false;
        }
        n += yield* this.pushIndicators();
        switch(line[n]){
            case undefined:
                return 'flow';
            case '#':
                yield* this.pushCount(line.length - n);
                return 'flow';
            case '{':
            case '[':
                yield* this.pushCount(1);
                this.flowKey = false;
                this.flowLevel += 1;
                return 'flow';
            case '}':
            case ']':
                yield* this.pushCount(1);
                this.flowKey = true;
                this.flowLevel -= 1;
                return this.flowLevel ? 'flow' : 'doc';
            case '*':
                yield* this.pushUntil($0be8c6273bb7dcdf$var$isNotAnchorChar);
                return 'flow';
            case '"':
            case "'":
                this.flowKey = true;
                return yield* this.parseQuotedScalar();
            case ':':
                {
                    const next = this.charAt(1);
                    if (this.flowKey || $0be8c6273bb7dcdf$var$isEmpty(next) || next === ',') {
                        this.flowKey = false;
                        yield* this.pushCount(1);
                        yield* this.pushSpaces(true);
                        return 'flow';
                    }
                }
            // fallthrough
            default:
                this.flowKey = false;
                return yield* this.parsePlainScalar();
        }
    }
    *parseQuotedScalar() {
        const quote = this.charAt(0);
        let end = this.buffer.indexOf(quote, this.pos + 1);
        if (quote === "'") while(end !== -1 && this.buffer[end + 1] === "'")end = this.buffer.indexOf("'", end + 2);
        else // double-quote
        while(end !== -1){
            let n = 0;
            while(this.buffer[end - 1 - n] === '\\')n += 1;
            if (n % 2 === 0) break;
            end = this.buffer.indexOf('"', end + 1);
        }
        // Only looking for newlines within the quotes
        const qb = this.buffer.substring(0, end);
        let nl = qb.indexOf('\n', this.pos);
        if (nl !== -1) {
            while(nl !== -1){
                const cs = this.continueScalar(nl + 1);
                if (cs === -1) break;
                nl = qb.indexOf('\n', cs);
            }
            if (nl !== -1) // this is an error caused by an unexpected unindent
            end = nl - (qb[nl - 1] === '\r' ? 2 : 1);
        }
        if (end === -1) {
            if (!this.atEnd) return this.setNext('quoted-scalar');
            end = this.buffer.length;
        }
        yield* this.pushToIndex(end + 1, false);
        return this.flowLevel ? 'flow' : 'doc';
    }
    *parseBlockScalarHeader() {
        this.blockScalarIndent = -1;
        this.blockScalarKeep = false;
        let i = this.pos;
        while(true){
            const ch = this.buffer[++i];
            if (ch === '+') this.blockScalarKeep = true;
            else if (ch > '0' && ch <= '9') this.blockScalarIndent = Number(ch) - 1;
            else if (ch !== '-') break;
        }
        return yield* this.pushUntil((ch)=>$0be8c6273bb7dcdf$var$isEmpty(ch) || ch === '#'
        );
    }
    *parseBlockScalar() {
        let nl = this.pos - 1; // may be -1 if this.pos === 0
        let indent = 0;
        let ch;
        loop: for(let i = this.pos; ch = this.buffer[i]; ++i)switch(ch){
            case ' ':
                indent += 1;
                break;
            case '\n':
                nl = i;
                indent = 0;
                break;
            case '\r':
                {
                    const next = this.buffer[i + 1];
                    if (!next && !this.atEnd) return this.setNext('block-scalar');
                    if (next === '\n') break;
                }
            default:
                break loop;
        }
        if (!ch && !this.atEnd) return this.setNext('block-scalar');
        if (indent >= this.indentNext) {
            if (this.blockScalarIndent === -1) this.indentNext = indent;
            else this.indentNext += this.blockScalarIndent;
            do {
                const cs = this.continueScalar(nl + 1);
                if (cs === -1) break;
                nl = this.buffer.indexOf('\n', cs);
            }while (nl !== -1)
            if (nl === -1) {
                if (!this.atEnd) return this.setNext('block-scalar');
                nl = this.buffer.length;
            }
        }
        if (!this.blockScalarKeep) do {
            let i = nl - 1;
            let ch = this.buffer[i];
            if (ch === '\r') ch = this.buffer[--i];
            const lastChar = i; // Drop the line if last char not more indented
            while(ch === ' ' || ch === '\t')ch = this.buffer[--i];
            if (ch === '\n' && i >= this.pos && i + 1 + indent > lastChar) nl = i;
            else break;
        }while (true)
        yield $4e74858e15934f7b$export$8dde1211cb7c9d16;
        yield* this.pushToIndex(nl + 1, true);
        return yield* this.parseLineStart();
    }
    *parsePlainScalar() {
        const inFlow = this.flowLevel > 0;
        let end = this.pos - 1;
        let i = this.pos - 1;
        let ch;
        while(ch = this.buffer[++i]){
            if (ch === ':') {
                const next = this.buffer[i + 1];
                if ($0be8c6273bb7dcdf$var$isEmpty(next) || inFlow && next === ',') break;
                end = i;
            } else if ($0be8c6273bb7dcdf$var$isEmpty(ch)) {
                let next = this.buffer[i + 1];
                if (ch === '\r') {
                    if (next === '\n') {
                        i += 1;
                        ch = '\n';
                        next = this.buffer[i + 1];
                    } else end = i;
                }
                if (next === '#' || inFlow && $0be8c6273bb7dcdf$var$invalidFlowScalarChars.includes(next)) break;
                if (ch === '\n') {
                    const cs = this.continueScalar(i + 1);
                    if (cs === -1) break;
                    i = Math.max(i, cs - 2); // to advance, but still account for ' #'
                }
            } else {
                if (inFlow && $0be8c6273bb7dcdf$var$invalidFlowScalarChars.includes(ch)) break;
                end = i;
            }
        }
        if (!ch && !this.atEnd) return this.setNext('plain-scalar');
        yield $4e74858e15934f7b$export$8dde1211cb7c9d16;
        yield* this.pushToIndex(end + 1, true);
        return inFlow ? 'flow' : 'doc';
    }
    *pushCount(n) {
        if (n > 0) {
            yield this.buffer.substr(this.pos, n);
            this.pos += n;
            return n;
        }
        return 0;
    }
    *pushToIndex(i, allowEmpty) {
        const s = this.buffer.slice(this.pos, i);
        if (s) {
            yield s;
            this.pos += s.length;
            return s.length;
        } else if (allowEmpty) yield '';
        return 0;
    }
    *pushIndicators() {
        switch(this.charAt(0)){
            case '!':
                return (yield* this.pushTag()) + (yield* this.pushSpaces(true)) + (yield* this.pushIndicators());
            case '&':
                return (yield* this.pushUntil($0be8c6273bb7dcdf$var$isNotAnchorChar)) + (yield* this.pushSpaces(true)) + (yield* this.pushIndicators());
            case '-':
            case '?':
            case ':':
                {
                    const inFlow = this.flowLevel > 0;
                    const ch1 = this.charAt(1);
                    if ($0be8c6273bb7dcdf$var$isEmpty(ch1) || inFlow && $0be8c6273bb7dcdf$var$invalidFlowScalarChars.includes(ch1)) {
                        if (!inFlow) this.indentNext = this.indentValue + 1;
                        else if (this.flowKey) this.flowKey = false;
                        return (yield* this.pushCount(1)) + (yield* this.pushSpaces(true)) + (yield* this.pushIndicators());
                    }
                }
        }
        return 0;
    }
    *pushTag() {
        if (this.charAt(1) === '<') {
            let i = this.pos + 2;
            let ch = this.buffer[i];
            while(!$0be8c6273bb7dcdf$var$isEmpty(ch) && ch !== '>')ch = this.buffer[++i];
            return yield* this.pushToIndex(ch === '>' ? i + 1 : i, false);
        } else {
            let i = this.pos + 1;
            let ch = this.buffer[i];
            while(ch){
                if ($0be8c6273bb7dcdf$var$tagChars.includes(ch)) ch = this.buffer[++i];
                else if (ch === '%' && $0be8c6273bb7dcdf$var$hexDigits.includes(this.buffer[i + 1]) && $0be8c6273bb7dcdf$var$hexDigits.includes(this.buffer[i + 2])) ch = this.buffer[i += 3];
                else break;
            }
            return yield* this.pushToIndex(i, false);
        }
    }
    *pushNewline() {
        const ch = this.buffer[this.pos];
        if (ch === '\n') return yield* this.pushCount(1);
        else if (ch === '\r' && this.charAt(1) === '\n') return yield* this.pushCount(2);
        else return 0;
    }
    *pushSpaces(allowTabs) {
        let i = this.pos - 1;
        let ch;
        do ch = this.buffer[++i];
        while (ch === ' ' || allowTabs && ch === '\t')
        const n = i - this.pos;
        if (n > 0) {
            yield this.buffer.substr(this.pos, n);
            this.pos = i;
        }
        return n;
    }
    *pushUntil(test) {
        let i = this.pos;
        let ch = this.buffer[i];
        while(!test(ch))ch = this.buffer[++i];
        return yield* this.pushToIndex(i, false);
    }
}


/**
 * Tracks newlines during parsing in order to provide an efficient API for
 * determining the one-indexed `{ line, col }` position for any offset
 * within the input.
 */ class $c78c83346e70966f$export$c8a6f24ae2865e59 {
    constructor(){
        this.lineStarts = [];
        /**
         * Should be called in ascending order. Otherwise, call
         * `lineCounter.lineStarts.sort()` before calling `linePos()`.
         */ this.addNewLine = (offset)=>this.lineStarts.push(offset)
        ;
        /**
         * Performs a binary search and returns the 1-indexed { line, col }
         * position of `offset`. If `line === 0`, `addNewLine` has never been
         * called or `offset` is before the first known newline.
         */ this.linePos = (offset)=>{
            let low = 0;
            let high = this.lineStarts.length;
            while(low < high){
                const mid = low + high >> 1; // Math.floor((low + high) / 2)
                if (this.lineStarts[mid] < offset) low = mid + 1;
                else high = mid;
            }
            if (this.lineStarts[low] === offset) return {
                line: low + 1,
                col: 1
            };
            if (low === 0) return {
                line: 0,
                col: offset
            };
            const start = this.lineStarts[low - 1];
            return {
                line: low,
                col: offset - start + 1
            };
        };
    }
}




function $641681dd4222cfac$var$includesToken(list, type) {
    for(let i = 0; i < list.length; ++i)if (list[i].type === type) return true;
    return false;
}
function $641681dd4222cfac$var$findNonEmptyIndex(list) {
    for(let i = 0; i < list.length; ++i)switch(list[i].type){
        case 'space':
        case 'comment':
        case 'newline':
            break;
        default:
            return i;
    }
    return -1;
}
function $641681dd4222cfac$var$isFlowToken(token) {
    switch(token === null || token === void 0 ? void 0 : token.type){
        case 'alias':
        case 'scalar':
        case 'single-quoted-scalar':
        case 'double-quoted-scalar':
        case 'flow-collection':
            return true;
        default:
            return false;
    }
}
function $641681dd4222cfac$var$getPrevProps(parent) {
    var _a;
    switch(parent.type){
        case 'document':
            return parent.start;
        case 'block-map':
            {
                const it = parent.items[parent.items.length - 1];
                return (_a = it.sep) !== null && _a !== void 0 ? _a : it.start;
            }
        case 'block-seq':
            return parent.items[parent.items.length - 1].start;
        /* istanbul ignore next should not happen */ default:
            return [];
    }
}
/** Note: May modify input array */ function $641681dd4222cfac$var$getFirstKeyStartProps(prev) {
    var _a;
    if (prev.length === 0) return [];
    let i = prev.length;
    loop: while(--i >= 0)switch(prev[i].type){
        case 'doc-start':
        case 'explicit-key-ind':
        case 'map-value-ind':
        case 'seq-item-ind':
        case 'newline':
            break loop;
    }
    while(((_a = prev[++i]) === null || _a === void 0 ? void 0 : _a.type) === 'space');
    return prev.splice(i, prev.length);
}
function $641681dd4222cfac$var$fixFlowSeqItems(fc) {
    if (fc.start.type === 'flow-seq-start') {
        for (const it of fc.items)if (it.sep && !it.value && !$641681dd4222cfac$var$includesToken(it.start, 'explicit-key-ind') && !$641681dd4222cfac$var$includesToken(it.sep, 'map-value-ind')) {
            if (it.key) it.value = it.key;
            delete it.key;
            if ($641681dd4222cfac$var$isFlowToken(it.value)) {
                if (it.value.end) Array.prototype.push.apply(it.value.end, it.sep);
                else it.value.end = it.sep;
            } else Array.prototype.push.apply(it.start, it.sep);
            delete it.sep;
        }
    }
}
/**
 * A YAML concrete syntax tree (CST) parser
 *
 * ```ts
 * const src: string = ...
 * for (const token of new Parser().parse(src)) {
 *   // token: Token
 * }
 * ```
 *
 * To use the parser with a user-provided lexer:
 *
 * ```ts
 * function* parse(source: string, lexer: Lexer) {
 *   const parser = new Parser()
 *   for (const lexeme of lexer.lex(source))
 *     yield* parser.next(lexeme)
 *   yield* parser.end()
 * }
 *
 * const src: string = ...
 * const lexer = new Lexer()
 * for (const token of parse(src, lexer)) {
 *   // token: Token
 * }
 * ```
 */ class $641681dd4222cfac$export$7acfa6ed01010e37 {
    /**
     * @param onNewLine - If defined, called separately with the start position of
     *   each new line (in `parse()`, including the start of input).
     */ constructor(onNewLine){
        /** If true, space and sequence indicators count as indentation */ this.atNewLine = true;
        /** If true, next token is a scalar value */ this.atScalar = false;
        /** Current indentation level */ this.indent = 0;
        /** Current offset since the start of parsing */ this.offset = 0;
        /** On the same line with a block map key */ this.onKeyLine = false;
        /** Top indicates the node that's currently being built */ this.stack = [];
        /** The source of the current token, set in parse() */ this.source = '';
        /** The type of the current token, set in parse() */ this.type = '';
        // Must be defined after `next()`
        this.lexer = new $0be8c6273bb7dcdf$export$6168dc8908a6c652();
        this.onNewLine = onNewLine;
    }
    /**
     * Parse `source` as a YAML stream.
     * If `incomplete`, a part of the last line may be left as a buffer for the next call.
     *
     * Errors are not thrown, but yielded as `{ type: 'error', message }` tokens.
     *
     * @returns A generator of tokens representing each directive, document, and other structure.
     */ *parse(source, incomplete = false) {
        if (this.onNewLine && this.offset === 0) this.onNewLine(0);
        for (const lexeme of this.lexer.lex(source, incomplete))yield* this.next(lexeme);
        if (!incomplete) yield* this.end();
    }
    /**
     * Advance the parser by the `source` of one lexical token.
     */ *next(source) {
        this.source = source;
        if (this.atScalar) {
            this.atScalar = false;
            yield* this.step();
            this.offset += source.length;
            return;
        }
        const type = $4e74858e15934f7b$export$290cf9fbadf470bd(source);
        if (!type) {
            const message = `Not a YAML token: ${source}`;
            yield* this.pop({
                type: 'error',
                offset: this.offset,
                message: message,
                source: source
            });
            this.offset += source.length;
        } else if (type === 'scalar') {
            this.atNewLine = false;
            this.atScalar = true;
            this.type = 'scalar';
        } else {
            this.type = type;
            yield* this.step();
            switch(type){
                case 'newline':
                    this.atNewLine = true;
                    this.indent = 0;
                    if (this.onNewLine) this.onNewLine(this.offset + source.length);
                    break;
                case 'space':
                    if (this.atNewLine && source[0] === ' ') this.indent += source.length;
                    break;
                case 'explicit-key-ind':
                case 'map-value-ind':
                case 'seq-item-ind':
                    if (this.atNewLine) this.indent += source.length;
                    break;
                case 'doc-mode':
                case 'flow-error-end':
                    return;
                default:
                    this.atNewLine = false;
            }
            this.offset += source.length;
        }
    }
    /** Call at end of input to push out any remaining constructions */ *end() {
        while(this.stack.length > 0)yield* this.pop();
    }
    get sourceToken() {
        const st = {
            type: this.type,
            offset: this.offset,
            indent: this.indent,
            source: this.source
        };
        return st;
    }
    *step() {
        const top = this.peek(1);
        if (this.type === 'doc-end' && (!top || top.type !== 'doc-end')) {
            while(this.stack.length > 0)yield* this.pop();
            this.stack.push({
                type: 'doc-end',
                offset: this.offset,
                source: this.source
            });
            return;
        }
        if (!top) return yield* this.stream();
        switch(top.type){
            case 'document':
                return yield* this.document(top);
            case 'alias':
            case 'scalar':
            case 'single-quoted-scalar':
            case 'double-quoted-scalar':
                return yield* this.scalar(top);
            case 'block-scalar':
                return yield* this.blockScalar(top);
            case 'block-map':
                return yield* this.blockMap(top);
            case 'block-seq':
                return yield* this.blockSequence(top);
            case 'flow-collection':
                return yield* this.flowCollection(top);
            case 'doc-end':
                return yield* this.documentEnd(top);
        }
        /* istanbul ignore next should not happen */ yield* this.pop();
    }
    peek(n) {
        return this.stack[this.stack.length - n];
    }
    *pop(error) {
        const token = error !== null && error !== void 0 ? error : this.stack.pop();
        /* istanbul ignore if should not happen */ if (!token) {
            const message = 'Tried to pop an empty stack';
            yield {
                type: 'error',
                offset: this.offset,
                source: '',
                message: message
            };
        } else if (this.stack.length === 0) yield token;
        else {
            const top = this.peek(1);
            if (token.type === 'block-scalar') // Block scalars use their parent rather than header indent
            token.indent = 'indent' in top ? top.indent : 0;
            else if (token.type === 'flow-collection' && top.type === 'document') // Ignore all indent for top-level flow collections
            token.indent = 0;
            if (token.type === 'flow-collection') $641681dd4222cfac$var$fixFlowSeqItems(token);
            switch(top.type){
                case 'document':
                    top.value = token;
                    break;
                case 'block-scalar':
                    top.props.push(token); // error
                    break;
                case 'block-map':
                    {
                        const it = top.items[top.items.length - 1];
                        if (it.value) {
                            top.items.push({
                                start: [],
                                key: token,
                                sep: []
                            });
                            this.onKeyLine = true;
                            return;
                        } else if (it.sep) it.value = token;
                        else {
                            Object.assign(it, {
                                key: token,
                                sep: []
                            });
                            this.onKeyLine = !$641681dd4222cfac$var$includesToken(it.start, 'explicit-key-ind');
                            return;
                        }
                        break;
                    }
                case 'block-seq':
                    {
                        const it = top.items[top.items.length - 1];
                        if (it.value) top.items.push({
                            start: [],
                            value: token
                        });
                        else it.value = token;
                        break;
                    }
                case 'flow-collection':
                    {
                        const it = top.items[top.items.length - 1];
                        if (!it || it.value) top.items.push({
                            start: [],
                            key: token,
                            sep: []
                        });
                        else if (it.sep) it.value = token;
                        else Object.assign(it, {
                            key: token,
                            sep: []
                        });
                        return;
                    }
                /* istanbul ignore next should not happen */ default:
                    yield* this.pop();
                    yield* this.pop(token);
            }
            if ((top.type === 'document' || top.type === 'block-map' || top.type === 'block-seq') && (token.type === 'block-map' || token.type === 'block-seq')) {
                const last = token.items[token.items.length - 1];
                if (last && !last.sep && !last.value && last.start.length > 0 && $641681dd4222cfac$var$findNonEmptyIndex(last.start) === -1 && (token.indent === 0 || last.start.every((st)=>st.type !== 'comment' || st.indent < token.indent
                ))) {
                    if (top.type === 'document') top.end = last.start;
                    else top.items.push({
                        start: last.start
                    });
                    token.items.splice(-1, 1);
                }
            }
        }
    }
    *stream() {
        switch(this.type){
            case 'directive-line':
                yield {
                    type: 'directive',
                    offset: this.offset,
                    source: this.source
                };
                return;
            case 'byte-order-mark':
            case 'space':
            case 'comment':
            case 'newline':
                yield this.sourceToken;
                return;
            case 'doc-mode':
            case 'doc-start':
                {
                    const doc = {
                        type: 'document',
                        offset: this.offset,
                        start: []
                    };
                    if (this.type === 'doc-start') doc.start.push(this.sourceToken);
                    this.stack.push(doc);
                    return;
                }
        }
        yield {
            type: 'error',
            offset: this.offset,
            message: `Unexpected ${this.type} token in YAML stream`,
            source: this.source
        };
    }
    *document(doc) {
        if (doc.value) return yield* this.lineEnd(doc);
        switch(this.type){
            case 'doc-start':
                if ($641681dd4222cfac$var$findNonEmptyIndex(doc.start) !== -1) {
                    yield* this.pop();
                    yield* this.step();
                } else doc.start.push(this.sourceToken);
                return;
            case 'anchor':
            case 'tag':
            case 'space':
            case 'comment':
            case 'newline':
                doc.start.push(this.sourceToken);
                return;
        }
        const bv = this.startBlockValue(doc);
        if (bv) this.stack.push(bv);
        else yield {
            type: 'error',
            offset: this.offset,
            message: `Unexpected ${this.type} token in YAML document`,
            source: this.source
        };
    }
    *scalar(scalar) {
        if (this.type === 'map-value-ind') {
            const prev = $641681dd4222cfac$var$getPrevProps(this.peek(2));
            const start = $641681dd4222cfac$var$getFirstKeyStartProps(prev);
            let sep;
            if (scalar.end) {
                sep = scalar.end;
                sep.push(this.sourceToken);
                delete scalar.end;
            } else sep = [
                this.sourceToken
            ];
            const map = {
                type: 'block-map',
                offset: scalar.offset,
                indent: scalar.indent,
                items: [
                    {
                        start: start,
                        key: scalar,
                        sep: sep
                    }
                ]
            };
            this.onKeyLine = true;
            this.stack[this.stack.length - 1] = map;
        } else yield* this.lineEnd(scalar);
    }
    *blockScalar(scalar) {
        switch(this.type){
            case 'space':
            case 'comment':
            case 'newline':
                scalar.props.push(this.sourceToken);
                return;
            case 'scalar':
                scalar.source = this.source;
                // block-scalar source includes trailing newline
                this.atNewLine = true;
                this.indent = 0;
                if (this.onNewLine) {
                    let nl = this.source.indexOf('\n') + 1;
                    while(nl !== 0){
                        this.onNewLine(this.offset + nl);
                        nl = this.source.indexOf('\n', nl) + 1;
                    }
                }
                yield* this.pop();
                break;
            /* istanbul ignore next should not happen */ default:
                yield* this.pop();
                yield* this.step();
        }
    }
    *blockMap(map) {
        var _a;
        const it = map.items[map.items.length - 1];
        // it.sep is true-ish if pair already has key or : separator
        switch(this.type){
            case 'newline':
                this.onKeyLine = false;
                if (it.value) {
                    const end = 'end' in it.value ? it.value.end : undefined;
                    const last = Array.isArray(end) ? end[end.length - 1] : undefined;
                    if ((last === null || last === void 0 ? void 0 : last.type) === 'comment') end === null || end === void 0 || end.push(this.sourceToken);
                    else map.items.push({
                        start: [
                            this.sourceToken
                        ]
                    });
                } else if (it.sep) it.sep.push(this.sourceToken);
                else it.start.push(this.sourceToken);
                return;
            case 'space':
            case 'comment':
                if (it.value) map.items.push({
                    start: [
                        this.sourceToken
                    ]
                });
                else if (it.sep) it.sep.push(this.sourceToken);
                else {
                    if (this.atIndentedComment(it.start, map.indent)) {
                        const prev = map.items[map.items.length - 2];
                        const end = (_a = prev === null || prev === void 0 ? void 0 : prev.value) === null || _a === void 0 ? void 0 : _a.end;
                        if (Array.isArray(end)) {
                            Array.prototype.push.apply(end, it.start);
                            end.push(this.sourceToken);
                            map.items.pop();
                            return;
                        }
                    }
                    it.start.push(this.sourceToken);
                }
                return;
        }
        if (this.indent >= map.indent) {
            const atNextItem = !this.onKeyLine && this.indent === map.indent && it.sep;
            // For empty nodes, assign newline-separated not indented empty tokens to following node
            let start = [];
            if (atNextItem && it.sep && !it.value) {
                const nl = [];
                for(let i = 0; i < it.sep.length; ++i){
                    const st = it.sep[i];
                    switch(st.type){
                        case 'newline':
                            nl.push(i);
                            break;
                        case 'space':
                            break;
                        case 'comment':
                            if (st.indent > map.indent) nl.length = 0;
                            break;
                        default:
                            nl.length = 0;
                    }
                }
                if (nl.length >= 2) start = it.sep.splice(nl[1]);
            }
            switch(this.type){
                case 'anchor':
                case 'tag':
                    if (atNextItem || it.value) {
                        start.push(this.sourceToken);
                        map.items.push({
                            start: start
                        });
                        this.onKeyLine = true;
                    } else if (it.sep) it.sep.push(this.sourceToken);
                    else it.start.push(this.sourceToken);
                    return;
                case 'explicit-key-ind':
                    if (!it.sep && !$641681dd4222cfac$var$includesToken(it.start, 'explicit-key-ind')) it.start.push(this.sourceToken);
                    else if (atNextItem || it.value) {
                        start.push(this.sourceToken);
                        map.items.push({
                            start: start
                        });
                    } else this.stack.push({
                        type: 'block-map',
                        offset: this.offset,
                        indent: this.indent,
                        items: [
                            {
                                start: [
                                    this.sourceToken
                                ]
                            }
                        ]
                    });
                    this.onKeyLine = true;
                    return;
                case 'map-value-ind':
                    if ($641681dd4222cfac$var$includesToken(it.start, 'explicit-key-ind')) {
                        if (!it.sep) {
                            if ($641681dd4222cfac$var$includesToken(it.start, 'newline')) Object.assign(it, {
                                key: null,
                                sep: [
                                    this.sourceToken
                                ]
                            });
                            else {
                                const start = $641681dd4222cfac$var$getFirstKeyStartProps(it.start);
                                this.stack.push({
                                    type: 'block-map',
                                    offset: this.offset,
                                    indent: this.indent,
                                    items: [
                                        {
                                            start: start,
                                            key: null,
                                            sep: [
                                                this.sourceToken
                                            ]
                                        }
                                    ]
                                });
                            }
                        } else if (it.value) map.items.push({
                            start: [],
                            key: null,
                            sep: [
                                this.sourceToken
                            ]
                        });
                        else if ($641681dd4222cfac$var$includesToken(it.sep, 'map-value-ind')) this.stack.push({
                            type: 'block-map',
                            offset: this.offset,
                            indent: this.indent,
                            items: [
                                {
                                    start: start,
                                    key: null,
                                    sep: [
                                        this.sourceToken
                                    ]
                                }
                            ]
                        });
                        else if ($641681dd4222cfac$var$isFlowToken(it.key) && !$641681dd4222cfac$var$includesToken(it.sep, 'newline')) {
                            const start = $641681dd4222cfac$var$getFirstKeyStartProps(it.start);
                            const key = it.key;
                            const sep = it.sep;
                            sep.push(this.sourceToken);
                            // @ts-expect-error type guard is wrong here
                            delete it.key, delete it.sep;
                            this.stack.push({
                                type: 'block-map',
                                offset: this.offset,
                                indent: this.indent,
                                items: [
                                    {
                                        start: start,
                                        key: key,
                                        sep: sep
                                    }
                                ]
                            });
                        } else if (start.length > 0) // Not actually at next item
                        it.sep = it.sep.concat(start, this.sourceToken);
                        else it.sep.push(this.sourceToken);
                    } else {
                        if (!it.sep) Object.assign(it, {
                            key: null,
                            sep: [
                                this.sourceToken
                            ]
                        });
                        else if (it.value || atNextItem) map.items.push({
                            start: start,
                            key: null,
                            sep: [
                                this.sourceToken
                            ]
                        });
                        else if ($641681dd4222cfac$var$includesToken(it.sep, 'map-value-ind')) this.stack.push({
                            type: 'block-map',
                            offset: this.offset,
                            indent: this.indent,
                            items: [
                                {
                                    start: [],
                                    key: null,
                                    sep: [
                                        this.sourceToken
                                    ]
                                }
                            ]
                        });
                        else it.sep.push(this.sourceToken);
                    }
                    this.onKeyLine = true;
                    return;
                case 'alias':
                case 'scalar':
                case 'single-quoted-scalar':
                case 'double-quoted-scalar':
                    {
                        const fs = this.flowScalar(this.type);
                        if (atNextItem || it.value) {
                            map.items.push({
                                start: start,
                                key: fs,
                                sep: []
                            });
                            this.onKeyLine = true;
                        } else if (it.sep) this.stack.push(fs);
                        else {
                            Object.assign(it, {
                                key: fs,
                                sep: []
                            });
                            this.onKeyLine = true;
                        }
                        return;
                    }
                default:
                    {
                        const bv = this.startBlockValue(map);
                        if (bv) {
                            if (atNextItem && bv.type !== 'block-seq' && $641681dd4222cfac$var$includesToken(it.start, 'explicit-key-ind')) map.items.push({
                                start: start
                            });
                            this.stack.push(bv);
                            return;
                        }
                    }
            }
        }
        yield* this.pop();
        yield* this.step();
    }
    *blockSequence(seq) {
        var _a;
        const it = seq.items[seq.items.length - 1];
        switch(this.type){
            case 'newline':
                if (it.value) {
                    const end = 'end' in it.value ? it.value.end : undefined;
                    const last = Array.isArray(end) ? end[end.length - 1] : undefined;
                    if ((last === null || last === void 0 ? void 0 : last.type) === 'comment') end === null || end === void 0 || end.push(this.sourceToken);
                    else seq.items.push({
                        start: [
                            this.sourceToken
                        ]
                    });
                } else it.start.push(this.sourceToken);
                return;
            case 'space':
            case 'comment':
                if (it.value) seq.items.push({
                    start: [
                        this.sourceToken
                    ]
                });
                else {
                    if (this.atIndentedComment(it.start, seq.indent)) {
                        const prev = seq.items[seq.items.length - 2];
                        const end = (_a = prev === null || prev === void 0 ? void 0 : prev.value) === null || _a === void 0 ? void 0 : _a.end;
                        if (Array.isArray(end)) {
                            Array.prototype.push.apply(end, it.start);
                            end.push(this.sourceToken);
                            seq.items.pop();
                            return;
                        }
                    }
                    it.start.push(this.sourceToken);
                }
                return;
            case 'anchor':
            case 'tag':
                if (it.value || this.indent <= seq.indent) break;
                it.start.push(this.sourceToken);
                return;
            case 'seq-item-ind':
                if (this.indent !== seq.indent) break;
                if (it.value || $641681dd4222cfac$var$includesToken(it.start, 'seq-item-ind')) seq.items.push({
                    start: [
                        this.sourceToken
                    ]
                });
                else it.start.push(this.sourceToken);
                return;
        }
        if (this.indent > seq.indent) {
            const bv = this.startBlockValue(seq);
            if (bv) {
                this.stack.push(bv);
                return;
            }
        }
        yield* this.pop();
        yield* this.step();
    }
    *flowCollection(fc) {
        const it = fc.items[fc.items.length - 1];
        if (this.type === 'flow-error-end') {
            let top;
            do {
                yield* this.pop();
                top = this.peek(1);
            }while (top && top.type === 'flow-collection')
        } else if (fc.end.length === 0) {
            switch(this.type){
                case 'comma':
                case 'explicit-key-ind':
                    if (!it || it.sep) fc.items.push({
                        start: [
                            this.sourceToken
                        ]
                    });
                    else it.start.push(this.sourceToken);
                    return;
                case 'map-value-ind':
                    if (!it || it.value) fc.items.push({
                        start: [],
                        key: null,
                        sep: [
                            this.sourceToken
                        ]
                    });
                    else if (it.sep) it.sep.push(this.sourceToken);
                    else Object.assign(it, {
                        key: null,
                        sep: [
                            this.sourceToken
                        ]
                    });
                    return;
                case 'space':
                case 'comment':
                case 'newline':
                case 'anchor':
                case 'tag':
                    if (!it || it.value) fc.items.push({
                        start: [
                            this.sourceToken
                        ]
                    });
                    else if (it.sep) it.sep.push(this.sourceToken);
                    else it.start.push(this.sourceToken);
                    return;
                case 'alias':
                case 'scalar':
                case 'single-quoted-scalar':
                case 'double-quoted-scalar':
                    {
                        const fs = this.flowScalar(this.type);
                        if (!it || it.value) fc.items.push({
                            start: [],
                            key: fs,
                            sep: []
                        });
                        else if (it.sep) this.stack.push(fs);
                        else Object.assign(it, {
                            key: fs,
                            sep: []
                        });
                        return;
                    }
                case 'flow-map-end':
                case 'flow-seq-end':
                    fc.end.push(this.sourceToken);
                    return;
            }
            const bv = this.startBlockValue(fc);
            /* istanbul ignore else should not happen */ if (bv) this.stack.push(bv);
            else {
                yield* this.pop();
                yield* this.step();
            }
        } else {
            const parent = this.peek(2);
            if (parent.type === 'block-map' && (this.type === 'map-value-ind' && parent.indent === fc.indent || this.type === 'newline' && !parent.items[parent.items.length - 1].sep)) {
                yield* this.pop();
                yield* this.step();
            } else if (this.type === 'map-value-ind' && parent.type !== 'flow-collection') {
                const prev = $641681dd4222cfac$var$getPrevProps(parent);
                const start = $641681dd4222cfac$var$getFirstKeyStartProps(prev);
                $641681dd4222cfac$var$fixFlowSeqItems(fc);
                const sep = fc.end.splice(1, fc.end.length);
                sep.push(this.sourceToken);
                const map = {
                    type: 'block-map',
                    offset: fc.offset,
                    indent: fc.indent,
                    items: [
                        {
                            start: start,
                            key: fc,
                            sep: sep
                        }
                    ]
                };
                this.onKeyLine = true;
                this.stack[this.stack.length - 1] = map;
            } else yield* this.lineEnd(fc);
        }
    }
    flowScalar(type) {
        if (this.onNewLine) {
            let nl = this.source.indexOf('\n') + 1;
            while(nl !== 0){
                this.onNewLine(this.offset + nl);
                nl = this.source.indexOf('\n', nl) + 1;
            }
        }
        return {
            type: type,
            offset: this.offset,
            indent: this.indent,
            source: this.source
        };
    }
    startBlockValue(parent) {
        switch(this.type){
            case 'alias':
            case 'scalar':
            case 'single-quoted-scalar':
            case 'double-quoted-scalar':
                return this.flowScalar(this.type);
            case 'block-scalar-header':
                return {
                    type: 'block-scalar',
                    offset: this.offset,
                    indent: this.indent,
                    props: [
                        this.sourceToken
                    ],
                    source: ''
                };
            case 'flow-map-start':
            case 'flow-seq-start':
                return {
                    type: 'flow-collection',
                    offset: this.offset,
                    indent: this.indent,
                    start: this.sourceToken,
                    items: [],
                    end: []
                };
            case 'seq-item-ind':
                return {
                    type: 'block-seq',
                    offset: this.offset,
                    indent: this.indent,
                    items: [
                        {
                            start: [
                                this.sourceToken
                            ]
                        }
                    ]
                };
            case 'explicit-key-ind':
                {
                    this.onKeyLine = true;
                    const prev = $641681dd4222cfac$var$getPrevProps(parent);
                    const start = $641681dd4222cfac$var$getFirstKeyStartProps(prev);
                    start.push(this.sourceToken);
                    return {
                        type: 'block-map',
                        offset: this.offset,
                        indent: this.indent,
                        items: [
                            {
                                start: start
                            }
                        ]
                    };
                }
            case 'map-value-ind':
                {
                    this.onKeyLine = true;
                    const prev = $641681dd4222cfac$var$getPrevProps(parent);
                    const start = $641681dd4222cfac$var$getFirstKeyStartProps(prev);
                    return {
                        type: 'block-map',
                        offset: this.offset,
                        indent: this.indent,
                        items: [
                            {
                                start: start,
                                key: null,
                                sep: [
                                    this.sourceToken
                                ]
                            }
                        ]
                    };
                }
        }
        return null;
    }
    atIndentedComment(start, indent) {
        if (this.type !== 'comment') return false;
        if (this.indent <= indent) return false;
        return start.every((st)=>st.type === 'newline' || st.type === 'space'
        );
    }
    *documentEnd(docEnd) {
        if (this.type !== 'doc-mode') {
            if (docEnd.end) docEnd.end.push(this.sourceToken);
            else docEnd.end = [
                this.sourceToken
            ];
            if (this.type === 'newline') yield* this.pop();
        }
    }
    *lineEnd(token) {
        switch(this.type){
            case 'comma':
            case 'doc-start':
            case 'doc-end':
            case 'flow-seq-end':
            case 'flow-map-end':
            case 'map-value-ind':
                yield* this.pop();
                yield* this.step();
                break;
            case 'newline':
                this.onKeyLine = false;
            // fallthrough
            case 'space':
            case 'comment':
            default:
                // all other values are errors
                if (token.end) token.end.push(this.sourceToken);
                else token.end = [
                    this.sourceToken
                ];
                if (this.type === 'newline') yield* this.pop();
        }
    }
}








function $b5cafacd95bb0c7e$var$parseOptions(options) {
    const prettyErrors = options.prettyErrors !== false;
    const lineCounter = options.lineCounter || prettyErrors && new $c78c83346e70966f$export$c8a6f24ae2865e59() || null;
    return {
        lineCounter: lineCounter,
        prettyErrors: prettyErrors
    };
}
/**
 * Parse the input as a stream of YAML documents.
 *
 * Documents should be separated from each other by `...` or `---` marker lines.
 *
 * @returns If an empty `docs` array is returned, it will be of type
 *   EmptyStream and contain additional stream information. In
 *   TypeScript, you should use `'empty' in docs` as a type guard for it.
 */ function $b5cafacd95bb0c7e$export$643da2570c3b3d01(source, options = {}) {
    const { lineCounter: lineCounter , prettyErrors: prettyErrors  } = $b5cafacd95bb0c7e$var$parseOptions(options);
    const parser = new $641681dd4222cfac$export$7acfa6ed01010e37(lineCounter === null || lineCounter === void 0 ? void 0 : lineCounter.addNewLine);
    const composer = new $c355eb80a8f6e301$export$57ed0bcea28f97a2(options);
    const docs = Array.from(composer.compose(parser.parse(source)));
    if (prettyErrors && lineCounter) for (const doc of docs){
        doc.errors.forEach($e3676dc6987df596$export$44eaaa72d914fe8c(source, lineCounter));
        doc.warnings.forEach($e3676dc6987df596$export$44eaaa72d914fe8c(source, lineCounter));
    }
    if (docs.length > 0) return docs;
    return Object.assign([], {
        empty: true
    }, composer.streamInfo());
}
/** Parse an input string into a single YAML.Document */ function $b5cafacd95bb0c7e$export$b6a9369736b19f4d(source, options = {}) {
    const { lineCounter: lineCounter , prettyErrors: prettyErrors  } = $b5cafacd95bb0c7e$var$parseOptions(options);
    const parser = new $641681dd4222cfac$export$7acfa6ed01010e37(lineCounter === null || lineCounter === void 0 ? void 0 : lineCounter.addNewLine);
    const composer = new $c355eb80a8f6e301$export$57ed0bcea28f97a2(options);
    // `doc` is always set by compose.end(true) at the very latest
    let doc = null;
    for (const _doc of composer.compose(parser.parse(source), true, source.length)){
        if (!doc) doc = _doc;
        else if (doc.options.logLevel !== 'silent') {
            doc.errors.push(new $e3676dc6987df596$export$c1188aaa49090a5c(_doc.range.slice(0, 2), 'MULTIPLE_DOCS', 'Source contains multiple documents; please use YAML.parseAllDocuments()'));
            break;
        }
    }
    if (prettyErrors && lineCounter) {
        doc.errors.forEach($e3676dc6987df596$export$44eaaa72d914fe8c(source, lineCounter));
        doc.warnings.forEach($e3676dc6987df596$export$44eaaa72d914fe8c(source, lineCounter));
    }
    return doc;
}
function $b5cafacd95bb0c7e$export$98e6a39c04603d36(src, reviver, options) {
    let _reviver = undefined;
    if (typeof reviver === 'function') _reviver = reviver;
    else if (options === undefined && reviver && typeof reviver === 'object') options = reviver;
    const doc = $b5cafacd95bb0c7e$export$b6a9369736b19f4d(src, options);
    if (!doc) return null;
    doc.warnings.forEach((warning)=>$b18651e4a098e126$export$c106dd0671a0fc2d(doc.options.logLevel, warning)
    );
    if (doc.errors.length > 0) {
        if (doc.options.logLevel !== 'silent') throw doc.errors[0];
        else doc.errors = [];
    }
    return doc.toJS(Object.assign({
        reviver: _reviver
    }, options));
}
function $b5cafacd95bb0c7e$export$fac44ee5b035f737(value, replacer, options) {
    var _a;
    let _replacer = null;
    if (typeof replacer === 'function' || Array.isArray(replacer)) _replacer = replacer;
    else if (options === undefined && replacer) options = replacer;
    if (typeof options === 'string') options = options.length;
    if (typeof options === 'number') {
        const indent = Math.round(options);
        options = indent < 1 ? undefined : indent > 8 ? {
            indent: 8
        } : {
            indent: indent
        };
    }
    if (value === undefined) {
        const { keepUndefined: keepUndefined  } = (_a = options !== null && options !== void 0 ? options : replacer) !== null && _a !== void 0 ? _a : {};
        if (!keepUndefined) return undefined;
    }
    return new $a1e25132f1f55cca$export$b34a105447964f9f(value, _replacer, options).toString(options);
}






var $39f31bdad18c6b07$export$2e2bcd8739ae039 = $39f31bdad18c6b07$import$3c7b5cc2d282a88c;


const $45d915c3a6abb4e5$export$7133e6ad2ead4f42 = {
    "title": "title",
    "disableZoom": false,
    "bounds": [
        -10,
        10,
        -10,
        10
    ],
    "grid": true,
    "xLabel": "",
    "yLabel": ""
};


class $b8759ca3c16956b4$export$2e2bcd8739ae039 extends $5sQNY$obsidian.Plugin_2 {
    async onload() {
        console.log('loading functionPlot plugin');
        this.registerMarkdownCodeBlockProcessor('functionplot', this.functionPlotHandler);
    }
    async onunload() {
        console.log('unloading functionPlot plugin');
    }
    async functionPlotHandler(source, el, _ctx) {
        // parse yamly for bounds and functions to plot
        const header = source.match(/-{3}[^]*-{3}/g).first();
        const config = Object.assign($45d915c3a6abb4e5$export$7133e6ad2ead4f42, $b5cafacd95bb0c7e$export$98e6a39c04603d36(header));
        const functions = source.substring(header.length).split('\n').map((line)=>line.trim()
        ).filter((line)=>line.length > 0
        );
        let fPlotOptions = {
            "title": config.title,
            "grid": config.grid,
            "target": el
        };
        // parse functions
        if (config.disableZoom) {
            fPlotOptions['disableZoom'] = true;
            fPlotOptions['xAxis']['domain'] = [
                config.bounds[0],
                config.bounds[1]
            ];
            fPlotOptions['yAxis']['domain'] = [
                config.bounds[2],
                config.bounds[3]
            ];
        }
        if (config.xLabel) fPlotOptions['xAxis']['xLabel'] = config.xLabel;
        if (config.yLabel) fPlotOptions['yAxis']['yLabel'] = config.yLabel;
        // found no way to make labels work with functionPlot
        fPlotOptions['data'] = functions.map((line)=>{
            return {
                "fn": line.split('=')[1].trim()
            };
        });
        // render
        (/*@__PURE__*/$parcel$interopDefault($0e7121ef4d9042bf$exports))(fPlotOptions) // type error in function-plot
        ;
    }
}



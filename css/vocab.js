! function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(r, i, function(e) {
                return t[e]
            }.bind(null, i));
        return r
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 13)
}({
    0: function(t, e) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    },
    13: function(t, e, n) {
        "use strict";
        n.r(e);
        var r, i, a, o, l = n(2),
            c = n.n(l),
            s = {
                android: function() {
                    return navigator.userAgent.match(/Android/i)
                },
                blackberry: function() {
                    return navigator.userAgent.match(/BlackBerry/i)
                },
                ios: function() {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i)
                },
                opera: function() {
                    return navigator.userAgent.match(/Opera Mini/i)
                },
                windows: function() {
                    return navigator.userAgent.match(/IEMobile/i)
                },
                any: function() {
                    return s.android() || s.blackberry() || s.ios() || s.opera() || s.windows()
                }
            },
            u = s;
        var d, f, p = 500,
            v = 1100,
            h = 130,
            y = d3.select(".chart"),
            m = d3.format(",.0f"),
            b = 35;

        function g(t) {
            var e = d3.select(".word-histogram");
            e.selectAll("div").remove();
            var n = [2300, 6800],
                i = 12;
            t < 1150 && (i = 10), t < 920 && (i = 8), t < 600 && (i = 11, n = [2500, 6200]), t < 420 && (i = 10, n = [2600, 6200]), t < 350 && (i = 12, n = [2500, 6200]);
            var a = d3.scaleQuantile().domain(n).range(d3.range(i)),
                o = d3.nest().key(function(t) {
                    return a(+t.recalc)
                }).sortKeys(function(t, e) {
                    return +t - +e
                }).sortValues(function(t, e) {
                    return +t.era.replace("s", "") - +e.era.replace("s", "")
                }).entries(r),
                l = e.selectAll("div").data(o).enter().append("div").attr("class", "artist-nest");
            l.selectAll("div").data(function(t) {
                return t.values
            }).enter().append("div").attr("class", function(t) {
                return "artist era-" + t.era
            }).text(function(e) {
                var n = 15;
                return t < 720 && (n = 12), t < 600 && (n = 15), t < 420 && (n = 12), e.rapper_clean.length > n ? e.rapper_clean.slice(0, n - 3) + "..." : e.rapper_clean
            }), l.append("div").attr("class", "artist-nest-label").text(function(t) {
                var e = a.invertExtent(+t.key);
                return 0 == +t.key ? "<" + m(Math.floor(e[1])) : +t.key == a.range()[a.range().length - 1] ? m(Math.floor(e[0])) + "+" : m(Math.floor(e[0])) + "-" + m(Math.floor(e[1]))
            })
        }

        function x() {
            v < 950 && (b = 30), v < 850 && (b = 25), v < 600 && (b = 22), v < 500 && (b = 22), v < 475 && (b = 21), v < 475 && (b = 21), v < 425 && (b = 20), v < 400 && (b = 19), v < 375 && (b = 18)
        }

        function w() {
            function t(e) {
                console.log("here"), o.style("visibility", null), document.removeEventListener("touchstart", t)
            }
            d3.select("#content").node().offsetWidth;
            y.select(".rapper-circles").remove();
            var e = 1;
            v < 600 && (e = 1);
            for (var n = d3.forceSimulation(r).force("x", d3.forceX(function(t) {
                    return a(+t.recalc)
                }).strength(1)).force("y", d3.forceY(p / 2)).force("collide", d3.forceCollide(Math.ceil(b / 2) + e)).stop(), i = 0; i < 200; ++i) n.tick();
            f = y.append("div").attr("class", "rapper-circles").selectAll("div").data(r).enter().append("div").attr("class", function(t) {
                return "rapper-circle"
            }).style("position", "absolute").style("width", function(t) {
                return b + "px"
            }).style("height", function(t) {
                return b + "px"
            }).attr("data-count", function(t) {
                return +t.recalc
            }).style("background-image", function(t) {
                return t.id || console.log(t), "url(assets/images/" + t.id + ".png)"
            }).attr("aria-label", function(t) {
                return t.rapper
            }).attr("role", function(t) {
                return "image"
            }).style("left", function(t) {
                return k(t)
            }).style("top", function(t) {
                return Math.floor(t.y) + "px"
            }), d3.select("body").classed("is-mobile") ? f.on("click", function(e) {
                document.removeEventListener("touchstart", t);
                var n = e.rapper;
                o.style("visibility", "visible").style("left", k(e)).style("top", Math.floor(e.y) + "px").style("transform", function() {
                    return +k(e).replace("px", "") < 200 ? "translate(0%,calc(-100% - 22px))" : "translate(-50%,calc(-100% - 22px))"
                }).html("<p><span>" + n + "</span>: " + m(e.recalc) + " unique words used</p>"), window.setTimeout(function() {
                    document.addEventListener("touchstart", t)
                }, 100)
            }) : f.on("mouseover", function(t) {
                var e = t.rapper;
                o.style("visibility", "visible").style("left", k(t)).style("top", Math.floor(t.y) + "px").style("transform", function() {
                    return +k(t).replace("px", "") < 200 ? "translate(0%,calc(-100% - 22px))" : "translate(-50%,calc(-100% - 22px))"
                }).html("<p><span>" + e + "</span>: " + m(t.recalc) + " unique words used</p>")
            }).on("mouseout", function(t) {
                o.style("visibility", null)
            }), f.filter(function(t) {
                if ("busdriver" == t.id) return t
            }).append("p").attr("class", "rapper-name").text(function(t) {
                return "7,300 words"
            })
        }

        function k(t) {
            return "busdriver" == t.id || "aesop" == t.id ? "aesop" == t.id ? Math.floor(v - b / 2) + "px" : Math.floor(v - b - b / 2 - b / 4) + "px" : Math.floor(t.x) + "px"
        }

        function A() {
            y.select(".ticks").remove(), y.select(".central-axis-wrapper").remove();
            var t = y.append("div").attr("class", "central-axis-wrapper");
            t.append("div").attr("class", "central-axis").style("width", v - h + 8 + "px"), t.append("div").attr("class", "central-axis-two").style("width", 2 * b + "px");
            var e = [3e3, 4e3, 5e3, 6e3];
            v < 600 && (e = [3e3, 4500, 6e3]);
            var n = y.append("div").attr("class", "ticks").selectAll("div").data(e).enter().append("div").attr("class", "tick").style("left", function(t) {
                return i(t) + "px"
            });
            n.append("div").attr("class", "tick-line"), n.append("p").attr("class", "tick-label").html(function(t, n) {
                var r = "";
                return 0 != n && 3 != n && n != e.length - 1 || (r = " <span>words</span>"), m(t) + r
            })
        }
        var M = [5379, 3894, 3675, 4758, 4598, 4e3, 5249, 5399, 4732, 4773, 3754, 5303, 4344, 3818, 3848, 3736, 5343, 5554, 3681, 5337, 3828, 5041, 4778, 4382, 4355, 5095, 3788, 4122, 5082, 4892, 3882, 4391, 3586, 3751, 4699, 4948, 3645, 3690, 3762, 5367, 5251, 5392, 4910, 5641, 3685, 4708, 3976, 5391, 4730, 5726, 4471, 4704, 4714, 5408, 4940, 5199, 5235, 3787, 3711, 5318, 5734, 3536, 3723, 4706, 5755, 4009, 3919, 4968, 5544, 5320, 5721, 5409, 3708, 4952, 5399, 5404, 4065, 5178, 5248, 5407, 4705, 3876, 4422, 4707, 5120, 4372, 4067, 3935, 3820, 5446, 3718, 4525, 3863, 5257, 3810, 5778, 3625, 5469, 4763, 3674, 4482, 5327, 4776, 3997, 5289, 4755, 4122, 4826, 5555, 3941, 3931, 4695, 3864, 3666, 5171, 4770, 3921, 5763, 5166, 4442, 4764, 4643, 5327, 5514, 4681, 4475, 4083, 5620, 3760, 5461, 3586, 5340, 4862, 5396, 5905, 5059, 3816, 4636, 5746, 5055, 5343, 3978, 3597, 3801, 5425, 4781, 3872, 3711, 3738, 5284, 5032, 3675, 5390, 5029, 5400, 3829, 3911, 5258, 3868, 4454, 4623, 5268, 5634, 4414, 3694, 4491, 3878, 4341, 4469, 4666, 5425, 5531, 4038, 3721, 5703, 4002, 4814, 5206, 5655, 5254, 5182, 5704, 4821, 4807, 5245, 3599, 3791, 4796, 5191, 5718, 5534, 3695, 4741, 4677, 5365, 3948, 4671, 5190, 3733, 5265, 5126, 3770, 5377, 4817, 5273, 5494, 3786, 3677, 4758, 4573, 4967, 5064, 4466, 5450, 3775, 3591, 5397, 3893, 3726, 5094, 5294, 5519, 3728, 5329, 5290, 4867, 4728, 5432, 4633, 3661, 3719, 5652, 3725, 3640, 3742, 4078, 5047, 5543, 5210, 5262, 3698, 4429, 4470, 5060, 5532, 5272, 4870, 5361, 3991, 4860, 4802, 4490, 3994, 5542, 4440, 3943, 3701, 3749, 5100, 4842, 4399, 5468, 4774, 4453, 5241, 4995, 4035, 4574, 5644, 3924, 5177, 5354, 3677, 3990, 5747, 5439, 4410, 5562, 5158, 5238, 4795, 5581, 3738, 5895, 5160, 4694, 5565, 4581, 4570, 5201, 4766, 4423, 3832, 3985, 4477, 3941, 5292, 4702, 4008, 5417, 4831, 5265, 4396, 5178, 5386, 4901, 3862, 3598, 4811, 3684, 3574, 4971, 4842, 3936, 3789, 5529, 4382, 3962, 3851, 4876, 4404, 5076, 4252, 5260, 5878, 4472, 5463, 5231, 5898, 5743, 3770, 5549, 4045, 5424, 3859, 5536, 4922, 5498, 4690, 3976, 5428, 5291, 4018, 5212, 5337, 3728, 3798, 5517, 3591, 4988, 5346, 3664, 3910, 3886, 5271, 4785, 5255, 3976, 3699, 5546, 3780, 5337, 5407, 5385, 5058, 4079, 5084, 4321, 4766, 4648, 4790, 5047, 5382, 4917, 4514, 3825, 4763, 5260, 4310, 5518, 4057, 4392, 5515, 4796, 5319, 4030, 5399, 4824, 4908, 5328, 3675, 5454, 5055, 4759, 4870, 3742, 5258, 3847, 3921, 3750, 3570, 3654, 4725, 5178, 5514, 3826, 4507, 4410, 3872, 3851, 4717, 4846, 3770, 5173, 4889, 5641, 3848, 3858, 3696, 4767, 3732, 4891, 3786, 5685, 3571, 5276, 3618, 4517, 5229, 3861, 5216, 5477, 3928, 3751, 5424, 5739, 5395, 3708, 4314, 5134, 5079, 4803, 3981, 4379, 5317, 4005, 3641, 5271, 5423, 4775, 3796, 5070, 5025, 5522, 4478, 4866, 5326, 5261, 5001, 5534, 4866, 4668, 5426, 3706, 5242, 4757, 5188, 3996, 4938, 4641, 5263, 3753, 4777, 5319, 3869, 5468, 5313, 5266, 3694, 4587, 5225, 5390, 5468, 4427, 4941, 3851, 4397, 5377, 3827, 5750, 5491, 4998, 3725, 5336, 5193, 3688, 4844, 4617, 3859, 4504],
            j = [3198, 3313, 3683, 3676, 3735, 3722, 3728, 2657, 3612, 3618, 3293, 3598, 3846, 3347, 3362, 3662, 3327, 3685, 2757, 3217, 3680, 3424, 3580, 3669, 3397, 3343, 3675, 3354, 3675, 3537, 3417, 3697, 3484, 2937, 3670, 3756, 3622, 3692, 2720, 3384, 3769, 3306, 2661, 3398, 3485, 3677, 3298, 3734, 3685, 3380, 3620, 3709, 2863, 3649, 3683, 3583, 3319, 3285, 3721, 3670, 3715, 3160, 3201, 3664, 3305, 2688, 3317, 3623, 3469, 3350, 3191, 3613, 3705, 3628, 3668, 3343, 3667, 3503, 3152, 3716, 3336, 3655, 3682, 3316, 3609, 3257, 3617, 3399, 3370, 3353, 3596, 3364, 3592, 3681, 3673, 3498, 3611, 3597, 3296, 3570, 3773, 3067, 3359, 3677, 3618, 3015, 3275, 2804, 3463, 3346, 3600, 3600, 3606, 3645, 3395, 3321, 3275, 3703, 3673, 3673, 3279, 3702, 2776, 3601, 2800, 3821, 3652, 3645, 3411, 3683, 3477, 2952, 2696, 2897, 3608, 3709, 3238, 3258, 2952, 3589, 3228, 3781, 3615, 3330, 3380, 3700, 3424, 3685, 3360, 3362, 3270, 3682, 3399, 3773, 3137, 3012, 3288, 3571, 3619, 3609, 3644, 3573, 3665, 3459, 2703, 3517, 3286, 3457, 3758, 3671, 3359, 3670, 3431, 3671, 3282, 3814, 3654, 3644, 2824, 3295, 3711, 3634, 2757, 3685, 3611, 3702, 3546, 3672, 3578, 3770, 3647, 3409, 3644, 3719, 3715, 3661, 3647, 2704, 3460, 3748, 3696, 3683, 3192, 3698, 2782, 3671, 3570, 3744, 3386, 3595, 3207, 3322, 3803, 3659, 3037, 3613, 3507, 3481, 3583, 3649, 2836, 2845, 2845, 3548, 2690, 3503, 2837, 3694, 3254, 3578, 3700, 2634, 3712, 3696, 3718, 3035, 3649, 3591, 2697, 3574, 3362, 3349, 3622, 3850, 3644, 3730, 3606, 3671, 3640, 3739, 3631, 3466, 3773, 3715, 3265, 3450, 3630, 3690, 3736, 3592, 3807, 3690, 3639, 3375, 3804, 3604, 3368, 3064, 3094, 3651, 2812, 3498, 3556, 3767, 3298, 3321, 3245, 3577, 3747, 3460, 2706, 3704, 3675, 3207, 3695, 3488, 3457, 3314, 3690, 3797, 3690, 3666, 3663, 3670, 3451, 3570, 3295, 3533, 3669, 3553, 3447, 3305, 3606, 3365, 3741, 3346, 3633, 3689, 3471, 3074, 3683, 3657, 3309, 3548, 3249, 3469, 3449, 3359, 3667, 3599, 3623, 3620, 3597, 3217, 3059, 3579, 3424, 3458, 3779, 3647, 3697, 3158, 3670, 3737, 3663, 3171, 3271, 3663, 3081, 3596, 3382, 3382, 3485, 3684, 3320, 3602, 3597, 3417, 2808, 3698, 3591, 3537, 3558, 3720, 3287, 3296, 3534, 3261, 2737, 3614, 3397, 3312, 3736, 3651, 3343, 3737, 3718, 3668, 2736, 3082, 3685, 3671, 3284, 3655, 3679, 3342, 3670, 3308, 2695, 3840, 3816, 3676, 3368, 3710, 3660, 3629, 3353, 3016, 3186, 3478, 3610, 3544, 3611, 3543, 3602, 3689, 3629, 2704, 2842, 3581, 3386, 3594, 2793, 3519, 3486, 3736, 3341, 3667, 3702, 2626, 2734, 3589, 3702, 3620, 3611, 3736, 3576, 3073, 3617, 2704, 3285, 3658, 3570, 3676, 3297, 3684, 3758, 3677, 3615, 3715, 3255, 3823, 3587, 3532, 3561, 3624, 2695, 3353, 3547, 3710, 2798, 3660, 3824, 3699, 3410, 3235, 3661, 3733, 3743, 3429, 3671, 3227, 3521, 3532, 3318, 3452, 3313, 3566, 3743, 3490, 3333, 3737, 3452, 3415, 3706, 3102, 3222, 2688, 2695, 3491, 3608, 3677, 3515, 2734, 3503, 3631, 2675, 3737, 3385, 2839, 3229, 3266, 3669, 3652, 3312, 3575, 3728, 3727, 3603, 3328, 3389, 3354, 3711, 3699, 2622, 2698, 3566, 3443, 3298, 3469],
            _ = [3138, 3330, 3299, 2985, 3286, 3058, 3309, 3273, 3289, 3172, 2750, 2735, 3238, 2706, 2701, 3080, 3254, 3145, 3123, 3167, 2773, 3183, 3289, 3128, 3296, 3309, 3097, 2721, 3154, 3273, 2771, 3307, 3307, 3074, 3294, 2712, 3194, 3303, 3147, 3135, 3198, 2961, 3002, 3003, 3168, 3176, 2763, 3277, 3293, 3071, 3306, 3288, 3002, 3214, 3308, 2940, 2662, 3190, 3319, 3178, 3122, 3259, 2941, 3213, 2797, 2941, 3347, 3252, 2777, 3120, 3166, 3041, 3261, 3303, 2763, 2735, 3268, 3181, 3128, 3292, 3331, 3271, 3060, 3173, 3310, 3274, 2766, 3174, 2702, 3061, 3278, 3135, 3007, 3001, 3200, 2715, 3072, 3257, 3307, 2753, 3259, 2958, 2711, 3002, 3172, 2949, 3300, 3056, 3288, 3125, 2703, 2759, 3172, 3165, 2802, 3159, 3294, 3066, 3081, 3121, 3031, 3298, 3236, 3294, 3301, 2953, 2795, 2715, 3216, 2759, 3284, 3141, 3140, 3170, 3225, 3126, 3273, 3112, 3308, 3016, 3292, 3306, 3006, 2780, 3355, 3303, 3137, 3169, 2984, 3063, 3134, 3308, 3226, 2792, 3023, 2731, 3047, 3214, 3284, 3256, 3287, 3053, 3097, 3308, 3081, 2700, 2756, 3120, 2786, 3312, 3085, 3180, 2758, 3297, 2741, 3103, 3062, 3255, 3006, 3135, 2961, 2743, 3274, 3043, 3170, 2765, 3311, 3174, 2783, 3139, 2930, 3141, 3305, 3132, 3278, 2716, 2709, 3311, 3311, 3178, 3238, 3094, 2783, 3326, 2715, 2689, 2998, 3147, 2947, 3277, 3283, 2805, 3227, 3299, 3133, 3300, 2944, 2686, 3173, 2702, 3337, 2764, 2752, 3280, 3086, 2733, 3155, 2683, 2703, 3057, 3287, 2798, 3123, 2989, 3014, 3015, 3310, 3260, 3179, 3137, 3217, 3123, 3332, 3179, 3270, 3261, 2768, 2757, 3276, 2777, 2811, 3311, 3300, 3307, 3291, 2661, 2937, 3110, 2800, 3090, 2818, 3211, 3170, 3217, 3117, 2684, 3155, 3241, 2758, 3006, 3161, 3221, 2808, 2712, 3127, 3021, 3338, 2947, 2911, 3173, 2787, 3144, 2794, 3286, 3028, 2710, 3245, 3162, 2916, 2785, 3029, 3294, 3290, 2939, 3289, 3306, 2880, 2721, 3136, 2710, 3312, 2937, 2711, 3338, 2734, 3002, 3124, 3080, 3293, 2729, 3077, 3176, 2708, 3055, 3306, 3304, 3296, 2937, 2754, 2969, 3298, 3096, 2757, 3061, 3017, 3016, 2817, 3091, 3309, 3332, 3274, 3015, 3307, 2757, 2919, 2722, 3303, 3176, 2723, 3016, 3188, 3197, 3108, 2946, 3164, 3334, 3219, 3141, 2949, 3075, 3201, 3253, 3128, 2728, 2817, 3124, 3275, 2737, 2694, 3135, 3280, 3140, 3288, 3288, 3333, 3086, 3128, 2727, 3243, 2935, 2711, 3137, 2935, 3157, 2684, 3311, 3015, 3160, 2756, 2742, 3310, 2914, 3320, 2936, 2763, 3006, 3168, 2744, 2730, 2699, 3288, 2799, 3036, 2714, 3307, 3284, 2783, 3174, 3218, 3258, 2982, 3153, 3259, 3320, 3271, 2705, 3075, 3327, 3253, 3146, 3178, 3174, 3173, 3260, 3136, 3213, 3045, 3038, 3002, 3125, 3320, 3309, 3176, 3075, 2804, 2747, 3175, 3149, 3199, 2732, 3006, 2652, 3168, 2684, 3121, 3001, 2690, 3048, 3177, 3292, 2965, 3301, 3175, 3294, 3154, 3130, 3259, 2992, 3006, 3022, 3296, 2781, 3168, 3238, 3144, 3292, 3294, 3181, 3213, 2952, 3300, 3249, 3311, 2942, 3148, 3096, 3155, 2710, 3189, 3050, 3216, 2692, 3123, 2796, 3140, 3288, 3101, 3122, 3270, 3051, 2692, 2710, 3002, 3050, 2987, 3214, 3012, 3140, 2755, 2706, 3260, 3290, 2811, 2711, 2988, 3289, 3105, 2788, 3260, 3257];
        var O = {
                init: function() {
                    var t = d3.select("#content").node().offsetWidth;
                    v = t, t < 950 && (p = 450), t < 700 && (p = 550), t < 600 && (p = 400), x(), (v = t - 50) > 1200 && (v = 1200), h = b + b / 2 + b / 4 + 70, t < 600 && (h = b + b / 2 + b / 4 + 38), d3.csv("assets/data/data.csv", function(e) {
                        r = e.filter(function(t, e) {
                            if (t.id && "remove" != t.notes) return t
                        });
                        var n = d3.extent(r, function(t) {
                            return t.recalc
                        });
                        i = d3.scaleLinear().domain([n[0], 6500]).range([0, v - h]), a = d3.scaleLinear().domain([n[0], 6500]).range([0, v - h]), y.style("width", v + "px").style("height", p + "px"), A(),
                            function() {
                                var t = y.append("div").attr("class", "chart-filters"),
                                    e = t.append("div").attr("class", "button-wrapper").selectAll("button").data(["all", "wu-tang"]).enter().append("button").attr("class", function(t) {
                                        return t + "-button"
                                    }).classed("button-active", function(t, e) {
                                        return 0 == e
                                    }).html(function(t) {
                                        return "all" == t ? "All" : 'Just <img src="assets/images/wu-tang2.png" style="width: 20px;">'
                                    }).on("click", function(t) {
                                        e.classed("button-active", !1), d3.select(this).classed("button-active", !0), "wu-tang" == t ? f.style("opacity", function(t) {
                                            return t.color.split(" ").indexOf("wutang") > -1 ? 1 : .3
                                        }) : f.style("opacity", null)
                                    }),
                                    n = r.filter(function(t) {
                                        return t
                                    });

                                function i(t) {
                                    console.log("here"), f.style("opacity", null).style("border", null), d.node().selectedIndex = 0, document.removeEventListener("click", i)
                                }

                                function a(t) {
                                    console.log("here"), f.style("opacity", null).style("border", null), d.node().selectedIndex = 0, document.removeEventListener("touchstart", a)
                                }
                                n.unshift({
                                    id: "all",
                                    rapper: "Find an Artist",
                                    rapper_clean: "Find an Artist"
                                }), (d = t.append("select").attr("class", "search-rappers")).selectAll("option").data(n).enter().append("option").attr("value", function(t) {
                                    return t.id
                                }).text(function(t) {
                                    return t.rapper_clean.length > 20 ? t.rapper_clean.slice(0, 17) + "..." : t.rapper_clean
                                }), d.on("change", function(t) {
                                    var e = d.node(),
                                        n = e.options[e.selectedIndex].value;
                                    "all" == n ? f.style("opacity", null).style("border", null) : (f.style("opacity", function(t) {
                                        return t.id != n ? .3 : null
                                    }).style("border", function(t) {
                                        return t.id == n ? "2px solid #e94953" : null
                                    }), d3.select("body").classed("is-mobile") ? document.addEventListener("touchstart", a) : document.addEventListener("click", i))
                                })
                            }(), o = y.append("div").attr("class", "tooltip"), w(),
                            function() {
                                var t = d3.select(".genre-histogram"),
                                    e = d3.extent(M),
                                    n = d3.extent(j),
                                    r = d3.extent(_),
                                    i = d3.max([e, n, r], function(t) {
                                        return t[1]
                                    }),
                                    a = (d3.max([e, n, r], function(t) {
                                        return t[0]
                                    }), d3.scaleLinear().domain([2800, i]).range([0, 100])),
                                    o = d3.histogram().domain(a.domain()).thresholds(a.ticks(17))(M);
                                console.log(o);
                                var l = d3.histogram().domain(a.domain()).thresholds(a.ticks(17))(j),
                                    c = d3.histogram().domain(a.domain()).thresholds(a.ticks(17))(_),
                                    s = d3.max(o, function(t) {
                                        return t.length
                                    }),
                                    u = d3.max(l, function(t) {
                                        return t.length
                                    }),
                                    d = d3.max(c, function(t) {
                                        return t.length
                                    }),
                                    f = d3.max([s, u, d]),
                                    p = t.selectAll("div").data([l, c, o]).enter().append("div").attr("class", function(t, e) {
                                        return "genre-wrapper genre-" + e
                                    });
                                t.append("div").attr("class", "axis-labels").selectAll("div").data([0, Math.floor(f / 2), f]).enter().append("div").attr("class", "axis-label").style("bottom", function(t, e) {
                                    return t / f * 100 + "%"
                                }).append("p").text(function(t) {
                                    return t + " samples"
                                }), p.selectAll("div").data(function(t) {
                                    return t
                                }).enter().append("div").attr("class", function(t) {
                                    return "bin"
                                }).style("border", function(t) {
                                    return 0 == t.length ? "none" : null
                                }).style("height", function(t) {
                                    return t.length / f * 100 + "%"
                                }).filter(function(t, e) {
                                    return e % 5 == 0
                                }).append("div").attr("class", "bin-label").text(function(t) {
                                    return m(t.x0) + " unique words"
                                }), p.filter(function(t) {
                                    return d3.select(this).classed("genre-2")
                                }).selectAll(".bin").filter(function(t) {
                                    return t.length == s
                                }).append("div").attr("class", "hipHop-label genre-label").text(function(t) {
                                    return "Hip Hop"
                                }), p.filter(function(t) {
                                    return d3.select(this).classed("genre-1")
                                }).selectAll(".bin").filter(function(t) {
                                    return t.length == d
                                }).append("div").attr("class", "country-label genre-label").text(function(t) {
                                    return "Country"
                                }), p.filter(function(t) {
                                    return d3.select(this).classed("genre-0")
                                }).selectAll(".bin").filter(function(t) {
                                    return t.length == u
                                }).append("div").attr("class", "rock-label genre-label").text(function(t) {
                                    return "Rock"
                                })
                            }(), g(t)
                    })
                },
                resize: function() {
                    var t = d3.select("#content").node().offsetWidth;
                    g(t), v = t, t < 950 && (p = 450), t < 700 && (p = 550), t < 600 && (p = 400), x(), v = t - 50, h = b + b / 2 + b / 4 + 70, t < 600 && (h = b + b / 2 + b / 4 + 38), y.style("width", v + "px").style("height", p + "px"), i.range([0, v - h]), a.range([0, v - h]), A(), w()
                }
            },
            E = d3.select("body"),
            L = 0;

        function T() {
            var t = E.node().offsetWidth;
            L !== t && (L = t, O.resize())
        }
        E.classed("is-mobile", u.any()), window.addEventListener("resize", c()(T, 150)),
            function() {
                if (E.select("header").classed("is-sticky")) {
                    var t = E.select(".header__menu"),
                        e = E.select(".header__toggle");
                    e.on("click", function() {
                        var n = t.classed("is-visible");
                        t.classed("is-visible", !n), e.classed("is-visible", !n)
                    })
                }
            }(), O.init()
    },
    2: function(t, e, n) {
        (function(e) {
            var n = "Expected a function",
                r = NaN,
                i = "[object Symbol]",
                a = /^\s+|\s+$/g,
                o = /^[-+]0x[0-9a-f]+$/i,
                l = /^0b[01]+$/i,
                c = /^0o[0-7]+$/i,
                s = parseInt,
                u = "object" == typeof e && e && e.Object === Object && e,
                d = "object" == typeof self && self && self.Object === Object && self,
                f = u || d || Function("return this")(),
                p = Object.prototype.toString,
                v = Math.max,
                h = Math.min,
                y = function() {
                    return f.Date.now()
                };

            function m(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }

            function b(t) {
                if ("number" == typeof t) return t;
                if (function(t) {
                        return "symbol" == typeof t || function(t) {
                            return !!t && "object" == typeof t
                        }(t) && p.call(t) == i
                    }(t)) return r;
                if (m(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = m(e) ? e + "" : e
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = t.replace(a, "");
                var n = l.test(t);
                return n || c.test(t) ? s(t.slice(2), n ? 2 : 8) : o.test(t) ? r : +t
            }
            t.exports = function(t, e, r) {
                var i, a, o, l, c, s, u = 0,
                    d = !1,
                    f = !1,
                    p = !0;
                if ("function" != typeof t) throw new TypeError(n);

                function g(e) {
                    var n = i,
                        r = a;
                    return i = a = void 0, u = e, l = t.apply(r, n)
                }

                function x(t) {
                    var n = t - s;
                    return void 0 === s || n >= e || n < 0 || f && t - u >= o
                }

                function w() {
                    var t = y();
                    if (x(t)) return k(t);
                    c = setTimeout(w, function(t) {
                        var n = e - (t - s);
                        return f ? h(n, o - (t - u)) : n
                    }(t))
                }

                function k(t) {
                    return c = void 0, p && i ? g(t) : (i = a = void 0, l)
                }

                function A() {
                    var t = y(),
                        n = x(t);
                    if (i = arguments, a = this, s = t, n) {
                        if (void 0 === c) return function(t) {
                            return u = t, c = setTimeout(w, e), d ? g(t) : l
                        }(s);
                        if (f) return c = setTimeout(w, e), g(s)
                    }
                    return void 0 === c && (c = setTimeout(w, e)), l
                }
                return e = b(e) || 0, m(r) && (d = !!r.leading, o = (f = "maxWait" in r) ? v(b(r.maxWait) || 0, e) : o, p = "trailing" in r ? !!r.trailing : p), A.cancel = function() {
                    void 0 !== c && clearTimeout(c), u = 0, i = s = a = c = void 0
                }, A.flush = function() {
                    return void 0 === c ? l : k(y())
                }, A
            }
        }).call(this, n(0))
    }
});
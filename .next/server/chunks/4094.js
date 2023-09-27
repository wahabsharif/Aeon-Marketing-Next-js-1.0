"use strict";
exports.id = 4094;
exports.ids = [4094];
exports.modules = {

/***/ 4094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ who_we_are)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/common/customFunctions.js
var customFunctions = __webpack_require__(2455);
;// CONCATENATED MODULE: ./src/common/featuresEffect.js

const featuresEffect = ()=>{
    var featuresitems = document.querySelectorAll(".feat .items");
    if (featuresitems) {
        featuresitems.forEach((item)=>{
            item.onmouseover = function(event) {
                item.classList.add("active");
                let siblings = (0,customFunctions/* getSiblings */.m7)(item), siblingEl = siblings.map((e)=>e.classList.remove("active"));
            };
        });
    }
};
/* harmony default export */ const common_featuresEffect = (featuresEffect);

;// CONCATENATED MODULE: ./src/common/thumparallax.js
const thumparallax = ()=>{
    var imageUp = document.getElementsByClassName("thumparallax");
    if (imageUp) {
        new simpleParallax(imageUp, {
            delay: 1,
            scale: 1.1
        });
    }
};
const thumparallaxDown = ()=>{
    var imageDown = document.getElementsByClassName("thumparallax-down");
    if (imageDown) {
        new simpleParallax(imageDown, {
            orientation: "down",
            delay: 1,
            scale: 1.1
        });
    }
};

// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8636);
;// CONCATENATED MODULE: ./src/pages/home/who-we-are.jsx
/* eslint-disable @next/next/no-img-element */ 




const WhoWeAre = ()=>{
    external_react_default().useEffect(()=>{
        common_featuresEffect();
        setTimeout(()=>{
            thumparallaxDown();
        }, 1000);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "min-area sub-bg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 col-md-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "thumparallax-down",
                                src: "/img/who-we-are.webp",
                                alt: ""
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 col-md-12 valign",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "wow custom-font words chars splitting",
                                        "data-splitting": true,
                                        children: "Who We Are?"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "wow txt words chars splitting",
                                        "data-splitting": true,
                                        children: "Your Partner in Realizing Property Potential"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "feat",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "wow fadeInUp",
                                            "data-wow-delay": ".2s",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "1"
                                                        }),
                                                        " Trading Portfolio:"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Unlock value through strategic property transactions, maximizing returns with our market insights."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "wow fadeInUp",
                                            "data-wow-delay": ".4s",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "2"
                                                        }),
                                                        " Investment Management:"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Expertly navigate the real estate market, securing your investments and fostering portfolio growth."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "wow fadeInUp",
                                            "data-wow-delay": ".6s",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "3"
                                                        }),
                                                        " Property Appraisals:"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Accurate, comprehensive appraisals that reveal your property's true market value, empowering informed decisions."
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const who_we_are = (WhoWeAre);


/***/ })

};
;
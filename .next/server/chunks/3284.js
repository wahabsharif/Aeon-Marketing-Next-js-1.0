"use strict";
exports.id = 3284;
exports.ids = [3284];
exports.modules = {

/***/ 3284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ features)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8636);
;// CONCATENATED MODULE: ./src/data/home/features.json
const features_namespaceObject = JSON.parse('[{"id":1,"title":"Vision:","content":"Crafting enriched lifestyles through transformative real estate solutions, inspiring a brighter tomorrow."},{"id":2,"title":"Mission:","content":"To pioneer innovative approaches in real estate, prioritizing integrity, expertise, and client empowerment."},{"id":3,"title":"Why Choose Us:","content":"Our 7+ years of expertise ensure your growth and success, backed by innovative solutions tailored to your needs."}]');
;// CONCATENATED MODULE: ./src/pages/home/features.jsx




const Features = ({ withBG , withPadding , halfBG , withOutTitle  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: `services ${withPadding ? "section-padding" : ""} ${withBG ? "sub-bg" : ""}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    !withOutTitle && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "sec-head custom-font text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                className: "wow fadeIn",
                                "data-wow-delay": ".5s",
                                children: "Aeon Marketing"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "wow words chars splitting",
                                    "data-splitting": true,
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "tbg",
                                children: "About"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: features_namespaceObject.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `item ${index != features_namespaceObject.length - 1 ? "md-mb50" : ""} wow fadeInUp`,
                                    "data-wow-delay": item.id == 1 ? ".5s" : item.id == 2 ? ".3s" : ".8s",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: `icon ${item.icon}`
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: item.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: item.content
                                        })
                                    ]
                                })
                            }, item.id))
                    })
                ]
            }),
            halfBG && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "half-bg bottom"
            })
        ]
    });
};
/* harmony default export */ const features = (Features);


/***/ })

};
;
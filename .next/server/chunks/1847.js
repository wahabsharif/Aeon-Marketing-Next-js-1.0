"use strict";
exports.id = 1847;
exports.ids = [1847];
exports.modules = {

/***/ 1847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_taj_residencia_payment_plan_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3878);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var _components_Split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8636);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3877);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_5__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// import Swiper core and required modules





swiper__WEBPACK_IMPORTED_MODULE_5__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_5__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Navigation
]);
const PaymentPlan = ()=>{
    const navigationPrevRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const navigationNextRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "work-carousel section-padding pt-0 metro position-re",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container ontop",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-lg-12 no-padding",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "sec-head custom-font text-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: "wow fadeIn",
                                    "data-wow-delay": ".5s",
                                    children: "Payment"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Split__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "wow words chars splitting",
                                        "data-splitting": true,
                                        children: "Plan"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "tbg",
                                    children: "Plan"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "swiper-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                                    className: "swiper-wrapper",
                                    slidesPerView: 2,
                                    centeredSlides: true,
                                    loop: true,
                                    navigation: {
                                        prevEl: navigationPrevRef.current,
                                        nextEl: navigationNextRef.current
                                    },
                                    onBeforeInit: (swiper)=>{
                                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                                        swiper.params.navigation.nextEl = navigationNextRef.current;
                                    },
                                    onSwiper: (swiper)=>{
                                        setTimeout(()=>{
                                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                                            swiper.params.navigation.nextEl = navigationNextRef.current;
                                            swiper.navigation.destroy();
                                            swiper.navigation.init();
                                            swiper.navigation.update();
                                        });
                                    },
                                    autoplay: {
                                        delay: 2500,
                                        disableOnInteraction: false
                                    },
                                    speed: 1000,
                                    breakpoints: {
                                        320: {
                                            slidesPerView: 1,
                                            spaceBetween: 0
                                        },
                                        640: {
                                            slidesPerView: 1,
                                            spaceBetween: 0
                                        },
                                        767: {
                                            slidesPerView: 1,
                                            spaceBetween: 0,
                                            centeredSlides: false
                                        },
                                        991: {
                                            slidesPerView: 2
                                        }
                                    },
                                    children: _data_taj_residencia_payment_plan_json__WEBPACK_IMPORTED_MODULE_2__.map((slide)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                            className: "swiper-slide",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "content wow noraidus fadeInUp",
                                                "data-wow-delay": ".3s",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                        href: "/pdf/taj-residencia-payment-plan.pdf",
                                                        passHref: true,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "item-img bg-img wow imago",
                                                            style: {
                                                                backgroundImage: `url(${slide.image})`
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "cont",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                className: "color-font",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                    href: "/pdf/taj-residencia-payment-plan.pdf",
                                                                    children: slide.title
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                    href: "/pdf/taj-residencia-payment-plan.pdf",
                                                                    children: slide.secTex
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, slide.id))
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    ref: navigationNextRef,
                                    className: "swiper-button-next swiper-nav-ctrl simp-next cursor-pointer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "simple-btn right",
                                        children: "Next"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    ref: navigationPrevRef,
                                    className: "swiper-button-prev swiper-nav-ctrl simp-prev cursor-pointer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "simple-btn",
                                        children: "Prev"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentPlan);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3878:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"title":"Taj Residencia","secTex":"Dream Valley","image":"/img/taj-residencia/Taj-Residencia-Dream-Valley-Payment-Plan.webp","slug":"/img/taj-residencia/Taj-Residencia-Dream-Valley-Payment-Plan.webp"},{"id":2,"title":"Taj Residencia","secTex":"Commercial Plot","image":"/img/taj-residencia/Taj-Residencia-Commercial-Plot-Payment-Plan.webp","slug":"/img/taj-residencia/Taj-Residencia-Commercial-Plot-Payment-Plan.webp"},{"id":3,"title":"Taj Residencia","secTex":"Residential Plots","image":"/img/taj-residencia/Taj-Residencia-Residential-Plots-Payment-Plan.webp","slug":"/img/taj-residencia/Taj-Residencia-Residential-Plots-Payment-Plan.webp"},{"id":4,"title":"Taj Residencia","secTex":"5 Marla Residential","image":"/img/taj-residencia/Taj-Residencia-5-Marla-Residencial-Payment-Plan.webp","slug":"/img/taj-residencia/Taj-Residencia-5-Marla-Residencial-Payment-Plan.webp"},{"id":5,"title":"Taj Residencia","secTex":"8 Marla Residential Pakistan Package","image":"/img/taj-residencia/Taj-Residencia-8-Marla-Residencial-Payment-Plan-Pakistan-package.webp","slug":"/img/taj-residencia/Taj-Residencia-8-Marla-Residencial-Payment-Plan-Pakistan-package.webp"},{"id":6,"title":"Taj Residencia","secTex":"8 Marla Residential","image":"/img/taj-residencia/Taj-Residencia-8-Marla-Residencial-Payment-Plan.webp","slug":"/img/taj-residencia/Taj-Residencia-8-Marla-Residencial-Payment-Plan.webp"}]');

/***/ })

};
;
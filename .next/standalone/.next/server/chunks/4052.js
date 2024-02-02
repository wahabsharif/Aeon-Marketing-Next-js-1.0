"use strict";
exports.id = 4052;
exports.ids = [4052];
exports.modules = {

/***/ 4052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ testimonials)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8636);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./src/common/removeOverlay.js
const removeOverlay = ()=>{
    let sectionWithOutOverlay = document.querySelectorAll("section.noOverlay");
    if (sectionWithOutOverlay) {
        sectionWithOutOverlay.forEach((section)=>section.removeAttribute("data-overlay-dark"));
    }
};
/* harmony default export */ const common_removeOverlay = (removeOverlay);

;// CONCATENATED MODULE: ./src/common/parallaxie.js
function parallaxie(selector) {
    let elementBg = document.querySelector(selector);
    if (elementBg) {
        let position = elementBg.getBoundingClientRect().top * 0.75;
        elementBg.style.backgroundSize = "cover";
        elementBg.style.backgroundRepeat = "no-repeat";
        elementBg.style.backgroundAttachment = "fixed";
        elementBg.style.backgroundPosition = `center ${position}px`;
        window.addEventListener("scroll", ()=>{
            let element = document.querySelector(selector);
            position = element.getBoundingClientRect().top * 0.75;
            element.style.backgroundPosition = `center ${position}px`;
        });
    }
}

;// CONCATENATED MODULE: ./src/pages/home/testimonials.jsx
/* eslint-disable @next/next/no-img-element */ 







class Testimonials extends (external_react_default()).Component {
    constructor(props){
        super(props);
    }
    renderArrows = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "arrows",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    onClick: ()=>this.slider.slickNext(),
                    className: "next cursor-pointer",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "pe-7s-angle-right"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    onClick: ()=>this.slider.slickPrev(),
                    className: "prev cursor-pointer",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "pe-7s-angle-left"
                    })
                })
            ]
        });
    };
    componentDidMount() {
        common_removeOverlay();
        parallaxie(".testimonials.bg-img.parallaxie");
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: `testimonials section-padding ${this.props.subBgLftstl ? "sub-bg lftstl" : ""} ${this.props.withBG ? "bg-img" : ""} ${this.props.parallaxie ? "parallaxie" : ""} ${!this.props.overlay ? "noOverlay" : ""}`,
            style: {
                backgroundImage: `${this.props.withBG && !this.props.imgSrc ? "url(/img/slid/3.jpg)" : this.props.imgSrc ? `url(${this.props.imgSrc})` : "none"}`
            },
            "data-overlay-dark": `${this.props.overlay ? "9" : "0"}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container position-re",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "sec-head custom-font text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                className: "wow fadeIn",
                                "data-wow-delay": ".5s",
                                children: "What They Are Saying?"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "wow words chars splitting",
                                    "data-splitting": true,
                                    children: "Testimonials."
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "tbg",
                                children: "Testimonials"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row justify-content-center wow fadeInUp",
                        "data-wow-delay": ".5s",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-8",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                                className: "slic-item",
                                ref: (c)=>this.slider = c,
                                dots: true,
                                infinite: true,
                                arrows: true,
                                autoplay: true,
                                rows: 1,
                                slidesToScroll: 1,
                                slidesToShow: 1,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: '"AEON Marketing\'s exceptional professionalism, personalized strategy, and flawless communication led to a quick, lucrative sale. Highly recommended for real estate needs."'
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "info",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "cont",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "author",
                                                        children: this.props.subBgLftstl ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "img",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "/img/clients/1.jpg",
                                                                        alt: ""
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    className: "author-name custom-font",
                                                                    children: "Sarah Tanveer"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "author-details",
                                                                    children: "Freelancer"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: '"AEON Marketing\'s agents exceeded my expectations, understanding my needs, curating ideal options, providing valuable insights, and ensuring a seamless, gratifying home-buying journey."'
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "info",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "cont",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "author",
                                                        children: this.props.subBgLftstl ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "img",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "/img/clients/1.jpg",
                                                                        alt: ""
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    className: "author-name custom-font",
                                                                    children: "Muhammad Tayyab"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "author-details",
                                                                    children: "Stock Broker"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: '"AEON Marketing stands out with its commitment, innovation, and market insights. Their proactive approach creates successful opportunities for investors and homebuyers."'
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "info",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "cont",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "author",
                                                        children: this.props.subBgLftstl ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "img",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "/img/clients/1.jpg",
                                                                        alt: ""
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    className: "author-name custom-font",
                                                                    children: "Abdul Wasay"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "author-details",
                                                                    children: "Brand Ambassador - BT"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    this.renderArrows()
                ]
            })
        });
    }
}
/* harmony default export */ const testimonials = (Testimonials);


/***/ })

};
;
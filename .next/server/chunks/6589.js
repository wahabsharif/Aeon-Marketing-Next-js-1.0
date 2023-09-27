"use strict";
exports.id = 6589;
exports.ids = [6589];
exports.modules = {

/***/ 6589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ our_team)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./src/data/home/our-team.json
const our_team_namespaceObject = JSON.parse('[{"id":1,"image":"/img/muhammad-usman.webp","name":"Muhammad Usman","title":"Dirctor Sales"},{"id":2,"image":"/img/malik-noman-ahmad.webp","name":"Malik Noman Ahmed","title":"Marketing Manger"},{"id":3,"image":"/img/talha-chishti.webp","name":"Talha chishti","title":"Manger Opreation"},{"id":4,"image":"/img/muhammad-usman.webp","name":"Muhammad Usman","title":"Dirctor Sales"},{"id":5,"image":"/img/malik-noman-ahmad.webp","name":"Malik Noman Ahmed","title":"Marketing Manger"},{"id":6,"image":"/img/talha-chishti.webp","name":"Talha chishti","title":"Manger Opreation"}]');
;// CONCATENATED MODULE: ./src/pages/home/our-team.jsx
/* eslint-disable @next/next/no-img-element */ 





class OurTeam extends (external_react_default()).Component {
    constructor(props){
        super(props);
    }
    renderArrows = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "navs mt-30 wow fadeInUp",
            "data-wow-delay": ".3s",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "prev cursor-pointer",
                    onClick: ()=>this.slider.slickPrev(),
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fas fa-chevron-left"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "next cursor-pointer",
                    onClick: ()=>this.slider.slickNext(),
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fas fa-chevron-right"
                    })
                })
            ]
        });
    };
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "team section-padding",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 valign",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "full-width",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "sec-head custom-font mb-0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                children: "Our Veteran"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Sales Gurus."
                                            })
                                        ]
                                    }),
                                    this.renderArrows()
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-8",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                                className: "team-container",
                                ref: (c)=>this.slider = c,
                                dots: false,
                                infinite: true,
                                arrows: true,
                                autoplay: true,
                                slidesToScroll: 1,
                                slidesToShow: 4,
                                responsive: [
                                    {
                                        breakpoint: 1024,
                                        settings: {
                                            slidesToShow: 4
                                        }
                                    },
                                    {
                                        breakpoint: 767,
                                        settings: {
                                            slidesToShow: 2
                                        }
                                    },
                                    {
                                        breakpoint: 480,
                                        settings: {
                                            slidesToShow: 2
                                        }
                                    }, 
                                ],
                                children: our_team_namespaceObject.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item wow fadeInUp",
                                        "data-wow-delay": ".3s",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "img wow imago",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: item.image,
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "info",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        children: item.name
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: item.title
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "social",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#0",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fab fa-facebook-f"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#0",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fab fa-twitter"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#0",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fab fa-behance"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#0",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fab fa-linkedin-in"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }, item.id))
                            })
                        })
                    ]
                })
            })
        });
    }
}
/* harmony default export */ const our_team = (OurTeam);


/***/ })

};
;
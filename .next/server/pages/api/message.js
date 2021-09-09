"use strict";
(() => {
var exports = {};
exports.id = 439;
exports.ids = [439];
exports.modules = {

/***/ 703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ Message)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(619);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const message = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
  note: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});
const Message = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Message) || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Message", message);

/***/ }),

/***/ 183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(619);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);


const connectDB = handler => async (req, res) => {
  if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {
    // Use current db connection
    return handler(req, res);
  } // Use new db connection


  await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI || "mongodb://localhost/my-messa");
  return handler(req, res);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);

/***/ }),

/***/ 706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_mongo_mesage_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _middleware_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(183);



async function handler(req, res) {
  switch (req.method) {
    case "GET":
      const url = req;
      console.log(url); //   const message = new Message();
      //   await message.findOne({url: req.query.url[2]});

      break;

    case "POST":
      let r = (Math.random() + 1).toString(36).substring(7);
      const {
        note
      } = JSON.parse(req.body);
      console.log(note);
      const notes = new _lib_mongo_mesage_schema__WEBPACK_IMPORTED_MODULE_0__/* .Message */ .v({
        note: note,
        url: r
      });
      await notes.save();
      res.status(200).json({
        Message: "Success",
        url: `${process.env.DOMAIN}/message/${r}`
      });
      break;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middleware_mongodb__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(handler));

/***/ }),

/***/ 619:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(706));
module.exports = __webpack_exports__;

})();
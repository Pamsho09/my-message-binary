"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/message/[url]";
exports.ids = ["pages/api/message/[url]"];
exports.modules = {

/***/ "./src/lib/mongo/mesage.schema.ts":
/*!****************************************!*\
  !*** ./src/lib/mongo/mesage.schema.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Message\": () => (/* binding */ Message)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst message = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  note: {\n    type: String,\n    required: true\n  },\n  url: {\n    type: String,\n    required: true\n  }\n});\nconst Message = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Message) || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Message\", message);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL21vbmdvL21lc2FnZS5zY2hlbWEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFPQSxNQUFNRyxPQUFlLEdBQUcsSUFBSUYsNENBQUosQ0FBVztBQUNqQ0csRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLElBQUksRUFBRUMsTUFERjtBQUVKQyxJQUFBQSxRQUFRLEVBQUU7QUFGTixHQUQyQjtBQUtqQ0MsRUFBQUEsR0FBRyxFQUFFO0FBQ0hILElBQUFBLElBQUksRUFBRUMsTUFESDtBQUVIQyxJQUFBQSxRQUFRLEVBQUU7QUFGUDtBQUw0QixDQUFYLENBQXhCO0FBWU8sTUFBTUUsT0FBd0IsR0FBR1QsZ0VBQUEsSUFBMkJFLCtDQUFLLENBQUMsU0FBRCxFQUFZQyxPQUFaLENBQWpFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbWVzc2FnZS1iaW5hcnkvLi9zcmMvbGliL21vbmdvL21lc2FnZS5zY2hlbWEudHM/YmU4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgRG9jdW1lbnQsIFNjaGVtYSxNb2RlbCwgbW9kZWwgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJTWVzc2FnZSBleHRlbmRzIERvY3VtZW50IHtcbiAgbm90ZTogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbn1cblxuY29uc3QgbWVzc2FnZTogU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIG5vdGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIHVybDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbn0pO1xuXG5cbmV4cG9ydCBjb25zdCBNZXNzYWdlOiBNb2RlbDxJTWVzc2FnZT4gPSBtb25nb29zZS5tb2RlbHMuTWVzc2FnZSB8fCBtb2RlbChcIk1lc3NhZ2VcIiwgbWVzc2FnZSlcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsIm1vZGVsIiwibWVzc2FnZSIsIm5vdGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1cmwiLCJNZXNzYWdlIiwibW9kZWxzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/mongo/mesage.schema.ts\n");

/***/ }),

/***/ "./src/middleware/mongodb.ts":
/*!***********************************!*\
  !*** ./src/middleware/mongodb.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst connectDB = handler => async (req, res) => {\n  if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n    // Use current db connection\n    return handler(req, res);\n  } // Use new db connection\n\n\n  await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI || \"mongodb://localhost/my-messa\");\n  return handler(req, res);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWlkZGxld2FyZS9tb25nb2RiLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLE1BQU1DLFNBQVMsR0FBSUMsT0FBRCxJQUFpQixPQUFPQyxHQUFQLEVBQWdCQyxHQUFoQixLQUE0QjtBQUM3RCxNQUFJSiwyRUFBSixFQUF3QztBQUN0QztBQUNBLFdBQU9FLE9BQU8sQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLENBQWQ7QUFDRCxHQUo0RCxDQUs3RDs7O0FBQ0EsUUFBTUosdURBQUEsQ0FBbUJRLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxTQUFaLElBQXlCLDhCQUE1QyxDQUFOO0FBQ0EsU0FBT1IsT0FBTyxDQUFDQyxHQUFELEVBQU1DLEdBQU4sQ0FBZDtBQUNELENBUkQ7O0FBVUEsaUVBQWVILFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1tZXNzYWdlLWJpbmFyeS8uL3NyYy9taWRkbGV3YXJlL21vbmdvZGIudHM/ZDZmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IGNvbm5lY3REQiA9IChoYW5kbGVyOmFueSkgPT4gYXN5bmMgKHJlcTphbnksIHJlczphbnkpID0+IHtcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpIHtcbiAgICAvLyBVc2UgY3VycmVudCBkYiBjb25uZWN0aW9uXG4gICAgcmV0dXJuIGhhbmRsZXIocmVxLCByZXMpO1xuICB9XG4gIC8vIFVzZSBuZXcgZGIgY29ubmVjdGlvblxuICBhd2FpdCBtb25nb29zZS5jb25uZWN0KCAocHJvY2Vzcy5lbnYuTU9OR09fVVJJIHx8IFwibW9uZ29kYjovL2xvY2FsaG9zdC9teS1tZXNzYVwiKSk7XG4gIHJldHVybiBoYW5kbGVyKHJlcSwgcmVzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQjtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3REQiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSSSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/middleware/mongodb.ts\n");

/***/ }),

/***/ "./src/pages/api/message/[url].ts":
/*!****************************************!*\
  !*** ./src/pages/api/message/[url].ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_mongo_mesage_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/mongo/mesage.schema */ \"./src/lib/mongo/mesage.schema.ts\");\n/* harmony import */ var _middleware_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../middleware/mongodb */ \"./src/middleware/mongodb.ts\");\n\n\n\n\nasync function handler(req, res) {\n  await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI || \"mongodb://localhost/my-messa\");\n\n  function text2Binary(string) {\n    return string.split(\" \").map(item => ({\n      binary: item.split(\"\").map(char => char.charCodeAt(0).toString(2)).join(\" \"),\n      word: item\n    }));\n  }\n\n  switch (req.method) {\n    case \"GET\":\n      const {\n        url\n      } = req.query;\n      console.log(url);\n      const message = (await _lib_mongo_mesage_schema__WEBPACK_IMPORTED_MODULE_1__.Message.findOne({\n        url\n      })) || null;\n      console.log(message);\n      message ? res.status(200).json({\n        data: text2Binary(message.note || \"\")\n      }) : res.status(404).json({\n        message: \"Not found\"\n      });\n      break;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middleware_mongodb__WEBPACK_IMPORTED_MODULE_2__.default)(handler));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL21lc3NhZ2UvW3VybF0udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZUcsT0FBZixDQUF1QkMsR0FBdkIsRUFBaUNDLEdBQWpDLEVBQTJDO0FBQ3pDLFFBQU1MLHVEQUFBLENBQ0pPLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxTQUFaLElBQXlCLDhCQURyQixDQUFOOztBQUdBLFdBQVNDLFdBQVQsQ0FBcUJDLE1BQXJCLEVBQXFDO0FBQ25DLFdBQU9BLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhLEdBQWIsRUFBa0JDLEdBQWxCLENBQXVCQyxJQUFELEtBQVc7QUFDdENDLE1BQUFBLE1BQU0sRUFBRUQsSUFBSSxDQUNURixLQURLLENBQ0MsRUFERCxFQUVMQyxHQUZLLENBRUFHLElBQUQsSUFBVUEsSUFBSSxDQUFDQyxVQUFMLENBQWdCLENBQWhCLEVBQW1CQyxRQUFuQixDQUE0QixDQUE1QixDQUZULEVBR0xDLElBSEssQ0FHQSxHQUhBLENBRDhCO0FBS3RDQyxNQUFBQSxJQUFJLEVBQUVOO0FBTGdDLEtBQVgsQ0FBdEIsQ0FBUDtBQU9EOztBQUNELFVBQVFWLEdBQUcsQ0FBQ2lCLE1BQVo7QUFDRSxTQUFLLEtBQUw7QUFDRSxZQUFNO0FBQUVDLFFBQUFBO0FBQUYsVUFBVWxCLEdBQUcsQ0FBQ21CLEtBQXBCO0FBQ0FDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFaO0FBQ0EsWUFBTUksT0FBTyxHQUFHLE9BQU16QixxRUFBQSxDQUFnQjtBQUFFcUIsUUFBQUE7QUFBRixPQUFoQixDQUFOLEtBQWtDLElBQWxEO0FBQ0FFLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFaO0FBQ0FBLE1BQUFBLE9BQU8sR0FDSHJCLEdBQUcsQ0FBQ3VCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxRQUFBQSxJQUFJLEVBQUVwQixXQUFXLENBQUNnQixPQUFPLENBQUNLLElBQVIsSUFBYyxFQUFmO0FBQW5CLE9BQXJCLENBREcsR0FFSDFCLEdBQUcsQ0FBQ3VCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFSCxRQUFBQSxPQUFPLEVBQUU7QUFBWCxPQUFyQixDQUZKO0FBR0E7QUFUSjtBQVdEOztBQUNELGlFQUFleEIsNERBQVMsQ0FBQ0MsT0FBRCxDQUF4QiIsInNvdXJjZXMiOlsid2VicGFjazovL215LW1lc3NhZ2UtYmluYXJ5Ly4vc3JjL3BhZ2VzL2FwaS9tZXNzYWdlL1t1cmxdLnRzP2U5NDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IHsgTWVzc2FnZX0gZnJvbSBcIi4uLy4uLy4uL2xpYi9tb25nby9tZXNhZ2Uuc2NoZW1hXCI7XG5pbXBvcnQgY29ubmVjdERCIGZyb20gXCIuLi8uLi8uLi9taWRkbGV3YXJlL21vbmdvZGJcIjtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IGFueSwgcmVzOiBhbnkpIHtcbiAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChcbiAgICBwcm9jZXNzLmVudi5NT05HT19VUkkgfHwgXCJtb25nb2RiOi8vbG9jYWxob3N0L215LW1lc3NhXCJcbiAgKTtcbiAgZnVuY3Rpb24gdGV4dDJCaW5hcnkoc3RyaW5nOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnNwbGl0KFwiIFwiKS5tYXAoKGl0ZW0pID0+ICh7XG4gICAgICBiaW5hcnk6IGl0ZW1cbiAgICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAgIC5tYXAoKGNoYXIpID0+IGNoYXIuY2hhckNvZGVBdCgwKS50b1N0cmluZygyKSlcbiAgICAgICAgLmpvaW4oXCIgXCIpLFxuICAgICAgd29yZDogaXRlbSxcbiAgICB9KSk7XG4gIH1cbiAgc3dpdGNoIChyZXEubWV0aG9kKSB7XG4gICAgY2FzZSBcIkdFVFwiOlxuICAgICAgY29uc3QgeyB1cmwgfSA9IHJlcS5xdWVyeTtcbiAgICAgIGNvbnNvbGUubG9nKHVybCk7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgTWVzc2FnZS5maW5kT25lKHsgdXJsIH0pIHx8IG51bGw7XG4gICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgIG1lc3NhZ2VcbiAgICAgICAgPyByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IHRleHQyQmluYXJ5KG1lc3NhZ2Uubm90ZXx8XCJcIikgfSlcbiAgICAgICAgOiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6IFwiTm90IGZvdW5kXCIgfSk7XG4gICAgICBicmVhaztcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCKGhhbmRsZXIpO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTWVzc2FnZSIsImNvbm5lY3REQiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSSSIsInRleHQyQmluYXJ5Iiwic3RyaW5nIiwic3BsaXQiLCJtYXAiLCJpdGVtIiwiYmluYXJ5IiwiY2hhciIsImNoYXJDb2RlQXQiLCJ0b1N0cmluZyIsImpvaW4iLCJ3b3JkIiwibWV0aG9kIiwidXJsIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImZpbmRPbmUiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsIm5vdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/message/[url].ts\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/message/[url].ts"));
module.exports = __webpack_exports__;

})();
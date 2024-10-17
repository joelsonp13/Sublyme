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
exports.id = "pages/api/create-pix";
exports.ids = ["pages/api/create-pix"];
exports.modules = {

/***/ "mercadopago":
/*!******************************!*\
  !*** external "mercadopago" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("mercadopago");

/***/ }),

/***/ "(api)/./pages/api/create-pix.js":
/*!*********************************!*\
  !*** ./pages/api/create-pix.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_mercadopago__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/mercadopago */ \"(api)/./utils/mercadopago.js\");\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const { transaction_amount , description , payer_email  } = req.body;\n            const payment_data = {\n                transaction_amount: Number(transaction_amount),\n                description: description,\n                payment_method_id: \"pix\",\n                payer: {\n                    email: payer_email\n                }\n            };\n            const payment = await _utils_mercadopago__WEBPACK_IMPORTED_MODULE_0__[\"default\"].payment.create(payment_data);\n            const qr_code = payment.body.point_of_interaction.transaction_data.qr_code;\n            const qr_code_base64 = payment.body.point_of_interaction.transaction_data.qr_code_base64;\n            res.status(200).json({\n                id: payment.body.id,\n                qr_code: qr_code,\n                qr_code_base64: qr_code_base64\n            });\n        } catch (error) {\n            console.error(error);\n            res.status(500).json({\n                error: \"Erro ao criar o pagamento PIX\"\n            });\n        }\n    } else {\n        res.setHeader(\"Allow\", \"POST\");\n        res.status(405).end(\"M\\xe9todo n\\xe3o permitido\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlLXBpeC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFrRDtBQUVuQyxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixJQUFJO1lBQ0YsTUFBTSxFQUFFQyxrQkFBa0IsR0FBRUMsV0FBVyxHQUFFQyxXQUFXLEdBQUUsR0FBR0wsR0FBRyxDQUFDTSxJQUFJO1lBRWpFLE1BQU1DLFlBQVksR0FBRztnQkFDbkJKLGtCQUFrQixFQUFFSyxNQUFNLENBQUNMLGtCQUFrQixDQUFDO2dCQUM5Q0MsV0FBVyxFQUFFQSxXQUFXO2dCQUN4QkssaUJBQWlCLEVBQUUsS0FBSztnQkFDeEJDLEtBQUssRUFBRTtvQkFDTEMsS0FBSyxFQUFFTixXQUFXO2lCQUNuQjthQUNGO1lBRUQsTUFBTU8sT0FBTyxHQUFHLE1BQU1kLHlFQUEwQixDQUFDUyxZQUFZLENBQUM7WUFFOUQsTUFBTU8sT0FBTyxHQUFHRixPQUFPLENBQUNOLElBQUksQ0FBQ1Msb0JBQW9CLENBQUNDLGdCQUFnQixDQUFDRixPQUFPO1lBQzFFLE1BQU1HLGNBQWMsR0FBR0wsT0FBTyxDQUFDTixJQUFJLENBQUNTLG9CQUFvQixDQUFDQyxnQkFBZ0IsQ0FBQ0MsY0FBYztZQUV4RmhCLEdBQUcsQ0FBQ2lCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUNuQkMsRUFBRSxFQUFFUixPQUFPLENBQUNOLElBQUksQ0FBQ2MsRUFBRTtnQkFDbkJOLE9BQU8sRUFBRUEsT0FBTztnQkFDaEJHLGNBQWMsRUFBRUEsY0FBYzthQUMvQixDQUFDLENBQUM7UUFDTCxFQUFFLE9BQU9JLEtBQUssRUFBRTtZQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQ0EsS0FBSyxDQUFDLENBQUM7WUFDckJwQixHQUFHLENBQUNpQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUUsS0FBSyxFQUFFLCtCQUErQjthQUFFLENBQUMsQ0FBQztRQUNuRSxDQUFDO0lBQ0gsT0FBTztRQUNMcEIsR0FBRyxDQUFDc0IsU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvQnRCLEdBQUcsQ0FBQ2lCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ00sR0FBRyxDQUFDLDRCQUFzQixDQUFDLENBQUM7SUFDOUMsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waXgtZGluYW1pY28tbWVyY2Fkb3BhZ28vLi9wYWdlcy9hcGkvY3JlYXRlLXBpeC5qcz84YjdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZXJjYWRvcGFnbyBmcm9tICcuLi8uLi91dGlscy9tZXJjYWRvcGFnbyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyB0cmFuc2FjdGlvbl9hbW91bnQsIGRlc2NyaXB0aW9uLCBwYXllcl9lbWFpbCB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgICBjb25zdCBwYXltZW50X2RhdGEgPSB7XHJcbiAgICAgICAgdHJhbnNhY3Rpb25fYW1vdW50OiBOdW1iZXIodHJhbnNhY3Rpb25fYW1vdW50KSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXHJcbiAgICAgICAgcGF5bWVudF9tZXRob2RfaWQ6ICdwaXgnLFxyXG4gICAgICAgIHBheWVyOiB7XHJcbiAgICAgICAgICBlbWFpbDogcGF5ZXJfZW1haWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHBheW1lbnQgPSBhd2FpdCBtZXJjYWRvcGFnby5wYXltZW50LmNyZWF0ZShwYXltZW50X2RhdGEpO1xyXG4gICAgICBcclxuICAgICAgY29uc3QgcXJfY29kZSA9IHBheW1lbnQuYm9keS5wb2ludF9vZl9pbnRlcmFjdGlvbi50cmFuc2FjdGlvbl9kYXRhLnFyX2NvZGU7XHJcbiAgICAgIGNvbnN0IHFyX2NvZGVfYmFzZTY0ID0gcGF5bWVudC5ib2R5LnBvaW50X29mX2ludGVyYWN0aW9uLnRyYW5zYWN0aW9uX2RhdGEucXJfY29kZV9iYXNlNjQ7XHJcblxyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgaWQ6IHBheW1lbnQuYm9keS5pZCxcclxuICAgICAgICBxcl9jb2RlOiBxcl9jb2RlLFxyXG4gICAgICAgIHFyX2NvZGVfYmFzZTY0OiBxcl9jb2RlX2Jhc2U2NCxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0Vycm8gYW8gY3JpYXIgbyBwYWdhbWVudG8gUElYJyB9KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCAnUE9TVCcpO1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgnTcOpdG9kbyBuw6NvIHBlcm1pdGlkbycpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsibWVyY2Fkb3BhZ28iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwidHJhbnNhY3Rpb25fYW1vdW50IiwiZGVzY3JpcHRpb24iLCJwYXllcl9lbWFpbCIsImJvZHkiLCJwYXltZW50X2RhdGEiLCJOdW1iZXIiLCJwYXltZW50X21ldGhvZF9pZCIsInBheWVyIiwiZW1haWwiLCJwYXltZW50IiwiY3JlYXRlIiwicXJfY29kZSIsInBvaW50X29mX2ludGVyYWN0aW9uIiwidHJhbnNhY3Rpb25fZGF0YSIsInFyX2NvZGVfYmFzZTY0Iiwic3RhdHVzIiwianNvbiIsImlkIiwiZXJyb3IiLCJjb25zb2xlIiwic2V0SGVhZGVyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/create-pix.js\n");

/***/ }),

/***/ "(api)/./utils/mercadopago.js":
/*!******************************!*\
  !*** ./utils/mercadopago.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mercadopago__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mercadopago */ \"mercadopago\");\n/* harmony import */ var mercadopago__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mercadopago__WEBPACK_IMPORTED_MODULE_0__);\n\nmercadopago__WEBPACK_IMPORTED_MODULE_0___default().configure({\n    access_token: process.env.MERCADO_PAGO_ACCESS_TOKEN\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mercadopago__WEBPACK_IMPORTED_MODULE_0___default()));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9tZXJjYWRvcGFnby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdENBLDREQUFxQixDQUFDO0lBQ3BCRSxZQUFZLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyx5QkFBeUI7Q0FDcEQsQ0FBQyxDQUFDO0FBRUgsaUVBQWVMLG9EQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waXgtZGluYW1pY28tbWVyY2Fkb3BhZ28vLi91dGlscy9tZXJjYWRvcGFnby5qcz83ZDA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZXJjYWRvcGFnbyBmcm9tICdtZXJjYWRvcGFnbyc7XHJcblxyXG5tZXJjYWRvcGFnby5jb25maWd1cmUoe1xyXG4gIGFjY2Vzc190b2tlbjogcHJvY2Vzcy5lbnYuTUVSQ0FET19QQUdPX0FDQ0VTU19UT0tFTixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZXJjYWRvcGFnbztcclxuIl0sIm5hbWVzIjpbIm1lcmNhZG9wYWdvIiwiY29uZmlndXJlIiwiYWNjZXNzX3Rva2VuIiwicHJvY2VzcyIsImVudiIsIk1FUkNBRE9fUEFHT19BQ0NFU1NfVE9LRU4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/mercadopago.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/create-pix.js"));
module.exports = __webpack_exports__;

})();
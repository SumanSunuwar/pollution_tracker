"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/pollution/page",{

/***/ "(app-pages-browser)/./app/(dashboard)/pollution/page.tsx":
/*!********************************************!*\
  !*** ./app/(dashboard)/pollution/page.tsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PollutionHistoryPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Grid,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Grid,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Grid,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Grid,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Grid,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ \"(app-pages-browser)/./node_modules/file-saver/dist/FileSaver.min.js\");\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// Register chart.js components\nchart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.Title, chart_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_3__.Legend);\nfunction PollutionHistoryPage() {\n    _s();\n    const [historicalPollution, setHistoricalPollution] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('2024-11-18');\n    const [endDate, setEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('2024-11-28');\n    const [limit, setLimit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);\n    // Fetch historical pollution data with the given parameters\n    const fetchHistoricalPollution = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get('http://127.0.0.1:8000/api/v1/historical_pollution_data', {\n            params: {\n                start_date: startDate,\n                end_date: endDate,\n                limit: limit\n            }\n        }).then((response)=>{\n            setHistoricalPollution(response.data.historical_data);\n        }).catch((error)=>{\n            console.error('Error fetching historical pollution:', error);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"PollutionHistoryPage.useEffect\": ()=>{\n            fetchHistoricalPollution();\n        }\n    }[\"PollutionHistoryPage.useEffect\"], [\n        startDate,\n        endDate,\n        limit\n    ]);\n    // Prepare data for the Line chart\n    const chartData = {\n        labels: historicalPollution.map((record)=>record.date),\n        datasets: [\n            {\n                label: 'Air Quality Index',\n                data: historicalPollution.map((record)=>record.air_quality_index),\n                borderColor: 'rgba(75, 192, 192, 1)',\n                backgroundColor: 'rgba(75, 192, 192, 0.2)',\n                fill: false,\n                tension: 0.1\n            },\n            {\n                label: 'Water Quality Index',\n                data: historicalPollution.map((record)=>record.water_quality_index),\n                borderColor: 'rgba(153, 102, 255, 1)',\n                backgroundColor: 'rgba(153, 102, 255, 0.2)',\n                fill: false,\n                tension: 0.1\n            },\n            {\n                label: 'Temperature (°C)',\n                data: historicalPollution.map((record)=>record.temperature),\n                borderColor: 'rgba(255, 159, 64, 1)',\n                backgroundColor: 'rgba(255, 159, 64, 0.2)',\n                fill: false,\n                tension: 0.1\n            }\n        ]\n    };\n    // Export data as CSV\n    const exportAsCSV = ()=>{\n        const csvData = [\n            [\n                'Date',\n                'Air Quality Index',\n                'Water Quality Index',\n                'Temperature (°C)'\n            ],\n            ...historicalPollution.map((data)=>[\n                    data.date,\n                    data.air_quality_index,\n                    data.water_quality_index,\n                    data.temperature\n                ])\n        ];\n        const csvContent = csvData.map((row)=>row.join(',')).join('\\n');\n        const blob = new Blob([\n            csvContent\n        ], {\n            type: 'text/csv;charset=utf-8;'\n        });\n        (0,file_saver__WEBPACK_IMPORTED_MODULE_2__.saveAs)(blob, 'historical_pollution_data.csv');\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        padding: 3,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                variant: \"h4\",\n                gutterBottom: true,\n                children: \"Historical Pollution Data (Line Chart)\"\n            }, void 0, false, {\n                fileName: \"/Users/suman/Documents/alaya_pollution_tracker/frontend-toolpad/app/(dashboard)/pollution/page.tsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                container: true,\n                spacing: 2,\n                marginBottom: 3,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        item: true,\n                        xs: 3,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            label: \"Start Date\",\n                            type: \"date\",\n                            value: startDate,\n                            onChange: (e)=>setStartDate(e.target.value),\n                            fullWidth: true,\n                            InputLabelProps: {\n                                shrink: true\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/suman/Documents/alaya_pollution_tracker/frontend-toolpad/app/(dashboard)/pollution/page.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/suman/Documents/alaya_pollution_tracker/frontend-toolpad/app/(dashboard)/pollution/page.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        item: true,\n                        xs: 3,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            label: \"End Date\",\n                            type: \"date\",\n                            value: endDate,\n                            onChange: (e)=>setEndDate(e.target.value),\n                            fullWidth: true,\n                            InputLabelProps: {\n                                shrink: true\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/suman/Documents/alaya_pollution_tracker/frontend-toolpad/app/(dashboard)/pollution/page.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/suman/Documents/alaya_pollution_tracker/frontend-toolpad/app/(dashboard)/pollution/page.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        item: true,\n                        xs: 2,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            label: \"Limit\",\n                            type: \"number\",\n                            value: limit,\n                            onChange: (e)=>setLimit(Number(e.target.value)),\n                            fullWidth: true,\n                            InputProps: {\n                                inputProps: {\n                                    min: 1,\n                                    max: 100\n                                }\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/suman/Documents/alaya_pollution_tracker/frontend-toolpad/app/(dashboard)/pollution/page.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/suman/Documents/alaya_pollution_tracker/frontend-toolpad/app/(dashboard)/pollution/page.tsx\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        item: true,\n                        xs: 2,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            variant: \"contained\",\n                            color: \"primary\",\n                            onClick: fetchHistoricalPollution,\n                            children: \"Apply Filters\"\n                        }, void 0, false, {\n                            fileName: \"/Users/suman/Documents/alaya_pollution_tracker/frontend-toolpad/app/(dashboard)/pollution/page.tsx\",\n                            lineNumber: 141,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/suman/Documents/alaya_pollution_tracker/frontend-toolpad/app/(dashboard)/pollution/page.tsx\",\n                        lineNumber: 140,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        item: true,\n                        xs: 2,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            variant: \"contained\",\n                            color: \"secondary\",\n                            onClick: exportAsCSV,\n                            children: \"Export as CSV\"\n                        }, void 0, false, {\n                            fileName: \"/Users/suman/Documents/alaya_pollution_tracker/frontend-toolpad/app/(dashboard)/pollution/page.tsx\",\n                            lineNumber: 146,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/suman/Documents/alaya_pollution_tracker/frontend-toolpad/app/(dashboard)/pollution/page.tsx\",\n                        lineNumber: 145,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/suman/Documents/alaya_pollution_tracker/frontend-toolpad/app/(dashboard)/pollution/page.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this),\n            historicalPollution.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__.Line, {\n                data: chartData,\n                options: {\n                    responsive: true,\n                    plugins: {\n                        title: {\n                            display: true,\n                            text: 'Historical Pollution Data'\n                        }\n                    }\n                }\n            }, void 0, false, {\n                fileName: \"/Users/suman/Documents/alaya_pollution_tracker/frontend-toolpad/app/(dashboard)/pollution/page.tsx\",\n                lineNumber: 154,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                children: \"Loading historical pollution data...\"\n            }, void 0, false, {\n                fileName: \"/Users/suman/Documents/alaya_pollution_tracker/frontend-toolpad/app/(dashboard)/pollution/page.tsx\",\n                lineNumber: 156,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/suman/Documents/alaya_pollution_tracker/frontend-toolpad/app/(dashboard)/pollution/page.tsx\",\n        lineNumber: 103,\n        columnNumber: 5\n    }, this);\n}\n_s(PollutionHistoryPage, \"pYiwWC5izgnxxLpA02vM/IytMDo=\");\n_c = PollutionHistoryPage;\nvar _c;\n$RefreshReg$(_c, \"PollutionHistoryPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oZGFzaGJvYXJkKS9wb2xsdXRpb24vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUrQjtBQUNhO0FBQzZCO0FBQy9DO0FBQ2E7QUFDb0Y7QUFDdkY7QUFFcEMsK0JBQStCO0FBQy9CVywyQ0FBT0EsQ0FBQ1MsUUFBUSxDQUFDUixtREFBYUEsRUFBRUMsaURBQVdBLEVBQUVDLGtEQUFZQSxFQUFFQyxpREFBV0EsRUFBRUMsMkNBQUtBLEVBQUVDLDZDQUFPQSxFQUFFQyw0Q0FBTUE7QUFlL0UsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MscUJBQXFCQyx1QkFBdUIsR0FBR3JCLCtDQUFRQSxDQUE0QixFQUFFO0lBQzVGLE1BQU0sQ0FBQ3NCLFdBQVdDLGFBQWEsR0FBR3ZCLCtDQUFRQSxDQUFTO0lBQ25ELE1BQU0sQ0FBQ3dCLFNBQVNDLFdBQVcsR0FBR3pCLCtDQUFRQSxDQUFTO0lBQy9DLE1BQU0sQ0FBQzBCLE9BQU9DLFNBQVMsR0FBRzNCLCtDQUFRQSxDQUFTO0lBRTNDLDREQUE0RDtJQUM1RCxNQUFNNEIsMkJBQTJCO1FBQy9CdEIsNkNBQUtBLENBQ0Z1QixHQUFHLENBQThCLDBEQUEwRDtZQUMxRkMsUUFBUTtnQkFBRUMsWUFBWVQ7Z0JBQVdVLFVBQVVSO2dCQUFTRSxPQUFPQTtZQUFNO1FBQ25FLEdBQ0NPLElBQUksQ0FBQyxDQUFDQztZQUNMYix1QkFBdUJhLFNBQVNDLElBQUksQ0FBQ0MsZUFBZTtRQUN0RCxHQUNDQyxLQUFLLENBQUMsQ0FBQ0M7WUFDTkMsUUFBUUQsS0FBSyxDQUFDLHdDQUF3Q0E7UUFDeEQ7SUFDSjtJQUVBdkMsZ0RBQVNBOzBDQUFDO1lBQ1I2QjtRQUNGO3lDQUFHO1FBQUNOO1FBQVdFO1FBQVNFO0tBQU07SUFFOUIsa0NBQWtDO0lBQ2xDLE1BQU1jLFlBQVk7UUFDaEJDLFFBQVFyQixvQkFBb0JzQixHQUFHLENBQUMsQ0FBQ0MsU0FBV0EsT0FBT0MsSUFB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STt3QkFBQ0MsSUFBSTtrQ0FDYiw0RUFBQ2xFLGdIQUFNQTs0QkFBQzRELFNBQVE7NEJBQVltQixPQUFNOzRCQUFZQyxTQUFTN0I7c0NBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT3ZFbEMsb0JBQW9CZ0UsTUFBTSxHQUFHLGtCQUM1Qiw4REFBQzdFLGtEQUFJQTtnQkFBQzRCLE1BQU1LO2dCQUFXNkMsU0FBUztvQkFBRUMsWUFBWTtvQkFBTUMsU0FBUzt3QkFBRUMsT0FBTzs0QkFBRUMsU0FBUzs0QkFBTUMsTUFBTTt3QkFBNEI7b0JBQUU7Z0JBQUU7Ozs7O3FDQUU3SCw4REFBQ3hGLGdIQUFVQTswQkFBQzs7Ozs7Ozs7Ozs7O0FBSXBCO0dBckl3QmlCO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMvc3VtYW4vRG9jdW1lbnRzL2FsYXlhX3BvbGx1dGlvbl90cmFja2VyL2Zyb250ZW5kLXRvb2xwYWQvYXBwLyhkYXNoYm9hcmQpL3BvbGx1dGlvbi9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIFR5cG9ncmFwaHksIEJ1dHRvbiwgVGV4dEZpZWxkLCBHcmlkIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgTGluZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XG5pbXBvcnQgeyBDaGFydCBhcyBDaGFydEpTLCBDYXRlZ29yeVNjYWxlLCBMaW5lYXJTY2FsZSwgUG9pbnRFbGVtZW50LCBMaW5lRWxlbWVudCwgVGl0bGUsIFRvb2x0aXAsIExlZ2VuZCB9IGZyb20gJ2NoYXJ0LmpzJztcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xuXG4vLyBSZWdpc3RlciBjaGFydC5qcyBjb21wb25lbnRzXG5DaGFydEpTLnJlZ2lzdGVyKENhdGVnb3J5U2NhbGUsIExpbmVhclNjYWxlLCBQb2ludEVsZW1lbnQsIExpbmVFbGVtZW50LCBUaXRsZSwgVG9vbHRpcCwgTGVnZW5kKTtcblxuLy8gRGVmaW5lIGludGVyZmFjZXMgZm9yIHR5cGUgc2FmZXR5XG5pbnRlcmZhY2UgSGlzdG9yaWNhbFBvbGx1dGlvbkRhdGEge1xuICBkYXRlOiBzdHJpbmc7XG4gIGFpcl9xdWFsaXR5X2luZGV4OiBudW1iZXI7XG4gIHdhdGVyX3F1YWxpdHlfaW5kZXg6IG51bWJlcjtcbiAgdGVtcGVyYXR1cmU6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIEhpc3RvcmljYWxQb2xsdXRpb25SZXNwb25zZSB7XG4gIHRvdGFsX2NvdW50OiBudW1iZXI7XG4gIGhpc3RvcmljYWxfZGF0YTogSGlzdG9yaWNhbFBvbGx1dGlvbkRhdGFbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9sbHV0aW9uSGlzdG9yeVBhZ2UoKSB7XG4gIGNvbnN0IFtoaXN0b3JpY2FsUG9sbHV0aW9uLCBzZXRIaXN0b3JpY2FsUG9sbHV0aW9uXSA9IHVzZVN0YXRlPEhpc3RvcmljYWxQb2xsdXRpb25EYXRhW10+KFtdKTtcbiAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IHVzZVN0YXRlPHN0cmluZz4oJzIwMjQtMTEtMTgnKTtcbiAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGU8c3RyaW5nPignMjAyNC0xMS0yOCcpO1xuICBjb25zdCBbbGltaXQsIHNldExpbWl0XSA9IHVzZVN0YXRlPG51bWJlcj4oMTApO1xuXG4gIC8vIEZldGNoIGhpc3RvcmljYWwgcG9sbHV0aW9uIGRhdGEgd2l0aCB0aGUgZ2l2ZW4gcGFyYW1ldGVyc1xuICBjb25zdCBmZXRjaEhpc3RvcmljYWxQb2xsdXRpb24gPSAoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQ8SGlzdG9yaWNhbFBvbGx1dGlvblJlc3BvbnNlPignaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS92MS9oaXN0b3JpY2FsX3BvbGx1dGlvbl9kYXRhJywge1xuICAgICAgICBwYXJhbXM6IHsgc3RhcnRfZGF0ZTogc3RhcnREYXRlLCBlbmRfZGF0ZTogZW5kRGF0ZSwgbGltaXQ6IGxpbWl0IH0sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHNldEhpc3RvcmljYWxQb2xsdXRpb24ocmVzcG9uc2UuZGF0YS5oaXN0b3JpY2FsX2RhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgaGlzdG9yaWNhbCBwb2xsdXRpb246JywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaEhpc3RvcmljYWxQb2xsdXRpb24oKTtcbiAgfSwgW3N0YXJ0RGF0ZSwgZW5kRGF0ZSwgbGltaXRdKTtcblxuICAvLyBQcmVwYXJlIGRhdGEgZm9yIHRoZSBMaW5lIGNoYXJ0XG4gIGNvbnN0IGNoYXJ0RGF0YSA9IHtcbiAgICBsYWJlbHM6IGhpc3RvcmljYWxQb2xsdXRpb24ubWFwKChyZWNvcmQpID0+IHJlY29yZC5kYXRlKSxcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ0FpciBRdWFsaXR5IEluZGV4JyxcbiAgICAgICAgZGF0YTogaGlzdG9yaWNhbFBvbGx1dGlvbi5tYXAoKHJlY29yZCkgPT4gcmVjb3JkLmFpcl9xdWFsaXR5X2luZGV4KSxcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDc1LCAxOTIsIDE5MiwgMSknLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc1LCAxOTIsIDE5MiwgMC4yKScsXG4gICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICB0ZW5zaW9uOiAwLjEsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ1dhdGVyIFF1YWxpdHkgSW5kZXgnLFxuICAgICAgICBkYXRhOiBoaXN0b3JpY2FsUG9sbHV0aW9uLm1hcCgocmVjb3JkKSA9PiByZWNvcmQud2F0ZXJfcXVhbGl0eV9pbmRleCksXG4gICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgxNTMsIDEwMiwgMjU1LCAxKScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTUzLCAxMDIsIDI1NSwgMC4yKScsXG4gICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICB0ZW5zaW9uOiAwLjEsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ1RlbXBlcmF0dXJlICjCsEMpJyxcbiAgICAgICAgZGF0YTogaGlzdG9yaWNhbFBvbGx1dGlvbi5tYXAoKHJlY29yZCkgPT4gcmVjb3JkLnRlbXBlcmF0dXJlKSxcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwgMTU5LCA2NCwgMSknLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgMTU5LCA2NCwgMC4yKScsXG4gICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICB0ZW5zaW9uOiAwLjEsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgLy8gRXhwb3J0IGRhdGEgYXMgQ1NWXG4gIGNvbnN0IGV4cG9ydEFzQ1NWID0gKCkgPT4ge1xuICAgIGNvbnN0IGNzdkRhdGEgPSBbXG4gICAgICBbJ0RhdGUnLCAnQWlyIFF1YWxpdHkgSW5kZXgnLCAnV2F0ZXIgUXVhbGl0eSBJbmRleCcsICdUZW1wZXJhdHVyZSAowrBDKSddLFxuICAgICAgLi4uaGlzdG9yaWNhbFBvbGx1dGlvbi5tYXAoKGRhdGEpID0+IFtcbiAgICAgICAgZGF0YS5kYXRlLFxuICAgICAgICBkYXRhLmFpcl9xdWFsaXR5X2luZGV4LFxuICAgICAgICBkYXRhLndhdGVyX3F1YWxpdHlfaW5kZXgsXG4gICAgICAgIGRhdGEudGVtcGVyYXR1cmUsXG4gICAgICBdKSxcbiAgICBdO1xuXG4gICAgY29uc3QgY3N2Q29udGVudCA9IGNzdkRhdGFcbiAgICAgIC5tYXAoKHJvdykgPT4gcm93LmpvaW4oJywnKSlcbiAgICAgIC5qb2luKCdcXG4nKTtcblxuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbY3N2Q29udGVudF0sIHsgdHlwZTogJ3RleHQvY3N2O2NoYXJzZXQ9dXRmLTg7JyB9KTtcbiAgICBzYXZlQXMoYmxvYiwgJ2hpc3RvcmljYWxfcG9sbHV0aW9uX2RhdGEuY3N2Jyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IHBhZGRpbmc9ezN9PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICBIaXN0b3JpY2FsIFBvbGx1dGlvbiBEYXRhIChMaW5lIENoYXJ0KVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICB7LyogRmlsdGVycyAqL31cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBtYXJnaW5Cb3R0b209ezN9PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBsYWJlbD1cIlN0YXJ0IERhdGVcIlxuICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3RhcnREYXRlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7IHNocmluazogdHJ1ZSB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgbGFiZWw9XCJFbmQgRGF0ZVwiXG4gICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICB2YWx1ZT17ZW5kRGF0ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW5kRGF0ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17eyBzaHJpbms6IHRydWUgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGxhYmVsPVwiTGltaXRcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YWx1ZT17bGltaXR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExpbWl0KE51bWJlcihlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7IGlucHV0UHJvcHM6IHsgbWluOiAxLCBtYXg6IDEwMCB9IH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtmZXRjaEhpc3RvcmljYWxQb2xsdXRpb259PlxuICAgICAgICAgICAgQXBwbHkgRmlsdGVyc1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17ZXhwb3J0QXNDU1Z9PlxuICAgICAgICAgICAgRXhwb3J0IGFzIENTVlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG5cbiAgICAgIHsvKiBMaW5lIENoYXJ0ICovfVxuICAgICAge2hpc3RvcmljYWxQb2xsdXRpb24ubGVuZ3RoID4gMCA/IChcbiAgICAgICAgPExpbmUgZGF0YT17Y2hhcnREYXRhfSBvcHRpb25zPXt7IHJlc3BvbnNpdmU6IHRydWUsIHBsdWdpbnM6IHsgdGl0bGU6IHsgZGlzcGxheTogdHJ1ZSwgdGV4dDogJ0hpc3RvcmljYWwgUG9sbHV0aW9uIERhdGEnIH0gfSB9fSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPFR5cG9ncmFwaHk+TG9hZGluZyBoaXN0b3JpY2FsIHBvbGx1dGlvbiBkYXRhLi4uPC9UeXBvZ3JhcGh5PlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQm94IiwiVHlwb2dyYXBoeSIsIkJ1dHRvbiIsIlRleHRGaWVsZCIsIkdyaWQiLCJheGlvcyIsIkxpbmUiLCJDaGFydCIsIkNoYXJ0SlMiLCJDYXRlZ29yeVNjYWxlIiwiTGluZWFyU2NhbGUiLCJQb2ludEVsZW1lbnQiLCJMaW5lRWxlbWVudCIsIlRpdGxlIiwiVG9vbHRpcCIsIkxlZ2VuZCIsInNhdmVBcyIsInJlZ2lzdGVyIiwiUG9sbHV0aW9uSGlzdG9yeVBhZ2UiLCJoaXN0b3JpY2FsUG9sbHV0aW9uIiwic2V0SGlzdG9yaWNhbFBvbGx1dGlvbiIsInN0YXJ0RGF0ZSIsInNldFN0YXJ0RGF0ZSIsImVuZERhdGUiLCJzZXRFbmREYXRlIiwibGltaXQiLCJzZXRMaW1pdCIsImZldGNoSGlzdG9yaWNhbFBvbGx1dGlvbiIsImdldCIsInBhcmFtcyIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJoaXN0b3JpY2FsX2RhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImNoYXJ0RGF0YSIsImxhYmVscyIsIm1hcCIsInJlY29yZCIsImRhdGUiLCJkYXRhc2V0cyIsImxhYmVsIiwiYWlyX3F1YWxpdHlfaW5kZXgiLCJib3JkZXJDb2xvciIsImJhY2tncm91bmRDb2xvciIsImZpbGwiLCJ0ZW5zaW9uIiwid2F0ZXJfcXVhbGl0eV9pbmRleCIsInRlbXBlcmF0dXJlIiwiZXhwb3J0QXNDU1YiLCJjc3ZEYXRhIiwiY3N2Q29udGVudCIsInJvdyIsImpvaW4iLCJibG9iIiwiQmxvYiIsInR5cGUiLCJwYWRkaW5nIiwidmFyaWFudCIsImd1dHRlckJvdHRvbSIsImNvbnRhaW5lciIsInNwYWNpbmciLCJtYXJnaW5Cb3R0b20iLCJpdGVtIiwieHMiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImZ1bGxXaWR0aCIsIklucHV0TGFiZWxQcm9wcyIsInNocmluayIsIk51bWJlciIsIklucHV0UHJvcHMiLCJpbnB1dFByb3BzIiwibWluIiwibWF4IiwiY29sb3IiLCJvbkNsaWNrIiwibGVuZ3RoIiwib3B0aW9ucyIsInJlc3BvbnNpdmUiLCJwbHVnaW5zIiwidGl0bGUiLCJkaXNwbGF5IiwidGV4dCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(dashboard)/pollution/page.tsx\n"));

/***/ })

});
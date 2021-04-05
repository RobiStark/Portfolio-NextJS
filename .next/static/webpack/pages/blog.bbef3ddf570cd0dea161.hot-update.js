webpackHotUpdate_N_E("pages/blog",{

/***/ "./profile.js":
/*!********************!*\
  !*** ./profile.js ***!
  \********************/
/*! exports provided: skills, experiences, projects, posts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skills", function() { return skills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "experiences", function() { return experiences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projects", function() { return projects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posts", function() { return posts; });
var skills = [{
  skill: 'JavaScript',
  percentage: 100
}, {
  skill: 'Golang',
  percentage: 80
}, {
  skill: 'NodeJS',
  percentage: 90
}, {
  skill: 'PHP',
  percentage: 60
}, {
  skill: 'GraphQL',
  percentage: 70
}, {
  skill: 'MongoDB',
  percentage: 90
}];
var experiences = [{
  title: 'Software developer at Microsoft',
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias deleniti alias ad vel laborum hic aliquid deserunt amet delectus vitae magni quam eaque neque culpa, obcaecati totam blanditiis, voluptas velit voluptatem, labore ipsum ullam! Numquam molestias autem voluptates quae fuga sapiente.',
  from: 2000,
  to: 2005
}, {
  title: 'Software developer at Google',
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias deleniti alias ad vel laborum hic aliquid deserunt amet delectus vitae magni quam eaque neque culpa, obcaecati totam blanditiis, voluptas velit voluptatem, labore ipsum ullam! Numquam molestias autem voluptates quae fuga sapiente.',
  from: 2005,
  to: 2007
}, {
  title: 'Software developer at SpaceX',
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias deleniti alias ad vel laborum hic aliquid deserunt amet delectus vitae magni quam eaque neque culpa, obcaecati totam blanditiis, voluptas velit voluptatem, labore ipsum ullam! Numquam molestias autem voluptates quae fuga sapiente.',
  from: 2010
}];
var projects = [{
  name: "Awesome website 1",
  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, dignissimos. Nobis nesciunt, quibusdam, quas.',
  imagen: "portfolio1.jpeg"
}, {
  name: "Awesome website 2",
  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, dignissimos. Nobis nesciunt, quibusdam, quas.',
  imagen: "portfolio2.jpg"
}, {
  name: "Awesome website 3",
  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, dignissimos. Nobis nesciunt, quibusdam, quas.',
  imagen: "portfolio3.png"
}, {
  name: "Awesome website 4",
  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, dignissimos. Nobis nesciunt, quibusdam, quas.',
  imagen: "portfolio4.png"
}, {
  name: "Awesome website 5",
  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, dignissimos. Nobis nesciunt, quibusdam, quas.',
  imagen: "portfolio5.jpeg"
}, {
  name: "Awesome website 6",
  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, dignissimos. Nobis nesciunt, quibusdam, quas.',
  imagen: "portfolio6.jpeg"
}];
var posts = [{
  title: "React",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eligendi et natus harum eum laudantium architecto iusto, tempore cum veritatis asperiores quibusdam expedita distinctio.",
  imageURL: "https://www.syntonize.com/wp-content/uploads/2021/02/React-Syntonize.png"
}, {
  title: "Angular",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eligendi et natus harum eum laudantium architecto iusto, tempore cum veritatis asperiores quibusdam expedita distinctio.",
  imageURL: "https://miro.medium.com/max/1838/1*P7x-_0XfQz6CVmMY_QAv0w.png"
}, {
  title: "Vue",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eligendi et natus harum eum laudantium architecto iusto, tempore cum veritatis asperiores quibusdam expedita distinctio.",
  imageURL: "https://miro.medium.com/max/5145/1*oZqGznbYXJfBlvGp5gQlYQ.jpeg"
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJza2lsbHMiLCJza2lsbCIsInBlcmNlbnRhZ2UiLCJleHBlcmllbmNlcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJmcm9tIiwidG8iLCJwcm9qZWN0cyIsIm5hbWUiLCJpbWFnZW4iLCJwb3N0cyIsImNvbnRlbnQiLCJpbWFnZVVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNQSxNQUFNLEdBQUUsQ0FDakI7QUFDSUMsT0FBSyxFQUFFLFlBRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBRGlCLEVBS2pCO0FBQ0lELE9BQUssRUFBRSxRQURYO0FBRUlDLFlBQVUsRUFBRTtBQUZoQixDQUxpQixFQVNqQjtBQUNJRCxPQUFLLEVBQUUsUUFEWDtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0FUaUIsRUFhakI7QUFDSUQsT0FBSyxFQUFFLEtBRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBYmlCLEVBaUJqQjtBQUNJRCxPQUFLLEVBQUUsU0FEWDtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0FqQmlCLEVBcUJqQjtBQUNJRCxPQUFLLEVBQUUsU0FEWDtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0FyQmlCLENBQWQ7QUEyQkEsSUFBTUMsV0FBVyxHQUFHLENBQ3ZCO0FBQ0lDLE9BQUssRUFBRSxpQ0FEWDtBQUVJQyxhQUFXLEVBQUUsNFNBRmpCO0FBR0lDLE1BQUksRUFBRSxJQUhWO0FBSUlDLElBQUUsRUFBRTtBQUpSLENBRHVCLEVBT3ZCO0FBQ0lILE9BQUssRUFBRSw4QkFEWDtBQUVJQyxhQUFXLEVBQUUsNFNBRmpCO0FBR0lDLE1BQUksRUFBRSxJQUhWO0FBSUlDLElBQUUsRUFBRTtBQUpSLENBUHVCLEVBYXZCO0FBQ0lILE9BQUssRUFBRSw4QkFEWDtBQUVJQyxhQUFXLEVBQUUsNFNBRmpCO0FBR0lDLE1BQUksRUFBRTtBQUhWLENBYnVCLENBQXBCO0FBb0JBLElBQU1FLFFBQVEsR0FBRSxDQUNuQjtBQUNJQyxNQUFJLEVBQUUsbUJBRFY7QUFFSUosYUFBVyxFQUFFLGdIQUZqQjtBQUdJSyxRQUFNLEVBQUU7QUFIWixDQURtQixFQU1uQjtBQUNJRCxNQUFJLEVBQUUsbUJBRFY7QUFFSUosYUFBVyxFQUFFLGdIQUZqQjtBQUdJSyxRQUFNLEVBQUU7QUFIWixDQU5tQixFQVduQjtBQUNJRCxNQUFJLEVBQUUsbUJBRFY7QUFFSUosYUFBVyxFQUFFLGdIQUZqQjtBQUdJSyxRQUFNLEVBQUU7QUFIWixDQVhtQixFQWdCbkI7QUFDSUQsTUFBSSxFQUFFLG1CQURWO0FBRUlKLGFBQVcsRUFBRSxnSEFGakI7QUFHSUssUUFBTSxFQUFFO0FBSFosQ0FoQm1CLEVBcUJuQjtBQUNJRCxNQUFJLEVBQUUsbUJBRFY7QUFFSUosYUFBVyxFQUFFLGdIQUZqQjtBQUdJSyxRQUFNLEVBQUU7QUFIWixDQXJCbUIsRUEwQm5CO0FBQ0lELE1BQUksRUFBRSxtQkFEVjtBQUVJSixhQUFXLEVBQUUsZ0hBRmpCO0FBR0lLLFFBQU0sRUFBRTtBQUhaLENBMUJtQixDQUFoQjtBQWlDQSxJQUFNQyxLQUFLLEdBQUcsQ0FDakI7QUFDSVAsT0FBSyxFQUFFLE9BRFg7QUFFSVEsU0FBTyxFQUFFLHVMQUZiO0FBR0lDLFVBQVEsRUFBQztBQUhiLENBRGlCLEVBTWpCO0FBQ0lULE9BQUssRUFBRSxTQURYO0FBRUlRLFNBQU8sRUFBRSx1TEFGYjtBQUdJQyxVQUFRLEVBQUM7QUFIYixDQU5pQixFQVdqQjtBQUNJVCxPQUFLLEVBQUUsS0FEWDtBQUVJUSxTQUFPLEVBQUUsdUxBRmI7QUFHSUMsVUFBUSxFQUFDO0FBSGIsQ0FYaUIsQ0FBZCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nLmJiZWYzZGRmNTcwY2QwZGVhMTYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2tpbGxzID1bXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdKYXZhU2NyaXB0JyxcclxuICAgICAgICBwZXJjZW50YWdlOiAxMDBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdHb2xhbmcnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDgwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnTm9kZUpTJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA5MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ1BIUCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNjBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdHcmFwaFFMJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA3MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ01vbmdvREInLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDkwXHJcbiAgICB9LFxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgZXhwZXJpZW5jZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdTb2Z0d2FyZSBkZXZlbG9wZXIgYXQgTWljcm9zb2Z0JyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBNb2xlc3RpYXMgZGVsZW5pdGkgYWxpYXMgYWQgdmVsIGxhYm9ydW0gaGljIGFsaXF1aWQgZGVzZXJ1bnQgYW1ldCBkZWxlY3R1cyB2aXRhZSBtYWduaSBxdWFtIGVhcXVlIG5lcXVlIGN1bHBhLCBvYmNhZWNhdGkgdG90YW0gYmxhbmRpdGlpcywgdm9sdXB0YXMgdmVsaXQgdm9sdXB0YXRlbSwgbGFib3JlIGlwc3VtIHVsbGFtISBOdW1xdWFtIG1vbGVzdGlhcyBhdXRlbSB2b2x1cHRhdGVzIHF1YWUgZnVnYSBzYXBpZW50ZS4nLFxyXG4gICAgICAgIGZyb206IDIwMDAsXHJcbiAgICAgICAgdG86IDIwMDVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdTb2Z0d2FyZSBkZXZlbG9wZXIgYXQgR29vZ2xlJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBNb2xlc3RpYXMgZGVsZW5pdGkgYWxpYXMgYWQgdmVsIGxhYm9ydW0gaGljIGFsaXF1aWQgZGVzZXJ1bnQgYW1ldCBkZWxlY3R1cyB2aXRhZSBtYWduaSBxdWFtIGVhcXVlIG5lcXVlIGN1bHBhLCBvYmNhZWNhdGkgdG90YW0gYmxhbmRpdGlpcywgdm9sdXB0YXMgdmVsaXQgdm9sdXB0YXRlbSwgbGFib3JlIGlwc3VtIHVsbGFtISBOdW1xdWFtIG1vbGVzdGlhcyBhdXRlbSB2b2x1cHRhdGVzIHF1YWUgZnVnYSBzYXBpZW50ZS4nLFxyXG4gICAgICAgIGZyb206IDIwMDUsXHJcbiAgICAgICAgdG86IDIwMDdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdTb2Z0d2FyZSBkZXZlbG9wZXIgYXQgU3BhY2VYJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBNb2xlc3RpYXMgZGVsZW5pdGkgYWxpYXMgYWQgdmVsIGxhYm9ydW0gaGljIGFsaXF1aWQgZGVzZXJ1bnQgYW1ldCBkZWxlY3R1cyB2aXRhZSBtYWduaSBxdWFtIGVhcXVlIG5lcXVlIGN1bHBhLCBvYmNhZWNhdGkgdG90YW0gYmxhbmRpdGlpcywgdm9sdXB0YXMgdmVsaXQgdm9sdXB0YXRlbSwgbGFib3JlIGlwc3VtIHVsbGFtISBOdW1xdWFtIG1vbGVzdGlhcyBhdXRlbSB2b2x1cHRhdGVzIHF1YWUgZnVnYSBzYXBpZW50ZS4nLFxyXG4gICAgICAgIGZyb206IDIwMTAsXHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9W1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiQXdlc29tZSB3ZWJzaXRlIDFcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBVbGxhbSwgZGlnbmlzc2ltb3MuIE5vYmlzIG5lc2NpdW50LCBxdWlidXNkYW0sIHF1YXMuJyxcclxuICAgICAgICBpbWFnZW46IFwicG9ydGZvbGlvMS5qcGVnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJBd2Vzb21lIHdlYnNpdGUgMlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFVsbGFtLCBkaWduaXNzaW1vcy4gTm9iaXMgbmVzY2l1bnQsIHF1aWJ1c2RhbSwgcXVhcy4nLFxyXG4gICAgICAgIGltYWdlbjogXCJwb3J0Zm9saW8yLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiQXdlc29tZSB3ZWJzaXRlIDNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBVbGxhbSwgZGlnbmlzc2ltb3MuIE5vYmlzIG5lc2NpdW50LCBxdWlidXNkYW0sIHF1YXMuJyxcclxuICAgICAgICBpbWFnZW46IFwicG9ydGZvbGlvMy5wbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkF3ZXNvbWUgd2Vic2l0ZSA0XCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVWxsYW0sIGRpZ25pc3NpbW9zLiBOb2JpcyBuZXNjaXVudCwgcXVpYnVzZGFtLCBxdWFzLicsXHJcbiAgICAgICAgaW1hZ2VuOiBcInBvcnRmb2xpbzQucG5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJBd2Vzb21lIHdlYnNpdGUgNVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFVsbGFtLCBkaWduaXNzaW1vcy4gTm9iaXMgbmVzY2l1bnQsIHF1aWJ1c2RhbSwgcXVhcy4nLFxyXG4gICAgICAgIGltYWdlbjogXCJwb3J0Zm9saW81LmpwZWdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkF3ZXNvbWUgd2Vic2l0ZSA2XCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVWxsYW0sIGRpZ25pc3NpbW9zLiBOb2JpcyBuZXNjaXVudCwgcXVpYnVzZGFtLCBxdWFzLicsXHJcbiAgICAgICAgaW1hZ2VuOiBcInBvcnRmb2xpbzYuanBlZ1wiXHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0cyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJSZWFjdFwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVpIGVsaWdlbmRpIGV0IG5hdHVzIGhhcnVtIGV1bSBsYXVkYW50aXVtIGFyY2hpdGVjdG8gaXVzdG8sIHRlbXBvcmUgY3VtIHZlcml0YXRpcyBhc3BlcmlvcmVzIHF1aWJ1c2RhbSBleHBlZGl0YSBkaXN0aW5jdGlvLlwiLFxyXG4gICAgICAgIGltYWdlVVJMOlwiaHR0cHM6Ly93d3cuc3ludG9uaXplLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wMi9SZWFjdC1TeW50b25pemUucG5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQW5ndWxhclwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVpIGVsaWdlbmRpIGV0IG5hdHVzIGhhcnVtIGV1bSBsYXVkYW50aXVtIGFyY2hpdGVjdG8gaXVzdG8sIHRlbXBvcmUgY3VtIHZlcml0YXRpcyBhc3BlcmlvcmVzIHF1aWJ1c2RhbSBleHBlZGl0YSBkaXN0aW5jdGlvLlwiLFxyXG4gICAgICAgIGltYWdlVVJMOlwiaHR0cHM6Ly9taXJvLm1lZGl1bS5jb20vbWF4LzE4MzgvMSpQN3gtXzBYZlF6NkNWbU1ZX1FBdjB3LnBuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlZ1ZVwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVpIGVsaWdlbmRpIGV0IG5hdHVzIGhhcnVtIGV1bSBsYXVkYW50aXVtIGFyY2hpdGVjdG8gaXVzdG8sIHRlbXBvcmUgY3VtIHZlcml0YXRpcyBhc3BlcmlvcmVzIHF1aWJ1c2RhbSBleHBlZGl0YSBkaXN0aW5jdGlvLlwiLFxyXG4gICAgICAgIGltYWdlVVJMOlwiaHR0cHM6Ly9taXJvLm1lZGl1bS5jb20vbWF4LzUxNDUvMSpvWnFHem5iWVhKZkJsdkdwNWdRbFlRLmpwZWdcIlxyXG4gICAgfVxyXG5dIl0sInNvdXJjZVJvb3QiOiIifQ==
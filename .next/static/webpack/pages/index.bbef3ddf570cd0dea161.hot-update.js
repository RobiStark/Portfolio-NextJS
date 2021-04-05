webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJza2lsbHMiLCJza2lsbCIsInBlcmNlbnRhZ2UiLCJleHBlcmllbmNlcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJmcm9tIiwidG8iLCJwcm9qZWN0cyIsIm5hbWUiLCJpbWFnZW4iLCJwb3N0cyIsImNvbnRlbnQiLCJpbWFnZVVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNQSxNQUFNLEdBQUUsQ0FDakI7QUFDSUMsT0FBSyxFQUFFLFlBRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBRGlCLEVBS2pCO0FBQ0lELE9BQUssRUFBRSxRQURYO0FBRUlDLFlBQVUsRUFBRTtBQUZoQixDQUxpQixFQVNqQjtBQUNJRCxPQUFLLEVBQUUsUUFEWDtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0FUaUIsRUFhakI7QUFDSUQsT0FBSyxFQUFFLEtBRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBYmlCLEVBaUJqQjtBQUNJRCxPQUFLLEVBQUUsU0FEWDtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0FqQmlCLEVBcUJqQjtBQUNJRCxPQUFLLEVBQUUsU0FEWDtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0FyQmlCLENBQWQ7QUEyQkEsSUFBTUMsV0FBVyxHQUFHLENBQ3ZCO0FBQ0lDLE9BQUssRUFBRSxpQ0FEWDtBQUVJQyxhQUFXLEVBQUUsNFNBRmpCO0FBR0lDLE1BQUksRUFBRSxJQUhWO0FBSUlDLElBQUUsRUFBRTtBQUpSLENBRHVCLEVBT3ZCO0FBQ0lILE9BQUssRUFBRSw4QkFEWDtBQUVJQyxhQUFXLEVBQUUsNFNBRmpCO0FBR0lDLE1BQUksRUFBRSxJQUhWO0FBSUlDLElBQUUsRUFBRTtBQUpSLENBUHVCLEVBYXZCO0FBQ0lILE9BQUssRUFBRSw4QkFEWDtBQUVJQyxhQUFXLEVBQUUsNFNBRmpCO0FBR0lDLE1BQUksRUFBRTtBQUhWLENBYnVCLENBQXBCO0FBb0JBLElBQU1FLFFBQVEsR0FBRSxDQUNuQjtBQUNJQyxNQUFJLEVBQUUsbUJBRFY7QUFFSUosYUFBVyxFQUFFLGdIQUZqQjtBQUdJSyxRQUFNLEVBQUU7QUFIWixDQURtQixFQU1uQjtBQUNJRCxNQUFJLEVBQUUsbUJBRFY7QUFFSUosYUFBVyxFQUFFLGdIQUZqQjtBQUdJSyxRQUFNLEVBQUU7QUFIWixDQU5tQixFQVduQjtBQUNJRCxNQUFJLEVBQUUsbUJBRFY7QUFFSUosYUFBVyxFQUFFLGdIQUZqQjtBQUdJSyxRQUFNLEVBQUU7QUFIWixDQVhtQixFQWdCbkI7QUFDSUQsTUFBSSxFQUFFLG1CQURWO0FBRUlKLGFBQVcsRUFBRSxnSEFGakI7QUFHSUssUUFBTSxFQUFFO0FBSFosQ0FoQm1CLEVBcUJuQjtBQUNJRCxNQUFJLEVBQUUsbUJBRFY7QUFFSUosYUFBVyxFQUFFLGdIQUZqQjtBQUdJSyxRQUFNLEVBQUU7QUFIWixDQXJCbUIsRUEwQm5CO0FBQ0lELE1BQUksRUFBRSxtQkFEVjtBQUVJSixhQUFXLEVBQUUsZ0hBRmpCO0FBR0lLLFFBQU0sRUFBRTtBQUhaLENBMUJtQixDQUFoQjtBQWlDQSxJQUFNQyxLQUFLLEdBQUcsQ0FDakI7QUFDSVAsT0FBSyxFQUFFLE9BRFg7QUFFSVEsU0FBTyxFQUFFLHVMQUZiO0FBR0lDLFVBQVEsRUFBQztBQUhiLENBRGlCLEVBTWpCO0FBQ0lULE9BQUssRUFBRSxTQURYO0FBRUlRLFNBQU8sRUFBRSx1TEFGYjtBQUdJQyxVQUFRLEVBQUM7QUFIYixDQU5pQixFQVdqQjtBQUNJVCxPQUFLLEVBQUUsS0FEWDtBQUVJUSxTQUFPLEVBQUUsdUxBRmI7QUFHSUMsVUFBUSxFQUFDO0FBSGIsQ0FYaUIsQ0FBZCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iYmVmM2RkZjU3MGNkMGRlYTE2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNraWxscyA9W1xyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnSmF2YVNjcmlwdCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogMTAwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnR29sYW5nJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA4MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ05vZGVKUycsXHJcbiAgICAgICAgcGVyY2VudGFnZTogOTBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdQSFAnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDYwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnR3JhcGhRTCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNzBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdNb25nb0RCJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA5MFxyXG4gICAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGV4cGVyaWVuY2VzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnU29mdHdhcmUgZGV2ZWxvcGVyIGF0IE1pY3Jvc29mdCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTW9sZXN0aWFzIGRlbGVuaXRpIGFsaWFzIGFkIHZlbCBsYWJvcnVtIGhpYyBhbGlxdWlkIGRlc2VydW50IGFtZXQgZGVsZWN0dXMgdml0YWUgbWFnbmkgcXVhbSBlYXF1ZSBuZXF1ZSBjdWxwYSwgb2JjYWVjYXRpIHRvdGFtIGJsYW5kaXRpaXMsIHZvbHVwdGFzIHZlbGl0IHZvbHVwdGF0ZW0sIGxhYm9yZSBpcHN1bSB1bGxhbSEgTnVtcXVhbSBtb2xlc3RpYXMgYXV0ZW0gdm9sdXB0YXRlcyBxdWFlIGZ1Z2Egc2FwaWVudGUuJyxcclxuICAgICAgICBmcm9tOiAyMDAwLFxyXG4gICAgICAgIHRvOiAyMDA1XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnU29mdHdhcmUgZGV2ZWxvcGVyIGF0IEdvb2dsZScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTW9sZXN0aWFzIGRlbGVuaXRpIGFsaWFzIGFkIHZlbCBsYWJvcnVtIGhpYyBhbGlxdWlkIGRlc2VydW50IGFtZXQgZGVsZWN0dXMgdml0YWUgbWFnbmkgcXVhbSBlYXF1ZSBuZXF1ZSBjdWxwYSwgb2JjYWVjYXRpIHRvdGFtIGJsYW5kaXRpaXMsIHZvbHVwdGFzIHZlbGl0IHZvbHVwdGF0ZW0sIGxhYm9yZSBpcHN1bSB1bGxhbSEgTnVtcXVhbSBtb2xlc3RpYXMgYXV0ZW0gdm9sdXB0YXRlcyBxdWFlIGZ1Z2Egc2FwaWVudGUuJyxcclxuICAgICAgICBmcm9tOiAyMDA1LFxyXG4gICAgICAgIHRvOiAyMDA3XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnU29mdHdhcmUgZGV2ZWxvcGVyIGF0IFNwYWNlWCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTW9sZXN0aWFzIGRlbGVuaXRpIGFsaWFzIGFkIHZlbCBsYWJvcnVtIGhpYyBhbGlxdWlkIGRlc2VydW50IGFtZXQgZGVsZWN0dXMgdml0YWUgbWFnbmkgcXVhbSBlYXF1ZSBuZXF1ZSBjdWxwYSwgb2JjYWVjYXRpIHRvdGFtIGJsYW5kaXRpaXMsIHZvbHVwdGFzIHZlbGl0IHZvbHVwdGF0ZW0sIGxhYm9yZSBpcHN1bSB1bGxhbSEgTnVtcXVhbSBtb2xlc3RpYXMgYXV0ZW0gdm9sdXB0YXRlcyBxdWFlIGZ1Z2Egc2FwaWVudGUuJyxcclxuICAgICAgICBmcm9tOiAyMDEwLFxyXG4gICAgfVxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPVtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkF3ZXNvbWUgd2Vic2l0ZSAxXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVWxsYW0sIGRpZ25pc3NpbW9zLiBOb2JpcyBuZXNjaXVudCwgcXVpYnVzZGFtLCBxdWFzLicsXHJcbiAgICAgICAgaW1hZ2VuOiBcInBvcnRmb2xpbzEuanBlZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiQXdlc29tZSB3ZWJzaXRlIDJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBVbGxhbSwgZGlnbmlzc2ltb3MuIE5vYmlzIG5lc2NpdW50LCBxdWlidXNkYW0sIHF1YXMuJyxcclxuICAgICAgICBpbWFnZW46IFwicG9ydGZvbGlvMi5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkF3ZXNvbWUgd2Vic2l0ZSAzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVWxsYW0sIGRpZ25pc3NpbW9zLiBOb2JpcyBuZXNjaXVudCwgcXVpYnVzZGFtLCBxdWFzLicsXHJcbiAgICAgICAgaW1hZ2VuOiBcInBvcnRmb2xpbzMucG5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJBd2Vzb21lIHdlYnNpdGUgNFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFVsbGFtLCBkaWduaXNzaW1vcy4gTm9iaXMgbmVzY2l1bnQsIHF1aWJ1c2RhbSwgcXVhcy4nLFxyXG4gICAgICAgIGltYWdlbjogXCJwb3J0Zm9saW80LnBuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiQXdlc29tZSB3ZWJzaXRlIDVcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBVbGxhbSwgZGlnbmlzc2ltb3MuIE5vYmlzIG5lc2NpdW50LCBxdWlidXNkYW0sIHF1YXMuJyxcclxuICAgICAgICBpbWFnZW46IFwicG9ydGZvbGlvNS5qcGVnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJBd2Vzb21lIHdlYnNpdGUgNlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFVsbGFtLCBkaWduaXNzaW1vcy4gTm9iaXMgbmVzY2l1bnQsIHF1aWJ1c2RhbSwgcXVhcy4nLFxyXG4gICAgICAgIGltYWdlbjogXCJwb3J0Zm9saW82LmpwZWdcIlxyXG4gICAgfVxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgcG9zdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiUmVhY3RcIixcclxuICAgICAgICBjb250ZW50OiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1aSBlbGlnZW5kaSBldCBuYXR1cyBoYXJ1bSBldW0gbGF1ZGFudGl1bSBhcmNoaXRlY3RvIGl1c3RvLCB0ZW1wb3JlIGN1bSB2ZXJpdGF0aXMgYXNwZXJpb3JlcyBxdWlidXNkYW0gZXhwZWRpdGEgZGlzdGluY3Rpby5cIixcclxuICAgICAgICBpbWFnZVVSTDpcImh0dHBzOi8vd3d3LnN5bnRvbml6ZS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDIvUmVhY3QtU3ludG9uaXplLnBuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkFuZ3VsYXJcIixcclxuICAgICAgICBjb250ZW50OiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1aSBlbGlnZW5kaSBldCBuYXR1cyBoYXJ1bSBldW0gbGF1ZGFudGl1bSBhcmNoaXRlY3RvIGl1c3RvLCB0ZW1wb3JlIGN1bSB2ZXJpdGF0aXMgYXNwZXJpb3JlcyBxdWlidXNkYW0gZXhwZWRpdGEgZGlzdGluY3Rpby5cIixcclxuICAgICAgICBpbWFnZVVSTDpcImh0dHBzOi8vbWlyby5tZWRpdW0uY29tL21heC8xODM4LzEqUDd4LV8wWGZRejZDVm1NWV9RQXYwdy5wbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJWdWVcIixcclxuICAgICAgICBjb250ZW50OiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1aSBlbGlnZW5kaSBldCBuYXR1cyBoYXJ1bSBldW0gbGF1ZGFudGl1bSBhcmNoaXRlY3RvIGl1c3RvLCB0ZW1wb3JlIGN1bSB2ZXJpdGF0aXMgYXNwZXJpb3JlcyBxdWlidXNkYW0gZXhwZWRpdGEgZGlzdGluY3Rpby5cIixcclxuICAgICAgICBpbWFnZVVSTDpcImh0dHBzOi8vbWlyby5tZWRpdW0uY29tL21heC81MTQ1LzEqb1pxR3puYllYSmZCbHZHcDVnUWxZUS5qcGVnXCJcclxuICAgIH1cclxuXSJdLCJzb3VyY2VSb290IjoiIn0=
"use strict";(self.webpackChunk_iimandoo_mts5_ui_component=self.webpackChunk_iimandoo_mts5_ui_component||[]).push([[756],{"./node_modules/@mdx-js/react/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:()=>MDXContext,MDXProvider:()=>MDXProvider,useMDXComponents:()=>useMDXComponents,withMDXComponents:()=>withMDXComponents});var react=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var MDXContext=react.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){var allComponents=useMDXComponents(props.components);return react.createElement(Component,_extends({},props,{allComponents}))}}function useMDXComponents(components){var contextComponents=react.useContext(MDXContext);return react.useMemo((function(){return"function"==typeof components?components(contextComponents):_extends({},contextComponents,components)}),[contextComponents,components])}var emptyObject={};function MDXProvider(_ref){var allComponents,components=_ref.components,children=_ref.children;return allComponents=_ref.disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}}}]);
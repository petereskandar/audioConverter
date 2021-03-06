function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function asyncGeneratorStep(e,t,n,r,a,i,s){try{var u=e[i](s),o=u.value}catch(l){return void n(l)}u.done?t(o):Promise.resolve(o).then(r,a)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function s(e){asyncGeneratorStep(i,r,a,s,u,"next",e)}function u(e){asyncGeneratorStep(i,r,a,s,u,"throw",e)}s(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{VFVT:function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_confirm_sign_in",(function(){return p})),n.d(t,"amplify_confirm_sign_up",(function(){return f})),n.d(t,"amplify_forgot_password",(function(){return b})),n.d(t,"amplify_require_new_password",(function(){return y})),n.d(t,"amplify_sign_in",(function(){return v})),n.d(t,"amplify_sign_up",(function(){return C})),n.d(t,"amplify_verify_contact",(function(){return _}));var r=n("bRKV"),a=n("JIIv"),i=n("Nt7R"),s=n("HzrR"),u=n("s1tr"),o=n("v4IS"),l=n("vbTL"),h=n("/vcS"),c=n("xtuj"),d=n("TAxe"),p=function(){function e(t){var n=this;_classCallCheck(this,e),Object(r.k)(this,t),this.handleSubmit=function(e){return n.confirm(e)},this.headerText=l.a.CONFIRM_SMS_CODE,this.submitButtonText=l.a.CONFIRM,this.handleAuthStateChange=c.d,this.formFields=[{type:"code",required:!0,handleInputChange:function(e){return n.handleCodeChange(e)}}],this.mfaOption=u.c.SMS,this.loading=!1}var t;return _createClass(e,[{key:"componentWillLoad",value:function(){this.user&&this.user.challengeName===u.b.SoftwareTokenMFA&&(this.mfaOption=u.c.TOTP,this.headerText===l.a.CONFIRM_SMS_CODE&&(this.headerText=l.a.CONFIRM_TOTP_CODE))}},{key:"handleCodeChange",value:function(e){this.code=e.target.value}},{key:"confirm",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.preventDefault(),n=this.user.challengeName===u.b.SoftwareTokenMFA?u.b.SoftwareTokenMFA:null,o.a&&"function"==typeof o.a.confirmSignIn){e.next=4;break}throw new Error(h.d);case 4:return this.loading=!0,e.prev=5,e.next=8,o.a.confirmSignIn(this.user,this.code,n);case 8:return e.next=10,Object(d.a)(this.user,this.handleAuthStateChange);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),Object(c.a)(e.t0);case 15:return e.prev=15,this.loading=!1,e.finish(15);case 18:case"end":return e.stop()}}),e,this,[[5,12,15,18]])}))),function(e){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this;return Object(r.i)(r.b,null,Object(r.i)("amplify-form-section",{headerText:a.a.get(this.headerText),handleSubmit:this.handleSubmit,submitButtonText:a.a.get(this.submitButtonText),loading:this.loading,secondaryFooterContent:Object(r.i)("span",null,Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(u.a.SignIn)}},a.a.get(l.a.BACK_TO_SIGN_IN)))},Object(r.i)("amplify-auth-fields",{formFields:this.formFields})))}}]),e}(),f=function(){function e(t){var n=this;_classCallCheck(this,e),Object(r.k)(this,t),this.handleSubmit=function(e){return n.confirmSignUp(e)},this.headerText=l.a.CONFIRM_SIGN_UP_HEADER_TEXT,this.submitButtonText=l.a.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT,this.formFields=[],this.handleAuthStateChange=c.d,this.usernameAlias="username",this.loading=!1,this.userInput=this.user?this.user.username:null,this._signUpAttrs=this.user&&this.user.signUpAttrs?this.user.signUpAttrs:null,this.newFormFields=[],this.phoneNumber={countryDialCodeValue:h.q,phoneNumberValue:null}}var t,n;return _createClass(e,[{key:"componentWillLoad",value:function(){Object(c.c)(this.usernameAlias),this.buildFormFields()}},{key:"formFieldsHandler",value:function(){this.buildFormFields()}},{key:"buildDefaultFormFields",value:function(){var e=this;this.newFormFields=[{type:""+this.usernameAlias,required:!0,handleInputChange:this.handleFormFieldInputChange(""+this.usernameAlias),value:this.userInput,disabled:!!this.userInput},{type:"code",label:a.a.get(l.a.CONFIRM_SIGN_UP_CODE_LABEL),placeholder:a.a.get(l.a.CONFIRM_SIGN_UP_CODE_PLACEHOLDER),required:!0,hint:Object(r.i)("div",null,a.a.get(l.a.CONFIRM_SIGN_UP_LOST_CODE)," ",Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.resendConfirmCode()}},a.a.get(l.a.CONFIRM_SIGN_UP_RESEND_CODE))),handleInputChange:this.handleFormFieldInputChange("code")}]}},{key:"buildFormFields",value:function(){var e=this;if(0===this.formFields.length)this.buildDefaultFormFields();else{var t=[];this.formFields.forEach((function(n){var i=Object.assign({},n);"code"===i.type&&(i.hint=Object(c.g)(i)?Object(r.i)("div",null,a.a.get(l.a.CONFIRM_SIGN_UP_LOST_CODE)," ",Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.resendConfirmCode()}},a.a.get(l.a.CONFIRM_SIGN_UP_RESEND_CODE))):i.hint),i.handleInputChange=function(t){return e.handleFormFieldInputWithCallback(t,n)},t.push(i)})),this.newFormFields=t}}},{key:"handleFormFieldInputChange",value:function(e){var t=this;switch(e){case"username":case"email":return function(e){return t.userInput=e.target.value};case"phone_number":return function(e){return Object(c.f)(e,t.phoneNumber)};case"code":return function(e){return t.code=e.target.value};default:return}}},{key:"setFieldValue",value:function(e){switch(e.type){case"username":case"email":this.userInput=void 0===e.value?"":e.value;break;case"phone_number":e.dialCode&&(this.phoneNumber.countryDialCodeValue=e.dialCode),this.phoneNumber.phoneNumberValue=e.value}}},{key:"handleFormFieldInputWithCallback",value:function(e,t){(t.handleInputChange?t.handleInputChange:function(e,t){t(e)})(e,this.handleFormFieldInputChange(t.type).bind(this))}},{key:"resendConfirmCode",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(event&&event.preventDefault(),o.a&&"function"==typeof o.a.resendSignUp){e.next=2;break}throw new Error(h.d);case 2:if(e.prev=2,this.userInput){e.next=5;break}throw new Error(l.a.EMPTY_USERNAME);case 5:return this.userInput=this.userInput.trim(),e.next=8,o.a.resendSignUp(this.userInput);case 8:this.handleAuthStateChange(u.a.ConfirmSignUp),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),Object(c.a)(e.t0);case 14:case"end":return e.stop()}}),e,this,[[2,11]])}))),function(){return n.apply(this,arguments)})},{key:"confirmSignUp",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.preventDefault(),o.a&&"function"==typeof o.a.confirmSignUp){e.next=2;break}throw new Error(h.d);case 2:switch(this.loading=!0,this.usernameAlias){case"phone_number":try{this.userInput=Object(c.b)(this.phoneNumber)}catch(n){Object(c.a)(n)}}if(e.prev=3,this.userInput){e.next=6;break}throw new Error(l.a.EMPTY_USERNAME);case 6:return this.userInput=this.userInput.trim(),e.next=9,o.a.confirmSignUp(this.userInput,this.code);case 9:if(e.sent){e.next=11;break}throw new Error(a.a.get(l.a.CONFIRM_SIGN_UP_FAILED));case 11:if(!this._signUpAttrs||!this._signUpAttrs.password||""===this._signUpAttrs.password){e.next=16;break}return e.next=14,Object(d.b)(this.userInput,this._signUpAttrs.password,this.handleAuthStateChange);case 14:e.next=17;break;case 16:this.handleAuthStateChange(u.a.SignIn);case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(3),Object(c.a)(e.t0);case 22:return e.prev=22,this.loading=!1,e.finish(22);case 25:case"end":return e.stop()}}),e,this,[[3,19,22,25]])}))),function(e){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this;return Object(r.i)(r.b,null,Object(r.i)("amplify-form-section",{headerText:a.a.get(this.headerText),submitButtonText:a.a.get(this.submitButtonText),handleSubmit:this.handleSubmit,loading:this.loading,secondaryFooterContent:Object(r.i)("div",null,Object(r.i)("span",null,Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(u.a.SignIn)}},a.a.get(l.a.BACK_TO_SIGN_IN))))},Object(r.i)("amplify-auth-fields",{formFields:this.newFormFields})))}}],[{key:"watchers",get:function(){return{formFields:["formFieldsHandler"]}}}]),e}(),m=new i.a("ForgotPassword"),b=function(){function e(t){var n=this;_classCallCheck(this,e),Object(r.k)(this,t),this.headerText=l.a.RESET_YOUR_PASSWORD,this.sendButtonText=l.a.SEND_CODE,this.submitButtonText=l.a.SUBMIT,this.formFields=[],this.handleSend=function(e){return n.send(e)},this.handleSubmit=function(e){return n.submit(e)},this.handleAuthStateChange=c.d,this.usernameAlias="username",this.delivery=null,this.loading=!1,this.phoneNumber={countryDialCodeValue:h.q,phoneNumberValue:null},this.newFormFields=[],this.forgotPasswordAttrs={userInput:"",password:"",code:""}}var t,n;return _createClass(e,[{key:"componentWillLoad",value:function(){Object(c.c)(this.usernameAlias),this.buildFormFields()}},{key:"formFieldsHandler",value:function(){this.buildFormFields()}},{key:"buildFormFields",value:function(){var e=this;0===this.formFields.length?this.buildDefaultFormFields():this.formFields.forEach((function(t){var n=Object.assign({},t);n.handleInputChange=function(n){return e.handleFormFieldInputWithCallback(n,t)},e.newFormFields.push(n)}))}},{key:"buildDefaultFormFields",value:function(){switch(this.usernameAlias){case"email":this.newFormFields=[{type:"email",required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"forgot-password-email-input"}}];break;case"phone_number":this.newFormFields=[{type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"forgot-password-phone-number-input"}}];break;case"username":default:this.newFormFields=[{type:"username",required:!0,handleInputChange:this.handleFormFieldInputChange("username"),inputProps:{"data-test":"forgot-password-username-input"}}]}}},{key:"handleFormFieldInputChange",value:function(e){var t=this;switch(e){case"username":case"email":return function(e){return t.forgotPasswordAttrs.userInput=e.target.value};case"phone_number":return function(e){return Object(c.f)(e,t.phoneNumber)};case"password":case"code":return function(n){return t.forgotPasswordAttrs[e]=n.target.value};default:return}}},{key:"setFieldValue",value:function(e,t){switch(e.type){case"username":case"email":t.userInput=void 0===e.value?"":e.value;break;case"phone_number":e.dialCode&&(this.phoneNumber.countryDialCodeValue=e.dialCode),this.phoneNumber.phoneNumberValue=e.value;break;case"password":case"code":t[e.type]=void 0===e.value?"":e.value}}},{key:"handleFormFieldInputWithCallback",value:function(e,t){(t.handleInputChange?t.handleInputChange:function(e,t){t(e)})(e,this.handleFormFieldInputChange(t.type).bind(this))}},{key:"send",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.preventDefault(),o.a&&"function"==typeof o.a.forgotPassword){e.next=2;break}throw new Error(h.d);case 2:switch(this.loading=!0,this.usernameAlias){case"phone_number":try{this.forgotPasswordAttrs.userInput=Object(c.b)(this.phoneNumber)}catch(r){Object(c.a)(r)}}return e.prev=3,e.next=6,o.a.forgotPassword(this.forgotPasswordAttrs.userInput.trim());case 6:n=e.sent,m.debug(n),this.newFormFields=[{type:"code",required:!0,handleInputChange:this.handleFormFieldInputChange("code"),inputProps:{"data-test":"forgot-password-code-input"}},{type:"password",required:!0,handleInputChange:this.handleFormFieldInputChange("password"),label:a.a.get(l.a.NEW_PASSWORD_LABEL),placeholder:a.a.get(l.a.NEW_PASSWORD_PLACEHOLDER)}],this.delivery=n.CodeDeliveryDetails,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),Object(c.a)(e.t0);case 13:return e.prev=13,this.loading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,this,[[3,10,13,16]])}))),function(e){return n.apply(this,arguments)})},{key:"submit",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n,r,a,i,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.preventDefault(),o.a&&"function"==typeof o.a.forgotPasswordSubmit){e.next=2;break}throw new Error(h.d);case 2:return this.loading=!0,e.prev=3,n=this.forgotPasswordAttrs,r=n.userInput,a=n.code,i=n.password,e.next=10,o.a.forgotPasswordSubmit(r,a,i);case 10:s=e.sent,m.debug(s),this.handleAuthStateChange(u.a.SignIn),this.delivery=null,e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),Object(c.a)(e.t0);case 17:return e.prev=17,this.loading=!1,e.finish(17);case 20:case"end":return e.stop()}}),e,this,[[3,14,17,20]])}))),function(e){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=this.delivery?function(t){return e.handleSubmit(t)}:function(t){return e.handleSend(t)},n=this.delivery?this.submitButtonText:this.sendButtonText;return Object(r.i)(r.b,null,Object(r.i)("amplify-form-section",{headerText:a.a.get(this.headerText),handleSubmit:t,loading:this.loading,secondaryFooterContent:Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(u.a.SignIn)},"data-test":"forgot-password-back-to-sign-in-link"},a.a.get(l.a.BACK_TO_SIGN_IN)),testDataPrefix:"forgot-password",submitButtonText:a.a.get(n)},Object(r.i)("amplify-auth-fields",{formFields:this.newFormFields})))}}],[{key:"watchers",get:function(){return{formFields:["formFieldsHandler"]}}}]),e}(),g=new i.a("amplify-require-new-password"),y=function(){function e(t){var n=this;_classCallCheck(this,e),Object(r.k)(this,t),this.headerText=l.a.CHANGE_PASSWORD,this.submitButtonText=l.a.CHANGE_PASSWORD_ACTION,this.handleSubmit=function(e){return n.completeNewPassword(e)},this.handleAuthStateChange=c.d,this.formFields=[{type:u.e.Password,required:!0,handleInputChange:function(e){return n.handlePasswordChange(e)},label:a.a.get(l.a.NEW_PASSWORD_LABEL),placeholder:a.a.get(l.a.NEW_PASSWORD_PLACEHOLDER),inputProps:{"data-test":"require-new-password-password-input"}}],this.loading=!1,this.requiredAttributes={},this.newFormFields=this.formFields}var t,n;return _createClass(e,[{key:"watchHandler",value:function(){this.setCurrentUser()}},{key:"handleRequiredAttributeInputChange",value:function(e,t){this.requiredAttributes[e]=t.target.value}},{key:"setCurrentUser",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.user){e.next=4;break}this.currentUser=this.user,e.next=14;break;case 4:return e.prev=4,e.next=7,o.a.currentAuthenticatedUser();case 7:(t=e.sent)&&(this.currentUser=t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),Object(c.a)(e.t0);case 14:this.currentUser&&this.currentUser.challengeParam&&this.currentUser.challengeParam.requiredAttributes&&this.currentUser.challengeParam.requiredAttributes.forEach((function(e){n.newFormFields=[].concat(_toConsumableArray(n.newFormFields),[{type:e,required:!0,label:c.i[e].label,placeholder:c.i[e].placeholder,handleInputChange:function(t){return n.handleRequiredAttributeInputChange(e,t)},inputProps:{"data-test":"require-new-password-".concat(e,"-input")}}])}));case 15:case"end":return e.stop()}}),e,this,[[4,11]])}))),function(){return n.apply(this,arguments)})},{key:"componentWillLoad",value:function(){return this.setCurrentUser()}},{key:"handlePasswordChange",value:function(e){this.password=e.target.value}},{key:"completeNewPassword",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.preventDefault(),o.a&&"function"==typeof o.a.completeNewPassword){e.next=2;break}throw new Error(h.d);case 2:return this.loading=!0,e.prev=3,e.next=6,o.a.completeNewPassword(this.currentUser,this.password,this.requiredAttributes);case 6:n=e.sent,e.t0=(g.debug("complete new password",n),n.challengeName),e.next=e.t0===u.b.SMSMFA?10:e.t0===u.b.MFASetup?12:14;break;case 10:return this.handleAuthStateChange(u.a.ConfirmSignIn,n),e.abrupt("break",16);case 12:return g.debug("TOTP setup",n.challengeParam),this.handleAuthStateChange(u.a.TOTPSetup,n),e.abrupt("break",16);case 14:return e.next=16,Object(d.a)(n,this.handleAuthStateChange);case 16:e.next=21;break;case 18:e.prev=18,e.t1=e.catch(3),Object(c.a)(e.t1);case 21:return e.prev=21,this.loading=!1,e.finish(21);case 24:case"end":return e.stop()}}),e,this,[[3,18,21,24]])}))),function(e){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this;return Object(r.i)(r.b,null,Object(r.i)("amplify-form-section",{headerText:a.a.get(this.headerText),handleSubmit:this.handleSubmit,loading:this.loading,secondaryFooterContent:Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(u.a.SignIn)}},a.a.get(l.a.BACK_TO_SIGN_IN)),submitButtonText:a.a.get(this.submitButtonText)},Object(r.i)("amplify-auth-fields",{formFields:this.newFormFields})))}}],[{key:"watchers",get:function(){return{user:["watchHandler"]}}}]),e}(),v=function(){function e(t){var n=this;_classCallCheck(this,e),Object(r.k)(this,t),this.handleSubmit=function(e){return n.signIn(e)},this.headerText=l.a.SIGN_IN_HEADER_TEXT,this.submitButtonText=l.a.SIGN_IN_ACTION,this.handleAuthStateChange=c.d,this.usernameAlias="username",this.formFields=[],this.hideSignUp=!1,this.newFormFields=[],this.loading=!1,this.phoneNumber={countryDialCodeValue:h.q,phoneNumberValue:null},this.signInAttributes={userInput:"",password:""}}var t;return _createClass(e,[{key:"componentWillLoad",value:function(){Object(c.c)(this.usernameAlias),this.buildFormFields()}},{key:"formFieldsHandler",value:function(){this.buildFormFields()}},{key:"handleFormFieldInputChange",value:function(e){var t=this;switch(e){case"username":case"email":return function(e){return t.signInAttributes.userInput=e.target.value};case"phone_number":return function(e){return Object(c.f)(e,t.phoneNumber)};case"password":return function(e){return t.signInAttributes.password=e.target.value}}}},{key:"handleFormFieldInputWithCallback",value:function(e,t){(t.handleInputChange?t.handleInputChange:function(e,t){t(e)})(e,this.handleFormFieldInputChange(t.type).bind(this))}},{key:"signIn",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:switch(t&&t.preventDefault(),this.loading=!0,this.usernameAlias){case"phone_number":try{this.signInAttributes.userInput=Object(c.b)(this.phoneNumber)}catch(r){Object(c.a)(r)}}return n=this.signInAttributes.userInput.trim(),e.next=4,Object(d.b)(n,this.signInAttributes.password,this.handleAuthStateChange);case 4:this.loading=!1;case 5:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"buildDefaultFormFields",value:function(){var e=this,t=[];switch(this.usernameAlias){case"email":t.push({type:"email",required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"sign-in-email-input"}});break;case"phone_number":t.push({type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"sign-in-phone-number-input"}});break;case"username":default:t.push({type:"username",required:!0,handleInputChange:this.handleFormFieldInputChange("username"),inputProps:{"data-test":"sign-in-username-input"}})}t.push({type:"password",hint:Object(r.i)("div",null,a.a.get(l.a.FORGOT_PASSWORD_TEXT)," ",Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(u.a.ForgotPassword)},"data-test":"sign-in-forgot-password-link"},a.a.get(l.a.RESET_PASSWORD_TEXT))),required:!0,handleInputChange:this.handleFormFieldInputChange("password"),inputProps:{"data-test":"sign-in-password-input"}}),this.newFormFields=[].concat(t)}},{key:"buildFormFields",value:function(){var e=this;if(0===this.formFields.length)this.buildDefaultFormFields();else{var t=[];this.formFields.forEach((function(n){var i=Object.assign({},n);"password"===i.type&&(i.hint=Object(c.g)(i)?Object(r.i)("div",null,a.a.get(l.a.FORGOT_PASSWORD_TEXT)," ",Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(u.a.ForgotPassword)},"data-test":"sign-in-forgot-password-link"},a.a.get(l.a.RESET_PASSWORD_TEXT))):i.hint),i.handleInputChange=function(t){return e.handleFormFieldInputWithCallback(t,n)},e.setFieldValue(i,e.signInAttributes),t.push(i)})),this.newFormFields=t}}},{key:"setFieldValue",value:function(e,t){switch(e.type){case"username":case"email":t.userInput=void 0===e.value?"":e.value;break;case"phone_number":e.dialCode&&(this.phoneNumber.countryDialCodeValue=e.dialCode),this.phoneNumber.phoneNumberValue=e.value;break;case"password":t.password=void 0===e.value?"":e.value}}},{key:"render",value:function(){var e=this;return Object(r.i)(r.b,null,Object(r.i)("amplify-form-section",{headerText:a.a.get(this.headerText),handleSubmit:this.handleSubmit,testDataPrefix:"sign-in"},Object(r.i)("div",{slot:"subtitle"},Object(r.i)("slot",{name:"header-subtitle"})),Object(r.i)("slot",{name:"federated-buttons"},Object(r.i)("amplify-federated-buttons",{handleAuthStateChange:this.handleAuthStateChange,federated:this.federated})),!Object(s.d)(this.federated)&&Object(r.i)("amplify-strike",null,"or"),Object(r.i)("amplify-auth-fields",{formFields:this.newFormFields}),Object(r.i)("div",{slot:"amplify-form-section-footer",class:"sign-in-form-footer"},Object(r.i)("slot",{name:"footer"},Object(r.i)("slot",{name:"secondary-footer-content"},this.hideSignUp?Object(r.i)("span",null):Object(r.i)("span",null,a.a.get(l.a.NO_ACCOUNT_TEXT)," ",Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(u.a.SignUp)},"data-test":"sign-in-create-account-link"},a.a.get(l.a.CREATE_ACCOUNT_TEXT)))),Object(r.i)("slot",{name:"primary-footer-content"},Object(r.i)("amplify-button",{type:"submit",disabled:this.loading,"data-test":"sign-in-sign-in-button"},this.loading?Object(r.i)("amplify-loading-spinner",null):Object(r.i)("span",null,a.a.get(this.submitButtonText))))))))}}],[{key:"watchers",get:function(){return{formFields:["formFieldsHandler"]}}}]),e}();v.style=":host{--footer-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--footer-font-family:var(--amplify-font-family);--font-weight:var(--amplify-font-weight)}.sign-in-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-in-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-in-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-in-form-footer amplify-button{margin-bottom:0}}.sign-in-form-footer *+*{margin-bottom:15px}";var C=function(){function e(t){var n=this;_classCallCheck(this,e),Object(r.k)(this,t),this.handleSubmit=function(e){return n.signUp(e)},this.headerText=l.a.SIGN_UP_HEADER_TEXT,this.submitButtonText=l.a.SIGN_UP_SUBMIT_BUTTON_TEXT,this.haveAccountText=l.a.SIGN_UP_HAVE_ACCOUNT_TEXT,this.signInText=l.a.SIGN_IN_TEXT,this.formFields=[],this.handleAuthStateChange=c.d,this.usernameAlias="username",this.newFormFields=[],this.phoneNumber={countryDialCodeValue:h.q,phoneNumberValue:null},this.loading=!1,this.signUpAttributes={username:"",password:"",attributes:{}}}var t;return _createClass(e,[{key:"handleFormFieldInputChange",value:function(e){var t=this;switch(e){case"username":return function(e){return t.signUpAttributes.username=e.target.value};case"password":return function(e){return t.signUpAttributes.password=e.target.value};case"email":return function(e){return t.signUpAttributes.attributes.email=e.target.value};case"phone_number":return function(e){return Object(c.f)(e,t.phoneNumber)};default:return function(n){return t.signUpAttributes.attributes[e]=n.target.value}}}},{key:"handleFormFieldInputWithCallback",value:function(e,t){(t.handleInputChange?t.handleInputChange:function(e,t){t(e)})(e,this.handleFormFieldInputChange(t.type).bind(this))}},{key:"signUp",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.preventDefault(),o.a&&"function"==typeof o.a.signUp){e.next=2;break}throw new Error(h.d);case 2:if(this.loading=!0,this.phoneNumber.phoneNumberValue)try{this.signUpAttributes.attributes.phone_number=Object(c.b)(this.phoneNumber)}catch(a){Object(c.a)(a)}switch(this.usernameAlias){case"email":case"phone_number":this.signUpAttributes.username=this.signUpAttributes.attributes[this.usernameAlias]}return this.signUpAttributes.username.indexOf(" ")>=0&&Object(c.a)(new Error(l.a.USERNAME_REMOVE_WHITESPACE)),this.signUpAttributes.password!==this.signUpAttributes.password.trim()&&Object(c.a)(new Error(l.a.PASSWORD_REMOVE_WHITESPACE)),e.prev=5,e.next=8,o.a.signUp(this.signUpAttributes);case 8:if(n=e.sent){e.next=11;break}throw new Error(l.a.SIGN_UP_FAILED);case 11:if(!n.userConfirmed){e.next=16;break}return e.next=14,Object(d.b)(this.signUpAttributes.username,this.signUpAttributes.password,this.handleAuthStateChange);case 14:e.next=18;break;case 16:r=Object.assign({},this.signUpAttributes),this.handleAuthStateChange(u.a.ConfirmSignUp,Object.assign(Object.assign({},n.user),{signUpAttrs:r}));case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(5),Object(c.a)(e.t0);case 23:return e.prev=23,this.loading=!1,e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[5,20,23,26]])}))),function(e){return t.apply(this,arguments)})},{key:"buildDefaultFormFields",value:function(){switch(this.usernameAlias){case"email":this.newFormFields=[{type:"email",placeholder:a.a.get(l.a.SIGN_UP_EMAIL_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"sign-up-email-input"}},{type:"password",placeholder:a.a.get(l.a.SIGN_UP_PASSWORD_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("password"),inputProps:{"data-test":"sign-up-password-input"}},{type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"sign-up-phone-number-input"}}];break;case"phone_number":this.newFormFields=[{type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"sign-up-phone-number-input"}},{type:"password",placeholder:a.a.get(l.a.SIGN_UP_PASSWORD_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("password"),inputProps:{"data-test":"sign-up-password-input"}},{type:"email",placeholder:a.a.get(l.a.SIGN_UP_EMAIL_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"sign-up-email-input"}}];break;case"username":default:this.newFormFields=[{type:"username",placeholder:a.a.get(l.a.SIGN_UP_USERNAME_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("username"),inputProps:{"data-test":"sign-up-username-input"}},{type:"password",placeholder:a.a.get(l.a.SIGN_UP_PASSWORD_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("password"),inputProps:{"data-test":"sign-up-password-input"}},{type:"email",placeholder:a.a.get(l.a.SIGN_UP_EMAIL_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"sign-up-email-input"}},{type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"sign-up-phone-number-input"}}]}}},{key:"buildFormFields",value:function(){var e=this;if(0===this.formFields.length)this.buildDefaultFormFields();else{var t=[];this.formFields.forEach((function(n){var r=Object.assign({},n);r.handleInputChange=function(t){return e.handleFormFieldInputWithCallback(t,n)},e.setFieldValue(n,e.signUpAttributes),t.push(r)})),this.newFormFields=t}}},{key:"setFieldValue",value:function(e,t){switch(e.type){case"username":t.username=void 0===e.value?"":e.value;break;case"password":t.password=void 0===e.value?"":e.value;break;case"email":t.attributes.email=e.value;break;case"phone_number":e.dialCode&&(this.phoneNumber.countryDialCodeValue=e.dialCode),this.phoneNumber.phoneNumberValue=e.value;break;default:t.attributes[e.type]=e.value}}},{key:"componentWillLoad",value:function(){Object(c.c)(this.usernameAlias),this.buildFormFields()}},{key:"formFieldsHandler",value:function(){this.buildFormFields()}},{key:"render",value:function(){var e=this;return Object(r.i)(r.b,null,Object(r.i)("amplify-form-section",{headerText:a.a.get(this.headerText),handleSubmit:this.handleSubmit,testDataPrefix:"sign-up"},Object(r.i)("div",{slot:"subtitle"},Object(r.i)("slot",{name:"header-subtitle"})),Object(r.i)("amplify-auth-fields",{formFields:this.newFormFields}),Object(r.i)("div",{class:"sign-up-form-footer",slot:"amplify-form-section-footer"},Object(r.i)("slot",{name:"footer"},Object(r.i)("slot",{name:"secondary-footer-content"},Object(r.i)("span",null,a.a.get(this.haveAccountText)," ",Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(u.a.SignIn)},"data-test":"sign-up-sign-in-link"},a.a.get(this.signInText)))),Object(r.i)("slot",{name:"primary-footer-content"},Object(r.i)("amplify-button",{type:"submit","data-test":"sign-up-create-account-button"},this.loading?Object(r.i)("amplify-loading-spinner",null):Object(r.i)("span",null,a.a.get(this.submitButtonText))))))))}}],[{key:"watchers",get:function(){return{formFields:["formFieldsHandler"]}}}]),e}();C.style=":host{--footer-font-family:var(--amplify-font-family);--footer-font-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--font-weight:var(--amplify-font-weight)}.sign-up-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-font-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-up-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-up-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-up-form-footer amplify-button{margin-bottom:0}}.sign-up-form-footer *+*{margin-bottom:15px}";var F=new i.a("AmplifyVerifyContact"),_=function(){function e(t){_classCallCheck(this,e),Object(r.k)(this,t),this.handleAuthStateChange=c.d,this.loading=!1}var t,n;return _createClass(e,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.verifyAttr?this.submit(this.code):this.verify(this.contact)}},{key:"submit",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.verifyAttr,o.a&&"function"==typeof o.a.verifyCurrentUserAttributeSubmit){e.next=3;break}throw new Error(h.d);case 3:return this.loading=!0,e.prev=4,e.next=7,o.a.verifyCurrentUserAttributeSubmit(n,t);case 7:r=e.sent,F.debug(r),this.handleAuthStateChange(u.a.SignedIn,this.user),this.verifyAttr=null,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),Object(c.a)(e.t0),F.error(e.t0);case 14:return e.prev=14,this.loading=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[4,11,14,17]])}))),function(e){return n.apply(this,arguments)})},{key:"verify",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=19;break}if(o.a&&"function"==typeof o.a.verifyCurrentUserAttribute){e.next=3;break}throw new Error(h.d);case 3:return this.loading=!0,e.prev=4,e.next=7,o.a.verifyCurrentUserAttribute(t);case 7:n=e.sent,F.debug(n),this.verifyAttr=t,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),Object(c.a)(e.t0),F.error(e.t0);case 14:return e.prev=14,this.loading=!1,e.finish(14);case 17:e.next=20;break;case 19:F.error("Neither Email nor Phone Number selected");case 20:case"end":return e.stop()}}),e,this,[[4,11,14,17]])}))),function(e){return t.apply(this,arguments)})},{key:"handleInputChange",value:function(e){var t=e.target.name;"code"===t?this.code=e.target.value:"contact"===t&&(this.contact=e.target.value)}},{key:"renderSubmit",value:function(){var e=this;return Object(r.i)("div",null,Object(r.i)("amplify-input",{inputProps:{autocomplete:"off","data-test":"verify-contact-code-input"},name:"code",placeholder:a.a.get(l.a.CODE_PLACEHOLDER),handleInputChange:function(t){return e.handleInputChange(t)}}))}},{key:"renderVerify",value:function(){var e=this,t=this.user;if(!t)return F.debug("No user to verify"),null;var n=t.unverified;if(!n)return F.debug("Unverified variable does not exist on user"),null;var i=n.email,s=n.phone_number;return Object(r.i)("div",null,i&&Object(r.i)("amplify-radio-button",{label:a.a.get(l.a.VERIFY_CONTACT_EMAIL_LABEL),key:"email",name:"contact",value:"email",handleInputChange:function(t){return e.handleInputChange(t)},inputProps:{"data-test":"verify-contact-email-radio"}}),s&&Object(r.i)("amplify-radio-button",{label:a.a.get(l.a.VERIFY_CONTACT_PHONE_LABEL),key:"phone_number",name:"contact",value:"phone_number",handleInputChange:function(t){return e.handleInputChange(t)},inputProps:{"data-test":"verify-contact-email-radio"}}))}},{key:"render",value:function(){var e=this;return Object(r.i)(r.b,null,Object(r.i)("amplify-form-section",{handleSubmit:function(t){return e.handleSubmit(t)},headerText:a.a.get(l.a.VERIFY_CONTACT_HEADER_TEXT),loading:this.loading,secondaryFooterContent:Object(r.i)("span",null,Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(u.a.SignedIn,e.user)}},"Skip")),submitButtonText:a.a.get(this.verifyAttr?l.a.VERIFY_CONTACT_SUBMIT_LABEL:l.a.VERIFY_CONTACT_VERIFY_LABEL)},this.verifyAttr?this.renderSubmit():this.renderVerify()))}}]),e}()}}]);
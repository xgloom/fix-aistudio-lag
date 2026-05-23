// ==UserScript==
// @name         fix-aistudio-lag
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes GPU lag from Google AI Studio
// @author       xgloom
// @match        https://aistudio.google.com/*
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        * {
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
        }

        * {
            scroll-behavior: auto !important;
        }
    `);

})();
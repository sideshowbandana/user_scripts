// ==UserScript==
// @name       Jira Filter Fix
// @homepage   http://github.com/sideshowbandana
// @version    0.1
// @description  Remove the default share with everyone
// @match      https://*.onjira.com/secure/SaveAsFilter!default.jspa
// @copyright  2012+, Kyle Barton
// ==/UserScript==
document.getElementsByClassName("shareTrash")[0].click();

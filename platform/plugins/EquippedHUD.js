/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = skyrimPlatform;

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetIntValue": () => (/* binding */ SetIntValue),
/* harmony export */   "SetFloatValue": () => (/* binding */ SetFloatValue),
/* harmony export */   "SetStringValue": () => (/* binding */ SetStringValue),
/* harmony export */   "SetFormValue": () => (/* binding */ SetFormValue),
/* harmony export */   "UnsetIntValue": () => (/* binding */ UnsetIntValue),
/* harmony export */   "UnsetFloatValue": () => (/* binding */ UnsetFloatValue),
/* harmony export */   "UnsetStringValue": () => (/* binding */ UnsetStringValue),
/* harmony export */   "UnsetFormValue": () => (/* binding */ UnsetFormValue),
/* harmony export */   "HasIntValue": () => (/* binding */ HasIntValue),
/* harmony export */   "HasFloatValue": () => (/* binding */ HasFloatValue),
/* harmony export */   "HasStringValue": () => (/* binding */ HasStringValue),
/* harmony export */   "HasFormValue": () => (/* binding */ HasFormValue),
/* harmony export */   "GetIntValue": () => (/* binding */ GetIntValue),
/* harmony export */   "GetFloatValue": () => (/* binding */ GetFloatValue),
/* harmony export */   "GetStringValue": () => (/* binding */ GetStringValue),
/* harmony export */   "GetFormValue": () => (/* binding */ GetFormValue),
/* harmony export */   "PluckIntValue": () => (/* binding */ PluckIntValue),
/* harmony export */   "PluckFloatValue": () => (/* binding */ PluckFloatValue),
/* harmony export */   "PluckStringValue": () => (/* binding */ PluckStringValue),
/* harmony export */   "PluckFormValue": () => (/* binding */ PluckFormValue),
/* harmony export */   "AdjustIntValue": () => (/* binding */ AdjustIntValue),
/* harmony export */   "AdjustFloatValue": () => (/* binding */ AdjustFloatValue),
/* harmony export */   "IntListAdd": () => (/* binding */ IntListAdd),
/* harmony export */   "FloatListAdd": () => (/* binding */ FloatListAdd),
/* harmony export */   "StringListAdd": () => (/* binding */ StringListAdd),
/* harmony export */   "FormListAdd": () => (/* binding */ FormListAdd),
/* harmony export */   "IntListGet": () => (/* binding */ IntListGet),
/* harmony export */   "FloatListGet": () => (/* binding */ FloatListGet),
/* harmony export */   "StringListGet": () => (/* binding */ StringListGet),
/* harmony export */   "FormListGet": () => (/* binding */ FormListGet),
/* harmony export */   "IntListSet": () => (/* binding */ IntListSet),
/* harmony export */   "FloatListSet": () => (/* binding */ FloatListSet),
/* harmony export */   "StringListSet": () => (/* binding */ StringListSet),
/* harmony export */   "FormListSet": () => (/* binding */ FormListSet),
/* harmony export */   "IntListPluck": () => (/* binding */ IntListPluck),
/* harmony export */   "FloatListPluck": () => (/* binding */ FloatListPluck),
/* harmony export */   "StringListPluck": () => (/* binding */ StringListPluck),
/* harmony export */   "FormListPluck": () => (/* binding */ FormListPluck),
/* harmony export */   "IntListShift": () => (/* binding */ IntListShift),
/* harmony export */   "FloatListShift": () => (/* binding */ FloatListShift),
/* harmony export */   "StringListShift": () => (/* binding */ StringListShift),
/* harmony export */   "FormListShift": () => (/* binding */ FormListShift),
/* harmony export */   "IntListPop": () => (/* binding */ IntListPop),
/* harmony export */   "FloatListPop": () => (/* binding */ FloatListPop),
/* harmony export */   "StringListPop": () => (/* binding */ StringListPop),
/* harmony export */   "FormListPop": () => (/* binding */ FormListPop),
/* harmony export */   "IntListAdjust": () => (/* binding */ IntListAdjust),
/* harmony export */   "FloatListAdjust": () => (/* binding */ FloatListAdjust),
/* harmony export */   "IntListInsert": () => (/* binding */ IntListInsert),
/* harmony export */   "FloatListInsert": () => (/* binding */ FloatListInsert),
/* harmony export */   "StringListInsert": () => (/* binding */ StringListInsert),
/* harmony export */   "FormListInsert": () => (/* binding */ FormListInsert),
/* harmony export */   "IntListRemove": () => (/* binding */ IntListRemove),
/* harmony export */   "FloatListRemove": () => (/* binding */ FloatListRemove),
/* harmony export */   "StringListRemove": () => (/* binding */ StringListRemove),
/* harmony export */   "FormListRemove": () => (/* binding */ FormListRemove),
/* harmony export */   "IntListClear": () => (/* binding */ IntListClear),
/* harmony export */   "FloatListClear": () => (/* binding */ FloatListClear),
/* harmony export */   "StringListClear": () => (/* binding */ StringListClear),
/* harmony export */   "FormListClear": () => (/* binding */ FormListClear),
/* harmony export */   "IntListRemoveAt": () => (/* binding */ IntListRemoveAt),
/* harmony export */   "FloatListRemoveAt": () => (/* binding */ FloatListRemoveAt),
/* harmony export */   "StringListRemoveAt": () => (/* binding */ StringListRemoveAt),
/* harmony export */   "FormListRemoveAt": () => (/* binding */ FormListRemoveAt),
/* harmony export */   "IntListCount": () => (/* binding */ IntListCount),
/* harmony export */   "FloatListCount": () => (/* binding */ FloatListCount),
/* harmony export */   "StringListCount": () => (/* binding */ StringListCount),
/* harmony export */   "FormListCount": () => (/* binding */ FormListCount),
/* harmony export */   "IntListCountValue": () => (/* binding */ IntListCountValue),
/* harmony export */   "FloatListCountValue": () => (/* binding */ FloatListCountValue),
/* harmony export */   "StringListCountValue": () => (/* binding */ StringListCountValue),
/* harmony export */   "FormListCountValue": () => (/* binding */ FormListCountValue),
/* harmony export */   "IntListFind": () => (/* binding */ IntListFind),
/* harmony export */   "FloatListFind": () => (/* binding */ FloatListFind),
/* harmony export */   "StringListFind": () => (/* binding */ StringListFind),
/* harmony export */   "FormListFind": () => (/* binding */ FormListFind),
/* harmony export */   "IntListHas": () => (/* binding */ IntListHas),
/* harmony export */   "FloatListHas": () => (/* binding */ FloatListHas),
/* harmony export */   "StringListHas": () => (/* binding */ StringListHas),
/* harmony export */   "FormListHas": () => (/* binding */ FormListHas),
/* harmony export */   "IntListSort": () => (/* binding */ IntListSort),
/* harmony export */   "FloatListSort": () => (/* binding */ FloatListSort),
/* harmony export */   "StringListSort": () => (/* binding */ StringListSort),
/* harmony export */   "FormListSort": () => (/* binding */ FormListSort),
/* harmony export */   "IntListSlice": () => (/* binding */ IntListSlice),
/* harmony export */   "FloatListSlice": () => (/* binding */ FloatListSlice),
/* harmony export */   "StringListSlice": () => (/* binding */ StringListSlice),
/* harmony export */   "FormListSlice": () => (/* binding */ FormListSlice),
/* harmony export */   "IntListResize": () => (/* binding */ IntListResize),
/* harmony export */   "FloatListResize": () => (/* binding */ FloatListResize),
/* harmony export */   "StringListResize": () => (/* binding */ StringListResize),
/* harmony export */   "FormListResize": () => (/* binding */ FormListResize),
/* harmony export */   "IntListCopy": () => (/* binding */ IntListCopy),
/* harmony export */   "FloatListCopy": () => (/* binding */ FloatListCopy),
/* harmony export */   "StringListCopy": () => (/* binding */ StringListCopy),
/* harmony export */   "FormListCopy": () => (/* binding */ FormListCopy),
/* harmony export */   "IntListToArray": () => (/* binding */ IntListToArray),
/* harmony export */   "FloatListToArray": () => (/* binding */ FloatListToArray),
/* harmony export */   "StringListToArray": () => (/* binding */ StringListToArray),
/* harmony export */   "FormListToArray": () => (/* binding */ FormListToArray),
/* harmony export */   "FormListFilterByTypes": () => (/* binding */ FormListFilterByTypes),
/* harmony export */   "FormListFilterByType": () => (/* binding */ FormListFilterByType),
/* harmony export */   "CountIntValuePrefix": () => (/* binding */ CountIntValuePrefix),
/* harmony export */   "CountFloatValuePrefix": () => (/* binding */ CountFloatValuePrefix),
/* harmony export */   "CountStringValuePrefix": () => (/* binding */ CountStringValuePrefix),
/* harmony export */   "CountFormValuePrefix": () => (/* binding */ CountFormValuePrefix),
/* harmony export */   "CountIntListPrefix": () => (/* binding */ CountIntListPrefix),
/* harmony export */   "CountFloatListPrefix": () => (/* binding */ CountFloatListPrefix),
/* harmony export */   "CountStringListPrefix": () => (/* binding */ CountStringListPrefix),
/* harmony export */   "CountFormListPrefix": () => (/* binding */ CountFormListPrefix),
/* harmony export */   "CountAllPrefix": () => (/* binding */ CountAllPrefix),
/* harmony export */   "CountObjIntValuePrefix": () => (/* binding */ CountObjIntValuePrefix),
/* harmony export */   "CountObjFloatValuePrefix": () => (/* binding */ CountObjFloatValuePrefix),
/* harmony export */   "CountObjStringValuePrefix": () => (/* binding */ CountObjStringValuePrefix),
/* harmony export */   "CountObjFormValuePrefix": () => (/* binding */ CountObjFormValuePrefix),
/* harmony export */   "CountObjIntListPrefix": () => (/* binding */ CountObjIntListPrefix),
/* harmony export */   "CountObjFloatListPrefix": () => (/* binding */ CountObjFloatListPrefix),
/* harmony export */   "CountObjStringListPrefix": () => (/* binding */ CountObjStringListPrefix),
/* harmony export */   "CountObjFormListPrefix": () => (/* binding */ CountObjFormListPrefix),
/* harmony export */   "CountAllObjPrefix": () => (/* binding */ CountAllObjPrefix),
/* harmony export */   "ClearIntValuePrefix": () => (/* binding */ ClearIntValuePrefix),
/* harmony export */   "ClearFloatValuePrefix": () => (/* binding */ ClearFloatValuePrefix),
/* harmony export */   "ClearStringValuePrefix": () => (/* binding */ ClearStringValuePrefix),
/* harmony export */   "ClearFormValuePrefix": () => (/* binding */ ClearFormValuePrefix),
/* harmony export */   "ClearIntListPrefix": () => (/* binding */ ClearIntListPrefix),
/* harmony export */   "ClearFloatListPrefix": () => (/* binding */ ClearFloatListPrefix),
/* harmony export */   "ClearStringListPrefix": () => (/* binding */ ClearStringListPrefix),
/* harmony export */   "ClearFormListPrefix": () => (/* binding */ ClearFormListPrefix),
/* harmony export */   "ClearAllPrefix": () => (/* binding */ ClearAllPrefix),
/* harmony export */   "ClearObjIntValuePrefix": () => (/* binding */ ClearObjIntValuePrefix),
/* harmony export */   "ClearObjFloatValuePrefix": () => (/* binding */ ClearObjFloatValuePrefix),
/* harmony export */   "ClearObjStringValuePrefix": () => (/* binding */ ClearObjStringValuePrefix),
/* harmony export */   "ClearObjFormValuePrefix": () => (/* binding */ ClearObjFormValuePrefix),
/* harmony export */   "ClearObjIntListPrefix": () => (/* binding */ ClearObjIntListPrefix),
/* harmony export */   "ClearObjFloatListPrefix": () => (/* binding */ ClearObjFloatListPrefix),
/* harmony export */   "ClearObjStringListPrefix": () => (/* binding */ ClearObjStringListPrefix),
/* harmony export */   "ClearObjFormListPrefix": () => (/* binding */ ClearObjFormListPrefix),
/* harmony export */   "ClearAllObjPrefix": () => (/* binding */ ClearAllObjPrefix),
/* harmony export */   "debug_DeleteValues": () => (/* binding */ debug_DeleteValues),
/* harmony export */   "debug_DeleteAllValues": () => (/* binding */ debug_DeleteAllValues),
/* harmony export */   "debug_Cleanup": () => (/* binding */ debug_Cleanup),
/* harmony export */   "debug_AllIntObjs": () => (/* binding */ debug_AllIntObjs),
/* harmony export */   "debug_AllFloatObjs": () => (/* binding */ debug_AllFloatObjs),
/* harmony export */   "debug_AllStringObjs": () => (/* binding */ debug_AllStringObjs),
/* harmony export */   "debug_AllFormObjs": () => (/* binding */ debug_AllFormObjs),
/* harmony export */   "debug_AllIntListObjs": () => (/* binding */ debug_AllIntListObjs),
/* harmony export */   "debug_AllFloatListObjs": () => (/* binding */ debug_AllFloatListObjs),
/* harmony export */   "debug_AllStringListObjs": () => (/* binding */ debug_AllStringListObjs),
/* harmony export */   "debug_AllFormListObjs": () => (/* binding */ debug_AllFormListObjs),
/* harmony export */   "debug_AllObjIntKeys": () => (/* binding */ debug_AllObjIntKeys),
/* harmony export */   "debug_AllObjFloatKeys": () => (/* binding */ debug_AllObjFloatKeys),
/* harmony export */   "debug_AllObjStringKeys": () => (/* binding */ debug_AllObjStringKeys),
/* harmony export */   "debug_AllObjFormKeys": () => (/* binding */ debug_AllObjFormKeys),
/* harmony export */   "debug_AllObjIntListKeys": () => (/* binding */ debug_AllObjIntListKeys),
/* harmony export */   "debug_AllObjFloatListKeys": () => (/* binding */ debug_AllObjFloatListKeys),
/* harmony export */   "debug_AllObjStringListKeys": () => (/* binding */ debug_AllObjStringListKeys),
/* harmony export */   "debug_AllObjFormListKeys": () => (/* binding */ debug_AllObjFormListKeys),
/* harmony export */   "debug_GetIntObjectCount": () => (/* binding */ debug_GetIntObjectCount),
/* harmony export */   "debug_GetFloatObjectCount": () => (/* binding */ debug_GetFloatObjectCount),
/* harmony export */   "debug_GetStringObjectCount": () => (/* binding */ debug_GetStringObjectCount),
/* harmony export */   "debug_GetFormObjectCount": () => (/* binding */ debug_GetFormObjectCount),
/* harmony export */   "debug_GetIntListObjectCount": () => (/* binding */ debug_GetIntListObjectCount),
/* harmony export */   "debug_GetFloatListObjectCount": () => (/* binding */ debug_GetFloatListObjectCount),
/* harmony export */   "debug_GetStringListObjectCount": () => (/* binding */ debug_GetStringListObjectCount),
/* harmony export */   "debug_GetFormListObjectCount": () => (/* binding */ debug_GetFormListObjectCount),
/* harmony export */   "debug_GetIntObject": () => (/* binding */ debug_GetIntObject),
/* harmony export */   "debug_GetFloatObject": () => (/* binding */ debug_GetFloatObject),
/* harmony export */   "debug_GetStringObject": () => (/* binding */ debug_GetStringObject),
/* harmony export */   "debug_GetFormObject": () => (/* binding */ debug_GetFormObject),
/* harmony export */   "debug_GetIntListObject": () => (/* binding */ debug_GetIntListObject),
/* harmony export */   "debug_GetFloatListObject": () => (/* binding */ debug_GetFloatListObject),
/* harmony export */   "debug_GetStringListObject": () => (/* binding */ debug_GetStringListObject),
/* harmony export */   "debug_GetFormListObject": () => (/* binding */ debug_GetFormListObject),
/* harmony export */   "debug_GetIntKeysCount": () => (/* binding */ debug_GetIntKeysCount),
/* harmony export */   "debug_GetFloatKeysCount": () => (/* binding */ debug_GetFloatKeysCount),
/* harmony export */   "debug_GetStringKeysCount": () => (/* binding */ debug_GetStringKeysCount),
/* harmony export */   "debug_GetFormKeysCount": () => (/* binding */ debug_GetFormKeysCount),
/* harmony export */   "debug_GetIntListKeysCount": () => (/* binding */ debug_GetIntListKeysCount),
/* harmony export */   "debug_GetFloatListKeysCount": () => (/* binding */ debug_GetFloatListKeysCount),
/* harmony export */   "debug_GetStringListKeysCount": () => (/* binding */ debug_GetStringListKeysCount),
/* harmony export */   "debug_GetFormListKeysCount": () => (/* binding */ debug_GetFormListKeysCount),
/* harmony export */   "debug_GetIntKey": () => (/* binding */ debug_GetIntKey),
/* harmony export */   "debug_GetFloatKey": () => (/* binding */ debug_GetFloatKey),
/* harmony export */   "debug_GetStringKey": () => (/* binding */ debug_GetStringKey),
/* harmony export */   "debug_GetFormKey": () => (/* binding */ debug_GetFormKey),
/* harmony export */   "debug_GetIntListKey": () => (/* binding */ debug_GetIntListKey),
/* harmony export */   "debug_GetFloatListKey": () => (/* binding */ debug_GetFloatListKey),
/* harmony export */   "debug_GetStringListKey": () => (/* binding */ debug_GetStringListKey),
/* harmony export */   "debug_GetFormListKey": () => (/* binding */ debug_GetFormListKey),
/* harmony export */   "FileSetIntValue": () => (/* binding */ FileSetIntValue),
/* harmony export */   "FileSetFloatValue": () => (/* binding */ FileSetFloatValue),
/* harmony export */   "FileSetStringValue": () => (/* binding */ FileSetStringValue),
/* harmony export */   "FileSetFormValue": () => (/* binding */ FileSetFormValue),
/* harmony export */   "FileAdjustIntValue": () => (/* binding */ FileAdjustIntValue),
/* harmony export */   "FileAdjustFloatValue": () => (/* binding */ FileAdjustFloatValue),
/* harmony export */   "FileUnsetIntValue": () => (/* binding */ FileUnsetIntValue),
/* harmony export */   "FileUnsetFloatValue": () => (/* binding */ FileUnsetFloatValue),
/* harmony export */   "FileUnsetStringValue": () => (/* binding */ FileUnsetStringValue),
/* harmony export */   "FileUnsetFormValue": () => (/* binding */ FileUnsetFormValue),
/* harmony export */   "FileHasIntValue": () => (/* binding */ FileHasIntValue),
/* harmony export */   "FileHasFloatValue": () => (/* binding */ FileHasFloatValue),
/* harmony export */   "FileHasStringValue": () => (/* binding */ FileHasStringValue),
/* harmony export */   "FileHasFormValue": () => (/* binding */ FileHasFormValue),
/* harmony export */   "FileGetIntValue": () => (/* binding */ FileGetIntValue),
/* harmony export */   "FileGetFloatValue": () => (/* binding */ FileGetFloatValue),
/* harmony export */   "FileGetStringValue": () => (/* binding */ FileGetStringValue),
/* harmony export */   "FileGetFormValue": () => (/* binding */ FileGetFormValue),
/* harmony export */   "FileIntListAdd": () => (/* binding */ FileIntListAdd),
/* harmony export */   "FileFloatListAdd": () => (/* binding */ FileFloatListAdd),
/* harmony export */   "FileStringListAdd": () => (/* binding */ FileStringListAdd),
/* harmony export */   "FileFormListAdd": () => (/* binding */ FileFormListAdd),
/* harmony export */   "FileIntListAdjust": () => (/* binding */ FileIntListAdjust),
/* harmony export */   "FileFloatListAdjust": () => (/* binding */ FileFloatListAdjust),
/* harmony export */   "FileIntListRemove": () => (/* binding */ FileIntListRemove),
/* harmony export */   "FileFloatListRemove": () => (/* binding */ FileFloatListRemove),
/* harmony export */   "FileStringListRemove": () => (/* binding */ FileStringListRemove),
/* harmony export */   "FileFormListRemove": () => (/* binding */ FileFormListRemove),
/* harmony export */   "FileIntListGet": () => (/* binding */ FileIntListGet),
/* harmony export */   "FileFloatListGet": () => (/* binding */ FileFloatListGet),
/* harmony export */   "FileStringListGet": () => (/* binding */ FileStringListGet),
/* harmony export */   "FileFormListGet": () => (/* binding */ FileFormListGet),
/* harmony export */   "FileIntListSet": () => (/* binding */ FileIntListSet),
/* harmony export */   "FileFloatListSet": () => (/* binding */ FileFloatListSet),
/* harmony export */   "FileStringListSet": () => (/* binding */ FileStringListSet),
/* harmony export */   "FileFormListSet": () => (/* binding */ FileFormListSet),
/* harmony export */   "FileIntListClear": () => (/* binding */ FileIntListClear),
/* harmony export */   "FileFloatListClear": () => (/* binding */ FileFloatListClear),
/* harmony export */   "FileStringListClear": () => (/* binding */ FileStringListClear),
/* harmony export */   "FileFormListClear": () => (/* binding */ FileFormListClear),
/* harmony export */   "FileIntListRemoveAt": () => (/* binding */ FileIntListRemoveAt),
/* harmony export */   "FileFloatListRemoveAt": () => (/* binding */ FileFloatListRemoveAt),
/* harmony export */   "FileStringListRemoveAt": () => (/* binding */ FileStringListRemoveAt),
/* harmony export */   "FileFormListRemoveAt": () => (/* binding */ FileFormListRemoveAt),
/* harmony export */   "FileIntListInsert": () => (/* binding */ FileIntListInsert),
/* harmony export */   "FileFloatListInsert": () => (/* binding */ FileFloatListInsert),
/* harmony export */   "FileStringListInsert": () => (/* binding */ FileStringListInsert),
/* harmony export */   "FileFormListInsert": () => (/* binding */ FileFormListInsert),
/* harmony export */   "FileIntListCount": () => (/* binding */ FileIntListCount),
/* harmony export */   "FileFloatListCount": () => (/* binding */ FileFloatListCount),
/* harmony export */   "FileStringListCount": () => (/* binding */ FileStringListCount),
/* harmony export */   "FileFormListCount": () => (/* binding */ FileFormListCount),
/* harmony export */   "FileIntListFind": () => (/* binding */ FileIntListFind),
/* harmony export */   "FileFloatListFind": () => (/* binding */ FileFloatListFind),
/* harmony export */   "FileStringListFind": () => (/* binding */ FileStringListFind),
/* harmony export */   "FileFormListFind": () => (/* binding */ FileFormListFind),
/* harmony export */   "FileIntListHas": () => (/* binding */ FileIntListHas),
/* harmony export */   "FileFloatListHas": () => (/* binding */ FileFloatListHas),
/* harmony export */   "FileStringListHas": () => (/* binding */ FileStringListHas),
/* harmony export */   "FileFormListHas": () => (/* binding */ FileFormListHas),
/* harmony export */   "FileIntListSlice": () => (/* binding */ FileIntListSlice),
/* harmony export */   "FileFloatListSlice": () => (/* binding */ FileFloatListSlice),
/* harmony export */   "FileStringListSlice": () => (/* binding */ FileStringListSlice),
/* harmony export */   "FileFormListSlice": () => (/* binding */ FileFormListSlice),
/* harmony export */   "FileIntListResize": () => (/* binding */ FileIntListResize),
/* harmony export */   "FileFloatListResize": () => (/* binding */ FileFloatListResize),
/* harmony export */   "FileStringListResize": () => (/* binding */ FileStringListResize),
/* harmony export */   "FileFormListResize": () => (/* binding */ FileFormListResize),
/* harmony export */   "FileIntListCopy": () => (/* binding */ FileIntListCopy),
/* harmony export */   "FileFloatListCopy": () => (/* binding */ FileFloatListCopy),
/* harmony export */   "FileStringListCopy": () => (/* binding */ FileStringListCopy),
/* harmony export */   "FileFormListCopy": () => (/* binding */ FileFormListCopy),
/* harmony export */   "debug_SaveFile": () => (/* binding */ debug_SaveFile),
/* harmony export */   "debug_FileGetIntKeysCount": () => (/* binding */ debug_FileGetIntKeysCount),
/* harmony export */   "debug_FileGetFloatKeysCount": () => (/* binding */ debug_FileGetFloatKeysCount),
/* harmony export */   "debug_FileGetStringKeysCount": () => (/* binding */ debug_FileGetStringKeysCount),
/* harmony export */   "debug_FileGetIntListKeysCount": () => (/* binding */ debug_FileGetIntListKeysCount),
/* harmony export */   "debug_FileGetFloatListKeysCount": () => (/* binding */ debug_FileGetFloatListKeysCount),
/* harmony export */   "debug_FileGetStringListKeysCount": () => (/* binding */ debug_FileGetStringListKeysCount),
/* harmony export */   "debug_FileGetIntKey": () => (/* binding */ debug_FileGetIntKey),
/* harmony export */   "debug_FileGetFloatKey": () => (/* binding */ debug_FileGetFloatKey),
/* harmony export */   "debug_FileGetStringKey": () => (/* binding */ debug_FileGetStringKey),
/* harmony export */   "debug_FileGetIntListKey": () => (/* binding */ debug_FileGetIntListKey),
/* harmony export */   "debug_FileGetFloatListKey": () => (/* binding */ debug_FileGetFloatListKey),
/* harmony export */   "debug_FileGetStringListKey": () => (/* binding */ debug_FileGetStringListKey),
/* harmony export */   "debug_FileDeleteAllValues": () => (/* binding */ debug_FileDeleteAllValues),
/* harmony export */   "debug_SetDebugMode": () => (/* binding */ debug_SetDebugMode),
/* harmony export */   "ImportFile": () => (/* binding */ ImportFile),
/* harmony export */   "ExportFile": () => (/* binding */ ExportFile)
/* harmony export */ });
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__);
/*
==============================================
Typescript definitions for v4.2
==============================================

This file was automatically generated by Papyrus-2-Typescript.exe
https://github.com/CarlosLeyvaAyala/Papyrus-2-Typescript

The program has no way to know the intention of the humans that made
the scripts, so it's always advisable to manually check all generated
files to make sure everything is declared as it should.

Take note the program assumes this script exists in some subfolder
to the folder where `skyrimPlatform.ts` is found, otherwise you'll get
"Cannot find module..." type of errors.

If you want to have this script in some other place, just change the
relative path of each `import`.
*/

var sn = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.StorageUtil;
/** MOD AUTHORS, READ!

    This script contains functions for saving and loading any amount of int, float, form and string values
    by name on a form or globally. These values can be accessed and changed from any mod which allows
    mods to become compatible with each other without adding any requirements to the other mod or its version
    other than this plugin.

    Values will stay on forms or globally until they are Unset or Cleared in case of lists. If value
    is set on a form and the object is deleted then THE value will be removed when saving game.
    If you are done with using a certain variable you should use Unset or Clear function to remove them
    but it is not required.

    Saving MCM config values here would allow other mods to change your mod settings which may
    be useful. It should also allow you to change MCM config script without worrying about versioning
    since there are no new variables in the script itself.

    Functions that start with File in the name will save values to a separate file, so that you can
    access the same values from all savegames. This may be useful for configuration settings.
   (FILE FUNCTIONS ARE DEPRECATED! USE JSONUTIL.PSC INSTEAD)

    Saved values take very little memory - expect to use less than 500 KB of physical memory even when
    setting thousands of values.

    Value names are not case sensitive, that means GetIntValue(none, "abc") == GetIntValue(none, "aBC").

    All values are separated from each other by type! That means SetIntValue(none, "abc", 1) and
    SetFloatValue(none, "abc", 2.0) create separate entries and aren't affected by each other.
    StorageUtil.SetIntValue(none, "myValue", 1)
    StorageUtil.SetFloatValue(none, "myValue", 5.0)
    int value = StorageUtil.GetIntValue(none, "myValue")
    value == 1 ; true
    value == 5 ; false

    When choosing names for variables try to remember that all mods access the same storage, so if you
    create a variable with name "Name" then many other mods could use the same variable but in different
    ways that lead to unwanted behavior. It is recommended to prefix the variable with your mod name,
    that way you can be sure nobody else will try to use the same variable in their mod. For example
    realistic needs and diseases might set hunger as "rnd_hungervalue".

    You can also use this storage to make your mod functions available to other mods, for example if
    your mod has a function that sets an Actor to be invisible you could add a script that checks:
    int i = StorageUtil.FormListCount(none, "MakeInvisible")
    while(i > 0)
        i--
        Actor make = StorageUtil.FormListGet(none, "MakeInvisible", i) as Actor
        if(make)
            MyScriptFunction(make)
        endif
        StorageUtil.FormListRemoveAt(none, "MakeInvisible", i)
    endwhile
    And the other mod could write:
    StorageUtil.FormListAdd(none, "MakeInvisible", myActor)
    to make someone invisible using your mod. But if your mod isn't present then nothing happens.
    This is just an example, I'm sure you can find better ways to implement compatibility, it would
    help to include a documentation for other modders if you do.
/**





/**
    Storage functions - values in save game file. */
/** Set int/float/string/Form value globally or on any form by name and return
   the value passed, or as uninitialized variable if invalid keys given.

   ObjKey: form to save on. Set none to save globally.
   KeyName: name of value.
   value: value to set to the given keys. If zero, empty, or none are given, the key will be unset. */
var SetIntValue = function (ObjKey, KeyName, value) { return sn.SetIntValue(ObjKey, KeyName, value); };
var SetFloatValue = function (ObjKey, KeyName, value) { return sn.SetFloatValue(ObjKey, KeyName, value); };
var SetStringValue = function (ObjKey, KeyName, value) { return sn.SetStringValue(ObjKey, KeyName, value); };
var SetFormValue = function (ObjKey, KeyName, value) { return sn.SetFormValue(ObjKey, KeyName, value); };
/** Remove a previously set int/float/string/Form value on an form or globally and
if successful. This will return false if value didn't exist.

   ObjKey: form to remove from. Set none to remove global value.
   KeyName: name of value. */
var UnsetIntValue = function (ObjKey, KeyName) { return sn.UnsetIntValue(ObjKey, KeyName); };
var UnsetFloatValue = function (ObjKey, KeyName) { return sn.UnsetFloatValue(ObjKey, KeyName); };
var UnsetStringValue = function (ObjKey, KeyName) { return sn.UnsetStringValue(ObjKey, KeyName); };
var UnsetFormValue = function (ObjKey, KeyName) { return sn.UnsetFormValue(ObjKey, KeyName); };
/** Check if int/float/string/Form value has been set on form or globally.

   ObjKey: form to check on. Set none to check global value.
   KeyName: name of value. */
var HasIntValue = function (ObjKey, KeyName) { return sn.HasIntValue(ObjKey, KeyName); };
var HasFloatValue = function (ObjKey, KeyName) { return sn.HasFloatValue(ObjKey, KeyName); };
var HasStringValue = function (ObjKey, KeyName) { return sn.HasStringValue(ObjKey, KeyName); };
var HasFormValue = function (ObjKey, KeyName) { return sn.HasFormValue(ObjKey, KeyName); };
/** Get previously saved int/float/string/Form value on form or globally.

   ObjKey: form to get from. Set none to get global value.
   KeyName: name of value.
   [optional] missing: if value has not been set, return this value instead. */
var GetIntValue = function (ObjKey, KeyName, missing) {
    if (missing === void 0) { missing = 0; }
    return sn.GetIntValue(ObjKey, KeyName, missing);
};
var GetFloatValue = function (ObjKey, KeyName, missing) {
    if (missing === void 0) { missing = 0.0; }
    return sn.GetFloatValue(ObjKey, KeyName, missing);
};
var GetStringValue = function (ObjKey, KeyName, missing) {
    if (missing === void 0) { missing = ""; }
    return sn.GetStringValue(ObjKey, KeyName, missing);
};
var GetFormValue = function (ObjKey, KeyName, missing) {
    if (missing === void 0) { missing = null; }
    return sn.GetFormValue(ObjKey, KeyName, missing);
};
/** Plucks a previously saved int/float/string/Form value on form or globally.
   Returning the value stored, then removing it from storage.

   ObjKey: form to pluck from. Set none to get global value.
   KeyName: name of value.
   [optional] missing: if value has not been set, return this value instead. */
var PluckIntValue = function (ObjKey, KeyName, missing) {
    if (missing === void 0) { missing = 0; }
    return sn.PluckIntValue(ObjKey, KeyName, missing);
};
var PluckFloatValue = function (ObjKey, KeyName, missing) {
    if (missing === void 0) { missing = 0.0; }
    return sn.PluckFloatValue(ObjKey, KeyName, missing);
};
var PluckStringValue = function (ObjKey, KeyName, missing) {
    if (missing === void 0) { missing = ""; }
    return sn.PluckStringValue(ObjKey, KeyName, missing);
};
var PluckFormValue = function (ObjKey, KeyName, missing) {
    if (missing === void 0) { missing = null; }
    return sn.PluckFormValue(ObjKey, KeyName, missing);
};
/** Get previously saved int/float/string/Form value on form or globally.

   ObjKey: form to get from. Set none to get global value.
   KeyName: name of value.
   amount: +/- the amount to adjust the current value by

   given keys will be initialized to given amount if it does not exist */
var AdjustIntValue = function (ObjKey, KeyName, amount) { return sn.AdjustIntValue(ObjKey, KeyName, amount); };
var AdjustFloatValue = function (ObjKey, KeyName, amount) { return sn.AdjustFloatValue(ObjKey, KeyName, amount); };
/** Add an int/float/string/Form to a list on form or globally and return
   the value's new index. Index can be -1 if we were unable to add
   the value.

   ObjKey: form to add to. Set none to add global value.
   KeyName: name of value.
   value: value to add.
   [optional] allowDuplicate: allow adding value to list if this value already exists in the list. */
var IntListAdd = function (ObjKey, KeyName, value, allowDuplicate) {
    if (allowDuplicate === void 0) { allowDuplicate = true; }
    return sn.IntListAdd(ObjKey, KeyName, value, allowDuplicate);
};
var FloatListAdd = function (ObjKey, KeyName, value, allowDuplicate) {
    if (allowDuplicate === void 0) { allowDuplicate = true; }
    return sn.FloatListAdd(ObjKey, KeyName, value, allowDuplicate);
};
var StringListAdd = function (ObjKey, KeyName, value, allowDuplicate) {
    if (allowDuplicate === void 0) { allowDuplicate = true; }
    return sn.StringListAdd(ObjKey, KeyName, value, allowDuplicate);
};
var FormListAdd = function (ObjKey, KeyName, value, allowDuplicate) {
    if (allowDuplicate === void 0) { allowDuplicate = true; }
    return sn.FormListAdd(ObjKey, KeyName, value, allowDuplicate);
};
/** Get a value from list by index on form or globally.
   This will return 0 as value if there was a problem.

   ObjKey: form to get value on. Set none to get global list value.
   KeyName: name of list.
   index: index of value in the list. */
var IntListGet = function (ObjKey, KeyName, index) { return sn.IntListGet(ObjKey, KeyName, index); };
var FloatListGet = function (ObjKey, KeyName, index) { return sn.FloatListGet(ObjKey, KeyName, index); };
var StringListGet = function (ObjKey, KeyName, index) { return sn.StringListGet(ObjKey, KeyName, index); };
var FormListGet = function (ObjKey, KeyName, index) { return sn.FormListGet(ObjKey, KeyName, index); };
/** Set a value in list by index on form or globally.
   This will return the previous value or 0 if there was a problem.

   ObjKey: form to set value on. Set none to set global list value.
   KeyName: name of list.
   index: index of value in the list.
   value: value to set to. */
var IntListSet = function (ObjKey, KeyName, index, value) { return sn.IntListSet(ObjKey, KeyName, index, value); };
var FloatListSet = function (ObjKey, KeyName, index, value) { return sn.FloatListSet(ObjKey, KeyName, index, value); };
var StringListSet = function (ObjKey, KeyName, index, value) { return sn.StringListSet(ObjKey, KeyName, index, value); };
var FormListSet = function (ObjKey, KeyName, index, value) { return sn.FormListSet(ObjKey, KeyName, index, value); };
/** Plucks a value from list by index on form or globally.
   The index is removed from the list's storage after returning it's value.

   ObjKey: form to pluck value from. Set none to get global list value.
   KeyName: name of list.
   index: index of value in the list.
   [optional] missing: if index has not been set, return this value instead. */
var IntListPluck = function (ObjKey, KeyName, index, missing) { return sn.IntListPluck(ObjKey, KeyName, index, missing); };
var FloatListPluck = function (ObjKey, KeyName, index, missing) { return sn.FloatListPluck(ObjKey, KeyName, index, missing); };
var StringListPluck = function (ObjKey, KeyName, index, missing) { return sn.StringListPluck(ObjKey, KeyName, index, missing); };
var FormListPluck = function (ObjKey, KeyName, index, missing) { return sn.FormListPluck(ObjKey, KeyName, index, missing); };
/** Gets the value of the very first element in a list, and subsequently removes the index afterward.

   ObjKey: form to shift value from. Set none to get global list value.
   KeyName: name of list to shift it's first value from. */
var IntListShift = function (ObjKey, KeyName) { return sn.IntListShift(ObjKey, KeyName); };
var FloatListShift = function (ObjKey, KeyName) { return sn.FloatListShift(ObjKey, KeyName); };
var StringListShift = function (ObjKey, KeyName) { return sn.StringListShift(ObjKey, KeyName); };
var FormListShift = function (ObjKey, KeyName) { return sn.FormListShift(ObjKey, KeyName); };
/** Gets the value of the very last element in a list, and subsequently removes the index afterward.

   ObjKey: form to pop value from. Set none to get global list value.
   KeyName: name of list to pop off it's last value. */
var IntListPop = function (ObjKey, KeyName) { return sn.IntListPop(ObjKey, KeyName); };
var FloatListPop = function (ObjKey, KeyName) { return sn.FloatListPop(ObjKey, KeyName); };
var StringListPop = function (ObjKey, KeyName) { return sn.StringListPop(ObjKey, KeyName); };
var FormListPop = function (ObjKey, KeyName) { return sn.FormListPop(ObjKey, KeyName); };
/** Adjust the existing value of a list by the given amount.

   ObjKey: form to set value on. Set none to set global list value.
   KeyName: name of list.
   index: index of value in the list.
   amount: +/- the amount to adjust the lists current index value by.

s 0 if index does not exists */
var IntListAdjust = function (ObjKey, KeyName, index, amount) { return sn.IntListAdjust(ObjKey, KeyName, index, amount); };
var FloatListAdjust = function (ObjKey, KeyName, index, amount) { return sn.FloatListAdjust(ObjKey, KeyName, index, amount); };
/** Insert an int/float/string/Form to a list on form or globally and return
   if successful.

   ObjKey: form to add to. Set none to add global value.
   KeyName: name of value.
   index: position in list to put the value. 0 is first entry in list.
   value: value to add. */
var IntListInsert = function (ObjKey, KeyName, index, value) { return sn.IntListInsert(ObjKey, KeyName, index, value); };
var FloatListInsert = function (ObjKey, KeyName, index, value) { return sn.FloatListInsert(ObjKey, KeyName, index, value); };
var StringListInsert = function (ObjKey, KeyName, index, value) { return sn.StringListInsert(ObjKey, KeyName, index, value); };
var FormListInsert = function (ObjKey, KeyName, index, value) { return sn.FormListInsert(ObjKey, KeyName, index, value); };
/** Remove a previously added int/float/string/Form value from a list on form
   or globally and return how many instances of this value were removed.

   ObjKey: form to remove from. Set none to remove global value.
   KeyName: name of value.
   value: value to remove.
   [optional] allowInstances: remove all instances of this value in a list. */
var IntListRemove = function (ObjKey, KeyName, value, allInstances) {
    if (allInstances === void 0) { allInstances = false; }
    return sn.IntListRemove(ObjKey, KeyName, value, allInstances);
};
var FloatListRemove = function (ObjKey, KeyName, value, allInstances) {
    if (allInstances === void 0) { allInstances = false; }
    return sn.FloatListRemove(ObjKey, KeyName, value, allInstances);
};
var StringListRemove = function (ObjKey, KeyName, value, allInstances) {
    if (allInstances === void 0) { allInstances = false; }
    return sn.StringListRemove(ObjKey, KeyName, value, allInstances);
};
var FormListRemove = function (ObjKey, KeyName, value, allInstances) {
    if (allInstances === void 0) { allInstances = false; }
    return sn.FormListRemove(ObjKey, KeyName, value, allInstances);
};
/** Clear a list of values (unset) on an form or globally and
the previous size of list.

   ObjKey: form to clear on. Set none to clear global list.
   KeyName: name of list. */
var IntListClear = function (ObjKey, KeyName) { return sn.IntListClear(ObjKey, KeyName); };
var FloatListClear = function (ObjKey, KeyName) { return sn.FloatListClear(ObjKey, KeyName); };
var StringListClear = function (ObjKey, KeyName) { return sn.StringListClear(ObjKey, KeyName); };
var FormListClear = function (ObjKey, KeyName) { return sn.FormListClear(ObjKey, KeyName); };
/** Remove a value from list by index on form or globally and
if we were successful in doing so.

   ObjKey: form to remove from. Set none to remove global value.
   KeyName: name of list.
   index: index of value in the list. */
var IntListRemoveAt = function (ObjKey, KeyName, index) { return sn.IntListRemoveAt(ObjKey, KeyName, index); };
var FloatListRemoveAt = function (ObjKey, KeyName, index) { return sn.FloatListRemoveAt(ObjKey, KeyName, index); };
var StringListRemoveAt = function (ObjKey, KeyName, index) { return sn.StringListRemoveAt(ObjKey, KeyName, index); };
var FormListRemoveAt = function (ObjKey, KeyName, index) { return sn.FormListRemoveAt(ObjKey, KeyName, index); };
/** Get size of a list on form or globally.

   ObjKey: form to check on. Set none to check global list.
   KeyName: name of list. */
var IntListCount = function (ObjKey, KeyName) { return sn.IntListCount(ObjKey, KeyName); };
var FloatListCount = function (ObjKey, KeyName) { return sn.FloatListCount(ObjKey, KeyName); };
var StringListCount = function (ObjKey, KeyName) { return sn.StringListCount(ObjKey, KeyName); };
var FormListCount = function (ObjKey, KeyName) { return sn.FormListCount(ObjKey, KeyName); };
/** Get the number of occurrences of a specific value within a list.

   ObjKey: form to check on. Set none to check global list.
   KeyName: name of list.
   value: value to look for.
   [optional] exclude: if true, function will return number of elements NOT equal to value. */
var IntListCountValue = function (ObjKey, KeyName, value, exclude) {
    if (exclude === void 0) { exclude = false; }
    return sn.IntListCountValue(ObjKey, KeyName, value, exclude);
};
var FloatListCountValue = function (ObjKey, KeyName, value, exclude) {
    if (exclude === void 0) { exclude = false; }
    return sn.FloatListCountValue(ObjKey, KeyName, value, exclude);
};
var StringListCountValue = function (ObjKey, KeyName, value, exclude) {
    if (exclude === void 0) { exclude = false; }
    return sn.StringListCountValue(ObjKey, KeyName, value, exclude);
};
var FormListCountValue = function (ObjKey, KeyName, value, exclude) {
    if (exclude === void 0) { exclude = false; }
    return sn.FormListCountValue(ObjKey, KeyName, value, exclude);
};
/** Find a value in list on form or globally and return its
   index or -1 if value was not found.

   ObjKey: form to find value on. Set none to find global list value.
   KeyName: name of list.
   value: value to search. */
var IntListFind = function (ObjKey, KeyName, value) { return sn.IntListFind(ObjKey, KeyName, value); };
var FloatListFind = function (ObjKey, KeyName, value) { return sn.FloatListFind(ObjKey, KeyName, value); };
var StringListFind = function (ObjKey, KeyName, value) { return sn.StringListFind(ObjKey, KeyName, value); };
var FormListFind = function (ObjKey, KeyName, value) { return sn.FormListFind(ObjKey, KeyName, value); };
/** Find if a value in list on form or globally exists, true if it exists,
   false if it doesn't.

   ObjKey: form to find value on. Set none to find global list value.
   KeyName: name of list.
   value: value to search. */
var IntListHas = function (ObjKey, KeyName, value) { return sn.IntListHas(ObjKey, KeyName, value); };
var FloatListHas = function (ObjKey, KeyName, value) { return sn.FloatListHas(ObjKey, KeyName, value); };
var StringListHas = function (ObjKey, KeyName, value) { return sn.StringListHas(ObjKey, KeyName, value); };
var FormListHas = function (ObjKey, KeyName, value) { return sn.FormListHas(ObjKey, KeyName, value); };
/** Sort an int/float/string/Form list by values in ascending order.

   ObjKey: form to sort on. Set none for global value.
   KeyName: name of value. */
var IntListSort = function (ObjKey, KeyName) { return sn.IntListSort(ObjKey, KeyName); };
var FloatListSort = function (ObjKey, KeyName) { return sn.FloatListSort(ObjKey, KeyName); };
var StringListSort = function (ObjKey, KeyName) { return sn.StringListSort(ObjKey, KeyName); };
var FormListSort = function (ObjKey, KeyName) { return sn.FormListSort(ObjKey, KeyName); };
/** Fills the given input array with the values of the list on form or globally,
   will fill the array until either the array or list runs out of valid indexes

   ObjKey: form to find value on. Set none to find global list value.
   KeyName: name of list.
   slice[]: an initialized array set to the slice size you want, i.e. int[] slice = new int[10]
   [optional] startIndex: the starting list index you want to start filling your slice array with */
var IntListSlice = function (ObjKey, KeyName, slice, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    return sn.IntListSlice(ObjKey, KeyName, slice, startIndex);
};
var FloatListSlice = function (ObjKey, KeyName, slice, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    return sn.FloatListSlice(ObjKey, KeyName, slice, startIndex);
};
var StringListSlice = function (ObjKey, KeyName, slice, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    return sn.StringListSlice(ObjKey, KeyName, slice, startIndex);
};
var FormListSlice = function (ObjKey, KeyName, slice, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    return sn.FormListSlice(ObjKey, KeyName, slice, startIndex);
};
/** Sizes the given list to a set number of elements. If the list exists already it will be truncated
   when given fewer elements, or resized to the appropriate length with the filler argument being used as
   the default values

   Returns the number of elements truncated (signed) or added (unsigned) onto the list.

   ObjKey: form to find value on. Set none to find global list value.
   KeyName: name of list.
   toLength: The size you want to change the list to. Max length when using this function is 500.
   [optional] filler: When adding empty elements to the list this will be used as the default value */
var IntListResize = function (ObjKey, KeyName, toLength, filler) {
    if (filler === void 0) { filler = 0; }
    return sn.IntListResize(ObjKey, KeyName, toLength, filler);
};
var FloatListResize = function (ObjKey, KeyName, toLength, filler) {
    if (filler === void 0) { filler = 0.0; }
    return sn.FloatListResize(ObjKey, KeyName, toLength, filler);
};
var StringListResize = function (ObjKey, KeyName, toLength, filler) {
    if (filler === void 0) { filler = ""; }
    return sn.StringListResize(ObjKey, KeyName, toLength, filler);
};
var FormListResize = function (ObjKey, KeyName, toLength, filler) {
    if (filler === void 0) { filler = null; }
    return sn.FormListResize(ObjKey, KeyName, toLength, filler);
};
/** Creates a copy of array on the given storage list at the given object+key,
   overwriting any list that might already exists.

   Returns true on success.

   ObjKey: form to find value on. Set none to find global list value.
   KeyName: name of list.
   copy[]: The papyrus array with the content you wish to copy over into StorageUtil
   [optional] filler: When adding empty elements to the list this will be used as the default value */
var IntListCopy = function (ObjKey, KeyName, copy) { return sn.IntListCopy(ObjKey, KeyName, copy); };
var FloatListCopy = function (ObjKey, KeyName, copy) { return sn.FloatListCopy(ObjKey, KeyName, copy); };
var StringListCopy = function (ObjKey, KeyName, copy) { return sn.StringListCopy(ObjKey, KeyName, copy); };
var FormListCopy = function (ObjKey, KeyName, copy) { return sn.FormListCopy(ObjKey, KeyName, copy); };
/** Outputs the values currently stored by the given object+key.

   Returns a new array containing the values.

   ObjKey: form to find value on. Set none to find global list value.
   KeyName: name of list. */
var IntListToArray = function (ObjKey, KeyName) { return sn.IntListToArray(ObjKey, KeyName); };
var FloatListToArray = function (ObjKey, KeyName) { return sn.FloatListToArray(ObjKey, KeyName); };
var StringListToArray = function (ObjKey, KeyName) { return sn.StringListToArray(ObjKey, KeyName); };
var FormListToArray = function (ObjKey, KeyName) { return sn.FormListToArray(ObjKey, KeyName); };
/** Returns array of forms from list that have (or optionally don't have) the specified form types.
   For valid list of form types, see FormType.psc or http://www.creationkit.com/GetType_-_Form

   ObjKey: form to find value on. Set none to find global list value.
   KeyName: name of list.
   FormTypeIDs[]: The int papyrus array with all the form types you wish to filter for
   [optional] ReturnMatching: By default, TRUE, the output Form[] array will contain forms from list that match the form types
                              If set to FALSE, inverts the resulting array with forms that have a type that DO NOT match. */
var FormListFilterByTypes = function (ObjKey, KeyName, FormTypeIDs, ReturnMatching) {
    if (ReturnMatching === void 0) { ReturnMatching = true; }
    return sn.FormListFilterByTypes(ObjKey, KeyName, FormTypeIDs, ReturnMatching);
};
// Convenience version of FormListFilterByTypes() for when only getting a single type.
var FormListFilterByType = function (ObjKey, KeyName, FormTypeID, ReturnMatching) {
    if (ReturnMatching === void 0) { ReturnMatching = true; }
    return sn.FormListFilterByType(ObjKey, KeyName, FormTypeID, ReturnMatching);
};
/** Counts each type of of any KeyName that starts with a given string prefix on all objects.

   PrefixKey: The string a KeyName must start with to be counted. Cannot be empty. */
var CountIntValuePrefix = function (PrefixKey) { return sn.CountIntValuePrefix(PrefixKey); };
var CountFloatValuePrefix = function (PrefixKey) { return sn.CountFloatValuePrefix(PrefixKey); };
var CountStringValuePrefix = function (PrefixKey) { return sn.CountStringValuePrefix(PrefixKey); };
var CountFormValuePrefix = function (PrefixKey) { return sn.CountFormValuePrefix(PrefixKey); };
var CountIntListPrefix = function (PrefixKey) { return sn.CountIntListPrefix(PrefixKey); };
var CountFloatListPrefix = function (PrefixKey) { return sn.CountFloatListPrefix(PrefixKey); };
var CountStringListPrefix = function (PrefixKey) { return sn.CountStringListPrefix(PrefixKey); };
var CountFormListPrefix = function (PrefixKey) { return sn.CountFormListPrefix(PrefixKey); };
// Performs all of the above prefix counts in one go.
var CountAllPrefix = function (PrefixKey) { return sn.CountAllPrefix(PrefixKey); };
/** Counts each type of of any KeyName that starts with a given string prefix on all objects.

   ObjKey: form to perform the prefix count on.
   PrefixKey: The string a KeyName must start with to be counted. Cannot be empty. */
var CountObjIntValuePrefix = function (ObjKey, PrefixKey) { return sn.CountObjIntValuePrefix(ObjKey, PrefixKey); };
var CountObjFloatValuePrefix = function (ObjKey, PrefixKey) { return sn.CountObjFloatValuePrefix(ObjKey, PrefixKey); };
var CountObjStringValuePrefix = function (ObjKey, PrefixKey) { return sn.CountObjStringValuePrefix(ObjKey, PrefixKey); };
var CountObjFormValuePrefix = function (ObjKey, PrefixKey) { return sn.CountObjFormValuePrefix(ObjKey, PrefixKey); };
var CountObjIntListPrefix = function (ObjKey, PrefixKey) { return sn.CountObjIntListPrefix(ObjKey, PrefixKey); };
var CountObjFloatListPrefix = function (ObjKey, PrefixKey) { return sn.CountObjFloatListPrefix(ObjKey, PrefixKey); };
var CountObjStringListPrefix = function (ObjKey, PrefixKey) { return sn.CountObjStringListPrefix(ObjKey, PrefixKey); };
var CountObjFormListPrefix = function (ObjKey, PrefixKey) { return sn.CountObjFormListPrefix(ObjKey, PrefixKey); };
// Performs all of the above prefix counts in one go.
var CountAllObjPrefix = function (ObjKey, PrefixKey) { return sn.CountAllObjPrefix(ObjKey, PrefixKey); };
/** Clears each type of of any KeyName that starts with a given string prefix on all objects.
   Returns the number of values/lists that were unset.

   PrefixKey: The string a KeyName must start with to be cleared. Cannot be empty. */
var ClearIntValuePrefix = function (PrefixKey) { return sn.ClearIntValuePrefix(PrefixKey); };
var ClearFloatValuePrefix = function (PrefixKey) { return sn.ClearFloatValuePrefix(PrefixKey); };
var ClearStringValuePrefix = function (PrefixKey) { return sn.ClearStringValuePrefix(PrefixKey); };
var ClearFormValuePrefix = function (PrefixKey) { return sn.ClearFormValuePrefix(PrefixKey); };
var ClearIntListPrefix = function (PrefixKey) { return sn.ClearIntListPrefix(PrefixKey); };
var ClearFloatListPrefix = function (PrefixKey) { return sn.ClearFloatListPrefix(PrefixKey); };
var ClearStringListPrefix = function (PrefixKey) { return sn.ClearStringListPrefix(PrefixKey); };
var ClearFormListPrefix = function (PrefixKey) { return sn.ClearFormListPrefix(PrefixKey); };
// Performs all of the above prefix clears in one go.
var ClearAllPrefix = function (PrefixKey) { return sn.ClearAllPrefix(PrefixKey); };
/** Clears each type of of any KeyName that starts with a given string prefix on specific objects.
   Returns the number of values/lists that were unset.

   ObjKey: form to perform the prefix clear on.
   PrefixKey: The string a KeyName must start with to be cleared. Cannot be empty. */
var ClearObjIntValuePrefix = function (ObjKey, PrefixKey) { return sn.ClearObjIntValuePrefix(ObjKey, PrefixKey); };
var ClearObjFloatValuePrefix = function (ObjKey, PrefixKey) { return sn.ClearObjFloatValuePrefix(ObjKey, PrefixKey); };
var ClearObjStringValuePrefix = function (ObjKey, PrefixKey) { return sn.ClearObjStringValuePrefix(ObjKey, PrefixKey); };
var ClearObjFormValuePrefix = function (ObjKey, PrefixKey) { return sn.ClearObjFormValuePrefix(ObjKey, PrefixKey); };
var ClearObjIntListPrefix = function (ObjKey, PrefixKey) { return sn.ClearObjIntListPrefix(ObjKey, PrefixKey); };
var ClearObjFloatListPrefix = function (ObjKey, PrefixKey) { return sn.ClearObjFloatListPrefix(ObjKey, PrefixKey); };
var ClearObjStringListPrefix = function (ObjKey, PrefixKey) { return sn.ClearObjStringListPrefix(ObjKey, PrefixKey); };
var ClearObjFormListPrefix = function (ObjKey, PrefixKey) { return sn.ClearObjFormListPrefix(ObjKey, PrefixKey); };
// Performs all of the above prefix clears in one go.
var ClearAllObjPrefix = function (ObjKey, PrefixKey) { return sn.ClearAllObjPrefix(ObjKey, PrefixKey); };
/** Debug functions - can be helpful to find problems or for development. */
var debug_DeleteValues = function (ObjKey) { return sn.debug_DeleteValues(ObjKey); };
var debug_DeleteAllValues = function () { return sn.debug_DeleteAllValues(); };
var debug_Cleanup = function () { return sn.debug_Cleanup(); };
var debug_AllIntObjs = function () { return sn.debug_AllIntObjs(); };
var debug_AllFloatObjs = function () { return sn.debug_AllFloatObjs(); };
var debug_AllStringObjs = function () { return sn.debug_AllStringObjs(); };
var debug_AllFormObjs = function () { return sn.debug_AllFormObjs(); };
var debug_AllIntListObjs = function () { return sn.debug_AllIntListObjs(); };
var debug_AllFloatListObjs = function () { return sn.debug_AllFloatListObjs(); };
var debug_AllStringListObjs = function () { return sn.debug_AllStringListObjs(); };
var debug_AllFormListObjs = function () { return sn.debug_AllFormListObjs(); };
var debug_AllObjIntKeys = function (ObjKey) { return sn.debug_AllObjIntKeys(ObjKey); };
var debug_AllObjFloatKeys = function (ObjKey) { return sn.debug_AllObjFloatKeys(ObjKey); };
var debug_AllObjStringKeys = function (ObjKey) { return sn.debug_AllObjStringKeys(ObjKey); };
var debug_AllObjFormKeys = function (ObjKey) { return sn.debug_AllObjFormKeys(ObjKey); };
var debug_AllObjIntListKeys = function (ObjKey) { return sn.debug_AllObjIntListKeys(ObjKey); };
var debug_AllObjFloatListKeys = function (ObjKey) { return sn.debug_AllObjFloatListKeys(ObjKey); };
var debug_AllObjStringListKeys = function (ObjKey) { return sn.debug_AllObjStringListKeys(ObjKey); };
var debug_AllObjFormListKeys = function (ObjKey) { return sn.debug_AllObjFormListKeys(ObjKey); };
var debug_GetIntObjectCount = function () { return sn.debug_GetIntObjectCount(); };
var debug_GetFloatObjectCount = function () { return sn.debug_GetFloatObjectCount(); };
var debug_GetStringObjectCount = function () { return sn.debug_GetStringObjectCount(); };
var debug_GetFormObjectCount = function () { return sn.debug_GetFormObjectCount(); };
var debug_GetIntListObjectCount = function () { return sn.debug_GetIntListObjectCount(); };
var debug_GetFloatListObjectCount = function () { return sn.debug_GetFloatListObjectCount(); };
var debug_GetStringListObjectCount = function () { return sn.debug_GetStringListObjectCount(); };
var debug_GetFormListObjectCount = function () { return sn.debug_GetFormListObjectCount(); };
var debug_GetIntObject = function (index) { return sn.debug_GetIntObject(index); };
var debug_GetFloatObject = function (index) { return sn.debug_GetFloatObject(index); };
var debug_GetStringObject = function (index) { return sn.debug_GetStringObject(index); };
var debug_GetFormObject = function (index) { return sn.debug_GetFormObject(index); };
var debug_GetIntListObject = function (index) { return sn.debug_GetIntListObject(index); };
var debug_GetFloatListObject = function (index) { return sn.debug_GetFloatListObject(index); };
var debug_GetStringListObject = function (index) { return sn.debug_GetStringListObject(index); };
var debug_GetFormListObject = function (index) { return sn.debug_GetFormListObject(index); };
var debug_GetIntKeysCount = function (ObjKey) { return sn.debug_GetIntKeysCount(ObjKey); };
var debug_GetFloatKeysCount = function (ObjKey) { return sn.debug_GetFloatKeysCount(ObjKey); };
var debug_GetStringKeysCount = function (ObjKey) { return sn.debug_GetStringKeysCount(ObjKey); };
var debug_GetFormKeysCount = function (ObjKey) { return sn.debug_GetFormKeysCount(ObjKey); };
var debug_GetIntListKeysCount = function (ObjKey) { return sn.debug_GetIntListKeysCount(ObjKey); };
var debug_GetFloatListKeysCount = function (ObjKey) { return sn.debug_GetFloatListKeysCount(ObjKey); };
var debug_GetStringListKeysCount = function (ObjKey) { return sn.debug_GetStringListKeysCount(ObjKey); };
var debug_GetFormListKeysCount = function (ObjKey) { return sn.debug_GetFormListKeysCount(ObjKey); };
var debug_GetIntKey = function (ObjKey, index) { return sn.debug_GetIntKey(ObjKey, index); };
var debug_GetFloatKey = function (ObjKey, index) { return sn.debug_GetFloatKey(ObjKey, index); };
var debug_GetStringKey = function (ObjKey, index) { return sn.debug_GetStringKey(ObjKey, index); };
var debug_GetFormKey = function (ObjKey, index) { return sn.debug_GetFormKey(ObjKey, index); };
var debug_GetIntListKey = function (ObjKey, index) { return sn.debug_GetIntListKey(ObjKey, index); };
var debug_GetFloatListKey = function (ObjKey, index) { return sn.debug_GetFloatListKey(ObjKey, index); };
var debug_GetStringListKey = function (ObjKey, index) { return sn.debug_GetStringListKey(ObjKey, index); };
var debug_GetFormListKey = function (ObjKey, index) { return sn.debug_GetFormListKey(ObjKey, index); };
/** Storage functions - separate file. These are shared in all save games. Values are loaded and saved
   when savegame is loaded or saved.

   DEPRECATED v2.9: Replaced by JsonUtil functions. Existing functions here have been proxied to a shared
   json file to maintain compatibility. */
var FileSetIntValue = function (KeyName, value) { return sn.FileSetIntValue(KeyName, value); };
var FileSetFloatValue = function (KeyName, value) { return sn.FileSetFloatValue(KeyName, value); };
var FileSetStringValue = function (KeyName, value) { return sn.FileSetStringValue(KeyName, value); };
var FileSetFormValue = function (KeyName, value) { return sn.FileSetFormValue(KeyName, value); };
var FileAdjustIntValue = function (KeyName, amount) { return sn.FileAdjustIntValue(KeyName, amount); };
var FileAdjustFloatValue = function (KeyName, amount) { return sn.FileAdjustFloatValue(KeyName, amount); };
var FileUnsetIntValue = function (KeyName) { return sn.FileUnsetIntValue(KeyName); };
var FileUnsetFloatValue = function (KeyName) { return sn.FileUnsetFloatValue(KeyName); };
var FileUnsetStringValue = function (KeyName) { return sn.FileUnsetStringValue(KeyName); };
var FileUnsetFormValue = function (KeyName) { return sn.FileUnsetFormValue(KeyName); };
var FileHasIntValue = function (KeyName) { return sn.FileHasIntValue(KeyName); };
var FileHasFloatValue = function (KeyName) { return sn.FileHasFloatValue(KeyName); };
var FileHasStringValue = function (KeyName) { return sn.FileHasStringValue(KeyName); };
var FileHasFormValue = function (KeyName) { return sn.FileHasFormValue(KeyName); };
var FileGetIntValue = function (KeyName, missing) {
    if (missing === void 0) { missing = 0; }
    return sn.FileGetIntValue(KeyName, missing);
};
var FileGetFloatValue = function (KeyName, missing) {
    if (missing === void 0) { missing = 0.0; }
    return sn.FileGetFloatValue(KeyName, missing);
};
var FileGetStringValue = function (KeyName, missing) {
    if (missing === void 0) { missing = ""; }
    return sn.FileGetStringValue(KeyName, missing);
};
var FileGetFormValue = function (KeyName, missing) {
    if (missing === void 0) { missing = null; }
    return sn.FileGetFormValue(KeyName, missing);
};
var FileIntListAdd = function (KeyName, value, allowDuplicate) {
    if (allowDuplicate === void 0) { allowDuplicate = true; }
    return sn.FileIntListAdd(KeyName, value, allowDuplicate);
};
var FileFloatListAdd = function (KeyName, value, allowDuplicate) {
    if (allowDuplicate === void 0) { allowDuplicate = true; }
    return sn.FileFloatListAdd(KeyName, value, allowDuplicate);
};
var FileStringListAdd = function (KeyName, value, allowDuplicate) {
    if (allowDuplicate === void 0) { allowDuplicate = true; }
    return sn.FileStringListAdd(KeyName, value, allowDuplicate);
};
var FileFormListAdd = function (KeyName, value, allowDuplicate) {
    if (allowDuplicate === void 0) { allowDuplicate = true; }
    return sn.FileFormListAdd(KeyName, value, allowDuplicate);
};
var FileIntListAdjust = function (KeyName, index, amount) { return sn.FileIntListAdjust(KeyName, index, amount); };
var FileFloatListAdjust = function (KeyName, index, amount) { return sn.FileFloatListAdjust(KeyName, index, amount); };
var FileIntListRemove = function (KeyName, value, allInstances) {
    if (allInstances === void 0) { allInstances = false; }
    return sn.FileIntListRemove(KeyName, value, allInstances);
};
var FileFloatListRemove = function (KeyName, value, allInstances) {
    if (allInstances === void 0) { allInstances = false; }
    return sn.FileFloatListRemove(KeyName, value, allInstances);
};
var FileStringListRemove = function (KeyName, value, allInstances) {
    if (allInstances === void 0) { allInstances = false; }
    return sn.FileStringListRemove(KeyName, value, allInstances);
};
var FileFormListRemove = function (KeyName, value, allInstances) {
    if (allInstances === void 0) { allInstances = false; }
    return sn.FileFormListRemove(KeyName, value, allInstances);
};
var FileIntListGet = function (KeyName, index) { return sn.FileIntListGet(KeyName, index); };
var FileFloatListGet = function (KeyName, index) { return sn.FileFloatListGet(KeyName, index); };
var FileStringListGet = function (KeyName, index) { return sn.FileStringListGet(KeyName, index); };
var FileFormListGet = function (KeyName, index) { return sn.FileFormListGet(KeyName, index); };
var FileIntListSet = function (KeyName, index, value) { return sn.FileIntListSet(KeyName, index, value); };
var FileFloatListSet = function (KeyName, index, value) { return sn.FileFloatListSet(KeyName, index, value); };
var FileStringListSet = function (KeyName, index, value) { return sn.FileStringListSet(KeyName, index, value); };
var FileFormListSet = function (KeyName, index, value) { return sn.FileFormListSet(KeyName, index, value); };
var FileIntListClear = function (KeyName) { return sn.FileIntListClear(KeyName); };
var FileFloatListClear = function (KeyName) { return sn.FileFloatListClear(KeyName); };
var FileStringListClear = function (KeyName) { return sn.FileStringListClear(KeyName); };
var FileFormListClear = function (KeyName) { return sn.FileFormListClear(KeyName); };
var FileIntListRemoveAt = function (KeyName, index) { return sn.FileIntListRemoveAt(KeyName, index); };
var FileFloatListRemoveAt = function (KeyName, index) { return sn.FileFloatListRemoveAt(KeyName, index); };
var FileStringListRemoveAt = function (KeyName, index) { return sn.FileStringListRemoveAt(KeyName, index); };
var FileFormListRemoveAt = function (KeyName, index) { return sn.FileFormListRemoveAt(KeyName, index); };
var FileIntListInsert = function (KeyName, index, value) { return sn.FileIntListInsert(KeyName, index, value); };
var FileFloatListInsert = function (KeyName, index, value) { return sn.FileFloatListInsert(KeyName, index, value); };
var FileStringListInsert = function (KeyName, index, value) { return sn.FileStringListInsert(KeyName, index, value); };
var FileFormListInsert = function (KeyName, index, value) { return sn.FileFormListInsert(KeyName, index, value); };
var FileIntListCount = function (KeyName) { return sn.FileIntListCount(KeyName); };
var FileFloatListCount = function (KeyName) { return sn.FileFloatListCount(KeyName); };
var FileStringListCount = function (KeyName) { return sn.FileStringListCount(KeyName); };
var FileFormListCount = function (KeyName) { return sn.FileFormListCount(KeyName); };
var FileIntListFind = function (KeyName, value) { return sn.FileIntListFind(KeyName, value); };
var FileFloatListFind = function (KeyName, value) { return sn.FileFloatListFind(KeyName, value); };
var FileStringListFind = function (KeyName, value) { return sn.FileStringListFind(KeyName, value); };
var FileFormListFind = function (KeyName, value) { return sn.FileFormListFind(KeyName, value); };
var FileIntListHas = function (KeyName, value) { return sn.FileIntListHas(KeyName, value); };
var FileFloatListHas = function (KeyName, value) { return sn.FileFloatListHas(KeyName, value); };
var FileStringListHas = function (KeyName, value) { return sn.FileStringListHas(KeyName, value); };
var FileFormListHas = function (KeyName, value) { return sn.FileFormListHas(KeyName, value); };
var FileIntListSlice = function (KeyName, slice, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    return sn.FileIntListSlice(KeyName, slice, startIndex);
};
var FileFloatListSlice = function (KeyName, slice, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    return sn.FileFloatListSlice(KeyName, slice, startIndex);
};
var FileStringListSlice = function (KeyName, slice, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    return sn.FileStringListSlice(KeyName, slice, startIndex);
};
var FileFormListSlice = function (KeyName, slice, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    return sn.FileFormListSlice(KeyName, slice, startIndex);
};
var FileIntListResize = function (KeyName, toLength, filler) {
    if (filler === void 0) { filler = 0; }
    return sn.FileIntListResize(KeyName, toLength, filler);
};
var FileFloatListResize = function (KeyName, toLength, filler) {
    if (filler === void 0) { filler = 0.0; }
    return sn.FileFloatListResize(KeyName, toLength, filler);
};
var FileStringListResize = function (KeyName, toLength, filler) {
    if (filler === void 0) { filler = ""; }
    return sn.FileStringListResize(KeyName, toLength, filler);
};
var FileFormListResize = function (KeyName, toLength, filler) {
    if (filler === void 0) { filler = null; }
    return sn.FileFormListResize(KeyName, toLength, filler);
};
var FileIntListCopy = function (KeyName, copy) { return sn.FileIntListCopy(KeyName, copy); };
var FileFloatListCopy = function (KeyName, copy) { return sn.FileFloatListCopy(KeyName, copy); };
var FileStringListCopy = function (KeyName, copy) { return sn.FileStringListCopy(KeyName, copy); };
var FileFormListCopy = function (KeyName, copy) { return sn.FileFormListCopy(KeyName, copy); };
var debug_SaveFile = function () { return sn.debug_SaveFile(); };
/** Currently no longer implemented, unknown if/when they will return. */
var debug_FileGetIntKeysCount = function () { return sn.debug_FileGetIntKeysCount(); };
0;
var debug_FileGetFloatKeysCount = function () { return sn.debug_FileGetFloatKeysCount(); };
0;
var debug_FileGetStringKeysCount = function () { return sn.debug_FileGetStringKeysCount(); };
0;
var debug_FileGetIntListKeysCount = function () { return sn.debug_FileGetIntListKeysCount(); };
0;
var debug_FileGetFloatListKeysCount = function () { return sn.debug_FileGetFloatListKeysCount(); };
0;
var debug_FileGetStringListKeysCount = function () { return sn.debug_FileGetStringListKeysCount(); };
0;
var debug_FileGetIntKey = function (index) { return sn.debug_FileGetIntKey(index); };
"";
var debug_FileGetFloatKey = function (index) { return sn.debug_FileGetFloatKey(index); };
"";
var debug_FileGetStringKey = function (index) { return sn.debug_FileGetStringKey(index); };
"";
var debug_FileGetIntListKey = function (index) { return sn.debug_FileGetIntListKey(index); };
"";
var debug_FileGetFloatListKey = function (index) { return sn.debug_FileGetFloatListKey(index); };
"";
var debug_FileGetStringListKey = function (index) { return sn.debug_FileGetStringListKey(index); };
"";
var debug_FileDeleteAllValues = function () { return sn.debug_FileDeleteAllValues(); };
var debug_SetDebugMode = function (enabled) { return sn.debug_SetDebugMode(enabled); };
var ImportFile = function (fileName, restrictKey, restrictType, restrictForm, restrictGlobal, keyContains) {
    if (restrictKey === void 0) { restrictKey = ""; }
    if (restrictType === void 0) { restrictType = -1; }
    if (restrictForm === void 0) { restrictForm = null; }
    if (restrictGlobal === void 0) { restrictGlobal = false; }
    if (keyContains === void 0) { keyContains = false; }
    return sn.ImportFile(fileName, restrictKey, restrictType, restrictForm, restrictGlobal, keyContains);
};
false;
var ExportFile = function (fileName, restrictKey, restrictType, restrictForm, restrictGlobal, keyContains, append) {
    if (restrictKey === void 0) { restrictKey = ""; }
    if (restrictType === void 0) { restrictType = -1; }
    if (restrictForm === void 0) { restrictForm = null; }
    if (restrictGlobal === void 0) { restrictGlobal = false; }
    if (keyContains === void 0) { keyContains = false; }
    if (append === void 0) { append = true; }
    return sn.ExportFile(fileName, restrictKey, restrictType, restrictForm, restrictGlobal, keyContains, append);
};
false;


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "spText": () => (/* binding */ spText)
/* harmony export */ });
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__);

var keykname = '.spTexts.';
var collectionKey = keykname + 'collection.';
var spTextsCollection = new Map();
skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey];
var spText = /** @class */ (function () {
    function spText(xPos, yPos, text, col, sType, sModName) {
        this.index = (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.createText)(xPos, yPos, text, [col[0], col[1], col[2], col[3]]);
        this.type = sType ? sType : "undefined";
        this.owningMod = sModName ? sModName : "undefined";
        this.x = xPos;
        this.y = yPos;
        spTextsCollection.set(this.index, this);
        skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey] = spTextsCollection;
    }
    spText.prototype.getIndex = function () {
        return this.index;
    };
    spText.prototype.getText = function () {
        return (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.getTextString)(this.index);
    };
    spText.prototype.getOwningMod = function () {
        return this.owningMod;
    };
    spText.prototype.getPosition = function () {
        var num = (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.getTextPos)(this.index);
        return num;
    };
    spText.prototype.getColor = function () {
        return (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.getTextColor)(this.index);
    };
    spText.prototype.getType = function () {
        return this.type;
    };
    spText.prototype.setType = function (t) {
        this.type = t;
    };
    spText.prototype.setText = function (txt) {
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.setTextString)(this.index, txt);
    };
    spText.prototype.setColor = function (rgba) {
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.setTextColor)(this.index, rgba);
    };
    spText.prototype.setPosition = function (xPos, yPos) {
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.setTextPos)(this.index, xPos, yPos);
    };
    spText.prototype.setOwningMod = function (mod) {
        this.owningMod = mod;
    };
    spText.prototype.setColorR = function (col) {
        var color = this.getColor();
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.setTextColor)(this.index, [col, color[1], color[2], color[3]]);
    };
    spText.prototype.setColorG = function (col) {
        var color = this.getColor();
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.setTextColor)(this.index, [color[0], col, color[2], color[3]]);
    };
    spText.prototype.setColorB = function (col) {
        var color = this.getColor();
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.setTextColor)(this.index, [color[0], color[1], col, color[3]]);
    };
    spText.prototype.setAlpha = function (alpha) {
        var color = this.getColor();
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.setTextColor)(this.index, [color[0], color[1], color[2], alpha]);
    };
    spText.prototype.destroyText = function () {
        spTextsCollection.delete(this.index);
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.destroyText)(this.index);
        skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey] = spTextsCollection;
    };
    spText.destroyAllTexts = function () {
        spTextsCollection.clear();
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.destroyAllTexts)();
        skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey] = spTextsCollection;
    };
    spText.countModTexts = function (mod) {
        var cnt = 0;
        var c = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey];
        c.forEach(function (value, _key) {
            var tmp = value;
            if (tmp.owningMod == mod)
                cnt++;
        });
        return cnt;
    };
    spText.countTypeTexts = function (t) {
        var cnt = 0;
        var tmpColl = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey];
        tmpColl.forEach(function (value, key) {
            var tmp = value;
            if (tmp.type == t)
                cnt++;
        });
        return cnt;
    };
    spText.destroyAllModTexts = function (mod) {
        var tmpColl = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey];
        if (!tmpColl) {
            return;
        }
        tmpColl.forEach(function (value, key) {
            var tmp = value;
            if (tmp.owningMod == mod) {
                (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.destroyText)(key);
                spTextsCollection.delete(key);
            }
        });
        skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey] = spTextsCollection;
    };
    spText.destroyAllTypeTexts = function (t) {
        var tmpColl = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey];
        tmpColl.forEach(function (value, key) {
            var tmp = value;
            if (tmp.type == t) {
                (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.destroyText)(key);
                tmpColl.delete(key);
                spTextsCollection.delete(key);
            }
        });
    };
    spText.disableModTexts = function (mod) {
        var tmpColl = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey];
        tmpColl.forEach(function (value, key) {
            var tmp = value;
            if (tmp.owningMod == mod) {
                tmp.setAlpha(0);
            }
        });
    };
    spText.enableModTexts = function (mod) {
        var tmpColl = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey];
        tmpColl.forEach(function (value, key) {
            var tmp = value;
            if (tmp.owningMod == mod) {
                tmp.setAlpha(1);
            }
        });
    };
    spText.disableTypeTexts = function (t) {
        var tmpColl = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey];
        tmpColl.forEach(function (value, key) {
            var tmp = value;
            if (tmp.type == t) {
                tmp.setAlpha(0);
            }
        });
    };
    spText.getTypeTexts = function (t) {
        var list = [];
        var tmpColl = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey];
        tmpColl.forEach(function (value, key) {
            var tmp = value;
            if (tmp.type == t) {
                list.push(tmp);
            }
        });
        return list;
    };
    spText.getModTexts = function (mod) {
        var list = [];
        var tmpColl = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey];
        tmpColl.forEach(function (value, key) {
            var tmp = value;
            if (tmp.owningMod == mod) {
                list.push(tmp);
            }
        });
        return list;
    };
    spText.getAllTexts = function () {
        var list = [];
        var tmpColl = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey];
        tmpColl.forEach(function (value, key) {
            var tmp = value;
            list.push(tmp);
        });
        return list;
    };
    spText.getTextByIndex = function (i) {
        var tmp = null;
        var tmpColl = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey];
        tmpColl.forEach(function (value, key) {
            if (value.getIndex() == i) {
                tmp = value;
            }
        });
        return tmp;
    };
    spText.destroyTextByIndex = function (i) {
        var tmp = spText.getTextByIndex(i);
        if (tmp) {
            tmp.destroyText();
            return true;
        }
        return false;
    };
    spText.prototype.toString = function () {
        return "index: ".concat(this.getIndex(), ", text:\"").concat(this.getText(), "\", type: ").concat(this.getType(), ", mod: ").concat(this.getOwningMod());
    };
    return spText;
}());



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pl": () => (/* binding */ pl)
/* harmony export */ });
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _modules_SPTextUtils_spTextUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


// import * as wt from "@skyrim-platform/WidgetTools/WidgetTools";

skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.browser.setVisible(true);
skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.browser.setFocused(false);
var visible = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.browser.isVisible();
var focused = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.browser.isFocused();
function pl() { return skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer(); }
var key = '.equipped-hud.';
var left_hand;
var right_hand;
var shoutslot;
// let x = settings["equippedhud"]["x"] as number;
// let y = settings["equippedhud"]["y"] as number;
var x = 1500;
var y = 1000;
var left_offset = -500;
var right_offset = 500;
var init;
var modname = 'EquippedHUD';
var colors = {
    white: [1, 1, 1, 1]
};
_modules_SPTextUtils_spTextUtils__WEBPACK_IMPORTED_MODULE_2__.spText.destroyAllModTexts(modname);
left_hand = new _modules_SPTextUtils_spTextUtils__WEBPACK_IMPORTED_MODULE_2__.spText(x + left_offset, y, 'left', colors['white'], undefined, modname);
right_hand = new _modules_SPTextUtils_spTextUtils__WEBPACK_IMPORTED_MODULE_2__.spText(x + right_offset, y, 'right', colors['white'], undefined, modname);
shoutslot = new _modules_SPTextUtils_spTextUtils__WEBPACK_IMPORTED_MODULE_2__.spText(x, y, 'shout', colors['white'], undefined, modname);
// storage[key + 'init.'] == false
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.once)('skyrimLoaded', function () { init = 0; });
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.once)('update', function () {
    init = 1;
    (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.SetIntValue)(null, key + 'init', 1);
    SetEquipped(left_hand, right_hand, shoutslot);
    (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)('EquippedHUD - SP initialized');
});
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('menuOpen', function () { _modules_SPTextUtils_spTextUtils__WEBPACK_IMPORTED_MODULE_2__.spText.disableModTexts(modname); });
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('menuClose', function () { _modules_SPTextUtils_spTextUtils__WEBPACK_IMPORTED_MODULE_2__.spText.enableModTexts(modname); });
var flag = false;
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('actionBeginDraw', function () {
    flag = true;
    _modules_SPTextUtils_spTextUtils__WEBPACK_IMPORTED_MODULE_2__.spText.enableModTexts(modname);
});
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('actionBeginSheathe', function () {
    flag = false;
    fadeout();
});
var fadeout = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Utility.wait(3.0)];
            case 1:
                _a.sent();
                if (!flag) {
                    _modules_SPTextUtils_spTextUtils__WEBPACK_IMPORTED_MODULE_2__.spText.disableModTexts(modname);
                }
                return [2 /*return*/];
        }
    });
}); };
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('equip', function (e) {
    var _a;
    if (e.actor.getFormID() != ((_a = pl()) === null || _a === void 0 ? void 0 : _a.getFormID())) {
        return;
    }
    SetEquipped(left_hand, right_hand, shoutslot);
});
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('unequip', function (e) {
    var _a;
    if (e.actor.getFormID() != ((_a = pl()) === null || _a === void 0 ? void 0 : _a.getFormID())) {
        return;
    }
    SetEquipped(left_hand, right_hand, shoutslot);
});
function SetEquipped(l, r, s) {
    var _a, _b, _c;
    /*
        0 = left hand
        1 = right hand
        2 = shoutslot slot
    */
    _modules_SPTextUtils_spTextUtils__WEBPACK_IMPORTED_MODULE_2__.spText.enableModTexts(modname);
    var l_id = (_a = pl()) === null || _a === void 0 ? void 0 : _a.getEquippedObject(0);
    var r_id = (_b = pl()) === null || _b === void 0 ? void 0 : _b.getEquippedObject(1);
    var s_id = (_c = pl()) === null || _c === void 0 ? void 0 : _c.getEquippedObject(2);
    var l_name = l_id === null || l_id === void 0 ? void 0 : l_id.getName();
    var r_name = r_id === null || r_id === void 0 ? void 0 : r_id.getName();
    var s_name = s_id === null || s_id === void 0 ? void 0 : s_id.getName();
    if (l_name == undefined) {
        l_name = "None";
    }
    if (r_name == undefined) {
        r_name = "None";
    }
    if (s_name == undefined) {
        s_name = "None";
    }
    left_hand.setText(l_name);
    right_hand.setText(r_name);
    shoutslot.setText(s_name);
    fadeout();
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXF1aXBwZWRIVUQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDcUM7QUFDckMsU0FBUyx1REFBYztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sc0RBQXNEO0FBQ3RELHdEQUF3RDtBQUN4RCx5REFBeUQ7QUFDekQsdURBQXVEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxpREFBaUQ7QUFDakQsbURBQW1EO0FBQ25ELG9EQUFvRDtBQUNwRCxrREFBa0Q7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDTywrQ0FBK0M7QUFDL0MsaURBQWlEO0FBQ2pELGtEQUFrRDtBQUNsRCxnREFBZ0Q7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsOEJBQThCO0FBQzlCO0FBQ0E7QUFDTztBQUNQLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ087QUFDUCw4QkFBOEI7QUFDOUI7QUFDQTtBQUNPO0FBQ1AsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ087QUFDUCw4QkFBOEI7QUFDOUI7QUFDQTtBQUNPO0FBQ1AsOEJBQThCO0FBQzlCO0FBQ0E7QUFDTztBQUNQLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTywwREFBMEQ7QUFDMUQsNERBQTREO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLHFDQUFxQztBQUNyQztBQUNBO0FBQ087QUFDUCxxQ0FBcUM7QUFDckM7QUFDQTtBQUNPO0FBQ1AscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDTztBQUNQLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08scURBQXFEO0FBQ3JELHVEQUF1RDtBQUN2RCx3REFBd0Q7QUFDeEQsc0RBQXNEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sNERBQTREO0FBQzVELDhEQUE4RDtBQUM5RCwrREFBK0Q7QUFDL0QsNkRBQTZEO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sZ0VBQWdFO0FBQ2hFLGtFQUFrRTtBQUNsRSxtRUFBbUU7QUFDbkUsaUVBQWlFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ08sZ0RBQWdEO0FBQ2hELGtEQUFrRDtBQUNsRCxtREFBbUQ7QUFDbkQsaURBQWlEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ08sOENBQThDO0FBQzlDLGdEQUFnRDtBQUNoRCxpREFBaUQ7QUFDakQsK0NBQStDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxnRUFBZ0U7QUFDaEUsa0VBQWtFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sK0RBQStEO0FBQy9ELGlFQUFpRTtBQUNqRSxrRUFBa0U7QUFDbEUsZ0VBQWdFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNPO0FBQ1AsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDTztBQUNQLG1DQUFtQztBQUNuQztBQUNBO0FBQ087QUFDUCxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxnREFBZ0Q7QUFDaEQsa0RBQWtEO0FBQ2xELG1EQUFtRDtBQUNuRCxpREFBaUQ7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sMERBQTBEO0FBQzFELDREQUE0RDtBQUM1RCw2REFBNkQ7QUFDN0QsMkRBQTJEO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ08sZ0RBQWdEO0FBQ2hELGtEQUFrRDtBQUNsRCxtREFBbUQ7QUFDbkQsaURBQWlEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsOEJBQThCO0FBQzlCO0FBQ0E7QUFDTztBQUNQLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ087QUFDUCw4QkFBOEI7QUFDOUI7QUFDQTtBQUNPO0FBQ1AsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxzREFBc0Q7QUFDdEQsd0RBQXdEO0FBQ3hELHlEQUF5RDtBQUN6RCx1REFBdUQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08scURBQXFEO0FBQ3JELHVEQUF1RDtBQUN2RCx3REFBd0Q7QUFDeEQsc0RBQXNEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ08sK0NBQStDO0FBQy9DLGlEQUFpRDtBQUNqRCxrREFBa0Q7QUFDbEQsZ0RBQWdEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxpQ0FBaUM7QUFDakM7QUFDQTtBQUNPO0FBQ1AsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDTztBQUNQLGlDQUFpQztBQUNqQztBQUNBO0FBQ087QUFDUCxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw2QkFBNkI7QUFDN0I7QUFDQTtBQUNPO0FBQ1AsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDTztBQUNQLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ087QUFDUCw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLHFEQUFxRDtBQUNyRCx1REFBdUQ7QUFDdkQsd0RBQXdEO0FBQ3hELHNEQUFzRDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxrREFBa0Q7QUFDbEQsb0RBQW9EO0FBQ3BELHFEQUFxRDtBQUNyRCxtREFBbUQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNPO0FBQ1AscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxpREFBaUQ7QUFDakQsbURBQW1EO0FBQ25ELG9EQUFvRDtBQUNwRCxrREFBa0Q7QUFDbEQsZ0RBQWdEO0FBQ2hELGtEQUFrRDtBQUNsRCxtREFBbUQ7QUFDbkQsaURBQWlEO0FBQ3hEO0FBQ08sNENBQTRDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ08sNERBQTREO0FBQzVELDhEQUE4RDtBQUM5RCwrREFBK0Q7QUFDL0QsNkRBQTZEO0FBQzdELDJEQUEyRDtBQUMzRCw2REFBNkQ7QUFDN0QsOERBQThEO0FBQzlELDREQUE0RDtBQUNuRTtBQUNPLHVEQUF1RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNPLGlEQUFpRDtBQUNqRCxtREFBbUQ7QUFDbkQsb0RBQW9EO0FBQ3BELGtEQUFrRDtBQUNsRCxnREFBZ0Q7QUFDaEQsa0RBQWtEO0FBQ2xELG1EQUFtRDtBQUNuRCxpREFBaUQ7QUFDeEQ7QUFDTyw0Q0FBNEM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLDREQUE0RDtBQUM1RCw4REFBOEQ7QUFDOUQsK0RBQStEO0FBQy9ELDZEQUE2RDtBQUM3RCwyREFBMkQ7QUFDM0QsNkRBQTZEO0FBQzdELDhEQUE4RDtBQUM5RCw0REFBNEQ7QUFDbkU7QUFDTyx1REFBdUQ7QUFDOUQ7QUFDTyw2Q0FBNkM7QUFDN0MsMENBQTBDO0FBQzFDLGtDQUFrQztBQUNsQyxxQ0FBcUM7QUFDckMsdUNBQXVDO0FBQ3ZDLHdDQUF3QztBQUN4QyxzQ0FBc0M7QUFDdEMseUNBQXlDO0FBQ3pDLDJDQUEyQztBQUMzQyw0Q0FBNEM7QUFDNUMsMENBQTBDO0FBQzFDLDhDQUE4QztBQUM5QyxnREFBZ0Q7QUFDaEQsaURBQWlEO0FBQ2pELCtDQUErQztBQUMvQyxrREFBa0Q7QUFDbEQsb0RBQW9EO0FBQ3BELHFEQUFxRDtBQUNyRCxtREFBbUQ7QUFDbkQsNENBQTRDO0FBQzVDLDhDQUE4QztBQUM5QywrQ0FBK0M7QUFDL0MsNkNBQTZDO0FBQzdDLGdEQUFnRDtBQUNoRCxrREFBa0Q7QUFDbEQsbURBQW1EO0FBQ25ELGlEQUFpRDtBQUNqRCw0Q0FBNEM7QUFDNUMsOENBQThDO0FBQzlDLCtDQUErQztBQUMvQyw2Q0FBNkM7QUFDN0MsZ0RBQWdEO0FBQ2hELGtEQUFrRDtBQUNsRCxtREFBbUQ7QUFDbkQsaURBQWlEO0FBQ2pELGdEQUFnRDtBQUNoRCxrREFBa0Q7QUFDbEQsbURBQW1EO0FBQ25ELGlEQUFpRDtBQUNqRCxvREFBb0Q7QUFDcEQsc0RBQXNEO0FBQ3RELHVEQUF1RDtBQUN2RCxxREFBcUQ7QUFDckQsaURBQWlEO0FBQ2pELG1EQUFtRDtBQUNuRCxvREFBb0Q7QUFDcEQsa0RBQWtEO0FBQ2xELHFEQUFxRDtBQUNyRCx1REFBdUQ7QUFDdkQsd0RBQXdEO0FBQ3hELHNEQUFzRDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sa0RBQWtEO0FBQ2xELG9EQUFvRDtBQUNwRCxxREFBcUQ7QUFDckQsbURBQW1EO0FBQ25ELHNEQUFzRDtBQUN0RCx3REFBd0Q7QUFDeEQsNkNBQTZDO0FBQzdDLCtDQUErQztBQUMvQyxnREFBZ0Q7QUFDaEQsOENBQThDO0FBQzlDLDJDQUEyQztBQUMzQyw2Q0FBNkM7QUFDN0MsOENBQThDO0FBQzlDLDRDQUE0QztBQUM1QztBQUNQLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ087QUFDUCw4QkFBOEI7QUFDOUI7QUFDQTtBQUNPO0FBQ1AsOEJBQThCO0FBQzlCO0FBQ0E7QUFDTztBQUNQLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ087QUFDUCxxQ0FBcUM7QUFDckM7QUFDQTtBQUNPO0FBQ1AscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDTztBQUNQLHFDQUFxQztBQUNyQztBQUNBO0FBQ087QUFDUCxxQ0FBcUM7QUFDckM7QUFDQTtBQUNPLDREQUE0RDtBQUM1RCw4REFBOEQ7QUFDOUQ7QUFDUCxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNPO0FBQ1AsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDTztBQUNQLG1DQUFtQztBQUNuQztBQUNBO0FBQ087QUFDUCxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNPLGlEQUFpRDtBQUNqRCxtREFBbUQ7QUFDbkQsb0RBQW9EO0FBQ3BELGtEQUFrRDtBQUNsRCx3REFBd0Q7QUFDeEQsMERBQTBEO0FBQzFELDJEQUEyRDtBQUMzRCx5REFBeUQ7QUFDekQsNENBQTRDO0FBQzVDLDhDQUE4QztBQUM5QywrQ0FBK0M7QUFDL0MsNkNBQTZDO0FBQzdDLHNEQUFzRDtBQUN0RCx3REFBd0Q7QUFDeEQseURBQXlEO0FBQ3pELHVEQUF1RDtBQUN2RCwyREFBMkQ7QUFDM0QsNkRBQTZEO0FBQzdELDhEQUE4RDtBQUM5RCw0REFBNEQ7QUFDNUQsNENBQTRDO0FBQzVDLDhDQUE4QztBQUM5QywrQ0FBK0M7QUFDL0MsNkNBQTZDO0FBQzdDLGtEQUFrRDtBQUNsRCxvREFBb0Q7QUFDcEQscURBQXFEO0FBQ3JELG1EQUFtRDtBQUNuRCxpREFBaUQ7QUFDakQsbURBQW1EO0FBQ25ELG9EQUFvRDtBQUNwRCxrREFBa0Q7QUFDbEQ7QUFDUCxpQ0FBaUM7QUFDakM7QUFDQTtBQUNPO0FBQ1AsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDTztBQUNQLGlDQUFpQztBQUNqQztBQUNBO0FBQ087QUFDUCxpQ0FBaUM7QUFDakM7QUFDQTtBQUNPO0FBQ1AsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDTztBQUNQLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ087QUFDUCw2QkFBNkI7QUFDN0I7QUFDQTtBQUNPO0FBQ1AsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDTyxpREFBaUQ7QUFDakQsbURBQW1EO0FBQ25ELG9EQUFvRDtBQUNwRCxrREFBa0Q7QUFDbEQsbUNBQW1DO0FBQzFDO0FBQ08sOENBQThDO0FBQ3JEO0FBQ08sZ0RBQWdEO0FBQ3ZEO0FBQ08saURBQWlEO0FBQ3hEO0FBQ08sa0RBQWtEO0FBQ3pEO0FBQ08sb0RBQW9EO0FBQzNEO0FBQ08scURBQXFEO0FBQzVEO0FBQ08sNkNBQTZDO0FBQ3BEO0FBQ08sK0NBQStDO0FBQ3REO0FBQ08sZ0RBQWdEO0FBQ3ZEO0FBQ08saURBQWlEO0FBQ3hEO0FBQ08sbURBQW1EO0FBQzFEO0FBQ08sb0RBQW9EO0FBQzNEO0FBQ08sOENBQThDO0FBQzlDLDhDQUE4QztBQUM5QztBQUNQLGtDQUFrQztBQUNsQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLHFDQUFxQztBQUNyQyxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ087QUFDUCxrQ0FBa0M7QUFDbEMsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxxQ0FBcUM7QUFDckMsa0NBQWtDO0FBQ2xDLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNodUJxSztBQUNySztBQUNBO0FBQ0E7QUFDQSxtREFBTztBQUNQO0FBQ0E7QUFDQSxxQkFBcUIsMERBQVU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbURBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw2REFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDBEQUFVO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNERBQVk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkRBQWE7QUFDckI7QUFDQTtBQUNBLFFBQVEsNERBQVk7QUFDcEI7QUFDQTtBQUNBLFFBQVEsMERBQVU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBWTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUFZO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNERBQVk7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBWTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFXO0FBQ25CLFFBQVEsbURBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtEQUFlO0FBQ3ZCLFFBQVEsbURBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbURBQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbURBQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1EQUFPO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyREFBVztBQUMzQjtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVEsbURBQU87QUFDZjtBQUNBO0FBQ0Esc0JBQXNCLG1EQUFPO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyREFBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHNCQUFzQixtREFBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxzQkFBc0IsbURBQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esc0JBQXNCLG1EQUFPO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1EQUFPO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbURBQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtREFBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbURBQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDaUI7Ozs7OztVQ3pNbEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05BLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQixTQUFJLElBQUksU0FBSTtBQUMvQixjQUFjLDZCQUE2QiwwQkFBMEIsY0FBYyxxQkFBcUI7QUFDeEcsaUJBQWlCLG9EQUFvRCxxRUFBcUUsY0FBYztBQUN4Six1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxtQ0FBbUMsU0FBUztBQUM1QyxtQ0FBbUMsV0FBVyxVQUFVO0FBQ3hELDBDQUEwQyxjQUFjO0FBQ3hEO0FBQ0EsOEdBQThHLE9BQU87QUFDckgsaUZBQWlGLGlCQUFpQjtBQUNsRyx5REFBeUQsZ0JBQWdCLFFBQVE7QUFDakYsK0NBQStDLGdCQUFnQixnQkFBZ0I7QUFDL0U7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLFVBQVUsWUFBWSxhQUFhLFNBQVMsVUFBVTtBQUN0RCxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQ2dGO0FBQ1I7QUFDeEU7QUFDNEQ7QUFDNUQsOERBQWtCO0FBQ2xCLDhEQUFrQjtBQUNsQixjQUFjLDZEQUFpQjtBQUMvQixjQUFjLDZEQUFpQjtBQUN4QixnQkFBZ0IsT0FBTywwREFBYztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RkFBNEI7QUFDNUIsZ0JBQWdCLG9FQUFTO0FBQ3pCLGlCQUFpQixvRUFBUztBQUMxQixnQkFBZ0Isb0VBQVM7QUFDekI7QUFDQSxvREFBSSwrQkFBK0IsV0FBVztBQUM5QyxvREFBSTtBQUNKO0FBQ0EsSUFBSSxzRkFBVztBQUNmO0FBQ0EsSUFBSSw0REFBWTtBQUNoQixDQUFDO0FBQ0Qsa0RBQUUsMkJBQTJCLG9GQUF5QixZQUFZO0FBQ2xFLGtEQUFFLDRCQUE0QixtRkFBd0IsWUFBWTtBQUNsRTtBQUNBLGtEQUFFO0FBQ0Y7QUFDQSxJQUFJLG1GQUF3QjtBQUM1QixDQUFDO0FBQ0Qsa0RBQUU7QUFDRjtBQUNBO0FBQ0EsQ0FBQztBQUNELDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0EseUNBQXlDLHdEQUFZO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvRkFBeUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRCxrREFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsa0RBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtRkFBd0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0VxdWlwcGVkSFVEL2V4dGVybmFsIHZhciBbXCJza3lyaW1QbGF0Zm9ybVwiXSIsIndlYnBhY2s6Ly9FcXVpcHBlZEhVRC8uL25vZGVfbW9kdWxlcy9Ac2t5cmltLXBsYXRmb3JtL3BhcHlydXMtdXRpbC9TdG9yYWdlVXRpbC5qcyIsIndlYnBhY2s6Ly9FcXVpcHBlZEhVRC8uLi9tb2R1bGVzL1NQVGV4dFV0aWxzL3NwVGV4dFV0aWxzLnRzIiwid2VicGFjazovL0VxdWlwcGVkSFVEL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0VxdWlwcGVkSFVEL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0VxdWlwcGVkSFVEL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9FcXVpcHBlZEhVRC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0VxdWlwcGVkSFVEL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vRXF1aXBwZWRIVUQvLi9zcmMvRXF1aXBwZWRIVUQudHMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBza3lyaW1QbGF0Zm9ybTsiLCIvKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblR5cGVzY3JpcHQgZGVmaW5pdGlvbnMgZm9yIHY0LjJcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuVGhpcyBmaWxlIHdhcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBQYXB5cnVzLTItVHlwZXNjcmlwdC5leGVcclxuaHR0cHM6Ly9naXRodWIuY29tL0Nhcmxvc0xleXZhQXlhbGEvUGFweXJ1cy0yLVR5cGVzY3JpcHRcclxuXHJcblRoZSBwcm9ncmFtIGhhcyBubyB3YXkgdG8ga25vdyB0aGUgaW50ZW50aW9uIG9mIHRoZSBodW1hbnMgdGhhdCBtYWRlXHJcbnRoZSBzY3JpcHRzLCBzbyBpdCdzIGFsd2F5cyBhZHZpc2FibGUgdG8gbWFudWFsbHkgY2hlY2sgYWxsIGdlbmVyYXRlZFxyXG5maWxlcyB0byBtYWtlIHN1cmUgZXZlcnl0aGluZyBpcyBkZWNsYXJlZCBhcyBpdCBzaG91bGQuXHJcblxyXG5UYWtlIG5vdGUgdGhlIHByb2dyYW0gYXNzdW1lcyB0aGlzIHNjcmlwdCBleGlzdHMgaW4gc29tZSBzdWJmb2xkZXJcclxudG8gdGhlIGZvbGRlciB3aGVyZSBgc2t5cmltUGxhdGZvcm0udHNgIGlzIGZvdW5kLCBvdGhlcndpc2UgeW91J2xsIGdldFxyXG5cIkNhbm5vdCBmaW5kIG1vZHVsZS4uLlwiIHR5cGUgb2YgZXJyb3JzLlxyXG5cclxuSWYgeW91IHdhbnQgdG8gaGF2ZSB0aGlzIHNjcmlwdCBpbiBzb21lIG90aGVyIHBsYWNlLCBqdXN0IGNoYW5nZSB0aGVcclxucmVsYXRpdmUgcGF0aCBvZiBlYWNoIGBpbXBvcnRgLlxyXG4qL1xyXG5pbXBvcnQgKiBhcyBzcCBmcm9tIFwic2t5cmltUGxhdGZvcm1cIjtcclxudmFyIHNuID0gc3AuU3RvcmFnZVV0aWw7XHJcbi8qKiBNT0QgQVVUSE9SUywgUkVBRCFcclxuXHJcbiAgICBUaGlzIHNjcmlwdCBjb250YWlucyBmdW5jdGlvbnMgZm9yIHNhdmluZyBhbmQgbG9hZGluZyBhbnkgYW1vdW50IG9mIGludCwgZmxvYXQsIGZvcm0gYW5kIHN0cmluZyB2YWx1ZXNcclxuICAgIGJ5IG5hbWUgb24gYSBmb3JtIG9yIGdsb2JhbGx5LiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGFjY2Vzc2VkIGFuZCBjaGFuZ2VkIGZyb20gYW55IG1vZCB3aGljaCBhbGxvd3NcclxuICAgIG1vZHMgdG8gYmVjb21lIGNvbXBhdGlibGUgd2l0aCBlYWNoIG90aGVyIHdpdGhvdXQgYWRkaW5nIGFueSByZXF1aXJlbWVudHMgdG8gdGhlIG90aGVyIG1vZCBvciBpdHMgdmVyc2lvblxyXG4gICAgb3RoZXIgdGhhbiB0aGlzIHBsdWdpbi5cclxuXHJcbiAgICBWYWx1ZXMgd2lsbCBzdGF5IG9uIGZvcm1zIG9yIGdsb2JhbGx5IHVudGlsIHRoZXkgYXJlIFVuc2V0IG9yIENsZWFyZWQgaW4gY2FzZSBvZiBsaXN0cy4gSWYgdmFsdWVcclxuICAgIGlzIHNldCBvbiBhIGZvcm0gYW5kIHRoZSBvYmplY3QgaXMgZGVsZXRlZCB0aGVuIFRIRSB2YWx1ZSB3aWxsIGJlIHJlbW92ZWQgd2hlbiBzYXZpbmcgZ2FtZS5cclxuICAgIElmIHlvdSBhcmUgZG9uZSB3aXRoIHVzaW5nIGEgY2VydGFpbiB2YXJpYWJsZSB5b3Ugc2hvdWxkIHVzZSBVbnNldCBvciBDbGVhciBmdW5jdGlvbiB0byByZW1vdmUgdGhlbVxyXG4gICAgYnV0IGl0IGlzIG5vdCByZXF1aXJlZC5cclxuXHJcbiAgICBTYXZpbmcgTUNNIGNvbmZpZyB2YWx1ZXMgaGVyZSB3b3VsZCBhbGxvdyBvdGhlciBtb2RzIHRvIGNoYW5nZSB5b3VyIG1vZCBzZXR0aW5ncyB3aGljaCBtYXlcclxuICAgIGJlIHVzZWZ1bC4gSXQgc2hvdWxkIGFsc28gYWxsb3cgeW91IHRvIGNoYW5nZSBNQ00gY29uZmlnIHNjcmlwdCB3aXRob3V0IHdvcnJ5aW5nIGFib3V0IHZlcnNpb25pbmdcclxuICAgIHNpbmNlIHRoZXJlIGFyZSBubyBuZXcgdmFyaWFibGVzIGluIHRoZSBzY3JpcHQgaXRzZWxmLlxyXG5cclxuICAgIEZ1bmN0aW9ucyB0aGF0IHN0YXJ0IHdpdGggRmlsZSBpbiB0aGUgbmFtZSB3aWxsIHNhdmUgdmFsdWVzIHRvIGEgc2VwYXJhdGUgZmlsZSwgc28gdGhhdCB5b3UgY2FuXHJcbiAgICBhY2Nlc3MgdGhlIHNhbWUgdmFsdWVzIGZyb20gYWxsIHNhdmVnYW1lcy4gVGhpcyBtYXkgYmUgdXNlZnVsIGZvciBjb25maWd1cmF0aW9uIHNldHRpbmdzLlxyXG4gICAoRklMRSBGVU5DVElPTlMgQVJFIERFUFJFQ0FURUQhIFVTRSBKU09OVVRJTC5QU0MgSU5TVEVBRClcclxuXHJcbiAgICBTYXZlZCB2YWx1ZXMgdGFrZSB2ZXJ5IGxpdHRsZSBtZW1vcnkgLSBleHBlY3QgdG8gdXNlIGxlc3MgdGhhbiA1MDAgS0Igb2YgcGh5c2ljYWwgbWVtb3J5IGV2ZW4gd2hlblxyXG4gICAgc2V0dGluZyB0aG91c2FuZHMgb2YgdmFsdWVzLlxyXG5cclxuICAgIFZhbHVlIG5hbWVzIGFyZSBub3QgY2FzZSBzZW5zaXRpdmUsIHRoYXQgbWVhbnMgR2V0SW50VmFsdWUobm9uZSwgXCJhYmNcIikgPT0gR2V0SW50VmFsdWUobm9uZSwgXCJhQkNcIikuXHJcblxyXG4gICAgQWxsIHZhbHVlcyBhcmUgc2VwYXJhdGVkIGZyb20gZWFjaCBvdGhlciBieSB0eXBlISBUaGF0IG1lYW5zIFNldEludFZhbHVlKG5vbmUsIFwiYWJjXCIsIDEpIGFuZFxyXG4gICAgU2V0RmxvYXRWYWx1ZShub25lLCBcImFiY1wiLCAyLjApIGNyZWF0ZSBzZXBhcmF0ZSBlbnRyaWVzIGFuZCBhcmVuJ3QgYWZmZWN0ZWQgYnkgZWFjaCBvdGhlci5cclxuICAgIFN0b3JhZ2VVdGlsLlNldEludFZhbHVlKG5vbmUsIFwibXlWYWx1ZVwiLCAxKVxyXG4gICAgU3RvcmFnZVV0aWwuU2V0RmxvYXRWYWx1ZShub25lLCBcIm15VmFsdWVcIiwgNS4wKVxyXG4gICAgaW50IHZhbHVlID0gU3RvcmFnZVV0aWwuR2V0SW50VmFsdWUobm9uZSwgXCJteVZhbHVlXCIpXHJcbiAgICB2YWx1ZSA9PSAxIDsgdHJ1ZVxyXG4gICAgdmFsdWUgPT0gNSA7IGZhbHNlXHJcblxyXG4gICAgV2hlbiBjaG9vc2luZyBuYW1lcyBmb3IgdmFyaWFibGVzIHRyeSB0byByZW1lbWJlciB0aGF0IGFsbCBtb2RzIGFjY2VzcyB0aGUgc2FtZSBzdG9yYWdlLCBzbyBpZiB5b3VcclxuICAgIGNyZWF0ZSBhIHZhcmlhYmxlIHdpdGggbmFtZSBcIk5hbWVcIiB0aGVuIG1hbnkgb3RoZXIgbW9kcyBjb3VsZCB1c2UgdGhlIHNhbWUgdmFyaWFibGUgYnV0IGluIGRpZmZlcmVudFxyXG4gICAgd2F5cyB0aGF0IGxlYWQgdG8gdW53YW50ZWQgYmVoYXZpb3IuIEl0IGlzIHJlY29tbWVuZGVkIHRvIHByZWZpeCB0aGUgdmFyaWFibGUgd2l0aCB5b3VyIG1vZCBuYW1lLFxyXG4gICAgdGhhdCB3YXkgeW91IGNhbiBiZSBzdXJlIG5vYm9keSBlbHNlIHdpbGwgdHJ5IHRvIHVzZSB0aGUgc2FtZSB2YXJpYWJsZSBpbiB0aGVpciBtb2QuIEZvciBleGFtcGxlXHJcbiAgICByZWFsaXN0aWMgbmVlZHMgYW5kIGRpc2Vhc2VzIG1pZ2h0IHNldCBodW5nZXIgYXMgXCJybmRfaHVuZ2VydmFsdWVcIi5cclxuXHJcbiAgICBZb3UgY2FuIGFsc28gdXNlIHRoaXMgc3RvcmFnZSB0byBtYWtlIHlvdXIgbW9kIGZ1bmN0aW9ucyBhdmFpbGFibGUgdG8gb3RoZXIgbW9kcywgZm9yIGV4YW1wbGUgaWZcclxuICAgIHlvdXIgbW9kIGhhcyBhIGZ1bmN0aW9uIHRoYXQgc2V0cyBhbiBBY3RvciB0byBiZSBpbnZpc2libGUgeW91IGNvdWxkIGFkZCBhIHNjcmlwdCB0aGF0IGNoZWNrczpcclxuICAgIGludCBpID0gU3RvcmFnZVV0aWwuRm9ybUxpc3RDb3VudChub25lLCBcIk1ha2VJbnZpc2libGVcIilcclxuICAgIHdoaWxlKGkgPiAwKVxyXG4gICAgICAgIGktLVxyXG4gICAgICAgIEFjdG9yIG1ha2UgPSBTdG9yYWdlVXRpbC5Gb3JtTGlzdEdldChub25lLCBcIk1ha2VJbnZpc2libGVcIiwgaSkgYXMgQWN0b3JcclxuICAgICAgICBpZihtYWtlKVxyXG4gICAgICAgICAgICBNeVNjcmlwdEZ1bmN0aW9uKG1ha2UpXHJcbiAgICAgICAgZW5kaWZcclxuICAgICAgICBTdG9yYWdlVXRpbC5Gb3JtTGlzdFJlbW92ZUF0KG5vbmUsIFwiTWFrZUludmlzaWJsZVwiLCBpKVxyXG4gICAgZW5kd2hpbGVcclxuICAgIEFuZCB0aGUgb3RoZXIgbW9kIGNvdWxkIHdyaXRlOlxyXG4gICAgU3RvcmFnZVV0aWwuRm9ybUxpc3RBZGQobm9uZSwgXCJNYWtlSW52aXNpYmxlXCIsIG15QWN0b3IpXHJcbiAgICB0byBtYWtlIHNvbWVvbmUgaW52aXNpYmxlIHVzaW5nIHlvdXIgbW9kLiBCdXQgaWYgeW91ciBtb2QgaXNuJ3QgcHJlc2VudCB0aGVuIG5vdGhpbmcgaGFwcGVucy5cclxuICAgIFRoaXMgaXMganVzdCBhbiBleGFtcGxlLCBJJ20gc3VyZSB5b3UgY2FuIGZpbmQgYmV0dGVyIHdheXMgdG8gaW1wbGVtZW50IGNvbXBhdGliaWxpdHksIGl0IHdvdWxkXHJcbiAgICBoZWxwIHRvIGluY2x1ZGUgYSBkb2N1bWVudGF0aW9uIGZvciBvdGhlciBtb2RkZXJzIGlmIHlvdSBkby5cclxuLyoqXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAgICBTdG9yYWdlIGZ1bmN0aW9ucyAtIHZhbHVlcyBpbiBzYXZlIGdhbWUgZmlsZS4gKi9cclxuLyoqIFNldCBpbnQvZmxvYXQvc3RyaW5nL0Zvcm0gdmFsdWUgZ2xvYmFsbHkgb3Igb24gYW55IGZvcm0gYnkgbmFtZSBhbmQgcmV0dXJuXHJcbiAgIHRoZSB2YWx1ZSBwYXNzZWQsIG9yIGFzIHVuaW5pdGlhbGl6ZWQgdmFyaWFibGUgaWYgaW52YWxpZCBrZXlzIGdpdmVuLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIHNhdmUgb24uIFNldCBub25lIHRvIHNhdmUgZ2xvYmFsbHkuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgdmFsdWUuXHJcbiAgIHZhbHVlOiB2YWx1ZSB0byBzZXQgdG8gdGhlIGdpdmVuIGtleXMuIElmIHplcm8sIGVtcHR5LCBvciBub25lIGFyZSBnaXZlbiwgdGhlIGtleSB3aWxsIGJlIHVuc2V0LiAqL1xyXG5leHBvcnQgdmFyIFNldEludFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLlNldEludFZhbHVlKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIFNldEZsb2F0VmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uU2V0RmxvYXRWYWx1ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBTZXRTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5TZXRTdHJpbmdWYWx1ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBTZXRGb3JtVmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uU2V0Rm9ybVZhbHVlKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG4vKiogUmVtb3ZlIGEgcHJldmlvdXNseSBzZXQgaW50L2Zsb2F0L3N0cmluZy9Gb3JtIHZhbHVlIG9uIGFuIGZvcm0gb3IgZ2xvYmFsbHkgYW5kXHJcbmlmIHN1Y2Nlc3NmdWwuIFRoaXMgd2lsbCByZXR1cm4gZmFsc2UgaWYgdmFsdWUgZGlkbid0IGV4aXN0LlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIHJlbW92ZSBmcm9tLiBTZXQgbm9uZSB0byByZW1vdmUgZ2xvYmFsIHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIHZhbHVlLiAqL1xyXG5leHBvcnQgdmFyIFVuc2V0SW50VmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5VbnNldEludFZhbHVlKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgVW5zZXRGbG9hdFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uVW5zZXRGbG9hdFZhbHVlKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgVW5zZXRTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLlVuc2V0U3RyaW5nVmFsdWUoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBVbnNldEZvcm1WYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLlVuc2V0Rm9ybVZhbHVlKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbi8qKiBDaGVjayBpZiBpbnQvZmxvYXQvc3RyaW5nL0Zvcm0gdmFsdWUgaGFzIGJlZW4gc2V0IG9uIGZvcm0gb3IgZ2xvYmFsbHkuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gY2hlY2sgb24uIFNldCBub25lIHRvIGNoZWNrIGdsb2JhbCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiB2YWx1ZS4gKi9cclxuZXhwb3J0IHZhciBIYXNJbnRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkhhc0ludFZhbHVlKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgSGFzRmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkhhc0Zsb2F0VmFsdWUoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBIYXNTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkhhc1N0cmluZ1ZhbHVlKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgSGFzRm9ybVZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uSGFzRm9ybVZhbHVlKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbi8qKiBHZXQgcHJldmlvdXNseSBzYXZlZCBpbnQvZmxvYXQvc3RyaW5nL0Zvcm0gdmFsdWUgb24gZm9ybSBvciBnbG9iYWxseS5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBnZXQgZnJvbS4gU2V0IG5vbmUgdG8gZ2V0IGdsb2JhbCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiB2YWx1ZS5cclxuICAgW29wdGlvbmFsXSBtaXNzaW5nOiBpZiB2YWx1ZSBoYXMgbm90IGJlZW4gc2V0LCByZXR1cm4gdGhpcyB2YWx1ZSBpbnN0ZWFkLiAqL1xyXG5leHBvcnQgdmFyIEdldEludFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkdldEludFZhbHVlKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgR2V0RmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IDAuMDsgfVxyXG4gICAgcmV0dXJuIHNuLkdldEZsb2F0VmFsdWUoT2JqS2V5LCBLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuZXhwb3J0IHZhciBHZXRTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IFwiXCI7IH1cclxuICAgIHJldHVybiBzbi5HZXRTdHJpbmdWYWx1ZShPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpO1xyXG59O1xyXG5leHBvcnQgdmFyIEdldEZvcm1WYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5HZXRGb3JtVmFsdWUoT2JqS2V5LCBLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuLyoqIFBsdWNrcyBhIHByZXZpb3VzbHkgc2F2ZWQgaW50L2Zsb2F0L3N0cmluZy9Gb3JtIHZhbHVlIG9uIGZvcm0gb3IgZ2xvYmFsbHkuXHJcbiAgIFJldHVybmluZyB0aGUgdmFsdWUgc3RvcmVkLCB0aGVuIHJlbW92aW5nIGl0IGZyb20gc3RvcmFnZS5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBwbHVjayBmcm9tLiBTZXQgbm9uZSB0byBnZXQgZ2xvYmFsIHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIHZhbHVlLlxyXG4gICBbb3B0aW9uYWxdIG1pc3Npbmc6IGlmIHZhbHVlIGhhcyBub3QgYmVlbiBzZXQsIHJldHVybiB0aGlzIHZhbHVlIGluc3RlYWQuICovXHJcbmV4cG9ydCB2YXIgUGx1Y2tJbnRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IDA7IH1cclxuICAgIHJldHVybiBzbi5QbHVja0ludFZhbHVlKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgUGx1Y2tGbG9hdFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uUGx1Y2tGbG9hdFZhbHVlKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgUGx1Y2tTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IFwiXCI7IH1cclxuICAgIHJldHVybiBzbi5QbHVja1N0cmluZ1ZhbHVlKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgUGx1Y2tGb3JtVmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBtaXNzaW5nKSB7XHJcbiAgICBpZiAobWlzc2luZyA9PT0gdm9pZCAwKSB7IG1pc3NpbmcgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uUGx1Y2tGb3JtVmFsdWUoT2JqS2V5LCBLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuLyoqIEdldCBwcmV2aW91c2x5IHNhdmVkIGludC9mbG9hdC9zdHJpbmcvRm9ybSB2YWx1ZSBvbiBmb3JtIG9yIGdsb2JhbGx5LlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIGdldCBmcm9tLiBTZXQgbm9uZSB0byBnZXQgZ2xvYmFsIHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIHZhbHVlLlxyXG4gICBhbW91bnQ6ICsvLSB0aGUgYW1vdW50IHRvIGFkanVzdCB0aGUgY3VycmVudCB2YWx1ZSBieVxyXG5cclxuICAgZ2l2ZW4ga2V5cyB3aWxsIGJlIGluaXRpYWxpemVkIHRvIGdpdmVuIGFtb3VudCBpZiBpdCBkb2VzIG5vdCBleGlzdCAqL1xyXG5leHBvcnQgdmFyIEFkanVzdEludFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgYW1vdW50KSB7IHJldHVybiBzbi5BZGp1c3RJbnRWYWx1ZShPYmpLZXksIEtleU5hbWUsIGFtb3VudCk7IH07XHJcbmV4cG9ydCB2YXIgQWRqdXN0RmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGFtb3VudCkgeyByZXR1cm4gc24uQWRqdXN0RmxvYXRWYWx1ZShPYmpLZXksIEtleU5hbWUsIGFtb3VudCk7IH07XHJcbi8qKiBBZGQgYW4gaW50L2Zsb2F0L3N0cmluZy9Gb3JtIHRvIGEgbGlzdCBvbiBmb3JtIG9yIGdsb2JhbGx5IGFuZCByZXR1cm5cclxuICAgdGhlIHZhbHVlJ3MgbmV3IGluZGV4LiBJbmRleCBjYW4gYmUgLTEgaWYgd2Ugd2VyZSB1bmFibGUgdG8gYWRkXHJcbiAgIHRoZSB2YWx1ZS5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBhZGQgdG8uIFNldCBub25lIHRvIGFkZCBnbG9iYWwgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgdmFsdWUuXHJcbiAgIHZhbHVlOiB2YWx1ZSB0byBhZGQuXHJcbiAgIFtvcHRpb25hbF0gYWxsb3dEdXBsaWNhdGU6IGFsbG93IGFkZGluZyB2YWx1ZSB0byBsaXN0IGlmIHRoaXMgdmFsdWUgYWxyZWFkeSBleGlzdHMgaW4gdGhlIGxpc3QuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdEFkZCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSkge1xyXG4gICAgaWYgKGFsbG93RHVwbGljYXRlID09PSB2b2lkIDApIHsgYWxsb3dEdXBsaWNhdGUgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uSW50TGlzdEFkZChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0QWRkID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKSB7XHJcbiAgICBpZiAoYWxsb3dEdXBsaWNhdGUgPT09IHZvaWQgMCkgeyBhbGxvd0R1cGxpY2F0ZSA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5GbG9hdExpc3RBZGQoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpO1xyXG59O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RBZGQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpIHtcclxuICAgIGlmIChhbGxvd0R1cGxpY2F0ZSA9PT0gdm9pZCAwKSB7IGFsbG93RHVwbGljYXRlID0gdHJ1ZTsgfVxyXG4gICAgcmV0dXJuIHNuLlN0cmluZ0xpc3RBZGQoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0QWRkID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKSB7XHJcbiAgICBpZiAoYWxsb3dEdXBsaWNhdGUgPT09IHZvaWQgMCkgeyBhbGxvd0R1cGxpY2F0ZSA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5Gb3JtTGlzdEFkZChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSk7XHJcbn07XHJcbi8qKiBHZXQgYSB2YWx1ZSBmcm9tIGxpc3QgYnkgaW5kZXggb24gZm9ybSBvciBnbG9iYWxseS5cclxuICAgVGhpcyB3aWxsIHJldHVybiAwIGFzIHZhbHVlIGlmIHRoZXJlIHdhcyBhIHByb2JsZW0uXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gZ2V0IHZhbHVlIG9uLiBTZXQgbm9uZSB0byBnZXQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC5cclxuICAgaW5kZXg6IGluZGV4IG9mIHZhbHVlIGluIHRoZSBsaXN0LiAqL1xyXG5leHBvcnQgdmFyIEludExpc3RHZXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uSW50TGlzdEdldChPYmpLZXksIEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RHZXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uRmxvYXRMaXN0R2V0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RHZXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uU3RyaW5nTGlzdEdldChPYmpLZXksIEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdEdldCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5Gb3JtTGlzdEdldChPYmpLZXksIEtleU5hbWUsIGluZGV4KTsgfTtcclxuLyoqIFNldCBhIHZhbHVlIGluIGxpc3QgYnkgaW5kZXggb24gZm9ybSBvciBnbG9iYWxseS5cclxuICAgVGhpcyB3aWxsIHJldHVybiB0aGUgcHJldmlvdXMgdmFsdWUgb3IgMCBpZiB0aGVyZSB3YXMgYSBwcm9ibGVtLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIHNldCB2YWx1ZSBvbi4gU2V0IG5vbmUgdG8gc2V0IGdsb2JhbCBsaXN0IHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuXHJcbiAgIGluZGV4OiBpbmRleCBvZiB2YWx1ZSBpbiB0aGUgbGlzdC5cclxuICAgdmFsdWU6IHZhbHVlIHRvIHNldCB0by4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0U2V0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5JbnRMaXN0U2V0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RTZXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdFNldChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdFNldCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdFNldChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RTZXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkZvcm1MaXN0U2V0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuLyoqIFBsdWNrcyBhIHZhbHVlIGZyb20gbGlzdCBieSBpbmRleCBvbiBmb3JtIG9yIGdsb2JhbGx5LlxyXG4gICBUaGUgaW5kZXggaXMgcmVtb3ZlZCBmcm9tIHRoZSBsaXN0J3Mgc3RvcmFnZSBhZnRlciByZXR1cm5pbmcgaXQncyB2YWx1ZS5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBwbHVjayB2YWx1ZSBmcm9tLiBTZXQgbm9uZSB0byBnZXQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC5cclxuICAgaW5kZXg6IGluZGV4IG9mIHZhbHVlIGluIHRoZSBsaXN0LlxyXG4gICBbb3B0aW9uYWxdIG1pc3Npbmc6IGlmIGluZGV4IGhhcyBub3QgYmVlbiBzZXQsIHJldHVybiB0aGlzIHZhbHVlIGluc3RlYWQuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdFBsdWNrID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIG1pc3NpbmcpIHsgcmV0dXJuIHNuLkludExpc3RQbHVjayhPYmpLZXksIEtleU5hbWUsIGluZGV4LCBtaXNzaW5nKTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RQbHVjayA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4LCBtaXNzaW5nKSB7IHJldHVybiBzbi5GbG9hdExpc3RQbHVjayhPYmpLZXksIEtleU5hbWUsIGluZGV4LCBtaXNzaW5nKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0UGx1Y2sgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgbWlzc2luZykgeyByZXR1cm4gc24uU3RyaW5nTGlzdFBsdWNrKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIG1pc3NpbmcpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0UGx1Y2sgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgbWlzc2luZykgeyByZXR1cm4gc24uRm9ybUxpc3RQbHVjayhPYmpLZXksIEtleU5hbWUsIGluZGV4LCBtaXNzaW5nKTsgfTtcclxuLyoqIEdldHMgdGhlIHZhbHVlIG9mIHRoZSB2ZXJ5IGZpcnN0IGVsZW1lbnQgaW4gYSBsaXN0LCBhbmQgc3Vic2VxdWVudGx5IHJlbW92ZXMgdGhlIGluZGV4IGFmdGVyd2FyZC5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBzaGlmdCB2YWx1ZSBmcm9tLiBTZXQgbm9uZSB0byBnZXQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdCB0byBzaGlmdCBpdCdzIGZpcnN0IHZhbHVlIGZyb20uICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdFNoaWZ0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uSW50TGlzdFNoaWZ0KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0U2hpZnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5GbG9hdExpc3RTaGlmdChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RTaGlmdCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RTaGlmdChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0U2hpZnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5Gb3JtTGlzdFNoaWZ0KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbi8qKiBHZXRzIHRoZSB2YWx1ZSBvZiB0aGUgdmVyeSBsYXN0IGVsZW1lbnQgaW4gYSBsaXN0LCBhbmQgc3Vic2VxdWVudGx5IHJlbW92ZXMgdGhlIGluZGV4IGFmdGVyd2FyZC5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBwb3AgdmFsdWUgZnJvbS4gU2V0IG5vbmUgdG8gZ2V0IGdsb2JhbCBsaXN0IHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QgdG8gcG9wIG9mZiBpdCdzIGxhc3QgdmFsdWUuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdFBvcCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkludExpc3RQb3AoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RQb3AgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5GbG9hdExpc3RQb3AoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0UG9wID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdFBvcChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0UG9wID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uRm9ybUxpc3RQb3AoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuLyoqIEFkanVzdCB0aGUgZXhpc3RpbmcgdmFsdWUgb2YgYSBsaXN0IGJ5IHRoZSBnaXZlbiBhbW91bnQuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gc2V0IHZhbHVlIG9uLiBTZXQgbm9uZSB0byBzZXQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC5cclxuICAgaW5kZXg6IGluZGV4IG9mIHZhbHVlIGluIHRoZSBsaXN0LlxyXG4gICBhbW91bnQ6ICsvLSB0aGUgYW1vdW50IHRvIGFkanVzdCB0aGUgbGlzdHMgY3VycmVudCBpbmRleCB2YWx1ZSBieS5cclxuXHJcbnMgMCBpZiBpbmRleCBkb2VzIG5vdCBleGlzdHMgKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0QWRqdXN0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIGFtb3VudCkgeyByZXR1cm4gc24uSW50TGlzdEFkanVzdChPYmpLZXksIEtleU5hbWUsIGluZGV4LCBhbW91bnQpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdEFkanVzdCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4LCBhbW91bnQpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdEFkanVzdChPYmpLZXksIEtleU5hbWUsIGluZGV4LCBhbW91bnQpOyB9O1xyXG4vKiogSW5zZXJ0IGFuIGludC9mbG9hdC9zdHJpbmcvRm9ybSB0byBhIGxpc3Qgb24gZm9ybSBvciBnbG9iYWxseSBhbmQgcmV0dXJuXHJcbiAgIGlmIHN1Y2Nlc3NmdWwuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gYWRkIHRvLiBTZXQgbm9uZSB0byBhZGQgZ2xvYmFsIHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIHZhbHVlLlxyXG4gICBpbmRleDogcG9zaXRpb24gaW4gbGlzdCB0byBwdXQgdGhlIHZhbHVlLiAwIGlzIGZpcnN0IGVudHJ5IGluIGxpc3QuXHJcbiAgIHZhbHVlOiB2YWx1ZSB0byBhZGQuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdEluc2VydCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uSW50TGlzdEluc2VydChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0SW5zZXJ0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5GbG9hdExpc3RJbnNlcnQoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RJbnNlcnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RJbnNlcnQoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0SW5zZXJ0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5Gb3JtTGlzdEluc2VydChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbi8qKiBSZW1vdmUgYSBwcmV2aW91c2x5IGFkZGVkIGludC9mbG9hdC9zdHJpbmcvRm9ybSB2YWx1ZSBmcm9tIGEgbGlzdCBvbiBmb3JtXHJcbiAgIG9yIGdsb2JhbGx5IGFuZCByZXR1cm4gaG93IG1hbnkgaW5zdGFuY2VzIG9mIHRoaXMgdmFsdWUgd2VyZSByZW1vdmVkLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIHJlbW92ZSBmcm9tLiBTZXQgbm9uZSB0byByZW1vdmUgZ2xvYmFsIHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIHZhbHVlLlxyXG4gICB2YWx1ZTogdmFsdWUgdG8gcmVtb3ZlLlxyXG4gICBbb3B0aW9uYWxdIGFsbG93SW5zdGFuY2VzOiByZW1vdmUgYWxsIGluc3RhbmNlcyBvZiB0aGlzIHZhbHVlIGluIGEgbGlzdC4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0UmVtb3ZlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcykge1xyXG4gICAgaWYgKGFsbEluc3RhbmNlcyA9PT0gdm9pZCAwKSB7IGFsbEluc3RhbmNlcyA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uSW50TGlzdFJlbW92ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdFJlbW92ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpIHtcclxuICAgIGlmIChhbGxJbnN0YW5jZXMgPT09IHZvaWQgMCkgeyBhbGxJbnN0YW5jZXMgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZsb2F0TGlzdFJlbW92ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpO1xyXG59O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RSZW1vdmUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKSB7XHJcbiAgICBpZiAoYWxsSW5zdGFuY2VzID09PSB2b2lkIDApIHsgYWxsSW5zdGFuY2VzID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5TdHJpbmdMaXN0UmVtb3ZlKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RSZW1vdmUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKSB7XHJcbiAgICBpZiAoYWxsSW5zdGFuY2VzID09PSB2b2lkIDApIHsgYWxsSW5zdGFuY2VzID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5Gb3JtTGlzdFJlbW92ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpO1xyXG59O1xyXG4vKiogQ2xlYXIgYSBsaXN0IG9mIHZhbHVlcyAodW5zZXQpIG9uIGFuIGZvcm0gb3IgZ2xvYmFsbHkgYW5kXHJcbnRoZSBwcmV2aW91cyBzaXplIG9mIGxpc3QuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gY2xlYXIgb24uIFNldCBub25lIHRvIGNsZWFyIGdsb2JhbCBsaXN0LlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdENsZWFyID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uSW50TGlzdENsZWFyKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0Q2xlYXIgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5GbG9hdExpc3RDbGVhcihPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RDbGVhciA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RDbGVhcihPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0Q2xlYXIgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5Gb3JtTGlzdENsZWFyKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbi8qKiBSZW1vdmUgYSB2YWx1ZSBmcm9tIGxpc3QgYnkgaW5kZXggb24gZm9ybSBvciBnbG9iYWxseSBhbmRcclxuaWYgd2Ugd2VyZSBzdWNjZXNzZnVsIGluIGRvaW5nIHNvLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIHJlbW92ZSBmcm9tLiBTZXQgbm9uZSB0byByZW1vdmUgZ2xvYmFsIHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuXHJcbiAgIGluZGV4OiBpbmRleCBvZiB2YWx1ZSBpbiB0aGUgbGlzdC4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0UmVtb3ZlQXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uSW50TGlzdFJlbW92ZUF0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdFJlbW92ZUF0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdFJlbW92ZUF0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RSZW1vdmVBdCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5TdHJpbmdMaXN0UmVtb3ZlQXQoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RSZW1vdmVBdCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5Gb3JtTGlzdFJlbW92ZUF0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG4vKiogR2V0IHNpemUgb2YgYSBsaXN0IG9uIGZvcm0gb3IgZ2xvYmFsbHkuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gY2hlY2sgb24uIFNldCBub25lIHRvIGNoZWNrIGdsb2JhbCBsaXN0LlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdENvdW50ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uSW50TGlzdENvdW50KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0Q291bnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5GbG9hdExpc3RDb3VudChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RDb3VudCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RDb3VudChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0Q291bnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5Gb3JtTGlzdENvdW50KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbi8qKiBHZXQgdGhlIG51bWJlciBvZiBvY2N1cnJlbmNlcyBvZiBhIHNwZWNpZmljIHZhbHVlIHdpdGhpbiBhIGxpc3QuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gY2hlY2sgb24uIFNldCBub25lIHRvIGNoZWNrIGdsb2JhbCBsaXN0LlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuXHJcbiAgIHZhbHVlOiB2YWx1ZSB0byBsb29rIGZvci5cclxuICAgW29wdGlvbmFsXSBleGNsdWRlOiBpZiB0cnVlLCBmdW5jdGlvbiB3aWxsIHJldHVybiBudW1iZXIgb2YgZWxlbWVudHMgTk9UIGVxdWFsIHRvIHZhbHVlLiAqL1xyXG5leHBvcnQgdmFyIEludExpc3RDb3VudFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGV4Y2x1ZGUpIHtcclxuICAgIGlmIChleGNsdWRlID09PSB2b2lkIDApIHsgZXhjbHVkZSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uSW50TGlzdENvdW50VmFsdWUoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgZXhjbHVkZSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0Q291bnRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBleGNsdWRlKSB7XHJcbiAgICBpZiAoZXhjbHVkZSA9PT0gdm9pZCAwKSB7IGV4Y2x1ZGUgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZsb2F0TGlzdENvdW50VmFsdWUoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgZXhjbHVkZSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdENvdW50VmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgZXhjbHVkZSkge1xyXG4gICAgaWYgKGV4Y2x1ZGUgPT09IHZvaWQgMCkgeyBleGNsdWRlID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5TdHJpbmdMaXN0Q291bnRWYWx1ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBleGNsdWRlKTtcclxufTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdENvdW50VmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgZXhjbHVkZSkge1xyXG4gICAgaWYgKGV4Y2x1ZGUgPT09IHZvaWQgMCkgeyBleGNsdWRlID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5Gb3JtTGlzdENvdW50VmFsdWUoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgZXhjbHVkZSk7XHJcbn07XHJcbi8qKiBGaW5kIGEgdmFsdWUgaW4gbGlzdCBvbiBmb3JtIG9yIGdsb2JhbGx5IGFuZCByZXR1cm4gaXRzXHJcbiAgIGluZGV4IG9yIC0xIGlmIHZhbHVlIHdhcyBub3QgZm91bmQuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gZmluZCB2YWx1ZSBvbi4gU2V0IG5vbmUgdG8gZmluZCBnbG9iYWwgbGlzdCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiBsaXN0LlxyXG4gICB2YWx1ZTogdmFsdWUgdG8gc2VhcmNoLiAqL1xyXG5leHBvcnQgdmFyIEludExpc3RGaW5kID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkludExpc3RGaW5kKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdEZpbmQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmxvYXRMaXN0RmluZChPYmpLZXksIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0RmluZCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5TdHJpbmdMaXN0RmluZChPYmpLZXksIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdEZpbmQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRm9ybUxpc3RGaW5kKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG4vKiogRmluZCBpZiBhIHZhbHVlIGluIGxpc3Qgb24gZm9ybSBvciBnbG9iYWxseSBleGlzdHMsIHRydWUgaWYgaXQgZXhpc3RzLFxyXG4gICBmYWxzZSBpZiBpdCBkb2Vzbid0LlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIGZpbmQgdmFsdWUgb24uIFNldCBub25lIHRvIGZpbmQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC5cclxuICAgdmFsdWU6IHZhbHVlIHRvIHNlYXJjaC4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0SGFzID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkludExpc3RIYXMoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0SGFzID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdEhhcyhPYmpLZXksIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0SGFzID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RIYXMoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RIYXMgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRm9ybUxpc3RIYXMoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbi8qKiBTb3J0IGFuIGludC9mbG9hdC9zdHJpbmcvRm9ybSBsaXN0IGJ5IHZhbHVlcyBpbiBhc2NlbmRpbmcgb3JkZXIuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gc29ydCBvbi4gU2V0IG5vbmUgZm9yIGdsb2JhbCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiB2YWx1ZS4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0U29ydCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkludExpc3RTb3J0KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0U29ydCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdFNvcnQoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0U29ydCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RTb3J0KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RTb3J0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uRm9ybUxpc3RTb3J0KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbi8qKiBGaWxscyB0aGUgZ2l2ZW4gaW5wdXQgYXJyYXkgd2l0aCB0aGUgdmFsdWVzIG9mIHRoZSBsaXN0IG9uIGZvcm0gb3IgZ2xvYmFsbHksXHJcbiAgIHdpbGwgZmlsbCB0aGUgYXJyYXkgdW50aWwgZWl0aGVyIHRoZSBhcnJheSBvciBsaXN0IHJ1bnMgb3V0IG9mIHZhbGlkIGluZGV4ZXNcclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBmaW5kIHZhbHVlIG9uLiBTZXQgbm9uZSB0byBmaW5kIGdsb2JhbCBsaXN0IHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuXHJcbiAgIHNsaWNlW106IGFuIGluaXRpYWxpemVkIGFycmF5IHNldCB0byB0aGUgc2xpY2Ugc2l6ZSB5b3Ugd2FudCwgaS5lLiBpbnRbXSBzbGljZSA9IG5ldyBpbnRbMTBdXHJcbiAgIFtvcHRpb25hbF0gc3RhcnRJbmRleDogdGhlIHN0YXJ0aW5nIGxpc3QgaW5kZXggeW91IHdhbnQgdG8gc3RhcnQgZmlsbGluZyB5b3VyIHNsaWNlIGFycmF5IHdpdGggKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0U2xpY2UgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCkge1xyXG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkludExpc3RTbGljZShPYmpLZXksIEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KTtcclxufTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RTbGljZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KSB7XHJcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XHJcbiAgICByZXR1cm4gc24uRmxvYXRMaXN0U2xpY2UoT2JqS2V5LCBLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCk7XHJcbn07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdFNsaWNlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpIHtcclxuICAgIGlmIChzdGFydEluZGV4ID09PSB2b2lkIDApIHsgc3RhcnRJbmRleCA9IDA7IH1cclxuICAgIHJldHVybiBzbi5TdHJpbmdMaXN0U2xpY2UoT2JqS2V5LCBLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RTbGljZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KSB7XHJcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XHJcbiAgICByZXR1cm4gc24uRm9ybUxpc3RTbGljZShPYmpLZXksIEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KTtcclxufTtcclxuLyoqIFNpemVzIHRoZSBnaXZlbiBsaXN0IHRvIGEgc2V0IG51bWJlciBvZiBlbGVtZW50cy4gSWYgdGhlIGxpc3QgZXhpc3RzIGFscmVhZHkgaXQgd2lsbCBiZSB0cnVuY2F0ZWRcclxuICAgd2hlbiBnaXZlbiBmZXdlciBlbGVtZW50cywgb3IgcmVzaXplZCB0byB0aGUgYXBwcm9wcmlhdGUgbGVuZ3RoIHdpdGggdGhlIGZpbGxlciBhcmd1bWVudCBiZWluZyB1c2VkIGFzXHJcbiAgIHRoZSBkZWZhdWx0IHZhbHVlc1xyXG5cclxuICAgUmV0dXJucyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRydW5jYXRlZCAoc2lnbmVkKSBvciBhZGRlZCAodW5zaWduZWQpIG9udG8gdGhlIGxpc3QuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gZmluZCB2YWx1ZSBvbi4gU2V0IG5vbmUgdG8gZmluZCBnbG9iYWwgbGlzdCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiBsaXN0LlxyXG4gICB0b0xlbmd0aDogVGhlIHNpemUgeW91IHdhbnQgdG8gY2hhbmdlIHRoZSBsaXN0IHRvLiBNYXggbGVuZ3RoIHdoZW4gdXNpbmcgdGhpcyBmdW5jdGlvbiBpcyA1MDAuXHJcbiAgIFtvcHRpb25hbF0gZmlsbGVyOiBXaGVuIGFkZGluZyBlbXB0eSBlbGVtZW50cyB0byB0aGUgbGlzdCB0aGlzIHdpbGwgYmUgdXNlZCBhcyB0aGUgZGVmYXVsdCB2YWx1ZSAqL1xyXG5leHBvcnQgdmFyIEludExpc3RSZXNpemUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKSB7XHJcbiAgICBpZiAoZmlsbGVyID09PSB2b2lkIDApIHsgZmlsbGVyID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkludExpc3RSZXNpemUoT2JqS2V5LCBLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKTtcclxufTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RSZXNpemUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKSB7XHJcbiAgICBpZiAoZmlsbGVyID09PSB2b2lkIDApIHsgZmlsbGVyID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uRmxvYXRMaXN0UmVzaXplKE9iaktleSwgS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcik7XHJcbn07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdFJlc2l6ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpIHtcclxuICAgIGlmIChmaWxsZXIgPT09IHZvaWQgMCkgeyBmaWxsZXIgPSBcIlwiOyB9XHJcbiAgICByZXR1cm4gc24uU3RyaW5nTGlzdFJlc2l6ZShPYmpLZXksIEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0UmVzaXplID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcikge1xyXG4gICAgaWYgKGZpbGxlciA9PT0gdm9pZCAwKSB7IGZpbGxlciA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5Gb3JtTGlzdFJlc2l6ZShPYmpLZXksIEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpO1xyXG59O1xyXG4vKiogQ3JlYXRlcyBhIGNvcHkgb2YgYXJyYXkgb24gdGhlIGdpdmVuIHN0b3JhZ2UgbGlzdCBhdCB0aGUgZ2l2ZW4gb2JqZWN0K2tleSxcclxuICAgb3ZlcndyaXRpbmcgYW55IGxpc3QgdGhhdCBtaWdodCBhbHJlYWR5IGV4aXN0cy5cclxuXHJcbiAgIFJldHVybnMgdHJ1ZSBvbiBzdWNjZXNzLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIGZpbmQgdmFsdWUgb24uIFNldCBub25lIHRvIGZpbmQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC5cclxuICAgY29weVtdOiBUaGUgcGFweXJ1cyBhcnJheSB3aXRoIHRoZSBjb250ZW50IHlvdSB3aXNoIHRvIGNvcHkgb3ZlciBpbnRvIFN0b3JhZ2VVdGlsXHJcbiAgIFtvcHRpb25hbF0gZmlsbGVyOiBXaGVuIGFkZGluZyBlbXB0eSBlbGVtZW50cyB0byB0aGUgbGlzdCB0aGlzIHdpbGwgYmUgdXNlZCBhcyB0aGUgZGVmYXVsdCB2YWx1ZSAqL1xyXG5leHBvcnQgdmFyIEludExpc3RDb3B5ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgY29weSkgeyByZXR1cm4gc24uSW50TGlzdENvcHkoT2JqS2V5LCBLZXlOYW1lLCBjb3B5KTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RDb3B5ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgY29weSkgeyByZXR1cm4gc24uRmxvYXRMaXN0Q29weShPYmpLZXksIEtleU5hbWUsIGNvcHkpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RDb3B5ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgY29weSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdENvcHkoT2JqS2V5LCBLZXlOYW1lLCBjb3B5KTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdENvcHkgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBjb3B5KSB7IHJldHVybiBzbi5Gb3JtTGlzdENvcHkoT2JqS2V5LCBLZXlOYW1lLCBjb3B5KTsgfTtcclxuLyoqIE91dHB1dHMgdGhlIHZhbHVlcyBjdXJyZW50bHkgc3RvcmVkIGJ5IHRoZSBnaXZlbiBvYmplY3Qra2V5LlxyXG5cclxuICAgUmV0dXJucyBhIG5ldyBhcnJheSBjb250YWluaW5nIHRoZSB2YWx1ZXMuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gZmluZCB2YWx1ZSBvbi4gU2V0IG5vbmUgdG8gZmluZCBnbG9iYWwgbGlzdCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiBsaXN0LiAqL1xyXG5leHBvcnQgdmFyIEludExpc3RUb0FycmF5ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uSW50TGlzdFRvQXJyYXkoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RUb0FycmF5ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uRmxvYXRMaXN0VG9BcnJheShPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RUb0FycmF5ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdFRvQXJyYXkoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdFRvQXJyYXkgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5Gb3JtTGlzdFRvQXJyYXkoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuLyoqIFJldHVybnMgYXJyYXkgb2YgZm9ybXMgZnJvbSBsaXN0IHRoYXQgaGF2ZSAob3Igb3B0aW9uYWxseSBkb24ndCBoYXZlKSB0aGUgc3BlY2lmaWVkIGZvcm0gdHlwZXMuXHJcbiAgIEZvciB2YWxpZCBsaXN0IG9mIGZvcm0gdHlwZXMsIHNlZSBGb3JtVHlwZS5wc2Mgb3IgaHR0cDovL3d3dy5jcmVhdGlvbmtpdC5jb20vR2V0VHlwZV8tX0Zvcm1cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBmaW5kIHZhbHVlIG9uLiBTZXQgbm9uZSB0byBmaW5kIGdsb2JhbCBsaXN0IHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuXHJcbiAgIEZvcm1UeXBlSURzW106IFRoZSBpbnQgcGFweXJ1cyBhcnJheSB3aXRoIGFsbCB0aGUgZm9ybSB0eXBlcyB5b3Ugd2lzaCB0byBmaWx0ZXIgZm9yXHJcbiAgIFtvcHRpb25hbF0gUmV0dXJuTWF0Y2hpbmc6IEJ5IGRlZmF1bHQsIFRSVUUsIHRoZSBvdXRwdXQgRm9ybVtdIGFycmF5IHdpbGwgY29udGFpbiBmb3JtcyBmcm9tIGxpc3QgdGhhdCBtYXRjaCB0aGUgZm9ybSB0eXBlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZiBzZXQgdG8gRkFMU0UsIGludmVydHMgdGhlIHJlc3VsdGluZyBhcnJheSB3aXRoIGZvcm1zIHRoYXQgaGF2ZSBhIHR5cGUgdGhhdCBETyBOT1QgbWF0Y2guICovXHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RGaWx0ZXJCeVR5cGVzID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgRm9ybVR5cGVJRHMsIFJldHVybk1hdGNoaW5nKSB7XHJcbiAgICBpZiAoUmV0dXJuTWF0Y2hpbmcgPT09IHZvaWQgMCkgeyBSZXR1cm5NYXRjaGluZyA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5Gb3JtTGlzdEZpbHRlckJ5VHlwZXMoT2JqS2V5LCBLZXlOYW1lLCBGb3JtVHlwZUlEcywgUmV0dXJuTWF0Y2hpbmcpO1xyXG59O1xyXG4vLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIEZvcm1MaXN0RmlsdGVyQnlUeXBlcygpIGZvciB3aGVuIG9ubHkgZ2V0dGluZyBhIHNpbmdsZSB0eXBlLlxyXG5leHBvcnQgdmFyIEZvcm1MaXN0RmlsdGVyQnlUeXBlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgRm9ybVR5cGVJRCwgUmV0dXJuTWF0Y2hpbmcpIHtcclxuICAgIGlmIChSZXR1cm5NYXRjaGluZyA9PT0gdm9pZCAwKSB7IFJldHVybk1hdGNoaW5nID0gdHJ1ZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZvcm1MaXN0RmlsdGVyQnlUeXBlKE9iaktleSwgS2V5TmFtZSwgRm9ybVR5cGVJRCwgUmV0dXJuTWF0Y2hpbmcpO1xyXG59O1xyXG4vKiogQ291bnRzIGVhY2ggdHlwZSBvZiBvZiBhbnkgS2V5TmFtZSB0aGF0IHN0YXJ0cyB3aXRoIGEgZ2l2ZW4gc3RyaW5nIHByZWZpeCBvbiBhbGwgb2JqZWN0cy5cclxuXHJcbiAgIFByZWZpeEtleTogVGhlIHN0cmluZyBhIEtleU5hbWUgbXVzdCBzdGFydCB3aXRoIHRvIGJlIGNvdW50ZWQuIENhbm5vdCBiZSBlbXB0eS4gKi9cclxuZXhwb3J0IHZhciBDb3VudEludFZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRJbnRWYWx1ZVByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50RmxvYXRWYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50RmxvYXRWYWx1ZVByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50U3RyaW5nVmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudFN0cmluZ1ZhbHVlUHJlZml4KFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRGb3JtVmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudEZvcm1WYWx1ZVByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50SW50TGlzdFByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50SW50TGlzdFByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50RmxvYXRMaXN0UHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRGbG9hdExpc3RQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDb3VudFN0cmluZ0xpc3RQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudFN0cmluZ0xpc3RQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDb3VudEZvcm1MaXN0UHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRGb3JtTGlzdFByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG4vLyBQZXJmb3JtcyBhbGwgb2YgdGhlIGFib3ZlIHByZWZpeCBjb3VudHMgaW4gb25lIGdvLlxyXG5leHBvcnQgdmFyIENvdW50QWxsUHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRBbGxQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuLyoqIENvdW50cyBlYWNoIHR5cGUgb2Ygb2YgYW55IEtleU5hbWUgdGhhdCBzdGFydHMgd2l0aCBhIGdpdmVuIHN0cmluZyBwcmVmaXggb24gYWxsIG9iamVjdHMuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gcGVyZm9ybSB0aGUgcHJlZml4IGNvdW50IG9uLlxyXG4gICBQcmVmaXhLZXk6IFRoZSBzdHJpbmcgYSBLZXlOYW1lIG11c3Qgc3RhcnQgd2l0aCB0byBiZSBjb3VudGVkLiBDYW5ub3QgYmUgZW1wdHkuICovXHJcbmV4cG9ydCB2YXIgQ291bnRPYmpJbnRWYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChPYmpLZXksIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRPYmpJbnRWYWx1ZVByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRPYmpGbG9hdFZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudE9iakZsb2F0VmFsdWVQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50T2JqU3RyaW5nVmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50T2JqU3RyaW5nVmFsdWVQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50T2JqRm9ybVZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudE9iakZvcm1WYWx1ZVByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRPYmpJbnRMaXN0UHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudE9iakludExpc3RQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50T2JqRmxvYXRMaXN0UHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudE9iakZsb2F0TGlzdFByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRPYmpTdHJpbmdMaXN0UHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudE9ialN0cmluZ0xpc3RQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50T2JqRm9ybUxpc3RQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50T2JqRm9ybUxpc3RQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG4vLyBQZXJmb3JtcyBhbGwgb2YgdGhlIGFib3ZlIHByZWZpeCBjb3VudHMgaW4gb25lIGdvLlxyXG5leHBvcnQgdmFyIENvdW50QWxsT2JqUHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudEFsbE9ialByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbi8qKiBDbGVhcnMgZWFjaCB0eXBlIG9mIG9mIGFueSBLZXlOYW1lIHRoYXQgc3RhcnRzIHdpdGggYSBnaXZlbiBzdHJpbmcgcHJlZml4IG9uIGFsbCBvYmplY3RzLlxyXG4gICBSZXR1cm5zIHRoZSBudW1iZXIgb2YgdmFsdWVzL2xpc3RzIHRoYXQgd2VyZSB1bnNldC5cclxuXHJcbiAgIFByZWZpeEtleTogVGhlIHN0cmluZyBhIEtleU5hbWUgbXVzdCBzdGFydCB3aXRoIHRvIGJlIGNsZWFyZWQuIENhbm5vdCBiZSBlbXB0eS4gKi9cclxuZXhwb3J0IHZhciBDbGVhckludFZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJJbnRWYWx1ZVByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyRmxvYXRWYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFyRmxvYXRWYWx1ZVByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyU3RyaW5nVmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhclN0cmluZ1ZhbHVlUHJlZml4KFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ2xlYXJGb3JtVmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhckZvcm1WYWx1ZVByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFySW50TGlzdFByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFySW50TGlzdFByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyRmxvYXRMaXN0UHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJGbG9hdExpc3RQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDbGVhclN0cmluZ0xpc3RQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhclN0cmluZ0xpc3RQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDbGVhckZvcm1MaXN0UHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJGb3JtTGlzdFByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG4vLyBQZXJmb3JtcyBhbGwgb2YgdGhlIGFib3ZlIHByZWZpeCBjbGVhcnMgaW4gb25lIGdvLlxyXG5leHBvcnQgdmFyIENsZWFyQWxsUHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJBbGxQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuLyoqIENsZWFycyBlYWNoIHR5cGUgb2Ygb2YgYW55IEtleU5hbWUgdGhhdCBzdGFydHMgd2l0aCBhIGdpdmVuIHN0cmluZyBwcmVmaXggb24gc3BlY2lmaWMgb2JqZWN0cy5cclxuICAgUmV0dXJucyB0aGUgbnVtYmVyIG9mIHZhbHVlcy9saXN0cyB0aGF0IHdlcmUgdW5zZXQuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gcGVyZm9ybSB0aGUgcHJlZml4IGNsZWFyIG9uLlxyXG4gICBQcmVmaXhLZXk6IFRoZSBzdHJpbmcgYSBLZXlOYW1lIG11c3Qgc3RhcnQgd2l0aCB0byBiZSBjbGVhcmVkLiBDYW5ub3QgYmUgZW1wdHkuICovXHJcbmV4cG9ydCB2YXIgQ2xlYXJPYmpJbnRWYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChPYmpLZXksIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJPYmpJbnRWYWx1ZVByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ2xlYXJPYmpGbG9hdFZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhck9iakZsb2F0VmFsdWVQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyT2JqU3RyaW5nVmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFyT2JqU3RyaW5nVmFsdWVQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyT2JqRm9ybVZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhck9iakZvcm1WYWx1ZVByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ2xlYXJPYmpJbnRMaXN0UHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhck9iakludExpc3RQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyT2JqRmxvYXRMaXN0UHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhck9iakZsb2F0TGlzdFByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ2xlYXJPYmpTdHJpbmdMaXN0UHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhck9ialN0cmluZ0xpc3RQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyT2JqRm9ybUxpc3RQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFyT2JqRm9ybUxpc3RQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG4vLyBQZXJmb3JtcyBhbGwgb2YgdGhlIGFib3ZlIHByZWZpeCBjbGVhcnMgaW4gb25lIGdvLlxyXG5leHBvcnQgdmFyIENsZWFyQWxsT2JqUHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhckFsbE9ialByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbi8qKiBEZWJ1ZyBmdW5jdGlvbnMgLSBjYW4gYmUgaGVscGZ1bCB0byBmaW5kIHByb2JsZW1zIG9yIGZvciBkZXZlbG9wbWVudC4gKi9cclxuZXhwb3J0IHZhciBkZWJ1Z19EZWxldGVWYWx1ZXMgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19EZWxldGVWYWx1ZXMoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19EZWxldGVBbGxWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19EZWxldGVBbGxWYWx1ZXMoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19DbGVhbnVwID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfQ2xlYW51cCgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbEludE9ianMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19BbGxJbnRPYmpzKCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsRmxvYXRPYmpzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfQWxsRmxvYXRPYmpzKCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsU3RyaW5nT2JqcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbFN0cmluZ09ianMoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19BbGxGb3JtT2JqcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbEZvcm1PYmpzKCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsSW50TGlzdE9ianMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19BbGxJbnRMaXN0T2JqcygpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbEZsb2F0TGlzdE9ianMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19BbGxGbG9hdExpc3RPYmpzKCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsU3RyaW5nTGlzdE9ianMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19BbGxTdHJpbmdMaXN0T2JqcygpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbEZvcm1MaXN0T2JqcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbEZvcm1MaXN0T2JqcygpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbE9iakludEtleXMgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19BbGxPYmpJbnRLZXlzKE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsT2JqRmxvYXRLZXlzID0gZnVuY3Rpb24gKE9iaktleSkgeyByZXR1cm4gc24uZGVidWdfQWxsT2JqRmxvYXRLZXlzKE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsT2JqU3RyaW5nS2V5cyA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbE9ialN0cmluZ0tleXMoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19BbGxPYmpGb3JtS2V5cyA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbE9iakZvcm1LZXlzKE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsT2JqSW50TGlzdEtleXMgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19BbGxPYmpJbnRMaXN0S2V5cyhPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbE9iakZsb2F0TGlzdEtleXMgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19BbGxPYmpGbG9hdExpc3RLZXlzKE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsT2JqU3RyaW5nTGlzdEtleXMgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19BbGxPYmpTdHJpbmdMaXN0S2V5cyhPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbE9iakZvcm1MaXN0S2V5cyA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbE9iakZvcm1MaXN0S2V5cyhPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEludE9iamVjdENvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfR2V0SW50T2JqZWN0Q291bnQoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGbG9hdE9iamVjdENvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfR2V0RmxvYXRPYmplY3RDb3VudCgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldFN0cmluZ09iamVjdENvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfR2V0U3RyaW5nT2JqZWN0Q291bnQoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGb3JtT2JqZWN0Q291bnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGb3JtT2JqZWN0Q291bnQoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRJbnRMaXN0T2JqZWN0Q291bnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19HZXRJbnRMaXN0T2JqZWN0Q291bnQoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGbG9hdExpc3RPYmplY3RDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEZsb2F0TGlzdE9iamVjdENvdW50KCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0U3RyaW5nTGlzdE9iamVjdENvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfR2V0U3RyaW5nTGlzdE9iamVjdENvdW50KCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0Rm9ybUxpc3RPYmplY3RDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEZvcm1MaXN0T2JqZWN0Q291bnQoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRJbnRPYmplY3QgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEludE9iamVjdChpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0RmxvYXRPYmplY3QgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEZsb2F0T2JqZWN0KGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRTdHJpbmdPYmplY3QgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldFN0cmluZ09iamVjdChpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0Rm9ybU9iamVjdCA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0Rm9ybU9iamVjdChpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0SW50TGlzdE9iamVjdCA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0SW50TGlzdE9iamVjdChpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0RmxvYXRMaXN0T2JqZWN0ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGbG9hdExpc3RPYmplY3QoaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldFN0cmluZ0xpc3RPYmplY3QgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldFN0cmluZ0xpc3RPYmplY3QoaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEZvcm1MaXN0T2JqZWN0ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGb3JtTGlzdE9iamVjdChpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0SW50S2V5c0NvdW50ID0gZnVuY3Rpb24gKE9iaktleSkgeyByZXR1cm4gc24uZGVidWdfR2V0SW50S2V5c0NvdW50KE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0RmxvYXRLZXlzQ291bnQgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGbG9hdEtleXNDb3VudChPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldFN0cmluZ0tleXNDb3VudCA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0dldFN0cmluZ0tleXNDb3VudChPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEZvcm1LZXlzQ291bnQgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGb3JtS2V5c0NvdW50KE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0SW50TGlzdEtleXNDb3VudCA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEludExpc3RLZXlzQ291bnQoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGbG9hdExpc3RLZXlzQ291bnQgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGbG9hdExpc3RLZXlzQ291bnQoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRTdHJpbmdMaXN0S2V5c0NvdW50ID0gZnVuY3Rpb24gKE9iaktleSkgeyByZXR1cm4gc24uZGVidWdfR2V0U3RyaW5nTGlzdEtleXNDb3VudChPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEZvcm1MaXN0S2V5c0NvdW50ID0gZnVuY3Rpb24gKE9iaktleSkgeyByZXR1cm4gc24uZGVidWdfR2V0Rm9ybUxpc3RLZXlzQ291bnQoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRJbnRLZXkgPSBmdW5jdGlvbiAoT2JqS2V5LCBpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0SW50S2V5KE9iaktleSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEZsb2F0S2V5ID0gZnVuY3Rpb24gKE9iaktleSwgaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEZsb2F0S2V5KE9iaktleSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldFN0cmluZ0tleSA9IGZ1bmN0aW9uIChPYmpLZXksIGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRTdHJpbmdLZXkoT2JqS2V5LCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0Rm9ybUtleSA9IGZ1bmN0aW9uIChPYmpLZXksIGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGb3JtS2V5KE9iaktleSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEludExpc3RLZXkgPSBmdW5jdGlvbiAoT2JqS2V5LCBpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0SW50TGlzdEtleShPYmpLZXksIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGbG9hdExpc3RLZXkgPSBmdW5jdGlvbiAoT2JqS2V5LCBpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0RmxvYXRMaXN0S2V5KE9iaktleSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldFN0cmluZ0xpc3RLZXkgPSBmdW5jdGlvbiAoT2JqS2V5LCBpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0U3RyaW5nTGlzdEtleShPYmpLZXksIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGb3JtTGlzdEtleSA9IGZ1bmN0aW9uIChPYmpLZXksIGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGb3JtTGlzdEtleShPYmpLZXksIGluZGV4KTsgfTtcclxuLyoqIFN0b3JhZ2UgZnVuY3Rpb25zIC0gc2VwYXJhdGUgZmlsZS4gVGhlc2UgYXJlIHNoYXJlZCBpbiBhbGwgc2F2ZSBnYW1lcy4gVmFsdWVzIGFyZSBsb2FkZWQgYW5kIHNhdmVkXHJcbiAgIHdoZW4gc2F2ZWdhbWUgaXMgbG9hZGVkIG9yIHNhdmVkLlxyXG5cclxuICAgREVQUkVDQVRFRCB2Mi45OiBSZXBsYWNlZCBieSBKc29uVXRpbCBmdW5jdGlvbnMuIEV4aXN0aW5nIGZ1bmN0aW9ucyBoZXJlIGhhdmUgYmVlbiBwcm94aWVkIHRvIGEgc2hhcmVkXHJcbiAgIGpzb24gZmlsZSB0byBtYWludGFpbiBjb21wYXRpYmlsaXR5LiAqL1xyXG5leHBvcnQgdmFyIEZpbGVTZXRJbnRWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZVNldEludFZhbHVlKEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU2V0RmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZVNldEZsb2F0VmFsdWUoS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVTZXRTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZVNldFN0cmluZ1ZhbHVlKEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU2V0Rm9ybVZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlU2V0Rm9ybVZhbHVlKEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlQWRqdXN0SW50VmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgYW1vdW50KSB7IHJldHVybiBzbi5GaWxlQWRqdXN0SW50VmFsdWUoS2V5TmFtZSwgYW1vdW50KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlQWRqdXN0RmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBhbW91bnQpIHsgcmV0dXJuIHNuLkZpbGVBZGp1c3RGbG9hdFZhbHVlKEtleU5hbWUsIGFtb3VudCk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVVuc2V0SW50VmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSkgeyByZXR1cm4gc24uRmlsZVVuc2V0SW50VmFsdWUoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVVuc2V0RmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlVW5zZXRGbG9hdFZhbHVlKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVVbnNldFN0cmluZ1ZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVVbnNldFN0cmluZ1ZhbHVlKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVVbnNldEZvcm1WYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlVW5zZXRGb3JtVmFsdWUoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUhhc0ludFZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVIYXNJbnRWYWx1ZShLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlSGFzRmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlSGFzRmxvYXRWYWx1ZShLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlSGFzU3RyaW5nVmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSkgeyByZXR1cm4gc24uRmlsZUhhc1N0cmluZ1ZhbHVlKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVIYXNGb3JtVmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSkgeyByZXR1cm4gc24uRmlsZUhhc0Zvcm1WYWx1ZShLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlR2V0SW50VmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVHZXRJbnRWYWx1ZShLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlR2V0RmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBtaXNzaW5nKSB7XHJcbiAgICBpZiAobWlzc2luZyA9PT0gdm9pZCAwKSB7IG1pc3NpbmcgPSAwLjA7IH1cclxuICAgIHJldHVybiBzbi5GaWxlR2V0RmxvYXRWYWx1ZShLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlR2V0U3RyaW5nVmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gXCJcIjsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVHZXRTdHJpbmdWYWx1ZShLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlR2V0Rm9ybVZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5GaWxlR2V0Rm9ybVZhbHVlKEtleU5hbWUsIG1pc3NpbmcpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVJbnRMaXN0QWRkID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSkge1xyXG4gICAgaWYgKGFsbG93RHVwbGljYXRlID09PSB2b2lkIDApIHsgYWxsb3dEdXBsaWNhdGUgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUludExpc3RBZGQoS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlRmxvYXRMaXN0QWRkID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSkge1xyXG4gICAgaWYgKGFsbG93RHVwbGljYXRlID09PSB2b2lkIDApIHsgYWxsb3dEdXBsaWNhdGUgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUZsb2F0TGlzdEFkZChLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVTdHJpbmdMaXN0QWRkID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSkge1xyXG4gICAgaWYgKGFsbG93RHVwbGljYXRlID09PSB2b2lkIDApIHsgYWxsb3dEdXBsaWNhdGUgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZVN0cmluZ0xpc3RBZGQoS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlRm9ybUxpc3RBZGQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKSB7XHJcbiAgICBpZiAoYWxsb3dEdXBsaWNhdGUgPT09IHZvaWQgMCkgeyBhbGxvd0R1cGxpY2F0ZSA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5GaWxlRm9ybUxpc3RBZGQoS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlSW50TGlzdEFkanVzdCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCwgYW1vdW50KSB7IHJldHVybiBzbi5GaWxlSW50TGlzdEFkanVzdChLZXlOYW1lLCBpbmRleCwgYW1vdW50KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRmxvYXRMaXN0QWRqdXN0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4LCBhbW91bnQpIHsgcmV0dXJuIHNuLkZpbGVGbG9hdExpc3RBZGp1c3QoS2V5TmFtZSwgaW5kZXgsIGFtb3VudCk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUludExpc3RSZW1vdmUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcykge1xyXG4gICAgaWYgKGFsbEluc3RhbmNlcyA9PT0gdm9pZCAwKSB7IGFsbEluc3RhbmNlcyA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUludExpc3RSZW1vdmUoS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZUZsb2F0TGlzdFJlbW92ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKSB7XHJcbiAgICBpZiAoYWxsSW5zdGFuY2VzID09PSB2b2lkIDApIHsgYWxsSW5zdGFuY2VzID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5GaWxlRmxvYXRMaXN0UmVtb3ZlKEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVTdHJpbmdMaXN0UmVtb3ZlID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpIHtcclxuICAgIGlmIChhbGxJbnN0YW5jZXMgPT09IHZvaWQgMCkgeyBhbGxJbnN0YW5jZXMgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0UmVtb3ZlKEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdFJlbW92ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKSB7XHJcbiAgICBpZiAoYWxsSW5zdGFuY2VzID09PSB2b2lkIDApIHsgYWxsSW5zdGFuY2VzID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5GaWxlRm9ybUxpc3RSZW1vdmUoS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZUludExpc3RHZXQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLkZpbGVJbnRMaXN0R2V0KEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRmxvYXRMaXN0R2V0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5GaWxlRmxvYXRMaXN0R2V0KEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU3RyaW5nTGlzdEdldCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uRmlsZVN0cmluZ0xpc3RHZXQoS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdEdldCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uRmlsZUZvcm1MaXN0R2V0KEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlSW50TGlzdFNldCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVJbnRMaXN0U2V0KEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZsb2F0TGlzdFNldCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVGbG9hdExpc3RTZXQoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU3RyaW5nTGlzdFNldCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0U2V0KEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZvcm1MaXN0U2V0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZUZvcm1MaXN0U2V0KEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUludExpc3RDbGVhciA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlSW50TGlzdENsZWFyKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGbG9hdExpc3RDbGVhciA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlRmxvYXRMaXN0Q2xlYXIoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVN0cmluZ0xpc3RDbGVhciA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlU3RyaW5nTGlzdENsZWFyKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdENsZWFyID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVGb3JtTGlzdENsZWFyKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVJbnRMaXN0UmVtb3ZlQXQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLkZpbGVJbnRMaXN0UmVtb3ZlQXQoS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGbG9hdExpc3RSZW1vdmVBdCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uRmlsZUZsb2F0TGlzdFJlbW92ZUF0KEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU3RyaW5nTGlzdFJlbW92ZUF0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5GaWxlU3RyaW5nTGlzdFJlbW92ZUF0KEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRm9ybUxpc3RSZW1vdmVBdCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uRmlsZUZvcm1MaXN0UmVtb3ZlQXQoS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVJbnRMaXN0SW5zZXJ0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZUludExpc3RJbnNlcnQoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRmxvYXRMaXN0SW5zZXJ0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZUZsb2F0TGlzdEluc2VydChLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVTdHJpbmdMaXN0SW5zZXJ0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZVN0cmluZ0xpc3RJbnNlcnQoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRm9ybUxpc3RJbnNlcnQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlRm9ybUxpc3RJbnNlcnQoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlSW50TGlzdENvdW50ID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVJbnRMaXN0Q291bnQoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZsb2F0TGlzdENvdW50ID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVGbG9hdExpc3RDb3VudChLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU3RyaW5nTGlzdENvdW50ID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0Q291bnQoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZvcm1MaXN0Q291bnQgPSBmdW5jdGlvbiAoS2V5TmFtZSkgeyByZXR1cm4gc24uRmlsZUZvcm1MaXN0Q291bnQoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUludExpc3RGaW5kID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlSW50TGlzdEZpbmQoS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGbG9hdExpc3RGaW5kID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlRmxvYXRMaXN0RmluZChLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVN0cmluZ0xpc3RGaW5kID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlU3RyaW5nTGlzdEZpbmQoS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdEZpbmQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVGb3JtTGlzdEZpbmQoS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVJbnRMaXN0SGFzID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlSW50TGlzdEhhcyhLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZsb2F0TGlzdEhhcyA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZUZsb2F0TGlzdEhhcyhLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVN0cmluZ0xpc3RIYXMgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0SGFzKEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRm9ybUxpc3RIYXMgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVGb3JtTGlzdEhhcyhLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUludExpc3RTbGljZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCkge1xyXG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVJbnRMaXN0U2xpY2UoS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVGbG9hdExpc3RTbGljZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCkge1xyXG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVGbG9hdExpc3RTbGljZShLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZVN0cmluZ0xpc3RTbGljZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCkge1xyXG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0U2xpY2UoS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdFNsaWNlID0gZnVuY3Rpb24gKEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KSB7XHJcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUZvcm1MaXN0U2xpY2UoS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVJbnRMaXN0UmVzaXplID0gZnVuY3Rpb24gKEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpIHtcclxuICAgIGlmIChmaWxsZXIgPT09IHZvaWQgMCkgeyBmaWxsZXIgPSAwOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUludExpc3RSZXNpemUoS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcik7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZUZsb2F0TGlzdFJlc2l6ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKSB7XHJcbiAgICBpZiAoZmlsbGVyID09PSB2b2lkIDApIHsgZmlsbGVyID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUZsb2F0TGlzdFJlc2l6ZShLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlU3RyaW5nTGlzdFJlc2l6ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKSB7XHJcbiAgICBpZiAoZmlsbGVyID09PSB2b2lkIDApIHsgZmlsbGVyID0gXCJcIjsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0UmVzaXplKEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdFJlc2l6ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKSB7XHJcbiAgICBpZiAoZmlsbGVyID09PSB2b2lkIDApIHsgZmlsbGVyID0gbnVsbDsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVGb3JtTGlzdFJlc2l6ZShLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlSW50TGlzdENvcHkgPSBmdW5jdGlvbiAoS2V5TmFtZSwgY29weSkgeyByZXR1cm4gc24uRmlsZUludExpc3RDb3B5KEtleU5hbWUsIGNvcHkpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGbG9hdExpc3RDb3B5ID0gZnVuY3Rpb24gKEtleU5hbWUsIGNvcHkpIHsgcmV0dXJuIHNuLkZpbGVGbG9hdExpc3RDb3B5KEtleU5hbWUsIGNvcHkpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVTdHJpbmdMaXN0Q29weSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBjb3B5KSB7IHJldHVybiBzbi5GaWxlU3RyaW5nTGlzdENvcHkoS2V5TmFtZSwgY29weSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZvcm1MaXN0Q29weSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBjb3B5KSB7IHJldHVybiBzbi5GaWxlRm9ybUxpc3RDb3B5KEtleU5hbWUsIGNvcHkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX1NhdmVGaWxlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfU2F2ZUZpbGUoKTsgfTtcclxuLyoqIEN1cnJlbnRseSBubyBsb25nZXIgaW1wbGVtZW50ZWQsIHVua25vd24gaWYvd2hlbiB0aGV5IHdpbGwgcmV0dXJuLiAqL1xyXG5leHBvcnQgdmFyIGRlYnVnX0ZpbGVHZXRJbnRLZXlzQ291bnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19GaWxlR2V0SW50S2V5c0NvdW50KCk7IH07XHJcbjA7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldEZsb2F0S2V5c0NvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfRmlsZUdldEZsb2F0S2V5c0NvdW50KCk7IH07XHJcbjA7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldFN0cmluZ0tleXNDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRTdHJpbmdLZXlzQ291bnQoKTsgfTtcclxuMDtcclxuZXhwb3J0IHZhciBkZWJ1Z19GaWxlR2V0SW50TGlzdEtleXNDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRJbnRMaXN0S2V5c0NvdW50KCk7IH07XHJcbjA7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldEZsb2F0TGlzdEtleXNDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRGbG9hdExpc3RLZXlzQ291bnQoKTsgfTtcclxuMDtcclxuZXhwb3J0IHZhciBkZWJ1Z19GaWxlR2V0U3RyaW5nTGlzdEtleXNDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRTdHJpbmdMaXN0S2V5c0NvdW50KCk7IH07XHJcbjA7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldEludEtleSA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gc24uZGVidWdfRmlsZUdldEludEtleShpbmRleCk7IH07XHJcblwiXCI7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldEZsb2F0S2V5ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19GaWxlR2V0RmxvYXRLZXkoaW5kZXgpOyB9O1xyXG5cIlwiO1xyXG5leHBvcnQgdmFyIGRlYnVnX0ZpbGVHZXRTdHJpbmdLZXkgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRTdHJpbmdLZXkoaW5kZXgpOyB9O1xyXG5cIlwiO1xyXG5leHBvcnQgdmFyIGRlYnVnX0ZpbGVHZXRJbnRMaXN0S2V5ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19GaWxlR2V0SW50TGlzdEtleShpbmRleCk7IH07XHJcblwiXCI7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldEZsb2F0TGlzdEtleSA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gc24uZGVidWdfRmlsZUdldEZsb2F0TGlzdEtleShpbmRleCk7IH07XHJcblwiXCI7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldFN0cmluZ0xpc3RLZXkgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRTdHJpbmdMaXN0S2V5KGluZGV4KTsgfTtcclxuXCJcIjtcclxuZXhwb3J0IHZhciBkZWJ1Z19GaWxlRGVsZXRlQWxsVmFsdWVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfRmlsZURlbGV0ZUFsbFZhbHVlcygpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX1NldERlYnVnTW9kZSA9IGZ1bmN0aW9uIChlbmFibGVkKSB7IHJldHVybiBzbi5kZWJ1Z19TZXREZWJ1Z01vZGUoZW5hYmxlZCk7IH07XHJcbmV4cG9ydCB2YXIgSW1wb3J0RmlsZSA9IGZ1bmN0aW9uIChmaWxlTmFtZSwgcmVzdHJpY3RLZXksIHJlc3RyaWN0VHlwZSwgcmVzdHJpY3RGb3JtLCByZXN0cmljdEdsb2JhbCwga2V5Q29udGFpbnMpIHtcclxuICAgIGlmIChyZXN0cmljdEtleSA9PT0gdm9pZCAwKSB7IHJlc3RyaWN0S2V5ID0gXCJcIjsgfVxyXG4gICAgaWYgKHJlc3RyaWN0VHlwZSA9PT0gdm9pZCAwKSB7IHJlc3RyaWN0VHlwZSA9IC0xOyB9XHJcbiAgICBpZiAocmVzdHJpY3RGb3JtID09PSB2b2lkIDApIHsgcmVzdHJpY3RGb3JtID0gbnVsbDsgfVxyXG4gICAgaWYgKHJlc3RyaWN0R2xvYmFsID09PSB2b2lkIDApIHsgcmVzdHJpY3RHbG9iYWwgPSBmYWxzZTsgfVxyXG4gICAgaWYgKGtleUNvbnRhaW5zID09PSB2b2lkIDApIHsga2V5Q29udGFpbnMgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkltcG9ydEZpbGUoZmlsZU5hbWUsIHJlc3RyaWN0S2V5LCByZXN0cmljdFR5cGUsIHJlc3RyaWN0Rm9ybSwgcmVzdHJpY3RHbG9iYWwsIGtleUNvbnRhaW5zKTtcclxufTtcclxuZmFsc2U7XHJcbmV4cG9ydCB2YXIgRXhwb3J0RmlsZSA9IGZ1bmN0aW9uIChmaWxlTmFtZSwgcmVzdHJpY3RLZXksIHJlc3RyaWN0VHlwZSwgcmVzdHJpY3RGb3JtLCByZXN0cmljdEdsb2JhbCwga2V5Q29udGFpbnMsIGFwcGVuZCkge1xyXG4gICAgaWYgKHJlc3RyaWN0S2V5ID09PSB2b2lkIDApIHsgcmVzdHJpY3RLZXkgPSBcIlwiOyB9XHJcbiAgICBpZiAocmVzdHJpY3RUeXBlID09PSB2b2lkIDApIHsgcmVzdHJpY3RUeXBlID0gLTE7IH1cclxuICAgIGlmIChyZXN0cmljdEZvcm0gPT09IHZvaWQgMCkgeyByZXN0cmljdEZvcm0gPSBudWxsOyB9XHJcbiAgICBpZiAocmVzdHJpY3RHbG9iYWwgPT09IHZvaWQgMCkgeyByZXN0cmljdEdsb2JhbCA9IGZhbHNlOyB9XHJcbiAgICBpZiAoa2V5Q29udGFpbnMgPT09IHZvaWQgMCkgeyBrZXlDb250YWlucyA9IGZhbHNlOyB9XHJcbiAgICBpZiAoYXBwZW5kID09PSB2b2lkIDApIHsgYXBwZW5kID0gdHJ1ZTsgfVxyXG4gICAgcmV0dXJuIHNuLkV4cG9ydEZpbGUoZmlsZU5hbWUsIHJlc3RyaWN0S2V5LCByZXN0cmljdFR5cGUsIHJlc3RyaWN0Rm9ybSwgcmVzdHJpY3RHbG9iYWwsIGtleUNvbnRhaW5zLCBhcHBlbmQpO1xyXG59O1xyXG5mYWxzZTtcclxuIiwiaW1wb3J0IHsgc3RvcmFnZSwgY3JlYXRlVGV4dCwgZGVzdHJveUFsbFRleHRzLCBkZXN0cm95VGV4dCwgZ2V0VGV4dENvbG9yLCBnZXRUZXh0UG9zLCBnZXRUZXh0U3RyaW5nLCBzZXRUZXh0Q29sb3IsIHNldFRleHRQb3MsIHNldFRleHRTdHJpbmcgfSBmcm9tICdza3lyaW1QbGF0Zm9ybSc7XHJcbnZhciBrZXlrbmFtZSA9ICcuc3BUZXh0cy4nO1xyXG52YXIgY29sbGVjdGlvbktleSA9IGtleWtuYW1lICsgJ2NvbGxlY3Rpb24uJztcclxudmFyIHNwVGV4dHNDb2xsZWN0aW9uID0gbmV3IE1hcCgpO1xyXG5zdG9yYWdlW2NvbGxlY3Rpb25LZXldO1xyXG52YXIgc3BUZXh0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gc3BUZXh0KHhQb3MsIHlQb3MsIHRleHQsIGNvbCwgc1R5cGUsIHNNb2ROYW1lKSB7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGNyZWF0ZVRleHQoeFBvcywgeVBvcywgdGV4dCwgW2NvbFswXSwgY29sWzFdLCBjb2xbMl0sIGNvbFszXV0pO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHNUeXBlID8gc1R5cGUgOiBcInVuZGVmaW5lZFwiO1xyXG4gICAgICAgIHRoaXMub3duaW5nTW9kID0gc01vZE5hbWUgPyBzTW9kTmFtZSA6IFwidW5kZWZpbmVkXCI7XHJcbiAgICAgICAgdGhpcy54ID0geFBvcztcclxuICAgICAgICB0aGlzLnkgPSB5UG9zO1xyXG4gICAgICAgIHNwVGV4dHNDb2xsZWN0aW9uLnNldCh0aGlzLmluZGV4LCB0aGlzKTtcclxuICAgICAgICBzdG9yYWdlW2NvbGxlY3Rpb25LZXldID0gc3BUZXh0c0NvbGxlY3Rpb247XHJcbiAgICB9XHJcbiAgICBzcFRleHQucHJvdG90eXBlLmdldEluZGV4ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4O1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5wcm90b3R5cGUuZ2V0VGV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZ2V0VGV4dFN0cmluZyh0aGlzLmluZGV4KTtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLmdldE93bmluZ01vZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vd25pbmdNb2Q7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbnVtID0gZ2V0VGV4dFBvcyh0aGlzLmluZGV4KTtcclxuICAgICAgICByZXR1cm4gbnVtO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5wcm90b3R5cGUuZ2V0Q29sb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFRleHRDb2xvcih0aGlzLmluZGV4KTtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLmdldFR5cGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZTtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLnNldFR5cGUgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHQ7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5zZXRUZXh0ID0gZnVuY3Rpb24gKHR4dCkge1xyXG4gICAgICAgIHNldFRleHRTdHJpbmcodGhpcy5pbmRleCwgdHh0KTtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLnNldENvbG9yID0gZnVuY3Rpb24gKHJnYmEpIHtcclxuICAgICAgICBzZXRUZXh0Q29sb3IodGhpcy5pbmRleCwgcmdiYSk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICh4UG9zLCB5UG9zKSB7XHJcbiAgICAgICAgc2V0VGV4dFBvcyh0aGlzLmluZGV4LCB4UG9zLCB5UG9zKTtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLnNldE93bmluZ01vZCA9IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgICAgICB0aGlzLm93bmluZ01vZCA9IG1vZDtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLnNldENvbG9yUiA9IGZ1bmN0aW9uIChjb2wpIHtcclxuICAgICAgICB2YXIgY29sb3IgPSB0aGlzLmdldENvbG9yKCk7XHJcbiAgICAgICAgc2V0VGV4dENvbG9yKHRoaXMuaW5kZXgsIFtjb2wsIGNvbG9yWzFdLCBjb2xvclsyXSwgY29sb3JbM11dKTtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLnNldENvbG9yRyA9IGZ1bmN0aW9uIChjb2wpIHtcclxuICAgICAgICB2YXIgY29sb3IgPSB0aGlzLmdldENvbG9yKCk7XHJcbiAgICAgICAgc2V0VGV4dENvbG9yKHRoaXMuaW5kZXgsIFtjb2xvclswXSwgY29sLCBjb2xvclsyXSwgY29sb3JbM11dKTtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLnNldENvbG9yQiA9IGZ1bmN0aW9uIChjb2wpIHtcclxuICAgICAgICB2YXIgY29sb3IgPSB0aGlzLmdldENvbG9yKCk7XHJcbiAgICAgICAgc2V0VGV4dENvbG9yKHRoaXMuaW5kZXgsIFtjb2xvclswXSwgY29sb3JbMV0sIGNvbCwgY29sb3JbM11dKTtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLnNldEFscGhhID0gZnVuY3Rpb24gKGFscGhhKSB7XHJcbiAgICAgICAgdmFyIGNvbG9yID0gdGhpcy5nZXRDb2xvcigpO1xyXG4gICAgICAgIHNldFRleHRDb2xvcih0aGlzLmluZGV4LCBbY29sb3JbMF0sIGNvbG9yWzFdLCBjb2xvclsyXSwgYWxwaGFdKTtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLmRlc3Ryb3lUZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNwVGV4dHNDb2xsZWN0aW9uLmRlbGV0ZSh0aGlzLmluZGV4KTtcclxuICAgICAgICBkZXN0cm95VGV4dCh0aGlzLmluZGV4KTtcclxuICAgICAgICBzdG9yYWdlW2NvbGxlY3Rpb25LZXldID0gc3BUZXh0c0NvbGxlY3Rpb247XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LmRlc3Ryb3lBbGxUZXh0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzcFRleHRzQ29sbGVjdGlvbi5jbGVhcigpO1xyXG4gICAgICAgIGRlc3Ryb3lBbGxUZXh0cygpO1xyXG4gICAgICAgIHN0b3JhZ2VbY29sbGVjdGlvbktleV0gPSBzcFRleHRzQ29sbGVjdGlvbjtcclxuICAgIH07XHJcbiAgICBzcFRleHQuY291bnRNb2RUZXh0cyA9IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgICAgICB2YXIgY250ID0gMDtcclxuICAgICAgICB2YXIgYyA9IHN0b3JhZ2VbY29sbGVjdGlvbktleV07XHJcbiAgICAgICAgYy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgX2tleSkge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0bXAub3duaW5nTW9kID09IG1vZClcclxuICAgICAgICAgICAgICAgIGNudCsrO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBjbnQ7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LmNvdW50VHlwZVRleHRzID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgY250ID0gMDtcclxuICAgICAgICB2YXIgdG1wQ29sbCA9IHN0b3JhZ2VbY29sbGVjdGlvbktleV07XHJcbiAgICAgICAgdG1wQ29sbC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgIHZhciB0bXAgPSB2YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHRtcC50eXBlID09IHQpXHJcbiAgICAgICAgICAgICAgICBjbnQrKztcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gY250O1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5kZXN0cm95QWxsTW9kVGV4dHMgPSBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICAgICAgdmFyIHRtcENvbGwgPSBzdG9yYWdlW2NvbGxlY3Rpb25LZXldO1xyXG4gICAgICAgIGlmICghdG1wQ29sbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRtcENvbGwuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0bXAub3duaW5nTW9kID09IG1vZCkge1xyXG4gICAgICAgICAgICAgICAgZGVzdHJveVRleHQoa2V5KTtcclxuICAgICAgICAgICAgICAgIHNwVGV4dHNDb2xsZWN0aW9uLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3RvcmFnZVtjb2xsZWN0aW9uS2V5XSA9IHNwVGV4dHNDb2xsZWN0aW9uO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5kZXN0cm95QWxsVHlwZVRleHRzID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgdG1wQ29sbCA9IHN0b3JhZ2VbY29sbGVjdGlvbktleV07XHJcbiAgICAgICAgdG1wQ29sbC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgIHZhciB0bXAgPSB2YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHRtcC50eXBlID09IHQpIHtcclxuICAgICAgICAgICAgICAgIGRlc3Ryb3lUZXh0KGtleSk7XHJcbiAgICAgICAgICAgICAgICB0bXBDb2xsLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICAgICAgc3BUZXh0c0NvbGxlY3Rpb24uZGVsZXRlKGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBzcFRleHQuZGlzYWJsZU1vZFRleHRzID0gZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgICAgIHZhciB0bXBDb2xsID0gc3RvcmFnZVtjb2xsZWN0aW9uS2V5XTtcclxuICAgICAgICB0bXBDb2xsLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgdmFyIHRtcCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodG1wLm93bmluZ01vZCA9PSBtb2QpIHtcclxuICAgICAgICAgICAgICAgIHRtcC5zZXRBbHBoYSgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5lbmFibGVNb2RUZXh0cyA9IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgICAgICB2YXIgdG1wQ29sbCA9IHN0b3JhZ2VbY29sbGVjdGlvbktleV07XHJcbiAgICAgICAgdG1wQ29sbC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgIHZhciB0bXAgPSB2YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHRtcC5vd25pbmdNb2QgPT0gbW9kKSB7XHJcbiAgICAgICAgICAgICAgICB0bXAuc2V0QWxwaGEoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBzcFRleHQuZGlzYWJsZVR5cGVUZXh0cyA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIHRtcENvbGwgPSBzdG9yYWdlW2NvbGxlY3Rpb25LZXldO1xyXG4gICAgICAgIHRtcENvbGwuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0bXAudHlwZSA9PSB0KSB7XHJcbiAgICAgICAgICAgICAgICB0bXAuc2V0QWxwaGEoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBzcFRleHQuZ2V0VHlwZVRleHRzID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgbGlzdCA9IFtdO1xyXG4gICAgICAgIHZhciB0bXBDb2xsID0gc3RvcmFnZVtjb2xsZWN0aW9uS2V5XTtcclxuICAgICAgICB0bXBDb2xsLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgdmFyIHRtcCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodG1wLnR5cGUgPT0gdCkge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKHRtcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH07XHJcbiAgICBzcFRleHQuZ2V0TW9kVGV4dHMgPSBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICAgICAgdmFyIGxpc3QgPSBbXTtcclxuICAgICAgICB2YXIgdG1wQ29sbCA9IHN0b3JhZ2VbY29sbGVjdGlvbktleV07XHJcbiAgICAgICAgdG1wQ29sbC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgIHZhciB0bXAgPSB2YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHRtcC5vd25pbmdNb2QgPT0gbW9kKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2godG1wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5nZXRBbGxUZXh0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbGlzdCA9IFtdO1xyXG4gICAgICAgIHZhciB0bXBDb2xsID0gc3RvcmFnZVtjb2xsZWN0aW9uS2V5XTtcclxuICAgICAgICB0bXBDb2xsLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgdmFyIHRtcCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBsaXN0LnB1c2godG1wKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH07XHJcbiAgICBzcFRleHQuZ2V0VGV4dEJ5SW5kZXggPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgIHZhciB0bXAgPSBudWxsO1xyXG4gICAgICAgIHZhciB0bXBDb2xsID0gc3RvcmFnZVtjb2xsZWN0aW9uS2V5XTtcclxuICAgICAgICB0bXBDb2xsLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLmdldEluZGV4KCkgPT0gaSkge1xyXG4gICAgICAgICAgICAgICAgdG1wID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdG1wO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5kZXN0cm95VGV4dEJ5SW5kZXggPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgIHZhciB0bXAgPSBzcFRleHQuZ2V0VGV4dEJ5SW5kZXgoaSk7XHJcbiAgICAgICAgaWYgKHRtcCkge1xyXG4gICAgICAgICAgICB0bXAuZGVzdHJveVRleHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcImluZGV4OiBcIi5jb25jYXQodGhpcy5nZXRJbmRleCgpLCBcIiwgdGV4dDpcXFwiXCIpLmNvbmNhdCh0aGlzLmdldFRleHQoKSwgXCJcXFwiLCB0eXBlOiBcIikuY29uY2F0KHRoaXMuZ2V0VHlwZSgpLCBcIiwgbW9kOiBcIikuY29uY2F0KHRoaXMuZ2V0T3duaW5nTW9kKCkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBzcFRleHQ7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IHNwVGV4dCB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbmltcG9ydCB7IGJyb3dzZXIsIG9uY2UsIHByaW50Q29uc29sZSwgR2FtZSwgb24sIFV0aWxpdHkgfSBmcm9tIFwic2t5cmltUGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgU2V0SW50VmFsdWUgfSBmcm9tIFwiQHNreXJpbS1wbGF0Zm9ybS9wYXB5cnVzLXV0aWwvU3RvcmFnZVV0aWxcIjtcclxuLy8gaW1wb3J0ICogYXMgd3QgZnJvbSBcIkBza3lyaW0tcGxhdGZvcm0vV2lkZ2V0VG9vbHMvV2lkZ2V0VG9vbHNcIjtcclxuaW1wb3J0ICogYXMgd3QgZnJvbSAnLi4vLi4vbW9kdWxlcy9TUFRleHRVdGlscy9zcFRleHRVdGlscyc7XHJcbmJyb3dzZXIuc2V0VmlzaWJsZSh0cnVlKTtcclxuYnJvd3Nlci5zZXRGb2N1c2VkKGZhbHNlKTtcclxudmFyIHZpc2libGUgPSBicm93c2VyLmlzVmlzaWJsZSgpO1xyXG52YXIgZm9jdXNlZCA9IGJyb3dzZXIuaXNGb2N1c2VkKCk7XHJcbmV4cG9ydCBmdW5jdGlvbiBwbCgpIHsgcmV0dXJuIEdhbWUuZ2V0UGxheWVyKCk7IH1cclxudmFyIGtleSA9ICcuZXF1aXBwZWQtaHVkLic7XHJcbnZhciBsZWZ0X2hhbmQ7XHJcbnZhciByaWdodF9oYW5kO1xyXG52YXIgc2hvdXRzbG90O1xyXG4vLyBsZXQgeCA9IHNldHRpbmdzW1wiZXF1aXBwZWRodWRcIl1bXCJ4XCJdIGFzIG51bWJlcjtcclxuLy8gbGV0IHkgPSBzZXR0aW5nc1tcImVxdWlwcGVkaHVkXCJdW1wieVwiXSBhcyBudW1iZXI7XHJcbnZhciB4ID0gMTUwMDtcclxudmFyIHkgPSAxMDAwO1xyXG52YXIgbGVmdF9vZmZzZXQgPSAtNTAwO1xyXG52YXIgcmlnaHRfb2Zmc2V0ID0gNTAwO1xyXG52YXIgaW5pdDtcclxudmFyIG1vZG5hbWUgPSAnRXF1aXBwZWRIVUQnO1xyXG52YXIgY29sb3JzID0ge1xyXG4gICAgd2hpdGU6IFsxLCAxLCAxLCAxXVxyXG59O1xyXG53dC5zcFRleHQuZGVzdHJveUFsbE1vZFRleHRzKG1vZG5hbWUpO1xyXG5sZWZ0X2hhbmQgPSBuZXcgd3Quc3BUZXh0KHggKyBsZWZ0X29mZnNldCwgeSwgJ2xlZnQnLCBjb2xvcnNbJ3doaXRlJ10sIHVuZGVmaW5lZCwgbW9kbmFtZSk7XHJcbnJpZ2h0X2hhbmQgPSBuZXcgd3Quc3BUZXh0KHggKyByaWdodF9vZmZzZXQsIHksICdyaWdodCcsIGNvbG9yc1snd2hpdGUnXSwgdW5kZWZpbmVkLCBtb2RuYW1lKTtcclxuc2hvdXRzbG90ID0gbmV3IHd0LnNwVGV4dCh4LCB5LCAnc2hvdXQnLCBjb2xvcnNbJ3doaXRlJ10sIHVuZGVmaW5lZCwgbW9kbmFtZSk7XHJcbi8vIHN0b3JhZ2Vba2V5ICsgJ2luaXQuJ10gPT0gZmFsc2Vcclxub25jZSgnc2t5cmltTG9hZGVkJywgZnVuY3Rpb24gKCkgeyBpbml0ID0gMDsgfSk7XHJcbm9uY2UoJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGluaXQgPSAxO1xyXG4gICAgU2V0SW50VmFsdWUobnVsbCwga2V5ICsgJ2luaXQnLCAxKTtcclxuICAgIFNldEVxdWlwcGVkKGxlZnRfaGFuZCwgcmlnaHRfaGFuZCwgc2hvdXRzbG90KTtcclxuICAgIHByaW50Q29uc29sZSgnRXF1aXBwZWRIVUQgLSBTUCBpbml0aWFsaXplZCcpO1xyXG59KTtcclxub24oJ21lbnVPcGVuJywgZnVuY3Rpb24gKCkgeyB3dC5zcFRleHQuZGlzYWJsZU1vZFRleHRzKG1vZG5hbWUpOyB9KTtcclxub24oJ21lbnVDbG9zZScsIGZ1bmN0aW9uICgpIHsgd3Quc3BUZXh0LmVuYWJsZU1vZFRleHRzKG1vZG5hbWUpOyB9KTtcclxudmFyIGZsYWcgPSBmYWxzZTtcclxub24oJ2FjdGlvbkJlZ2luRHJhdycsIGZ1bmN0aW9uICgpIHtcclxuICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgd3Quc3BUZXh0LmVuYWJsZU1vZFRleHRzKG1vZG5hbWUpO1xyXG59KTtcclxub24oJ2FjdGlvbkJlZ2luU2hlYXRoZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGZsYWcgPSBmYWxzZTtcclxuICAgIGZhZGVvdXQoKTtcclxufSk7XHJcbnZhciBmYWRlb3V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgVXRpbGl0eS53YWl0KDMuMCldO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWZsYWcpIHtcclxuICAgICAgICAgICAgICAgICAgICB3dC5zcFRleHQuZGlzYWJsZU1vZFRleHRzKG1vZG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsgfTtcclxub24oJ2VxdWlwJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBfYTtcclxuICAgIGlmIChlLmFjdG9yLmdldEZvcm1JRCgpICE9ICgoX2EgPSBwbCgpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0Rm9ybUlEKCkpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgU2V0RXF1aXBwZWQobGVmdF9oYW5kLCByaWdodF9oYW5kLCBzaG91dHNsb3QpO1xyXG59KTtcclxub24oJ3VuZXF1aXAnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgaWYgKGUuYWN0b3IuZ2V0Rm9ybUlEKCkgIT0gKChfYSA9IHBsKCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRGb3JtSUQoKSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBTZXRFcXVpcHBlZChsZWZ0X2hhbmQsIHJpZ2h0X2hhbmQsIHNob3V0c2xvdCk7XHJcbn0pO1xyXG5mdW5jdGlvbiBTZXRFcXVpcHBlZChsLCByLCBzKSB7XHJcbiAgICB2YXIgX2EsIF9iLCBfYztcclxuICAgIC8qXHJcbiAgICAgICAgMCA9IGxlZnQgaGFuZFxyXG4gICAgICAgIDEgPSByaWdodCBoYW5kXHJcbiAgICAgICAgMiA9IHNob3V0c2xvdCBzbG90XHJcbiAgICAqL1xyXG4gICAgd3Quc3BUZXh0LmVuYWJsZU1vZFRleHRzKG1vZG5hbWUpO1xyXG4gICAgdmFyIGxfaWQgPSAoX2EgPSBwbCgpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0RXF1aXBwZWRPYmplY3QoMCk7XHJcbiAgICB2YXIgcl9pZCA9IChfYiA9IHBsKCkpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5nZXRFcXVpcHBlZE9iamVjdCgxKTtcclxuICAgIHZhciBzX2lkID0gKF9jID0gcGwoKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmdldEVxdWlwcGVkT2JqZWN0KDIpO1xyXG4gICAgdmFyIGxfbmFtZSA9IGxfaWQgPT09IG51bGwgfHwgbF9pZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbF9pZC5nZXROYW1lKCk7XHJcbiAgICB2YXIgcl9uYW1lID0gcl9pZCA9PT0gbnVsbCB8fCByX2lkID09PSB2b2lkIDAgPyB2b2lkIDAgOiByX2lkLmdldE5hbWUoKTtcclxuICAgIHZhciBzX25hbWUgPSBzX2lkID09PSBudWxsIHx8IHNfaWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNfaWQuZ2V0TmFtZSgpO1xyXG4gICAgaWYgKGxfbmFtZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBsX25hbWUgPSBcIk5vbmVcIjtcclxuICAgIH1cclxuICAgIGlmIChyX25hbWUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcl9uYW1lID0gXCJOb25lXCI7XHJcbiAgICB9XHJcbiAgICBpZiAoc19uYW1lID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHNfbmFtZSA9IFwiTm9uZVwiO1xyXG4gICAgfVxyXG4gICAgbGVmdF9oYW5kLnNldFRleHQobF9uYW1lKTtcclxuICAgIHJpZ2h0X2hhbmQuc2V0VGV4dChyX25hbWUpO1xyXG4gICAgc2hvdXRzbG90LnNldFRleHQoc19uYW1lKTtcclxuICAgIGZhZGVvdXQoKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/index.ts":
/*!**********************!*\
  !*** ./api/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = joplin;


/***/ }),

/***/ "./api/types.ts":
/*!**********************!*\
  !*** ./api/types.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// =================================================================
// Command API types
// =================================================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentScriptType = exports.SettingStorage = exports.AppType = exports.SettingItemType = exports.ToolbarButtonLocation = exports.isContextMenuItemLocation = exports.MenuItemLocation = exports.ImportModuleOutputFormat = exports.FileSystemItem = void 0;
// =================================================================
// Interop API types
// =================================================================
var FileSystemItem;
(function (FileSystemItem) {
    FileSystemItem["File"] = "file";
    FileSystemItem["Directory"] = "directory";
})(FileSystemItem = exports.FileSystemItem || (exports.FileSystemItem = {}));
var ImportModuleOutputFormat;
(function (ImportModuleOutputFormat) {
    ImportModuleOutputFormat["Markdown"] = "md";
    ImportModuleOutputFormat["Html"] = "html";
})(ImportModuleOutputFormat = exports.ImportModuleOutputFormat || (exports.ImportModuleOutputFormat = {}));
var MenuItemLocation;
(function (MenuItemLocation) {
    MenuItemLocation["File"] = "file";
    MenuItemLocation["Edit"] = "edit";
    MenuItemLocation["View"] = "view";
    MenuItemLocation["Note"] = "note";
    MenuItemLocation["Tools"] = "tools";
    MenuItemLocation["Help"] = "help";
    /**
     * @deprecated Do not use - same as NoteListContextMenu
     */
    MenuItemLocation["Context"] = "context";
    // If adding an item here, don't forget to update isContextMenuItemLocation()
    /**
     * When a command is called from the note list context menu, the
     * command will receive the following arguments:
     *
     * - `noteIds:string[]`: IDs of the notes that were right-clicked on.
     */
    MenuItemLocation["NoteListContextMenu"] = "noteListContextMenu";
    MenuItemLocation["EditorContextMenu"] = "editorContextMenu";
    /**
     * When a command is called from a folder context menu, the
     * command will receive the following arguments:
     *
     * - `folderId:string`: ID of the folder that was right-clicked on
     */
    MenuItemLocation["FolderContextMenu"] = "folderContextMenu";
    /**
     * When a command is called from a tag context menu, the
     * command will receive the following arguments:
     *
     * - `tagId:string`: ID of the tag that was right-clicked on
     */
    MenuItemLocation["TagContextMenu"] = "tagContextMenu";
})(MenuItemLocation = exports.MenuItemLocation || (exports.MenuItemLocation = {}));
function isContextMenuItemLocation(location) {
    return [
        MenuItemLocation.Context,
        MenuItemLocation.NoteListContextMenu,
        MenuItemLocation.EditorContextMenu,
        MenuItemLocation.FolderContextMenu,
        MenuItemLocation.TagContextMenu,
    ].includes(location);
}
exports.isContextMenuItemLocation = isContextMenuItemLocation;
var ToolbarButtonLocation;
(function (ToolbarButtonLocation) {
    /**
     * This toolbar in the top right corner of the application. It applies to the note as a whole, including its metadata.
     */
    ToolbarButtonLocation["NoteToolbar"] = "noteToolbar";
    /**
     * This toolbar is right above the text editor. It applies to the note body only.
     */
    ToolbarButtonLocation["EditorToolbar"] = "editorToolbar";
})(ToolbarButtonLocation = exports.ToolbarButtonLocation || (exports.ToolbarButtonLocation = {}));
// =================================================================
// Settings types
// =================================================================
var SettingItemType;
(function (SettingItemType) {
    SettingItemType[SettingItemType["Int"] = 1] = "Int";
    SettingItemType[SettingItemType["String"] = 2] = "String";
    SettingItemType[SettingItemType["Bool"] = 3] = "Bool";
    SettingItemType[SettingItemType["Array"] = 4] = "Array";
    SettingItemType[SettingItemType["Object"] = 5] = "Object";
    SettingItemType[SettingItemType["Button"] = 6] = "Button";
})(SettingItemType = exports.SettingItemType || (exports.SettingItemType = {}));
var AppType;
(function (AppType) {
    AppType["Desktop"] = "desktop";
    AppType["Mobile"] = "mobile";
    AppType["Cli"] = "cli";
})(AppType = exports.AppType || (exports.AppType = {}));
var SettingStorage;
(function (SettingStorage) {
    SettingStorage[SettingStorage["Database"] = 1] = "Database";
    SettingStorage[SettingStorage["File"] = 2] = "File";
})(SettingStorage = exports.SettingStorage || (exports.SettingStorage = {}));
var ContentScriptType;
(function (ContentScriptType) {
    /**
     * Registers a new Markdown-It plugin, which should follow the template
     * below.
     *
     * ```javascript
     * module.exports = {
     *     default: function(context) {
     *         return {
     *             plugin: function(markdownIt, options) {
     *                 // ...
     *             },
     *             assets: {
     *                 // ...
     *             },
     *         }
     *     }
     * }
     * ```
     * See [the
     * demo](https://github.com/laurent22/joplin/tree/dev/packages/app-cli/tests/support/plugins/content_script)
     * for a simple Markdown-it plugin example.
     *
     * ## Exported members
     *
     * - The `context` argument is currently unused but could be used later on
     *   to provide access to your own plugin so that the content script and
     *   plugin can communicate.
     *
     * - The **required** `plugin` key is the actual Markdown-It plugin - check
     *   the [official doc](https://github.com/markdown-it/markdown-it) for more
     *   information. The `options` parameter is of type
     *   [RuleOptions](https://github.com/laurent22/joplin/blob/dev/packages/renderer/MdToHtml.ts),
     *   which contains a number of options, mostly useful for Joplin's internal
     *   code.
     *
     * - Using the **optional** `assets` key you may specify assets such as JS
     *   or CSS that should be loaded in the rendered HTML document. Check for
     *   example the Joplin [Mermaid
     *   plugin](https://github.com/laurent22/joplin/blob/dev/packages/renderer/MdToHtml/rules/mermaid.ts)
     *   to see how the data should be structured.
     *
     * ## Posting messages from the content script to your plugin
     *
     * The application provides the following function to allow executing
     * commands from the rendered HTML code:
     *
     * ```javascript
     * const response = await webviewApi.postMessage(contentScriptId, message);
     * ```
     *
     * - `contentScriptId` is the ID you've defined when you registered the
     *   content script. You can retrieve it from the
     *   {@link ContentScriptContext | context}.
     * - `message` can be any basic JavaScript type (number, string, plain
     *   object), but it cannot be a function or class instance.
     *
     * When you post a message, the plugin can send back a `response` thus
     * allowing two-way communication:
     *
     * ```javascript
     * await joplin.contentScripts.onMessage(contentScriptId, (message) => {
     *     // Process message
     *     return response; // Can be any object, string or number
     * });
     * ```
     *
     * See {@link JoplinContentScripts.onMessage} for more details, as well as
     * the [postMessage
     * demo](https://github.com/laurent22/joplin/tree/dev/packages/app-cli/tests/support/plugins/post_messages).
     *
     * ## Registering an existing Markdown-it plugin
     *
     * To include a regular Markdown-It plugin, that doesn't make use of any
     * Joplin-specific features, you would simply create a file such as this:
     *
     * ```javascript
     * module.exports = {
     *     default: function(context) {
     *         return {
     *             plugin: require('markdown-it-toc-done-right');
     *         }
     *     }
     * }
     * ```
     */
    ContentScriptType["MarkdownItPlugin"] = "markdownItPlugin";
    /**
     * Registers a new CodeMirror plugin, which should follow the template
     * below.
     *
     * ```javascript
     * module.exports = {
     *     default: function(context) {
     *         return {
     *             plugin: function(CodeMirror) {
     *                 // ...
     *             },
     *             codeMirrorResources: [],
     *             codeMirrorOptions: {
     *                                  // ...
     *                       },
     *             assets: {
     *                 // ...
     *             },
     *         }
     *     }
     * }
     * ```
     *
     * - The `context` argument is currently unused but could be used later on
     *   to provide access to your own plugin so that the content script and
     *   plugin can communicate.
     *
     * - The `plugin` key is your CodeMirror plugin. This is where you can
     *   register new commands with CodeMirror or interact with the CodeMirror
     *   instance as needed.
     *
     * - The `codeMirrorResources` key is an array of CodeMirror resources that
     *   will be loaded and attached to the CodeMirror module. These are made up
     *   of addons, keymaps, and modes. For example, for a plugin that want's to
     *   enable clojure highlighting in code blocks. `codeMirrorResources` would
     *   be set to `['mode/clojure/clojure']`.
     *
     * - The `codeMirrorOptions` key contains all the
     *   [CodeMirror](https://codemirror.net/doc/manual.html#config) options
     *   that will be set or changed by this plugin. New options can alse be
     *   declared via
     *   [`CodeMirror.defineOption`](https://codemirror.net/doc/manual.html#defineOption),
     *   and then have their value set here. For example, a plugin that enables
     *   line numbers would set `codeMirrorOptions` to `{'lineNumbers': true}`.
     *
     * - Using the **optional** `assets` key you may specify **only** CSS assets
     *   that should be loaded in the rendered HTML document. Check for example
     *   the Joplin [Mermaid
     *   plugin](https://github.com/laurent22/joplin/blob/dev/packages/renderer/MdToHtml/rules/mermaid.ts)
     *   to see how the data should be structured.
     *
     * One of the `plugin`, `codeMirrorResources`, or `codeMirrorOptions` keys
     * must be provided for the plugin to be valid. Having multiple or all
     * provided is also okay.
     *
     * See also the [demo
     * plugin](https://github.com/laurent22/joplin/tree/dev/packages/app-cli/tests/support/plugins/codemirror_content_script)
     * for an example of all these keys being used in one plugin.
     *
     * ## Posting messages from the content script to your plugin
     *
     * In order to post messages to the plugin, you can use the postMessage
     * function passed to the {@link ContentScriptContext | context}.
     *
     * ```javascript
     * const response = await context.postMessage('messageFromCodeMirrorContentScript');
     * ```
     *
     * When you post a message, the plugin can send back a `response` thus
     * allowing two-way communication:
     *
     * ```javascript
     * await joplin.contentScripts.onMessage(contentScriptId, (message) => {
     *     // Process message
     *     return response; // Can be any object, string or number
     * });
     * ```
     *
     * See {@link JoplinContentScripts.onMessage} for more details, as well as
     * the [postMessage
     * demo](https://github.com/laurent22/joplin/tree/dev/packages/app-cli/tests/support/plugins/post_messages).
     *
     */
    ContentScriptType["CodeMirrorPlugin"] = "codeMirrorPlugin";
})(ContentScriptType = exports.ContentScriptType || (exports.ContentScriptType = {}));


/***/ }),

/***/ "./src/common/message.ts":
/*!*******************************!*\
  !*** ./src/common/message.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginEvent = exports.WebviewEvent = exports.UIEvent = void 0;
var UIEvent;
(function (UIEvent) {
    UIEvent["NOTE_SELECTED"] = "NOTE_SELECTED";
    UIEvent["GET_DATA"] = "GET_DATA";
    UIEvent["GET_SETTINGS"] = "GET_SETTINGS";
})(UIEvent = exports.UIEvent || (exports.UIEvent = {}));
var WebviewEvent;
(function (WebviewEvent) {
    WebviewEvent["ACCEPT_NEW_PLUGIN_EVENT"] = "ACCEPT_NEW_PLUGIN_EVENT";
    WebviewEvent["NOTE_SELECTED"] = "NOTE_SELECTED";
    WebviewEvent["GET_DATA"] = "GET_DATA";
    WebviewEvent["GET_SETTINGS"] = "GET_SETTINGS";
})(WebviewEvent = exports.WebviewEvent || (exports.WebviewEvent = {}));
var PluginEvent;
(function (PluginEvent) {
    PluginEvent["NOTE_SELECTED"] = "NOTE_SELECTED";
    PluginEvent["FULL_UPDATE"] = "FULL_UPDATE";
    PluginEvent["PARTIAL_UPDATE"] = "PARTIAL_UPDATE";
    PluginEvent["SETTING_UPDATED"] = "SETTING_UPDATED";
})(PluginEvent = exports.PluginEvent || (exports.PluginEvent = {}));


/***/ }),

/***/ "./src/core/definitions.ts":
/*!*********************************!*\
  !*** ./src/core/definitions.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LOCAL_GRAPH_ID = void 0;
exports.LOCAL_GRAPH_ID = 'joplin-local';


/***/ }),

/***/ "./src/core/graph.ts":
/*!***************************!*\
  !*** ./src/core/graph.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Graph {
    constructor(id) {
        this.nodes = new Map();
        this.id = id;
    }
    addNode(node) {
        this.nodes.set(node.id, node);
        node.graphId = this.id;
    }
}
exports.default = Graph;


/***/ }),

/***/ "./src/core/link.ts":
/*!**************************!*\
  !*** ./src/core/link.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Link {
    constructor(sourceId, targetId) {
        this.sourceId = sourceId;
        this.targetId = targetId;
    }
}
exports.default = Link;


/***/ }),

/***/ "./src/core/node.ts":
/*!**************************!*\
  !*** ./src/core/node.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(id) {
        this.rel = [];
        this.tags = new Set();
        this.id = id;
    }
}
exports.default = Node;


/***/ }),

/***/ "./src/core/settings.ts":
/*!******************************!*\
  !*** ./src/core/settings.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingLabel = void 0;
var SettingLabel;
(function (SettingLabel) {
    SettingLabel["COOLDOWN_TICKS"] = "COOLDOWN_TICKS";
    SettingLabel["COOLDOWN_TIME"] = "COOLDOWN_TIME";
    SettingLabel["WARMUP_TICKS"] = "WARMUP_TICKS";
    SettingLabel["FONT_SIZE"] = "FONT_SIZE";
    SettingLabel["RELATIVE_FONT_SIZE"] = "RELATIVE_FONT_SIZE";
})(SettingLabel = exports.SettingLabel || (exports.SettingLabel = {}));


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Joplin plugin entry point.
 * Events and data are serialized and sent to the webview.
 *
 * Some problems with the current joplin API :
 * - Tags updates are not triggering note updates
 * - Note deletion are not triggering a note deleted event.
 * - some actions are not triggering events but do affect plugins :
 * for example, going to settings screen and back will not restore the plugin state.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(__webpack_require__(/*! api */ "./api/index.ts"));
const joplin_data_manager_1 = __importDefault(__webpack_require__(/*! ./joplin/joplin-data-manager */ "./src/joplin/joplin-data-manager.ts"));
const message_1 = __webpack_require__(/*! ./common/message */ "./src/common/message.ts");
const graph_1 = __importDefault(__webpack_require__(/*! ./core/graph */ "./src/core/graph.ts"));
const definitions_1 = __webpack_require__(/*! ./core/definitions */ "./src/core/definitions.ts");
const joplin_settings_1 = __webpack_require__(/*! ./joplin/joplin-settings */ "./src/joplin/joplin-settings.ts");
const types_1 = __webpack_require__(/*! api/types */ "./api/types.ts");
const dataManager = joplin_data_manager_1.default.instance();
let pollResponse = null;
let webviewNotifications = [];
//we store a graph in the plugin process to manage repeated note updates.
const graphId = definitions_1.LOCAL_GRAPH_ID;
const graph = new graph_1.default(graphId);
function notifyWebview(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        webviewNotifications.push(msg);
        sendPluginMessage();
    });
}
//webview ready and plugin has messages to push
function sendPluginMessage() {
    return __awaiter(this, void 0, void 0, function* () {
        if (pollResponse && webviewNotifications.length > 0) {
            let notification = webviewNotifications.shift();
            pollResponse(notification);
            pollResponse = undefined;
        }
    });
}
api_1.default.plugins.register({
    onStart: function () {
        return __awaiter(this, void 0, void 0, function* () {
            const panel = yield api_1.default.views.panels.create("graph");
            yield api_1.default.views.panels.setHtml(panel, `
      <div class="container">
        <div class='panels'>
          <div id='graph' class='panel'></div>
          <div id='controls' class='panel'></div>
        </div>
      </div>
			`);
            api_1.default.views.panels.addScript(panel, "./joplin/webview/webview.js");
            api_1.default.views.panels.addScript(panel, "./ui/graph-ui.css");
            api_1.default.views.panels.addScript(panel, "./ui/control-panels/tags.css");
            api_1.default.views.panels.addScript(panel, "./ui/control-panels/control-panel.css");
            yield api_1.default.commands.register({
                name: 'showGraph',
                label: 'Show/Hide Graph',
                iconName: 'fas fa-project-diagram',
                execute: () => __awaiter(this, void 0, void 0, function* () {
                    const isVisible = yield api_1.default.views.panels.visible(panel);
                    api_1.default.views.panels.show(panel, !isVisible);
                }),
            });
            yield api_1.default.views.toolbarButtons.create('showGraph', 'showGraph', types_1.ToolbarButtonLocation.NoteToolbar);
            yield joplin_settings_1.registerSettings();
            api_1.default.views.panels.onMessage(panel, (message) => __awaiter(this, void 0, void 0, function* () {
                var _a;
                switch (message.event) {
                    case message_1.WebviewEvent.ACCEPT_NEW_PLUGIN_EVENT: {
                        // ui is ready for new updates
                        let p = new Promise((resolve) => {
                            pollResponse = resolve;
                        });
                        sendPluginMessage();
                        return p;
                    }
                    case message_1.WebviewEvent.NOTE_SELECTED: {
                        const msg = message;
                        if ((_a = msg.value) === null || _a === void 0 ? void 0 : _a.openNoteId) {
                            api_1.default.commands.execute("openNote", msg.value.openNoteId);
                        }
                        break;
                    }
                    case message_1.WebviewEvent.GET_DATA: {
                        graph.nodes = yield dataManager.getAllNodes();
                        notifyWebview({ event: message_1.PluginEvent.FULL_UPDATE, value: graph.nodes });
                        break;
                    }
                    case message_1.WebviewEvent.GET_SETTINGS: {
                        //collect settings from joplin
                        const values = yield Promise.all(Object.keys(joplin_settings_1.pluginSettings).map(key => {
                            return api_1.default.settings.value(key);
                        }));
                        // we use settings' labels rather than keys to decouple ui from joplin
                        const settings = Object.values(joplin_settings_1.pluginSettings).map((value, index) => {
                            return { key: value.label, value: values[index] };
                        });
                        notifyWebview({ event: message_1.PluginEvent.SETTING_UPDATED, value: settings });
                    }
                }
            }));
            //note selected in the editor
            api_1.default.workspace.onNoteSelectionChange((event) => __awaiter(this, void 0, void 0, function* () {
                let noteIds = event.value;
                //TODO Change when Joplin API is fixed.
                //deletion are not notified via the api but trigger a note reselect when happening through editing
                //so we trigger a full refresh each time.
                //this is not great but a temporary workaround.
                graph.nodes = yield dataManager.getAllNodes();
                notifyWebview({ event: message_1.PluginEvent.FULL_UPDATE, value: graph.nodes });
                notifyWebview({ event: message_1.PluginEvent.NOTE_SELECTED, value: noteIds });
            }));
            api_1.default.workspace.onNoteChange((event) => __awaiter(this, void 0, void 0, function* () {
                if (event.event == 1) {
                    const node = yield dataManager.getNode(event.id);
                    graph.nodes.set(node.id, node);
                    notifyWebview({
                        event: message_1.PluginEvent.PARTIAL_UPDATE,
                        value: { graphId: graphId, add: [node] },
                    });
                }
                else if (event.event == 2) {
                    // when editing a note, the plugin gets notified after each keystroke sequence,
                    // and would trigger constant graph refresh.
                    // we prevent that behavior if the metadata we track are not modified.
                    const old = graph.nodes.get(event.id);
                    const node = yield dataManager.getNode(event.id);
                    if (JSON.stringify(old) === JSON.stringify(node)) {
                        return;
                    }
                    graph.nodes.set(node.id, node);
                    notifyWebview({
                        event: message_1.PluginEvent.PARTIAL_UPDATE,
                        value: { graphId: graphId, update: [node] },
                    });
                }
                else if (event.event == 3) {
                    graph.nodes.delete(event.id);
                    notifyWebview({
                        event: message_1.PluginEvent.PARTIAL_UPDATE,
                        value: { graphId: graphId, delete: [event.id] },
                    });
                    // This is never triggered by Joplin. Bug in joplin API?
                }
            }));
            yield api_1.default.settings.onChange((event) => __awaiter(this, void 0, void 0, function* () {
                const values = yield Promise.all(event.keys.map((key) => api_1.default.settings.value(key)));
                let keys = event.keys.map((key) => joplin_settings_1.pluginSettings[key].label);
                const settings = keys.map((key, index) => {
                    return { key: key, value: values[index] };
                });
                notifyWebview({ event: message_1.PluginEvent.SETTING_UPDATED, value: settings });
            }));
        });
    },
});


/***/ }),

/***/ "./src/joplin/joplin-data-api.ts":
/*!***************************************!*\
  !*** ./src/joplin/joplin-data-api.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(__webpack_require__(/*! api */ "./api/index.ts"));
const note_1 = __webpack_require__(/*! ./note */ "./src/joplin/note.ts");
class JoplinDataApi {
    static instance() {
        if (!this.api_) {
            this.api_ = new JoplinDataApi();
        }
        return this.api_;
    }
    //queryParams follows joplin query format so we just need to return it.
    buildQueryParams(queryParams) {
        return queryParams;
    }
    getSelectedNote() {
        return api_1.default.workspace.selectedNote();
    }
    getSelectedNoteIds() {
        return api_1.default.workspace.selectedNoteIds();
    }
    /**
     * Get notes satisfying the query.
     * @param query : customize what data is retrieved.
     * @param pageSize : number of notes returned in one subquery.
     * @param max : max number of notes.
     * @returns a tuple : (notes : Map<string, Note>, truncated : boolean)
     * notes : all notes satisfying the query up to maxNote
     * truncated : true if we had to apply a cutoff
     */
    getNotes(query, max = Number.MAX_SAFE_INTEGER) {
        return __awaiter(this, void 0, void 0, function* () {
            let joplinNotes = [];
            let page;
            let pageNum = 1;
            let isLimitReached = () => joplinNotes.length > max;
            let truncated = false;
            do {
                query.page = pageNum;
                try {
                    page = yield api_1.default.data.get(['notes'], query);
                }
                catch (error) {
                    console.error(error);
                    return { results: [], truncated: true };
                }
                joplinNotes.push(...page.items);
                pageNum++;
                if (isLimitReached()) {
                    truncated = true;
                    break;
                }
            } while (page.has_more);
            if (isLimitReached()) {
                console.warn(`Max number of notes reached: ${max}. ` +
                    `Some notes may not be visible.`);
                joplinNotes = joplinNotes.slice(0, max);
            }
            const notes = yield Promise.all(joplinNotes.map((note) => __awaiter(this, void 0, void 0, function* () { return this.buildNote(note); })));
            return { results: notes, truncated: truncated };
        });
    }
    /**
     * Get all notes with given ids.
     * This method can get slow if we have to process a large number of ids since the api authorized only query by id at the time.
     * TODO best would be to add method to get batch of ids to [JoplinDataAPI](https://joplinapp.org/api/references/rest_api/).
     * @param ids list of note ids.
     * @param maxConcurrentRequests max number of concurrent requests to the joplin API. Can we useful we requesting large number of notes.
     * @returns list of notes.
     */
    getNotesByIds(query, ids, maxConcurrentRequests = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            const joplinNotes = [];
            const idsNotFound = [];
            let promises;
            let requests;
            let start, end, chunk = maxConcurrentRequests;
            for (start = 0, end = ids.length; start < end; start += chunk) {
                requests = ids.slice(start, start + chunk);
                promises = requests.map(id => this.getNote(query, id));
                const results = yield Promise.all(promises.map((p, index) => __awaiter(this, void 0, void 0, function* () {
                    return p.catch(e => {
                        idsNotFound.push(requests[index]);
                        return undefined;
                    });
                })));
                const validResults = results.filter(result => !(result == undefined));
                joplinNotes.push(...validResults);
            }
            if (idsNotFound.length != 0) {
                console.warn(`joplin data api : not found error for : ${idsNotFound}`);
            }
            const notes = yield Promise.all(joplinNotes.map((note) => __awaiter(this, void 0, void 0, function* () { return this.buildNote(note); })));
            return { results: notes, idsNotFound: idsNotFound, truncated: false };
        });
    }
    getNote(query, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const joplinNote = yield api_1.default.data.get(['notes', id], query);
            return this.buildNote(joplinNote);
        });
    }
    buildNote(joplinNote) {
        return __awaiter(this, void 0, void 0, function* () {
            const note = note_1.parseJoplinNote(joplinNote);
            const tags = yield api_1.default.data.get(['notes', joplinNote.id, 'tags']);
            note.tags = (tags === null || tags === void 0 ? void 0 : tags.items) ? tags.items.map((tag) => tag.title) : [];
            return note;
        });
    }
}
exports.default = JoplinDataApi;


/***/ }),

/***/ "./src/joplin/joplin-data-manager.ts":
/*!*******************************************!*\
  !*** ./src/joplin/joplin-data-manager.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const definitions_1 = __webpack_require__(/*! ../core/definitions */ "./src/core/definitions.ts");
const note_1 = __webpack_require__(/*! ./note */ "./src/joplin/note.ts");
const joplin_data_api_1 = __importDefault(__webpack_require__(/*! ./joplin-data-api */ "./src/joplin/joplin-data-api.ts"));
class JoplinDataManager {
    constructor() {
        this.dataApi_ = joplin_data_api_1.default.instance();
        this.nodes = new Map();
        this.graphs = new Map();
    }
    static instance() {
        if (!this.instance_) {
            this.instance_ = new JoplinDataManager();
        }
        return this.instance_;
    }
    getAllNodes() {
        return __awaiter(this, void 0, void 0, function* () {
            const nodes = new Map();
            const notes = (yield this.collectAllNotes()).notes;
            notes.forEach((note) => {
                const node = note_1.buildNodeFromNote(note);
                node.graphId = definitions_1.LOCAL_GRAPH_ID;
                nodes.set(node.id, node);
            });
            return nodes;
        });
    }
    getNode(noteId) {
        return __awaiter(this, void 0, void 0, function* () {
            const note = yield this.dataApi_.getNote(this.buildNoteQueryParams(), noteId);
            const node = note_1.buildNodeFromNote(note);
            node.graphId = definitions_1.LOCAL_GRAPH_ID;
            return node;
        });
    }
    buildNoteQueryParams() {
        return this.dataApi_.buildQueryParams({
            fields: ["id", "parent_id", "title", "body"],
            order_dir: "DESC",
        });
    }
    /**
     * Build a graph up to @param maxDegree from source node and up to a @param maxNotes cutoff.
     * Breadth-first implementation.
     * Bad links are discarded, unvisited links are flagged.
     * @param sourceId starting note.
     * @param maxDegree max degree of separation from the source note.
     * @param maxNotes cutoff
     * @returns a graph of notes
     */
    collectNotesInRange(sourceId, maxDegree, maxNotes = Number.MAX_SAFE_INTEGER) {
        return __awaiter(this, void 0, void 0, function* () {
            let pending = [];
            const notes = new Map();
            const missingNotes = [];
            let degree = 0;
            let truncated = false;
            pending.push(sourceId);
            do {
                // do not fetch data already in the graph
                pending = pending.filter((id) => !notes.has(id));
                const { results, idsNotFound } = yield this.dataApi_.getNotesByIds(this.buildNoteQueryParams(), pending);
                pending = [];
                for (let note of results) {
                    note.degree = degree; // track distance from sourceId
                    if (degree == maxDegree) {
                        note.visitLinks = false; // its links are out of scope and should not be visited.
                        if (note.links.length != 0)
                            console.warn(`unvisited links : ${note.links}`);
                    }
                    notes.set(note.id, note);
                    note.links.forEach((link) => {
                        if (!notes.has(link.targetId)) {
                            pending.push(link);
                        }
                    });
                    if (notes.size > maxNotes) {
                        truncated = true;
                        break;
                    }
                }
                missingNotes.push(...idsNotFound);
                degree++;
            } while (pending.length > 0 && degree <= maxDegree && !truncated);
            this.discardBadLinks(notes, missingNotes, degree);
            return {
                notes: Array.from(notes.values()),
                missingNotes: missingNotes,
                degree: degree,
                truncated: truncated,
            };
        });
    }
    /**
     * Build the full note graph up to a cutoff.
     * @param maxNotes cutoff
     * @returns a graph of notes
     */
    collectAllNotes(maxNotes = Number.MAX_SAFE_INTEGER) {
        return __awaiter(this, void 0, void 0, function* () {
            const notes = new Map();
            let { results, truncated } = yield this.dataApi_.getNotes(this.buildNoteQueryParams(), maxNotes);
            results.forEach((note) => {
                notes.set(note.id, note);
            });
            // if truncated, we have received some nodes according to the query criteria.
            // We cannot know for sure if we have bad links or unvisited links so keep them around.
            if (!truncated) {
                this.discardBadLinks(notes);
            }
            return { notes: Array.from(notes.values()), truncated: truncated };
        });
    }
    /**
     * Discard links with targets that do not exist.
     */
    discardBadLinks(notes, idsNotFound = [], maxDegree = Infinity) {
        let badLinks = [];
        for (let note of notes.values()) {
            let i = note.links.length;
            while (i--) {
                let link = note.links[i];
                if (idsNotFound.includes(link.targetId)) {
                    // either we have built a partial graph and bad links have been flagged
                    badLinks.push(link);
                    note.links.splice(i, 1);
                }
                else if (note.visitLinks && !notes.has(link.targetId)) {
                    // or we have built the full graph and it should be consistent
                    badLinks.push(link);
                    note.links.splice(i, 1);
                }
            }
        }
        if (badLinks.length != 0) {
            console.warn(`bad links : ... ${badLinks}`);
        }
    }
}
exports.default = JoplinDataManager;


/***/ }),

/***/ "./src/joplin/joplin-settings.ts":
/*!***************************************!*\
  !*** ./src/joplin/joplin-settings.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSettings = exports.pluginSettings = void 0;
const api_1 = __importDefault(__webpack_require__(/*! api */ "./api/index.ts"));
const types_1 = __webpack_require__(/*! api/types */ "./api/types.ts");
const settings_1 = __webpack_require__(/*! ../core/settings */ "./src/core/settings.ts");
const sectionName = "graph";
exports.pluginSettings = {
    COOLDOWN_TICKS: {
        value: 500,
        type: types_1.SettingItemType.Int,
        section: sectionName,
        public: true,
        label: settings_1.SettingLabel.COOLDOWN_TICKS,
        description: 'Simulation stops after COOLDOWN_TICKS or COOLDOWN_TIME (ms) has elapsed, whichever occurs first.'
    },
    COOLDOWN_TIME: {
        value: 4000,
        type: types_1.SettingItemType.Int,
        section: sectionName,
        public: true,
        label: settings_1.SettingLabel.COOLDOWN_TIME,
        description: 'Simulation stops after COOLDOWN_TICKS or COOLDOWN_TIME (ms) has elapsed, whichever occurs first.'
    },
    WARMUP_TICKS: {
        value: 0,
        type: types_1.SettingItemType.Int,
        section: sectionName,
        public: true,
        label: settings_1.SettingLabel.WARMUP_TICKS,
        description: "Number of simulation steps before the graph render. For optimization.",
    },
    FONT_SIZE: {
        value: 2,
        type: types_1.SettingItemType.Int,
        section: sectionName,
        public: true,
        label: settings_1.SettingLabel.FONT_SIZE,
        description: "Size node label in px.",
    },
    RELATIVE_FONT_SIZE: {
        value: true,
        type: types_1.SettingItemType.Bool,
        section: sectionName,
        public: true,
        label: settings_1.SettingLabel.RELATIVE_FONT_SIZE,
        description: "Should the label size be proportional to node size?",
    },
};
function registerSettings() {
    return __awaiter(this, void 0, void 0, function* () {
        yield api_1.default.settings.registerSection(sectionName, {
            label: 'Graph',
            iconName: 'fas fa-project-diagram'
        });
        return yield api_1.default.settings.registerSettings(exports.pluginSettings);
    });
}
exports.registerSettings = registerSettings;


/***/ }),

/***/ "./src/joplin/note.ts":
/*!****************************!*\
  !*** ./src/joplin/note.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildNodeFromNote = exports.parseJoplinNote = void 0;
const link_1 = __importDefault(__webpack_require__(/*! ../core/link */ "./src/core/link.ts"));
const node_1 = __importDefault(__webpack_require__(/*! ../core/node */ "./src/core/node.ts"));
function parseJoplinNote(joplinNote) {
    const note = {
        id: joplinNote.id,
        title: joplinNote.title,
        body: joplinNote.body,
        links: parseNoteLinks(joplinNote),
    };
    return note;
}
exports.parseJoplinNote = parseJoplinNote;
function buildNodeFromNote(note) {
    const node = new node_1.default(note.id);
    node.label = note.title;
    note.links.forEach(link => node.rel.push(link));
    note.tags.forEach(tag => node.tags.add(tag));
    node.type = 'note';
    return node;
}
exports.buildNodeFromNote = buildNodeFromNote;
//TODO review addalphanumeric control
//position help track multiple links to the same target.
//from joplin.link.graph
function parseNoteLinks(joplinNote) {
    let position = 1;
    const links = [];
    // TODO: needs to handle resource links vs note links. see 4. Tips note for
    // webclipper screenshot.
    // https://stackoverflow.com/questions/37462126/regex-match-markdown-link
    const linkRegexp = /\[\]|\[.*?\]\(:\/(.*?)\)/g;
    var match = linkRegexp.exec(joplinNote.body);
    while (match != null) {
        if (match[1] !== undefined) {
            const target = match[1];
            const link = new link_1.default(joplinNote.id, target);
            link.type = 'reference';
            link.position = position;
            links.push(link);
            position++;
        }
        match = linkRegexp.exec(joplinNote.body);
    }
    return links;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpL2luZGV4LnRzIiwid2VicGFjazovLy8uL2FwaS90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL21lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZGVmaW5pdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZ3JhcGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvbGluay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9ub2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3NldHRpbmdzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvam9wbGluL2pvcGxpbi1kYXRhLWFwaS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvam9wbGluL2pvcGxpbi1kYXRhLW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pvcGxpbi9qb3BsaW4tc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pvcGxpbi9ub3RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7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Q0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakIsUUFBUSxFQUFFLENBQUM7U0FDWjtRQUNELEtBQUssR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMxQztJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHR5cGUgSm9wbGluIGZyb20gJy4vSm9wbGluJztcblxuZGVjbGFyZSBjb25zdCBqb3BsaW46IEpvcGxpbjtcblxuZXhwb3J0IGRlZmF1bHQgam9wbGluO1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbW1hbmQgQVBJIHR5cGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbW1hbmQge1xuXHQvKipcblx0ICogTmFtZSBvZiBjb21tYW5kIC0gbXVzdCBiZSBnbG9iYWxseSB1bmlxdWVcblx0ICovXG5cdG5hbWU6IHN0cmluZztcblxuXHQvKipcblx0ICogTGFiZWwgdG8gYmUgZGlzcGxheWVkIG9uIG1lbnUgaXRlbXMgb3Iga2V5Ym9hcmQgc2hvcnRjdXQgZWRpdG9yIGZvciBleGFtcGxlLlxuXHQgKiBJZiBpdCBpcyBtaXNzaW5nLCBpdCdzIGFzc3VtZWQgaXQncyBhIHByaXZhdGUgY29tbWFuZCwgdG8gYmUgY2FsbGVkIHByb2dyYW1tYXRpY2FsbHkgb25seS5cblx0ICogSW4gdGhhdCBjYXNlIHRoZSBjb21tYW5kIHdpbGwgbm90IGFwcGVhciBpbiB0aGUgc2hvcnRjdXQgZWRpdG9yIG9yIGNvbW1hbmQgcGFuZWwsIGFuZCBsb2dpY2FsbHlcblx0ICogc2hvdWxkIG5vdCBiZSB1c2VkIGFzIGEgbWVudSBpdGVtLlxuXHQgKi9cblx0bGFiZWw/OiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIEljb24gdG8gYmUgdXNlZCBvbiB0b29sYmFyIGJ1dHRvbnMgZm9yIGV4YW1wbGVcblx0ICovXG5cdGljb25OYW1lPzogc3RyaW5nO1xuXG5cdC8qKlxuXHQgKiBDb2RlIHRvIGJlIHJhbiB3aGVuIHRoZSBjb21tYW5kIGlzIGV4ZWN1dGVkLiBJdCBtYXkgcmV0dXJuIGEgcmVzdWx0LlxuXHQgKi9cblx0ZXhlY3V0ZSguLi5hcmdzOiBhbnlbXSk6IFByb21pc2U8YW55IHwgdm9pZD47XG5cblx0LyoqXG5cdCAqIERlZmluZXMgd2hldGhlciB0aGUgY29tbWFuZCBzaG91bGQgYmUgZW5hYmxlZCBvciBkaXNhYmxlZCwgd2hpY2ggaW4gdHVybnNcblx0ICogYWZmZWN0cyB0aGUgZW5hYmxlZCBzdGF0ZSBvZiBhbnkgYXNzb2NpYXRlZCBidXR0b24gb3IgbWVudSBpdGVtLlxuXHQgKlxuXHQgKiBUaGUgY29uZGl0aW9uIHNob3VsZCBiZSBleHByZXNzZWQgYXMgYSBcIndoZW4tY2xhdXNlXCIgKGFzIGluIFZpc3VhbCBTdHVkaW9cblx0ICogQ29kZSkuIEl0J3MgYSBzaW1wbGUgYm9vbGVhbiBleHByZXNzaW9uIHRoYXQgZXZhbHVhdGVzIHRvIGB0cnVlYCBvclxuXHQgKiBgZmFsc2VgLiBJdCBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIG9wZXJhdG9yczpcblx0ICpcblx0ICogT3BlcmF0b3IgfCBTeW1ib2wgfCBFeGFtcGxlXG5cdCAqIC0tIHwgLS0gfCAtLVxuXHQgKiBFcXVhbGl0eSB8ID09IHwgXCJlZGl0b3JUeXBlID09IG1hcmtkb3duXCJcblx0ICogSW5lcXVhbGl0eSB8ICE9IHwgXCJjdXJyZW50U2NyZWVuICE9IGNvbmZpZ1wiXG5cdCAqIE9yIHwgXFx8XFx8IHwgXCJub3RlSXNUb2RvIFxcfFxcfCBub3RlVG9kb0NvbXBsZXRlZFwiXG5cdCAqIEFuZCB8ICYmIHwgXCJvbmVOb3RlU2VsZWN0ZWQgJiYgIWluQ29uZmxpY3RGb2xkZXJcIlxuXHQgKlxuXHQgKiBKb3BsaW4sIHVubGlrZSBWU0NvZGUsIGFsc28gc3VwcG9ydHMgcGFyZW50aGVzaXMsIHdoaWNoIGFsbG93cyBjcmVhdGluZ1xuXHQgKiBtb3JlIGNvbXBsZXggZXhwcmVzc2lvbnMgc3VjaCBhcyBgY29uZDEgfHwgKGNvbmQyICYmIGNvbmQzKWAuIE9ubHkgb25lXG5cdCAqIGxldmVsIG9mIHBhcmVudGhlc2lzIGlzIHBvc3NpYmxlIChuZXN0ZWQgb25lcyBhcmVuJ3Qgc3VwcG9ydGVkKS5cblx0ICpcblx0ICogQ3VycmVudGx5IHRoZSBzdXBwb3J0ZWQgY29udGV4dCB2YXJpYWJsZXMgYXJlbid0IGRvY3VtZW50ZWQsIGJ1dCB5b3UgY2FuXG5cdCAqIGZpbmQgdGhlIGxpc3QgYmVsb3c6XG5cdCAqXG5cdCAqIC0gW0dsb2JhbCBXaGVuIENsYXVzZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9sYXVyZW50MjIvam9wbGluL2Jsb2IvZGV2L3BhY2thZ2VzL2xpYi9zZXJ2aWNlcy9jb21tYW5kcy9zdGF0ZVRvV2hlbkNsYXVzZUNvbnRleHQudHMpXG5cdCAqIC0gW0Rlc2t0b3AgYXBwIFdoZW4gQ2xhdXNlc10oaHR0cHM6Ly9naXRodWIuY29tL2xhdXJlbnQyMi9qb3BsaW4vYmxvYi9kZXYvcGFja2FnZXMvYXBwLWRlc2t0b3Avc2VydmljZXMvY29tbWFuZHMvc3RhdGVUb1doZW5DbGF1c2VDb250ZXh0LnRzKVxuXHQgKlxuXHQgKiBOb3RlOiBDb21tYW5kcyBhcmUgZW5hYmxlZCBieSBkZWZhdWx0IHVubGVzcyB5b3UgdXNlIHRoaXMgcHJvcGVydHkuXG5cdCAqL1xuXHRlbmFibGVkQ29uZGl0aW9uPzogc3RyaW5nO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSW50ZXJvcCBBUEkgdHlwZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBlbnVtIEZpbGVTeXN0ZW1JdGVtIHtcblx0RmlsZSA9ICdmaWxlJyxcblx0RGlyZWN0b3J5ID0gJ2RpcmVjdG9yeScsXG59XG5cbmV4cG9ydCBlbnVtIEltcG9ydE1vZHVsZU91dHB1dEZvcm1hdCB7XG5cdE1hcmtkb3duID0gJ21kJyxcblx0SHRtbCA9ICdodG1sJyxcbn1cblxuLyoqXG4gKiBVc2VkIHRvIGltcGxlbWVudCBhIG1vZHVsZSB0byBleHBvcnQgZGF0YSBmcm9tIEpvcGxpbi4gW1ZpZXcgdGhlIGRlbW8gcGx1Z2luXShodHRwczovL2dpdGh1Yi5jb20vbGF1cmVudDIyL2pvcGxpbi90cmVlL2Rldi9wYWNrYWdlcy9hcHAtY2xpL3Rlc3RzL3N1cHBvcnQvcGx1Z2lucy9qc29uX2V4cG9ydCkgZm9yIGFuIGV4YW1wbGUuXG4gKlxuICogSW4gZ2VuZXJhbCwgYWxsIHRoZSBldmVudCBoYW5kbGVycyB5b3UnbGwgbmVlZCB0byBpbXBsZW1lbnQgdGFrZSBhIGBjb250ZXh0YCBvYmplY3QgYXMgYSBmaXJzdCBhcmd1bWVudC4gVGhpcyBvYmplY3Qgd2lsbCBjb250YWluIHRoZSBleHBvcnQgb3IgaW1wb3J0IHBhdGggYXMgd2VsbCBhcyB2YXJpb3VzIG9wdGlvbmFsIHByb3BlcnRpZXMsIHN1Y2ggYXMgd2hpY2ggbm90ZXMgb3Igbm90ZWJvb2tzIG5lZWQgdG8gYmUgZXhwb3J0ZWQuXG4gKlxuICogVG8gZ2V0IGEgYmV0dGVyIHNlbnNlIG9mIHdoYXQgaXQgd2lsbCBjb250YWluIGl0IGNhbiBiZSB1c2VmdWwgdG8gcHJpbnQgaXQgdXNpbmcgYGNvbnNvbGUuaW5mbyhjb250ZXh0KWAuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRXhwb3J0TW9kdWxlIHtcblx0LyoqXG5cdCAqIFRoZSBmb3JtYXQgdG8gYmUgZXhwb3J0ZWQsIGVnIFwiZW5leFwiLCBcImpleFwiLCBcImpzb25cIiwgZXRjLlxuXHQgKi9cblx0Zm9ybWF0OiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIFRoZSBkZXNjcmlwdGlvbiB0aGF0IHdpbGwgYXBwZWFyIGluIHRoZSBVSSwgZm9yIGV4YW1wbGUgaW4gdGhlIG1lbnUgaXRlbS5cblx0ICovXG5cdGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgdGhlIG1vZHVsZSB3aWxsIGV4cG9ydCBhIHNpbmdsZSBmaWxlIG9yIG11bHRpcGxlIGZpbGVzIGluIGEgZGlyZWN0b3J5LiBJdCBhZmZlY3RzIHRoZSBvcGVuIGRpYWxvZyB0aGF0IHdpbGwgYmUgcHJlc2VudGVkIHRvIHRoZSB1c2VyIHdoZW4gdXNpbmcgeW91ciBleHBvcnRlci5cblx0ICovXG5cdHRhcmdldDogRmlsZVN5c3RlbUl0ZW07XG5cblx0LyoqXG5cdCAqIE9ubHkgYXBwbGllcyB0byBzaW5nbGUgZmlsZSBleHBvcnRlcnMgb3IgaW1wb3J0ZXJzXG5cdCAqIEl0IHRlbGxzIHdoZXRoZXIgdGhlIGZvcm1hdCBjYW4gcGFja2FnZSBtdWx0aXBsZSBub3RlcyBpbnRvIG9uZSBmaWxlLlxuXHQgKiBGb3IgZXhhbXBsZSBKRVggb3IgRU5FWCBjYW4sIGJ1dCBIVE1MIGNhbm5vdC5cblx0ICovXG5cdGlzTm90ZUFyY2hpdmU6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIFRoZSBleHRlbnNpb25zIG9mIHRoZSBmaWxlcyBleHBvcnRlZCBieSB5b3VyIG1vZHVsZS4gRm9yIGV4YW1wbGUsIGl0IGlzIGBbXCJodG1cIiwgXCJodG1sXCJdYCBmb3IgdGhlIEhUTUwgbW9kdWxlLCBhbmQganVzdCBgW1wiamV4XCJdYCBmb3IgdGhlIEpFWCBtb2R1bGUuXG5cdCAqL1xuXHRmaWxlRXh0ZW5zaW9ucz86IHN0cmluZ1tdO1xuXG5cdC8qKlxuXHQgKiBDYWxsZWQgd2hlbiB0aGUgZXhwb3J0IHByb2Nlc3Mgc3RhcnRzLlxuXHQgKi9cblx0b25Jbml0KGNvbnRleHQ6IEV4cG9ydENvbnRleHQpOiBQcm9taXNlPHZvaWQ+O1xuXG5cdC8qKlxuXHQgKiBDYWxsZWQgd2hlbiBhbiBpdGVtIG5lZWRzIHRvIGJlIHByb2Nlc3NlZC4gQW4gXCJpdGVtXCIgY2FuIGJlIGFueSBKb3BsaW4gb2JqZWN0LCBzdWNoIGFzIGEgbm90ZSwgYSBmb2xkZXIsIGEgbm90ZWJvb2ssIGV0Yy5cblx0ICovXG5cdG9uUHJvY2Vzc0l0ZW0oY29udGV4dDogRXhwb3J0Q29udGV4dCwgaXRlbVR5cGU6IG51bWJlciwgaXRlbTogYW55KTogUHJvbWlzZTx2b2lkPjtcblxuXHQvKipcblx0ICogQ2FsbGVkIHdoZW4gYSByZXNvdXJjZSBmaWxlIG5lZWRzIHRvIGJlIGV4cG9ydGVkLlxuXHQgKi9cblx0b25Qcm9jZXNzUmVzb3VyY2UoY29udGV4dDogRXhwb3J0Q29udGV4dCwgcmVzb3VyY2U6IGFueSwgZmlsZVBhdGg6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cblx0LyoqXG5cdCAqIENhbGxlZCB3aGVuIHRoZSBleHBvcnQgcHJvY2VzcyBpcyBkb25lLlxuXHQgKi9cblx0b25DbG9zZShjb250ZXh0OiBFeHBvcnRDb250ZXh0KTogUHJvbWlzZTx2b2lkPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbXBvcnRNb2R1bGUge1xuXHQvKipcblx0ICogVGhlIGZvcm1hdCB0byBiZSBleHBvcnRlZCwgZWcgXCJlbmV4XCIsIFwiamV4XCIsIFwianNvblwiLCBldGMuXG5cdCAqL1xuXHRmb3JtYXQ6IHN0cmluZztcblxuXHQvKipcblx0ICogVGhlIGRlc2NyaXB0aW9uIHRoYXQgd2lsbCBhcHBlYXIgaW4gdGhlIFVJLCBmb3IgZXhhbXBsZSBpbiB0aGUgbWVudSBpdGVtLlxuXHQgKi9cblx0ZGVzY3JpcHRpb246IHN0cmluZztcblxuXHQvKipcblx0ICogT25seSBhcHBsaWVzIHRvIHNpbmdsZSBmaWxlIGV4cG9ydGVycyBvciBpbXBvcnRlcnNcblx0ICogSXQgdGVsbHMgd2hldGhlciB0aGUgZm9ybWF0IGNhbiBwYWNrYWdlIG11bHRpcGxlIG5vdGVzIGludG8gb25lIGZpbGUuXG5cdCAqIEZvciBleGFtcGxlIEpFWCBvciBFTkVYIGNhbiwgYnV0IEhUTUwgY2Fubm90LlxuXHQgKi9cblx0aXNOb3RlQXJjaGl2ZTogYm9vbGVhbjtcblxuXHQvKipcblx0ICogVGhlIHR5cGUgb2Ygc291cmNlcyB0aGF0IGFyZSBzdXBwb3J0ZWQgYnkgdGhlIG1vZHVsZS4gVGVsbHMgd2hldGhlciB0aGUgbW9kdWxlIGNhbiBpbXBvcnQgZmlsZXMgb3IgZGlyZWN0b3JpZXMgb3IgYm90aC5cblx0ICovXG5cdHNvdXJjZXM6IEZpbGVTeXN0ZW1JdGVtW107XG5cblx0LyoqXG5cdCAqIFRlbGxzIHRoZSBmaWxlIGV4dGVuc2lvbnMgb2YgdGhlIGV4cG9ydGVkIGZpbGVzLlxuXHQgKi9cblx0ZmlsZUV4dGVuc2lvbnM/OiBzdHJpbmdbXTtcblxuXHQvKipcblx0ICogVGVsbHMgdGhlIHR5cGUgb2Ygbm90ZXMgdGhhdCB3aWxsIGJlIGdlbmVyYXRlZCwgZWl0aGVyIEhUTUwgb3IgTWFya2Rvd24gKGRlZmF1bHQpLlxuXHQgKi9cblx0b3V0cHV0Rm9ybWF0PzogSW1wb3J0TW9kdWxlT3V0cHV0Rm9ybWF0O1xuXG5cdC8qKlxuXHQgKiBDYWxsZWQgd2hlbiB0aGUgaW1wb3J0IHByb2Nlc3Mgc3RhcnRzLiBUaGVyZSBpcyBvbmx5IG9uZSBldmVudCBoYW5kbGVyIHdpdGhpbiB3aGljaCB5b3Ugc2hvdWxkIGltcG9ydCB0aGUgY29tcGxldGUgZGF0YS5cblx0ICovXG5cdG9uRXhlYyhjb250ZXh0OiBJbXBvcnRDb250ZXh0KTogUHJvbWlzZTx2b2lkPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFeHBvcnRPcHRpb25zIHtcblx0Zm9ybWF0Pzogc3RyaW5nO1xuXHRwYXRoPzogc3RyaW5nO1xuXHRzb3VyY2VGb2xkZXJJZHM/OiBzdHJpbmdbXTtcblx0c291cmNlTm90ZUlkcz86IHN0cmluZ1tdO1xuXHQvLyBtb2R1bGVQYXRoPzogc3RyaW5nO1xuXHR0YXJnZXQ/OiBGaWxlU3lzdGVtSXRlbTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFeHBvcnRDb250ZXh0IHtcblx0ZGVzdFBhdGg6IHN0cmluZztcblx0b3B0aW9uczogRXhwb3J0T3B0aW9ucztcblxuXHQvKipcblx0ICogWW91IGNhbiBhdHRhY2ggeW91ciBvd24gY3VzdG9tIGRhdGEgdXNpbmcgdGhpcyBwcm9wZXJ5IC0gaXQgd2lsbCB0aGVuIGJlIHBhc3NlZCB0byBlYWNoIGV2ZW50IGhhbmRsZXIsIGFsbG93aW5nIHlvdSB0byBrZWVwIHN0YXRlIGZyb20gb25lIGV2ZW50IHRvIHRoZSBuZXh0LlxuXHQgKi9cblx0dXNlckRhdGE/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1wb3J0Q29udGV4dCB7XG5cdHNvdXJjZVBhdGg6IHN0cmluZztcblx0b3B0aW9uczogYW55O1xuXHR3YXJuaW5nczogc3RyaW5nW107XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNaXNjIHR5cGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjcmlwdCB7XG5cdG9uU3RhcnQ/KGV2ZW50OiBhbnkpOiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpc3Bvc2FibGUge1xuXHQvLyBkaXNwb3NlKCk6dm9pZDtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lbnUgdHlwZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlTWVudUl0ZW1PcHRpb25zIHtcblx0YWNjZWxlcmF0b3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gTWVudUl0ZW1Mb2NhdGlvbiB7XG5cdEZpbGUgPSAnZmlsZScsXG5cdEVkaXQgPSAnZWRpdCcsXG5cdFZpZXcgPSAndmlldycsXG5cdE5vdGUgPSAnbm90ZScsXG5cdFRvb2xzID0gJ3Rvb2xzJyxcblx0SGVscCA9ICdoZWxwJyxcblxuXHQvKipcblx0ICogQGRlcHJlY2F0ZWQgRG8gbm90IHVzZSAtIHNhbWUgYXMgTm90ZUxpc3RDb250ZXh0TWVudVxuXHQgKi9cblx0Q29udGV4dCA9ICdjb250ZXh0JyxcblxuXHQvLyBJZiBhZGRpbmcgYW4gaXRlbSBoZXJlLCBkb24ndCBmb3JnZXQgdG8gdXBkYXRlIGlzQ29udGV4dE1lbnVJdGVtTG9jYXRpb24oKVxuXG5cdC8qKlxuXHQgKiBXaGVuIGEgY29tbWFuZCBpcyBjYWxsZWQgZnJvbSB0aGUgbm90ZSBsaXN0IGNvbnRleHQgbWVudSwgdGhlXG5cdCAqIGNvbW1hbmQgd2lsbCByZWNlaXZlIHRoZSBmb2xsb3dpbmcgYXJndW1lbnRzOlxuXHQgKlxuXHQgKiAtIGBub3RlSWRzOnN0cmluZ1tdYDogSURzIG9mIHRoZSBub3RlcyB0aGF0IHdlcmUgcmlnaHQtY2xpY2tlZCBvbi5cblx0ICovXG5cdE5vdGVMaXN0Q29udGV4dE1lbnUgPSAnbm90ZUxpc3RDb250ZXh0TWVudScsXG5cblx0RWRpdG9yQ29udGV4dE1lbnUgPSAnZWRpdG9yQ29udGV4dE1lbnUnLFxuXG5cdC8qKlxuXHQgKiBXaGVuIGEgY29tbWFuZCBpcyBjYWxsZWQgZnJvbSBhIGZvbGRlciBjb250ZXh0IG1lbnUsIHRoZVxuXHQgKiBjb21tYW5kIHdpbGwgcmVjZWl2ZSB0aGUgZm9sbG93aW5nIGFyZ3VtZW50czpcblx0ICpcblx0ICogLSBgZm9sZGVySWQ6c3RyaW5nYDogSUQgb2YgdGhlIGZvbGRlciB0aGF0IHdhcyByaWdodC1jbGlja2VkIG9uXG5cdCAqL1xuXHRGb2xkZXJDb250ZXh0TWVudSA9ICdmb2xkZXJDb250ZXh0TWVudScsXG5cblx0LyoqXG5cdCAqIFdoZW4gYSBjb21tYW5kIGlzIGNhbGxlZCBmcm9tIGEgdGFnIGNvbnRleHQgbWVudSwgdGhlXG5cdCAqIGNvbW1hbmQgd2lsbCByZWNlaXZlIHRoZSBmb2xsb3dpbmcgYXJndW1lbnRzOlxuXHQgKlxuXHQgKiAtIGB0YWdJZDpzdHJpbmdgOiBJRCBvZiB0aGUgdGFnIHRoYXQgd2FzIHJpZ2h0LWNsaWNrZWQgb25cblx0ICovXG5cdFRhZ0NvbnRleHRNZW51ID0gJ3RhZ0NvbnRleHRNZW51Jyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29udGV4dE1lbnVJdGVtTG9jYXRpb24obG9jYXRpb246IE1lbnVJdGVtTG9jYXRpb24pOiBib29sZWFuIHtcblx0cmV0dXJuIFtcblx0XHRNZW51SXRlbUxvY2F0aW9uLkNvbnRleHQsXG5cdFx0TWVudUl0ZW1Mb2NhdGlvbi5Ob3RlTGlzdENvbnRleHRNZW51LFxuXHRcdE1lbnVJdGVtTG9jYXRpb24uRWRpdG9yQ29udGV4dE1lbnUsXG5cdFx0TWVudUl0ZW1Mb2NhdGlvbi5Gb2xkZXJDb250ZXh0TWVudSxcblx0XHRNZW51SXRlbUxvY2F0aW9uLlRhZ0NvbnRleHRNZW51LFxuXHRdLmluY2x1ZGVzKGxvY2F0aW9uKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZW51SXRlbSB7XG5cdC8qKlxuXHQgKiBDb21tYW5kIHRoYXQgc2hvdWxkIGJlIGFzc29jaWF0ZWQgd2l0aCB0aGUgbWVudSBpdGVtLiBBbGwgbWVudSBpdGVtIHNob3VsZFxuXHQgKiBoYXZlIGEgY29tbWFuZCBhc3NvY2lhdGVkIHdpdGggdGhlbSB1bmxlc3MgdGhleSBhcmUgYSBzdWItbWVudS5cblx0ICovXG5cdGNvbW1hbmROYW1lPzogc3RyaW5nO1xuXG5cdC8qKlxuXHQgKiBBY2NlbGVyYXRvciBhc3NvY2lhdGVkIHdpdGggdGhlIG1lbnUgaXRlbVxuXHQgKi9cblx0YWNjZWxlcmF0b3I/OiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIE1lbnUgaXRlbXMgdGhhdCBzaG91bGQgYXBwZWFyIGJlbG93IHRoaXMgbWVudSBpdGVtLiBBbGxvd3MgY3JlYXRpbmcgYSBtZW51IHRyZWUuXG5cdCAqL1xuXHRzdWJtZW51PzogTWVudUl0ZW1bXTtcblxuXHQvKipcblx0ICogTWVudSBpdGVtIGxhYmVsLiBJZiBub3Qgc3BlY2lmaWVkLCB0aGUgY29tbWFuZCBsYWJlbCB3aWxsIGJlIHVzZWQgaW5zdGVhZC5cblx0ICovXG5cdGxhYmVsPzogc3RyaW5nO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVmlldyBBUEkgdHlwZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uU3BlYyB7XG5cdGlkOiBCdXR0b25JZDtcblx0dGl0bGU/OiBzdHJpbmc7XG5cdG9uQ2xpY2s/KCk6IHZvaWQ7XG59XG5cbmV4cG9ydCB0eXBlIEJ1dHRvbklkID0gc3RyaW5nO1xuXG5leHBvcnQgZW51bSBUb29sYmFyQnV0dG9uTG9jYXRpb24ge1xuXHQvKipcblx0ICogVGhpcyB0b29sYmFyIGluIHRoZSB0b3AgcmlnaHQgY29ybmVyIG9mIHRoZSBhcHBsaWNhdGlvbi4gSXQgYXBwbGllcyB0byB0aGUgbm90ZSBhcyBhIHdob2xlLCBpbmNsdWRpbmcgaXRzIG1ldGFkYXRhLlxuXHQgKi9cblx0Tm90ZVRvb2xiYXIgPSAnbm90ZVRvb2xiYXInLFxuXG5cdC8qKlxuXHQgKiBUaGlzIHRvb2xiYXIgaXMgcmlnaHQgYWJvdmUgdGhlIHRleHQgZWRpdG9yLiBJdCBhcHBsaWVzIHRvIHRoZSBub3RlIGJvZHkgb25seS5cblx0ICovXG5cdEVkaXRvclRvb2xiYXIgPSAnZWRpdG9yVG9vbGJhcicsXG59XG5cbmV4cG9ydCB0eXBlIFZpZXdIYW5kbGUgPSBzdHJpbmc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWRpdG9yQ29tbWFuZCB7XG5cdG5hbWU6IHN0cmluZztcblx0dmFsdWU/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nUmVzdWx0IHtcblx0aWQ6IEJ1dHRvbklkO1xuXHRmb3JtRGF0YT86IGFueTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNldHRpbmdzIHR5cGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgZW51bSBTZXR0aW5nSXRlbVR5cGUge1xuXHRJbnQgPSAxLFxuXHRTdHJpbmcgPSAyLFxuXHRCb29sID0gMyxcblx0QXJyYXkgPSA0LFxuXHRPYmplY3QgPSA1LFxuXHRCdXR0b24gPSA2LFxufVxuXG5leHBvcnQgZW51bSBBcHBUeXBlIHtcblx0RGVza3RvcCA9ICdkZXNrdG9wJyxcblx0TW9iaWxlID0gJ21vYmlsZScsXG5cdENsaSA9ICdjbGknLFxufVxuXG5leHBvcnQgZW51bSBTZXR0aW5nU3RvcmFnZSB7XG5cdERhdGFiYXNlID0gMSxcblx0RmlsZSA9IDIsXG59XG5cbi8vIFJlZGVmaW5lIGEgc2ltcGxpZmllZCBpbnRlcmZhY2UgdG8gbWFzayBpbnRlcm5hbCBkZXRhaWxzXG4vLyBhbmQgdG8gcmVtb3ZlIGZ1bmN0aW9uIGNhbGxzIGFzIHRoZXkgd291bGQgaGF2ZSB0byBiZSBhc3luYy5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0dGluZ0l0ZW0ge1xuXHR2YWx1ZTogYW55O1xuXHR0eXBlOiBTZXR0aW5nSXRlbVR5cGU7XG5cblx0bGFiZWw6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIEEgcHVibGljIHNldHRpbmcgd2lsbCBhcHBlYXIgaW4gdGhlIENvbmZpZ3VyYXRpb24gc2NyZWVuIGFuZCB3aWxsIGJlXG5cdCAqIG1vZGlmaWFibGUgYnkgdGhlIHVzZXIuIEEgcHJpdmF0ZSBzZXR0aW5nIGhvd2V2ZXIgd2lsbCBub3QgYXBwZWFyIHRoZXJlLFxuXHQgKiBhbmQgY2FuIG9ubHkgYmUgY2hhbmdlZCBwcm9ncmFtbWF0aWNhbGx5LiBZb3UgbWF5IHVzZSB0aGlzIHRvIHN0b3JlIHNvbWVcblx0ICogdmFsdWVzIHRoYXQgeW91IGRvIG5vdCB3YW50IHRvIGRpcmVjdGx5IGV4cG9zZS5cblx0ICovXG5cdHB1YmxpYzogYm9vbGVhbjtcblxuXHQvKipcblx0ICogWW91IHdvdWxkIHVzdWFsbHkgc2V0IHRoaXMgdG8gYSBzZWN0aW9uIHlvdSB3b3VsZCBoYXZlIGNyZWF0ZWRcblx0ICogc3BlY2lmaWNhbGx5IGZvciB0aGUgcGx1Z2luLlxuXHQgKi9cblx0c2VjdGlvbj86IHN0cmluZztcblxuXHQvKipcblx0ICogVG8gY3JlYXRlIGEgc2V0dGluZyB3aXRoIG11bHRpcGxlIG9wdGlvbnMsIHNldCB0aGlzIHByb3BlcnR5IHRvIGB0cnVlYC5cblx0ICogVGhhdCBzZXR0aW5nIHdpbGwgcmVuZGVyIGFzIGEgZHJvcGRvd24gbGlzdCBpbiB0aGUgY29uZmlndXJhdGlvbiBzY3JlZW4uXG5cdCAqL1xuXHRpc0VudW0/OiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBUaGlzIHByb3BlcnR5IGlzIHJlcXVpcmVkIHdoZW4gYGlzRW51bWAgaXMgYHRydWVgLiBJbiB3aGljaCBjYXNlLCBpdFxuXHQgKiBzaG91bGQgY29udGFpbiBhIG1hcCBvZiB2YWx1ZSA9PiBsYWJlbC5cblx0ICovXG5cdG9wdGlvbnM/OiBSZWNvcmQ8YW55LCBhbnk+O1xuXG5cdC8qKlxuXHQgKiBSZXNlcnZlZCBwcm9wZXJ0eS4gTm90IHVzZWQgYXQgdGhlIG1vbWVudC5cblx0ICovXG5cdGFwcFR5cGVzPzogQXBwVHlwZVtdO1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhpcyB0byBgdHJ1ZWAgdG8gc3RvcmUgc2VjdXJlIGRhdGEsIHN1Y2ggYXMgcGFzc3dvcmRzLiBBbnkgc3VjaFxuXHQgKiBzZXR0aW5nIHdpbGwgYmUgc3RvcmVkIGluIHRoZSBzeXN0ZW0ga2V5Y2hhaW4gaWYgb25lIGlzIGF2YWlsYWJsZS5cblx0ICovXG5cdHNlY3VyZT86IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIEFuIGFkdmFuY2VkIHNldHRpbmcgd2lsbCBiZSBtb3ZlZCB1bmRlciB0aGUgXCJBZHZhbmNlZFwiIGJ1dHRvbiBpbiB0aGVcblx0ICogY29uZmlnIHNjcmVlbi5cblx0ICovXG5cdGFkdmFuY2VkPzogYm9vbGVhbjtcblxuXHQvKipcblx0ICogU2V0IHRoZSBtaW4sIG1heCBhbmQgc3RlcCB2YWx1ZXMgaWYgeW91IHdhbnQgdG8gcmVzdHJpY3QgYW4gaW50IHNldHRpbmdcblx0ICogdG8gYSBwYXJ0aWN1bGFyIHJhbmdlLlxuXHQgKi9cblx0bWluaW11bT86IG51bWJlcjtcblx0bWF4aW11bT86IG51bWJlcjtcblx0c3RlcD86IG51bWJlcjtcblxuXHQvKipcblx0ICogRWl0aGVyIHN0b3JlIHRoZSBzZXR0aW5nIGluIHRoZSBkYXRhYmFzZSBvciBpbiBzZXR0aW5ncy5qc29uLiBEZWZhdWx0cyB0byBkYXRhYmFzZS5cblx0ICovXG5cdHN0b3JhZ2U/OiBTZXR0aW5nU3RvcmFnZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXR0aW5nU2VjdGlvbiB7XG5cdGxhYmVsOiBzdHJpbmc7XG5cdGljb25OYW1lPzogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj86IHN0cmluZztcblx0bmFtZT86IHN0cmluZztcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERhdGEgQVBJIHR5cGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIEFuIGFycmF5IG9mIGF0IGxlYXN0IG9uZSBlbGVtZW50IGFuZCBhdCBtb3N0IHRocmVlIGVsZW1lbnRzLlxuICpcbiAqIC0gKipbMF0qKjogUmVzb3VyY2UgbmFtZSAoZWcuIFwibm90ZXNcIiwgXCJmb2xkZXJzXCIsIFwidGFnc1wiLCBldGMuKVxuICogLSAqKlsxXSoqOiAoT3B0aW9uYWwpIFJlc291cmNlIElELlxuICogLSAqKlsyXSoqOiAoT3B0aW9uYWwpIFJlc291cmNlIGxpbmsuXG4gKi9cbmV4cG9ydCB0eXBlIFBhdGggPSBzdHJpbmdbXTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbnRlbnQgU2NyaXB0IHR5cGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgdHlwZSBQb3N0TWVzc2FnZUhhbmRsZXIgPSAobWVzc2FnZTogYW55KT0+IFByb21pc2U8YW55PjtcblxuLyoqXG4gKiBXaGVuIGEgY29udGVudCBzY3JpcHQgaXMgaW5pdGlhbGlzZWQsIGl0IHJlY2VpdmVzIGEgYGNvbnRleHRgIG9iamVjdC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb250ZW50U2NyaXB0Q29udGV4dCB7XG5cdC8qKlxuXHQgKiBUaGUgcGx1Z2luIElEIHRoYXQgcmVnaXN0ZXJlZCB0aGlzIGNvbnRlbnQgc2NyaXB0XG5cdCAqL1xuXHRwbHVnaW5JZDogc3RyaW5nO1xuXG5cdC8qKlxuXHQgKiBUaGUgY29udGVudCBzY3JpcHQgSUQsIHdoaWNoIG1heSBiZSBuZWNlc3NhcnkgdG8gcG9zdCBtZXNzYWdlc1xuXHQgKi9cblx0Y29udGVudFNjcmlwdElkOiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIENhbiBiZSB1c2VkIGJ5IENvZGVNaXJyb3IgY29udGVudCBzY3JpcHRzIHRvIHBvc3QgYSBtZXNzYWdlIHRvIHRoZSBwbHVnaW5cblx0ICovXG5cdHBvc3RNZXNzYWdlOiBQb3N0TWVzc2FnZUhhbmRsZXI7XG59XG5cbmV4cG9ydCBlbnVtIENvbnRlbnRTY3JpcHRUeXBlIHtcblx0LyoqXG5cdCAqIFJlZ2lzdGVycyBhIG5ldyBNYXJrZG93bi1JdCBwbHVnaW4sIHdoaWNoIHNob3VsZCBmb2xsb3cgdGhlIHRlbXBsYXRlXG5cdCAqIGJlbG93LlxuXHQgKlxuXHQgKiBgYGBqYXZhc2NyaXB0XG5cdCAqIG1vZHVsZS5leHBvcnRzID0ge1xuXHQgKiAgICAgZGVmYXVsdDogZnVuY3Rpb24oY29udGV4dCkge1xuXHQgKiAgICAgICAgIHJldHVybiB7XG5cdCAqICAgICAgICAgICAgIHBsdWdpbjogZnVuY3Rpb24obWFya2Rvd25JdCwgb3B0aW9ucykge1xuXHQgKiAgICAgICAgICAgICAgICAgLy8gLi4uXG5cdCAqICAgICAgICAgICAgIH0sXG5cdCAqICAgICAgICAgICAgIGFzc2V0czoge1xuXHQgKiAgICAgICAgICAgICAgICAgLy8gLi4uXG5cdCAqICAgICAgICAgICAgIH0sXG5cdCAqICAgICAgICAgfVxuXHQgKiAgICAgfVxuXHQgKiB9XG5cdCAqIGBgYFxuXHQgKiBTZWUgW3RoZVxuXHQgKiBkZW1vXShodHRwczovL2dpdGh1Yi5jb20vbGF1cmVudDIyL2pvcGxpbi90cmVlL2Rldi9wYWNrYWdlcy9hcHAtY2xpL3Rlc3RzL3N1cHBvcnQvcGx1Z2lucy9jb250ZW50X3NjcmlwdClcblx0ICogZm9yIGEgc2ltcGxlIE1hcmtkb3duLWl0IHBsdWdpbiBleGFtcGxlLlxuXHQgKlxuXHQgKiAjIyBFeHBvcnRlZCBtZW1iZXJzXG5cdCAqXG5cdCAqIC0gVGhlIGBjb250ZXh0YCBhcmd1bWVudCBpcyBjdXJyZW50bHkgdW51c2VkIGJ1dCBjb3VsZCBiZSB1c2VkIGxhdGVyIG9uXG5cdCAqICAgdG8gcHJvdmlkZSBhY2Nlc3MgdG8geW91ciBvd24gcGx1Z2luIHNvIHRoYXQgdGhlIGNvbnRlbnQgc2NyaXB0IGFuZFxuXHQgKiAgIHBsdWdpbiBjYW4gY29tbXVuaWNhdGUuXG5cdCAqXG5cdCAqIC0gVGhlICoqcmVxdWlyZWQqKiBgcGx1Z2luYCBrZXkgaXMgdGhlIGFjdHVhbCBNYXJrZG93bi1JdCBwbHVnaW4gLSBjaGVja1xuXHQgKiAgIHRoZSBbb2ZmaWNpYWwgZG9jXShodHRwczovL2dpdGh1Yi5jb20vbWFya2Rvd24taXQvbWFya2Rvd24taXQpIGZvciBtb3JlXG5cdCAqICAgaW5mb3JtYXRpb24uIFRoZSBgb3B0aW9uc2AgcGFyYW1ldGVyIGlzIG9mIHR5cGVcblx0ICogICBbUnVsZU9wdGlvbnNdKGh0dHBzOi8vZ2l0aHViLmNvbS9sYXVyZW50MjIvam9wbGluL2Jsb2IvZGV2L3BhY2thZ2VzL3JlbmRlcmVyL01kVG9IdG1sLnRzKSxcblx0ICogICB3aGljaCBjb250YWlucyBhIG51bWJlciBvZiBvcHRpb25zLCBtb3N0bHkgdXNlZnVsIGZvciBKb3BsaW4ncyBpbnRlcm5hbFxuXHQgKiAgIGNvZGUuXG5cdCAqXG5cdCAqIC0gVXNpbmcgdGhlICoqb3B0aW9uYWwqKiBgYXNzZXRzYCBrZXkgeW91IG1heSBzcGVjaWZ5IGFzc2V0cyBzdWNoIGFzIEpTXG5cdCAqICAgb3IgQ1NTIHRoYXQgc2hvdWxkIGJlIGxvYWRlZCBpbiB0aGUgcmVuZGVyZWQgSFRNTCBkb2N1bWVudC4gQ2hlY2sgZm9yXG5cdCAqICAgZXhhbXBsZSB0aGUgSm9wbGluIFtNZXJtYWlkXG5cdCAqICAgcGx1Z2luXShodHRwczovL2dpdGh1Yi5jb20vbGF1cmVudDIyL2pvcGxpbi9ibG9iL2Rldi9wYWNrYWdlcy9yZW5kZXJlci9NZFRvSHRtbC9ydWxlcy9tZXJtYWlkLnRzKVxuXHQgKiAgIHRvIHNlZSBob3cgdGhlIGRhdGEgc2hvdWxkIGJlIHN0cnVjdHVyZWQuXG5cdCAqXG5cdCAqICMjIFBvc3RpbmcgbWVzc2FnZXMgZnJvbSB0aGUgY29udGVudCBzY3JpcHQgdG8geW91ciBwbHVnaW5cblx0ICpcblx0ICogVGhlIGFwcGxpY2F0aW9uIHByb3ZpZGVzIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb24gdG8gYWxsb3cgZXhlY3V0aW5nXG5cdCAqIGNvbW1hbmRzIGZyb20gdGhlIHJlbmRlcmVkIEhUTUwgY29kZTpcblx0ICpcblx0ICogYGBgamF2YXNjcmlwdFxuXHQgKiBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdlYnZpZXdBcGkucG9zdE1lc3NhZ2UoY29udGVudFNjcmlwdElkLCBtZXNzYWdlKTtcblx0ICogYGBgXG5cdCAqXG5cdCAqIC0gYGNvbnRlbnRTY3JpcHRJZGAgaXMgdGhlIElEIHlvdSd2ZSBkZWZpbmVkIHdoZW4geW91IHJlZ2lzdGVyZWQgdGhlXG5cdCAqICAgY29udGVudCBzY3JpcHQuIFlvdSBjYW4gcmV0cmlldmUgaXQgZnJvbSB0aGVcblx0ICogICB7QGxpbmsgQ29udGVudFNjcmlwdENvbnRleHQgfCBjb250ZXh0fS5cblx0ICogLSBgbWVzc2FnZWAgY2FuIGJlIGFueSBiYXNpYyBKYXZhU2NyaXB0IHR5cGUgKG51bWJlciwgc3RyaW5nLCBwbGFpblxuXHQgKiAgIG9iamVjdCksIGJ1dCBpdCBjYW5ub3QgYmUgYSBmdW5jdGlvbiBvciBjbGFzcyBpbnN0YW5jZS5cblx0ICpcblx0ICogV2hlbiB5b3UgcG9zdCBhIG1lc3NhZ2UsIHRoZSBwbHVnaW4gY2FuIHNlbmQgYmFjayBhIGByZXNwb25zZWAgdGh1c1xuXHQgKiBhbGxvd2luZyB0d28td2F5IGNvbW11bmljYXRpb246XG5cdCAqXG5cdCAqIGBgYGphdmFzY3JpcHRcblx0ICogYXdhaXQgam9wbGluLmNvbnRlbnRTY3JpcHRzLm9uTWVzc2FnZShjb250ZW50U2NyaXB0SWQsIChtZXNzYWdlKSA9PiB7XG5cdCAqICAgICAvLyBQcm9jZXNzIG1lc3NhZ2Vcblx0ICogICAgIHJldHVybiByZXNwb25zZTsgLy8gQ2FuIGJlIGFueSBvYmplY3QsIHN0cmluZyBvciBudW1iZXJcblx0ICogfSk7XG5cdCAqIGBgYFxuXHQgKlxuXHQgKiBTZWUge0BsaW5rIEpvcGxpbkNvbnRlbnRTY3JpcHRzLm9uTWVzc2FnZX0gZm9yIG1vcmUgZGV0YWlscywgYXMgd2VsbCBhc1xuXHQgKiB0aGUgW3Bvc3RNZXNzYWdlXG5cdCAqIGRlbW9dKGh0dHBzOi8vZ2l0aHViLmNvbS9sYXVyZW50MjIvam9wbGluL3RyZWUvZGV2L3BhY2thZ2VzL2FwcC1jbGkvdGVzdHMvc3VwcG9ydC9wbHVnaW5zL3Bvc3RfbWVzc2FnZXMpLlxuXHQgKlxuXHQgKiAjIyBSZWdpc3RlcmluZyBhbiBleGlzdGluZyBNYXJrZG93bi1pdCBwbHVnaW5cblx0ICpcblx0ICogVG8gaW5jbHVkZSBhIHJlZ3VsYXIgTWFya2Rvd24tSXQgcGx1Z2luLCB0aGF0IGRvZXNuJ3QgbWFrZSB1c2Ugb2YgYW55XG5cdCAqIEpvcGxpbi1zcGVjaWZpYyBmZWF0dXJlcywgeW91IHdvdWxkIHNpbXBseSBjcmVhdGUgYSBmaWxlIHN1Y2ggYXMgdGhpczpcblx0ICpcblx0ICogYGBgamF2YXNjcmlwdFxuXHQgKiBtb2R1bGUuZXhwb3J0cyA9IHtcblx0ICogICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKGNvbnRleHQpIHtcblx0ICogICAgICAgICByZXR1cm4ge1xuXHQgKiAgICAgICAgICAgICBwbHVnaW46IHJlcXVpcmUoJ21hcmtkb3duLWl0LXRvYy1kb25lLXJpZ2h0Jyk7XG5cdCAqICAgICAgICAgfVxuXHQgKiAgICAgfVxuXHQgKiB9XG5cdCAqIGBgYFxuXHQgKi9cblx0TWFya2Rvd25JdFBsdWdpbiA9ICdtYXJrZG93bkl0UGx1Z2luJyxcblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGEgbmV3IENvZGVNaXJyb3IgcGx1Z2luLCB3aGljaCBzaG91bGQgZm9sbG93IHRoZSB0ZW1wbGF0ZVxuXHQgKiBiZWxvdy5cblx0ICpcblx0ICogYGBgamF2YXNjcmlwdFxuXHQgKiBtb2R1bGUuZXhwb3J0cyA9IHtcblx0ICogICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKGNvbnRleHQpIHtcblx0ICogICAgICAgICByZXR1cm4ge1xuXHQgKiAgICAgICAgICAgICBwbHVnaW46IGZ1bmN0aW9uKENvZGVNaXJyb3IpIHtcblx0ICogICAgICAgICAgICAgICAgIC8vIC4uLlxuXHQgKiAgICAgICAgICAgICB9LFxuXHQgKiAgICAgICAgICAgICBjb2RlTWlycm9yUmVzb3VyY2VzOiBbXSxcblx0ICogICAgICAgICAgICAgY29kZU1pcnJvck9wdGlvbnM6IHtcblx0ICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gLi4uXG5cdCAqICAgICAgICAgICAgICAgICAgICAgICB9LFxuXHQgKiAgICAgICAgICAgICBhc3NldHM6IHtcblx0ICogICAgICAgICAgICAgICAgIC8vIC4uLlxuXHQgKiAgICAgICAgICAgICB9LFxuXHQgKiAgICAgICAgIH1cblx0ICogICAgIH1cblx0ICogfVxuXHQgKiBgYGBcblx0ICpcblx0ICogLSBUaGUgYGNvbnRleHRgIGFyZ3VtZW50IGlzIGN1cnJlbnRseSB1bnVzZWQgYnV0IGNvdWxkIGJlIHVzZWQgbGF0ZXIgb25cblx0ICogICB0byBwcm92aWRlIGFjY2VzcyB0byB5b3VyIG93biBwbHVnaW4gc28gdGhhdCB0aGUgY29udGVudCBzY3JpcHQgYW5kXG5cdCAqICAgcGx1Z2luIGNhbiBjb21tdW5pY2F0ZS5cblx0ICpcblx0ICogLSBUaGUgYHBsdWdpbmAga2V5IGlzIHlvdXIgQ29kZU1pcnJvciBwbHVnaW4uIFRoaXMgaXMgd2hlcmUgeW91IGNhblxuXHQgKiAgIHJlZ2lzdGVyIG5ldyBjb21tYW5kcyB3aXRoIENvZGVNaXJyb3Igb3IgaW50ZXJhY3Qgd2l0aCB0aGUgQ29kZU1pcnJvclxuXHQgKiAgIGluc3RhbmNlIGFzIG5lZWRlZC5cblx0ICpcblx0ICogLSBUaGUgYGNvZGVNaXJyb3JSZXNvdXJjZXNgIGtleSBpcyBhbiBhcnJheSBvZiBDb2RlTWlycm9yIHJlc291cmNlcyB0aGF0XG5cdCAqICAgd2lsbCBiZSBsb2FkZWQgYW5kIGF0dGFjaGVkIHRvIHRoZSBDb2RlTWlycm9yIG1vZHVsZS4gVGhlc2UgYXJlIG1hZGUgdXBcblx0ICogICBvZiBhZGRvbnMsIGtleW1hcHMsIGFuZCBtb2Rlcy4gRm9yIGV4YW1wbGUsIGZvciBhIHBsdWdpbiB0aGF0IHdhbnQncyB0b1xuXHQgKiAgIGVuYWJsZSBjbG9qdXJlIGhpZ2hsaWdodGluZyBpbiBjb2RlIGJsb2Nrcy4gYGNvZGVNaXJyb3JSZXNvdXJjZXNgIHdvdWxkXG5cdCAqICAgYmUgc2V0IHRvIGBbJ21vZGUvY2xvanVyZS9jbG9qdXJlJ11gLlxuXHQgKlxuXHQgKiAtIFRoZSBgY29kZU1pcnJvck9wdGlvbnNgIGtleSBjb250YWlucyBhbGwgdGhlXG5cdCAqICAgW0NvZGVNaXJyb3JdKGh0dHBzOi8vY29kZW1pcnJvci5uZXQvZG9jL21hbnVhbC5odG1sI2NvbmZpZykgb3B0aW9uc1xuXHQgKiAgIHRoYXQgd2lsbCBiZSBzZXQgb3IgY2hhbmdlZCBieSB0aGlzIHBsdWdpbi4gTmV3IG9wdGlvbnMgY2FuIGFsc2UgYmVcblx0ICogICBkZWNsYXJlZCB2aWFcblx0ICogICBbYENvZGVNaXJyb3IuZGVmaW5lT3B0aW9uYF0oaHR0cHM6Ly9jb2RlbWlycm9yLm5ldC9kb2MvbWFudWFsLmh0bWwjZGVmaW5lT3B0aW9uKSxcblx0ICogICBhbmQgdGhlbiBoYXZlIHRoZWlyIHZhbHVlIHNldCBoZXJlLiBGb3IgZXhhbXBsZSwgYSBwbHVnaW4gdGhhdCBlbmFibGVzXG5cdCAqICAgbGluZSBudW1iZXJzIHdvdWxkIHNldCBgY29kZU1pcnJvck9wdGlvbnNgIHRvIGB7J2xpbmVOdW1iZXJzJzogdHJ1ZX1gLlxuXHQgKlxuXHQgKiAtIFVzaW5nIHRoZSAqKm9wdGlvbmFsKiogYGFzc2V0c2Aga2V5IHlvdSBtYXkgc3BlY2lmeSAqKm9ubHkqKiBDU1MgYXNzZXRzXG5cdCAqICAgdGhhdCBzaG91bGQgYmUgbG9hZGVkIGluIHRoZSByZW5kZXJlZCBIVE1MIGRvY3VtZW50LiBDaGVjayBmb3IgZXhhbXBsZVxuXHQgKiAgIHRoZSBKb3BsaW4gW01lcm1haWRcblx0ICogICBwbHVnaW5dKGh0dHBzOi8vZ2l0aHViLmNvbS9sYXVyZW50MjIvam9wbGluL2Jsb2IvZGV2L3BhY2thZ2VzL3JlbmRlcmVyL01kVG9IdG1sL3J1bGVzL21lcm1haWQudHMpXG5cdCAqICAgdG8gc2VlIGhvdyB0aGUgZGF0YSBzaG91bGQgYmUgc3RydWN0dXJlZC5cblx0ICpcblx0ICogT25lIG9mIHRoZSBgcGx1Z2luYCwgYGNvZGVNaXJyb3JSZXNvdXJjZXNgLCBvciBgY29kZU1pcnJvck9wdGlvbnNgIGtleXNcblx0ICogbXVzdCBiZSBwcm92aWRlZCBmb3IgdGhlIHBsdWdpbiB0byBiZSB2YWxpZC4gSGF2aW5nIG11bHRpcGxlIG9yIGFsbFxuXHQgKiBwcm92aWRlZCBpcyBhbHNvIG9rYXkuXG5cdCAqXG5cdCAqIFNlZSBhbHNvIHRoZSBbZGVtb1xuXHQgKiBwbHVnaW5dKGh0dHBzOi8vZ2l0aHViLmNvbS9sYXVyZW50MjIvam9wbGluL3RyZWUvZGV2L3BhY2thZ2VzL2FwcC1jbGkvdGVzdHMvc3VwcG9ydC9wbHVnaW5zL2NvZGVtaXJyb3JfY29udGVudF9zY3JpcHQpXG5cdCAqIGZvciBhbiBleGFtcGxlIG9mIGFsbCB0aGVzZSBrZXlzIGJlaW5nIHVzZWQgaW4gb25lIHBsdWdpbi5cblx0ICpcblx0ICogIyMgUG9zdGluZyBtZXNzYWdlcyBmcm9tIHRoZSBjb250ZW50IHNjcmlwdCB0byB5b3VyIHBsdWdpblxuXHQgKlxuXHQgKiBJbiBvcmRlciB0byBwb3N0IG1lc3NhZ2VzIHRvIHRoZSBwbHVnaW4sIHlvdSBjYW4gdXNlIHRoZSBwb3N0TWVzc2FnZVxuXHQgKiBmdW5jdGlvbiBwYXNzZWQgdG8gdGhlIHtAbGluayBDb250ZW50U2NyaXB0Q29udGV4dCB8IGNvbnRleHR9LlxuXHQgKlxuXHQgKiBgYGBqYXZhc2NyaXB0XG5cdCAqIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY29udGV4dC5wb3N0TWVzc2FnZSgnbWVzc2FnZUZyb21Db2RlTWlycm9yQ29udGVudFNjcmlwdCcpO1xuXHQgKiBgYGBcblx0ICpcblx0ICogV2hlbiB5b3UgcG9zdCBhIG1lc3NhZ2UsIHRoZSBwbHVnaW4gY2FuIHNlbmQgYmFjayBhIGByZXNwb25zZWAgdGh1c1xuXHQgKiBhbGxvd2luZyB0d28td2F5IGNvbW11bmljYXRpb246XG5cdCAqXG5cdCAqIGBgYGphdmFzY3JpcHRcblx0ICogYXdhaXQgam9wbGluLmNvbnRlbnRTY3JpcHRzLm9uTWVzc2FnZShjb250ZW50U2NyaXB0SWQsIChtZXNzYWdlKSA9PiB7XG5cdCAqICAgICAvLyBQcm9jZXNzIG1lc3NhZ2Vcblx0ICogICAgIHJldHVybiByZXNwb25zZTsgLy8gQ2FuIGJlIGFueSBvYmplY3QsIHN0cmluZyBvciBudW1iZXJcblx0ICogfSk7XG5cdCAqIGBgYFxuXHQgKlxuXHQgKiBTZWUge0BsaW5rIEpvcGxpbkNvbnRlbnRTY3JpcHRzLm9uTWVzc2FnZX0gZm9yIG1vcmUgZGV0YWlscywgYXMgd2VsbCBhc1xuXHQgKiB0aGUgW3Bvc3RNZXNzYWdlXG5cdCAqIGRlbW9dKGh0dHBzOi8vZ2l0aHViLmNvbS9sYXVyZW50MjIvam9wbGluL3RyZWUvZGV2L3BhY2thZ2VzL2FwcC1jbGkvdGVzdHMvc3VwcG9ydC9wbHVnaW5zL3Bvc3RfbWVzc2FnZXMpLlxuXHQgKlxuXHQgKi9cblx0Q29kZU1pcnJvclBsdWdpbiA9ICdjb2RlTWlycm9yUGx1Z2luJyxcbn1cbiIsImV4cG9ydCBlbnVtIFVJRXZlbnQge1xuICBOT1RFX1NFTEVDVEVEID0gXCJOT1RFX1NFTEVDVEVEXCIsXG4gIEdFVF9EQVRBID0gXCJHRVRfREFUQVwiLFxuICBHRVRfU0VUVElOR1MgPSAnR0VUX1NFVFRJTkdTJ1xufVxuXG5leHBvcnQgZW51bSBXZWJ2aWV3RXZlbnQge1xuICBBQ0NFUFRfTkVXX1BMVUdJTl9FVkVOVCA9IFwiQUNDRVBUX05FV19QTFVHSU5fRVZFTlRcIixcbiAgTk9URV9TRUxFQ1RFRCA9IFwiTk9URV9TRUxFQ1RFRFwiLFxuICBHRVRfREFUQSA9IFwiR0VUX0RBVEFcIixcbiAgR0VUX1NFVFRJTkdTID0gJ0dFVF9TRVRUSU5HUydcbn1cblxuZXhwb3J0IGVudW0gUGx1Z2luRXZlbnQge1xuICBOT1RFX1NFTEVDVEVEID0gXCJOT1RFX1NFTEVDVEVEXCIsXG4gIEZVTExfVVBEQVRFID0gXCJGVUxMX1VQREFURVwiLFxuICBQQVJUSUFMX1VQREFURSA9ICdQQVJUSUFMX1VQREFURScsXG4gIFNFVFRJTkdfVVBEQVRFRCA9ICdTRVRUSU5HX1VQREFURUQnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2ViVmlld01lc3NhZ2Uge1xuICBldmVudDogV2Vidmlld0V2ZW50O1xuICB2YWx1ZT86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXZWJ2aWV3Tm90ZVNlbGVjdGVkTWVzc2FnZSBleHRlbmRzIFdlYlZpZXdNZXNzYWdlIHtcbiAgbm90ZUlkczogc3RyaW5nW10sXG4gIGN1cnJlbnQ6IHN0cmluZ1tdLFxuICBvcGVuTm90ZTogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBsdWdpbk1lc3NhZ2Uge1xuICBldmVudDogUGx1Z2luRXZlbnQ7XG4gIHZhbHVlPzogYW55O1xufSIsImV4cG9ydCB0eXBlIElEID0gc3RyaW5nO1xuXG5leHBvcnQgY29uc3QgTE9DQUxfR1JBUEhfSUQgPSAnam9wbGluLWxvY2FsJyIsImltcG9ydCB7SUR9IGZyb20gJy4vZGVmaW5pdGlvbnMnXG5pbXBvcnQgTm9kZSBmcm9tICcuL25vZGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoIHtcbiAgICBub2RlczogTWFwPElELCBOb2RlPiA9IG5ldyBNYXAoKTtcbiAgICBpZDogSURcblxuICAgIGNvbnN0cnVjdG9yKGlkIDogSUQpIHsgXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICB9XG5cbiAgICBhZGROb2RlKG5vZGU6IE5vZGUpIHtcbiAgICAgICAgdGhpcy5ub2Rlcy5zZXQobm9kZS5pZCwgbm9kZSk7XG4gICAgICAgIG5vZGUuZ3JhcGhJZCA9IHRoaXMuaWQ7XG4gICAgfVxufSIsImltcG9ydCB7SUR9IGZyb20gJy4vZGVmaW5pdGlvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmsge1xuICAgIHNvdXJjZUlkOiBJRFxuICAgIHRhcmdldElkOiBJRFxuICAgIGxhYmVsPzogc3RyaW5nXG4gICAgdHlwZT86IHN0cmluZ1xuICAgIHBvc2l0aW9uPzogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3Ioc291cmNlSWQ6IHN0cmluZywgdGFyZ2V0SWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNvdXJjZUlkID0gc291cmNlSWQ7XG4gICAgICAgIHRoaXMudGFyZ2V0SWQgPSB0YXJnZXRJZDtcbiAgICB9XG59IiwiaW1wb3J0IHsgSUQgfSBmcm9tIFwiLi9kZWZpbml0aW9uc1wiO1xuaW1wb3J0IExpbmsgZnJvbSAnLi9saW5rJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZSB7XG4gICAgaWQ6IElEXG4gICAgbGFiZWw6IHN0cmluZztcbiAgICByZWw6IEFycmF5PExpbms+ID0gW11cbiAgICB0YWdzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoKTtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgZ3JhcGhJZDogSUQ7XG5cbiAgICBjb25zdHJ1Y3RvcihpZCA6IElEKSB7IFxuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgfVxufSIsImV4cG9ydCBlbnVtIFNldHRpbmdMYWJlbCB7XG4gIENPT0xET1dOX1RJQ0tTID0gXCJDT09MRE9XTl9USUNLU1wiLFxuICBDT09MRE9XTl9USU1FID0gXCJDT09MRE9XTl9USU1FXCIsXG4gIFdBUk1VUF9USUNLUyA9ICdXQVJNVVBfVElDS1MnLFxuICBGT05UX1NJWkUgPSAnRk9OVF9TSVpFJyxcbiAgUkVMQVRJVkVfRk9OVF9TSVpFID0gXCJSRUxBVElWRV9GT05UX1NJWkVcIlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNldHRpbmcge1xuICBrZXk6IFNldHRpbmdMYWJlbFxuICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nIHwgYm9vbGVhblxufSIsIi8qKlxuICogSm9wbGluIHBsdWdpbiBlbnRyeSBwb2ludC5cbiAqIEV2ZW50cyBhbmQgZGF0YSBhcmUgc2VyaWFsaXplZCBhbmQgc2VudCB0byB0aGUgd2Vidmlldy5cbiAqXG4gKiBTb21lIHByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgam9wbGluIEFQSSA6XG4gKiAtIFRhZ3MgdXBkYXRlcyBhcmUgbm90IHRyaWdnZXJpbmcgbm90ZSB1cGRhdGVzXG4gKiAtIE5vdGUgZGVsZXRpb24gYXJlIG5vdCB0cmlnZ2VyaW5nIGEgbm90ZSBkZWxldGVkIGV2ZW50LlxuICogLSBzb21lIGFjdGlvbnMgYXJlIG5vdCB0cmlnZ2VyaW5nIGV2ZW50cyBidXQgZG8gYWZmZWN0IHBsdWdpbnMgOlxuICogZm9yIGV4YW1wbGUsIGdvaW5nIHRvIHNldHRpbmdzIHNjcmVlbiBhbmQgYmFjayB3aWxsIG5vdCByZXN0b3JlIHRoZSBwbHVnaW4gc3RhdGUuXG4gKi9cblxuaW1wb3J0IGpvcGxpbiBmcm9tIFwiYXBpXCI7XG5pbXBvcnQgSm9wbGluRGF0YU1hbmFnZXIgZnJvbSBcIi4vam9wbGluL2pvcGxpbi1kYXRhLW1hbmFnZXJcIjtcbmltcG9ydCB7XG4gIFBsdWdpbkV2ZW50LFxuICBQbHVnaW5NZXNzYWdlLFxuICBXZWJ2aWV3RXZlbnQsXG4gIFdlYlZpZXdNZXNzYWdlLFxuICBXZWJ2aWV3Tm90ZVNlbGVjdGVkTWVzc2FnZSxcbn0gZnJvbSBcIi4vY29tbW9uL21lc3NhZ2VcIjtcbmltcG9ydCBHcmFwaCBmcm9tIFwiLi9jb3JlL2dyYXBoXCI7XG5pbXBvcnQgeyBMT0NBTF9HUkFQSF9JRCB9IGZyb20gXCIuL2NvcmUvZGVmaW5pdGlvbnNcIjtcbmltcG9ydCB7IHJlZ2lzdGVyU2V0dGluZ3MsIHBsdWdpblNldHRpbmdzIH0gZnJvbSBcIi4vam9wbGluL2pvcGxpbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgVG9vbGJhckJ1dHRvbkxvY2F0aW9uIH0gZnJvbSBcImFwaS90eXBlc1wiO1xuXG5jb25zdCBkYXRhTWFuYWdlciA9IEpvcGxpbkRhdGFNYW5hZ2VyLmluc3RhbmNlKCk7XG5cbmxldCBwb2xsUmVzcG9uc2UgPSBudWxsO1xubGV0IHdlYnZpZXdOb3RpZmljYXRpb25zID0gW107XG5cbi8vd2Ugc3RvcmUgYSBncmFwaCBpbiB0aGUgcGx1Z2luIHByb2Nlc3MgdG8gbWFuYWdlIHJlcGVhdGVkIG5vdGUgdXBkYXRlcy5cbmNvbnN0IGdyYXBoSWQgPSBMT0NBTF9HUkFQSF9JRDtcbmNvbnN0IGdyYXBoID0gbmV3IEdyYXBoKGdyYXBoSWQpO1xuXG5hc3luYyBmdW5jdGlvbiBub3RpZnlXZWJ2aWV3KG1zZzogUGx1Z2luTWVzc2FnZSkge1xuICB3ZWJ2aWV3Tm90aWZpY2F0aW9ucy5wdXNoKG1zZyk7XG4gIHNlbmRQbHVnaW5NZXNzYWdlKCk7XG59XG5cbi8vd2VidmlldyByZWFkeSBhbmQgcGx1Z2luIGhhcyBtZXNzYWdlcyB0byBwdXNoXG5hc3luYyBmdW5jdGlvbiBzZW5kUGx1Z2luTWVzc2FnZSgpIHtcbiAgaWYgKHBvbGxSZXNwb25zZSAmJiB3ZWJ2aWV3Tm90aWZpY2F0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgbGV0IG5vdGlmaWNhdGlvbiA9IHdlYnZpZXdOb3RpZmljYXRpb25zLnNoaWZ0KCk7XG4gICAgcG9sbFJlc3BvbnNlKG5vdGlmaWNhdGlvbik7XG4gICAgcG9sbFJlc3BvbnNlID0gdW5kZWZpbmVkO1xuICB9XG59XG5cbmpvcGxpbi5wbHVnaW5zLnJlZ2lzdGVyKHtcbiAgb25TdGFydDogYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIFxuICAgIGNvbnN0IHBhbmVsID0gYXdhaXQgam9wbGluLnZpZXdzLnBhbmVscy5jcmVhdGUoXCJncmFwaFwiKTtcbiAgICBhd2FpdCBqb3BsaW4udmlld3MucGFuZWxzLnNldEh0bWwoXG4gICAgICBwYW5lbCxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz0ncGFuZWxzJz5cbiAgICAgICAgICA8ZGl2IGlkPSdncmFwaCcgY2xhc3M9J3BhbmVsJz48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGlkPSdjb250cm9scycgY2xhc3M9J3BhbmVsJz48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblx0XHRcdGBcbiAgICApO1xuICAgIGpvcGxpbi52aWV3cy5wYW5lbHMuYWRkU2NyaXB0KHBhbmVsLCBcIi4vam9wbGluL3dlYnZpZXcvd2Vidmlldy5qc1wiKTtcbiAgICBqb3BsaW4udmlld3MucGFuZWxzLmFkZFNjcmlwdChwYW5lbCwgXCIuL3VpL2dyYXBoLXVpLmNzc1wiKTtcbiAgICBqb3BsaW4udmlld3MucGFuZWxzLmFkZFNjcmlwdChwYW5lbCwgXCIuL3VpL2NvbnRyb2wtcGFuZWxzL3RhZ3MuY3NzXCIpO1xuICAgIGpvcGxpbi52aWV3cy5wYW5lbHMuYWRkU2NyaXB0KHBhbmVsLCBcIi4vdWkvY29udHJvbC1wYW5lbHMvY29udHJvbC1wYW5lbC5jc3NcIik7XG4gICAgXG4gICAgYXdhaXQgam9wbGluLmNvbW1hbmRzLnJlZ2lzdGVyKHtcbiAgICAgIG5hbWU6ICdzaG93R3JhcGgnLFxuICAgICAgbGFiZWw6ICdTaG93L0hpZGUgR3JhcGgnLFxuICAgICAgaWNvbk5hbWU6ICdmYXMgZmEtcHJvamVjdC1kaWFncmFtJyxcbiAgICAgIGV4ZWN1dGU6IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gYXdhaXQgam9wbGluLnZpZXdzLnBhbmVscy52aXNpYmxlKHBhbmVsKTtcbiAgICAgICAgam9wbGluLnZpZXdzLnBhbmVscy5zaG93KHBhbmVsLCAhaXNWaXNpYmxlKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgYXdhaXQgam9wbGluLnZpZXdzLnRvb2xiYXJCdXR0b25zLmNyZWF0ZSgnc2hvd0dyYXBoJywgJ3Nob3dHcmFwaCcsIFRvb2xiYXJCdXR0b25Mb2NhdGlvbi5Ob3RlVG9vbGJhcik7XG5cbiAgICBhd2FpdCByZWdpc3RlclNldHRpbmdzKCk7XG5cbiAgICBqb3BsaW4udmlld3MucGFuZWxzLm9uTWVzc2FnZShwYW5lbCwgYXN5bmMgKG1lc3NhZ2U6IFdlYlZpZXdNZXNzYWdlKSA9PiB7XG4gICAgICBzd2l0Y2ggKG1lc3NhZ2UuZXZlbnQpIHtcbiAgICAgICAgY2FzZSBXZWJ2aWV3RXZlbnQuQUNDRVBUX05FV19QTFVHSU5fRVZFTlQ6IHtcbiAgICAgICAgICAvLyB1aSBpcyByZWFkeSBmb3IgbmV3IHVwZGF0ZXNcbiAgICAgICAgICBsZXQgcCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBwb2xsUmVzcG9uc2UgPSByZXNvbHZlO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNlbmRQbHVnaW5NZXNzYWdlKCk7XG4gICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBXZWJ2aWV3RXZlbnQuTk9URV9TRUxFQ1RFRDoge1xuICAgICAgICAgIGNvbnN0IG1zZyA9IG1lc3NhZ2UgYXMgV2Vidmlld05vdGVTZWxlY3RlZE1lc3NhZ2U7XG4gICAgICAgICAgaWYgKG1zZy52YWx1ZT8ub3Blbk5vdGVJZCkge1xuICAgICAgICAgICAgam9wbGluLmNvbW1hbmRzLmV4ZWN1dGUoXCJvcGVuTm90ZVwiLCBtc2cudmFsdWUub3Blbk5vdGVJZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgV2Vidmlld0V2ZW50LkdFVF9EQVRBOiB7XG4gICAgICAgICAgZ3JhcGgubm9kZXMgPSBhd2FpdCBkYXRhTWFuYWdlci5nZXRBbGxOb2RlcygpO1xuICAgICAgICAgIG5vdGlmeVdlYnZpZXcoeyBldmVudDogUGx1Z2luRXZlbnQuRlVMTF9VUERBVEUsIHZhbHVlOiBncmFwaC5ub2RlcyB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFdlYnZpZXdFdmVudC5HRVRfU0VUVElOR1M6IHtcbiAgICAgICAgICAvL2NvbGxlY3Qgc2V0dGluZ3MgZnJvbSBqb3BsaW5cbiAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHBsdWdpblNldHRpbmdzKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGpvcGxpbi5zZXR0aW5ncy52YWx1ZShrZXkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgLy8gd2UgdXNlIHNldHRpbmdzJyBsYWJlbHMgcmF0aGVyIHRoYW4ga2V5cyB0byBkZWNvdXBsZSB1aSBmcm9tIGpvcGxpblxuICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gT2JqZWN0LnZhbHVlcyhwbHVnaW5TZXR0aW5ncykubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IGtleTogdmFsdWUubGFiZWwsIHZhbHVlOiB2YWx1ZXNbaW5kZXhdIH07XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBub3RpZnlXZWJ2aWV3KHsgZXZlbnQ6IFBsdWdpbkV2ZW50LlNFVFRJTkdfVVBEQVRFRCwgdmFsdWU6IHNldHRpbmdzIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvL25vdGUgc2VsZWN0ZWQgaW4gdGhlIGVkaXRvclxuICAgIGpvcGxpbi53b3Jrc3BhY2Uub25Ob3RlU2VsZWN0aW9uQ2hhbmdlKGFzeW5jIChldmVudDogYW55KSA9PiB7XG4gICAgICBsZXQgbm90ZUlkcyA9IGV2ZW50LnZhbHVlO1xuXG4gICAgICAvL1RPRE8gQ2hhbmdlIHdoZW4gSm9wbGluIEFQSSBpcyBmaXhlZC5cbiAgICAgIC8vZGVsZXRpb24gYXJlIG5vdCBub3RpZmllZCB2aWEgdGhlIGFwaSBidXQgdHJpZ2dlciBhIG5vdGUgcmVzZWxlY3Qgd2hlbiBoYXBwZW5pbmcgdGhyb3VnaCBlZGl0aW5nXG4gICAgICAvL3NvIHdlIHRyaWdnZXIgYSBmdWxsIHJlZnJlc2ggZWFjaCB0aW1lLlxuICAgICAgLy90aGlzIGlzIG5vdCBncmVhdCBidXQgYSB0ZW1wb3Jhcnkgd29ya2Fyb3VuZC5cbiAgICAgIGdyYXBoLm5vZGVzID0gYXdhaXQgZGF0YU1hbmFnZXIuZ2V0QWxsTm9kZXMoKTtcbiAgICAgIG5vdGlmeVdlYnZpZXcoeyBldmVudDogUGx1Z2luRXZlbnQuRlVMTF9VUERBVEUsIHZhbHVlOiBncmFwaC5ub2RlcyB9KTtcblxuICAgICAgbm90aWZ5V2Vidmlldyh7IGV2ZW50OiBQbHVnaW5FdmVudC5OT1RFX1NFTEVDVEVELCB2YWx1ZTogbm90ZUlkcyB9KTtcbiAgICB9KTtcblxuICAgIGpvcGxpbi53b3Jrc3BhY2Uub25Ob3RlQ2hhbmdlKGFzeW5jIChldmVudDogYW55KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuZXZlbnQgPT0gMSkge1xuICAgICAgICBjb25zdCBub2RlID0gYXdhaXQgZGF0YU1hbmFnZXIuZ2V0Tm9kZShldmVudC5pZCk7XG4gICAgICAgIGdyYXBoLm5vZGVzLnNldChub2RlLmlkLCBub2RlKTtcbiAgICAgICAgbm90aWZ5V2Vidmlldyh7XG4gICAgICAgICAgZXZlbnQ6IFBsdWdpbkV2ZW50LlBBUlRJQUxfVVBEQVRFLFxuICAgICAgICAgIHZhbHVlOiB7IGdyYXBoSWQ6IGdyYXBoSWQsIGFkZDogW25vZGVdIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChldmVudC5ldmVudCA9PSAyKSB7XG4gICAgICAgIC8vIHdoZW4gZWRpdGluZyBhIG5vdGUsIHRoZSBwbHVnaW4gZ2V0cyBub3RpZmllZCBhZnRlciBlYWNoIGtleXN0cm9rZSBzZXF1ZW5jZSxcbiAgICAgICAgLy8gYW5kIHdvdWxkIHRyaWdnZXIgY29uc3RhbnQgZ3JhcGggcmVmcmVzaC5cbiAgICAgICAgLy8gd2UgcHJldmVudCB0aGF0IGJlaGF2aW9yIGlmIHRoZSBtZXRhZGF0YSB3ZSB0cmFjayBhcmUgbm90IG1vZGlmaWVkLlxuICAgICAgICBjb25zdCBvbGQgPSBncmFwaC5ub2Rlcy5nZXQoZXZlbnQuaWQpO1xuICAgICAgICBjb25zdCBub2RlID0gYXdhaXQgZGF0YU1hbmFnZXIuZ2V0Tm9kZShldmVudC5pZCk7XG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShvbGQpID09PSBKU09OLnN0cmluZ2lmeShub2RlKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBncmFwaC5ub2Rlcy5zZXQobm9kZS5pZCwgbm9kZSk7XG4gICAgICAgIG5vdGlmeVdlYnZpZXcoe1xuICAgICAgICAgIGV2ZW50OiBQbHVnaW5FdmVudC5QQVJUSUFMX1VQREFURSxcbiAgICAgICAgICB2YWx1ZTogeyBncmFwaElkOiBncmFwaElkLCB1cGRhdGU6IFtub2RlXSB9LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQuZXZlbnQgPT0gMykge1xuICAgICAgICBncmFwaC5ub2Rlcy5kZWxldGUoZXZlbnQuaWQpO1xuICAgICAgICBub3RpZnlXZWJ2aWV3KHtcbiAgICAgICAgICBldmVudDogUGx1Z2luRXZlbnQuUEFSVElBTF9VUERBVEUsXG4gICAgICAgICAgdmFsdWU6IHsgZ3JhcGhJZDogZ3JhcGhJZCwgZGVsZXRlOiBbZXZlbnQuaWRdIH0sXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUaGlzIGlzIG5ldmVyIHRyaWdnZXJlZCBieSBKb3BsaW4uIEJ1ZyBpbiBqb3BsaW4gQVBJP1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYXdhaXQgam9wbGluLnNldHRpbmdzLm9uQ2hhbmdlKGFzeW5jIChldmVudDogYW55KSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgZXZlbnQua2V5cy5tYXAoKGtleTogc3RyaW5nKSA9PiBqb3BsaW4uc2V0dGluZ3MudmFsdWUoa2V5KSlcbiAgICAgICk7XG5cbiAgICAgIGxldCBrZXlzID0gZXZlbnQua2V5cy5tYXAoIChrZXkgOiBzdHJpbmcpID0+IHBsdWdpblNldHRpbmdzW2tleV0ubGFiZWwpO1xuXG4gICAgICBjb25zdCBzZXR0aW5ncyA9IGtleXMubWFwKChrZXk6IHN0cmluZywgaW5kZXggOiBudW1iZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIHsga2V5OiBrZXksIHZhbHVlOiB2YWx1ZXNbaW5kZXhdIH07XG4gICAgICB9KTtcbiAgICAgIG5vdGlmeVdlYnZpZXcoeyBldmVudDogUGx1Z2luRXZlbnQuU0VUVElOR19VUERBVEVELCB2YWx1ZTogc2V0dGluZ3MgfSk7XG4gICAgfSk7XG4gIH0sXG59KTtcbiIsImltcG9ydCBqb3BsaW4gZnJvbSAnYXBpJztcbmltcG9ydCBOb3RlLCB7IHBhcnNlSm9wbGluTm90ZSB9IGZyb20gXCIuL25vdGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBRdWVyeVBhcmFtcyB7XG4gICAgZmllbGRzPzogQXJyYXk8c3RyaW5nPixcbiAgICBvcmRlcl9kaXI/OiBzdHJpbmdcbiAgICBsaW1pdD86IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdGVRdWVyeVJlc3VsdHMge1xuICAgIHJlc3VsdHM6IEFycmF5PE5vdGU+LFxuICAgIGlkc05vdEZvdW5kPzogQXJyYXk8c3RyaW5nPixcbiAgICB0cnVuY2F0ZWQ/OiBib29sZWFuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpvcGxpbkRhdGFBcGkge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXBpXyA6IEpvcGxpbkRhdGFBcGk7XG5cbiAgICBzdGF0aWMgaW5zdGFuY2UoKSA6IEpvcGxpbkRhdGFBcGkge1xuICAgICAgICBpZighdGhpcy5hcGlfKSB7XG4gICAgICAgICAgICB0aGlzLmFwaV8gPSBuZXcgSm9wbGluRGF0YUFwaSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmFwaV87XG4gICAgfVxuXG4gICAgLy9xdWVyeVBhcmFtcyBmb2xsb3dzIGpvcGxpbiBxdWVyeSBmb3JtYXQgc28gd2UganVzdCBuZWVkIHRvIHJldHVybiBpdC5cbiAgICBwdWJsaWMgYnVpbGRRdWVyeVBhcmFtcyhxdWVyeVBhcmFtcyA6IFF1ZXJ5UGFyYW1zKSA6IGFueSB7XG4gICAgICAgIHJldHVybiBxdWVyeVBhcmFtcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U2VsZWN0ZWROb3RlKCkgOiBhbnkge1xuICAgICAgICByZXR1cm4gam9wbGluLndvcmtzcGFjZS5zZWxlY3RlZE5vdGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U2VsZWN0ZWROb3RlSWRzKCkgOiBQcm9taXNlPEFycmF5PHN0cmluZz4+IHtcbiAgICAgICAgcmV0dXJuIGpvcGxpbi53b3Jrc3BhY2Uuc2VsZWN0ZWROb3RlSWRzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IG5vdGVzIHNhdGlzZnlpbmcgdGhlIHF1ZXJ5LlxuICAgICAqIEBwYXJhbSBxdWVyeSA6IGN1c3RvbWl6ZSB3aGF0IGRhdGEgaXMgcmV0cmlldmVkLlxuICAgICAqIEBwYXJhbSBwYWdlU2l6ZSA6IG51bWJlciBvZiBub3RlcyByZXR1cm5lZCBpbiBvbmUgc3VicXVlcnkuXG4gICAgICogQHBhcmFtIG1heCA6IG1heCBudW1iZXIgb2Ygbm90ZXMuXG4gICAgICogQHJldHVybnMgYSB0dXBsZSA6IChub3RlcyA6IE1hcDxzdHJpbmcsIE5vdGU+LCB0cnVuY2F0ZWQgOiBib29sZWFuKVxuICAgICAqIG5vdGVzIDogYWxsIG5vdGVzIHNhdGlzZnlpbmcgdGhlIHF1ZXJ5IHVwIHRvIG1heE5vdGVcbiAgICAgKiB0cnVuY2F0ZWQgOiB0cnVlIGlmIHdlIGhhZCB0byBhcHBseSBhIGN1dG9mZlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBnZXROb3RlcyhxdWVyeTogYW55LCBtYXg6IG51bWJlciA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKSA6IFByb21pc2U8Tm90ZVF1ZXJ5UmVzdWx0cz4ge1xuICAgICAgICBcbiAgICAgICAgbGV0IGpvcGxpbk5vdGVzID0gW107XG4gICAgICAgIGxldCBwYWdlIDogYW55O1xuICAgICAgICBsZXQgcGFnZU51bSA9IDE7XG4gICAgICAgIGxldCBpc0xpbWl0UmVhY2hlZCA9ICgpID0+IGpvcGxpbk5vdGVzLmxlbmd0aCA+IG1heDtcbiAgICAgICAgbGV0IHRydW5jYXRlZCA9IGZhbHNlO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICBxdWVyeS5wYWdlID0gcGFnZU51bTtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYWdlID0gYXdhaXQgam9wbGluLmRhdGEuZ2V0KFsnbm90ZXMnXSwgcXVlcnkpO1xuICAgICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHsgcmVzdWx0czogW10sIHRydW5jYXRlZDp0cnVlIH07XG4gICAgICAgICAgfSBcblxuICAgICAgICAgIGpvcGxpbk5vdGVzLnB1c2goLi4ucGFnZS5pdGVtcyk7XG4gICAgICAgICAgcGFnZU51bSsrO1xuXG4gICAgICAgICAgaWYoaXNMaW1pdFJlYWNoZWQoKSkge1xuICAgICAgICAgICAgICB0cnVuY2F0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICB9XG5cbiAgICAgICAgfSB3aGlsZSAocGFnZS5oYXNfbW9yZSlcblxuICAgICAgICBpZihpc0xpbWl0UmVhY2hlZCgpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYE1heCBudW1iZXIgb2Ygbm90ZXMgcmVhY2hlZDogJHttYXh9LiBgICsgXG4gICAgICAgICAgICBgU29tZSBub3RlcyBtYXkgbm90IGJlIHZpc2libGUuYCk7XG4gICAgICAgICAgICBqb3BsaW5Ob3RlcyA9IGpvcGxpbk5vdGVzLnNsaWNlKDAsbWF4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vdGVzID0gYXdhaXQgUHJvbWlzZS5hbGwoam9wbGluTm90ZXMubWFwKCBhc3luYyAobm90ZSkgPT4gdGhpcy5idWlsZE5vdGUobm90ZSkpKTtcblxuICAgICAgICByZXR1cm4geyByZXN1bHRzOiBub3RlcywgdHJ1bmNhdGVkOiB0cnVuY2F0ZWQgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIG5vdGVzIHdpdGggZ2l2ZW4gaWRzLlxuICAgICAqIFRoaXMgbWV0aG9kIGNhbiBnZXQgc2xvdyBpZiB3ZSBoYXZlIHRvIHByb2Nlc3MgYSBsYXJnZSBudW1iZXIgb2YgaWRzIHNpbmNlIHRoZSBhcGkgYXV0aG9yaXplZCBvbmx5IHF1ZXJ5IGJ5IGlkIGF0IHRoZSB0aW1lLlxuICAgICAqIFRPRE8gYmVzdCB3b3VsZCBiZSB0byBhZGQgbWV0aG9kIHRvIGdldCBiYXRjaCBvZiBpZHMgdG8gW0pvcGxpbkRhdGFBUEldKGh0dHBzOi8vam9wbGluYXBwLm9yZy9hcGkvcmVmZXJlbmNlcy9yZXN0X2FwaS8pLlxuICAgICAqIEBwYXJhbSBpZHMgbGlzdCBvZiBub3RlIGlkcy5cbiAgICAgKiBAcGFyYW0gbWF4Q29uY3VycmVudFJlcXVlc3RzIG1heCBudW1iZXIgb2YgY29uY3VycmVudCByZXF1ZXN0cyB0byB0aGUgam9wbGluIEFQSS4gQ2FuIHdlIHVzZWZ1bCB3ZSByZXF1ZXN0aW5nIGxhcmdlIG51bWJlciBvZiBub3Rlcy5cbiAgICAgKiBAcmV0dXJucyBsaXN0IG9mIG5vdGVzLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBnZXROb3Rlc0J5SWRzKHF1ZXJ5IDogYW55LCBpZHM6IHN0cmluZ1tdLCBtYXhDb25jdXJyZW50UmVxdWVzdHM6IG51bWJlciA9IDEwKSA6IFByb21pc2U8Tm90ZVF1ZXJ5UmVzdWx0cz4ge1xuXG4gICAgICAgIGNvbnN0IGpvcGxpbk5vdGVzID0gW107XG4gICAgICAgIGNvbnN0IGlkc05vdEZvdW5kID0gW107XG4gICAgICAgIFxuICAgICAgICBsZXQgcHJvbWlzZXMgOiBQcm9taXNlPGFueT5bXTtcbiAgICAgICAgbGV0IHJlcXVlc3RzIDogc3RyaW5nW107XG4gICAgICAgIGxldCBzdGFydCA6IG51bWJlciwgZW5kOiBudW1iZXIsIGNodW5rIDogbnVtYmVyID0gbWF4Q29uY3VycmVudFJlcXVlc3RzO1xuICAgICAgICBcbiAgICAgICAgZm9yIChzdGFydCA9IDAsIGVuZCA9IGlkcy5sZW5ndGg7IHN0YXJ0IDwgZW5kOyBzdGFydCArPSBjaHVuaykge1xuICAgICAgICAgICAgcmVxdWVzdHMgPSBpZHMuc2xpY2Uoc3RhcnQsIHN0YXJ0ICsgY2h1bmspO1xuICAgICAgICAgICAgcHJvbWlzZXMgPSByZXF1ZXN0cy5tYXAoIGlkID0+XG4gICAgICAgICAgICAgICAgdGhpcy5nZXROb3RlKHF1ZXJ5LCBpZClcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzLm1hcCggYXN5bmMgKHAsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHAuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlkc05vdEZvdW5kLnB1c2gocmVxdWVzdHNbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBjb25zdCB2YWxpZFJlc3VsdHMgPSByZXN1bHRzLmZpbHRlcihyZXN1bHQgPT4gIShyZXN1bHQgPT0gdW5kZWZpbmVkKSk7XG4gICAgICAgICAgICBqb3BsaW5Ob3Rlcy5wdXNoKC4uLnZhbGlkUmVzdWx0cyk7ICBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlkc05vdEZvdW5kLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYGpvcGxpbiBkYXRhIGFwaSA6IG5vdCBmb3VuZCBlcnJvciBmb3IgOiAke2lkc05vdEZvdW5kfWApOyAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub3RlcyA9IGF3YWl0IFByb21pc2UuYWxsKGpvcGxpbk5vdGVzLm1hcCggYXN5bmMgKG5vdGUpID0+IHRoaXMuYnVpbGROb3RlKG5vdGUpKSk7XG5cbiAgICAgICAgcmV0dXJuIHtyZXN1bHRzOiBub3RlcywgaWRzTm90Rm91bmQ6IGlkc05vdEZvdW5kLCB0cnVuY2F0ZWQ6IGZhbHNlfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0Tm90ZShxdWVyeTogYW55LCBpZDogc3RyaW5nKSA6IFByb21pc2U8Tm90ZT4ge1xuICAgICAgICBjb25zdCBqb3BsaW5Ob3RlID0gYXdhaXQgam9wbGluLmRhdGEuZ2V0KFsnbm90ZXMnLCBpZF0sIHF1ZXJ5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGROb3RlKGpvcGxpbk5vdGUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgYnVpbGROb3RlKGpvcGxpbk5vdGU6IGFueSkgOiBQcm9taXNlPE5vdGU+IHtcbiAgICAgICAgY29uc3Qgbm90ZSA9IHBhcnNlSm9wbGluTm90ZShqb3BsaW5Ob3RlKTtcbiAgICAgICAgY29uc3QgdGFncyA9IGF3YWl0IGpvcGxpbi5kYXRhLmdldChbJ25vdGVzJywgam9wbGluTm90ZS5pZCwgJ3RhZ3MnXSk7XG4gICAgICAgIG5vdGUudGFncyA9IHRhZ3M/Lml0ZW1zID8gdGFncy5pdGVtcy5tYXAoKHRhZzogYW55KSA9PiB0YWcudGl0bGUpIDogW107XG4gICAgICAgIHJldHVybiBub3RlO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgSUQsIExPQ0FMX0dSQVBIX0lEIH0gZnJvbSBcIi4uL2NvcmUvZGVmaW5pdGlvbnNcIjtcbmltcG9ydCBOb2RlIGZyb20gXCIuLi9jb3JlL25vZGVcIjtcbmltcG9ydCBHcmFwaCBmcm9tIFwiLi4vY29yZS9ncmFwaFwiO1xuaW1wb3J0IE5vdGUsIHsgYnVpbGROb2RlRnJvbU5vdGUgfSBmcm9tIFwiLi9ub3RlXCI7XG5pbXBvcnQgSm9wbGluRGF0YUFwaSBmcm9tIFwiLi9qb3BsaW4tZGF0YS1hcGlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSm9wbGluRGF0YU1hbmFnZXIge1xuICBkYXRhQXBpXyA9IEpvcGxpbkRhdGFBcGkuaW5zdGFuY2UoKTtcbiAgbm9kZXMgPSBuZXcgTWFwPElELCBOb2RlPigpO1xuICBncmFwaHMgPSBuZXcgTWFwPElELCBHcmFwaD4oKTtcblxuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZV86IEpvcGxpbkRhdGFNYW5hZ2VyO1xuXG4gIHN0YXRpYyBpbnN0YW5jZSgpOiBKb3BsaW5EYXRhTWFuYWdlciB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlXykge1xuICAgICAgdGhpcy5pbnN0YW5jZV8gPSBuZXcgSm9wbGluRGF0YU1hbmFnZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VfO1xuICB9XG5cbiAgYXN5bmMgZ2V0QWxsTm9kZXMoKTogUHJvbWlzZTxNYXA8SUQsIE5vZGU+PiB7XG5cbiAgICBjb25zdCBub2RlczogTWFwPElELCBOb2RlPiA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBub3RlcyA9IChhd2FpdCB0aGlzLmNvbGxlY3RBbGxOb3RlcygpKS5ub3RlcztcblxuICAgIG5vdGVzLmZvckVhY2goKG5vdGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBidWlsZE5vZGVGcm9tTm90ZShub3RlKTtcbiAgICAgIG5vZGUuZ3JhcGhJZCA9IExPQ0FMX0dSQVBIX0lEO1xuICAgICAgbm9kZXMuc2V0KG5vZGUuaWQsIG5vZGUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgYXN5bmMgZ2V0Tm9kZShub3RlSWQ6IElEKTogUHJvbWlzZTxOb2RlPiB7XG4gICAgY29uc3Qgbm90ZSA9IGF3YWl0IHRoaXMuZGF0YUFwaV8uZ2V0Tm90ZSh0aGlzLmJ1aWxkTm90ZVF1ZXJ5UGFyYW1zKCksIG5vdGVJZCk7XG4gICAgY29uc3Qgbm9kZSA9IGJ1aWxkTm9kZUZyb21Ob3RlKG5vdGUpO1xuICAgIG5vZGUuZ3JhcGhJZCA9IExPQ0FMX0dSQVBIX0lEO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZE5vdGVRdWVyeVBhcmFtcygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhQXBpXy5idWlsZFF1ZXJ5UGFyYW1zKHtcbiAgICAgIGZpZWxkczogW1wiaWRcIiwgXCJwYXJlbnRfaWRcIiwgXCJ0aXRsZVwiLCBcImJvZHlcIl0sXG4gICAgICBvcmRlcl9kaXI6IFwiREVTQ1wiLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGEgZ3JhcGggdXAgdG8gQHBhcmFtIG1heERlZ3JlZSBmcm9tIHNvdXJjZSBub2RlIGFuZCB1cCB0byBhIEBwYXJhbSBtYXhOb3RlcyBjdXRvZmYuXG4gICAqIEJyZWFkdGgtZmlyc3QgaW1wbGVtZW50YXRpb24uXG4gICAqIEJhZCBsaW5rcyBhcmUgZGlzY2FyZGVkLCB1bnZpc2l0ZWQgbGlua3MgYXJlIGZsYWdnZWQuXG4gICAqIEBwYXJhbSBzb3VyY2VJZCBzdGFydGluZyBub3RlLlxuICAgKiBAcGFyYW0gbWF4RGVncmVlIG1heCBkZWdyZWUgb2Ygc2VwYXJhdGlvbiBmcm9tIHRoZSBzb3VyY2Ugbm90ZS5cbiAgICogQHBhcmFtIG1heE5vdGVzIGN1dG9mZlxuICAgKiBAcmV0dXJucyBhIGdyYXBoIG9mIG5vdGVzXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGNvbGxlY3ROb3Rlc0luUmFuZ2UoXG4gICAgc291cmNlSWQ6IHN0cmluZyxcbiAgICBtYXhEZWdyZWU6IG51bWJlcixcbiAgICBtYXhOb3RlczogbnVtYmVyID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbiAgKSB7XG4gICAgbGV0IHBlbmRpbmcgPSBbXTtcbiAgICBjb25zdCBub3RlcyA9IG5ldyBNYXA8c3RyaW5nLCBOb3RlPigpO1xuICAgIGNvbnN0IG1pc3NpbmdOb3RlcyA9IFtdO1xuICAgIGxldCBkZWdyZWUgPSAwO1xuICAgIGxldCB0cnVuY2F0ZWQgPSBmYWxzZTtcblxuICAgIHBlbmRpbmcucHVzaChzb3VyY2VJZCk7XG4gICAgZG8ge1xuICAgICAgLy8gZG8gbm90IGZldGNoIGRhdGEgYWxyZWFkeSBpbiB0aGUgZ3JhcGhcbiAgICAgIHBlbmRpbmcgPSBwZW5kaW5nLmZpbHRlcigoaWQpID0+ICFub3Rlcy5oYXMoaWQpKTtcblxuICAgICAgY29uc3QgeyByZXN1bHRzLCBpZHNOb3RGb3VuZCB9ID0gYXdhaXQgdGhpcy5kYXRhQXBpXy5nZXROb3Rlc0J5SWRzKFxuICAgICAgICB0aGlzLmJ1aWxkTm90ZVF1ZXJ5UGFyYW1zKCksXG4gICAgICAgIHBlbmRpbmdcbiAgICAgICk7XG4gICAgICBwZW5kaW5nID0gW107XG5cbiAgICAgIGZvciAobGV0IG5vdGUgb2YgcmVzdWx0cykge1xuICAgICAgICBub3RlLmRlZ3JlZSA9IGRlZ3JlZTsgLy8gdHJhY2sgZGlzdGFuY2UgZnJvbSBzb3VyY2VJZFxuICAgICAgICBpZiAoZGVncmVlID09IG1heERlZ3JlZSkge1xuICAgICAgICAgIG5vdGUudmlzaXRMaW5rcyA9IGZhbHNlOyAvLyBpdHMgbGlua3MgYXJlIG91dCBvZiBzY29wZSBhbmQgc2hvdWxkIG5vdCBiZSB2aXNpdGVkLlxuICAgICAgICAgIGlmIChub3RlLmxpbmtzLmxlbmd0aCAhPSAwKVxuICAgICAgICAgICAgY29uc29sZS53YXJuKGB1bnZpc2l0ZWQgbGlua3MgOiAke25vdGUubGlua3N9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBub3Rlcy5zZXQobm90ZS5pZCwgbm90ZSk7XG5cbiAgICAgICAgbm90ZS5saW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgICAgaWYgKCFub3Rlcy5oYXMobGluay50YXJnZXRJZCkpIHtcbiAgICAgICAgICAgIHBlbmRpbmcucHVzaChsaW5rKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChub3Rlcy5zaXplID4gbWF4Tm90ZXMpIHtcbiAgICAgICAgICB0cnVuY2F0ZWQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1pc3NpbmdOb3Rlcy5wdXNoKC4uLmlkc05vdEZvdW5kKTtcblxuICAgICAgZGVncmVlKys7XG4gICAgfSB3aGlsZSAocGVuZGluZy5sZW5ndGggPiAwICYmIGRlZ3JlZSA8PSBtYXhEZWdyZWUgJiYgIXRydW5jYXRlZCk7XG5cbiAgICB0aGlzLmRpc2NhcmRCYWRMaW5rcyhub3RlcywgbWlzc2luZ05vdGVzLCBkZWdyZWUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdGVzOiBBcnJheS5mcm9tKG5vdGVzLnZhbHVlcygpKSxcbiAgICAgIG1pc3NpbmdOb3RlczogbWlzc2luZ05vdGVzLFxuICAgICAgZGVncmVlOiBkZWdyZWUsXG4gICAgICB0cnVuY2F0ZWQ6IHRydW5jYXRlZCxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIHRoZSBmdWxsIG5vdGUgZ3JhcGggdXAgdG8gYSBjdXRvZmYuXG4gICAqIEBwYXJhbSBtYXhOb3RlcyBjdXRvZmZcbiAgICogQHJldHVybnMgYSBncmFwaCBvZiBub3Rlc1xuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBjb2xsZWN0QWxsTm90ZXMobWF4Tm90ZXM6IG51bWJlciA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKSB7XG4gICAgY29uc3Qgbm90ZXMgPSBuZXcgTWFwPHN0cmluZywgTm90ZT4oKTtcbiAgICBsZXQgeyByZXN1bHRzLCB0cnVuY2F0ZWQgfSA9IGF3YWl0IHRoaXMuZGF0YUFwaV8uZ2V0Tm90ZXMoXG4gICAgICB0aGlzLmJ1aWxkTm90ZVF1ZXJ5UGFyYW1zKCksXG4gICAgICBtYXhOb3Rlc1xuICAgICk7XG5cbiAgICByZXN1bHRzLmZvckVhY2goKG5vdGUpID0+IHtcbiAgICAgIG5vdGVzLnNldChub3RlLmlkLCBub3RlKTtcbiAgICB9KTtcblxuICAgIC8vIGlmIHRydW5jYXRlZCwgd2UgaGF2ZSByZWNlaXZlZCBzb21lIG5vZGVzIGFjY29yZGluZyB0byB0aGUgcXVlcnkgY3JpdGVyaWEuXG4gICAgLy8gV2UgY2Fubm90IGtub3cgZm9yIHN1cmUgaWYgd2UgaGF2ZSBiYWQgbGlua3Mgb3IgdW52aXNpdGVkIGxpbmtzIHNvIGtlZXAgdGhlbSBhcm91bmQuXG4gICAgaWYgKCF0cnVuY2F0ZWQpIHtcbiAgICAgIHRoaXMuZGlzY2FyZEJhZExpbmtzKG5vdGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBub3RlczogQXJyYXkuZnJvbShub3Rlcy52YWx1ZXMoKSksIHRydW5jYXRlZDogdHJ1bmNhdGVkIH07XG4gIH1cblxuICAvKipcbiAgICogRGlzY2FyZCBsaW5rcyB3aXRoIHRhcmdldHMgdGhhdCBkbyBub3QgZXhpc3QuXG4gICAqL1xuICBwcml2YXRlIGRpc2NhcmRCYWRMaW5rcyhcbiAgICBub3RlczogTWFwPHN0cmluZywgTm90ZT4sXG4gICAgaWRzTm90Rm91bmQ6IEFycmF5PHN0cmluZz4gPSBbXSxcbiAgICBtYXhEZWdyZWU6IG51bWJlciA9IEluZmluaXR5XG4gICkge1xuICAgIGxldCBiYWRMaW5rcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgbm90ZSBvZiBub3Rlcy52YWx1ZXMoKSkge1xuICAgICAgbGV0IGkgPSBub3RlLmxpbmtzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBsZXQgbGluayA9IG5vdGUubGlua3NbaV07XG5cbiAgICAgICAgaWYgKGlkc05vdEZvdW5kLmluY2x1ZGVzKGxpbmsudGFyZ2V0SWQpKSB7XG4gICAgICAgICAgLy8gZWl0aGVyIHdlIGhhdmUgYnVpbHQgYSBwYXJ0aWFsIGdyYXBoIGFuZCBiYWQgbGlua3MgaGF2ZSBiZWVuIGZsYWdnZWRcbiAgICAgICAgICBiYWRMaW5rcy5wdXNoKGxpbmspO1xuICAgICAgICAgIG5vdGUubGlua3Muc3BsaWNlKGksIDEpO1xuICAgICAgICB9IGVsc2UgaWYgKG5vdGUudmlzaXRMaW5rcyAmJiAhbm90ZXMuaGFzKGxpbmsudGFyZ2V0SWQpKSB7XG4gICAgICAgICAgLy8gb3Igd2UgaGF2ZSBidWlsdCB0aGUgZnVsbCBncmFwaCBhbmQgaXQgc2hvdWxkIGJlIGNvbnNpc3RlbnRcbiAgICAgICAgICBiYWRMaW5rcy5wdXNoKGxpbmspO1xuICAgICAgICAgIG5vdGUubGlua3Muc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGJhZExpbmtzLmxlbmd0aCAhPSAwKSB7XG4gICAgICBjb25zb2xlLndhcm4oYGJhZCBsaW5rcyA6IC4uLiAke2JhZExpbmtzfWApO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IGpvcGxpbiBmcm9tICdhcGknO1xuaW1wb3J0IHsgU2V0dGluZ0l0ZW1UeXBlIH0gZnJvbSAnYXBpL3R5cGVzJztcbmltcG9ydCB7IFNldHRpbmdMYWJlbCB9IGZyb20gJy4uL2NvcmUvc2V0dGluZ3MnO1xuXG5jb25zdCBzZWN0aW9uTmFtZSA9IFwiZ3JhcGhcIlxuXG5leHBvcnQgY29uc3QgcGx1Z2luU2V0dGluZ3MgPSB7XG4gIENPT0xET1dOX1RJQ0tTOiB7XG4gICAgdmFsdWU6IDUwMCxcbiAgICB0eXBlOiBTZXR0aW5nSXRlbVR5cGUuSW50LFxuICAgIHNlY3Rpb246IHNlY3Rpb25OYW1lLFxuICAgIHB1YmxpYzogdHJ1ZSxcbiAgICBsYWJlbDogU2V0dGluZ0xhYmVsLkNPT0xET1dOX1RJQ0tTLFxuICAgIGRlc2NyaXB0aW9uOiAnU2ltdWxhdGlvbiBzdG9wcyBhZnRlciBDT09MRE9XTl9USUNLUyBvciBDT09MRE9XTl9USU1FIChtcykgaGFzIGVsYXBzZWQsIHdoaWNoZXZlciBvY2N1cnMgZmlyc3QuJ1xuICB9LFxuICBDT09MRE9XTl9USU1FOiB7XG4gICAgdmFsdWU6IDQwMDAsXG4gICAgdHlwZTogU2V0dGluZ0l0ZW1UeXBlLkludCxcbiAgICBzZWN0aW9uOiBzZWN0aW9uTmFtZSxcbiAgICBwdWJsaWM6IHRydWUsXG4gICAgbGFiZWw6IFNldHRpbmdMYWJlbC5DT09MRE9XTl9USU1FLFxuICAgIGRlc2NyaXB0aW9uOiAnU2ltdWxhdGlvbiBzdG9wcyBhZnRlciBDT09MRE9XTl9USUNLUyBvciBDT09MRE9XTl9USU1FIChtcykgaGFzIGVsYXBzZWQsIHdoaWNoZXZlciBvY2N1cnMgZmlyc3QuJ1xuICB9LFxuICBXQVJNVVBfVElDS1M6IHtcbiAgICB2YWx1ZTogMCwgXG4gICAgdHlwZTogU2V0dGluZ0l0ZW1UeXBlLkludCxcbiAgICBzZWN0aW9uOiBzZWN0aW9uTmFtZSxcbiAgICBwdWJsaWM6IHRydWUsXG4gICAgbGFiZWw6IFNldHRpbmdMYWJlbC5XQVJNVVBfVElDS1MsXG4gICAgZGVzY3JpcHRpb246IFwiTnVtYmVyIG9mIHNpbXVsYXRpb24gc3RlcHMgYmVmb3JlIHRoZSBncmFwaCByZW5kZXIuIEZvciBvcHRpbWl6YXRpb24uXCIsXG4gIH0sXG4gIEZPTlRfU0laRToge1xuICAgIHZhbHVlOiAyLCBcbiAgICB0eXBlOiBTZXR0aW5nSXRlbVR5cGUuSW50LFxuICAgIHNlY3Rpb246IHNlY3Rpb25OYW1lLFxuICAgIHB1YmxpYzogdHJ1ZSxcbiAgICBsYWJlbDogU2V0dGluZ0xhYmVsLkZPTlRfU0laRSxcbiAgICBkZXNjcmlwdGlvbjogXCJTaXplIG5vZGUgbGFiZWwgaW4gcHguXCIsXG4gIH0sXG4gIFJFTEFUSVZFX0ZPTlRfU0laRToge1xuICAgIHZhbHVlOiB0cnVlLCBcbiAgICB0eXBlOiBTZXR0aW5nSXRlbVR5cGUuQm9vbCxcbiAgICBzZWN0aW9uOiBzZWN0aW9uTmFtZSxcbiAgICBwdWJsaWM6IHRydWUsXG4gICAgbGFiZWw6IFNldHRpbmdMYWJlbC5SRUxBVElWRV9GT05UX1NJWkUsXG4gICAgZGVzY3JpcHRpb246IFwiU2hvdWxkIHRoZSBsYWJlbCBzaXplIGJlIHByb3BvcnRpb25hbCB0byBub2RlIHNpemU/XCIsXG4gIH0sXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3RlclNldHRpbmdzKCkge1xuICBcbiAgYXdhaXQgam9wbGluLnNldHRpbmdzLnJlZ2lzdGVyU2VjdGlvbihzZWN0aW9uTmFtZSwge1xuICAgIGxhYmVsOiAnR3JhcGgnLFxuICAgIGljb25OYW1lOiAnZmFzIGZhLXByb2plY3QtZGlhZ3JhbSdcbiAgfSk7XG5cbiAgcmV0dXJuIGF3YWl0IGpvcGxpbi5zZXR0aW5ncy5yZWdpc3RlclNldHRpbmdzKHBsdWdpblNldHRpbmdzKTtcbn1cbiIsImltcG9ydCBMaW5rIGZyb20gXCIuLi9jb3JlL2xpbmtcIjtcbmltcG9ydCBOb2RlIGZyb20gXCIuLi9jb3JlL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlIE5vdGUge1xuICBpZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBsaW5rczogTGlua1tdO1xuICBib2R5OiBzdHJpbmc7XG4gIGRlZ3JlZT86IG51bWJlcjtcbiAgdmlzaXRMaW5rcz86IGJvb2xlYW47XG4gIHRhZ3M/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSm9wbGluTm90ZShqb3BsaW5Ob3RlIDogYW55KSA6IE5vdGUge1xuICBjb25zdCBub3RlID0ge1xuICAgIGlkOiBqb3BsaW5Ob3RlLmlkLFxuICAgIHRpdGxlOiBqb3BsaW5Ob3RlLnRpdGxlLFxuICAgIGJvZHk6IGpvcGxpbk5vdGUuYm9keSxcbiAgICBsaW5rczogcGFyc2VOb3RlTGlua3Moam9wbGluTm90ZSksXG4gIH1cbiAgcmV0dXJuIG5vdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZE5vZGVGcm9tTm90ZShub3RlOiBOb3RlKTogTm9kZSB7XG4gIGNvbnN0IG5vZGUgPSBuZXcgTm9kZShub3RlLmlkKTtcbiAgbm9kZS5sYWJlbCA9IG5vdGUudGl0bGU7XG4gIG5vdGUubGlua3MuZm9yRWFjaCggbGluayA9Pm5vZGUucmVsLnB1c2gobGluaykpO1xuICBub3RlLnRhZ3MuZm9yRWFjaCh0YWcgPT4gbm9kZS50YWdzLmFkZCh0YWcpKTtcbiAgbm9kZS50eXBlID0gJ25vdGUnO1xuICByZXR1cm4gbm9kZTtcbn1cblxuLy9UT0RPIHJldmlldyBhZGRhbHBoYW51bWVyaWMgY29udHJvbFxuLy9wb3NpdGlvbiBoZWxwIHRyYWNrIG11bHRpcGxlIGxpbmtzIHRvIHRoZSBzYW1lIHRhcmdldC5cbi8vZnJvbSBqb3BsaW4ubGluay5ncmFwaFxuZnVuY3Rpb24gcGFyc2VOb3RlTGlua3Moam9wbGluTm90ZTogYW55KSA6IExpbmtbXSB7XG4gIGxldCBwb3NpdGlvbiA9IDE7XG4gIGNvbnN0IGxpbmtzID0gW107XG4gIC8vIFRPRE86IG5lZWRzIHRvIGhhbmRsZSByZXNvdXJjZSBsaW5rcyB2cyBub3RlIGxpbmtzLiBzZWUgNC4gVGlwcyBub3RlIGZvclxuICAvLyB3ZWJjbGlwcGVyIHNjcmVlbnNob3QuXG4gIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM3NDYyMTI2L3JlZ2V4LW1hdGNoLW1hcmtkb3duLWxpbmtcbiAgY29uc3QgbGlua1JlZ2V4cCA9IC9cXFtcXF18XFxbLio/XFxdXFwoOlxcLyguKj8pXFwpL2c7XG4gIHZhciBtYXRjaCA9IGxpbmtSZWdleHAuZXhlYyhqb3BsaW5Ob3RlLmJvZHkpO1xuICB3aGlsZSAobWF0Y2ggIT0gbnVsbCkge1xuICAgIGlmIChtYXRjaFsxXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBtYXRjaFsxXTtcbiAgICAgIGNvbnN0IGxpbmsgPSBuZXcgTGluayhqb3BsaW5Ob3RlLmlkLCB0YXJnZXQpO1xuICAgICAgbGluay50eXBlID0gJ3JlZmVyZW5jZSc7XG4gICAgICBsaW5rLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICBsaW5rcy5wdXNoKGxpbmspO1xuICAgICAgcG9zaXRpb24rKztcbiAgICB9XG4gICAgbWF0Y2ggPSBsaW5rUmVnZXhwLmV4ZWMoam9wbGluTm90ZS5ib2R5KTtcbiAgfVxuICByZXR1cm4gbGlua3M7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
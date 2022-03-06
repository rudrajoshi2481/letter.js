var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
init_react();
var import_express = __toESM(require("express"));
var import_compression = __toESM(require("compression"));
var import_morgan = __toESM(require("morgan"));
var import_express2 = require("@remix-run/express");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:E:\blender project\old\rmixMajor\cookies-auth-storage\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
init_react();
var import_remix3 = __toESM(require_remix());
var import_react3 = require("@chakra-ui/react");

// app/components/Navbar.tsx
init_react();
var import_react = require("@chakra-ui/react");
var import_react2 = __toESM(require("react"));
var import_remix2 = __toESM(require_remix());
function Navbar() {
  return /* @__PURE__ */ import_react2.default.createElement(import_react.Box, {
    background: "green.500"
  }, /* @__PURE__ */ import_react2.default.createElement(import_react.UnorderedList, {
    display: "flex"
  }, /* @__PURE__ */ import_react2.default.createElement(import_react.ListItem, {
    p: "3",
    color: "white",
    listStyleType: "none"
  }, /* @__PURE__ */ import_react2.default.createElement(import_remix2.Link, {
    to: "/"
  }, "Homepage")), /* @__PURE__ */ import_react2.default.createElement(import_react.ListItem, {
    p: "3",
    color: "white",
    listStyleType: "none"
  }, /* @__PURE__ */ import_react2.default.createElement(import_remix2.Link, {
    to: "/dashboard"
  }, "Dashboard")), /* @__PURE__ */ import_react2.default.createElement(import_react.ListItem, {
    p: "3",
    color: "white",
    listStyleType: "none"
  }, /* @__PURE__ */ import_react2.default.createElement(import_remix2.Link, {
    to: "/login"
  }, "Login"))));
}
var Navbar_default = Navbar;

// route:E:\blender project\old\rmixMajor\cookies-auth-storage\app\root.tsx
var import_react4 = require("@chakra-ui/react");
var config = {
  initialColorMode: "dark",
  useSystemColorMode: false
};
var theme = (0, import_react4.extendTheme)({ config });
var meta = () => {
  return { title: "New Remix App" };
};
var Document = () => {
  return /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react3.ColorModeScript, {
    initialColorMode: theme.config.initialColorMode
  }), /* @__PURE__ */ React.createElement(import_react3.ChakraProvider, null, /* @__PURE__ */ React.createElement(Navbar_default, null), /* @__PURE__ */ React.createElement(import_remix3.Outlet, null), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement(Document, null));
}

// route:E:\blender project\old\rmixMajor\cookies-auth-storage\app\routes\dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => dashboard_default,
  loader: () => loader
});
init_react();
var import_react5 = require("@chakra-ui/react");
var import_react6 = __toESM(require("react"));
var import_remix5 = __toESM(require_remix());

// app/sessions.ts
init_react();
var import_remix4 = __toESM(require_remix());
var { getSession, commitSession, destroySession } = (0, import_remix4.createCookieSessionStorage)({
  cookie: {
    name: "__session"
  }
});

// route:E:\blender project\old\rmixMajor\cookies-auth-storage\app\routes\dashboard.tsx
var loader = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  if (session.has("userSession")) {
    return { showPage: true };
  }
  return { showPage: false };
};
function Dashboard() {
  const { showPage } = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, true ? /* @__PURE__ */ import_react6.default.createElement(PrivatePage, null) : /* @__PURE__ */ import_react6.default.createElement(NotSignInPage, null));
}
var PrivatePage = () => {
  return /* @__PURE__ */ import_react6.default.createElement(import_react5.Container, {
    maxW: "ontainer.lg"
  }, /* @__PURE__ */ import_react6.default.createElement(import_react5.Heading, {
    py: "3"
  }, "Letter.js\u{1F495}"), /* @__PURE__ */ import_react6.default.createElement(import_react5.Divider, {
    size: "3",
    colorScheme: "green",
    orientation: "vertical"
  }), /* @__PURE__ */ import_react6.default.createElement(import_remix5.Outlet, null));
};
var dashboard_default = Dashboard;

// route:E:\blender project\old\rmixMajor\cookies-auth-storage\app\routes\dashboard\index.tsx
var dashboard_exports2 = {};
__export(dashboard_exports2, {
  default: () => dashboard_default2
});
init_react();
var import_react9 = require("@chakra-ui/react");

// app/components/SlateEditor.tsx
init_react();
var import_react7 = require("@chakra-ui/react");
var import_is_hotkey = __toESM(require("is-hotkey"));
var import_react8 = __toESM(require("react"));
var import_slate = require("slate");
var import_slate_history = require("slate-history");
var import_slate_react = require("slate-react");
var import_fa = require("react-icons/fa");
var import_bi = require("react-icons/bi");
var HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code"
};
var LIST_TYPES = ["numbered-list", "bulleted-list"];
function SlateEditor() {
  const initialValue = [
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }]
    }
  ];
  const [value, setValue] = import_react8.default.useState(initialValue);
  const renderElement = (0, import_react8.useCallback)((props) => /* @__PURE__ */ import_react8.default.createElement(Element, __spreadValues({}, props)), []);
  const renderLeaf = (0, import_react8.useCallback)((props) => /* @__PURE__ */ import_react8.default.createElement(Leaf, __spreadValues({}, props)), []);
  const editor = (0, import_react8.useMemo)(() => (0, import_slate_history.withHistory)((0, import_slate_react.withReact)((0, import_slate.createEditor)())), []);
  return /* @__PURE__ */ import_react8.default.createElement(import_react7.Box, null, /* @__PURE__ */ import_react8.default.createElement(import_react7.Box, null, /* @__PURE__ */ import_react8.default.createElement(import_react7.HStack, {
    spacing: "2",
    justifyContent: "space-between"
  }, /* @__PURE__ */ import_react8.default.createElement(import_react7.HStack, null, /* @__PURE__ */ import_react8.default.createElement(MarkButton, {
    e: editor,
    mr: "1",
    size: "sm",
    icon: /* @__PURE__ */ import_react8.default.createElement(import_fa.FaBold, null),
    format: "bold"
  }, "Bold"), /* @__PURE__ */ import_react8.default.createElement(MarkButton, {
    e: editor,
    icon: /* @__PURE__ */ import_react8.default.createElement(import_fa.FaItalic, null),
    format: "italic",
    mx: "1",
    size: "sm"
  }, "Italic"), /* @__PURE__ */ import_react8.default.createElement(MarkButton, {
    e: editor,
    icon: /* @__PURE__ */ import_react8.default.createElement(import_fa.FaCode, null),
    format: "code",
    mx: "1",
    size: "sm"
  }, "code"), /* @__PURE__ */ import_react8.default.createElement(BlockButton, {
    e: editor,
    icon: /* @__PURE__ */ import_react8.default.createElement(import_fa.FaHeading, null),
    format: "heading",
    mx: "1",
    size: "sm"
  }, "h1"), /* @__PURE__ */ import_react8.default.createElement(import_react7.Input, {
    type: "color",
    maxW: "60px",
    size: "sm"
  })), /* @__PURE__ */ import_react8.default.createElement(import_react7.HStack, null, /* @__PURE__ */ import_react8.default.createElement(import_react7.HStack, null, /* @__PURE__ */ import_react8.default.createElement(import_react7.Text, null, "Status "), /* @__PURE__ */ import_react8.default.createElement(import_bi.BiRefresh, null)), /* @__PURE__ */ import_react8.default.createElement(import_react7.Button, {
    size: "md",
    colorScheme: "green"
  }, "\u2714")))), /* @__PURE__ */ import_react8.default.createElement(import_react7.Box, {
    pt: "3",
    border: "1px",
    borderColor: "green",
    borderStyle: "dashed",
    style: { width: "60vw", minHeight: "40vh" },
    p: "3",
    mt: "3"
  }, /* @__PURE__ */ import_react8.default.createElement(import_slate_react.Slate, {
    editor,
    value,
    onChange: (e) => setValue(e)
  }, /* @__PURE__ */ import_react8.default.createElement(import_slate_react.Editable, {
    renderElement,
    renderLeaf,
    placeholder: "Enter some rich text\u2026",
    spellCheck: true,
    autoFocus: true,
    onKeyDown: (event) => {
      for (const hotkey in HOTKEYS) {
        if ((0, import_is_hotkey.default)(hotkey, event)) {
          event.preventDefault();
          const mark = HOTKEYS[hotkey];
          toggleMark(editor, mark);
        }
      }
    }
  }))));
}
var BlockButton = ({ format, icon, e }) => {
  let editor = e;
  let mark = format;
  return /* @__PURE__ */ import_react8.default.createElement(import_react7.Button, {
    size: "sm",
    borderRadius: "1",
    colorScheme: "gray",
    onMouseDown: (event) => {
      event.preventDefault();
      toggleBlock(editor, format);
    }
  }, icon);
};
var MarkButton = ({ format, icon, e }) => {
  let editor = e;
  let mark = format;
  return /* @__PURE__ */ import_react8.default.createElement(import_react7.Button, {
    size: "sm",
    borderRadius: "1",
    colorScheme: "gray",
    onMouseDown: (event) => {
      event.preventDefault();
      toggleMark(editor, format);
    }
  }, icon);
};
var Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case "block-quote":
      return /* @__PURE__ */ import_react8.default.createElement("blockquote", __spreadValues({}, attributes), children);
    case "bulleted-list":
      return /* @__PURE__ */ import_react8.default.createElement("ul", __spreadValues({}, attributes), children);
    case "heading":
      return /* @__PURE__ */ import_react8.default.createElement(import_react7.Heading, __spreadValues({}, attributes), children);
    case "heading-two":
      return /* @__PURE__ */ import_react8.default.createElement("h2", __spreadValues({}, attributes), children);
    case "list-item":
      return /* @__PURE__ */ import_react8.default.createElement("li", __spreadValues({}, attributes), children);
    case "numbered-list":
      return /* @__PURE__ */ import_react8.default.createElement("ol", __spreadValues({}, attributes), children);
    default:
      return /* @__PURE__ */ import_react8.default.createElement("p", __spreadValues({}, attributes), children);
  }
};
var Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = /* @__PURE__ */ import_react8.default.createElement(import_react7.Text, {
      as: "strong"
    }, children);
  }
  if (leaf.code) {
    children = /* @__PURE__ */ import_react8.default.createElement(import_react7.Text, {
      as: "code"
    }, children);
  }
  if (leaf.italic) {
    children = /* @__PURE__ */ import_react8.default.createElement(import_react7.Text, {
      as: "em"
    }, children);
  }
  if (leaf.underline) {
    children = /* @__PURE__ */ import_react8.default.createElement(import_react7.Text, {
      as: "u"
    }, children);
  }
  return /* @__PURE__ */ import_react8.default.createElement("span", __spreadValues({}, attributes), children);
};
function toggleMark(editor, mark) {
  const isActive = isMarkActive(editor, mark);
  console.log("TOGGLE MARKED WORKED");
  if (isActive) {
    import_slate.Editor.removeMark(editor, mark);
  } else {
    import_slate.Editor.addMark(editor, mark, true);
  }
}
function isMarkActive(editor, mark) {
  const marks = import_slate.Editor.marks(editor);
  return marks ? marks[mark] === true : false;
}
function toggleBlock(editor, format) {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);
  import_slate.Transforms.unwrapNodes(editor, {
    match: (n) => !import_slate.Editor.isEditor(n) && import_slate.Element.isElement(n) && LIST_TYPES.includes(n.type),
    split: true
  });
  const newProperties = {
    type: isActive ? "paragraph" : isList ? "list-item" : format
  };
  import_slate.Transforms.setNodes(editor, newProperties);
  if (!isActive && isList) {
    const block = { type: format, children: [] };
    import_slate.Transforms.wrapNodes(editor, block);
  }
}
function isBlockActive(editor, format) {
  const { selection } = editor;
  if (!selection)
    return false;
  const [match] = Array.from(import_slate.Editor.nodes(editor, {
    at: import_slate.Editor.unhangRange(editor, selection),
    match: (n) => !import_slate.Editor.isEditor(n) && import_slate.Element.isElement(n) && n.type === format
  }));
  return !!match;
}

// route:E:\blender project\old\rmixMajor\cookies-auth-storage\app\routes\dashboard\index.tsx
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react9.Button, {
    my: "3",
    mb: "3"
  }, "Create Letter \u2764"), /* @__PURE__ */ React.createElement(import_react9.Divider, null), /* @__PURE__ */ React.createElement(import_react9.HStack, {
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(Sidebar, null), /* @__PURE__ */ React.createElement(Viewer, null)));
}
var Sidebar = () => {
  return /* @__PURE__ */ React.createElement(import_react9.VStack, {
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(import_react9.Box, {
    style: { minWidth: "15vw" }
  }, /* @__PURE__ */ React.createElement(import_react9.UnorderedList, null)));
};
var Viewer = () => {
  return /* @__PURE__ */ React.createElement(import_react9.Box, null, /* @__PURE__ */ React.createElement(import_react9.Box, {
    pt: "5"
  }, /* @__PURE__ */ React.createElement(SlateEditor, null)));
};
var dashboard_default2 = Index;

// route:E:\blender project\old\rmixMajor\cookies-auth-storage\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  loader: () => loader2
});
init_react();
var import_react10 = require("@chakra-ui/react");
var import_react11 = __toESM(require("react"));
var import_remix6 = __toESM(require_remix());

// app/utils/fire.server.ts
init_react();
var import_app = require("firebase-admin/app");
var import_firestore = require("firebase-admin/firestore");
var import_auth = require("firebase-admin/auth");
var admin = require("firebase-admin");
var a = {
  "type": "service_account",
  "project_id": "rudhrajoshicom",
  "private_key_id": "9fef36b279a41948e6643434df9732081a5bd295",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDBaPbSII3Tivs+\nD9iEiOem7eQc3nDruBUD0LM1QQ2bmMC3UQYgWyMiH/unphNsI27cT8MpUv17nu3R\n4Jbt2s53ZeEDsDErKZUHnLzxb+e8zb7lAYOsMzKatqSNPuOHhwB8aSSJAqwFC1up\nWn+nU77OVvlHbbhCQo+wGszK9Sis0McjMYXqwvty25R6l3wrksR9dePmfKJJJV09\n9hN7nasvu0Hmg3g9SUyHwVVaDW0g/3UVA9sy2BdoSd5i8se1L+yNQnc+YhVrYYLS\npTdLKvZNh+gLvF+Duqyciy2KqbEMvS6SRT2ArmYeG+qQhl+WVRwLSBsQAF4wQAgI\nnu73Z8JtAgMBAAECggEAGCJy+lGZoRYst9feWtuCnK/+0SNoz+FOrgUy96hAfHQZ\nSEbSDuOQhMec7ZSpw8rAILnLTrLOcsioQJJYAyJUtU1/QKiR2iL8N9D1OuON9V9v\nPMBtn+VboTa9XerFFbpg8yVjq70rng2GyKFEYKrwmmr7/E/SuGH58C3H9GOXSckk\nHuK6jSoYlaCuzTzzrTXpZqA0CLtKq7+0AYzNWsuVj3NoRPMKuStX3f5NjVjlmakf\nOxdO4Uy9Sdk3UK1c8M23W2rJ6PxiGUtORDAa23wmrvX/v1H6fpIgI5nCgUncL6V5\n74r3mYb0eFJMOxZY9eBXa23/xghGSYMujRkxQunMAQKBgQDmghPxyH7z8haQevHJ\n38FtcTRX9uOCrebyGHWuIjMU/qEz7HcATQPSRRo/NJG5nrPjES673lg30Lo3M6EU\nrZzh1DWLj8lREEgpMCj2qEK0Z0LCoPqMozCcwRZmLb5ZLkPEubQd+27bIcG+B9tb\nxtyWXhiqJEW0QM6lhbNW5w6YgQKBgQDWzJnO/N59FmxZxc5cxRmxz6o0cdd/rPMs\nL+5+R4tBo9SBydzlvp85O4KZ0eOJW2TF6NT/gbay30r/1vWdzPQj6wGcHZb65Yqu\nu8RX0FQPt2swZQGAN/tbvtkSZVwdaNim2xsCtK/cJaYZVS/djPEABIpPDKivg5Zy\nN4yrqBMT7QKBgQCJfBJLRuu5sq4UtM/cOZJUJY4z3TTrr6+svDwMhad0IT+jCaoc\nytK5qq+x/Tfhv6/JgmkecsqpV9yJqkisXbTR2VGqkTNhH1X7AxebrtZCZcii74Mh\nOQB4ro4embAL3xVak+zDaUFAgEzffC4w+lZ9dVg+uu28Sl82yJ0j+yJwgQKBgFvb\nHyNPK+4eOrOhTYCKoVRS1BydWmS1F0CcNsc13S1y3BussZRmEj0tX8pb4YwJ02x3\nBy9Ez1Zq+u2xhVO4I+eARi320Wv14XqbvXk4E9qsu1/0sdGdHxa65KVjRyMkhRHF\nvSVJE7N3PjKzJUb/UMiLKIJpjXGROjMZ4kQ+Gfp5AoGAR8xt++MozVOb9vtF1uTL\n23FlqHBuSqnRMqsgiWtRIA+9M+03xRDPJ8zO0mImmP+tpyS6jDGgGZE2Mcqx/pE/\nICaMVPGjsXYdbp270c0k2fH2Z/tVXAgrHhzGgMBgziccWH67Rn8mgjx3T2aqlXdt\ngNMAORiCIO+LS+cexYRYFLk=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-xud18@rudhrajoshicom.iam.gserviceaccount.com",
  "client_id": "111097323745740515989",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xud18%40rudhrajoshicom.iam.gserviceaccount.com"
};
(0, import_app.initializeApp)({ credential: (0, import_app.cert)(a) });
var firestore = (0, import_firestore.getFirestore)();
var fireAuth = (0, import_auth.getAuth)();

// route:E:\blender project\old\rmixMajor\cookies-auth-storage\app\routes\index.tsx
var loader2 = async () => {
  const collectionUser = firestore.collection("users");
  let res = await collectionUser.doc().set({ first: "Jhson", last: "Doe", email: "rudra@gmial.com" });
  return { msg: "saved data", res };
};
function Index2() {
  const post = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, /* @__PURE__ */ import_react11.default.createElement(import_react10.Heading, null, "Home Page"), JSON.stringify(post));
}
var routes_default = Index2;

// route:E:\blender project\old\rmixMajor\cookies-auth-storage\app\routes\Login.tsx
var Login_exports = {};
__export(Login_exports, {
  action: () => action,
  default: () => Login_default
});
init_react();
var import_react12 = require("@chakra-ui/react");
var import_react13 = __toESM(require("react"));
var import_remix7 = __toESM(require_remix());

// app/logic/sessionAutrhLogic.ts
init_react();

// app/utils/auth.server.ts
init_react();
var createUser = async ({ email, password, displayName }) => {
  return await fireAuth.createUser({
    email,
    password,
    displayName
  });
};
var createCustormToken = async (uid) => {
  return await fireAuth.createCustomToken(uid);
};

// app/logic/sessionAutrhLogic.ts
var createAndSaveSession = async (id, request) => {
  let tokencreated = await createCustormToken(id);
  await console.log(tokencreated, "Token Created");
  const session = await getSession(request.headers.get("Cookie"));
  await session.set("userSession", tokencreated.toString());
  await commitSession(session);
  console.log("SESSION CREATED AND COMMITED");
};

// route:E:\blender project\old\rmixMajor\cookies-auth-storage\app\routes\Login.tsx
var action = async ({ request }) => {
  const form = await request.formData();
  let formAction = form.get("_action");
  let email = form.get("email");
  let password = form.get("password");
  let profileName = form.get("profileName");
  const col = firestore.collection("users");
  let res;
  if (formAction === "createuser") {
    if (email && password && profileName) {
      await createUser({
        email,
        password,
        displayName: profileName
      }).then(async (userRecord) => {
        res = { status: true, id: userRecord.uid };
        await createAndSaveSession(userRecord.uid, request);
      });
    }
  }
  return res.status ? (0, import_remix7.redirect)("/dashboard") : res;
};
function Login() {
  const ActionData = (0, import_remix7.useActionData)();
  const toast = (0, import_react12.useToast)();
  (0, import_react13.useEffect)(() => {
    if (ActionData != null) {
      console.log("NOT NULL 01");
      if (ActionData.status) {
        console.log("NOT NULL 01");
        (0, import_remix7.redirect)("/dashboard");
      }
    }
  }, [ActionData]);
  return /* @__PURE__ */ import_react13.default.createElement(import_react12.Container, {
    maxH: "container.lg"
  }, JSON.stringify(ActionData), /* @__PURE__ */ import_react13.default.createElement(import_react12.Box, {
    display: "flex",
    justifyContent: "center",
    mt: "30",
    alignItems: "center"
  }, /* @__PURE__ */ import_react13.default.createElement(import_react12.Box, {
    style: { width: "60vw" }
  }, /* @__PURE__ */ import_react13.default.createElement(import_react12.Tabs, null, /* @__PURE__ */ import_react13.default.createElement(import_react12.TabList, null, /* @__PURE__ */ import_react13.default.createElement(import_react12.Tab, null, "Login"), /* @__PURE__ */ import_react13.default.createElement(import_react12.Tab, null, "Create New User")), /* @__PURE__ */ import_react13.default.createElement(import_react12.TabPanels, null, /* @__PURE__ */ import_react13.default.createElement(import_react12.TabPanel, null, /* @__PURE__ */ import_react13.default.createElement(LoginUser, null)), /* @__PURE__ */ import_react13.default.createElement(import_react12.TabPanel, null, /* @__PURE__ */ import_react13.default.createElement(CreateNewUser, null)))))));
}
var LoginUser = () => {
  return /* @__PURE__ */ import_react13.default.createElement(import_react12.Box, null, /* @__PURE__ */ import_react13.default.createElement(import_remix7.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react13.default.createElement(import_react12.FormLabel, null, "Email"), /* @__PURE__ */ import_react13.default.createElement(import_react12.Input, {
    name: "email",
    type: "email",
    required: true,
    placeholder: "jhon@gmail.com"
  }), /* @__PURE__ */ import_react13.default.createElement(import_react12.FormHelperText, null, "We'll never share your email."), /* @__PURE__ */ import_react13.default.createElement(import_react12.FormLabel, null, "Password"), /* @__PURE__ */ import_react13.default.createElement(import_react12.Input, {
    name: "password",
    required: true,
    placeholder: "password",
    type: "password"
  }), /* @__PURE__ */ import_react13.default.createElement(import_react12.Spacer, null), /* @__PURE__ */ import_react13.default.createElement(import_react12.HStack, {
    mt: "6",
    justifyContent: "center",
    alignItems: "center"
  }, /* @__PURE__ */ import_react13.default.createElement(import_react12.Button, {
    name: "_action",
    value: "loginuser",
    type: "submit",
    colorScheme: "green"
  }, "Login"), /* @__PURE__ */ import_react13.default.createElement(import_react12.Spacer, null))));
};
var CreateNewUser = () => {
  const ActionData = (0, import_remix7.useActionData)();
  return /* @__PURE__ */ import_react13.default.createElement(import_react12.Box, null, /* @__PURE__ */ import_react13.default.createElement(import_remix7.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react13.default.createElement(import_react12.FormLabel, null, "Profile Name"), /* @__PURE__ */ import_react13.default.createElement(import_react12.Input, {
    type: "text",
    required: true,
    name: "profileName",
    placeholder: "Jhon Doe"
  }), /* @__PURE__ */ import_react13.default.createElement(import_react12.FormLabel, null, "Email"), /* @__PURE__ */ import_react13.default.createElement(import_react12.Input, {
    type: "email",
    required: true,
    name: "email",
    placeholder: "jhon@gmail.com"
  }), /* @__PURE__ */ import_react13.default.createElement(import_react12.FormHelperText, null, "We'll never share your email."), /* @__PURE__ */ import_react13.default.createElement(import_react12.FormLabel, null, "Password"), /* @__PURE__ */ import_react13.default.createElement(import_react12.Input, {
    required: true,
    placeholder: "password",
    name: "password",
    type: "password"
  }), /* @__PURE__ */ import_react13.default.createElement(import_react12.Spacer, null), /* @__PURE__ */ import_react13.default.createElement(import_react12.HStack, {
    mt: "6",
    justifyContent: "center",
    alignItems: "center"
  }, /* @__PURE__ */ import_react13.default.createElement(import_react12.Button, {
    name: "_action",
    value: "createuser",
    type: "submit",
    colorScheme: "green"
  }, "Create User"), /* @__PURE__ */ import_react13.default.createElement(import_react12.Spacer, null))));
};
var Login_default = Login;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "67750347", "entry": { "module": "/build/entry.client-7RWFNKUC.js", "imports": ["/build/_shared/chunk-F544EEZS.js", "/build/_shared/chunk-IE2MYUJQ.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-6NMRHZ2J.js", "imports": ["/build/_shared/chunk-GNNAZFUL.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/Login": { "id": "routes/Login", "parentId": "root", "path": "Login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/Login-SMXYAOMO.js", "imports": ["/build/_shared/chunk-7TN3E5NZ.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-7BGYDODN.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard/index": { "id": "routes/dashboard/index", "parentId": "routes/dashboard", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/dashboard/index-Z43EUVDQ.js", "imports": ["/build/_shared/chunk-GNNAZFUL.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-SN3Q5TUP.js", "imports": ["/build/_shared/chunk-7TN3E5NZ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-67750347.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/dashboard/index": {
    id: "routes/dashboard/index",
    parentId: "routes/dashboard",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: dashboard_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/Login": {
    id: "routes/Login",
    parentId: "root",
    path: "Login",
    index: void 0,
    caseSensitive: void 0,
    module: Login_exports
  }
};

// server.js
var app = (0, import_express.default)();
app.use((0, import_compression.default)());
app.disable("x-powered-by");
app.use("/build", import_express.default.static("public/build", { immutable: true, maxAge: "1y" }));
app.use(import_express.default.static("public/build", { maxAge: "1h" }));
app.use((0, import_morgan.default)("tiny"));
app.all("*", (0, import_express2.createRequestHandler)({
  build: server_build_exports,
  mode: "development"
}));
var port = process.env.PORT || 3e3;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
/**
 * @remix-run/node v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6RTpcXGJsZW5kZXIgcHJvamVjdFxcb2xkXFxybWl4TWFqb3JcXGNvb2tpZXMtYXV0aC1zdG9yYWdlXFxhcHBcXHJvb3QudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL05hdmJhci50c3giLCAicm91dGU6RTpcXGJsZW5kZXIgcHJvamVjdFxcb2xkXFxybWl4TWFqb3JcXGNvb2tpZXMtYXV0aC1zdG9yYWdlXFxhcHBcXHJvdXRlc1xcZGFzaGJvYXJkLnRzeCIsICIuLi9hcHAvc2Vzc2lvbnMudHMiLCAicm91dGU6RTpcXGJsZW5kZXIgcHJvamVjdFxcb2xkXFxybWl4TWFqb3JcXGNvb2tpZXMtYXV0aC1zdG9yYWdlXFxhcHBcXHJvdXRlc1xcZGFzaGJvYXJkXFxpbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvU2xhdGVFZGl0b3IudHN4IiwgInJvdXRlOkU6XFxibGVuZGVyIHByb2plY3RcXG9sZFxccm1peE1ham9yXFxjb29raWVzLWF1dGgtc3RvcmFnZVxcYXBwXFxyb3V0ZXNcXGluZGV4LnRzeCIsICIuLi9hcHAvdXRpbHMvZmlyZS5zZXJ2ZXIudHMiLCAicm91dGU6RTpcXGJsZW5kZXIgcHJvamVjdFxcb2xkXFxybWl4TWFqb3JcXGNvb2tpZXMtYXV0aC1zdG9yYWdlXFxhcHBcXHJvdXRlc1xcTG9naW4udHN4IiwgIi4uL2FwcC9sb2dpYy9zZXNzaW9uQXV0cmhMb2dpYy50cyIsICIuLi9hcHAvdXRpbHMvYXV0aC5zZXJ2ZXIudHMiLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwiY29tcHJlc3Npb25cIjtcbmltcG9ydCBtb3JnYW4gZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9leHByZXNzXCI7XG5cbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4vLyBodHRwOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXNlY3VyaXR5Lmh0bWwjYXQtYS1taW5pbXVtLWRpc2FibGUteC1wb3dlcmVkLWJ5LWhlYWRlclxuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XG5cbi8vIFJlbWl4IGZpbmdlcnByaW50cyBpdHMgYXNzZXRzIHNvIHdlIGNhbiBjYWNoZSBmb3JldmVyLlxuYXBwLnVzZShcbiAgXCIvYnVpbGRcIixcbiAgZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBpbW11dGFibGU6IHRydWUsIG1heEFnZTogXCIxeVwiIH0pXG4pO1xuXG4vLyBFdmVyeXRoaW5nIGVsc2UgKGxpa2UgZmF2aWNvbi5pY28pIGlzIGNhY2hlZCBmb3IgYW4gaG91ci4gWW91IG1heSB3YW50IHRvIGJlXG4vLyBtb3JlIGFnZ3Jlc3NpdmUgd2l0aCB0aGlzIGNhY2hpbmcuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgbWF4QWdlOiBcIjFoXCIgfSkpO1xuXG5hcHAudXNlKG1vcmdhbihcInRpbnlcIikpO1xuXG5hcHAuYWxsKFxuICBcIipcIixcbiAgY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVlxuICB9KVxuKTtcblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCJFOlxcXFxibGVuZGVyIHByb2plY3RcXFxcb2xkXFxcXHJtaXhNYWpvclxcXFxjb29raWVzLWF1dGgtc3RvcmFnZVxcXFxhcHBcXFxcZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCJFOlxcXFxibGVuZGVyIHByb2plY3RcXFxcb2xkXFxcXHJtaXhNYWpvclxcXFxjb29raWVzLWF1dGgtc3RvcmFnZVxcXFxhcHBcXFxccm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiRTpcXFxcYmxlbmRlciBwcm9qZWN0XFxcXG9sZFxcXFxybWl4TWFqb3JcXFxcY29va2llcy1hdXRoLXN0b3JhZ2VcXFxcYXBwXFxcXHJvdXRlc1xcXFxkYXNoYm9hcmQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIkU6XFxcXGJsZW5kZXIgcHJvamVjdFxcXFxvbGRcXFxccm1peE1ham9yXFxcXGNvb2tpZXMtYXV0aC1zdG9yYWdlXFxcXGFwcFxcXFxyb3V0ZXNcXFxcZGFzaGJvYXJkXFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCJFOlxcXFxibGVuZGVyIHByb2plY3RcXFxcb2xkXFxcXHJtaXhNYWpvclxcXFxjb29raWVzLWF1dGgtc3RvcmFnZVxcXFxhcHBcXFxccm91dGVzXFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCJFOlxcXFxibGVuZGVyIHByb2plY3RcXFxcb2xkXFxcXHJtaXhNYWpvclxcXFxjb29raWVzLWF1dGgtc3RvcmFnZVxcXFxhcHBcXFxccm91dGVzXFxcXExvZ2luLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvZGFzaGJvYXJkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kYXNoYm9hcmRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiZGFzaGJvYXJkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9kYXNoYm9hcmQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Rhc2hib2FyZC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2Rhc2hib2FyZFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL0xvZ2luXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9Mb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJMb2dpblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gICAgXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBDaGFrcmFQcm92aWRlciwgQ29sb3JNb2RlU2NyaXB0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vY29tcG9uZW50cy9OYXZiYXJcIjtcbi8vIDEuIGltcG9ydCBgZXh0ZW5kVGhlbWVgIGZ1bmN0aW9uXG5pbXBvcnQgeyBleHRlbmRUaGVtZSwgdHlwZSBUaGVtZUNvbmZpZyB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbi8vIDIuIEFkZCB5b3VyIGNvbG9yIG1vZGUgY29uZmlnXG5jb25zdCBjb25maWc6IFRoZW1lQ29uZmlnID0ge1xuICBpbml0aWFsQ29sb3JNb2RlOiAnZGFyaycsXG4gIHVzZVN5c3RlbUNvbG9yTW9kZTogZmFsc2UsXG59XG5cbi8vIDMuIGV4dGVuZCB0aGUgdGhlbWVcbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoeyBjb25maWcgfSlcblxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJOZXcgUmVtaXggQXBwXCIgfTtcbn07XG5cbmNvbnN0IERvY3VtZW50ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxib2R5PlxuICAgICAgIDxDb2xvck1vZGVTY3JpcHQgaW5pdGlhbENvbG9yTW9kZT17dGhlbWUuY29uZmlnLmluaXRpYWxDb2xvck1vZGV9IC8+XG4gICAgICA8Q2hha3JhUHJvdmlkZXI+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgICAgICAgIFxuICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICA8L2JvZHk+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxEb2N1bWVudCAvPlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBCb3gsIExpc3RJdGVtLCBVbm9yZGVyZWRMaXN0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnXHJcblxyXG5mdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYmFja2dyb3VuZD17XCJncmVlbi41MDBcIn0+XHJcbiAgICAgICAgPFVub3JkZXJlZExpc3QgZGlzcGxheT17XCJmbGV4XCJ9PlxyXG4gICAgICAgICAgPExpc3RJdGVtIHA9XCIzXCIgY29sb3I9e1wid2hpdGVcIn0gIGxpc3RTdHlsZVR5cGU9e1wibm9uZVwifSA+PExpbmsgdG89XCIvXCI+SG9tZXBhZ2U8L0xpbms+PC9MaXN0SXRlbT5cclxuICAgICAgICAgIDxMaXN0SXRlbSBwPVwiM1wiIGNvbG9yPXtcIndoaXRlXCJ9IGxpc3RTdHlsZVR5cGU9e1wibm9uZVwifSA+PExpbmsgdG89XCIvZGFzaGJvYXJkXCI+RGFzaGJvYXJkPC9MaW5rPjwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8TGlzdEl0ZW0gcD1cIjNcIiBjb2xvcj17XCJ3aGl0ZVwifSBsaXN0U3R5bGVUeXBlPXtcIm5vbmVcIn0gPjxMaW5rIHRvPVwiL2xvZ2luXCI+TG9naW48L0xpbms+PC9MaXN0SXRlbT5cclxuICAgICAgICA8L1Vub3JkZXJlZExpc3Q+XHJcbiAgICA8L0JveD4gIFxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIiwgImltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBDb250YWluZXIsXHJcbiAgRGl2aWRlcixcclxuICBIZWFkaW5nLFxyXG4gIEhTdGFjayxcclxuICBMaXN0SXRlbSxcclxuICBUZXh0LFxyXG4gIFVub3JkZXJlZExpc3QsXHJcbiAgVlN0YWNrLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsganNvbiwgTGluaywgTGlua3MsIExvYWRlckZ1bmN0aW9uLCBPdXRsZXQsIHJlZGlyZWN0LCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwifi9zZXNzaW9uc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6TG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe3JlcXVlc3R9KSA9PiB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oXHJcbiAgICByZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpXHJcbiAgKTtcclxuICBpZiAoc2Vzc2lvbi5oYXMoXCJ1c2VyU2Vzc2lvblwiKSkge1xyXG4gICAgLy8gUmVkaXJlY3QgdG8gdGhlIGhvbWUgcGFnZSBpZiB0aGV5IGFyZSBhbHJlYWR5IHNpZ25lZCBpbi5cclxuICAgIFxyXG4gICAgcmV0dXJuIHtzaG93UGFnZTp0cnVlfVxyXG4gIH1cclxuICByZXR1cm4ge3Nob3dQYWdlOmZhbHNlfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBEYXNoYm9hcmQoKSB7XHJcblxyXG4gIGNvbnN0IHtzaG93UGFnZX0gPSB1c2VMb2FkZXJEYXRhKCkgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgey8qIHtcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoc2hvd1BhZ2UpXHJcbiAgICB9ICovfVxyXG4gICAge1xyXG4gICAgICB0cnVlID8gIDxQcml2YXRlUGFnZSAvPiA6IDxOb3RTaWduSW5QYWdlIC8+XHJcbiAgICB9XHJcblxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgTm90U2lnbkluUGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgICA8SGVhZGluZz5Vc2VyIE5vdCBMb2dlZCBpbjwvSGVhZGluZz5cclxuICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiPkxvZ2luPC9MaW5rPlxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuY29uc3QgUHJpdmF0ZVBhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuKFxyXG4gICAgPENvbnRhaW5lciBtYXhXPVwib250YWluZXIubGdcIj5cclxuICAgIDxIZWFkaW5nIHB5PVwiM1wiPkxldHRlci5qc1x1RDgzRFx1REM5NTwvSGVhZGluZz5cclxuICAgIFxyXG4gICAgICBcclxuICAgICAgPERpdmlkZXIgc2l6ZT17XCIzXCJ9IGNvbG9yU2NoZW1lPVwiZ3JlZW5cIiBvcmllbnRhdGlvbj0ndmVydGljYWwnIC8+XHJcbiAgICAgIDxPdXRsZXQgLz5cclxuICAgIFxyXG4gIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuIiwgImltcG9ydCB7Y3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2V9IGZyb20gXCJyZW1peFwiXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHtnZXRTZXNzaW9uLGNvbW1pdFNlc3Npb24sZGVzdHJveVNlc3Npb259ICA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcclxuICAgIGNvb2tpZTp7XHJcbiAgICAgICAgbmFtZTpcIl9fc2Vzc2lvblwiXHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuIiwgImltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBEaXZpZGVyLFxyXG4gIEhlYWRpbmcsXHJcbiAgSGVhZGluZ1Byb3BzLFxyXG4gIEhTdGFjayxcclxuICBMaXN0SXRlbSxcclxuICBPbWl0Q29tbW9uUHJvcHMsXHJcbiAgVGV4dCxcclxuICBVbm9yZGVyZWRMaXN0LFxyXG4gIFZTdGFjayxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFNsYXRlRWRpdG9yIGZyb20gXCJ+L2NvbXBvbmVudHMvU2xhdGVFZGl0b3JcIjtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gSW5kZXgoKSB7XHJcblxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG5cclxuICAgICAgPEJ1dHRvbiAgbXk9XCIzXCIgbWI9XCIzXCIgPkNyZWF0ZSBMZXR0ZXIgXHUyNzY0PC9CdXR0b24+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgIDxIU3RhY2sganVzdGlmeUNvbnRlbnQ9e1wiZmxleC1zdGFydFwifSBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxyXG4gICAgICA8U2lkZWJhciAvPlxyXG4gICAgICA8Vmlld2VyIC8+XHJcbiAgICAgIDwvSFN0YWNrPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxWU3RhY2sgYWxpZ25JdGVtcz17XCJmbGV4LXN0YXJ0XCJ9PlxyXG4gICAgICBcclxuICAgICAgPEJveCBzdHlsZT17eyBtaW5XaWR0aDogXCIxNXZ3XCIgfX0+XHJcbiAgICAgICAgPFVub3JkZXJlZExpc3Q+XHJcblxyXG4gICAgICAgIDwvVW5vcmRlcmVkTGlzdD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L1ZTdGFjaz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVmlld2VyID0gKCkgPT4ge1xyXG4gIHJldHVybihcclxuICAgIDxCb3g+XHJcbiAgICAgIDxCb3ggcHQ9XCI1XCI+XHJcbiAgICAgICAgXHJcbiAgICAgIDxTbGF0ZUVkaXRvciAvPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCAiaW1wb3J0IHsgQ2xvc2VCdXR0b24gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgSGVhZGluZywgSFN0YWNrLCBJbnB1dCwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBlIGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCBpc0hvdGtleSBmcm9tIFwiaXMtaG90a2V5XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQmFzZUVkaXRvcixcclxuICBCYXNlRWxlbWVudCxcclxuICBjcmVhdGVFZGl0b3IsXHJcbiAgRGVzY2VuZGFudCxcclxuICBFZGl0b3IsXHJcbiAgRWxlbWVudCBhcyBTbGF0ZUVsZW1lbnQsXHJcbiAgVHJhbnNmb3JtcyxcclxufSBmcm9tIFwic2xhdGVcIjtcclxuaW1wb3J0IHsgSGlzdG9yeUVkaXRvciwgd2l0aEhpc3RvcnkgfSBmcm9tIFwic2xhdGUtaGlzdG9yeVwiO1xyXG5pbXBvcnQgeyBSZWFjdEVkaXRvciwgU2xhdGUsIHdpdGhSZWFjdCwgRWRpdGFibGUgfSBmcm9tIFwic2xhdGUtcmVhY3RcIjtcclxuXHJcbmNvbnN0IEhPVEtFWVM6IGFueSA9IHtcclxuICBcIm1vZCtiXCI6IFwiYm9sZFwiLFxyXG4gIFwibW9kK2lcIjogXCJpdGFsaWNcIixcclxuICBcIm1vZCt1XCI6IFwidW5kZXJsaW5lXCIsXHJcbiAgXCJtb2QrYFwiOiBcImNvZGVcIixcclxufTtcclxuXHJcbmNvbnN0IExJU1RfVFlQRVMgPSBbXCJudW1iZXJlZC1saXN0XCIsIFwiYnVsbGV0ZWQtbGlzdFwiXTtcclxuaW1wb3J0IHtcclxuICBGYUJvbGQsXHJcbiAgRmFJdGFsaWMsXHJcbiAgRmFVbmRlcmxpbmUsXHJcbiAgRmFDb2RlLFxyXG4gIEZhSGVhZGluZyxcclxufSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IHtCaVJlZnJlc2h9IGZyb20gXCJyZWFjdC1pY29ucy9iaVwiXHJcblxyXG50eXBlIEN1c3RvbVRleHQgPSB7IHRleHQ6IHN0cmluZyB9O1xyXG50eXBlIEN1c3RvbUVsZW1lbnQgPSB7IHR5cGU6IFwicGFyYWdyYXBoXCI7IGNoaWxkcmVuOiBDdXN0b21UZXh0W10gfTtcclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwic2xhdGVcIiB7XHJcbiAgaW50ZXJmYWNlIEN1c3RvbVR5cGVzIHtcclxuICAgIEVkaXRvcjogQmFzZUVkaXRvciAmIFJlYWN0RWRpdG9yICYgSGlzdG9yeUVkaXRvcjtcclxuICAgIEVsZW1lbnQ6IEN1c3RvbUVsZW1lbnQ7XHJcbiAgICBUZXh0OiBDdXN0b21UZXh0O1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGF0ZUVkaXRvcigpIHtcclxuICBjb25zdCBpbml0aWFsVmFsdWU6IERlc2NlbmRhbnRbXSA9IFtcclxuICAgICAge1xyXG4gICAgICB0eXBlOiBcInBhcmFncmFwaFwiLFxyXG4gICAgICBjaGlsZHJlbjogW3sgdGV4dDogXCJBIGxpbmUgb2YgdGV4dCBpbiBhIHBhcmFncmFwaC5cIiB9XSxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZTxEZXNjZW5kYW50W10+KGluaXRpYWxWYWx1ZSk7XHJcbiAgY29uc3QgcmVuZGVyRWxlbWVudCA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4gPEVsZW1lbnQgey4uLnByb3BzfSAvPiwgW10pO1xyXG4gIGNvbnN0IHJlbmRlckxlYWYgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IDxMZWFmIHsuLi5wcm9wc30gLz4sIFtdKTtcclxuICBjb25zdCBlZGl0b3IgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gd2l0aEhpc3Rvcnkod2l0aFJlYWN0KGNyZWF0ZUVkaXRvcigpIGFzIFJlYWN0RWRpdG9yKSksXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICA8Qm94PlxyXG4gICAgICAgIDxIU3RhY2sgc3BhY2luZz17XCIyXCJ9IGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiPlxyXG4gICAgICAgICA8SFN0YWNrPlxyXG4gICAgICAgICA8TWFya0J1dHRvblxyXG4gICAgICAgICAgICBlPXtlZGl0b3J9XHJcbiAgICAgICAgICAgIG1yPVwiMVwiXHJcbiAgICAgICAgICAgIHNpemU9e1wic21cIn1cclxuICAgICAgICAgICAgaWNvbj17PEZhQm9sZCAvPn1cclxuICAgICAgICAgICAgZm9ybWF0PXtcImJvbGRcIn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQm9sZFxyXG4gICAgICAgICAgPC9NYXJrQnV0dG9uPlxyXG4gICAgICAgICAgPE1hcmtCdXR0b25cclxuICAgICAgICAgICAgZT17ZWRpdG9yfVxyXG4gICAgICAgICAgICBpY29uPXs8RmFJdGFsaWMgLz59XHJcbiAgICAgICAgICAgIGZvcm1hdD17XCJpdGFsaWNcIn1cclxuICAgICAgICAgICAgbXg9XCIxXCJcclxuICAgICAgICAgICAgc2l6ZT17XCJzbVwifVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBJdGFsaWNcclxuICAgICAgICAgIDwvTWFya0J1dHRvbj5cclxuICAgICAgICAgIDxNYXJrQnV0dG9uXHJcbiAgICAgICAgICAgIGU9e2VkaXRvcn1cclxuICAgICAgICAgICAgaWNvbj17PEZhQ29kZSAvPn1cclxuICAgICAgICAgICAgZm9ybWF0PXtcImNvZGVcIn1cclxuICAgICAgICAgICAgbXg9XCIxXCJcclxuICAgICAgICAgICAgc2l6ZT17XCJzbVwifVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBjb2RlXHJcbiAgICAgICAgICA8L01hcmtCdXR0b24+XHJcbiAgICAgICAgICA8QmxvY2tCdXR0b25cclxuICAgICAgICAgICAgZT17ZWRpdG9yfVxyXG4gICAgICAgICAgICBpY29uPXs8RmFIZWFkaW5nIC8+fVxyXG4gICAgICAgICAgICBmb3JtYXQ9e1wiaGVhZGluZ1wifVxyXG4gICAgICAgICAgICBteD1cIjFcIlxyXG4gICAgICAgICAgICBzaXplPXtcInNtXCJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIGgxXHJcbiAgICAgICAgICA8L0Jsb2NrQnV0dG9uPlxyXG4gICAgICAgICAgPElucHV0IHR5cGU9XCJjb2xvclwiIG1heFc9e1wiNjBweFwifSBzaXplPVwic21cIi8+XHJcbiAgICAgICAgIDwvSFN0YWNrPlxyXG4gICAgICAgICAgPEhTdGFjaz5cclxuICAgICAgICAgICAgICA8SFN0YWNrPjxUZXh0PlN0YXR1cyA8L1RleHQ+PEJpUmVmcmVzaCAvPjwvSFN0YWNrPlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwibWRcIiBjb2xvclNjaGVtZT17XCJncmVlblwifT5cdTI3MTQ8L0J1dHRvbj5cclxuICAgICAgICAgIDwvSFN0YWNrPlxyXG4gICAgICAgICAgey8qIDxNYXJrQnV0dG9uIGU9e2VkaXRvcn0gaWNvbj1cIlwiIGZvcm1hdD17XCJcIn0gbXg9XCIxXCIgc2l6ZT17XCJzbVwifT5oMjwvTWFya0J1dHRvbj4gKi99XHJcbiAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94IHB0PVwiM1wiIGJvcmRlcj17XCIxcHhcIn0gYm9yZGVyQ29sb3I9XCJncmVlblwiIGJvcmRlclN0eWxlPXtcImRhc2hlZFwifSBzdHlsZT17e3dpZHRoOic2MHZ3JyxtaW5IZWlnaHQ6XCI0MHZoXCJ9fSBwPVwiM1wiIG10PVwiM1wiPlxyXG4gICAgICAgIDxTbGF0ZSBlZGl0b3I9e2VkaXRvcn0gdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlKGUpfT5cclxuICAgICAgICAgIDxFZGl0YWJsZVxyXG4gICAgICAgICAgICByZW5kZXJFbGVtZW50PXtyZW5kZXJFbGVtZW50fVxyXG4gICAgICAgICAgICByZW5kZXJMZWFmPXtyZW5kZXJMZWFmfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHNvbWUgcmljaCB0ZXh0XHUyMDI2XCJcclxuICAgICAgICAgICAgc3BlbGxDaGVja1xyXG4gICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgb25LZXlEb3duPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICBmb3IgKGNvbnN0IGhvdGtleSBpbiBIT1RLRVlTKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNIb3RrZXkoaG90a2V5LCBldmVudCBhcyBhbnkpKSB7XHJcbiAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcmsgPSBIT1RLRVlTW2hvdGtleV07XHJcbiAgICAgICAgICAgICAgICAgIHRvZ2dsZU1hcmsoZWRpdG9yLCBtYXJrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9FZGl0YWJsZT5cclxuICAgICAgICA8L1NsYXRlPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IEJsb2NrQnV0dG9uID0gKHsgZm9ybWF0LCBpY29uLCBlIH06IGFueSkgPT4ge1xyXG4gIGxldCBlZGl0b3IgPSBlO1xyXG4gIGxldCBtYXJrID0gZm9ybWF0O1xyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uXHJcbiAgICAgIHNpemU9e1wic21cIn1cclxuICAgICAgYm9yZGVyUmFkaXVzPVwiMVwiXHJcbiAgICAgIGNvbG9yU2NoZW1lPXtcImdyYXlcIn1cclxuICAgICAgb25Nb3VzZURvd249eyhldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdG9nZ2xlQmxvY2soZWRpdG9yLCBmb3JtYXQpO1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7aWNvbn1cclxuICAgIDwvQnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBNYXJrQnV0dG9uID0gKHsgZm9ybWF0LCBpY29uLCBlIH06IGFueSkgPT4ge1xyXG4gIC8vIGNvbnN0IGVkaXRvcjphbnkgPSB1c2VTdGFcclxuICBsZXQgZWRpdG9yID0gZTtcclxuICBsZXQgbWFyayA9IGZvcm1hdDtcclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvblxyXG4gICAgICBzaXplPXtcInNtXCJ9XHJcbiAgICAgIGJvcmRlclJhZGl1cz1cIjFcIlxyXG4gICAgICBjb2xvclNjaGVtZT17XCJncmF5XCJ9XHJcbiAgICAgIG9uTW91c2VEb3duPXsoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRvZ2dsZU1hcmsoZWRpdG9yLCBmb3JtYXQpO1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7aWNvbn1cclxuICAgIDwvQnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBFbGVtZW50ID0gKHsgYXR0cmlidXRlcywgY2hpbGRyZW4sIGVsZW1lbnQgfTogYW55KSA9PiB7XHJcbiAgc3dpdGNoIChlbGVtZW50LnR5cGUpIHtcclxuICAgIGNhc2UgXCJibG9jay1xdW90ZVwiOlxyXG4gICAgICByZXR1cm4gPGJsb2NrcXVvdGUgey4uLmF0dHJpYnV0ZXN9PntjaGlsZHJlbn08L2Jsb2NrcXVvdGU+O1xyXG4gICAgY2FzZSBcImJ1bGxldGVkLWxpc3RcIjpcclxuICAgICAgcmV0dXJuIDx1bCB7Li4uYXR0cmlidXRlc30+e2NoaWxkcmVufTwvdWw+O1xyXG4gICAgY2FzZSBcImhlYWRpbmdcIjpcclxuICAgICAgcmV0dXJuIDxIZWFkaW5nIHsuLi5hdHRyaWJ1dGVzfT57Y2hpbGRyZW59PC9IZWFkaW5nPjtcclxuICAgIGNhc2UgXCJoZWFkaW5nLXR3b1wiOlxyXG4gICAgICByZXR1cm4gPGgyIHsuLi5hdHRyaWJ1dGVzfT57Y2hpbGRyZW59PC9oMj47XHJcbiAgICBjYXNlIFwibGlzdC1pdGVtXCI6XHJcbiAgICAgIHJldHVybiA8bGkgey4uLmF0dHJpYnV0ZXN9PntjaGlsZHJlbn08L2xpPjtcclxuICAgIGNhc2UgXCJudW1iZXJlZC1saXN0XCI6XHJcbiAgICAgIHJldHVybiA8b2wgey4uLmF0dHJpYnV0ZXN9PntjaGlsZHJlbn08L29sPjtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiA8cCB7Li4uYXR0cmlidXRlc30+e2NoaWxkcmVufTwvcD47XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgTGVhZiA9ICh7IGF0dHJpYnV0ZXMsIGNoaWxkcmVuLCBsZWFmIH06IGFueSkgPT4ge1xyXG4gIGlmIChsZWFmLmJvbGQpIHtcclxuICAgIGNoaWxkcmVuID0gPFRleHQgYXM9e1wic3Ryb25nXCJ9PntjaGlsZHJlbn08L1RleHQ+O1xyXG4gIH1cclxuXHJcbiAgaWYgKGxlYWYuY29kZSkge1xyXG4gICAgY2hpbGRyZW4gPSA8VGV4dCBhcz1cImNvZGVcIj57Y2hpbGRyZW59PC9UZXh0PjtcclxuICB9XHJcblxyXG4gIGlmIChsZWFmLml0YWxpYykge1xyXG4gICAgY2hpbGRyZW4gPSA8VGV4dCBhcz17XCJlbVwifT57Y2hpbGRyZW59PC9UZXh0PjtcclxuICB9XHJcblxyXG4gIGlmIChsZWFmLnVuZGVybGluZSkge1xyXG4gICAgY2hpbGRyZW4gPSA8VGV4dCBhcz1cInVcIj57Y2hpbGRyZW59PC9UZXh0PjtcclxuICB9XHJcblxyXG4gIHJldHVybiA8c3BhbiB7Li4uYXR0cmlidXRlc30+e2NoaWxkcmVufTwvc3Bhbj47XHJcbn07XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVNYXJrKGVkaXRvcjogRWRpdG9yLCBtYXJrOiBhbnkpIHtcclxuICBjb25zdCBpc0FjdGl2ZSA9IGlzTWFya0FjdGl2ZShlZGl0b3IsIG1hcmspO1xyXG4gIGNvbnNvbGUubG9nKFwiVE9HR0xFIE1BUktFRCBXT1JLRURcIik7XHJcblxyXG4gIGlmIChpc0FjdGl2ZSkge1xyXG4gICAgRWRpdG9yLnJlbW92ZU1hcmsoZWRpdG9yLCBtYXJrKTtcclxuICB9IGVsc2Uge1xyXG4gICAgRWRpdG9yLmFkZE1hcmsoZWRpdG9yLCBtYXJrLCB0cnVlKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTWFya0FjdGl2ZShlZGl0b3I6IEVkaXRvciwgbWFyazogYW55KSB7XHJcbiAgY29uc3QgbWFya3M6IGFueSA9IEVkaXRvci5tYXJrcyhlZGl0b3IpO1xyXG5cclxuICByZXR1cm4gbWFya3MgPyBtYXJrc1ttYXJrXSA9PT0gdHJ1ZSA6IGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVCbG9jayhlZGl0b3I6IEVkaXRvciwgZm9ybWF0OiBhbnkpIHtcclxuICBjb25zdCBpc0FjdGl2ZSA9IGlzQmxvY2tBY3RpdmUoZWRpdG9yLCBmb3JtYXQpO1xyXG4gIGNvbnN0IGlzTGlzdCA9IExJU1RfVFlQRVMuaW5jbHVkZXMoZm9ybWF0KTtcclxuXHJcbiAgVHJhbnNmb3Jtcy51bndyYXBOb2RlcyhlZGl0b3IsIHtcclxuICAgIG1hdGNoOiAobikgPT5cclxuICAgICAgIUVkaXRvci5pc0VkaXRvcihuKSAmJlxyXG4gICAgICBTbGF0ZUVsZW1lbnQuaXNFbGVtZW50KG4pICYmXHJcbiAgICAgIExJU1RfVFlQRVMuaW5jbHVkZXMobi50eXBlKSxcclxuICAgIHNwbGl0OiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBuZXdQcm9wZXJ0aWVzOiBQYXJ0aWFsPFNsYXRlRWxlbWVudD4gPSB7XHJcbiAgICB0eXBlOiBpc0FjdGl2ZSA/IFwicGFyYWdyYXBoXCIgOiBpc0xpc3QgPyBcImxpc3QtaXRlbVwiIDogZm9ybWF0LFxyXG4gIH07XHJcbiAgVHJhbnNmb3Jtcy5zZXROb2RlczxTbGF0ZUVsZW1lbnQ+KGVkaXRvciwgbmV3UHJvcGVydGllcyk7XHJcblxyXG4gIGlmICghaXNBY3RpdmUgJiYgaXNMaXN0KSB7XHJcbiAgICBjb25zdCBibG9jayA9IHsgdHlwZTogZm9ybWF0LCBjaGlsZHJlbjogW10gfTtcclxuICAgIFRyYW5zZm9ybXMud3JhcE5vZGVzKGVkaXRvciwgYmxvY2spO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNCbG9ja0FjdGl2ZShlZGl0b3I6IGFueSwgZm9ybWF0OiBhbnkpIHtcclxuICBjb25zdCB7IHNlbGVjdGlvbiB9ID0gZWRpdG9yO1xyXG5cclxuICBpZiAoIXNlbGVjdGlvbikgcmV0dXJuIGZhbHNlO1xyXG5cclxuICBjb25zdCBbbWF0Y2hdID0gQXJyYXkuZnJvbShcclxuICAgIEVkaXRvci5ub2RlcyhlZGl0b3IsIHtcclxuICAgICAgYXQ6IEVkaXRvci51bmhhbmdSYW5nZShlZGl0b3IsIHNlbGVjdGlvbiksXHJcbiAgICAgIG1hdGNoOiAobikgPT5cclxuICAgICAgICAhRWRpdG9yLmlzRWRpdG9yKG4pICYmIFNsYXRlRWxlbWVudC5pc0VsZW1lbnQobikgJiYgbi50eXBlID09PSBmb3JtYXQsXHJcbiAgICB9KVxyXG4gICk7XHJcbiAgcmV0dXJuICEhbWF0Y2g7XHJcbn1cclxuIiwgImltcG9ydCB7IEhlYWRpbmcgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGZpcmVzdG9yZSB9IGZyb20gXCJ+L3V0aWxzL2ZpcmUuc2VydmVyXCJcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGNvbGxlY3Rpb25Vc2VyID0gZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKTtcblxuICBsZXQgcmVzID0gYXdhaXQgY29sbGVjdGlvblVzZXJcbiAgICAuZG9jKClcbiAgICAuc2V0KHsgZmlyc3Q6IFwiSmhzb25cIiwgbGFzdDogXCJEb2VcIiwgZW1haWw6IFwicnVkcmFAZ21pYWwuY29tXCIgfSk7XG5cblxuICBcblxuICByZXR1cm4ge21zZzpcInNhdmVkIGRhdGFcIixyZXN9XG5cbn07XG5cbmZ1bmN0aW9uIEluZGV4KCkge1xuXG4gIGNvbnN0IHBvc3QgPSB1c2VMb2FkZXJEYXRhKClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGluZz5Ib21lIFBhZ2U8L0hlYWRpbmc+XG4gICAgICB7XG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHBvc3QpXG4gICAgICB9XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIiwgImltcG9ydCB7IGluaXRpYWxpemVBcHAsIGFwcGxpY2F0aW9uRGVmYXVsdCwgY2VydCB9IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9hcHBcIjtcclxubGV0IGFkbWluID0gcmVxdWlyZShcImZpcmViYXNlLWFkbWluXCIpXHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9hdXRoXCI7XHJcblxyXG5cclxuY29uc3QgYTphbnkgPSB7XHJcbiAgXCJ0eXBlXCI6IFwic2VydmljZV9hY2NvdW50XCIsXHJcbiAgXCJwcm9qZWN0X2lkXCI6IFwicnVkaHJham9zaGljb21cIixcclxuICBcInByaXZhdGVfa2V5X2lkXCI6IFwiOWZlZjM2YjI3OWE0MTk0OGU2NjQzNDM0ZGY5NzMyMDgxYTViZDI5NVwiLFxyXG4gIFwicHJpdmF0ZV9rZXlcIjogXCItLS0tLUJFR0lOIFBSSVZBVEUgS0VZLS0tLS1cXG5NSUlFdlFJQkFEQU5CZ2txaGtpRzl3MEJBUUVGQUFTQ0JLY3dnZ1NqQWdFQUFvSUJBUURCYVBiU0lJM1RpdnMrXFxuRDlpRWlPZW03ZVFjM25EcnVCVUQwTE0xUVEyYm1NQzNVUVlnV3lNaUgvdW5waE5zSTI3Y1Q4TXBVdjE3bnUzUlxcbjRKYnQyczUzWmVFRHNERXJLWlVIbkx6eGIrZTh6YjdsQVlPc016S2F0cVNOUHVPSGh3QjhhU1NKQXF3RkMxdXBcXG5XbituVTc3T1Z2bEhiYmhDUW8rd0dzeks5U2lzME1jak1ZWHF3dnR5MjVSNmwzd3Jrc1I5ZGVQbWZLSkpKVjA5XFxuOWhON25hc3Z1MEhtZzNnOVNVeUh3VlZhRFcwZy8zVVZBOXN5MkJkb1NkNWk4c2UxTCt5TlFuYytZaFZyWVlMU1xcbnBUZExLdlpOaCtnTHZGK0R1cXljaXkyS3FiRU12UzZTUlQyQXJtWWVHK3FRaGwrV1ZSd0xTQnNRQUY0d1FBZ0lcXG5udTczWjhKdEFnTUJBQUVDZ2dFQUdDSnkrbEdab1JZc3Q5ZmVXdHVDbksvKzBTTm96K0ZPcmdVeTk2aEFmSFFaXFxuU0ViU0R1T1FoTWVjN1pTcHc4ckFJTG5MVHJMT2NzaW9RSkpZQXlKVXRVMS9RS2lSMmlMOE45RDFPdU9OOVY5dlxcblBNQnRuK1Zib1RhOVhlckZGYnBnOHlWanE3MHJuZzJHeUtGRVlLcndtbXI3L0UvU3VHSDU4QzNIOUdPWFNja2tcXG5IdUs2alNvWWxhQ3V6VHp6clRYcFpxQTBDTHRLcTcrMEFZek5Xc3VWajNOb1JQTUt1U3RYM2Y1TmpWamxtYWtmXFxuT3hkTzRVeTlTZGszVUsxYzhNMjNXMnJKNlB4aUdVdE9SREFhMjN3bXJ2WC92MUg2ZnBJZ0k1bkNnVW5jTDZWNVxcbjc0cjNtWWIwZUZKTU94Wlk5ZUJYYTIzL3hnaEdTWU11alJreFF1bk1BUUtCZ1FEbWdoUHh5SDd6OGhhUWV2SEpcXG4zOEZ0Y1RSWDl1T0NyZWJ5R0hXdUlqTVUvcUV6N0hjQVRRUFNSUm8vTkpHNW5yUGpFUzY3M2xnMzBMbzNNNkVVXFxuclp6aDFEV0xqOGxSRUVncE1DajJxRUswWjBMQ29QcU1vekNjd1JabUxiNVpMa1BFdWJRZCsyN2JJY0crQjl0Ylxcbnh0eVdYaGlxSkVXMFFNNmxoYk5XNXc2WWdRS0JnUURXekpuTy9ONTlGbXhaeGM1Y3hSbXh6Nm8wY2RkL3JQTXNcXG5MKzUrUjR0Qm85U0J5ZHpsdnA4NU80S1owZU9KVzJURjZOVC9nYmF5MzByLzF2V2R6UFFqNndHY0haYjY1WXF1XFxudThSWDBGUVB0MnN3WlFHQU4vdGJ2dGtTWlZ3ZGFOaW0yeHNDdEsvY0phWVpWUy9kalBFQUJJcFBES2l2ZzVaeVxcbk40eXJxQk1UN1FLQmdRQ0pmQkpMUnV1NXNxNFV0TS9jT1pKVUpZNHozVFRycjYrc3ZEd01oYWQwSVQrakNhb2NcXG55dEs1cXEreC9UZmh2Ni9KZ21rZWNzcXBWOXlKcWtpc1hiVFIyVkdxa1ROaEgxWDdBeGVicnRaQ1pjaWk3NE1oXFxuT1FCNHJvNGVtYkFMM3hWYWsrekRhVUZBZ0V6ZmZDNHcrbFo5ZFZnK3V1MjhTbDgyeUowait5SndnUUtCZ0Z2Ylxcbkh5TlBLKzRlT3JPaFRZQ0tvVlJTMUJ5ZFdtUzFGMENjTnNjMTNTMXkzQnVzc1pSbUVqMHRYOHBiNFl3SjAyeDNcXG5CeTlFejFacSt1MnhoVk80SStlQVJpMzIwV3YxNFhxYnZYazRFOXFzdTEvMHNkR2RIeGE2NUtWalJ5TWtoUkhGXFxudlNWSkU3TjNQakt6SlViL1VNaUxLSUpwalhHUk9qTVo0a1ErR2ZwNUFvR0FSOHh0KytNb3pWT2I5dnRGMXVUTFxcbjIzRmxxSEJ1U3FuUk1xc2dpV3RSSUErOU0rMDN4UkRQSjh6TzBtSW1tUCt0cHlTNmpER2dHWkUyTWNxeC9wRS9cXG5JQ2FNVlBHanNYWWRicDI3MGMwazJmSDJaL3RWWEFnckhoekdnTUJnemljY1dINjdSbjhtZ2p4M1QyYXFsWGR0XFxuZ05NQU9SaUNJTytMUytjZXhZUllGTGs9XFxuLS0tLS1FTkQgUFJJVkFURSBLRVktLS0tLVxcblwiLFxyXG4gIFwiY2xpZW50X2VtYWlsXCI6IFwiZmlyZWJhc2UtYWRtaW5zZGsteHVkMThAcnVkaHJham9zaGljb20uaWFtLmdzZXJ2aWNlYWNjb3VudC5jb21cIixcclxuICBcImNsaWVudF9pZFwiOiBcIjExMTA5NzMyMzc0NTc0MDUxNTk4OVwiLFxyXG4gIFwiYXV0aF91cmlcIjogXCJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvYXV0aFwiLFxyXG4gIFwidG9rZW5fdXJpXCI6IFwiaHR0cHM6Ly9vYXV0aDIuZ29vZ2xlYXBpcy5jb20vdG9rZW5cIixcclxuICBcImF1dGhfcHJvdmlkZXJfeDUwOV9jZXJ0X3VybFwiOiBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0c1wiLFxyXG4gIFwiY2xpZW50X3g1MDlfY2VydF91cmxcIjogXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9yb2JvdC92MS9tZXRhZGF0YS94NTA5L2ZpcmViYXNlLWFkbWluc2RrLXh1ZDE4JTQwcnVkaHJham9zaGljb20uaWFtLmdzZXJ2aWNlYWNjb3VudC5jb21cIlxyXG59XHJcbmluaXRpYWxpemVBcHAoe2NyZWRlbnRpYWw6Y2VydChhKX0pO1xyXG5leHBvcnQgY29uc3QgZmlyZXN0b3JlID0gZ2V0RmlyZXN0b3JlKCk7XHJcbmV4cG9ydCBjb25zdCBmaXJlQXV0aCA9IGdldEF1dGgoKTtcclxuIiwgImltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBDb250YWluZXIsXHJcbiAgRm9ybUhlbHBlclRleHQsXHJcbiAgRm9ybUxhYmVsLFxyXG4gIEhlYWRpbmcsXHJcbiAgSFN0YWNrLFxyXG4gIElucHV0LFxyXG4gIFNwYWNlcixcclxuICBUYWIsXHJcbiAgVGFiTGlzdCxcclxuICBUYWJQYW5lbCxcclxuICBUYWJQYW5lbHMsXHJcbiAgVGFicyxcclxuICB1c2VUb2FzdCxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBqc29uIH0gZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9hdXRoXCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQWN0aW9uRnVuY3Rpb24sXHJcbiAgRm9ybSxcclxuICByZWRpcmVjdCxcclxuICB1c2VBY3Rpb25EYXRhLFxyXG4gIHVzZVN1Ym1pdCxcclxuICB1c2VUcmFuc2l0aW9uLFxyXG59IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVBbmRTYXZlU2Vzc2lvbiB9IGZyb20gXCJ+L2xvZ2ljL3Nlc3Npb25BdXRyaExvZ2ljXCI7XHJcbmltcG9ydCB7IGNvbW1pdFNlc3Npb24gfSBmcm9tIFwifi9zZXNzaW9uc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVDdXN0b3JtVG9rZW4sIGNyZWF0ZVVzZXIgfSBmcm9tIFwifi91dGlscy9hdXRoLnNlcnZlclwiO1xyXG5pbXBvcnQgeyBmaXJlQXV0aCwgZmlyZXN0b3JlIH0gZnJvbSBcIn4vdXRpbHMvZmlyZS5zZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcclxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGxldCBmb3JtQWN0aW9uID0gZm9ybS5nZXQoXCJfYWN0aW9uXCIpO1xyXG4gIGxldCBlbWFpbCA9IGZvcm0uZ2V0KFwiZW1haWxcIik7XHJcbiAgbGV0IHBhc3N3b3JkID0gZm9ybS5nZXQoXCJwYXNzd29yZFwiKTtcclxuICBsZXQgcHJvZmlsZU5hbWUgPSBmb3JtLmdldChcInByb2ZpbGVOYW1lXCIpO1xyXG5cclxuICBjb25zdCBjb2wgPSBmaXJlc3RvcmUuY29sbGVjdGlvbihcInVzZXJzXCIpO1xyXG4gIGxldCByZXMgOiBhbnk7XHJcbiAgaWYgKGZvcm1BY3Rpb24gPT09IFwiY3JlYXRldXNlclwiKSB7XHJcbiAgICBpZiAoZW1haWwgJiYgcGFzc3dvcmQgJiYgcHJvZmlsZU5hbWUpIHtcclxuICAgICAgYXdhaXQgY3JlYXRlVXNlcih7XHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IHByb2ZpbGVOYW1lLFxyXG4gICAgICB9KS50aGVuKGFzeW5jICh1c2VyUmVjb3JkKSA9PiB7XHJcbiAgICAgICAgcmVzID0geyBzdGF0dXM6IHRydWUsIGlkOiB1c2VyUmVjb3JkLnVpZCB9O1xyXG4gICAgICAgIGF3YWl0IGNyZWF0ZUFuZFNhdmVTZXNzaW9uKHVzZXJSZWNvcmQudWlkLHJlcXVlc3QpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICByZXR1cm4gcmVzLnN0YXR1cyA/IHJlZGlyZWN0KFwiL2Rhc2hib2FyZFwiKSA6IHJlc1xyXG59O1xyXG5cclxuZnVuY3Rpb24gTG9naW4oKSB7XHJcbiAgY29uc3QgQWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGEoKTtcclxuICBjb25zdCB0b2FzdCA9IHVzZVRvYXN0KCk7XHJcblxyXG51c2VFZmZlY3QoKCkgPT4ge1xyXG4gIGlmKEFjdGlvbkRhdGEgIT0gbnVsbCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIk5PVCBOVUxMIDAxXCIpO1xyXG4gICAgXHJcbiAgICAgaWYoQWN0aW9uRGF0YS5zdGF0dXMgKXtcclxuICAgICAgIGNvbnNvbGUubG9nKFwiTk9UIE5VTEwgMDFcIik7XHJcbiAgICAgICByZWRpcmVjdCAoXCIvZGFzaGJvYXJkXCIpXHJcbiAgICAgfVxyXG4gIH1cclxuIFxyXG59LFtBY3Rpb25EYXRhXSlcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBtYXhIPVwiY29udGFpbmVyLmxnXCI+XHJcbiAgICAgIHtKU09OLnN0cmluZ2lmeShBY3Rpb25EYXRhKX1cclxuXHJcbiAgICAgIDxCb3hcclxuICAgICAgICBkaXNwbGF5PXtcImZsZXhcIn1cclxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgbXQ9XCIzMFwiXHJcbiAgICAgICAgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn1cclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3R5bGU9e3sgd2lkdGg6IFwiNjB2d1wiIH19PlxyXG4gICAgICAgICAgPFRhYnM+XHJcbiAgICAgICAgICAgIDxUYWJMaXN0PlxyXG4gICAgICAgICAgICAgIDxUYWI+TG9naW48L1RhYj5cclxuICAgICAgICAgICAgICA8VGFiPkNyZWF0ZSBOZXcgVXNlcjwvVGFiPlxyXG4gICAgICAgICAgICA8L1RhYkxpc3Q+XHJcbiAgICAgICAgICAgIDxUYWJQYW5lbHM+XHJcbiAgICAgICAgICAgICAgPFRhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPExvZ2luVXNlciAvPlxyXG4gICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgPFRhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPENyZWF0ZU5ld1VzZXIgLz5cclxuICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICA8L1RhYlBhbmVscz5cclxuICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBMb2dpblVzZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICA8Rm9ybUxhYmVsPkVtYWlsPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImpob25AZ21haWwuY29tXCJcclxuICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICA8Rm9ybUhlbHBlclRleHQ+V2UnbGwgbmV2ZXIgc2hhcmUgeW91ciBlbWFpbC48L0Zvcm1IZWxwZXJUZXh0PlxyXG4gICAgICAgIDxGb3JtTGFiZWw+UGFzc3dvcmQ8L0Zvcm1MYWJlbD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgID48L0lucHV0PlxyXG4gICAgICAgIDxTcGFjZXIgLz5cclxuICAgICAgICA8SFN0YWNrIG10PVwiNlwiIGp1c3RpZnlDb250ZW50PXtcImNlbnRlclwifSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIG5hbWU9XCJfYWN0aW9uXCJcclxuICAgICAgICAgICAgdmFsdWU9e1wibG9naW51c2VyXCJ9XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjb2xvclNjaGVtZT17XCJncmVlblwifVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8U3BhY2VyIC8+XHJcbiAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBDcmVhdGVOZXdVc2VyID0gKCkgPT4ge1xyXG4gIGNvbnN0IEFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhKCk7XHJcblxyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgIDxGb3JtTGFiZWw+UHJvZmlsZSBOYW1lPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgbmFtZT1cInByb2ZpbGVOYW1lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSmhvbiBEb2VcIlxyXG4gICAgICAgID48L0lucHV0PlxyXG4gICAgICAgIDxGb3JtTGFiZWw+RW1haWw8L0Zvcm1MYWJlbD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiamhvbkBnbWFpbC5jb21cIlxyXG4gICAgICAgID48L0lucHV0PlxyXG4gICAgICAgIDxGb3JtSGVscGVyVGV4dD5XZSdsbCBuZXZlciBzaGFyZSB5b3VyIGVtYWlsLjwvRm9ybUhlbHBlclRleHQ+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5QYXNzd29yZDwvRm9ybUxhYmVsPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgPFNwYWNlciAvPlxyXG4gICAgICAgIDxIU3RhY2sgbXQ9XCI2XCIganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgbmFtZT1cIl9hY3Rpb25cIlxyXG4gICAgICAgICAgICB2YWx1ZT17XCJjcmVhdGV1c2VyXCJ9XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjb2xvclNjaGVtZT17XCJncmVlblwifVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDcmVhdGUgVXNlclxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8U3BhY2VyIC8+XHJcbiAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIiwgImltcG9ydCB7IGNvbW1pdFNlc3Npb24sIGdldFNlc3Npb24gfSBmcm9tIFwifi9zZXNzaW9uc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVDdXN0b3JtVG9rZW4sIGNyZWF0ZVNlc3Npb25Db29raWVBdXRoIH0gZnJvbSBcIn4vdXRpbHMvYXV0aC5zZXJ2ZXJcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFuZFNhdmVTZXNzaW9uID0gYXN5bmMgKGlkOnN0cmluZyxyZXF1ZXN0OlJlcXVlc3QpID0+IHtcclxuICAgXHJcbiAgICBsZXQgdG9rZW5jcmVhdGVkID0gYXdhaXQgY3JlYXRlQ3VzdG9ybVRva2VuKGlkKVxyXG4gICBhd2FpdCBjb25zb2xlLmxvZyh0b2tlbmNyZWF0ZWQsXCJUb2tlbiBDcmVhdGVkXCIpO1xyXG4gICBcclxuLy8gICAgbGV0IHNlc3Npb25Ub2tlbiA9IGF3YWl0IGNyZWF0ZVNlc3Npb25Db29raWVBdXRoKHRva2VuY3JlYXRlZC50b1N0cmluZygpKVxyXG4vLyAgICBhd2FpdCBjb25zb2xlLmxvZyhzZXNzaW9uVG9rZW4sXCJTZXNzaW9uIFRva2VuIENyZWF0ZWRcIik7XHJcbiAgIFxyXG5cclxuICAgY29uc3Qgc2Vzc2lvbiAgPSBhd2FpdCBnZXRTZXNzaW9uKFxyXG4gICAgICAgcmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKVxyXG4gICApXHJcblxyXG4gICBhd2FpdCBzZXNzaW9uLnNldChcInVzZXJTZXNzaW9uXCIsdG9rZW5jcmVhdGVkLnRvU3RyaW5nKCkpXHJcbiAgIFxyXG4gICBhd2FpdCBjb21taXRTZXNzaW9uKHNlc3Npb24pXHJcbiAgIGNvbnNvbGUubG9nKFwiU0VTU0lPTiBDUkVBVEVEIEFORCBDT01NSVRFRFwiKTtcclxuICAgXHJcbn0iLCAiaW1wb3J0IHsgZmlyZUF1dGggfSBmcm9tIFwifi91dGlscy9maXJlLnNlcnZlclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSB9IGZyb20gXCJyZW1peFwiO1xyXG5pbnRlcmZhY2UgVXNlciB7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG4gIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVVzZXIgPSBhc3luYyAoeyBlbWFpbCwgcGFzc3dvcmQsIGRpc3BsYXlOYW1lIH06IFVzZXIpID0+IHtcclxuICByZXR1cm4gYXdhaXQgZmlyZUF1dGguY3JlYXRlVXNlcih7XHJcbiAgICBlbWFpbDogZW1haWwsXHJcbiAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVVc2VyID0gKHsgZW1haWwsIHBhc3N3b3JkLCBkaXNwbGF5TmFtZSwgdWlkIH06IGFueSkgPT4ge1xyXG4gIGZpcmVBdXRoXHJcbiAgICAudXBkYXRlVXNlcih1aWQsIHtcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgICBkaXNwbGF5TmFtZSxcclxuICAgIH0pXHJcbiAgICAudGhlbigodXNlclJlY29yZCkgPT4ge1xyXG4gICAgICAvLyBTZWUgdGhlIFVzZXJSZWNvcmQgcmVmZXJlbmNlIGRvYyBmb3IgdGhlIGNvbnRlbnRzIG9mIHVzZXJSZWNvcmQuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgdXNlclwiLCB1c2VyUmVjb3JkLnRvSlNPTigpKTtcclxuICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcImRvbmVcIiwgdXNlclJlY29yZCB9O1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvciB1cGRhdGluZyB1c2VyOlwiLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN0YXR1czogXCJmYWlsXCIsIGVycm9yIH07XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAodWlkOiBzdHJpbmcpID0+IHtcclxuICBmaXJlQXV0aFxyXG4gICAgLmRlbGV0ZVVzZXIodWlkKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSBkZWxldGVkIHVzZXJcIik7XHJcbiAgICAgIHJldHVybiB7IHN0YXR1czogXCJTdWNjZXNzZnVsbHkgZGVsZXRlZCB1c2VyXCIgfTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZGVsZXRpbmcgdXNlcjpcIiwgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdGF0dXM6IFwiRXJyb3IgZGVsZXRpbmcgdXNlcjpcIiwgZXJyb3IgfTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlQ3VzdG9ybVRva2VuID0gYXN5bmMgKHVpZDogc3RyaW5nKSA9PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGZpcmVBdXRoLmNyZWF0ZUN1c3RvbVRva2VuKHVpZCk7XHJcbn07XHJcblxyXG5jb25zdCB2ZXJpZnlUb2tlbiA9IChpZFRva2VuOiBzdHJpbmcpID0+IHtcclxuICBmaXJlQXV0aFxyXG4gICAgLnZlcmlmeUlkVG9rZW4oaWRUb2tlbilcclxuICAgIC50aGVuKChkZWNvZGVkVG9rZW4pID0+IHtcclxuICAgICAgLy8gQXBwbHkgTG9naWNcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICByZXR1cm4geyBzdGF0dXM6IFwiR290IGVycm9yIHZlcmlmeWluZyB0b2tlblwiLCBlcnIgfTtcclxuICAgIH0pO1xyXG59O1xyXG4vLyBjb25zdCBjcmVhdGVTZXNzaW9uQ29va2llID0gKCkgPT4ge1xyXG5cclxuLy8gfVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVNlc3Npb25Db29raWVBdXRoID0gYXN5bmMgKHVzZXJJZDogc3RyaW5nKSA9PiB7XHJcbiAgLy8gU2V0IHNlc3Npb24gZXhwaXJhdGlvbiB0byA1IGRheXMuXHJcbiAgY29uc3QgZXhwaXJlc0luID0gNjAgKiA2MCAqIDI0ICogNSAqIDEwMDA7XHJcbiAgcmV0dXJuIGF3YWl0IGZpcmVBdXRoLmNyZWF0ZVNlc3Npb25Db29raWUodXNlcklkLCB7IGV4cGlyZXNJbiB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVVzZXIsIHVwZGF0ZVVzZXIsIGRlbGV0ZVVzZXIsIGNyZWF0ZUN1c3Rvcm1Ub2tlbiwgdmVyaWZ5VG9rZW4gfTtcclxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzY3NzUwMzQ3JywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC03UldGTktVQy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRjU0NEVFWlMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1JRTJNWVVKUS5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtNk5NUkhaMkouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUdOTkFaRlVMLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9Mb2dpbic6eydpZCc6J3JvdXRlcy9Mb2dpbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidMb2dpbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9Mb2dpbi1TTVhZQU9NTy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstN1ROM0U1TlouanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZGFzaGJvYXJkJzp7J2lkJzoncm91dGVzL2Rhc2hib2FyZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidkYXNoYm9hcmQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZGFzaGJvYXJkLTdCR1lET0ROLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9kYXNoYm9hcmQvaW5kZXgnOnsnaWQnOidyb3V0ZXMvZGFzaGJvYXJkL2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvZGFzaGJvYXJkJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Rhc2hib2FyZC9pbmRleC1aNDNFVVZEUS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstR05OQVpGVUwuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LVNOM1E1VFVQLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay03VE4zRTVOWi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtNjc3NTAzNDcuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUdqQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksZ0JBQWdCLFFBQVE7QUFJNUIsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FB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

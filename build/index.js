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

// route:/home/rudrajoshi/Desktop/o/letter.js/app/root.tsx
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
  }, "Labs \u{1F52C}")), /* @__PURE__ */ import_react2.default.createElement(import_react.ListItem, {
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

// route:/home/rudrajoshi/Desktop/o/letter.js/app/root.tsx
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

// route:/home/rudrajoshi/Desktop/o/letter.js/app/routes/dashboard.tsx
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

// route:/home/rudrajoshi/Desktop/o/letter.js/app/routes/dashboard.tsx
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
  }, "Doc \u{1FA7A}"), /* @__PURE__ */ import_react6.default.createElement(import_react5.Divider, {
    size: "3",
    colorScheme: "green",
    orientation: "vertical"
  }), /* @__PURE__ */ import_react6.default.createElement(import_remix5.Outlet, null));
};
var dashboard_default = Dashboard;

// route:/home/rudrajoshi/Desktop/o/letter.js/app/routes/dashboard/index.tsx
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
    spacing: "2"
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
    style: { width: "70vw", minHeight: "40vh" },
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

// route:/home/rudrajoshi/Desktop/o/letter.js/app/routes/dashboard/index.tsx
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react9.Button, {
    my: "3",
    mb: "3"
  }, "Create Letter \u2764"), /* @__PURE__ */ React.createElement(import_react9.Divider, null), /* @__PURE__ */ React.createElement(import_react9.HStack, {
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(Viewer, null), /* @__PURE__ */ React.createElement(import_react9.Divider, {
    orientation: "vertical"
  }), /* @__PURE__ */ React.createElement(OldPrescriptions, null)));
}
var OldPrescriptions = () => {
  return /* @__PURE__ */ React.createElement(import_react9.VStack, {
    pl: "9",
    pt: "3",
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(import_react9.Heading, {
    fontSize: "2xl"
  }, "Old Prescriptions"), /* @__PURE__ */ React.createElement(import_react9.UnorderedList, null, /* @__PURE__ */ React.createElement(import_react9.ListItem, null, "date 17-15-87")));
};
var Viewer = () => {
  return /* @__PURE__ */ React.createElement(import_react9.Box, null, /* @__PURE__ */ React.createElement(import_react9.Box, {
    pt: "5"
  }, /* @__PURE__ */ React.createElement(SlateEditor, null)));
};
var dashboard_default2 = Index;

// route:/home/rudrajoshi/Desktop/o/letter.js/app/routes/Login.tsx
var Login_exports = {};
__export(Login_exports, {
  action: () => action,
  default: () => Login_default
});
init_react();
var import_react10 = require("@chakra-ui/react");
var import_react11 = __toESM(require("react"));
var import_remix6 = __toESM(require_remix());

// app/logic/sessionAutrhLogic.ts
init_react();

// app/utils/auth.server.ts
init_react();

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

// app/utils/auth.server.ts
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

// route:/home/rudrajoshi/Desktop/o/letter.js/app/routes/Login.tsx
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
  return res.status ? (0, import_remix6.redirect)("/dashboard") : res;
};
function Login() {
  const ActionData = (0, import_remix6.useActionData)();
  const toast = (0, import_react10.useToast)();
  (0, import_react11.useEffect)(() => {
    if (ActionData != null) {
      console.log("NOT NULL 01");
      if (ActionData.status) {
        console.log("NOT NULL 01");
        (0, import_remix6.redirect)("/dashboard");
      }
    }
  }, [ActionData]);
  return /* @__PURE__ */ import_react11.default.createElement(import_react10.Container, {
    maxH: "container.lg"
  }, JSON.stringify(ActionData), /* @__PURE__ */ import_react11.default.createElement(import_react10.Box, {
    display: "flex",
    justifyContent: "center",
    mt: "30",
    alignItems: "center"
  }, /* @__PURE__ */ import_react11.default.createElement(import_react10.Box, {
    style: { width: "60vw" }
  }, /* @__PURE__ */ import_react11.default.createElement(import_react10.Tabs, null, /* @__PURE__ */ import_react11.default.createElement(import_react10.TabList, null, /* @__PURE__ */ import_react11.default.createElement(import_react10.Tab, null, "Login"), /* @__PURE__ */ import_react11.default.createElement(import_react10.Tab, null, "Create New User")), /* @__PURE__ */ import_react11.default.createElement(import_react10.TabPanels, null, /* @__PURE__ */ import_react11.default.createElement(import_react10.TabPanel, null, /* @__PURE__ */ import_react11.default.createElement(LoginUser, null)), /* @__PURE__ */ import_react11.default.createElement(import_react10.TabPanel, null, /* @__PURE__ */ import_react11.default.createElement(CreateNewUser, null)))))));
}
var LoginUser = () => {
  return /* @__PURE__ */ import_react11.default.createElement(import_react10.Box, null, /* @__PURE__ */ import_react11.default.createElement(import_remix6.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react11.default.createElement(import_react10.FormLabel, null, "Center"), /* @__PURE__ */ import_react11.default.createElement(import_react10.Input, {
    name: "center",
    type: "center",
    required: true,
    placeholder: "Digital Labs"
  }), /* @__PURE__ */ import_react11.default.createElement(import_react10.Spacer, null), /* @__PURE__ */ import_react11.default.createElement(import_react10.FormLabel, null, "Email"), /* @__PURE__ */ import_react11.default.createElement(import_react10.Input, {
    name: "email",
    type: "email",
    required: true,
    placeholder: "jhon@gmail.com"
  }), /* @__PURE__ */ import_react11.default.createElement(import_react10.FormHelperText, null, "We'll never share your email."), /* @__PURE__ */ import_react11.default.createElement(import_react10.FormLabel, null, "Password"), /* @__PURE__ */ import_react11.default.createElement(import_react10.Input, {
    name: "password",
    required: true,
    placeholder: "password",
    type: "password"
  }), /* @__PURE__ */ import_react11.default.createElement(import_react10.Spacer, null), /* @__PURE__ */ import_react11.default.createElement(import_react10.HStack, {
    mt: "6",
    justifyContent: "center",
    alignItems: "center"
  }, /* @__PURE__ */ import_react11.default.createElement(import_react10.Button, {
    name: "_action",
    value: "loginuser",
    type: "submit",
    colorScheme: "green"
  }, "Login"), /* @__PURE__ */ import_react11.default.createElement(import_react10.Spacer, null))));
};
var CreateNewUser = () => {
  const ActionData = (0, import_remix6.useActionData)();
  return /* @__PURE__ */ import_react11.default.createElement(import_react10.Box, null, /* @__PURE__ */ import_react11.default.createElement(import_remix6.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react11.default.createElement(import_react10.FormLabel, null, "Profile Name"), /* @__PURE__ */ import_react11.default.createElement(import_react10.Input, {
    type: "text",
    required: true,
    name: "profileName",
    placeholder: "Jhon Doe"
  }), /* @__PURE__ */ import_react11.default.createElement(import_react10.FormLabel, null, "Email"), /* @__PURE__ */ import_react11.default.createElement(import_react10.Input, {
    type: "email",
    required: true,
    name: "email",
    placeholder: "jhon@gmail.com"
  }), /* @__PURE__ */ import_react11.default.createElement(import_react10.FormHelperText, null, "We'll never share your email."), /* @__PURE__ */ import_react11.default.createElement(import_react10.FormLabel, null, "Password"), /* @__PURE__ */ import_react11.default.createElement(import_react10.Input, {
    required: true,
    placeholder: "password",
    name: "password",
    type: "password"
  }), /* @__PURE__ */ import_react11.default.createElement(import_react10.FormLabel, null, "Centre Name"), /* @__PURE__ */ import_react11.default.createElement(import_react10.Input, {
    type: "text",
    required: true,
    name: "centerName",
    placeholder: "Center Name"
  }), /* @__PURE__ */ import_react11.default.createElement(import_react10.FormLabel, null, "Licence"), /* @__PURE__ */ import_react11.default.createElement(import_react10.Input, {
    type: "file",
    required: true
  }), /* @__PURE__ */ import_react11.default.createElement(import_react10.Spacer, null), /* @__PURE__ */ import_react11.default.createElement(import_react10.HStack, {
    mt: "6",
    justifyContent: "center",
    alignItems: "center"
  }, /* @__PURE__ */ import_react11.default.createElement(import_react10.Button, {
    name: "_action",
    value: "createuser",
    type: "submit",
    colorScheme: "green"
  }, "Create User"), /* @__PURE__ */ import_react11.default.createElement(import_react10.Spacer, null))));
};
var Login_default = Login;

// route:/home/rudrajoshi/Desktop/o/letter.js/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  loader: () => loader2
});
init_react();
var import_react12 = require("@chakra-ui/react");
var import_react13 = __toESM(require("react"));
var import_remix7 = __toESM(require_remix());
var loader2 = async () => {
  const collectionUser = firestore.collection("users");
  let res = await collectionUser.doc().set({ first: "Jhson", last: "Doe", email: "rudra@gmial.com" });
  return { msg: "saved data", res };
};
function Index2() {
  const post = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement(import_react12.Heading, null, "Home Page"), JSON.stringify(post));
}
var routes_default = Index2;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "10c22e0a", "entry": { "module": "/build/entry.client-7RWFNKUC.js", "imports": ["/build/_shared/chunk-F544EEZS.js", "/build/_shared/chunk-IE2MYUJQ.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-6IP2LPWS.js", "imports": ["/build/_shared/chunk-GNNAZFUL.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/Login": { "id": "routes/Login", "parentId": "root", "path": "Login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/Login-34G3PPIS.js", "imports": ["/build/_shared/chunk-7TN3E5NZ.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-YZ3X6R3X.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard/index": { "id": "routes/dashboard/index", "parentId": "routes/dashboard", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/dashboard/index-RI2PLYKH.js", "imports": ["/build/_shared/chunk-GNNAZFUL.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-ABCIPAHV.js", "imports": ["/build/_shared/chunk-7TN3E5NZ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-10C22E0A.js" };

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
  "routes/Login": {
    id: "routes/Login",
    parentId: "root",
    path: "Login",
    index: void 0,
    caseSensitive: void 0,
    module: Login_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L2hvbWUvcnVkcmFqb3NoaS9EZXNrdG9wL28vbGV0dGVyLmpzL2FwcC9yb290LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9OYXZiYXIudHN4IiwgInJvdXRlOi9ob21lL3J1ZHJham9zaGkvRGVza3RvcC9vL2xldHRlci5qcy9hcHAvcm91dGVzL2Rhc2hib2FyZC50c3giLCAiLi4vYXBwL3Nlc3Npb25zLnRzIiwgInJvdXRlOi9ob21lL3J1ZHJham9zaGkvRGVza3RvcC9vL2xldHRlci5qcy9hcHAvcm91dGVzL2Rhc2hib2FyZC9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvU2xhdGVFZGl0b3IudHN4IiwgInJvdXRlOi9ob21lL3J1ZHJham9zaGkvRGVza3RvcC9vL2xldHRlci5qcy9hcHAvcm91dGVzL0xvZ2luLnRzeCIsICIuLi9hcHAvbG9naWMvc2Vzc2lvbkF1dHJoTG9naWMudHMiLCAiLi4vYXBwL3V0aWxzL2F1dGguc2VydmVyLnRzIiwgIi4uL2FwcC91dGlscy9maXJlLnNlcnZlci50cyIsICJyb3V0ZTovaG9tZS9ydWRyYWpvc2hpL0Rlc2t0b3Avby9sZXR0ZXIuanMvYXBwL3JvdXRlcy9pbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwiY29tcHJlc3Npb25cIjtcbmltcG9ydCBtb3JnYW4gZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9leHByZXNzXCI7XG5cbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4vLyBodHRwOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXNlY3VyaXR5Lmh0bWwjYXQtYS1taW5pbXVtLWRpc2FibGUteC1wb3dlcmVkLWJ5LWhlYWRlclxuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XG5cbi8vIFJlbWl4IGZpbmdlcnByaW50cyBpdHMgYXNzZXRzIHNvIHdlIGNhbiBjYWNoZSBmb3JldmVyLlxuYXBwLnVzZShcbiAgXCIvYnVpbGRcIixcbiAgZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBpbW11dGFibGU6IHRydWUsIG1heEFnZTogXCIxeVwiIH0pXG4pO1xuXG4vLyBFdmVyeXRoaW5nIGVsc2UgKGxpa2UgZmF2aWNvbi5pY28pIGlzIGNhY2hlZCBmb3IgYW4gaG91ci4gWW91IG1heSB3YW50IHRvIGJlXG4vLyBtb3JlIGFnZ3Jlc3NpdmUgd2l0aCB0aGlzIGNhY2hpbmcuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgbWF4QWdlOiBcIjFoXCIgfSkpO1xuXG5hcHAudXNlKG1vcmdhbihcInRpbnlcIikpO1xuXG5hcHAuYWxsKFxuICBcIipcIixcbiAgY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVlxuICB9KVxuKTtcblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvaG9tZS9ydWRyYWpvc2hpL0Rlc2t0b3Avby9sZXR0ZXIuanMvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL2hvbWUvcnVkcmFqb3NoaS9EZXNrdG9wL28vbGV0dGVyLmpzL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvaG9tZS9ydWRyYWpvc2hpL0Rlc2t0b3Avby9sZXR0ZXIuanMvYXBwL3JvdXRlcy9kYXNoYm9hcmQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9ob21lL3J1ZHJham9zaGkvRGVza3RvcC9vL2xldHRlci5qcy9hcHAvcm91dGVzL2Rhc2hib2FyZC9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL2hvbWUvcnVkcmFqb3NoaS9EZXNrdG9wL28vbGV0dGVyLmpzL2FwcC9yb3V0ZXMvTG9naW4udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9ob21lL3J1ZHJham9zaGkvRGVza3RvcC9vL2xldHRlci5qcy9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvZGFzaGJvYXJkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kYXNoYm9hcmRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiZGFzaGJvYXJkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9kYXNoYm9hcmQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Rhc2hib2FyZC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2Rhc2hib2FyZFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL0xvZ2luXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9Mb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJMb2dpblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gICAgXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBDaGFrcmFQcm92aWRlciwgQ29sb3JNb2RlU2NyaXB0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vY29tcG9uZW50cy9OYXZiYXJcIjtcbi8vIDEuIGltcG9ydCBgZXh0ZW5kVGhlbWVgIGZ1bmN0aW9uXG5pbXBvcnQgeyBleHRlbmRUaGVtZSwgdHlwZSBUaGVtZUNvbmZpZyB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbi8vIDIuIEFkZCB5b3VyIGNvbG9yIG1vZGUgY29uZmlnXG5jb25zdCBjb25maWc6IFRoZW1lQ29uZmlnID0ge1xuICBpbml0aWFsQ29sb3JNb2RlOiAnZGFyaycsXG4gIHVzZVN5c3RlbUNvbG9yTW9kZTogZmFsc2UsXG59XG5cbi8vIDMuIGV4dGVuZCB0aGUgdGhlbWVcbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoeyBjb25maWcgfSlcblxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJOZXcgUmVtaXggQXBwXCIgfTtcbn07XG5cbmNvbnN0IERvY3VtZW50ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxib2R5PlxuICAgICAgIDxDb2xvck1vZGVTY3JpcHQgaW5pdGlhbENvbG9yTW9kZT17dGhlbWUuY29uZmlnLmluaXRpYWxDb2xvck1vZGV9IC8+XG4gICAgICA8Q2hha3JhUHJvdmlkZXI+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgICAgICAgIFxuICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICA8L2JvZHk+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxEb2N1bWVudCAvPlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBCb3gsIExpc3RJdGVtLCBVbm9yZGVyZWRMaXN0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcblxuZnVuY3Rpb24gTmF2YmFyKCkge1xuICByZXR1cm4gKFxuICAgIDxCb3ggYmFja2dyb3VuZD17XCJncmVlbi41MDBcIn0+XG4gICAgICAgIDxVbm9yZGVyZWRMaXN0IGRpc3BsYXk9e1wiZmxleFwifT5cbiAgICAgICAgICA8TGlzdEl0ZW0gcD1cIjNcIiBjb2xvcj17XCJ3aGl0ZVwifSAgbGlzdFN0eWxlVHlwZT17XCJub25lXCJ9ID48TGluayB0bz1cIi9cIj5MYWJzIFx1RDgzRFx1REQyQzwvTGluaz48L0xpc3RJdGVtPlxuICAgICAgICAgIDxMaXN0SXRlbSBwPVwiM1wiIGNvbG9yPXtcIndoaXRlXCJ9IGxpc3RTdHlsZVR5cGU9e1wibm9uZVwifSA+PExpbmsgdG89XCIvZGFzaGJvYXJkXCI+RGFzaGJvYXJkPC9MaW5rPjwvTGlzdEl0ZW0+XG4gICAgICAgICAgPExpc3RJdGVtIHA9XCIzXCIgY29sb3I9e1wid2hpdGVcIn0gbGlzdFN0eWxlVHlwZT17XCJub25lXCJ9ID48TGluayB0bz1cIi9sb2dpblwiPkxvZ2luPC9MaW5rPjwvTGlzdEl0ZW0+XG4gICAgICAgIDwvVW5vcmRlcmVkTGlzdD5cbiAgICA8L0JveD4gIFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhciIsICJpbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBEaXZpZGVyLFxuICBIZWFkaW5nLFxuICBIU3RhY2ssXG4gIExpc3RJdGVtLFxuICBUZXh0LFxuICBVbm9yZGVyZWRMaXN0LFxuICBWU3RhY2ssXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBqc29uLCBMaW5rLCBMaW5rcywgTG9hZGVyRnVuY3Rpb24sIE91dGxldCwgcmVkaXJlY3QsIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwifi9zZXNzaW9uc1wiO1xuXG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6TG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe3JlcXVlc3R9KSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKFxuICAgIHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIilcbiAgKTtcbiAgaWYgKHNlc3Npb24uaGFzKFwidXNlclNlc3Npb25cIikpIHtcbiAgICAvLyBSZWRpcmVjdCB0byB0aGUgaG9tZSBwYWdlIGlmIHRoZXkgYXJlIGFscmVhZHkgc2lnbmVkIGluLlxuICAgIFxuICAgIHJldHVybiB7c2hvd1BhZ2U6dHJ1ZX1cbiAgfVxuICByZXR1cm4ge3Nob3dQYWdlOmZhbHNlfVxuXG59XG5cblxuXG5mdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG5cbiAgY29uc3Qge3Nob3dQYWdlfSA9IHVzZUxvYWRlckRhdGEoKSBcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgey8qIHtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHNob3dQYWdlKVxuICAgIH0gKi99XG4gICAge1xuICAgICAgdHJ1ZSA/ICA8UHJpdmF0ZVBhZ2UgLz4gOiA8Tm90U2lnbkluUGFnZSAvPlxuICAgIH1cblxuICAgIDwvPlxuICApO1xufVxuXG5jb25zdCBOb3RTaWduSW5QYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICAgIDxIZWFkaW5nPlVzZXIgTm90IExvZ2VkIGluPC9IZWFkaW5nPlxuICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiPkxvZ2luPC9MaW5rPlxuICAgIDwvQm94PlxuICApXG59XG5cblxuY29uc3QgUHJpdmF0ZVBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybihcbiAgICA8Q29udGFpbmVyIG1heFc9XCJvbnRhaW5lci5sZ1wiPlxuICAgIDxIZWFkaW5nIHB5PVwiM1wiPkRvYyBcdUQ4M0VcdURFN0E8L0hlYWRpbmc+XG4gICAgXG4gICAgICBcbiAgICAgIDxEaXZpZGVyIHNpemU9e1wiM1wifSBjb2xvclNjaGVtZT1cImdyZWVuXCIgb3JpZW50YXRpb249J3ZlcnRpY2FsJyAvPlxuICAgICAgPE91dGxldCAvPlxuICAgIFxuICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiIsICJpbXBvcnQge2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlfSBmcm9tIFwicmVtaXhcIlxuXG5cbmV4cG9ydCBjb25zdCB7Z2V0U2Vzc2lvbixjb21taXRTZXNzaW9uLGRlc3Ryb3lTZXNzaW9ufSAgPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XG4gICAgY29va2llOntcbiAgICAgICAgbmFtZTpcIl9fc2Vzc2lvblwiXG4gICAgfVxufSlcblxuXG4iLCAiaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIERpdmlkZXIsXG4gIEhlYWRpbmcsXG4gIEhlYWRpbmdQcm9wcyxcbiAgSFN0YWNrLFxuICBMaXN0SXRlbSxcbiAgT21pdENvbW1vblByb3BzLFxuICBPcmRlcmVkTGlzdCxcbiAgVGV4dCxcbiAgVW5vcmRlcmVkTGlzdCxcbiAgVlN0YWNrLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgU2xhdGVFZGl0b3IgZnJvbSBcIn4vY29tcG9uZW50cy9TbGF0ZUVkaXRvclwiO1xuXG5cblxuZnVuY3Rpb24gSW5kZXgoKSB7XG5cbiAgXG4gIHJldHVybiAoXG4gICAgPD5cblxuICAgICAgPEJ1dHRvbiAgbXk9XCIzXCIgbWI9XCIzXCIgPkNyZWF0ZSBMZXR0ZXIgXHUyNzY0PC9CdXR0b24+XG4gICAgICA8RGl2aWRlciAvPlxuICAgICAgPEhTdGFjayBqdXN0aWZ5Q29udGVudD17XCJmbGV4LXN0YXJ0XCJ9IGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCI+XG4gICAgICA8Vmlld2VyIC8+XG4gICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj0ndmVydGljYWwnIC8+XG4gICAgICA8T2xkUHJlc2NyaXB0aW9ucyAvPlxuICAgICAgPC9IU3RhY2s+XG4gICAgPC8+XG4gICk7XG59XG5cblxuY29uc3QgT2xkUHJlc2NyaXB0aW9ucyA9ICgpID0+IHtcbiAgXG4gIHJldHVybiAoXG4gICAgPFZTdGFjayBwbD1cIjlcIiBwdD1cIjNcIiBhbGlnbkl0ZW1zPXtcImZsZXgtc3RhcnRcIn0+XG4gICAgICAgIDxIZWFkaW5nIGZvbnRTaXplPVwiMnhsXCI+T2xkIFByZXNjcmlwdGlvbnM8L0hlYWRpbmc+XG4gICAgICAgIDxVbm9yZGVyZWRMaXN0PlxuICAgICAgICAgIDxMaXN0SXRlbT5kYXRlIDE3LTE1LTg3PC9MaXN0SXRlbT5cbiAgICAgICAgPC9Vbm9yZGVyZWRMaXN0PlxuICAgIDwvVlN0YWNrPlxuICApO1xufTtcblxuY29uc3QgVmlld2VyID0gKCkgPT4ge1xuICByZXR1cm4oXG4gICAgPEJveCA+XG4gICAgICA8Qm94IHB0PVwiNVwiPlxuICAgICAgICBcbiAgICAgIDxTbGF0ZUVkaXRvciAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiIsICJpbXBvcnQgeyBDbG9zZUJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgSGVhZGluZywgSFN0YWNrLCBJbnB1dCwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgZSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGlzSG90a2V5IGZyb20gXCJpcy1ob3RrZXlcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQmFzZUVkaXRvcixcbiAgQmFzZUVsZW1lbnQsXG4gIGNyZWF0ZUVkaXRvcixcbiAgRGVzY2VuZGFudCxcbiAgRWRpdG9yLFxuICBFbGVtZW50IGFzIFNsYXRlRWxlbWVudCxcbiAgVHJhbnNmb3Jtcyxcbn0gZnJvbSBcInNsYXRlXCI7XG5pbXBvcnQgeyBIaXN0b3J5RWRpdG9yLCB3aXRoSGlzdG9yeSB9IGZyb20gXCJzbGF0ZS1oaXN0b3J5XCI7XG5pbXBvcnQgeyBSZWFjdEVkaXRvciwgU2xhdGUsIHdpdGhSZWFjdCwgRWRpdGFibGUgfSBmcm9tIFwic2xhdGUtcmVhY3RcIjtcblxuY29uc3QgSE9US0VZUzogYW55ID0ge1xuICBcIm1vZCtiXCI6IFwiYm9sZFwiLFxuICBcIm1vZCtpXCI6IFwiaXRhbGljXCIsXG4gIFwibW9kK3VcIjogXCJ1bmRlcmxpbmVcIixcbiAgXCJtb2QrYFwiOiBcImNvZGVcIixcbn07XG5cbmNvbnN0IExJU1RfVFlQRVMgPSBbXCJudW1iZXJlZC1saXN0XCIsIFwiYnVsbGV0ZWQtbGlzdFwiXTtcbmltcG9ydCB7XG4gIEZhQm9sZCxcbiAgRmFJdGFsaWMsXG4gIEZhVW5kZXJsaW5lLFxuICBGYUNvZGUsXG4gIEZhSGVhZGluZyxcbn0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQge0JpUmVmcmVzaH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCJcblxudHlwZSBDdXN0b21UZXh0ID0geyB0ZXh0OiBzdHJpbmcgfTtcbnR5cGUgQ3VzdG9tRWxlbWVudCA9IHsgdHlwZTogXCJwYXJhZ3JhcGhcIjsgY2hpbGRyZW46IEN1c3RvbVRleHRbXSB9O1xuXG5kZWNsYXJlIG1vZHVsZSBcInNsYXRlXCIge1xuICBpbnRlcmZhY2UgQ3VzdG9tVHlwZXMge1xuICAgIEVkaXRvcjogQmFzZUVkaXRvciAmIFJlYWN0RWRpdG9yICYgSGlzdG9yeUVkaXRvcjtcbiAgICBFbGVtZW50OiBDdXN0b21FbGVtZW50O1xuICAgIFRleHQ6IEN1c3RvbVRleHQ7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNsYXRlRWRpdG9yKCkge1xuICBjb25zdCBpbml0aWFsVmFsdWU6IERlc2NlbmRhbnRbXSA9IFtcbiAgICAgIHtcbiAgICAgIHR5cGU6IFwicGFyYWdyYXBoXCIsXG4gICAgICBjaGlsZHJlbjogW3sgdGV4dDogXCJBIGxpbmUgb2YgdGV4dCBpbiBhIHBhcmFncmFwaC5cIiB9XSxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGU8RGVzY2VuZGFudFtdPihpbml0aWFsVmFsdWUpO1xuICBjb25zdCByZW5kZXJFbGVtZW50ID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiA8RWxlbWVudCB7Li4ucHJvcHN9IC8+LCBbXSk7XG4gIGNvbnN0IHJlbmRlckxlYWYgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IDxMZWFmIHsuLi5wcm9wc30gLz4sIFtdKTtcbiAgY29uc3QgZWRpdG9yID0gdXNlTWVtbyhcbiAgICAoKSA9PiB3aXRoSGlzdG9yeSh3aXRoUmVhY3QoY3JlYXRlRWRpdG9yKCkgYXMgUmVhY3RFZGl0b3IpKSxcbiAgICBbXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPEJveD5cbiAgICAgIDxCb3g+XG4gICAgICAgIHsvKiA8SFN0YWNrIHNwYWNpbmc9e1wiMlwifSBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIj4gKi99XG4gICAgICAgIDxIU3RhY2sgc3BhY2luZz17XCIyXCJ9PlxuICAgICAgICAgPEhTdGFjaz5cbiAgICAgICAgIDxNYXJrQnV0dG9uXG4gICAgICAgICAgICBlPXtlZGl0b3J9XG4gICAgICAgICAgICBtcj1cIjFcIlxuICAgICAgICAgICAgc2l6ZT17XCJzbVwifVxuICAgICAgICAgICAgaWNvbj17PEZhQm9sZCAvPn1cbiAgICAgICAgICAgIGZvcm1hdD17XCJib2xkXCJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQm9sZFxuICAgICAgICAgIDwvTWFya0J1dHRvbj5cbiAgICAgICAgICA8TWFya0J1dHRvblxuICAgICAgICAgICAgZT17ZWRpdG9yfVxuICAgICAgICAgICAgaWNvbj17PEZhSXRhbGljIC8+fVxuICAgICAgICAgICAgZm9ybWF0PXtcIml0YWxpY1wifVxuICAgICAgICAgICAgbXg9XCIxXCJcbiAgICAgICAgICAgIHNpemU9e1wic21cIn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBJdGFsaWNcbiAgICAgICAgICA8L01hcmtCdXR0b24+XG4gICAgICAgICAgPE1hcmtCdXR0b25cbiAgICAgICAgICAgIGU9e2VkaXRvcn1cbiAgICAgICAgICAgIGljb249ezxGYUNvZGUgLz59XG4gICAgICAgICAgICBmb3JtYXQ9e1wiY29kZVwifVxuICAgICAgICAgICAgbXg9XCIxXCJcbiAgICAgICAgICAgIHNpemU9e1wic21cIn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBjb2RlXG4gICAgICAgICAgPC9NYXJrQnV0dG9uPlxuICAgICAgICAgIDxCbG9ja0J1dHRvblxuICAgICAgICAgICAgZT17ZWRpdG9yfVxuICAgICAgICAgICAgaWNvbj17PEZhSGVhZGluZyAvPn1cbiAgICAgICAgICAgIGZvcm1hdD17XCJoZWFkaW5nXCJ9XG4gICAgICAgICAgICBteD1cIjFcIlxuICAgICAgICAgICAgc2l6ZT17XCJzbVwifVxuICAgICAgICAgID5cbiAgICAgICAgICAgIGgxXG4gICAgICAgICAgPC9CbG9ja0J1dHRvbj5cbiAgICAgICAgICA8SW5wdXQgdHlwZT1cImNvbG9yXCIgbWF4Vz17XCI2MHB4XCJ9IHNpemU9XCJzbVwiLz5cbiAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICAgIDxIU3RhY2s+XG4gICAgICAgICAgICAgIDxIU3RhY2s+PFRleHQ+U3RhdHVzIDwvVGV4dD48QmlSZWZyZXNoIC8+PC9IU3RhY2s+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cIm1kXCIgY29sb3JTY2hlbWU9e1wiZ3JlZW5cIn0+XHUyNzE0PC9CdXR0b24+XG4gICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgICAgey8qIDxNYXJrQnV0dG9uIGU9e2VkaXRvcn0gaWNvbj1cIlwiIGZvcm1hdD17XCJcIn0gbXg9XCIxXCIgc2l6ZT17XCJzbVwifT5oMjwvTWFya0J1dHRvbj4gKi99XG4gICAgICAgIDwvSFN0YWNrPlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94IHB0PVwiM1wiIGJvcmRlcj17XCIxcHhcIn0gYm9yZGVyQ29sb3I9XCJncmVlblwiIGJvcmRlclN0eWxlPXtcImRhc2hlZFwifSBzdHlsZT17e3dpZHRoOic3MHZ3JyxtaW5IZWlnaHQ6XCI0MHZoXCJ9fSBwPVwiM1wiIG10PVwiM1wiPlxuICAgICAgICA8U2xhdGUgZWRpdG9yPXtlZGl0b3J9IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZShlKX0+XG4gICAgICAgICAgPEVkaXRhYmxlXG4gICAgICAgICAgICByZW5kZXJFbGVtZW50PXtyZW5kZXJFbGVtZW50fVxuICAgICAgICAgICAgcmVuZGVyTGVhZj17cmVuZGVyTGVhZn1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgc29tZSByaWNoIHRleHRcdTIwMjZcIlxuICAgICAgICAgICAgc3BlbGxDaGVja1xuICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICBvbktleURvd249eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IGhvdGtleSBpbiBIT1RLRVlTKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzSG90a2V5KGhvdGtleSwgZXZlbnQgYXMgYW55KSkge1xuICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcmsgPSBIT1RLRVlTW2hvdGtleV07XG4gICAgICAgICAgICAgICAgICB0b2dnbGVNYXJrKGVkaXRvciwgbWFyayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID48L0VkaXRhYmxlPlxuICAgICAgICA8L1NsYXRlPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59XG5cbmNvbnN0IEJsb2NrQnV0dG9uID0gKHsgZm9ybWF0LCBpY29uLCBlIH06IGFueSkgPT4ge1xuICBsZXQgZWRpdG9yID0gZTtcbiAgbGV0IG1hcmsgPSBmb3JtYXQ7XG4gIHJldHVybiAoXG4gICAgPEJ1dHRvblxuICAgICAgc2l6ZT17XCJzbVwifVxuICAgICAgYm9yZGVyUmFkaXVzPVwiMVwiXG4gICAgICBjb2xvclNjaGVtZT17XCJncmF5XCJ9XG4gICAgICBvbk1vdXNlRG93bj17KGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRvZ2dsZUJsb2NrKGVkaXRvciwgZm9ybWF0KTtcbiAgICAgIH19XG4gICAgPlxuICAgICAge2ljb259XG4gICAgPC9CdXR0b24+XG4gICk7XG59O1xuXG5jb25zdCBNYXJrQnV0dG9uID0gKHsgZm9ybWF0LCBpY29uLCBlIH06IGFueSkgPT4ge1xuICAvLyBjb25zdCBlZGl0b3I6YW55ID0gdXNlU3RhXG4gIGxldCBlZGl0b3IgPSBlO1xuICBsZXQgbWFyayA9IGZvcm1hdDtcbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uXG4gICAgICBzaXplPXtcInNtXCJ9XG4gICAgICBib3JkZXJSYWRpdXM9XCIxXCJcbiAgICAgIGNvbG9yU2NoZW1lPXtcImdyYXlcIn1cbiAgICAgIG9uTW91c2VEb3duPXsoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdG9nZ2xlTWFyayhlZGl0b3IsIGZvcm1hdCk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIHtpY29ufVxuICAgIDwvQnV0dG9uPlxuICApO1xufTtcblxuY29uc3QgRWxlbWVudCA9ICh7IGF0dHJpYnV0ZXMsIGNoaWxkcmVuLCBlbGVtZW50IH06IGFueSkgPT4ge1xuICBzd2l0Y2ggKGVsZW1lbnQudHlwZSkge1xuICAgIGNhc2UgXCJibG9jay1xdW90ZVwiOlxuICAgICAgcmV0dXJuIDxibG9ja3F1b3RlIHsuLi5hdHRyaWJ1dGVzfT57Y2hpbGRyZW59PC9ibG9ja3F1b3RlPjtcbiAgICBjYXNlIFwiYnVsbGV0ZWQtbGlzdFwiOlxuICAgICAgcmV0dXJuIDx1bCB7Li4uYXR0cmlidXRlc30+e2NoaWxkcmVufTwvdWw+O1xuICAgIGNhc2UgXCJoZWFkaW5nXCI6XG4gICAgICByZXR1cm4gPEhlYWRpbmcgey4uLmF0dHJpYnV0ZXN9PntjaGlsZHJlbn08L0hlYWRpbmc+O1xuICAgIGNhc2UgXCJoZWFkaW5nLXR3b1wiOlxuICAgICAgcmV0dXJuIDxoMiB7Li4uYXR0cmlidXRlc30+e2NoaWxkcmVufTwvaDI+O1xuICAgIGNhc2UgXCJsaXN0LWl0ZW1cIjpcbiAgICAgIHJldHVybiA8bGkgey4uLmF0dHJpYnV0ZXN9PntjaGlsZHJlbn08L2xpPjtcbiAgICBjYXNlIFwibnVtYmVyZWQtbGlzdFwiOlxuICAgICAgcmV0dXJuIDxvbCB7Li4uYXR0cmlidXRlc30+e2NoaWxkcmVufTwvb2w+O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gPHAgey4uLmF0dHJpYnV0ZXN9PntjaGlsZHJlbn08L3A+O1xuICB9XG59O1xuXG5jb25zdCBMZWFmID0gKHsgYXR0cmlidXRlcywgY2hpbGRyZW4sIGxlYWYgfTogYW55KSA9PiB7XG4gIGlmIChsZWFmLmJvbGQpIHtcbiAgICBjaGlsZHJlbiA9IDxUZXh0IGFzPXtcInN0cm9uZ1wifT57Y2hpbGRyZW59PC9UZXh0PjtcbiAgfVxuXG4gIGlmIChsZWFmLmNvZGUpIHtcbiAgICBjaGlsZHJlbiA9IDxUZXh0IGFzPVwiY29kZVwiPntjaGlsZHJlbn08L1RleHQ+O1xuICB9XG5cbiAgaWYgKGxlYWYuaXRhbGljKSB7XG4gICAgY2hpbGRyZW4gPSA8VGV4dCBhcz17XCJlbVwifT57Y2hpbGRyZW59PC9UZXh0PjtcbiAgfVxuXG4gIGlmIChsZWFmLnVuZGVybGluZSkge1xuICAgIGNoaWxkcmVuID0gPFRleHQgYXM9XCJ1XCI+e2NoaWxkcmVufTwvVGV4dD47XG4gIH1cblxuICByZXR1cm4gPHNwYW4gey4uLmF0dHJpYnV0ZXN9PntjaGlsZHJlbn08L3NwYW4+O1xufTtcblxuZnVuY3Rpb24gdG9nZ2xlTWFyayhlZGl0b3I6IEVkaXRvciwgbWFyazogYW55KSB7XG4gIGNvbnN0IGlzQWN0aXZlID0gaXNNYXJrQWN0aXZlKGVkaXRvciwgbWFyayk7XG4gIGNvbnNvbGUubG9nKFwiVE9HR0xFIE1BUktFRCBXT1JLRURcIik7XG5cbiAgaWYgKGlzQWN0aXZlKSB7XG4gICAgRWRpdG9yLnJlbW92ZU1hcmsoZWRpdG9yLCBtYXJrKTtcbiAgfSBlbHNlIHtcbiAgICBFZGl0b3IuYWRkTWFyayhlZGl0b3IsIG1hcmssIHRydWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzTWFya0FjdGl2ZShlZGl0b3I6IEVkaXRvciwgbWFyazogYW55KSB7XG4gIGNvbnN0IG1hcmtzOiBhbnkgPSBFZGl0b3IubWFya3MoZWRpdG9yKTtcblxuICByZXR1cm4gbWFya3MgPyBtYXJrc1ttYXJrXSA9PT0gdHJ1ZSA6IGZhbHNlO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVCbG9jayhlZGl0b3I6IEVkaXRvciwgZm9ybWF0OiBhbnkpIHtcbiAgY29uc3QgaXNBY3RpdmUgPSBpc0Jsb2NrQWN0aXZlKGVkaXRvciwgZm9ybWF0KTtcbiAgY29uc3QgaXNMaXN0ID0gTElTVF9UWVBFUy5pbmNsdWRlcyhmb3JtYXQpO1xuXG4gIFRyYW5zZm9ybXMudW53cmFwTm9kZXMoZWRpdG9yLCB7XG4gICAgbWF0Y2g6IChuKSA9PlxuICAgICAgIUVkaXRvci5pc0VkaXRvcihuKSAmJlxuICAgICAgU2xhdGVFbGVtZW50LmlzRWxlbWVudChuKSAmJlxuICAgICAgTElTVF9UWVBFUy5pbmNsdWRlcyhuLnR5cGUpLFxuICAgIHNwbGl0OiB0cnVlLFxuICB9KTtcblxuICBjb25zdCBuZXdQcm9wZXJ0aWVzOiBQYXJ0aWFsPFNsYXRlRWxlbWVudD4gPSB7XG4gICAgdHlwZTogaXNBY3RpdmUgPyBcInBhcmFncmFwaFwiIDogaXNMaXN0ID8gXCJsaXN0LWl0ZW1cIiA6IGZvcm1hdCxcbiAgfTtcbiAgVHJhbnNmb3Jtcy5zZXROb2RlczxTbGF0ZUVsZW1lbnQ+KGVkaXRvciwgbmV3UHJvcGVydGllcyk7XG5cbiAgaWYgKCFpc0FjdGl2ZSAmJiBpc0xpc3QpIHtcbiAgICBjb25zdCBibG9jayA9IHsgdHlwZTogZm9ybWF0LCBjaGlsZHJlbjogW10gfTtcbiAgICBUcmFuc2Zvcm1zLndyYXBOb2RlcyhlZGl0b3IsIGJsb2NrKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0Jsb2NrQWN0aXZlKGVkaXRvcjogYW55LCBmb3JtYXQ6IGFueSkge1xuICBjb25zdCB7IHNlbGVjdGlvbiB9ID0gZWRpdG9yO1xuXG4gIGlmICghc2VsZWN0aW9uKSByZXR1cm4gZmFsc2U7XG5cbiAgY29uc3QgW21hdGNoXSA9IEFycmF5LmZyb20oXG4gICAgRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgYXQ6IEVkaXRvci51bmhhbmdSYW5nZShlZGl0b3IsIHNlbGVjdGlvbiksXG4gICAgICBtYXRjaDogKG4pID0+XG4gICAgICAgICFFZGl0b3IuaXNFZGl0b3IobikgJiYgU2xhdGVFbGVtZW50LmlzRWxlbWVudChuKSAmJiBuLnR5cGUgPT09IGZvcm1hdCxcbiAgICB9KVxuICApO1xuICByZXR1cm4gISFtYXRjaDtcbn1cbiIsICJpbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBGb3JtSGVscGVyVGV4dCxcbiAgRm9ybUxhYmVsLFxuICBIZWFkaW5nLFxuICBIU3RhY2ssXG4gIElucHV0LFxuICBTcGFjZXIsXG4gIFRhYixcbiAgVGFiTGlzdCxcbiAgVGFiUGFuZWwsXG4gIFRhYlBhbmVscyxcbiAgVGFicyxcbiAgdXNlVG9hc3QsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBqc29uIH0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vYXV0aFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBBY3Rpb25GdW5jdGlvbixcbiAgRm9ybSxcbiAgcmVkaXJlY3QsXG4gIHVzZUFjdGlvbkRhdGEsXG4gIHVzZVN1Ym1pdCxcbiAgdXNlVHJhbnNpdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBjcmVhdGVBbmRTYXZlU2Vzc2lvbiB9IGZyb20gXCJ+L2xvZ2ljL3Nlc3Npb25BdXRyaExvZ2ljXCI7XG5pbXBvcnQgeyBjb21taXRTZXNzaW9uIH0gZnJvbSBcIn4vc2Vzc2lvbnNcIjtcbmltcG9ydCB7IGNyZWF0ZUN1c3Rvcm1Ub2tlbiwgY3JlYXRlVXNlciB9IGZyb20gXCJ+L3V0aWxzL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBmaXJlQXV0aCwgZmlyZXN0b3JlIH0gZnJvbSBcIn4vdXRpbHMvZmlyZS5zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBsZXQgZm9ybUFjdGlvbiA9IGZvcm0uZ2V0KFwiX2FjdGlvblwiKTtcbiAgbGV0IGVtYWlsID0gZm9ybS5nZXQoXCJlbWFpbFwiKTtcbiAgbGV0IHBhc3N3b3JkID0gZm9ybS5nZXQoXCJwYXNzd29yZFwiKTtcbiAgbGV0IHByb2ZpbGVOYW1lID0gZm9ybS5nZXQoXCJwcm9maWxlTmFtZVwiKTtcblxuICBjb25zdCBjb2wgPSBmaXJlc3RvcmUuY29sbGVjdGlvbihcInVzZXJzXCIpO1xuICBsZXQgcmVzIDogYW55O1xuICBpZiAoZm9ybUFjdGlvbiA9PT0gXCJjcmVhdGV1c2VyXCIpIHtcbiAgICBpZiAoZW1haWwgJiYgcGFzc3dvcmQgJiYgcHJvZmlsZU5hbWUpIHtcbiAgICAgIGF3YWl0IGNyZWF0ZVVzZXIoe1xuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIGRpc3BsYXlOYW1lOiBwcm9maWxlTmFtZSxcbiAgICAgIH0pLnRoZW4oYXN5bmMgKHVzZXJSZWNvcmQpID0+IHtcbiAgICAgICAgcmVzID0geyBzdGF0dXM6IHRydWUsIGlkOiB1c2VyUmVjb3JkLnVpZCB9O1xuICAgICAgICBhd2FpdCBjcmVhdGVBbmRTYXZlU2Vzc2lvbih1c2VyUmVjb3JkLnVpZCxyZXF1ZXN0KVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gcmVzLnN0YXR1cyA/IHJlZGlyZWN0KFwiL2Rhc2hib2FyZFwiKSA6IHJlc1xufTtcblxuZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IEFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhKCk7XG4gIGNvbnN0IHRvYXN0ID0gdXNlVG9hc3QoKTtcblxudXNlRWZmZWN0KCgpID0+IHtcbiAgaWYoQWN0aW9uRGF0YSAhPSBudWxsKXtcbiAgICBjb25zb2xlLmxvZyhcIk5PVCBOVUxMIDAxXCIpO1xuICAgIFxuICAgICBpZihBY3Rpb25EYXRhLnN0YXR1cyApe1xuICAgICAgIGNvbnNvbGUubG9nKFwiTk9UIE5VTEwgMDFcIik7XG4gICAgICAgcmVkaXJlY3QgKFwiL2Rhc2hib2FyZFwiKVxuICAgICB9XG4gIH1cbiBcbn0sW0FjdGlvbkRhdGFdKVxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgbWF4SD1cImNvbnRhaW5lci5sZ1wiPlxuICAgICAge0pTT04uc3RyaW5naWZ5KEFjdGlvbkRhdGEpfVxuXG4gICAgICA8Qm94XG4gICAgICAgIGRpc3BsYXk9e1wiZmxleFwifVxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgIG10PVwiMzBcIlxuICAgICAgICBhbGlnbkl0ZW1zPXtcImNlbnRlclwifVxuICAgICAgPlxuICAgICAgICA8Qm94IHN0eWxlPXt7IHdpZHRoOiBcIjYwdndcIiB9fT5cbiAgICAgICAgICA8VGFicz5cbiAgICAgICAgICAgIDxUYWJMaXN0PlxuICAgICAgICAgICAgICA8VGFiPkxvZ2luPC9UYWI+XG4gICAgICAgICAgICAgIDxUYWI+Q3JlYXRlIE5ldyBVc2VyPC9UYWI+XG4gICAgICAgICAgICA8L1RhYkxpc3Q+XG4gICAgICAgICAgICA8VGFiUGFuZWxzPlxuICAgICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPExvZ2luVXNlciAvPlxuICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPENyZWF0ZU5ld1VzZXIgLz5cbiAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgIDwvVGFiUGFuZWxzPlxuICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuY29uc3QgTG9naW5Vc2VyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICA8Rm9ybUxhYmVsPkNlbnRlcjwvRm9ybUxhYmVsPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBuYW1lPVwiY2VudGVyXCJcbiAgICAgICAgICB0eXBlPVwiY2VudGVyXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlnaXRhbCBMYWJzXCJcbiAgICAgICAgPjwvSW5wdXQ+XG5cbjxTcGFjZXIgLz5cbiAgICAgICAgey8qIEFsbCBPbGQgaW5wdXRzIERvd24qL31cbiAgICAgICAgPEZvcm1MYWJlbD5FbWFpbDwvRm9ybUxhYmVsPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImpob25AZ21haWwuY29tXCJcbiAgICAgICAgPjwvSW5wdXQ+XG4gICAgICAgIDxGb3JtSGVscGVyVGV4dD5XZSdsbCBuZXZlciBzaGFyZSB5b3VyIGVtYWlsLjwvRm9ybUhlbHBlclRleHQ+XG4gICAgICAgIDxGb3JtTGFiZWw+UGFzc3dvcmQ8L0Zvcm1MYWJlbD5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgID48L0lucHV0PlxuICAgICAgICA8U3BhY2VyIC8+XG4gICAgICAgIDxIU3RhY2sgbXQ9XCI2XCIganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBuYW1lPVwiX2FjdGlvblwiXG4gICAgICAgICAgICB2YWx1ZT17XCJsb2dpbnVzZXJcIn1cbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgY29sb3JTY2hlbWU9e1wiZ3JlZW5cIn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBMb2dpblxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxTcGFjZXIgLz5cbiAgICAgICAgPC9IU3RhY2s+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5jb25zdCBDcmVhdGVOZXdVc2VyID0gKCkgPT4ge1xuICBjb25zdCBBY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YSgpO1xuXG4gIFxuXG4gIHJldHVybiAoXG4gICAgPEJveD5cbiAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgPEZvcm1MYWJlbD5Qcm9maWxlIE5hbWU8L0Zvcm1MYWJlbD5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgbmFtZT1cInByb2ZpbGVOYW1lXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkpob24gRG9lXCJcbiAgICAgICAgPjwvSW5wdXQ+XG4gICAgICAgIDxGb3JtTGFiZWw+RW1haWw8L0Zvcm1MYWJlbD5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJqaG9uQGdtYWlsLmNvbVwiXG4gICAgICAgID48L0lucHV0PlxuICAgICAgICA8Rm9ybUhlbHBlclRleHQ+V2UnbGwgbmV2ZXIgc2hhcmUgeW91ciBlbWFpbC48L0Zvcm1IZWxwZXJUZXh0PlxuICAgICAgICA8Rm9ybUxhYmVsPlBhc3N3b3JkPC9Gb3JtTGFiZWw+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICA+PC9JbnB1dD5cbiAgICAgICAgPEZvcm1MYWJlbD5DZW50cmUgTmFtZTwvRm9ybUxhYmVsPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBuYW1lPVwiY2VudGVyTmFtZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJDZW50ZXIgTmFtZVwiXG4gICAgICAgID48L0lucHV0PlxuICAgICAgICA8Rm9ybUxhYmVsPkxpY2VuY2U8L0Zvcm1MYWJlbD5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLy8gbmFtZT1cImxpY2VuY2VcIlxuICAgICAgICAgIC8vIHBsYWNlaG9sZGVyPVwiSmhvbiBEb2VcIlxuICAgICAgICA+PC9JbnB1dD5cbiAgICAgICAgPFNwYWNlciAvPlxuICAgICAgICA8SFN0YWNrIG10PVwiNlwiIGp1c3RpZnlDb250ZW50PXtcImNlbnRlclwifSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgbmFtZT1cIl9hY3Rpb25cIlxuICAgICAgICAgICAgdmFsdWU9e1wiY3JlYXRldXNlclwifVxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBjb2xvclNjaGVtZT17XCJncmVlblwifVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENyZWF0ZSBVc2VyXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPFNwYWNlciAvPlxuICAgICAgICA8L0hTdGFjaz5cbiAgICAgIDwvRm9ybT5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIiwgImltcG9ydCB7IGNvbW1pdFNlc3Npb24sIGdldFNlc3Npb24gfSBmcm9tIFwifi9zZXNzaW9uc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ3VzdG9ybVRva2VuLCBjcmVhdGVTZXNzaW9uQ29va2llQXV0aCB9IGZyb20gXCJ+L3V0aWxzL2F1dGguc2VydmVyXCJcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFuZFNhdmVTZXNzaW9uID0gYXN5bmMgKGlkOnN0cmluZyxyZXF1ZXN0OlJlcXVlc3QpID0+IHtcbiAgIFxuICAgIGxldCB0b2tlbmNyZWF0ZWQgPSBhd2FpdCBjcmVhdGVDdXN0b3JtVG9rZW4oaWQpXG4gICBhd2FpdCBjb25zb2xlLmxvZyh0b2tlbmNyZWF0ZWQsXCJUb2tlbiBDcmVhdGVkXCIpO1xuICAgXG4vLyAgICBsZXQgc2Vzc2lvblRva2VuID0gYXdhaXQgY3JlYXRlU2Vzc2lvbkNvb2tpZUF1dGgodG9rZW5jcmVhdGVkLnRvU3RyaW5nKCkpXG4vLyAgICBhd2FpdCBjb25zb2xlLmxvZyhzZXNzaW9uVG9rZW4sXCJTZXNzaW9uIFRva2VuIENyZWF0ZWRcIik7XG4gICBcblxuICAgY29uc3Qgc2Vzc2lvbiAgPSBhd2FpdCBnZXRTZXNzaW9uKFxuICAgICAgIHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIilcbiAgIClcblxuICAgYXdhaXQgc2Vzc2lvbi5zZXQoXCJ1c2VyU2Vzc2lvblwiLHRva2VuY3JlYXRlZC50b1N0cmluZygpKVxuICAgXG4gICBhd2FpdCBjb21taXRTZXNzaW9uKHNlc3Npb24pXG4gICBjb25zb2xlLmxvZyhcIlNFU1NJT04gQ1JFQVRFRCBBTkQgQ09NTUlURURcIik7XG4gICBcbn0iLCAiaW1wb3J0IHsgZmlyZUF1dGggfSBmcm9tIFwifi91dGlscy9maXJlLnNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UgfSBmcm9tIFwicmVtaXhcIjtcbmludGVyZmFjZSBVc2VyIHtcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgY3JlYXRlVXNlciA9IGFzeW5jICh7IGVtYWlsLCBwYXNzd29yZCwgZGlzcGxheU5hbWUgfTogVXNlcikgPT4ge1xuICByZXR1cm4gYXdhaXQgZmlyZUF1dGguY3JlYXRlVXNlcih7XG4gICAgZW1haWw6IGVtYWlsLFxuICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUsXG4gIH0pO1xufTtcblxuY29uc3QgdXBkYXRlVXNlciA9ICh7IGVtYWlsLCBwYXNzd29yZCwgZGlzcGxheU5hbWUsIHVpZCB9OiBhbnkpID0+IHtcbiAgZmlyZUF1dGhcbiAgICAudXBkYXRlVXNlcih1aWQsIHtcbiAgICAgIGVtYWlsLFxuICAgICAgcGFzc3dvcmQsXG4gICAgICBkaXNwbGF5TmFtZSxcbiAgICB9KVxuICAgIC50aGVuKCh1c2VyUmVjb3JkKSA9PiB7XG4gICAgICAvLyBTZWUgdGhlIFVzZXJSZWNvcmQgcmVmZXJlbmNlIGRvYyBmb3IgdGhlIGNvbnRlbnRzIG9mIHVzZXJSZWNvcmQuXG4gICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSB1cGRhdGVkIHVzZXJcIiwgdXNlclJlY29yZC50b0pTT04oKSk7XG4gICAgICByZXR1cm4geyBzdGF0dXM6IFwiZG9uZVwiLCB1c2VyUmVjb3JkIH07XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHVwZGF0aW5nIHVzZXI6XCIsIGVycm9yKTtcbiAgICAgIHJldHVybiB7IHN0YXR1czogXCJmYWlsXCIsIGVycm9yIH07XG4gICAgfSk7XG59O1xuXG5jb25zdCBkZWxldGVVc2VyID0gYXN5bmMgKHVpZDogc3RyaW5nKSA9PiB7XG4gIGZpcmVBdXRoXG4gICAgLmRlbGV0ZVVzZXIodWlkKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IGRlbGV0ZWQgdXNlclwiKTtcbiAgICAgIHJldHVybiB7IHN0YXR1czogXCJTdWNjZXNzZnVsbHkgZGVsZXRlZCB1c2VyXCIgfTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZGVsZXRpbmcgdXNlcjpcIiwgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcIkVycm9yIGRlbGV0aW5nIHVzZXI6XCIsIGVycm9yIH07XG4gICAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVDdXN0b3JtVG9rZW4gPSBhc3luYyAodWlkOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIGF3YWl0IGZpcmVBdXRoLmNyZWF0ZUN1c3RvbVRva2VuKHVpZCk7XG59O1xuXG5jb25zdCB2ZXJpZnlUb2tlbiA9IChpZFRva2VuOiBzdHJpbmcpID0+IHtcbiAgZmlyZUF1dGhcbiAgICAudmVyaWZ5SWRUb2tlbihpZFRva2VuKVxuICAgIC50aGVuKChkZWNvZGVkVG9rZW4pID0+IHtcbiAgICAgIC8vIEFwcGx5IExvZ2ljXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcIkdvdCBlcnJvciB2ZXJpZnlpbmcgdG9rZW5cIiwgZXJyIH07XG4gICAgfSk7XG59O1xuLy8gY29uc3QgY3JlYXRlU2Vzc2lvbkNvb2tpZSA9ICgpID0+IHtcblxuLy8gfVxuXG5leHBvcnQgY29uc3QgY3JlYXRlU2Vzc2lvbkNvb2tpZUF1dGggPSBhc3luYyAodXNlcklkOiBzdHJpbmcpID0+IHtcbiAgLy8gU2V0IHNlc3Npb24gZXhwaXJhdGlvbiB0byA1IGRheXMuXG4gIGNvbnN0IGV4cGlyZXNJbiA9IDYwICogNjAgKiAyNCAqIDUgKiAxMDAwO1xuICByZXR1cm4gYXdhaXQgZmlyZUF1dGguY3JlYXRlU2Vzc2lvbkNvb2tpZSh1c2VySWQsIHsgZXhwaXJlc0luIH0pO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlVXNlciwgdXBkYXRlVXNlciwgZGVsZXRlVXNlciwgY3JlYXRlQ3VzdG9ybVRva2VuLCB2ZXJpZnlUb2tlbiB9O1xuIiwgImltcG9ydCB7IGluaXRpYWxpemVBcHAsIGFwcGxpY2F0aW9uRGVmYXVsdCwgY2VydCB9IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9hcHBcIjtcbmxldCBhZG1pbiA9IHJlcXVpcmUoXCJmaXJlYmFzZS1hZG1pblwiKVxuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcImZpcmViYXNlLWFkbWluL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9hdXRoXCI7XG5cblxuY29uc3QgYTphbnkgPSB7XG4gIFwidHlwZVwiOiBcInNlcnZpY2VfYWNjb3VudFwiLFxuICBcInByb2plY3RfaWRcIjogXCJydWRocmFqb3NoaWNvbVwiLFxuICBcInByaXZhdGVfa2V5X2lkXCI6IFwiOWZlZjM2YjI3OWE0MTk0OGU2NjQzNDM0ZGY5NzMyMDgxYTViZDI5NVwiLFxuICBcInByaXZhdGVfa2V5XCI6IFwiLS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tXFxuTUlJRXZRSUJBREFOQmdrcWhraUc5dzBCQVFFRkFBU0NCS2N3Z2dTakFnRUFBb0lCQVFEQmFQYlNJSTNUaXZzK1xcbkQ5aUVpT2VtN2VRYzNuRHJ1QlVEMExNMVFRMmJtTUMzVVFZZ1d5TWlIL3VucGhOc0kyN2NUOE1wVXYxN251M1JcXG40SmJ0MnM1M1plRURzREVyS1pVSG5MenhiK2U4emI3bEFZT3NNekthdHFTTlB1T0hod0I4YVNTSkFxd0ZDMXVwXFxuV24rblU3N09WdmxIYmJoQ1FvK3dHc3pLOVNpczBNY2pNWVhxd3Z0eTI1UjZsM3dya3NSOWRlUG1mS0pKSlYwOVxcbjloTjduYXN2dTBIbWczZzlTVXlId1ZWYURXMGcvM1VWQTlzeTJCZG9TZDVpOHNlMUwreU5RbmMrWWhWcllZTFNcXG5wVGRMS3ZaTmgrZ0x2RitEdXF5Y2l5MktxYkVNdlM2U1JUMkFybVllRytxUWhsK1dWUndMU0JzUUFGNHdRQWdJXFxubnU3M1o4SnRBZ01CQUFFQ2dnRUFHQ0p5K2xHWm9SWXN0OWZlV3R1Q25LLyswU05veitGT3JnVXk5NmhBZkhRWlxcblNFYlNEdU9RaE1lYzdaU3B3OHJBSUxuTFRyTE9jc2lvUUpKWUF5SlV0VTEvUUtpUjJpTDhOOUQxT3VPTjlWOXZcXG5QTUJ0bitWYm9UYTlYZXJGRmJwZzh5VmpxNzBybmcyR3lLRkVZS3J3bW1yNy9FL1N1R0g1OEMzSDlHT1hTY2trXFxuSHVLNmpTb1lsYUN1elR6enJUWHBacUEwQ0x0S3E3KzBBWXpOV3N1VmozTm9SUE1LdVN0WDNmNU5qVmpsbWFrZlxcbk94ZE80VXk5U2RrM1VLMWM4TTIzVzJySjZQeGlHVXRPUkRBYTIzd21ydlgvdjFINmZwSWdJNW5DZ1VuY0w2VjVcXG43NHIzbVliMGVGSk1PeFpZOWVCWGEyMy94Z2hHU1lNdWpSa3hRdW5NQVFLQmdRRG1naFB4eUg3ejhoYVFldkhKXFxuMzhGdGNUUlg5dU9DcmVieUdIV3VJak1VL3FFejdIY0FUUVBTUlJvL05KRzVuclBqRVM2NzNsZzMwTG8zTTZFVVxcbnJaemgxRFdMajhsUkVFZ3BNQ2oycUVLMFowTENvUHFNb3pDY3dSWm1MYjVaTGtQRXViUWQrMjdiSWNHK0I5dGJcXG54dHlXWGhpcUpFVzBRTTZsaGJOVzV3NllnUUtCZ1FEV3pKbk8vTjU5Rm14WnhjNWN4Um14ejZvMGNkZC9yUE1zXFxuTCs1K1I0dEJvOVNCeWR6bHZwODVPNEtaMGVPSlcyVEY2TlQvZ2JheTMwci8xdldkelBRajZ3R2NIWmI2NVlxdVxcbnU4UlgwRlFQdDJzd1pRR0FOL3RidnRrU1pWd2RhTmltMnhzQ3RLL2NKYVlaVlMvZGpQRUFCSXBQREtpdmc1WnlcXG5ONHlycUJNVDdRS0JnUUNKZkJKTFJ1dTVzcTRVdE0vY09aSlVKWTR6M1RUcnI2K3N2RHdNaGFkMElUK2pDYW9jXFxueXRLNXFxK3gvVGZodjYvSmdta2Vjc3FwVjl5SnFraXNYYlRSMlZHcWtUTmhIMVg3QXhlYnJ0WkNaY2lpNzRNaFxcbk9RQjRybzRlbWJBTDN4VmFrK3pEYVVGQWdFemZmQzR3K2xaOWRWZyt1dTI4U2w4MnlKMGoreUp3Z1FLQmdGdmJcXG5IeU5QSys0ZU9yT2hUWUNLb1ZSUzFCeWRXbVMxRjBDY05zYzEzUzF5M0J1c3NaUm1FajB0WDhwYjRZd0owMngzXFxuQnk5RXoxWnErdTJ4aFZPNEkrZUFSaTMyMFd2MTRYcWJ2WGs0RTlxc3UxLzBzZEdkSHhhNjVLVmpSeU1raFJIRlxcbnZTVkpFN04zUGpLekpVYi9VTWlMS0lKcGpYR1JPak1aNGtRK0dmcDVBb0dBUjh4dCsrTW96Vk9iOXZ0RjF1VExcXG4yM0ZscUhCdVNxblJNcXNnaVd0UklBKzlNKzAzeFJEUEo4ek8wbUltbVArdHB5UzZqREdnR1pFMk1jcXgvcEUvXFxuSUNhTVZQR2pzWFlkYnAyNzBjMGsyZkgyWi90VlhBZ3JIaHpHZ01CZ3ppY2NXSDY3Um44bWdqeDNUMmFxbFhkdFxcbmdOTUFPUmlDSU8rTFMrY2V4WVJZRkxrPVxcbi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS1cXG5cIixcbiAgXCJjbGllbnRfZW1haWxcIjogXCJmaXJlYmFzZS1hZG1pbnNkay14dWQxOEBydWRocmFqb3NoaWNvbS5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbVwiLFxuICBcImNsaWVudF9pZFwiOiBcIjExMTA5NzMyMzc0NTc0MDUxNTk4OVwiLFxuICBcImF1dGhfdXJpXCI6IFwiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL2F1dGhcIixcbiAgXCJ0b2tlbl91cmlcIjogXCJodHRwczovL29hdXRoMi5nb29nbGVhcGlzLmNvbS90b2tlblwiLFxuICBcImF1dGhfcHJvdmlkZXJfeDUwOV9jZXJ0X3VybFwiOiBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0c1wiLFxuICBcImNsaWVudF94NTA5X2NlcnRfdXJsXCI6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vcm9ib3QvdjEvbWV0YWRhdGEveDUwOS9maXJlYmFzZS1hZG1pbnNkay14dWQxOCU0MHJ1ZGhyYWpvc2hpY29tLmlhbS5nc2VydmljZWFjY291bnQuY29tXCJcbn1cbmluaXRpYWxpemVBcHAoe2NyZWRlbnRpYWw6Y2VydChhKX0pO1xuZXhwb3J0IGNvbnN0IGZpcmVzdG9yZSA9IGdldEZpcmVzdG9yZSgpO1xuZXhwb3J0IGNvbnN0IGZpcmVBdXRoID0gZ2V0QXV0aCgpO1xuIiwgImltcG9ydCB7IEhlYWRpbmcgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGZpcmVzdG9yZSB9IGZyb20gXCJ+L3V0aWxzL2ZpcmUuc2VydmVyXCJcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGNvbGxlY3Rpb25Vc2VyID0gZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKTtcblxuICBsZXQgcmVzID0gYXdhaXQgY29sbGVjdGlvblVzZXJcbiAgICAuZG9jKClcbiAgICAuc2V0KHsgZmlyc3Q6IFwiSmhzb25cIiwgbGFzdDogXCJEb2VcIiwgZW1haWw6IFwicnVkcmFAZ21pYWwuY29tXCIgfSk7XG5cblxuICBcblxuICByZXR1cm4ge21zZzpcInNhdmVkIGRhdGFcIixyZXN9XG5cbn07XG5cbmZ1bmN0aW9uIEluZGV4KCkge1xuXG4gIGNvbnN0IHBvc3QgPSB1c2VMb2FkZXJEYXRhKClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGluZz5Ib21lIFBhZ2U8L0hlYWRpbmc+XG4gICAgICB7XG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHBvc3QpXG4gICAgICB9XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzEwYzIyZTBhJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC03UldGTktVQy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRjU0NEVFWlMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1JRTJNWVVKUS5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtNklQMkxQV1MuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUdOTkFaRlVMLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9Mb2dpbic6eydpZCc6J3JvdXRlcy9Mb2dpbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidMb2dpbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9Mb2dpbi0zNEczUFBJUy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstN1ROM0U1TlouanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZGFzaGJvYXJkJzp7J2lkJzoncm91dGVzL2Rhc2hib2FyZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidkYXNoYm9hcmQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZGFzaGJvYXJkLVlaM1g2UjNYLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9kYXNoYm9hcmQvaW5kZXgnOnsnaWQnOidyb3V0ZXMvZGFzaGJvYXJkL2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvZGFzaGJvYXJkJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Rhc2hib2FyZC9pbmRleC1SSTJQTFlLSC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstR05OQVpGVUwuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LUFCQ0lQQUhWLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay03VE4zRTVOWi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtMTBDMjJFMEEuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUdqQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksZ0JBQWdCLFFBQVE7QUFJNUIsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdB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

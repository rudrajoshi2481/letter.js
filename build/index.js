var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
  }, "Doc \u{1FA7A}"), /* @__PURE__ */ import_react6.default.createElement(import_remix5.Outlet, null));
};
var dashboard_default = Dashboard;

// route:/home/rudrajoshi/Desktop/o/letter.js/app/routes/dashboard/index.tsx
var dashboard_exports2 = {};
__export(dashboard_exports2, {
  default: () => dashboard_default2
});
init_react();
var import_react8 = require("@chakra-ui/react");
var import_react9 = require("@chakra-ui/react");
var import_react10 = require("@chakra-ui/react");
var import_ai = require("react-icons/ai");
var import_react11 = require("@chakra-ui/react");
var import_react12 = require("react");

// app/context/presContext.tsx
init_react();
var import_react7 = require("react");
var PresContext = (0, import_react7.createContext)(null);
var PresContextProvider = (props) => {
  const mainData = [{
    nameDrug: "paracetamol",
    dosageForm: "syrup",
    mg: "16",
    duration: "101"
  }, {
    nameDrug: "warfarin",
    dosageForm: "lotion",
    mg: "16",
    duration: "111"
  }];
  const [data, setData] = (0, import_react7.useState)([
    {
      nameDrug: "",
      dosageForm: "",
      mg: "",
      duration: ""
    }
  ]);
  return /* @__PURE__ */ React.createElement(PresContext.Provider, {
    value: [data, setData]
  }, props.children);
};

// route:/home/rudrajoshi/Desktop/o/letter.js/app/routes/dashboard/index.tsx
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PresContextProvider, null, /* @__PURE__ */ React.createElement(import_react8.Button, {
    my: "3",
    mb: "3"
  }, "Create New "), /* @__PURE__ */ React.createElement(import_react8.Divider, null), /* @__PURE__ */ React.createElement(import_react8.VStack, {
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(import_react8.HStack, {
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(Viewer, null), /* @__PURE__ */ React.createElement(OldPrescriptions, null)), /* @__PURE__ */ React.createElement(import_react8.Button, {
    onClick: (e) => {
      window.print();
    }
  }, "Print \u{1F5A8}\uFE0F"), /* @__PURE__ */ React.createElement(import_react8.Button, null, "Save Prescription "))));
}
var OldPrescriptions = () => {
  return /* @__PURE__ */ React.createElement(import_react8.VStack, {
    pl: "9",
    pt: "3",
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(import_react8.Heading, {
    fontSize: "2xl"
  }, "Old Prescriptions"), /* @__PURE__ */ React.createElement(import_react8.UnorderedList, null, /* @__PURE__ */ React.createElement(import_react8.ListItem, {
    listStyleType: "none"
  }, "date 17-15-87")));
};
var Viewer = () => {
  const [d, setD] = (0, import_react12.useContext)(PresContext);
  const addMainData = async (e) => {
  };
  return /* @__PURE__ */ React.createElement(import_react8.Box, null, JSON.stringify(d), /* @__PURE__ */ React.createElement(import_react8.Box, null, /* @__PURE__ */ React.createElement(PresBox, null), /* @__PURE__ */ React.createElement(import_react8.Button, {
    onClick: (e) => addMainData(e)
  }, "+ ")));
};
var PresBox = () => {
  const [d, setD] = (0, import_react12.useContext)(PresContext);
  return /* @__PURE__ */ React.createElement(import_react8.Box, null, d.map((r) => {
    return /* @__PURE__ */ React.createElement(PresStack, {
      data: r
    });
  }));
};
var PresStack = ({ data }) => {
  const [preCon, setPreCon] = (0, import_react12.useContext)(PresContext);
  const changeUpdate = (data2) => {
  };
  return /* @__PURE__ */ React.createElement(import_react8.Box, {
    py: "3",
    w: "full",
    display: "flex",
    justifyContent: "space-around"
  }, /* @__PURE__ */ React.createElement(import_react8.VStack, null, /* @__PURE__ */ React.createElement(import_react8.Text, null, "Drug"), /* @__PURE__ */ React.createElement(import_react8.Input, {
    mx: "1",
    type: "text",
    placeholder: "name of Drug",
    value: data.nameDrug,
    onChange: (e) => changeUpdate(e)
  })), /* @__PURE__ */ React.createElement(import_react8.Spacer, null), /* @__PURE__ */ React.createElement(import_react8.VStack, {
    mx: "2"
  }, /* @__PURE__ */ React.createElement(import_react8.Text, null, "Dosage Form"), /* @__PURE__ */ React.createElement(import_react9.Menu, null, /* @__PURE__ */ React.createElement(import_react9.MenuButton, {
    value: data.dosageForm,
    as: import_react8.Button,
    rightIcon: /* @__PURE__ */ React.createElement(import_ai.AiOutlineDown, null)
  }, data.dosageForm), /* @__PURE__ */ React.createElement(import_react9.MenuList, null, /* @__PURE__ */ React.createElement(import_react9.MenuItem, null, "Ointments"), /* @__PURE__ */ React.createElement(import_react9.MenuItem, null, "syrup"), /* @__PURE__ */ React.createElement(import_react9.MenuItem, null, "Tablet"), /* @__PURE__ */ React.createElement(import_react9.MenuItem, null, "Powder"), /* @__PURE__ */ React.createElement(import_react9.MenuItem, null, "Pills")))), /* @__PURE__ */ React.createElement(import_react8.Spacer, null), /* @__PURE__ */ React.createElement(import_react8.VStack, {
    mx: "2"
  }, /* @__PURE__ */ React.createElement(import_react8.Text, null, "Dose mg"), /* @__PURE__ */ React.createElement(import_react10.NumberInput, {
    mx: "3",
    defaultValue: 15,
    value: data.mg,
    precision: 2,
    step: 0.2
  }, /* @__PURE__ */ React.createElement(import_react10.NumberInputField, null), /* @__PURE__ */ React.createElement(import_react10.NumberInputStepper, null, /* @__PURE__ */ React.createElement(import_react10.NumberIncrementStepper, null), /* @__PURE__ */ React.createElement(import_react10.NumberDecrementStepper, null)))), /* @__PURE__ */ React.createElement(import_react8.VStack, {
    mx: "2"
  }, /* @__PURE__ */ React.createElement(import_react8.Text, null, "Duration"), /* @__PURE__ */ React.createElement(import_react8.HStack, null, /* @__PURE__ */ React.createElement(import_react11.PinInput, {
    defaultValue: data.duration
  }, /* @__PURE__ */ React.createElement(import_react11.PinInputField, null), /* @__PURE__ */ React.createElement(import_react11.PinInputField, null), /* @__PURE__ */ React.createElement(import_react11.PinInputField, null)))));
};
var dashboard_default2 = Index;

// route:/home/rudrajoshi/Desktop/o/letter.js/app/routes/Login.tsx
var Login_exports = {};
__export(Login_exports, {
  action: () => action,
  default: () => Login_default
});
init_react();
var import_react13 = require("@chakra-ui/react");
var import_react14 = __toESM(require("react"));
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
  const toast = (0, import_react13.useToast)();
  (0, import_react14.useEffect)(() => {
    if (ActionData != null) {
      console.log("NOT NULL 01");
      if (ActionData.status) {
        console.log("NOT NULL 01");
        (0, import_remix6.redirect)("/dashboard");
      }
    }
  }, [ActionData]);
  return /* @__PURE__ */ import_react14.default.createElement(import_react13.Container, {
    maxH: "container.lg"
  }, JSON.stringify(ActionData), /* @__PURE__ */ import_react14.default.createElement(import_react13.Box, {
    display: "flex",
    justifyContent: "center",
    mt: "30",
    alignItems: "center"
  }, /* @__PURE__ */ import_react14.default.createElement(import_react13.Box, {
    style: { width: "60vw" }
  }, /* @__PURE__ */ import_react14.default.createElement(import_react13.Tabs, null, /* @__PURE__ */ import_react14.default.createElement(import_react13.TabList, null, /* @__PURE__ */ import_react14.default.createElement(import_react13.Tab, null, "Login"), /* @__PURE__ */ import_react14.default.createElement(import_react13.Tab, null, "Create New User")), /* @__PURE__ */ import_react14.default.createElement(import_react13.TabPanels, null, /* @__PURE__ */ import_react14.default.createElement(import_react13.TabPanel, null, /* @__PURE__ */ import_react14.default.createElement(LoginUser, null)), /* @__PURE__ */ import_react14.default.createElement(import_react13.TabPanel, null, /* @__PURE__ */ import_react14.default.createElement(CreateNewUser, null)))))));
}
var LoginUser = () => {
  return /* @__PURE__ */ import_react14.default.createElement(import_react13.Box, null, /* @__PURE__ */ import_react14.default.createElement(import_remix6.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react14.default.createElement(import_react13.FormLabel, null, "Center"), /* @__PURE__ */ import_react14.default.createElement(import_react13.Input, {
    name: "center",
    type: "center",
    required: true,
    placeholder: "Digital Labs"
  }), /* @__PURE__ */ import_react14.default.createElement(import_react13.Spacer, null), /* @__PURE__ */ import_react14.default.createElement(import_react13.FormLabel, null, "Email"), /* @__PURE__ */ import_react14.default.createElement(import_react13.Input, {
    name: "email",
    type: "email",
    required: true,
    placeholder: "jhon@gmail.com"
  }), /* @__PURE__ */ import_react14.default.createElement(import_react13.FormHelperText, null, "We'll never share your email."), /* @__PURE__ */ import_react14.default.createElement(import_react13.FormLabel, null, "Password"), /* @__PURE__ */ import_react14.default.createElement(import_react13.Input, {
    name: "password",
    required: true,
    placeholder: "password",
    type: "password"
  }), /* @__PURE__ */ import_react14.default.createElement(import_react13.Spacer, null), /* @__PURE__ */ import_react14.default.createElement(import_react13.HStack, {
    mt: "6",
    justifyContent: "center",
    alignItems: "center"
  }, /* @__PURE__ */ import_react14.default.createElement(import_react13.Button, {
    name: "_action",
    value: "loginuser",
    type: "submit",
    colorScheme: "green"
  }, "Login"), /* @__PURE__ */ import_react14.default.createElement(import_react13.Spacer, null))));
};
var CreateNewUser = () => {
  const ActionData = (0, import_remix6.useActionData)();
  return /* @__PURE__ */ import_react14.default.createElement(import_react13.Box, null, /* @__PURE__ */ import_react14.default.createElement(import_remix6.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react14.default.createElement(import_react13.FormLabel, null, "Profile Name"), /* @__PURE__ */ import_react14.default.createElement(import_react13.Input, {
    type: "text",
    required: true,
    name: "profileName",
    placeholder: "Jhon Doe"
  }), /* @__PURE__ */ import_react14.default.createElement(import_react13.FormLabel, null, "Email"), /* @__PURE__ */ import_react14.default.createElement(import_react13.Input, {
    type: "email",
    required: true,
    name: "email",
    placeholder: "jhon@gmail.com"
  }), /* @__PURE__ */ import_react14.default.createElement(import_react13.FormHelperText, null, "We'll never share your email."), /* @__PURE__ */ import_react14.default.createElement(import_react13.FormLabel, null, "Password"), /* @__PURE__ */ import_react14.default.createElement(import_react13.Input, {
    required: true,
    placeholder: "password",
    name: "password",
    type: "password"
  }), /* @__PURE__ */ import_react14.default.createElement(import_react13.FormLabel, null, "Centre Name"), /* @__PURE__ */ import_react14.default.createElement(import_react13.Input, {
    type: "text",
    required: true,
    name: "centerName",
    placeholder: "Center Name"
  }), /* @__PURE__ */ import_react14.default.createElement(import_react13.FormLabel, null, "Licence"), /* @__PURE__ */ import_react14.default.createElement(import_react13.Input, {
    type: "file",
    required: true
  }), /* @__PURE__ */ import_react14.default.createElement(import_react13.Spacer, null), /* @__PURE__ */ import_react14.default.createElement(import_react13.HStack, {
    mt: "6",
    justifyContent: "center",
    alignItems: "center"
  }, /* @__PURE__ */ import_react14.default.createElement(import_react13.Button, {
    name: "_action",
    value: "createuser",
    type: "submit",
    colorScheme: "green"
  }, "Create Profile"), /* @__PURE__ */ import_react14.default.createElement(import_react13.Spacer, null))));
};
var Login_default = Login;

// route:/home/rudrajoshi/Desktop/o/letter.js/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  loader: () => loader2
});
init_react();
var import_react15 = require("@chakra-ui/react");
var import_react16 = __toESM(require("react"));
var import_remix7 = __toESM(require_remix());
var loader2 = async () => {
  const collectionUser = firestore.collection("users");
  let res = await collectionUser.doc().set({ first: "Jhson", last: "Doe", email: "rudra@gmial.com" });
  return { msg: "saved data", res };
};
function Index2() {
  const post = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ import_react16.default.createElement(import_react16.default.Fragment, null, /* @__PURE__ */ import_react16.default.createElement(import_react15.Heading, null, "Home Page"), JSON.stringify(post));
}
var routes_default = Index2;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "b4a646ed", "entry": { "module": "/build/entry.client-7RWFNKUC.js", "imports": ["/build/_shared/chunk-F544EEZS.js", "/build/_shared/chunk-IE2MYUJQ.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-SBY7K4TO.js", "imports": ["/build/_shared/chunk-2JBPN6RK.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/Login": { "id": "routes/Login", "parentId": "root", "path": "Login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/Login-UHJUSK2W.js", "imports": ["/build/_shared/chunk-7TN3E5NZ.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-YHOILERP.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard/index": { "id": "routes/dashboard/index", "parentId": "routes/dashboard", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/dashboard/index-CZH3JHQP.js", "imports": ["/build/_shared/chunk-2JBPN6RK.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-2ZAXLKJL.js", "imports": ["/build/_shared/chunk-7TN3E5NZ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-B4A646ED.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L2hvbWUvcnVkcmFqb3NoaS9EZXNrdG9wL28vbGV0dGVyLmpzL2FwcC9yb290LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9OYXZiYXIudHN4IiwgInJvdXRlOi9ob21lL3J1ZHJham9zaGkvRGVza3RvcC9vL2xldHRlci5qcy9hcHAvcm91dGVzL2Rhc2hib2FyZC50c3giLCAiLi4vYXBwL3Nlc3Npb25zLnRzIiwgInJvdXRlOi9ob21lL3J1ZHJham9zaGkvRGVza3RvcC9vL2xldHRlci5qcy9hcHAvcm91dGVzL2Rhc2hib2FyZC9pbmRleC50c3giLCAiLi4vYXBwL2NvbnRleHQvcHJlc0NvbnRleHQudHN4IiwgInJvdXRlOi9ob21lL3J1ZHJham9zaGkvRGVza3RvcC9vL2xldHRlci5qcy9hcHAvcm91dGVzL0xvZ2luLnRzeCIsICIuLi9hcHAvbG9naWMvc2Vzc2lvbkF1dHJoTG9naWMudHMiLCAiLi4vYXBwL3V0aWxzL2F1dGguc2VydmVyLnRzIiwgIi4uL2FwcC91dGlscy9maXJlLnNlcnZlci50cyIsICJyb3V0ZTovaG9tZS9ydWRyYWpvc2hpL0Rlc2t0b3Avby9sZXR0ZXIuanMvYXBwL3JvdXRlcy9pbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwiY29tcHJlc3Npb25cIjtcbmltcG9ydCBtb3JnYW4gZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9leHByZXNzXCI7XG5cbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4vLyBodHRwOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXNlY3VyaXR5Lmh0bWwjYXQtYS1taW5pbXVtLWRpc2FibGUteC1wb3dlcmVkLWJ5LWhlYWRlclxuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XG5cbi8vIFJlbWl4IGZpbmdlcnByaW50cyBpdHMgYXNzZXRzIHNvIHdlIGNhbiBjYWNoZSBmb3JldmVyLlxuYXBwLnVzZShcbiAgXCIvYnVpbGRcIixcbiAgZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBpbW11dGFibGU6IHRydWUsIG1heEFnZTogXCIxeVwiIH0pXG4pO1xuXG4vLyBFdmVyeXRoaW5nIGVsc2UgKGxpa2UgZmF2aWNvbi5pY28pIGlzIGNhY2hlZCBmb3IgYW4gaG91ci4gWW91IG1heSB3YW50IHRvIGJlXG4vLyBtb3JlIGFnZ3Jlc3NpdmUgd2l0aCB0aGlzIGNhY2hpbmcuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgbWF4QWdlOiBcIjFoXCIgfSkpO1xuXG5hcHAudXNlKG1vcmdhbihcInRpbnlcIikpO1xuXG5hcHAuYWxsKFxuICBcIipcIixcbiAgY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVlxuICB9KVxuKTtcblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvaG9tZS9ydWRyYWpvc2hpL0Rlc2t0b3Avby9sZXR0ZXIuanMvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL2hvbWUvcnVkcmFqb3NoaS9EZXNrdG9wL28vbGV0dGVyLmpzL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvaG9tZS9ydWRyYWpvc2hpL0Rlc2t0b3Avby9sZXR0ZXIuanMvYXBwL3JvdXRlcy9kYXNoYm9hcmQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9ob21lL3J1ZHJham9zaGkvRGVza3RvcC9vL2xldHRlci5qcy9hcHAvcm91dGVzL2Rhc2hib2FyZC9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL2hvbWUvcnVkcmFqb3NoaS9EZXNrdG9wL28vbGV0dGVyLmpzL2FwcC9yb3V0ZXMvTG9naW4udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9ob21lL3J1ZHJham9zaGkvRGVza3RvcC9vL2xldHRlci5qcy9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvZGFzaGJvYXJkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kYXNoYm9hcmRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiZGFzaGJvYXJkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9kYXNoYm9hcmQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Rhc2hib2FyZC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2Rhc2hib2FyZFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL0xvZ2luXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9Mb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJMb2dpblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gICAgXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBDaGFrcmFQcm92aWRlciwgQ29sb3JNb2RlU2NyaXB0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vY29tcG9uZW50cy9OYXZiYXJcIjtcbi8vIDEuIGltcG9ydCBgZXh0ZW5kVGhlbWVgIGZ1bmN0aW9uXG5pbXBvcnQgeyBleHRlbmRUaGVtZSwgdHlwZSBUaGVtZUNvbmZpZyB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbi8vIDIuIEFkZCB5b3VyIGNvbG9yIG1vZGUgY29uZmlnXG5jb25zdCBjb25maWc6IFRoZW1lQ29uZmlnID0ge1xuICBpbml0aWFsQ29sb3JNb2RlOiAnZGFyaycsXG4gIHVzZVN5c3RlbUNvbG9yTW9kZTogZmFsc2UsXG59XG5cbi8vIDMuIGV4dGVuZCB0aGUgdGhlbWVcbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoeyBjb25maWcgfSlcblxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJOZXcgUmVtaXggQXBwXCIgfTtcbn07XG5cbmNvbnN0IERvY3VtZW50ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxib2R5PlxuICAgICAgIDxDb2xvck1vZGVTY3JpcHQgaW5pdGlhbENvbG9yTW9kZT17dGhlbWUuY29uZmlnLmluaXRpYWxDb2xvck1vZGV9IC8+XG4gICAgICA8Q2hha3JhUHJvdmlkZXI+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgICAgICAgIFxuICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICA8L2JvZHk+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxEb2N1bWVudCAvPlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBCb3gsIExpc3RJdGVtLCBVbm9yZGVyZWRMaXN0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcblxuZnVuY3Rpb24gTmF2YmFyKCkge1xuICByZXR1cm4gKFxuICAgIDxCb3ggYmFja2dyb3VuZD17XCJncmVlbi41MDBcIn0+XG4gICAgICAgIDxVbm9yZGVyZWRMaXN0IGRpc3BsYXk9e1wiZmxleFwifT5cbiAgICAgICAgICA8TGlzdEl0ZW0gcD1cIjNcIiBjb2xvcj17XCJ3aGl0ZVwifSAgbGlzdFN0eWxlVHlwZT17XCJub25lXCJ9ID48TGluayB0bz1cIi9cIj5MYWJzIFx1RDgzRFx1REQyQzwvTGluaz48L0xpc3RJdGVtPlxuICAgICAgICAgIDxMaXN0SXRlbSBwPVwiM1wiIGNvbG9yPXtcIndoaXRlXCJ9IGxpc3RTdHlsZVR5cGU9e1wibm9uZVwifSA+PExpbmsgdG89XCIvZGFzaGJvYXJkXCI+RGFzaGJvYXJkPC9MaW5rPjwvTGlzdEl0ZW0+XG4gICAgICAgICAgPExpc3RJdGVtIHA9XCIzXCIgY29sb3I9e1wid2hpdGVcIn0gbGlzdFN0eWxlVHlwZT17XCJub25lXCJ9ID48TGluayB0bz1cIi9sb2dpblwiPkxvZ2luPC9MaW5rPjwvTGlzdEl0ZW0+XG4gICAgICAgIDwvVW5vcmRlcmVkTGlzdD5cbiAgICA8L0JveD4gIFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhciIsICJpbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBEaXZpZGVyLFxuICBIZWFkaW5nLFxuICBIU3RhY2ssXG4gIExpc3RJdGVtLFxuICBUZXh0LFxuICBVbm9yZGVyZWRMaXN0LFxuICBWU3RhY2ssXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBqc29uLCBMaW5rLCBMaW5rcywgTG9hZGVyRnVuY3Rpb24sIE91dGxldCwgcmVkaXJlY3QsIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwifi9zZXNzaW9uc1wiO1xuXG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6TG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe3JlcXVlc3R9KSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKFxuICAgIHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIilcbiAgKTtcbiAgaWYgKHNlc3Npb24uaGFzKFwidXNlclNlc3Npb25cIikpIHtcbiAgICAvLyBSZWRpcmVjdCB0byB0aGUgaG9tZSBwYWdlIGlmIHRoZXkgYXJlIGFscmVhZHkgc2lnbmVkIGluLlxuICAgIFxuICAgIHJldHVybiB7c2hvd1BhZ2U6dHJ1ZX1cbiAgfVxuICByZXR1cm4ge3Nob3dQYWdlOmZhbHNlfVxuXG59XG5cblxuXG5mdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG5cbiAgY29uc3Qge3Nob3dQYWdlfSA9IHVzZUxvYWRlckRhdGEoKSBcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgey8qIHtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHNob3dQYWdlKVxuICAgIH0gKi99XG4gICAge1xuICAgICAgdHJ1ZSA/ICA8UHJpdmF0ZVBhZ2UgLz4gOiA8Tm90U2lnbkluUGFnZSAvPlxuICAgIH1cblxuICAgIDwvPlxuICApO1xufVxuXG5jb25zdCBOb3RTaWduSW5QYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICAgIDxIZWFkaW5nPlVzZXIgTm90IExvZ2VkIGluPC9IZWFkaW5nPlxuICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiPkxvZ2luPC9MaW5rPlxuICAgIDwvQm94PlxuICApXG59XG5cblxuY29uc3QgUHJpdmF0ZVBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybihcbiAgICA8Q29udGFpbmVyIG1heFc9XCJvbnRhaW5lci5sZ1wiPlxuICAgIDxIZWFkaW5nIHB5PVwiM1wiPkRvYyBcdUQ4M0VcdURFN0E8L0hlYWRpbmc+XG4gICAgXG4gICAgICBcbiAgICAgIHsvKiA8RGl2aWRlciBzaXplPXtcIjNcIn0gY29sb3JTY2hlbWU9XCJncmVlblwiIG9yaWVudGF0aW9uPSd2ZXJ0aWNhbCcgLz4gKi99XG4gICAgICA8T3V0bGV0IC8+XG4gICAgXG4gIDwvQ29udGFpbmVyPlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xuIiwgImltcG9ydCB7Y3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2V9IGZyb20gXCJyZW1peFwiXG5cblxuZXhwb3J0IGNvbnN0IHtnZXRTZXNzaW9uLGNvbW1pdFNlc3Npb24sZGVzdHJveVNlc3Npb259ICA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcbiAgICBjb29raWU6e1xuICAgICAgICBuYW1lOlwiX19zZXNzaW9uXCJcbiAgICB9XG59KVxuXG5cbiIsICJpbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgRGl2aWRlcixcbiAgSGVhZGluZyxcbiAgSGVhZGluZ1Byb3BzLFxuICBIU3RhY2ssXG4gIElucHV0LFxuICBMaXN0SXRlbSxcbiAgT21pdENvbW1vblByb3BzLFxuICBPcmRlcmVkTGlzdCxcbiAgU3BhY2VyLFxuICBUZXh0LFxuICBVbm9yZGVyZWRMaXN0LFxuICBWU3RhY2ssXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBTbGF0ZUVkaXRvciBmcm9tIFwifi9jb21wb25lbnRzL1NsYXRlRWRpdG9yXCI7XG5cblxuXG5pbXBvcnQge1xuICBNZW51LFxuICBNZW51QnV0dG9uLFxuICBNZW51TGlzdCxcbiAgTWVudUl0ZW0sXG4gIE1lbnVJdGVtT3B0aW9uLFxuICBNZW51R3JvdXAsXG4gIE1lbnVPcHRpb25Hcm91cCxcbiAgTWVudURpdmlkZXIsXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQge1xuICBOdW1iZXJJbnB1dCxcbiAgTnVtYmVySW5wdXRGaWVsZCxcbiAgTnVtYmVySW5wdXRTdGVwcGVyLFxuICBOdW1iZXJJbmNyZW1lbnRTdGVwcGVyLFxuICBOdW1iZXJEZWNyZW1lbnRTdGVwcGVyLFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHtBaU91dGxpbmVEb3duLEFpRmlsbFdhcm5pbmd9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiXG5cbmltcG9ydCB7IFBpbklucHV0LCBQaW5JbnB1dEZpZWxkIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQcmVzQ29udGV4dCwgUHJlc0NvbnRleHRQcm92aWRlciB9IGZyb20gXCJ+L2NvbnRleHQvcHJlc0NvbnRleHRcIjtcbmZ1bmN0aW9uIEluZGV4KCkge1xuXG4gIC8vIGNvbnN0IFtkLHNldERdID0gdXNlQ29udGV4dChQcmVzQ29udGV4dClcblxuICAvLyBjb25zdCBhZGRNYWluRGF0YSA9IChlOmFueSkgPT4ge1xuICAgIC8vIGNvbnN0IG8gPSB7XG4gICAgLy8gICBuYW1lRHJ1ZzogXCJcIixcbiAgICAvLyAgIGRvc2FnZUZvcm06IFwiXCIsXG4gICAgLy8gICBtZzogXCJcIixcbiAgICAvLyAgIGR1cmF0aW9uOiBcIlwiLFxuICAgIC8vIH1cblxuICAgIC8vIGxldCBsYXN0ID0gZFxuXG4gICAgLy8gbGFzdC5wdXNoKG8pXG5cbiAgICAvLyBzZXREKGxhc3QpXG5cbiAgLy8gfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgPFByZXNDb250ZXh0UHJvdmlkZXI+XG4gICAgXG4gIDxCdXR0b24gIG15PVwiM1wiIG1iPVwiM1wiID5DcmVhdGUgTmV3IDwvQnV0dG9uPlxuICAgICAgPERpdmlkZXIgLz5cbiAgICAgIDxWU3RhY2sganVzdGlmeUNvbnRlbnQ9e1wiZmxleC1zdGFydFwifSAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIj5cbiAgICAgIDxIU3RhY2sganVzdGlmeUNvbnRlbnQ9e1wiZmxleC1zdGFydFwifSAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIj5cbiAgICAgIDxWaWV3ZXIgLz5cbiAgICAgIFxuICAgICAgPE9sZFByZXNjcmlwdGlvbnMgLz5cblxuICAgICAgPC9IU3RhY2s+XG4gICAgICBcbiAgICAgIDxCdXR0b24gb25DbGljaz17ZSA9PiB7d2luZG93LnByaW50KCl9fSA+UHJpbnQgXHVEODNEXHVEREE4XHVGRTBGPC9CdXR0b24+XG4gICAgICBcbiAgICAgIDxCdXR0b24+U2F2ZSBQcmVzY3JpcHRpb24gPC9CdXR0b24+XG4gICAgICA8L1ZTdGFjaz5cbiAgPC9QcmVzQ29udGV4dFByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufVxuXG5cbmNvbnN0IE9sZFByZXNjcmlwdGlvbnMgPSAoKSA9PiB7XG4gIFxuICByZXR1cm4gKFxuICAgIDxWU3RhY2sgcGw9XCI5XCIgcHQ9XCIzXCIgYWxpZ25JdGVtcz17XCJmbGV4LXN0YXJ0XCJ9PlxuICAgICAgICA8SGVhZGluZyBmb250U2l6ZT1cIjJ4bFwiPk9sZCBQcmVzY3JpcHRpb25zPC9IZWFkaW5nPlxuICAgICAgICA8VW5vcmRlcmVkTGlzdD5cbiAgICAgICAgICA8TGlzdEl0ZW0gbGlzdFN0eWxlVHlwZT1cIm5vbmVcIj5kYXRlIDE3LTE1LTg3PC9MaXN0SXRlbT5cbiAgICAgICAgPC9Vbm9yZGVyZWRMaXN0PlxuICAgIDwvVlN0YWNrPlxuICApO1xufTtcblxuY29uc3QgVmlld2VyID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW2Qsc2V0RF0gPSB1c2VDb250ZXh0KFByZXNDb250ZXh0KVxuXG5cbiAgY29uc3QgYWRkTWFpbkRhdGEgPSBhc3luYyAoZTphbnkpID0+IHtcbiAgXG4gICAgXG4gIH1cblxuXG4gIHJldHVybihcbiAgICA8Qm94ID5cbiAgICAgIHtcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoZClcbiAgICAgIH1cbiAgICAgIDxCb3ggPlxuICAgICAgPFByZXNCb3ggLz4gIFxuICAgICAgey8qIDxTbGF0ZUVkaXRvciAvPiAqL31cbiAgICAgIDxCdXR0b24gb25DbGljaz17ZSA9PiBhZGRNYWluRGF0YShlKX0gPisgPC9CdXR0b24+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5jb25zdCBQcmVzQm94ID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtkLHNldERdID0gdXNlQ29udGV4dChQcmVzQ29udGV4dClcbiAgXG5cbiAgcmV0dXJuKFxuICAgIDxCb3g+XG4gICAgICB7LyogPFByZXNTdGFjayAvPlxuICAgICAgPFByZXNTdGFjayAvPlxuICAgICAgPFByZXNTdGFjayAvPiAqL31cblxuICAgIFxuXG4gICAgICB7XG4gICAgICAgIGQubWFwKChyOmFueSApPT4ge1xuICAgICAgICAgIHJldHVybiA8UHJlc1N0YWNrIGRhdGE9e3J9Lz5cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8L0JveD5cbiAgKVxufVxuXG5jb25zdCBQcmVzU3RhY2sgPSAoe2RhdGF9OmFueSkgPT4ge1xuXG4gIGNvbnN0IFtwcmVDb24sc2V0UHJlQ29uXSA9IHVzZUNvbnRleHQoUHJlc0NvbnRleHQpXG5cblxuICBjb25zdCBjaGFuZ2VVcGRhdGUgPSAoZGF0YTphbnkpID0+IHtcbiAgICBcbiAgfVxuXG4gIHJldHVybiA8Qm94IHB5PVwiM1wiIHc9XCJmdWxsXCIgZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiID5cbnsvKiA8VGV4dCBjb2xvcj1cInJlZCAgXCI+PEFpRmlsbFdhcm5pbmcgLz48L1RleHQ+ICovfVxuPFZTdGFjaz5cbiAgPFRleHQ+RHJ1ZzwvVGV4dD5cbjxJbnB1dCBteD1cIjFcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwibmFtZSBvZiBEcnVnXCIgIHZhbHVlPXtkYXRhLm5hbWVEcnVnfSBvbkNoYW5nZT17ZSA9PiBjaGFuZ2VVcGRhdGUoZSl9Lz5cbjwvVlN0YWNrPlxuPFNwYWNlciAvPlxuPFZTdGFjayBteD1cIjJcIj5cbiAgPFRleHQ+RG9zYWdlIEZvcm08L1RleHQ+XG48TWVudSA+XG4gIDxNZW51QnV0dG9uICB2YWx1ZT17ZGF0YS5kb3NhZ2VGb3JtfSBhcz17QnV0dG9ufSByaWdodEljb249ezxBaU91dGxpbmVEb3duIC8+fT5cbiAgICB7ZGF0YS5kb3NhZ2VGb3JtfVxuICA8L01lbnVCdXR0b24+XG4gIDxNZW51TGlzdD5cbiAgICA8TWVudUl0ZW0+T2ludG1lbnRzPC9NZW51SXRlbT5cbiAgICA8TWVudUl0ZW0+c3lydXA8L01lbnVJdGVtPlxuICAgIDxNZW51SXRlbT5UYWJsZXQ8L01lbnVJdGVtPlxuICAgIDxNZW51SXRlbT5Qb3dkZXI8L01lbnVJdGVtPlxuICAgIDxNZW51SXRlbT5QaWxsczwvTWVudUl0ZW0+XG4gIDwvTWVudUxpc3Q+XG48L01lbnU+XG48L1ZTdGFjaz5cbjxTcGFjZXIgLz5cbjxWU3RhY2sgbXg9XCIyXCI+XG4gIDxUZXh0PkRvc2UgbWc8L1RleHQ+XG48TnVtYmVySW5wdXQgbXg9XCIzXCIgZGVmYXVsdFZhbHVlPXsxNX0gdmFsdWU9e2RhdGEubWd9IHByZWNpc2lvbj17Mn0gc3RlcD17MC4yfT5cbiAgPE51bWJlcklucHV0RmllbGQgLz5cbiAgPE51bWJlcklucHV0U3RlcHBlcj5cbiAgICA8TnVtYmVySW5jcmVtZW50U3RlcHBlciAvPlxuICAgIDxOdW1iZXJEZWNyZW1lbnRTdGVwcGVyIC8+XG4gIDwvTnVtYmVySW5wdXRTdGVwcGVyPlxuPC9OdW1iZXJJbnB1dD5cblxuPC9WU3RhY2s+XG5cblxuey8qIFBpbiBJbnB1dCAqL31cbjxWU3RhY2sgbXg9XCIyXCI+XG48VGV4dD5EdXJhdGlvbjwvVGV4dD5cbjxIU3RhY2s+XG4gIDxQaW5JbnB1dCBkZWZhdWx0VmFsdWU9e2RhdGEuZHVyYXRpb259PlxuPFBpbklucHV0RmllbGQgLz5cbiAgICA8UGluSW5wdXRGaWVsZCAvPlxuICAgIDxQaW5JbnB1dEZpZWxkIC8+XG4gIDwvUGluSW5wdXQ+XG48L0hTdGFjaz5cbjwvVlN0YWNrPlxuICA8L0JveD5cbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IFByZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxhbnk+KG51bGwpO1xuXG5leHBvcnQgY29uc3QgUHJlc0NvbnRleHRQcm92aWRlciA9IChwcm9wczogYW55KSA9PiB7XG4gIFxuXG4gIGNvbnN0IG1haW5EYXRhID0gW3tcbiAgICAgIG5hbWVEcnVnOlwicGFyYWNldGFtb2xcIixcbiAgICAgIGRvc2FnZUZvcm06XCJzeXJ1cFwiLFxuICAgICAgbWc6XCIxNlwiLFxuICAgICAgZHVyYXRpb24gOlwiMTAxXCIsXG4gIH0se1xuICAgICAgbmFtZURydWc6XCJ3YXJmYXJpblwiLFxuICAgICAgZG9zYWdlRm9ybTpcImxvdGlvblwiLFxuICAgICAgbWc6XCIxNlwiLFxuICAgICAgZHVyYXRpb24gOlwiMTExXCJcbiAgfV1cblxuLy8gICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShtYWluRGF0YSlcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW1xuICAgIHtcbiAgICAgIG5hbWVEcnVnOiBcIlwiLFxuICAgICAgZG9zYWdlRm9ybTogXCJcIixcbiAgICAgIG1nOiBcIlwiLFxuICAgICAgZHVyYXRpb246IFwiXCIsXG4gICAgfSxcbiAgXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UHJlc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tkYXRhLCBzZXREYXRhXX0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9QcmVzQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgRm9ybUhlbHBlclRleHQsXG4gIEZvcm1MYWJlbCxcbiAgSGVhZGluZyxcbiAgSFN0YWNrLFxuICBJbnB1dCxcbiAgU3BhY2VyLFxuICBUYWIsXG4gIFRhYkxpc3QsXG4gIFRhYlBhbmVsLFxuICBUYWJQYW5lbHMsXG4gIFRhYnMsXG4gIHVzZVRvYXN0LFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsganNvbiB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlLWFkbWluL2F1dGhcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQWN0aW9uRnVuY3Rpb24sXG4gIEZvcm0sXG4gIHJlZGlyZWN0LFxuICB1c2VBY3Rpb25EYXRhLFxuICB1c2VTdWJtaXQsXG4gIHVzZVRyYW5zaXRpb24sXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgY3JlYXRlQW5kU2F2ZVNlc3Npb24gfSBmcm9tIFwifi9sb2dpYy9zZXNzaW9uQXV0cmhMb2dpY1wiO1xuaW1wb3J0IHsgY29tbWl0U2Vzc2lvbiB9IGZyb20gXCJ+L3Nlc3Npb25zXCI7XG5pbXBvcnQgeyBjcmVhdGVDdXN0b3JtVG9rZW4sIGNyZWF0ZVVzZXIgfSBmcm9tIFwifi91dGlscy9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgZmlyZUF1dGgsIGZpcmVzdG9yZSB9IGZyb20gXCJ+L3V0aWxzL2ZpcmUuc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgbGV0IGZvcm1BY3Rpb24gPSBmb3JtLmdldChcIl9hY3Rpb25cIik7XG4gIGxldCBlbWFpbCA9IGZvcm0uZ2V0KFwiZW1haWxcIik7XG4gIGxldCBwYXNzd29yZCA9IGZvcm0uZ2V0KFwicGFzc3dvcmRcIik7XG4gIGxldCBwcm9maWxlTmFtZSA9IGZvcm0uZ2V0KFwicHJvZmlsZU5hbWVcIik7XG5cbiAgY29uc3QgY29sID0gZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKTtcbiAgbGV0IHJlcyA6IGFueTtcbiAgaWYgKGZvcm1BY3Rpb24gPT09IFwiY3JlYXRldXNlclwiKSB7XG4gICAgaWYgKGVtYWlsICYmIHBhc3N3b3JkICYmIHByb2ZpbGVOYW1lKSB7XG4gICAgICBhd2FpdCBjcmVhdGVVc2VyKHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgICBkaXNwbGF5TmFtZTogcHJvZmlsZU5hbWUsXG4gICAgICB9KS50aGVuKGFzeW5jICh1c2VyUmVjb3JkKSA9PiB7XG4gICAgICAgIHJlcyA9IHsgc3RhdHVzOiB0cnVlLCBpZDogdXNlclJlY29yZC51aWQgfTtcbiAgICAgICAgYXdhaXQgY3JlYXRlQW5kU2F2ZVNlc3Npb24odXNlclJlY29yZC51aWQscmVxdWVzdClcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIHJlcy5zdGF0dXMgPyByZWRpcmVjdChcIi9kYXNoYm9hcmRcIikgOiByZXNcbn07XG5cbmZ1bmN0aW9uIExvZ2luKCkge1xuICBjb25zdCBBY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YSgpO1xuICBjb25zdCB0b2FzdCA9IHVzZVRvYXN0KCk7XG5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gIGlmKEFjdGlvbkRhdGEgIT0gbnVsbCl7XG4gICAgY29uc29sZS5sb2coXCJOT1QgTlVMTCAwMVwiKTtcbiAgICBcbiAgICAgaWYoQWN0aW9uRGF0YS5zdGF0dXMgKXtcbiAgICAgICBjb25zb2xlLmxvZyhcIk5PVCBOVUxMIDAxXCIpO1xuICAgICAgIHJlZGlyZWN0IChcIi9kYXNoYm9hcmRcIilcbiAgICAgfVxuICB9XG4gXG59LFtBY3Rpb25EYXRhXSlcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIG1heEg9XCJjb250YWluZXIubGdcIj5cbiAgICAgIHtKU09OLnN0cmluZ2lmeShBY3Rpb25EYXRhKX1cblxuICAgICAgPEJveFxuICAgICAgICBkaXNwbGF5PXtcImZsZXhcIn1cbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICBtdD1cIjMwXCJcbiAgICAgICAgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn1cbiAgICAgID5cbiAgICAgICAgPEJveCBzdHlsZT17eyB3aWR0aDogXCI2MHZ3XCIgfX0+XG4gICAgICAgICAgPFRhYnM+XG4gICAgICAgICAgICA8VGFiTGlzdD5cbiAgICAgICAgICAgICAgPFRhYj5Mb2dpbjwvVGFiPlxuICAgICAgICAgICAgICA8VGFiPkNyZWF0ZSBOZXcgVXNlcjwvVGFiPlxuICAgICAgICAgICAgPC9UYWJMaXN0PlxuICAgICAgICAgICAgPFRhYlBhbmVscz5cbiAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxMb2dpblVzZXIgLz5cbiAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxDcmVhdGVOZXdVc2VyIC8+XG4gICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICA8L1RhYlBhbmVscz5cbiAgICAgICAgICA8L1RhYnM+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmNvbnN0IExvZ2luVXNlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgPEZvcm1MYWJlbD5DZW50ZXI8L0Zvcm1MYWJlbD5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgbmFtZT1cImNlbnRlclwiXG4gICAgICAgICAgdHlwZT1cImNlbnRlclwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0YWwgTGFic1wiXG4gICAgICAgID48L0lucHV0PlxuXG48U3BhY2VyIC8+XG4gICAgICAgIHsvKiBBbGwgT2xkIGlucHV0cyBEb3duKi99XG4gICAgICAgIDxGb3JtTGFiZWw+RW1haWw8L0Zvcm1MYWJlbD5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJqaG9uQGdtYWlsLmNvbVwiXG4gICAgICAgID48L0lucHV0PlxuICAgICAgICA8Rm9ybUhlbHBlclRleHQ+V2UnbGwgbmV2ZXIgc2hhcmUgeW91ciBlbWFpbC48L0Zvcm1IZWxwZXJUZXh0PlxuICAgICAgICA8Rm9ybUxhYmVsPlBhc3N3b3JkPC9Gb3JtTGFiZWw+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICA+PC9JbnB1dD5cbiAgICAgICAgPFNwYWNlciAvPlxuICAgICAgICA8SFN0YWNrIG10PVwiNlwiIGp1c3RpZnlDb250ZW50PXtcImNlbnRlclwifSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgbmFtZT1cIl9hY3Rpb25cIlxuICAgICAgICAgICAgdmFsdWU9e1wibG9naW51c2VyXCJ9XG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNvbG9yU2NoZW1lPXtcImdyZWVuXCJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8U3BhY2VyIC8+XG4gICAgICAgIDwvSFN0YWNrPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuY29uc3QgQ3JlYXRlTmV3VXNlciA9ICgpID0+IHtcbiAgY29uc3QgQWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGEoKTtcblxuICBcblxuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgIDxGb3JtTGFiZWw+UHJvZmlsZSBOYW1lPC9Gb3JtTGFiZWw+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIG5hbWU9XCJwcm9maWxlTmFtZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJKaG9uIERvZVwiXG4gICAgICAgID48L0lucHV0PlxuICAgICAgICA8Rm9ybUxhYmVsPkVtYWlsPC9Gb3JtTGFiZWw+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiamhvbkBnbWFpbC5jb21cIlxuICAgICAgICA+PC9JbnB1dD5cbiAgICAgICAgPEZvcm1IZWxwZXJUZXh0PldlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWwuPC9Gb3JtSGVscGVyVGV4dD5cbiAgICAgICAgPEZvcm1MYWJlbD5QYXNzd29yZDwvRm9ybUxhYmVsPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgPjwvSW5wdXQ+XG4gICAgICAgIDxGb3JtTGFiZWw+Q2VudHJlIE5hbWU8L0Zvcm1MYWJlbD5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgbmFtZT1cImNlbnRlck5hbWVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2VudGVyIE5hbWVcIlxuICAgICAgICA+PC9JbnB1dD5cbiAgICAgICAgPEZvcm1MYWJlbD5MaWNlbmNlPC9Gb3JtTGFiZWw+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8vIG5hbWU9XCJsaWNlbmNlXCJcbiAgICAgICAgICAvLyBwbGFjZWhvbGRlcj1cIkpob24gRG9lXCJcbiAgICAgICAgPjwvSW5wdXQ+XG4gICAgICAgIDxTcGFjZXIgLz5cbiAgICAgICAgPEhTdGFjayBtdD1cIjZcIiBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG5hbWU9XCJfYWN0aW9uXCJcbiAgICAgICAgICAgIHZhbHVlPXtcImNyZWF0ZXVzZXJcIn1cbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgY29sb3JTY2hlbWU9e1wiZ3JlZW5cIn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDcmVhdGUgUHJvZmlsZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxTcGFjZXIgLz5cbiAgICAgICAgPC9IU3RhY2s+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5cbi8vIHByZXNjcmlwdGlvbiBcblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iLCAiaW1wb3J0IHsgY29tbWl0U2Vzc2lvbiwgZ2V0U2Vzc2lvbiB9IGZyb20gXCJ+L3Nlc3Npb25zXCI7XG5pbXBvcnQgeyBjcmVhdGVDdXN0b3JtVG9rZW4sIGNyZWF0ZVNlc3Npb25Db29raWVBdXRoIH0gZnJvbSBcIn4vdXRpbHMvYXV0aC5zZXJ2ZXJcIlxuXG5leHBvcnQgY29uc3QgY3JlYXRlQW5kU2F2ZVNlc3Npb24gPSBhc3luYyAoaWQ6c3RyaW5nLHJlcXVlc3Q6UmVxdWVzdCkgPT4ge1xuICAgXG4gICAgbGV0IHRva2VuY3JlYXRlZCA9IGF3YWl0IGNyZWF0ZUN1c3Rvcm1Ub2tlbihpZClcbiAgIGF3YWl0IGNvbnNvbGUubG9nKHRva2VuY3JlYXRlZCxcIlRva2VuIENyZWF0ZWRcIik7XG4gICBcbi8vICAgIGxldCBzZXNzaW9uVG9rZW4gPSBhd2FpdCBjcmVhdGVTZXNzaW9uQ29va2llQXV0aCh0b2tlbmNyZWF0ZWQudG9TdHJpbmcoKSlcbi8vICAgIGF3YWl0IGNvbnNvbGUubG9nKHNlc3Npb25Ub2tlbixcIlNlc3Npb24gVG9rZW4gQ3JlYXRlZFwiKTtcbiAgIFxuXG4gICBjb25zdCBzZXNzaW9uICA9IGF3YWl0IGdldFNlc3Npb24oXG4gICAgICAgcmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKVxuICAgKVxuXG4gICBhd2FpdCBzZXNzaW9uLnNldChcInVzZXJTZXNzaW9uXCIsdG9rZW5jcmVhdGVkLnRvU3RyaW5nKCkpXG4gICBcbiAgIGF3YWl0IGNvbW1pdFNlc3Npb24oc2Vzc2lvbilcbiAgIGNvbnNvbGUubG9nKFwiU0VTU0lPTiBDUkVBVEVEIEFORCBDT01NSVRFRFwiKTtcbiAgIFxufSIsICJpbXBvcnQgeyBmaXJlQXV0aCB9IGZyb20gXCJ+L3V0aWxzL2ZpcmUuc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSB9IGZyb20gXCJyZW1peFwiO1xuaW50ZXJmYWNlIFVzZXIge1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xuICBkaXNwbGF5TmFtZTogc3RyaW5nO1xufVxuXG5jb25zdCBjcmVhdGVVc2VyID0gYXN5bmMgKHsgZW1haWwsIHBhc3N3b3JkLCBkaXNwbGF5TmFtZSB9OiBVc2VyKSA9PiB7XG4gIHJldHVybiBhd2FpdCBmaXJlQXV0aC5jcmVhdGVVc2VyKHtcbiAgICBlbWFpbDogZW1haWwsXG4gICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSxcbiAgfSk7XG59O1xuXG5jb25zdCB1cGRhdGVVc2VyID0gKHsgZW1haWwsIHBhc3N3b3JkLCBkaXNwbGF5TmFtZSwgdWlkIH06IGFueSkgPT4ge1xuICBmaXJlQXV0aFxuICAgIC51cGRhdGVVc2VyKHVpZCwge1xuICAgICAgZW1haWwsXG4gICAgICBwYXNzd29yZCxcbiAgICAgIGRpc3BsYXlOYW1lLFxuICAgIH0pXG4gICAgLnRoZW4oKHVzZXJSZWNvcmQpID0+IHtcbiAgICAgIC8vIFNlZSB0aGUgVXNlclJlY29yZCByZWZlcmVuY2UgZG9jIGZvciB0aGUgY29udGVudHMgb2YgdXNlclJlY29yZC5cbiAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgdXNlclwiLCB1c2VyUmVjb3JkLnRvSlNPTigpKTtcbiAgICAgIHJldHVybiB7IHN0YXR1czogXCJkb25lXCIsIHVzZXJSZWNvcmQgfTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgdXBkYXRpbmcgdXNlcjpcIiwgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcImZhaWxcIiwgZXJyb3IgfTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAodWlkOiBzdHJpbmcpID0+IHtcbiAgZmlyZUF1dGhcbiAgICAuZGVsZXRlVXNlcih1aWQpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgZGVsZXRlZCB1c2VyXCIpO1xuICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcIlN1Y2Nlc3NmdWxseSBkZWxldGVkIHVzZXJcIiB9O1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvciBkZWxldGluZyB1c2VyOlwiLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBzdGF0dXM6IFwiRXJyb3IgZGVsZXRpbmcgdXNlcjpcIiwgZXJyb3IgfTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGNyZWF0ZUN1c3Rvcm1Ub2tlbiA9IGFzeW5jICh1aWQ6IHN0cmluZykgPT4ge1xuICByZXR1cm4gYXdhaXQgZmlyZUF1dGguY3JlYXRlQ3VzdG9tVG9rZW4odWlkKTtcbn07XG5cbmNvbnN0IHZlcmlmeVRva2VuID0gKGlkVG9rZW46IHN0cmluZykgPT4ge1xuICBmaXJlQXV0aFxuICAgIC52ZXJpZnlJZFRva2VuKGlkVG9rZW4pXG4gICAgLnRoZW4oKGRlY29kZWRUb2tlbikgPT4ge1xuICAgICAgLy8gQXBwbHkgTG9naWNcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICByZXR1cm4geyBzdGF0dXM6IFwiR290IGVycm9yIHZlcmlmeWluZyB0b2tlblwiLCBlcnIgfTtcbiAgICB9KTtcbn07XG4vLyBjb25zdCBjcmVhdGVTZXNzaW9uQ29va2llID0gKCkgPT4ge1xuXG4vLyB9XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTZXNzaW9uQ29va2llQXV0aCA9IGFzeW5jICh1c2VySWQ6IHN0cmluZykgPT4ge1xuICAvLyBTZXQgc2Vzc2lvbiBleHBpcmF0aW9uIHRvIDUgZGF5cy5cbiAgY29uc3QgZXhwaXJlc0luID0gNjAgKiA2MCAqIDI0ICogNSAqIDEwMDA7XG4gIHJldHVybiBhd2FpdCBmaXJlQXV0aC5jcmVhdGVTZXNzaW9uQ29va2llKHVzZXJJZCwgeyBleHBpcmVzSW4gfSk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVVc2VyLCB1cGRhdGVVc2VyLCBkZWxldGVVc2VyLCBjcmVhdGVDdXN0b3JtVG9rZW4sIHZlcmlmeVRva2VuIH07XG4iLCAiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCwgYXBwbGljYXRpb25EZWZhdWx0LCBjZXJ0IH0gZnJvbSBcImZpcmViYXNlLWFkbWluL2FwcFwiO1xubGV0IGFkbWluID0gcmVxdWlyZShcImZpcmViYXNlLWFkbWluXCIpXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlLWFkbWluL2F1dGhcIjtcblxuXG5jb25zdCBhOmFueSA9IHtcbiAgXCJ0eXBlXCI6IFwic2VydmljZV9hY2NvdW50XCIsXG4gIFwicHJvamVjdF9pZFwiOiBcInJ1ZGhyYWpvc2hpY29tXCIsXG4gIFwicHJpdmF0ZV9rZXlfaWRcIjogXCI5ZmVmMzZiMjc5YTQxOTQ4ZTY2NDM0MzRkZjk3MzIwODFhNWJkMjk1XCIsXG4gIFwicHJpdmF0ZV9rZXlcIjogXCItLS0tLUJFR0lOIFBSSVZBVEUgS0VZLS0tLS1cXG5NSUlFdlFJQkFEQU5CZ2txaGtpRzl3MEJBUUVGQUFTQ0JLY3dnZ1NqQWdFQUFvSUJBUURCYVBiU0lJM1RpdnMrXFxuRDlpRWlPZW03ZVFjM25EcnVCVUQwTE0xUVEyYm1NQzNVUVlnV3lNaUgvdW5waE5zSTI3Y1Q4TXBVdjE3bnUzUlxcbjRKYnQyczUzWmVFRHNERXJLWlVIbkx6eGIrZTh6YjdsQVlPc016S2F0cVNOUHVPSGh3QjhhU1NKQXF3RkMxdXBcXG5XbituVTc3T1Z2bEhiYmhDUW8rd0dzeks5U2lzME1jak1ZWHF3dnR5MjVSNmwzd3Jrc1I5ZGVQbWZLSkpKVjA5XFxuOWhON25hc3Z1MEhtZzNnOVNVeUh3VlZhRFcwZy8zVVZBOXN5MkJkb1NkNWk4c2UxTCt5TlFuYytZaFZyWVlMU1xcbnBUZExLdlpOaCtnTHZGK0R1cXljaXkyS3FiRU12UzZTUlQyQXJtWWVHK3FRaGwrV1ZSd0xTQnNRQUY0d1FBZ0lcXG5udTczWjhKdEFnTUJBQUVDZ2dFQUdDSnkrbEdab1JZc3Q5ZmVXdHVDbksvKzBTTm96K0ZPcmdVeTk2aEFmSFFaXFxuU0ViU0R1T1FoTWVjN1pTcHc4ckFJTG5MVHJMT2NzaW9RSkpZQXlKVXRVMS9RS2lSMmlMOE45RDFPdU9OOVY5dlxcblBNQnRuK1Zib1RhOVhlckZGYnBnOHlWanE3MHJuZzJHeUtGRVlLcndtbXI3L0UvU3VHSDU4QzNIOUdPWFNja2tcXG5IdUs2alNvWWxhQ3V6VHp6clRYcFpxQTBDTHRLcTcrMEFZek5Xc3VWajNOb1JQTUt1U3RYM2Y1TmpWamxtYWtmXFxuT3hkTzRVeTlTZGszVUsxYzhNMjNXMnJKNlB4aUdVdE9SREFhMjN3bXJ2WC92MUg2ZnBJZ0k1bkNnVW5jTDZWNVxcbjc0cjNtWWIwZUZKTU94Wlk5ZUJYYTIzL3hnaEdTWU11alJreFF1bk1BUUtCZ1FEbWdoUHh5SDd6OGhhUWV2SEpcXG4zOEZ0Y1RSWDl1T0NyZWJ5R0hXdUlqTVUvcUV6N0hjQVRRUFNSUm8vTkpHNW5yUGpFUzY3M2xnMzBMbzNNNkVVXFxuclp6aDFEV0xqOGxSRUVncE1DajJxRUswWjBMQ29QcU1vekNjd1JabUxiNVpMa1BFdWJRZCsyN2JJY0crQjl0Ylxcbnh0eVdYaGlxSkVXMFFNNmxoYk5XNXc2WWdRS0JnUURXekpuTy9ONTlGbXhaeGM1Y3hSbXh6Nm8wY2RkL3JQTXNcXG5MKzUrUjR0Qm85U0J5ZHpsdnA4NU80S1owZU9KVzJURjZOVC9nYmF5MzByLzF2V2R6UFFqNndHY0haYjY1WXF1XFxudThSWDBGUVB0MnN3WlFHQU4vdGJ2dGtTWlZ3ZGFOaW0yeHNDdEsvY0phWVpWUy9kalBFQUJJcFBES2l2ZzVaeVxcbk40eXJxQk1UN1FLQmdRQ0pmQkpMUnV1NXNxNFV0TS9jT1pKVUpZNHozVFRycjYrc3ZEd01oYWQwSVQrakNhb2NcXG55dEs1cXEreC9UZmh2Ni9KZ21rZWNzcXBWOXlKcWtpc1hiVFIyVkdxa1ROaEgxWDdBeGVicnRaQ1pjaWk3NE1oXFxuT1FCNHJvNGVtYkFMM3hWYWsrekRhVUZBZ0V6ZmZDNHcrbFo5ZFZnK3V1MjhTbDgyeUowait5SndnUUtCZ0Z2Ylxcbkh5TlBLKzRlT3JPaFRZQ0tvVlJTMUJ5ZFdtUzFGMENjTnNjMTNTMXkzQnVzc1pSbUVqMHRYOHBiNFl3SjAyeDNcXG5CeTlFejFacSt1MnhoVk80SStlQVJpMzIwV3YxNFhxYnZYazRFOXFzdTEvMHNkR2RIeGE2NUtWalJ5TWtoUkhGXFxudlNWSkU3TjNQakt6SlViL1VNaUxLSUpwalhHUk9qTVo0a1ErR2ZwNUFvR0FSOHh0KytNb3pWT2I5dnRGMXVUTFxcbjIzRmxxSEJ1U3FuUk1xc2dpV3RSSUErOU0rMDN4UkRQSjh6TzBtSW1tUCt0cHlTNmpER2dHWkUyTWNxeC9wRS9cXG5JQ2FNVlBHanNYWWRicDI3MGMwazJmSDJaL3RWWEFnckhoekdnTUJnemljY1dINjdSbjhtZ2p4M1QyYXFsWGR0XFxuZ05NQU9SaUNJTytMUytjZXhZUllGTGs9XFxuLS0tLS1FTkQgUFJJVkFURSBLRVktLS0tLVxcblwiLFxuICBcImNsaWVudF9lbWFpbFwiOiBcImZpcmViYXNlLWFkbWluc2RrLXh1ZDE4QHJ1ZGhyYWpvc2hpY29tLmlhbS5nc2VydmljZWFjY291bnQuY29tXCIsXG4gIFwiY2xpZW50X2lkXCI6IFwiMTExMDk3MzIzNzQ1NzQwNTE1OTg5XCIsXG4gIFwiYXV0aF91cmlcIjogXCJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvYXV0aFwiLFxuICBcInRva2VuX3VyaVwiOiBcImh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tL3Rva2VuXCIsXG4gIFwiYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsXCI6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vb2F1dGgyL3YxL2NlcnRzXCIsXG4gIFwiY2xpZW50X3g1MDlfY2VydF91cmxcIjogXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9yb2JvdC92MS9tZXRhZGF0YS94NTA5L2ZpcmViYXNlLWFkbWluc2RrLXh1ZDE4JTQwcnVkaHJham9zaGljb20uaWFtLmdzZXJ2aWNlYWNjb3VudC5jb21cIlxufVxuaW5pdGlhbGl6ZUFwcCh7Y3JlZGVudGlhbDpjZXJ0KGEpfSk7XG5leHBvcnQgY29uc3QgZmlyZXN0b3JlID0gZ2V0RmlyZXN0b3JlKCk7XG5leHBvcnQgY29uc3QgZmlyZUF1dGggPSBnZXRBdXRoKCk7XG4iLCAiaW1wb3J0IHsgSGVhZGluZyB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgZmlyZXN0b3JlIH0gZnJvbSBcIn4vdXRpbHMvZmlyZS5zZXJ2ZXJcIlxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY29sbGVjdGlvblVzZXIgPSBmaXJlc3RvcmUuY29sbGVjdGlvbihcInVzZXJzXCIpO1xuXG4gIGxldCByZXMgPSBhd2FpdCBjb2xsZWN0aW9uVXNlclxuICAgIC5kb2MoKVxuICAgIC5zZXQoeyBmaXJzdDogXCJKaHNvblwiLCBsYXN0OiBcIkRvZVwiLCBlbWFpbDogXCJydWRyYUBnbWlhbC5jb21cIiB9KTtcblxuXG4gIFxuXG4gIHJldHVybiB7bXNnOlwic2F2ZWQgZGF0YVwiLHJlc31cblxufTtcblxuZnVuY3Rpb24gSW5kZXgoKSB7XG5cbiAgY29uc3QgcG9zdCA9IHVzZUxvYWRlckRhdGEoKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkaW5nPkhvbWUgUGFnZTwvSGVhZGluZz5cbiAgICAgIHtcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkocG9zdClcbiAgICAgIH1cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonYjRhNjQ2ZWQnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LTdSV0ZOS1VDLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1GNTQ0RUVaUy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUlFMk1ZVUpRLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1TQlk3SzRUTy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstMkpCUE42UksuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL0xvZ2luJzp7J2lkJzoncm91dGVzL0xvZ2luJywncGFyZW50SWQnOidyb290JywncGF0aCc6J0xvZ2luJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL0xvZ2luLVVISlVTSzJXLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay03VE4zRTVOWi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9kYXNoYm9hcmQnOnsnaWQnOidyb3V0ZXMvZGFzaGJvYXJkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Rhc2hib2FyZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9kYXNoYm9hcmQtWUhPSUxFUlAuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Rhc2hib2FyZC9pbmRleCc6eydpZCc6J3JvdXRlcy9kYXNoYm9hcmQvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9kYXNoYm9hcmQnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZGFzaGJvYXJkL2luZGV4LUNaSDNKSFFQLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0ySkJQTjZSSy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtMlpBWExLSkwuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTdUTjNFNU5aLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1CNEE2NDZFRC5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUdqQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksZ0JBQWdCLFFBQVE7QUFJNUIsV0FBTyxlQUFlLFNBQVMsZ0JBQWdC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

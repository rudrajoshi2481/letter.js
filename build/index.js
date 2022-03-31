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

// route:C:\Users\rudra\Desktop\o\letter.js\app\root.tsx
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

// route:C:\Users\rudra\Desktop\o\letter.js\app\root.tsx
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
    initialColorMode: "dark"
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

// route:C:\Users\rudra\Desktop\o\letter.js\app\routes\dashboard.tsx
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

// route:C:\Users\rudra\Desktop\o\letter.js\app\routes\dashboard.tsx
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

// route:C:\Users\rudra\Desktop\o\letter.js\app\routes\dashboard\index.tsx
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

// route:C:\Users\rudra\Desktop\o\letter.js\app\routes\dashboard\index.tsx
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PresContextProvider, null, /* @__PURE__ */ React.createElement(import_react8.Button, {
    my: "3",
    mb: "3"
  }, "Create New", " "), /* @__PURE__ */ React.createElement(import_react8.Divider, null), /* @__PURE__ */ React.createElement(import_react8.VStack, {
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(import_react8.HStack, {
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(Viewer, null), /* @__PURE__ */ React.createElement(OldPrescriptions, null)), /* @__PURE__ */ React.createElement(import_react8.Button, {
    onClick: (e) => {
      window.print();
      console.log("print");
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
  const addRow = (e) => {
    let oldData = [];
    d.map((oldD) => {
      oldData.push(oldD);
    });
    oldData.push({
      nameDrug: "",
      dosageForm: "",
      mg: "",
      duration: ""
    });
    setD(oldData);
    console.log(d);
  };
  return /* @__PURE__ */ React.createElement(import_react8.Box, null, /* @__PURE__ */ React.createElement(import_react8.Box, null, /* @__PURE__ */ React.createElement(PresBox, null), /* @__PURE__ */ React.createElement(import_react8.Button, {
    onClick: (e) => {
      addRow(e);
    }
  }, "Add +")));
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

// route:C:\Users\rudra\Desktop\o\letter.js\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  loader: () => loader2
});
init_react();
var import_react13 = require("@chakra-ui/react");
var import_react14 = __toESM(require("react"));
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

// route:C:\Users\rudra\Desktop\o\letter.js\app\routes\index.tsx
var loader2 = async () => {
  const collectionUser = firestore.collection("users");
  let res = await collectionUser.doc().set({ first: "Jhson", last: "Doe", email: "rudra@gmial.com" });
  return { msg: "saved data", res };
};
function Index2() {
  const post = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ import_react14.default.createElement(import_react14.default.Fragment, null, /* @__PURE__ */ import_react14.default.createElement(import_react13.Heading, null, "Home Page"), JSON.stringify(post));
}
var routes_default = Index2;

// route:C:\Users\rudra\Desktop\o\letter.js\app\routes\Login.tsx
var Login_exports = {};
__export(Login_exports, {
  action: () => action,
  default: () => Login_default
});
init_react();
var import_react15 = require("@chakra-ui/react");
var import_react16 = __toESM(require("react"));
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

// route:C:\Users\rudra\Desktop\o\letter.js\app\routes\Login.tsx
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
  const toast = (0, import_react15.useToast)();
  (0, import_react16.useEffect)(() => {
    if (ActionData != null) {
      console.log("NOT NULL 01");
      if (ActionData.status) {
        console.log("NOT NULL 01");
        (0, import_remix7.redirect)("/dashboard");
      }
    }
  }, [ActionData]);
  return /* @__PURE__ */ import_react16.default.createElement(import_react15.Container, {
    maxH: "container.lg"
  }, JSON.stringify(ActionData), /* @__PURE__ */ import_react16.default.createElement(import_react15.Box, {
    display: "flex",
    justifyContent: "center",
    mt: "30",
    alignItems: "center"
  }, /* @__PURE__ */ import_react16.default.createElement(import_react15.Box, {
    style: { width: "60vw" }
  }, /* @__PURE__ */ import_react16.default.createElement(import_react15.Tabs, null, /* @__PURE__ */ import_react16.default.createElement(import_react15.TabList, null, /* @__PURE__ */ import_react16.default.createElement(import_react15.Tab, null, "Login"), /* @__PURE__ */ import_react16.default.createElement(import_react15.Tab, null, "Create New User")), /* @__PURE__ */ import_react16.default.createElement(import_react15.TabPanels, null, /* @__PURE__ */ import_react16.default.createElement(import_react15.TabPanel, null, /* @__PURE__ */ import_react16.default.createElement(LoginUser, null)), /* @__PURE__ */ import_react16.default.createElement(import_react15.TabPanel, null, /* @__PURE__ */ import_react16.default.createElement(CreateNewUser, null)))))));
}
var LoginUser = () => {
  return /* @__PURE__ */ import_react16.default.createElement(import_react15.Box, null, /* @__PURE__ */ import_react16.default.createElement(import_remix7.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react16.default.createElement(import_react15.FormLabel, null, "Center"), /* @__PURE__ */ import_react16.default.createElement(import_react15.Input, {
    name: "center",
    type: "center",
    required: true,
    placeholder: "Digital Labs"
  }), /* @__PURE__ */ import_react16.default.createElement(import_react15.Spacer, null), /* @__PURE__ */ import_react16.default.createElement(import_react15.FormLabel, null, "Email"), /* @__PURE__ */ import_react16.default.createElement(import_react15.Input, {
    name: "email",
    type: "email",
    required: true,
    placeholder: "jhon@gmail.com"
  }), /* @__PURE__ */ import_react16.default.createElement(import_react15.FormHelperText, null, "We'll never share your email."), /* @__PURE__ */ import_react16.default.createElement(import_react15.FormLabel, null, "Password"), /* @__PURE__ */ import_react16.default.createElement(import_react15.Input, {
    name: "password",
    required: true,
    placeholder: "password",
    type: "password"
  }), /* @__PURE__ */ import_react16.default.createElement(import_react15.Spacer, null), /* @__PURE__ */ import_react16.default.createElement(import_react15.HStack, {
    mt: "6",
    justifyContent: "center",
    alignItems: "center"
  }, /* @__PURE__ */ import_react16.default.createElement(import_react15.Button, {
    name: "_action",
    value: "loginuser",
    type: "submit",
    colorScheme: "green"
  }, "Login"), /* @__PURE__ */ import_react16.default.createElement(import_react15.Spacer, null))));
};
var CreateNewUser = () => {
  const ActionData = (0, import_remix7.useActionData)();
  return /* @__PURE__ */ import_react16.default.createElement(import_react15.Box, null, /* @__PURE__ */ import_react16.default.createElement(import_remix7.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react16.default.createElement(import_react15.FormLabel, null, "Profile Name"), /* @__PURE__ */ import_react16.default.createElement(import_react15.Input, {
    type: "text",
    required: true,
    name: "profileName",
    placeholder: "Jhon Doe"
  }), /* @__PURE__ */ import_react16.default.createElement(import_react15.FormLabel, null, "Email"), /* @__PURE__ */ import_react16.default.createElement(import_react15.Input, {
    type: "email",
    required: true,
    name: "email",
    placeholder: "jhon@gmail.com"
  }), /* @__PURE__ */ import_react16.default.createElement(import_react15.FormHelperText, null, "We'll never share your email."), /* @__PURE__ */ import_react16.default.createElement(import_react15.FormLabel, null, "Password"), /* @__PURE__ */ import_react16.default.createElement(import_react15.Input, {
    required: true,
    placeholder: "password",
    name: "password",
    type: "password"
  }), /* @__PURE__ */ import_react16.default.createElement(import_react15.FormLabel, null, "Centre Name"), /* @__PURE__ */ import_react16.default.createElement(import_react15.Input, {
    type: "text",
    required: true,
    name: "centerName",
    placeholder: "Center Name"
  }), /* @__PURE__ */ import_react16.default.createElement(import_react15.FormLabel, null, "Licence"), /* @__PURE__ */ import_react16.default.createElement(import_react15.Input, {
    type: "file",
    required: true
  }), /* @__PURE__ */ import_react16.default.createElement(import_react15.Spacer, null), /* @__PURE__ */ import_react16.default.createElement(import_react15.HStack, {
    mt: "6",
    justifyContent: "center",
    alignItems: "center"
  }, /* @__PURE__ */ import_react16.default.createElement(import_react15.Button, {
    name: "_action",
    value: "createuser",
    type: "submit",
    colorScheme: "green"
  }, "Create Profile"), /* @__PURE__ */ import_react16.default.createElement(import_react15.Spacer, null))));
};
var Login_default = Login;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "9a4a4d63", "entry": { "module": "/build/entry.client-KSLGF6HT.js", "imports": ["/build/_shared/chunk-F544EEZS.js", "/build/_shared/chunk-IE2MYUJQ.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-J4DYSO2E.js", "imports": ["/build/_shared/chunk-2JBPN6RK.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/Login": { "id": "routes/Login", "parentId": "root", "path": "Login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/Login-TUSADPNF.js", "imports": ["/build/_shared/chunk-7TN3E5NZ.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-F5URYQIP.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard/index": { "id": "routes/dashboard/index", "parentId": "routes/dashboard", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/dashboard/index-GYIIJLPL.js", "imports": ["/build/_shared/chunk-2JBPN6RK.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-DJBMJBYQ.js", "imports": ["/build/_shared/chunk-7TN3E5NZ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-9A4A4D63.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6QzpcXFVzZXJzXFxydWRyYVxcRGVza3RvcFxcb1xcbGV0dGVyLmpzXFxhcHBcXHJvb3QudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL05hdmJhci50c3giLCAicm91dGU6QzpcXFVzZXJzXFxydWRyYVxcRGVza3RvcFxcb1xcbGV0dGVyLmpzXFxhcHBcXHJvdXRlc1xcZGFzaGJvYXJkLnRzeCIsICIuLi9hcHAvc2Vzc2lvbnMudHMiLCAicm91dGU6QzpcXFVzZXJzXFxydWRyYVxcRGVza3RvcFxcb1xcbGV0dGVyLmpzXFxhcHBcXHJvdXRlc1xcZGFzaGJvYXJkXFxpbmRleC50c3giLCAiLi4vYXBwL2NvbnRleHQvcHJlc0NvbnRleHQudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccnVkcmFcXERlc2t0b3BcXG9cXGxldHRlci5qc1xcYXBwXFxyb3V0ZXNcXGluZGV4LnRzeCIsICIuLi9hcHAvdXRpbHMvZmlyZS5zZXJ2ZXIudHMiLCAicm91dGU6QzpcXFVzZXJzXFxydWRyYVxcRGVza3RvcFxcb1xcbGV0dGVyLmpzXFxhcHBcXHJvdXRlc1xcTG9naW4udHN4IiwgIi4uL2FwcC9sb2dpYy9zZXNzaW9uQXV0cmhMb2dpYy50cyIsICIuLi9hcHAvdXRpbHMvYXV0aC5zZXJ2ZXIudHMiLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gXCJjb21wcmVzc2lvblwiO1xyXG5pbXBvcnQgbW9yZ2FuIGZyb20gXCJtb3JnYW5cIjtcclxuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9leHByZXNzXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBzZXJ2ZXJCdWlsZCBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7XHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcblxyXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xyXG5cclxuLy8gaHR0cDovL2V4cHJlc3Nqcy5jb20vZW4vYWR2YW5jZWQvYmVzdC1wcmFjdGljZS1zZWN1cml0eS5odG1sI2F0LWEtbWluaW11bS1kaXNhYmxlLXgtcG93ZXJlZC1ieS1oZWFkZXJcclxuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XHJcblxyXG4vLyBSZW1peCBmaW5nZXJwcmludHMgaXRzIGFzc2V0cyBzbyB3ZSBjYW4gY2FjaGUgZm9yZXZlci5cclxuYXBwLnVzZShcclxuICBcIi9idWlsZFwiLFxyXG4gIGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgaW1tdXRhYmxlOiB0cnVlLCBtYXhBZ2U6IFwiMXlcIiB9KVxyXG4pO1xyXG5cclxuLy8gRXZlcnl0aGluZyBlbHNlIChsaWtlIGZhdmljb24uaWNvKSBpcyBjYWNoZWQgZm9yIGFuIGhvdXIuIFlvdSBtYXkgd2FudCB0byBiZVxyXG4vLyBtb3JlIGFnZ3Jlc3NpdmUgd2l0aCB0aGlzIGNhY2hpbmcuXHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBtYXhBZ2U6IFwiMWhcIiB9KSk7XHJcblxyXG5hcHAudXNlKG1vcmdhbihcInRpbnlcIikpO1xyXG5cclxuYXBwLmFsbChcclxuICBcIipcIixcclxuICBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XHJcbiAgICBidWlsZDogc2VydmVyQnVpbGQsXHJcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVlxyXG4gIH0pXHJcbik7XHJcblxyXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xyXG5cclxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYEV4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcclxufSk7XHJcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxydWRyYVxcXFxEZXNrdG9wXFxcXG9cXFxcbGV0dGVyLmpzXFxcXGFwcFxcXFxlbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJ1ZHJhXFxcXERlc2t0b3BcXFxcb1xcXFxsZXR0ZXIuanNcXFxcYXBwXFxcXHJvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJ1ZHJhXFxcXERlc2t0b3BcXFxcb1xcXFxsZXR0ZXIuanNcXFxcYXBwXFxcXHJvdXRlc1xcXFxkYXNoYm9hcmQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJ1ZHJhXFxcXERlc2t0b3BcXFxcb1xcXFxsZXR0ZXIuanNcXFxcYXBwXFxcXHJvdXRlc1xcXFxkYXNoYm9hcmRcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJ1ZHJhXFxcXERlc2t0b3BcXFxcb1xcXFxsZXR0ZXIuanNcXFxcYXBwXFxcXHJvdXRlc1xcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccnVkcmFcXFxcRGVza3RvcFxcXFxvXFxcXGxldHRlci5qc1xcXFxhcHBcXFxccm91dGVzXFxcXExvZ2luLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvZGFzaGJvYXJkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kYXNoYm9hcmRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiZGFzaGJvYXJkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9kYXNoYm9hcmQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Rhc2hib2FyZC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2Rhc2hib2FyZFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL0xvZ2luXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9Mb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJMb2dpblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XHJcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxyXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXHJcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXHJcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxyXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XHJcbikge1xyXG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxyXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cclxuICApO1xyXG5cclxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xyXG5cclxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcclxuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxyXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXHJcbiAgfSk7XHJcbn1cclxuIiwgImltcG9ydCB7XHJcbiAgTGlua3MsXHJcbiAgTGl2ZVJlbG9hZCxcclxuICBNZXRhLFxyXG4gIE91dGxldCxcclxuICBTY3JpcHRzLFxyXG4gICAgXHJcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXHJcbn0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyLCBDb2xvck1vZGVTY3JpcHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL2NvbXBvbmVudHMvTmF2YmFyXCI7XHJcbi8vIDEuIGltcG9ydCBgZXh0ZW5kVGhlbWVgIGZ1bmN0aW9uXHJcbmltcG9ydCB7IGV4dGVuZFRoZW1lLCB0eXBlIFRoZW1lQ29uZmlnIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuXHJcbi8vIDIuIEFkZCB5b3VyIGNvbG9yIG1vZGUgY29uZmlnXHJcbmNvbnN0IGNvbmZpZzogVGhlbWVDb25maWcgPSB7XHJcbiAgaW5pdGlhbENvbG9yTW9kZTogJ2RhcmsnLFxyXG4gIHVzZVN5c3RlbUNvbG9yTW9kZTogZmFsc2UsXHJcbn1cclxuXHJcbi8vIDMuIGV4dGVuZCB0aGUgdGhlbWVcclxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7IGNvbmZpZyB9KVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdGl0bGU6IFwiTmV3IFJlbWl4IEFwcFwiIH07XHJcbn07XHJcblxyXG5jb25zdCBEb2N1bWVudCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJvZHk+XHJcbiAgICAgICA8Q29sb3JNb2RlU2NyaXB0IGluaXRpYWxDb2xvck1vZGU9e1wiZGFya1wifSAvPlxyXG4gICAgICA8Q2hha3JhUHJvdmlkZXI+XHJcbiAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cclxuICAgICAgICA8U2NyaXB0cyAvPlxyXG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICA8L0NoYWtyYVByb3ZpZGVyPlxyXG4gICAgPC9ib2R5PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxyXG4gICAgICA8aGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8TWV0YSAvPlxyXG4gICAgICAgIDxMaW5rcyAvPlxyXG4gICAgICA8L2hlYWQ+XHJcbiAgICAgIDxEb2N1bWVudCAvPlxyXG4gICAgPC9odG1sPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IEJveCwgTGlzdEl0ZW0sIFVub3JkZXJlZExpc3QgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcclxuXHJcbmZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBiYWNrZ3JvdW5kPXtcImdyZWVuLjUwMFwifT5cclxuICAgICAgICA8VW5vcmRlcmVkTGlzdCBkaXNwbGF5PXtcImZsZXhcIn0+XHJcbiAgICAgICAgICA8TGlzdEl0ZW0gcD1cIjNcIiBjb2xvcj17XCJ3aGl0ZVwifSAgbGlzdFN0eWxlVHlwZT17XCJub25lXCJ9ID48TGluayB0bz1cIi9cIj5MYWJzIFx1RDgzRFx1REQyQzwvTGluaz48L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPExpc3RJdGVtIHA9XCIzXCIgY29sb3I9e1wid2hpdGVcIn0gbGlzdFN0eWxlVHlwZT17XCJub25lXCJ9ID48TGluayB0bz1cIi9kYXNoYm9hcmRcIj5EYXNoYm9hcmQ8L0xpbms+PC9MaXN0SXRlbT5cclxuICAgICAgICAgIDxMaXN0SXRlbSBwPVwiM1wiIGNvbG9yPXtcIndoaXRlXCJ9IGxpc3RTdHlsZVR5cGU9e1wibm9uZVwifSA+PExpbmsgdG89XCIvbG9naW5cIj5Mb2dpbjwvTGluaz48L0xpc3RJdGVtPlxyXG4gICAgICAgIDwvVW5vcmRlcmVkTGlzdD5cclxuICAgIDwvQm94PiAgXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiLCAiaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIENvbnRhaW5lcixcclxuICBEaXZpZGVyLFxyXG4gIEhlYWRpbmcsXHJcbiAgSFN0YWNrLFxyXG4gIExpc3RJdGVtLFxyXG4gIFRleHQsXHJcbiAgVW5vcmRlcmVkTGlzdCxcclxuICBWU3RhY2ssXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBqc29uLCBMaW5rLCBMaW5rcywgTG9hZGVyRnVuY3Rpb24sIE91dGxldCwgcmVkaXJlY3QsIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJ+L3Nlc3Npb25zXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlcjpMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7cmVxdWVzdH0pID0+IHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihcclxuICAgIHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIilcclxuICApO1xyXG4gIGlmIChzZXNzaW9uLmhhcyhcInVzZXJTZXNzaW9uXCIpKSB7XHJcbiAgICAvLyBSZWRpcmVjdCB0byB0aGUgaG9tZSBwYWdlIGlmIHRoZXkgYXJlIGFscmVhZHkgc2lnbmVkIGluLlxyXG4gICAgXHJcbiAgICByZXR1cm4ge3Nob3dQYWdlOnRydWV9XHJcbiAgfVxyXG4gIHJldHVybiB7c2hvd1BhZ2U6ZmFsc2V9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIERhc2hib2FyZCgpIHtcclxuXHJcbiAgY29uc3Qge3Nob3dQYWdlfSA9IHVzZUxvYWRlckRhdGEoKSBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICB7Lyoge1xyXG4gICAgICBKU09OLnN0cmluZ2lmeShzaG93UGFnZSlcclxuICAgIH0gKi99XHJcbiAgICB7XHJcbiAgICAgIHRydWUgPyAgPFByaXZhdGVQYWdlIC8+IDogPE5vdFNpZ25JblBhZ2UgLz5cclxuICAgIH1cclxuXHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBOb3RTaWduSW5QYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICAgIDxIZWFkaW5nPlVzZXIgTm90IExvZ2VkIGluPC9IZWFkaW5nPlxyXG4gICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCI+TG9naW48L0xpbms+XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBQcml2YXRlUGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4oXHJcbiAgICA8Q29udGFpbmVyIG1heFc9XCJvbnRhaW5lci5sZ1wiPlxyXG4gICAgPEhlYWRpbmcgcHk9XCIzXCI+RG9jIFx1RDgzRVx1REU3QTwvSGVhZGluZz5cclxuICAgIFxyXG4gICAgICBcclxuICAgICAgey8qIDxEaXZpZGVyIHNpemU9e1wiM1wifSBjb2xvclNjaGVtZT1cImdyZWVuXCIgb3JpZW50YXRpb249J3ZlcnRpY2FsJyAvPiAqL31cclxuICAgICAgPE91dGxldCAvPlxyXG4gICAgXHJcbiAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xyXG4iLCAiaW1wb3J0IHtjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZX0gZnJvbSBcInJlbWl4XCJcclxuXHJcblxyXG5leHBvcnQgY29uc3Qge2dldFNlc3Npb24sY29tbWl0U2Vzc2lvbixkZXN0cm95U2Vzc2lvbn0gID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xyXG4gICAgY29va2llOntcclxuICAgICAgICBuYW1lOlwiX19zZXNzaW9uXCJcclxuICAgIH1cclxufSlcclxuXHJcblxyXG4iLCAiaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIERpdmlkZXIsXHJcbiAgSGVhZGluZyxcclxuICBIZWFkaW5nUHJvcHMsXHJcbiAgSFN0YWNrLFxyXG4gIElucHV0LFxyXG4gIExpc3RJdGVtLFxyXG4gIE9taXRDb21tb25Qcm9wcyxcclxuICBPcmRlcmVkTGlzdCxcclxuICBTcGFjZXIsXHJcbiAgVGV4dCxcclxuICBVbm9yZGVyZWRMaXN0LFxyXG4gIFZTdGFjayxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFNsYXRlRWRpdG9yIGZyb20gXCJ+L2NvbXBvbmVudHMvU2xhdGVFZGl0b3JcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgTWVudSxcclxuICBNZW51QnV0dG9uLFxyXG4gIE1lbnVMaXN0LFxyXG4gIE1lbnVJdGVtLFxyXG4gIE1lbnVJdGVtT3B0aW9uLFxyXG4gIE1lbnVHcm91cCxcclxuICBNZW51T3B0aW9uR3JvdXAsXHJcbiAgTWVudURpdmlkZXIsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBOdW1iZXJJbnB1dCxcclxuICBOdW1iZXJJbnB1dEZpZWxkLFxyXG4gIE51bWJlcklucHV0U3RlcHBlcixcclxuICBOdW1iZXJJbmNyZW1lbnRTdGVwcGVyLFxyXG4gIE51bWJlckRlY3JlbWVudFN0ZXBwZXIsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgQWlPdXRsaW5lRG93biwgQWlGaWxsV2FybmluZyB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5cclxuaW1wb3J0IHsgUGluSW5wdXQsIFBpbklucHV0RmllbGQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQcmVzQ29udGV4dCwgUHJlc0NvbnRleHRQcm92aWRlciB9IGZyb20gXCJ+L2NvbnRleHQvcHJlc0NvbnRleHRcIjtcclxuXHJcbmZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIC8vIGNvbnN0IFtkLHNldERdID0gdXNlQ29udGV4dChQcmVzQ29udGV4dClcclxuXHJcbiAgLy8gY29uc3QgYWRkTWFpbkRhdGEgPSAoZTphbnkpID0+IHtcclxuICAvLyBjb25zdCBvID0ge1xyXG4gIC8vICAgbmFtZURydWc6IFwiXCIsXHJcbiAgLy8gICBkb3NhZ2VGb3JtOiBcIlwiLFxyXG4gIC8vICAgbWc6IFwiXCIsXHJcbiAgLy8gICBkdXJhdGlvbjogXCJcIixcclxuICAvLyB9XHJcblxyXG4gIC8vIGxldCBsYXN0ID0gZFxyXG5cclxuICAvLyBsYXN0LnB1c2gobylcclxuXHJcbiAgLy8gc2V0RChsYXN0KVxyXG5cclxuICAvLyB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8UHJlc0NvbnRleHRQcm92aWRlcj5cclxuICAgICAgICA8QnV0dG9uIG15PVwiM1wiIG1iPVwiM1wiPlxyXG4gICAgICAgICAgQ3JlYXRlIE5ld3tcIiBcIn1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgIDxWU3RhY2sganVzdGlmeUNvbnRlbnQ9e1wiZmxleC1zdGFydFwifSBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxyXG4gICAgICAgICAgPEhTdGFjayBqdXN0aWZ5Q29udGVudD17XCJmbGV4LXN0YXJ0XCJ9IGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgIDxWaWV3ZXIgLz5cclxuXHJcbiAgICAgICAgICAgIDxPbGRQcmVzY3JpcHRpb25zIC8+XHJcbiAgICAgICAgICA8L0hTdGFjaz5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgd2luZG93LnByaW50KCk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcmludFwiKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgUHJpbnQgXHVEODNEXHVEREE4XHVGRTBGXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uPlNhdmUgUHJlc2NyaXB0aW9uIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvVlN0YWNrPlxyXG4gICAgICA8L1ByZXNDb250ZXh0UHJvdmlkZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBPbGRQcmVzY3JpcHRpb25zID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VlN0YWNrIHBsPVwiOVwiIHB0PVwiM1wiIGFsaWduSXRlbXM9e1wiZmxleC1zdGFydFwifT5cclxuICAgICAgPEhlYWRpbmcgZm9udFNpemU9XCIyeGxcIj5PbGQgUHJlc2NyaXB0aW9uczwvSGVhZGluZz5cclxuICAgICAgPFVub3JkZXJlZExpc3Q+XHJcbiAgICAgICAgPExpc3RJdGVtIGxpc3RTdHlsZVR5cGU9XCJub25lXCI+ZGF0ZSAxNy0xNS04NzwvTGlzdEl0ZW0+XHJcbiAgICAgIDwvVW5vcmRlcmVkTGlzdD5cclxuICAgIDwvVlN0YWNrPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBWaWV3ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2QsIHNldERdID0gdXNlQ29udGV4dChQcmVzQ29udGV4dCk7XHJcbiAgY29uc3QgYWRkUm93ID0gKGU6IGFueSkgPT4ge1xyXG5cclxuICAgIGxldCBvbGREYXRhID0gW11cclxuXHJcbiAgICBkLm1hcCgob2xkRDphbnkpID0+IHtcclxuICAgICAgb2xkRGF0YS5wdXNoKG9sZEQpXHJcbiAgICB9KVxyXG5cclxuICAgIG9sZERhdGEucHVzaCh7XHJcbiAgICAgIG5hbWVEcnVnOiBcIlwiLFxyXG4gICAgICBkb3NhZ2VGb3JtOiBcIlwiLFxyXG4gICAgICBtZzogXCJcIixcclxuICAgICAgZHVyYXRpb246IFwiXCIsXHJcbiAgICAgIFxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgc2V0RChvbGREYXRhKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGQpO1xyXG4gICAgXHJcblxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICA8Qm94PlxyXG4gICAgICAgIDxQcmVzQm94IC8+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgYWRkUm93KGUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRkICtcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUHJlc0JveCA9ICgpID0+IHtcclxuICBjb25zdCBbZCwgc2V0RF0gPSB1c2VDb250ZXh0KFByZXNDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIHsvKiA8UHJlc1N0YWNrIC8+XHJcbiAgICAgIDxQcmVzU3RhY2sgLz5cclxuICAgICAgPFByZXNTdGFjayAvPiAqL31cclxuXHJcbiAgICAgIHtkLm1hcCgocjogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxQcmVzU3RhY2sgZGF0YT17cn0gLz47XHJcbiAgICAgIH0pfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFByZXNTdGFjayA9ICh7IGRhdGEgfTogYW55KSA9PiB7XHJcbiAgY29uc3QgW3ByZUNvbiwgc2V0UHJlQ29uXSA9IHVzZUNvbnRleHQoUHJlc0NvbnRleHQpO1xyXG5cclxuICBjb25zdCBjaGFuZ2VVcGRhdGUgPSAoZGF0YTogYW55KSA9PiB7fTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggcHk9XCIzXCIgdz1cImZ1bGxcIiBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCI+XHJcbiAgICAgIHsvKiA8VGV4dCBjb2xvcj1cInJlZCAgXCI+PEFpRmlsbFdhcm5pbmcgLz48L1RleHQ+ICovfVxyXG4gICAgICA8VlN0YWNrPlxyXG4gICAgICAgIDxUZXh0PkRydWc8L1RleHQ+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBteD1cIjFcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJuYW1lIG9mIERydWdcIlxyXG4gICAgICAgICAgdmFsdWU9e2RhdGEubmFtZURydWd9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGNoYW5nZVVwZGF0ZShlKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L1ZTdGFjaz5cclxuICAgICAgPFNwYWNlciAvPlxyXG4gICAgICA8VlN0YWNrIG14PVwiMlwiPlxyXG4gICAgICAgIDxUZXh0PkRvc2FnZSBGb3JtPC9UZXh0PlxyXG4gICAgICAgIDxNZW51PlxyXG4gICAgICAgICAgPE1lbnVCdXR0b25cclxuICAgICAgICAgICAgdmFsdWU9e2RhdGEuZG9zYWdlRm9ybX1cclxuICAgICAgICAgICAgYXM9e0J1dHRvbn1cclxuICAgICAgICAgICAgcmlnaHRJY29uPXs8QWlPdXRsaW5lRG93biAvPn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2RhdGEuZG9zYWdlRm9ybX1cclxuICAgICAgICAgIDwvTWVudUJ1dHRvbj5cclxuICAgICAgICAgIDxNZW51TGlzdD5cclxuICAgICAgICAgICAgPE1lbnVJdGVtPk9pbnRtZW50czwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbT5zeXJ1cDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbT5UYWJsZXQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0+UG93ZGVyPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtPlBpbGxzPC9NZW51SXRlbT5cclxuICAgICAgICAgIDwvTWVudUxpc3Q+XHJcbiAgICAgICAgPC9NZW51PlxyXG4gICAgICA8L1ZTdGFjaz5cclxuICAgICAgPFNwYWNlciAvPlxyXG4gICAgICA8VlN0YWNrIG14PVwiMlwiPlxyXG4gICAgICAgIDxUZXh0PkRvc2UgbWc8L1RleHQ+XHJcbiAgICAgICAgPE51bWJlcklucHV0XHJcbiAgICAgICAgICBteD1cIjNcIlxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXsxNX1cclxuICAgICAgICAgIHZhbHVlPXtkYXRhLm1nfVxyXG4gICAgICAgICAgcHJlY2lzaW9uPXsyfVxyXG4gICAgICAgICAgc3RlcD17MC4yfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxOdW1iZXJJbnB1dEZpZWxkIC8+XHJcbiAgICAgICAgICA8TnVtYmVySW5wdXRTdGVwcGVyPlxyXG4gICAgICAgICAgICA8TnVtYmVySW5jcmVtZW50U3RlcHBlciAvPlxyXG4gICAgICAgICAgICA8TnVtYmVyRGVjcmVtZW50U3RlcHBlciAvPlxyXG4gICAgICAgICAgPC9OdW1iZXJJbnB1dFN0ZXBwZXI+XHJcbiAgICAgICAgPC9OdW1iZXJJbnB1dD5cclxuICAgICAgPC9WU3RhY2s+XHJcblxyXG4gICAgICB7LyogUGluIElucHV0ICovfVxyXG4gICAgICA8VlN0YWNrIG14PVwiMlwiPlxyXG4gICAgICAgIDxUZXh0PkR1cmF0aW9uPC9UZXh0PlxyXG4gICAgICAgIDxIU3RhY2s+XHJcbiAgICAgICAgICA8UGluSW5wdXQgZGVmYXVsdFZhbHVlPXtkYXRhLmR1cmF0aW9ufT5cclxuICAgICAgICAgICAgPFBpbklucHV0RmllbGQgLz5cclxuICAgICAgICAgICAgPFBpbklucHV0RmllbGQgLz5cclxuICAgICAgICAgICAgPFBpbklucHV0RmllbGQgLz5cclxuICAgICAgICAgIDwvUGluSW5wdXQ+XHJcbiAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgIDwvVlN0YWNrPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQcmVzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8YW55PihudWxsKTtcclxuLy8gaW1wb3J0IHV1aWQgZnJvbSBcInV1aWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQcmVzQ29udGV4dFByb3ZpZGVyID0gKHByb3BzOiBhbnkpID0+IHtcclxuICBcclxuXHJcbiAgY29uc3QgbWFpbkRhdGEgPSBbe1xyXG4gICAgICBuYW1lRHJ1ZzpcInBhcmFjZXRhbW9sXCIsXHJcbiAgICAgIGRvc2FnZUZvcm06XCJzeXJ1cFwiLFxyXG4gICAgICBtZzpcIjE2XCIsXHJcbiAgICAgIGR1cmF0aW9uIDpcIjEwMVwiLFxyXG4gIH0se1xyXG4gICAgICBuYW1lRHJ1ZzpcIndhcmZhcmluXCIsXHJcbiAgICAgIGRvc2FnZUZvcm06XCJsb3Rpb25cIixcclxuICAgICAgbWc6XCIxNlwiLFxyXG4gICAgICBkdXJhdGlvbiA6XCIxMTFcIlxyXG4gIH1dXHJcblxyXG4vLyAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG1haW5EYXRhKVxyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtcclxuICAgIHtcclxuICAgICAgbmFtZURydWc6IFwiXCIsXHJcbiAgICAgIGRvc2FnZUZvcm06IFwiXCIsXHJcbiAgICAgIG1nOiBcIlwiLFxyXG4gICAgICBkdXJhdGlvbjogXCJcIixcclxuICAgICAgXHJcbiAgICB9LFxyXG4gIF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByZXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbZGF0YSwgc2V0RGF0YV19PlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L1ByZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiIsICJpbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBmaXJlc3RvcmUgfSBmcm9tIFwifi91dGlscy9maXJlLnNlcnZlclwiXHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBjb2xsZWN0aW9uVXNlciA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKFwidXNlcnNcIik7XHJcblxyXG4gIGxldCByZXMgPSBhd2FpdCBjb2xsZWN0aW9uVXNlclxyXG4gICAgLmRvYygpXHJcbiAgICAuc2V0KHsgZmlyc3Q6IFwiSmhzb25cIiwgbGFzdDogXCJEb2VcIiwgZW1haWw6IFwicnVkcmFAZ21pYWwuY29tXCIgfSk7XHJcblxyXG5cclxuICBcclxuXHJcbiAgcmV0dXJuIHttc2c6XCJzYXZlZCBkYXRhXCIscmVzfVxyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIEluZGV4KCkge1xyXG5cclxuICBjb25zdCBwb3N0ID0gdXNlTG9hZGVyRGF0YSgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGluZz5Ib21lIFBhZ2U8L0hlYWRpbmc+XHJcbiAgICAgIHtcclxuICAgICAgICBKU09OLnN0cmluZ2lmeShwb3N0KVxyXG4gICAgICB9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwgImltcG9ydCB7IGluaXRpYWxpemVBcHAsIGFwcGxpY2F0aW9uRGVmYXVsdCwgY2VydCB9IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9hcHBcIjtcclxubGV0IGFkbWluID0gcmVxdWlyZShcImZpcmViYXNlLWFkbWluXCIpXHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9hdXRoXCI7XHJcblxyXG5cclxuY29uc3QgYTphbnkgPSB7XHJcbiAgXCJ0eXBlXCI6IFwic2VydmljZV9hY2NvdW50XCIsXHJcbiAgXCJwcm9qZWN0X2lkXCI6IFwicnVkaHJham9zaGljb21cIixcclxuICBcInByaXZhdGVfa2V5X2lkXCI6IFwiOWZlZjM2YjI3OWE0MTk0OGU2NjQzNDM0ZGY5NzMyMDgxYTViZDI5NVwiLFxyXG4gIFwicHJpdmF0ZV9rZXlcIjogXCItLS0tLUJFR0lOIFBSSVZBVEUgS0VZLS0tLS1cXG5NSUlFdlFJQkFEQU5CZ2txaGtpRzl3MEJBUUVGQUFTQ0JLY3dnZ1NqQWdFQUFvSUJBUURCYVBiU0lJM1RpdnMrXFxuRDlpRWlPZW03ZVFjM25EcnVCVUQwTE0xUVEyYm1NQzNVUVlnV3lNaUgvdW5waE5zSTI3Y1Q4TXBVdjE3bnUzUlxcbjRKYnQyczUzWmVFRHNERXJLWlVIbkx6eGIrZTh6YjdsQVlPc016S2F0cVNOUHVPSGh3QjhhU1NKQXF3RkMxdXBcXG5XbituVTc3T1Z2bEhiYmhDUW8rd0dzeks5U2lzME1jak1ZWHF3dnR5MjVSNmwzd3Jrc1I5ZGVQbWZLSkpKVjA5XFxuOWhON25hc3Z1MEhtZzNnOVNVeUh3VlZhRFcwZy8zVVZBOXN5MkJkb1NkNWk4c2UxTCt5TlFuYytZaFZyWVlMU1xcbnBUZExLdlpOaCtnTHZGK0R1cXljaXkyS3FiRU12UzZTUlQyQXJtWWVHK3FRaGwrV1ZSd0xTQnNRQUY0d1FBZ0lcXG5udTczWjhKdEFnTUJBQUVDZ2dFQUdDSnkrbEdab1JZc3Q5ZmVXdHVDbksvKzBTTm96K0ZPcmdVeTk2aEFmSFFaXFxuU0ViU0R1T1FoTWVjN1pTcHc4ckFJTG5MVHJMT2NzaW9RSkpZQXlKVXRVMS9RS2lSMmlMOE45RDFPdU9OOVY5dlxcblBNQnRuK1Zib1RhOVhlckZGYnBnOHlWanE3MHJuZzJHeUtGRVlLcndtbXI3L0UvU3VHSDU4QzNIOUdPWFNja2tcXG5IdUs2alNvWWxhQ3V6VHp6clRYcFpxQTBDTHRLcTcrMEFZek5Xc3VWajNOb1JQTUt1U3RYM2Y1TmpWamxtYWtmXFxuT3hkTzRVeTlTZGszVUsxYzhNMjNXMnJKNlB4aUdVdE9SREFhMjN3bXJ2WC92MUg2ZnBJZ0k1bkNnVW5jTDZWNVxcbjc0cjNtWWIwZUZKTU94Wlk5ZUJYYTIzL3hnaEdTWU11alJreFF1bk1BUUtCZ1FEbWdoUHh5SDd6OGhhUWV2SEpcXG4zOEZ0Y1RSWDl1T0NyZWJ5R0hXdUlqTVUvcUV6N0hjQVRRUFNSUm8vTkpHNW5yUGpFUzY3M2xnMzBMbzNNNkVVXFxuclp6aDFEV0xqOGxSRUVncE1DajJxRUswWjBMQ29QcU1vekNjd1JabUxiNVpMa1BFdWJRZCsyN2JJY0crQjl0Ylxcbnh0eVdYaGlxSkVXMFFNNmxoYk5XNXc2WWdRS0JnUURXekpuTy9ONTlGbXhaeGM1Y3hSbXh6Nm8wY2RkL3JQTXNcXG5MKzUrUjR0Qm85U0J5ZHpsdnA4NU80S1owZU9KVzJURjZOVC9nYmF5MzByLzF2V2R6UFFqNndHY0haYjY1WXF1XFxudThSWDBGUVB0MnN3WlFHQU4vdGJ2dGtTWlZ3ZGFOaW0yeHNDdEsvY0phWVpWUy9kalBFQUJJcFBES2l2ZzVaeVxcbk40eXJxQk1UN1FLQmdRQ0pmQkpMUnV1NXNxNFV0TS9jT1pKVUpZNHozVFRycjYrc3ZEd01oYWQwSVQrakNhb2NcXG55dEs1cXEreC9UZmh2Ni9KZ21rZWNzcXBWOXlKcWtpc1hiVFIyVkdxa1ROaEgxWDdBeGVicnRaQ1pjaWk3NE1oXFxuT1FCNHJvNGVtYkFMM3hWYWsrekRhVUZBZ0V6ZmZDNHcrbFo5ZFZnK3V1MjhTbDgyeUowait5SndnUUtCZ0Z2Ylxcbkh5TlBLKzRlT3JPaFRZQ0tvVlJTMUJ5ZFdtUzFGMENjTnNjMTNTMXkzQnVzc1pSbUVqMHRYOHBiNFl3SjAyeDNcXG5CeTlFejFacSt1MnhoVk80SStlQVJpMzIwV3YxNFhxYnZYazRFOXFzdTEvMHNkR2RIeGE2NUtWalJ5TWtoUkhGXFxudlNWSkU3TjNQakt6SlViL1VNaUxLSUpwalhHUk9qTVo0a1ErR2ZwNUFvR0FSOHh0KytNb3pWT2I5dnRGMXVUTFxcbjIzRmxxSEJ1U3FuUk1xc2dpV3RSSUErOU0rMDN4UkRQSjh6TzBtSW1tUCt0cHlTNmpER2dHWkUyTWNxeC9wRS9cXG5JQ2FNVlBHanNYWWRicDI3MGMwazJmSDJaL3RWWEFnckhoekdnTUJnemljY1dINjdSbjhtZ2p4M1QyYXFsWGR0XFxuZ05NQU9SaUNJTytMUytjZXhZUllGTGs9XFxuLS0tLS1FTkQgUFJJVkFURSBLRVktLS0tLVxcblwiLFxyXG4gIFwiY2xpZW50X2VtYWlsXCI6IFwiZmlyZWJhc2UtYWRtaW5zZGsteHVkMThAcnVkaHJham9zaGljb20uaWFtLmdzZXJ2aWNlYWNjb3VudC5jb21cIixcclxuICBcImNsaWVudF9pZFwiOiBcIjExMTA5NzMyMzc0NTc0MDUxNTk4OVwiLFxyXG4gIFwiYXV0aF91cmlcIjogXCJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvYXV0aFwiLFxyXG4gIFwidG9rZW5fdXJpXCI6IFwiaHR0cHM6Ly9vYXV0aDIuZ29vZ2xlYXBpcy5jb20vdG9rZW5cIixcclxuICBcImF1dGhfcHJvdmlkZXJfeDUwOV9jZXJ0X3VybFwiOiBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0c1wiLFxyXG4gIFwiY2xpZW50X3g1MDlfY2VydF91cmxcIjogXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9yb2JvdC92MS9tZXRhZGF0YS94NTA5L2ZpcmViYXNlLWFkbWluc2RrLXh1ZDE4JTQwcnVkaHJham9zaGljb20uaWFtLmdzZXJ2aWNlYWNjb3VudC5jb21cIlxyXG59XHJcbmluaXRpYWxpemVBcHAoe2NyZWRlbnRpYWw6Y2VydChhKX0pO1xyXG5leHBvcnQgY29uc3QgZmlyZXN0b3JlID0gZ2V0RmlyZXN0b3JlKCk7XHJcbmV4cG9ydCBjb25zdCBmaXJlQXV0aCA9IGdldEF1dGgoKTtcclxuIiwgImltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBDb250YWluZXIsXHJcbiAgRm9ybUhlbHBlclRleHQsXHJcbiAgRm9ybUxhYmVsLFxyXG4gIEhlYWRpbmcsXHJcbiAgSFN0YWNrLFxyXG4gIElucHV0LFxyXG4gIFNwYWNlcixcclxuICBUYWIsXHJcbiAgVGFiTGlzdCxcclxuICBUYWJQYW5lbCxcclxuICBUYWJQYW5lbHMsXHJcbiAgVGFicyxcclxuICB1c2VUb2FzdCxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBqc29uIH0gZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9hdXRoXCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQWN0aW9uRnVuY3Rpb24sXHJcbiAgRm9ybSxcclxuICByZWRpcmVjdCxcclxuICB1c2VBY3Rpb25EYXRhLFxyXG4gIHVzZVN1Ym1pdCxcclxuICB1c2VUcmFuc2l0aW9uLFxyXG59IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVBbmRTYXZlU2Vzc2lvbiB9IGZyb20gXCJ+L2xvZ2ljL3Nlc3Npb25BdXRyaExvZ2ljXCI7XHJcbmltcG9ydCB7IGNvbW1pdFNlc3Npb24gfSBmcm9tIFwifi9zZXNzaW9uc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVDdXN0b3JtVG9rZW4sIGNyZWF0ZVVzZXIgfSBmcm9tIFwifi91dGlscy9hdXRoLnNlcnZlclwiO1xyXG5pbXBvcnQgeyBmaXJlQXV0aCwgZmlyZXN0b3JlIH0gZnJvbSBcIn4vdXRpbHMvZmlyZS5zZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcclxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGxldCBmb3JtQWN0aW9uID0gZm9ybS5nZXQoXCJfYWN0aW9uXCIpO1xyXG4gIGxldCBlbWFpbCA9IGZvcm0uZ2V0KFwiZW1haWxcIik7XHJcbiAgbGV0IHBhc3N3b3JkID0gZm9ybS5nZXQoXCJwYXNzd29yZFwiKTtcclxuICBsZXQgcHJvZmlsZU5hbWUgPSBmb3JtLmdldChcInByb2ZpbGVOYW1lXCIpO1xyXG5cclxuICBjb25zdCBjb2wgPSBmaXJlc3RvcmUuY29sbGVjdGlvbihcInVzZXJzXCIpO1xyXG4gIGxldCByZXMgOiBhbnk7XHJcbiAgaWYgKGZvcm1BY3Rpb24gPT09IFwiY3JlYXRldXNlclwiKSB7XHJcbiAgICBpZiAoZW1haWwgJiYgcGFzc3dvcmQgJiYgcHJvZmlsZU5hbWUpIHtcclxuICAgICAgYXdhaXQgY3JlYXRlVXNlcih7XHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IHByb2ZpbGVOYW1lLFxyXG4gICAgICB9KS50aGVuKGFzeW5jICh1c2VyUmVjb3JkKSA9PiB7XHJcbiAgICAgICAgcmVzID0geyBzdGF0dXM6IHRydWUsIGlkOiB1c2VyUmVjb3JkLnVpZCB9O1xyXG4gICAgICAgIGF3YWl0IGNyZWF0ZUFuZFNhdmVTZXNzaW9uKHVzZXJSZWNvcmQudWlkLHJlcXVlc3QpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICByZXR1cm4gcmVzLnN0YXR1cyA/IHJlZGlyZWN0KFwiL2Rhc2hib2FyZFwiKSA6IHJlc1xyXG59O1xyXG5cclxuZnVuY3Rpb24gTG9naW4oKSB7XHJcbiAgY29uc3QgQWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGEoKTtcclxuICBjb25zdCB0b2FzdCA9IHVzZVRvYXN0KCk7XHJcblxyXG51c2VFZmZlY3QoKCkgPT4ge1xyXG4gIGlmKEFjdGlvbkRhdGEgIT0gbnVsbCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIk5PVCBOVUxMIDAxXCIpO1xyXG4gICAgXHJcbiAgICAgaWYoQWN0aW9uRGF0YS5zdGF0dXMgKXtcclxuICAgICAgIGNvbnNvbGUubG9nKFwiTk9UIE5VTEwgMDFcIik7XHJcbiAgICAgICByZWRpcmVjdCAoXCIvZGFzaGJvYXJkXCIpXHJcbiAgICAgfVxyXG4gIH1cclxuIFxyXG59LFtBY3Rpb25EYXRhXSlcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBtYXhIPVwiY29udGFpbmVyLmxnXCI+XHJcbiAgICAgIHtKU09OLnN0cmluZ2lmeShBY3Rpb25EYXRhKX1cclxuXHJcbiAgICAgIDxCb3hcclxuICAgICAgICBkaXNwbGF5PXtcImZsZXhcIn1cclxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgbXQ9XCIzMFwiXHJcbiAgICAgICAgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn1cclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3R5bGU9e3sgd2lkdGg6IFwiNjB2d1wiIH19PlxyXG4gICAgICAgICAgPFRhYnM+XHJcbiAgICAgICAgICAgIDxUYWJMaXN0PlxyXG4gICAgICAgICAgICAgIDxUYWI+TG9naW48L1RhYj5cclxuICAgICAgICAgICAgICA8VGFiPkNyZWF0ZSBOZXcgVXNlcjwvVGFiPlxyXG4gICAgICAgICAgICA8L1RhYkxpc3Q+XHJcbiAgICAgICAgICAgIDxUYWJQYW5lbHM+XHJcbiAgICAgICAgICAgICAgPFRhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPExvZ2luVXNlciAvPlxyXG4gICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgPFRhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPENyZWF0ZU5ld1VzZXIgLz5cclxuICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICA8L1RhYlBhbmVscz5cclxuICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBMb2dpblVzZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgPEZvcm1MYWJlbD5DZW50ZXI8L0Zvcm1MYWJlbD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIG5hbWU9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgdHlwZT1cImNlbnRlclwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJEaWdpdGFsIExhYnNcIlxyXG4gICAgICAgID48L0lucHV0PlxyXG5cclxuPFNwYWNlciAvPlxyXG4gICAgICAgIHsvKiBBbGwgT2xkIGlucHV0cyBEb3duKi99XHJcbiAgICAgICAgPEZvcm1MYWJlbD5FbWFpbDwvRm9ybUxhYmVsPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJqaG9uQGdtYWlsLmNvbVwiXHJcbiAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgPEZvcm1IZWxwZXJUZXh0PldlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWwuPC9Gb3JtSGVscGVyVGV4dD5cclxuICAgICAgICA8Rm9ybUxhYmVsPlBhc3N3b3JkPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICA8U3BhY2VyIC8+XHJcbiAgICAgICAgPEhTdGFjayBtdD1cIjZcIiBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBuYW1lPVwiX2FjdGlvblwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtcImxvZ2ludXNlclwifVxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgY29sb3JTY2hlbWU9e1wiZ3JlZW5cIn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPFNwYWNlciAvPlxyXG4gICAgICAgIDwvSFN0YWNrPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQ3JlYXRlTmV3VXNlciA9ICgpID0+IHtcclxuICBjb25zdCBBY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YSgpO1xyXG5cclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICA8Rm9ybUxhYmVsPlByb2ZpbGUgTmFtZTwvRm9ybUxhYmVsPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIG5hbWU9XCJwcm9maWxlTmFtZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkpob24gRG9lXCJcclxuICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICA8Rm9ybUxhYmVsPkVtYWlsPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImpob25AZ21haWwuY29tXCJcclxuICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICA8Rm9ybUhlbHBlclRleHQ+V2UnbGwgbmV2ZXIgc2hhcmUgeW91ciBlbWFpbC48L0Zvcm1IZWxwZXJUZXh0PlxyXG4gICAgICAgIDxGb3JtTGFiZWw+UGFzc3dvcmQ8L0Zvcm1MYWJlbD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgID48L0lucHV0PlxyXG4gICAgICAgIDxGb3JtTGFiZWw+Q2VudHJlIE5hbWU8L0Zvcm1MYWJlbD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBuYW1lPVwiY2VudGVyTmFtZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNlbnRlciBOYW1lXCJcclxuICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICA8Rm9ybUxhYmVsPkxpY2VuY2U8L0Zvcm1MYWJlbD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvLyBuYW1lPVwibGljZW5jZVwiXHJcbiAgICAgICAgICAvLyBwbGFjZWhvbGRlcj1cIkpob24gRG9lXCJcclxuICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICA8U3BhY2VyIC8+XHJcbiAgICAgICAgPEhTdGFjayBtdD1cIjZcIiBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBuYW1lPVwiX2FjdGlvblwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtcImNyZWF0ZXVzZXJcIn1cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNvbG9yU2NoZW1lPXtcImdyZWVuXCJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENyZWF0ZSBQcm9maWxlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxTcGFjZXIgLz5cclxuICAgICAgICA8L0hTdGFjaz5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcblxyXG4vLyBwcmVzY3JpcHRpb24gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIiwgImltcG9ydCB7IGNvbW1pdFNlc3Npb24sIGdldFNlc3Npb24gfSBmcm9tIFwifi9zZXNzaW9uc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVDdXN0b3JtVG9rZW4sIGNyZWF0ZVNlc3Npb25Db29raWVBdXRoIH0gZnJvbSBcIn4vdXRpbHMvYXV0aC5zZXJ2ZXJcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFuZFNhdmVTZXNzaW9uID0gYXN5bmMgKGlkOnN0cmluZyxyZXF1ZXN0OlJlcXVlc3QpID0+IHtcclxuICAgXHJcbiAgICBsZXQgdG9rZW5jcmVhdGVkID0gYXdhaXQgY3JlYXRlQ3VzdG9ybVRva2VuKGlkKVxyXG4gICBhd2FpdCBjb25zb2xlLmxvZyh0b2tlbmNyZWF0ZWQsXCJUb2tlbiBDcmVhdGVkXCIpO1xyXG4gICBcclxuLy8gICAgbGV0IHNlc3Npb25Ub2tlbiA9IGF3YWl0IGNyZWF0ZVNlc3Npb25Db29raWVBdXRoKHRva2VuY3JlYXRlZC50b1N0cmluZygpKVxyXG4vLyAgICBhd2FpdCBjb25zb2xlLmxvZyhzZXNzaW9uVG9rZW4sXCJTZXNzaW9uIFRva2VuIENyZWF0ZWRcIik7XHJcbiAgIFxyXG5cclxuICAgY29uc3Qgc2Vzc2lvbiAgPSBhd2FpdCBnZXRTZXNzaW9uKFxyXG4gICAgICAgcmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKVxyXG4gICApXHJcblxyXG4gICBhd2FpdCBzZXNzaW9uLnNldChcInVzZXJTZXNzaW9uXCIsdG9rZW5jcmVhdGVkLnRvU3RyaW5nKCkpXHJcbiAgIFxyXG4gICBhd2FpdCBjb21taXRTZXNzaW9uKHNlc3Npb24pXHJcbiAgIGNvbnNvbGUubG9nKFwiU0VTU0lPTiBDUkVBVEVEIEFORCBDT01NSVRFRFwiKTtcclxuICAgXHJcbn0iLCAiaW1wb3J0IHsgZmlyZUF1dGggfSBmcm9tIFwifi91dGlscy9maXJlLnNlcnZlclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSB9IGZyb20gXCJyZW1peFwiO1xyXG5pbnRlcmZhY2UgVXNlciB7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG4gIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVVzZXIgPSBhc3luYyAoeyBlbWFpbCwgcGFzc3dvcmQsIGRpc3BsYXlOYW1lIH06IFVzZXIpID0+IHtcclxuICByZXR1cm4gYXdhaXQgZmlyZUF1dGguY3JlYXRlVXNlcih7XHJcbiAgICBlbWFpbDogZW1haWwsXHJcbiAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVVc2VyID0gKHsgZW1haWwsIHBhc3N3b3JkLCBkaXNwbGF5TmFtZSwgdWlkIH06IGFueSkgPT4ge1xyXG4gIGZpcmVBdXRoXHJcbiAgICAudXBkYXRlVXNlcih1aWQsIHtcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgICBkaXNwbGF5TmFtZSxcclxuICAgIH0pXHJcbiAgICAudGhlbigodXNlclJlY29yZCkgPT4ge1xyXG4gICAgICAvLyBTZWUgdGhlIFVzZXJSZWNvcmQgcmVmZXJlbmNlIGRvYyBmb3IgdGhlIGNvbnRlbnRzIG9mIHVzZXJSZWNvcmQuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgdXNlclwiLCB1c2VyUmVjb3JkLnRvSlNPTigpKTtcclxuICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcImRvbmVcIiwgdXNlclJlY29yZCB9O1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvciB1cGRhdGluZyB1c2VyOlwiLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN0YXR1czogXCJmYWlsXCIsIGVycm9yIH07XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAodWlkOiBzdHJpbmcpID0+IHtcclxuICBmaXJlQXV0aFxyXG4gICAgLmRlbGV0ZVVzZXIodWlkKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSBkZWxldGVkIHVzZXJcIik7XHJcbiAgICAgIHJldHVybiB7IHN0YXR1czogXCJTdWNjZXNzZnVsbHkgZGVsZXRlZCB1c2VyXCIgfTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZGVsZXRpbmcgdXNlcjpcIiwgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdGF0dXM6IFwiRXJyb3IgZGVsZXRpbmcgdXNlcjpcIiwgZXJyb3IgfTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlQ3VzdG9ybVRva2VuID0gYXN5bmMgKHVpZDogc3RyaW5nKSA9PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGZpcmVBdXRoLmNyZWF0ZUN1c3RvbVRva2VuKHVpZCk7XHJcbn07XHJcblxyXG5jb25zdCB2ZXJpZnlUb2tlbiA9IChpZFRva2VuOiBzdHJpbmcpID0+IHtcclxuICBmaXJlQXV0aFxyXG4gICAgLnZlcmlmeUlkVG9rZW4oaWRUb2tlbilcclxuICAgIC50aGVuKChkZWNvZGVkVG9rZW4pID0+IHtcclxuICAgICAgLy8gQXBwbHkgTG9naWNcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICByZXR1cm4geyBzdGF0dXM6IFwiR290IGVycm9yIHZlcmlmeWluZyB0b2tlblwiLCBlcnIgfTtcclxuICAgIH0pO1xyXG59O1xyXG4vLyBjb25zdCBjcmVhdGVTZXNzaW9uQ29va2llID0gKCkgPT4ge1xyXG5cclxuLy8gfVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVNlc3Npb25Db29raWVBdXRoID0gYXN5bmMgKHVzZXJJZDogc3RyaW5nKSA9PiB7XHJcbiAgLy8gU2V0IHNlc3Npb24gZXhwaXJhdGlvbiB0byA1IGRheXMuXHJcbiAgY29uc3QgZXhwaXJlc0luID0gNjAgKiA2MCAqIDI0ICogNSAqIDEwMDA7XHJcbiAgcmV0dXJuIGF3YWl0IGZpcmVBdXRoLmNyZWF0ZVNlc3Npb25Db29raWUodXNlcklkLCB7IGV4cGlyZXNJbiB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVVzZXIsIHVwZGF0ZVVzZXIsIGRlbGV0ZVVzZXIsIGNyZWF0ZUN1c3Rvcm1Ub2tlbiwgdmVyaWZ5VG9rZW4gfTtcclxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzlhNGE0ZDYzJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1LU0xHRjZIVC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRjU0NEVFWlMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1JRTJNWVVKUS5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtSjREWVNPMkUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTJKQlBONlJLLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9Mb2dpbic6eydpZCc6J3JvdXRlcy9Mb2dpbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidMb2dpbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9Mb2dpbi1UVVNBRFBORi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstN1ROM0U1TlouanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZGFzaGJvYXJkJzp7J2lkJzoncm91dGVzL2Rhc2hib2FyZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidkYXNoYm9hcmQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZGFzaGJvYXJkLUY1VVJZUUlQLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9kYXNoYm9hcmQvaW5kZXgnOnsnaWQnOidyb3V0ZXMvZGFzaGJvYXJkL2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvZGFzaGJvYXJkJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Rhc2hib2FyZC9pbmRleC1HWUlJSkxQTC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstMkpCUE42UksuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LURKQk1KQllRLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay03VE4zRTVOWi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtOUE0QTRENjMuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0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

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
  }, "Rx Labs"), /* @__PURE__ */ import_react6.default.createElement(import_remix5.Outlet, null));
};
var dashboard_default = Dashboard;

// route:C:\Users\rudra\Desktop\o\letter.js\app\routes\dashboard\index.tsx
var dashboard_exports2 = {};
__export(dashboard_exports2, {
  default: () => dashboard_default2
});
init_react();
var import_react11 = require("@chakra-ui/react");
var import_react12 = require("@chakra-ui/react");
var import_react13 = require("@chakra-ui/react");
var import_ai = require("react-icons/ai");
var import_react14 = require("@chakra-ui/react");
var import_react15 = require("react");

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
var import_react16 = require("@chakra-ui/react");

// app/components/FindPatient.tsx
init_react();
var import_react8 = require("@chakra-ui/react");
var import_react9 = __toESM(require("react"));
var import_react10 = require("@chakra-ui/react");
function FindPatient() {
  return /* @__PURE__ */ import_react9.default.createElement(import_react8.Box, {
    w: "60"
  }, /* @__PURE__ */ import_react9.default.createElement(import_react10.Input, {
    my: "1",
    type: "number",
    placeholder: "patient id"
  }), /* @__PURE__ */ import_react9.default.createElement(import_react10.Input, {
    my: "1",
    type: "number",
    placeholder: "Name"
  }), /* @__PURE__ */ import_react9.default.createElement(import_react10.Input, {
    my: "1",
    type: "number",
    placeholder: "Phone Number"
  }), /* @__PURE__ */ import_react9.default.createElement(import_react8.Button, {
    my: "3"
  }, "Search"));
}
var FindPatient_default = FindPatient;

// route:C:\Users\rudra\Desktop\o\letter.js\app\routes\dashboard\index.tsx
function Index() {
  const [showPage, setShowPage] = (0, import_react15.useState)(1);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PresContextProvider, null, /* @__PURE__ */ React.createElement(import_react11.Button, {
    my: "3",
    mb: "3"
  }, "Create New", " "), /* @__PURE__ */ React.createElement(import_react11.Divider, null), /* @__PURE__ */ React.createElement(import_react11.Box, null, /* @__PURE__ */ React.createElement(import_react16.Breadcrumb, {
    py: "3"
  }, /* @__PURE__ */ React.createElement(import_react16.BreadcrumbItem, null, /* @__PURE__ */ React.createElement(import_react16.BreadcrumbLink, {
    color: "green",
    onClick: (e) => setShowPage(0)
  }, "Find Patient")), showPage === 1 ? /* @__PURE__ */ React.createElement(import_react16.BreadcrumbItem, null, /* @__PURE__ */ React.createElement(import_react16.BreadcrumbLink, {
    href: "#"
  }, "name of Patient")) : null)), showPage === 1 ? /* @__PURE__ */ React.createElement(import_react11.VStack, {
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(import_react11.HStack, {
    w: "full",
    justifyContent: "space-between",
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(Viewer, null), /* @__PURE__ */ React.createElement(OldPrescriptions, null)), /* @__PURE__ */ React.createElement(import_react11.Button, {
    onClick: (e) => {
      window.print();
      console.log("print");
    }
  }, "Print \u{1F5A8}\uFE0F"), /* @__PURE__ */ React.createElement(import_react11.Button, null, "Search Nearest Store"), /* @__PURE__ */ React.createElement(import_react11.Button, null, "Save Prescription ")) : /* @__PURE__ */ React.createElement(FindPatient_default, null)));
}
var OldPrescriptions = () => {
  return /* @__PURE__ */ React.createElement(import_react11.VStack, {
    pl: "9",
    pt: "3",
    mr: "15",
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(import_react11.Heading, {
    fontSize: "2xl"
  }, "Old Prescriptions"), /* @__PURE__ */ React.createElement(import_react11.UnorderedList, null, /* @__PURE__ */ React.createElement(import_react11.ListItem, {
    listStyleType: "none"
  }, "date 17-15-87")));
};
var Viewer = () => {
  const [d, setD] = (0, import_react15.useContext)(PresContext);
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
  return /* @__PURE__ */ React.createElement(import_react11.Box, null, /* @__PURE__ */ React.createElement(import_react11.Box, null, /* @__PURE__ */ React.createElement(PresBox, null), /* @__PURE__ */ React.createElement(import_react11.Button, {
    onClick: (e) => {
      addRow(e);
    }
  }, "Add +")));
};
var PresBox = () => {
  const [d, setD] = (0, import_react15.useContext)(PresContext);
  return /* @__PURE__ */ React.createElement(import_react11.Box, null, d.map((r) => {
    return /* @__PURE__ */ React.createElement(PresStack, {
      data: r
    });
  }));
};
var PresStack = ({ data }) => {
  const [preCon, setPreCon] = (0, import_react15.useContext)(PresContext);
  const changeUpdate = (data2, type) => {
    preCon.map((p) => {
      if (p.drugName === type) {
      }
    });
  };
  return /* @__PURE__ */ React.createElement(import_react11.Box, {
    py: "3",
    w: "full",
    display: "flex",
    justifyContent: "space-around"
  }, /* @__PURE__ */ React.createElement(import_react11.VStack, null, /* @__PURE__ */ React.createElement(import_react11.Text, null, "Drug"), /* @__PURE__ */ React.createElement(import_react11.Input, {
    mx: "1",
    type: "text",
    placeholder: "name of Drug",
    value: data.nameDrug,
    onChange: (data2) => changeUpdate(data2, "drugName")
  })), /* @__PURE__ */ React.createElement(import_react11.Spacer, null), /* @__PURE__ */ React.createElement(import_react11.VStack, {
    mx: "2"
  }, /* @__PURE__ */ React.createElement(import_react11.Text, null, " Dosage Form"), /* @__PURE__ */ React.createElement(import_react12.Menu, null, /* @__PURE__ */ React.createElement(import_react12.MenuButton, {
    value: data.dosageForm,
    as: import_react11.Button,
    rightIcon: /* @__PURE__ */ React.createElement(import_ai.AiOutlineDown, null)
  }, data.dosageForm), /* @__PURE__ */ React.createElement(import_react12.MenuList, null, /* @__PURE__ */ React.createElement(import_react12.MenuItem, null, "Ointments"), /* @__PURE__ */ React.createElement(import_react12.MenuItem, null, "syrup"), /* @__PURE__ */ React.createElement(import_react12.MenuItem, null, "Tablet"), /* @__PURE__ */ React.createElement(import_react12.MenuItem, null, "Powder"), /* @__PURE__ */ React.createElement(import_react12.MenuItem, null, "Pills")))), /* @__PURE__ */ React.createElement(import_react11.Spacer, null), /* @__PURE__ */ React.createElement(import_react11.VStack, {
    mx: "2"
  }, /* @__PURE__ */ React.createElement(import_react11.Text, null, "Dose mg"), /* @__PURE__ */ React.createElement(import_react13.NumberInput, {
    mx: "3",
    defaultValue: 15,
    value: data.mg,
    precision: 2,
    step: 0.2
  }, /* @__PURE__ */ React.createElement(import_react13.NumberInputField, null), /* @__PURE__ */ React.createElement(import_react13.NumberInputStepper, null, /* @__PURE__ */ React.createElement(import_react13.NumberIncrementStepper, null), /* @__PURE__ */ React.createElement(import_react13.NumberDecrementStepper, null)))), /* @__PURE__ */ React.createElement(import_react11.VStack, {
    mx: "2"
  }, /* @__PURE__ */ React.createElement(import_react11.Text, null, "Duration"), /* @__PURE__ */ React.createElement(import_react11.HStack, null, /* @__PURE__ */ React.createElement(import_react14.PinInput, {
    defaultValue: data.duration
  }, /* @__PURE__ */ React.createElement(import_react14.PinInputField, null), /* @__PURE__ */ React.createElement(import_react14.PinInputField, null), /* @__PURE__ */ React.createElement(import_react14.PinInputField, null)))));
};
var dashboard_default2 = Index;

// route:C:\Users\rudra\Desktop\o\letter.js\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  loader: () => loader2
});
init_react();
var import_react17 = require("@chakra-ui/react");
var import_react18 = __toESM(require("react"));
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
  return /* @__PURE__ */ import_react18.default.createElement(import_react18.default.Fragment, null, /* @__PURE__ */ import_react18.default.createElement(import_react17.Heading, null, "Home Page"), JSON.stringify(post));
}
var routes_default = Index2;

// route:C:\Users\rudra\Desktop\o\letter.js\app\routes\Login.tsx
var Login_exports = {};
__export(Login_exports, {
  action: () => action,
  default: () => Login_default
});
init_react();
var import_react19 = require("@chakra-ui/react");
var import_react20 = __toESM(require("react"));
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
  const toast = (0, import_react19.useToast)();
  (0, import_react20.useEffect)(() => {
    if (ActionData != null) {
      console.log("NOT NULL 01");
      if (ActionData.status) {
        console.log("NOT NULL 01");
        (0, import_remix7.redirect)("/dashboard");
      }
    }
  }, [ActionData]);
  return /* @__PURE__ */ import_react20.default.createElement(import_react19.Container, {
    maxH: "container.lg"
  }, JSON.stringify(ActionData), /* @__PURE__ */ import_react20.default.createElement(import_react19.Box, {
    display: "flex",
    justifyContent: "center",
    mt: "30",
    alignItems: "center"
  }, /* @__PURE__ */ import_react20.default.createElement(import_react19.Box, {
    style: { width: "60vw" }
  }, /* @__PURE__ */ import_react20.default.createElement(import_react19.Tabs, null, /* @__PURE__ */ import_react20.default.createElement(import_react19.TabList, null, /* @__PURE__ */ import_react20.default.createElement(import_react19.Tab, null, "Login"), /* @__PURE__ */ import_react20.default.createElement(import_react19.Tab, null, "Create New User")), /* @__PURE__ */ import_react20.default.createElement(import_react19.TabPanels, null, /* @__PURE__ */ import_react20.default.createElement(import_react19.TabPanel, null, /* @__PURE__ */ import_react20.default.createElement(LoginUser, null)), /* @__PURE__ */ import_react20.default.createElement(import_react19.TabPanel, null, /* @__PURE__ */ import_react20.default.createElement(CreateNewUser, null)))))));
}
var LoginUser = () => {
  return /* @__PURE__ */ import_react20.default.createElement(import_react19.Box, null, /* @__PURE__ */ import_react20.default.createElement(import_remix7.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react20.default.createElement(import_react19.FormLabel, null, "Center"), /* @__PURE__ */ import_react20.default.createElement(import_react19.Input, {
    name: "center",
    type: "center",
    required: true,
    placeholder: "Digital Labs"
  }), /* @__PURE__ */ import_react20.default.createElement(import_react19.Spacer, null), /* @__PURE__ */ import_react20.default.createElement(import_react19.FormLabel, null, "Email"), /* @__PURE__ */ import_react20.default.createElement(import_react19.Input, {
    name: "email",
    type: "email",
    required: true,
    placeholder: "jhon@gmail.com"
  }), /* @__PURE__ */ import_react20.default.createElement(import_react19.FormHelperText, null, "We'll never share your email."), /* @__PURE__ */ import_react20.default.createElement(import_react19.FormLabel, null, "Password"), /* @__PURE__ */ import_react20.default.createElement(import_react19.Input, {
    name: "password",
    required: true,
    placeholder: "password",
    type: "password"
  }), /* @__PURE__ */ import_react20.default.createElement(import_react19.Spacer, null), /* @__PURE__ */ import_react20.default.createElement(import_react19.HStack, {
    mt: "6",
    justifyContent: "center",
    alignItems: "center"
  }, /* @__PURE__ */ import_react20.default.createElement(import_react19.Button, {
    name: "_action",
    value: "loginuser",
    type: "submit",
    colorScheme: "green"
  }, "Login"), /* @__PURE__ */ import_react20.default.createElement(import_react19.Spacer, null))));
};
var CreateNewUser = () => {
  const ActionData = (0, import_remix7.useActionData)();
  return /* @__PURE__ */ import_react20.default.createElement(import_react19.Box, null, /* @__PURE__ */ import_react20.default.createElement(import_remix7.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react20.default.createElement(import_react19.FormLabel, null, "Profile Name"), /* @__PURE__ */ import_react20.default.createElement(import_react19.Input, {
    type: "text",
    required: true,
    name: "profileName",
    placeholder: "Jhon Doe"
  }), /* @__PURE__ */ import_react20.default.createElement(import_react19.FormLabel, null, "Email"), /* @__PURE__ */ import_react20.default.createElement(import_react19.Input, {
    type: "email",
    required: true,
    name: "email",
    placeholder: "jhon@gmail.com"
  }), /* @__PURE__ */ import_react20.default.createElement(import_react19.FormHelperText, null, "We'll never share your email."), /* @__PURE__ */ import_react20.default.createElement(import_react19.FormLabel, null, "Password"), /* @__PURE__ */ import_react20.default.createElement(import_react19.Input, {
    required: true,
    placeholder: "password",
    name: "password",
    type: "password"
  }), /* @__PURE__ */ import_react20.default.createElement(import_react19.FormLabel, null, "Centre Name"), /* @__PURE__ */ import_react20.default.createElement(import_react19.Input, {
    type: "text",
    required: true,
    name: "centerName",
    placeholder: "Center Name"
  }), /* @__PURE__ */ import_react20.default.createElement(import_react19.FormLabel, null, "Licence"), /* @__PURE__ */ import_react20.default.createElement(import_react19.Input, {
    type: "file",
    required: true
  }), /* @__PURE__ */ import_react20.default.createElement(import_react19.Spacer, null), /* @__PURE__ */ import_react20.default.createElement(import_react19.HStack, {
    mt: "6",
    justifyContent: "center",
    alignItems: "center"
  }, /* @__PURE__ */ import_react20.default.createElement(import_react19.Button, {
    name: "_action",
    value: "createuser",
    type: "submit",
    colorScheme: "green"
  }, "Create Profile"), /* @__PURE__ */ import_react20.default.createElement(import_react19.Spacer, null))));
};
var Login_default = Login;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "8ce96ece", "entry": { "module": "/build/entry.client-KSLGF6HT.js", "imports": ["/build/_shared/chunk-F544EEZS.js", "/build/_shared/chunk-IE2MYUJQ.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-MW6AZ2FO.js", "imports": ["/build/_shared/chunk-3X7DKLX2.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/Login": { "id": "routes/Login", "parentId": "root", "path": "Login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/Login-NQR7NOXJ.js", "imports": ["/build/_shared/chunk-7TN3E5NZ.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-W3PDRLRB.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard/index": { "id": "routes/dashboard/index", "parentId": "routes/dashboard", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/dashboard/index-IJYBDOBH.js", "imports": ["/build/_shared/chunk-3X7DKLX2.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-XR3GXTER.js", "imports": ["/build/_shared/chunk-7TN3E5NZ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-8CE96ECE.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6QzpcXFVzZXJzXFxydWRyYVxcRGVza3RvcFxcb1xcbGV0dGVyLmpzXFxhcHBcXHJvb3QudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL05hdmJhci50c3giLCAicm91dGU6QzpcXFVzZXJzXFxydWRyYVxcRGVza3RvcFxcb1xcbGV0dGVyLmpzXFxhcHBcXHJvdXRlc1xcZGFzaGJvYXJkLnRzeCIsICIuLi9hcHAvc2Vzc2lvbnMudHMiLCAicm91dGU6QzpcXFVzZXJzXFxydWRyYVxcRGVza3RvcFxcb1xcbGV0dGVyLmpzXFxhcHBcXHJvdXRlc1xcZGFzaGJvYXJkXFxpbmRleC50c3giLCAiLi4vYXBwL2NvbnRleHQvcHJlc0NvbnRleHQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ZpbmRQYXRpZW50LnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJ1ZHJhXFxEZXNrdG9wXFxvXFxsZXR0ZXIuanNcXGFwcFxccm91dGVzXFxpbmRleC50c3giLCAiLi4vYXBwL3V0aWxzL2ZpcmUuc2VydmVyLnRzIiwgInJvdXRlOkM6XFxVc2Vyc1xccnVkcmFcXERlc2t0b3BcXG9cXGxldHRlci5qc1xcYXBwXFxyb3V0ZXNcXExvZ2luLnRzeCIsICIuLi9hcHAvbG9naWMvc2Vzc2lvbkF1dHJoTG9naWMudHMiLCAiLi4vYXBwL3V0aWxzL2F1dGguc2VydmVyLnRzIiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwiY29tcHJlc3Npb25cIjtcclxuaW1wb3J0IG1vcmdhbiBmcm9tIFwibW9yZ2FuXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVJlcXVlc3RIYW5kbGVyIH0gZnJvbSBcIkByZW1peC1ydW4vZXhwcmVzc1wiO1xyXG5cclxuaW1wb3J0ICogYXMgc2VydmVyQnVpbGQgZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiO1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcclxuXHJcbi8vIGh0dHA6Ly9leHByZXNzanMuY29tL2VuL2FkdmFuY2VkL2Jlc3QtcHJhY3RpY2Utc2VjdXJpdHkuaHRtbCNhdC1hLW1pbmltdW0tZGlzYWJsZS14LXBvd2VyZWQtYnktaGVhZGVyXHJcbmFwcC5kaXNhYmxlKFwieC1wb3dlcmVkLWJ5XCIpO1xyXG5cclxuLy8gUmVtaXggZmluZ2VycHJpbnRzIGl0cyBhc3NldHMgc28gd2UgY2FuIGNhY2hlIGZvcmV2ZXIuXHJcbmFwcC51c2UoXHJcbiAgXCIvYnVpbGRcIixcclxuICBleHByZXNzLnN0YXRpYyhcInB1YmxpYy9idWlsZFwiLCB7IGltbXV0YWJsZTogdHJ1ZSwgbWF4QWdlOiBcIjF5XCIgfSlcclxuKTtcclxuXHJcbi8vIEV2ZXJ5dGhpbmcgZWxzZSAobGlrZSBmYXZpY29uLmljbykgaXMgY2FjaGVkIGZvciBhbiBob3VyLiBZb3UgbWF5IHdhbnQgdG8gYmVcclxuLy8gbW9yZSBhZ2dyZXNzaXZlIHdpdGggdGhpcyBjYWNoaW5nLlxyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgbWF4QWdlOiBcIjFoXCIgfSkpO1xyXG5cclxuYXBwLnVzZShtb3JnYW4oXCJ0aW55XCIpKTtcclxuXHJcbmFwcC5hbGwoXHJcbiAgXCIqXCIsXHJcbiAgY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xyXG4gICAgYnVpbGQ6IHNlcnZlckJ1aWxkLFxyXG4gICAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlZcclxuICB9KVxyXG4pO1xyXG5cclxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcclxuXHJcbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGBFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XHJcbn0pO1xyXG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccnVkcmFcXFxcRGVza3RvcFxcXFxvXFxcXGxldHRlci5qc1xcXFxhcHBcXFxcZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxydWRyYVxcXFxEZXNrdG9wXFxcXG9cXFxcbGV0dGVyLmpzXFxcXGFwcFxcXFxyb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxydWRyYVxcXFxEZXNrdG9wXFxcXG9cXFxcbGV0dGVyLmpzXFxcXGFwcFxcXFxyb3V0ZXNcXFxcZGFzaGJvYXJkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxydWRyYVxcXFxEZXNrdG9wXFxcXG9cXFxcbGV0dGVyLmpzXFxcXGFwcFxcXFxyb3V0ZXNcXFxcZGFzaGJvYXJkXFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxydWRyYVxcXFxEZXNrdG9wXFxcXG9cXFxcbGV0dGVyLmpzXFxcXGFwcFxcXFxyb3V0ZXNcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJ1ZHJhXFxcXERlc2t0b3BcXFxcb1xcXFxsZXR0ZXIuanNcXFxcYXBwXFxcXHJvdXRlc1xcXFxMb2dpbi50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2Rhc2hib2FyZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZGFzaGJvYXJkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImRhc2hib2FyZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvZGFzaGJvYXJkL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kYXNoYm9hcmQvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9kYXNoYm9hcmRcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9Mb2dpblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvTG9naW5cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiTG9naW5cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xyXG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcclxuICByZXF1ZXN0OiBSZXF1ZXN0LFxyXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxyXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcclxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxyXG4pIHtcclxuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcclxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XHJcbiAgKTtcclxuXHJcbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcclxuXHJcbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XHJcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcclxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xyXG4gIH0pO1xyXG59XHJcbiIsICJpbXBvcnQge1xyXG4gIExpbmtzLFxyXG4gIExpdmVSZWxvYWQsXHJcbiAgTWV0YSxcclxuICBPdXRsZXQsXHJcbiAgU2NyaXB0cyxcclxuICAgIFxyXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxyXG59IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBDaGFrcmFQcm92aWRlciwgQ29sb3JNb2RlU2NyaXB0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9jb21wb25lbnRzL05hdmJhclwiO1xyXG4vLyAxLiBpbXBvcnQgYGV4dGVuZFRoZW1lYCBmdW5jdGlvblxyXG5pbXBvcnQgeyBleHRlbmRUaGVtZSwgdHlwZSBUaGVtZUNvbmZpZyB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcblxyXG4vLyAyLiBBZGQgeW91ciBjb2xvciBtb2RlIGNvbmZpZ1xyXG5jb25zdCBjb25maWc6IFRoZW1lQ29uZmlnID0ge1xyXG4gIGluaXRpYWxDb2xvck1vZGU6ICdkYXJrJyxcclxuICB1c2VTeXN0ZW1Db2xvck1vZGU6IGZhbHNlLFxyXG59XHJcblxyXG4vLyAzLiBleHRlbmQgdGhlIHRoZW1lXHJcbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoeyBjb25maWcgfSlcclxuXHJcblxyXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHRpdGxlOiBcIk5ldyBSZW1peCBBcHBcIiB9O1xyXG59O1xyXG5cclxuY29uc3QgRG9jdW1lbnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxib2R5PlxyXG4gICAgICAgPENvbG9yTW9kZVNjcmlwdCBpbml0aWFsQ29sb3JNb2RlPXtcImRhcmtcIn0gLz5cclxuICAgICAgPENoYWtyYVByb3ZpZGVyPlxyXG4gICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XHJcbiAgICAgICAgPFNjcmlwdHMgLz5cclxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgPC9DaGFrcmFQcm92aWRlcj5cclxuICAgIDwvYm9keT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cclxuICAgICAgPGhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgPE1ldGEgLz5cclxuICAgICAgICA8TGlua3MgLz5cclxuICAgICAgPC9oZWFkPlxyXG4gICAgICA8RG9jdW1lbnQgLz5cclxuICAgIDwvaHRtbD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBCb3gsIExpc3RJdGVtLCBVbm9yZGVyZWRMaXN0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnXHJcblxyXG5mdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYmFja2dyb3VuZD17XCJncmVlbi41MDBcIn0+XHJcbiAgICAgICAgPFVub3JkZXJlZExpc3QgZGlzcGxheT17XCJmbGV4XCJ9PlxyXG4gICAgICAgICAgPExpc3RJdGVtIHA9XCIzXCIgY29sb3I9e1wid2hpdGVcIn0gIGxpc3RTdHlsZVR5cGU9e1wibm9uZVwifSA+PExpbmsgdG89XCIvXCI+TGFicyBcdUQ4M0RcdUREMkM8L0xpbms+PC9MaXN0SXRlbT5cclxuICAgICAgICAgIDxMaXN0SXRlbSBwPVwiM1wiIGNvbG9yPXtcIndoaXRlXCJ9IGxpc3RTdHlsZVR5cGU9e1wibm9uZVwifSA+PExpbmsgdG89XCIvZGFzaGJvYXJkXCI+RGFzaGJvYXJkPC9MaW5rPjwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8TGlzdEl0ZW0gcD1cIjNcIiBjb2xvcj17XCJ3aGl0ZVwifSBsaXN0U3R5bGVUeXBlPXtcIm5vbmVcIn0gPjxMaW5rIHRvPVwiL2xvZ2luXCI+TG9naW48L0xpbms+PC9MaXN0SXRlbT5cclxuICAgICAgICA8L1Vub3JkZXJlZExpc3Q+XHJcbiAgICA8L0JveD4gIFxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIiwgImltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBDb250YWluZXIsXHJcbiAgRGl2aWRlcixcclxuICBIZWFkaW5nLFxyXG4gIEhTdGFjayxcclxuICBMaXN0SXRlbSxcclxuICBUZXh0LFxyXG4gIFVub3JkZXJlZExpc3QsXHJcbiAgVlN0YWNrLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsganNvbiwgTGluaywgTGlua3MsIExvYWRlckZ1bmN0aW9uLCBPdXRsZXQsIHJlZGlyZWN0LCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwifi9zZXNzaW9uc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6TG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe3JlcXVlc3R9KSA9PiB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oXHJcbiAgICByZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpXHJcbiAgKTtcclxuICBpZiAoc2Vzc2lvbi5oYXMoXCJ1c2VyU2Vzc2lvblwiKSkge1xyXG4gICAgLy8gUmVkaXJlY3QgdG8gdGhlIGhvbWUgcGFnZSBpZiB0aGV5IGFyZSBhbHJlYWR5IHNpZ25lZCBpbi5cclxuICAgIFxyXG4gICAgcmV0dXJuIHtzaG93UGFnZTp0cnVlfVxyXG4gIH1cclxuICByZXR1cm4ge3Nob3dQYWdlOmZhbHNlfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBEYXNoYm9hcmQoKSB7XHJcblxyXG4gIGNvbnN0IHtzaG93UGFnZX0gPSB1c2VMb2FkZXJEYXRhKCkgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgey8qIHtcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoc2hvd1BhZ2UpXHJcbiAgICB9ICovfVxyXG4gICAge1xyXG4gICAgICB0cnVlID8gIDxQcml2YXRlUGFnZSAvPiA6IDxOb3RTaWduSW5QYWdlIC8+XHJcbiAgICB9XHJcblxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgTm90U2lnbkluUGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgICA8SGVhZGluZz5Vc2VyIE5vdCBMb2dlZCBpbjwvSGVhZGluZz5cclxuICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiPkxvZ2luPC9MaW5rPlxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuY29uc3QgUHJpdmF0ZVBhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuKFxyXG4gICAgPENvbnRhaW5lciBtYXhXPVwib250YWluZXIubGdcIj5cclxuICAgIDxIZWFkaW5nIHB5PVwiM1wiPlJ4IExhYnM8L0hlYWRpbmc+XHJcbiAgICBcclxuICAgICAgXHJcbiAgICAgIHsvKiA8RGl2aWRlciBzaXplPXtcIjNcIn0gY29sb3JTY2hlbWU9XCJncmVlblwiIG9yaWVudGF0aW9uPSd2ZXJ0aWNhbCcgLz4gKi99XHJcbiAgICAgIDxPdXRsZXQgLz5cclxuICAgIFxyXG4gIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuIiwgImltcG9ydCB7Y3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2V9IGZyb20gXCJyZW1peFwiXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHtnZXRTZXNzaW9uLGNvbW1pdFNlc3Npb24sZGVzdHJveVNlc3Npb259ICA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcclxuICAgIGNvb2tpZTp7XHJcbiAgICAgICAgbmFtZTpcIl9fc2Vzc2lvblwiXHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuIiwgImltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBEaXZpZGVyLFxyXG4gIEhlYWRpbmcsXHJcbiAgSGVhZGluZ1Byb3BzLFxyXG4gIEhTdGFjayxcclxuICBJbnB1dCxcclxuICBMaXN0SXRlbSxcclxuICBPbWl0Q29tbW9uUHJvcHMsXHJcbiAgT3JkZXJlZExpc3QsXHJcbiAgU3BhY2VyLFxyXG4gIFRleHQsXHJcbiAgVW5vcmRlcmVkTGlzdCxcclxuICBWU3RhY2ssXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBTbGF0ZUVkaXRvciBmcm9tIFwifi9jb21wb25lbnRzL1NsYXRlRWRpdG9yXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIE1lbnUsXHJcbiAgTWVudUJ1dHRvbixcclxuICBNZW51TGlzdCxcclxuICBNZW51SXRlbSxcclxuICBNZW51SXRlbU9wdGlvbixcclxuICBNZW51R3JvdXAsXHJcbiAgTWVudU9wdGlvbkdyb3VwLFxyXG4gIE1lbnVEaXZpZGVyLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgTnVtYmVySW5wdXQsXHJcbiAgTnVtYmVySW5wdXRGaWVsZCxcclxuICBOdW1iZXJJbnB1dFN0ZXBwZXIsXHJcbiAgTnVtYmVySW5jcmVtZW50U3RlcHBlcixcclxuICBOdW1iZXJEZWNyZW1lbnRTdGVwcGVyLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IEFpT3V0bGluZURvd24sIEFpRmlsbFdhcm5pbmcgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuXHJcbmltcG9ydCB7IFBpbklucHV0LCBQaW5JbnB1dEZpZWxkIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUHJlc0NvbnRleHQsIFByZXNDb250ZXh0UHJvdmlkZXIgfSBmcm9tIFwifi9jb250ZXh0L3ByZXNDb250ZXh0XCI7XHJcbmltcG9ydCB7XHJcbiAgQnJlYWRjcnVtYixcclxuICBCcmVhZGNydW1iSXRlbSxcclxuICBCcmVhZGNydW1iTGluayxcclxuICBCcmVhZGNydW1iU2VwYXJhdG9yLFxyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCBGaW5kUGF0aWVudCBmcm9tIFwifi9jb21wb25lbnRzL0ZpbmRQYXRpZW50XCI7XHJcblxyXG5mdW5jdGlvbiBJbmRleCgpIHtcclxuICAvLyBjb25zdCBbZCxzZXREXSA9IHVzZUNvbnRleHQoUHJlc0NvbnRleHQpXHJcblxyXG4gIC8vIGNvbnN0IGFkZE1haW5EYXRhID0gKGU6YW55KSA9PiB7XHJcbiAgLy8gY29uc3QgbyA9IHtcclxuICAvLyAgIG5hbWVEcnVnOiBcIlwiLFxyXG4gIC8vICAgZG9zYWdlRm9ybTogXCJcIixcclxuICAvLyAgIG1nOiBcIlwiLFxyXG4gIC8vICAgZHVyYXRpb246IFwiXCIsXHJcbiAgLy8gfVxyXG5cclxuICAvLyBsZXQgbGFzdCA9IGRcclxuXHJcbiAgLy8gbGFzdC5wdXNoKG8pXHJcblxyXG4gIC8vIHNldEQobGFzdClcclxuXHJcbiAgLy8gfVxyXG5cclxuICBjb25zdCBbc2hvd1BhZ2Usc2V0U2hvd1BhZ2VdID0gdXNlU3RhdGUoMSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxQcmVzQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgIDxCdXR0b24gbXk9XCIzXCIgbWI9XCIzXCI+XHJcbiAgICAgICAgICBDcmVhdGUgTmV3e1wiIFwifVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPEJveD5cclxuICAgICAgICAgIDxCcmVhZGNydW1iIHB5PVwiM1wiPlxyXG4gIDxCcmVhZGNydW1iSXRlbT5cclxuICAgIDxCcmVhZGNydW1iTGluayBjb2xvcj1cImdyZWVuXCIgb25DbGljaz17ZSA9PiBzZXRTaG93UGFnZSgwKX0+RmluZCBQYXRpZW50PC9CcmVhZGNydW1iTGluaz5cclxuICA8L0JyZWFkY3J1bWJJdGVtPlxyXG57XHJcbiAgc2hvd1BhZ2UgPT09IDEgPyBcclxuICA8QnJlYWRjcnVtYkl0ZW0+XHJcbiAgICA8QnJlYWRjcnVtYkxpbmsgaHJlZj0nIyc+bmFtZSBvZiBQYXRpZW50PC9CcmVhZGNydW1iTGluaz5cclxuICA8L0JyZWFkY3J1bWJJdGVtPiA6IG51bGxcclxufVxyXG4gIDwvQnJlYWRjcnVtYiA+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIHtcclxuICAgICAgICBzaG93UGFnZSA9PT0gMSA/ICAgPFZTdGFjayBqdXN0aWZ5Q29udGVudD17XCJmbGV4LXN0YXJ0XCJ9IGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCI+XHJcbiAgICAgICAgPEhTdGFjayB3PVwiZnVsbFwiIGp1c3RpZnlDb250ZW50PXtcInNwYWNlLWJldHdlZW5cIn0gYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIj5cclxuICAgICAgICAgIDxWaWV3ZXIgLz5cclxuXHJcbiAgICAgICAgICA8T2xkUHJlc2NyaXB0aW9ucyAvPlxyXG4gICAgICAgIDwvSFN0YWNrPlxyXG5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucHJpbnQoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcmludFwiKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUHJpbnQgXHVEODNEXHVEREE4XHVGRTBGXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbj5TZWFyY2ggTmVhcmVzdCBTdG9yZTwvQnV0dG9uPlxyXG5cclxuICAgICAgICA8QnV0dG9uPlNhdmUgUHJlc2NyaXB0aW9uIDwvQnV0dG9uPlxyXG4gICAgICA8L1ZTdGFjaz4gOiA8RmluZFBhdGllbnQgLz5cclxuICAgICAgfVxyXG4gICAgICA8L1ByZXNDb250ZXh0UHJvdmlkZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBPbGRQcmVzY3JpcHRpb25zID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VlN0YWNrIHBsPVwiOVwiIHB0PVwiM1wiIG1yPVwiMTVcIiBhbGlnbkl0ZW1zPXtcImZsZXgtc3RhcnRcIn0+XHJcbiAgICAgIDxIZWFkaW5nIGZvbnRTaXplPVwiMnhsXCI+T2xkIFByZXNjcmlwdGlvbnM8L0hlYWRpbmc+XHJcbiAgICAgIDxVbm9yZGVyZWRMaXN0PlxyXG4gICAgICAgIDxMaXN0SXRlbSBsaXN0U3R5bGVUeXBlPVwibm9uZVwiPmRhdGUgMTctMTUtODc8L0xpc3RJdGVtPlxyXG4gICAgICA8L1Vub3JkZXJlZExpc3Q+XHJcbiAgICA8L1ZTdGFjaz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVmlld2VyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtkLCBzZXREXSA9IHVzZUNvbnRleHQoUHJlc0NvbnRleHQpO1xyXG4gIGNvbnN0IGFkZFJvdyA9IChlOiBhbnkpID0+IHtcclxuICAgIGxldCBvbGREYXRhID0gW107XHJcblxyXG4gICAgZC5tYXAoKG9sZEQ6IGFueSkgPT4ge1xyXG4gICAgICBvbGREYXRhLnB1c2gob2xkRCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBvbGREYXRhLnB1c2goe1xyXG4gICAgICBuYW1lRHJ1ZzogXCJcIixcclxuICAgICAgZG9zYWdlRm9ybTogXCJcIixcclxuICAgICAgbWc6IFwiXCIsXHJcbiAgICAgIGR1cmF0aW9uOiBcIlwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0RChvbGREYXRhKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgPEJveD5cclxuICAgICAgICA8UHJlc0JveCAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGFkZFJvdyhlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRkICtcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUHJlc0JveCA9ICgpID0+IHtcclxuICBjb25zdCBbZCwgc2V0RF0gPSB1c2VDb250ZXh0KFByZXNDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIHsvKiA8UHJlc1N0YWNrIC8+XHJcbiAgICAgIDxQcmVzU3RhY2sgLz5cclxuICAgICAgPFByZXNTdGFjayAvPiAqL31cclxuXHJcbiAgICAgIHtkLm1hcCgocjogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxQcmVzU3RhY2sgZGF0YT17cn0gLz47XHJcbiAgICAgIH0pfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFByZXNTdGFjayA9ICh7IGRhdGEgfTogYW55KSA9PiB7XHJcbiAgY29uc3QgW3ByZUNvbiwgc2V0UHJlQ29uXSA9IHVzZUNvbnRleHQoUHJlc0NvbnRleHQpO1xyXG5cclxuICBjb25zdCBjaGFuZ2VVcGRhdGUgPSAoZGF0YTogYW55LHR5cGU6YW55KSA9PiB7XHJcbiAgICBwcmVDb24ubWFwKChwOmFueSkgPT4ge1xyXG4gICAgICBpZihwLmRydWdOYW1lID09PSB0eXBlICl7XHJcblxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHB5PVwiM1wiIHc9XCJmdWxsXCIgZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiPlxyXG4gICAgICB7LyogPFRleHQgY29sb3I9XCJyZWQgIFwiPjxBaUZpbGxXYXJuaW5nIC8+PC9UZXh0PiAqL31cclxuICAgICAgey8qIHtcclxuICAgICAgICBKU09OLnN0cmluZ2lmeShwcmVDb24pXHJcbiAgICAgIH0gKi99XHJcbiAgICAgIDxWU3RhY2s+XHJcbiAgICAgICAgPFRleHQ+RHJ1ZzwvVGV4dD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIG14PVwiMVwiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIm5hbWUgb2YgRHJ1Z1wiXHJcbiAgICAgICAgICB2YWx1ZT17ZGF0YS5uYW1lRHJ1Z31cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0YSkgPT4gY2hhbmdlVXBkYXRlKGRhdGEsXCJkcnVnTmFtZVwiKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L1ZTdGFjaz5cclxuICAgICAgPFNwYWNlciAvPlxyXG4gICAgICA8VlN0YWNrIG14PVwiMlwiPlxyXG4gICAgICAgIDxUZXh0PiBEb3NhZ2UgRm9ybTwvVGV4dD5cclxuICAgICAgICA8TWVudT5cclxuICAgICAgICAgIDxNZW51QnV0dG9uXHJcbiAgICAgICAgICAgIHZhbHVlPXtkYXRhLmRvc2FnZUZvcm19XHJcbiAgICAgICAgICAgIGFzPXtCdXR0b259XHJcbiAgICAgICAgICAgIHJpZ2h0SWNvbj17PEFpT3V0bGluZURvd24gLz59XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtkYXRhLmRvc2FnZUZvcm19XHJcbiAgICAgICAgICA8L01lbnVCdXR0b24+XHJcbiAgICAgICAgICA8TWVudUxpc3Q+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbT5PaW50bWVudHM8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0+c3lydXA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0+VGFibGV0PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtPlBvd2RlcjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbT5QaWxsczwvTWVudUl0ZW0+XHJcbiAgICAgICAgICA8L01lbnVMaXN0PlxyXG4gICAgICAgIDwvTWVudT5cclxuICAgICAgPC9WU3RhY2s+XHJcbiAgICAgIDxTcGFjZXIgLz5cclxuICAgICAgPFZTdGFjayBteD1cIjJcIj5cclxuICAgICAgICA8VGV4dD5Eb3NlIG1nPC9UZXh0PlxyXG4gICAgICAgIDxOdW1iZXJJbnB1dFxyXG4gICAgICAgICAgbXg9XCIzXCJcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MTV9XHJcbiAgICAgICAgICB2YWx1ZT17ZGF0YS5tZ31cclxuICAgICAgICAgIHByZWNpc2lvbj17Mn1cclxuICAgICAgICAgIHN0ZXA9ezAuMn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TnVtYmVySW5wdXRGaWVsZCAvPlxyXG4gICAgICAgICAgPE51bWJlcklucHV0U3RlcHBlcj5cclxuICAgICAgICAgICAgPE51bWJlckluY3JlbWVudFN0ZXBwZXIgLz5cclxuICAgICAgICAgICAgPE51bWJlckRlY3JlbWVudFN0ZXBwZXIgLz5cclxuICAgICAgICAgIDwvTnVtYmVySW5wdXRTdGVwcGVyPlxyXG4gICAgICAgIDwvTnVtYmVySW5wdXQ+XHJcbiAgICAgIDwvVlN0YWNrPlxyXG5cclxuICAgICAgey8qIFBpbiBJbnB1dCAqL31cclxuICAgICAgPFZTdGFjayBteD1cIjJcIj5cclxuICAgICAgICA8VGV4dD5EdXJhdGlvbjwvVGV4dD5cclxuICAgICAgICA8SFN0YWNrPlxyXG4gICAgICAgICAgPFBpbklucHV0IGRlZmF1bHRWYWx1ZT17ZGF0YS5kdXJhdGlvbn0+XHJcbiAgICAgICAgICAgIDxQaW5JbnB1dEZpZWxkIC8+XHJcbiAgICAgICAgICAgIDxQaW5JbnB1dEZpZWxkIC8+XHJcbiAgICAgICAgICAgIDxQaW5JbnB1dEZpZWxkIC8+XHJcbiAgICAgICAgICA8L1BpbklucHV0PlxyXG4gICAgICAgIDwvSFN0YWNrPlxyXG4gICAgICA8L1ZTdGFjaz5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwgImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgUHJlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0PGFueT4obnVsbCk7XHJcbi8vIGltcG9ydCB1dWlkIGZyb20gXCJ1dWlkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUHJlc0NvbnRleHRQcm92aWRlciA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgXHJcblxyXG4gIGNvbnN0IG1haW5EYXRhID0gW3tcclxuICAgICAgbmFtZURydWc6XCJwYXJhY2V0YW1vbFwiLFxyXG4gICAgICBkb3NhZ2VGb3JtOlwic3lydXBcIixcclxuICAgICAgbWc6XCIxNlwiLFxyXG4gICAgICBkdXJhdGlvbiA6XCIxMDFcIixcclxuICB9LHtcclxuICAgICAgbmFtZURydWc6XCJ3YXJmYXJpblwiLFxyXG4gICAgICBkb3NhZ2VGb3JtOlwibG90aW9uXCIsXHJcbiAgICAgIG1nOlwiMTZcIixcclxuICAgICAgZHVyYXRpb24gOlwiMTExXCJcclxuICB9XVxyXG5cclxuLy8gICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShtYWluRGF0YSlcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXHJcbiAgICB7XHJcbiAgICAgIG5hbWVEcnVnOiBcIlwiLFxyXG4gICAgICBkb3NhZ2VGb3JtOiBcIlwiLFxyXG4gICAgICBtZzogXCJcIixcclxuICAgICAgZHVyYXRpb246IFwiXCIsXHJcbiAgICAgIFxyXG4gICAgfSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQcmVzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W2RhdGEsIHNldERhdGFdfT5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9QcmVzQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iLCAiaW1wb3J0IHsgQm94LCBCdXR0b24gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuZnVuY3Rpb24gRmluZFBhdGllbnQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggdz1cIjYwXCI+XHJcbiAgICAgICAgICAgICA8SW5wdXQgbXk9XCIxXCIgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPSdwYXRpZW50IGlkJyAgLz5cclxuICAgICAgICAgICAgIDxJbnB1dCBteT1cIjFcIiB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9J05hbWUnICAvPlxyXG4gICAgICAgICAgICAgPElucHV0IG15PVwiMVwiIHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj0nUGhvbmUgTnVtYmVyJyAgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxCdXR0b24gbXk9XCIzXCIgID5TZWFyY2g8L0J1dHRvbj5cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmluZFBhdGllbnQiLCAiaW1wb3J0IHsgSGVhZGluZyB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZmlyZXN0b3JlIH0gZnJvbSBcIn4vdXRpbHMvZmlyZS5zZXJ2ZXJcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgY29sbGVjdGlvblVzZXIgPSBmaXJlc3RvcmUuY29sbGVjdGlvbihcInVzZXJzXCIpO1xyXG5cclxuICBsZXQgcmVzID0gYXdhaXQgY29sbGVjdGlvblVzZXJcclxuICAgIC5kb2MoKVxyXG4gICAgLnNldCh7IGZpcnN0OiBcIkpoc29uXCIsIGxhc3Q6IFwiRG9lXCIsIGVtYWlsOiBcInJ1ZHJhQGdtaWFsLmNvbVwiIH0pO1xyXG5cclxuXHJcbiAgXHJcblxyXG4gIHJldHVybiB7bXNnOlwic2F2ZWQgZGF0YVwiLHJlc31cclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBJbmRleCgpIHtcclxuXHJcbiAgY29uc3QgcG9zdCA9IHVzZUxvYWRlckRhdGEoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRpbmc+SG9tZSBQYWdlPC9IZWFkaW5nPlxyXG4gICAgICB7XHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkocG9zdClcclxuICAgICAgfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsICJpbXBvcnQgeyBpbml0aWFsaXplQXBwLCBhcHBsaWNhdGlvbkRlZmF1bHQsIGNlcnQgfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vYXBwXCI7XHJcbmxldCBhZG1pbiA9IHJlcXVpcmUoXCJmaXJlYmFzZS1hZG1pblwiKVxyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vYXV0aFwiO1xyXG5cclxuXHJcbmNvbnN0IGE6YW55ID0ge1xyXG4gIFwidHlwZVwiOiBcInNlcnZpY2VfYWNjb3VudFwiLFxyXG4gIFwicHJvamVjdF9pZFwiOiBcInJ1ZGhyYWpvc2hpY29tXCIsXHJcbiAgXCJwcml2YXRlX2tleV9pZFwiOiBcIjlmZWYzNmIyNzlhNDE5NDhlNjY0MzQzNGRmOTczMjA4MWE1YmQyOTVcIixcclxuICBcInByaXZhdGVfa2V5XCI6IFwiLS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tXFxuTUlJRXZRSUJBREFOQmdrcWhraUc5dzBCQVFFRkFBU0NCS2N3Z2dTakFnRUFBb0lCQVFEQmFQYlNJSTNUaXZzK1xcbkQ5aUVpT2VtN2VRYzNuRHJ1QlVEMExNMVFRMmJtTUMzVVFZZ1d5TWlIL3VucGhOc0kyN2NUOE1wVXYxN251M1JcXG40SmJ0MnM1M1plRURzREVyS1pVSG5MenhiK2U4emI3bEFZT3NNekthdHFTTlB1T0hod0I4YVNTSkFxd0ZDMXVwXFxuV24rblU3N09WdmxIYmJoQ1FvK3dHc3pLOVNpczBNY2pNWVhxd3Z0eTI1UjZsM3dya3NSOWRlUG1mS0pKSlYwOVxcbjloTjduYXN2dTBIbWczZzlTVXlId1ZWYURXMGcvM1VWQTlzeTJCZG9TZDVpOHNlMUwreU5RbmMrWWhWcllZTFNcXG5wVGRMS3ZaTmgrZ0x2RitEdXF5Y2l5MktxYkVNdlM2U1JUMkFybVllRytxUWhsK1dWUndMU0JzUUFGNHdRQWdJXFxubnU3M1o4SnRBZ01CQUFFQ2dnRUFHQ0p5K2xHWm9SWXN0OWZlV3R1Q25LLyswU05veitGT3JnVXk5NmhBZkhRWlxcblNFYlNEdU9RaE1lYzdaU3B3OHJBSUxuTFRyTE9jc2lvUUpKWUF5SlV0VTEvUUtpUjJpTDhOOUQxT3VPTjlWOXZcXG5QTUJ0bitWYm9UYTlYZXJGRmJwZzh5VmpxNzBybmcyR3lLRkVZS3J3bW1yNy9FL1N1R0g1OEMzSDlHT1hTY2trXFxuSHVLNmpTb1lsYUN1elR6enJUWHBacUEwQ0x0S3E3KzBBWXpOV3N1VmozTm9SUE1LdVN0WDNmNU5qVmpsbWFrZlxcbk94ZE80VXk5U2RrM1VLMWM4TTIzVzJySjZQeGlHVXRPUkRBYTIzd21ydlgvdjFINmZwSWdJNW5DZ1VuY0w2VjVcXG43NHIzbVliMGVGSk1PeFpZOWVCWGEyMy94Z2hHU1lNdWpSa3hRdW5NQVFLQmdRRG1naFB4eUg3ejhoYVFldkhKXFxuMzhGdGNUUlg5dU9DcmVieUdIV3VJak1VL3FFejdIY0FUUVBTUlJvL05KRzVuclBqRVM2NzNsZzMwTG8zTTZFVVxcbnJaemgxRFdMajhsUkVFZ3BNQ2oycUVLMFowTENvUHFNb3pDY3dSWm1MYjVaTGtQRXViUWQrMjdiSWNHK0I5dGJcXG54dHlXWGhpcUpFVzBRTTZsaGJOVzV3NllnUUtCZ1FEV3pKbk8vTjU5Rm14WnhjNWN4Um14ejZvMGNkZC9yUE1zXFxuTCs1K1I0dEJvOVNCeWR6bHZwODVPNEtaMGVPSlcyVEY2TlQvZ2JheTMwci8xdldkelBRajZ3R2NIWmI2NVlxdVxcbnU4UlgwRlFQdDJzd1pRR0FOL3RidnRrU1pWd2RhTmltMnhzQ3RLL2NKYVlaVlMvZGpQRUFCSXBQREtpdmc1WnlcXG5ONHlycUJNVDdRS0JnUUNKZkJKTFJ1dTVzcTRVdE0vY09aSlVKWTR6M1RUcnI2K3N2RHdNaGFkMElUK2pDYW9jXFxueXRLNXFxK3gvVGZodjYvSmdta2Vjc3FwVjl5SnFraXNYYlRSMlZHcWtUTmhIMVg3QXhlYnJ0WkNaY2lpNzRNaFxcbk9RQjRybzRlbWJBTDN4VmFrK3pEYVVGQWdFemZmQzR3K2xaOWRWZyt1dTI4U2w4MnlKMGoreUp3Z1FLQmdGdmJcXG5IeU5QSys0ZU9yT2hUWUNLb1ZSUzFCeWRXbVMxRjBDY05zYzEzUzF5M0J1c3NaUm1FajB0WDhwYjRZd0owMngzXFxuQnk5RXoxWnErdTJ4aFZPNEkrZUFSaTMyMFd2MTRYcWJ2WGs0RTlxc3UxLzBzZEdkSHhhNjVLVmpSeU1raFJIRlxcbnZTVkpFN04zUGpLekpVYi9VTWlMS0lKcGpYR1JPak1aNGtRK0dmcDVBb0dBUjh4dCsrTW96Vk9iOXZ0RjF1VExcXG4yM0ZscUhCdVNxblJNcXNnaVd0UklBKzlNKzAzeFJEUEo4ek8wbUltbVArdHB5UzZqREdnR1pFMk1jcXgvcEUvXFxuSUNhTVZQR2pzWFlkYnAyNzBjMGsyZkgyWi90VlhBZ3JIaHpHZ01CZ3ppY2NXSDY3Um44bWdqeDNUMmFxbFhkdFxcbmdOTUFPUmlDSU8rTFMrY2V4WVJZRkxrPVxcbi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS1cXG5cIixcclxuICBcImNsaWVudF9lbWFpbFwiOiBcImZpcmViYXNlLWFkbWluc2RrLXh1ZDE4QHJ1ZGhyYWpvc2hpY29tLmlhbS5nc2VydmljZWFjY291bnQuY29tXCIsXHJcbiAgXCJjbGllbnRfaWRcIjogXCIxMTEwOTczMjM3NDU3NDA1MTU5ODlcIixcclxuICBcImF1dGhfdXJpXCI6IFwiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL2F1dGhcIixcclxuICBcInRva2VuX3VyaVwiOiBcImh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tL3Rva2VuXCIsXHJcbiAgXCJhdXRoX3Byb3ZpZGVyX3g1MDlfY2VydF91cmxcIjogXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvY2VydHNcIixcclxuICBcImNsaWVudF94NTA5X2NlcnRfdXJsXCI6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vcm9ib3QvdjEvbWV0YWRhdGEveDUwOS9maXJlYmFzZS1hZG1pbnNkay14dWQxOCU0MHJ1ZGhyYWpvc2hpY29tLmlhbS5nc2VydmljZWFjY291bnQuY29tXCJcclxufVxyXG5pbml0aWFsaXplQXBwKHtjcmVkZW50aWFsOmNlcnQoYSl9KTtcclxuZXhwb3J0IGNvbnN0IGZpcmVzdG9yZSA9IGdldEZpcmVzdG9yZSgpO1xyXG5leHBvcnQgY29uc3QgZmlyZUF1dGggPSBnZXRBdXRoKCk7XHJcbiIsICJpbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgQ29udGFpbmVyLFxyXG4gIEZvcm1IZWxwZXJUZXh0LFxyXG4gIEZvcm1MYWJlbCxcclxuICBIZWFkaW5nLFxyXG4gIEhTdGFjayxcclxuICBJbnB1dCxcclxuICBTcGFjZXIsXHJcbiAgVGFiLFxyXG4gIFRhYkxpc3QsXHJcbiAgVGFiUGFuZWwsXHJcbiAgVGFiUGFuZWxzLFxyXG4gIFRhYnMsXHJcbiAgdXNlVG9hc3QsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsganNvbiB9IGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vYXV0aFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEFjdGlvbkZ1bmN0aW9uLFxyXG4gIEZvcm0sXHJcbiAgcmVkaXJlY3QsXHJcbiAgdXNlQWN0aW9uRGF0YSxcclxuICB1c2VTdWJtaXQsXHJcbiAgdXNlVHJhbnNpdGlvbixcclxufSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgY3JlYXRlQW5kU2F2ZVNlc3Npb24gfSBmcm9tIFwifi9sb2dpYy9zZXNzaW9uQXV0cmhMb2dpY1wiO1xyXG5pbXBvcnQgeyBjb21taXRTZXNzaW9uIH0gZnJvbSBcIn4vc2Vzc2lvbnNcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ3VzdG9ybVRva2VuLCBjcmVhdGVVc2VyIH0gZnJvbSBcIn4vdXRpbHMvYXV0aC5zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgZmlyZUF1dGgsIGZpcmVzdG9yZSB9IGZyb20gXCJ+L3V0aWxzL2ZpcmUuc2VydmVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBsZXQgZm9ybUFjdGlvbiA9IGZvcm0uZ2V0KFwiX2FjdGlvblwiKTtcclxuICBsZXQgZW1haWwgPSBmb3JtLmdldChcImVtYWlsXCIpO1xyXG4gIGxldCBwYXNzd29yZCA9IGZvcm0uZ2V0KFwicGFzc3dvcmRcIik7XHJcbiAgbGV0IHByb2ZpbGVOYW1lID0gZm9ybS5nZXQoXCJwcm9maWxlTmFtZVwiKTtcclxuXHJcbiAgY29uc3QgY29sID0gZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKTtcclxuICBsZXQgcmVzIDogYW55O1xyXG4gIGlmIChmb3JtQWN0aW9uID09PSBcImNyZWF0ZXVzZXJcIikge1xyXG4gICAgaWYgKGVtYWlsICYmIHBhc3N3b3JkICYmIHByb2ZpbGVOYW1lKSB7XHJcbiAgICAgIGF3YWl0IGNyZWF0ZVVzZXIoe1xyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBwcm9maWxlTmFtZSxcclxuICAgICAgfSkudGhlbihhc3luYyAodXNlclJlY29yZCkgPT4ge1xyXG4gICAgICAgIHJlcyA9IHsgc3RhdHVzOiB0cnVlLCBpZDogdXNlclJlY29yZC51aWQgfTtcclxuICAgICAgICBhd2FpdCBjcmVhdGVBbmRTYXZlU2Vzc2lvbih1c2VyUmVjb3JkLnVpZCxyZXF1ZXN0KVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMgPyByZWRpcmVjdChcIi9kYXNoYm9hcmRcIikgOiByZXNcclxufTtcclxuXHJcbmZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGNvbnN0IEFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhKCk7XHJcbiAgY29uc3QgdG9hc3QgPSB1c2VUb2FzdCgpO1xyXG5cclxudXNlRWZmZWN0KCgpID0+IHtcclxuICBpZihBY3Rpb25EYXRhICE9IG51bGwpe1xyXG4gICAgY29uc29sZS5sb2coXCJOT1QgTlVMTCAwMVwiKTtcclxuICAgIFxyXG4gICAgIGlmKEFjdGlvbkRhdGEuc3RhdHVzICl7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcIk5PVCBOVUxMIDAxXCIpO1xyXG4gICAgICAgcmVkaXJlY3QgKFwiL2Rhc2hib2FyZFwiKVxyXG4gICAgIH1cclxuICB9XHJcbiBcclxufSxbQWN0aW9uRGF0YV0pXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgbWF4SD1cImNvbnRhaW5lci5sZ1wiPlxyXG4gICAgICB7SlNPTi5zdHJpbmdpZnkoQWN0aW9uRGF0YSl9XHJcblxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgZGlzcGxheT17XCJmbGV4XCJ9XHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgIG10PVwiMzBcIlxyXG4gICAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN0eWxlPXt7IHdpZHRoOiBcIjYwdndcIiB9fT5cclxuICAgICAgICAgIDxUYWJzPlxyXG4gICAgICAgICAgICA8VGFiTGlzdD5cclxuICAgICAgICAgICAgICA8VGFiPkxvZ2luPC9UYWI+XHJcbiAgICAgICAgICAgICAgPFRhYj5DcmVhdGUgTmV3IFVzZXI8L1RhYj5cclxuICAgICAgICAgICAgPC9UYWJMaXN0PlxyXG4gICAgICAgICAgICA8VGFiUGFuZWxzPlxyXG4gICAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgIDxMb2dpblVzZXIgLz5cclxuICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgIDxDcmVhdGVOZXdVc2VyIC8+XHJcbiAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgPC9UYWJQYW5lbHM+XHJcbiAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgTG9naW5Vc2VyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgIDxGb3JtTGFiZWw+Q2VudGVyPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBuYW1lPVwiY2VudGVyXCJcclxuICAgICAgICAgIHR5cGU9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlnaXRhbCBMYWJzXCJcclxuICAgICAgICA+PC9JbnB1dD5cclxuXHJcbjxTcGFjZXIgLz5cclxuICAgICAgICB7LyogQWxsIE9sZCBpbnB1dHMgRG93biovfVxyXG4gICAgICAgIDxGb3JtTGFiZWw+RW1haWw8L0Zvcm1MYWJlbD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiamhvbkBnbWFpbC5jb21cIlxyXG4gICAgICAgID48L0lucHV0PlxyXG4gICAgICAgIDxGb3JtSGVscGVyVGV4dD5XZSdsbCBuZXZlciBzaGFyZSB5b3VyIGVtYWlsLjwvRm9ybUhlbHBlclRleHQ+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5QYXNzd29yZDwvRm9ybUxhYmVsPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgPFNwYWNlciAvPlxyXG4gICAgICAgIDxIU3RhY2sgbXQ9XCI2XCIganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgbmFtZT1cIl9hY3Rpb25cIlxyXG4gICAgICAgICAgICB2YWx1ZT17XCJsb2dpbnVzZXJcIn1cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNvbG9yU2NoZW1lPXtcImdyZWVuXCJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxTcGFjZXIgLz5cclxuICAgICAgICA8L0hTdGFjaz5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IENyZWF0ZU5ld1VzZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgQWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGEoKTtcclxuXHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5Qcm9maWxlIE5hbWU8L0Zvcm1MYWJlbD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBuYW1lPVwicHJvZmlsZU5hbWVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJKaG9uIERvZVwiXHJcbiAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5FbWFpbDwvRm9ybUxhYmVsPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJqaG9uQGdtYWlsLmNvbVwiXHJcbiAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgPEZvcm1IZWxwZXJUZXh0PldlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWwuPC9Gb3JtSGVscGVyVGV4dD5cclxuICAgICAgICA8Rm9ybUxhYmVsPlBhc3N3b3JkPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICA8Rm9ybUxhYmVsPkNlbnRyZSBOYW1lPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgbmFtZT1cImNlbnRlck5hbWVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJDZW50ZXIgTmFtZVwiXHJcbiAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5MaWNlbmNlPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLy8gbmFtZT1cImxpY2VuY2VcIlxyXG4gICAgICAgICAgLy8gcGxhY2Vob2xkZXI9XCJKaG9uIERvZVwiXHJcbiAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgPFNwYWNlciAvPlxyXG4gICAgICAgIDxIU3RhY2sgbXQ9XCI2XCIganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgbmFtZT1cIl9hY3Rpb25cIlxyXG4gICAgICAgICAgICB2YWx1ZT17XCJjcmVhdGV1c2VyXCJ9XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjb2xvclNjaGVtZT17XCJncmVlblwifVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDcmVhdGUgUHJvZmlsZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8U3BhY2VyIC8+XHJcbiAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuLy8gcHJlc2NyaXB0aW9uIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiIsICJpbXBvcnQgeyBjb21taXRTZXNzaW9uLCBnZXRTZXNzaW9uIH0gZnJvbSBcIn4vc2Vzc2lvbnNcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ3VzdG9ybVRva2VuLCBjcmVhdGVTZXNzaW9uQ29va2llQXV0aCB9IGZyb20gXCJ+L3V0aWxzL2F1dGguc2VydmVyXCJcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVBbmRTYXZlU2Vzc2lvbiA9IGFzeW5jIChpZDpzdHJpbmcscmVxdWVzdDpSZXF1ZXN0KSA9PiB7XHJcbiAgIFxyXG4gICAgbGV0IHRva2VuY3JlYXRlZCA9IGF3YWl0IGNyZWF0ZUN1c3Rvcm1Ub2tlbihpZClcclxuICAgYXdhaXQgY29uc29sZS5sb2codG9rZW5jcmVhdGVkLFwiVG9rZW4gQ3JlYXRlZFwiKTtcclxuICAgXHJcbi8vICAgIGxldCBzZXNzaW9uVG9rZW4gPSBhd2FpdCBjcmVhdGVTZXNzaW9uQ29va2llQXV0aCh0b2tlbmNyZWF0ZWQudG9TdHJpbmcoKSlcclxuLy8gICAgYXdhaXQgY29uc29sZS5sb2coc2Vzc2lvblRva2VuLFwiU2Vzc2lvbiBUb2tlbiBDcmVhdGVkXCIpO1xyXG4gICBcclxuXHJcbiAgIGNvbnN0IHNlc3Npb24gID0gYXdhaXQgZ2V0U2Vzc2lvbihcclxuICAgICAgIHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIilcclxuICAgKVxyXG5cclxuICAgYXdhaXQgc2Vzc2lvbi5zZXQoXCJ1c2VyU2Vzc2lvblwiLHRva2VuY3JlYXRlZC50b1N0cmluZygpKVxyXG4gICBcclxuICAgYXdhaXQgY29tbWl0U2Vzc2lvbihzZXNzaW9uKVxyXG4gICBjb25zb2xlLmxvZyhcIlNFU1NJT04gQ1JFQVRFRCBBTkQgQ09NTUlURURcIik7XHJcbiAgIFxyXG59IiwgImltcG9ydCB7IGZpcmVBdXRoIH0gZnJvbSBcIn4vdXRpbHMvZmlyZS5zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UgfSBmcm9tIFwicmVtaXhcIjtcclxuaW50ZXJmYWNlIFVzZXIge1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxuICBkaXNwbGF5TmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVVc2VyID0gYXN5bmMgKHsgZW1haWwsIHBhc3N3b3JkLCBkaXNwbGF5TmFtZSB9OiBVc2VyKSA9PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGZpcmVBdXRoLmNyZWF0ZVVzZXIoe1xyXG4gICAgZW1haWw6IGVtYWlsLFxyXG4gICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlVXNlciA9ICh7IGVtYWlsLCBwYXNzd29yZCwgZGlzcGxheU5hbWUsIHVpZCB9OiBhbnkpID0+IHtcclxuICBmaXJlQXV0aFxyXG4gICAgLnVwZGF0ZVVzZXIodWlkLCB7XHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBwYXNzd29yZCxcclxuICAgICAgZGlzcGxheU5hbWUsXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHVzZXJSZWNvcmQpID0+IHtcclxuICAgICAgLy8gU2VlIHRoZSBVc2VyUmVjb3JkIHJlZmVyZW5jZSBkb2MgZm9yIHRoZSBjb250ZW50cyBvZiB1c2VyUmVjb3JkLlxyXG4gICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSB1cGRhdGVkIHVzZXJcIiwgdXNlclJlY29yZC50b0pTT04oKSk7XHJcbiAgICAgIHJldHVybiB7IHN0YXR1czogXCJkb25lXCIsIHVzZXJSZWNvcmQgfTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgdXBkYXRpbmcgdXNlcjpcIiwgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdGF0dXM6IFwiZmFpbFwiLCBlcnJvciB9O1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGVVc2VyID0gYXN5bmMgKHVpZDogc3RyaW5nKSA9PiB7XHJcbiAgZmlyZUF1dGhcclxuICAgIC5kZWxldGVVc2VyKHVpZClcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgZGVsZXRlZCB1c2VyXCIpO1xyXG4gICAgICByZXR1cm4geyBzdGF0dXM6IFwiU3VjY2Vzc2Z1bGx5IGRlbGV0ZWQgdXNlclwiIH07XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGRlbGV0aW5nIHVzZXI6XCIsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcIkVycm9yIGRlbGV0aW5nIHVzZXI6XCIsIGVycm9yIH07XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUN1c3Rvcm1Ub2tlbiA9IGFzeW5jICh1aWQ6IHN0cmluZykgPT4ge1xyXG4gIHJldHVybiBhd2FpdCBmaXJlQXV0aC5jcmVhdGVDdXN0b21Ub2tlbih1aWQpO1xyXG59O1xyXG5cclxuY29uc3QgdmVyaWZ5VG9rZW4gPSAoaWRUb2tlbjogc3RyaW5nKSA9PiB7XHJcbiAgZmlyZUF1dGhcclxuICAgIC52ZXJpZnlJZFRva2VuKGlkVG9rZW4pXHJcbiAgICAudGhlbigoZGVjb2RlZFRva2VuKSA9PiB7XHJcbiAgICAgIC8vIEFwcGx5IExvZ2ljXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcIkdvdCBlcnJvciB2ZXJpZnlpbmcgdG9rZW5cIiwgZXJyIH07XHJcbiAgICB9KTtcclxufTtcclxuLy8gY29uc3QgY3JlYXRlU2Vzc2lvbkNvb2tpZSA9ICgpID0+IHtcclxuXHJcbi8vIH1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVTZXNzaW9uQ29va2llQXV0aCA9IGFzeW5jICh1c2VySWQ6IHN0cmluZykgPT4ge1xyXG4gIC8vIFNldCBzZXNzaW9uIGV4cGlyYXRpb24gdG8gNSBkYXlzLlxyXG4gIGNvbnN0IGV4cGlyZXNJbiA9IDYwICogNjAgKiAyNCAqIDUgKiAxMDAwO1xyXG4gIHJldHVybiBhd2FpdCBmaXJlQXV0aC5jcmVhdGVTZXNzaW9uQ29va2llKHVzZXJJZCwgeyBleHBpcmVzSW4gfSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjcmVhdGVVc2VyLCB1cGRhdGVVc2VyLCBkZWxldGVVc2VyLCBjcmVhdGVDdXN0b3JtVG9rZW4sIHZlcmlmeVRva2VuIH07XHJcbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic4Y2U5NmVjZScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtS1NMR0Y2SFQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUY1NDRFRVpTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSUUyTVlVSlEuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LU1XNkFaMkZPLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zWDdES0xYMi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvTG9naW4nOnsnaWQnOidyb3V0ZXMvTG9naW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonTG9naW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvTG9naW4tTlFSN05PWEouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTdUTjNFNU5aLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Rhc2hib2FyZCc6eydpZCc6J3JvdXRlcy9kYXNoYm9hcmQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonZGFzaGJvYXJkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Rhc2hib2FyZC1XM1BEUkxSQi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZGFzaGJvYXJkL2luZGV4Jzp7J2lkJzoncm91dGVzL2Rhc2hib2FyZC9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL2Rhc2hib2FyZCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9kYXNoYm9hcmQvaW5kZXgtSUpZQkRPQkguanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNYN0RLTFgyLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1YUjNHWFRFUi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstN1ROM0U1TlouanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LThDRTk2RUNFLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7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

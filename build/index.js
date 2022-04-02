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
var import_react13 = require("@chakra-ui/react");
var import_react14 = require("@chakra-ui/react");
var import_react15 = require("@chakra-ui/react");
var import_ai = require("react-icons/ai");
var import_react16 = require("@chakra-ui/react");
var import_react17 = require("react");

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
      duration: "",
      id: new Date().getTime()
    }
  ]);
  return /* @__PURE__ */ React.createElement(PresContext.Provider, {
    value: [data, setData]
  }, props.children);
};

// route:C:\Users\rudra\Desktop\o\letter.js\app\routes\dashboard\index.tsx
var import_react18 = require("@chakra-ui/react");

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

// app/components/MapFinder.tsx
init_react();
var import_react11 = require("@chakra-ui/react");
var import_react12 = __toESM(require("react"));
function MapFinder() {
  return /* @__PURE__ */ import_react12.default.createElement(import_react11.Box, null, /* @__PURE__ */ import_react12.default.createElement(import_react11.Text, null, "Maps"));
}
var MapFinder_default = MapFinder;

// route:C:\Users\rudra\Desktop\o\letter.js\app\routes\dashboard\index.tsx
function Index() {
  const [showPage, setShowPage] = (0, import_react17.useState)(1);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PresContextProvider, null, /* @__PURE__ */ React.createElement(import_react13.Button, {
    my: "3",
    mb: "3"
  }, "Create New", " "), /* @__PURE__ */ React.createElement(import_react13.Divider, null), /* @__PURE__ */ React.createElement(import_react13.Box, null, /* @__PURE__ */ React.createElement(import_react18.Breadcrumb, {
    py: "3"
  }, /* @__PURE__ */ React.createElement(import_react18.BreadcrumbItem, null, /* @__PURE__ */ React.createElement(import_react18.BreadcrumbLink, {
    color: "green",
    onClick: (e) => setShowPage(0)
  }, "Find Patient")), showPage === 1 ? /* @__PURE__ */ React.createElement(import_react18.BreadcrumbItem, null, /* @__PURE__ */ React.createElement(import_react18.BreadcrumbLink, {
    href: "#"
  }, "name of Patient")) : null), /* @__PURE__ */ React.createElement(MapFinder_default, null)), showPage === 1 ? /* @__PURE__ */ React.createElement(import_react13.VStack, {
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(import_react13.HStack, {
    w: "full",
    justifyContent: "space-between",
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(Viewer, null), /* @__PURE__ */ React.createElement(OldPrescriptions, null)), /* @__PURE__ */ React.createElement(import_react13.Button, {
    onClick: (e) => {
      window.print();
      console.log("print");
    }
  }, "Print \u{1F5A8}\uFE0F"), /* @__PURE__ */ React.createElement(import_react13.Button, null, "Search Nearest Store"), /* @__PURE__ */ React.createElement(import_react13.Button, null, "Save Prescription ")) : /* @__PURE__ */ React.createElement(FindPatient_default, null)));
}
var OldPrescriptions = () => {
  return /* @__PURE__ */ React.createElement(import_react13.VStack, {
    pl: "9",
    pt: "3",
    mr: "15",
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(import_react13.Heading, {
    fontSize: "2xl"
  }, "Old Prescriptions"), /* @__PURE__ */ React.createElement(import_react13.UnorderedList, null, /* @__PURE__ */ React.createElement(import_react13.ListItem, {
    listStyleType: "none"
  }, "date 17-15-87")));
};
var Viewer = () => {
  const [d, setD] = (0, import_react17.useContext)(PresContext);
  const addRow = (e) => {
    let oldData = [];
    d.map((oldD) => {
      oldData.push(oldD);
    });
    oldData.push({
      nameDrug: "",
      dosageForm: "",
      mg: "",
      duration: "",
      id: new Date().getTime()
    });
    setD(oldData);
    console.log(d);
  };
  return /* @__PURE__ */ React.createElement(import_react13.Box, null, /* @__PURE__ */ React.createElement(import_react13.Box, null, /* @__PURE__ */ React.createElement(PresBox, null), /* @__PURE__ */ React.createElement(import_react13.Button, {
    onClick: (e) => {
      addRow(e);
    }
  }, "Add +")));
};
var PresBox = () => {
  const [d, setD] = (0, import_react17.useContext)(PresContext);
  return /* @__PURE__ */ React.createElement(import_react13.Box, null, d.map((r) => {
    return /* @__PURE__ */ React.createElement(PresStack, {
      data: r
    });
  }));
};
var PresStack = ({ data }) => {
  const [preCon, setPreCon] = (0, import_react17.useContext)(PresContext);
  const updateData = (e, id, type) => {
    let oldD = preCon;
    let newList = [];
    oldD.map((oldd) => {
      if (oldd.id === id) {
        switch (type) {
          case "nameDrug":
            let tmpData = {
              nameDrug: e.target.value,
              dosageForm: oldd.dosageForm,
              mg: oldd.md,
              duration: oldd.duration,
              id: oldd.id
            };
            newList.push(tmpData);
            break;
          case "dosageForm":
            let tmpDataDose = {
              nameDrug: oldd.nameDrug,
              dosageForm: e,
              mg: oldd.md,
              duration: oldd.duration,
              id: oldd.id
            };
            newList.push(tmpDataDose);
            break;
        }
      } else {
        newList.push(oldd);
      }
    });
    console.log(newList, "NEW LIST");
    console.log(oldD, "OLD LIST");
    setPreCon(newList);
  };
  return /* @__PURE__ */ React.createElement(import_react13.Box, {
    py: "3",
    w: "full",
    display: "flex",
    justifyContent: "space-around"
  }, /* @__PURE__ */ React.createElement(import_react13.VStack, null, /* @__PURE__ */ React.createElement(import_react13.Text, null, "Drug"), /* @__PURE__ */ React.createElement(import_react13.Input, {
    mx: "1",
    type: "text",
    placeholder: "name of Drug",
    value: data.nameDrug,
    onChange: (e) => updateData(e, data.id, "nameDrug")
  })), /* @__PURE__ */ React.createElement(import_react13.Spacer, null), /* @__PURE__ */ React.createElement(import_react13.VStack, {
    mx: "2"
  }, /* @__PURE__ */ React.createElement(import_react13.Text, null, " Dosage Form"), /* @__PURE__ */ React.createElement(import_react14.Menu, null, /* @__PURE__ */ React.createElement(import_react14.MenuButton, {
    value: data.dosageForm,
    as: import_react13.Button,
    rightIcon: /* @__PURE__ */ React.createElement(import_ai.AiOutlineDown, null)
  }, data.dosageForm), /* @__PURE__ */ React.createElement(import_react14.MenuList, null, /* @__PURE__ */ React.createElement(import_react14.MenuItem, {
    onClick: (e) => updateData("ointments", data.id, "dosageForm")
  }, "Ointments"), /* @__PURE__ */ React.createElement(import_react14.MenuItem, {
    onClick: (e) => updateData("syrup", data.id, "dosageForm")
  }, "syrup"), /* @__PURE__ */ React.createElement(import_react14.MenuItem, {
    onClick: (e) => updateData("tablets", data.id, "dosageForm")
  }, "Tablet"), /* @__PURE__ */ React.createElement(import_react14.MenuItem, {
    onClick: (e) => updateData("powder", data.id, "dosageForm")
  }, "Powder"), /* @__PURE__ */ React.createElement(import_react14.MenuItem, {
    onClick: (e) => updateData("pills", data.id, "dosageForm")
  }, "Pills")))), /* @__PURE__ */ React.createElement(import_react13.Spacer, null), /* @__PURE__ */ React.createElement(import_react13.VStack, {
    mx: "2"
  }, /* @__PURE__ */ React.createElement(import_react13.Text, null, "Dose mg"), /* @__PURE__ */ React.createElement(import_react15.NumberInput, {
    mx: "3",
    defaultValue: 15,
    value: data.mg,
    precision: 2,
    step: 0.2
  }, /* @__PURE__ */ React.createElement(import_react15.NumberInputField, null), /* @__PURE__ */ React.createElement(import_react15.NumberInputStepper, null, /* @__PURE__ */ React.createElement(import_react15.NumberIncrementStepper, null), /* @__PURE__ */ React.createElement(import_react15.NumberDecrementStepper, null)))), /* @__PURE__ */ React.createElement(import_react13.VStack, {
    mx: "2"
  }, /* @__PURE__ */ React.createElement(import_react13.Text, null, "Duration"), /* @__PURE__ */ React.createElement(import_react13.HStack, null, /* @__PURE__ */ React.createElement(import_react16.PinInput, {
    defaultValue: data.duration
  }, /* @__PURE__ */ React.createElement(import_react16.PinInputField, null), /* @__PURE__ */ React.createElement(import_react16.PinInputField, null), /* @__PURE__ */ React.createElement(import_react16.PinInputField, null)))));
};
var dashboard_default2 = Index;

// route:C:\Users\rudra\Desktop\o\letter.js\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  loader: () => loader2
});
init_react();
var import_react19 = require("@chakra-ui/react");
var import_react20 = __toESM(require("react"));
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
  return /* @__PURE__ */ import_react20.default.createElement(import_react20.default.Fragment, null, /* @__PURE__ */ import_react20.default.createElement(import_react19.Heading, null, "Home Page"), JSON.stringify(post));
}
var routes_default = Index2;

// route:C:\Users\rudra\Desktop\o\letter.js\app\routes\Login.tsx
var Login_exports = {};
__export(Login_exports, {
  action: () => action,
  default: () => Login_default
});
init_react();
var import_react21 = require("@chakra-ui/react");
var import_react22 = __toESM(require("react"));
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
  const toast = (0, import_react21.useToast)();
  (0, import_react22.useEffect)(() => {
    if (ActionData != null) {
      console.log("NOT NULL 01");
      if (ActionData.status) {
        console.log("NOT NULL 01");
        (0, import_remix7.redirect)("/dashboard");
      }
    }
  }, [ActionData]);
  return /* @__PURE__ */ import_react22.default.createElement(import_react21.Container, {
    maxH: "container.lg"
  }, JSON.stringify(ActionData), /* @__PURE__ */ import_react22.default.createElement(import_react21.Box, {
    display: "flex",
    justifyContent: "center",
    mt: "30",
    alignItems: "center"
  }, /* @__PURE__ */ import_react22.default.createElement(import_react21.Box, {
    style: { width: "60vw" }
  }, /* @__PURE__ */ import_react22.default.createElement(import_react21.Tabs, null, /* @__PURE__ */ import_react22.default.createElement(import_react21.TabList, null, /* @__PURE__ */ import_react22.default.createElement(import_react21.Tab, null, "Login"), /* @__PURE__ */ import_react22.default.createElement(import_react21.Tab, null, "Create New User")), /* @__PURE__ */ import_react22.default.createElement(import_react21.TabPanels, null, /* @__PURE__ */ import_react22.default.createElement(import_react21.TabPanel, null, /* @__PURE__ */ import_react22.default.createElement(LoginUser, null)), /* @__PURE__ */ import_react22.default.createElement(import_react21.TabPanel, null, /* @__PURE__ */ import_react22.default.createElement(CreateNewUser, null)))))));
}
var LoginUser = () => {
  return /* @__PURE__ */ import_react22.default.createElement(import_react21.Box, null, /* @__PURE__ */ import_react22.default.createElement(import_remix7.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react22.default.createElement(import_react21.FormLabel, null, "Center"), /* @__PURE__ */ import_react22.default.createElement(import_react21.Input, {
    name: "center",
    type: "center",
    required: true,
    placeholder: "Digital Labs"
  }), /* @__PURE__ */ import_react22.default.createElement(import_react21.Spacer, null), /* @__PURE__ */ import_react22.default.createElement(import_react21.FormLabel, null, "Email"), /* @__PURE__ */ import_react22.default.createElement(import_react21.Input, {
    name: "email",
    type: "email",
    required: true,
    placeholder: "jhon@gmail.com"
  }), /* @__PURE__ */ import_react22.default.createElement(import_react21.FormHelperText, null, "We'll never share your email."), /* @__PURE__ */ import_react22.default.createElement(import_react21.FormLabel, null, "Password"), /* @__PURE__ */ import_react22.default.createElement(import_react21.Input, {
    name: "password",
    required: true,
    placeholder: "password",
    type: "password"
  }), /* @__PURE__ */ import_react22.default.createElement(import_react21.Spacer, null), /* @__PURE__ */ import_react22.default.createElement(import_react21.HStack, {
    mt: "6",
    justifyContent: "center",
    alignItems: "center"
  }, /* @__PURE__ */ import_react22.default.createElement(import_react21.Button, {
    name: "_action",
    value: "loginuser",
    type: "submit",
    colorScheme: "green"
  }, "Login"), /* @__PURE__ */ import_react22.default.createElement(import_react21.Spacer, null))));
};
var CreateNewUser = () => {
  const ActionData = (0, import_remix7.useActionData)();
  return /* @__PURE__ */ import_react22.default.createElement(import_react21.Box, null, /* @__PURE__ */ import_react22.default.createElement(import_remix7.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react22.default.createElement(import_react21.FormLabel, null, "Profile Name"), /* @__PURE__ */ import_react22.default.createElement(import_react21.Input, {
    type: "text",
    required: true,
    name: "profileName",
    placeholder: "Jhon Doe"
  }), /* @__PURE__ */ import_react22.default.createElement(import_react21.FormLabel, null, "Email"), /* @__PURE__ */ import_react22.default.createElement(import_react21.Input, {
    type: "email",
    required: true,
    name: "email",
    placeholder: "jhon@gmail.com"
  }), /* @__PURE__ */ import_react22.default.createElement(import_react21.FormHelperText, null, "We'll never share your email."), /* @__PURE__ */ import_react22.default.createElement(import_react21.FormLabel, null, "Password"), /* @__PURE__ */ import_react22.default.createElement(import_react21.Input, {
    required: true,
    placeholder: "password",
    name: "password",
    type: "password"
  }), /* @__PURE__ */ import_react22.default.createElement(import_react21.FormLabel, null, "Centre Name"), /* @__PURE__ */ import_react22.default.createElement(import_react21.Input, {
    type: "text",
    required: true,
    name: "centerName",
    placeholder: "Center Name"
  }), /* @__PURE__ */ import_react22.default.createElement(import_react21.FormLabel, null, "Licence"), /* @__PURE__ */ import_react22.default.createElement(import_react21.Input, {
    type: "file",
    required: true
  }), /* @__PURE__ */ import_react22.default.createElement(import_react21.Spacer, null), /* @__PURE__ */ import_react22.default.createElement(import_react21.HStack, {
    mt: "6",
    justifyContent: "center",
    alignItems: "center"
  }, /* @__PURE__ */ import_react22.default.createElement(import_react21.Button, {
    name: "_action",
    value: "createuser",
    type: "submit",
    colorScheme: "green"
  }, "Create Profile"), /* @__PURE__ */ import_react22.default.createElement(import_react21.Spacer, null))));
};
var Login_default = Login;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "24ff6547", "entry": { "module": "/build/entry.client-KSLGF6HT.js", "imports": ["/build/_shared/chunk-F544EEZS.js", "/build/_shared/chunk-IE2MYUJQ.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-MW6AZ2FO.js", "imports": ["/build/_shared/chunk-3X7DKLX2.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/Login": { "id": "routes/Login", "parentId": "root", "path": "Login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/Login-NQR7NOXJ.js", "imports": ["/build/_shared/chunk-7TN3E5NZ.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-W3PDRLRB.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard/index": { "id": "routes/dashboard/index", "parentId": "routes/dashboard", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/dashboard/index-PCTKQNIZ.js", "imports": ["/build/_shared/chunk-3X7DKLX2.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-XR3GXTER.js", "imports": ["/build/_shared/chunk-7TN3E5NZ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-24FF6547.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6QzpcXFVzZXJzXFxydWRyYVxcRGVza3RvcFxcb1xcbGV0dGVyLmpzXFxhcHBcXHJvb3QudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL05hdmJhci50c3giLCAicm91dGU6QzpcXFVzZXJzXFxydWRyYVxcRGVza3RvcFxcb1xcbGV0dGVyLmpzXFxhcHBcXHJvdXRlc1xcZGFzaGJvYXJkLnRzeCIsICIuLi9hcHAvc2Vzc2lvbnMudHMiLCAicm91dGU6QzpcXFVzZXJzXFxydWRyYVxcRGVza3RvcFxcb1xcbGV0dGVyLmpzXFxhcHBcXHJvdXRlc1xcZGFzaGJvYXJkXFxpbmRleC50c3giLCAiLi4vYXBwL2NvbnRleHQvcHJlc0NvbnRleHQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ZpbmRQYXRpZW50LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9NYXBGaW5kZXIudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccnVkcmFcXERlc2t0b3BcXG9cXGxldHRlci5qc1xcYXBwXFxyb3V0ZXNcXGluZGV4LnRzeCIsICIuLi9hcHAvdXRpbHMvZmlyZS5zZXJ2ZXIudHMiLCAicm91dGU6QzpcXFVzZXJzXFxydWRyYVxcRGVza3RvcFxcb1xcbGV0dGVyLmpzXFxhcHBcXHJvdXRlc1xcTG9naW4udHN4IiwgIi4uL2FwcC9sb2dpYy9zZXNzaW9uQXV0cmhMb2dpYy50cyIsICIuLi9hcHAvdXRpbHMvYXV0aC5zZXJ2ZXIudHMiLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gXCJjb21wcmVzc2lvblwiO1xyXG5pbXBvcnQgbW9yZ2FuIGZyb20gXCJtb3JnYW5cIjtcclxuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9leHByZXNzXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBzZXJ2ZXJCdWlsZCBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7XHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcblxyXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xyXG5cclxuLy8gaHR0cDovL2V4cHJlc3Nqcy5jb20vZW4vYWR2YW5jZWQvYmVzdC1wcmFjdGljZS1zZWN1cml0eS5odG1sI2F0LWEtbWluaW11bS1kaXNhYmxlLXgtcG93ZXJlZC1ieS1oZWFkZXJcclxuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XHJcblxyXG4vLyBSZW1peCBmaW5nZXJwcmludHMgaXRzIGFzc2V0cyBzbyB3ZSBjYW4gY2FjaGUgZm9yZXZlci5cclxuYXBwLnVzZShcclxuICBcIi9idWlsZFwiLFxyXG4gIGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgaW1tdXRhYmxlOiB0cnVlLCBtYXhBZ2U6IFwiMXlcIiB9KVxyXG4pO1xyXG5cclxuLy8gRXZlcnl0aGluZyBlbHNlIChsaWtlIGZhdmljb24uaWNvKSBpcyBjYWNoZWQgZm9yIGFuIGhvdXIuIFlvdSBtYXkgd2FudCB0byBiZVxyXG4vLyBtb3JlIGFnZ3Jlc3NpdmUgd2l0aCB0aGlzIGNhY2hpbmcuXHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBtYXhBZ2U6IFwiMWhcIiB9KSk7XHJcblxyXG5hcHAudXNlKG1vcmdhbihcInRpbnlcIikpO1xyXG5cclxuYXBwLmFsbChcclxuICBcIipcIixcclxuICBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XHJcbiAgICBidWlsZDogc2VydmVyQnVpbGQsXHJcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVlxyXG4gIH0pXHJcbik7XHJcblxyXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xyXG5cclxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYEV4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcclxufSk7XHJcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxydWRyYVxcXFxEZXNrdG9wXFxcXG9cXFxcbGV0dGVyLmpzXFxcXGFwcFxcXFxlbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJ1ZHJhXFxcXERlc2t0b3BcXFxcb1xcXFxsZXR0ZXIuanNcXFxcYXBwXFxcXHJvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJ1ZHJhXFxcXERlc2t0b3BcXFxcb1xcXFxsZXR0ZXIuanNcXFxcYXBwXFxcXHJvdXRlc1xcXFxkYXNoYm9hcmQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJ1ZHJhXFxcXERlc2t0b3BcXFxcb1xcXFxsZXR0ZXIuanNcXFxcYXBwXFxcXHJvdXRlc1xcXFxkYXNoYm9hcmRcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJ1ZHJhXFxcXERlc2t0b3BcXFxcb1xcXFxsZXR0ZXIuanNcXFxcYXBwXFxcXHJvdXRlc1xcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccnVkcmFcXFxcRGVza3RvcFxcXFxvXFxcXGxldHRlci5qc1xcXFxhcHBcXFxccm91dGVzXFxcXExvZ2luLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvZGFzaGJvYXJkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kYXNoYm9hcmRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiZGFzaGJvYXJkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9kYXNoYm9hcmQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Rhc2hib2FyZC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2Rhc2hib2FyZFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL0xvZ2luXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9Mb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJMb2dpblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XHJcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxyXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXHJcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXHJcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxyXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XHJcbikge1xyXG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxyXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cclxuICApO1xyXG5cclxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xyXG5cclxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcclxuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxyXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXHJcbiAgfSk7XHJcbn1cclxuIiwgImltcG9ydCB7XHJcbiAgTGlua3MsXHJcbiAgTGl2ZVJlbG9hZCxcclxuICBNZXRhLFxyXG4gIE91dGxldCxcclxuICBTY3JpcHRzLFxyXG4gICAgXHJcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXHJcbn0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyLCBDb2xvck1vZGVTY3JpcHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL2NvbXBvbmVudHMvTmF2YmFyXCI7XHJcbi8vIDEuIGltcG9ydCBgZXh0ZW5kVGhlbWVgIGZ1bmN0aW9uXHJcbmltcG9ydCB7IGV4dGVuZFRoZW1lLCB0eXBlIFRoZW1lQ29uZmlnIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuXHJcbi8vIDIuIEFkZCB5b3VyIGNvbG9yIG1vZGUgY29uZmlnXHJcbmNvbnN0IGNvbmZpZzogVGhlbWVDb25maWcgPSB7XHJcbiAgaW5pdGlhbENvbG9yTW9kZTogJ2RhcmsnLFxyXG4gIHVzZVN5c3RlbUNvbG9yTW9kZTogZmFsc2UsXHJcbn1cclxuXHJcbi8vIDMuIGV4dGVuZCB0aGUgdGhlbWVcclxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7IGNvbmZpZyB9KVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdGl0bGU6IFwiTmV3IFJlbWl4IEFwcFwiIH07XHJcbn07XHJcblxyXG5jb25zdCBEb2N1bWVudCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJvZHk+XHJcbiAgICAgICA8Q29sb3JNb2RlU2NyaXB0IGluaXRpYWxDb2xvck1vZGU9e1wiZGFya1wifSAvPlxyXG4gICAgICA8Q2hha3JhUHJvdmlkZXI+XHJcbiAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cclxuICAgICAgICA8U2NyaXB0cyAvPlxyXG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICA8L0NoYWtyYVByb3ZpZGVyPlxyXG4gICAgPC9ib2R5PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxyXG4gICAgICA8aGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8TWV0YSAvPlxyXG4gICAgICAgIDxMaW5rcyAvPlxyXG4gICAgICA8L2hlYWQ+XHJcbiAgICAgIDxEb2N1bWVudCAvPlxyXG4gICAgPC9odG1sPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IEJveCwgTGlzdEl0ZW0sIFVub3JkZXJlZExpc3QgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcclxuXHJcbmZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBiYWNrZ3JvdW5kPXtcImdyZWVuLjUwMFwifT5cclxuICAgICAgICA8VW5vcmRlcmVkTGlzdCBkaXNwbGF5PXtcImZsZXhcIn0+XHJcbiAgICAgICAgICA8TGlzdEl0ZW0gcD1cIjNcIiBjb2xvcj17XCJ3aGl0ZVwifSAgbGlzdFN0eWxlVHlwZT17XCJub25lXCJ9ID48TGluayB0bz1cIi9cIj5MYWJzIFx1RDgzRFx1REQyQzwvTGluaz48L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPExpc3RJdGVtIHA9XCIzXCIgY29sb3I9e1wid2hpdGVcIn0gbGlzdFN0eWxlVHlwZT17XCJub25lXCJ9ID48TGluayB0bz1cIi9kYXNoYm9hcmRcIj5EYXNoYm9hcmQ8L0xpbms+PC9MaXN0SXRlbT5cclxuICAgICAgICAgIDxMaXN0SXRlbSBwPVwiM1wiIGNvbG9yPXtcIndoaXRlXCJ9IGxpc3RTdHlsZVR5cGU9e1wibm9uZVwifSA+PExpbmsgdG89XCIvbG9naW5cIj5Mb2dpbjwvTGluaz48L0xpc3RJdGVtPlxyXG4gICAgICAgIDwvVW5vcmRlcmVkTGlzdD5cclxuICAgIDwvQm94PiAgXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiLCAiaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIENvbnRhaW5lcixcclxuICBEaXZpZGVyLFxyXG4gIEhlYWRpbmcsXHJcbiAgSFN0YWNrLFxyXG4gIExpc3RJdGVtLFxyXG4gIFRleHQsXHJcbiAgVW5vcmRlcmVkTGlzdCxcclxuICBWU3RhY2ssXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBqc29uLCBMaW5rLCBMaW5rcywgTG9hZGVyRnVuY3Rpb24sIE91dGxldCwgcmVkaXJlY3QsIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJ+L3Nlc3Npb25zXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlcjpMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7cmVxdWVzdH0pID0+IHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihcclxuICAgIHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIilcclxuICApO1xyXG4gIGlmIChzZXNzaW9uLmhhcyhcInVzZXJTZXNzaW9uXCIpKSB7XHJcbiAgICAvLyBSZWRpcmVjdCB0byB0aGUgaG9tZSBwYWdlIGlmIHRoZXkgYXJlIGFscmVhZHkgc2lnbmVkIGluLlxyXG4gICAgXHJcbiAgICByZXR1cm4ge3Nob3dQYWdlOnRydWV9XHJcbiAgfVxyXG4gIHJldHVybiB7c2hvd1BhZ2U6ZmFsc2V9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIERhc2hib2FyZCgpIHtcclxuXHJcbiAgY29uc3Qge3Nob3dQYWdlfSA9IHVzZUxvYWRlckRhdGEoKSBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICB7Lyoge1xyXG4gICAgICBKU09OLnN0cmluZ2lmeShzaG93UGFnZSlcclxuICAgIH0gKi99XHJcbiAgICB7XHJcbiAgICAgIHRydWUgPyAgPFByaXZhdGVQYWdlIC8+IDogPE5vdFNpZ25JblBhZ2UgLz5cclxuICAgIH1cclxuXHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBOb3RTaWduSW5QYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICAgIDxIZWFkaW5nPlVzZXIgTm90IExvZ2VkIGluPC9IZWFkaW5nPlxyXG4gICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCI+TG9naW48L0xpbms+XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBQcml2YXRlUGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4oXHJcbiAgICA8Q29udGFpbmVyIG1heFc9XCJvbnRhaW5lci5sZ1wiPlxyXG4gICAgPEhlYWRpbmcgcHk9XCIzXCI+UnggTGFiczwvSGVhZGluZz5cclxuICAgIFxyXG4gICAgICBcclxuICAgICAgey8qIDxEaXZpZGVyIHNpemU9e1wiM1wifSBjb2xvclNjaGVtZT1cImdyZWVuXCIgb3JpZW50YXRpb249J3ZlcnRpY2FsJyAvPiAqL31cclxuICAgICAgPE91dGxldCAvPlxyXG4gICAgXHJcbiAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xyXG4iLCAiaW1wb3J0IHtjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZX0gZnJvbSBcInJlbWl4XCJcclxuXHJcblxyXG5leHBvcnQgY29uc3Qge2dldFNlc3Npb24sY29tbWl0U2Vzc2lvbixkZXN0cm95U2Vzc2lvbn0gID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xyXG4gICAgY29va2llOntcclxuICAgICAgICBuYW1lOlwiX19zZXNzaW9uXCJcclxuICAgIH1cclxufSlcclxuXHJcblxyXG4iLCAiaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIERpdmlkZXIsXHJcbiAgSGVhZGluZyxcclxuICBIZWFkaW5nUHJvcHMsXHJcbiAgSFN0YWNrLFxyXG4gIElucHV0LFxyXG4gIExpc3RJdGVtLFxyXG4gIE9taXRDb21tb25Qcm9wcyxcclxuICBPcmRlcmVkTGlzdCxcclxuICBTcGFjZXIsXHJcbiAgVGV4dCxcclxuICBVbm9yZGVyZWRMaXN0LFxyXG4gIFZTdGFjayxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFNsYXRlRWRpdG9yIGZyb20gXCJ+L2NvbXBvbmVudHMvU2xhdGVFZGl0b3JcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgTWVudSxcclxuICBNZW51QnV0dG9uLFxyXG4gIE1lbnVMaXN0LFxyXG4gIE1lbnVJdGVtLFxyXG4gIE1lbnVJdGVtT3B0aW9uLFxyXG4gIE1lbnVHcm91cCxcclxuICBNZW51T3B0aW9uR3JvdXAsXHJcbiAgTWVudURpdmlkZXIsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBOdW1iZXJJbnB1dCxcclxuICBOdW1iZXJJbnB1dEZpZWxkLFxyXG4gIE51bWJlcklucHV0U3RlcHBlcixcclxuICBOdW1iZXJJbmNyZW1lbnRTdGVwcGVyLFxyXG4gIE51bWJlckRlY3JlbWVudFN0ZXBwZXIsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgQWlPdXRsaW5lRG93biwgQWlGaWxsV2FybmluZyB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5cclxuaW1wb3J0IHsgUGluSW5wdXQsIFBpbklucHV0RmllbGQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQcmVzQ29udGV4dCwgUHJlc0NvbnRleHRQcm92aWRlciB9IGZyb20gXCJ+L2NvbnRleHQvcHJlc0NvbnRleHRcIjtcclxuaW1wb3J0IHtcclxuICBCcmVhZGNydW1iLFxyXG4gIEJyZWFkY3J1bWJJdGVtLFxyXG4gIEJyZWFkY3J1bWJMaW5rLFxyXG4gIEJyZWFkY3J1bWJTZXBhcmF0b3IsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IEZpbmRQYXRpZW50IGZyb20gXCJ+L2NvbXBvbmVudHMvRmluZFBhdGllbnRcIjtcclxuaW1wb3J0IE1hcEZpbmRlciBmcm9tIFwifi9jb21wb25lbnRzL01hcEZpbmRlclwiO1xyXG5cclxuZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgLy8gY29uc3QgW2Qsc2V0RF0gPSB1c2VDb250ZXh0KFByZXNDb250ZXh0KVxyXG5cclxuICAvLyBjb25zdCBhZGRNYWluRGF0YSA9IChlOmFueSkgPT4ge1xyXG4gIC8vIGNvbnN0IG8gPSB7XHJcbiAgLy8gICBuYW1lRHJ1ZzogXCJcIixcclxuICAvLyAgIGRvc2FnZUZvcm06IFwiXCIsXHJcbiAgLy8gICBtZzogXCJcIixcclxuICAvLyAgIGR1cmF0aW9uOiBcIlwiLFxyXG4gIC8vIH1cclxuXHJcbiAgLy8gbGV0IGxhc3QgPSBkXHJcblxyXG4gIC8vIGxhc3QucHVzaChvKVxyXG5cclxuICAvLyBzZXREKGxhc3QpXHJcblxyXG4gIC8vIH1cclxuXHJcbiAgY29uc3QgW3Nob3dQYWdlLCBzZXRTaG93UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxQcmVzQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgIDxCdXR0b24gbXk9XCIzXCIgbWI9XCIzXCI+XHJcbiAgICAgICAgICBDcmVhdGUgTmV3e1wiIFwifVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPEJveD5cclxuICAgICAgICAgIDxCcmVhZGNydW1iIHB5PVwiM1wiPlxyXG4gICAgICAgICAgICA8QnJlYWRjcnVtYkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEJyZWFkY3J1bWJMaW5rIGNvbG9yPVwiZ3JlZW5cIiBvbkNsaWNrPXsoZSkgPT4gc2V0U2hvd1BhZ2UoMCl9PlxyXG4gICAgICAgICAgICAgICAgRmluZCBQYXRpZW50XHJcbiAgICAgICAgICAgICAgPC9CcmVhZGNydW1iTGluaz5cclxuICAgICAgICAgICAgPC9CcmVhZGNydW1iSXRlbT5cclxuICAgICAgICAgICAge3Nob3dQYWdlID09PSAxID8gKFxyXG4gICAgICAgICAgICAgIDxCcmVhZGNydW1iSXRlbT5cclxuICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iTGluayBocmVmPVwiI1wiPm5hbWUgb2YgUGF0aWVudDwvQnJlYWRjcnVtYkxpbms+XHJcbiAgICAgICAgICAgICAgPC9CcmVhZGNydW1iSXRlbT5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8L0JyZWFkY3J1bWI+XHJcbiAgICAgICAgICA8TWFwRmluZGVyIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAge3Nob3dQYWdlID09PSAxID8gKFxyXG4gICAgICAgICAgPFZTdGFjayBqdXN0aWZ5Q29udGVudD17XCJmbGV4LXN0YXJ0XCJ9IGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgIDxIU3RhY2tcclxuICAgICAgICAgICAgICB3PVwiZnVsbFwiXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1wic3BhY2UtYmV0d2VlblwifVxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxWaWV3ZXIgLz5cclxuXHJcbiAgICAgICAgICAgICAgPE9sZFByZXNjcmlwdGlvbnMgLz5cclxuICAgICAgICAgICAgPC9IU3RhY2s+XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5wcmludCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcmludFwiKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUHJpbnQgXHVEODNEXHVEREE4XHVGRTBGXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uPlNlYXJjaCBOZWFyZXN0IFN0b3JlPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uPlNhdmUgUHJlc2NyaXB0aW9uIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9WU3RhY2s+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxGaW5kUGF0aWVudCAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvUHJlc0NvbnRleHRQcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IE9sZFByZXNjcmlwdGlvbnMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxWU3RhY2sgcGw9XCI5XCIgcHQ9XCIzXCIgbXI9XCIxNVwiIGFsaWduSXRlbXM9e1wiZmxleC1zdGFydFwifT5cclxuICAgICAgPEhlYWRpbmcgZm9udFNpemU9XCIyeGxcIj5PbGQgUHJlc2NyaXB0aW9uczwvSGVhZGluZz5cclxuICAgICAgPFVub3JkZXJlZExpc3Q+XHJcbiAgICAgICAgPExpc3RJdGVtIGxpc3RTdHlsZVR5cGU9XCJub25lXCI+ZGF0ZSAxNy0xNS04NzwvTGlzdEl0ZW0+XHJcbiAgICAgIDwvVW5vcmRlcmVkTGlzdD5cclxuICAgIDwvVlN0YWNrPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBWaWV3ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2QsIHNldERdID0gdXNlQ29udGV4dChQcmVzQ29udGV4dCk7XHJcbiAgY29uc3QgYWRkUm93ID0gKGU6IGFueSkgPT4ge1xyXG4gICAgbGV0IG9sZERhdGEgPSBbXTtcclxuXHJcbiAgICBkLm1hcCgob2xkRDogYW55KSA9PiB7XHJcbiAgICAgIG9sZERhdGEucHVzaChvbGREKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG9sZERhdGEucHVzaCh7XHJcbiAgICAgIG5hbWVEcnVnOiBcIlwiLFxyXG4gICAgICBkb3NhZ2VGb3JtOiBcIlwiLFxyXG4gICAgICBtZzogXCJcIixcclxuICAgICAgZHVyYXRpb246IFwiXCIsXHJcbiAgICAgIGlkOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcclxuICAgIH0pO1xyXG5cclxuICAgIHNldEQob2xkRGF0YSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIDxCb3g+XHJcbiAgICAgICAgPFByZXNCb3ggLz5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBhZGRSb3coZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCArXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFByZXNCb3ggPSAoKSA9PiB7XHJcbiAgY29uc3QgW2QsIHNldERdID0gdXNlQ29udGV4dChQcmVzQ29udGV4dCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICB7LyogPFByZXNTdGFjayAvPlxyXG4gICAgICA8UHJlc1N0YWNrIC8+XHJcbiAgICAgIDxQcmVzU3RhY2sgLz4gKi99XHJcblxyXG4gICAgICB7ZC5tYXAoKHI6IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiA8UHJlc1N0YWNrIGRhdGE9e3J9IC8+O1xyXG4gICAgICB9KX1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBQcmVzU3RhY2sgPSAoeyBkYXRhIH06IGFueSkgPT4ge1xyXG4gIGNvbnN0IFtwcmVDb24sIHNldFByZUNvbl0gPSB1c2VDb250ZXh0KFByZXNDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgdXBkYXRlRGF0YSA9IChlOiBhbnksIGlkOiBhbnksIHR5cGU6IGFueSkgPT4ge1xyXG4gICAgbGV0IG9sZEQgPSBwcmVDb247XHJcbiAgICBsZXQgbmV3TGlzdDogYW55ID0gW107XHJcbiAgICBvbGRELm1hcCgob2xkZDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChvbGRkLmlkID09PSBpZCkge1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgY2FzZSBcIm5hbWVEcnVnXCI6XHJcbiAgICAgICAgICAgIGxldCB0bXBEYXRhID0ge1xyXG4gICAgICAgICAgICAgIG5hbWVEcnVnOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICBkb3NhZ2VGb3JtOiBvbGRkLmRvc2FnZUZvcm0sXHJcbiAgICAgICAgICAgICAgbWc6IG9sZGQubWQsXHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IG9sZGQuZHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgaWQ6IG9sZGQuaWQsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBuZXdMaXN0LnB1c2godG1wRGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZG9zYWdlRm9ybVwiOlxyXG4gICAgICAgICAgICAgIGxldCB0bXBEYXRhRG9zZSA9IHtcclxuICAgICAgICAgICAgICAgIG5hbWVEcnVnOiBvbGRkLm5hbWVEcnVnLFxyXG4gICAgICAgICAgICAgICAgZG9zYWdlRm9ybTogZSxcclxuICAgICAgICAgICAgICAgIG1nOiBvbGRkLm1kLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IG9sZGQuZHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICBpZDogb2xkZC5pZCxcclxuICAgICAgICAgICAgICB9O1xyXG4gIFxyXG4gICAgICAgICAgICAgIG5ld0xpc3QucHVzaCh0bXBEYXRhRG9zZSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdMaXN0LnB1c2gob2xkZCk7XHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKG5ld0xpc3QsXCJORVcgTElTVFwiKTtcclxuICAgIGNvbnNvbGUubG9nKG9sZEQsXCJPTEQgTElTVFwiKTtcclxuICAgIHNldFByZUNvbihuZXdMaXN0KVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHB5PVwiM1wiIHc9XCJmdWxsXCIgZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiPlxyXG4gICAgICB7LyogPFRleHQgY29sb3I9XCJyZWQgIFwiPjxBaUZpbGxXYXJuaW5nIC8+PC9UZXh0PiAqL31cclxuICAgICAgey8qIHtKU09OLnN0cmluZ2lmeShwcmVDb24pfSAqL31cclxuICAgICAgPFZTdGFjaz5cclxuICAgICAgICA8VGV4dD5EcnVnPC9UZXh0PlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgbXg9XCIxXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwibmFtZSBvZiBEcnVnXCJcclxuICAgICAgICAgIHZhbHVlPXtkYXRhLm5hbWVEcnVnfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVEYXRhKGUsIGRhdGEuaWQsIFwibmFtZURydWdcIil9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9WU3RhY2s+XHJcbiAgICAgIDxTcGFjZXIgLz5cclxuICAgICAgPFZTdGFjayBteD1cIjJcIj5cclxuICAgICAgICA8VGV4dD4gRG9zYWdlIEZvcm08L1RleHQ+XHJcbiAgICAgICAgPE1lbnVcclxuICAgICAgICAgIFxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxNZW51QnV0dG9uXHJcbiAgICAgICAgICAgIHZhbHVlPXtkYXRhLmRvc2FnZUZvcm19XHJcbiAgICAgICAgICAgIGFzPXtCdXR0b259XHJcbiAgICAgICAgICAgIHJpZ2h0SWNvbj17PEFpT3V0bGluZURvd24gLz59XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtkYXRhLmRvc2FnZUZvcm19XHJcbiAgICAgICAgICA8L01lbnVCdXR0b24+XHJcbiAgICAgICAgICA8TWVudUxpc3Q+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtlID0+IHVwZGF0ZURhdGEoXCJvaW50bWVudHNcIiwgZGF0YS5pZCwgXCJkb3NhZ2VGb3JtXCIpfT5PaW50bWVudHM8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17ZSA9PiB1cGRhdGVEYXRhKFwic3lydXBcIiwgZGF0YS5pZCwgXCJkb3NhZ2VGb3JtXCIpfT5zeXJ1cDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtlID0+IHVwZGF0ZURhdGEoXCJ0YWJsZXRzXCIsIGRhdGEuaWQsIFwiZG9zYWdlRm9ybVwiKX0+VGFibGV0PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2UgPT4gdXBkYXRlRGF0YShcInBvd2RlclwiLCBkYXRhLmlkLCBcImRvc2FnZUZvcm1cIil9PlBvd2RlcjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtlID0+IHVwZGF0ZURhdGEoXCJwaWxsc1wiLCBkYXRhLmlkLCBcImRvc2FnZUZvcm1cIil9PlBpbGxzPC9NZW51SXRlbT5cclxuICAgICAgICAgIDwvTWVudUxpc3Q+XHJcbiAgICAgICAgPC9NZW51PlxyXG4gICAgICA8L1ZTdGFjaz5cclxuICAgICAgPFNwYWNlciAvPlxyXG4gICAgICA8VlN0YWNrIG14PVwiMlwiPlxyXG4gICAgICAgIDxUZXh0PkRvc2UgbWc8L1RleHQ+XHJcbiAgICAgICAgPE51bWJlcklucHV0XHJcbiAgICAgICAgICBteD1cIjNcIlxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXsxNX1cclxuICAgICAgICAgIHZhbHVlPXtkYXRhLm1nfVxyXG4gICAgICAgICAgcHJlY2lzaW9uPXsyfVxyXG4gICAgICAgICAgc3RlcD17MC4yfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxOdW1iZXJJbnB1dEZpZWxkIC8+XHJcbiAgICAgICAgICA8TnVtYmVySW5wdXRTdGVwcGVyPlxyXG4gICAgICAgICAgICA8TnVtYmVySW5jcmVtZW50U3RlcHBlciAvPlxyXG4gICAgICAgICAgICA8TnVtYmVyRGVjcmVtZW50U3RlcHBlciAvPlxyXG4gICAgICAgICAgPC9OdW1iZXJJbnB1dFN0ZXBwZXI+XHJcbiAgICAgICAgPC9OdW1iZXJJbnB1dD5cclxuICAgICAgPC9WU3RhY2s+XHJcblxyXG4gICAgICB7LyogUGluIElucHV0ICovfVxyXG4gICAgICA8VlN0YWNrIG14PVwiMlwiPlxyXG4gICAgICAgIDxUZXh0PkR1cmF0aW9uPC9UZXh0PlxyXG4gICAgICAgIDxIU3RhY2s+XHJcbiAgICAgICAgICA8UGluSW5wdXQgZGVmYXVsdFZhbHVlPXtkYXRhLmR1cmF0aW9ufT5cclxuICAgICAgICAgICAgPFBpbklucHV0RmllbGQgLz5cclxuICAgICAgICAgICAgPFBpbklucHV0RmllbGQgLz5cclxuICAgICAgICAgICAgPFBpbklucHV0RmllbGQgLz5cclxuICAgICAgICAgIDwvUGluSW5wdXQ+XHJcbiAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgIDwvVlN0YWNrPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQcmVzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8YW55PihudWxsKTtcclxuLy8gaW1wb3J0IHV1aWQgZnJvbSBcInV1aWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQcmVzQ29udGV4dFByb3ZpZGVyID0gKHByb3BzOiBhbnkpID0+IHtcclxuICBcclxuXHJcbiAgY29uc3QgbWFpbkRhdGEgPSBbe1xyXG4gICAgICBuYW1lRHJ1ZzpcInBhcmFjZXRhbW9sXCIsXHJcbiAgICAgIGRvc2FnZUZvcm06XCJzeXJ1cFwiLFxyXG4gICAgICBtZzpcIjE2XCIsXHJcbiAgICAgIGR1cmF0aW9uIDpcIjEwMVwiLFxyXG4gIH0se1xyXG4gICAgICBuYW1lRHJ1ZzpcIndhcmZhcmluXCIsXHJcbiAgICAgIGRvc2FnZUZvcm06XCJsb3Rpb25cIixcclxuICAgICAgbWc6XCIxNlwiLFxyXG4gICAgICBkdXJhdGlvbiA6XCIxMTFcIlxyXG4gIH1dXHJcblxyXG4vLyAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG1haW5EYXRhKVxyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtcclxuICAgIHtcclxuICAgICAgbmFtZURydWc6IFwiXCIsXHJcbiAgICAgIGRvc2FnZUZvcm06IFwiXCIsXHJcbiAgICAgIG1nOiBcIlwiLFxyXG4gICAgICBkdXJhdGlvbjogXCJcIixcclxuICAgICAgaWQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICB9LFxyXG4gIF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByZXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbZGF0YSwgc2V0RGF0YV19PlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L1ByZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiIsICJpbXBvcnQgeyBCb3gsIEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5mdW5jdGlvbiBGaW5kUGF0aWVudCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCB3PVwiNjBcIj5cclxuICAgICAgICAgICAgIDxJbnB1dCBteT1cIjFcIiB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9J3BhdGllbnQgaWQnICAvPlxyXG4gICAgICAgICAgICAgPElucHV0IG15PVwiMVwiIHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj0nTmFtZScgIC8+XHJcbiAgICAgICAgICAgICA8SW5wdXQgbXk9XCIxXCIgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPSdQaG9uZSBOdW1iZXInICAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEJ1dHRvbiBteT1cIjNcIiAgPlNlYXJjaDwvQnV0dG9uPlxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaW5kUGF0aWVudCIsICJpbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSZWFjdE1hcGJveEdsIGZyb20gXCJyZWFjdC1tYXBib3gtZ2xcIjtcclxuXHJcbmZ1bmN0aW9uIE1hcEZpbmRlcigpIHtcclxuICAgIC8vIGNvbnN0IE1hcCA9IFJlYWN0TWFwYm94R2woe1xyXG4gICAgLy8gICAgIGFjY2Vzc1Rva2VuOiBcInBrLmV5SjFJam9pYTNKcGMyaHVZV1poYTJWaFkyTWlMQ0poSWpvaVkyd3habUU0YldsNU1ISnFlVE52Ykc0M05qUTJhR1k1TXlKOS5iYzdESDduNEUzazNsSUh5R1drYURnXCJcclxuICAgIC8vICAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggID5cclxuICAgICAgICA8VGV4dD5NYXBzPC9UZXh0PlxyXG4gICAgICAgIHsvKiA8TWFwICBzdHlsZT1cIm1hcGJveDovL3N0eWxlcy9tYXBib3gvc3RyZWV0cy12OFwiLz4gKi99XHJcblxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXBGaW5kZXIiLCAiaW1wb3J0IHsgSGVhZGluZyB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZmlyZXN0b3JlIH0gZnJvbSBcIn4vdXRpbHMvZmlyZS5zZXJ2ZXJcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgY29sbGVjdGlvblVzZXIgPSBmaXJlc3RvcmUuY29sbGVjdGlvbihcInVzZXJzXCIpO1xyXG5cclxuICBsZXQgcmVzID0gYXdhaXQgY29sbGVjdGlvblVzZXJcclxuICAgIC5kb2MoKVxyXG4gICAgLnNldCh7IGZpcnN0OiBcIkpoc29uXCIsIGxhc3Q6IFwiRG9lXCIsIGVtYWlsOiBcInJ1ZHJhQGdtaWFsLmNvbVwiIH0pO1xyXG5cclxuXHJcbiAgXHJcblxyXG4gIHJldHVybiB7bXNnOlwic2F2ZWQgZGF0YVwiLHJlc31cclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBJbmRleCgpIHtcclxuXHJcbiAgY29uc3QgcG9zdCA9IHVzZUxvYWRlckRhdGEoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRpbmc+SG9tZSBQYWdlPC9IZWFkaW5nPlxyXG4gICAgICB7XHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkocG9zdClcclxuICAgICAgfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsICJpbXBvcnQgeyBpbml0aWFsaXplQXBwLCBhcHBsaWNhdGlvbkRlZmF1bHQsIGNlcnQgfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vYXBwXCI7XHJcbmxldCBhZG1pbiA9IHJlcXVpcmUoXCJmaXJlYmFzZS1hZG1pblwiKVxyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vYXV0aFwiO1xyXG5cclxuXHJcbmNvbnN0IGE6YW55ID0ge1xyXG4gIFwidHlwZVwiOiBcInNlcnZpY2VfYWNjb3VudFwiLFxyXG4gIFwicHJvamVjdF9pZFwiOiBcInJ1ZGhyYWpvc2hpY29tXCIsXHJcbiAgXCJwcml2YXRlX2tleV9pZFwiOiBcIjlmZWYzNmIyNzlhNDE5NDhlNjY0MzQzNGRmOTczMjA4MWE1YmQyOTVcIixcclxuICBcInByaXZhdGVfa2V5XCI6IFwiLS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tXFxuTUlJRXZRSUJBREFOQmdrcWhraUc5dzBCQVFFRkFBU0NCS2N3Z2dTakFnRUFBb0lCQVFEQmFQYlNJSTNUaXZzK1xcbkQ5aUVpT2VtN2VRYzNuRHJ1QlVEMExNMVFRMmJtTUMzVVFZZ1d5TWlIL3VucGhOc0kyN2NUOE1wVXYxN251M1JcXG40SmJ0MnM1M1plRURzREVyS1pVSG5MenhiK2U4emI3bEFZT3NNekthdHFTTlB1T0hod0I4YVNTSkFxd0ZDMXVwXFxuV24rblU3N09WdmxIYmJoQ1FvK3dHc3pLOVNpczBNY2pNWVhxd3Z0eTI1UjZsM3dya3NSOWRlUG1mS0pKSlYwOVxcbjloTjduYXN2dTBIbWczZzlTVXlId1ZWYURXMGcvM1VWQTlzeTJCZG9TZDVpOHNlMUwreU5RbmMrWWhWcllZTFNcXG5wVGRMS3ZaTmgrZ0x2RitEdXF5Y2l5MktxYkVNdlM2U1JUMkFybVllRytxUWhsK1dWUndMU0JzUUFGNHdRQWdJXFxubnU3M1o4SnRBZ01CQUFFQ2dnRUFHQ0p5K2xHWm9SWXN0OWZlV3R1Q25LLyswU05veitGT3JnVXk5NmhBZkhRWlxcblNFYlNEdU9RaE1lYzdaU3B3OHJBSUxuTFRyTE9jc2lvUUpKWUF5SlV0VTEvUUtpUjJpTDhOOUQxT3VPTjlWOXZcXG5QTUJ0bitWYm9UYTlYZXJGRmJwZzh5VmpxNzBybmcyR3lLRkVZS3J3bW1yNy9FL1N1R0g1OEMzSDlHT1hTY2trXFxuSHVLNmpTb1lsYUN1elR6enJUWHBacUEwQ0x0S3E3KzBBWXpOV3N1VmozTm9SUE1LdVN0WDNmNU5qVmpsbWFrZlxcbk94ZE80VXk5U2RrM1VLMWM4TTIzVzJySjZQeGlHVXRPUkRBYTIzd21ydlgvdjFINmZwSWdJNW5DZ1VuY0w2VjVcXG43NHIzbVliMGVGSk1PeFpZOWVCWGEyMy94Z2hHU1lNdWpSa3hRdW5NQVFLQmdRRG1naFB4eUg3ejhoYVFldkhKXFxuMzhGdGNUUlg5dU9DcmVieUdIV3VJak1VL3FFejdIY0FUUVBTUlJvL05KRzVuclBqRVM2NzNsZzMwTG8zTTZFVVxcbnJaemgxRFdMajhsUkVFZ3BNQ2oycUVLMFowTENvUHFNb3pDY3dSWm1MYjVaTGtQRXViUWQrMjdiSWNHK0I5dGJcXG54dHlXWGhpcUpFVzBRTTZsaGJOVzV3NllnUUtCZ1FEV3pKbk8vTjU5Rm14WnhjNWN4Um14ejZvMGNkZC9yUE1zXFxuTCs1K1I0dEJvOVNCeWR6bHZwODVPNEtaMGVPSlcyVEY2TlQvZ2JheTMwci8xdldkelBRajZ3R2NIWmI2NVlxdVxcbnU4UlgwRlFQdDJzd1pRR0FOL3RidnRrU1pWd2RhTmltMnhzQ3RLL2NKYVlaVlMvZGpQRUFCSXBQREtpdmc1WnlcXG5ONHlycUJNVDdRS0JnUUNKZkJKTFJ1dTVzcTRVdE0vY09aSlVKWTR6M1RUcnI2K3N2RHdNaGFkMElUK2pDYW9jXFxueXRLNXFxK3gvVGZodjYvSmdta2Vjc3FwVjl5SnFraXNYYlRSMlZHcWtUTmhIMVg3QXhlYnJ0WkNaY2lpNzRNaFxcbk9RQjRybzRlbWJBTDN4VmFrK3pEYVVGQWdFemZmQzR3K2xaOWRWZyt1dTI4U2w4MnlKMGoreUp3Z1FLQmdGdmJcXG5IeU5QSys0ZU9yT2hUWUNLb1ZSUzFCeWRXbVMxRjBDY05zYzEzUzF5M0J1c3NaUm1FajB0WDhwYjRZd0owMngzXFxuQnk5RXoxWnErdTJ4aFZPNEkrZUFSaTMyMFd2MTRYcWJ2WGs0RTlxc3UxLzBzZEdkSHhhNjVLVmpSeU1raFJIRlxcbnZTVkpFN04zUGpLekpVYi9VTWlMS0lKcGpYR1JPak1aNGtRK0dmcDVBb0dBUjh4dCsrTW96Vk9iOXZ0RjF1VExcXG4yM0ZscUhCdVNxblJNcXNnaVd0UklBKzlNKzAzeFJEUEo4ek8wbUltbVArdHB5UzZqREdnR1pFMk1jcXgvcEUvXFxuSUNhTVZQR2pzWFlkYnAyNzBjMGsyZkgyWi90VlhBZ3JIaHpHZ01CZ3ppY2NXSDY3Um44bWdqeDNUMmFxbFhkdFxcbmdOTUFPUmlDSU8rTFMrY2V4WVJZRkxrPVxcbi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS1cXG5cIixcclxuICBcImNsaWVudF9lbWFpbFwiOiBcImZpcmViYXNlLWFkbWluc2RrLXh1ZDE4QHJ1ZGhyYWpvc2hpY29tLmlhbS5nc2VydmljZWFjY291bnQuY29tXCIsXHJcbiAgXCJjbGllbnRfaWRcIjogXCIxMTEwOTczMjM3NDU3NDA1MTU5ODlcIixcclxuICBcImF1dGhfdXJpXCI6IFwiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL2F1dGhcIixcclxuICBcInRva2VuX3VyaVwiOiBcImh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tL3Rva2VuXCIsXHJcbiAgXCJhdXRoX3Byb3ZpZGVyX3g1MDlfY2VydF91cmxcIjogXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvY2VydHNcIixcclxuICBcImNsaWVudF94NTA5X2NlcnRfdXJsXCI6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vcm9ib3QvdjEvbWV0YWRhdGEveDUwOS9maXJlYmFzZS1hZG1pbnNkay14dWQxOCU0MHJ1ZGhyYWpvc2hpY29tLmlhbS5nc2VydmljZWFjY291bnQuY29tXCJcclxufVxyXG5pbml0aWFsaXplQXBwKHtjcmVkZW50aWFsOmNlcnQoYSl9KTtcclxuZXhwb3J0IGNvbnN0IGZpcmVzdG9yZSA9IGdldEZpcmVzdG9yZSgpO1xyXG5leHBvcnQgY29uc3QgZmlyZUF1dGggPSBnZXRBdXRoKCk7XHJcbiIsICJpbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgQ29udGFpbmVyLFxyXG4gIEZvcm1IZWxwZXJUZXh0LFxyXG4gIEZvcm1MYWJlbCxcclxuICBIZWFkaW5nLFxyXG4gIEhTdGFjayxcclxuICBJbnB1dCxcclxuICBTcGFjZXIsXHJcbiAgVGFiLFxyXG4gIFRhYkxpc3QsXHJcbiAgVGFiUGFuZWwsXHJcbiAgVGFiUGFuZWxzLFxyXG4gIFRhYnMsXHJcbiAgdXNlVG9hc3QsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsganNvbiB9IGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vYXV0aFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEFjdGlvbkZ1bmN0aW9uLFxyXG4gIEZvcm0sXHJcbiAgcmVkaXJlY3QsXHJcbiAgdXNlQWN0aW9uRGF0YSxcclxuICB1c2VTdWJtaXQsXHJcbiAgdXNlVHJhbnNpdGlvbixcclxufSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgY3JlYXRlQW5kU2F2ZVNlc3Npb24gfSBmcm9tIFwifi9sb2dpYy9zZXNzaW9uQXV0cmhMb2dpY1wiO1xyXG5pbXBvcnQgeyBjb21taXRTZXNzaW9uIH0gZnJvbSBcIn4vc2Vzc2lvbnNcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ3VzdG9ybVRva2VuLCBjcmVhdGVVc2VyIH0gZnJvbSBcIn4vdXRpbHMvYXV0aC5zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgZmlyZUF1dGgsIGZpcmVzdG9yZSB9IGZyb20gXCJ+L3V0aWxzL2ZpcmUuc2VydmVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBsZXQgZm9ybUFjdGlvbiA9IGZvcm0uZ2V0KFwiX2FjdGlvblwiKTtcclxuICBsZXQgZW1haWwgPSBmb3JtLmdldChcImVtYWlsXCIpO1xyXG4gIGxldCBwYXNzd29yZCA9IGZvcm0uZ2V0KFwicGFzc3dvcmRcIik7XHJcbiAgbGV0IHByb2ZpbGVOYW1lID0gZm9ybS5nZXQoXCJwcm9maWxlTmFtZVwiKTtcclxuXHJcbiAgY29uc3QgY29sID0gZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKTtcclxuICBsZXQgcmVzIDogYW55O1xyXG4gIGlmIChmb3JtQWN0aW9uID09PSBcImNyZWF0ZXVzZXJcIikge1xyXG4gICAgaWYgKGVtYWlsICYmIHBhc3N3b3JkICYmIHByb2ZpbGVOYW1lKSB7XHJcbiAgICAgIGF3YWl0IGNyZWF0ZVVzZXIoe1xyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBwcm9maWxlTmFtZSxcclxuICAgICAgfSkudGhlbihhc3luYyAodXNlclJlY29yZCkgPT4ge1xyXG4gICAgICAgIHJlcyA9IHsgc3RhdHVzOiB0cnVlLCBpZDogdXNlclJlY29yZC51aWQgfTtcclxuICAgICAgICBhd2FpdCBjcmVhdGVBbmRTYXZlU2Vzc2lvbih1c2VyUmVjb3JkLnVpZCxyZXF1ZXN0KVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMgPyByZWRpcmVjdChcIi9kYXNoYm9hcmRcIikgOiByZXNcclxufTtcclxuXHJcbmZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGNvbnN0IEFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhKCk7XHJcbiAgY29uc3QgdG9hc3QgPSB1c2VUb2FzdCgpO1xyXG5cclxudXNlRWZmZWN0KCgpID0+IHtcclxuICBpZihBY3Rpb25EYXRhICE9IG51bGwpe1xyXG4gICAgY29uc29sZS5sb2coXCJOT1QgTlVMTCAwMVwiKTtcclxuICAgIFxyXG4gICAgIGlmKEFjdGlvbkRhdGEuc3RhdHVzICl7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcIk5PVCBOVUxMIDAxXCIpO1xyXG4gICAgICAgcmVkaXJlY3QgKFwiL2Rhc2hib2FyZFwiKVxyXG4gICAgIH1cclxuICB9XHJcbiBcclxufSxbQWN0aW9uRGF0YV0pXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgbWF4SD1cImNvbnRhaW5lci5sZ1wiPlxyXG4gICAgICB7SlNPTi5zdHJpbmdpZnkoQWN0aW9uRGF0YSl9XHJcblxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgZGlzcGxheT17XCJmbGV4XCJ9XHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgIG10PVwiMzBcIlxyXG4gICAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN0eWxlPXt7IHdpZHRoOiBcIjYwdndcIiB9fT5cclxuICAgICAgICAgIDxUYWJzPlxyXG4gICAgICAgICAgICA8VGFiTGlzdD5cclxuICAgICAgICAgICAgICA8VGFiPkxvZ2luPC9UYWI+XHJcbiAgICAgICAgICAgICAgPFRhYj5DcmVhdGUgTmV3IFVzZXI8L1RhYj5cclxuICAgICAgICAgICAgPC9UYWJMaXN0PlxyXG4gICAgICAgICAgICA8VGFiUGFuZWxzPlxyXG4gICAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgIDxMb2dpblVzZXIgLz5cclxuICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgIDxDcmVhdGVOZXdVc2VyIC8+XHJcbiAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgPC9UYWJQYW5lbHM+XHJcbiAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgTG9naW5Vc2VyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgIDxGb3JtTGFiZWw+Q2VudGVyPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBuYW1lPVwiY2VudGVyXCJcclxuICAgICAgICAgIHR5cGU9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlnaXRhbCBMYWJzXCJcclxuICAgICAgICA+PC9JbnB1dD5cclxuXHJcbjxTcGFjZXIgLz5cclxuICAgICAgICB7LyogQWxsIE9sZCBpbnB1dHMgRG93biovfVxyXG4gICAgICAgIDxGb3JtTGFiZWw+RW1haWw8L0Zvcm1MYWJlbD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiamhvbkBnbWFpbC5jb21cIlxyXG4gICAgICAgID48L0lucHV0PlxyXG4gICAgICAgIDxGb3JtSGVscGVyVGV4dD5XZSdsbCBuZXZlciBzaGFyZSB5b3VyIGVtYWlsLjwvRm9ybUhlbHBlclRleHQ+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5QYXNzd29yZDwvRm9ybUxhYmVsPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgPFNwYWNlciAvPlxyXG4gICAgICAgIDxIU3RhY2sgbXQ9XCI2XCIganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgbmFtZT1cIl9hY3Rpb25cIlxyXG4gICAgICAgICAgICB2YWx1ZT17XCJsb2dpbnVzZXJcIn1cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNvbG9yU2NoZW1lPXtcImdyZWVuXCJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxTcGFjZXIgLz5cclxuICAgICAgICA8L0hTdGFjaz5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IENyZWF0ZU5ld1VzZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgQWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGEoKTtcclxuXHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5Qcm9maWxlIE5hbWU8L0Zvcm1MYWJlbD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBuYW1lPVwicHJvZmlsZU5hbWVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJKaG9uIERvZVwiXHJcbiAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5FbWFpbDwvRm9ybUxhYmVsPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJqaG9uQGdtYWlsLmNvbVwiXHJcbiAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgPEZvcm1IZWxwZXJUZXh0PldlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWwuPC9Gb3JtSGVscGVyVGV4dD5cclxuICAgICAgICA8Rm9ybUxhYmVsPlBhc3N3b3JkPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICA8Rm9ybUxhYmVsPkNlbnRyZSBOYW1lPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgbmFtZT1cImNlbnRlck5hbWVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJDZW50ZXIgTmFtZVwiXHJcbiAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5MaWNlbmNlPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLy8gbmFtZT1cImxpY2VuY2VcIlxyXG4gICAgICAgICAgLy8gcGxhY2Vob2xkZXI9XCJKaG9uIERvZVwiXHJcbiAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgPFNwYWNlciAvPlxyXG4gICAgICAgIDxIU3RhY2sgbXQ9XCI2XCIganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgbmFtZT1cIl9hY3Rpb25cIlxyXG4gICAgICAgICAgICB2YWx1ZT17XCJjcmVhdGV1c2VyXCJ9XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjb2xvclNjaGVtZT17XCJncmVlblwifVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDcmVhdGUgUHJvZmlsZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8U3BhY2VyIC8+XHJcbiAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuLy8gcHJlc2NyaXB0aW9uIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiIsICJpbXBvcnQgeyBjb21taXRTZXNzaW9uLCBnZXRTZXNzaW9uIH0gZnJvbSBcIn4vc2Vzc2lvbnNcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ3VzdG9ybVRva2VuLCBjcmVhdGVTZXNzaW9uQ29va2llQXV0aCB9IGZyb20gXCJ+L3V0aWxzL2F1dGguc2VydmVyXCJcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVBbmRTYXZlU2Vzc2lvbiA9IGFzeW5jIChpZDpzdHJpbmcscmVxdWVzdDpSZXF1ZXN0KSA9PiB7XHJcbiAgIFxyXG4gICAgbGV0IHRva2VuY3JlYXRlZCA9IGF3YWl0IGNyZWF0ZUN1c3Rvcm1Ub2tlbihpZClcclxuICAgYXdhaXQgY29uc29sZS5sb2codG9rZW5jcmVhdGVkLFwiVG9rZW4gQ3JlYXRlZFwiKTtcclxuICAgXHJcbi8vICAgIGxldCBzZXNzaW9uVG9rZW4gPSBhd2FpdCBjcmVhdGVTZXNzaW9uQ29va2llQXV0aCh0b2tlbmNyZWF0ZWQudG9TdHJpbmcoKSlcclxuLy8gICAgYXdhaXQgY29uc29sZS5sb2coc2Vzc2lvblRva2VuLFwiU2Vzc2lvbiBUb2tlbiBDcmVhdGVkXCIpO1xyXG4gICBcclxuXHJcbiAgIGNvbnN0IHNlc3Npb24gID0gYXdhaXQgZ2V0U2Vzc2lvbihcclxuICAgICAgIHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIilcclxuICAgKVxyXG5cclxuICAgYXdhaXQgc2Vzc2lvbi5zZXQoXCJ1c2VyU2Vzc2lvblwiLHRva2VuY3JlYXRlZC50b1N0cmluZygpKVxyXG4gICBcclxuICAgYXdhaXQgY29tbWl0U2Vzc2lvbihzZXNzaW9uKVxyXG4gICBjb25zb2xlLmxvZyhcIlNFU1NJT04gQ1JFQVRFRCBBTkQgQ09NTUlURURcIik7XHJcbiAgIFxyXG59IiwgImltcG9ydCB7IGZpcmVBdXRoIH0gZnJvbSBcIn4vdXRpbHMvZmlyZS5zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UgfSBmcm9tIFwicmVtaXhcIjtcclxuaW50ZXJmYWNlIFVzZXIge1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxuICBkaXNwbGF5TmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVVc2VyID0gYXN5bmMgKHsgZW1haWwsIHBhc3N3b3JkLCBkaXNwbGF5TmFtZSB9OiBVc2VyKSA9PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGZpcmVBdXRoLmNyZWF0ZVVzZXIoe1xyXG4gICAgZW1haWw6IGVtYWlsLFxyXG4gICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlVXNlciA9ICh7IGVtYWlsLCBwYXNzd29yZCwgZGlzcGxheU5hbWUsIHVpZCB9OiBhbnkpID0+IHtcclxuICBmaXJlQXV0aFxyXG4gICAgLnVwZGF0ZVVzZXIodWlkLCB7XHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBwYXNzd29yZCxcclxuICAgICAgZGlzcGxheU5hbWUsXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHVzZXJSZWNvcmQpID0+IHtcclxuICAgICAgLy8gU2VlIHRoZSBVc2VyUmVjb3JkIHJlZmVyZW5jZSBkb2MgZm9yIHRoZSBjb250ZW50cyBvZiB1c2VyUmVjb3JkLlxyXG4gICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSB1cGRhdGVkIHVzZXJcIiwgdXNlclJlY29yZC50b0pTT04oKSk7XHJcbiAgICAgIHJldHVybiB7IHN0YXR1czogXCJkb25lXCIsIHVzZXJSZWNvcmQgfTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgdXBkYXRpbmcgdXNlcjpcIiwgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdGF0dXM6IFwiZmFpbFwiLCBlcnJvciB9O1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGVVc2VyID0gYXN5bmMgKHVpZDogc3RyaW5nKSA9PiB7XHJcbiAgZmlyZUF1dGhcclxuICAgIC5kZWxldGVVc2VyKHVpZClcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgZGVsZXRlZCB1c2VyXCIpO1xyXG4gICAgICByZXR1cm4geyBzdGF0dXM6IFwiU3VjY2Vzc2Z1bGx5IGRlbGV0ZWQgdXNlclwiIH07XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGRlbGV0aW5nIHVzZXI6XCIsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcIkVycm9yIGRlbGV0aW5nIHVzZXI6XCIsIGVycm9yIH07XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUN1c3Rvcm1Ub2tlbiA9IGFzeW5jICh1aWQ6IHN0cmluZykgPT4ge1xyXG4gIHJldHVybiBhd2FpdCBmaXJlQXV0aC5jcmVhdGVDdXN0b21Ub2tlbih1aWQpO1xyXG59O1xyXG5cclxuY29uc3QgdmVyaWZ5VG9rZW4gPSAoaWRUb2tlbjogc3RyaW5nKSA9PiB7XHJcbiAgZmlyZUF1dGhcclxuICAgIC52ZXJpZnlJZFRva2VuKGlkVG9rZW4pXHJcbiAgICAudGhlbigoZGVjb2RlZFRva2VuKSA9PiB7XHJcbiAgICAgIC8vIEFwcGx5IExvZ2ljXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcIkdvdCBlcnJvciB2ZXJpZnlpbmcgdG9rZW5cIiwgZXJyIH07XHJcbiAgICB9KTtcclxufTtcclxuLy8gY29uc3QgY3JlYXRlU2Vzc2lvbkNvb2tpZSA9ICgpID0+IHtcclxuXHJcbi8vIH1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVTZXNzaW9uQ29va2llQXV0aCA9IGFzeW5jICh1c2VySWQ6IHN0cmluZykgPT4ge1xyXG4gIC8vIFNldCBzZXNzaW9uIGV4cGlyYXRpb24gdG8gNSBkYXlzLlxyXG4gIGNvbnN0IGV4cGlyZXNJbiA9IDYwICogNjAgKiAyNCAqIDUgKiAxMDAwO1xyXG4gIHJldHVybiBhd2FpdCBmaXJlQXV0aC5jcmVhdGVTZXNzaW9uQ29va2llKHVzZXJJZCwgeyBleHBpcmVzSW4gfSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjcmVhdGVVc2VyLCB1cGRhdGVVc2VyLCBkZWxldGVVc2VyLCBjcmVhdGVDdXN0b3JtVG9rZW4sIHZlcmlmeVRva2VuIH07XHJcbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOicyNGZmNjU0NycsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtS1NMR0Y2SFQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUY1NDRFRVpTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSUUyTVlVSlEuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LU1XNkFaMkZPLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zWDdES0xYMi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvTG9naW4nOnsnaWQnOidyb3V0ZXMvTG9naW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonTG9naW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvTG9naW4tTlFSN05PWEouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTdUTjNFNU5aLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Rhc2hib2FyZCc6eydpZCc6J3JvdXRlcy9kYXNoYm9hcmQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonZGFzaGJvYXJkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Rhc2hib2FyZC1XM1BEUkxSQi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZGFzaGJvYXJkL2luZGV4Jzp7J2lkJzoncm91dGVzL2Rhc2hib2FyZC9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL2Rhc2hib2FyZCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9kYXNoYm9hcmQvaW5kZXgtUENUS1FOSVouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNYN0RLTFgyLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1YUjNHWFRFUi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstN1ROM0U1TlouanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTI0RkY2NTQ3LmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtB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

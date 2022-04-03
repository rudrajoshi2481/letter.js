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
      duration: "",
      id: new Date().getTime()
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
    pt: "3",
    border: "3px",
    borderWidth: "2px",
    borderStyle: "dashed",
    style: { width: "70vw", minHeight: "40vh" },
    p: "3",
    mt: "3",
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
var import_bi = require("react-icons/bi");
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
  }, /* @__PURE__ */ React.createElement(import_react11.HStack, null, "  ", /* @__PURE__ */ React.createElement(import_bi.BiArrowBack, null), "  ", /* @__PURE__ */ React.createElement(import_react11.Text, null, " Find Patient")))), showPage === 1 ? /* @__PURE__ */ React.createElement(import_react16.BreadcrumbItem, null, /* @__PURE__ */ React.createElement(import_react16.BreadcrumbLink, {
    href: "#"
  }, "name of Patient")) : null)), showPage === 1 ? /* @__PURE__ */ React.createElement(import_react11.VStack, {
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(import_react11.HStack, {
    w: "full",
    justifyContent: "space-between",
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(Viewer, null), /* @__PURE__ */ React.createElement(OldPrescriptions, null)), /* @__PURE__ */ React.createElement(import_react11.HStack, {
    justifyContent: "space-between",
    alignItems: "flex-end"
  }, /* @__PURE__ */ React.createElement(import_react11.Button, {
    onClick: (e) => {
      window.print();
      console.log("print");
    }
  }, "\u{1F5A8}\uFE0F"), /* @__PURE__ */ React.createElement(import_react11.Button, {
    colorScheme: "green"
  }, "Save Prescription "))) : /* @__PURE__ */ React.createElement(FindPatient_default, null)));
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
      duration: "",
      id: new Date().getTime()
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
  return /* @__PURE__ */ React.createElement(import_react11.Box, null, /* @__PURE__ */ React.createElement(import_react11.HStack, null), d.map((r) => {
    return /* @__PURE__ */ React.createElement(PresStack, {
      data: r
    });
  }));
};
var PresStack = ({ data }) => {
  const [preCon, setPreCon] = (0, import_react15.useContext)(PresContext);
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
    onChange: (e) => updateData(e, data.id, "nameDrug")
  })), /* @__PURE__ */ React.createElement(import_react11.Spacer, null), /* @__PURE__ */ React.createElement(import_react11.VStack, {
    mx: "2"
  }, /* @__PURE__ */ React.createElement(import_react11.Text, null, " Dosage Form"), /* @__PURE__ */ React.createElement(import_react12.Menu, null, /* @__PURE__ */ React.createElement(import_react12.MenuButton, {
    value: data.dosageForm,
    as: import_react11.Button,
    rightIcon: /* @__PURE__ */ React.createElement(import_ai.AiOutlineDown, null)
  }, data.dosageForm), /* @__PURE__ */ React.createElement(import_react12.MenuList, null, /* @__PURE__ */ React.createElement(import_react12.MenuItem, {
    onClick: (e) => updateData("ointments", data.id, "dosageForm")
  }, "Ointments"), /* @__PURE__ */ React.createElement(import_react12.MenuItem, {
    onClick: (e) => updateData("syrup", data.id, "dosageForm")
  }, "syrup"), /* @__PURE__ */ React.createElement(import_react12.MenuItem, {
    onClick: (e) => updateData("tablets", data.id, "dosageForm")
  }, "Tablet"), /* @__PURE__ */ React.createElement(import_react12.MenuItem, {
    onClick: (e) => updateData("powder", data.id, "dosageForm")
  }, "Powder"), /* @__PURE__ */ React.createElement(import_react12.MenuItem, {
    onClick: (e) => updateData("pills", data.id, "dosageForm")
  }, "Pills")))), /* @__PURE__ */ React.createElement(import_react11.Spacer, null), /* @__PURE__ */ React.createElement(import_react11.VStack, {
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
var action = async ({ request }) => {
  const form = await request.formData();
  let formAction = form.get("_action");
  let email = form.get("email");
  let password = form.get("password");
  let displayName = form.get("profileName");
  let centerName = form.get("centerName");
  const col = firestore.collection("rxlabsUsers");
  let msg = "";
  const collectionUser = firestore.collection("RxlabsUsers");
  let res;
  switch (formAction) {
    case "createUser":
      res = await collectionUser.doc().set({ email, displayName, password });
      msg = { status: true, res };
      break;
    case "loginUser":
      break;
  }
  return msg.status ? (0, import_remix7.redirect)("/dashboard") : msg;
};
function Login() {
  const ActionData = (0, import_remix7.useActionData)();
  const toast = (0, import_react19.useToast)();
  (0, import_react20.useEffect)(() => {
    ActionData ? ActionData.status === "true" ? (0, import_remix7.redirect)("/dashboard") : null : null;
  }, []);
  if (ActionData) {
  }
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
    value: "loginUser",
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
  }), /* @__PURE__ */ import_react20.default.createElement(import_react19.Spacer, null), /* @__PURE__ */ import_react20.default.createElement(import_react19.HStack, {
    mt: "6",
    justifyContent: "center",
    alignItems: "center"
  }, /* @__PURE__ */ import_react20.default.createElement(import_react19.Button, {
    name: "_action",
    value: "createUser",
    type: "submit",
    colorScheme: "green"
  }, "Create Profile"), /* @__PURE__ */ import_react20.default.createElement(import_react19.Spacer, null))));
};
var Login_default = Login;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "40802d61", "entry": { "module": "/build/entry.client-KSLGF6HT.js", "imports": ["/build/_shared/chunk-F544EEZS.js", "/build/_shared/chunk-IE2MYUJQ.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-MW6AZ2FO.js", "imports": ["/build/_shared/chunk-3X7DKLX2.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/Login": { "id": "routes/Login", "parentId": "root", "path": "Login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/Login-D2TAIVJL.js", "imports": ["/build/_shared/chunk-7TN3E5NZ.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-W3PDRLRB.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard/index": { "id": "routes/dashboard/index", "parentId": "routes/dashboard", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/dashboard/index-3BH7OPQW.js", "imports": ["/build/_shared/chunk-3X7DKLX2.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-OBC2QYID.js", "imports": ["/build/_shared/chunk-7TN3E5NZ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-40802D61.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6QzpcXFVzZXJzXFxydWRyYVxcRGVza3RvcFxcb1xcbGV0dGVyLmpzXFxhcHBcXHJvb3QudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL05hdmJhci50c3giLCAicm91dGU6QzpcXFVzZXJzXFxydWRyYVxcRGVza3RvcFxcb1xcbGV0dGVyLmpzXFxhcHBcXHJvdXRlc1xcZGFzaGJvYXJkLnRzeCIsICIuLi9hcHAvc2Vzc2lvbnMudHMiLCAicm91dGU6QzpcXFVzZXJzXFxydWRyYVxcRGVza3RvcFxcb1xcbGV0dGVyLmpzXFxhcHBcXHJvdXRlc1xcZGFzaGJvYXJkXFxpbmRleC50c3giLCAiLi4vYXBwL2NvbnRleHQvcHJlc0NvbnRleHQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ZpbmRQYXRpZW50LnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJ1ZHJhXFxEZXNrdG9wXFxvXFxsZXR0ZXIuanNcXGFwcFxccm91dGVzXFxpbmRleC50c3giLCAiLi4vYXBwL3V0aWxzL2ZpcmUuc2VydmVyLnRzIiwgInJvdXRlOkM6XFxVc2Vyc1xccnVkcmFcXERlc2t0b3BcXG9cXGxldHRlci5qc1xcYXBwXFxyb3V0ZXNcXExvZ2luLnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSBcImNvbXByZXNzaW9uXCI7XHJcbmltcG9ydCBtb3JnYW4gZnJvbSBcIm1vcmdhblwiO1xyXG5pbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL2V4cHJlc3NcIjtcclxuXHJcbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbmFwcC51c2UoY29tcHJlc3Npb24oKSk7XHJcblxyXG4vLyBodHRwOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXNlY3VyaXR5Lmh0bWwjYXQtYS1taW5pbXVtLWRpc2FibGUteC1wb3dlcmVkLWJ5LWhlYWRlclxyXG5hcHAuZGlzYWJsZShcIngtcG93ZXJlZC1ieVwiKTtcclxuXHJcbi8vIFJlbWl4IGZpbmdlcnByaW50cyBpdHMgYXNzZXRzIHNvIHdlIGNhbiBjYWNoZSBmb3JldmVyLlxyXG5hcHAudXNlKFxyXG4gIFwiL2J1aWxkXCIsXHJcbiAgZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBpbW11dGFibGU6IHRydWUsIG1heEFnZTogXCIxeVwiIH0pXHJcbik7XHJcblxyXG4vLyBFdmVyeXRoaW5nIGVsc2UgKGxpa2UgZmF2aWNvbi5pY28pIGlzIGNhY2hlZCBmb3IgYW4gaG91ci4gWW91IG1heSB3YW50IHRvIGJlXHJcbi8vIG1vcmUgYWdncmVzc2l2ZSB3aXRoIHRoaXMgY2FjaGluZy5cclxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhcInB1YmxpYy9idWlsZFwiLCB7IG1heEFnZTogXCIxaFwiIH0pKTtcclxuXHJcbmFwcC51c2UobW9yZ2FuKFwidGlueVwiKSk7XHJcblxyXG5hcHAuYWxsKFxyXG4gIFwiKlwiLFxyXG4gIGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcclxuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcclxuICAgIG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WXHJcbiAgfSlcclxuKTtcclxuXHJcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XHJcblxyXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhgRXhwcmVzcyBzZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xyXG59KTtcclxuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJ1ZHJhXFxcXERlc2t0b3BcXFxcb1xcXFxsZXR0ZXIuanNcXFxcYXBwXFxcXGVudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccnVkcmFcXFxcRGVza3RvcFxcXFxvXFxcXGxldHRlci5qc1xcXFxhcHBcXFxccm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccnVkcmFcXFxcRGVza3RvcFxcXFxvXFxcXGxldHRlci5qc1xcXFxhcHBcXFxccm91dGVzXFxcXGRhc2hib2FyZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccnVkcmFcXFxcRGVza3RvcFxcXFxvXFxcXGxldHRlci5qc1xcXFxhcHBcXFxccm91dGVzXFxcXGRhc2hib2FyZFxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccnVkcmFcXFxcRGVza3RvcFxcXFxvXFxcXGxldHRlci5qc1xcXFxhcHBcXFxccm91dGVzXFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxydWRyYVxcXFxEZXNrdG9wXFxcXG9cXFxcbGV0dGVyLmpzXFxcXGFwcFxcXFxyb3V0ZXNcXFxcTG9naW4udHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9kYXNoYm9hcmRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Rhc2hib2FyZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJkYXNoYm9hcmRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2Rhc2hib2FyZC9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZGFzaGJvYXJkL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZGFzaGJvYXJkXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvTG9naW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL0xvZ2luXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIkxvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXHJcbiAgcmVxdWVzdDogUmVxdWVzdCxcclxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcclxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXHJcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcclxuKSB7XHJcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXHJcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxyXG4gICk7XHJcblxyXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XHJcblxyXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xyXG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXHJcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcclxuICB9KTtcclxufVxyXG4iLCAiaW1wb3J0IHtcclxuICBMaW5rcyxcclxuICBMaXZlUmVsb2FkLFxyXG4gIE1ldGEsXHJcbiAgT3V0bGV0LFxyXG4gIFNjcmlwdHMsXHJcbiAgICBcclxuICBTY3JvbGxSZXN0b3JhdGlvbixcclxufSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIsIENvbG9yTW9kZVNjcmlwdCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vY29tcG9uZW50cy9OYXZiYXJcIjtcclxuLy8gMS4gaW1wb3J0IGBleHRlbmRUaGVtZWAgZnVuY3Rpb25cclxuaW1wb3J0IHsgZXh0ZW5kVGhlbWUsIHR5cGUgVGhlbWVDb25maWcgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5cclxuLy8gMi4gQWRkIHlvdXIgY29sb3IgbW9kZSBjb25maWdcclxuY29uc3QgY29uZmlnOiBUaGVtZUNvbmZpZyA9IHtcclxuICBpbml0aWFsQ29sb3JNb2RlOiAnZGFyaycsXHJcbiAgdXNlU3lzdGVtQ29sb3JNb2RlOiBmYWxzZSxcclxufVxyXG5cclxuLy8gMy4gZXh0ZW5kIHRoZSB0aGVtZVxyXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHsgY29uZmlnIH0pXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4geyB0aXRsZTogXCJOZXcgUmVtaXggQXBwXCIgfTtcclxufTtcclxuXHJcbmNvbnN0IERvY3VtZW50ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Ym9keT5cclxuICAgICAgIDxDb2xvck1vZGVTY3JpcHQgaW5pdGlhbENvbG9yTW9kZT17XCJkYXJrXCJ9IC8+XHJcbiAgICAgIDxDaGFrcmFQcm92aWRlcj5cclxuICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxyXG4gICAgICAgIDxTY3JpcHRzIC8+XHJcbiAgICAgICAgPExpdmVSZWxvYWQgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XHJcbiAgICA8L2JvZHk+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XHJcbiAgICAgIDxoZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDxNZXRhIC8+XHJcbiAgICAgICAgPExpbmtzIC8+XHJcbiAgICAgIDwvaGVhZD5cclxuICAgICAgPERvY3VtZW50IC8+XHJcbiAgICA8L2h0bWw+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQm94LCBMaXN0SXRlbSwgVW5vcmRlcmVkTGlzdCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xyXG5cclxuZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGJhY2tncm91bmQ9e1wiZ3JlZW4uNTAwXCJ9PlxyXG4gICAgICAgIDxVbm9yZGVyZWRMaXN0IGRpc3BsYXk9e1wiZmxleFwifT5cclxuICAgICAgICAgIDxMaXN0SXRlbSBwPVwiM1wiIGNvbG9yPXtcIndoaXRlXCJ9ICBsaXN0U3R5bGVUeXBlPXtcIm5vbmVcIn0gPjxMaW5rIHRvPVwiL1wiPkxhYnMgXHVEODNEXHVERDJDPC9MaW5rPjwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8TGlzdEl0ZW0gcD1cIjNcIiBjb2xvcj17XCJ3aGl0ZVwifSBsaXN0U3R5bGVUeXBlPXtcIm5vbmVcIn0gPjxMaW5rIHRvPVwiL2Rhc2hib2FyZFwiPkRhc2hib2FyZDwvTGluaz48L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPExpc3RJdGVtIHA9XCIzXCIgY29sb3I9e1wid2hpdGVcIn0gbGlzdFN0eWxlVHlwZT17XCJub25lXCJ9ID48TGluayB0bz1cIi9sb2dpblwiPkxvZ2luPC9MaW5rPjwvTGlzdEl0ZW0+XHJcbiAgICAgICAgPC9Vbm9yZGVyZWRMaXN0PlxyXG4gICAgPC9Cb3g+ICBcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhciIsICJpbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgQ29udGFpbmVyLFxyXG4gIERpdmlkZXIsXHJcbiAgSGVhZGluZyxcclxuICBIU3RhY2ssXHJcbiAgTGlzdEl0ZW0sXHJcbiAgVGV4dCxcclxuICBVbm9yZGVyZWRMaXN0LFxyXG4gIFZTdGFjayxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGpzb24sIExpbmssIExpbmtzLCBMb2FkZXJGdW5jdGlvbiwgT3V0bGV0LCByZWRpcmVjdCwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIn4vc2Vzc2lvbnNcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyOkxvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtyZXF1ZXN0fSkgPT4ge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKFxyXG4gICAgcmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKVxyXG4gICk7XHJcbiAgaWYgKHNlc3Npb24uaGFzKFwidXNlclNlc3Npb25cIikpIHtcclxuICAgIC8vIFJlZGlyZWN0IHRvIHRoZSBob21lIHBhZ2UgaWYgdGhleSBhcmUgYWxyZWFkeSBzaWduZWQgaW4uXHJcbiAgICBcclxuICAgIHJldHVybiB7c2hvd1BhZ2U6dHJ1ZX1cclxuICB9XHJcbiAgcmV0dXJuIHtzaG93UGFnZTpmYWxzZX1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xyXG5cclxuICBjb25zdCB7c2hvd1BhZ2V9ID0gdXNlTG9hZGVyRGF0YSgpIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIHsvKiB7XHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHNob3dQYWdlKVxyXG4gICAgfSAqL31cclxuICAgIHtcclxuICAgICAgdHJ1ZSA/ICA8UHJpdmF0ZVBhZ2UgLz4gOiA8Tm90U2lnbkluUGFnZSAvPlxyXG4gICAgfVxyXG5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IE5vdFNpZ25JblBhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgICAgPEhlYWRpbmc+VXNlciBOb3QgTG9nZWQgaW48L0hlYWRpbmc+XHJcbiAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIj5Mb2dpbjwvTGluaz5cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuXHJcbmNvbnN0IFByaXZhdGVQYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybihcclxuICAgIDxDb250YWluZXIgbWF4Vz1cIm9udGFpbmVyLmxnXCI+XHJcbiAgICA8SGVhZGluZyBweT1cIjNcIj5SeCBMYWJzPC9IZWFkaW5nPlxyXG4gICAgXHJcbiAgICAgIFxyXG4gICAgICB7LyogPERpdmlkZXIgc2l6ZT17XCIzXCJ9IGNvbG9yU2NoZW1lPVwiZ3JlZW5cIiBvcmllbnRhdGlvbj0ndmVydGljYWwnIC8+ICovfVxyXG4gICAgICA8T3V0bGV0IC8+XHJcbiAgICBcclxuICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XHJcbiIsICJpbXBvcnQge2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlfSBmcm9tIFwicmVtaXhcIlxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB7Z2V0U2Vzc2lvbixjb21taXRTZXNzaW9uLGRlc3Ryb3lTZXNzaW9ufSAgPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XHJcbiAgICBjb29raWU6e1xyXG4gICAgICAgIG5hbWU6XCJfX3Nlc3Npb25cIlxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbiIsICJpbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgRGl2aWRlcixcclxuICBIZWFkaW5nLFxyXG4gIEhlYWRpbmdQcm9wcyxcclxuICBIU3RhY2ssXHJcbiAgSW5wdXQsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgT21pdENvbW1vblByb3BzLFxyXG4gIE9yZGVyZWRMaXN0LFxyXG4gIFNwYWNlcixcclxuICBUZXh0LFxyXG4gIFVub3JkZXJlZExpc3QsXHJcbiAgVlN0YWNrLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgU2xhdGVFZGl0b3IgZnJvbSBcIn4vY29tcG9uZW50cy9TbGF0ZUVkaXRvclwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBNZW51LFxyXG4gIE1lbnVCdXR0b24sXHJcbiAgTWVudUxpc3QsXHJcbiAgTWVudUl0ZW0sXHJcbiAgTWVudUl0ZW1PcHRpb24sXHJcbiAgTWVudUdyb3VwLFxyXG4gIE1lbnVPcHRpb25Hcm91cCxcclxuICBNZW51RGl2aWRlcixcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIE51bWJlcklucHV0LFxyXG4gIE51bWJlcklucHV0RmllbGQsXHJcbiAgTnVtYmVySW5wdXRTdGVwcGVyLFxyXG4gIE51bWJlckluY3JlbWVudFN0ZXBwZXIsXHJcbiAgTnVtYmVyRGVjcmVtZW50U3RlcHBlcixcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVEb3duLCBBaUZpbGxXYXJuaW5nIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcblxyXG5pbXBvcnQgeyBQaW5JbnB1dCwgUGluSW5wdXRGaWVsZCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFByZXNDb250ZXh0LCBQcmVzQ29udGV4dFByb3ZpZGVyIH0gZnJvbSBcIn4vY29udGV4dC9wcmVzQ29udGV4dFwiO1xyXG5pbXBvcnQge1xyXG4gIEJyZWFkY3J1bWIsXHJcbiAgQnJlYWRjcnVtYkl0ZW0sXHJcbiAgQnJlYWRjcnVtYkxpbmssXHJcbiAgQnJlYWRjcnVtYlNlcGFyYXRvcixcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgRmluZFBhdGllbnQgZnJvbSBcIn4vY29tcG9uZW50cy9GaW5kUGF0aWVudFwiO1xyXG5pbXBvcnQgTWFwRmluZGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvTWFwRmluZGVyXCI7XHJcbmltcG9ydCB7QmlBcnJvd0JhY2t9IGZyb20gXCJyZWFjdC1pY29ucy9iaVwiXHJcbmZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIC8vIGNvbnN0IFtkLHNldERdID0gdXNlQ29udGV4dChQcmVzQ29udGV4dClcclxuXHJcbiAgLy8gY29uc3QgYWRkTWFpbkRhdGEgPSAoZTphbnkpID0+IHtcclxuICAvLyBjb25zdCBvID0ge1xyXG4gIC8vICAgbmFtZURydWc6IFwiXCIsXHJcbiAgLy8gICBkb3NhZ2VGb3JtOiBcIlwiLFxyXG4gIC8vICAgbWc6IFwiXCIsXHJcbiAgLy8gICBkdXJhdGlvbjogXCJcIixcclxuICAvLyB9XHJcblxyXG4gIC8vIGxldCBsYXN0ID0gZFxyXG5cclxuICAvLyBsYXN0LnB1c2gobylcclxuXHJcbiAgLy8gc2V0RChsYXN0KVxyXG5cclxuICAvLyB9XHJcblxyXG4gIGNvbnN0IFtzaG93UGFnZSwgc2V0U2hvd1BhZ2VdID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8UHJlc0NvbnRleHRQcm92aWRlcj5cclxuICAgICAgICA8QnV0dG9uIG15PVwiM1wiIG1iPVwiM1wiPlxyXG4gICAgICAgICAgQ3JlYXRlIE5ld3tcIiBcIn1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgIDxCb3g+XHJcbiAgICAgICAgICA8QnJlYWRjcnVtYiBweT1cIjNcIj5cclxuICAgICAgICAgICAgPEJyZWFkY3J1bWJJdGVtPlxyXG4gICAgICAgICAgICAgIDxCcmVhZGNydW1iTGluayBjb2xvcj1cImdyZWVuXCIgb25DbGljaz17KGUpID0+IHNldFNob3dQYWdlKDApfT5cclxuICAgICAgICAgICAgIDxIU3RhY2s+ICA8QmlBcnJvd0JhY2sgLz4gIDxUZXh0PiBGaW5kIFBhdGllbnQ8L1RleHQ+PC9IU3RhY2s+XHJcbiAgICAgICAgICAgICAgPC9CcmVhZGNydW1iTGluaz5cclxuICAgICAgICAgICAgPC9CcmVhZGNydW1iSXRlbT5cclxuICAgICAgICAgICAge3Nob3dQYWdlID09PSAxID8gKFxyXG4gICAgICAgICAgICAgIDxCcmVhZGNydW1iSXRlbT5cclxuICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iTGluayBocmVmPVwiI1wiPm5hbWUgb2YgUGF0aWVudDwvQnJlYWRjcnVtYkxpbms+XHJcbiAgICAgICAgICAgICAgPC9CcmVhZGNydW1iSXRlbT5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8L0JyZWFkY3J1bWI+XHJcbiAgICAgICAgICB7LyogPE1hcEZpbmRlciAvPiAqL31cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICB7c2hvd1BhZ2UgPT09IDEgPyAoXHJcbiAgICAgICAgICA8VlN0YWNrIGp1c3RpZnlDb250ZW50PXtcImZsZXgtc3RhcnRcIn0gYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIj5cclxuICAgICAgICAgICAgPEhTdGFja1xyXG4gICAgICAgICAgICAgIHc9XCJmdWxsXCJcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17XCJzcGFjZS1iZXR3ZWVuXCJ9XHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFZpZXdlciAvPlxyXG5cclxuICAgICAgICAgICAgICA8T2xkUHJlc2NyaXB0aW9ucyAvPlxyXG4gICAgICAgICAgICA8L0hTdGFjaz5cclxuPEhTdGFjayAganVzdGlmeUNvbnRlbnQ9e1wic3BhY2UtYmV0d2VlblwifSBhbGlnbkl0ZW1zPVwiZmxleC1lbmRcIj5cclxuICBcclxuPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cucHJpbnQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJpbnRcIik7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFx1RDgzRFx1RERBOFx1RkUwRlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgey8qIDxCdXR0b24+U2VhcmNoIE5lYXJlc3QgU3RvcmU8L0J1dHRvbj4gKi99XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPXtcImdyZWVuXCJ9PlNhdmUgUHJlc2NyaXB0aW9uIDwvQnV0dG9uPlxyXG48L0hTdGFjaz5cclxuICAgICAgICAgIDwvVlN0YWNrPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8RmluZFBhdGllbnQgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L1ByZXNDb250ZXh0UHJvdmlkZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBPbGRQcmVzY3JpcHRpb25zID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VlN0YWNrIHBsPVwiOVwiIHB0PVwiM1wiIG1yPVwiMTVcIiBhbGlnbkl0ZW1zPXtcImZsZXgtc3RhcnRcIn0+XHJcbiAgICAgIDxIZWFkaW5nIGZvbnRTaXplPVwiMnhsXCI+T2xkIFByZXNjcmlwdGlvbnM8L0hlYWRpbmc+XHJcbiAgICAgIDxVbm9yZGVyZWRMaXN0PlxyXG4gICAgICAgIDxMaXN0SXRlbSBsaXN0U3R5bGVUeXBlPVwibm9uZVwiPmRhdGUgMTctMTUtODc8L0xpc3RJdGVtPlxyXG4gICAgICA8L1Vub3JkZXJlZExpc3Q+XHJcbiAgICA8L1ZTdGFjaz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVmlld2VyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtkLCBzZXREXSA9IHVzZUNvbnRleHQoUHJlc0NvbnRleHQpO1xyXG4gIGNvbnN0IGFkZFJvdyA9IChlOiBhbnkpID0+IHtcclxuICAgIGxldCBvbGREYXRhID0gW107XHJcblxyXG4gICAgZC5tYXAoKG9sZEQ6IGFueSkgPT4ge1xyXG4gICAgICBvbGREYXRhLnB1c2gob2xkRCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBvbGREYXRhLnB1c2goe1xyXG4gICAgICBuYW1lRHJ1ZzogXCJcIixcclxuICAgICAgZG9zYWdlRm9ybTogXCJcIixcclxuICAgICAgbWc6IFwiXCIsXHJcbiAgICAgIGR1cmF0aW9uOiBcIlwiLFxyXG4gICAgICBpZDogbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXREKG9sZERhdGEpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICA8Qm94PlxyXG4gICAgICAgIDxQcmVzQm94IC8+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgYWRkUm93KGUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBBZGQgK1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBQcmVzQm94ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtkLCBzZXREXSA9IHVzZUNvbnRleHQoUHJlc0NvbnRleHQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgey8qIDxQcmVzU3RhY2sgLz5cclxuICAgICAgPFByZXNTdGFjayAvPlxyXG4gICAgICA8UHJlc1N0YWNrIC8+ICovfVxyXG48SFN0YWNrPlxyXG48L0hTdGFjaz5cclxuICAgICAge2QubWFwKChyOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gPFByZXNTdGFjayBkYXRhPXtyfSAvPjtcclxuICAgICAgfSl9XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUHJlc1N0YWNrID0gKHsgZGF0YSB9OiBhbnkpID0+IHtcclxuICBjb25zdCBbcHJlQ29uLCBzZXRQcmVDb25dID0gdXNlQ29udGV4dChQcmVzQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZURhdGEgPSAoZTogYW55LCBpZDogYW55LCB0eXBlOiBhbnkpID0+IHtcclxuICAgIGxldCBvbGREID0gcHJlQ29uO1xyXG4gICAgbGV0IG5ld0xpc3Q6IGFueSA9IFtdO1xyXG4gICAgb2xkRC5tYXAoKG9sZGQ6IGFueSkgPT4ge1xyXG4gICAgICBpZiAob2xkZC5pZCA9PT0gaWQpIHtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgIGNhc2UgXCJuYW1lRHJ1Z1wiOlxyXG4gICAgICAgICAgICBsZXQgdG1wRGF0YSA9IHtcclxuICAgICAgICAgICAgICBuYW1lRHJ1ZzogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgZG9zYWdlRm9ybTogb2xkZC5kb3NhZ2VGb3JtLFxyXG4gICAgICAgICAgICAgIG1nOiBvbGRkLm1kLFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiBvbGRkLmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgIGlkOiBvbGRkLmlkLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbmV3TGlzdC5wdXNoKHRtcERhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRvc2FnZUZvcm1cIjpcclxuICAgICAgICAgICAgICBsZXQgdG1wRGF0YURvc2UgPSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lRHJ1Zzogb2xkZC5uYW1lRHJ1ZyxcclxuICAgICAgICAgICAgICAgIGRvc2FnZUZvcm06IGUsXHJcbiAgICAgICAgICAgICAgICBtZzogb2xkZC5tZCxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBvbGRkLmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgaWQ6IG9sZGQuaWQsXHJcbiAgICAgICAgICAgICAgfTtcclxuICBcclxuICAgICAgICAgICAgICBuZXdMaXN0LnB1c2godG1wRGF0YURvc2UpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3TGlzdC5wdXNoKG9sZGQpO1xyXG4gICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhuZXdMaXN0LFwiTkVXIExJU1RcIik7XHJcbiAgICBjb25zb2xlLmxvZyhvbGRELFwiT0xEIExJU1RcIik7XHJcbiAgICBzZXRQcmVDb24obmV3TGlzdClcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBweT1cIjNcIiB3PVwiZnVsbFwiIGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcIj5cclxuICAgICAgey8qIDxUZXh0IGNvbG9yPVwicmVkICBcIj48QWlGaWxsV2FybmluZyAvPjwvVGV4dD4gKi99XHJcbiAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkocHJlQ29uKX0gKi99XHJcbiAgICAgIDxWU3RhY2s+XHJcbiAgICAgICAgPFRleHQ+RHJ1ZzwvVGV4dD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIG14PVwiMVwiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIm5hbWUgb2YgRHJ1Z1wiXHJcbiAgICAgICAgICB2YWx1ZT17ZGF0YS5uYW1lRHJ1Z31cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlRGF0YShlLCBkYXRhLmlkLCBcIm5hbWVEcnVnXCIpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvVlN0YWNrPlxyXG4gICAgICA8U3BhY2VyIC8+XHJcbiAgICAgIDxWU3RhY2sgbXg9XCIyXCI+XHJcbiAgICAgICAgPFRleHQ+IERvc2FnZSBGb3JtPC9UZXh0PlxyXG4gICAgICAgIDxNZW51XHJcbiAgICAgICAgICBcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TWVudUJ1dHRvblxyXG4gICAgICAgICAgICB2YWx1ZT17ZGF0YS5kb3NhZ2VGb3JtfVxyXG4gICAgICAgICAgICBhcz17QnV0dG9ufVxyXG4gICAgICAgICAgICByaWdodEljb249ezxBaU91dGxpbmVEb3duIC8+fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZGF0YS5kb3NhZ2VGb3JtfVxyXG4gICAgICAgICAgPC9NZW51QnV0dG9uPlxyXG4gICAgICAgICAgPE1lbnVMaXN0PlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17ZSA9PiB1cGRhdGVEYXRhKFwib2ludG1lbnRzXCIsIGRhdGEuaWQsIFwiZG9zYWdlRm9ybVwiKX0+T2ludG1lbnRzPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2UgPT4gdXBkYXRlRGF0YShcInN5cnVwXCIsIGRhdGEuaWQsIFwiZG9zYWdlRm9ybVwiKX0+c3lydXA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17ZSA9PiB1cGRhdGVEYXRhKFwidGFibGV0c1wiLCBkYXRhLmlkLCBcImRvc2FnZUZvcm1cIil9PlRhYmxldDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtlID0+IHVwZGF0ZURhdGEoXCJwb3dkZXJcIiwgZGF0YS5pZCwgXCJkb3NhZ2VGb3JtXCIpfT5Qb3dkZXI8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17ZSA9PiB1cGRhdGVEYXRhKFwicGlsbHNcIiwgZGF0YS5pZCwgXCJkb3NhZ2VGb3JtXCIpfT5QaWxsczwvTWVudUl0ZW0+XHJcbiAgICAgICAgICA8L01lbnVMaXN0PlxyXG4gICAgICAgIDwvTWVudT5cclxuICAgICAgPC9WU3RhY2s+XHJcbiAgICAgIDxTcGFjZXIgLz5cclxuICAgICAgPFZTdGFjayBteD1cIjJcIj5cclxuICAgICAgICA8VGV4dD5Eb3NlIG1nPC9UZXh0PlxyXG4gICAgICAgIDxOdW1iZXJJbnB1dFxyXG4gICAgICAgICAgbXg9XCIzXCJcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MTV9XHJcbiAgICAgICAgICB2YWx1ZT17ZGF0YS5tZ31cclxuICAgICAgICAgIHByZWNpc2lvbj17Mn1cclxuICAgICAgICAgIHN0ZXA9ezAuMn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TnVtYmVySW5wdXRGaWVsZCAvPlxyXG4gICAgICAgICAgPE51bWJlcklucHV0U3RlcHBlcj5cclxuICAgICAgICAgICAgPE51bWJlckluY3JlbWVudFN0ZXBwZXIgLz5cclxuICAgICAgICAgICAgPE51bWJlckRlY3JlbWVudFN0ZXBwZXIgLz5cclxuICAgICAgICAgIDwvTnVtYmVySW5wdXRTdGVwcGVyPlxyXG4gICAgICAgIDwvTnVtYmVySW5wdXQ+XHJcbiAgICAgIDwvVlN0YWNrPlxyXG5cclxuICAgICAgey8qIFBpbiBJbnB1dCAqL31cclxuICAgICAgPFZTdGFjayBteD1cIjJcIj5cclxuICAgICAgICA8VGV4dD5EdXJhdGlvbjwvVGV4dD5cclxuICAgICAgICA8SFN0YWNrPlxyXG4gICAgICAgICAgPFBpbklucHV0IGRlZmF1bHRWYWx1ZT17ZGF0YS5kdXJhdGlvbn0+XHJcbiAgICAgICAgICAgIDxQaW5JbnB1dEZpZWxkIC8+XHJcbiAgICAgICAgICAgIDxQaW5JbnB1dEZpZWxkIC8+XHJcbiAgICAgICAgICAgIDxQaW5JbnB1dEZpZWxkIC8+XHJcbiAgICAgICAgICA8L1BpbklucHV0PlxyXG4gICAgICAgIDwvSFN0YWNrPlxyXG4gICAgICA8L1ZTdGFjaz5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwgImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgUHJlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0PGFueT4obnVsbCk7XHJcbi8vIGltcG9ydCB1dWlkIGZyb20gXCJ1dWlkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUHJlc0NvbnRleHRQcm92aWRlciA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgXHJcblxyXG4gIGNvbnN0IG1haW5EYXRhID0gW3tcclxuICAgICAgbmFtZURydWc6XCJwYXJhY2V0YW1vbFwiLFxyXG4gICAgICBkb3NhZ2VGb3JtOlwic3lydXBcIixcclxuICAgICAgbWc6XCIxNlwiLFxyXG4gICAgICBkdXJhdGlvbiA6XCIxMDFcIixcclxuICB9LHtcclxuICAgICAgbmFtZURydWc6XCJ3YXJmYXJpblwiLFxyXG4gICAgICBkb3NhZ2VGb3JtOlwibG90aW9uXCIsXHJcbiAgICAgIG1nOlwiMTZcIixcclxuICAgICAgZHVyYXRpb24gOlwiMTExXCJcclxuICB9XVxyXG5cclxuLy8gICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShtYWluRGF0YSlcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXHJcbiAgICB7XHJcbiAgICAgIG5hbWVEcnVnOiBcIlwiLFxyXG4gICAgICBkb3NhZ2VGb3JtOiBcIlwiLFxyXG4gICAgICBtZzogXCJcIixcclxuICAgICAgZHVyYXRpb246IFwiXCIsXHJcbiAgICAgIGlkOiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgfSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQcmVzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W2RhdGEsIHNldERhdGFdfT5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9QcmVzQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iLCAiaW1wb3J0IHsgQm94LCBCdXR0b24gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuZnVuY3Rpb24gRmluZFBhdGllbnQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggcHQ9XCIzXCIgYm9yZGVyPXtcIjNweFwifSBib3JkZXJXaWR0aD1cIjJweFwiICBib3JkZXJTdHlsZT17XCJkYXNoZWRcIn0gc3R5bGU9e3t3aWR0aDonNzB2dycsbWluSGVpZ2h0OlwiNDB2aFwifX0gcD1cIjNcIiBtdD1cIjNcIiB3PVwiNjBcIj5cclxuICAgICAgICAgICAgIDxJbnB1dCBteT1cIjFcIiAgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPSdwYXRpZW50IGlkJyAgLz5cclxuICAgICAgICAgICAgIDxJbnB1dCBteT1cIjFcIiB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9J05hbWUnICAvPlxyXG4gICAgICAgICAgICAgPElucHV0IG15PVwiMVwiIHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj0nUGhvbmUgTnVtYmVyJyAgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxCdXR0b24gbXk9XCIzXCIgID5TZWFyY2g8L0J1dHRvbj5cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmluZFBhdGllbnQiLCAiaW1wb3J0IHsgSGVhZGluZyB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZmlyZXN0b3JlIH0gZnJvbSBcIn4vdXRpbHMvZmlyZS5zZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGNvbGxlY3Rpb25Vc2VyID0gZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKTtcclxuXHJcbiAgbGV0IHJlcyA9IGF3YWl0IGNvbGxlY3Rpb25Vc2VyXHJcbiAgICAuZG9jKClcclxuICAgIC5zZXQoeyBmaXJzdDogXCJKaHNvblwiLCBsYXN0OiBcIkRvZVwiLCBlbWFpbDogXCJydWRyYUBnbWlhbC5jb21cIiB9KTtcclxuXHJcbiAgcmV0dXJuIHsgbXNnOiBcInNhdmVkIGRhdGFcIiwgcmVzIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBJbmRleCgpIHtcclxuICBjb25zdCBwb3N0ID0gdXNlTG9hZGVyRGF0YSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRpbmc+SG9tZSBQYWdlPC9IZWFkaW5nPlxyXG4gICAgICB7SlNPTi5zdHJpbmdpZnkocG9zdCl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwgImltcG9ydCB7IGluaXRpYWxpemVBcHAsIGFwcGxpY2F0aW9uRGVmYXVsdCwgY2VydCB9IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9hcHBcIjtcclxubGV0IGFkbWluID0gcmVxdWlyZShcImZpcmViYXNlLWFkbWluXCIpXHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9hdXRoXCI7XHJcblxyXG5cclxuY29uc3QgYTphbnkgPSB7XHJcbiAgXCJ0eXBlXCI6IFwic2VydmljZV9hY2NvdW50XCIsXHJcbiAgXCJwcm9qZWN0X2lkXCI6IFwicnVkaHJham9zaGljb21cIixcclxuICBcInByaXZhdGVfa2V5X2lkXCI6IFwiOWZlZjM2YjI3OWE0MTk0OGU2NjQzNDM0ZGY5NzMyMDgxYTViZDI5NVwiLFxyXG4gIFwicHJpdmF0ZV9rZXlcIjogXCItLS0tLUJFR0lOIFBSSVZBVEUgS0VZLS0tLS1cXG5NSUlFdlFJQkFEQU5CZ2txaGtpRzl3MEJBUUVGQUFTQ0JLY3dnZ1NqQWdFQUFvSUJBUURCYVBiU0lJM1RpdnMrXFxuRDlpRWlPZW03ZVFjM25EcnVCVUQwTE0xUVEyYm1NQzNVUVlnV3lNaUgvdW5waE5zSTI3Y1Q4TXBVdjE3bnUzUlxcbjRKYnQyczUzWmVFRHNERXJLWlVIbkx6eGIrZTh6YjdsQVlPc016S2F0cVNOUHVPSGh3QjhhU1NKQXF3RkMxdXBcXG5XbituVTc3T1Z2bEhiYmhDUW8rd0dzeks5U2lzME1jak1ZWHF3dnR5MjVSNmwzd3Jrc1I5ZGVQbWZLSkpKVjA5XFxuOWhON25hc3Z1MEhtZzNnOVNVeUh3VlZhRFcwZy8zVVZBOXN5MkJkb1NkNWk4c2UxTCt5TlFuYytZaFZyWVlMU1xcbnBUZExLdlpOaCtnTHZGK0R1cXljaXkyS3FiRU12UzZTUlQyQXJtWWVHK3FRaGwrV1ZSd0xTQnNRQUY0d1FBZ0lcXG5udTczWjhKdEFnTUJBQUVDZ2dFQUdDSnkrbEdab1JZc3Q5ZmVXdHVDbksvKzBTTm96K0ZPcmdVeTk2aEFmSFFaXFxuU0ViU0R1T1FoTWVjN1pTcHc4ckFJTG5MVHJMT2NzaW9RSkpZQXlKVXRVMS9RS2lSMmlMOE45RDFPdU9OOVY5dlxcblBNQnRuK1Zib1RhOVhlckZGYnBnOHlWanE3MHJuZzJHeUtGRVlLcndtbXI3L0UvU3VHSDU4QzNIOUdPWFNja2tcXG5IdUs2alNvWWxhQ3V6VHp6clRYcFpxQTBDTHRLcTcrMEFZek5Xc3VWajNOb1JQTUt1U3RYM2Y1TmpWamxtYWtmXFxuT3hkTzRVeTlTZGszVUsxYzhNMjNXMnJKNlB4aUdVdE9SREFhMjN3bXJ2WC92MUg2ZnBJZ0k1bkNnVW5jTDZWNVxcbjc0cjNtWWIwZUZKTU94Wlk5ZUJYYTIzL3hnaEdTWU11alJreFF1bk1BUUtCZ1FEbWdoUHh5SDd6OGhhUWV2SEpcXG4zOEZ0Y1RSWDl1T0NyZWJ5R0hXdUlqTVUvcUV6N0hjQVRRUFNSUm8vTkpHNW5yUGpFUzY3M2xnMzBMbzNNNkVVXFxuclp6aDFEV0xqOGxSRUVncE1DajJxRUswWjBMQ29QcU1vekNjd1JabUxiNVpMa1BFdWJRZCsyN2JJY0crQjl0Ylxcbnh0eVdYaGlxSkVXMFFNNmxoYk5XNXc2WWdRS0JnUURXekpuTy9ONTlGbXhaeGM1Y3hSbXh6Nm8wY2RkL3JQTXNcXG5MKzUrUjR0Qm85U0J5ZHpsdnA4NU80S1owZU9KVzJURjZOVC9nYmF5MzByLzF2V2R6UFFqNndHY0haYjY1WXF1XFxudThSWDBGUVB0MnN3WlFHQU4vdGJ2dGtTWlZ3ZGFOaW0yeHNDdEsvY0phWVpWUy9kalBFQUJJcFBES2l2ZzVaeVxcbk40eXJxQk1UN1FLQmdRQ0pmQkpMUnV1NXNxNFV0TS9jT1pKVUpZNHozVFRycjYrc3ZEd01oYWQwSVQrakNhb2NcXG55dEs1cXEreC9UZmh2Ni9KZ21rZWNzcXBWOXlKcWtpc1hiVFIyVkdxa1ROaEgxWDdBeGVicnRaQ1pjaWk3NE1oXFxuT1FCNHJvNGVtYkFMM3hWYWsrekRhVUZBZ0V6ZmZDNHcrbFo5ZFZnK3V1MjhTbDgyeUowait5SndnUUtCZ0Z2Ylxcbkh5TlBLKzRlT3JPaFRZQ0tvVlJTMUJ5ZFdtUzFGMENjTnNjMTNTMXkzQnVzc1pSbUVqMHRYOHBiNFl3SjAyeDNcXG5CeTlFejFacSt1MnhoVk80SStlQVJpMzIwV3YxNFhxYnZYazRFOXFzdTEvMHNkR2RIeGE2NUtWalJ5TWtoUkhGXFxudlNWSkU3TjNQakt6SlViL1VNaUxLSUpwalhHUk9qTVo0a1ErR2ZwNUFvR0FSOHh0KytNb3pWT2I5dnRGMXVUTFxcbjIzRmxxSEJ1U3FuUk1xc2dpV3RSSUErOU0rMDN4UkRQSjh6TzBtSW1tUCt0cHlTNmpER2dHWkUyTWNxeC9wRS9cXG5JQ2FNVlBHanNYWWRicDI3MGMwazJmSDJaL3RWWEFnckhoekdnTUJnemljY1dINjdSbjhtZ2p4M1QyYXFsWGR0XFxuZ05NQU9SaUNJTytMUytjZXhZUllGTGs9XFxuLS0tLS1FTkQgUFJJVkFURSBLRVktLS0tLVxcblwiLFxyXG4gIFwiY2xpZW50X2VtYWlsXCI6IFwiZmlyZWJhc2UtYWRtaW5zZGsteHVkMThAcnVkaHJham9zaGljb20uaWFtLmdzZXJ2aWNlYWNjb3VudC5jb21cIixcclxuICBcImNsaWVudF9pZFwiOiBcIjExMTA5NzMyMzc0NTc0MDUxNTk4OVwiLFxyXG4gIFwiYXV0aF91cmlcIjogXCJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvYXV0aFwiLFxyXG4gIFwidG9rZW5fdXJpXCI6IFwiaHR0cHM6Ly9vYXV0aDIuZ29vZ2xlYXBpcy5jb20vdG9rZW5cIixcclxuICBcImF1dGhfcHJvdmlkZXJfeDUwOV9jZXJ0X3VybFwiOiBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0c1wiLFxyXG4gIFwiY2xpZW50X3g1MDlfY2VydF91cmxcIjogXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9yb2JvdC92MS9tZXRhZGF0YS94NTA5L2ZpcmViYXNlLWFkbWluc2RrLXh1ZDE4JTQwcnVkaHJham9zaGljb20uaWFtLmdzZXJ2aWNlYWNjb3VudC5jb21cIlxyXG59XHJcbmluaXRpYWxpemVBcHAoe2NyZWRlbnRpYWw6Y2VydChhKX0pO1xyXG5leHBvcnQgY29uc3QgZmlyZXN0b3JlID0gZ2V0RmlyZXN0b3JlKCk7XHJcbmV4cG9ydCBjb25zdCBmaXJlQXV0aCA9IGdldEF1dGgoKTtcclxuXHJcblxyXG4iLCAiaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIENvbnRhaW5lcixcclxuICBGb3JtSGVscGVyVGV4dCxcclxuICBGb3JtTGFiZWwsXHJcbiAgSGVhZGluZyxcclxuICBIU3RhY2ssXHJcbiAgSW5wdXQsXHJcbiAgU3BhY2VyLFxyXG4gIFRhYixcclxuICBUYWJMaXN0LFxyXG4gIFRhYlBhbmVsLFxyXG4gIFRhYlBhbmVscyxcclxuICBUYWJzLFxyXG4gIHVzZVRvYXN0LFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IGpzb24gfSBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlLWFkbWluL2F1dGhcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBBY3Rpb25GdW5jdGlvbixcclxuICBGb3JtLFxyXG4gIHJlZGlyZWN0LFxyXG4gIHVzZUFjdGlvbkRhdGEsXHJcbiAgdXNlU3VibWl0LFxyXG4gIHVzZVRyYW5zaXRpb24sXHJcbn0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGNyZWF0ZUFuZFNhdmVTZXNzaW9uIH0gZnJvbSBcIn4vbG9naWMvc2Vzc2lvbkF1dHJoTG9naWNcIjtcclxuaW1wb3J0IHsgY29tbWl0U2Vzc2lvbiB9IGZyb20gXCJ+L3Nlc3Npb25zXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUN1c3Rvcm1Ub2tlbiwgY3JlYXRlVXNlciB9IGZyb20gXCJ+L3V0aWxzL2F1dGguc2VydmVyXCI7XHJcbmltcG9ydCB7IGZpcmVBdXRoLCBmaXJlc3RvcmUgfSBmcm9tIFwifi91dGlscy9maXJlLnNlcnZlclwiO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xyXG4vLyAgIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbi8vICAgbGV0IGZvcm1BY3Rpb24gPSBmb3JtLmdldChcIl9hY3Rpb25cIik7XHJcbi8vICAgbGV0IGVtYWlsID0gZm9ybS5nZXQoXCJlbWFpbFwiKTtcclxuLy8gICBsZXQgcGFzc3dvcmQgPSBmb3JtLmdldChcInBhc3N3b3JkXCIpO1xyXG4vLyAgIGxldCBwcm9maWxlTmFtZSA9IGZvcm0uZ2V0KFwicHJvZmlsZU5hbWVcIik7XHJcblxyXG4vLyAgIGNvbnN0IGNvbCA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKFwidXNlcnNcIik7XHJcbi8vICAgbGV0IHJlcyA6IGFueTtcclxuLy8gICBpZiAoZm9ybUFjdGlvbiA9PT0gXCJjcmVhdGV1c2VyXCIpIHtcclxuLy8gICAgIGlmIChlbWFpbCAmJiBwYXNzd29yZCAmJiBwcm9maWxlTmFtZSkge1xyXG4vLyAgICAgICBhd2FpdCBjcmVhdGVVc2VyKHtcclxuLy8gICAgICAgICBlbWFpbCxcclxuLy8gICAgICAgICBwYXNzd29yZCxcclxuLy8gICAgICAgICBkaXNwbGF5TmFtZTogcHJvZmlsZU5hbWUsXHJcbi8vICAgICAgIH0pLnRoZW4oYXN5bmMgKHVzZXJSZWNvcmQpID0+IHtcclxuLy8gICAgICAgICByZXMgPSB7IHN0YXR1czogdHJ1ZSwgaWQ6IHVzZXJSZWNvcmQudWlkIH07XHJcbi8vICAgICAgICAgYXdhaXQgY3JlYXRlQW5kU2F2ZVNlc3Npb24odXNlclJlY29yZC51aWQscmVxdWVzdClcclxuLy8gICAgICAgfSk7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG5cclxuLy8gICByZXR1cm4gcmVzLnN0YXR1cyA/IHJlZGlyZWN0KFwiL2Rhc2hib2FyZFwiKSA6IHJlc1xyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgbGV0IGZvcm1BY3Rpb24gPSBmb3JtLmdldChcIl9hY3Rpb25cIik7XHJcbiAgbGV0IGVtYWlsID0gZm9ybS5nZXQoXCJlbWFpbFwiKTtcclxuICBsZXQgcGFzc3dvcmQgPSBmb3JtLmdldChcInBhc3N3b3JkXCIpO1xyXG4gIGxldCBkaXNwbGF5TmFtZSA9IGZvcm0uZ2V0KFwicHJvZmlsZU5hbWVcIik7XHJcbiAgbGV0IGNlbnRlck5hbWUgPSBmb3JtLmdldChcImNlbnRlck5hbWVcIik7XHJcblxyXG4gIGNvbnN0IGNvbCA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKFwicnhsYWJzVXNlcnNcIik7XHJcblxyXG4gIGxldCBtc2c6IGFueSA9IFwiXCI7XHJcbiAgY29uc3QgY29sbGVjdGlvblVzZXIgPSBmaXJlc3RvcmUuY29sbGVjdGlvbihcIlJ4bGFic1VzZXJzXCIpO1xyXG5sZXQgcmVzO1xyXG5cclxuICBzd2l0Y2ggKGZvcm1BY3Rpb24pIHtcclxuICAgIGNhc2UgXCJjcmVhdGVVc2VyXCI6XHJcblxyXG4gICAgICAgcmVzID0gYXdhaXQgY29sbGVjdGlvblVzZXJcclxuICAgICAgICAuZG9jKClcclxuICAgICAgICAuc2V0KHsgZW1haWwsIGRpc3BsYXlOYW1lLCBwYXNzd29yZCB9KTtcclxuICAgICAgbXNnID0geyBzdGF0dXM6IHRydWUsIHJlcyB9O1xyXG5cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwibG9naW5Vc2VyXCI6XHJcbiAgICAgIFxyXG4gICAgLy8gcmVzID0gYXdhaXQgY29sbGVjdGlvblVzZXIuXHJcbiAgICAgIC8vIGxldCByZXMgPSBhd2FpdCBjb2xsZWN0aW9uVXNlci5nZXRcclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1zZy5zdGF0dXMgPyByZWRpcmVjdChcIi9kYXNoYm9hcmRcIikgOiBtc2c7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBMb2dpbigpIHtcclxuICBjb25zdCBBY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YSgpO1xyXG4gIGNvbnN0IHRvYXN0ID0gdXNlVG9hc3QoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIEFjdGlvbkRhdGFcclxuICAgICAgPyBBY3Rpb25EYXRhLnN0YXR1cyA9PT0gXCJ0cnVlXCJcclxuICAgICAgICA/IHJlZGlyZWN0KFwiL2Rhc2hib2FyZFwiKVxyXG4gICAgICAgIDogbnVsbFxyXG4gICAgICA6IG51bGw7XHJcbiAgfSwgW10pO1xyXG5cclxuICBpZiAoQWN0aW9uRGF0YSkge1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgbWF4SD1cImNvbnRhaW5lci5sZ1wiPlxyXG4gICAgICB7SlNPTi5zdHJpbmdpZnkoQWN0aW9uRGF0YSl9XHJcblxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgZGlzcGxheT17XCJmbGV4XCJ9XHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgIG10PVwiMzBcIlxyXG4gICAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN0eWxlPXt7IHdpZHRoOiBcIjYwdndcIiB9fT5cclxuICAgICAgICAgIDxUYWJzPlxyXG4gICAgICAgICAgICA8VGFiTGlzdD5cclxuICAgICAgICAgICAgICA8VGFiPkxvZ2luPC9UYWI+XHJcbiAgICAgICAgICAgICAgPFRhYj5DcmVhdGUgTmV3IFVzZXI8L1RhYj5cclxuICAgICAgICAgICAgPC9UYWJMaXN0PlxyXG4gICAgICAgICAgICA8VGFiUGFuZWxzPlxyXG4gICAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgIDxMb2dpblVzZXIgLz5cclxuICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgIDxDcmVhdGVOZXdVc2VyIC8+XHJcbiAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgPC9UYWJQYW5lbHM+XHJcbiAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgTG9naW5Vc2VyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5DZW50ZXI8L0Zvcm1MYWJlbD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIG5hbWU9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgdHlwZT1cImNlbnRlclwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJEaWdpdGFsIExhYnNcIlxyXG4gICAgICAgID48L0lucHV0PlxyXG5cclxuICAgICAgICA8U3BhY2VyIC8+XHJcbiAgICAgICAgey8qIEFsbCBPbGQgaW5wdXRzIERvd24qL31cclxuICAgICAgICA8Rm9ybUxhYmVsPkVtYWlsPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImpob25AZ21haWwuY29tXCJcclxuICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICA8Rm9ybUhlbHBlclRleHQ+V2UnbGwgbmV2ZXIgc2hhcmUgeW91ciBlbWFpbC48L0Zvcm1IZWxwZXJUZXh0PlxyXG4gICAgICAgIDxGb3JtTGFiZWw+UGFzc3dvcmQ8L0Zvcm1MYWJlbD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgID48L0lucHV0PlxyXG4gICAgICAgIDxTcGFjZXIgLz5cclxuICAgICAgICA8SFN0YWNrIG10PVwiNlwiIGp1c3RpZnlDb250ZW50PXtcImNlbnRlclwifSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIG5hbWU9XCJfYWN0aW9uXCJcclxuICAgICAgICAgICAgdmFsdWU9e1wibG9naW5Vc2VyXCJ9XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjb2xvclNjaGVtZT17XCJncmVlblwifVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8U3BhY2VyIC8+XHJcbiAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBDcmVhdGVOZXdVc2VyID0gKCkgPT4ge1xyXG4gIGNvbnN0IEFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5Qcm9maWxlIE5hbWU8L0Zvcm1MYWJlbD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBuYW1lPVwicHJvZmlsZU5hbWVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJKaG9uIERvZVwiXHJcbiAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5FbWFpbDwvRm9ybUxhYmVsPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJqaG9uQGdtYWlsLmNvbVwiXHJcbiAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgPEZvcm1IZWxwZXJUZXh0PldlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWwuPC9Gb3JtSGVscGVyVGV4dD5cclxuICAgICAgICA8Rm9ybUxhYmVsPlBhc3N3b3JkPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICA8Rm9ybUxhYmVsPkNlbnRyZSBOYW1lPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgbmFtZT1cImNlbnRlck5hbWVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJDZW50ZXIgTmFtZVwiXHJcbiAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgey8qIDxGb3JtTGFiZWw+TGljZW5jZTwvRm9ybUxhYmVsPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8vIG5hbWU9XCJsaWNlbmNlXCJcclxuICAgICAgICAgIC8vIHBsYWNlaG9sZGVyPVwiSmhvbiBEb2VcIlxyXG4gICAgICAgID48L0lucHV0PiAqL31cclxuICAgICAgICA8U3BhY2VyIC8+XHJcbiAgICAgICAgPEhTdGFjayBtdD1cIjZcIiBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBuYW1lPVwiX2FjdGlvblwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtcImNyZWF0ZVVzZXJcIn1cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNvbG9yU2NoZW1lPXtcImdyZWVuXCJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENyZWF0ZSBQcm9maWxlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxTcGFjZXIgLz5cclxuICAgICAgICA8L0hTdGFjaz5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIHByZXNjcmlwdGlvblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic0MDgwMmQ2MScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtS1NMR0Y2SFQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUY1NDRFRVpTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSUUyTVlVSlEuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LU1XNkFaMkZPLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zWDdES0xYMi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvTG9naW4nOnsnaWQnOidyb3V0ZXMvTG9naW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonTG9naW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvTG9naW4tRDJUQUlWSkwuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTdUTjNFNU5aLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Rhc2hib2FyZCc6eydpZCc6J3JvdXRlcy9kYXNoYm9hcmQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonZGFzaGJvYXJkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Rhc2hib2FyZC1XM1BEUkxSQi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZGFzaGJvYXJkL2luZGV4Jzp7J2lkJzoncm91dGVzL2Rhc2hib2FyZC9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL2Rhc2hib2FyZCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9kYXNoYm9hcmQvaW5kZXgtM0JIN09QUVcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNYN0RLTFgyLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1PQkMyUVlJRC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstN1ROM0U1TlouanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTQwODAy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

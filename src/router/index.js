import React from "react"

export default [
    {
        path: "/",
        name: "Home",
        component: React.lazy(() => import("./pages/About")),
      },
    {
        path: "/",
        name: "Home",
        component: React.lazy(() => import("./pages/About")),
      },
]
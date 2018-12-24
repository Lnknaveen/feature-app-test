import { ReactFeatureApp } from "@feature-hub/react";
import * as React from "react";

export default {
  id: "react:hello-world",

  create(env: any): ReactFeatureApp {
    return {
      render: () => <div>Hello, World!, {env.idSpecifier}</div>
    };
  }
};

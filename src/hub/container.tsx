import { FeatureAppManager, FeatureServiceRegistry } from "@feature-hub/core";
import { defineExternals, loadAmdModule } from "@feature-hub/module-loader";
import { FeatureAppLoader } from "@feature-hub/react";
import * as React from "react";
import * as ReactDOM from "react-dom";

const registry = new FeatureServiceRegistry();
const manager = new FeatureAppManager(registry, {
  moduleLoader: loadAmdModule
});

defineExternals({ react: React });

export class HubLoader extends React.Component {
  render() {
    return (
      <div>
        <FeatureAppLoader
          manager={manager}
          src="react.umd.js"
          idSpecifier="one"
        />
        <FeatureAppLoader
          manager={manager}
          src="react.umd.js"
          idSpecifier="two"
        />
      </div>
    );
  }
}

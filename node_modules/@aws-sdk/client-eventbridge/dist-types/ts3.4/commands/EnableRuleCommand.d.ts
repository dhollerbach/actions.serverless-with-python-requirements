import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import { EnableRuleRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface EnableRuleCommandInput extends EnableRuleRequest {}
export interface EnableRuleCommandOutput extends __MetadataBearer {}
declare const EnableRuleCommand_base: {
  new (
    input: EnableRuleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    EnableRuleCommandInput,
    EnableRuleCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: EnableRuleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    EnableRuleCommandInput,
    EnableRuleCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class EnableRuleCommand extends EnableRuleCommand_base {
  protected static __types: {
    api: {
      input: EnableRuleRequest;
      output: {};
    };
    sdk: {
      input: EnableRuleCommandInput;
      output: EnableRuleCommandOutput;
    };
  };
}

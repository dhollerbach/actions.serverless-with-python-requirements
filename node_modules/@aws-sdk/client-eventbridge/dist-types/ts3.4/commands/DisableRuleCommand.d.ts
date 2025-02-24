import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import { DisableRuleRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DisableRuleCommandInput extends DisableRuleRequest {}
export interface DisableRuleCommandOutput extends __MetadataBearer {}
declare const DisableRuleCommand_base: {
  new (
    input: DisableRuleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DisableRuleCommandInput,
    DisableRuleCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DisableRuleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DisableRuleCommandInput,
    DisableRuleCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DisableRuleCommand extends DisableRuleCommand_base {
  protected static __types: {
    api: {
      input: DisableRuleRequest;
      output: {};
    };
    sdk: {
      input: DisableRuleCommandInput;
      output: DisableRuleCommandOutput;
    };
  };
}

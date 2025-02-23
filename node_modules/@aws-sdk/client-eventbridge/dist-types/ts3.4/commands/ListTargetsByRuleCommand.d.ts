import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  ListTargetsByRuleRequest,
  ListTargetsByRuleResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListTargetsByRuleCommandInput
  extends ListTargetsByRuleRequest {}
export interface ListTargetsByRuleCommandOutput
  extends ListTargetsByRuleResponse,
    __MetadataBearer {}
declare const ListTargetsByRuleCommand_base: {
  new (
    input: ListTargetsByRuleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListTargetsByRuleCommandInput,
    ListTargetsByRuleCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: ListTargetsByRuleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListTargetsByRuleCommandInput,
    ListTargetsByRuleCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListTargetsByRuleCommand extends ListTargetsByRuleCommand_base {
  protected static __types: {
    api: {
      input: ListTargetsByRuleRequest;
      output: ListTargetsByRuleResponse;
    };
    sdk: {
      input: ListTargetsByRuleCommandInput;
      output: ListTargetsByRuleCommandOutput;
    };
  };
}

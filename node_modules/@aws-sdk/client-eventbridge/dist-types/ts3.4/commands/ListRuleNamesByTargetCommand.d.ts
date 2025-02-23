import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  ListRuleNamesByTargetRequest,
  ListRuleNamesByTargetResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListRuleNamesByTargetCommandInput
  extends ListRuleNamesByTargetRequest {}
export interface ListRuleNamesByTargetCommandOutput
  extends ListRuleNamesByTargetResponse,
    __MetadataBearer {}
declare const ListRuleNamesByTargetCommand_base: {
  new (
    input: ListRuleNamesByTargetCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListRuleNamesByTargetCommandInput,
    ListRuleNamesByTargetCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: ListRuleNamesByTargetCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListRuleNamesByTargetCommandInput,
    ListRuleNamesByTargetCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListRuleNamesByTargetCommand extends ListRuleNamesByTargetCommand_base {
  protected static __types: {
    api: {
      input: ListRuleNamesByTargetRequest;
      output: ListRuleNamesByTargetResponse;
    };
    sdk: {
      input: ListRuleNamesByTargetCommandInput;
      output: ListRuleNamesByTargetCommandOutput;
    };
  };
}

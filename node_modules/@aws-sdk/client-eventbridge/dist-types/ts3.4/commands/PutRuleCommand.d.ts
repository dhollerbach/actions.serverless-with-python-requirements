import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import { PutRuleRequest, PutRuleResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface PutRuleCommandInput extends PutRuleRequest {}
export interface PutRuleCommandOutput
  extends PutRuleResponse,
    __MetadataBearer {}
declare const PutRuleCommand_base: {
  new (input: PutRuleCommandInput): import("@smithy/smithy-client").CommandImpl<
    PutRuleCommandInput,
    PutRuleCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (__0_0: PutRuleCommandInput): import("@smithy/smithy-client").CommandImpl<
    PutRuleCommandInput,
    PutRuleCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class PutRuleCommand extends PutRuleCommand_base {
  protected static __types: {
    api: {
      input: PutRuleRequest;
      output: PutRuleResponse;
    };
    sdk: {
      input: PutRuleCommandInput;
      output: PutRuleCommandOutput;
    };
  };
}

import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import { DescribeRuleRequest, DescribeRuleResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DescribeRuleCommandInput extends DescribeRuleRequest {}
export interface DescribeRuleCommandOutput
  extends DescribeRuleResponse,
    __MetadataBearer {}
declare const DescribeRuleCommand_base: {
  new (
    input: DescribeRuleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeRuleCommandInput,
    DescribeRuleCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DescribeRuleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeRuleCommandInput,
    DescribeRuleCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeRuleCommand extends DescribeRuleCommand_base {
  protected static __types: {
    api: {
      input: DescribeRuleRequest;
      output: DescribeRuleResponse;
    };
    sdk: {
      input: DescribeRuleCommandInput;
      output: DescribeRuleCommandOutput;
    };
  };
}

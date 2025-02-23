import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  DescribeEventSourceRequest,
  DescribeEventSourceResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DescribeEventSourceCommandInput
  extends DescribeEventSourceRequest {}
export interface DescribeEventSourceCommandOutput
  extends DescribeEventSourceResponse,
    __MetadataBearer {}
declare const DescribeEventSourceCommand_base: {
  new (
    input: DescribeEventSourceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeEventSourceCommandInput,
    DescribeEventSourceCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DescribeEventSourceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeEventSourceCommandInput,
    DescribeEventSourceCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeEventSourceCommand extends DescribeEventSourceCommand_base {
  protected static __types: {
    api: {
      input: DescribeEventSourceRequest;
      output: DescribeEventSourceResponse;
    };
    sdk: {
      input: DescribeEventSourceCommandInput;
      output: DescribeEventSourceCommandOutput;
    };
  };
}

import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  DescribeEndpointRequest,
  DescribeEndpointResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DescribeEndpointCommandInput extends DescribeEndpointRequest {}
export interface DescribeEndpointCommandOutput
  extends DescribeEndpointResponse,
    __MetadataBearer {}
declare const DescribeEndpointCommand_base: {
  new (
    input: DescribeEndpointCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeEndpointCommandInput,
    DescribeEndpointCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DescribeEndpointCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeEndpointCommandInput,
    DescribeEndpointCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeEndpointCommand extends DescribeEndpointCommand_base {
  protected static __types: {
    api: {
      input: DescribeEndpointRequest;
      output: DescribeEndpointResponse;
    };
    sdk: {
      input: DescribeEndpointCommandInput;
      output: DescribeEndpointCommandOutput;
    };
  };
}

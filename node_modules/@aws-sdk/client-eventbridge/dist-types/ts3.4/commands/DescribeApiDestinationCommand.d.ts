import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  DescribeApiDestinationRequest,
  DescribeApiDestinationResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DescribeApiDestinationCommandInput
  extends DescribeApiDestinationRequest {}
export interface DescribeApiDestinationCommandOutput
  extends DescribeApiDestinationResponse,
    __MetadataBearer {}
declare const DescribeApiDestinationCommand_base: {
  new (
    input: DescribeApiDestinationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeApiDestinationCommandInput,
    DescribeApiDestinationCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DescribeApiDestinationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeApiDestinationCommandInput,
    DescribeApiDestinationCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeApiDestinationCommand extends DescribeApiDestinationCommand_base {
  protected static __types: {
    api: {
      input: DescribeApiDestinationRequest;
      output: DescribeApiDestinationResponse;
    };
    sdk: {
      input: DescribeApiDestinationCommandInput;
      output: DescribeApiDestinationCommandOutput;
    };
  };
}

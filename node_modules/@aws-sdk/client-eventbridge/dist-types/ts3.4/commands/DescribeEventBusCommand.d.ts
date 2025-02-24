import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  DescribeEventBusRequest,
  DescribeEventBusResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DescribeEventBusCommandInput extends DescribeEventBusRequest {}
export interface DescribeEventBusCommandOutput
  extends DescribeEventBusResponse,
    __MetadataBearer {}
declare const DescribeEventBusCommand_base: {
  new (
    input: DescribeEventBusCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeEventBusCommandInput,
    DescribeEventBusCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeEventBusCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeEventBusCommandInput,
    DescribeEventBusCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeEventBusCommand extends DescribeEventBusCommand_base {
  protected static __types: {
    api: {
      input: DescribeEventBusRequest;
      output: DescribeEventBusResponse;
    };
    sdk: {
      input: DescribeEventBusCommandInput;
      output: DescribeEventBusCommandOutput;
    };
  };
}

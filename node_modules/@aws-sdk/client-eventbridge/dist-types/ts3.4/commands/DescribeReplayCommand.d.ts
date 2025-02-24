import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  DescribeReplayRequest,
  DescribeReplayResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DescribeReplayCommandInput extends DescribeReplayRequest {}
export interface DescribeReplayCommandOutput
  extends DescribeReplayResponse,
    __MetadataBearer {}
declare const DescribeReplayCommand_base: {
  new (
    input: DescribeReplayCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeReplayCommandInput,
    DescribeReplayCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DescribeReplayCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeReplayCommandInput,
    DescribeReplayCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeReplayCommand extends DescribeReplayCommand_base {
  protected static __types: {
    api: {
      input: DescribeReplayRequest;
      output: DescribeReplayResponse;
    };
    sdk: {
      input: DescribeReplayCommandInput;
      output: DescribeReplayCommandOutput;
    };
  };
}

import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  DescribeConnectionRequest,
  DescribeConnectionResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DescribeConnectionCommandInput
  extends DescribeConnectionRequest {}
export interface DescribeConnectionCommandOutput
  extends DescribeConnectionResponse,
    __MetadataBearer {}
declare const DescribeConnectionCommand_base: {
  new (
    input: DescribeConnectionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeConnectionCommandInput,
    DescribeConnectionCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DescribeConnectionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeConnectionCommandInput,
    DescribeConnectionCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeConnectionCommand extends DescribeConnectionCommand_base {
  protected static __types: {
    api: {
      input: DescribeConnectionRequest;
      output: DescribeConnectionResponse;
    };
    sdk: {
      input: DescribeConnectionCommandInput;
      output: DescribeConnectionCommandOutput;
    };
  };
}

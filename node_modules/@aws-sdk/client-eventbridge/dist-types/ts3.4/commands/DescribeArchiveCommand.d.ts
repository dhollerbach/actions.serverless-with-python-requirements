import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  DescribeArchiveRequest,
  DescribeArchiveResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DescribeArchiveCommandInput extends DescribeArchiveRequest {}
export interface DescribeArchiveCommandOutput
  extends DescribeArchiveResponse,
    __MetadataBearer {}
declare const DescribeArchiveCommand_base: {
  new (
    input: DescribeArchiveCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeArchiveCommandInput,
    DescribeArchiveCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DescribeArchiveCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeArchiveCommandInput,
    DescribeArchiveCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeArchiveCommand extends DescribeArchiveCommand_base {
  protected static __types: {
    api: {
      input: DescribeArchiveRequest;
      output: DescribeArchiveResponse;
    };
    sdk: {
      input: DescribeArchiveCommandInput;
      output: DescribeArchiveCommandOutput;
    };
  };
}

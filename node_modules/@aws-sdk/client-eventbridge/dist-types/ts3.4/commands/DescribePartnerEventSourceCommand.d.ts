import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  DescribePartnerEventSourceRequest,
  DescribePartnerEventSourceResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DescribePartnerEventSourceCommandInput
  extends DescribePartnerEventSourceRequest {}
export interface DescribePartnerEventSourceCommandOutput
  extends DescribePartnerEventSourceResponse,
    __MetadataBearer {}
declare const DescribePartnerEventSourceCommand_base: {
  new (
    input: DescribePartnerEventSourceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribePartnerEventSourceCommandInput,
    DescribePartnerEventSourceCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DescribePartnerEventSourceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribePartnerEventSourceCommandInput,
    DescribePartnerEventSourceCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribePartnerEventSourceCommand extends DescribePartnerEventSourceCommand_base {
  protected static __types: {
    api: {
      input: DescribePartnerEventSourceRequest;
      output: DescribePartnerEventSourceResponse;
    };
    sdk: {
      input: DescribePartnerEventSourceCommandInput;
      output: DescribePartnerEventSourceCommandOutput;
    };
  };
}

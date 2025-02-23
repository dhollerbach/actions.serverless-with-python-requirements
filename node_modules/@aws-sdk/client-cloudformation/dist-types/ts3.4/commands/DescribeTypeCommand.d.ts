import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudFormationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudFormationClient";
import { DescribeTypeInput, DescribeTypeOutput } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DescribeTypeCommandInput extends DescribeTypeInput {}
export interface DescribeTypeCommandOutput
  extends DescribeTypeOutput,
    __MetadataBearer {}
declare const DescribeTypeCommand_base: {
  new (
    input: DescribeTypeCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeTypeCommandInput,
    DescribeTypeCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeTypeCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeTypeCommandInput,
    DescribeTypeCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeTypeCommand extends DescribeTypeCommand_base {
  protected static __types: {
    api: {
      input: DescribeTypeInput;
      output: DescribeTypeOutput;
    };
    sdk: {
      input: DescribeTypeCommandInput;
      output: DescribeTypeCommandOutput;
    };
  };
}

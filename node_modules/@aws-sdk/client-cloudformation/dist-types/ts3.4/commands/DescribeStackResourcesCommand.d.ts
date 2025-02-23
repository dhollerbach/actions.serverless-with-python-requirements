import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudFormationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudFormationClient";
import {
  DescribeStackResourcesInput,
  DescribeStackResourcesOutput,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DescribeStackResourcesCommandInput
  extends DescribeStackResourcesInput {}
export interface DescribeStackResourcesCommandOutput
  extends DescribeStackResourcesOutput,
    __MetadataBearer {}
declare const DescribeStackResourcesCommand_base: {
  new (
    input: DescribeStackResourcesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeStackResourcesCommandInput,
    DescribeStackResourcesCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeStackResourcesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeStackResourcesCommandInput,
    DescribeStackResourcesCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeStackResourcesCommand extends DescribeStackResourcesCommand_base {
  protected static __types: {
    api: {
      input: DescribeStackResourcesInput;
      output: DescribeStackResourcesOutput;
    };
    sdk: {
      input: DescribeStackResourcesCommandInput;
      output: DescribeStackResourcesCommandOutput;
    };
  };
}

import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudFormationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudFormationClient";
import {
  GetTemplateSummaryInput,
  GetTemplateSummaryOutput,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetTemplateSummaryCommandInput
  extends GetTemplateSummaryInput {}
export interface GetTemplateSummaryCommandOutput
  extends GetTemplateSummaryOutput,
    __MetadataBearer {}
declare const GetTemplateSummaryCommand_base: {
  new (
    input: GetTemplateSummaryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetTemplateSummaryCommandInput,
    GetTemplateSummaryCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [GetTemplateSummaryCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    GetTemplateSummaryCommandInput,
    GetTemplateSummaryCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetTemplateSummaryCommand extends GetTemplateSummaryCommand_base {
  protected static __types: {
    api: {
      input: GetTemplateSummaryInput;
      output: GetTemplateSummaryOutput;
    };
    sdk: {
      input: GetTemplateSummaryCommandInput;
      output: GetTemplateSummaryCommandOutput;
    };
  };
}

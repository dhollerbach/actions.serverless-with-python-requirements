import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudFormationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudFormationClient";
import {
  EstimateTemplateCostInput,
  EstimateTemplateCostOutput,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface EstimateTemplateCostCommandInput
  extends EstimateTemplateCostInput {}
export interface EstimateTemplateCostCommandOutput
  extends EstimateTemplateCostOutput,
    __MetadataBearer {}
declare const EstimateTemplateCostCommand_base: {
  new (
    input: EstimateTemplateCostCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    EstimateTemplateCostCommandInput,
    EstimateTemplateCostCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [EstimateTemplateCostCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    EstimateTemplateCostCommandInput,
    EstimateTemplateCostCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class EstimateTemplateCostCommand extends EstimateTemplateCostCommand_base {
  protected static __types: {
    api: {
      input: EstimateTemplateCostInput;
      output: EstimateTemplateCostOutput;
    };
    sdk: {
      input: EstimateTemplateCostCommandInput;
      output: EstimateTemplateCostCommandOutput;
    };
  };
}

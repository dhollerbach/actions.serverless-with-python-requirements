import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  GenerateOrganizationsAccessReportRequest,
  GenerateOrganizationsAccessReportResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GenerateOrganizationsAccessReportCommandInput
  extends GenerateOrganizationsAccessReportRequest {}
export interface GenerateOrganizationsAccessReportCommandOutput
  extends GenerateOrganizationsAccessReportResponse,
    __MetadataBearer {}
declare const GenerateOrganizationsAccessReportCommand_base: {
  new (
    input: GenerateOrganizationsAccessReportCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GenerateOrganizationsAccessReportCommandInput,
    GenerateOrganizationsAccessReportCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: GenerateOrganizationsAccessReportCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GenerateOrganizationsAccessReportCommandInput,
    GenerateOrganizationsAccessReportCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GenerateOrganizationsAccessReportCommand extends GenerateOrganizationsAccessReportCommand_base {
  protected static __types: {
    api: {
      input: GenerateOrganizationsAccessReportRequest;
      output: GenerateOrganizationsAccessReportResponse;
    };
    sdk: {
      input: GenerateOrganizationsAccessReportCommandInput;
      output: GenerateOrganizationsAccessReportCommandOutput;
    };
  };
}

import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  GetOrganizationsAccessReportRequest,
  GetOrganizationsAccessReportResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetOrganizationsAccessReportCommandInput
  extends GetOrganizationsAccessReportRequest {}
export interface GetOrganizationsAccessReportCommandOutput
  extends GetOrganizationsAccessReportResponse,
    __MetadataBearer {}
declare const GetOrganizationsAccessReportCommand_base: {
  new (
    input: GetOrganizationsAccessReportCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetOrganizationsAccessReportCommandInput,
    GetOrganizationsAccessReportCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: GetOrganizationsAccessReportCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetOrganizationsAccessReportCommandInput,
    GetOrganizationsAccessReportCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetOrganizationsAccessReportCommand extends GetOrganizationsAccessReportCommand_base {
  protected static __types: {
    api: {
      input: GetOrganizationsAccessReportRequest;
      output: GetOrganizationsAccessReportResponse;
    };
    sdk: {
      input: GetOrganizationsAccessReportCommandInput;
      output: GetOrganizationsAccessReportCommandOutput;
    };
  };
}

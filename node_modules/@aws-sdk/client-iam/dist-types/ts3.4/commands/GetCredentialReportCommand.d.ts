import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { GetCredentialReportResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetCredentialReportCommandInput {}
export interface GetCredentialReportCommandOutput
  extends GetCredentialReportResponse,
    __MetadataBearer {}
declare const GetCredentialReportCommand_base: {
  new (
    input: GetCredentialReportCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetCredentialReportCommandInput,
    GetCredentialReportCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [GetCredentialReportCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    GetCredentialReportCommandInput,
    GetCredentialReportCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetCredentialReportCommand extends GetCredentialReportCommand_base {
  protected static __types: {
    api: {
      input: {};
      output: GetCredentialReportResponse;
    };
    sdk: {
      input: GetCredentialReportCommandInput;
      output: GetCredentialReportCommandOutput;
    };
  };
}

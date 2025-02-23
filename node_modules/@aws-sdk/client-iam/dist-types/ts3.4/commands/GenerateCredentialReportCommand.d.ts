import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { GenerateCredentialReportResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GenerateCredentialReportCommandInput {}
export interface GenerateCredentialReportCommandOutput
  extends GenerateCredentialReportResponse,
    __MetadataBearer {}
declare const GenerateCredentialReportCommand_base: {
  new (
    input: GenerateCredentialReportCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GenerateCredentialReportCommandInput,
    GenerateCredentialReportCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [GenerateCredentialReportCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    GenerateCredentialReportCommandInput,
    GenerateCredentialReportCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GenerateCredentialReportCommand extends GenerateCredentialReportCommand_base {
  protected static __types: {
    api: {
      input: {};
      output: GenerateCredentialReportResponse;
    };
    sdk: {
      input: GenerateCredentialReportCommandInput;
      output: GenerateCredentialReportCommandOutput;
    };
  };
}

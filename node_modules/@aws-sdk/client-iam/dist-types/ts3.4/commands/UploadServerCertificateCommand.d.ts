import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  UploadServerCertificateRequest,
  UploadServerCertificateResponse,
} from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface UploadServerCertificateCommandInput
  extends UploadServerCertificateRequest {}
export interface UploadServerCertificateCommandOutput
  extends UploadServerCertificateResponse,
    __MetadataBearer {}
declare const UploadServerCertificateCommand_base: {
  new (
    input: UploadServerCertificateCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UploadServerCertificateCommandInput,
    UploadServerCertificateCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: UploadServerCertificateCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UploadServerCertificateCommandInput,
    UploadServerCertificateCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UploadServerCertificateCommand extends UploadServerCertificateCommand_base {
  protected static __types: {
    api: {
      input: UploadServerCertificateRequest;
      output: UploadServerCertificateResponse;
    };
    sdk: {
      input: UploadServerCertificateCommandInput;
      output: UploadServerCertificateCommandOutput;
    };
  };
}

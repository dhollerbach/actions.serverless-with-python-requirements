import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  UploadSigningCertificateRequest,
  UploadSigningCertificateResponse,
} from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface UploadSigningCertificateCommandInput
  extends UploadSigningCertificateRequest {}
export interface UploadSigningCertificateCommandOutput
  extends UploadSigningCertificateResponse,
    __MetadataBearer {}
declare const UploadSigningCertificateCommand_base: {
  new (
    input: UploadSigningCertificateCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UploadSigningCertificateCommandInput,
    UploadSigningCertificateCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: UploadSigningCertificateCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UploadSigningCertificateCommandInput,
    UploadSigningCertificateCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UploadSigningCertificateCommand extends UploadSigningCertificateCommand_base {
  protected static __types: {
    api: {
      input: UploadSigningCertificateRequest;
      output: UploadSigningCertificateResponse;
    };
    sdk: {
      input: UploadSigningCertificateCommandInput;
      output: UploadSigningCertificateCommandOutput;
    };
  };
}

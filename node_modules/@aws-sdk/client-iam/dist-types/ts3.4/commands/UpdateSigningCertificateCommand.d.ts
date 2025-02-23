import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { UpdateSigningCertificateRequest } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface UpdateSigningCertificateCommandInput
  extends UpdateSigningCertificateRequest {}
export interface UpdateSigningCertificateCommandOutput
  extends __MetadataBearer {}
declare const UpdateSigningCertificateCommand_base: {
  new (
    input: UpdateSigningCertificateCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateSigningCertificateCommandInput,
    UpdateSigningCertificateCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: UpdateSigningCertificateCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateSigningCertificateCommandInput,
    UpdateSigningCertificateCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateSigningCertificateCommand extends UpdateSigningCertificateCommand_base {
  protected static __types: {
    api: {
      input: UpdateSigningCertificateRequest;
      output: {};
    };
    sdk: {
      input: UpdateSigningCertificateCommandInput;
      output: UpdateSigningCertificateCommandOutput;
    };
  };
}

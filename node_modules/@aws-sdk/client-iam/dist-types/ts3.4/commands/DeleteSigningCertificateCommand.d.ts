import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { DeleteSigningCertificateRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteSigningCertificateCommandInput
  extends DeleteSigningCertificateRequest {}
export interface DeleteSigningCertificateCommandOutput
  extends __MetadataBearer {}
declare const DeleteSigningCertificateCommand_base: {
  new (
    input: DeleteSigningCertificateCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteSigningCertificateCommandInput,
    DeleteSigningCertificateCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeleteSigningCertificateCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteSigningCertificateCommandInput,
    DeleteSigningCertificateCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteSigningCertificateCommand extends DeleteSigningCertificateCommand_base {
  protected static __types: {
    api: {
      input: DeleteSigningCertificateRequest;
      output: {};
    };
    sdk: {
      input: DeleteSigningCertificateCommandInput;
      output: DeleteSigningCertificateCommandOutput;
    };
  };
}

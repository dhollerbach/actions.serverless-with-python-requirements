import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { DeleteServerCertificateRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteServerCertificateCommandInput
  extends DeleteServerCertificateRequest {}
export interface DeleteServerCertificateCommandOutput
  extends __MetadataBearer {}
declare const DeleteServerCertificateCommand_base: {
  new (
    input: DeleteServerCertificateCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteServerCertificateCommandInput,
    DeleteServerCertificateCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeleteServerCertificateCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteServerCertificateCommandInput,
    DeleteServerCertificateCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteServerCertificateCommand extends DeleteServerCertificateCommand_base {
  protected static __types: {
    api: {
      input: DeleteServerCertificateRequest;
      output: {};
    };
    sdk: {
      input: DeleteServerCertificateCommandInput;
      output: DeleteServerCertificateCommandOutput;
    };
  };
}

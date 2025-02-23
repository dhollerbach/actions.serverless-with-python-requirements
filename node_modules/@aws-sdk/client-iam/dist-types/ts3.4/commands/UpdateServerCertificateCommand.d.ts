import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { UpdateServerCertificateRequest } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface UpdateServerCertificateCommandInput
  extends UpdateServerCertificateRequest {}
export interface UpdateServerCertificateCommandOutput
  extends __MetadataBearer {}
declare const UpdateServerCertificateCommand_base: {
  new (
    input: UpdateServerCertificateCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateServerCertificateCommandInput,
    UpdateServerCertificateCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: UpdateServerCertificateCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateServerCertificateCommandInput,
    UpdateServerCertificateCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateServerCertificateCommand extends UpdateServerCertificateCommand_base {
  protected static __types: {
    api: {
      input: UpdateServerCertificateRequest;
      output: {};
    };
    sdk: {
      input: UpdateServerCertificateCommandInput;
      output: UpdateServerCertificateCommandOutput;
    };
  };
}

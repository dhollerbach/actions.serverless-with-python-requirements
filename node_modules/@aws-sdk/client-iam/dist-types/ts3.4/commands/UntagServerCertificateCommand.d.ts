import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { UntagServerCertificateRequest } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface UntagServerCertificateCommandInput
  extends UntagServerCertificateRequest {}
export interface UntagServerCertificateCommandOutput extends __MetadataBearer {}
declare const UntagServerCertificateCommand_base: {
  new (
    input: UntagServerCertificateCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UntagServerCertificateCommandInput,
    UntagServerCertificateCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: UntagServerCertificateCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UntagServerCertificateCommandInput,
    UntagServerCertificateCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UntagServerCertificateCommand extends UntagServerCertificateCommand_base {
  protected static __types: {
    api: {
      input: UntagServerCertificateRequest;
      output: {};
    };
    sdk: {
      input: UntagServerCertificateCommandInput;
      output: UntagServerCertificateCommandOutput;
    };
  };
}

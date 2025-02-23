import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { TagServerCertificateRequest } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface TagServerCertificateCommandInput
  extends TagServerCertificateRequest {}
export interface TagServerCertificateCommandOutput extends __MetadataBearer {}
declare const TagServerCertificateCommand_base: {
  new (
    input: TagServerCertificateCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    TagServerCertificateCommandInput,
    TagServerCertificateCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: TagServerCertificateCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    TagServerCertificateCommandInput,
    TagServerCertificateCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class TagServerCertificateCommand extends TagServerCertificateCommand_base {
  protected static __types: {
    api: {
      input: TagServerCertificateRequest;
      output: {};
    };
    sdk: {
      input: TagServerCertificateCommandInput;
      output: TagServerCertificateCommandOutput;
    };
  };
}

import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  UploadSSHPublicKeyRequest,
  UploadSSHPublicKeyResponse,
} from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface UploadSSHPublicKeyCommandInput
  extends UploadSSHPublicKeyRequest {}
export interface UploadSSHPublicKeyCommandOutput
  extends UploadSSHPublicKeyResponse,
    __MetadataBearer {}
declare const UploadSSHPublicKeyCommand_base: {
  new (
    input: UploadSSHPublicKeyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UploadSSHPublicKeyCommandInput,
    UploadSSHPublicKeyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: UploadSSHPublicKeyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UploadSSHPublicKeyCommandInput,
    UploadSSHPublicKeyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UploadSSHPublicKeyCommand extends UploadSSHPublicKeyCommand_base {
  protected static __types: {
    api: {
      input: UploadSSHPublicKeyRequest;
      output: UploadSSHPublicKeyResponse;
    };
    sdk: {
      input: UploadSSHPublicKeyCommandInput;
      output: UploadSSHPublicKeyCommandOutput;
    };
  };
}

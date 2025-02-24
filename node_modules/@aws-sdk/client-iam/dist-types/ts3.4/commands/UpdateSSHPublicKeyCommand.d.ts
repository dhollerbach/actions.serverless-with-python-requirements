import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { UpdateSSHPublicKeyRequest } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface UpdateSSHPublicKeyCommandInput
  extends UpdateSSHPublicKeyRequest {}
export interface UpdateSSHPublicKeyCommandOutput extends __MetadataBearer {}
declare const UpdateSSHPublicKeyCommand_base: {
  new (
    input: UpdateSSHPublicKeyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateSSHPublicKeyCommandInput,
    UpdateSSHPublicKeyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: UpdateSSHPublicKeyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateSSHPublicKeyCommandInput,
    UpdateSSHPublicKeyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateSSHPublicKeyCommand extends UpdateSSHPublicKeyCommand_base {
  protected static __types: {
    api: {
      input: UpdateSSHPublicKeyRequest;
      output: {};
    };
    sdk: {
      input: UpdateSSHPublicKeyCommandInput;
      output: UpdateSSHPublicKeyCommandOutput;
    };
  };
}

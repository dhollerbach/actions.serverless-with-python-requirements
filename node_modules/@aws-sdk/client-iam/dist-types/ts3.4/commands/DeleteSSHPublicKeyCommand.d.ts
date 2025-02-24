import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { DeleteSSHPublicKeyRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteSSHPublicKeyCommandInput
  extends DeleteSSHPublicKeyRequest {}
export interface DeleteSSHPublicKeyCommandOutput extends __MetadataBearer {}
declare const DeleteSSHPublicKeyCommand_base: {
  new (
    input: DeleteSSHPublicKeyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteSSHPublicKeyCommandInput,
    DeleteSSHPublicKeyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeleteSSHPublicKeyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteSSHPublicKeyCommandInput,
    DeleteSSHPublicKeyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteSSHPublicKeyCommand extends DeleteSSHPublicKeyCommand_base {
  protected static __types: {
    api: {
      input: DeleteSSHPublicKeyRequest;
      output: {};
    };
    sdk: {
      input: DeleteSSHPublicKeyCommandInput;
      output: DeleteSSHPublicKeyCommandOutput;
    };
  };
}

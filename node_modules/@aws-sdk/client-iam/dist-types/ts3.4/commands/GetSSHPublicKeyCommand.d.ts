import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  GetSSHPublicKeyRequest,
  GetSSHPublicKeyResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetSSHPublicKeyCommandInput extends GetSSHPublicKeyRequest {}
export interface GetSSHPublicKeyCommandOutput
  extends GetSSHPublicKeyResponse,
    __MetadataBearer {}
declare const GetSSHPublicKeyCommand_base: {
  new (
    input: GetSSHPublicKeyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetSSHPublicKeyCommandInput,
    GetSSHPublicKeyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: GetSSHPublicKeyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetSSHPublicKeyCommandInput,
    GetSSHPublicKeyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetSSHPublicKeyCommand extends GetSSHPublicKeyCommand_base {
  protected static __types: {
    api: {
      input: GetSSHPublicKeyRequest;
      output: GetSSHPublicKeyResponse;
    };
    sdk: {
      input: GetSSHPublicKeyCommandInput;
      output: GetSSHPublicKeyCommandOutput;
    };
  };
}

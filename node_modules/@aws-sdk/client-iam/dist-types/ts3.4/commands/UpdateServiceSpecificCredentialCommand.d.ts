import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { UpdateServiceSpecificCredentialRequest } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface UpdateServiceSpecificCredentialCommandInput
  extends UpdateServiceSpecificCredentialRequest {}
export interface UpdateServiceSpecificCredentialCommandOutput
  extends __MetadataBearer {}
declare const UpdateServiceSpecificCredentialCommand_base: {
  new (
    input: UpdateServiceSpecificCredentialCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateServiceSpecificCredentialCommandInput,
    UpdateServiceSpecificCredentialCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: UpdateServiceSpecificCredentialCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateServiceSpecificCredentialCommandInput,
    UpdateServiceSpecificCredentialCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateServiceSpecificCredentialCommand extends UpdateServiceSpecificCredentialCommand_base {
  protected static __types: {
    api: {
      input: UpdateServiceSpecificCredentialRequest;
      output: {};
    };
    sdk: {
      input: UpdateServiceSpecificCredentialCommandInput;
      output: UpdateServiceSpecificCredentialCommandOutput;
    };
  };
}

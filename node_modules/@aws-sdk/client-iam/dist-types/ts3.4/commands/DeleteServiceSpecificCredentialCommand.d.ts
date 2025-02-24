import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { DeleteServiceSpecificCredentialRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteServiceSpecificCredentialCommandInput
  extends DeleteServiceSpecificCredentialRequest {}
export interface DeleteServiceSpecificCredentialCommandOutput
  extends __MetadataBearer {}
declare const DeleteServiceSpecificCredentialCommand_base: {
  new (
    input: DeleteServiceSpecificCredentialCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteServiceSpecificCredentialCommandInput,
    DeleteServiceSpecificCredentialCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeleteServiceSpecificCredentialCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteServiceSpecificCredentialCommandInput,
    DeleteServiceSpecificCredentialCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteServiceSpecificCredentialCommand extends DeleteServiceSpecificCredentialCommand_base {
  protected static __types: {
    api: {
      input: DeleteServiceSpecificCredentialRequest;
      output: {};
    };
    sdk: {
      input: DeleteServiceSpecificCredentialCommandInput;
      output: DeleteServiceSpecificCredentialCommandOutput;
    };
  };
}

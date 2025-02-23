import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  CreateServiceSpecificCredentialRequest,
  CreateServiceSpecificCredentialResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateServiceSpecificCredentialCommandInput
  extends CreateServiceSpecificCredentialRequest {}
export interface CreateServiceSpecificCredentialCommandOutput
  extends CreateServiceSpecificCredentialResponse,
    __MetadataBearer {}
declare const CreateServiceSpecificCredentialCommand_base: {
  new (
    input: CreateServiceSpecificCredentialCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateServiceSpecificCredentialCommandInput,
    CreateServiceSpecificCredentialCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: CreateServiceSpecificCredentialCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateServiceSpecificCredentialCommandInput,
    CreateServiceSpecificCredentialCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateServiceSpecificCredentialCommand extends CreateServiceSpecificCredentialCommand_base {
  protected static __types: {
    api: {
      input: CreateServiceSpecificCredentialRequest;
      output: CreateServiceSpecificCredentialResponse;
    };
    sdk: {
      input: CreateServiceSpecificCredentialCommandInput;
      output: CreateServiceSpecificCredentialCommandOutput;
    };
  };
}

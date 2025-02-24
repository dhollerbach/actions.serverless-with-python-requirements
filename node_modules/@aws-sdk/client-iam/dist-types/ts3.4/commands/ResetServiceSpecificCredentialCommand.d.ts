import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ResetServiceSpecificCredentialRequest,
  ResetServiceSpecificCredentialResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ResetServiceSpecificCredentialCommandInput
  extends ResetServiceSpecificCredentialRequest {}
export interface ResetServiceSpecificCredentialCommandOutput
  extends ResetServiceSpecificCredentialResponse,
    __MetadataBearer {}
declare const ResetServiceSpecificCredentialCommand_base: {
  new (
    input: ResetServiceSpecificCredentialCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ResetServiceSpecificCredentialCommandInput,
    ResetServiceSpecificCredentialCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: ResetServiceSpecificCredentialCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ResetServiceSpecificCredentialCommandInput,
    ResetServiceSpecificCredentialCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ResetServiceSpecificCredentialCommand extends ResetServiceSpecificCredentialCommand_base {
  protected static __types: {
    api: {
      input: ResetServiceSpecificCredentialRequest;
      output: ResetServiceSpecificCredentialResponse;
    };
    sdk: {
      input: ResetServiceSpecificCredentialCommandInput;
      output: ResetServiceSpecificCredentialCommandOutput;
    };
  };
}

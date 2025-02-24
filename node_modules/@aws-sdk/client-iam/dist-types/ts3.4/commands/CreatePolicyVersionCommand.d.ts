import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  CreatePolicyVersionRequest,
  CreatePolicyVersionResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreatePolicyVersionCommandInput
  extends CreatePolicyVersionRequest {}
export interface CreatePolicyVersionCommandOutput
  extends CreatePolicyVersionResponse,
    __MetadataBearer {}
declare const CreatePolicyVersionCommand_base: {
  new (
    input: CreatePolicyVersionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreatePolicyVersionCommandInput,
    CreatePolicyVersionCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: CreatePolicyVersionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreatePolicyVersionCommandInput,
    CreatePolicyVersionCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreatePolicyVersionCommand extends CreatePolicyVersionCommand_base {
  protected static __types: {
    api: {
      input: CreatePolicyVersionRequest;
      output: CreatePolicyVersionResponse;
    };
    sdk: {
      input: CreatePolicyVersionCommandInput;
      output: CreatePolicyVersionCommandOutput;
    };
  };
}

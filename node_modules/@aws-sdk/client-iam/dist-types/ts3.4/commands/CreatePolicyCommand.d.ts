import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { CreatePolicyRequest, CreatePolicyResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreatePolicyCommandInput extends CreatePolicyRequest {}
export interface CreatePolicyCommandOutput
  extends CreatePolicyResponse,
    __MetadataBearer {}
declare const CreatePolicyCommand_base: {
  new (
    input: CreatePolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreatePolicyCommandInput,
    CreatePolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: CreatePolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreatePolicyCommandInput,
    CreatePolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreatePolicyCommand extends CreatePolicyCommand_base {
  protected static __types: {
    api: {
      input: CreatePolicyRequest;
      output: CreatePolicyResponse;
    };
    sdk: {
      input: CreatePolicyCommandInput;
      output: CreatePolicyCommandOutput;
    };
  };
}

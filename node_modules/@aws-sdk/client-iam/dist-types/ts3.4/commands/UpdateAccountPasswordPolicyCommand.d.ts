import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { UpdateAccountPasswordPolicyRequest } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface UpdateAccountPasswordPolicyCommandInput
  extends UpdateAccountPasswordPolicyRequest {}
export interface UpdateAccountPasswordPolicyCommandOutput
  extends __MetadataBearer {}
declare const UpdateAccountPasswordPolicyCommand_base: {
  new (
    input: UpdateAccountPasswordPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateAccountPasswordPolicyCommandInput,
    UpdateAccountPasswordPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [UpdateAccountPasswordPolicyCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateAccountPasswordPolicyCommandInput,
    UpdateAccountPasswordPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateAccountPasswordPolicyCommand extends UpdateAccountPasswordPolicyCommand_base {
  protected static __types: {
    api: {
      input: UpdateAccountPasswordPolicyRequest;
      output: {};
    };
    sdk: {
      input: UpdateAccountPasswordPolicyCommandInput;
      output: UpdateAccountPasswordPolicyCommandOutput;
    };
  };
}

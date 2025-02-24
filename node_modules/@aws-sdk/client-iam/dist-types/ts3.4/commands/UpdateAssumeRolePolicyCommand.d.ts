import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { UpdateAssumeRolePolicyRequest } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface UpdateAssumeRolePolicyCommandInput
  extends UpdateAssumeRolePolicyRequest {}
export interface UpdateAssumeRolePolicyCommandOutput extends __MetadataBearer {}
declare const UpdateAssumeRolePolicyCommand_base: {
  new (
    input: UpdateAssumeRolePolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateAssumeRolePolicyCommandInput,
    UpdateAssumeRolePolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: UpdateAssumeRolePolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateAssumeRolePolicyCommandInput,
    UpdateAssumeRolePolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateAssumeRolePolicyCommand extends UpdateAssumeRolePolicyCommand_base {
  protected static __types: {
    api: {
      input: UpdateAssumeRolePolicyRequest;
      output: {};
    };
    sdk: {
      input: UpdateAssumeRolePolicyCommandInput;
      output: UpdateAssumeRolePolicyCommandOutput;
    };
  };
}

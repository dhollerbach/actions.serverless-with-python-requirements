import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { DeleteUserPolicyRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteUserPolicyCommandInput extends DeleteUserPolicyRequest {}
export interface DeleteUserPolicyCommandOutput extends __MetadataBearer {}
declare const DeleteUserPolicyCommand_base: {
  new (
    input: DeleteUserPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteUserPolicyCommandInput,
    DeleteUserPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeleteUserPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteUserPolicyCommandInput,
    DeleteUserPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteUserPolicyCommand extends DeleteUserPolicyCommand_base {
  protected static __types: {
    api: {
      input: DeleteUserPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteUserPolicyCommandInput;
      output: DeleteUserPolicyCommandOutput;
    };
  };
}

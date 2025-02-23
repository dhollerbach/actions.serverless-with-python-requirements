import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { DeleteRolePolicyRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteRolePolicyCommandInput extends DeleteRolePolicyRequest {}
export interface DeleteRolePolicyCommandOutput extends __MetadataBearer {}
declare const DeleteRolePolicyCommand_base: {
  new (
    input: DeleteRolePolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteRolePolicyCommandInput,
    DeleteRolePolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeleteRolePolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteRolePolicyCommandInput,
    DeleteRolePolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteRolePolicyCommand extends DeleteRolePolicyCommand_base {
  protected static __types: {
    api: {
      input: DeleteRolePolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteRolePolicyCommandInput;
      output: DeleteRolePolicyCommandOutput;
    };
  };
}

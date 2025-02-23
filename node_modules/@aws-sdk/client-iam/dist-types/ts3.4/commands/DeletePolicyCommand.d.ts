import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { DeletePolicyRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeletePolicyCommandInput extends DeletePolicyRequest {}
export interface DeletePolicyCommandOutput extends __MetadataBearer {}
declare const DeletePolicyCommand_base: {
  new (
    input: DeletePolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeletePolicyCommandInput,
    DeletePolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeletePolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeletePolicyCommandInput,
    DeletePolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeletePolicyCommand extends DeletePolicyCommand_base {
  protected static __types: {
    api: {
      input: DeletePolicyRequest;
      output: {};
    };
    sdk: {
      input: DeletePolicyCommandInput;
      output: DeletePolicyCommandOutput;
    };
  };
}

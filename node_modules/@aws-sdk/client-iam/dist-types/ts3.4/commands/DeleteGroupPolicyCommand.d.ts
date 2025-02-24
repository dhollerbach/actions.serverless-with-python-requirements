import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { DeleteGroupPolicyRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteGroupPolicyCommandInput
  extends DeleteGroupPolicyRequest {}
export interface DeleteGroupPolicyCommandOutput extends __MetadataBearer {}
declare const DeleteGroupPolicyCommand_base: {
  new (
    input: DeleteGroupPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteGroupPolicyCommandInput,
    DeleteGroupPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeleteGroupPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteGroupPolicyCommandInput,
    DeleteGroupPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteGroupPolicyCommand extends DeleteGroupPolicyCommand_base {
  protected static __types: {
    api: {
      input: DeleteGroupPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteGroupPolicyCommandInput;
      output: DeleteGroupPolicyCommandOutput;
    };
  };
}

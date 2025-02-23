import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { DeletePolicyVersionRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeletePolicyVersionCommandInput
  extends DeletePolicyVersionRequest {}
export interface DeletePolicyVersionCommandOutput extends __MetadataBearer {}
declare const DeletePolicyVersionCommand_base: {
  new (
    input: DeletePolicyVersionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeletePolicyVersionCommandInput,
    DeletePolicyVersionCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeletePolicyVersionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeletePolicyVersionCommandInput,
    DeletePolicyVersionCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeletePolicyVersionCommand extends DeletePolicyVersionCommand_base {
  protected static __types: {
    api: {
      input: DeletePolicyVersionRequest;
      output: {};
    };
    sdk: {
      input: DeletePolicyVersionCommandInput;
      output: DeletePolicyVersionCommandOutput;
    };
  };
}

import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  GetUserPolicyRequest,
  GetUserPolicyResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetUserPolicyCommandInput extends GetUserPolicyRequest {}
export interface GetUserPolicyCommandOutput
  extends GetUserPolicyResponse,
    __MetadataBearer {}
declare const GetUserPolicyCommand_base: {
  new (
    input: GetUserPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetUserPolicyCommandInput,
    GetUserPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: GetUserPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetUserPolicyCommandInput,
    GetUserPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetUserPolicyCommand extends GetUserPolicyCommand_base {
  protected static __types: {
    api: {
      input: GetUserPolicyRequest;
      output: GetUserPolicyResponse;
    };
    sdk: {
      input: GetUserPolicyCommandInput;
      output: GetUserPolicyCommandOutput;
    };
  };
}

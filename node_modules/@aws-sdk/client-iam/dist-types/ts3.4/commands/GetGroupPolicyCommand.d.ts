import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  GetGroupPolicyRequest,
  GetGroupPolicyResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetGroupPolicyCommandInput extends GetGroupPolicyRequest {}
export interface GetGroupPolicyCommandOutput
  extends GetGroupPolicyResponse,
    __MetadataBearer {}
declare const GetGroupPolicyCommand_base: {
  new (
    input: GetGroupPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetGroupPolicyCommandInput,
    GetGroupPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: GetGroupPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetGroupPolicyCommandInput,
    GetGroupPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetGroupPolicyCommand extends GetGroupPolicyCommand_base {
  protected static __types: {
    api: {
      input: GetGroupPolicyRequest;
      output: GetGroupPolicyResponse;
    };
    sdk: {
      input: GetGroupPolicyCommandInput;
      output: GetGroupPolicyCommandOutput;
    };
  };
}

import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  GetRolePolicyRequest,
  GetRolePolicyResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetRolePolicyCommandInput extends GetRolePolicyRequest {}
export interface GetRolePolicyCommandOutput
  extends GetRolePolicyResponse,
    __MetadataBearer {}
declare const GetRolePolicyCommand_base: {
  new (
    input: GetRolePolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetRolePolicyCommandInput,
    GetRolePolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: GetRolePolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetRolePolicyCommandInput,
    GetRolePolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetRolePolicyCommand extends GetRolePolicyCommand_base {
  protected static __types: {
    api: {
      input: GetRolePolicyRequest;
      output: GetRolePolicyResponse;
    };
    sdk: {
      input: GetRolePolicyCommandInput;
      output: GetRolePolicyCommandOutput;
    };
  };
}

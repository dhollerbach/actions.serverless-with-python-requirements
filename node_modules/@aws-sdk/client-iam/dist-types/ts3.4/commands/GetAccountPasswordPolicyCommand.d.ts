import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { GetAccountPasswordPolicyResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetAccountPasswordPolicyCommandInput {}
export interface GetAccountPasswordPolicyCommandOutput
  extends GetAccountPasswordPolicyResponse,
    __MetadataBearer {}
declare const GetAccountPasswordPolicyCommand_base: {
  new (
    input: GetAccountPasswordPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetAccountPasswordPolicyCommandInput,
    GetAccountPasswordPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [GetAccountPasswordPolicyCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    GetAccountPasswordPolicyCommandInput,
    GetAccountPasswordPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetAccountPasswordPolicyCommand extends GetAccountPasswordPolicyCommand_base {
  protected static __types: {
    api: {
      input: {};
      output: GetAccountPasswordPolicyResponse;
    };
    sdk: {
      input: GetAccountPasswordPolicyCommandInput;
      output: GetAccountPasswordPolicyCommandOutput;
    };
  };
}

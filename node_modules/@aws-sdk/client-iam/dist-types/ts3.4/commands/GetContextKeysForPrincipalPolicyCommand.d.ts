import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  GetContextKeysForPolicyResponse,
  GetContextKeysForPrincipalPolicyRequest,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetContextKeysForPrincipalPolicyCommandInput
  extends GetContextKeysForPrincipalPolicyRequest {}
export interface GetContextKeysForPrincipalPolicyCommandOutput
  extends GetContextKeysForPolicyResponse,
    __MetadataBearer {}
declare const GetContextKeysForPrincipalPolicyCommand_base: {
  new (
    input: GetContextKeysForPrincipalPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetContextKeysForPrincipalPolicyCommandInput,
    GetContextKeysForPrincipalPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: GetContextKeysForPrincipalPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetContextKeysForPrincipalPolicyCommandInput,
    GetContextKeysForPrincipalPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetContextKeysForPrincipalPolicyCommand extends GetContextKeysForPrincipalPolicyCommand_base {
  protected static __types: {
    api: {
      input: GetContextKeysForPrincipalPolicyRequest;
      output: GetContextKeysForPolicyResponse;
    };
    sdk: {
      input: GetContextKeysForPrincipalPolicyCommandInput;
      output: GetContextKeysForPrincipalPolicyCommandOutput;
    };
  };
}

import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  GetContextKeysForCustomPolicyRequest,
  GetContextKeysForPolicyResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetContextKeysForCustomPolicyCommandInput
  extends GetContextKeysForCustomPolicyRequest {}
export interface GetContextKeysForCustomPolicyCommandOutput
  extends GetContextKeysForPolicyResponse,
    __MetadataBearer {}
declare const GetContextKeysForCustomPolicyCommand_base: {
  new (
    input: GetContextKeysForCustomPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetContextKeysForCustomPolicyCommandInput,
    GetContextKeysForCustomPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: GetContextKeysForCustomPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetContextKeysForCustomPolicyCommandInput,
    GetContextKeysForCustomPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetContextKeysForCustomPolicyCommand extends GetContextKeysForCustomPolicyCommand_base {
  protected static __types: {
    api: {
      input: GetContextKeysForCustomPolicyRequest;
      output: GetContextKeysForPolicyResponse;
    };
    sdk: {
      input: GetContextKeysForCustomPolicyCommandInput;
      output: GetContextKeysForCustomPolicyCommandOutput;
    };
  };
}

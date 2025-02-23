import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  SimulatePolicyResponse,
  SimulatePrincipalPolicyRequest,
} from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface SimulatePrincipalPolicyCommandInput
  extends SimulatePrincipalPolicyRequest {}
export interface SimulatePrincipalPolicyCommandOutput
  extends SimulatePolicyResponse,
    __MetadataBearer {}
declare const SimulatePrincipalPolicyCommand_base: {
  new (
    input: SimulatePrincipalPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    SimulatePrincipalPolicyCommandInput,
    SimulatePrincipalPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: SimulatePrincipalPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    SimulatePrincipalPolicyCommandInput,
    SimulatePrincipalPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class SimulatePrincipalPolicyCommand extends SimulatePrincipalPolicyCommand_base {
  protected static __types: {
    api: {
      input: SimulatePrincipalPolicyRequest;
      output: SimulatePolicyResponse;
    };
    sdk: {
      input: SimulatePrincipalPolicyCommandInput;
      output: SimulatePrincipalPolicyCommandOutput;
    };
  };
}

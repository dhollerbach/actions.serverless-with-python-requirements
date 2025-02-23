import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { SimulateCustomPolicyRequest } from "../models/models_0";
import { SimulatePolicyResponse } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface SimulateCustomPolicyCommandInput
  extends SimulateCustomPolicyRequest {}
export interface SimulateCustomPolicyCommandOutput
  extends SimulatePolicyResponse,
    __MetadataBearer {}
declare const SimulateCustomPolicyCommand_base: {
  new (
    input: SimulateCustomPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    SimulateCustomPolicyCommandInput,
    SimulateCustomPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: SimulateCustomPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    SimulateCustomPolicyCommandInput,
    SimulateCustomPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class SimulateCustomPolicyCommand extends SimulateCustomPolicyCommand_base {
  protected static __types: {
    api: {
      input: SimulateCustomPolicyRequest;
      output: SimulatePolicyResponse;
    };
    sdk: {
      input: SimulateCustomPolicyCommandInput;
      output: SimulateCustomPolicyCommandOutput;
    };
  };
}

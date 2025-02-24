import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { DetachGroupPolicyRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DetachGroupPolicyCommandInput
  extends DetachGroupPolicyRequest {}
export interface DetachGroupPolicyCommandOutput extends __MetadataBearer {}
declare const DetachGroupPolicyCommand_base: {
  new (
    input: DetachGroupPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DetachGroupPolicyCommandInput,
    DetachGroupPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DetachGroupPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DetachGroupPolicyCommandInput,
    DetachGroupPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DetachGroupPolicyCommand extends DetachGroupPolicyCommand_base {
  protected static __types: {
    api: {
      input: DetachGroupPolicyRequest;
      output: {};
    };
    sdk: {
      input: DetachGroupPolicyCommandInput;
      output: DetachGroupPolicyCommandOutput;
    };
  };
}

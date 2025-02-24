import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { DetachUserPolicyRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DetachUserPolicyCommandInput extends DetachUserPolicyRequest {}
export interface DetachUserPolicyCommandOutput extends __MetadataBearer {}
declare const DetachUserPolicyCommand_base: {
  new (
    input: DetachUserPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DetachUserPolicyCommandInput,
    DetachUserPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DetachUserPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DetachUserPolicyCommandInput,
    DetachUserPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DetachUserPolicyCommand extends DetachUserPolicyCommand_base {
  protected static __types: {
    api: {
      input: DetachUserPolicyRequest;
      output: {};
    };
    sdk: {
      input: DetachUserPolicyCommandInput;
      output: DetachUserPolicyCommandOutput;
    };
  };
}

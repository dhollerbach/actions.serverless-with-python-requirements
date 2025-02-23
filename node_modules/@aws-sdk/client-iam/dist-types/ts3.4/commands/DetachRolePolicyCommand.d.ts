import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { DetachRolePolicyRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DetachRolePolicyCommandInput extends DetachRolePolicyRequest {}
export interface DetachRolePolicyCommandOutput extends __MetadataBearer {}
declare const DetachRolePolicyCommand_base: {
  new (
    input: DetachRolePolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DetachRolePolicyCommandInput,
    DetachRolePolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DetachRolePolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DetachRolePolicyCommandInput,
    DetachRolePolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DetachRolePolicyCommand extends DetachRolePolicyCommand_base {
  protected static __types: {
    api: {
      input: DetachRolePolicyRequest;
      output: {};
    };
    sdk: {
      input: DetachRolePolicyCommandInput;
      output: DetachRolePolicyCommandOutput;
    };
  };
}

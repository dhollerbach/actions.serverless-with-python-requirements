import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { AttachRolePolicyRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface AttachRolePolicyCommandInput extends AttachRolePolicyRequest {}
export interface AttachRolePolicyCommandOutput extends __MetadataBearer {}
declare const AttachRolePolicyCommand_base: {
  new (
    input: AttachRolePolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    AttachRolePolicyCommandInput,
    AttachRolePolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: AttachRolePolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    AttachRolePolicyCommandInput,
    AttachRolePolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class AttachRolePolicyCommand extends AttachRolePolicyCommand_base {
  protected static __types: {
    api: {
      input: AttachRolePolicyRequest;
      output: {};
    };
    sdk: {
      input: AttachRolePolicyCommandInput;
      output: AttachRolePolicyCommandOutput;
    };
  };
}

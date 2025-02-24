import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { UntagPolicyRequest } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface UntagPolicyCommandInput extends UntagPolicyRequest {}
export interface UntagPolicyCommandOutput extends __MetadataBearer {}
declare const UntagPolicyCommand_base: {
  new (
    input: UntagPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UntagPolicyCommandInput,
    UntagPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: UntagPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UntagPolicyCommandInput,
    UntagPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UntagPolicyCommand extends UntagPolicyCommand_base {
  protected static __types: {
    api: {
      input: UntagPolicyRequest;
      output: {};
    };
    sdk: {
      input: UntagPolicyCommandInput;
      output: UntagPolicyCommandOutput;
    };
  };
}

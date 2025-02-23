import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { PutGroupPolicyRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface PutGroupPolicyCommandInput extends PutGroupPolicyRequest {}
export interface PutGroupPolicyCommandOutput extends __MetadataBearer {}
declare const PutGroupPolicyCommand_base: {
  new (
    input: PutGroupPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutGroupPolicyCommandInput,
    PutGroupPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: PutGroupPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutGroupPolicyCommandInput,
    PutGroupPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class PutGroupPolicyCommand extends PutGroupPolicyCommand_base {
  protected static __types: {
    api: {
      input: PutGroupPolicyRequest;
      output: {};
    };
    sdk: {
      input: PutGroupPolicyCommandInput;
      output: PutGroupPolicyCommandOutput;
    };
  };
}

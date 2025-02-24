import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { PutUserPolicyRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface PutUserPolicyCommandInput extends PutUserPolicyRequest {}
export interface PutUserPolicyCommandOutput extends __MetadataBearer {}
declare const PutUserPolicyCommand_base: {
  new (
    input: PutUserPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutUserPolicyCommandInput,
    PutUserPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: PutUserPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutUserPolicyCommandInput,
    PutUserPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class PutUserPolicyCommand extends PutUserPolicyCommand_base {
  protected static __types: {
    api: {
      input: PutUserPolicyRequest;
      output: {};
    };
    sdk: {
      input: PutUserPolicyCommandInput;
      output: PutUserPolicyCommandOutput;
    };
  };
}

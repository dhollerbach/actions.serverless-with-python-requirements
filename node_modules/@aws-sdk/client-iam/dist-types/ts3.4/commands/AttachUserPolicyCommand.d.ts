import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { AttachUserPolicyRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface AttachUserPolicyCommandInput extends AttachUserPolicyRequest {}
export interface AttachUserPolicyCommandOutput extends __MetadataBearer {}
declare const AttachUserPolicyCommand_base: {
  new (
    input: AttachUserPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    AttachUserPolicyCommandInput,
    AttachUserPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: AttachUserPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    AttachUserPolicyCommandInput,
    AttachUserPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class AttachUserPolicyCommand extends AttachUserPolicyCommand_base {
  protected static __types: {
    api: {
      input: AttachUserPolicyRequest;
      output: {};
    };
    sdk: {
      input: AttachUserPolicyCommandInput;
      output: AttachUserPolicyCommandOutput;
    };
  };
}

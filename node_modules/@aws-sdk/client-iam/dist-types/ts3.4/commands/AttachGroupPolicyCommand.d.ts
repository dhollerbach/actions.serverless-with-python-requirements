import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { AttachGroupPolicyRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface AttachGroupPolicyCommandInput
  extends AttachGroupPolicyRequest {}
export interface AttachGroupPolicyCommandOutput extends __MetadataBearer {}
declare const AttachGroupPolicyCommand_base: {
  new (
    input: AttachGroupPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    AttachGroupPolicyCommandInput,
    AttachGroupPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: AttachGroupPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    AttachGroupPolicyCommandInput,
    AttachGroupPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class AttachGroupPolicyCommand extends AttachGroupPolicyCommand_base {
  protected static __types: {
    api: {
      input: AttachGroupPolicyRequest;
      output: {};
    };
    sdk: {
      input: AttachGroupPolicyCommandInput;
      output: AttachGroupPolicyCommandOutput;
    };
  };
}

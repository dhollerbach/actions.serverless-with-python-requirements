import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { TagPolicyRequest } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface TagPolicyCommandInput extends TagPolicyRequest {}
export interface TagPolicyCommandOutput extends __MetadataBearer {}
declare const TagPolicyCommand_base: {
  new (
    input: TagPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    TagPolicyCommandInput,
    TagPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: TagPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    TagPolicyCommandInput,
    TagPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class TagPolicyCommand extends TagPolicyCommand_base {
  protected static __types: {
    api: {
      input: TagPolicyRequest;
      output: {};
    };
    sdk: {
      input: TagPolicyCommandInput;
      output: TagPolicyCommandOutput;
    };
  };
}

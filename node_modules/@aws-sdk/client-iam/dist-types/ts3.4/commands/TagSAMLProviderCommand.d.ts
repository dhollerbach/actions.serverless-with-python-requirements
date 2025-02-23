import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { TagSAMLProviderRequest } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface TagSAMLProviderCommandInput extends TagSAMLProviderRequest {}
export interface TagSAMLProviderCommandOutput extends __MetadataBearer {}
declare const TagSAMLProviderCommand_base: {
  new (
    input: TagSAMLProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    TagSAMLProviderCommandInput,
    TagSAMLProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: TagSAMLProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    TagSAMLProviderCommandInput,
    TagSAMLProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class TagSAMLProviderCommand extends TagSAMLProviderCommand_base {
  protected static __types: {
    api: {
      input: TagSAMLProviderRequest;
      output: {};
    };
    sdk: {
      input: TagSAMLProviderCommandInput;
      output: TagSAMLProviderCommandOutput;
    };
  };
}

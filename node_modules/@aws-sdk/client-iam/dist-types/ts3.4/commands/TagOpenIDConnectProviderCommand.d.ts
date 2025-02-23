import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { TagOpenIDConnectProviderRequest } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface TagOpenIDConnectProviderCommandInput
  extends TagOpenIDConnectProviderRequest {}
export interface TagOpenIDConnectProviderCommandOutput
  extends __MetadataBearer {}
declare const TagOpenIDConnectProviderCommand_base: {
  new (
    input: TagOpenIDConnectProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    TagOpenIDConnectProviderCommandInput,
    TagOpenIDConnectProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: TagOpenIDConnectProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    TagOpenIDConnectProviderCommandInput,
    TagOpenIDConnectProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class TagOpenIDConnectProviderCommand extends TagOpenIDConnectProviderCommand_base {
  protected static __types: {
    api: {
      input: TagOpenIDConnectProviderRequest;
      output: {};
    };
    sdk: {
      input: TagOpenIDConnectProviderCommandInput;
      output: TagOpenIDConnectProviderCommandOutput;
    };
  };
}

import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { RemoveClientIDFromOpenIDConnectProviderRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface RemoveClientIDFromOpenIDConnectProviderCommandInput
  extends RemoveClientIDFromOpenIDConnectProviderRequest {}
export interface RemoveClientIDFromOpenIDConnectProviderCommandOutput
  extends __MetadataBearer {}
declare const RemoveClientIDFromOpenIDConnectProviderCommand_base: {
  new (
    input: RemoveClientIDFromOpenIDConnectProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    RemoveClientIDFromOpenIDConnectProviderCommandInput,
    RemoveClientIDFromOpenIDConnectProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: RemoveClientIDFromOpenIDConnectProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    RemoveClientIDFromOpenIDConnectProviderCommandInput,
    RemoveClientIDFromOpenIDConnectProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class RemoveClientIDFromOpenIDConnectProviderCommand extends RemoveClientIDFromOpenIDConnectProviderCommand_base {
  protected static __types: {
    api: {
      input: RemoveClientIDFromOpenIDConnectProviderRequest;
      output: {};
    };
    sdk: {
      input: RemoveClientIDFromOpenIDConnectProviderCommandInput;
      output: RemoveClientIDFromOpenIDConnectProviderCommandOutput;
    };
  };
}

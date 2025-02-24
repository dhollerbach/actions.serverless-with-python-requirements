import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { UntagOpenIDConnectProviderRequest } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface UntagOpenIDConnectProviderCommandInput
  extends UntagOpenIDConnectProviderRequest {}
export interface UntagOpenIDConnectProviderCommandOutput
  extends __MetadataBearer {}
declare const UntagOpenIDConnectProviderCommand_base: {
  new (
    input: UntagOpenIDConnectProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UntagOpenIDConnectProviderCommandInput,
    UntagOpenIDConnectProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: UntagOpenIDConnectProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UntagOpenIDConnectProviderCommandInput,
    UntagOpenIDConnectProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UntagOpenIDConnectProviderCommand extends UntagOpenIDConnectProviderCommand_base {
  protected static __types: {
    api: {
      input: UntagOpenIDConnectProviderRequest;
      output: {};
    };
    sdk: {
      input: UntagOpenIDConnectProviderCommandInput;
      output: UntagOpenIDConnectProviderCommandOutput;
    };
  };
}

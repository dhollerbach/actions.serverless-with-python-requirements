import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  GetOpenIDConnectProviderRequest,
  GetOpenIDConnectProviderResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetOpenIDConnectProviderCommandInput
  extends GetOpenIDConnectProviderRequest {}
export interface GetOpenIDConnectProviderCommandOutput
  extends GetOpenIDConnectProviderResponse,
    __MetadataBearer {}
declare const GetOpenIDConnectProviderCommand_base: {
  new (
    input: GetOpenIDConnectProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetOpenIDConnectProviderCommandInput,
    GetOpenIDConnectProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: GetOpenIDConnectProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetOpenIDConnectProviderCommandInput,
    GetOpenIDConnectProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetOpenIDConnectProviderCommand extends GetOpenIDConnectProviderCommand_base {
  protected static __types: {
    api: {
      input: GetOpenIDConnectProviderRequest;
      output: GetOpenIDConnectProviderResponse;
    };
    sdk: {
      input: GetOpenIDConnectProviderCommandInput;
      output: GetOpenIDConnectProviderCommandOutput;
    };
  };
}

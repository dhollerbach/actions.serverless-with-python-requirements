import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  CreateOpenIDConnectProviderRequest,
  CreateOpenIDConnectProviderResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateOpenIDConnectProviderCommandInput
  extends CreateOpenIDConnectProviderRequest {}
export interface CreateOpenIDConnectProviderCommandOutput
  extends CreateOpenIDConnectProviderResponse,
    __MetadataBearer {}
declare const CreateOpenIDConnectProviderCommand_base: {
  new (
    input: CreateOpenIDConnectProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateOpenIDConnectProviderCommandInput,
    CreateOpenIDConnectProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: CreateOpenIDConnectProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateOpenIDConnectProviderCommandInput,
    CreateOpenIDConnectProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateOpenIDConnectProviderCommand extends CreateOpenIDConnectProviderCommand_base {
  protected static __types: {
    api: {
      input: CreateOpenIDConnectProviderRequest;
      output: CreateOpenIDConnectProviderResponse;
    };
    sdk: {
      input: CreateOpenIDConnectProviderCommandInput;
      output: CreateOpenIDConnectProviderCommandOutput;
    };
  };
}

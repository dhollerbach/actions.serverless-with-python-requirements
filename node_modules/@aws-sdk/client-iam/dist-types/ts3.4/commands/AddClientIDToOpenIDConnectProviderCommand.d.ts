import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { AddClientIDToOpenIDConnectProviderRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface AddClientIDToOpenIDConnectProviderCommandInput
  extends AddClientIDToOpenIDConnectProviderRequest {}
export interface AddClientIDToOpenIDConnectProviderCommandOutput
  extends __MetadataBearer {}
declare const AddClientIDToOpenIDConnectProviderCommand_base: {
  new (
    input: AddClientIDToOpenIDConnectProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    AddClientIDToOpenIDConnectProviderCommandInput,
    AddClientIDToOpenIDConnectProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: AddClientIDToOpenIDConnectProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    AddClientIDToOpenIDConnectProviderCommandInput,
    AddClientIDToOpenIDConnectProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class AddClientIDToOpenIDConnectProviderCommand extends AddClientIDToOpenIDConnectProviderCommand_base {
  protected static __types: {
    api: {
      input: AddClientIDToOpenIDConnectProviderRequest;
      output: {};
    };
    sdk: {
      input: AddClientIDToOpenIDConnectProviderCommandInput;
      output: AddClientIDToOpenIDConnectProviderCommandOutput;
    };
  };
}

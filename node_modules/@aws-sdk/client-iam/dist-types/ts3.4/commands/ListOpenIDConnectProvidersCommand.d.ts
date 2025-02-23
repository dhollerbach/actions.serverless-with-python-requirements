import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListOpenIDConnectProvidersRequest,
  ListOpenIDConnectProvidersResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListOpenIDConnectProvidersCommandInput
  extends ListOpenIDConnectProvidersRequest {}
export interface ListOpenIDConnectProvidersCommandOutput
  extends ListOpenIDConnectProvidersResponse,
    __MetadataBearer {}
declare const ListOpenIDConnectProvidersCommand_base: {
  new (
    input: ListOpenIDConnectProvidersCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListOpenIDConnectProvidersCommandInput,
    ListOpenIDConnectProvidersCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListOpenIDConnectProvidersCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListOpenIDConnectProvidersCommandInput,
    ListOpenIDConnectProvidersCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListOpenIDConnectProvidersCommand extends ListOpenIDConnectProvidersCommand_base {
  protected static __types: {
    api: {
      input: {};
      output: ListOpenIDConnectProvidersResponse;
    };
    sdk: {
      input: ListOpenIDConnectProvidersCommandInput;
      output: ListOpenIDConnectProvidersCommandOutput;
    };
  };
}

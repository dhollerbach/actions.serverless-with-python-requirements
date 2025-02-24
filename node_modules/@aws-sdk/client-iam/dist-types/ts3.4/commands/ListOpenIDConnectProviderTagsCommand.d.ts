import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListOpenIDConnectProviderTagsRequest,
  ListOpenIDConnectProviderTagsResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListOpenIDConnectProviderTagsCommandInput
  extends ListOpenIDConnectProviderTagsRequest {}
export interface ListOpenIDConnectProviderTagsCommandOutput
  extends ListOpenIDConnectProviderTagsResponse,
    __MetadataBearer {}
declare const ListOpenIDConnectProviderTagsCommand_base: {
  new (
    input: ListOpenIDConnectProviderTagsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListOpenIDConnectProviderTagsCommandInput,
    ListOpenIDConnectProviderTagsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: ListOpenIDConnectProviderTagsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListOpenIDConnectProviderTagsCommandInput,
    ListOpenIDConnectProviderTagsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListOpenIDConnectProviderTagsCommand extends ListOpenIDConnectProviderTagsCommand_base {
  protected static __types: {
    api: {
      input: ListOpenIDConnectProviderTagsRequest;
      output: ListOpenIDConnectProviderTagsResponse;
    };
    sdk: {
      input: ListOpenIDConnectProviderTagsCommandInput;
      output: ListOpenIDConnectProviderTagsCommandOutput;
    };
  };
}

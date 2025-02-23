import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListSAMLProviderTagsRequest,
  ListSAMLProviderTagsResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListSAMLProviderTagsCommandInput
  extends ListSAMLProviderTagsRequest {}
export interface ListSAMLProviderTagsCommandOutput
  extends ListSAMLProviderTagsResponse,
    __MetadataBearer {}
declare const ListSAMLProviderTagsCommand_base: {
  new (
    input: ListSAMLProviderTagsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListSAMLProviderTagsCommandInput,
    ListSAMLProviderTagsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: ListSAMLProviderTagsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListSAMLProviderTagsCommandInput,
    ListSAMLProviderTagsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListSAMLProviderTagsCommand extends ListSAMLProviderTagsCommand_base {
  protected static __types: {
    api: {
      input: ListSAMLProviderTagsRequest;
      output: ListSAMLProviderTagsResponse;
    };
    sdk: {
      input: ListSAMLProviderTagsCommandInput;
      output: ListSAMLProviderTagsCommandOutput;
    };
  };
}

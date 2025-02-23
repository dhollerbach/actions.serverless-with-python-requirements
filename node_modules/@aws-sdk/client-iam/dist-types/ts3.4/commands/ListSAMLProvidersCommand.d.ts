import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListSAMLProvidersRequest,
  ListSAMLProvidersResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListSAMLProvidersCommandInput
  extends ListSAMLProvidersRequest {}
export interface ListSAMLProvidersCommandOutput
  extends ListSAMLProvidersResponse,
    __MetadataBearer {}
declare const ListSAMLProvidersCommand_base: {
  new (
    input: ListSAMLProvidersCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListSAMLProvidersCommandInput,
    ListSAMLProvidersCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListSAMLProvidersCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListSAMLProvidersCommandInput,
    ListSAMLProvidersCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListSAMLProvidersCommand extends ListSAMLProvidersCommand_base {
  protected static __types: {
    api: {
      input: {};
      output: ListSAMLProvidersResponse;
    };
    sdk: {
      input: ListSAMLProvidersCommandInput;
      output: ListSAMLProvidersCommandOutput;
    };
  };
}

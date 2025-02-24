import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  ListPartnerEventSourcesRequest,
  ListPartnerEventSourcesResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListPartnerEventSourcesCommandInput
  extends ListPartnerEventSourcesRequest {}
export interface ListPartnerEventSourcesCommandOutput
  extends ListPartnerEventSourcesResponse,
    __MetadataBearer {}
declare const ListPartnerEventSourcesCommand_base: {
  new (
    input: ListPartnerEventSourcesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListPartnerEventSourcesCommandInput,
    ListPartnerEventSourcesCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: ListPartnerEventSourcesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListPartnerEventSourcesCommandInput,
    ListPartnerEventSourcesCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListPartnerEventSourcesCommand extends ListPartnerEventSourcesCommand_base {
  protected static __types: {
    api: {
      input: ListPartnerEventSourcesRequest;
      output: ListPartnerEventSourcesResponse;
    };
    sdk: {
      input: ListPartnerEventSourcesCommandInput;
      output: ListPartnerEventSourcesCommandOutput;
    };
  };
}

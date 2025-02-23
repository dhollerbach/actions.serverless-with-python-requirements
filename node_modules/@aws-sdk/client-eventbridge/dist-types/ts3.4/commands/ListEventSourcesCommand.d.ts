import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  ListEventSourcesRequest,
  ListEventSourcesResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListEventSourcesCommandInput extends ListEventSourcesRequest {}
export interface ListEventSourcesCommandOutput
  extends ListEventSourcesResponse,
    __MetadataBearer {}
declare const ListEventSourcesCommand_base: {
  new (
    input: ListEventSourcesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListEventSourcesCommandInput,
    ListEventSourcesCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListEventSourcesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListEventSourcesCommandInput,
    ListEventSourcesCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListEventSourcesCommand extends ListEventSourcesCommand_base {
  protected static __types: {
    api: {
      input: ListEventSourcesRequest;
      output: ListEventSourcesResponse;
    };
    sdk: {
      input: ListEventSourcesCommandInput;
      output: ListEventSourcesCommandOutput;
    };
  };
}

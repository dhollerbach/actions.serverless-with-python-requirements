import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  ListConnectionsRequest,
  ListConnectionsResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListConnectionsCommandInput extends ListConnectionsRequest {}
export interface ListConnectionsCommandOutput
  extends ListConnectionsResponse,
    __MetadataBearer {}
declare const ListConnectionsCommand_base: {
  new (
    input: ListConnectionsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListConnectionsCommandInput,
    ListConnectionsCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListConnectionsCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListConnectionsCommandInput,
    ListConnectionsCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListConnectionsCommand extends ListConnectionsCommand_base {
  protected static __types: {
    api: {
      input: ListConnectionsRequest;
      output: ListConnectionsResponse;
    };
    sdk: {
      input: ListConnectionsCommandInput;
      output: ListConnectionsCommandOutput;
    };
  };
}

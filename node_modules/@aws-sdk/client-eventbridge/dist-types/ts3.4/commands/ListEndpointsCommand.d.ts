import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  ListEndpointsRequest,
  ListEndpointsResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListEndpointsCommandInput extends ListEndpointsRequest {}
export interface ListEndpointsCommandOutput
  extends ListEndpointsResponse,
    __MetadataBearer {}
declare const ListEndpointsCommand_base: {
  new (
    input: ListEndpointsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListEndpointsCommandInput,
    ListEndpointsCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListEndpointsCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListEndpointsCommandInput,
    ListEndpointsCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListEndpointsCommand extends ListEndpointsCommand_base {
  protected static __types: {
    api: {
      input: ListEndpointsRequest;
      output: ListEndpointsResponse;
    };
    sdk: {
      input: ListEndpointsCommandInput;
      output: ListEndpointsCommandOutput;
    };
  };
}

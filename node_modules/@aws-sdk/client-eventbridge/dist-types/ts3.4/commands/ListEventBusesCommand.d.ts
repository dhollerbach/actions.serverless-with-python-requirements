import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  ListEventBusesRequest,
  ListEventBusesResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListEventBusesCommandInput extends ListEventBusesRequest {}
export interface ListEventBusesCommandOutput
  extends ListEventBusesResponse,
    __MetadataBearer {}
declare const ListEventBusesCommand_base: {
  new (
    input: ListEventBusesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListEventBusesCommandInput,
    ListEventBusesCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListEventBusesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListEventBusesCommandInput,
    ListEventBusesCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListEventBusesCommand extends ListEventBusesCommand_base {
  protected static __types: {
    api: {
      input: ListEventBusesRequest;
      output: ListEventBusesResponse;
    };
    sdk: {
      input: ListEventBusesCommandInput;
      output: ListEventBusesCommandOutput;
    };
  };
}

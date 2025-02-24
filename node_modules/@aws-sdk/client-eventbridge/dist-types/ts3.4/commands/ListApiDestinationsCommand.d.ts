import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  ListApiDestinationsRequest,
  ListApiDestinationsResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListApiDestinationsCommandInput
  extends ListApiDestinationsRequest {}
export interface ListApiDestinationsCommandOutput
  extends ListApiDestinationsResponse,
    __MetadataBearer {}
declare const ListApiDestinationsCommand_base: {
  new (
    input: ListApiDestinationsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListApiDestinationsCommandInput,
    ListApiDestinationsCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListApiDestinationsCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListApiDestinationsCommandInput,
    ListApiDestinationsCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListApiDestinationsCommand extends ListApiDestinationsCommand_base {
  protected static __types: {
    api: {
      input: ListApiDestinationsRequest;
      output: ListApiDestinationsResponse;
    };
    sdk: {
      input: ListApiDestinationsCommandInput;
      output: ListApiDestinationsCommandOutput;
    };
  };
}

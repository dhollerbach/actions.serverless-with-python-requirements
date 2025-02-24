import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import { ListReplaysRequest, ListReplaysResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListReplaysCommandInput extends ListReplaysRequest {}
export interface ListReplaysCommandOutput
  extends ListReplaysResponse,
    __MetadataBearer {}
declare const ListReplaysCommand_base: {
  new (
    input: ListReplaysCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListReplaysCommandInput,
    ListReplaysCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListReplaysCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListReplaysCommandInput,
    ListReplaysCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListReplaysCommand extends ListReplaysCommand_base {
  protected static __types: {
    api: {
      input: ListReplaysRequest;
      output: ListReplaysResponse;
    };
    sdk: {
      input: ListReplaysCommandInput;
      output: ListReplaysCommandOutput;
    };
  };
}

import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import { ListRulesRequest, ListRulesResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListRulesCommandInput extends ListRulesRequest {}
export interface ListRulesCommandOutput
  extends ListRulesResponse,
    __MetadataBearer {}
declare const ListRulesCommand_base: {
  new (
    input: ListRulesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListRulesCommandInput,
    ListRulesCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListRulesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListRulesCommandInput,
    ListRulesCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListRulesCommand extends ListRulesCommand_base {
  protected static __types: {
    api: {
      input: ListRulesRequest;
      output: ListRulesResponse;
    };
    sdk: {
      input: ListRulesCommandInput;
      output: ListRulesCommandOutput;
    };
  };
}

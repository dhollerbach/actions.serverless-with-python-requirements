import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  ListPartnerEventSourceAccountsRequest,
  ListPartnerEventSourceAccountsResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListPartnerEventSourceAccountsCommandInput
  extends ListPartnerEventSourceAccountsRequest {}
export interface ListPartnerEventSourceAccountsCommandOutput
  extends ListPartnerEventSourceAccountsResponse,
    __MetadataBearer {}
declare const ListPartnerEventSourceAccountsCommand_base: {
  new (
    input: ListPartnerEventSourceAccountsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListPartnerEventSourceAccountsCommandInput,
    ListPartnerEventSourceAccountsCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: ListPartnerEventSourceAccountsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListPartnerEventSourceAccountsCommandInput,
    ListPartnerEventSourceAccountsCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListPartnerEventSourceAccountsCommand extends ListPartnerEventSourceAccountsCommand_base {
  protected static __types: {
    api: {
      input: ListPartnerEventSourceAccountsRequest;
      output: ListPartnerEventSourceAccountsResponse;
    };
    sdk: {
      input: ListPartnerEventSourceAccountsCommandInput;
      output: ListPartnerEventSourceAccountsCommandOutput;
    };
  };
}

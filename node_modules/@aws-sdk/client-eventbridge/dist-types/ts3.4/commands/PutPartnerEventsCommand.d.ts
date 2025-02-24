import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  PutPartnerEventsRequest,
  PutPartnerEventsResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface PutPartnerEventsCommandInput extends PutPartnerEventsRequest {}
export interface PutPartnerEventsCommandOutput
  extends PutPartnerEventsResponse,
    __MetadataBearer {}
declare const PutPartnerEventsCommand_base: {
  new (
    input: PutPartnerEventsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutPartnerEventsCommandInput,
    PutPartnerEventsCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: PutPartnerEventsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutPartnerEventsCommandInput,
    PutPartnerEventsCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class PutPartnerEventsCommand extends PutPartnerEventsCommand_base {
  protected static __types: {
    api: {
      input: PutPartnerEventsRequest;
      output: PutPartnerEventsResponse;
    };
    sdk: {
      input: PutPartnerEventsCommandInput;
      output: PutPartnerEventsCommandOutput;
    };
  };
}

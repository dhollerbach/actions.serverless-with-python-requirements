import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import { PutEventsRequest, PutEventsResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface PutEventsCommandInput extends PutEventsRequest {}
export interface PutEventsCommandOutput
  extends PutEventsResponse,
    __MetadataBearer {}
declare const PutEventsCommand_base: {
  new (
    input: PutEventsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutEventsCommandInput,
    PutEventsCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: PutEventsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutEventsCommandInput,
    PutEventsCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class PutEventsCommand extends PutEventsCommand_base {
  protected static __types: {
    api: {
      input: PutEventsRequest;
      output: PutEventsResponse;
    };
    sdk: {
      input: PutEventsCommandInput;
      output: PutEventsCommandOutput;
    };
  };
}

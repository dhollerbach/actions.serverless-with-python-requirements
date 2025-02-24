import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  CreateEventBusRequest,
  CreateEventBusResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateEventBusCommandInput extends CreateEventBusRequest {}
export interface CreateEventBusCommandOutput
  extends CreateEventBusResponse,
    __MetadataBearer {}
declare const CreateEventBusCommand_base: {
  new (
    input: CreateEventBusCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateEventBusCommandInput,
    CreateEventBusCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: CreateEventBusCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateEventBusCommandInput,
    CreateEventBusCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateEventBusCommand extends CreateEventBusCommand_base {
  protected static __types: {
    api: {
      input: CreateEventBusRequest;
      output: CreateEventBusResponse;
    };
    sdk: {
      input: CreateEventBusCommandInput;
      output: CreateEventBusCommandOutput;
    };
  };
}

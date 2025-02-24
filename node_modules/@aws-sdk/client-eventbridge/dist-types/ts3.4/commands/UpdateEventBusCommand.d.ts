import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  UpdateEventBusRequest,
  UpdateEventBusResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface UpdateEventBusCommandInput extends UpdateEventBusRequest {}
export interface UpdateEventBusCommandOutput
  extends UpdateEventBusResponse,
    __MetadataBearer {}
declare const UpdateEventBusCommand_base: {
  new (
    input: UpdateEventBusCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateEventBusCommandInput,
    UpdateEventBusCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [UpdateEventBusCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateEventBusCommandInput,
    UpdateEventBusCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateEventBusCommand extends UpdateEventBusCommand_base {
  protected static __types: {
    api: {
      input: UpdateEventBusRequest;
      output: UpdateEventBusResponse;
    };
    sdk: {
      input: UpdateEventBusCommandInput;
      output: UpdateEventBusCommandOutput;
    };
  };
}

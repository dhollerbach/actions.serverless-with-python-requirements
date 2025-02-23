import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import { DeleteEventBusRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteEventBusCommandInput extends DeleteEventBusRequest {}
export interface DeleteEventBusCommandOutput extends __MetadataBearer {}
declare const DeleteEventBusCommand_base: {
  new (
    input: DeleteEventBusCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteEventBusCommandInput,
    DeleteEventBusCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeleteEventBusCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteEventBusCommandInput,
    DeleteEventBusCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteEventBusCommand extends DeleteEventBusCommand_base {
  protected static __types: {
    api: {
      input: DeleteEventBusRequest;
      output: {};
    };
    sdk: {
      input: DeleteEventBusCommandInput;
      output: DeleteEventBusCommandOutput;
    };
  };
}

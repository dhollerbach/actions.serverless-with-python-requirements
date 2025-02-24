import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  UpdateApiDestinationRequest,
  UpdateApiDestinationResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface UpdateApiDestinationCommandInput
  extends UpdateApiDestinationRequest {}
export interface UpdateApiDestinationCommandOutput
  extends UpdateApiDestinationResponse,
    __MetadataBearer {}
declare const UpdateApiDestinationCommand_base: {
  new (
    input: UpdateApiDestinationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateApiDestinationCommandInput,
    UpdateApiDestinationCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: UpdateApiDestinationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateApiDestinationCommandInput,
    UpdateApiDestinationCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateApiDestinationCommand extends UpdateApiDestinationCommand_base {
  protected static __types: {
    api: {
      input: UpdateApiDestinationRequest;
      output: UpdateApiDestinationResponse;
    };
    sdk: {
      input: UpdateApiDestinationCommandInput;
      output: UpdateApiDestinationCommandOutput;
    };
  };
}

import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  UpdateEndpointRequest,
  UpdateEndpointResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface UpdateEndpointCommandInput extends UpdateEndpointRequest {}
export interface UpdateEndpointCommandOutput
  extends UpdateEndpointResponse,
    __MetadataBearer {}
declare const UpdateEndpointCommand_base: {
  new (
    input: UpdateEndpointCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateEndpointCommandInput,
    UpdateEndpointCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: UpdateEndpointCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateEndpointCommandInput,
    UpdateEndpointCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateEndpointCommand extends UpdateEndpointCommand_base {
  protected static __types: {
    api: {
      input: UpdateEndpointRequest;
      output: UpdateEndpointResponse;
    };
    sdk: {
      input: UpdateEndpointCommandInput;
      output: UpdateEndpointCommandOutput;
    };
  };
}

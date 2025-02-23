import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  CreateEndpointRequest,
  CreateEndpointResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateEndpointCommandInput extends CreateEndpointRequest {}
export interface CreateEndpointCommandOutput
  extends CreateEndpointResponse,
    __MetadataBearer {}
declare const CreateEndpointCommand_base: {
  new (
    input: CreateEndpointCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateEndpointCommandInput,
    CreateEndpointCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: CreateEndpointCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateEndpointCommandInput,
    CreateEndpointCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateEndpointCommand extends CreateEndpointCommand_base {
  protected static __types: {
    api: {
      input: CreateEndpointRequest;
      output: CreateEndpointResponse;
    };
    sdk: {
      input: CreateEndpointCommandInput;
      output: CreateEndpointCommandOutput;
    };
  };
}

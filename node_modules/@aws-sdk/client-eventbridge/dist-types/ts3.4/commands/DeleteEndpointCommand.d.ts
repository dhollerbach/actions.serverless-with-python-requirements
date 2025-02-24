import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  DeleteEndpointRequest,
  DeleteEndpointResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteEndpointCommandInput extends DeleteEndpointRequest {}
export interface DeleteEndpointCommandOutput
  extends DeleteEndpointResponse,
    __MetadataBearer {}
declare const DeleteEndpointCommand_base: {
  new (
    input: DeleteEndpointCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteEndpointCommandInput,
    DeleteEndpointCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeleteEndpointCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteEndpointCommandInput,
    DeleteEndpointCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteEndpointCommand extends DeleteEndpointCommand_base {
  protected static __types: {
    api: {
      input: DeleteEndpointRequest;
      output: {};
    };
    sdk: {
      input: DeleteEndpointCommandInput;
      output: DeleteEndpointCommandOutput;
    };
  };
}

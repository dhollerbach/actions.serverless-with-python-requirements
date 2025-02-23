import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  DeleteConnectionRequest,
  DeleteConnectionResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteConnectionCommandInput extends DeleteConnectionRequest {}
export interface DeleteConnectionCommandOutput
  extends DeleteConnectionResponse,
    __MetadataBearer {}
declare const DeleteConnectionCommand_base: {
  new (
    input: DeleteConnectionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteConnectionCommandInput,
    DeleteConnectionCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeleteConnectionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteConnectionCommandInput,
    DeleteConnectionCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteConnectionCommand extends DeleteConnectionCommand_base {
  protected static __types: {
    api: {
      input: DeleteConnectionRequest;
      output: DeleteConnectionResponse;
    };
    sdk: {
      input: DeleteConnectionCommandInput;
      output: DeleteConnectionCommandOutput;
    };
  };
}

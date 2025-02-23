import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  DeleteApiDestinationRequest,
  DeleteApiDestinationResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteApiDestinationCommandInput
  extends DeleteApiDestinationRequest {}
export interface DeleteApiDestinationCommandOutput
  extends DeleteApiDestinationResponse,
    __MetadataBearer {}
declare const DeleteApiDestinationCommand_base: {
  new (
    input: DeleteApiDestinationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteApiDestinationCommandInput,
    DeleteApiDestinationCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeleteApiDestinationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteApiDestinationCommandInput,
    DeleteApiDestinationCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteApiDestinationCommand extends DeleteApiDestinationCommand_base {
  protected static __types: {
    api: {
      input: DeleteApiDestinationRequest;
      output: {};
    };
    sdk: {
      input: DeleteApiDestinationCommandInput;
      output: DeleteApiDestinationCommandOutput;
    };
  };
}

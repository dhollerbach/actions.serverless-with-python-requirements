import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  UpdateConnectionRequest,
  UpdateConnectionResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface UpdateConnectionCommandInput extends UpdateConnectionRequest {}
export interface UpdateConnectionCommandOutput
  extends UpdateConnectionResponse,
    __MetadataBearer {}
declare const UpdateConnectionCommand_base: {
  new (
    input: UpdateConnectionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateConnectionCommandInput,
    UpdateConnectionCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: UpdateConnectionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateConnectionCommandInput,
    UpdateConnectionCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateConnectionCommand extends UpdateConnectionCommand_base {
  protected static __types: {
    api: {
      input: UpdateConnectionRequest;
      output: UpdateConnectionResponse;
    };
    sdk: {
      input: UpdateConnectionCommandInput;
      output: UpdateConnectionCommandOutput;
    };
  };
}

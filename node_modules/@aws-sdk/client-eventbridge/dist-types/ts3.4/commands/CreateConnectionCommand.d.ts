import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  CreateConnectionRequest,
  CreateConnectionResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateConnectionCommandInput extends CreateConnectionRequest {}
export interface CreateConnectionCommandOutput
  extends CreateConnectionResponse,
    __MetadataBearer {}
declare const CreateConnectionCommand_base: {
  new (
    input: CreateConnectionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateConnectionCommandInput,
    CreateConnectionCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: CreateConnectionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateConnectionCommandInput,
    CreateConnectionCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateConnectionCommand extends CreateConnectionCommand_base {
  protected static __types: {
    api: {
      input: CreateConnectionRequest;
      output: CreateConnectionResponse;
    };
    sdk: {
      input: CreateConnectionCommandInput;
      output: CreateConnectionCommandOutput;
    };
  };
}

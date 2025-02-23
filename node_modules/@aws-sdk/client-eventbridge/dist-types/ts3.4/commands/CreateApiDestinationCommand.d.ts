import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  CreateApiDestinationRequest,
  CreateApiDestinationResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateApiDestinationCommandInput
  extends CreateApiDestinationRequest {}
export interface CreateApiDestinationCommandOutput
  extends CreateApiDestinationResponse,
    __MetadataBearer {}
declare const CreateApiDestinationCommand_base: {
  new (
    input: CreateApiDestinationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateApiDestinationCommandInput,
    CreateApiDestinationCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: CreateApiDestinationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateApiDestinationCommandInput,
    CreateApiDestinationCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateApiDestinationCommand extends CreateApiDestinationCommand_base {
  protected static __types: {
    api: {
      input: CreateApiDestinationRequest;
      output: CreateApiDestinationResponse;
    };
    sdk: {
      input: CreateApiDestinationCommandInput;
      output: CreateApiDestinationCommandOutput;
    };
  };
}

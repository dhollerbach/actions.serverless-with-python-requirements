import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  CreateArchiveRequest,
  CreateArchiveResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateArchiveCommandInput extends CreateArchiveRequest {}
export interface CreateArchiveCommandOutput
  extends CreateArchiveResponse,
    __MetadataBearer {}
declare const CreateArchiveCommand_base: {
  new (
    input: CreateArchiveCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateArchiveCommandInput,
    CreateArchiveCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: CreateArchiveCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateArchiveCommandInput,
    CreateArchiveCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateArchiveCommand extends CreateArchiveCommand_base {
  protected static __types: {
    api: {
      input: CreateArchiveRequest;
      output: CreateArchiveResponse;
    };
    sdk: {
      input: CreateArchiveCommandInput;
      output: CreateArchiveCommandOutput;
    };
  };
}

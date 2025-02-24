import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  UpdateArchiveRequest,
  UpdateArchiveResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface UpdateArchiveCommandInput extends UpdateArchiveRequest {}
export interface UpdateArchiveCommandOutput
  extends UpdateArchiveResponse,
    __MetadataBearer {}
declare const UpdateArchiveCommand_base: {
  new (
    input: UpdateArchiveCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateArchiveCommandInput,
    UpdateArchiveCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: UpdateArchiveCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateArchiveCommandInput,
    UpdateArchiveCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateArchiveCommand extends UpdateArchiveCommand_base {
  protected static __types: {
    api: {
      input: UpdateArchiveRequest;
      output: UpdateArchiveResponse;
    };
    sdk: {
      input: UpdateArchiveCommandInput;
      output: UpdateArchiveCommandOutput;
    };
  };
}

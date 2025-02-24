import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  DeleteArchiveRequest,
  DeleteArchiveResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteArchiveCommandInput extends DeleteArchiveRequest {}
export interface DeleteArchiveCommandOutput
  extends DeleteArchiveResponse,
    __MetadataBearer {}
declare const DeleteArchiveCommand_base: {
  new (
    input: DeleteArchiveCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteArchiveCommandInput,
    DeleteArchiveCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeleteArchiveCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteArchiveCommandInput,
    DeleteArchiveCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteArchiveCommand extends DeleteArchiveCommand_base {
  protected static __types: {
    api: {
      input: DeleteArchiveRequest;
      output: {};
    };
    sdk: {
      input: DeleteArchiveCommandInput;
      output: DeleteArchiveCommandOutput;
    };
  };
}

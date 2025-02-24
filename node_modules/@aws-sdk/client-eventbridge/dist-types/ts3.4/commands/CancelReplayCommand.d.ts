import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import { CancelReplayRequest, CancelReplayResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CancelReplayCommandInput extends CancelReplayRequest {}
export interface CancelReplayCommandOutput
  extends CancelReplayResponse,
    __MetadataBearer {}
declare const CancelReplayCommand_base: {
  new (
    input: CancelReplayCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CancelReplayCommandInput,
    CancelReplayCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: CancelReplayCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CancelReplayCommandInput,
    CancelReplayCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CancelReplayCommand extends CancelReplayCommand_base {
  protected static __types: {
    api: {
      input: CancelReplayRequest;
      output: CancelReplayResponse;
    };
    sdk: {
      input: CancelReplayCommandInput;
      output: CancelReplayCommandOutput;
    };
  };
}

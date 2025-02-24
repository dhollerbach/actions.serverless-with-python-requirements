import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import { StartReplayRequest, StartReplayResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface StartReplayCommandInput extends StartReplayRequest {}
export interface StartReplayCommandOutput
  extends StartReplayResponse,
    __MetadataBearer {}
declare const StartReplayCommand_base: {
  new (
    input: StartReplayCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    StartReplayCommandInput,
    StartReplayCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: StartReplayCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    StartReplayCommandInput,
    StartReplayCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class StartReplayCommand extends StartReplayCommand_base {
  protected static __types: {
    api: {
      input: StartReplayRequest;
      output: StartReplayResponse;
    };
    sdk: {
      input: StartReplayCommandInput;
      output: StartReplayCommandOutput;
    };
  };
}

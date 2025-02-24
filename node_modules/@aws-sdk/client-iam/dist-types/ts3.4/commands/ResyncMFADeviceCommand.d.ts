import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { ResyncMFADeviceRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ResyncMFADeviceCommandInput extends ResyncMFADeviceRequest {}
export interface ResyncMFADeviceCommandOutput extends __MetadataBearer {}
declare const ResyncMFADeviceCommand_base: {
  new (
    input: ResyncMFADeviceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ResyncMFADeviceCommandInput,
    ResyncMFADeviceCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: ResyncMFADeviceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ResyncMFADeviceCommandInput,
    ResyncMFADeviceCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ResyncMFADeviceCommand extends ResyncMFADeviceCommand_base {
  protected static __types: {
    api: {
      input: ResyncMFADeviceRequest;
      output: {};
    };
    sdk: {
      input: ResyncMFADeviceCommandInput;
      output: ResyncMFADeviceCommandOutput;
    };
  };
}

import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { DeactivateMFADeviceRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeactivateMFADeviceCommandInput
  extends DeactivateMFADeviceRequest {}
export interface DeactivateMFADeviceCommandOutput extends __MetadataBearer {}
declare const DeactivateMFADeviceCommand_base: {
  new (
    input: DeactivateMFADeviceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeactivateMFADeviceCommandInput,
    DeactivateMFADeviceCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeactivateMFADeviceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeactivateMFADeviceCommandInput,
    DeactivateMFADeviceCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeactivateMFADeviceCommand extends DeactivateMFADeviceCommand_base {
  protected static __types: {
    api: {
      input: DeactivateMFADeviceRequest;
      output: {};
    };
    sdk: {
      input: DeactivateMFADeviceCommandInput;
      output: DeactivateMFADeviceCommandOutput;
    };
  };
}

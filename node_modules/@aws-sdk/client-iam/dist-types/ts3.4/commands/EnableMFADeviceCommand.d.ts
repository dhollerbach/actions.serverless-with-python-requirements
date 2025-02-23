import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { EnableMFADeviceRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface EnableMFADeviceCommandInput extends EnableMFADeviceRequest {}
export interface EnableMFADeviceCommandOutput extends __MetadataBearer {}
declare const EnableMFADeviceCommand_base: {
  new (
    input: EnableMFADeviceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    EnableMFADeviceCommandInput,
    EnableMFADeviceCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: EnableMFADeviceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    EnableMFADeviceCommandInput,
    EnableMFADeviceCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class EnableMFADeviceCommand extends EnableMFADeviceCommand_base {
  protected static __types: {
    api: {
      input: EnableMFADeviceRequest;
      output: {};
    };
    sdk: {
      input: EnableMFADeviceCommandInput;
      output: EnableMFADeviceCommandOutput;
    };
  };
}

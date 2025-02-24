import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { UntagMFADeviceRequest } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface UntagMFADeviceCommandInput extends UntagMFADeviceRequest {}
export interface UntagMFADeviceCommandOutput extends __MetadataBearer {}
declare const UntagMFADeviceCommand_base: {
  new (
    input: UntagMFADeviceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UntagMFADeviceCommandInput,
    UntagMFADeviceCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: UntagMFADeviceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UntagMFADeviceCommandInput,
    UntagMFADeviceCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UntagMFADeviceCommand extends UntagMFADeviceCommand_base {
  protected static __types: {
    api: {
      input: UntagMFADeviceRequest;
      output: {};
    };
    sdk: {
      input: UntagMFADeviceCommandInput;
      output: UntagMFADeviceCommandOutput;
    };
  };
}

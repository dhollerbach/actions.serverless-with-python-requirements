import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { GetMFADeviceRequest, GetMFADeviceResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetMFADeviceCommandInput extends GetMFADeviceRequest {}
export interface GetMFADeviceCommandOutput
  extends GetMFADeviceResponse,
    __MetadataBearer {}
declare const GetMFADeviceCommand_base: {
  new (
    input: GetMFADeviceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetMFADeviceCommandInput,
    GetMFADeviceCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: GetMFADeviceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetMFADeviceCommandInput,
    GetMFADeviceCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetMFADeviceCommand extends GetMFADeviceCommand_base {
  protected static __types: {
    api: {
      input: GetMFADeviceRequest;
      output: GetMFADeviceResponse;
    };
    sdk: {
      input: GetMFADeviceCommandInput;
      output: GetMFADeviceCommandOutput;
    };
  };
}

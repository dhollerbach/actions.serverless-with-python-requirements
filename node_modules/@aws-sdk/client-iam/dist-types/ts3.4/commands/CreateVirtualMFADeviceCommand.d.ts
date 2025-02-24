import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  CreateVirtualMFADeviceRequest,
  CreateVirtualMFADeviceResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateVirtualMFADeviceCommandInput
  extends CreateVirtualMFADeviceRequest {}
export interface CreateVirtualMFADeviceCommandOutput
  extends CreateVirtualMFADeviceResponse,
    __MetadataBearer {}
declare const CreateVirtualMFADeviceCommand_base: {
  new (
    input: CreateVirtualMFADeviceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateVirtualMFADeviceCommandInput,
    CreateVirtualMFADeviceCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: CreateVirtualMFADeviceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateVirtualMFADeviceCommandInput,
    CreateVirtualMFADeviceCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateVirtualMFADeviceCommand extends CreateVirtualMFADeviceCommand_base {
  protected static __types: {
    api: {
      input: CreateVirtualMFADeviceRequest;
      output: CreateVirtualMFADeviceResponse;
    };
    sdk: {
      input: CreateVirtualMFADeviceCommandInput;
      output: CreateVirtualMFADeviceCommandOutput;
    };
  };
}

import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { DeleteVirtualMFADeviceRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteVirtualMFADeviceCommandInput
  extends DeleteVirtualMFADeviceRequest {}
export interface DeleteVirtualMFADeviceCommandOutput extends __MetadataBearer {}
declare const DeleteVirtualMFADeviceCommand_base: {
  new (
    input: DeleteVirtualMFADeviceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteVirtualMFADeviceCommandInput,
    DeleteVirtualMFADeviceCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeleteVirtualMFADeviceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteVirtualMFADeviceCommandInput,
    DeleteVirtualMFADeviceCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteVirtualMFADeviceCommand extends DeleteVirtualMFADeviceCommand_base {
  protected static __types: {
    api: {
      input: DeleteVirtualMFADeviceRequest;
      output: {};
    };
    sdk: {
      input: DeleteVirtualMFADeviceCommandInput;
      output: DeleteVirtualMFADeviceCommandOutput;
    };
  };
}

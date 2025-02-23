import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { TagMFADeviceRequest } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface TagMFADeviceCommandInput extends TagMFADeviceRequest {}
export interface TagMFADeviceCommandOutput extends __MetadataBearer {}
declare const TagMFADeviceCommand_base: {
  new (
    input: TagMFADeviceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    TagMFADeviceCommandInput,
    TagMFADeviceCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: TagMFADeviceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    TagMFADeviceCommandInput,
    TagMFADeviceCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class TagMFADeviceCommand extends TagMFADeviceCommand_base {
  protected static __types: {
    api: {
      input: TagMFADeviceRequest;
      output: {};
    };
    sdk: {
      input: TagMFADeviceCommandInput;
      output: TagMFADeviceCommandOutput;
    };
  };
}

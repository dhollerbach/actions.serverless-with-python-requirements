import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListVirtualMFADevicesRequest,
  ListVirtualMFADevicesResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListVirtualMFADevicesCommandInput
  extends ListVirtualMFADevicesRequest {}
export interface ListVirtualMFADevicesCommandOutput
  extends ListVirtualMFADevicesResponse,
    __MetadataBearer {}
declare const ListVirtualMFADevicesCommand_base: {
  new (
    input: ListVirtualMFADevicesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListVirtualMFADevicesCommandInput,
    ListVirtualMFADevicesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListVirtualMFADevicesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListVirtualMFADevicesCommandInput,
    ListVirtualMFADevicesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListVirtualMFADevicesCommand extends ListVirtualMFADevicesCommand_base {
  protected static __types: {
    api: {
      input: ListVirtualMFADevicesRequest;
      output: ListVirtualMFADevicesResponse;
    };
    sdk: {
      input: ListVirtualMFADevicesCommandInput;
      output: ListVirtualMFADevicesCommandOutput;
    };
  };
}

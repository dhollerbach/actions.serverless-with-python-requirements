import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListMFADevicesRequest,
  ListMFADevicesResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListMFADevicesCommandInput extends ListMFADevicesRequest {}
export interface ListMFADevicesCommandOutput
  extends ListMFADevicesResponse,
    __MetadataBearer {}
declare const ListMFADevicesCommand_base: {
  new (
    input: ListMFADevicesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListMFADevicesCommandInput,
    ListMFADevicesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListMFADevicesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListMFADevicesCommandInput,
    ListMFADevicesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListMFADevicesCommand extends ListMFADevicesCommand_base {
  protected static __types: {
    api: {
      input: ListMFADevicesRequest;
      output: ListMFADevicesResponse;
    };
    sdk: {
      input: ListMFADevicesCommandInput;
      output: ListMFADevicesCommandOutput;
    };
  };
}

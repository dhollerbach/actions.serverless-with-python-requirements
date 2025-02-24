import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListMFADeviceTagsRequest,
  ListMFADeviceTagsResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListMFADeviceTagsCommandInput
  extends ListMFADeviceTagsRequest {}
export interface ListMFADeviceTagsCommandOutput
  extends ListMFADeviceTagsResponse,
    __MetadataBearer {}
declare const ListMFADeviceTagsCommand_base: {
  new (
    input: ListMFADeviceTagsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListMFADeviceTagsCommandInput,
    ListMFADeviceTagsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: ListMFADeviceTagsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListMFADeviceTagsCommandInput,
    ListMFADeviceTagsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListMFADeviceTagsCommand extends ListMFADeviceTagsCommand_base {
  protected static __types: {
    api: {
      input: ListMFADeviceTagsRequest;
      output: ListMFADeviceTagsResponse;
    };
    sdk: {
      input: ListMFADeviceTagsCommandInput;
      output: ListMFADeviceTagsCommandOutput;
    };
  };
}

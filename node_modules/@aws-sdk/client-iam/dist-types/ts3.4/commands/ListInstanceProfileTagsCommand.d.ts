import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListInstanceProfileTagsRequest,
  ListInstanceProfileTagsResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListInstanceProfileTagsCommandInput
  extends ListInstanceProfileTagsRequest {}
export interface ListInstanceProfileTagsCommandOutput
  extends ListInstanceProfileTagsResponse,
    __MetadataBearer {}
declare const ListInstanceProfileTagsCommand_base: {
  new (
    input: ListInstanceProfileTagsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListInstanceProfileTagsCommandInput,
    ListInstanceProfileTagsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: ListInstanceProfileTagsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListInstanceProfileTagsCommandInput,
    ListInstanceProfileTagsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListInstanceProfileTagsCommand extends ListInstanceProfileTagsCommand_base {
  protected static __types: {
    api: {
      input: ListInstanceProfileTagsRequest;
      output: ListInstanceProfileTagsResponse;
    };
    sdk: {
      input: ListInstanceProfileTagsCommandInput;
      output: ListInstanceProfileTagsCommandOutput;
    };
  };
}

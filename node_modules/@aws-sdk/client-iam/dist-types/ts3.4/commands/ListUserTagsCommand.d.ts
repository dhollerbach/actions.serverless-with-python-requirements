import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { ListUserTagsRequest, ListUserTagsResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListUserTagsCommandInput extends ListUserTagsRequest {}
export interface ListUserTagsCommandOutput
  extends ListUserTagsResponse,
    __MetadataBearer {}
declare const ListUserTagsCommand_base: {
  new (
    input: ListUserTagsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListUserTagsCommandInput,
    ListUserTagsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: ListUserTagsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListUserTagsCommandInput,
    ListUserTagsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListUserTagsCommand extends ListUserTagsCommand_base {
  protected static __types: {
    api: {
      input: ListUserTagsRequest;
      output: ListUserTagsResponse;
    };
    sdk: {
      input: ListUserTagsCommandInput;
      output: ListUserTagsCommandOutput;
    };
  };
}

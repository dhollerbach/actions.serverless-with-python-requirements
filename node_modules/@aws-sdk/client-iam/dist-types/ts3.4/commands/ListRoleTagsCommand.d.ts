import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { ListRoleTagsRequest, ListRoleTagsResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListRoleTagsCommandInput extends ListRoleTagsRequest {}
export interface ListRoleTagsCommandOutput
  extends ListRoleTagsResponse,
    __MetadataBearer {}
declare const ListRoleTagsCommand_base: {
  new (
    input: ListRoleTagsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListRoleTagsCommandInput,
    ListRoleTagsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: ListRoleTagsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListRoleTagsCommandInput,
    ListRoleTagsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListRoleTagsCommand extends ListRoleTagsCommand_base {
  protected static __types: {
    api: {
      input: ListRoleTagsRequest;
      output: ListRoleTagsResponse;
    };
    sdk: {
      input: ListRoleTagsCommandInput;
      output: ListRoleTagsCommandOutput;
    };
  };
}

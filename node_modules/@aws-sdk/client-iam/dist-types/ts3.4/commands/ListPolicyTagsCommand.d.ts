import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListPolicyTagsRequest,
  ListPolicyTagsResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListPolicyTagsCommandInput extends ListPolicyTagsRequest {}
export interface ListPolicyTagsCommandOutput
  extends ListPolicyTagsResponse,
    __MetadataBearer {}
declare const ListPolicyTagsCommand_base: {
  new (
    input: ListPolicyTagsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListPolicyTagsCommandInput,
    ListPolicyTagsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: ListPolicyTagsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListPolicyTagsCommandInput,
    ListPolicyTagsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListPolicyTagsCommand extends ListPolicyTagsCommand_base {
  protected static __types: {
    api: {
      input: ListPolicyTagsRequest;
      output: ListPolicyTagsResponse;
    };
    sdk: {
      input: ListPolicyTagsCommandInput;
      output: ListPolicyTagsCommandOutput;
    };
  };
}

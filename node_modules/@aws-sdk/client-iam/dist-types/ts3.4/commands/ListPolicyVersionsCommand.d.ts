import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListPolicyVersionsRequest,
  ListPolicyVersionsResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListPolicyVersionsCommandInput
  extends ListPolicyVersionsRequest {}
export interface ListPolicyVersionsCommandOutput
  extends ListPolicyVersionsResponse,
    __MetadataBearer {}
declare const ListPolicyVersionsCommand_base: {
  new (
    input: ListPolicyVersionsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListPolicyVersionsCommandInput,
    ListPolicyVersionsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: ListPolicyVersionsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListPolicyVersionsCommandInput,
    ListPolicyVersionsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListPolicyVersionsCommand extends ListPolicyVersionsCommand_base {
  protected static __types: {
    api: {
      input: ListPolicyVersionsRequest;
      output: ListPolicyVersionsResponse;
    };
    sdk: {
      input: ListPolicyVersionsCommandInput;
      output: ListPolicyVersionsCommandOutput;
    };
  };
}

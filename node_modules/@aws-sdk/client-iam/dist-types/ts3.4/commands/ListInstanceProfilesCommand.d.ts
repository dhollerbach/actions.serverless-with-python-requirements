import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListInstanceProfilesRequest,
  ListInstanceProfilesResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListInstanceProfilesCommandInput
  extends ListInstanceProfilesRequest {}
export interface ListInstanceProfilesCommandOutput
  extends ListInstanceProfilesResponse,
    __MetadataBearer {}
declare const ListInstanceProfilesCommand_base: {
  new (
    input: ListInstanceProfilesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListInstanceProfilesCommandInput,
    ListInstanceProfilesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListInstanceProfilesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListInstanceProfilesCommandInput,
    ListInstanceProfilesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListInstanceProfilesCommand extends ListInstanceProfilesCommand_base {
  protected static __types: {
    api: {
      input: ListInstanceProfilesRequest;
      output: ListInstanceProfilesResponse;
    };
    sdk: {
      input: ListInstanceProfilesCommandInput;
      output: ListInstanceProfilesCommandOutput;
    };
  };
}

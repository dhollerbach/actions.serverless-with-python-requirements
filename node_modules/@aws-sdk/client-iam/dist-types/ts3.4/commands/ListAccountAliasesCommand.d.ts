import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListAccountAliasesRequest,
  ListAccountAliasesResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListAccountAliasesCommandInput
  extends ListAccountAliasesRequest {}
export interface ListAccountAliasesCommandOutput
  extends ListAccountAliasesResponse,
    __MetadataBearer {}
declare const ListAccountAliasesCommand_base: {
  new (
    input: ListAccountAliasesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListAccountAliasesCommandInput,
    ListAccountAliasesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListAccountAliasesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListAccountAliasesCommandInput,
    ListAccountAliasesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListAccountAliasesCommand extends ListAccountAliasesCommand_base {
  protected static __types: {
    api: {
      input: ListAccountAliasesRequest;
      output: ListAccountAliasesResponse;
    };
    sdk: {
      input: ListAccountAliasesCommandInput;
      output: ListAccountAliasesCommandOutput;
    };
  };
}

import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { ListRolesRequest, ListRolesResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListRolesCommandInput extends ListRolesRequest {}
export interface ListRolesCommandOutput
  extends ListRolesResponse,
    __MetadataBearer {}
declare const ListRolesCommand_base: {
  new (
    input: ListRolesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListRolesCommandInput,
    ListRolesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListRolesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListRolesCommandInput,
    ListRolesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListRolesCommand extends ListRolesCommand_base {
  protected static __types: {
    api: {
      input: ListRolesRequest;
      output: ListRolesResponse;
    };
    sdk: {
      input: ListRolesCommandInput;
      output: ListRolesCommandOutput;
    };
  };
}

import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListInstanceProfilesForRoleRequest,
  ListInstanceProfilesForRoleResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListInstanceProfilesForRoleCommandInput
  extends ListInstanceProfilesForRoleRequest {}
export interface ListInstanceProfilesForRoleCommandOutput
  extends ListInstanceProfilesForRoleResponse,
    __MetadataBearer {}
declare const ListInstanceProfilesForRoleCommand_base: {
  new (
    input: ListInstanceProfilesForRoleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListInstanceProfilesForRoleCommandInput,
    ListInstanceProfilesForRoleCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: ListInstanceProfilesForRoleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListInstanceProfilesForRoleCommandInput,
    ListInstanceProfilesForRoleCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListInstanceProfilesForRoleCommand extends ListInstanceProfilesForRoleCommand_base {
  protected static __types: {
    api: {
      input: ListInstanceProfilesForRoleRequest;
      output: ListInstanceProfilesForRoleResponse;
    };
    sdk: {
      input: ListInstanceProfilesForRoleCommandInput;
      output: ListInstanceProfilesForRoleCommandOutput;
    };
  };
}

import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListRolePoliciesRequest,
  ListRolePoliciesResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListRolePoliciesCommandInput extends ListRolePoliciesRequest {}
export interface ListRolePoliciesCommandOutput
  extends ListRolePoliciesResponse,
    __MetadataBearer {}
declare const ListRolePoliciesCommand_base: {
  new (
    input: ListRolePoliciesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListRolePoliciesCommandInput,
    ListRolePoliciesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: ListRolePoliciesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListRolePoliciesCommandInput,
    ListRolePoliciesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListRolePoliciesCommand extends ListRolePoliciesCommand_base {
  protected static __types: {
    api: {
      input: ListRolePoliciesRequest;
      output: ListRolePoliciesResponse;
    };
    sdk: {
      input: ListRolePoliciesCommandInput;
      output: ListRolePoliciesCommandOutput;
    };
  };
}

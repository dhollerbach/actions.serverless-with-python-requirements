import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListAttachedRolePoliciesRequest,
  ListAttachedRolePoliciesResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListAttachedRolePoliciesCommandInput
  extends ListAttachedRolePoliciesRequest {}
export interface ListAttachedRolePoliciesCommandOutput
  extends ListAttachedRolePoliciesResponse,
    __MetadataBearer {}
declare const ListAttachedRolePoliciesCommand_base: {
  new (
    input: ListAttachedRolePoliciesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListAttachedRolePoliciesCommandInput,
    ListAttachedRolePoliciesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: ListAttachedRolePoliciesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListAttachedRolePoliciesCommandInput,
    ListAttachedRolePoliciesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListAttachedRolePoliciesCommand extends ListAttachedRolePoliciesCommand_base {
  protected static __types: {
    api: {
      input: ListAttachedRolePoliciesRequest;
      output: ListAttachedRolePoliciesResponse;
    };
    sdk: {
      input: ListAttachedRolePoliciesCommandInput;
      output: ListAttachedRolePoliciesCommandOutput;
    };
  };
}

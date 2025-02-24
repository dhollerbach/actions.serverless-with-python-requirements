import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListAttachedUserPoliciesRequest,
  ListAttachedUserPoliciesResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListAttachedUserPoliciesCommandInput
  extends ListAttachedUserPoliciesRequest {}
export interface ListAttachedUserPoliciesCommandOutput
  extends ListAttachedUserPoliciesResponse,
    __MetadataBearer {}
declare const ListAttachedUserPoliciesCommand_base: {
  new (
    input: ListAttachedUserPoliciesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListAttachedUserPoliciesCommandInput,
    ListAttachedUserPoliciesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: ListAttachedUserPoliciesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListAttachedUserPoliciesCommandInput,
    ListAttachedUserPoliciesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListAttachedUserPoliciesCommand extends ListAttachedUserPoliciesCommand_base {
  protected static __types: {
    api: {
      input: ListAttachedUserPoliciesRequest;
      output: ListAttachedUserPoliciesResponse;
    };
    sdk: {
      input: ListAttachedUserPoliciesCommandInput;
      output: ListAttachedUserPoliciesCommandOutput;
    };
  };
}
